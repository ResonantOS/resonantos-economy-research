# Work Pack — Two-Hour Intake Form

Status: pass for sequential local execution

Complexity: medium

Output mode: split

Active layer: L0

## Objective

Deliver a coherent, browser-validated public-at-opening form in the existing
`site/contribute/` surface without enabling real collection.

## Timebox

| Window | Outcome |
| --- | --- |
| 0–25 minutes | semantic structure and current copy |
| 25–70 minutes | phrase state, review, consent and preview adapter |
| 70–100 minutes | visual/responsive treatment |
| 100–120 minutes | fixture and real-browser validation |

## Task Board

| SWU | Contract | Primary Behavior | Status |
| --- | --- | --- | --- |
| SWU-FORM-001 | [TASK-FORM-001.md](work-pack/TASK-FORM-001.md) | semantic one-form structure | completed |
| SWU-FORM-002 | [TASK-FORM-002.md](work-pack/TASK-FORM-002.md) | phrase/review/receipt interaction | completed |
| SWU-FORM-003 | [TASK-FORM-003.md](work-pack/TASK-FORM-003.md) | responsive visual composition | completed |
| SWU-FORM-VERIFY-004 | [TASK-FORM-VERIFY-004.md](work-pack/TASK-FORM-VERIFY-004.md) | fixture and browser evidence | completed |

## SWU Atomicity

| SWU | Independent Boundary | Candidate Split | Why Retained | Verdict |
| --- | --- | --- | --- | --- |
| 001 | semantic selectors and public copy parse without JS/CSS | copy vs structure | copy has no meaning without its labelled controls | pass |
| 002 | all state transitions pass fixtures on unstyled semantics | validator vs review vs adapter | the in-memory envelope is one state machine and one acceptance surface | pass |
| 003 | desktop/mobile form remains readable without changing behavior | color vs layout | visual acceptance is one responsive composition | pass |
| 004 | validation report closes all prior done criteria | machine vs browser | closure task is exempt and only aggregates evidence | pass |

## Validation Strategy

- HTML parse and ID/label uniqueness.
- `node --check simulator.js`.
- fixture runner passes the phrase and state contract.
- browser: empty, valid, invalid, second-place, edit, receipt and closed flows.
- zero interaction requests, storage, cookies and console errors.
- desktop and mobile screenshots; no horizontal overflow.

## Blockers

- Real API/database readiness is outside this form slice.
- The maintenance Decision Gate remains open but does not change form acceptance.
- Preview copy must remain visible until live adapter evidence exists.

## Dispatch Technique Trace

- `sequence`: design -> SWU 001 -> 002 -> 003 -> verify.
- `scu_swu_reduction`: concerns split by independent acceptance.
- `recomposition_proof`: four SWUs recompose into one participant journey.
- `validation_loop`: every SWU has an explicit check.
- `owner_boundary_check`: Invoke plans; Task Session mutates.
- `execution_receipt_handoff`: each SWU returns a local receipt.

## Distill Verdict

Pass. The form journey is the smallest coherent unit; backend persistence is a
separate layer and visual/interaction concerns are not bundled into one task-shaped SWU.
