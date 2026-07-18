# Context Pack — SWU-LIV2-005

Session evidence only. This strict pack governs one pure capability-gate contract.
It does not promote a real capability or satisfy any evidence handle.

## Identity

- Task/SWU: `SWU-LIV2-005 — Capability gates and negative fixtures`
- Parent: `TASK-LIV2-001 — Machine Contract Freeze`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-005`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependencies: `SWU-LIV2-003` pass; `SWU-LIV2-004` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T21:35:34Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-005-01 | Freeze version/domain, distinct capability states, and fail-closed graph. | task rule 7; architecture Views 1/5 | covered | Eight states and seven forward transitions; every shortcut is undeclared. |
| O-005-02 | Promote only when every ordered evidence gate is present. | SWU primary/Done | covered | Evaluator returns the first stable blocker ID. |
| O-005-03 | Keep preview from synthetic without L0 receipts and from live under all conditions. | architecture decision flow | covered | Missing evidence and shortcut fixtures. |
| O-005-04 | Keep synthetic/staged on invented data; accept real data only in evidenced live. | goal safety; architecture | covered | Action rules separately gate data class. |
| O-005-05 | Keep live from closing without moderation, readiness, explicit close approval, and controller evidence. | SWU Done; protected gates | covered | Ordered close gates remain unsatisfied fixture handles. |
| O-005-06 | Keep close publication/recovery unavailable without G-01–G-10 applicable receipts, emergency recovery, archive, Bitcoin, and number evidence. | closure gates; SWU Done | covered | G-04 is explicitly N/A under D-15; all other IDs are preserved. |
| O-005-07 | Keep opening unavailable until horizon-due and static-decoder evidence. | closure G-03/G-09/G-10 | covered | Recovery-to-opening gate is explicit. |
| O-005-08 | Preserve no-feed/privacy and ritual-number non-effects. | field lifecycle; D-09 assumptions; goal | covered | Pre-opening feed action is forbidden; number never mints/allocates/rewards/ranks/governs. |
| O-005-09 | Make every negative fixture return its expected stable blocker ID and detect drift. | SWU Acceptance | covered | One-missing-gate fixtures plus transition/action negatives. |
| O-005-10 | Stay within three files plus evidence/status synchronization; never fabricate handles. | SWU write scope; goal | covered | Handles are invented fixture labels, not passed evidence. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `.../work-pack/tasks/TASK-LIV2-001.md`
   - Selectors: rule 7; SWU-LIV2-005; Synchronization.
   - Covers: O-005-01–O-005-10.
2. `.../stages/06-architecture-bundle.md`
   - Selectors: View 1 capability table; View 5 decision flow; DD-01/DD-03/DD-10.
   - Covers: O-005-01–O-005-05.
3. `.../gates/closure-gates.md`
   - Selectors: G-01–G-10; Fail-closed rule.
   - Covers: O-005-06–O-005-07, O-005-09.
4. `DECISIONS.md`
   - Selectors: D-09 range/non-effect; D-15; Assumptions.
   - Covers: O-005-06, O-005-08.
5. Passed command-state and field-lifecycle contracts/receipts.
   - Selectors: precedence/close fence; public allowlist/no-feed/non-effects.
   - Covers: dependencies and O-005-04–O-005-08.
6. Active work-pack and goal handoff.
   - Selectors: protected gates, invented-data rule, safety boundary, current frontier.
   - Covers: O-005-04–O-005-10.

No outside source was used.

## Architecture Guidance

The evaluator consumes only `{current_state, request, evidence_handles}` and returns
`allowed` or one blocker ID. It never fetches or creates evidence. Transition gates
and same-state actions are separate: a state label cannot by itself authorize real
data, publication, opening, or the ritual number. Evidence labels remain stable so
later receipts can satisfy them without rewriting this contract.

## Constraints And Non-Goals

- States: preview, synthetic, staged, live, closing, closed, recovery, opening.
- Only adjacent forward transitions are declared; no shortcut or backward transition.
- Synthetic and staged use invented data only. Real intake requires live plus its gate.
- No pre-opening feed in any state.
- `G-04` private-return is N/A; no participant keys are introduced.
- G-01, G-02, G-03, G-05, G-06, G-07, G-08, G-09, and G-10 remain blocking.
- Mainnet/archive/custody/real-close handles are labels only; no external action occurs.
- Ritual number is a candidate ritual output, not token supply or economic authority.

## Write Scope

- `development/time-capsule-live-intake-v2/contracts/capability-gates-v1.json`
- `development/time-capsule-live-intake-v2/fixtures/capability-gates-v1.json`
- `development/time-capsule-live-intake-v2/tools/validate-capability-gates.mjs`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-005/`
- active SWU-005 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

Fixtures cover every declared transition pass, every gate family missing, every
shortcut, real-data misuse, pre-opening feed, opening-before-due, and ritual-number
gate/non-effects. The validator checks exact gate IDs, handle uniqueness, graph
shape, applicable G gates, first-blocker order, and deliberate drift.

```bash
node development/time-capsule-live-intake-v2/tools/validate-capability-gates.mjs
```

## Decisions And Gates

- Auto-selected: evidence-handle gate registry plus separate transition/action rules.
- Auto-selected: `closed -> recovery` is the publication/recovery-complete promotion;
  it requires all applicable closure, emergency, archive, Bitcoin, and number gates.
- Gate verdict: pass for contract execution only. No fixture handle is real evidence.

## Gaps And Blockers

- Active: none.
- Deferred: every real/manual handle remains absent and will block its future promotion.

## Authority Precedence

1. Goal protected gates and D-15/D-09 non-effects.
2. SWU-LIV2-005 done criteria.
3. G-01–G-10 closure gates (G-04 N/A only).
4. Architecture Views 1/5.
5. Passed SWU-003/004 contracts.

## Fallback Exploration Rule

No fallback search is needed. Extra evidence cannot satisfy a fixture handle or
bypass its owning future receipt.

## Provenance

- Architecture SHA-256: `390f5c01fd48ac095b729790b2f78ef01974c6bd9dfe6d68e5597b585ea85d1f`
- Closure gates SHA-256: `17d8ad438304834ffcef1919bf70768f7ebc82f8b7cf96f82d79e88807417664`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Task contract SHA-256: `0f493ac9f276170faf9f68b6ac49f34014faabc636dcaf859bfde99d1434343f`
- Command contract SHA-256: `eb2b28b4abea900f01bf25d1584dbe0f2671ab6e381a7981cc3ad7a98d4f1dff`
- Field contract SHA-256: `1b929ece943a55de31d3d36ee8f50a4c76cb756e2ad85afda20bf5e66a6f4e87`
- SWU-003 report SHA-256: `a7b1a3b79a262868883f526f28a26ebe1a36be46d99f780ee6ad337dda4a6356`
- SWU-004 report SHA-256: `24e3bd6bfc619b53a8a919dcf4519110e7324e82724bfa30ba1c5ee059c1eaa2`
- Work-pack SHA-256: `3c99557298ada5a6f46660650911c43a5a330911f557d96c95006f6ccd3ad024`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-005/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-005/context-index.json`
- Strict coverage: pass

