import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { DatabaseSync } from "node:sqlite";
import test, { type TestContext } from "node:test";
import { applyMigrations, openDatastore } from "../datastore/index.js";
import { digestInviteSecret, type RandomSource } from "./crypto.js";
import { consumeInviteFragment } from "./fragment.js";
import { AdmissionRepository } from "./repository.js";
import { InviteSessionService, SESSION_COOKIE_NAME } from "./service.js";

const ORIGIN = "https://time-capsule.invalid";
const NOW = new Date("2026-07-17T12:00:00.000Z");
const CLOSE = "2026-07-21T00:00:00.000Z";
const INVITE_SECRET = "I".repeat(43);
const NEXT_INVITE_SECRET = "R".repeat(43);

interface Harness {
  readonly database: DatabaseSync;
  readonly service: InviteSessionService;
  readonly randomTokens: readonly string[];
}

function deterministicRandom(): { source: RandomSource; tokens: readonly string[] } {
  const tokens = ["S".repeat(43), "C".repeat(43), "T".repeat(43), "D".repeat(43)];
  let tokenIndex = 0;
  let idIndex = 0;
  return {
    tokens,
    source: {
      token: () => tokens[tokenIndex++] ?? "Z".repeat(43),
      id: (prefix: string) => `${prefix}-invented-${++idIndex}`
    }
  };
}

async function createHarness(context: TestContext): Promise<Harness> {
  const directory = await mkdtemp(join(tmpdir(), "resonant-capsule-admission-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  const database = openDatastore(join(directory, "capsule.sqlite"));
  context.after(() => database.close());
  applyMigrations(database);

  database.prepare(
    "INSERT INTO cohorts (cohort_id, state, close_epoch, close_at_utc, created_at_utc) VALUES (?, 'open', 1, ?, ?)"
  ).run("cohort-invented", CLOSE, NOW.toISOString());
  database.prepare(
    "INSERT INTO envelopes (envelope_id, cohort_id, created_at_utc) VALUES (?, ?, ?)"
  ).run("envelope-invented", "cohort-invented", NOW.toISOString());
  database.prepare(`
    INSERT INTO invite_bindings (
      invite_id, cohort_id, envelope_id, credential_digest, status, issued_at_utc, revoked_at_utc
    ) VALUES (?, ?, ?, ?, 'active', ?, NULL)
  `).run(
    "invite-invented",
    "cohort-invented",
    "envelope-invented",
    digestInviteSecret(INVITE_SECRET),
    NOW.toISOString()
  );

  const random = deterministicRandom();
  const service = new InviteSessionService(new AdmissionRepository(database), {
    allowedOrigin: ORIGIN,
    sessionTtlSeconds: 900,
    random: random.source
  });
  return { database, service, randomTokens: random.tokens };
}

function cookieHeader(setCookie: string): string {
  return setCookie.split(";", 1)[0] ?? "";
}

test("invite-session: fragment is consumed and removed before exchange", () => {
  const raw = `${ORIGIN}/contribute/#invite=${INVITE_SECRET}`;
  const result = consumeInviteFragment(raw);

  assert.equal(result.inviteSecret, INVITE_SECRET);
  assert.equal(result.sanitizedUrl, `${ORIGIN}/contribute/`);
  assert.equal(result.sanitizedUrl.includes(INVITE_SECRET), false);
  assert.equal(result.sanitizedUrl.includes("#"), false);
});

test("invite-session: exchange stores digests only and binds cookie plus csrf", async (context) => {
  const { database, service, randomTokens } = await createHarness(context);
  const result = service.exchange(
    { origin: ORIGIN, body: { inviteSecret: INVITE_SECRET, ignoredReferrer: INVITE_SECRET } },
    NOW
  );
  assert.equal(result.ok, true);
  if (!result.ok) return;

  assert.match(result.setCookie, new RegExp(`^${SESSION_COOKIE_NAME}=`));
  for (const flag of ["Path=/api", "Max-Age=900", "Secure", "HttpOnly", "SameSite=Strict"]) {
    assert.equal(result.setCookie.includes(flag), true);
  }
  assert.equal(result.body.csrfToken, randomTokens[1]);
  assert.equal(result.body.envelopeId, "envelope-invented");

  const persisted = JSON.stringify({
    invites: database.prepare("SELECT * FROM invite_bindings").all(),
    sessions: database.prepare("SELECT * FROM sessions").all(),
    audit: database.prepare("SELECT * FROM audit_events").all()
  });
  for (const secret of [INVITE_SECRET, randomTokens[0]!, randomTokens[1]!]) {
    assert.equal(persisted.includes(secret), false);
  }

  const authorized = service.authorize({
    origin: ORIGIN,
    cookieHeader: cookieHeader(result.setCookie),
    csrfToken: result.body.csrfToken,
    now: NOW
  });
  assert.deepEqual(authorized, {
    ok: true,
    cohortId: "cohort-invented",
    envelopeId: "envelope-invented"
  });

  const wrongCsrf = service.authorize({
    origin: ORIGIN,
    cookieHeader: cookieHeader(result.setCookie),
    csrfToken: "W".repeat(43),
    now: NOW
  });
  const wrongOrigin = service.authorize({
    origin: "https://other.invalid",
    cookieHeader: cookieHeader(result.setCookie),
    csrfToken: result.body.csrfToken,
    now: NOW
  });
  const missingCookie = service.authorize({
    origin: ORIGIN,
    cookieHeader: undefined,
    csrfToken: result.body.csrfToken,
    now: NOW
  });
  assert.deepEqual(wrongCsrf, { ok: false, error: "session_unavailable" });
  assert.deepEqual(wrongOrigin, wrongCsrf);
  assert.deepEqual(missingCookie, wrongCsrf);
});

test("invite-session: repeat exchange rotates and invalidates the prior session", async (context) => {
  const { database, service } = await createHarness(context);
  const first = service.exchange({ origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } }, NOW);
  const second = service.exchange(
    { origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } },
    new Date(NOW.getTime() + 1000)
  );
  assert.equal(first.ok, true);
  assert.equal(second.ok, true);
  if (!first.ok || !second.ok) return;

  assert.deepEqual(
    service.authorize({
      origin: ORIGIN,
      cookieHeader: cookieHeader(first.setCookie),
      csrfToken: first.body.csrfToken,
      now: NOW
    }),
    { ok: false, error: "session_unavailable" }
  );
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM sessions WHERE status = 'active'").get() as { count: number }).count,
    1
  );
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM sessions WHERE status = 'revoked'").get() as { count: number }).count,
    1
  );
});

test("invite-session: malformed unknown and revoked invites do not enumerate or reflect", async (context) => {
  const { service } = await createHarness(context);
  const malformedNeedle = "malformed-secret-needle";
  const malformed = service.exchange(
    { origin: ORIGIN, body: { inviteSecret: malformedNeedle } },
    NOW
  );
  const unknown = service.exchange(
    { origin: ORIGIN, body: { inviteSecret: "U".repeat(43) } },
    NOW
  );
  const revoked = service.revoke({
    inviteId: "invite-invented",
    authenticatedStewardRef: "steward-invented",
    now: NOW
  });
  assert.equal(revoked.ok, true);
  const afterRevoke = service.exchange(
    { origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } },
    NOW
  );

  assert.deepEqual(malformed, unknown);
  assert.deepEqual(afterRevoke, unknown);
  assert.equal(JSON.stringify([malformed, unknown, afterRevoke]).includes(malformedNeedle), false);
  assert.equal(JSON.stringify(afterRevoke).includes(INVITE_SECRET), false);
});

test("invite-session: revoke invalidates every active session and appends non-content audit", async (context) => {
  const { database, service } = await createHarness(context);
  const exchange = service.exchange({ origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } }, NOW);
  assert.equal(exchange.ok, true);
  if (!exchange.ok) return;

  const revoked = service.revoke({
    inviteId: "invite-invented",
    authenticatedStewardRef: "steward-invented",
    now: new Date(NOW.getTime() + 1000)
  });
  assert.deepEqual(revoked, {
    ok: true,
    inviteId: "invite-invented",
    envelopeId: "envelope-invented"
  });
  assert.deepEqual(
    service.authorize({
      origin: ORIGIN,
      cookieHeader: cookieHeader(exchange.setCookie),
      csrfToken: exchange.body.csrfToken,
      now: NOW
    }),
    { ok: false, error: "session_unavailable" }
  );

  const persisted = JSON.stringify({
    invites: database.prepare("SELECT status, revoked_at_utc FROM invite_bindings").all(),
    sessions: database.prepare("SELECT status FROM sessions").all(),
    audit: database.prepare("SELECT * FROM audit_events ORDER BY created_at_utc").all()
  });
  assert.equal(persisted.includes(INVITE_SECRET), false);
  assert.equal(persisted.includes("invite_revoked"), true);
  assert.equal(persisted.includes("content_present"), true);
});

test("invite-session: recovery preserves envelope and invalidates old invite and session", async (context) => {
  const { database, service } = await createHarness(context);
  const exchange = service.exchange({ origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } }, NOW);
  assert.equal(exchange.ok, true);
  if (!exchange.ok) return;

  const recovered = service.recover({
    inviteId: "invite-invented",
    newInviteSecret: NEXT_INVITE_SECRET,
    authenticatedStewardRef: "steward-invented",
    now: new Date(NOW.getTime() + 1000)
  });
  assert.equal(recovered.ok, true);
  if (!recovered.ok) return;
  assert.equal(recovered.envelopeId, "envelope-invented");

  const oldResult = service.exchange({ origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } }, NOW);
  const newResult = service.exchange({ origin: ORIGIN, body: { inviteSecret: NEXT_INVITE_SECRET } }, NOW);
  assert.equal(oldResult.ok, false);
  assert.equal(newResult.ok, true);
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM invite_bindings WHERE status = 'active'").get() as { count: number }).count,
    1
  );
  assert.equal(
    (database.prepare("SELECT count(DISTINCT envelope_id) AS count FROM invite_bindings").get() as { count: number }).count,
    1
  );
});

test("invite-session: conflicting recovery rolls back the old active binding", async (context) => {
  const { database, service } = await createHarness(context);
  const conflictSecret = "X".repeat(43);
  database.prepare(
    "INSERT INTO envelopes (envelope_id, cohort_id, created_at_utc) VALUES (?, ?, ?)"
  ).run("envelope-other-invented", "cohort-invented", NOW.toISOString());
  database.prepare(`
    INSERT INTO invite_bindings (
      invite_id, cohort_id, envelope_id, credential_digest, status, issued_at_utc, revoked_at_utc
    ) VALUES (?, ?, ?, ?, 'active', ?, NULL)
  `).run(
    "invite-other-invented",
    "cohort-invented",
    "envelope-other-invented",
    digestInviteSecret(conflictSecret),
    NOW.toISOString()
  );

  const result = service.recover({
    inviteId: "invite-invented",
    newInviteSecret: conflictSecret,
    authenticatedStewardRef: "steward-invented",
    now: NOW
  });
  assert.deepEqual(result, { ok: false, error: "recovery_unavailable" });
  assert.equal(
    (database.prepare("SELECT status FROM invite_bindings WHERE invite_id = ?").get("invite-invented") as { status: string }).status,
    "active"
  );
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM audit_events WHERE event_type = 'invite_recovered'").get() as { count: number }).count,
    0
  );
});

test("invite-session: expired session and closed cohort fail with the same denial", async (context) => {
  const { database, service } = await createHarness(context);
  const exchange = service.exchange({ origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } }, NOW);
  assert.equal(exchange.ok, true);
  if (!exchange.ok) return;

  const expired = service.authorize({
    origin: ORIGIN,
    cookieHeader: cookieHeader(exchange.setCookie),
    csrfToken: exchange.body.csrfToken,
    now: new Date(NOW.getTime() + 901_000)
  });
  database.prepare("UPDATE cohorts SET state = 'closed'").run();
  const closed = service.authorize({
    origin: ORIGIN,
    cookieHeader: cookieHeader(exchange.setCookie),
    csrfToken: exchange.body.csrfToken,
    now: NOW
  });
  const closedExchange = service.exchange(
    { origin: ORIGIN, body: { inviteSecret: INVITE_SECRET } },
    NOW
  );

  assert.deepEqual(expired, { ok: false, error: "session_unavailable" });
  assert.deepEqual(closed, expired);
  assert.deepEqual(closedExchange, {
    ok: false,
    status: 401,
    setCookie: null,
    body: { error: "invite_unavailable" }
  });
});
