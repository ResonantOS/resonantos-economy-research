# Database And Reliability Counter-Example Review

Review posture: `BLOCK` for either public-live or sealed-live intake. This is a
completed review verdict, not an intake-readiness claim. The current sources are
adequate inputs for schema and synthetic-fixture planning, but they do not yet
specify a live database/API reliability contract.

All fixes below are system-agnostic requirements. The production datastore,
transaction/isolation mechanism, lock or fencing implementation, queue/outbox,
backup provider, and migration tooling remain unselected stack choices under
G-R1; this review does not select them.

## Findings

### DBR-01 — Result-affecting records lack stable identity and uniqueness keys

- Severity: **CRITICAL**
- Evidence: `ARCHITECTURE.md:147-159` gives `SubmissionEnvelope` only a cohort,
  credential handle, state, slots, timestamp, and confirmation version;
  `ARCHITECTURE.md:164-187` gives public/sealed records no record or envelope
  key. Yet identical records are allowed and repeated hashes stay repeated
  (`ARCHITECTURE.md:94-97,197-198`).
- Counter-example: a confirmation retry inserts the same final slot twice. The
  manifest preserves both leaves, changing the root, but neither public records
  nor an internal uniqueness contract can distinguish the accidental duplicate
  from two legitimate identical contributions.
- Proposed fix: define a system-agnostic entity/relationship contract with
  stable IDs and uniqueness invariants for cohort, credential binding, envelope,
  slot, immutable slot version, confirmation, disposition, final record,
  manifest inclusion, and receipt; require exactly one selected record per
  `(cohort, envelope, horizon, slot)` while keeping credential linkage out of the
  public projection. ID generation and constraint syntax remain stack choices.

### DBR-02 — Sensitive-field ownership is asserted, not classified end to end

- Severity: **MAJOR**
- Evidence: the public manifest “never needs” wallet, email, name, or credential
  (`ARCHITECTURE.md:47-49`), and analytics must omit words, commitments,
  credentials, and receipts (`FORM-SPEC.md:150-157`). The data contracts do not
  classify fields in drafts, versions, dispositions, receipts, audit events,
  backups, logs, exports, or support tooling.
- Counter-example: the primary table excludes `credential_ref`, but an error
  trace, change-data feed, backup catalog, or support export joins it to words
  and confirmation timestamps.
- Proposed fix: add a field-level data inventory assigning sensitivity,
  purpose, allowed stores/processors, log/analytics prohibition, encryption and
  access requirements, retention/deletion rule, and public-export eligibility to
  every entity and derived copy. Concrete encryption, IAM, and observability
  products remain stack decisions.

### DBR-03 — Retry, idempotency, and replay behavior is undefined

- Severity: **CRITICAL**
- Evidence: admission returns an envelope handle (`FORM-SPEC.md:25-40`) and
  confirmation emits a new immutable version (`TASK-TC-004.md:29-38`), while
  replayed credentials and simultaneous confirmations are only named as edge
  cases (`TASK-TC-004.md:40-42`). No command identity, expected version, replay
  result, or duplicate-receipt rule is specified.
- Counter-example: a client times out after a committed confirmation and retries;
  the service creates version N+1, supersedes N, and issues a different receipt.
  A replay around close can therefore change which version is selected.
- Proposed fix: specify idempotency keys scoped to credential/cohort/operation,
  request-digest matching, optimistic expected-version checks, deterministic
  replay of the original result, key expiry no shorter than the retry horizon,
  and rejection of key reuse with different input. The deduplication store is an
  unselected implementation choice.

### DBR-04 — “Atomic close” has no linearization point or fencing contract

- Severity: **CRITICAL**
- Evidence: the form requires mutations to fail at or after `close_at`
  (`FORM-SPEC.md:125-136`); closing says “writes fail closed”
  (`ARCHITECTURE.md:280-286`); TASK-TC-004 says to acquire a cohort-close guard
  and reject concurrent writes (`TASK-TC-004.md:29-37`). None defines the
  authoritative clock, state transition precondition, snapshot boundary, or how
  stale writers are fenced.
- Counter-example: instance A reads `intake-open`; instance B closes and snapshots;
  A then commits a previously validated confirmation. Depending on query timing,
  the participant gets a receipt for a version absent from the manifest—or the
  manifest changes after the published close.
- Proposed fix: define one cohort state machine and authoritative close instant,
  an atomic `open -> closing -> closed` transition with a monotonically changing
  close epoch/fence, require every mutation commit to validate the current epoch,
  and define the exact closed snapshot consumed by disposition and export.
  Isolation level and lock/fence technology remain stack choices.

### DBR-05 — Multi-step confirmation and close failure has no recovery protocol

- Severity: **CRITICAL**
- Evidence: confirmation writes a version and supersedes its predecessor, while
  close selects slots, applies dispositions, strips credentials, emits records,
  and issues receipts (`TASK-TC-004.md:31-38`). “Partial transaction” is listed
  only as an edge case (`TASK-TC-004.md:40-42`).
- Counter-example: final records commit but inclusion receipts fail, or a public
  manifest is published before the durable close receipt. Retrying can publish a
  second export or leave participant receipts irreconcilable with the root.
- Proposed fix: specify durable operation states, atomic commit boundaries,
  immutable operation IDs, exactly-once logical effects, at-least-once delivery
  tolerance, and a reconciliation/restart procedure for every interruption point
  from confirmation through publication. A transactional outbox or equivalent is
  a later stack selection, not a requirement to choose here.

### DBR-06 — Retention and deletion promises do not resolve frozen-history conflicts

- Severity: **CRITICAL**
- Evidence: participants are told public words may be preserved long-term and
  sealed words are not promised deletion (`FORM-SPEC.md:69-82`), while real
  public intake merely requires a retention owner and sealed intake requires
  deletion/display behavior (`FORM-SPEC.md:150-156`). The root must survive
  moderation, non-release, and key loss (`SPEC.md:125-128`). No entity-level
  retention or deletion semantics exist.
- Counter-example: a valid deletion request removes a draft but leaves it in
  immutable versions, audit rows, backups, receipts, and a public manifest; or
  deleting a final public record destroys root reproducibility.
- Proposed fix: approve a lifecycle matrix before live intake covering every
  field/copy and state: purpose, retention start, expiry, deletion authority,
  tombstone versus erasure, backup expiry, legal/incident hold, and the explicit
  non-deletable public/root residue. It must state when deletion is impossible
  before consent; physical deletion techniques remain stack choices.

### DBR-07 — Auditability has no auditable event contract

- Severity: **MAJOR**
- Evidence: superseded/rejected disposition receipts “remain auditable”
  (`SPEC.md:155-157`), and preservation promises annual integrity and migration
  receipts (`ARCHITECTURE.md:113-117`), but no audit event schema, ordering,
  actor/reason model, access rule, integrity check, or retention rule is defined.
- Counter-example: an operator changes a disposition or re-runs close; the final
  state looks valid, but reviewers cannot prove which transition occurred or
  whether the audit trail leaked word/credential content.
- Proposed fix: define a non-content-bearing append-only audit event contract
  with operation ID, cohort, object pseudoref, prior/new state, actor/owner role,
  policy/rules version, reason code, timestamp/ordering, integrity linkage,
  access, retention, and export rules. Tamper-evidence technology remains
  unselected.

### DBR-08 — Backup and restore can lose accepted work or reopen a closed cohort

- Severity: **CRITICAL**
- Evidence: real public intake requires admission, moderation, retention, and
  incident owners (`FORM-SPEC.md:150-155`), but backup/restore evidence appears
  only later as stewardship/cold-restore work (`WORK-PACK.md:94-95,120-121`).
  Preservation merely says records are redundant and checked annually
  (`ARCHITECTURE.md:113-117`).
- Counter-example: restoring a snapshot taken before close resurrects
  `intake-open`, discards acknowledged confirmations, or allows writes after a
  root was published. A backup that restores rows but not idempotency/audit state
  also permits replay.
- Proposed fix: require a public-live durability profile with explicit RPO/RTO,
  encrypted/access-controlled backup scope, point-in-time consistency across
  primary/idempotency/audit state, durable close epoch, restore ordering,
  receipt-to-row reconciliation, and rehearsed restore evidence. Provider and
  database mechanisms remain stack choices; sealed custody needs its own profile.

### DBR-09 — Migration and corruption controls do not preserve canonical history

- Severity: **MAJOR**
- Evidence: rules and records are versioned (`ARCHITECTURE.md:121-145,164-190`),
  and stewardship records migrations (`ARCHITECTURE.md:113-117`), but only the
  sealed task names migration and corrupted-storage tests
  (`TASK-TC-006.md:31-38`). Public drafts, confirmations, dispositions, and
  canonical bytes have no migration or corruption protocol.
- Counter-example: a Unicode/library or schema migration rewrites normalized
  words, timestamps, or JSON serialization in place; the stored root still
  exists, but the manifest can no longer be reproduced. A bit flip in the latest
  confirmed-version pointer selects an older draft at close.
- Proposed fix: define versioned, checksum-covered immutable canonical bytes;
  backward/forward compatibility and mixed-version rules; copy-and-verify rather
  than in-place mutation for result-affecting data; corruption quarantine and
  last-good restore; and migration rehearsals proving byte-identical historical
  roots and receipt reconciliation. Tools and rollout pattern remain stack choices.

### DBR-10 — Public export is a late field-removal step, not a fail-closed projection

- Severity: **CRITICAL**
- Evidence: the close algorithm applies dispositions, then “remove[s] credential
  references, and emit[s] public records” (`TASK-TC-004.md:35-38`); acceptance
  relies on a forbidden-field scan (`TASK-TC-004.md:64-67`). Public quota receipts
  may expose aggregate counts (`ARCHITECTURE.md:161-162`), but suppression,
  timestamp/linkability, snapshot atomicity, and publication replacement are not
  specified.
- Counter-example: a serializer includes a newly added private field because it
  exports a storage object by default, or publishes half of one close attempt
  before retrying with a different manifest. A tiny aggregate can also reveal a
  participant's disposition.
- Proposed fix: define a separately versioned allowlist-only public-export schema
  built from the fenced closed snapshot, with no generic entity serialization,
  deterministic bytes, atomic publish/replace semantics, privacy and small-cell
  rules for aggregates, forbidden-field and content scans, digest/receipt
  reconciliation, and a rollback/withdrawal procedure that cannot rewrite the
  root. Export infrastructure remains an unselected production choice.

## Coverage And Verdict

The counter-examples cover entities, sensitive fields, transactions,
idempotency, concurrency, close guarding, replay, audit, retention, deletion,
backup, restore, migration, corruption, and public export. DBR-01, DBR-03 through
DBR-06, DBR-08, and DBR-10 block public-live intake. Sealed-live inherits all of
them and remains additionally blocked by its separate threat/custody profile.
None blocks the current refinement from authoring a non-executed plan or the
already-bounded synthetic L0/L1 work.

## Receipt

```yaml
agent_id: /root/database_reliability_review
dispatch_id: 2026-07-17-time-capsule-live-intake-review
step_id: s03
capability_ref: interrogation-review
role_id: database-reliability
status: block
artifacts:
  - development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/subagents-review/database-reliability-review.md
validation:
  - all requested reliability surfaces covered
  - every finding has file evidence, severity, counter-example, and one proposed fix
  - system-agnostic requirements separated from unselected production-stack choices
observer_status: not_run
blockers:
  - DBR-01
  - DBR-03
  - DBR-04
  - DBR-05
  - DBR-06
  - DBR-08
  - DBR-10
residue:
  - production application and datastore remain unselected under G-R1
  - owner decisions remain required for retention, deletion, incident, and stewardship policy
handoff_note: Parent should carry the critical requirements into design and SWUs without treating this review as stack selection or live-intake approval.
spawn_status: spawned
join_status: pending-parent
close_status: pending-parent
reroute: parent-refine-synthesis
```
