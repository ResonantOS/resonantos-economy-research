import type { DatabaseSync } from "node:sqlite";
import type { HorizonYears, SlotPosition } from "./validation.js";

export interface EnvelopeState {
  readonly envelopeId: string;
  readonly cohortId: string;
  readonly closeState: "draft" | "open" | "closing" | "closed";
  readonly closeEpoch: number;
  readonly closeAtUtc: string;
  readonly rulesDigest: string;
  readonly currentVersion: number | null;
}

export interface OccurrenceRecord {
  readonly occurrenceId: string;
  readonly envelopeId: string;
  readonly versionNo: number;
  readonly horizonYears: HorizonYears;
  readonly position: SlotPosition;
  readonly phraseCiphertext: Buffer;
  readonly phraseAeadNonce: Buffer;
  readonly commitmentNonce: Buffer;
}

export interface StoredIdempotency {
  readonly commandDigest: string;
  readonly resultJson: string;
}

export class EnvelopeRepository {
  constructor(private readonly database: DatabaseSync) {}

  transaction<T>(operation: () => T): T {
    this.database.exec("BEGIN IMMEDIATE");
    try {
      const result = operation();
      this.database.exec("COMMIT");
      return result;
    } catch (error) {
      this.database.exec("ROLLBACK");
      throw error;
    }
  }

  getState(envelopeId: string): EnvelopeState | undefined {
    const row = this.database.prepare(`
      SELECT
        e.envelope_id,
        e.cohort_id,
        c.state AS close_state,
        c.close_epoch,
        c.close_at_utc,
        (SELECT rv.rules_digest FROM rules_versions rv
          WHERE rv.cohort_id = e.cohort_id ORDER BY rv.version_no DESC LIMIT 1) AS rules_digest,
        (SELECT max(ev.version_no) FROM envelope_versions ev
          WHERE ev.envelope_id = e.envelope_id) AS current_version
      FROM envelopes e
      JOIN cohorts c ON c.cohort_id = e.cohort_id
      WHERE e.envelope_id = ?
    `).get(envelopeId) as Record<string, unknown> | undefined;
    if (!row || row.rules_digest === null) return undefined;
    return Object.freeze({
      envelopeId: String(row.envelope_id),
      cohortId: String(row.cohort_id),
      closeState: String(row.close_state) as EnvelopeState["closeState"],
      closeEpoch: Number(row.close_epoch),
      closeAtUtc: String(row.close_at_utc),
      rulesDigest: String(row.rules_digest),
      currentVersion: row.current_version === null ? null : Number(row.current_version)
    });
  }

  findIdempotency(sessionScope: string, operation: string, key: string): StoredIdempotency | undefined {
    const row = this.database.prepare(`
      SELECT command_digest, result_json
      FROM idempotency_results
      WHERE session_scope = ? AND operation = ? AND idempotency_key = ?
    `).get(sessionScope, operation, key) as Record<string, unknown> | undefined;
    return row
      ? Object.freeze({ commandDigest: String(row.command_digest), resultJson: String(row.result_json) })
      : undefined;
  }

  findVersionReceipt(envelopeId: string, versionNo: number): string | undefined {
    const row = this.database.prepare(`
      SELECT result_json
      FROM idempotency_results
      WHERE envelope_id = ? AND committed_version_no = ?
      ORDER BY created_at_utc ASC
      LIMIT 1
    `).get(envelopeId, versionNo) as { result_json: string } | undefined;
    return row?.result_json;
  }

  findOccurrence(occurrenceId: string): OccurrenceRecord | undefined {
    const row = this.database.prepare(`
      SELECT
        occurrence_id, envelope_id, version_no, horizon_years, position,
        phrase_ciphertext, phrase_aead_nonce, commitment_nonce
      FROM message_occurrences
      WHERE occurrence_id = ?
    `).get(occurrenceId) as Record<string, unknown> | undefined;
    if (!row) return undefined;
    return Object.freeze({
      occurrenceId: String(row.occurrence_id),
      envelopeId: String(row.envelope_id),
      versionNo: Number(row.version_no),
      horizonYears: Number(row.horizon_years) as HorizonYears,
      position: Number(row.position) as SlotPosition,
      phraseCiphertext: Buffer.from(row.phrase_ciphertext as Uint8Array),
      phraseAeadNonce: Buffer.from(row.phrase_aead_nonce as Uint8Array),
      commitmentNonce: Buffer.from(row.commitment_nonce as Uint8Array)
    });
  }

  insertVersion(input: {
    envelopeId: string;
    cohortId: string;
    versionNo: number;
    rulesDigest: string;
    closeEpoch: number;
    commandDigest: string;
    createdAtUtc: string;
  }): void {
    this.database.prepare(`
      INSERT INTO envelope_versions (
        envelope_id, cohort_id, version_no, rules_digest, close_epoch, command_digest, created_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      input.envelopeId,
      input.cohortId,
      input.versionNo,
      input.rulesDigest,
      input.closeEpoch,
      input.commandDigest,
      input.createdAtUtc
    );
  }

  insertOccurrence(input: {
    occurrenceId: string;
    envelopeId: string;
    versionNo: number;
    horizonYears: HorizonYears;
    position: SlotPosition;
    phraseCiphertext: Buffer;
    phraseAeadNonce: Buffer;
    commitmentNonce: Buffer;
    createdAtUtc: string;
  }): void {
    this.database.prepare(`
      INSERT INTO message_occurrences (
        occurrence_id, envelope_id, version_no, horizon_years, position, visibility,
        phrase_ciphertext, phrase_aead_nonce, commitment_nonce, created_at_utc
      ) VALUES (?, ?, ?, ?, ?, 'public_at_opening', ?, ?, ?, ?)
    `).run(
      input.occurrenceId,
      input.envelopeId,
      input.versionNo,
      input.horizonYears,
      input.position,
      input.phraseCiphertext,
      input.phraseAeadNonce,
      input.commitmentNonce,
      input.createdAtUtc
    );
  }

  insertIdempotency(input: {
    sessionScope: string;
    operation: string;
    idempotencyKey: string;
    commandDigest: string;
    resultJson: string;
    envelopeId: string;
    committedVersionNo: number;
    createdAtUtc: string;
  }): void {
    this.database.prepare(`
      INSERT INTO idempotency_results (
        session_scope, operation, idempotency_key, command_digest, result_json,
        envelope_id, committed_version_no, created_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      input.sessionScope,
      input.operation,
      input.idempotencyKey,
      input.commandDigest,
      input.resultJson,
      input.envelopeId,
      input.committedVersionNo,
      input.createdAtUtc
    );
  }

  appendAudit(input: {
    eventId: string;
    envelopeId: string;
    eventType: string;
    factsJson: string;
    createdAtUtc: string;
  }): void {
    this.database.prepare(`
      INSERT INTO audit_events (
        event_id, entity_type, pseudoref, event_type, reason_code, facts_json, created_at_utc
      ) VALUES (?, 'envelope', ?, ?, NULL, ?, ?)
    `).run(input.eventId, input.envelopeId, input.eventType, input.factsJson, input.createdAtUtc);
  }
}
