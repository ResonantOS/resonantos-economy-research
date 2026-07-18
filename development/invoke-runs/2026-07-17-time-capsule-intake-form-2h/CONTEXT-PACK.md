# Context Pack — Two-Hour Intake Form

Mode: lean

Strict coverage: pass for the frontend form slice

## Objective

Within one bounded implementation slice, turn the existing non-collecting
`/contribute/` simulator into the current public-at-opening participant form:
short phrases, two places per 2/5/10-year horizon, one continuous page, inline
review, explicit future-public consent, and a preview receipt.

## Obligations

| ID | Obligation | Evidence | Status |
| --- | --- | --- | --- |
| O-01 | At most two phrases per horizon. | `DECISIONS.md#D-02`, `#D-15` | covered |
| O-02 | Every saved phrase becomes public at its horizon. | `DECISIONS.md#D-15` | covered |
| O-03 | One continuous form with review/confirm, not a wizard. | operator request; existing `contribute/` | covered |
| O-04 | Short phrases replace one-word validation. | operator request; D-15 copy boundary | covered |
| O-05 | Editing remains reversible until close. | `DECISIONS.md#D-04`, `#D-07` | covered |
| O-06 | The form does not imply one phrase equals tokens. | `DECISIONS.md#D-08`, `#D-09` | covered |
| O-07 | No live-data claim without a proven API. | live-intake `RESULT.md`; inventory entry | covered |
| O-08 | Keyboard, Unicode/IME, narrow-screen, error, review and receipt paths remain testable. | LIR work-pack; existing fixtures | covered |

## Selected Sources

- `DECISIONS.md`: D-02, D-04, D-07 through D-09, D-15.
- `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/RESULT.md`:
  capability-state and evidence boundary.
- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/`:
  brownfield form and test surface.
- `.arcanum/inventory/entries/time-capsule-live-intake-refine.md`:
  candidate-plan lookup and live-intake warning.

## Constraints

- Two-hour frontend timebox.
- No backend, database, deployment, credentials, cryptography or real submissions.
- No token-policy effect.
- No private-return path.
- Existing unrelated dirty-worktree changes remain untouched.

## Write Scope

- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/`
- this Invoke run
- matching Task Session evidence only

## Validation Surface

- HTML parse and semantic selectors.
- JavaScript syntax.
- updated fixture runner.
- real-browser desktop/mobile interaction, keyboard, console, request and storage checks.

