CREATE TABLE cohorts (
  cohort_id TEXT PRIMARY KEY,
  state TEXT NOT NULL CHECK (state IN ('draft', 'open', 'closing', 'closed')),
  close_epoch INTEGER NOT NULL CHECK (close_epoch >= 1),
  close_at_utc TEXT NOT NULL,
  created_at_utc TEXT NOT NULL
);

CREATE TABLE rules_versions (
  cohort_id TEXT NOT NULL,
  rules_digest TEXT NOT NULL,
  version_no INTEGER NOT NULL CHECK (version_no >= 1),
  canonical_rules_json TEXT NOT NULL,
  created_at_utc TEXT NOT NULL,
  PRIMARY KEY (cohort_id, rules_digest),
  UNIQUE (cohort_id, version_no),
  FOREIGN KEY (cohort_id) REFERENCES cohorts(cohort_id) ON DELETE RESTRICT
);

CREATE TABLE envelopes (
  envelope_id TEXT PRIMARY KEY,
  cohort_id TEXT NOT NULL,
  created_at_utc TEXT NOT NULL,
  UNIQUE (envelope_id, cohort_id),
  FOREIGN KEY (cohort_id) REFERENCES cohorts(cohort_id) ON DELETE RESTRICT
);

CREATE TABLE invite_bindings (
  invite_id TEXT PRIMARY KEY,
  cohort_id TEXT NOT NULL,
  envelope_id TEXT NOT NULL,
  credential_digest TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL CHECK (status IN ('active', 'revoked')),
  issued_at_utc TEXT NOT NULL,
  revoked_at_utc TEXT,
  UNIQUE (invite_id, envelope_id),
  CHECK (
    (status = 'active' AND revoked_at_utc IS NULL) OR
    (status = 'revoked' AND revoked_at_utc IS NOT NULL)
  ),
  FOREIGN KEY (cohort_id) REFERENCES cohorts(cohort_id) ON DELETE RESTRICT,
  FOREIGN KEY (envelope_id, cohort_id)
    REFERENCES envelopes(envelope_id, cohort_id) ON DELETE RESTRICT
);

CREATE UNIQUE INDEX invite_bindings_one_active_per_envelope
  ON invite_bindings(envelope_id)
  WHERE status = 'active';

CREATE TABLE sessions (
  session_digest TEXT PRIMARY KEY,
  invite_id TEXT NOT NULL,
  envelope_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'revoked', 'expired')),
  expires_at_utc TEXT NOT NULL,
  created_at_utc TEXT NOT NULL,
  FOREIGN KEY (invite_id, envelope_id)
    REFERENCES invite_bindings(invite_id, envelope_id) ON DELETE RESTRICT
);

CREATE TABLE envelope_versions (
  envelope_id TEXT NOT NULL,
  cohort_id TEXT NOT NULL,
  version_no INTEGER NOT NULL CHECK (version_no >= 1),
  rules_digest TEXT NOT NULL,
  close_epoch INTEGER NOT NULL CHECK (close_epoch >= 1),
  command_digest TEXT NOT NULL,
  created_at_utc TEXT NOT NULL,
  PRIMARY KEY (envelope_id, version_no),
  FOREIGN KEY (envelope_id, cohort_id)
    REFERENCES envelopes(envelope_id, cohort_id) ON DELETE RESTRICT,
  FOREIGN KEY (cohort_id, rules_digest)
    REFERENCES rules_versions(cohort_id, rules_digest) ON DELETE RESTRICT
);

CREATE TABLE message_occurrences (
  occurrence_id TEXT PRIMARY KEY,
  envelope_id TEXT NOT NULL,
  version_no INTEGER NOT NULL,
  horizon_years INTEGER NOT NULL CHECK (horizon_years IN (2, 5, 10)),
  position INTEGER NOT NULL CHECK (position IN (1, 2)),
  visibility TEXT NOT NULL CHECK (visibility = 'public_at_opening'),
  phrase_ciphertext BLOB NOT NULL CHECK (length(phrase_ciphertext) > 0),
  phrase_aead_nonce BLOB NOT NULL CHECK (length(phrase_aead_nonce) > 0),
  commitment_nonce BLOB NOT NULL CHECK (length(commitment_nonce) > 0),
  created_at_utc TEXT NOT NULL,
  UNIQUE (envelope_id, version_no, horizon_years, position),
  FOREIGN KEY (envelope_id, version_no)
    REFERENCES envelope_versions(envelope_id, version_no) ON DELETE RESTRICT
);

CREATE TABLE idempotency_results (
  session_scope TEXT NOT NULL,
  operation TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  command_digest TEXT NOT NULL,
  result_json TEXT NOT NULL,
  envelope_id TEXT NOT NULL,
  committed_version_no INTEGER NOT NULL,
  created_at_utc TEXT NOT NULL,
  PRIMARY KEY (session_scope, operation, idempotency_key),
  FOREIGN KEY (envelope_id, committed_version_no)
    REFERENCES envelope_versions(envelope_id, version_no) ON DELETE RESTRICT
);

CREATE TABLE moderation_dispositions (
  disposition_id TEXT PRIMARY KEY,
  occurrence_id TEXT NOT NULL UNIQUE,
  disposition TEXT NOT NULL CHECK (disposition IN ('accepted', 'rejected')),
  reason_code TEXT NOT NULL,
  steward_ref TEXT NOT NULL,
  created_at_utc TEXT NOT NULL,
  FOREIGN KEY (occurrence_id) REFERENCES message_occurrences(occurrence_id) ON DELETE RESTRICT
);

CREATE TABLE audit_events (
  event_id TEXT PRIMARY KEY,
  entity_type TEXT NOT NULL,
  pseudoref TEXT NOT NULL,
  event_type TEXT NOT NULL,
  reason_code TEXT,
  facts_json TEXT NOT NULL,
  created_at_utc TEXT NOT NULL
);

CREATE TRIGGER rules_versions_no_update
BEFORE UPDATE ON rules_versions
BEGIN
  SELECT RAISE(ABORT, 'rules_versions are immutable');
END;

CREATE TRIGGER rules_versions_no_delete
BEFORE DELETE ON rules_versions
BEGIN
  SELECT RAISE(ABORT, 'rules_versions are immutable');
END;

CREATE TRIGGER envelope_versions_no_update
BEFORE UPDATE ON envelope_versions
BEGIN
  SELECT RAISE(ABORT, 'envelope_versions are immutable');
END;

CREATE TRIGGER envelope_versions_no_delete
BEFORE DELETE ON envelope_versions
BEGIN
  SELECT RAISE(ABORT, 'envelope_versions are immutable');
END;

CREATE TRIGGER message_occurrences_no_update
BEFORE UPDATE ON message_occurrences
BEGIN
  SELECT RAISE(ABORT, 'message_occurrences are immutable');
END;

CREATE TRIGGER message_occurrences_no_delete
BEFORE DELETE ON message_occurrences
BEGIN
  SELECT RAISE(ABORT, 'message_occurrences are immutable');
END;

CREATE TRIGGER idempotency_results_no_update
BEFORE UPDATE ON idempotency_results
BEGIN
  SELECT RAISE(ABORT, 'idempotency_results are immutable');
END;

CREATE TRIGGER idempotency_results_no_delete
BEFORE DELETE ON idempotency_results
BEGIN
  SELECT RAISE(ABORT, 'idempotency_results are immutable');
END;

CREATE TRIGGER moderation_dispositions_no_update
BEFORE UPDATE ON moderation_dispositions
BEGIN
  SELECT RAISE(ABORT, 'moderation_dispositions are append-only');
END;

CREATE TRIGGER moderation_dispositions_no_delete
BEFORE DELETE ON moderation_dispositions
BEGIN
  SELECT RAISE(ABORT, 'moderation_dispositions are append-only');
END;

CREATE TRIGGER audit_events_no_update
BEFORE UPDATE ON audit_events
BEGIN
  SELECT RAISE(ABORT, 'audit_events are append-only');
END;

CREATE TRIGGER audit_events_no_delete
BEFORE DELETE ON audit_events
BEGIN
  SELECT RAISE(ABORT, 'audit_events are append-only');
END;
