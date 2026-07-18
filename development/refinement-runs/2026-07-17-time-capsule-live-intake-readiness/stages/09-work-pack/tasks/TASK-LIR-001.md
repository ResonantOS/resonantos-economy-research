# TASK-LIR-001 — Non-Collecting Contract Simulator

Layer: L0

Status: `SWU-LIR-001 pass`; `SWU-LIR-002 machine pass/manual evidence flag`; no collection allowed

## Objective

Turn the existing static presentation form into an accessible browser-only
simulation of every participant-visible state without requests, URL submission,
storage, analytics, credentials, or real words.

## Inputs And Outputs

- Inputs: stage 06 Contract Simulator design; FAR-01 through FAR-11; current
  presentation site and form wireframe.
- Outputs: `/contribute/` static simulator, local invented fixtures, browser
  evidence, accessibility/retell receipt.

## Implementation Detail

1. Remove all form action/method and block every submit/Enter default.
2. Implement volatile in-memory UI state only; refresh clears it.
3. Render two slots per horizon; slot 2 follows valid slot 1; visibility has no default.
4. Keep sealed unavailable with honest copy; model quiet and moderation-pending.
5. Normalize/preview values through one versioned local validator interface.
6. Render complete six-place review, consequences, edits, deadline, acknowledgements.
7. Model accessible errors, focus, fake close conflict, zero-word completion, fake receipt.
8. Isolate RTL values and support IME composition without premature validation.
9. Capture zero network/history/storage and access-mode evidence.

Failure modes: GET/query leakage, local/session storage, analytics, active sealed
control, hidden default visibility, slot-2-only, inaccessible error/focus, native
`maxlength` conflicting with grapheme rules, refresh implying durable save.

## Smallest Working Units

### SWU-LIR-001 — Repair Static Simulator

- Dependencies: none
- Write scope: existing presentation `site/contribute/` and simulator assets/tests only
- Done: complete volatile journey and all zero-flow boundaries implemented
- Acceptance: browser trace shows zero requests/history/storage; semantic and keyboard review passes
- Verification: Playwright/browser network+storage inspection and HTML/a11y review
- Owner: local-fallback
- Handoff: use stage 06 Contract Simulator and FAR findings; do not add backend adapters

### SWU-LIR-002 — Versioned State And Access Fixtures

- Dependencies: SWU-LIR-001
- Write scope: simulator fixture/test files only
- Done: shared state/event/word grammar fixtures cover quiet/public/sealed-disabled,
  normalization, IME, bidi, errors, close, receipts, and access modes
- Acceptance: client behavior matches fixtures; critical consequence retell failure blocks pass
- Verification: local fixture runner plus manual screen-reader/RTL/IME matrix
- Owner: local-fallback
- Handoff: return fixture version and any browser/assistive-technology divergence

## Synchronization

Passing this task proves only the non-collecting contract. It cannot connect to
an endpoint or promote synthetic/public/sealed capability states.

## Execution Receipts

- `SWU-LIR-001`: pass on 2026-07-17 —
  `development/task-sessions/2026-07-17-time-capsule-demo/SWU-LIR-001/TASK-SESSION-REPORT.md`
- `SWU-LIR-002`: flag on 2026-07-17 — machine fixture parity passed
  `29/29`, but actual screen-reader, native-IME, and five-person consequence
  retell evidence is unrun —
  `development/task-sessions/2026-07-17-time-capsule-demo/SWU-LIR-002/TASK-SESSION-REPORT.md`
