# Repository Ergonomics — Strategy (team brief)

Dispatch `2026-06-29-ergonomics-strategy` · `dispatch_type: research` · closed
`resolved`. Method: 3 user-persona explorers → leverage-ranked synthesis → 2
adversarial reviewers → this brief. Raw persona findings: [research.md](research.md).
**Non-authority strategy**: recommends doc/process/tooling changes only; promotes
no economy/token/governance/mechanism/validation claim; owner-gated items stay
proposals.

---

## TL;DR (the one slide)

The repository has **one excellent automation** — the dispatch ledger appender
(strict validation, idempotency, self-check, grandfathering) — and **hand-maintains
everything else** (the inventory index, the tag register, the status gaps in CRAFT,
the load-bearing-term scan). So the **derived projections drift, invisibly, because
nothing checks a projection against its source** — and the drift is happening **right
now**: `index.json` is missing the two newest entries, its `by_tag` index has
collapsed to empty, its "generated" timestamp lies, and its validator passes anyway.

**The master move:** turn every "the agent must remember to keep X in sync" into a
**generator + a truth-checking validator** — the appender is the model. Reserve
human effort for the four things that are genuinely judgment: the four AGENTS
checks, the confirm/tension gates, source-kind labels, and "is this term
load-bearing?"

**18 improvements** (1 cut on review, 4 tightened, 5 need an owner decision), in 4
themes. Three are tiny trust fixes that should ship today.

---

## Why this is credible (the method)

Three explorers walked in from different doors — a **newcomer** (first hour), a
**returning power-user** (the daily routine), and an **agent operator** (machine
reliability). They were *designed to disagree* (more-scaffolding vs less-ceremony vs
more-structure); instead all three hit the **same wall**. Two adversarial reviewers
then attacked the synthesis: **Popper** killed anything vacuous (1 kill), **Quine**
flagged anything that would erode a guardrail (5 flags, each with a fix). Every
surviving recommendation cites a friction we verified in the live tree.

**Live evidence (all re-verified):** `index.json` 19 entries vs 21 on disk
(`bets-and-prizes-device`, `onboarding-docs-review` missing); the validator returns
`pass` on that stale file; "auditor ACCEPT" — an invented audit verdict a prior
review already killed — is **still live** on the inventory's #1 recommended read
(`economy-resilience-program.md:24,60`) and `source-records.md:63`; `CRAFT.md:75`
flags the onboarding docs "not yet updated" when they already are; the
load-bearing checker prints ~73 false-positive "violations" and is wired into
nothing.

---

## The strategy, ranked by leverage

Leverage = friction removed × people hit ÷ effort, with a multiplier for **trust
leaks** (a newcomer trained on "claim ≤ evidence" who meets a fabricated verdict
loses faith in the whole apparatus).

### Theme 1 — Stop the trust leaks · **DO NOW** · all SAFE

| # | Improvement | Friction it removes | Who | Effort | Guardrail-risk |
|---|---|---|---|---|---|
| 1 | Replace live "auditor ACCEPT" / "the auditor accepted it" → "closed `resolved`" on `economy-resilience-program.md` + `source-records.md` | the repo breaks its own claim≤evidence rule on the #1 recommended read | newcomer, agent | S | none — *strengthens* the boundary |
| 2 | Close / re-scope the stale `GAP-ECON-README-GUIDE-001` (the work is done) | a false "unfinished" flag erodes trust in the status surface | newcomer, power-user | S | none |
| 3 | Add baseline + "new-since-baseline" delta to the load-bearing checker's output | 73 prose tokens read as 73 violations and discredit the discipline | newcomer, agent | S/M | none (baseline is committed + reviewable) |

### Theme 2 — Generate the projections, check them against truth · the spine · SAFE tooling

| # | Improvement | Friction it removes | Who | Effort | Guardrail-risk |
|---|---|---|---|---|---|
| 4 | `tools/build_inventory_index.py` — generate `index.json` (entries, indexes, real timestamp) from entry front-matter | the drift root: 21-on-disk vs 19-in-json, collapsed `by_tag`, lying timestamp, 5-surface hand-sync | agent, power-user, newcomer | M | none (entry *content* + log narration stay manual) |
| 5 | Extend `validate-index-json.sh` with 3 filesystem-truth checks (entries==disk; `by_source` paths exist; tags registered) | the validator certifies a stale file as correct | agent, power-user | S/M | **⚠ owner-flag:** changes the validator's stated "inventory-read-model-only" contract — update the boundary label in lockstep, don't silently patch |
| 6 | Wire generate+validate into a gate (`--strict`, **delta vs committed baseline**) | determinism built, then left dormant — enforces nothing | all | M | none (delta grandfathers existing residue; pairs with #18) |
| 7 | Generate `.craft/ledger.yml` `indexes:` block + `CRAFT.md` from the rows | denormalized hand-copied index; CRAFT "meant to be derived" but hand-kept (source of #2's stale gap) | power-user, agent | M | **⚠ owner-flag:** vendor the schema in-repo; the generator must depend only on in-repo paths (`DEC-ECON-STANDALONE-001`) |
| 8 | Tag-register reconciliation check (`tags used ⊆ tags registered`) | tags escape (or vanish from) the controlled register silently | agent, power-user | S | none |

### Theme 3 — Cut the hand-typed toil · SAFE

| # | Improvement | Friction it removes | Who | Effort | Guardrail-risk |
|---|---|---|---|---|---|
| 10 | `log.md` append template — prefill the 6 recurring keys (`Contradictions flagged: 0`, `non-authority read model`); keep an explicit "Contradictions flagged" prompt | re-typed 8-field boilerplate every inventory pass | power-user, agent | S | none (narration stays human; never auto-assert "0 contradictions") |
| 11 | Dispatch-sheet JSON scaffold + **derive `agents_spawned` from declared groups** | the close-row agent tree is recounted by hand; the register has sharp edges | power-user, agent | M | none (keep confirm/tension/two-row gates). *Popper:* drop the "closeout runbook" sub-part — already owned by `dispatch/SUBAGENT-CLOSEOUT.md` |
| 12 | Source-record / claim **template snippet + ID-prefix cheat-sheet** | the 7-field minimum + ID conventions re-typed from memory | power-user, newcomer | S | none (a linter, if added, checks *presence* — never assigns source-kind) |
| 13 | Extend the term adapter from extractor to **index-checker** (verify lifecycle/index rows; **never auto-create cards**) | the recording half of term-tracking is all-manual (4-surface card chore) | agent, power-user | M | none (auto-*creating* cards = REC-C14 inflation — forbidden) |

### Theme 4 — One front door, and the gate question · MIXED (owner decides the last three)

| # | Improvement | Friction it removes | Who | Effort | Guardrail-risk |
|---|---|---|---|---|---|
| 15 | **Single canonical route table owned by `AGENTS.md`**; `CLAUDE.md`/GUIDE/inventory link to it | route definitions duplicated in AGENTS.md *and* CLAUDE.md — drift-prone | power-user, agent, newcomer | M | none (SAFE — generalizes the "GUIDE single-owns the habits" fix) |
| 14 | Make the **six** "Start Here" surfaces *link* to the one canonical (inventory) order instead of restating competing lists | feels like six front doors; the canonical already exists | newcomer, power-user | S/M | none. *Popper:* it's "link to the existing canonical," not "create one" — collapse only true competing orientations |
| 16 | Add `dispatch/README.md` naming live vs superseded sheets; fix the README link into the must-not-register sheet | the `dispatch/` link dead-ends on a `superseded` sheet | newcomer, agent | S | none |
| 17 | Flow-conservation **fixture skeleton (structure-only)** for the first concrete action | the promised first action has no starting file; the "template" is a different domain | newcomer, agent | M | **⚠ owner-gated:** structure-only — must inherit the fixture non-collapse defaults (`reward_effect: none`, `implementation_status: fixture_only`), set `research-block`, cite TF-1 open residue, and leave checks as empty TODO placeholders. **Ships nothing asserted.** |
| 18 | **Tier the 4-check AGENTS gate** — a compressed green-path for provably low-risk writes; the full four checks for authority/definitions/claims/constitutions/dispatch/commits | a 1-line log fix pays the same 4-check tax as a 7-agent dispatch | power-user, agent | M | **⚠ owner-gated — the central decision:** the green-path may *compress* the four checks to a one-line attestation but must **assert all four** and **auto-escalate** on any trigger (a source-kind label, an authority/promotion word, a metric-as-authority phrasing, a claim verb). **Never drop a check.** If the boundary can't be drawn crisply, keep the flat gate. |
| 19 | Reconcile `schema.md` ↔ `index.json`; add `authority_posture` / `promotion_boundary` as machine fields | the non-promotion boundary lives only in prose, unenforceable by machine | agent, owner | L | **⚠ owner-gated — sharpest line:** the machine field must **mirror and be validated against** the entry front-matter (a closed enum with a `non-promoting` sentinel), the schema text must say "describes posture, confers nothing", and **no gate may branch on it to grant** posture (else inventory becomes authority — score≠authority). |

**Cut on review:** ~~#9 appender mirror-parity check~~ — Popper KILL: all three appender copies are byte-identical, no drift has occurred; a guard against a hypothetical is vacuous. *Typed negative banked:* would have pre-empted mirror drift, but there is no witnessed friction; re-file if a real divergence ever appears.

---

## What to do — sequencing

- **Today (safe, hours):** #1 #2 #3 (trust leaks) · #14 #15 #16 (one front door) · #8 #10 #12 (cheap hygiene + templates).
- **Next (safe tooling, days):** #4 → #5 (with the contract-label update) → #6 · #7 (vendor the schema in-repo) · #11 · #13.
- **Owner decides first (then build):** #17 (fixture skeleton) · #18 (gate tiering) · #19 (machine posture fields). #5 and #7 also need a one-line owner nod on their flags.

## The decisions for the team (the only 5 that aren't obvious)

1. **#18 — Tier the safety gate?** Yes if the green-path boundary is crisp and still *names* all four checks with auto-escalation; otherwise keep it flat. *This is the one with teeth.*
2. **#19 — Let the machine index carry a promotion-boundary field?** Reconcile the two schemas (safe regardless); add the machine field **only** as a validated mirror that describes, never grants.
3. **#17 — Ship a fixture skeleton?** Yes, as an empty research-blocked structure that asserts no invariant.
4. **#5 — Strengthen the validator past its stated boundary?** Yes, but update the validator's declared contract in the same change.
5. **#7 — Generate CRAFT from rows?** Yes, after vendoring the external schema in-repo (keeps the repo standalone).

## Residue (honest gaps)

- The fixture-grammar gap (#17) is deeper than a stub: non-contribution-edge domains have no schema yet.
- Whether *any* machine promotion-boundary field is safe (#19) is the sharpest unresolved question — flagged, not settled.
- The drift literally **moved again** between the explorer reports and the synthesis (`by_tag` went from "leaky" to "empty") — direct evidence the projections rot continuously until generated. That, not any single fix, is the case for Theme 2.

## Boundary

Non-authority research read-model. Every recommendation is a proposal; #17/#18/#19
(and the #5/#7 flags) stay owner-gated. Nothing here promotes a token, bounty,
governance, mechanism, or validation claim — #1 specifically *removes* an
over-strong one.

---

## Closeout

- **exit_reason:** `resolved` (final_approver Brandenburg: ACCEPT — independently re-verified the index.json drift, the live "auditor ACCEPT", and the stale CRAFT gap).
- **agents_spawned:** total 7 — explorer 3 (Hirschman, Simon, Fritz) · synthesizer 1 (Meadows) · skeptic 2 (Popper, Quine) · auditor 1 (Brandenburg); loops_used 1. Synthesis (`research.md` + `findings.md`) strategist-authored per the research skill; writer not separately spawned. The 2 check-tension gate agents are pre-registration infrastructure, not counted.
- **reviewer outcome:** 19 → **18 surviving** (#9 killed for vacuity; #10/#11/#12/#14 tightened; #5/#7/#17/#18/#19 owner-gated with guardrail constraints).
- **next act (outside this dispatch):** present to the team. The safe Theme-1/2/3 items can be applied directly; #17/#18/#19 (+ the #5/#7 flags) need an owner decision first.
- **note (a live demonstration of the thesis):** this closeout deliberately did **not** hand-patch `index.json` — that projection is exactly the drift root finding #4 targets; it is left for the proposed generator, and recorded as such in the inventory log rather than perpetuated by hand.
