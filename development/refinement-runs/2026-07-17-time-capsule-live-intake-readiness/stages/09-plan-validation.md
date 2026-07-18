# Automatic Distill Validation — Stage 09 Plan

Verdict: `pass` for a one-SWU L0 handoff; later layers remain owner-gated

## Checks

| Check | Result | Evidence |
| --- | --- | --- |
| smallest coherent unit | pass | SWU-LIR-001 begins LIR-SCU-01; SWU-LIR-002 completes its fixture half |
| recomposition | pass | simulator -> schemas/fixtures -> synthetic kernel -> public decision -> optional sealed branch |
| hidden acceptance gaps | pass | BL-01 through BL-07 name stack, owner, policy, continuity, sealed, and evidence gaps |
| overbuilt future scale | pass | production, real data, cryptography, and launch excluded from L0/L1 synthetic work |
| implementation detail | pass | each task defines inputs, ordered rules/algorithm, failures, validation, and handoff |
| SWU completeness | pass | 13 SWUs each have one parent, dependencies, write scope, done/acceptance, check, owner, handoff |
| navigation | pass | active layer L0; selected first SWU explicitly not authorized |
| authority boundary | pass | manual owner decisions cannot be simulated by code; Task Session owns execution |

## Recomposition Proof

SWU-LIR-001 and 002 jointly implement the selected contract simulator without
transport or persistence. Their versioned state/event vocabulary becomes the
source of SWU-LIR-003/004 schemas and fixtures. Those machine contracts constrain
the stack choice and synthetic kernel rather than being rewritten by it. Later
public and sealed capabilities consume synthetic receipts plus their own owner
decisions; they cannot weaken earlier guarantees.

## Gaps And Owners

The plan carries seven blockers. Each has an owner and repair SWU. None affects
the acceptance criteria of SWU-LIR-001, so the first L0 handoff is navigable.
All block mutation-capable work in their affected later layer.

## Premortem

Likely failure: the team treats the static simulator as a production form and
adds a quick submit endpoint. Guard: its task scope forbids transport; the first
backend task is separately blocked by machine schemas and a manual stack decision.

