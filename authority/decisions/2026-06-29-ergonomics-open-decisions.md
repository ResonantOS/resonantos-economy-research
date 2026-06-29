# Decision Gate: Ergonomics + Build Open Decisions

Status: pass (4 decisions resolved + ENACTED 2026-06-29 — WP2 validator built; #17 stub built; #18 AGENTS gate-tier applied after a constitution-governance validation pass)
Owner route: decision-gate → operator; enactment via the named routes below
Timestamp: 2026-06-29
Source: operator via `/decision-gate all decisions`

Resolves the open forks from the repository-ergonomics strategy
([dispatch/ergonomics-strategy/findings.md](../../dispatch/ergonomics-strategy/findings.md))
and the inventory-generator build. Recording a decision is **not** enacting it — see
each route. Nothing here promotes a token/bounty/governance/mechanism claim.

## D-18 — Tier the four-check AGENTS gate (#18)

- **Options:** tier with a green-path · keep flat.
- **Selected:** **tier it (green-path).**
- **Rationale:** a one-line fix should not pay the same toll as a dispatch; uniform cost trains rote recitation. The green-path is a *compressed* assertion that still affirms all four checks and **auto-escalates** to the full gate on any claim/authority/score/source-kind/promotion trigger. **Compress, never drop.**
- **Scope:** green-path allowed ONLY for provably-trivial writes (inventory log/entry, residue notes). Full four checks remain mandatory for `authority/`, `definitions/`, `claims/`, constitutions, dispatch sheets, and commits.
- **Reversibility:** high (a doc edit). **Enactment route:** constitution-governance edit to `AGENTS.md` (the gate is the refusal standard — change it through the governed surface, not fresh prose).
- **Enacted 2026-06-29:** applied to `AGENTS.md` ("Gate Tiers" section) after a constitution-governance `validate` pass FLAGGED two gaps — the green-path one-liner under-stated `claim ≤ evidence`, and the auto-escalation triggers missed closure/solved-state claims plus token/bounty/payout/implementation. Both fixed before applying, so the green-path provably affirms all four checks and the trigger list has no consequential-write hole.

## D-5 — WP2 filesystem-truth validator route (#5 / D1)

- **Options:** new separate validator · extend `validate-index-json.sh` + relabel its contract.
- **Selected:** **new separate validator** (`validate-inventory-truth.sh`).
- **Rationale:** keeps `validate-index-json.sh`'s stated "inventory-read-model-only" contract intact (no owner-contract change — avoids Quine's flag), cleanest separation of internal-consistency vs filesystem-truth.
- **Reversibility:** high. **Enactment route:** task-session WP2.
- **Enacted 2026-06-29:** `.agents/skills/inventory/scripts/validate-inventory-truth.sh` (passes 3/3; on first run it caught + I fixed 6 unregistered tags — the C2 tag-drift the review predicted).

## D-19 — Machine promotion-boundary field (#19 / D2)

- **Options:** `authority_posture` mirror only · add describe-only `promotion_boundary` · drop posture entirely.
- **Selected:** **`authority_posture` mirror only** (already emitted by WP1).
- **Rationale:** safest — the index carries a describe-only mirror of the entry's posture line and **nothing the system reads to grant authority** (score≠authority preserved). No gate-readable `promotion_boundary` field is added.
- **Reversibility:** high (already the built state). **Enactment route:** none — WP1 already conforms.

## D-17 — Flow-conservation fixture stub (#17)

- **Options:** build a structure-only stub · link the spec only · defer.
- **Selected:** **build a structure-only stub.**
- **Rationale:** gives the newcomer a real file to start from. Strictly a skeleton: `research-block`, `implementation_status: fixture_only`, `reward_effect: none`, `open_residue` citing TF-1 (no certificate exists), the deterministic check left an empty TODO — **asserts no invariant, promotes nothing.**
- **Reversibility:** high. **Enactment route:** build under `validation/` (research surface; structure-only; no economy claim).
- **Enacted 2026-06-29:** `validation/flow-conservation/README.md` (research-block; TODO placeholders; asserts nothing).

## Recorded to-do (not a fork) — #7

Vendor the `.craft/ledger.yml` `schema_ref` (currently an external `domainspec-core`
path) **into the repo** and repoint it, so the craft generator depends only on in-repo
paths (`DEC-ECON-STANDALONE-001`). One clear answer; no decision needed.

## Cross-reference

- **D3** (inventory-generator curated fields) already resolved → Option B, in
  [development/refinement-runs/20260629-inventory-index-generator/DECISION-D3-curated-fields.md](../../development/refinement-runs/20260629-inventory-index-generator/DECISION-D3-curated-fields.md).

## Result

Decisions resolved: 4. Blockers remaining: 0. Deferred: none. Assumptions: none.
