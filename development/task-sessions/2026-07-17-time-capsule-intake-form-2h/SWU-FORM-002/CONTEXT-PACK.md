# Context Pack — SWU-FORM-002

Mode: lean

Strict coverage: pass

## Task

Implement the public-at-opening phrase state machine and a volatile preview
adapter behind the semantic form completed in SWU-FORM-001.

## Obligations

| ID | Requirement | Source | Status |
| --- | --- | --- | --- |
| O-01 | trim, NFC, collapsed whitespace and 160-grapheme validation | Invoke Architecture | covered |
| O-02 | reject control, bidi-control and zero-width input | Invoke Architecture | covered |
| O-03 | unlock only the second phrase after a valid first phrase | D-02, UX Plan | covered |
| O-04 | require at least one phrase for a receipt; quiet exit creates none | UX Plan | covered |
| O-05 | render six-place review with public-at-opening consequence | D-15 | covered |
| O-06 | require two consequence acknowledgements | UX Plan | covered |
| O-07 | preview receipt remains volatile and visibly non-submitted | Architecture | covered |
| O-08 | closed state fails closed; editing invalidates review | Architecture | covered |
| O-09 | no network, storage, cookies or HTML interpolation | task boundary | covered |
| O-10 | Unicode, IME, bidi and state fixtures remain browser-runnable | validation plan | covered |

## Write Scope

- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/simulator.js`
- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/fixtures/time-capsule-fixtures-v1.js`
- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/tests/fixture-runner.js`
- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/tests/fixture-runner.html`

## Validation

- `node --check` for every JavaScript file.
- fixture identity and V2 phrase/state cases resolve.
- source scan finds no fetch, XMLHttpRequest, WebSocket, storage write, cookie
  write, or `innerHTML`.
- local fixture runner is reserved for SWU-FORM-VERIFY-004 browser closure.

## Exclusions

CSS, API, database, credentials, deployment, cryptographic implementation,
production receipt semantics and live collection.
