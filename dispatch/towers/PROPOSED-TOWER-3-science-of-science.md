# Proposed Tower Dispatch — science-of-science

Status: proposed-confirmation-required
Dispatch type: research
meta: false
parent_dispatch_id: 2026-06-27-resonantos-economy-program
Tension gate: pass (2026-06-27 — checker PASS, reviewer PASS)
Ledger status: registered-and-closed (resolved, 2026-06-27) — findings at returns/tower-findings.md, source SYN-ECON-TOWER-SCIENCE
Promotion scope: local-research-only

## Role in the program

Tower 3 of the meta program ([PROPOSED-META-PROGRAM.md](../PROPOSED-META-PROGRAM.md)), instantiating the confirmed template. Corpus fixed to the **scientometrics / science-of-science / peer-review / credit-allocation** literature; **2 sub-lanes** (this tower's self-scoped degree) tensioned on the **methodology** axis.

## Self-scoped depth

L1 residue lists 5 distortions (citation gaming, novelty pressure, priority disputes, peer-review capture, invisible labor) → **2 methodology lenses**:

| Sub-lane | Methodology | Residue covered |
| --- | --- | --- |
| paradigm / institutional | historical-institutional knowledge-production analysis | novelty pressure, priority disputes, paradigm dynamics |
| peer-production / empirical | empirical networked-cooperation and bibliometric analysis | citation gaming, peer-review capture, invisible labor |

## Sheet

```json
{
  "dispatch_id": "2026-06-27-econ-tower-science-of-science",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "meta": false,
  "parent_dispatch_id": "2026-06-27-resonantos-economy-program",
  "goal": "Harvest and synthesize bounded, source-backed lessons from scientometrics and science-of-science on long-run credit, citation, priority, peer review, and community knowledge formation, producing this tower's lane-tagged findings. Corpus fixed; sub-lanes tensioned on methodology.",
  "context": "Tower 3 of the meta economy-resilience program. Whitepaper-only ResonantDAO base; receives no sibling tower output. Translate only into local research hypotheses; do not turn academia into a DAO analogy without a named bridge decision. Local-research-only. In-corpus skeptic runs here; cross-tower review deferred to program synthesis. Output persists to subtowers/science-of-science/returns/.",
  "max_loops": 1,
  "final_approver": "parent",
  "anti_bias_global": "mechanism-design optimism vs institution-and-behavior failure skepticism",
  "working_folder": "subtowers/science-of-science/returns/",
  "groups": [
    {
      "group_id": "explorers",
      "n": 2,
      "anti_bias": "methodology",
      "agents": [
        {
          "agent_name": "Kuhn, Thomas",
          "role": "explorer",
          "angle": "paradigm / institutional methodology over the science-of-science corpus; novelty pressure, priority disputes, paradigm dynamics",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the scientometrics / science-of-science corpus ONLY, research novelty pressure, priority disputes, and credit-allocation distortions using historical-institutional knowledge-production methodology. Whitepaper is your only ResonantDAO base; you receive NO sibling lane or tower output. Translate only into local research hypotheses; name a bridge decision before any DAO analogy. Return bounded source candidates, the distortion, and the durable community-growth lesson or misuse warning. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        },
        {
          "agent_name": "Benkler, Yochai",
          "role": "explorer",
          "angle": "peer-production / empirical methodology over the science-of-science corpus; citation gaming, peer-review capture, invisible labor",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the scientometrics / peer-production corpus ONLY, research citation/metric gaming, peer-review capture, and invisible/maintenance labor using empirical networked-cooperation and bibliometric methodology. Whitepaper is your only ResonantDAO base; you receive NO sibling lane or tower output. Name a bridge decision before any DAO analogy. Return bounded source candidates, the gaming/capture pattern, and the contribution-system warning (care, moderation, education, maintenance must not be ignored). SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched as residue. Admit at most 6 sources to this sub-lane; surplus to residue. One web pass; no re-open. Budget around 2200 tokens."
        }
      ]
    },
    {
      "group_id": "tower-synthesizer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Simon, Herbert",
          "role": "synthesizer",
          "model": "gpt-5.5",
          "token_budget": 2800,
          "initial_prompt": "Reconcile the two science-of-science sub-lane returns into this tower's findings: credit-system distortions, durable community-growth lessons, misuse warnings, and required bridge decisions. TAG each finding with the attack-lane(s) it bears on (lanes/ATTACK-LANES.md Lane 1-5). Treat each sub-lane as an independent witness. Distinguish source claims, local inference, analogy, and open residue. Flag cross-tower questions for program synthesis. Survive the tower skeptic before finalizing. Local-research-only. Budget around 2800 tokens."
        }
      ]
    },
    {
      "group_id": "tower-skeptic",
      "n": 1,
      "agents": [
        {
          "agent_name": "Quine, Willard Van Orman",
          "role": "skeptic",
          "angle": "definitional-soundness attack-vector; kill any lesson that collapses scientific credit into authority-by-score or popularity-by-metric when ported to the economy",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack this tower's findings for definitional collapse. Kill any ported lesson that is really authority-by-score, popularity-by-citation, or governance-by-metric renamed, or that smuggles an unbridged academia->DAO analogy. For survivors, confirm the attack-lane tag and that the bridge decision is named. Return exact kills and salvageable revisions for the synthesizer. Budget around 1600 tokens."
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

### Explorers (methodology axis; corpus fixed = science-of-science literature)

| Pair | Predicted disagreement |
| --- | --- |
| Kuhn / Benkler | Kuhn runs historical-institutional paradigm analysis, Benkler runs empirical peer-production/bibliometric analysis on the methodology axis; a bias in Kuhn toward long-horizon paradigm narratives would be exposed by Benkler's measured gaming and invisible-labor data, and a bias in Benkler toward measurable metrics would be exposed by Kuhn's account of priority and novelty dynamics that resist measurement. |

`tower-synthesizer` (Simon) and `tower-skeptic` (Quine) are `n = 1` (no tension). Only `explorers` (n=2, one pair) is a subject group; Test 5 trivial. `final_approver: parent`.

## Next Step

Gate → after program confirm, human confirms this tower → registers `2026-06-27-econ-tower-science-of-science` → 2 sub-lanes run isolated → synthesizer ⇄ skeptic → lane-tagged `tower-findings.md` → registered `SYN-ECON-TOWER-science`.
