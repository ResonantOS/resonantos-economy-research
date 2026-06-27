# Run Manifest

Run ID: `20260627T041500Z-cav2-fixture-full-refine`
Status: pass
Preset: full
Research mode: no-research

## Artifacts

| Artifact | Status | Purpose |
| --- | --- | --- |
| [REFINE-SEED-PROPOSAL.md](REFINE-SEED-PROPOSAL.md) | pass | Target, scope, source context, and done criteria. |
| [REFINE-DISPATCH.json](REFINE-DISPATCH.json) | pass | Dispatch-spec route for the full Refine loop. |
| [RUNTIME-HANDOFF.md](RUNTIME-HANDOFF.md) | pass | Next-route handoff boundary. |
| [evidence-index.json](evidence-index.json) | pass | Machine-readable artifact and receipt index. |
| [RESULT.md](RESULT.md) | pass | Final Refine synthesis. |
| [stages/01-context-builder/RESULT.md](stages/01-context-builder/RESULT.md) | pass | Evidence baseline. |
| [stages/02-invoke-define/RESULT.md](stages/02-invoke-define/RESULT.md) | pass | Defined implementable unit. |
| [stages/03-interrogation-review/RESULT.md](stages/03-interrogation-review/RESULT.md) | pass | Initial critique. |
| [stages/04-research-decision/RESULT.md](stages/04-research-decision/RESULT.md) | pass | Research mode decision. |
| [stages/05-distill/RESULT.md](stages/05-distill/RESULT.md) | pass | Coherent-unit selection. |
| [stages/06-invoke-design/RESULT.md](stages/06-invoke-design/RESULT.md) | pass | Fixture package design. |
| [stages/07-interrogation-design-review/RESULT.md](stages/07-interrogation-design-review/RESULT.md) | pass | Design critique. |
| [stages/08-distill-repair/RESULT.md](stages/08-distill-repair/RESULT.md) | pass | Repair and validation notes. |
| [stages/09-invoke-plan/RESULT.md](stages/09-invoke-plan/RESULT.md) | pass | Plan handoff. |
| [stages/10-final-synthesis/RESULT.md](stages/10-final-synthesis/RESULT.md) | pass | Final stage synthesis. |
| [../../contribution-edge-fixture-implementation-plan.md](../../contribution-edge-fixture-implementation-plan.md) | pass | Task-session-ready fixture plan. |

## Gate Results

| Gate | Result |
| --- | --- |
| Claim <= evidence | pass |
| Research != policy | pass |
| Score != authority | pass |
| Public/private clean | pass |
| Dispatch-spec route shape | pass |
| Native stage receipts | pass |

## Command Verification

```text
formulae/dispatch-spec/scripts/validate-dispatch.py development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/REFINE-DISPATCH.json
VALIDATION=pass
```

## Next Route

`task-session` may implement only the fixture package named in
[development/contribution-edge-fixture-implementation-plan.md](../../contribution-edge-fixture-implementation-plan.md).
