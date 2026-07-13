# Number Lottery / RCBC Work-Pack

Status: planned, not authorized for execution
Complexity: high
Output mode: split
Active layer window: none; L0 is recommended next
Lifecycle owner for execution: Task Session per selected SWU

## Objective

Turn the repaired RCBC design into falsifiable specification and synthetic
evidence layers without collecting real community content, changing token
policy, or claiming cryptographic/economic/behavioral validation.

## Source Design References

- `stages/06-DESIGN.md`
- `stages/07-DESIGN-REVIEW.md`
- `stages/08-DISTILL-REPAIR.md`
- `stages/08-toy-game-evidence.json`
- `stages/research-dispatch/findings.md`

## Delivery Boundary

- In scope: specifications, schemas, synthetic fixtures, deterministic toy
  implementation, evidence-harness receipts, owner decisions.
- Out of scope: live intake, real personal content, production storage, token
  supply changes, rewards/credit/governance integration, public launch.

## Task Board

| Task | Layer | Status | Contract |
| --- | --- | --- | --- |
| NL-001 Authority/source contracts | L0 | planned | `09-work-pack/tasks/TASK-NL-001.md` |
| NL-002 Fixture specification package | L0 | planned | `09-work-pack/tasks/TASK-NL-002.md` |
| NL-003 Deterministic public toy | L1 | blocked by L0 | `09-work-pack/tasks/TASK-NL-003.md` |
| NL-004 Evidence harness run | L1 | blocked by NL-003 | `09-work-pack/tasks/TASK-NL-004.md` |
| NL-005 Stewardship/event state model | L2 | blocked by L1 | `09-work-pack/tasks/TASK-NL-005.md` |
| NL-006 Commitment-extension criterion | L3 | blocked by L2 + owners | `09-work-pack/tasks/TASK-NL-006.md` |
| NL-VERIFY-007 Pilot readiness audit | L4 | blocked | `09-work-pack/tasks/TASK-NL-VERIFY-007.md` |

## SWU Manifest

| SWU | Parent | Goal | Dependencies | Write scope | Evidence/check | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| SWU-NL-001 | NL-001 | specify PolicySourceSnapshot | none | future source-contract folder | schema + source selector review | local-fallback |
| SWU-NL-002 | NL-001 | specify owner/interface matrix | 001 | future source-contract folder | all owner fields resolved/deferred | manual |
| SWU-NL-003 | NL-002 | create common fixture envelope schema | NL-001 | future fixture folder | schema validator pass | subagent |
| SWU-NL-004 | NL-002 | encode nine fixture specs | 003 | future fixture folder | completeness checker | subagent |
| SWU-NL-005 | NL-002 | add specification-only validator | 004 | future tools/tests | negative tests reject result claims | local-fallback |
| SWU-NL-006 | NL-003 | implement canonical public records | NL-002 | future toy folder | known-byte fixtures | subagent |
| SWU-NL-007 | NL-003 | implement manifest/root/integer | 006 | future toy folder | independent reproduction | subagent |
| SWU-NL-008 | NL-003 | implement PolicyNonEffectCheck | 007 | future toy/tests | mutation matrix hard-fail | local-fallback |
| SWU-NL-009 | NL-004 | run L1 fixture subset | NL-003 | future evidence run folder | harness receipts | research-evidence-harness |
| SWU-NL-010 | NL-004 | adjudicate candidate verdicts | 009 | future evidence report | claim/evidence audit | manual |
| SWU-NL-011 | NL-005 | specify disposition overlay | NL-004 | future lifecycle folder | transition table review | subagent |
| SWU-NL-012 | NL-005 | specify lifecycle/migration model | 011 | future lifecycle folder | negative transition fixtures | subagent |
| SWU-NL-013 | NL-006 | freeze commitment threat criterion | NL-005 + security/privacy owners | future security folder | criterion review | manual |
| SWU-NL-014 | NL-006 | specify commitment fixtures | 013 | future security fixtures | schema + security review | subagent |

## Waves

- W0 / L0: NL-001 → NL-002. Produces a specification package only.
- W1 / L1: NL-003 → NL-004. Produces and tests a synthetic public toy.
- W2 / L2: NL-005. Produces consent/stewardship/event state evidence.
- W3 / L3: NL-006. Produces a commitment-extension criterion and fixtures.
- W4 / L4: NL-VERIFY-007. Owner readiness audit; may remain blocked.

No wave may start from this artifact alone. Each requires a separately approved
Task Session selecting exactly one SWU.

## Validation Strategy

- schema and format checks for every specification artifact;
- negative tests ensuring specification artifacts cannot claim `pass` evidence;
- two-implementation reproducibility for canonical bytes/root/integer;
- property/fixture tests for duplicates, grinding, display disposition,
  non-participation, migration, status, and policy non-effect;
- structured receipts from research-evidence-harness;
- independent claim/evidence audit before layer promotion.

## Blockers And Gaps

- L0 owner decisions and output paths are not yet approved.
- Exact schemas/algorithms are not selected.
- No evidence harness run exists.
- Eligibility, moderation, privacy/legal, stewardship, and security owners are
  not formally assigned for execution.
- Machine inventory projection is already known stale and cannot be treated as
  current execution context without regeneration/truth-check.
- Public naming is unresolved; “Number Lottery” remains codename.

## Handoff Contract

Future execution must:

1. select one SWU;
2. run Context Builder against the SWU’s source anchors;
3. preserve its exact write scope;
4. return the standard native/subagent receipt;
5. synchronize task/work-pack state only after validation;
6. stop on any ritual-to-policy dependency or private-data request.

Next route: deferred Task Session for `SWU-NL-001` after explicit approval.
