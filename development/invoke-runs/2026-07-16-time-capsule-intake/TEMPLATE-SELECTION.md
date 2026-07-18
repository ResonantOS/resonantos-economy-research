# Invoke Template Selection

## Inventory Lookup

The repository machine index matched `number-lottery-refinement` with the
`time-capsule` tag and pointed to the corrected Refine run. The human index
records the same result and its unvalidated boundaries.

## Selected Templates

| Stage | Selection | Eligibility evidence |
| --- | --- | --- |
| Define | DomainSpec `SPEC.md` baseline | The target has capabilities, operations, records, states, invariants, and owner interfaces. |
| Design | DomainSpec six-view architecture baseline + `architecture` companion | The mechanism needs all six required views and an explicit decision/risk log. |
| Design | candidate `ux-plan` companion | The request explicitly targets a participant journey, form, content, accessibility, and consent. |
| Plan | standalone `IMPLEMENTATION-LAYERING.md` | Required for Invoke plan. |
| Plan | standalone `WORK-PACK.md` in split mode | High complexity: more than five tasks, multiple outputs, durable personal data, and owner gates. |
| Plan | DomainSpec `execution-pack.md` | Required wave choreography for medium/high complexity. |

No eligible-template tie remained: the DomainSpec baseline owns the lifecycle
shape, while UX is a companion rather than a competing primary family.

## Discovery Gate

- Discovery artifact: existing completed Refine run at
  `development/refinement-runs/2026-07-12-number-lottery/`
- Discovery waiver: not required
- Prior design status: historical and partly superseded by the operator correction

## Inventory Result

- Mode: lookup
- Files changed: none
- Machine index used: yes
- Matching entry: `number-lottery-refinement`
- Validation boundary: Inventory is a read model and grants no design or launch authority

