# Proposed Tower Dispatch — socioeconomic-behavior

Status: proposed-confirmation-required
Dispatch type: research
meta: false
parent_dispatch_id: 2026-06-27-resonantos-economy-program
Tension gate: pass (2026-06-27 — checker PASS, reviewer PASS; both cleared Kahneman/Bowles methodology distinctness)
Ledger status: registered-and-closed (resolved, 2026-06-27) — findings at returns/tower-findings.md, source SYN-ECON-TOWER-SOCIO
Promotion scope: local-research-only

## Role in the program

Tower 4 of the meta program ([PROPOSED-META-PROGRAM.md](../PROPOSED-META-PROGRAM.md)), instantiating the confirmed template. Corpus fixed to the **behavioral-economics / social-psychology / community-stewardship** literature; **3 sub-lanes** (confirmed 2026-06-27) tensioned on the **methodology** axis.

## Self-scoped depth

L1 residue lists 6 behavioral risks (motivation crowding, status competition, fairness perception, identity split, review fatigue, trust decay) → **3 methodology lenses**:

| Sub-lane | Methodology | Residue covered |
| --- | --- | --- |
| cognitive-behavioral | individual judgment & decision (bias, framing) | fairness perception, randomness legitimacy, loss aversion |
| social-preference / experimental | experimental economics of cooperation & crowding | motivation crowding, status competition, reciprocity |
| exit-voice / institutional-response | exit-voice-loyalty and community-dynamics analysis | identity split, trust decay, review fatigue |

## Sheet

```json
{
  "dispatch_id": "2026-06-27-econ-tower-socioeconomic-behavior",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "meta": false,
  "parent_dispatch_id": "2026-06-27-resonantos-economy-program",
  "goal": "Harvest and synthesize bounded, source-backed behavioral and social-dynamics evidence on how rewards, status, reputation, bounties, and visible metrics change participant mentalities, favoring community thinking over task-harvesting, producing this tower's lane-tagged findings. Corpus fixed; sub-lanes tensioned on methodology.",
  "context": "Tower 4 of the meta economy-resilience program. Whitepaper-only ResonantDAO base; receives no sibling tower output. Must stay empirical and falsifiable. Local-research-only. In-corpus skeptic runs here; cross-tower review deferred to program synthesis. Output persists to subtowers/socioeconomic-behavior/returns/.",
  "max_loops": 1,
  "final_approver": "parent",
  "anti_bias_global": "mechanism-design optimism vs institution-and-behavior failure skepticism",
  "working_folder": "subtowers/socioeconomic-behavior/returns/",
  "groups": [
    {
      "group_id": "explorers",
      "n": 3,
      "anti_bias": "methodology",
      "agents": [
        {
          "agent_name": "Kahneman, Daniel",
          "role": "explorer",
          "angle": "cognitive-behavioral methodology over the behavior corpus; fairness perception, randomness legitimacy, loss aversion at the individual level",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the behavioral-economics / social-psychology corpus ONLY, research how individuals perceive fairness, opacity, randomness, and loss using individual judgment-and-decision methodology: when do random or opaque rewards feel illegitimate, when does loss aversion distort contribution. Whitepaper is your only ResonantDAO base; you receive NO sibling lane or tower output. Stay empirical and falsifiable. Return bounded source candidates, the cognitive risk, anti-patterns, and witness ideas. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        },
        {
          "agent_name": "Bowles, Samuel",
          "role": "explorer",
          "angle": "social-preference / experimental methodology over the behavior corpus; motivation crowding-out, status competition, reciprocity",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the behavioral / experimental-economics corpus ONLY, research motivation crowding-out, status competition, and reciprocity using experimental social-preference methodology: when does paying for everything reduce unpaid stewardship, when does reputation become a status game. Whitepaper is your only ResonantDAO base; you receive NO sibling lane or tower output. Stay empirical and falsifiable. Return bounded source candidates, the crowding/status risk, anti-patterns, and witness ideas. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        },
        {
          "agent_name": "Hirschman, Albert O.",
          "role": "explorer",
          "angle": "exit-voice / institutional-response methodology over the behavior corpus; identity split, trust decay, review fatigue",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the behavioral / community-dynamics corpus ONLY, research how contributors become mercenaries, members, stewards, or spectators, and how trust decays or review fatigue burns out contributors, using exit-voice-loyalty and institutional-response methodology. Whitepaper is your only ResonantDAO base; you receive NO sibling lane or tower output. Stay empirical and falsifiable. Return bounded source candidates, the identity/exit risk, anti-patterns, and witness ideas. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        }
      ]
    },
    {
      "group_id": "tower-synthesizer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Senge, Peter",
          "role": "synthesizer",
          "model": "gpt-5.5",
          "token_budget": 3000,
          "initial_prompt": "Reconcile the three behavior sub-lane returns into this tower's findings: design risks, anti-patterns, witness ideas, and mechanisms that preserve community thinking over task-harvesting. TAG each finding with the attack-lane(s) it bears on (lanes/ATTACK-LANES.md Lane 1-5). Treat each sub-lane as an independent witness. Distinguish source claims, local inference, analogy, and open residue. Flag cross-tower questions for program synthesis. Survive the tower skeptic before finalizing. Local-research-only. Budget around 3000 tokens."
        }
      ]
    },
    {
      "group_id": "tower-skeptic",
      "n": 1,
      "agents": [
        {
          "agent_name": "Argyris, Chris",
          "role": "skeptic",
          "angle": "non-vacuity / behavioral-feasibility attack-vector; kill any behavioral risk with no measurable witness or that assumes espoused behavior the evidence does not support",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack this tower's findings for non-vacuity and behavioral feasibility. Kill any risk or anti-pattern with no measurable witness, or that relies on espoused-theory behavior rather than theory-in-use evidence (defensive routines, single-loop assumptions). For survivors, confirm the attack-lane tag. Return exact kills and salvageable revisions for the synthesizer. Budget around 1600 tokens."
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

### Explorers (methodology axis; corpus fixed = behavior literature)

| Pair | Predicted disagreement |
| --- | --- |
| Kahneman / Bowles | Kahneman runs individual cognitive judgment analysis, Bowles runs experimental social-preference analysis on the methodology axis; a bias in Kahneman toward individual bias framing would be exposed by Bowles's evidence that social preferences and crowding operate between people, not just within one mind. |
| Kahneman / Hirschman | Kahneman runs static individual-decision analysis, Hirschman runs dynamic exit-voice institutional-response analysis on the methodology axis; a bias in Kahneman toward one-shot perception would be exposed by Hirschman's account of how contributors move between member, mercenary, steward, and spectator over time. |
| Bowles / Hirschman | Bowles runs experimental incentive/crowding analysis, Hirschman runs institutional exit-voice analysis on the methodology axis; a bias in Bowles toward measured incentive responses would be exposed by Hirschman's evidence about loyalty, voice, and exit that experiments rarely capture. |

`tower-synthesizer` (Senge) and `tower-skeptic` (Argyris) are `n = 1` (no tension). Only `explorers` is a subject group; Test 5 trivial. `final_approver: parent`.

## Next Step

Gate → after program confirm, human confirms this tower → registers `2026-06-27-econ-tower-socioeconomic-behavior` → 3 sub-lanes run isolated → synthesizer ⇄ skeptic → lane-tagged `tower-findings.md` → registered `SYN-ECON-TOWER-socio`.
