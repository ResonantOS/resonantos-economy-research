import assert from "node:assert/strict";
import { copyFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { DatabaseSync } from "node:sqlite";
import test, { type TestContext } from "node:test";
import {
  applyMigrations,
  loadMigrations,
  MigrationError,
  openDatastore,
  type MigrationFile
} from "./index.js";

const NOW = "2026-07-17T00:00:00.000Z";
const LATER = "2028-07-17T00:00:00.000Z";

async function databasePath(context: TestContext): Promise<string> {
  const directory = await mkdtemp(join(tmpdir(), "resonant-capsule-migrations-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  return join(directory, "capsule.sqlite");
}

function insertBaseRecords(database: DatabaseSync): void {
  database.prepare(
    "INSERT INTO cohorts (cohort_id, state, close_epoch, close_at_utc, created_at_utc) VALUES (?, ?, ?, ?, ?)"
  ).run("cohort-invented", "open", 1, LATER, NOW);
  database.prepare(
    "INSERT INTO rules_versions (cohort_id, rules_digest, version_no, canonical_rules_json, created_at_utc) VALUES (?, ?, ?, ?, ?)"
  ).run("cohort-invented", "rules-invented-v1", 1, '{"invented":true}', NOW);
  database.prepare(
    "INSERT INTO envelopes (envelope_id, cohort_id, created_at_utc) VALUES (?, ?, ?)"
  ).run("envelope-invented", "cohort-invented", NOW);
}

function insertVersion(database: DatabaseSync): void {
  database.prepare(
    "INSERT INTO envelope_versions (envelope_id, cohort_id, version_no, rules_digest, close_epoch, command_digest, created_at_utc) VALUES (?, ?, ?, ?, ?, ?, ?)"
  ).run(
    "envelope-invented",
    "cohort-invented",
    1,
    "rules-invented-v1",
    1,
    "command-invented-v1",
    NOW
  );
}

function insertOccurrence(database: DatabaseSync): void {
  database.prepare(`
    INSERT INTO message_occurrences (
      occurrence_id, envelope_id, version_no, horizon_years, position, visibility,
      phrase_ciphertext, phrase_aead_nonce, commitment_nonce, created_at_utc
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    "occurrence-invented",
    "envelope-invented",
    1,
    2,
    1,
    "public_at_opening",
    Buffer.from("invented-ciphertext"),
    Buffer.from("invented-aead-nonce"),
    Buffer.from("invented-commitment-nonce"),
    NOW
  );
}

test("migrations: empty database reaches latest exactly once with required pragmas", async (context) => {
  const path = await databasePath(context);
  const database = openDatastore(path);
  context.after(() => database.close());

  const first = applyMigrations(database);
  const second = applyMigrations(database);

  assert.deepEqual(first.applied, ["0001_initial_intake.sql"]);
  assert.deepEqual(first.current, ["0001_initial_intake.sql"]);
  assert.deepEqual(second.applied, []);
  assert.deepEqual(second.current, first.current);

  const foreignKeys = database.prepare("PRAGMA foreign_keys").get() as { foreign_keys: number };
  const journal = database.prepare("PRAGMA journal_mode").get() as { journal_mode: string };
  const busyTimeout = database.prepare("PRAGMA busy_timeout").get() as { timeout: number };
  assert.equal(foreignKeys.foreign_keys, 1);
  assert.equal(journal.journal_mode, "wal");
  assert.equal(busyTimeout.timeout, 5000);

  const tables = database
    .prepare("SELECT name FROM sqlite_schema WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name")
    .all()
    .map((row) => (row as { name: string }).name);
  assert.deepEqual(tables, [
    "audit_events",
    "cohorts",
    "envelope_versions",
    "envelopes",
    "idempotency_results",
    "invite_bindings",
    "message_occurrences",
    "moderation_dispositions",
    "rules_versions",
    "schema_migrations",
    "sessions"
  ]);
});

test("migrations: foreign keys and one-active-invite binding fail closed", async (context) => {
  const path = await databasePath(context);
  const database = openDatastore(path);
  context.after(() => database.close());
  applyMigrations(database);

  assert.throws(() => {
    database.prepare(
      "INSERT INTO envelopes (envelope_id, cohort_id, created_at_utc) VALUES (?, ?, ?)"
    ).run("orphan-envelope", "missing-cohort", NOW);
  }, /FOREIGN KEY constraint failed/);

  insertBaseRecords(database);
  const insertInvite = database.prepare(`
    INSERT INTO invite_bindings (
      invite_id, cohort_id, envelope_id, credential_digest, status, issued_at_utc, revoked_at_utc
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  database.prepare(
    "INSERT INTO cohorts (cohort_id, state, close_epoch, close_at_utc, created_at_utc) VALUES (?, ?, ?, ?, ?)"
  ).run("cohort-other-invented", "open", 1, LATER, NOW);
  assert.throws(() => {
    insertInvite.run(
      "invite-mismatched-cohort",
      "cohort-other-invented",
      "envelope-invented",
      "c".repeat(64),
      "active",
      NOW,
      null
    );
  }, /FOREIGN KEY constraint failed/);
  insertInvite.run(
    "invite-invented-1",
    "cohort-invented",
    "envelope-invented",
    "a".repeat(64),
    "active",
    NOW,
    null
  );

  assert.throws(() => {
    insertInvite.run(
      "invite-invented-2",
      "cohort-invented",
      "envelope-invented",
      "b".repeat(64),
      "active",
      NOW,
      null
    );
  }, /UNIQUE constraint failed/);

  database.prepare(
    "UPDATE invite_bindings SET status = 'revoked', revoked_at_utc = ? WHERE invite_id = ?"
  ).run(NOW, "invite-invented-1");
  insertInvite.run(
    "invite-invented-2",
    "cohort-invented",
    "envelope-invented",
    "b".repeat(64),
    "active",
    NOW,
    null
  );
  assert.equal(
    (database.prepare("SELECT count(*) AS count FROM invite_bindings").get() as { count: number }).count,
    2
  );
});

test("migrations: versions, slots, and scoped idempotency are unique and immutable", async (context) => {
  const path = await databasePath(context);
  const database = openDatastore(path);
  context.after(() => database.close());
  applyMigrations(database);
  insertBaseRecords(database);
  assert.throws(() => {
    database.prepare(
      "INSERT INTO envelope_versions (envelope_id, cohort_id, version_no, rules_digest, close_epoch, command_digest, created_at_utc) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).run(
      "envelope-invented",
      "cohort-invented",
      1,
      "missing-rules-digest",
      1,
      "command-invalid-rules",
      NOW
    );
  }, /FOREIGN KEY constraint failed/);
  insertVersion(database);
  insertOccurrence(database);

  assert.throws(() => insertVersion(database), /UNIQUE constraint failed/);
  assert.throws(
    () => database.prepare("UPDATE envelope_versions SET close_epoch = 2").run(),
    /envelope_versions are immutable/
  );
  assert.throws(
    () => database.prepare("DELETE FROM envelope_versions").run(),
    /envelope_versions are immutable/
  );

  assert.throws(() => {
    database.prepare(`
      INSERT INTO message_occurrences (
        occurrence_id, envelope_id, version_no, horizon_years, position, visibility,
        phrase_ciphertext, phrase_aead_nonce, commitment_nonce, created_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      "occurrence-duplicate-slot",
      "envelope-invented",
      1,
      2,
      1,
      "public_at_opening",
      Buffer.from("invented-ciphertext-2"),
      Buffer.from("invented-aead-nonce-2"),
      Buffer.from("invented-commitment-nonce-2"),
      NOW
    );
  }, /UNIQUE constraint failed/);
  assert.throws(
    () => database.prepare("UPDATE message_occurrences SET position = 2").run(),
    /message_occurrences are immutable/
  );

  const insertIdempotency = database.prepare(`
    INSERT INTO idempotency_results (
      session_scope, operation, idempotency_key, command_digest, result_json,
      envelope_id, committed_version_no, created_at_utc
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  insertIdempotency.run(
    "session-scope-invented",
    "confirm",
    "key-invented",
    "command-invented-v1",
    '{"version":1}',
    "envelope-invented",
    1,
    NOW
  );
  assert.throws(() => {
    insertIdempotency.run(
      "session-scope-invented",
      "confirm",
      "key-invented",
      "command-changed",
      '{"version":1}',
      "envelope-invented",
      1,
      NOW
    );
  }, /UNIQUE constraint failed/);
  insertIdempotency.run(
    "session-scope-invented",
    "withdraw",
    "key-invented",
    "command-invented-withdraw",
    '{"version":1}',
    "envelope-invented",
    1,
    NOW
  );
  assert.throws(
    () => database.prepare("UPDATE idempotency_results SET result_json = '{}'").run(),
    /idempotency_results are immutable/
  );
});

test("migrations: moderation and audit decisions are append-only", async (context) => {
  const path = await databasePath(context);
  const database = openDatastore(path);
  context.after(() => database.close());
  applyMigrations(database);
  insertBaseRecords(database);
  insertVersion(database);
  insertOccurrence(database);

  database.prepare(`
    INSERT INTO moderation_dispositions (
      disposition_id, occurrence_id, disposition, reason_code, steward_ref, created_at_utc
    ) VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    "disposition-invented",
    "occurrence-invented",
    "accepted",
    "invented-ok",
    "steward-invented",
    NOW
  );
  assert.throws(
    () => database.prepare("UPDATE moderation_dispositions SET disposition = 'rejected'").run(),
    /moderation_dispositions are append-only/
  );
  assert.throws(
    () => database.prepare("DELETE FROM moderation_dispositions").run(),
    /moderation_dispositions are append-only/
  );

  database.prepare(`
    INSERT INTO audit_events (
      event_id, entity_type, pseudoref, event_type, reason_code, facts_json, created_at_utc
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    "audit-invented",
    "envelope",
    "pseudoref-invented",
    "version_confirmed",
    null,
    '{"version":1}',
    NOW
  );
  assert.throws(
    () => database.prepare("UPDATE audit_events SET event_type = 'changed'").run(),
    /audit_events are append-only/
  );
  assert.throws(
    () => database.prepare("DELETE FROM audit_events").run(),
    /audit_events are append-only/
  );
});

test("migrations: checkpointed cold copy reopens at latest without drift", async (context) => {
  const path = await databasePath(context);
  const restoredPath = `${path}.restored`;
  const database = openDatastore(path);
  applyMigrations(database);
  insertBaseRecords(database);
  database.exec("PRAGMA wal_checkpoint(TRUNCATE)");
  database.close();

  await copyFile(path, restoredPath);
  const restored = openDatastore(restoredPath);
  context.after(() => restored.close());
  const result = applyMigrations(restored);

  assert.deepEqual(result.applied, []);
  assert.deepEqual(result.current, ["0001_initial_intake.sql"]);
  assert.equal(
    (restored.prepare("PRAGMA integrity_check").get() as { integrity_check: string }).integrity_check,
    "ok"
  );
  assert.equal(
    (restored.prepare("SELECT count(*) AS count FROM cohorts").get() as { count: number }).count,
    1
  );
});

test("migrations: changed or missing applied migration fails closed", async (context) => {
  const path = await databasePath(context);
  const database = openDatastore(path);
  context.after(() => database.close());
  applyMigrations(database);
  const [migration] = loadMigrations();
  assert(migration);

  const changed: MigrationFile = {
    ...migration,
    checksum: "0".repeat(64)
  };
  assert.throws(
    () => applyMigrations(database, [changed]),
    (error: unknown) =>
      error instanceof MigrationError &&
      error.code === "MIGRATION_INVALID" &&
      error.message === "migration checksum drift: 0001_initial_intake.sql"
  );
  assert.throws(
    () => applyMigrations(database, []),
    (error: unknown) =>
      error instanceof MigrationError &&
      error.message === "applied migration is missing from disk: 0001_initial_intake.sql"
  );
});
