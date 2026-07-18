import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { DatabaseSync } from "node:sqlite";
import test, { type TestContext } from "node:test";
import { applyMigrations, openDatastore } from "../datastore/index.js";
import { EnvelopeRepository, type OccurrenceRecord } from "./repository.js";
import {
  EnvelopeCommandService,
  type EnvelopeCommand,
  type PhraseAad,
  type PhrasePayloadPort,
  type ProtectedPhrase
} from "./service.js";
import { EnvelopeValidationError, normalizePhrase, validateEnvelope } from "./validation.js";

const RULES_DIGEST = `sha256:${"a".repeat(64)}`;
const CLOSE = "2026-07-21T00:00:00.000Z";
const COMMIT = "2026-07-20T12:00:00.000Z";
const SESSION_SCOPE = "session:invented-alpha";

const phraseFixtures = JSON.parse(
  readFileSync(new URL("../../../fixtures/phrase-profile-v1.json", import.meta.url), "utf8")
) as { vectors: Array<Record<string, any>> };
const envelopeFixtures = JSON.parse(
  readFileSync(new URL("../../../fixtures/envelope-v1.json", import.meta.url), "utf8")
) as { base_envelope: Record<string, any>; vectors: Array<Record<string, any>> };

class InventedOpaquePayload implements PhrasePayloadPort {
  readonly label = "invented-test-payload-not-encryption";
  private counter = 0;

  protect(phrase: string, _aad: PhraseAad): ProtectedPhrase {
    this.counter += 1;
    return Object.freeze({
      phraseCiphertext: Buffer.from(`INVENTED-NOT-ENCRYPTED:${phrase}`, "utf8"),
      phraseAeadNonce: Buffer.alloc(12, this.counter),
      commitmentNonce: Buffer.alloc(32, this.counter)
    });
  }

  reveal(record: OccurrenceRecord, _aad: PhraseAad): string {
    const value = record.phraseCiphertext.toString("utf8");
    const prefix = "INVENTED-NOT-ENCRYPTED:";
    if (!value.startsWith(prefix)) throw new TypeError("invented payload marker missing");
    return value.slice(prefix.length);
  }
}

interface Harness {
  readonly path: string;
  readonly database: DatabaseSync;
  readonly payload: InventedOpaquePayload;
  readonly service: EnvelopeCommandService;
}

async function createHarness(
  context: TestContext,
  options: { newId?: (prefix: string) => string } = {}
): Promise<Harness> {
  const directory = await mkdtemp(join(tmpdir(), "resonant-capsule-envelope-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  const path = join(directory, "capsule.sqlite");
  const database = openDatastore(path);
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

  let id = 0;
  const payload = new InventedOpaquePayload();
  const service = new EnvelopeCommandService(new EnvelopeRepository(database), {
    payload,
    newId: options.newId ?? ((prefix) => `${prefix}-invented-${++id}`)
  });
  return { path, database, payload, service };
}

function baseEnvelope(): Record<string, any> {
  return structuredClone(envelopeFixtures.base_envelope);
}

function command(overrides: Partial<EnvelopeCommand> = {}): EnvelopeCommand {
  return {
    authenticatedScope: SESSION_SCOPE,
    sessionScope: SESSION_SCOPE,
    envelopeId: "envelope-invented",
    expectedRulesDigest: RULES_DIGEST,
    expectedEnvelopeVersion: null,
    expectedCloseEpoch: 1,
    idempotencyKey: "command-invented-1",
    serverCommitInstantUtc: COMMIT,
    envelope: baseEnvelope(),
    ...overrides
  };
}

function setPhrase(
  envelope: Record<string, any>,
  horizonYears: number,
  position: number,
  phrase: unknown
): void {
  const slot = envelope.slots.find(
    (candidate: Record<string, any>) =>
      candidate.horizon_years === horizonYears && candidate.position === position
  );
  assert(slot);
  slot.phrase = phrase;
}

function applyEnvelopeMutations(base: Record<string, any>, mutations: Array<Record<string, any>>): Record<string, any> {
  const envelope = structuredClone(base);
  for (const mutation of mutations) {
    switch (mutation.op) {
      case "set_phrase":
        setPhrase(envelope, mutation.horizon_years, mutation.position, mutation.value);
        break;
      case "set_phrase_repeat":
        setPhrase(envelope, mutation.horizon_years, mutation.position, String(mutation.value).repeat(mutation.count));
        break;
      case "set_envelope_field":
        envelope[mutation.field] = mutation.value;
        break;
      case "set_profile_field":
        envelope.phrase_profile[mutation.field] = mutation.value;
        break;
      case "set_slot_field":
        envelope.slots[mutation.index][mutation.field] = mutation.value;
        break;
      case "delete_slot_field":
        delete envelope.slots[mutation.index][mutation.field];
        break;
      case "remove_slot":
        envelope.slots.splice(mutation.index, 1);
        break;
      case "append_slot":
        envelope.slots.push(structuredClone(mutation.slot));
        break;
      case "swap_slots": {
        const first = envelope.slots[mutation.first];
        envelope.slots[mutation.first] = envelope.slots[mutation.second];
        envelope.slots[mutation.second] = first;
        break;
      }
      default:
        throw new TypeError(`unknown envelope mutation ${mutation.op}`);
    }
  }
  return envelope;
}

test("envelope-commands: phrase profile matches all 20 frozen vectors", () => {
  for (const vector of phraseFixtures.vectors) {
    const input = vector.input_repeat
      ? String(vector.input_repeat.value).repeat(vector.input_repeat.count)
      : vector.input;
    if (vector.expected.valid) {
      const actual = normalizePhrase(input);
      const expectedNormalized = vector.expected.normalized_repeat
        ? String(vector.expected.normalized_repeat.value).repeat(vector.expected.normalized_repeat.count)
        : vector.expected.normalized;
      assert.equal(actual.normalized, expectedNormalized, vector.id);
      assert.equal(actual.graphemes, vector.expected.graphemes, vector.id);
    } else {
      assert.throws(
        () => normalizePhrase(input),
        (error: unknown) => error instanceof EnvelopeValidationError && error.code === vector.expected.error_code,
        vector.id
      );
    }
  }
});

test("envelope-commands: envelope validator matches all 26 frozen vectors", () => {
  for (const vector of envelopeFixtures.vectors) {
    const envelope = applyEnvelopeMutations(envelopeFixtures.base_envelope, vector.mutations);
    if (vector.expected.valid) {
      const actual = validateEnvelope(envelope);
      assert.equal(actual.slots.filter((slot) => slot.phrase).length, vector.expected.nonempty_phrases, vector.id);
    } else {
      assert.throws(
        () => validateEnvelope(envelope),
        (error: unknown) => error instanceof EnvelopeValidationError && error.code === vector.expected.error_code,
        vector.id
      );
    }
  }
});

test("envelope-commands: confirm edit and slot withdrawal preserve immutable occurrence semantics", async (context) => {
  const { database, service } = await createHarness(context);
  const initialCommand = command();
  const initial = service.execute(initialCommand);
  assert.equal(initial.classification, "commit");
  if (initial.classification !== "commit") return;
  const initialId = initial.receipt.slots[0]!.occurrenceId;
  assert(initialId);
  assert.equal(initial.receipt.envelopeVersion, 1);

  const replay = service.execute(initialCommand);
  assert.equal(replay.classification, "replay");
  if (replay.classification === "replay") assert.deepEqual(replay.receipt, initial.receipt);

  const addSecondEnvelope = baseEnvelope();
  setPhrase(addSecondEnvelope, 2, 2, "meet me here again");
  const addSecond = service.execute(command({
    expectedEnvelopeVersion: 1,
    idempotencyKey: "command-invented-2",
    envelope: addSecondEnvelope
  }));
  assert.equal(addSecond.classification, "commit");
  if (addSecond.classification !== "commit") return;
  assert.equal(addSecond.receipt.slots[0]!.occurrenceId, initialId);
  const secondId = addSecond.receipt.slots[1]!.occurrenceId;
  assert(secondId);
  assert.notEqual(secondId, initialId);

  const withdrawSecond = service.execute(command({
    expectedEnvelopeVersion: 2,
    idempotencyKey: "command-invented-3"
  }));
  assert.equal(withdrawSecond.classification, "commit");
  if (withdrawSecond.classification !== "commit") return;
  assert.equal(withdrawSecond.receipt.slots[0]!.occurrenceId, initialId);
  assert.equal(withdrawSecond.receipt.slots[1]!.occurrenceId, null);

  const changedEnvelope = baseEnvelope();
  setPhrase(changedEnvelope, 2, 1, "keep changing");
  const changed = service.execute(command({
    expectedEnvelopeVersion: 3,
    idempotencyKey: "command-invented-4",
    envelope: changedEnvelope
  }));
  assert.equal(changed.classification, "commit");
  if (changed.classification !== "commit") return;
  assert.notEqual(changed.receipt.slots[0]!.occurrenceId, initialId);

  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM envelope_versions").get() as { count: number }).count,
    4
  );
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM message_occurrences").get() as { count: number }).count,
    3
  );
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM idempotency_results").get() as { count: number }).count,
    4
  );
  const privateReceipts = JSON.stringify(
    database.prepare("SELECT result_json FROM idempotency_results").all()
  );
  const audit = JSON.stringify(database.prepare("SELECT facts_json FROM audit_events").all());
  for (const phrase of ["keep becoming", "meet me here again", "keep changing"]) {
    assert.equal(privateReceipts.includes(phrase), false);
    assert.equal(audit.includes(phrase), false);
  }
});

test("envelope-commands: frozen precedence returns typed failures without mutation", async (context) => {
  await context.test("unauthenticated scope", async (child) => {
    const { database, service } = await createHarness(child);
    assert.deepEqual(service.execute(command({ authenticatedScope: null })), {
      classification: "rejected",
      mutated: false,
      errorCode: "scope_unauthenticated"
    });
    assert.equal((database.prepare("SELECT count(*) AS count FROM envelope_versions").get() as { count: number }).count, 0);
  });

  await context.test("scope before rules", async (child) => {
    const { database, service } = await createHarness(child);
    const result = service.execute(command({
      authenticatedScope: "session:other",
      expectedRulesDigest: `sha256:${"d".repeat(64)}`
    }));
    assert.deepEqual(result, { classification: "rejected", mutated: false, errorCode: "scope_mismatch" });
    assert.equal((database.prepare("SELECT count(*) AS count FROM envelope_versions").get() as { count: number }).count, 0);
  });

  await context.test("rules before close", async (child) => {
    const { database, service } = await createHarness(child);
    database.prepare("UPDATE cohorts SET state = 'closed'").run();
    const result = service.execute(command({ expectedRulesDigest: `sha256:${"d".repeat(64)}` }));
    assert.deepEqual(result, { classification: "conflict", mutated: false, errorCode: "rules_digest_mismatch" });
  });

  await context.test("close and epoch before replay", async (child) => {
    const { database, service } = await createHarness(child);
    const firstCommand = command();
    assert.equal(service.execute(firstCommand).classification, "commit");
    database.prepare("UPDATE cohorts SET close_epoch = 2").run();
    assert.deepEqual(service.execute(firstCommand), {
      classification: "conflict",
      mutated: false,
      errorCode: "close_epoch_mismatch"
    });
    database.prepare("UPDATE cohorts SET state = 'closed'").run();
    assert.deepEqual(service.execute(command({ expectedCloseEpoch: 2 })), {
      classification: "rejected",
      mutated: false,
      errorCode: "close_state_not_open"
    });
  });

  await context.test("fence invalid instant and stale version", async (child) => {
    const { service } = await createHarness(child);
    assert.deepEqual(service.execute(command({ serverCommitInstantUtc: CLOSE })), {
      classification: "rejected",
      mutated: false,
      errorCode: "close_fence_reached"
    });
    assert.deepEqual(service.execute(command({ serverCommitInstantUtc: "2026-07-21T00:00:00.001Z" })), {
      classification: "rejected",
      mutated: false,
      errorCode: "close_fence_reached"
    });
    assert.deepEqual(service.execute(command({ serverCommitInstantUtc: "not-a-time" })), {
      classification: "rejected",
      mutated: false,
      errorCode: "invalid_command"
    });
    assert.deepEqual(service.execute(command({ expectedEnvelopeVersion: 1 })), {
      classification: "conflict",
      mutated: false,
      errorCode: "envelope_version_mismatch"
    });
  });

  await context.test("idempotency before version", async (child) => {
    const { service } = await createHarness(child);
    const first = command();
    assert.equal(service.execute(first).classification, "commit");
    const changed = baseEnvelope();
    setPhrase(changed, 2, 1, "different command");
    assert.deepEqual(service.execute(command({ envelope: changed })), {
      classification: "conflict",
      mutated: false,
      errorCode: "idempotency_key_reused"
    });
  });

  await context.test("existing version cannot expect null", async (child) => {
    const { service } = await createHarness(child);
    assert.equal(service.execute(command()).classification, "commit");
    assert.deepEqual(service.execute(command({ idempotencyKey: "command-invented-2" })), {
      classification: "conflict",
      mutated: false,
      errorCode: "envelope_version_mismatch"
    });
  });

  await context.test("same key in another session scope does not collide", async (child) => {
    const { service } = await createHarness(child);
    assert.equal(service.execute(command()).classification, "commit");
    const second = service.execute(command({
      authenticatedScope: "session:invented-other",
      sessionScope: "session:invented-other",
      expectedEnvelopeVersion: 1
    }));
    assert.equal(second.classification, "commit");
    if (second.classification === "commit") assert.equal(second.receipt.envelopeVersion, 2);
  });

  await context.test("invalid full envelope", async (child) => {
    const { service } = await createHarness(child);
    const empty = baseEnvelope();
    setPhrase(empty, 2, 1, "");
    assert.deepEqual(service.execute(command({ envelope: empty })), {
      classification: "rejected",
      mutated: false,
      errorCode: "invalid_command"
    });
  });
});

test("envelope-commands: two writers with the same expected version produce one commit", async (context) => {
  const firstHarness = await createHarness(context);
  const secondDatabase = openDatastore(firstHarness.path);
  context.after(() => secondDatabase.close());
  applyMigrations(secondDatabase);
  let id = 100;
  const secondService = new EnvelopeCommandService(new EnvelopeRepository(secondDatabase), {
    payload: new InventedOpaquePayload(),
    newId: (prefix) => `${prefix}-invented-${++id}`
  });

  const first = firstHarness.service.execute(command({ idempotencyKey: "writer-one" }));
  const second = secondService.execute(command({ idempotencyKey: "writer-two" }));
  assert.equal(first.classification, "commit");
  assert.deepEqual(second, {
    classification: "conflict",
    mutated: false,
    errorCode: "envelope_version_mismatch"
  });
  assert.equal(
    (firstHarness.database.prepare("SELECT count(*) AS count FROM envelope_versions").get() as { count: number }).count,
    1
  );
  assert.equal(
    (firstHarness.database.prepare("SELECT count(*) AS count FROM idempotency_results").get() as { count: number }).count,
    1
  );
});

test("envelope-commands: mid-commit occurrence conflict rolls back every row", async (context) => {
  const { database, service } = await createHarness(context, {
    newId: (prefix) => (prefix === "occurrence" ? "occurrence-collision" : "audit-invented")
  });
  const twoPhrases = baseEnvelope();
  setPhrase(twoPhrases, 2, 2, "second invented phrase");

  assert.throws(() => service.execute(command({ envelope: twoPhrases })), /UNIQUE constraint failed/);
  for (const table of ["envelope_versions", "message_occurrences", "idempotency_results", "audit_events"]) {
    const count = (database.prepare(`SELECT count(*) AS count FROM ${table}`).get() as { count: number }).count;
    assert.equal(count, 0, table);
  }
});
