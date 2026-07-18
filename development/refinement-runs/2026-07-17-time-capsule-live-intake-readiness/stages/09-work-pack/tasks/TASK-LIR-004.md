# TASK-LIR-004 — Close, Projection, Reconciliation, And Resilience

Layer: L1

Status: blocked by TASK-LIR-003

## Objective

Prove with invented data that close has one linearization point, stale writers
cannot commit, public export is allowlist-only and atomic, receipts reconcile,
and restore/migration cannot reopen or rewrite history.

## Close And Publication Algorithm

1. Acquire the cohort transition and atomically move `open -> closing`, incrementing epoch.
2. Require every concurrent mutation commit to validate current state/epoch; stale commits fail.
3. Freeze one snapshot of latest confirmed envelope versions.
4. Apply fixture dispositions beginning moderation-pending.
5. Build versioned allowlist public records and small-cohort-safe aggregates.
6. Validate forbidden fields/content, canonical bytes, ordered occurrences, and export digest.
7. Persist restartable operation state and reconcile private/public receipts.
8. Atomically publish one export/receipt set, then mark `published`.

## Smallest Working Units

### SWU-LIR-007 — Fenced Close And Public Projection

- Dependencies: SWU-LIR-006
- Write scope: selected close/projection/receipt modules and tests
- Done: stale writes fail; one snapshot/export; retries return original outcomes; forbidden fields absent
- Acceptance: frozen-clock race, partial publication, small-cohort, generic-serializer, and receipt reconciliation tests pass
- Verification: stack test suite plus canonical export diff and forbidden-field scan
- Owner: local-fallback
- Handoff: return close epoch/snapshot/export receipts and failed cases

### SWU-LIR-008 — Restore, Migration, Corruption

- Dependencies: SWU-LIR-007
- Write scope: isolated resilience fixtures, migrations, and runbooks
- Done: backup scope/RPO/RTO assumptions explicit; restored state reconciles;
  close never reopens; copy-verify migration preserves canonical bytes
- Acceptance: interruption, cold restore, bit corruption, mixed version, dependency loss, and shutdown cases exercised
- Verification: failure injection, cold restore, migration rehearsal, byte-identical root-input diff
- Owner: local-fallback
- Handoff: return restore/migration receipts, unmet RPO/RTO, and operational residue

## Synchronization

This evidence remains synthetic. It is required but insufficient for public-live.

