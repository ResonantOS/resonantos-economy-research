# Proposed Harvest Dispatch

Status: closed
Dispatch type: research
Tension gate: pass
Ledger status: closed
Promotion scope: local-research-only

## Confirmation Gate

This sheet passed the two-agent `check-tension` gate on 2026-06-27, was
materially revised to require local source snapshots before selector extraction,
then passed the gate again in its snapshot-only form, and was later revised to
reduce expansion requests through the snapshot closure strategy. The latest
revision passed the gate.

- checker: PASS
- reviewer: PASS

The gate record is [CHECK-TENSION-HARVEST-GATE.md](CHECK-TENSION-HARVEST-GATE.md).
The dispatch ledger contains the dispatch row created at
`2026-06-27T02:28:44.462Z` and the close row created at
`2026-06-27T02:45:44.245Z`. The run resolved with accepted local findings:

1. `harvest/cav2-lean/research.md`;
2. `harvest/cav2-lean/selector-map.md`;
3. `harvest/cav2-lean/reviewer-positions.md`;
4. `harvest/cav2-lean/findings.md`.

The findings are local research controls only. They do not promote token
policy, bounty policy, governance authority, financial launch readiness,
anti-gaming proof, or implementation policy.

## Principle-1 Trigger

The harvest qualifies for dispatch because it has:

- synthesis: CyberAlchemy v2, authority policy, Lean formalization, theorem
  workspace, social-dynamic, and prize/open-problem sources must be reconciled;
- context protection: raw source material is much larger than the parent should
  carry in the broad economy fan-out;
- isolation: exploratory readings should be discardable if they overclaim;
- parallelism: CAv2 and Lean harvest lanes can run independently before
  synthesis.

## Lane And Subagent Summary

| Lane / group | Runs | Subagents | Purpose |
| --- | --- | --- | --- |
| `explorers` | parallel first stage | Benkler, Ostrom, Fritz, Hirschman | Harvest copied CAv2 and DomainSpec Lean snapshots from four tensioned source/method lanes. |
| `synthesizer` | after explorers | Simon | Reconcile explorer returns into a selector map and classify gaps with the snapshot closure strategy. |
| `reviewers` | zig-zag after synthesizer | Popper, Quine, Meadows | Attack selector map for non-vacuity, definitional collapse, and systems-boundary risk. |
| `writer` | after reviewers | Senge | Persist `harvest/cav2-lean/findings.md` with selector table and `snapshot_gap_review`. |
| `auditor` | final approval after writer | Brandenburg | Accept or reject findings against source-kind, closure, blocked-use, and promotion boundaries. |

## Dependency Flow

```text
explorers
  -> synthesizer
  -> reviewers
  -> writer
  -> auditor
  -> writer feedback if needed
```

The `synthesizer -> reviewers` edge is a one-loop `zig-zag`. The
`auditor -> writer` edge is one-loop feedback only; it does not authorize
registration or policy promotion.

## Goal

Harvest CyberAlchemy v2 and DomainSpec Lean formalization into local source
snapshots and selectors for the ResonantOS economy research tower, so later
economy explorers can cite copied local evidence for method authority,
formalization precedent, workflow witnesses, invariant style, and open residue
without turning them into token policy, bounty policy, governance authority, or
launch readiness.

## Context

The repository already treats the ResonantDAO whitepaper as the only official
ResonantDAO primary source. The necessary CyberAlchemy v2 and DomainSpec Lean
files are copied into `sources/local-snapshots/`; harvest agents should use
only those local snapshots. If a needed source is missing, the harvest should
apply `sources/local-snapshots/CLOSURE-STRATEGY.md`: continue with in-corpus
evidence when possible, demote weak claims to residue, and batch only
load-bearing expansion requests.
CyberAlchemy v2 contributes method authority around Evidence Exchange, source
posture, promotion gates, credit-authority separation, and reward-adapter
caution. DomainSpec Lean contributes formalization discipline around invariant
writing, witness requirements, typed negatives, open-problem closure, and
prize-versus-achievement separation. This dispatch is a local harvest only: it
may create copied source snapshots, selectors, residue, notation, and candidate
invariants, but it cannot promote economy mechanisms or authority.

## Sheet

```json
{
  "dispatch_id": "2026-06-27-cav2-lean-harvest",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "goal": "Harvest CyberAlchemy v2 and DomainSpec Lean formalization into local source snapshots and selectors for the ResonantOS economy research tower, so later economy explorers can cite copied local evidence for method authority, formalization precedent, workflow witnesses, invariant style, and open residue without turning them into token policy, bounty policy, governance authority, or launch readiness.",
  "context": "The repository already treats the ResonantDAO whitepaper as the only official ResonantDAO primary source. The necessary CyberAlchemy v2 and DomainSpec Lean files are copied into sources/local-snapshots/; harvest agents should use only those local snapshots. If a needed source is missing, apply sources/local-snapshots/CLOSURE-STRATEGY.md: continue with in-corpus evidence when possible, demote weak claims to residue, and batch only load-bearing expansion requests. CyberAlchemy v2 contributes method authority around Evidence Exchange, source posture, promotion gates, credit-authority separation, and reward-adapter caution. DomainSpec Lean contributes formalization discipline around invariant writing, witness requirements, typed negatives, open-problem closure, and prize-versus-achievement separation. This dispatch is a local harvest only: it may create copied source snapshots, selectors, residue, notation, and candidate invariants, but it cannot promote economy mechanisms or authority.",
  "max_loops": 1,
  "final_approver": "Brandenburg, Martin",
  "anti_bias_global": "method-authority harvest vs formalization-discipline harvest under anti-overclaim pressure",
  "working_folder": "harvest/cav2-lean/",
  "groups": [
    {
      "group_id": "explorers",
      "n": 4,
      "anti_bias": "source-corpus + methodology composite",
      "agents": [
        {
          "agent_name": "Benkler, Yochai",
          "role": "explorer",
          "angle": "CyberAlchemy Evidence Exchange as peer-production and reuse infrastructure; methodology = product-research selector extraction; source corpus = proposal-blueprint, findings, and research transcript",
          "model": "gpt-5.5",
          "token_budget": 1500,
          "initial_prompt": "Harvest the local snapshots under sources/local-snapshots/cav2/evidence-exchange/ for selectors useful to ResonantOS economy research. Cite local snapshot paths. Use only copied local files. Do not chase every internal link; apply sources/local-snapshots/CLOSURE-STRATEGY.md and batch only load-bearing expansion requests. Focus on credit before money, reuse, contribution evidence, workflow witnesses, reward-adapter caution, and failure cases where measurement becomes the target. Return selector candidates with source refs, allowed use, blocked use, next check, and any nonblocking gaps. Do not promote any economy mechanism. Budget around 1500 tokens."
        },
        {
          "agent_name": "Ostrom, Elinor",
          "role": "explorer",
          "angle": "CyberAlchemy authority and promotion policy as institutional boundary discipline; methodology = governance-boundary extraction; source corpus = AUTHORITY-MODEL.md and promotion-policy.md",
          "model": "gpt-5.5",
          "token_budget": 1500,
          "initial_prompt": "Harvest the local snapshots under sources/local-snapshots/cav2/authority/ for selectors useful to ResonantOS economy research. Cite local snapshot paths. Use only copied local files. Do not chase every internal link; apply sources/local-snapshots/CLOSURE-STRATEGY.md and batch only load-bearing expansion requests. Focus on source-kind boundaries, promotion gates, non-collapse rules, owner routes, and how credit signals must not become governance authority. Return selector candidates with source refs, allowed use, blocked use, next check, and any nonblocking gaps. Do not promote token, bounty, governance, or launch policy. Budget around 1500 tokens."
        },
        {
          "agent_name": "Fritz, Tobias",
          "role": "explorer",
          "angle": "DomainSpec Lean formalization as invariant and witness discipline; methodology = formal-methods extraction; source corpus = README, FRAMEWORK-IMPLICATIONS, theorem README, and related formalization docs",
          "model": "gpt-5.5",
          "token_budget": 1500,
          "initial_prompt": "Harvest the local snapshots under sources/local-snapshots/domainspec-lean/ for selectors useful to ResonantOS economy research. Cite local snapshot paths. Use only copied local files. Do not chase every internal link; apply sources/local-snapshots/CLOSURE-STRATEGY.md and batch only load-bearing expansion requests. Focus on invariant style, witness requirements, theorem/proof vocabulary, separate audit axes, claim-below-proof discipline, and how to phrase mechanism safety without pretending it is proven. Return selector candidates with source refs, allowed use, blocked use, next check, and any nonblocking gaps. Budget around 1500 tokens."
        },
        {
          "agent_name": "Hirschman, Albert O.",
          "role": "explorer",
          "angle": "DomainSpec Lean social dynamics, open-problem closure, and prizes as institutional learning discipline; methodology = social/institutional extraction; source corpus = research-social-dynamic README, OPEN-PROBLEM-LOOP-CLOSURE, PRIZES, and theorem workspace framing",
          "model": "gpt-5.5",
          "token_budget": 1500,
          "initial_prompt": "Harvest the local snapshots under sources/local-snapshots/domainspec-lean/ for social-dynamic, open-problem, prize, architecture, glossary, and theorem-workspace selectors useful to ResonantOS economy research. Cite local snapshot paths. Use only copied local files. Do not chase every internal link; apply sources/local-snapshots/CLOSURE-STRATEGY.md and batch only load-bearing expansion requests. Focus on prize versus achievement separation, typed negatives, open-residue closure, bet/authority vocabulary, and institutional learning loops. Return selector candidates with source refs, allowed use, blocked use, next check, and any nonblocking gaps. Budget around 1500 tokens."
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
          "token_budget": 2600,
          "initial_prompt": "Reconcile the explorer returns into a selector map for the ResonantOS economy tower. Verify that load-bearing selectors cite local snapshots under sources/local-snapshots/. Apply sources/local-snapshots/CLOSURE-STRATEGY.md to classify gaps as nonblocking-gap, open-residue, drop-selector, batch expansion, or blocking expansion. Separate method authority, formalization precedent, local inference, analogy, and open residue. Identify exactly which repository files should be updated and which claims remain blocked. Budget around 2600 tokens."
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
          "angle": "non-vacuity attack-vector; reject selectors that do not name a concrete future use, target file, witness, or next check",
          "model": "gpt-5.5",
          "token_budget": 1300,
          "initial_prompt": "Attack the selector map for non-vacuity. Reject selectors that do not cite a local snapshot, name a concrete future use, target repository file, witness, or next check. Do not require expansion for non-load-bearing background links; require expansion only under sources/local-snapshots/CLOSURE-STRATEGY.md. Return exact kills and salvageable revisions. Budget around 1300 tokens."
        },
        {
          "agent_name": "Quine, Willard Van Orman",
          "role": "skeptic",
          "angle": "definitional-soundness attack-vector; reject selectors that collapse credit, signal, reward, authority, proof, policy, and launch readiness",
          "model": "gpt-5.5",
          "token_budget": 1300,
          "initial_prompt": "Attack the selector map for definitional collapse. Reject selectors that collapse copied source evidence, credit, signal, reward, authority, proof, policy, or launch readiness. Return exact kills and salvageable revisions. Budget around 1300 tokens."
        },
        {
          "agent_name": "Meadows, Donella H.",
          "role": "skeptic",
          "angle": "precedent and systems-boundary attack-vector; mark selectors that overfit local source grammar or need external DAO/science/mechanism/behavioral towers before reuse",
          "model": "gpt-5.5",
          "token_budget": 1300,
          "initial_prompt": "Attack the selector map for systems-boundary errors. Mark selectors that overfit local copied CyberAlchemy or Lean snapshots, need external DAO/science/mechanism/behavioral towers before reuse, or hide feedback-loop risk. Do not require expansion for ordinary internal links in copied map-like files; require expansion only for load-bearing missing evidence. Being owned or borrowed is not a kill; label the bridge boundary. Budget around 1300 tokens."
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
          "token_budget": 2400,
          "initial_prompt": "Write harvest/cav2-lean/findings.md from the accepted selector map. Include a selector table, local snapshot citations, source-kind labels, allowed use, blocked use, next checks, repository update targets, and a snapshot_gap_review section that batches only load-bearing expansion candidates. Do not author research.md. Preserve local-only promotion boundary. Budget around 2400 tokens."
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
          "token_budget": 1400,
          "initial_prompt": "Audit harvest/cav2-lean/findings.md against the dispatch goal, local snapshot citation discipline, snapshot closure strategy, source-kind labels, selector shape, blocked-use discipline, repository update targets, and promotion boundary. Return accept/reject or revision request. Budget around 1400 tokens."
        }
      ]
    }
  ],
  "connections": [
    {"from": "explorers", "to": "synthesizer", "type": "sequential"},
    {"from": "synthesizer", "to": "reviewers", "type": "zig-zag", "loop_cap": 1},
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
| Benkler / Ostrom | Benkler runs product-research peer-production extraction, Ostrom runs governance-boundary extraction on the methodology axis; a bias in Benkler toward reuse and contribution flow would be exposed by Ostrom's authority and promotion-gate lens. |
| Benkler / Fritz | Benkler runs CyberAlchemy Evidence Exchange workflow extraction, Fritz runs Lean formal-methods extraction on the source-corpus axis; a bias in Fritz toward theorem-shaped discipline without contribution workflow would be exposed by Benkler's product-research corpus. |
| Benkler / Hirschman | Benkler runs contribution/reuse selector extraction, Hirschman runs social-learning and open-problem extraction on the methodology axis; a bias in Benkler toward legible contribution signals would be exposed by Hirschman's exit/voice/learning-loop lens. |
| Ostrom / Fritz | Ostrom runs authority and institutional-boundary extraction, Fritz runs formal invariant and witness extraction on the methodology axis; a bias in Fritz toward proof vocabulary would be exposed by Ostrom's governance-boundary discipline. |
| Ostrom / Hirschman | Ostrom runs institutional rule and promotion-gate extraction, Hirschman runs prize/open-residue/social-dynamic extraction on the methodology axis; a bias in Ostrom toward stable rule form would be exposed by Hirschman's emphasis on unresolved learning loops. |
| Fritz / Hirschman | Fritz runs invariant/proof/witness extraction, Hirschman runs social-dynamic/prize/open-problem extraction on the source-corpus and methodology axes; a bias in Fritz toward formal closure would be exposed by Hirschman's typed-negative and institutional-learning lane. |

### Reviewers

| Pair | Predicted disagreement |
| --- | --- |
| Popper / Quine | Popper runs non-vacuity attack, Quine runs definitional-soundness attack on the attack-vector axis; a bias in Popper toward usable selectors would be exposed by Quine's collapse test. |
| Popper / Meadows | Popper runs witness and next-check attack, Meadows runs systems-boundary and bridge-risk attack on the attack-vector axis; a bias in Popper toward local testability would be exposed by Meadows' broader feedback-loop boundary. |
| Quine / Meadows | Quine runs semantic-collapse attack, Meadows runs systems and bridge-boundary attack on the attack-vector axis; a bias in Quine toward vocabulary purity would be exposed by Meadows' source-ecology and external-tower lens. |

## Expected Parent Integration

After a confirmed and accepted run, the parent should integrate outputs into:

- [sources/local-snapshots/README.md](../sources/local-snapshots/README.md)
- [sources/source-records.md](../sources/source-records.md)
- [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md)
- [NOTATION.md](../NOTATION.md)
- [levels/L1-residue-map.md](../levels/L1-residue-map.md)
- [levels/L2-closure-plan.md](../levels/L2-closure-plan.md)
- [.arcanum/inventory/](../.arcanum/inventory/README.md)

## Next Step

Run the registered harvest dispatch and append its close row, or append an
owner-approved `user_abort` / `error` close row if the registration should not
proceed.
