# Proposed Research Dispatch

Status: superseded-by-meta-program
Dispatch type: research
Tension gate: pass (2026-06-26, single-fan-out form)
Ledger status: not-registered
Promotion scope: local-research-only

> **Superseded 2026-06-27 — genesis record.** This single fan-out is the origin of the
> design, kept for provenance. Its lineage:
> 1. **single fan-out** (this sheet) — 4 explorer lanes + synthesizer + reviewers in one dispatch.
> 2. **flat two-phase split** (isolated harvest → synthesis) — an intermediate step, *discarded*
>    once the towers proved big enough to deserve their own degree of research.
> 3. **meta multi-tower program** (current) — [PROPOSED-META-PROGRAM.md](PROPOSED-META-PROGRAM.md):
>    a `meta` umbrella over four self-scoped tower dispatches
>    ([towers/](towers/)) + a [program synthesis](PROPOSED-PROGRAM-SYNTHESIS.md).
>
> This sheet must not be registered or run; the live program is the meta umbrella.

## Confirmation Gate

This sheet passed the two-agent `check-tension` gate on 2026-06-26:

- checker: PASS
- reviewer: PASS

It has not been registered in any external subagent ledger or local run log, and no research fan-out has run. Under the local agent policy, registration and execution require explicit human confirmation.

## Goal

Build a source-backed research map for a ResonantOS / ResonantDAO economy that promotes long-term growth and community building while resisting bounty optimization, exploit loops, token/speculation capture, authority collapse, and failed-DAO precedent traps.

## Context

CyberAlchemy v2 provides method authority through a knowledge-market / Evidence Exchange proposal that separates credit from authority and blocks reward adapters until gates pass. The official ResonantDAO whitepaper is the primary source tower and must be treated as the only official ResonantDAO source for this dispatch. External explorer lanes are bounded research towers, local-research-only, and may propose mechanisms but cannot promote definitions, constitutions, specs, token policy, or implementation.

## Search Bound

Explorer lanes do external web research. To prevent a recursive paper-chase — where each fetched source's bibliography invites the next fetch without end — every explorer is bound by a fixed search frontier. The bound is encoded into each explorer `initial_prompt` (`SEARCH BOUND` clause) and restated as a quota in each subtower's `levels/L0-corpus.md`.

- **Depth-1, no transitive chasing.** Search for and fetch primary/secondary sources directly. Do **not** follow a fetched source's citations or bibliography to fetch further sources. A cited-but-unfetched work is logged as a named residue target (title + why relevant), never retrieved this pass.
- **Per-lane quota ≤ 6 sources.** Each explorer admits at most 6 candidate sources to its lane. Surplus beyond the quota is logged to the subtower residue map, not collected.
- **Single web pass.** One round of web queries per explorer. The only sanctioned way to re-open search is the capped `synthesizer → explorers` feedback edge; an explorer never re-opens its own frontier.
- **Admission still gated.** The depth/quota bound does not relax source-kind labelling or the per-tower admission rule (cited identity, date, relevance, residue closed). A bounded source set that fails admission shrinks; it does not get topped up by chasing.

## Sheet

```json
{
  "dispatch_id": "2026-06-26-resonantos-economy-resilience-fanout",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "goal": "Build a source-backed research map for a ResonantOS / ResonantDAO economy that promotes long-term growth and community building while resisting bounty optimization, exploit loops, token/speculation capture, authority collapse, and failed-DAO precedent traps.",
  "context": "CyberAlchemy v2 provides method authority through a knowledge-market / Evidence Exchange proposal that separates credit from authority and blocks reward adapters until gates pass. The official ResonantDAO whitepaper is the primary source tower and must be treated as the only official ResonantDAO source for this dispatch. External explorer lanes are bounded research towers, local-research-only, and may propose mechanisms but cannot promote definitions, constitutions, specs, token policy, or implementation.",
  "max_loops": 1,
  "final_approver": "Brandenburg, Martin",
  "anti_bias_global": "mechanism-design optimism vs institution-and-behavior failure skepticism",
  "working_folder": "dispatch/",
  "groups": [
    {
      "group_id": "explorers",
      "n": 4,
      "anti_bias": "methodology + source-corpus composite",
      "agents": [
        {
          "agent_name": "Taleb, Nassim Nicholas",
          "role": "explorer",
          "angle": "historical/adversarial failure corpus of DAOs, crypto economies, bounty systems, and exploit loops; methodology = postmortem and tail-risk analysis; source corpus = failed DAO/crypto precedents",
          "model": "gpt-5.5",
          "token_budget": 1800,
          "initial_prompt": "Research source-backed failure modes from DAO, crypto, token, bounty, treasury, governance, and exploit-loop experiments that could attack ResonantDAO Phase 1 and Phase 2 economy design. Use the official whitepaper as the only ResonantDAO primary source. Return: bounded source candidates, typed failure modes, relevance to $RES/$RCT/UCI/Phase 2, and what claims should be blocked until evidence exists. Do not treat anecdotes as proof. SEARCH BOUND: depth-1 only — search and fetch sources directly, do NOT follow any source's citations/bibliography to fetch further sources; log cited-but-unfetched works as named residue targets, not retrievals. Admit at most 6 candidate sources to the failed-dao-crypto lane; log surplus as residue. One web pass only; do not re-open your own search frontier. Budget around 1800 tokens."
        },
        {
          "agent_name": "Kuhn, Thomas",
          "role": "explorer",
          "angle": "science-of-science and scientometrics corpus; methodology = institutional knowledge-production analysis; source corpus = bibliometrics, science of science, peer-review, credit allocation, and priority dynamics",
          "model": "gpt-5.5",
          "token_budget": 1800,
          "initial_prompt": "Research papers and frameworks from scientometrics, bibliometrics, science of science, peer review, priority, novelty, and credit allocation that explain long-term knowledge production. Translate only into local research hypotheses for ResonantOS economy design. Return: source candidates, credit-system distortions, durable community-growth lessons, and misuse warnings. SEARCH BOUND: depth-1 only — search and fetch sources directly, do NOT follow any source's citations/bibliography to fetch further sources; log cited-but-unfetched works as named residue targets, not retrievals. Admit at most 6 candidate sources to the science-of-science lane; log surplus as residue. One web pass only; do not re-open your own search frontier. Budget around 1800 tokens."
        },
        {
          "agent_name": "Fritz, Tobias",
          "role": "explorer",
          "angle": "formal mechanism and stochastic reward design; methodology = mathematical/mechanism-design analysis; source corpus = mechanism design, random audits, scoring rules, market design, Markov/process and incentive-compatibility literature",
          "model": "gpt-5.5",
          "token_budget": 1800,
          "initial_prompt": "Research formal mechanisms that can damp gaming, preserve invariants, introduce bounded randomness, separate reward signals from authority decisions, and support anti-collusion review. Use the whitepaper and Evidence Exchange proposal as design constraints, not as proof. Return: candidate invariants, workflow sketches, formal residue, and what needs an evidence harness. SEARCH BOUND: depth-1 only — search and fetch sources directly, do NOT follow any source's citations/bibliography to fetch further sources; log cited-but-unfetched works as named residue targets, not retrievals. Admit at most 6 candidate sources to the formal-mechanisms lane; log surplus as residue. One web pass only; do not re-open your own search frontier. Budget around 1800 tokens."
        },
        {
          "agent_name": "Kahneman, Daniel",
          "role": "explorer",
          "angle": "behavioral economics and socioeconomic mentality formation; methodology = behavioral and social-psychological analysis; source corpus = bounded rationality, motivation crowding, identity, status, trust, and cooperative behavior literature",
          "model": "gpt-5.5",
          "token_budget": 1800,
          "initial_prompt": "Research behavioral economics and social dynamics sources that explain how rewards, status, reputation, bounties, and visible metrics change participant mentalities. Focus on mechanisms that preserve community thinking and long-term contribution rather than task-harvesting behavior. Return: source candidates, design risks, anti-patterns, and witness ideas. SEARCH BOUND: depth-1 only — search and fetch sources directly, do NOT follow any source's citations/bibliography to fetch further sources; log cited-but-unfetched works as named residue targets, not retrievals. Admit at most 6 candidate sources to the socioeconomic-behavior lane; log surplus as residue. One web pass only; do not re-open your own search frontier. Budget around 1800 tokens."
        }
      ]
    },
    {
      "group_id": "synthesizer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Simon, Herbert",
          "role": "synthesizer",
          "model": "gpt-5.5",
          "token_budget": 3000,
          "initial_prompt": "Reconcile the explorer returns into candidate economy-resilience mechanisms, invariants, workflows, and tower residue. Distinguish primary-source claims, related-source claims, local inference, analogy, operator reading, and open residue. Produce a synthesis that reviewers can attack. Budget around 3000 tokens."
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
          "angle": "non-vacuity attack-vector; kill any mechanism without a concrete witness, stress test, or falsifiable failure condition",
          "model": "gpt-5.5",
          "token_budget": 1600,
          "initial_prompt": "Attack the synthesis for non-vacuity. Kill mechanisms that have no concrete witness, stress test, falsifiable failure condition, or measurable fixture path. Return exact kills and salvageable revisions. Budget around 1600 tokens."
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
          "angle": "precedent attack-vector; identify whether the proposed mechanism is already owned by systems, commons, DAO, governance, or incentive literature and should be build-from-owned",
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
          "initial_prompt": "Persist findings.md only after reviewer convergence, with a verdict matrix and citations back to explorer returns. Do not author research.md. Preserve local-only promotion boundary and source-kind labels. Budget around 3000 tokens."
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
          "initial_prompt": "Evaluate findings.md only against the goal, source-kind labels, verdict matrix, citation discipline, promotion boundary, and subagent closeout. Return accept/reject or revision request. Budget around 1800 tokens."
        }
      ]
    }
  ],
  "connections": [
    {"from": "explorers", "to": "synthesizer", "type": "sequential"},
    {"from": "synthesizer", "to": "reviewers", "type": "zig-zag", "loop_cap": 2},
    {"from": "reviewers", "to": "writer", "type": "sequential"},
    {"from": "writer", "to": "auditor", "type": "sequential"},
    {"from": "auditor", "to": "writer", "type": "feedback", "loop_cap": 1}
  ]
}
```

## Predicted Disagreements

### Explorers

| Pair | Predicted disagreement |
| --- | --- |
| Taleb / Kuhn | Taleb runs historical/adversarial DAO failure analysis, Kuhn runs science-of-science institutional analysis on the source-corpus axis; a bias in Taleb toward crypto-specific tail events would be exposed by Kuhn's broader institutional credit-dynamics corpus. |
| Taleb / Fritz | Taleb runs postmortem/tail-risk analysis, Fritz runs formal mechanism analysis on the methodology axis; a bias in Fritz toward elegant mechanism abstraction would be exposed by Taleb's exploit and blow-up corpus. |
| Taleb / Kahneman | Taleb runs adversarial failure and ruin analysis, Kahneman runs behavioral-mentality analysis on the methodology axis; a bias in Kahneman toward ordinary cognitive bias would be exposed by Taleb's tail-risk and adversarial optimization lens. |
| Kuhn / Fritz | Kuhn runs institutional science-credit analysis, Fritz runs formal mechanism analysis on the methodology axis; a bias in Fritz toward local incentive compatibility would be exposed by Kuhn's long-horizon institution and priority-dynamics lens. |
| Kuhn / Kahneman | Kuhn runs field-level institutional dynamics, Kahneman runs individual and group behavioral dynamics on the methodology axis; a bias in either micro or macro framing would be exposed by the other's level of analysis. |
| Fritz / Kahneman | Fritz runs stochastic/mechanism-design analysis, Kahneman runs behavioral response analysis on the methodology axis; a bias in Fritz toward nominally incentive-compatible rules would be exposed by Kahneman's evidence about how people actually adapt to rewards. |

### Reviewers

| Pair | Predicted disagreement |
| --- | --- |
| Popper / Quine | Popper runs non-vacuity attack, Quine runs definitional-soundness attack on the attack-vector axis; a bias in Popper toward witness-only acceptance would be exposed by Quine's collapse-to-existing-term test. |
| Popper / Meadows | Popper runs non-vacuity attack, Meadows runs precedent/system-ownership attack on the attack-vector axis; a bias in Popper toward a locally testable but already-owned idea would be exposed by Meadows' precedent check. |
| Quine / Meadows | Quine runs definitional-soundness attack, Meadows runs precedent/system-ownership attack on the attack-vector axis; a bias in Quine toward semantic purity while missing known system-dynamics precedents would be exposed by Meadows. |

## Next Step

Human says `confirmed` or revises the sheet. Only then should the appender register the row and the research fan-out run.
