import assert from "node:assert/strict";
import { createHash, createSecretKey } from "node:crypto";
import { readFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { DatabaseSync } from "node:sqlite";
import test, { type TestContext } from "node:test";
import { AeadPhrasePayload } from "../crypto/payload.js";
import { applyMigrations, openDatastore } from "../datastore/index.js";
import { EnvelopeRepository } from "../envelope/repository.js";
import { EnvelopeCommandService, type EnvelopeCommand, type PhrasePayloadPort } from "../envelope/service.js";
import { StructuredLogger } from "../logging/structured.js";
import {
  ModerationRepository,
  type AppendModerationAudit,
  type InsertDisposition,
  type ModerationOccurrence,
  type ModerationStore
} from "./repository.js";
import {
  ModerationService,
  type ModerationCommand,
  type ParticipantPrincipal,
  type StewardPrincipal
} from "./service.js";

const CLOSE = "2026-07-21T00:00:00.000Z";
const ACTION = "2026-07-20T12:00:00.000Z";
const RULES_DIGEST = `sha256:${"a".repeat(64)}`;
const STEWARD: StewardPrincipal = Object.freeze({
  authenticated: true,
  role: "moderator",
  stewardRef: "steward:invented_alpha"
});
const PARTICIPANT: ParticipantPrincipal = Object.freeze({
  authenticated: true,
  role: "participant",
  envelopeId: "envelope-invented"
});
const PHRASES = Object.freeze([
  "INVENTED: carry a small light.",
  "INVENTED: remember the patient river.",
  "INVENTED: ask what became possible."
]);

interface Harness {
  readonly database: DatabaseSync;
  readonly service: ModerationService;
  readonly occurrenceIds: readonly string[];
}

async function createHarness(context: TestContext): Promise<Harness> {
  const directory = await mkdtemp(join(tmpdir(), "resonant-capsule-moderation-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  const database = openDatastore(join(directory, "capsule.sqlite"));
  context.after(() => database.close());
  applyMigrations(database);
  database.prepare(
    "INSERT INTO cohorts (cohort_id, state, close_epoch, close_at_utc, created_at_utc) VALUES (?, 'open', 1, ?, ?)"
  ).run("cohort-invented", CLOSE, "2026-07-17T00:00:00.000Z");
  database.prepare(
    "INSERT INTO rules_versions (cohort_id, rules_digest, version_no, canonical_rules_json, created_at_utc) VALUES (?, ?, 1, ?, ?)"
  ).run("cohort-invented", RULES_DIGEST, '{"invented":true}', "2026-07-17T00:00:00.000Z");
  database.prepare(
    "INSERT INTO envelopes (envelope_id, cohort_id, created_at_utc) VALUES (?, ?, ?)"
  ).run("envelope-invented", "cohort-invented", "2026-07-17T00:00:00.000Z");

  const payload = new AeadPhrasePayload(createSecretKey(
    createHash("sha256").update("invented moderation data key").digest()
  ));
  let id = 0;
  const envelopeService = new EnvelopeCommandService(new EnvelopeRepository(database), {
    payload,
    newId: (prefix) => `${prefix}-invented-${++id}`
  });
  const fixture = JSON.parse(
    readFileSync(new URL("../../../fixtures/envelope-v1.json", import.meta.url), "utf8")
  ) as { base_envelope: { slots: Array<{ phrase: string }> } };
  const envelope = structuredClone(fixture.base_envelope);
  for (const slot of envelope.slots) slot.phrase = "";
  PHRASES.forEach((phrase, index) => { envelope.slots[index]!.phrase = phrase; });
  const command: EnvelopeCommand = {
    authenticatedScope: "session:invented-alpha",
    sessionScope: "session:invented-alpha",
    envelopeId: "envelope-invented",
    expectedRulesDigest: RULES_DIGEST,
    expectedEnvelopeVersion: null,
    expectedCloseEpoch: 1,
    idempotencyKey: "command-invented-moderation-1",
    serverCommitInstantUtc: "2026-07-20T10:00:00.000Z",
    envelope
  };
  const result = envelopeService.execute(command);
  assert.equal(result.classification, "commit");
  if (result.classification !== "commit") throw new Error("invented fixture did not commit");
  const occurrenceIds = result.receipt.slots
    .map((slot) => slot.occurrenceId)
    .filter((value): value is string => value !== null);
  assert.equal(occurrenceIds.length, PHRASES.length);

  const service = new ModerationService(new ModerationRepository(database), {
    payload,
    newId: (prefix) => `${prefix}-invented-${++id}`
  });
  return { database, service, occurrenceIds: Object.freeze(occurrenceIds) };
}

function moderationCommand(
  occurrenceId: string,
  overrides: Partial<ModerationCommand> = {}
): ModerationCommand {
  return {
    principal: STEWARD,
    occurrenceId,
    expectedEnvelopeVersion: 1,
    disposition: "accepted",
    reasonCode: "within_policy",
    actionInstantUtc: ACTION,
    ...overrides
  };
}

class ExplodingStore implements ModerationStore {
  transaction<T>(_operation: () => T): T { throw new Error("store must not be reached"); }
  findOccurrence(_occurrenceId: string): ModerationOccurrence | undefined { throw new Error("store must not be reached"); }
  listPending(_limit: number): readonly ModerationOccurrence[] { throw new Error("store must not be reached"); }
  insertDisposition(_input: InsertDisposition): void { throw new Error("store must not be reached"); }
  appendAudit(_input: AppendModerationAudit): void { throw new Error("store must not be reached"); }
}

const EXPLODING_PAYLOAD: PhrasePayloadPort = {
  protect: () => { throw new Error("payload must not be reached"); },
  reveal: () => { throw new Error("payload must not be reached"); }
};

test("moderation: rejects absent authority before store or payload lookup", () => {
  const service = new ModerationService(new ExplodingStore(), { payload: EXPLODING_PAYLOAD });
  assert.deepEqual(service.listPending(null, ACTION), {
    classification: "rejected",
    mutated: false,
    errorCode: "moderator_unauthorized"
  });
  assert.deepEqual(service.decide(moderationCommand("unknown", { principal: null })), {
    classification: "rejected",
    mutated: false,
    errorCode: "moderator_unauthorized"
  });
  const nonModerator = {
    authenticated: true,
    role: "participant",
    stewardRef: "steward:invented_impostor"
  } as unknown as StewardPrincipal;
  assert.equal(service.listPending(nonModerator, ACTION).classification, "rejected");
  assert.equal(
    service.decide(moderationCommand("unknown", { principal: nonModerator })).classification,
    "rejected"
  );
  assert.deepEqual(service.participantStatus(null, "unknown"), {
    classification: "rejected",
    mutated: false,
    errorCode: "participant_unauthorized"
  });
});

test("moderation: authorized queue is private pending plaintext and never a public projection", async (context) => {
  const { database, service } = await createHarness(context);
  const queue = service.listPending(STEWARD, ACTION);
  assert.equal(queue.classification, "authorized");
  if (queue.classification !== "authorized") return;
  assert.equal(queue.items.length, 3);
  assert.deepEqual(queue.items.map((item) => item.phrase), PHRASES);
  for (const item of queue.items) {
    assert.equal(item.scope, "steward_private");
    assert(!("public" in item));
  }

  database.prepare("UPDATE cohorts SET state = 'closing' WHERE cohort_id = ?").run("cohort-invented");
  const closedQueue = service.listPending(STEWARD, ACTION);
  assert.equal(closedQueue.classification, "authorized");
  if (closedQueue.classification === "authorized") assert.equal(closedQueue.items.length, 0);
});

test("moderation: accepted and rejected decisions are final, scoped, and close-eligible only when accepted", async (context) => {
  const { database, service, occurrenceIds } = await createHarness(context);
  const acceptedId = occurrenceIds[0]!;
  const rejectedId = occurrenceIds[1]!;
  const pendingId = occurrenceIds[2]!;

  const accepted = service.decide(moderationCommand(acceptedId));
  assert.equal(accepted.classification, "commit");
  const rejected = service.decide(moderationCommand(rejectedId, {
    disposition: "rejected",
    reasonCode: "personal_data"
  }));
  assert.equal(rejected.classification, "commit");

  assert.equal(service.closingEligibility(acceptedId), "eligible_accepted");
  assert.equal(service.closingEligibility(rejectedId), "ineligible_rejected");
  assert.equal(service.closingEligibility(pendingId), "ineligible_pending");
  assert.equal(service.closingEligibility("occurrence-missing"), "missing");

  const acceptedStatus = service.participantStatus(PARTICIPANT, acceptedId);
  assert.deepEqual(acceptedStatus, {
    classification: "authorized",
    occurrenceId: acceptedId,
    status: "accepted",
    reasonCode: "within_policy"
  });
  const rejectedStatus = service.participantStatus(PARTICIPANT, rejectedId);
  assert.equal(rejectedStatus.classification, "authorized");
  if (rejectedStatus.classification === "authorized") {
    assert.equal(rejectedStatus.status, "rejected");
    assert.equal(rejectedStatus.reasonCode, "personal_data");
    assert(!("phrase" in rejectedStatus));
  }
  assert.equal(service.participantStatus({ ...PARTICIPANT, envelopeId: "another-envelope" }, acceptedId).classification, "rejected");

  assert.deepEqual(service.decide(moderationCommand(acceptedId)), {
    classification: "conflict",
    mutated: false,
    errorCode: "moderation_already_decided"
  });
  assert.deepEqual(service.decide(moderationCommand(acceptedId, {
    disposition: "rejected",
    reasonCode: "spam"
  })), {
    classification: "conflict",
    mutated: false,
    errorCode: "moderation_disposition_conflict"
  });
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM moderation_dispositions").get() as { count: number }).count,
    2
  );
});

test("moderation: exact version, bounded reasons, open state, and close fence fail without mutation", async (context) => {
  const { database, service, occurrenceIds } = await createHarness(context);
  const occurrenceId = occurrenceIds[0]!;
  const cases: Array<{ command: ModerationCommand; errorCode: string }> = [
    { command: moderationCommand(occurrenceId, { expectedEnvelopeVersion: 2 }), errorCode: "occurrence_version_mismatch" },
    { command: moderationCommand(occurrenceId, { disposition: "accepted", reasonCode: "spam" }), errorCode: "invalid_request" },
    { command: moderationCommand(occurrenceId, { actionInstantUtc: CLOSE }), errorCode: "close_fence_reached" }
  ];
  for (const candidate of cases) {
    const result = service.decide(candidate.command);
    assert.notEqual(result.classification, "commit");
    if (result.classification !== "commit") assert.equal(result.errorCode, candidate.errorCode);
  }
  database.prepare("UPDATE cohorts SET state = 'closed' WHERE cohort_id = ?").run("cohort-invented");
  const closed = service.decide(moderationCommand(occurrenceId));
  assert.equal(closed.classification, "rejected");
  if (closed.classification === "rejected") assert.equal(closed.errorCode, "cohort_not_open");
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM moderation_dispositions").get() as { count: number }).count,
    0
  );
});

test("moderation: audit failure rolls back disposition", async (context) => {
  const { database, service, occurrenceIds } = await createHarness(context);
  database.exec(`
    CREATE TRIGGER invented_fail_moderation_audit
    BEFORE INSERT ON audit_events
    WHEN NEW.event_type = 'moderation_disposition_recorded'
    BEGIN
      SELECT RAISE(ABORT, 'invented audit failure');
    END;
  `);
  assert.throws(() => service.decide(moderationCommand(occurrenceIds[0]!)), /invented audit failure/);
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM moderation_dispositions").get() as { count: number }).count,
    0
  );
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM audit_events WHERE event_type = 'moderation_disposition_recorded'").get() as { count: number }).count,
    0
  );
});

test("moderation: audit and structured logs contain no phrase or steward reference", async (context) => {
  const { database, service, occurrenceIds } = await createHarness(context);
  const queue = service.listPending(STEWARD, ACTION);
  assert.equal(queue.classification, "authorized");
  const result = service.decide(moderationCommand(occurrenceIds[0]!));
  assert.equal(result.classification, "commit");

  const audit = database.prepare(`
    SELECT pseudoref, reason_code, facts_json
    FROM audit_events
    WHERE event_type = 'moderation_disposition_recorded'
  `).get() as { pseudoref: string; reason_code: string; facts_json: string };
  const auditText = JSON.stringify(audit);
  for (const phrase of PHRASES) assert(!auditText.includes(phrase));
  assert(!auditText.includes(STEWARD.stewardRef));
  assert.equal(audit.reason_code, "within_policy");

  const lines: string[] = [];
  const logger = new StructuredLogger((line) => lines.push(line), () => new Date(ACTION));
  logger.log("request_completed", {
    routeId: "moderation",
    method: "POST",
    status: 201,
    queue,
    stewardRef: STEWARD.stewardRef,
    body: PHRASES
  });
  assert.equal(lines.length, 1);
  for (const phrase of PHRASES) assert(!lines[0]!.includes(phrase));
  assert(!lines[0]!.includes(STEWARD.stewardRef));
  assert.deepEqual(JSON.parse(lines[0]!), {
    timestamp: ACTION,
    event: "request_completed",
    routeId: "moderation",
    method: "POST",
    status: 201
  });
});
