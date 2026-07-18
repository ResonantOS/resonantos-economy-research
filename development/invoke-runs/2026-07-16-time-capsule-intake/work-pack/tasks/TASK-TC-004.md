# TASK-TC-004 — Implement Test-Only Intake State, Quota, Close, And Receipts

Layer: L1

Slice: S-04

Wave: W1

Status: blocked by TASK-TC-002 and TASK-TC-003 record contract

## Objective

Prove with invented data that one opaque test credential can maintain six
optional slots, enforce two per horizon, edit/version drafts, close atomically,
and feed only the latest confirmed accepted records into the manifest.

## Source Contracts

- `../../FORM-SPEC.md#steps`
- `../../FORM-SPEC.md#server-invariants`
- `../../ARCHITECTURE.md#during-intake`
- `../../ARCHITECTURE.md#closing-and-number-reveal`

## Implementation Detail

Use an isolated test service or deterministic in-memory adapter. It must have no
real credential issuer, email/wallet collection, analytics, or production storage.

State algorithm:

1. Resolve a fixture credential to one envelope.
2. Validate a draft and enforce slot/horizon invariants transactionally.
3. Confirm by writing a new immutable envelope version and superseding the prior version.
4. Permit removal/replacement only before the frozen close instant.
5. At close, acquire the cohort-close guard; reject concurrent/future writes.
6. Select the latest confirmed version per slot, apply fixture dispositions,
   remove credential references, and emit public records.
7. Issue private confirmation and final inclusion/non-inclusion receipts.

Edge cases: simultaneous confirmations, replayed credentials, version rollback,
three words, slot-2-only, empty envelope, close-time boundary, clock skew, partial
transaction, rejected final slot, and credentials accidentally entering output.

## Smallest Working Units

### SWU-TC-007 — Credential Quota And Draft Versions

- Dependencies: SWU-TC-003
- Source anchors: `FORM-SPEC.md#server-invariants`, `ARCHITECTURE.md#submissionenvelope--private-intake-state`
- Related context: G-03; test credentials are not a solution to it
- Write scope: future `experiments/time-capsule-intake/state/`
- Done when: state/property tests hold for 0–2 per horizon, 0–6 total, and atomic supersession
- Acceptance evidence: transition log and property-test report with invented data only
- Validation: state-machine and concurrency tests
- Execution owner: local-fallback
- Handoff: return transition table, storage assumptions, and any race residue

### SWU-TC-008 — Close, Manifest Selection, And Receipts

- Dependencies: SWU-TC-005, SWU-TC-007
- Source anchors: `ARCHITECTURE.md#closing-and-number-reveal`, `FORM-SPEC.md#step-5--receipt`
- Related context: canonical record schemas from TASK-TC-002
- Write scope: future test intake close, export, and receipt modules
- Done when: close is atomic/fail-closed, latest confirmed records only enter
  output, credentials are absent, and receipts reconcile
- Acceptance evidence: boundary/concurrency tests and public-output privacy review
- Validation: frozen-clock tests, receipt reconciliation, forbidden-field scan
- Execution owner: local-fallback
- Handoff: return close receipt, manifest input, privacy scan, and failure cases

## Synchronization

Do not connect this test service to the hosted site or real credentials. L1
completion requires TASK-TC-003 and TASK-TC-004 evidence to be reconciled.

