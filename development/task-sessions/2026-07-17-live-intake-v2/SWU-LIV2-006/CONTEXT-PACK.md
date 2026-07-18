# Context Pack — SWU-LIV2-006

Session evidence only. This strict pack governs one documentation-only protocol
refresh. It does not perform or satisfy a human access or comprehension run.

## Identity

- Task/SWU: `SWU-LIV2-006 — Regenerate the V2 access matrix`
- Parent: `TASK-LIV2-002 — Human Access And Consequence Evidence`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-006`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependency: `SWU-LIV2-001` pass; fixture profile `2.0.0` present
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T21:42:25Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-006-01 | Identify the protocol and source fixture as V2 `2.0.0`. | fixture header; SWU Done | covered | Replace stale v1 title and instructions with exact V2 identity. |
| O-006-02 | Use short phrases with at most two places in each 2/5/10-year horizon. | `phraseProfile`; quota retell prompt | covered | Protocol states six places and the per-horizon quota. |
| O-006-03 | Preserve one visibility: hidden before its opening and public at opening. | `visibility`; visibility retell prompt | covered | No private-return or visibility-choice path is introduced. |
| O-006-04 | Preserve the candidate-preview boundary. | fixture capability/promotion boundary; preview prompt | covered | Matrix says the current page has no server connection and stores nowhere. |
| O-006-05 | Explain the shared number method without economic effects. | number retell prompt; goal safety | covered | One shared fingerprint plus later Bitcoin block and pre-agreed range; ritual only. |
| O-006-06 | Preserve the quiet path as no phrase, receipt, or record. | quiet retell prompt; state fixture | covered | Quiet remains valid and creates nothing. |
| O-006-07 | Cover keyboard, screen reader, RTL/bidi, native IME, and participant retell separately. | `accessModes` | covered | Evidence rows retain exact modes and do not promote automation into manual proof. |
| O-006-08 | Require all five participants to retell all five critical meanings without coaching. | `retellProtocol` | covered | A 5×5 consequence matrix is the declared gate; no averaging. |
| O-006-09 | Keep receipts non-sensitive and mode-specific. | task privacy rule | covered | Record environment/scenario/outcome/divergence only; never phrases or personal details. |
| O-006-10 | Change only ACCESS-MATRIX plus evidence/status; make no execution claim. | SWU write scope; goal boundary | covered | Protocol refresh only; SWU-007–009 remain blocked for real humans. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `.../work-pack/tasks/TASK-LIV2-002.md`
   - Selectors: Objective; Procedure; Privacy Rule; SWU-LIV2-006; Synchronization.
   - Covers: O-006-01–O-006-10.
2. `.../fixtures/time-capsule-fixtures-v1.js`
   - Selectors: `version`, `capability`, `promotionBoundary`, `phraseProfile`,
     `states`, `accessModes`, `retellProtocol`.
   - Covers: O-006-01–O-006-08.
3. Existing `.../tests/ACCESS-MATRIX.md`.
   - Selectors: stale v1 gate, matrix, record template.
   - Covers: exact replacement target and evidence-status preservation.
4. `.../tests/README.md` and `fixture-runner.js`.
   - Selectors: automation boundary; access/retell declarations.
   - Covers: O-006-04, O-006-07, O-006-10.
5. Active goal sidecar.
   - Selectors: protected human gates; write boundary; safety/product boundary.
   - Covers: O-006-05, O-006-09, O-006-10.

No outside source was used.

## Protocol Guidance

The refreshed matrix is a runnable human protocol, not a historical summary.
It names the five meanings exactly enough for binary receipts while allowing
participants to explain them in their own words. Automated browser evidence may
prepare a manual run, but it cannot satisfy screen-reader pronunciation, native
IME behavior, or participant understanding.

## Constraints And Non-Goals

- Use short phrases, not single words.
- At most two phrases for each of 2, 5, and 10 years.
- All saved phrases are `public_at_opening`; no private return path.
- Current candidate page stores nothing and has no server connection.
- Quiet creates no phrase, receipt, or record.
- No phrases or personal/accessibility details in receipts.
- No claim that SWU-LIV2-007, 008, or 009 has run.
- No UI, fixture, runner, server, database, or cryptography change.
- No token supply, mint, allocation, reward, rank, membership, or governance effect.

## Write Scope

- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/tests/ACCESS-MATRIX.md`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-006/`
- active SWU-006 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

Review the refreshed matrix selector-by-selector against fixture `2.0.0`:

- identity, quota, horizons, fixed visibility, preview boundary, number method,
  quiet path;
- five access modes and their required evidence kinds;
- five critical retell prompts, 5×5 pass rule, full-rerun rule;
- receipt privacy and explicit `unrun` status for all manual gates.

No browser or human execution result may be inferred from this review.

## Decisions And Gates

- Auto-selected: make the document prospective and executable rather than
  preserving stale SWU-LIR status labels as current evidence.
- Gate verdict: pass for documentation execution. Manual gates remain absent.

## Gaps And Blockers

- Active: none for the matrix refresh.
- Deferred: suitable operators for SWU-007/008 and five participants for SWU-009.

## Authority Precedence

1. Goal protected human gates and product boundary.
2. SWU-LIV2-006 write scope and done criteria.
3. Fixture `2.0.0` `accessModes` and `retellProtocol`.
4. Existing matrix only as the bounded replacement target.

## Fallback Exploration Rule

No fallback search is needed. The V2 fixture is the parity authority; external
accessibility guidance would expand rather than execute this bounded refresh.

## Provenance

- Task contract SHA-256: `fa99c928d299ae5a14cbd61f793c4908e6258ec27f6fa6c4855ced4067833b70`
- V2 fixture SHA-256: `8604afb174046a86a71dd1b8e8760826abbbcdb5cb865a37b7da3bd49c71d77b`
- Existing matrix SHA-256: `fba7e51ead81938e2143e5cff2fc2ba77358017d0469c5d34d3e7dd0e8e759f3`
- Test README SHA-256: `31f0cce7831b898392fc487d8345029c5c245e3326f6d0c575dbf169d4bbd796`
- Fixture runner SHA-256: `7f9556d49587a1efb98aabf4149dad9cea6815c011ec69c12cae07554d826f98`
- Goal sidecar SHA-256: `a15fa7ef29f7e78ceddb0930cc3475cca457c6ed4f88867d14b55b386db4224d`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-006/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-006/context-index.json`
- Strict coverage: pass
