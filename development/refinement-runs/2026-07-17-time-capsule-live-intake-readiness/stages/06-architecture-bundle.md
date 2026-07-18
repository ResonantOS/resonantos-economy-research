# Candidate Architecture Bundle — Time Capsule Live Intake

Status: coherent candidate design; usable for non-executed planning; public-live
and sealed-live remain unavailable

Source contracts: stage 02 definition, stage 03 verified change requests, stage
05 Distill result, and the 2026-07-16 Invoke package.

## View 1 — Context

```text
participant
  -> accessible form / contract simulator
  -> admission + private session boundary              [future public-live]
  -> idempotent intake commands
  -> private envelope versions
  -> moderation-pending dispositions
  -> fenced close snapshot
  -> allowlist-only public records
  -> capsule manifest/root interface

rules owner -----------------------> frozen rules
admission owner -------------------> credential verdicts
content/privacy owner -------------> display + lifecycle policy
incident owner --------------------> stop / contain / restore / resume
data steward ----------------------> retention + backup + migration
security/custody owner ------------> sealed adapter [disabled]
archive/successor owner -----------> continuity evidence
independent verifier <-------------- public export + receipts
```

The application has four explicit capability states. Code and configuration
must fail closed when a requested state has not passed its gate.

| Capability | Default | Can become available when |
| --- | --- | --- |
| static contract simulator | available after L0 evidence | zero network/storage/history and comprehension/accessibility checks pass |
| synthetic public-intake kernel | unavailable | schemas, invented fixtures, state/concurrency/close/export tests pass |
| public-live intake | unavailable | stack, admission, moderation, lifecycle, incident, restore, accessibility, operations, and owners pass |
| sealed-live intake | unavailable | public-live gates plus approved threat/client/crypto/key/custody/migration/loss profile and drills pass |

## View 2 — High-Level Structure

### 1. Contract Simulator

A browser-only implementation of the complete six-slot journey using invented,
volatile state. It owns conditional controls, Unicode/IME/bidi behavior,
normalized review, quiet, moderation-pending wording, acknowledgements, errors,
close simulation, receipts, and release explanation. It has no request or
persistence adapter.

### 2. Public Rules Surface

Publishes frozen cohort rules, schemas, word profile, exact close time/timezone,
capability availability, moderation transition, receipt semantics, and narrow
guarantees. The form reads rules before admission.

### 3. Admission And Session Boundary

Consumes an opaque credential verdict from its owner and issues a scoped,
expiring private session for one cohort/envelope. Credential issuance,
recovery, revocation, audit, and Sybil posture stay outside intake.

### 4. Command And Query Boundary

Separates mutating commands from participant queries. Every command carries an
idempotency key, request digest, expected envelope version, cohort/close epoch,
and private session. A retry with the same key/input returns the same result;
key reuse with different input fails.

### 5. Private Intake Store

Holds admission bindings, envelopes, immutable confirmed versions, slot drafts,
idempotency results, dispositions, private receipts, and restricted audit
events. It never exports storage entities generically.

### 6. Moderation Boundary

Every confirmed public word begins `moderation-pending`. Policy-versioned
review produces `show`, `quarantine`, or `reject`, with reason and appeal
metadata. Outage and overload default to non-display.

### 7. Close Coordinator

Owns the authoritative transition `open -> closing -> closed`. It increments a
monotonic epoch/fence, rejects stale mutations at commit, freezes one snapshot,
and drives disposition, public projection, receipts, and publication through
restartable operation states.

### 8. Public Projection Builder

Builds only versioned allowlisted public records from the fenced snapshot.
Forbidden-field and small-cohort checks run before atomic publication. It emits
canonical bytes, ordered leaves, manifest/root inputs, and public receipts; no
credential/session/internal object is serializable into this path.

### 9. Audit And Incident Control

Records non-content-bearing events and owns system modes such as normal,
intake-paused, display-paused, contained, restoring, and reopened/terminated.
An owner-approved incident contract controls stop/resume, containment,
revocation/rotation, notice, known-good restore, and evidence.

### 10. Continuity Boundary

Owns backup scope, RPO/RTO, restore ordering, reconciliation, immutable-byte
checks, copy-verify migrations, corruption quarantine, export, shutdown, and
successor authority. Public and sealed continuity profiles are separate.

### 11. Sealed Adapter

An unavailable interface, not an implementation. The form can explain that the
feature is not ready. Enabling requires an approved profile that binds client,
commitment/encryption, metadata, keys, custody, opening, current display
consent, erasure, migration, loss, and no-survivor behavior. Failure to find a
defensible profile kills the adapter.

## View 3 — Low-Level Components And Data

### Logical Entities

| Entity | Identity/uniqueness | Sensitive contents | Lifecycle rule |
| --- | --- | --- | --- |
| `Cohort` | stable `cohort_id` | none by default | versioned; state/epoch immutable after close |
| `RulesVersion` | immutable digest | owner refs may be restricted | never edited; successor version required |
| `AdmissionBinding` | internal `(cohort, credential_digest)` | credential digest/status/audit | separate namespace; never public |
| `Envelope` | internal `envelope_id`, unique per binding/cohort | participant relationship | private; retention policy required |
| `EnvelopeVersion` | `(envelope_id, version_no)` | six normalized slot states/modes | immutable after confirmation; supersession explicit |
| `IdempotencyRecord` | `(session_scope, operation, key)` | request digest/result ref | retained through retry/reconciliation horizon |
| `Disposition` | stable internal id per selected slot version/policy | reason/appeal/owner | append-only decisions; display may change under versioned policy |
| `CloseOperation` | `(cohort_id, close_epoch, operation_id)` | internal progress/errors | restartable and reconciled; one successful epoch |
| `PrivateReceipt` | immutable receipt id | slot commitments/edit capability | participant-only; lifecycle and recovery required |
| `AuditEvent` | monotonic/event id | pseudorefs and reason codes, never word content | append-only, access/retention/integrity rules |
| `PublicRecord` | canonical bytes plus occurrence in frozen ordered list | approved public word or approved sealed artifact | allowlist-only; contains no private id |
| `PublicExport` | `(cohort, export_version, digest)` | public records/receipts only | atomically published; reproducible and immutable |

### Data Classification Descriptor

Every field and derived copy must declare:

```yaml
field: stable-name
class: public-rule | public-content | public-verification | private-admission | private-intake | private-operations | sealed-artifact | forbidden-telemetry
purpose: one named purpose
allowed_states: [static, synthetic, public-live, sealed-live]
allowed_stores: []
allowed_processors: []
log_policy: forbidden | metadata-only
analytics_policy: forbidden
access_owner: owner-id
retention_start: event
retention_end: event-or-owner-decision
deletion_behavior: erase | tombstone | impossible-after-publication
backup_behavior: excluded | included-with-expiry
public_export: forbidden | allowlisted
```

No unspecified field defaults to public, logged, backed up, or retained.

### Command Contract

```yaml
command_id: operation-scoped idempotency key
request_digest: digest of canonical command input
cohort_id: stable public handle
expected_rules_digest: immutable digest
expected_envelope_version: integer or null
expected_close_epoch: integer
session_capability: private scoped handle
payload: command-specific, never logged
```

Command outcomes are deterministic for the same id/key. Version or epoch
mismatch returns a typed conflict without committing partial state.

### Cohort And Close State Machine

```text
draft -> open -> closing -> closed -> projected -> published
           |        |         |          |
           +------ incident stop / terminate under owner contract

open command commit requires current state=open and current epoch
closing increments epoch and fences all earlier writers
closed binds one snapshot id and rejects all mutation
projected binds allowlist export digest
published binds manifest/root publication receipt
```

Each state transition writes one durable operation and audit event. Retrying a
completed transition returns its original receipt.

### Participant Record Flow

```text
volatile draft
  -> confirmed envelope version
  -> selected-at-close slot version
  -> moderation-pending
  -> accepted-for-record | quarantined | rejected
  -> allowlisted public record
  -> ordered occurrence in frozen export
```

Quiet creates no public record. Removal before close is represented in a newer
confirmed envelope version; its exact retention effect follows the lifecycle
matrix. Takedown/display changes after freeze cannot rewrite canonical history.

## View 4 — Workflow Process

### L0 Contract Simulation

1. Load only local invented rules and examples.
2. Exercise quiet, one/two words, conditional visibility, invalid input,
   moderation-pending, edit, close, receipt, and release choices.
3. Use a shared Unicode/IME/bidi fixture profile.
4. Review all six normalized places and consequences.
5. Prevent every submission/request/history/storage/analytics path.
6. Capture keyboard, screen-reader, directionality, retell, and zero-flow evidence.

### Synthetic Intake

1. Load frozen synthetic rules and fixture credential.
2. Establish an isolated test session and envelope.
3. Send versioned/idempotent commands against invented data.
4. Exercise concurrent confirmations, retries, replay, failures, and close races.
5. Fence close and freeze one snapshot.
6. Apply fixture dispositions and build allowlist public projection.
7. Reconcile private receipts, export, canonical records, and root inputs.
8. Corrupt, restore, migrate, and reproduce without any real participant data.

### Public-Live Promotion

Public-live remains unavailable until every gate is evidenced: stack and
operations, admission, content/consent, data lifecycle, abuse, incident,
accessibility, backup/restore, migration, successor, and public-export review.
Killing sealed mode waives none of these.

### Sealed-Live Promotion

Sealed-live first decides commitment-only, recoverable encryption, or no sealed
path. Any live profile must survive realistic low-entropy guessing, altered
client, metadata, key compromise/loss, rotation, recovery, migration, harmful
opening, release-time private preview, current display consent, and no-survivor
fixtures. Otherwise it stays unavailable or is removed.

## View 5 — Decision Flow

```text
Which capability is requested?
  static -> zero-flow simulator evidence passed?
    no -> repair L0
    yes -> allow local simulation only

  synthetic -> schemas + fixtures + L0 state contract passed?
    no -> block
    yes -> allow invented isolated service only

  public-live -> all public owner/evidence gates passed?
    no -> block; do not accept real words
    yes -> run bounded staging and signed promotion decision

  sealed-live -> public-live gates + approved sealed profile/drills passed?
    no -> disable or kill sealed
    yes -> run separate bounded staging; never infer from public-live

Command arrives?
  invalid session/rules/version/epoch -> typed failure; no mutation
  repeated key + same digest -> return original result
  repeated key + different digest -> reject
  state != open at commit -> reject
  otherwise -> atomic version/receipt/audit commit

Display requested?
  moderation state != show -> do not display
  sealed opening without current display consent -> do not display
  incident mode pauses display -> do not display
```

## View 6 — Dependency And Interface Boundaries

| Interface | Owner | Intake consumes | Intake emits | Fail behavior |
| --- | --- | --- | --- | --- |
| application/runtime | implementation owner | approved target stack and operations envelope | deployable adapters later | no production implementation until selected |
| admission | governance/membership | opaque verdict/capability | restricted quota/session receipt | non-enumerating denial; no envelope |
| content/consent | content/privacy/legal | policy and lifecycle matrix | dispositions/appeals | moderation-pending/non-display |
| database/data lifecycle | data steward | field descriptors, transaction and retention policy | private state and proofs | reject unsafe/partial operations |
| clock/close | rules + operations | authoritative time and epoch | fenced snapshot/receipt | fail closed |
| incident | incident owner | severity/stop/resume decision | incident/recovery receipts | pause intake/display |
| sealed security | security/privacy/custody | approved profile | commitments/opening receipts | adapter unavailable |
| continuity | archive/successor | RPO/RTO, backup, restore, migration, authority | continuity receipts | do not promise/live-promote |
| capsule root | manifest/verification owner | allowlisted canonical records | root/inclusion material | no publication on reconciliation failure |

## Design Decisions

- DD-01: four capability states replace one ambiguous “ready” flag.
- DD-02: first implementation unit is the non-collecting contract simulator.
- DD-03: public-live and sealed-live have independent gates.
- DD-04: public words are moderation-pending before display.
- DD-05: every mutation is versioned, idempotent, epoch-checked, and atomic.
- DD-06: close has a monotonic fence and restartable operation state.
- DD-07: public output is a separate allowlist projection, never storage serialization.
- DD-08: lifecycle rules attach to fields and derived copies, including backups/logs.
- DD-09: incident and continuity are architecture components, not later runbook prose.
- DD-10: sealed is a disabled/killed adapter until independently approved.
- DD-11: stack selection is deferred without weakening system-agnostic acceptance requirements.

## Risks And Gaps

- R-01: irreversible public bytes may conflict with future deletion/takedown owner obligations.
- R-02: selected stack may not support required transaction/fencing/recovery semantics economically.
- R-03: credential recovery can become account takeover or identity overclaim.
- R-04: small cohorts make metadata suppression difficult.
- R-05: ten-year continuity may be unaffordable or institutionally ownerless.
- R-06: a defensible sealed profile may not exist for low-entropy words and current custody capacity.

Each risk blocks only the capability state it affects; none is silently “accepted.”

