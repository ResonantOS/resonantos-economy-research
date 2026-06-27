# Proposed Tower Dispatch — failed-dao-crypto (worked template)

Status: proposed-confirmation-required
Dispatch type: research
meta: false
parent_dispatch_id: 2026-06-27-resonantos-economy-program
Tension gate: pass (2026-06-27 — checker PASS, reviewer PASS; reviewer confirmed Ostrom/Bowles do not collapse — institutional vs individual-incentive levels)
Ledger status: registered-and-closed (resolved, 2026-06-27) — findings at returns/tower-findings.md, source SYN-ECON-TOWER-FAILED-DAO
Promotion scope: local-research-only

## Role in the program

Tower 1 of the meta program ([PROPOSED-META-PROGRAM.md](../PROPOSED-META-PROGRAM.md)). It is the **worked template** every other tower instantiates: self-scoped sub-lanes tensioned on the **methodology** axis (the corpus is fixed — the failed-DAO/crypto precedent space), feeding a tower synthesizer that produces this tower's findings. Cross-tower review happens later, at the program synthesis.

## Goal

Harvest and synthesize a bounded, source-backed map of **failed DAO / crypto / token / bounty / treasury / governance / exploit** precedents that stress-test the ResonantDAO economy, producing `subtowers/failed-dao-crypto/returns/tower-findings.md`.

## Self-scoped depth

L1 residue lists 6 failure classes (bounty/points farming, liquidity reflexivity, treasury depletion, governance capture, sybil/collusion). They cluster into **3 methodology lenses**, so this tower scopes **3 sub-lanes**:

| Sub-lane | Methodology | Failure classes covered |
| --- | --- | --- |
| tail-risk / reflexivity | postmortem, ruin, reflexive blow-up | liquidity reflexivity, treasury depletion |
| institutional / collective-action | governance and collective-action analysis | governance capture, voter apathy |
| incentive-gaming / behavioral | incentive and motivation-crowding analysis | bounty/points farming, sybil/collusion |

## Search Bound

Per the program invariant: depth-1, no citation-chasing; **≤6 admitted sources per sub-lane** (≤18 this tower); one web pass; cited-but-unfetched → `subtowers/failed-dao-crypto/levels/L1-residue-map.md` residue. Whitepaper-only ResonantDAO base; this tower receives no other tower's output.

## Sheet

```json
{
  "dispatch_id": "2026-06-27-econ-tower-failed-dao-crypto",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "meta": false,
  "parent_dispatch_id": "2026-06-27-resonantos-economy-program",
  "goal": "Harvest and synthesize a bounded, source-backed map of failed DAO/crypto/token/bounty/treasury/governance/exploit precedents that stress-test the ResonantDAO economy, producing this tower's findings. Corpus is fixed to the failed-DAO/crypto precedent space; sub-lanes are tensioned on methodology.",
  "context": "Tower 1 of the meta economy-resilience program. Whitepaper-only ResonantDAO base; receives no sibling tower output. Local-research-only: may surface candidates, separate source claims from local reading, and propose invariants/risk gates, but cannot promote definitions, token policy, governance weights, or implementation. Adversarial skeptic review is deferred to the program synthesis. Output persists to subtowers/failed-dao-crypto/returns/.",
  "max_loops": 1,
  "final_approver": "parent",
  "anti_bias_global": "mechanism-design optimism vs institution-and-behavior failure skepticism",
  "working_folder": "subtowers/failed-dao-crypto/returns/",
  "groups": [
    {
      "group_id": "explorers",
      "n": 3,
      "anti_bias": "methodology",
      "agents": [
        {
          "agent_name": "Taleb, Nassim Nicholas",
          "role": "explorer",
          "angle": "tail-risk / reflexivity methodology over the failed-DAO corpus; postmortem and ruin analysis of liquidity-reflexive and treasury-depletion blow-ups",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the failed DAO/crypto precedent corpus ONLY, research liquidity-reflexivity and treasury-depletion failures using postmortem and tail-risk methodology. Use the official whitepaper as the only ResonantDAO base; you receive NO sibling lane or sibling tower output. Return: bounded source candidates, the mechanism that failed, the exploited metric, the aftermath, and the ResonantDAO pressure point ($RES liquidity, Phase 2 financial tokens, treasury/UCI). Do not treat anecdotes as proof. SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations/bibliographies onward; log cited-but-unfetched works as named residue. Admit at most 6 sources to this sub-lane; log surplus as residue. One web pass; no re-open path. Budget around 2200 tokens."
        },
        {
          "agent_name": "Ostrom, Elinor",
          "role": "explorer",
          "angle": "institutional / collective-action methodology over the failed-DAO corpus; governance-capture and voter-apathy analysis",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the failed DAO/crypto precedent corpus ONLY, research governance-capture and collective-action failures (voter apathy, delegation capture, plutocratic takeover) using institutional and collective-action methodology. Use the whitepaper as the only ResonantDAO base; you receive NO sibling lane or tower output. Return: bounded source candidates, the governance mechanism that failed, the trigger, and the ResonantDAO pressure point (contextual governance influence, sector reputation). SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched works as residue. Admit at most 6 sources to this sub-lane; log surplus as residue. One web pass; no re-open path. Budget around 2200 tokens."
        },
        {
          "agent_name": "Bowles, Samuel",
          "role": "explorer",
          "angle": "incentive-gaming / behavioral methodology over the failed-DAO corpus; bounty/points-farming and sybil/collusion analysis",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Within the failed DAO/crypto precedent corpus ONLY, research bounty/points-farming, airdrop farming, and sybil/collusion exploitation using incentive and motivation-crowding methodology. Use the whitepaper as the only ResonantDAO base; you receive NO sibling lane or tower output. Return: bounded source candidates, the incentive that was gamed, the gaming pattern, and the ResonantDAO pressure point ($RCT, member levels, contribution validation, AI-agent accounts). SEARCH BOUND: depth-1 only — fetch directly, do NOT follow citations onward; log cited-but-unfetched works as residue. Admit at most 6 sources to this sub-lane; log surplus as residue. One web pass; no re-open path. Budget around 2200 tokens."
        }
      ]
    },
    {
      "group_id": "tower-synthesizer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Beer, Stafford",
          "role": "synthesizer",
          "model": "gpt-5.5",
          "token_budget": 3000,
          "initial_prompt": "Reconcile the three failed-DAO sub-lane returns into this tower's findings: typed failure classes, the ResonantDAO pressure point each maps to, and borrow-carefully / block / future-work decisions per the subtower contract. TAG each finding with the attack-lane(s) it bears on (lanes/ATTACK-LANES.md: Lane 1 auth-credit, Lane 2 $RCT capture, Lane 3 $RES emission, Lane 4 bounty/prize, Lane 5 Phase 2 financial). Treat each sub-lane as an independent witness; do not assume they agree. Distinguish source claims, local inference, analogy, and open residue. Flag any cross-tower question for the program synthesis rather than answering it here. Survive the tower skeptic's attack before finalizing. Do not promote beyond local-research-only. Budget around 3000 tokens."
        }
      ]
    },
    {
      "group_id": "tower-skeptic",
      "n": 1,
      "agents": [
        {
          "agent_name": "Myerson, Roger",
          "role": "skeptic",
          "angle": "non-vacuity / incentive-feasibility attack-vector; kill any failure finding that has no concrete mechanism, no real witness, or is not incentive-feasible against the ResonantDAO surfaces it claims to threaten",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack this tower's synthesized findings for non-vacuity and incentive-feasibility. Kill any failure claim that lacks a concrete mechanism, a real cited witness, or a plausible incentive path against the ResonantDAO surface it names; demote anecdotes. For survivors, confirm the attack-lane tag is correct. Return exact kills and salvageable revisions for the synthesizer. Budget around 1600 tokens."
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

### Explorers (methodology axis; corpus fixed = failed-DAO precedent space)

| Pair | Predicted disagreement |
| --- | --- |
| Taleb / Ostrom | Taleb runs tail-risk/ruin postmortem, Ostrom runs institutional/collective-action analysis on the methodology axis; a bias in Taleb toward financial blow-up framing would be exposed by Ostrom's governance-capture lens, and vice versa. |
| Taleb / Bowles | Taleb runs ruin/reflexivity analysis, Bowles runs incentive/motivation-crowding analysis on the methodology axis; a bias in Bowles toward designed-incentive framing would be exposed by Taleb's evidence that systems blow up outside their incentive model. |
| Ostrom / Bowles | Ostrom runs collective-action/governance analysis, Bowles runs individual-incentive/gaming analysis on the methodology axis; a bias in either the institutional or the individual level of analysis would be exposed by the other. |

`tower-synthesizer` and `tower-skeptic` are each `n = 1` (no tension; a single skeptic carries one attack-vector). Only `explorers` is a subject group, and it is unchanged from the gated version — **adding the n=1 skeptic does not re-open the check-tension gate** (the gate scopes subject groups only). Test 5 is trivial (one `n ≥ 2` group). `final_approver: parent` — the program (meta) approves this tower's findings; no dedicated tower auditor.

## In-tower review vs program review

The `tower-skeptic` (Myerson) attacks **in-corpus**: are this tower's failure findings concrete, witnessed, incentive-feasible, and correctly lane-tagged? The program-synthesis reviewers (Popper/Quine/Meadows) attack **cross-corpus**: do the synthesized mechanisms survive vacuity / definitional-collapse / precedent across all four towers. Different scopes, no redundancy.

## Next Step

Gate (check-tension, explorers) PASS → then, after the program shape is confirmed, human confirms this tower → appender registers `2026-06-27-econ-tower-failed-dao-crypto` (child of the program) → the 3 sub-lanes run isolated → synthesizer drafts, tower-skeptic attacks (zig-zag ≤1), synthesizer finalizes `tower-findings.md` with attack-lane tags → registered as `SYN-ECON-TOWER-failed-dao`, an input to the program synthesis.
