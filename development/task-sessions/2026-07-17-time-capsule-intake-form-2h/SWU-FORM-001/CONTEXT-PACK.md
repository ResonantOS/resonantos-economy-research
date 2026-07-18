# Context Pack — SWU-FORM-001

Mode: lean

Strict coverage: pass

## Task

Replace the old word/public-versus-sealed simulator markup with one semantic
public-at-opening phrase form.

## Obligations

| ID | Requirement | Source | Status |
| --- | --- | --- | --- |
| O-01 | one continuous form | Invoke UX Plan, Surfaces | covered |
| O-02 | 2/5/10 fieldsets and two phrase places each | D-02, D-15 | covered |
| O-03 | all accepted phrases public at opening | D-15 | covered |
| O-04 | review, consent, receipt and quiet regions exist | architecture workflow | covered |
| O-05 | preview boundary remains unmistakable | live-intake RESULT | covered |
| O-06 | no endpoint or credential markup | task write boundary | covered |

## Write Scope

`development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/index.html`

## Validation

- HTML parses.
- IDs are unique.
- six labelled phrase inputs exist.
- no word-only validation, visibility radio or sealed control remains.
- review, receipt, error and live-status regions exist.

## Exclusions

CSS, JavaScript, API, storage, credentials, deployment and production claims.

