# Proposed Meta Program — Multi-Tower Economy-Resilience Research

Status: proposed-confirmation-required
Dispatch type: research (meta)
meta: true
Tension gate: n/a at program level (no program-level subject group; each child re-enters the gate)
Ledger status: not-registered
Promotion scope: local-research-only
Supersedes: the single fan-out `PROPOSED-DISPATCH.md` (kept as the genesis provenance record) and the flat two-phase split (deleted 2026-06-27 as a discarded intermediate — its isolation + search-bound discipline migrated into this program).

## Why a meta program

Each tower carries enough depth to deserve its **own degree of research, decided inside the tower** — not a fixed global lane count. So each tower is its **own isolated research dispatch** (its own context, its own sub-lanes, its own synthesis, its own findings), and a separate **program synthesis** dispatch reconciles the tower findings. This is a dispatch-about-dispatching → `meta: true` (P13). Each child carries `parent_dispatch_id` = this program and **re-enters its own check-tension + confirm gate**.

## Tension design — the two axes

| Level | Corpus | Tensioned on | Where realized |
| --- | --- | --- | --- |
| **Inside a tower** | fixed (the tower *is* the corpus) | **methodology** axis (postmortem / institutional / formal / behavioral) | the tower's own explorers group |
| **Across towers** | each tower *is* a distinct corpus | **source-corpus** axis | the program synthesis reviewers |

This is why intra-tower sub-lanes tension on methodology (corpus is shared) and the cross-corpus tension is deferred to the program synthesis — it passes the spread test (Test 3) cleanly at both levels.

## "Degree decided inside" — the scoping rule

Each tower sets its **own sub-lane count from its `L0-corpus` / `L1-residue-map` breadth**, not from a global constant:

| Tower | L1 failure/residue classes | Proposed sub-lanes (self-scoped) |
| --- | --- | --- |
| failed-dao-crypto | 6 (bounty/points farming, liquidity reflexivity, treasury depletion, governance capture, sybil/collusion) | **3** |
| formal-mechanisms | 6 (conservation, anti-collusion, randomness, signal separation, temporal decay, stress threshold) | **3** |
| science-of-science | 5 (citation gaming, novelty pressure, priority, peer-review capture, invisible labor) | **2** |
| socioeconomic-behavior | 6 (motivation crowding, status, fairness, identity split, review fatigue, trust decay) | **3** (confirmed 2026-06-27) |

A tower that "needs less" still decides that for itself; the table is the proposal each tower sheet ratifies or revises at its own gate. **Confirmed 2026-06-27:** program shape, the tower-1 template, and socioeconomic = 3 sub-lanes are ratified by the human; this scoping table is frozen.

## Program structure

```
META PROGRAM (meta:true) — this plan, one confirm of the program shape
│
├─ Tower dispatch 1: failed-dao-crypto      → SYN-ECON-TOWER-failed-dao
├─ Tower dispatch 2: formal-mechanisms      → SYN-ECON-TOWER-formal
├─ Tower dispatch 3: science-of-science     → SYN-ECON-TOWER-science
├─ Tower dispatch 4: socioeconomic-behavior → SYN-ECON-TOWER-socio
│     each: explorers (self-scoped n, tensioned on methodology)
│           → tower synthesizer ⇄ tower skeptic (in-corpus attack, zig-zag ≤1)
│           → tower-findings.md in subtowers/<name>/returns/, lane-tagged; final_approver = parent
│           whitepaper-only base; depth-1 search bound; ≤6 sources / sub-lane
│
└─ PROGRAM SYNTHESIS dispatch — reads the 4 lane-tagged tower findings, aggregates BY attack-lane
      synthesizer → reviewers (Popper/Quine/Meadows, robot-talks, cross-corpus tension)
      → writer → auditor (Brandenburg) → program findings.md
```

## Lanes wiring — shared target taxonomy, not per-tower copies

`lanes/ATTACK-LANES.md` (the 5 mechanism surfaces) and `lanes/TWO-LANE-DIALECTICS.md` are **orthogonal** to the towers (corpora). They are used as **one shared taxonomy every tower tags into**, never duplicated per tower:

- Each **tower synthesizer tags every finding** with the attack-lane(s) it bears on (Lane 1 auth-credit / Lane 2 $RCT / Lane 3 $RES / Lane 4 bounty-prize / Lane 5 Phase 2).
- The **program synthesis aggregates by attack-lane** — each lane fed by evidence from multiple towers (a lane × tower matrix) — and uses the two-lane dialectics (esp. Dialectic A, which mirrors `anti_bias_global`) as its synthesis tension frame.

This keeps Lane 3 ($RES emission) able to draw failed-dao liquidity evidence + formal stress-threshold evidence + socio fairness evidence at once, instead of scattering it across four tower-local copies.

## Invariants every child inherits

- **Whitepaper-only base.** The official ResonantDAO whitepaper is the only official source; no tower receives another tower's output.
- **Search bound (recursion guard).** Depth-1, no citation-chasing; ≤6 admitted sources per **sub-lane**; one web pass; cited-but-unfetched → residue. (Per-tower the quota is per sub-lane, so a 3-lane tower admits ≤18 total — still bounded.)
- **Promotion boundary.** Local-research-only; no tower promotes definitions, constitutions, specs, token policy, or implementation.
- **Two-level review.** Every tower carries **one in-corpus skeptic** (n=1) that attacks its findings for non-vacuity / feasibility / correct lane-tag before they leave the tower (synthesizer ⇄ skeptic, zig-zag ≤1). The **program synthesis** then runs the heavier cross-corpus reviewer round (Popper/Quine/Meadows, robot-talks). Different scopes: in-corpus soundness vs cross-tower mechanism survival — no redundancy.
- **Lineage.** Each child `parent_dispatch_id` = `2026-06-27-resonantos-economy-program`; each re-enters check-tension + confirm.

## Dependency flow

`META confirm` → the 4 tower dispatches are **independent of each other** (no inter-tower edges → all READY together once confirmed) → each closes and registers `SYN-ECON-TOWER-*` → **all four required** before `PROGRAM SYNTHESIS` is READY (sequential edge: towers → synthesis) → program findings.

## Gate / ledger state

- Program level: no subject group, so no program-level tension gate; the gate lives in each child.
- **Confirms required:** 1 (program shape) + 4 (one per tower) + 1 (program synthesis) = **6 human gates**. This is the cost of per-tower self-determination; it is the price you accepted for depth.
- Nothing is registered until confirmed; the appender runs per child at its own confirm.

## Worked template

`dispatch/towers/PROPOSED-TOWER-1-failed-dao-crypto.md` instantiates the per-tower template (3 methodology-tensioned sub-lanes + tower synthesizer). It is gated first as the pattern; towers 2–4 are drafted to match once the program shape and the template are confirmed.

## Next human action

Confirm the **program shape** (meta structure + scoping rule + invariants) and the **worked template** (tower 1). On `confirmed`, I register the meta lineage, then towers 2–4 are drafted to the same template (each self-scoped), each re-entering its own gate. Or revise the scoping table / review-concentration choice before confirm.
