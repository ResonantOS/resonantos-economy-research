# Context Pack — SWU-LIR-002

Session evidence only. This pack does not authorize collection, publication,
production intake, or capability promotion.

## Identity

- Task: `SWU-LIR-002 — Versioned State And Access Fixtures`
- Parent: `TASK-LIR-001 — Non-Collecting Contract Simulator`
- Goal: lock the simulator's visible behavior into reusable local fixtures and
  expose the first evidence-dependent access/comprehension gate
- Mode: `lean`, strict
- Write target: simulator `fixtures/` and `tests/` plus Task Session evidence
- Git baseline: `c617ace5f10df9f46ec9f203743f4baca5cacbd6`
- Captured: `2026-07-17T04:42:11Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status |
| --- | --- | --- | --- |
| O-01 | Publish one explicit, immutable local fixture identity and version. | SWU done criterion; CR-05 | covered |
| O-02 | Cover the shared word grammar, normalization, state, and event vocabulary. | SWU done criterion; L0 workflow | covered |
| O-03 | Cover quiet, public moderation-pending, and sealed-disabled outcomes without enabling sealed input. | task detail 4; CR-04; capability table | covered |
| O-04 | Exercise Unicode NFC, grapheme length, internal punctuation, IME event suppression, RTL/bidi isolation, and invalid errors. | CR-05; FAR-06/FAR-07 | covered |
| O-05 | Exercise conditional slot 2, review, acknowledgements, close, word and zero-word receipts, reset, and Enter suppression. | task details 3/6/7; SWU done criterion | covered |
| O-06 | Predeclare keyboard, screen-reader, RTL, native IME, and participant-retell scenarios. | CR-09; FAR-11 | covered |
| O-07 | Treat any critical consequence misunderstanding as a promotion blocker. | CR-09; FAR-11 | covered |
| O-08 | Keep the existing form source unchanged and add no request, persistence, analytics, credential, or cryptographic path. | exact SWU write scope; task synchronization | covered |
| O-09 | Return fixture version, automated evidence, divergences, and unrun human proof without overstating a pass. | SWU handoff; Task Session contract | covered |

Strict coverage: `9/9`, pass.

## Selected Evidence

1. `.../stages/09-work-pack/tasks/TASK-LIR-001.md`
   - Selectors: Implementation Detail; SWU-LIR-002; Synchronization.
   - Covers: O-01–O-09.
2. `.../stages/06-architecture-bundle.md`
   - Selectors: capability table; Contract Simulator; L0 Contract Simulation.
   - Covers: O-02–O-05, O-08.
3. `.../subagents-review/findings.md`
   - Selectors: CR-04, CR-05, CR-09.
   - Covers: O-01, O-03, O-04, O-06, O-07.
4. `.../subagents-review/form-accessibility-review.md`
   - Selector: FAR-11.
   - Covers: O-06, O-07, O-09.
5. `.../SWU-LIR-001/BROWSER-VALIDATION.md`
   - Selectors: Access and responsive evidence; Residue.
   - Covers: O-04–O-06, O-09.
6. `.../site/contribute/index.html` and `simulator.js`
   - Selectors: form controls; validator; event handlers; review/receipt/close.
   - Covers: O-02–O-05, O-08.

Broader backend, database, identity, deployment, token, and sealed-cryptography
sources are excluded because this SWU cannot select or modify them.

## Hard Constraints

- Only fixture/test files and Task Session evidence may be added.
- The form's HTML, CSS, and JavaScript behavior remain unchanged.
- Fixtures use invented values only and never become production data.
- Sealed remains an expected disabled state, never a simulated protection.
- Browser automation can validate DOM behavior, keyboard semantics, and bidi
  structure; it cannot stand in for an actual screen reader, native IME, or
  participant comprehension session.
- An absent human/access-mode run is recorded as unrun, not pass.
- No deployment, CSP, DNS, endpoint, storage, analytics, credential, crypto,
  database, or token change is in scope.

## Done And Validation Surface

The machine portion is done when the local runner proves the client matches all
version-1 grammar/state/event fixtures with no interaction requests or stored
state. Full SWU acceptance additionally requires the predeclared manual access
matrix and participant retell protocol to run. Any critical consequence that a
participant cannot retell blocks the SWU and all downstream L0 promotion.
