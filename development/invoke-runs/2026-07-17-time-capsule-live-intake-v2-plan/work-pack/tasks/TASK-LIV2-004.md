# TASK-LIV2-004 — Close, Manifest, Fingerprint, And Resilience

## Objective

Prove that one invented cohort closes exactly once, selects only the latest
accepted pre-fence phrases, publishes a non-identifying commitment manifest,
and reproduces the same bytes/fingerprint after restore or migration.

- Layer/slice: L1 / S-04
- Wave: W2
- Dependencies: SWU-LIV2-010–015
- Target roots: API close/projection modules and shared contract/fixture paths
- External effects: none; frozen clock and disposable local storage only

## Execution Status

- `SWU-LIV2-016`: block — writer transaction-time clock repair exceeds the
  selected write scope; see the
  [Decision Gate](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-016/DECISION-GATE.md)
- `SWU-LIV2-017`–`020`: blocked by their declared machine dependencies

## Canonical Record Design

At first confirmation of a changed nonempty phrase, generate a random opaque
`public_record_id` and 32-byte `commitment_nonce`; store both inside the protected
occurrence (the public ID may also be indexed). Editing creates a new occurrence;
unchanged slots reuse their occurrence. This prevents close-time nonce grinding.

For every selected accepted occurrence, create an opening proof object:

```json
{"domain":"resonant-time-capsule-record:v1","public_record_id":"...","horizon_years":2,"slot_position":1,"commitment_nonce_b64url":"...","phrase":"normalized phrase"}
```

Serialize it with RFC 8785 JSON Canonicalization Scheme and compute SHA-256.
The public manifest stores only the lowercase hex commitment plus public metadata;
the proof object is stored inside the encrypted horizon bundle and becomes public
only at opening.

The canonical manifest is JCS-serialized UTF-8 and contains: schema/domain,
capsule/rules IDs, close instant, range/formula versions, horizon declarations,
and records sorted by `(horizon_years, public_record_id)` with horizon, position,
record ID, visibility, and commitment. It contains no phrase, nonce, invite,
session, envelope, operator, or participant linkage.

`capsule_fingerprint = SHA-256(canonical_manifest_bytes)` and is represented as
64 lowercase hexadecimal characters.

## Smallest Working Units

### SWU-LIV2-016 — Transactional close fence

- Status: block — strict context coverage is 5/10 because the real envelope and
  moderation writers use pre-lock command timestamps and are outside this SWU's
  close-only write scope; see the
  [Task Session report](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-016/TASK-SESSION-REPORT.md).

- Primary behavior: atomically change an invented cohort from open to closing/closed
  and reject any mutation committing at or after `2026-07-21T00:00:00Z`.
- Independent acceptance: frozen-clock/race tests pass before snapshot serialization.
- Candidate children: state transition and writer fence.
- Retained boundary: the transition is unsafe unless it fences writers in the same transaction.
- Dependencies: SWU-LIV2-013 and SWU-LIV2-015.
- Write scope: API close coordinator/repository/tests.
- Algorithm: begin immediate transaction → read authoritative clock/state/epoch →
  reject if already terminal or invalid → increment epoch/set closing → fence writers
  through state+epoch checks → create idempotent close operation → set closed with snapshot ID.
- Done: request begun before but committed at/after fence fails; restart/retry returns
  original close receipt; two closers cannot create two epochs/snapshots.
- Evidence: race matrix and frozen-clock receipt.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- close-fence`
- Owner: local-fallback.
- Source anchors: D-07; architecture Close Coordinator.
- Handoff: browser time is never an acceptance input.

### SWU-LIV2-017 — Eligible closing snapshot selection

- Primary behavior: select one latest confirmed, accepted, non-withdrawn occurrence set.
- Independent acceptance: snapshot IDs/records can be reviewed before canonical serialization.
- Candidate children: latest-version selection and moderation eligibility.
- Retained boundary: both predicates jointly define one accepted capsule set.
- Dependencies: SWU-LIV2-016.
- Write scope: API snapshot query/materialization/tests.
- Algorithm: for each envelope choose maximum confirmed version committed before
  fence; expand nonempty occurrences; require terminal accepted disposition; exclude
  rejected/unresolved/withdrawn; sort by stable internal keys; persist one immutable snapshot.
- Done: late, stale, rejected, unresolved, withdrawn, and superseded fixtures are absent.
- Evidence: selection truth table and snapshot digest.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- closing-snapshot`
- Owner: local-fallback.
- Source anchors: D-04–D-07, D-15.
- Handoff: no public serialization and no key destruction in this SWU.

### SWU-LIV2-018 — Public canonical manifest bytes

- Primary behavior: serialize one selected snapshot to exactly one public byte sequence.
- Independent acceptance: golden bytes and forbidden-field scan pass before fingerprint code.
- Candidate children: record commitment and manifest serialization.
- Retained boundary: record commitments are the content-bearing leaves of this one
  manifest; accepting either alone does not prove the public artifact.
- Dependencies: SWU-LIV2-017.
- Write scope: shared manifest contract, API projector, browser/Node fixtures.
- Done: JCS profile, ordering, encodings, domain/version, record proof formula,
  range, close instant, and allowlist are frozen; Node/browser golden bytes match.
- Evidence: golden manifest bytes/hash plus forbidden-field scan.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- canonical-manifest`
- Owner: local-fallback.
- Source anchors: D-08; architecture Public Projection Builder; G-05.
- Handoff: nonce and phrase remain only in the future encrypted proof object.

### SWU-LIV2-019 — Cross-runtime capsule fingerprint

- Primary behavior: compute the same SHA-256 fingerprint from the same manifest bytes.
- Independent acceptance: fingerprint vector passes without Bitcoin or number logic.
- Candidate children: browser and Node implementations.
- Retained boundary: cross-runtime equality is the single acceptance boundary; one
  implementation alone cannot establish it.
- Dependencies: SWU-LIV2-018.
- Write scope: shared fingerprint module/vector and Node/browser tests.
- Done: lowercase hex and raw bytes are unambiguous; modified byte flips result;
  browser and Node match published vector.
- Evidence: vector and independent reproduction receipt.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- fingerprint`
- Owner: local-fallback.
- Source anchors: D-08, D-12; G-05.
- Handoff: fingerprint has no timestamp or permanence claim by itself.

### SWU-LIV2-020 — Restore, migration, and corruption reconciliation

- Primary behavior: restore one acknowledged invented cohort and reproduce its
  close state, manifest bytes, and fingerprint exactly.
- Independent acceptance: one cold-recovery report closes the resilience claim.
- Candidate children: backup, restore, migration, corruption.
- Retained boundary: they are fault variants against the same reconciliation
  invariant; splitting would allow a restore claim without byte/state equivalence.
- Dependencies: SWU-LIV2-016–019.
- Write scope: API backup/restore tooling, migration fixtures, resilience tests/runbook.
- Algorithm: quiesce fixture → copy DB/ciphertext metadata and separately referenced
  key fixture → verify checksums → restore clean environment → migrate → reconcile
  counts/epochs/receipts/bytes → inject truncation/wrong key/corruption and fail closed.
- Done: successful path reproduces bytes; corrupt/wrong/missing material never reopens
  writes or silently produces a new manifest.
- Evidence: cold restore transcript, checksums, canonical-byte diff, failure matrix.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- resilience`
- Owner: local-fallback.
- Source anchors: D-03, D-06, D-16; architecture Continuity Boundary.
- Handoff: invented keys/content only; do not touch the VPS or production backup paths.

## Synchronization

Manifest/fingerprint versions are immutable after SWU-019. Any change invalidates
dependent recovery, Bitcoin, number, and rehearsal receipts and must rerun them.
