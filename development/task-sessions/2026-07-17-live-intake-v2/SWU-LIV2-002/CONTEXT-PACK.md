# Context Pack — SWU-LIV2-002

Session evidence only. This strict pack governs one local Task Session for the
envelope/slot schema. It does not authorize intake, persistence, invitations,
publication, deployment, or any token effect.

## Identity

- Task/SWU: `SWU-LIV2-002 — Envelope and slot schema`
- Parent: `TASK-LIV2-001 — Machine Contract Freeze`
- Source work-pack: `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
- Goal run: `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-002`
- Mode: `lean`, strict, Markdown plus JSON
- Runtime: local Task Session; no delegated adapter
- Dependency receipt: `SWU-LIV2-001` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` with pre-existing dirty worktree
- Captured: `2026-07-17T16:54:18Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-002-01 | Version and domain-tag one confirmed-envelope schema and bind it to phrase profile v1. | TASK-LIV2-001 rules 1–2; SWU-001 receipt | covered | Schema pins both its own identity and the exact phrase-profile ref. |
| O-002-02 | Require exactly six uniquely identified slots in canonical 2/5/10 × position 1/2 order. | SWU-002 Done; D-02; V2 Participant Contract | covered | `prefixItems`, `minItems=maxItems=6`, and validator identity checks enforce order and uniqueness. |
| O-002-03 | Allow an empty slot while requiring at least one nonempty phrase in a confirmed envelope. | TASK-LIV2-001 rule 3; V2 Participant Contract | covered | Empty strings are valid slot values; an all-empty envelope is rejected. Quiet creates no envelope. |
| O-002-04 | Reject a nonempty second position unless the same horizon's first position is nonempty. | SWU-002 Done and task edge cases | covered | Three explicit conditional invariants and negative fixtures cover the horizons. |
| O-002-05 | Permit duplicate phrase values but never duplicate slot identities. | TASK-LIV2-001 edge cases | covered | Identity follows fixed position; phrase equality has no uniqueness rule. |
| O-002-06 | Permit only `public_at_opening` and preserve hidden-until-horizon semantics. | D-15; V2 Participant Contract | covered | Every slot has the single constant visibility; private/early-public values fail. |
| O-002-07 | Require each nonempty phrase to already be canonical under phrase profile v1. | SWU-001 contract; SWU-002 dependency | covered | Validator re-applies the frozen profile and rejects normalization or limit drift. |
| O-002-08 | Provide explicit valid/invalid fixtures and a nonzero-on-drift local report. | SWU-002 Acceptance/Validation; validation strategy | covered | Fixtures cover shape, order, quota, visibility, phrase, and extra-field negatives. |
| O-002-09 | Stay within three declared implementation paths plus evidence/status synchronization. | SWU-002 Write scope; goal boundary | covered | No form, command state, API, database, or UI mutation is permitted. |

Strict coverage: `9/9`, pass.

## Selected Sources

1. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-001.md`
   - Selectors: Implementation Rules 1–4; Edge Cases; SWU-LIV2-002.
   - Covers: O-002-01–O-002-09.
2. `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/README.md`
   - Selectors: Participant Contract; Important Boundary; Future Live Adapter Seam.
   - Covers: O-002-02–O-002-03, O-002-06, O-002-09.
3. `DECISIONS.md`
   - Selectors: D-02 Initial Admission And Quota Credential; D-15 Future Message Visibility.
   - Covers: O-002-02, O-002-06, O-002-09.
4. `development/time-capsule-live-intake-v2/contracts/phrase-profile-v1.json`
   - Selectors: identity, algorithm, limits, errors, non-effects.
   - Covers: O-002-01, O-002-07.
5. `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-001/TASK-SESSION-REPORT.md`
   - Selectors: result, done-criteria audit, receipt hashes.
   - Covers: O-002-01, O-002-07–O-002-09.
6. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
   - Selectors: SWU rows 001–006; Gates; Next Route.
   - Covers: O-002-08–O-002-09.
7. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/VALIDATION-STRATEGY.md`
   - Selectors: L0 contract; Negative Evidence; Secret And Real-Data Rule; Receipt Shape.
   - Covers: O-002-08–O-002-09.
8. `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/CODEX-GOAL-SIDECAR.md`
   - Selectors: Iteration Policy; Write Boundary; Safety And Product Boundary.
   - Covers: O-002-08–O-002-09.

No outside source was needed.

## Architecture And Feature Guidance

The envelope is a confirmed six-place value object, not a participant record or
database entity. It contains only the schema/profile references and six ordered
slot values. Quiet produces no envelope. Admission/invitation state, close epoch,
idempotency, persistence, moderation, publication, and public feed behavior belong
to later contracts and must not be smuggled into this schema.

## Constraints And Non-Goals

- Use invented phrase values only.
- Exactly two optional places exist for each 2-, 5-, and 10-year horizon.
- Each slot is present; emptiness is represented by the empty string, not by a
  missing slot, `null`, or omitted phrase field.
- A confirmed envelope must contain at least one nonempty canonical phrase.
- Position 2 may be nonempty only when position 1 at that horizon is nonempty.
- Duplicate phrase text is valid.
- Visibility is always `public_at_opening`; no private-return choice exists.
- Do not add invite identifiers, participant identity, close time, version
  transition, moderation, storage, crypto, deployment, or token fields.
- Do not modify the current form or the frozen phrase-profile files.

## Write Scope

Implementation paths:

- `development/time-capsule-live-intake-v2/contracts/envelope-v1.schema.json`
- `development/time-capsule-live-intake-v2/fixtures/envelope-v1.json`
- `development/time-capsule-live-intake-v2/tools/validate-envelope.mjs`

Evidence/status paths:

- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-002/`
- active SWU-002 work-pack/task and goal frontier rows after validation

No other path is writable in this Task Session.

## Done Criteria And Validation

Pass requires a machine-readable schema and validator that reject wrong slot
count/order/identity, missing fields, all-empty confirmation, second-without-first,
noncanonical/too-long phrases, wrong visibility/profile/version, and undeclared
fields. Valid fixtures must include sparse, complete, RTL/emoji, and duplicate-text
envelopes.

Exact command:

```bash
node development/time-capsule-live-intake-v2/tools/validate-envelope.mjs
```

The successful report records valid/invalid counts and SHA-256 hashes. In-memory
schema and fixture mutation guards must also be rejected.

## Decisions And Gates

- Auto-selected, non-blocking: JSON Schema 2020-12 plus explicit
  `x-resonant-invariants` and a dependency-free Node validator. Standard JSON
  Schema describes the portable shape; the validator executes cross-slot and
  grapheme invariants without adding a package.
- Auto-selected, non-blocking: store the canonical normalized phrase directly in
  each slot. Raw drafts remain a UI concern; later confirmed commands carry this
  value object.
- Blocker-level decisions: none.
- Gate verdict: pass; SWU-001 dependency is content-addressed and all SWU-002
  obligations have evidence.

## Gaps And Blockers

- Active: none.
- Deferred: browser cross-engine parity and manual access evidence remain later
  gates. This schema does not authorize real intake or L2 promotion.

## Authority Precedence

1. D-02 and D-15.
2. SWU-LIV2-002 contract and TASK-LIV2-001 implementation rules.
3. Passed SWU-LIV2-001 phrase profile and receipt.
4. V2 Participant Contract.
5. WORK-PACK, validation strategy, and goal controls.

## Fallback Exploration Rule

No fallback search is needed. Explore only for a named validator/runtime gap;
report any extra source and whether it changes the result.

## Provenance

- Task contract SHA-256: `78d99e180127bbe5e7e56f1f311e198b28c88a59328ebdf576369355f57ea6ea`
- V2 README SHA-256: `aabb41b49c444c71c86a136b42b3aed7a6640cd56994cfac771c9e3337138a15`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Phrase contract SHA-256: `47b78bf8fe93ad3ee5ffd6c34e2838105cd83e68d4ffae9eb2749624b9c25ec5`
- SWU-001 report SHA-256: `83908a317682904fbc3e842143aa3867a914a25f350cf1ac1906e93b3965d451`
- Work-pack SHA-256: `81fa6f32517ac1e0d3a786add3ada3c9947a417c66f144531d1443421ca0e536`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-002/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-002/context-index.json`
- Strict coverage: pass

