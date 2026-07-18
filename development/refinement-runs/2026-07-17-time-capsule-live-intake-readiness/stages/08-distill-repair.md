# Stage 08 Receipt — Distill Repair

## Distill Result

- Target context: stage 06 candidate design plus stage 07 repair obligations
- Objective and output artifact: validate the design's smallest unit and emit plan-ready repairs without inventing owner decisions
- Mode and budget: `validate`; one Balancer pass and one Proposer repair pass
- Proposal tracks: one existing selected architecture
- Recursive rounds: 1 / 1
- Verdict: `pass`

## Role Conversation Trace

- Balancer objection `acceptance precision`: the architecture names L0 behavior
  but does not yet define test matrices or thresholds.
- Repair: Plan must create one task/SWU for the zero-flow contract simulator and
  one for versioned interaction/accessibility fixtures. This does not enlarge
  LIR-SCU-01; the two SWUs recompose into it.
- Balancer objection `catalog completeness`: field descriptors and capability
  gates are examples until every field/copy and every gate has an owner,
  evidence, failure, and promotion rule.
- Repair: Plan must create schema/matrix artifacts before any synthetic backend.
- Balancer objection `authority`: deletion/takedown versus immutable public
  bytes cannot be solved by implementation.
- Repair: mark it a manual blocker for public-live; synthetic work may model
  alternatives but cannot select one.

## Repair Validation

| Repair | Owner in Plan | Acceptance effect | Verdict |
| --- | --- | --- | --- |
| DR-01 interaction/zero-flow/access evidence | L0 form task | blocks L1 until simulator and fixtures agree | repaired by bounded SWUs |
| DR-02 complete data/gate matrices | L0 schema task | blocks synthetic persistence until machine-checkable | repaired by bounded SWUs |
| DR-03 immutable-publication decision | public-live owner task | blocks public-live; no code fallback | retained as manual gate |

## Toy Failure Tests Required In Plan

- implicit Enter produces a request or URL word leak;
- retry creates a second confirmation or changes receipt;
- stale writer commits after the close fence;
- partial publication leaves receipts and export inconsistent;
- a new private storage field appears in public export;
- backup restore reopens a closed cohort;
- public deletion request conflicts with reproduced canonical bytes;
- one-word commitment can be guessed offline;
- steward disappearance makes restore/release impossible.

## Closure And Recomposition Proof

LIR-SCU-01 still closes as simulator plus fixtures. DR-01 and DR-02 are not new
products; they make its acceptance decidable and its handoff machine-readable.
DR-03 remains outside implementation and therefore cannot contaminate the SCU.

## Evolution Profile

```text
contract simulator
  -> machine schemas/fixtures
  -> synthetic public-intake kernel
  -> public-live owner decision and staging
  -> optional sealed decision/profile branch
```

Each arrow requires evidence; no later branch is prebuilt inside the first unit.

## Premortem

Most likely failure: the team sees a polished simulator and connects it directly
to a database. Guardrail: the simulator has no transport adapter; only validated
schemas/fixtures may hand off to the separately scoped synthetic kernel.

## Native Stage Receipt

```yaml
dispatch_id: refine-2026-07-17-time-capsule-live-intake-readiness
step_id: s08
capability_ref: distill
receipt_kind: native-stage
status: pass
artifacts:
  - stages/08-distill-repair.md
validation:
  - all three design-review repairs assigned to bounded plan owners
  - LIR-SCU-01 closure and recomposition preserved
  - toy failure evidence named
observer_status: run-local receipt prepared
blockers: []
residue: DR-03 blocks public-live until owner resolution
handoff_note: Invoke Plan may proceed; it must select LIR-SCU-01 as the first SWU boundary and keep live gates manual.
```

