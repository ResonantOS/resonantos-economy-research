# Context Pack — SWU-LIV2-001

Session evidence only. This strict pack governs one local Task Session; it does
not authorize collection, publication, deployment, storage, cryptographic
custody, token decisions, or capability promotion.

## Identity

- Task/SWU: `SWU-LIV2-001 — Phrase profile and normalization vectors`
- Parent: `TASK-LIV2-001 — Machine Contract Freeze`
- Source work-pack: `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
- Goal run: `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-001`
- Mode: `lean`, strict, Markdown plus JSON
- Runtime: local Task Session; no delegated runtime adapter
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` with pre-existing dirty worktree
- Captured: `2026-07-17T16:46:43Z`

## Obligation Matrix

| ID | Obligation | Selected evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-001-01 | Freeze an immutable phrase-profile version and domain tag. | TASK-LIV2-001 SWU-001 Done; implementation rule 1 | covered | The contract owns both identifiers; validator pins them. |
| O-001-02 | Make the string transformation order explicit and executable. | TASK-LIV2-001 implementation rule 4 | covered | Reject forbidden raw controls first, then collapse whitespace, NFC-normalize, segment, and enforce limits. |
| O-001-03 | Permit TAB/LF/CR only as collapsible whitespace and reject other C0/C1 controls. | TASK-LIV2-001 implementation rule 4; historical negative fixture | covered | Exact code-point ranges are part of the contract and negative vectors. |
| O-001-04 | Reject bidi formatting/isolate controls and zero-width invisible separators. | TASK-LIV2-001 implementation rule 4; historical bidi/zero-width fixtures | covered | Enumerated code points fail with stable typed errors. |
| O-001-05 | Preserve valid Unicode, including NFC combining marks, RTL text, and emoji ZWJ graphemes. | TASK-LIV2-001 edge cases; historical phrase fixtures | covered | U+200C/U+200D are allowed because the selected fixture requires emoji ZWJ and real scripts may require join controls. |
| O-001-06 | Count pinned Unicode grapheme clusters and accept 0–160 per slot. | TASK-LIV2-001 implementation rule 4; historical 160/161 fixtures | covered | `Intl.Segmenter` with `und`/`grapheme` is required; validator fails closed when absent. |
| O-001-07 | Make every positive and negative fixture explicit and detect drift. | SWU-001 Done and Acceptance evidence | covered | Fixture expectations include normalized text, grapheme count, empty state, or typed error/message fragment. |
| O-001-08 | Produce fixture count and content hashes in a nonzero-on-failure validator receipt. | SWU-001 Acceptance and Validation | covered | Validator prints SHA-256 for contract and fixture bytes only after all vectors pass. |
| O-001-09 | Stay inside the three declared implementation paths plus session/status evidence. | SWU-001 Write scope; goal Write Boundary | covered | No current form, API, database, or UI source may change. |
| O-001-10 | Preserve invented-data, public-at-opening, no-feed, and token non-effect boundaries. | D-15; goal Safety And Product Boundary | covered | Vectors are invented; the phrase profile transforms one slot and creates no collection or release behavior. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-001.md`
   - Selectors: Implementation Rules 1 and 4; Edge Cases And Failure Modes;
     `SWU-LIV2-001`; Synchronization.
   - Covers: O-001-01–O-001-09.
   - Evidence excerpt: one Unicode string is normalized or rejected by an
     ordered, versioned, 0–160-grapheme contract; the three output paths and
     exact validator command are fixed.
2. `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/fixtures/time-capsule-fixtures-v1.js`
   - Selectors: `phraseProfile`; `phrases`.
   - Covers: O-001-02–O-001-08, O-001-10.
   - Evidence excerpt: trim/collapse/NFC, Arabic, emoji ZWJ, bidi, U+200B,
     control, and 160/161 vectors are the historical V2 baseline.
3. `DECISIONS.md`
   - Selector: D-15 Future Message Visibility.
   - Covers: O-001-10.
   - Evidence excerpt: accepted saved phrases are hidden until their horizon
     and become public at opening; no private-return path exists.
4. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
   - Selectors: Shared SWU Manifest rows 001–002; Gates; Atomicity And First-Unit Review.
   - Covers: O-001-08–O-001-10.
   - Evidence excerpt: only SWU-001 is selected and its receipt unlocks the
     dependency frontier without authorizing collection.
5. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/VALIDATION-STRATEGY.md`
   - Selectors: L0 contract evidence; Negative Evidence Is First-Class; Secret And Real-Data Rule; Receipt Shape.
   - Covers: O-001-07–O-001-10.
6. `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/CODEX-GOAL-SIDECAR.md`
   - Selectors: Iteration Policy; Write Boundary; Safety And Product Boundary.
   - Covers: O-001-08–O-001-10.
7. `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/HANDOFF.md`
   - Selectors: Constraints And Non-Goals; Write Scope; Fallback Exploration Rule.
   - Covers: O-001-09–O-001-10.

Repository convention reference only:
`development/task-sessions/2026-07-17-time-capsule-demo/SWU-LIR-002/` was
consulted for the existing `CONTEXT-PACK.md`, `context-index.json`, and
`TASK-SESSION-REPORT.md` evidence shape. It closed no product obligation and
did not change the implementation result.

## Architecture And Feature Guidance

This SWU is the lowest reusable contract layer. It transforms one string and
must not know about envelopes, participants, HTTP, SQLite, moderation, close
epochs, releases, or the ritual number. The same JSON vectors must remain
consumable by browser and Node-compatible test runners. Later schemas may refer
to this profile by version/domain, but they may not silently change it.

## Constraints And Non-Goals

- Use invented phrases only.
- Do not modify the current form or add request, storage, analytics, identity,
  moderation, cryptographic, deployment, archive, Bitcoin, or token behavior.
- Do not imply end-to-end confidentiality or public visibility before opening.
- Do not add private-return keys or participant recovery material.
- Do not use external packages or services for validation.
- Fail closed if the runtime lacks `Intl.Segmenter` grapheme support.
- Duplicate phrase values are outside this single-string profile and remain allowed.

## Write Scope

Implementation paths:

- `development/time-capsule-live-intake-v2/contracts/phrase-profile-v1.json`
- `development/time-capsule-live-intake-v2/fixtures/phrase-profile-v1.json`
- `development/time-capsule-live-intake-v2/tools/validate-phrase-profile.mjs`

Evidence/status paths:

- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-001/`
- the SWU-001 rows in the active work-pack/task status and goal frontier after validation

No other path is writable in this Task Session.

## Done Criteria And Validation

The SWU passes only when:

1. version, domain, ordered algorithm, exact forbidden/allowed controls, and
   0–160-grapheme limits are machine readable;
2. all historical baseline cases plus explicit whitespace/control/segmentation
   negatives are represented as standalone vectors;
3. each vector produces its declared normalized result or typed error;
4. deliberate contract/fixture drift makes the validator exit nonzero;
5. the successful receipt prints fixture count and SHA-256 hashes.

Exact command:

```bash
node development/time-capsule-live-intake-v2/tools/validate-phrase-profile.mjs
```

Slice-level negative checks also run mutated temporary copies outside the repo
to prove that expectation drift and contract drift are rejected.

## Decisions, Contradictions, And Resolutions

- Auto-selected, non-blocking: use JSON data plus a dependency-free Node ESM
  validator. This is the smallest browser/Node-neutral conformance surface.
- Resolved contradiction: the task says to reject zero-width format characters
  but separately requires emoji ZWJ to work, and the selected fixture explicitly
  accepts U+200D while rejecting U+200B. Therefore v1 rejects the enumerated
  invisible separators U+200B, U+2060, and U+FEFF, while allowing U+200C/U+200D.
  This resolution is narrower and testable; it does not weaken bidi-control rejection.
- No blocker-level decision remains.

## Gaps And Blockers

- Active blockers: none.
- Deferred: cross-engine browser execution belongs to later integration evidence;
  this SWU freezes shared vectors and validates them in Node.
- Manual access/retell, real intake, external archive/Bitcoin, custody, and final
  close gates are not applicable to this string contract and remain untouched.

## Authority Precedence

1. D-15 and later explicit user decisions.
2. SWU-LIV2-001 contract in TASK-LIV2-001.
3. Historical V2 `phraseProfile` and `phrases` selectors.
4. WORK-PACK/VALIDATION-STRATEGY receipt and boundary rules.
5. Goal handoff controls.

## Fallback Exploration Rule

No fallback search is presently needed. Explore outside the selected evidence
only if the exact validator exposes an unsupported-runtime or segmentation gap;
name that gap and report whether the extra source changes the result.

## Provenance

- Task contract SHA-256: `7f416ac5b82f04d54812083e1c29cb3d4a5b6600a6f4bc8403de9967b414f9be`
- Historical fixture SHA-256: `8604afb174046a86a71dd1b8e8760826abbbcdb5cb865a37b7da3bd49c71d77b`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Work-pack SHA-256: `c0d66deedb913f4b33e4bb2ec93884042f9fa2df88d8b91677e18d3e95bbe031`
- Validation strategy SHA-256: `34d035f65d125b38b52fff1657bc7b9a976955290889ac830392ca9a453bc27b`
- Goal sidecar SHA-256: `a15fa7ef29f7e78ceddb0930cc3475cca457c6ed4f88867d14b55b386db4224d`
- Goal handoff SHA-256: `cb76b8b1c5ddc837bff032a4473e3680232bc7794e95d2ce74071189251ed898`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-001/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-001/context-index.json`
- Strict coverage: pass

