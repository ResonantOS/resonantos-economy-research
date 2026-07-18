# Context Pack — SWU-FORM-VERIFY-004

Mode: lean

Strict coverage: pass

## Task

Validate the complete candidate intake in a real browser and synchronize only
the evidence and participant-facing form handoff.

## Obligations

| ID | Requirement | Source | Status |
| --- | --- | --- | --- |
| O-01 | fixture runner passes V2 Unicode and state cases | SWU-FORM-002 | covered |
| O-02 | empty, valid, second-place, review, receipt, edit, quiet and close flows work | Work Pack | covered |
| O-03 | console is clean and interactions create no browser persistence | Work Pack | covered |
| O-04 | desktop and 360px layouts have no horizontal overflow | SWU-FORM-003 | covered |
| O-05 | actionable controls meet the 44px target and keyboard flow works | SWU-FORM-003 | covered |
| O-06 | screenshots and machine-readable browser receipt are retained | closure contract | covered |
| O-07 | README restates preview/live boundary and next backend seam | closure contract | covered |

## Write Scope

- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/README.md`
- `development/task-sessions/2026-07-17-time-capsule-intake-form-2h/`
- `output/playwright/time-capsule-intake/`

## Validation

Playwright CLI against a local static server, plus source contract scans.

## Exclusions

Participant copy changes, behavior changes, API, database, credentials,
deployment, production promotion, manual screen-reader certification and
participant comprehension claims.
