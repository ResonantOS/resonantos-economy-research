import assert from "node:assert/strict";
import { createHash, createSecretKey } from "node:crypto";
import { copyFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test, { type TestContext } from "node:test";
import { applyMigrations, openDatastore } from "../datastore/index.js";
import { EnvelopeRepository, type OccurrenceRecord } from "../envelope/repository.js";
import {
  EnvelopeCommandService,
  type EnvelopeCommand,
  type PhraseAad,
  type ProtectedPhrase
} from "../envelope/service.js";
import { StructuredLogger } from "../logging/structured.js";
import { DATA_KEY_ENV_NAME, loadDataKey, SecretLoadError } from "./key.js";
import { AeadPhrasePayload, PayloadProtectionError, PHRASE_PAYLOAD_PROFILE } from "./payload.js";

const AAD: PhraseAad = Object.freeze({
  cohortId: "cohort-invented",
  envelopeId: "envelope-invented",
  versionNo: 1,
  horizonYears: 2,
  position: 1,
  purpose: "entrusted_phrase"
});
const PHRASE = "INVENTED: return with wonder.";

function occurrence(payload: ProtectedPhrase): OccurrenceRecord {
  return Object.freeze({
    occurrenceId: "occurrence-invented",
    envelopeId: AAD.envelopeId,
    versionNo: AAD.versionNo,
    horizonYears: AAD.horizonYears,
    position: AAD.position,
    ...payload
  });
}

function queuedRandom(values: readonly Buffer[]): (size: number) => Buffer {
  let index = 0;
  return (size) => {
    const value = values[index++];
    assert(value, `missing invented random value at ${index - 1}`);
    assert.equal(value.length, size);
    return Buffer.from(value);
  };
}

function assertSanitizedFailure(operation: () => unknown): void {
  assert.throws(operation, (error: unknown) => {
    assert(error instanceof PayloadProtectionError);
    assert.equal(error.code, "PAYLOAD_PROTECTION_FAILED");
    assert.equal(error.message, "phrase payload protection failed");
    assert(!error.message.includes(PHRASE));
    assert(!("cause" in error));
    return true;
  });
}

test("crypto-redaction: pinned AES-256-GCM profile has a stable known-answer vector", () => {
  const key = createSecretKey(Buffer.alloc(32, 0x11));
  const payload = new AeadPhrasePayload(key, queuedRandom([
    Buffer.alloc(12, 0x22),
    Buffer.alloc(32, 0x33)
  ])).protect(PHRASE, AAD);

  assert.deepEqual(PHRASE_PAYLOAD_PROFILE, {
    implementation: "node:crypto",
    algorithm: "aes-256-gcm",
    keyBits: 256,
    nonceBytes: 12,
    tagBytes: 16,
    formatVersion: 1,
    aadEncoding: "fixed-order-json-utf8"
  });
  assert.equal(payload.phraseAeadNonce.toString("hex"), "22".repeat(12));
  assert.equal(payload.commitmentNonce.toString("hex"), "33".repeat(32));
  assert.equal(
    payload.phraseCiphertext.toString("hex"),
    "015eb9510c8e9bda1bdf1fac593cd39bbb3fe4a49602a1db243c2b6f9a27621d3b688969be33856d297944eb3c20"
  );
  assert.equal(new AeadPhrasePayload(key).reveal(occurrence(payload), AAD), PHRASE);
});

test("crypto-redaction: identical phrases receive independent nonces and ciphertext", () => {
  const key = createSecretKey(Buffer.alloc(32, 0x44));
  const adapter = new AeadPhrasePayload(key, queuedRandom([
    Buffer.alloc(12, 0x01), Buffer.alloc(32, 0x02),
    Buffer.alloc(12, 0x03), Buffer.alloc(32, 0x04)
  ]));
  const first = adapter.protect(PHRASE, AAD);
  const second = adapter.protect(PHRASE, AAD);
  assert.notDeepEqual(first.phraseAeadNonce, second.phraseAeadNonce);
  assert.notDeepEqual(first.commitmentNonce, second.commitmentNonce);
  assert.notDeepEqual(first.phraseCiphertext, second.phraseCiphertext);
  assert.equal(adapter.reveal(occurrence(first), AAD), PHRASE);
  assert.equal(adapter.reveal(occurrence(second), AAD), PHRASE);
});

test("crypto-redaction: wrong key AAD nonce format ciphertext and tag all fail identically", () => {
  const key = createSecretKey(Buffer.alloc(32, 0x55));
  const adapter = new AeadPhrasePayload(key, queuedRandom([
    Buffer.alloc(12, 0x06), Buffer.alloc(32, 0x07)
  ]));
  const protectedPhrase = adapter.protect(PHRASE, AAD);

  const wrongKey = new AeadPhrasePayload(createSecretKey(Buffer.alloc(32, 0x56)));
  assertSanitizedFailure(() => wrongKey.reveal(occurrence(protectedPhrase), AAD));
  assertSanitizedFailure(() => adapter.reveal(occurrence(protectedPhrase), { ...AAD, versionNo: 2 }));

  const shortNonce = occurrence({ ...protectedPhrase, phraseAeadNonce: Buffer.alloc(11) });
  assertSanitizedFailure(() => adapter.reveal(shortNonce, AAD));

  const badFormat = Buffer.from(protectedPhrase.phraseCiphertext);
  badFormat[0] = 2;
  assertSanitizedFailure(() => adapter.reveal(occurrence({ ...protectedPhrase, phraseCiphertext: badFormat }), AAD));

  const badCiphertext = Buffer.from(protectedPhrase.phraseCiphertext);
  badCiphertext[1] = badCiphertext[1]! ^ 1;
  assertSanitizedFailure(() => adapter.reveal(occurrence({ ...protectedPhrase, phraseCiphertext: badCiphertext }), AAD));

  const badTag = Buffer.from(protectedPhrase.phraseCiphertext);
  badTag[badTag.length - 1] = badTag[badTag.length - 1]! ^ 1;
  assertSanitizedFailure(() => adapter.reveal(occurrence({ ...protectedPhrase, phraseCiphertext: badTag }), AAD));
});

test("crypto-redaction: key loader accepts only canonical base64url for exactly 32 bytes", () => {
  const raw = createHash("sha256").update("invented loader key").digest();
  const canonical = raw.toString("base64url");
  assert.equal(loadDataKey({ [DATA_KEY_ENV_NAME]: canonical }).symmetricKeySize, 32);

  const invalid = [undefined, "", canonical + "=", Buffer.alloc(31, 1).toString("base64url"), "not/a/key"];
  for (const candidate of invalid) {
    assert.throws(() => loadDataKey({ [DATA_KEY_ENV_NAME]: candidate }), (error: unknown) => {
      assert(error instanceof SecretLoadError);
      assert(["DATA_KEY_MISSING", "DATA_KEY_INVALID"].includes(error.code));
      if (candidate) assert(!error.message.includes(candidate));
      return true;
    });
  }
});

test("crypto-redaction: structured logger emits only fixed operational metadata", () => {
  const lines: string[] = [];
  const logger = new StructuredLogger(
    (line) => lines.push(line),
    () => new Date("2026-07-17T00:00:00.000Z")
  );
  logger.log("request_completed", {
    requestId: "req_0123456789abcdef0123456789abcdef",
    routeId: "envelope_command",
    method: "POST",
    status: 201,
    durationMs: 12.5
  });
  assert.deepEqual(JSON.parse(lines[0]!), {
    timestamp: "2026-07-17T00:00:00.000Z",
    event: "request_completed",
    requestId: "req_0123456789abcdef0123456789abcdef",
    routeId: "envelope_command",
    method: "POST",
    status: 201,
    durationMs: 12.5
  });

  const needles = [
    PHRASE,
    "INVENTED_INVITE_SECRET_NEEDLE",
    "INVENTED_SESSION_COOKIE_NEEDLE",
    "INVENTED_CIPHERTEXT_NEEDLE",
    "INVENTED_NONCE_NEEDLE",
    "INVENTED_RECEIPT_NEEDLE",
    "INVENTED_STACK_NEEDLE"
  ];
  logger.log(needles[0], {
    requestId: needles[1],
    routeId: needles[2],
    method: needles[3],
    errorCode: needles[4],
    body: needles,
    headers: { authorization: needles[1], cookie: needles[2] },
    phrasePlaintext: needles[0],
    phraseCiphertext: needles[3],
    phraseAeadNonce: needles[4],
    receipt: needles[5],
    error: { message: needles[0], stack: needles[6] },
    nested: { arbitrary: needles }
  });
  const rendered = lines[1]!;
  assert.deepEqual(JSON.parse(rendered), {
    timestamp: "2026-07-17T00:00:00.000Z",
    event: "unknown",
    routeId: "unknown"
  });
  for (const needle of needles) assert(!rendered.includes(needle));
});

async function seedEnvelope(context: TestContext): Promise<{
  path: string;
  database: ReturnType<typeof openDatastore>;
}> {
  const directory = await mkdtemp(join(tmpdir(), "resonant-capsule-aead-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  const path = join(directory, "capsule.sqlite");
  const database = openDatastore(path);
  context.after(() => database.close());
  applyMigrations(database);
  database.prepare(
    "INSERT INTO cohorts (cohort_id, state, close_epoch, close_at_utc, created_at_utc) VALUES (?, 'open', 1, ?, ?)"
  ).run("cohort-invented", "2026-07-21T00:00:00.000Z", "2026-07-17T00:00:00.000Z");
  database.prepare(
    "INSERT INTO rules_versions (cohort_id, rules_digest, version_no, canonical_rules_json, created_at_utc) VALUES (?, ?, 1, ?, ?)"
  ).run("cohort-invented", `sha256:${"a".repeat(64)}`, '{"invented":true}', "2026-07-17T00:00:00.000Z");
  database.prepare(
    "INSERT INTO envelopes (envelope_id, cohort_id, created_at_utc) VALUES (?, ?, ?)"
  ).run("envelope-invented", "cohort-invented", "2026-07-17T00:00:00.000Z");
  return { path, database };
}

test("crypto-redaction: real envelope integration excludes plaintext and key from persisted artifacts", async (context) => {
  const { path, database } = await seedEnvelope(context);
  const rawKey = createHash("sha256").update("invented integration key").digest();
  const payload = new AeadPhrasePayload(createSecretKey(rawKey));
  const fixture = JSON.parse(
    readFileSync(new URL("../../../fixtures/envelope-v1.json", import.meta.url), "utf8")
  ) as { base_envelope: { slots: Array<{ phrase: string }> } };
  const envelope = structuredClone(fixture.base_envelope);
  for (const slot of envelope.slots) slot.phrase = "";
  envelope.slots[0]!.phrase = PHRASE;

  let id = 0;
  const service = new EnvelopeCommandService(new EnvelopeRepository(database), {
    payload,
    newId: (prefix) => `${prefix}-invented-${++id}`
  });
  const command: EnvelopeCommand = {
    authenticatedScope: "session:invented-alpha",
    sessionScope: "session:invented-alpha",
    envelopeId: "envelope-invented",
    expectedRulesDigest: `sha256:${"a".repeat(64)}`,
    expectedEnvelopeVersion: null,
    expectedCloseEpoch: 1,
    idempotencyKey: "command-invented-aead-1",
    serverCommitInstantUtc: "2026-07-20T12:00:00.000Z",
    envelope
  };
  const result = service.execute(command);
  assert.equal(result.classification, "commit");
  if (result.classification !== "commit") return;

  const occurrenceId = result.receipt.slots[0]!.occurrenceId;
  assert(occurrenceId);
  const repository = new EnvelopeRepository(database);
  const stored = repository.findOccurrence(occurrenceId);
  assert(stored);
  assert.equal(payload.reveal(stored, AAD), PHRASE);
  assert(!stored.phraseCiphertext.includes(Buffer.from(PHRASE)));

  const receiptJson = JSON.stringify(result.receipt);
  const auditJson = String((database.prepare("SELECT facts_json FROM audit_events LIMIT 1").get() as { facts_json: string }).facts_json);
  for (const rendered of [receiptJson, auditJson]) {
    assert(!rendered.includes(PHRASE));
    assert(!rendered.includes(rawKey.toString("base64url")));
    assert(!rendered.includes(rawKey.toString("hex")));
  }

  database.exec("PRAGMA wal_checkpoint(TRUNCATE)");
  const directory = join(path, "..");
  copyFileSync(path, join(directory, "capsule.backup.sqlite"));
  const persisted = Buffer.concat(
    readdirSync(directory)
      .filter((name) => name.startsWith("capsule.sqlite"))
      .map((name) => readFileSync(join(directory, name)))
  );
  assert(!persisted.includes(Buffer.from(PHRASE, "utf8")));
  assert(!persisted.includes(rawKey));
  assert(!persisted.includes(Buffer.from(rawKey.toString("base64url"), "utf8")));
  assert(!persisted.includes(Buffer.from(rawKey.toString("hex"), "utf8")));
});

test("crypto-redaction: runtime sources contain no data-key default or package env file", () => {
  const sourceUrls = [new URL("./key.ts", import.meta.url), new URL("./payload.ts", import.meta.url)];
  for (const url of sourceUrls) {
    const source = readFileSync(url, "utf8");
    assert(!/TIME_CAPSULE_DATA_KEY_B64URL\s*=\s*["'][A-Za-z0-9_-]{20,}/.test(source));
  }
  assert.equal(existsSync(new URL("../../.env", import.meta.url)), false);
});
