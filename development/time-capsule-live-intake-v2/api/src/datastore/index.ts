import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";

const MIGRATION_DIRECTORY = new URL("../../migrations/", import.meta.url);
const MIGRATION_NAME = /^\d{4}_[a-z0-9_]+\.sql$/;

export interface MigrationFile {
  readonly id: string;
  readonly checksum: string;
  readonly sql: string;
}

export interface MigrationResult {
  readonly applied: readonly string[];
  readonly current: readonly string[];
}

export class MigrationError extends Error {
  readonly code = "MIGRATION_INVALID";

  constructor(message: string) {
    super(message);
    this.name = "MigrationError";
  }
}

export function openDatastore(path: string): DatabaseSync {
  const database = new DatabaseSync(path);
  database.exec("PRAGMA foreign_keys = ON");
  database.exec("PRAGMA journal_mode = WAL");
  database.exec("PRAGMA busy_timeout = 5000");
  return database;
}

export function loadMigrations(): readonly MigrationFile[] {
  return Object.freeze(
    readdirSync(MIGRATION_DIRECTORY, { withFileTypes: true })
      .filter((entry) => entry.isFile() && MIGRATION_NAME.test(entry.name))
      .map((entry) => {
        const sql = readFileSync(new URL(entry.name, MIGRATION_DIRECTORY), "utf8");
        return Object.freeze({
          id: entry.name,
          checksum: createHash("sha256").update(sql).digest("hex"),
          sql
        });
      })
      .sort((left, right) => left.id.localeCompare(right.id))
  );
}

function ensureMigrationRegistry(database: DatabaseSync): void {
  database.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      migration_id TEXT PRIMARY KEY,
      checksum TEXT NOT NULL CHECK (length(checksum) = 64),
      applied_at_utc TEXT NOT NULL
    )
  `);
}

export function applyMigrations(
  database: DatabaseSync,
  migrations: readonly MigrationFile[] = loadMigrations()
): MigrationResult {
  ensureMigrationRegistry(database);

  const knownIds = new Set(migrations.map((migration) => migration.id));
  if (knownIds.size !== migrations.length) {
    throw new MigrationError("migration ids must be unique");
  }

  const existing = database
    .prepare("SELECT migration_id, checksum FROM schema_migrations ORDER BY migration_id")
    .all() as Array<{ migration_id: string; checksum: string }>;

  for (const row of existing) {
    const migration = migrations.find((candidate) => candidate.id === row.migration_id);
    if (!migration) {
      throw new MigrationError(`applied migration is missing from disk: ${row.migration_id}`);
    }
    if (migration.checksum !== row.checksum) {
      throw new MigrationError(`migration checksum drift: ${row.migration_id}`);
    }
  }

  const applied: string[] = [];
  const insert = database.prepare(
    "INSERT INTO schema_migrations (migration_id, checksum, applied_at_utc) VALUES (?, ?, ?)"
  );

  for (const migration of migrations) {
    const prior = existing.find((row) => row.migration_id === migration.id);
    if (prior) continue;

    database.exec("BEGIN IMMEDIATE");
    try {
      database.exec(migration.sql);
      insert.run(migration.id, migration.checksum, new Date().toISOString());
      database.exec("COMMIT");
      applied.push(migration.id);
    } catch (error) {
      database.exec("ROLLBACK");
      throw error;
    }
  }

  const current = database
    .prepare("SELECT migration_id FROM schema_migrations ORDER BY migration_id")
    .all()
    .map((row) => (row as { migration_id: string }).migration_id);

  return Object.freeze({ applied: Object.freeze(applied), current: Object.freeze(current) });
}
