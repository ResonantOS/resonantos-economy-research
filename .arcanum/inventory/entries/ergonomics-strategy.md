# Inventory Entry: Repository-Ergonomics Strategy — towers + synthesis

Status: closed `resolved` (auditor Brandenburg ACCEPT, 2026-06-29)
Entry type: strategy-result
Authority posture: non-authority-read-model
Tags: `strategy-result`, `dispatch`, `subagents`, `synthesis`, `ergonomics`, `resonantos-economy`

## Source Refs

- [dispatch/ergonomics-strategy/findings.md](../../../dispatch/ergonomics-strategy/findings.md) — the team brief (18 ranked improvements)
- [dispatch/ergonomics-strategy/research.md](../../../dispatch/ergonomics-strategy/research.md) — verbatim explorer returns (newcomer / power-user / agent)
- Ledger: `2026-06-29-ergonomics-strategy` (dispatch + close rows) in [telemetry/agents/subagents-dispatch.yaml](../../../telemetry/agents/subagents-dispatch.yaml)

## Strategy Result (lanes / subagents / flow / gate)

- **P1 / type:** DISPATCH (parallelism — 3 user personas; synthesis; context-protection); `dispatch_type: research`.
- **Lanes / subagents:** Explorers (Hirschman = newcomer · Simon = power-user · Fritz = agent) → synthesizer Meadows (leverage-ranked) → reviewers Popper (non-vacuity) + Quine (boundary-collapse), zig-zag → writer (strategist-authored) → auditor Brandenburg (`final_approver`).
- **Dependency flow:** explorers ─seq→ synthesizer ↔ reviewers (zig-zag, 1 round) → writer → auditor; auditor revision unused.
- **Gate / ledger:** check-tension both PASS; human `confirmed`; registered + closed `resolved`; agents_spawned 7, loops_used 1.

## Result Summary

Diagnosis (all three personas converged): the repo has one strong automation (the
dispatch appender) and **hand-maintains every other projection** (inventory index,
tag register, CRAFT status, term scan), so they **drift invisibly** — `index.json`
is stale right now (19 of 21 entries, `by_tag` empty, lying timestamp, validator
passes anyway), the killed "auditor ACCEPT" verdict is still live on the #1
recommended read, and a stale CRAFT gap calls finished work unfinished. **Master
move:** generate every projection from its source of truth + truth-check it; reserve
humans for the gates. **18 ranked improvements** (1 cut on review for vacuity, 4
tightened, 5 owner-gated); 3 do-now trust fixes.

## Reusable Selectors

- `ergonomics-strategy` for the full 18-item ranked list.
- `generate-projections-truth-check` for the master move (the appender is the model).
- `inventory-index-drift` for the live `index.json` 19-vs-21 / empty-`by_tag` evidence.
- `auditor-accept-not-propagated` for the un-propagated CR1 (still live on the inventory entry + source-records).
- `tier-the-four-check-gate` / `machine-posture-describe-not-grant` / `fixture-stub-structure-only` for the three owner-gated decisions.

## Residue / Next Act

The change set is **not applied** — applying is a separate act outside the dispatch.
Safe Theme-1/2/3 items can proceed; **#17 / #18 / #19** (+ the #5/#7 flags) need an
owner decision. Note: this closeout deliberately did not hand-patch `index.json`
(now stale by one more entry) — left for the proposed generator (finding #4), as a
live demonstration of the drift the strategy targets.

## Promotion Boundary

Non-authority read model of a research result. Promotes nothing into definitions,
constitutions, token/bounty/governance policy, mechanism, or validation. Finding #1
*removes* an over-strong provenance claim; #17/#18/#19 stay owner-gated proposals.
