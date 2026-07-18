# TASK-LIR-003 — Target Selection And Synthetic Intake Kernel

Layer: L1

Status: blocked by TASK-LIR-002 and manual stack decision

## Objective

Select an isolated implementation target that can satisfy the frozen logical
contract, then implement the invented-data command/query and private-state
kernel without connecting the hosted site or real credentials.

## Target Decision Criteria

- transactional uniqueness and expected-version checks;
- monotonic close fencing and authoritative time;
- idempotency/replay result storage;
- private/public namespace and allowlist serialization;
- testable failure injection, backup/restore, and migrations;
- deployable isolation with no production credential or content path;
- maintainable by the named implementation/operations owner.

## State Algorithm

1. Resolve a fixture credential into one private envelope/session.
2. Validate rules/version/epoch and request digest.
3. Return original result for matching idempotent replay; reject mismatched reuse.
4. Compare expected envelope version and open epoch.
5. Atomically append immutable confirmed envelope version, operation result, receipt, and audit event.
6. Expose participant query projections without content-bearing logs.
7. Prove 0–2/horizon, 0–6 total, slot order, and no private/public leakage through properties.

## Smallest Working Units

### SWU-LIR-005 — Select Implementation Target

- Dependencies: SWU-LIR-003/004
- Write scope: decision record only
- Done: repository/runtime/datastore/test/deployment option selected; alternatives and elimination conditions recorded
- Acceptance: selected target demonstrates how every criterion is satisfied or names an explicit blocker
- Verification: manual architecture/operations decision review
- Owner: manual
- Handoff: return concrete paths, commands, versions, owners, and unavailable capabilities

### SWU-LIR-006 — Implement Synthetic Kernel

- Dependencies: SWU-LIR-005
- Write scope: selected isolated app modules and tests only
- Done: invented-data entities, commands, queries, versions, idempotency, audit, and properties implemented
- Acceptance: replay/concurrency/rollback/three-word/slot-2/empty/forbidden-log cases pass
- Verification: stack-specific unit/property/concurrency command frozen by SWU-LIR-005
- Owner: local-fallback
- Handoff: return storage assumptions, schema mapping, tests, and race residue

## Synchronization

The kernel has no hosted-form connection, real admission provider, production
storage, or sealed adapter.

