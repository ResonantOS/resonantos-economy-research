# SWU-FORM-002 — Phrase State And Preview Adapter

- Parent: two-hour intake form
- Primary behavior: convert draft phrases into one normalized inline review and
  preview receipt.
- Dependencies: SWU-FORM-001.
- Source anchors: `ARCHITECTURE.md#3-low-level-components`,
  `UX-PLAN.md#state-model`, existing `simulator.js`.
- Write scope: `contribute/simulator.js`, fixture files and fixture runner.
- Done: NFC phrase validator; 160-grapheme limit; conditional second places;
  at least one phrase; inline errors/focus; public consent; edit invalidation;
  preview receipt; close failure; no network/storage.
- Acceptance: updated fixture runner passes all state and Unicode cases.
- Validation: `node --check` plus local fixture runner.
- Owner: local-fallback.
- Handoff: render user text with `textContent` and `bdi`; never use HTML interpolation.

