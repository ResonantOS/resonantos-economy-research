# Proposed Program Synthesis Dispatch

Status: proposed-confirmation-required
Dispatch type: research
meta: false
parent_dispatch_id: 2026-06-27-resonantos-economy-program
Tension gate: pass (2026-06-27 — checker PASS, reviewer PASS)
Ledger status: not-registered
Promotion scope: local-research-only

## Role in the program

The terminal dispatch of the meta program ([PROPOSED-META-PROGRAM.md](PROPOSED-META-PROGRAM.md)). It reads the four lane-tagged tower findings (`SYN-ECON-TOWER-failed-dao`, `-formal`, `-science`, `-socio`), **aggregates by attack-lane** (lane × tower matrix), and runs the heavy cross-corpus reviewer round before producing the program `findings.md`. It does not re-open any tower; a corpus gap becomes residue + a fresh tower re-dispatch.

## Dependency

READY only when **all four tower dispatches have closed** and registered their `SYN-ECON-TOWER-*` returns (sequential edge: towers → synthesis).

## Sheet

```json
{
  "dispatch_id": "2026-06-27-econ-program-synthesis",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "meta": false,
  "parent_dispatch_id": "2026-06-27-resonantos-economy-program",
  "goal": "Reconcile the four lane-tagged tower findings into a cross-corpus economy-resilience map for the ResonantOS/ResonantDAO economy, organized by attack-lane, surviving adversarial cross-corpus review, producing a cited program findings.md.",
  "context": "Terminal dispatch of the meta economy-resilience program. Consumes the four SYN-ECON-TOWER-* tower findings as local sources, aggregated by attack-lane (lanes/ATTACK-LANES.md) with the two-lane dialectics (lanes/TWO-LANE-DIALECTICS.md, esp. Dialectic A) as the synthesis tension frame. Does NOT re-open towers. Whitepaper remains the only official ResonantDAO source. Local-research-only: cannot promote definitions, constitutions, specs, token policy, or implementation.",
  "max_loops": 1,
  "final_approver": "Brandenburg, Martin",
  "anti_bias_global": "mechanism-design optimism vs institution-and-behavior failure skepticism",
  "working_folder": "dispatch/economy-synthesis/",
  "groups": [
    {
      "group_id": "synthesizer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Simon, Herbert",
          "role": "synthesizer",
          "model": "gpt-5.5",
          "token_budget": 3500,
          "initial_prompt": "Reconcile the four lane-tagged tower findings (SYN-ECON-TOWER-*) into a cross-corpus economy-resilience map ORGANIZED BY ATTACK-LANE (Lane 1-5): for each lane, gather the evidence each tower contributed, name candidate mechanisms/invariants, and surface cross-tower tension. Use the two-lane dialectics as the framing question (smallest mechanism that strengthens an institution rather than replacing it). Each tower is an isolated witness (NOT statistically independent — same generative domain; convergence raises salience, not confidence). Distinguish primary-source, related-source, local inference, analogy, operator reading, and open residue. Honor the cross-tower constraint that the whitepaper is un-snapshotted: un-ledgered surface assertions stay operator-reading. Emit an explicit FIXTURE & CONSTITUTION BACKLOG section: for every candidate invariant or mechanism that owes validation, name the concrete fixture (with a decidable pass/fail condition) OR the constitution / authority-lane routing it requires, ranked by attack-lane leverage and by review survival; MERGE fixtures that collapse across towers onto a single lane. Produce a synthesis reviewers can attack. Budget around 3500 tokens."
        }
      ]
    },
    {
      "group_id": "reviewers",
      "n": 3,
      "robot_talks": true,
      "anti_bias": "attack-vector",
      "agents": [
        {
          "agent_name": "Popper, Karl",
          "role": "skeptic",
          "angle": "non-vacuity attack-vector; kill any cross-tower mechanism without a concrete witness, stress test, or falsifiable failure condition",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack the cross-corpus synthesis for non-vacuity. Kill mechanisms with no concrete witness, stress test, falsifiable failure condition, or measurable fixture path. Return exact kills and salvageable revisions. Budget around 1600 tokens."
        },
        {
          "agent_name": "Quine, Willard Van Orman",
          "role": "skeptic",
          "angle": "definitional-soundness attack-vector; kill renamed authority-by-score, popularity-by-token, or governance-by-market signals",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack the synthesis for definitional collapse. Kill anything that is just authority-by-score, popularity-by-token, governance-by-market, or existing CyberAlchemy authority separation renamed as a new economy mechanism. Return exact kills and salvageable revisions. Budget around 1600 tokens."
        },
        {
          "agent_name": "Meadows, Donella H.",
          "role": "skeptic",
          "angle": "precedent attack-vector; identify whether a cross-tower mechanism is already owned by systems, commons, DAO, governance, or incentive literature and should be build-from-owned",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack the synthesis for precedent and systems leverage. Identify whether proposed mechanisms are already owned by systems, commons, DAO, governance, or incentive literature. Being owned is not a kill; mark build-from-owned and name the boundary. Budget around 1600 tokens."
        }
      ]
    },
    {
      "group_id": "writer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Senge, Peter",
          "role": "writer",
          "model": "gpt-5.5",
          "token_budget": 3000,
          "initial_prompt": "Persist the program findings.md only after reviewer convergence, organized by attack-lane, with a verdict matrix and citations back to the tower findings (SYN-ECON-TOWER-*) and through them to source candidates. Preserve each reviewer's initial AND final positions (collapse detection). Include the FIXTURE & CONSTITUTION BACKLOG as a first-class, lane-ranked section of findings.md (this is the prioritized hand-off to the downstream fixtures phase and the authority lane). Do not author research.md. Preserve the local-only promotion boundary and source-kind labels. Budget around 3000 tokens."
        }
      ]
    },
    {
      "group_id": "auditor",
      "n": 1,
      "agents": [
        {
          "agent_name": "Brandenburg, Martin",
          "role": "auditor",
          "model": "gpt-5.5",
          "token_budget": 1800,
          "initial_prompt": "Evaluate the program findings.md only against the goal, lane organization, source-kind labels, verdict matrix, citation discipline back to tower findings, promotion boundary, and subagent closeout. Confirm no mechanism was promoted beyond local-research-only. Return accept/reject or a revision request. Budget around 1800 tokens."
        }
      ]
    }
  ],
  "connections": [
    {"from": "synthesizer", "to": "reviewers", "type": "zig-zag", "loop_cap": 2},
    {"from": "reviewers", "to": "writer", "type": "sequential"},
    {"from": "writer", "to": "auditor", "type": "sequential"},
    {"from": "auditor", "to": "writer", "type": "feedback", "loop_cap": 1}
  ]
}
```

## Predicted Disagreements

### Reviewers (attack-vector axis)

| Pair | Predicted disagreement |
| --- | --- |
| Popper / Quine | Popper runs non-vacuity attack, Quine runs definitional-soundness attack on the attack-vector axis; a bias in Popper toward witness-only acceptance would be exposed by Quine's collapse-to-existing-term test. |
| Popper / Meadows | Popper runs non-vacuity attack, Meadows runs precedent/system-ownership attack on the attack-vector axis; a bias in Popper toward a locally testable but already-owned idea would be exposed by Meadows' precedent check. |
| Quine / Meadows | Quine runs definitional-soundness attack, Meadows runs precedent/system-ownership attack on the attack-vector axis; a bias in Quine toward semantic purity while missing known system-dynamics precedents would be exposed by Meadows. |

`synthesizer`, `writer`, `auditor` are each `n = 1` (no tension). Only `reviewers` is a subject group; Test 5 trivial. `reviewers` carries `robot_talks: true` — the writer must receive each reviewer's initial AND final positions. `final_approver: Brandenburg, Martin` (dedicated auditor, the program's final gate).

## Next Step

Gate → after all four towers close, human confirms this dispatch → registers `2026-06-27-econ-program-synthesis` → synthesizer ⇄ reviewers (zig-zag ≤2) → writer → auditor → program `findings.md`. Program closeout updates `.arcanum/inventory/` and the dispatch ledger.
