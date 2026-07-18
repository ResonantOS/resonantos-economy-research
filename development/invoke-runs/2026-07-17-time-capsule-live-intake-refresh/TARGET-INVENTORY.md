# Target Artifact Inventory

Inventory mode: lookup

Machine index: `.arcanum/inventory/index.json` read first; parseable.

Matching inventory entry:
`time-capsule-live-intake-refine` (`candidate-plan`, non-authority read model).

## Refresh Targets

| Artifact | Current role | Proposed treatment |
| --- | --- | --- |
| `development/invoke-runs/2026-07-17-time-capsule-intake-form-2h/INVOKE-RESULT.md` | L0 authoring result | mark execution complete and replace stale Task Session route |
| `development/invoke-runs/2026-07-17-time-capsule-intake-form-2h/WORK-PACK.md` | completed L0 execution manifest | close as historical L0 pack; do not extend with backend work |
| `development/invoke-runs/2026-07-17-time-capsule-intake-form-2h/IMPLEMENTATION-LAYERING.md` | compact L0 seam | record L0 machine exit evidence and route L1 to new plan |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/RESULT.md` | high-complexity candidate baseline | retain as historical Refine result; append no execution claim |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack.md` | executable candidate plan | supersede through a revised Invoke plan rather than broad in-place rewrite |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-execution-pack.md` | old wave graph | replace private-return branch and update dependencies in revised plan |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-implementation-layering.md` | old L0–L3 model | revise L3 to public-at-opening close/recovery; defer private return |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack/tasks/TASK-LIR-001.md` | old simulator contract | map to completed V2 evidence, not new execution |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack/tasks/TASK-LIR-006.md` | optional private/sealed branch | remove from initial release graph; preserve as deferred future feature |
| `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/tests/ACCESS-MATRIX.md` | human evidence gate | regenerate for Fixture V2 and five current critical prompts |
| `.arcanum/inventory/entries/time-capsule-live-intake-refine.md` | lookup projection | update only after revised plan is authored and validated |

## Inventory Result

- Mode: lookup
- Sources processed: 1 machine index and 1 matching entry
- Files changed: none
- Index updated: no
- Contradictions flagged: 3
  - L0 route says start SWU-FORM-001 although it is complete;
  - human matrix describes V1 sealed-disabled semantics while V2 is
    public-at-opening only;
  - old L3 plans private/sealed readiness while D-15/D-16 select a different
    initial closing and recovery architecture.
- Validation: pass for lookup
- Next action: use this inventory in the proposal-only refresh report
