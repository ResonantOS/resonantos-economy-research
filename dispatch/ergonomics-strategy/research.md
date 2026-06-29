# research.md — repository-ergonomics (verbatim explorer returns)

Dispatch: `2026-06-29-ergonomics-strategy` (`dispatch_type: research`). Three
explorers, each one persona lens, run in parallel (no robot_talks). Returns
appended verbatim by the strategist per `domainspec-research-writing`. Synthesis
lives in [findings.md](findings.md).

---

## Agent 1 — Hirschman, Albert O. — NEWCOMER / FIRST-HOUR lens

Walked the cold-start path README → inventory Start Here → economy-resilience-program entry → GUIDE → AGENTS → CONTRIBUTING → QUERYING → fixtures → prizes → CRAFT → dispatch, then tried a first contribution.

1. **The inventory's "single most useful read" still carries the invented "auditor ACCEPT" verdict the review killed at CRITICAL.** `.arcanum/inventory/index.md:21-25` sends every newcomer to `entries/economy-resilience-program.md`, which says "the auditor accepted it" (:24) and "closed `resolved`, auditor ACCEPT" (:60); same in `sources/source-records.md:63`. The onboarding review (CR1) flagged this as invented (the ledger records only `exit_reason: resolved`). A careful newcomer finds the repo breaking its own `claim ≤ evidence` headline on the third read. Fix: apply CR1 to the live surfaces, not just README.
2. **The first tool a newcomer is told to run dumps ~73 "untracked" terms, mostly noise, with no triage guidance.** GUIDE habit 6 / README Posture / QUERYING ex.5 all say run `tools/check_load_bearing_terms.py`; cold it prints 73 hits including `AGENTS`, `CLAUDE`, `action`, `deployment`. Looks like 73 violations; the newcomer panics, blames themselves, or ignores the discipline. Fix: state the expected baseline near the cite, or print a "new-since-baseline" delta.
3. **"Start Here" appears in five competing docs — the review fixed the order but not the multiplicity.** AGENTS, index.md, README, CONTRIBUTING, GUIDE each open with their own numbered start list; feels like five front doors. Fix: collapse each non-inventory doc's Start Here to a sentence + link.
4. **The literal `dispatch/` link lands a newcomer on a `superseded` dead-end.** `dispatch/PROPOSED-DISPATCH.md` opens "must not be registered or run"; the live one is a sibling; no `dispatch/README.md` index. Fix: a one-screen dispatch/README naming live vs superseded sheets.
5. **CRAFT.md tells the newcomer the onboarding docs are not yet done — contradicting the docs they just read.** `CRAFT.md:75` `GAP-ECON-README-GUIDE-001 (flag)` says README/GUIDE not yet updated with the load-bearing discipline; they already are. Stale status erodes trust. Fix: close/re-scope the gap.
6. **The first concrete action (flow-conservation fixture) has no starting file — only a backlog name; the template to copy is a different domain.** The contribution-edge fixture's fields (`observed_signal`, `review_action`) don't map onto a flow-conservation invariant. The "end to end" walkthrough stops at the hardest, least-scaffolded step. Fix: a flow-conservation skeleton/stub, or link the right spec.
7. **Front-loaded jargon with no first-use gloss** (two-axis tension, zig-zag, REC-C13, typed negative, $RCT/$RES/UCI) on the exact files the inventory says to read first; glossary present but unlinked on first use. Fix: gloss/link on first use; surface the glossary.
8. **The headline feature (query via an agent session) — how to start a session is one buried unlinked sentence; QUERYING.md never repeats it.** Fix: a "before you start: open a session (→ link)" at the top of QUERYING.

**Cross-cutting:** the sharpest friction is a TRUST pattern — the newcomer is trained to value claim ≤ evidence, then meets fabricated "auditor ACCEPT" (#1), 73 false alarms (#2), and a stale "unfinished" gap (#5). Fixing the three trust leaks buys more first-hour engagement than any added scaffolding.

---

## Agent 2 — Simon, Herbert — RETURNING-CONTRIBUTOR / POWER-USER lens

Asks "what does the routine cost the returning user, every time?"

1. **The inventory is a five-surface hand-maintained sync — and is drifted right now.** Per reusable result you update entry + `index.md` table + `index.json` + `tags.md` + `log.md`. Verified: 21 entry files; `index.md` lists 21; `index.json` is missing two (`bets-and-prizes-device`, `onboarding-docs-review`). The log even records this exact failure recurring. Fix: generate `index.json` (+ the index.md table + a tag check) from entry front-matter; `--strict` in CI. Load-bearing: entry content + log narration stay manual; the indexes are pure projections — automate.
2. **`log.md` is a fixed 8-field boilerplate re-typed every pass** ("Log updated: yes" is self-referential; "Contradictions flagged: 0" is modal). Fix: a log-append template with defaults; keep an explicit "Contradictions flagged" prompt so a real one is never dropped.
3. **Finding the right route is a 5-doc cross-read with competing orders** (CLAUDE.md, AGENTS, GUIDE, inventory). Fix: a single canonical route table owned by AGENTS.md; others link (generalize the "GUIDE single-owns the habits" fix to routes).
4. **The four AGENTS checks are re-typed verbatim before every write — flat cost.** A 1-line log fix pays the same toll as a 7-agent dispatch; uniform cost trains rote recitation. Fix: tier by mutation class — a compressed green-path for low-risk writes (inventory log/entry, residue), the full four-check for authority/definitions/claims/constitutions/dispatch/commits. **Strongly load-bearing — tier, never drop.**
5. **The dispatch ceremony is long with no resume/checklist artifact**; register has sharp edges (schema exactly `"0.6.0"`, removed keys, `anti_bias_global` at ≥2 fan-out, `working_folder` for LIVE, `loop_cap` only on zig-zag/feedback); the close-row `agents_spawned` tree is reconstructed by hand. The `cav2-lean-harvest` sheet hit the tension gate 3×. Fix: a dispatch-sheet JSON scaffold; a closeout runbook checklist; derive `agents_spawned` from declared groups. Load-bearing: the confirm + tension gates and the append-only two-row discipline — keep; never auto-confirm; a template must not let someone skip the re-run-gate-on-material-change rule.
6. **Closeout fans across 5+ ledgers; `.craft/ledger.yml` has a hand-maintained `indexes:` block** (a denormalized copy of the rows above); CRAFT.md is declared a derived view but hand-kept. Fix: generate the `indexes:` block + CRAFT.md from the rows. Flag: `.craft` `schema_ref` points at an external `domainspec-core` path — a generator must stay in-repo (`DEC-ECON-STANDALONE-001`).
7. **Term-tracking's deterministic half is automated; the recording half is all-manual** (candidate card in DEFINITIONS + index + drift-audit + four-surface; a standing chore to lazy-migrate `Lifecycle status:` onto ER-D1..D22). Fix: extend the adapter from extractor to index-checker (verify lifecycle/index rows; emit `DEFINITIONS-INDEX` rows). Do not auto-create cards (REC-C14 inflation risk).
8. **Source-record / claim updates repeat a fixed 7-field minimum with no template.** Fix: a template snippet + an inline ID-prefix cheat-sheet; optionally a linter.

**Headline:** one automation exemplar (`check_load_bearing_terms.py`) and it is the least painful part of the loop; everywhere else derived projections are hand-maintained and the discipline measurably fails. Generate every projection from its single source of truth; reserve human effort for the genuine judgment: the four AGENTS checks, the confirm/tension gates, source-kind labels, and "is this term load-bearing?"

---

## Agent 3 — Fritz, Tobias — AGENT / AUTOMATION lens

Headline: the dispatch ledger is well-engineered for agents; the inventory machine index is hand-maintained against a validator that checks internal consistency but never filesystem truth — and is drifted now.

1. **CRITICAL — `index.json` is hand-built, drifted now (19 of 21 entries), and its validator passes anyway.** `validate-index-json.sh` checks parseability / required fields / id-uniqueness / by_id-references-only-entry-ids — only internal consistency. `generated_at` (2026-06-28) is older than the two missing entries' commit. Ran it: `RESULT: pass / EXIT 0` on the stale file. Fix: make `index.json` generated (`tools/build_inventory_index.py` over `entries/*.md`); extend the validator with three filesystem-truth checks — entries[] == disk basenames; every `by_source` path exists; every used tag is in `tags.md`.
2. **MAJOR — used tags silently escape the controlled register.** 6 tags (`attack-lane`, `development`, `fixture-backlog`, `refine`, `review`, `validation-scaffold`) are in `by_tag`/entries but unregistered in `tags.md`. Fix: a reconciliation check — `set(tags used) ⊆ set(tags registered)` — the tag-side analogue of the term checker.
3. **MAJOR — `check_load_bearing_terms.py` is built "for CI / pre-commit" but wired into nothing.** No `.github`, no `.pre-commit-config`, no hook, no project `settings.json`. 73 untracked identifiers sit unactioned; determinism built then dormant. Fix: wire `--strict` into a gate, gating on the delta vs the committed baseline (grandfather existing residue).
4. **MAJOR — the append-only hook contract is asserted as a guarantee but not installed in this repo.** Hooks live as canonical sources in `ops/subagents-strategy/hooks/`, installed per-user via `install.cjs`; this repo has no `settings.json` wiring them. An agent reasons from a guard that may be inactive. Fix: commit a project `.claude/settings.json` wiring the hooks, or have the SKILL name the appender's own `checkLedger()` structural self-check as the real in-repo guarantee and call the hook optional.
5. **MAJOR — `schema.md` (entry contract) and the actual `index.json` entry shape are two different schemas.** `Authority posture` / `Promotion boundary` are in `schema.md` but absent from the machine entry shape — so the index cannot mechanically express the non-promotion boundary the refusal standard rests on. Fix: reconcile to one schema; add `authority_posture`/`promotion_boundary` as machine fields; derive both the human template and the validator's required-fields from one source.
6. **MINOR — the dispatch ledger header comment is a documented-permanent lie** ("never edited; may lag the current schema"); it still describes the v0.5.2 shape while the wire schema is v0.6.0. Fix: drop the schema description from the header; point to the SKILL.
7. **MINOR — three byte-identical copies of the appender** (`.agents/`, `.claude/`, `ops/`) under a "do not hand-edit; regenerate" rule with no checker. Fix: a parity check asserting the mirror is byte-identical.

**Through-line:** two tiers of automation, inverted by risk. The human-gated dispatch ledger got a strong deterministic appender (strict validation, idempotency, structural self-check, grandfathering). The high-frequency every-session surfaces (inventory index, tag register, term scan, skill mirror) are governed by prose rules + validators that check internal consistency but never filesystem truth. Every drift found lives in that second tier. Turn each "the agent must remember to keep X in sync" into a generator + a truth-checking validator — the appender is the model.
