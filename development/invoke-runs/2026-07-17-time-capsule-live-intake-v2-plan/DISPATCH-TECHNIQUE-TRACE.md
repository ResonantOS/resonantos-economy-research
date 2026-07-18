# Dispatch Technique Trace — Live Intake Plan V2

Full dispatch is required because the plan crosses Invoke, Task Session, manual
owners, protected participant/custody boundaries, external archive/Bitcoin
evidence, and an irreversible close gate.

| Technique | Trigger | Applied to | Validation expectation | Status |
| --- | --- | --- | --- | --- |
| `sequence` | governed planning phases | context→decision→inventory→plan→Distill→handoff | every non-first step consumes prior handles | pass |
| `concrete_path_evidence` | prior plans/receipts may drift | context pack and task source anchors | no evidence claim relies on a glob or unstated source | pass |
| `handle_handoff` | cross-capability route | plan artifacts to Distill and Task Session | consumers receive paths/selectors, not copied hidden state | pass |
| `scu_swu_reduction` | 36-unit high-complexity plan | task/SWU decomposition | each SWU has one behavior and independent acceptance | pass |
| `recomposition_proof` | small units must preserve the full ritual | Distill and W5 rehearsal | SWUs recompose without hidden glue | pass |
| `validation_loop` | every promotion is evidence-gated | slices, SWUs, waves, final audit | exact validation/repair path exists | pass |
| `artifact_contract_bridge` | Invoke output must be machine/reviewer checkable | work-pack, task files, dispatch, JSON | required artifacts and fields are validated | pass |
| `residue_ledger` | live/protocol gates remain unrun | GAP-LEDGER and task blockers | each gap has owner, repair, and block scope | pass |
| `authority_split_gate` | multiple lifecycle/manual/external owners | dispatch boundaries and W3/W5 gates | planning, execution, validation, and irreversible approval stay separate | pass |
| `state_namespace_boundary` | plan, runtime, secrets, and public receipts differ | dispatch state namespaces | plan writes cannot touch live/secret/external namespaces | pass |
| `execution_receipt_handoff` | Task Session executes one SWU later | WORK-PACK and DISPATCH receipt contract | result has artifacts, validation, blockers, residue, reroute | pass |
| `owner_boundary_check` | Invoke must not claim readiness/close authority | all gates and final handoff | only SWU-001 is eligible; real/irreversible work remains manual | pass |
| `observability_grouping` | observed Invoke run | run ID and dispatch ID | plan and observer records carry stable IDs | pass |

Skipped:

- `fanout`, `dialectic`, `tournament`: no delegated execution was requested or
  needed; current D-01–D-16 decisions remove route competition.
- `decision-gate`: no unresolved planning choice blocks plan authoring.
- `memory_loop`: live repository evidence is sufficient; no memory promotion occurs.

Dispatch validation: `pass` using
`arcanum/formulae/dispatch-spec/scripts/validate-dispatch.py DISPATCH.json`.
