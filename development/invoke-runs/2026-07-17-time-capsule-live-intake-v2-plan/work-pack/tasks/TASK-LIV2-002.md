# TASK-LIV2-002 — Human Access And Consequence Evidence

## Objective

Update the stale V1 manual protocol to the V2 short-phrase/public-at-opening
contract, then gather separate access-mode and comprehension evidence without
recording participant phrases or personal details.

- Layer/slice: L0 / S-02
- Wave: W0
- Dependencies: V2 fixtures; SWU-001 for terminology stability
- Write scope: existing `site/contribute/tests/ACCESS-MATRIX.md` and a new
  evidence folder under the bounded Task Session
- Blockers: suitable operators and five participants are human dependencies

## Execution Status

- `SWU-LIV2-006`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-006/TASK-SESSION-REPORT.md)
- `SWU-LIV2-007`–`009`: dependency-ready but blocked on their declared human evidence

## Procedure

Use the V2 five critical retell prompts: quota, future-public visibility,
preview/no-storage boundary, shared fingerprint plus later Bitcoin block, and
quiet/no-record. Every participant must answer every prompt correctly without
coaching. Do not average away a critical misunderstanding.

## Privacy Rule

Receipts contain date, environment/version, scenario IDs, pass/fail, divergence,
repair, and operator. They contain no phrase entered during the test and no
unrelated participant identity or accessibility/medical detail.

## Smallest Working Units

### SWU-LIV2-006 — Regenerate the V2 access matrix

- Status: pass — 23/23 V2 parity checks; all manual lanes remain explicitly
  unrun; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-006/VALIDATION-RECEIPT.json).

- Primary behavior: make the manual protocol match fixture version 2.0.0.
- Independent acceptance: reviewers can verify protocol completeness without running it.
- Candidate children: prompt update and mode update.
- Retained boundary: both define one protocol version; partial update would make receipts ambiguous.
- Dependencies: SWU-LIV2-001.
- Write scope: `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/tests/ACCESS-MATRIX.md`.
- Done: short phrases, fixed public-at-opening, five prompts, receipt privacy, pass/rerun rule.
- Acceptance evidence: diff review against `TimeCapsuleFixturesV2.retellProtocol`.
- Validation: manual selector-by-selector parity review; no execution claim.
- Owner: local-fallback.
- Handoff: change only the matrix; do not alter fixtures or UI in this SWU.

### SWU-LIV2-007 — Screen-reader, keyboard, and RTL manual run

- Primary behavior: prove the semantic journey is understandable through one
  manual assistive-navigation run, including RTL pronunciation/isolation.
- Independent acceptance: receipt is mode-specific and does not depend on IME or retell results.
- Candidate children: screen reader, keyboard, RTL.
- Retained boundary: one operator follows one complete semantic traversal; splitting
  would lose focus/announcement/direction interaction evidence across the journey.
- Dependencies: SWU-LIV2-006.
- Write scope: Task Session evidence only; UI changes require a separately routed repair.
- Done: names, errors, unlock, review, acknowledgements, receipt, focus order,
  visible focus, no trap, Arabic/mixed-direction reading all pass.
- Acceptance evidence: environment/version plus scenario pass/fail receipt.
- Validation: manual ACCESS-MATRIX protocol.
- Owner: manual.
- Handoff: use invented phrases; stop and route repair on any critical failure.

### SWU-LIV2-008 — Native-IME manual run

- Primary behavior: prove composition is not validated prematurely and candidates survive.
- Independent acceptance: input-method receipt is independent of screen-reader and retell evidence.
- Candidate children: composition start/end and post-composition validation.
- Retained boundary: these are one IME transaction; separate checks cannot prove candidate preservation.
- Dependencies: SWU-LIV2-006.
- Write scope: Task Session evidence only.
- Done: at least one native IME completes candidate selection, 160-grapheme rule
  runs after composition, and error/review output preserves the result.
- Acceptance evidence: input method/browser/OS version and scenario receipt.
- Validation: manual ACCESS-MATRIX native-IME scenarios.
- Owner: manual.
- Handoff: never record the test phrase; record only scenario outcome.

### SWU-LIV2-009 — Five-person consequence retell

- Primary behavior: measure whether five people can restate all five consequences.
- Independent acceptance: one 5×5 result matrix has a binary pass rule.
- Candidate children: one SWU per participant or prompt.
- Retained boundary: the declared threshold is the complete 5×5 set; any subset
  cannot answer the product comprehension gate.
- Dependencies: SWU-LIV2-006 and a stable current candidate page.
- Write scope: Task Session evidence only; copy/UI repairs route separately.
- Done: all 25 critical cells pass without coaching.
- Acceptance evidence: anonymized participant labels P1–P5 and prompt outcomes only.
- Validation: matrix completeness and zero failed critical cells.
- Owner: manual.
- Handoff: a failure blocks L2, identifies the misunderstood consequence, and
  requires repair plus full rerun.

## Synchronization

Machine contract work may continue beside this task. No L2 owner package,
adapter promotion, or real intake may treat an incomplete human lane as pass.
