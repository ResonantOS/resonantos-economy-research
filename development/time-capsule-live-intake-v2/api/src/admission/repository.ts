import type { DatabaseSync } from "node:sqlite";

export interface InviteRecord {
  readonly inviteId: string;
  readonly cohortId: string;
  readonly envelopeId: string;
  readonly credentialDigest: string;
  readonly cohortState: "draft" | "open" | "closing" | "closed";
  readonly closeAtUtc: string;
}

export interface SessionRecord {
  readonly sessionDigest: string;
  readonly envelopeId: string;
  readonly cohortId: string;
  readonly expiresAtUtc: string;
  readonly cohortState: "draft" | "open" | "closing" | "closed";
  readonly closeAtUtc: string;
}

function mapInvite(row: Record<string, unknown>): InviteRecord {
  return Object.freeze({
    inviteId: String(row.invite_id),
    cohortId: String(row.cohort_id),
    envelopeId: String(row.envelope_id),
    credentialDigest: String(row.credential_digest),
    cohortState: String(row.cohort_state) as InviteRecord["cohortState"],
    closeAtUtc: String(row.close_at_utc)
  });
}

export class AdmissionRepository {
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

  findActiveInviteByDigest(credentialDigest: string): InviteRecord | undefined {
    const row = this.database.prepare(`
      SELECT
        i.invite_id,
        i.cohort_id,
        i.envelope_id,
        i.credential_digest,
        c.state AS cohort_state,
        c.close_at_utc
      FROM invite_bindings i
      JOIN cohorts c ON c.cohort_id = i.cohort_id
      WHERE i.credential_digest = ? AND i.status = 'active'
    `).get(credentialDigest) as Record<string, unknown> | undefined;
    return row ? mapInvite(row) : undefined;
  }

  findActiveInviteById(inviteId: string): InviteRecord | undefined {
    const row = this.database.prepare(`
      SELECT
        i.invite_id,
        i.cohort_id,
        i.envelope_id,
        i.credential_digest,
        c.state AS cohort_state,
        c.close_at_utc
      FROM invite_bindings i
      JOIN cohorts c ON c.cohort_id = i.cohort_id
      WHERE i.invite_id = ? AND i.status = 'active'
    `).get(inviteId) as Record<string, unknown> | undefined;
    return row ? mapInvite(row) : undefined;
  }

  insertSession(input: {
    sessionDigest: string;
    inviteId: string;
    envelopeId: string;
    expiresAtUtc: string;
    createdAtUtc: string;
  }): void {
    this.database.prepare(`
      INSERT INTO sessions (
        session_digest, invite_id, envelope_id, status, expires_at_utc, created_at_utc
      ) VALUES (?, ?, ?, 'active', ?, ?)
    `).run(
      input.sessionDigest,
      input.inviteId,
      input.envelopeId,
      input.expiresAtUtc,
      input.createdAtUtc
    );
  }

  findActiveSessionByDigest(sessionDigest: string): SessionRecord | undefined {
    const row = this.database.prepare(`
      SELECT
        s.session_digest,
        s.envelope_id,
        i.cohort_id,
        s.expires_at_utc,
        c.state AS cohort_state,
        c.close_at_utc
      FROM sessions s
      JOIN invite_bindings i ON i.invite_id = s.invite_id AND i.envelope_id = s.envelope_id
      JOIN cohorts c ON c.cohort_id = i.cohort_id
      WHERE s.session_digest = ? AND s.status = 'active' AND i.status = 'active'
    `).get(sessionDigest) as Record<string, unknown> | undefined;

    if (!row) return undefined;
    return Object.freeze({
      sessionDigest: String(row.session_digest),
      envelopeId: String(row.envelope_id),
      cohortId: String(row.cohort_id),
      expiresAtUtc: String(row.expires_at_utc),
      cohortState: String(row.cohort_state) as SessionRecord["cohortState"],
      closeAtUtc: String(row.close_at_utc)
    });
  }

  revokeActiveSessions(envelopeId: string): number {
    return Number(
      this.database.prepare(
        "UPDATE sessions SET status = 'revoked' WHERE envelope_id = ? AND status = 'active'"
      ).run(envelopeId).changes
    );
  }

  revokeInvite(inviteId: string, revokedAtUtc: string): boolean {
    const result = this.database.prepare(`
      UPDATE invite_bindings
      SET status = 'revoked', revoked_at_utc = ?
      WHERE invite_id = ? AND status = 'active'
    `).run(revokedAtUtc, inviteId);
    return Number(result.changes) === 1;
  }

  insertRecoveredInvite(input: {
    inviteId: string;
    cohortId: string;
    envelopeId: string;
    credentialDigest: string;
    issuedAtUtc: string;
  }): void {
    this.database.prepare(`
      INSERT INTO invite_bindings (
        invite_id, cohort_id, envelope_id, credential_digest, status, issued_at_utc, revoked_at_utc
      ) VALUES (?, ?, ?, ?, 'active', ?, NULL)
    `).run(
      input.inviteId,
      input.cohortId,
      input.envelopeId,
      input.credentialDigest,
      input.issuedAtUtc
    );
  }

  appendAudit(input: {
    eventId: string;
    entityType: string;
    pseudoref: string;
    eventType: string;
    reasonCode?: string;
    facts: Readonly<Record<string, string | number | boolean>>;
    createdAtUtc: string;
  }): void {
    this.database.prepare(`
      INSERT INTO audit_events (
        event_id, entity_type, pseudoref, event_type, reason_code, facts_json, created_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      input.eventId,
      input.entityType,
      input.pseudoref,
      input.eventType,
      input.reasonCode ?? null,
      JSON.stringify(input.facts),
      input.createdAtUtc
    );
  }
}
