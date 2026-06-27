# Proposed Tower Dispatch — formal-mechanisms

Status: proposed-confirmation-required
Dispatch type: research
meta: false
parent_dispatch_id: 2026-06-27-resonantos-economy-program
Tension gate: pass (2026-06-27 — checker PASS, reviewer PASS; both cleared Fritz/Myerson methodology distinctness)
Ledger status: registered-and-closed (resolved, 2026-06-27) — findings at returns/tower-findings.md, source SYN-ECON-TOWER-FORMAL
Promotion scope: local-research-only

## Role in the program

Tower 2 of the meta program ([PROPOSED-META-PROGRAM.md](../PROPOSED-META-PROGRAM.md)), instantiating the confirmed template. Corpus fixed to the **formal mechanism / mechanism-design / stochastic-reward** literature; 3 sub-lanes tensioned on the **methodology** axis.

## Self-scoped depth

L1 residue lists 6 formal questions (conservation, anti-collusion, randomness, signal separation, temporal decay, stress threshold) → **3 methodology lenses**:

| Sub-lane | Methodology | Residue covered |
| --- | --- | --- |
| structural-invariant | algebraic / categorical invariant analysis | conservation, signal separation, temporal decay |
| strategic / game-theoretic | strategic-agent incentive-compatibility | anti-collusion, sybil, incentive-compatibility |
| stochastic-control | randomized / control-loop stress analysis | randomness-as-audit, stress threshold |

## Sheet

```json
{
  "dispatch_id": "2026-06-27-econ-tower-formal-mechanisms",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "meta": false,
  "parent_dispatch_id": "2026-06-27-resonantos-economy-program",
  "goal": "Harvest and synthesize bounded, source-backed formal mechanisms that damp gaming, preserve invariants, introduce bounded randomness, separate reward from authority, and resist collusion, producing this tower's lane-tagged findings. Corpus fixed to formal mechanism-design / stochastic-reward literature; sub-lanes tensioned on methodology.",
  "context": "Tower 2 of the meta economy-resilience program. Whitepaper and Evidence Exchange proposal are design constraints, not proof; receives no sibling tower output. Local-research-only. Adversarial cross-tower review deferred to program synthesis; in-corpus skeptic runs here. Output persists to subtowers/formal-mechanisms/returns/.",
  "max_loops": 1,
  "final_approver": "parent",
  "anti_bias_global": "mechanism-design optimism vs institution-and-behavior failure skepticism",
  "working_folder": "subtowers/formal-mechanisms/returns/",
  "groups": [
    {
      "group_id": "explorers",
      "n": 3,
      "anti_bias": "methodology",
      "agents": [
        {
          "agent_name": "Fritz, Tobias",
          "role": "explorer",
          "angle": "structural-invariant methodology over the formal-mechanism corpus; conservation, signal separation, temporal decay as algebraic invariants",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the formal mechanism-design / stochastic-reward corpus ONLY, research invariants using structural/algebraic methodology: does credit conservation bound a budget, does a score route attention WITHOUT deciding authority (signal separation), does reputation decay without erasing durable work. Whitepaper is a design constraint, not proof; you receive NO sibling lane or tower output. Return bounded source candidates, the invariant, and the ResonantDAO surface it guards. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        },
        {
          "agent_name": "Myerson, Roger",
          "role": "explorer",
          "angle": "strategic / game-theoretic methodology over the formal-mechanism corpus; collusion, sybil, incentive-compatibility under strategic agents",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the formal mechanism-design corpus ONLY, research collusion-resistance, sybil-resistance, and incentive-compatibility using strategic-agent / game-theoretic methodology: can reciprocal review, team farming, and circular contribution be detected and deterred. Whitepaper is a constraint, not proof; you receive NO sibling lane or tower output. Return bounded source candidates, the strategic failure, and the ResonantDAO surface it threatens. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        },
        {
          "agent_name": "Beer, Stafford",
          "role": "explorer",
          "angle": "stochastic-control methodology over the formal-mechanism corpus; randomized audit and treasury stress as control loops",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the formal mechanism-design / stochastic corpus ONLY, research randomized enforcement and stress thresholds using stochastic-control / control-loop methodology: where unpredictability defends audit (not arbitrary payout), and what breaks under liquidity, treasury, or holder-concentration shocks. Whitepaper is a constraint, not proof; you receive NO sibling lane or tower output. Return bounded source candidates, the control mechanism, and the ResonantDAO surface. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        }
      ]
    },
    {
      "group_id": "tower-synthesizer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Meadows, Donella H.",
          "role": "synthesizer",
          "model": "gpt-5.5",
          "token_budget": 3000,
          "initial_prompt": "Reconcile the three formal sub-lane returns into this tower's findings: candidate invariants, workflow sketches, formal residue, and what needs an evidence harness. TAG each finding with the attack-lane(s) it bears on (lanes/ATTACK-LANES.md Lane 1-5). Treat each sub-lane as an independent witness. Distinguish source claims, local inference, analogy, and open residue. Flag cross-tower questions for program synthesis. Survive the tower skeptic before finalizing. Local-research-only. Budget around 3000 tokens."
        }
      ]
    },
    {
      "group_id": "tower-skeptic",
      "n": 1,
      "agents": [
        {
          "agent_name": "Popper, Karl",
          "role": "skeptic",
          "angle": "non-vacuity attack-vector; kill any invariant or mechanism without a concrete witness, stress test, or falsifiable failure condition",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack this tower's findings for non-vacuity. Kill any invariant or mechanism with no concrete witness, stress test, falsifiable failure condition, or measurable fixture path. For survivors, confirm the attack-lane tag. Return exact kills and salvageable revisions for the synthesizer. Budget around 1600 tokens."
        }
      ]
    }
  ],
  "connections": [
    {"from": "explorers", "to": "tower-synthesizer", "type": "sequential"},
    {"from": "tower-synthesizer", "to": "tower-skeptic", "type": "zig-zag", "loop_cap": 1}
  ]
}
```

## Predicted Disagreements

### Explorers (methodology axis; corpus fixed = formal-mechanism literature)

| Pair | Predicted disagreement |
| --- | --- |
| Fritz / Myerson | Fritz runs structural-invariant analysis, Myerson runs strategic game-theoretic analysis on the methodology axis; a bias in Fritz toward clean algebraic invariants would be exposed by Myerson's evidence that strategic agents collude around invariants that look sound on paper. |
| Fritz / Beer | Fritz runs static structural-invariant analysis, Beer runs stochastic-control/dynamic analysis on the methodology axis; a bias in Fritz toward time-invariant guarantees would be exposed by Beer's shock and feedback-loop lens. |
| Myerson / Beer | Myerson runs equilibrium/strategic analysis, Beer runs control-loop/stress analysis on the methodology axis; a bias in Myerson toward equilibrium incentive-compatibility would be exposed by Beer's evidence about out-of-equilibrium shocks and treasury dynamics. |

`tower-synthesizer` (Meadows) and `tower-skeptic` (Popper) are `n = 1` (no tension). Only `explorers` is a subject group; Test 5 trivial. `final_approver: parent`.

## Next Step

Gate → after program confirm, human confirms this tower → registers `2026-06-27-econ-tower-formal-mechanisms` → 3 sub-lanes run isolated → synthesizer ⇄ skeptic → lane-tagged `tower-findings.md` → registered `SYN-ECON-TOWER-formal`.
