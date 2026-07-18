# Proposed Tower Research Dispatch — Contribution Mechanism

Status: proposed-confirmation-required
Dispatch type: research
meta: false
Tension gate: pass (2026-07-13 — independent checker PASS; independent reviewer PASS; no apontamentos)
Ledger status: not-registered
Promotion scope: local-research-only

## P1 Trigger

Dispatch is warranted by all four Principle-1 triggers:

- **synthesis:** four bounded external corpora plus an official-source constraint
  must be reconciled;
- **context protection:** raw source cards and contradictory precedents are much
  larger than the parent needs;
- **isolation:** each prior-art lane must remain discardable until source and
  bridge checks pass; and
- **parallelism:** the four external lanes are independent before synthesis.

This is not a request to validate or implement a mechanism. It is a bounded
source-first tower run.

## Goal

Build a source-backed research map for a contribution mechanism covering
contribution types, decision-specific dimensions, deferred contribution
investment and realization language, informative failure, reviewer integrity,
history and qualified allocation, newcomer access, the existing bets and
candidate experiments, with Goodhart pressure applied as a cross-cutting attack
condition.

## Existing Decision That Must Not Be Reversed Silently

The accepted deferred-contribution dispatch rejected `investment` and
`cashing` as already-defined mechanism aliases and retained only a narrower
result-specific review candidate. This dispatch may research whether the
informal language can be rehabilitated through an explicit two-language bridge;
it may not treat that rehabilitation as already achieved.

## Bounded Outputs

- `subtowers/contribution-mechanism/returns/research/research.md` — verbatim
  explorer returns, appended mechanically by the strategist;
- `subtowers/contribution-mechanism/returns/research/findings.md` — cited
  synthesis with verdict matrix;
- four `subtowers/<existing-tower>/returns/contribution-mechanism-prior-art.md`
  source cards following `subtowers/MECHANISM-PRIOR-ART-CONTRACT.md`;
- proposed updates, if supported, to this tower's claim ledger, glossary,
  definitions, related-work map, residue, and learning pack; and
- evidence-harness handoffs, not experiment results.

## Sheet

```json
{
  "dispatch_id": "2026-07-13-contribution-mechanism-research",
  "schema_version": "0.6.0",
  "dispatch_type": "research",
  "goal": "Build a bounded, source-backed research map for contribution types, decision-specific dimensions, deferred contribution investment and realization language, informative failure, reviewer integrity, opportunity allocation, newcomer access, existing bets, and candidate experiments, with Goodhart pressure applied across the full mechanism rather than treated as the only topic.",
  "context": "This repository already contains an accepted deferred-contribution synthesis, three open bets, a workshop-derived contribution/failure/review/allocation guide, and a mechanism-directed prior-art contract. The prior synthesis rejected investment/cashing as already-safe mechanism aliases; this run may investigate a two-language bridge but must not silently reverse that verdict. The official ResonantDAO whitepaper remains the only official primary source; all external evidence is related or formalization precedent. Outputs are local research only and cannot create reward, payout, reputation, allocation policy, governance, implementation, validation, or authority effects.",
  "max_loops": 1,
  "final_approver": "Brandenburg, Martin",
  "anti_bias_global": "contribution legibility and coordination benefit versus optimization, capture, exclusion, and authority-collapse risk",
  "working_folder": "subtowers/contribution-mechanism/returns/research/",
  "groups": [
    {
      "group_id": "prior-art-explorers",
      "n": 4,
      "anti_bias": "methodology + source-corpus composite",
      "agents": [
        {
          "agent_name": "Taleb, Nassim Nicholas",
          "role": "explorer",
          "angle": "historical-adversarial methodology over failed DAO, crypto, bounty, retroactive-credit, reputation, reviewer, and allocation systems; prioritize operational blow-ups, capture, concentration, and exploit paths",
          "model": "gpt-5.5",
          "token_budget": 2600,
          "initial_prompt": "Work only in the failed-dao-crypto prior-art lane for the contribution-mechanism tower. Find first-party postmortems, operating documentation, datasets, or strong empirical analyses relevant to activity records, retroactive assessment, reputation, bounties, reviewer assignment, allocation, newcomer access, and failure recognition. Require at least one case that attacks the preferred mechanism. For each admitted source state source kind, supported claim, unsupported inference, local bridge, and disanalogy. Ask what actors farmed, captured, split, reciprocated, or concentrated after a measure controlled a benefit. Follow subtowers/MECHANISM-PRIOR-ART-CONTRACT.md. SEARCH BOUND: depth 1, one web pass, at most 6 admitted sources, no recursive citation chasing; surplus and cited-but-unfetched candidates become residue. Return a source card and the local decisions it can change. No mechanism verdict or policy recommendation. Budget around 2600 tokens."
        },
        {
          "agent_name": "Kuhn, Thomas",
          "role": "explorer",
          "angle": "empirical-institutional methodology over science-of-science, contributorship, peer review, bibliometrics, invisible labor, negative results, and cumulative advantage; prioritize credit and status dynamics",
          "model": "gpt-5.5",
          "token_budget": 2600,
          "initial_prompt": "Work only in the science-of-science prior-art lane for the contribution-mechanism tower. Research contributorship taxonomies, invisible labor, peer-review conflicts and prestige effects, delayed recognition, citation/metric gaming, negative-result visibility, cumulative advantage, and newcomer/experience configurations. Require at least one source that attacks the preferred mechanism. For each admitted source state source kind, supported claim, unsupported inference, local bridge, and disanalogy. Ask which evidence structures preserve joint contribution and which status/history signals become self-reinforcing. Follow subtowers/MECHANISM-PRIOR-ART-CONTRACT.md. SEARCH BOUND: depth 1, one web pass, at most 6 admitted sources, no recursive citation chasing; surplus and cited-but-unfetched candidates become residue. Return a source card and the local decisions it can change. No direct academia-to-DAO effect transfer. Budget around 2600 tokens."
        },
        {
          "agent_name": "Myerson, Roger",
          "role": "explorer",
          "angle": "formal and game-theoretic methodology over multidimensional measurement, temporal and joint attribution, matching, lotteries, audits, strategic classification, and Goodhart variants; prioritize assumptions and sensitivity reversals",
          "model": "gpt-5.5",
          "token_budget": 2800,
          "initial_prompt": "Work only in the formal-mechanisms prior-art lane for the contribution-mechanism tower. Research multidimensional measurement, multitask incentives, temporal/graph/counterfactual attribution, complementarity, reviewer matching, conflict-filtered random assignment, qualified lotteries, audit sampling, strategic classification, and distinct Goodhart failure families. Require at least one adversarial sensitivity case. For each admitted source state source kind, assumptions, supported claim, unsupported inference, local bridge, and the condition under which the conclusion reverses. Apply Goodhart to declared proxy-objective-benefit triples and also test the defense or replacement proxy. Follow subtowers/MECHANISM-PRIOR-ART-CONTRACT.md. SEARCH BOUND: depth 1, one web pass, at most 6 admitted sources, no recursive citation chasing; surplus and cited-but-unfetched candidates become residue. Computability is not legitimacy, merit, or authority. Budget around 2800 tokens."
        },
        {
          "agent_name": "Bowles, Samuel",
          "role": "explorer",
          "angle": "behavioral and socioeconomic methodology over motivation, effort and complexity estimates, learning, status, trust, fairness, randomization legitimacy, newcomer access, and crowding; prioritize trained behavior and distribution",
          "model": "gpt-5.5",
          "token_budget": 2600,
          "initial_prompt": "Work only in the socioeconomic-behavior prior-art lane for the contribution-mechanism tower. Research how visible metrics, incentives, effort/complexity estimates, recognition, status, lotteries, reviewer identity, learning, unequal resources, and newcomer labels change motivation, participation, legitimacy, exclusion, and allocation-seeking. Include evidence that could contradict the preferred mechanism. For each admitted source state source kind, supported claim, unsupported inference, local bridge, and disanalogy. Separate rational gaming from motivation crowding and from structural access constraints. Follow subtowers/MECHANISM-PRIOR-ART-CONTRACT.md. SEARCH BOUND: depth 1, one web pass, at most 6 admitted sources, no recursive citation chasing; surplus and cited-but-unfetched candidates become residue. No universal behavioral-effect claim. Budget around 2600 tokens."
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
          "token_budget": 4800,
          "initial_prompt": "Reconcile the four prior-art returns with the official-whitepaper constraint and the admitted local starting corpus in subtowers/contribution-mechanism/. Build one candidate picture across: contribution families; planning versus result dimensions; investment/realization two-language safety; result-link and joint-dependency evidence; informative and preventive failure; conflicts, nepotism, reviewer qualification and randomness; history, qualified lotteries and newcomer access; the existing three bets; candidate experiments A-F; and shadow-versus-consequential Goodhart pressure. Preserve contradictory evidence and source-kind labels. For every metric name objective, proxy, who can optimize it, what benefit it controls, how alignment can fail, and how the defense becomes another target. Produce retain/revise/split/kill/future-work recommendations for experiments, but no experiment verdict. Surface exact evidence-harness blockers. Budget around 4800 tokens."
        }
      ]
    },
    {
      "group_id": "research-skeptics",
      "n": 3,
      "robot_talks": true,
      "anti_bias": "attack-vector",
      "agents": [
        {
          "agent_name": "Meadows, Donella H.",
          "role": "skeptic",
          "angle": "precedent attack-vector; identify actual owners, feedback loops, cumulative advantage, and places where a candidate should be build-from-owned rather than named as new",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Attack the synthesis through the precedent gate. Name the actual owner for every candidate mechanism or research device where bounded evidence permits. Being owned is not a kill: mark build-from-owned or already-deployed and state the local bridge limit. Expose feedback loops across history, opportunity, visibility, reviewer status, and replacement metrics. Return initial and final positions for robot-talks. Budget around 2200 tokens."
        },
        {
          "agent_name": "Popper, Karl",
          "role": "skeptic",
          "angle": "vacuity and non-vacuity attack-vector; require a smallest witness, explicit objective-proxy pair, frozen comparison, distributional measure, and collapse condition",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Attack the synthesis through the non-vacuity gate. Kill any candidate that cannot produce a smallest concrete witness, a declared objective and proxy, a comparison arm, a measurable harm/distribution surface, and a fact that would zero its contribution. Test whether the investment/realization language has a comprehension witness, whether useful failure excludes cheap failure, and whether randomness names what it protects. Return initial and final positions for robot-talks. Budget around 2200 tokens."
        },
        {
          "agent_name": "Quine, Willard Van Orman",
          "role": "skeptic",
          "angle": "definitional attack-vector; detect renamed person scoring, stored value, entitlement, authority-by-reputation, value-by-effort, fairness-by-randomness, and success-by-metric",
          "model": "gpt-5.5",
          "token_budget": 2200,
          "initial_prompt": "Attack the synthesis through the definitional-soundness gate. Kill candidates that collapse into renamed person scoring, stored balances, payout promises, authority-by-reputation, value-by-effort, fairness-by-randomness, or downstream-use-as-truth. Check that contribution description, planning, result recognition, opportunity allocation, reward, and authority remain different decisions. Preserve the prior investment/cashing demotion unless new evidence supports a narrower bridge. Return initial and final positions for robot-talks. Budget around 2200 tokens."
        }
      ]
    },
    {
      "group_id": "findings-writer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Senge, Peter",
          "role": "writer",
          "model": "gpt-5.5",
          "token_budget": 4800,
          "initial_prompt": "Write findings.md only after skeptic convergence. Every load-bearing claim must cite an explorer return or admitted local artifact and carry source kind. Include the research verdict matrix, a track-by-track bridge-decision table, the status of experiments A-F and any proposed Goodhart meta-bet, typed negatives, the investment/realization language decision, evidence-harness handoffs, subagent closeout, and visible residue. Do not author research.md and do not claim mechanism validation, policy, or readiness. Budget around 4800 tokens."
        }
      ]
    },
    {
      "group_id": "research-auditor",
      "n": 1,
      "agents": [
        {
          "agent_name": "Brandenburg, Martin",
          "role": "auditor",
          "model": "gpt-5.5",
          "token_budget": 2400,
          "initial_prompt": "Evaluate findings.md only against the goal, bounded source contract, citations, source-kind labels, verdict matrix, prior-demotion visibility, two-language boundary, Goodhart proxy-objective discipline, experiment-status honesty, authority non-collapse, and subagent closeout. Reject unsupported effect transfer, evidence inheritance across bets, person totals, or any mechanism/policy/validation claim. Return ACCEPT or exact revision requests. Budget around 2400 tokens."
        }
      ]
    }
  ],
  "connections": [
    {"from": "prior-art-explorers", "to": "tower-synthesizer", "type": "sequential"},
    {"from": "tower-synthesizer", "to": "research-skeptics", "type": "zig-zag", "loop_cap": 2},
    {"from": "research-skeptics", "to": "findings-writer", "type": "sequential"},
    {"from": "findings-writer", "to": "research-auditor", "type": "sequential"},
    {"from": "research-auditor", "to": "findings-writer", "type": "feedback", "loop_cap": 1}
  ]
}
```

## Lanes And Anti-Bias Positions

| Group | Purpose | Role | Anti-bias axis | Dependency |
| --- | --- | --- | --- | --- |
| `prior-art-explorers` | collect four isolated bounded source cohorts | four explorers | methodology + source-corpus | runs first, agents in parallel |
| `tower-synthesizer` | reconcile local and external evidence into a candidate picture | one synthesizer | n/a | after explorers |
| `research-skeptics` | attack precedent, non-vacuity, and definition soundness | three skeptics | attack-vector | zig-zag after synthesis |
| `findings-writer` | persist cited synthesis and verdict matrix | one writer | n/a | after skeptic convergence |
| `research-auditor` | approve or request exact repair | one auditor/final approver | n/a | after writer; one feedback repair allowed |

## Predicted Disagreements

### Explorer group

| Pair | Predicted disagreement required by the tension gate |
| --- | --- |
| Taleb / Kuhn | Taleb runs historical-adversarial operational-failure analysis, while Kuhn runs empirical-institutional credit-system analysis on the methodology and source-corpus axes; a bias in Taleb toward spectacular exploit cases would be exposed by Kuhn's evidence about slow status, visibility, and cumulative-advantage dynamics. |
| Taleb / Myerson | Taleb runs postmortem and tail-risk analysis, while Myerson runs formal and game-theoretic analysis on the methodology axis; a bias in Myerson toward elegant incentive rules would be exposed by Taleb's operated-system failures, while a bias in Taleb toward anecdotal collapse would be exposed by Myerson's assumption-sensitive models. |
| Taleb / Bowles | Taleb runs strategic capture and blow-up analysis, while Bowles runs behavioral and socioeconomic adaptation analysis on the methodology axis; a bias in Taleb toward malicious actors would be exposed by Bowles' evidence about ordinary motivation, legitimacy, and unequal access. |
| Kuhn / Myerson | Kuhn runs science-credit and peer-review institutional evidence, while Myerson runs formal attribution and allocation models on the source-corpus and methodology axes; a bias in Myerson toward calculability would be exposed by Kuhn's evidence that measured credit changes institutions and omits contribution. |
| Kuhn / Bowles | Kuhn runs field-level status and cumulative-advantage analysis, while Bowles runs participant-level motivation, fairness, and access analysis on the methodology axis; a macro-institutional bias in Kuhn would be exposed by Bowles' micro and distributional evidence, and the reverse by Kuhn's long-horizon structure. |
| Myerson / Bowles | Myerson runs rational strategic-agent and formal mechanism analysis, while Bowles runs motivation, norms, and resource-inequality analysis on the methodology axis; a bias in Myerson toward payoff optimization would be exposed by Bowles' non-payoff and legitimacy effects, while Bowles' contextual claims would be bounded by Myerson's explicit assumptions. |

### Skeptic group

| Pair | Predicted disagreement required by the tension gate |
| --- | --- |
| Meadows / Popper | Meadows runs precedent ownership, while Popper runs non-vacuity on the attack-vector axis; a bias in Meadows toward accepting a well-owned idea would be exposed if Popper cannot build its local witness. |
| Meadows / Quine | Meadows runs precedent ownership, while Quine runs definitional collapse on the attack-vector axis; a bias in Meadows toward importing established language would be exposed when Quine shows it renames an already-blocked authority or entitlement surface. |
| Popper / Quine | Popper runs non-vacuity, while Quine runs definitional soundness on the attack-vector axis; a bias in Popper toward accepting any measurable witness would be exposed if Quine shows the witness measures the wrong or collapsed object. |

Both subject groups specialize the global tension: explorers test whether the
mechanism's hoped-for legibility survives different evidence corpora, while
skeptics test whether the synthesized benefit survives ownership, witness, and
definition attacks.

## Dependency Flow

```text
four prior-art explorers
  -> tower synthesizer
  <-> three research skeptics (zig-zag, cap 2)
  -> findings writer
  -> final auditor
  -> writer repair when requested (feedback, cap 1)
```

## Gate, Ledger, And Closeout State

- Check-tension: PASS/PASS on 2026-07-13; the independent checker and reviewer
  found no Test 1-5 or partition failure.
- Human confirmation: required after both tension checks pass.
- Ledger: not registered; no dispatch or close row exists.
- Execution: not run; no agent output exists.
- Closeout expectation: append the close row, report `exit_reason` and
  `agents_spawned`, persist the source cards and findings, update inventory and
  source/claim surfaces, and keep unresolved experiment work as residue.

## Next Human Action

After the tension gate passes, say `confirmed` to register and run this research
dispatch, or request a sheet revision. Confirmation of this research dispatch
does not confirm the separate review dispatch.
