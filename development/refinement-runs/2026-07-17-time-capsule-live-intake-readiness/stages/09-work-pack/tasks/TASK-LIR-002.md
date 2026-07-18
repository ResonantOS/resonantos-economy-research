# TASK-LIR-002 — Schemas, Lifecycle, Gates, And Negatives

Layer: L0

Status: blocked by TASK-LIR-001 vocabulary and evidence

## Objective

Convert the simulator state contract and architecture into machine-checkable
logical schemas, complete field/data lifecycle and capability-gate matrices,
and adversarial fixtures before selecting a backend stack.

## Implementation Detail

1. Define strict versioned schemas for rules, cohort, envelope/version, slot,
   idempotency record, disposition, close operation, receipt, audit event,
   public record/export, incident, and capability gate.
2. Encode stable identities, uniqueness, closed enums, safe integers, and
   public/private namespace separation.
3. Enumerate every field and derived copy across logs, caches, backups, support,
   receipts, analytics, and exports using the data descriptor contract.
4. Enumerate every gate with owner, evidence, failure, capability effect, and promotion rule.
5. Add negative fixtures for every CRITICAL FAR/DBR/PS counter-example.
6. Make validation reject claims of live, privacy, security, identity, fairness,
   economic, token, or launch readiness from schema conformance.

## Smallest Working Units

### SWU-LIR-003 — Logical Schemas And Matrices

- Dependencies: SWU-LIR-001/002
- Write scope: future `development/time-capsule/spec/`
- Done: schemas/matrices complete; public types contain no private identifier; all fields/gates owned
- Acceptance: schema parser and coverage report show no orphan field, state, copy, or gate
- Verification: repository-local schema/coverage validator created inside write scope
- Owner: local-fallback
- Handoff: return schema IDs, cross-object checks, unresolved owner decisions

### SWU-LIR-004 — Adversarial Fixture Pack

- Dependencies: SWU-LIR-003
- Write scope: future `development/time-capsule/fixtures/`
- Done: idempotency, replay, race, partial failure, lifecycle, export, incident,
  restore, migration, guessing, consent, abuse, Unicode/access negatives encoded
- Acceptance: every review CRITICAL maps to expected output/failure and evidence owner
- Verification: fixture schema/completeness validator plus manual claim-boundary audit
- Owner: local-fallback
- Handoff: return fixture inventory, killed assumptions, and blocked live scenarios

## Synchronization

Schemas and fixtures are specification evidence only. They cannot select a
production stack or validate a live safety property.

