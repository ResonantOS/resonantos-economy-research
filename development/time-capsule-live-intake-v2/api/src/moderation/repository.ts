import type { DatabaseSync } from "node:sqlite";
import type { OccurrenceRecord } from "../envelope/repository.js";
import type { HorizonYears, SlotPosition } from "../envelope/validation.js";

export type FinalDisposition = "accepted" | "rejected";
export type ModerationReasonCode =
  | "within_policy"
  | "harmful_content"
  | "personal_data"
  | "spam"
  | "other_safety";

export interface ModerationOccurrence extends OccurrenceRecord {
  readonly cohortId: string;
  readonly closeState: "draft" | "open" | "closing" | "closed";
  readonly closeAtUtc: string;
  readonly disposition: FinalDisposition | null;
  readonly reasonCode: ModerationReasonCode | null;
}

export interface InsertDisposition {
  readonly dispositionId: string;
  readonly occurrenceId: string;
  readonly disposition: FinalDisposition;
  readonly reasonCode: ModerationReasonCode;
  readonly stewardRef: string;
  readonly createdAtUtc: string;
}

export interface AppendModerationAudit {
  readonly eventId: string;
  readonly occurrenceId: string;
  readonly reasonCode: ModerationReasonCode;
  readonly factsJson: string;
  readonly createdAtUtc: string;
}

export interface ModerationStore {
  transaction<T>(operation: () => T): T;
  findOccurrence(occurrenceId: string): ModerationOccurrence | undefined;
  listPending(limit: number): readonly ModerationOccurrence[];
  insertDisposition(input: InsertDisposition): void;
  appendAudit(input: AppendModerationAudit): void;
}

function toOccurrence(row: Record<string, unknown>): ModerationOccurrence {
  return Object.freeze({
    occurrenceId: String(row.occurrence_id),
    envelopeId: String(row.envelope_id),
    versionNo: Number(row.version_no),
    horizonYears: Number(row.horizon_years) as HorizonYears,
    position: Number(row.position) as SlotPosition,
    phraseCiphertext: Buffer.from(row.phrase_ciphertext as Uint8Array),
    phraseAeadNonce: Buffer.from(row.phrase_aead_nonce as Uint8Array),
    commitmentNonce: Buffer.from(row.commitment_nonce as Uint8Array),
    cohortId: String(row.cohort_id),
    closeState: String(row.close_state) as ModerationOccurrence["closeState"],
    closeAtUtc: String(row.close_at_utc),
    disposition: row.disposition === null ? null : String(row.disposition) as FinalDisposition,
    reasonCode: row.reason_code === null ? null : String(row.reason_code) as ModerationReasonCode
  });
}

const OCCURRENCE_SELECT = `
  SELECT
    mo.occurrence_id, mo.envelope_id, mo.version_no, mo.horizon_years, mo.position,
    mo.phrase_ciphertext, mo.phrase_aead_nonce, mo.commitment_nonce,
    ev.cohort_id, c.state AS close_state, c.close_at_utc,
    md.disposition, md.reason_code
  FROM message_occurrences mo
  JOIN envelope_versions ev
    ON ev.envelope_id = mo.envelope_id AND ev.version_no = mo.version_no
  JOIN cohorts c ON c.cohort_id = ev.cohort_id
  LEFT JOIN moderation_dispositions md ON md.occurrence_id = mo.occurrence_id
`;

export class ModerationRepository implements ModerationStore {
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

  findOccurrence(occurrenceId: string): ModerationOccurrence | undefined {
    const row = this.database.prepare(`${OCCURRENCE_SELECT} WHERE mo.occurrence_id = ?`)
      .get(occurrenceId) as Record<string, unknown> | undefined;
    return row ? toOccurrence(row) : undefined;
  }

  listPending(limit: number): readonly ModerationOccurrence[] {
    const rows = this.database.prepare(`
      ${OCCURRENCE_SELECT}
      WHERE md.occurrence_id IS NULL
      ORDER BY mo.created_at_utc ASC, mo.occurrence_id ASC
      LIMIT ?
    `).all(limit) as Array<Record<string, unknown>>;
    return Object.freeze(rows.map(toOccurrence));
  }

  insertDisposition(input: InsertDisposition): void {
    this.database.prepare(`
      INSERT INTO moderation_dispositions (
        disposition_id, occurrence_id, disposition, reason_code, steward_ref, created_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      input.dispositionId,
      input.occurrenceId,
      input.disposition,
      input.reasonCode,
      input.stewardRef,
      input.createdAtUtc
    );
  }

  appendAudit(input: AppendModerationAudit): void {
    this.database.prepare(`
      INSERT INTO audit_events (
        event_id, entity_type, pseudoref, event_type, reason_code, facts_json, created_at_utc
      ) VALUES (?, 'message_occurrence', ?, 'moderation_disposition_recorded', ?, ?, ?)
    `).run(
      input.eventId,
      input.occurrenceId,
      input.reasonCode,
      input.factsJson,
      input.createdAtUtc
    );
  }
}
