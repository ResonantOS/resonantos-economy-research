# Proposed Review Dispatch — Contribution Mechanism Tower

Status: proposed-confirmation-required
Dispatch type: review
meta: false
Tension gate: pass (2026-07-13 refreshed target — independent checker PASS; independent reviewer PASS; no apontamentos)
Ledger status: not-registered
Promotion scope: local-research-only

## P1 Trigger

Dispatch is warranted because the completed tower will contain many mutually
referencing artifacts, four source-card lanes, a synthesis, definitions,
experiments, and high-risk contribution, allocation, reward, reputation, and
authority vocabulary. Independent full-corpus attack lenses are needed to avoid
one reviewer trading coverage for depth.

## Target Readiness

The research dispatch closed `resolved` after final auditor ACCEPT. The target
manifest below is refreshed against files that exist. Because the JSON context
and target state materially changed from prospective to actual, the sheet was
rechecked and received a new independent tension PASS/PASS. It remains
unregistered and unrun until separate human confirmation.

## Target Manifest

Every attacker reads the whole target corpus under every lens:

- `subtowers/contribution-mechanism/` excluding
  `subtowers/contribution-mechanism/returns/review/`;
- the four exact cards:
  `subtowers/failed-dao-crypto/returns/contribution-mechanism-prior-art.md`,
  `subtowers/science-of-science/returns/contribution-mechanism-prior-art.md`,
  `subtowers/formal-mechanisms/returns/contribution-mechanism-prior-art.md`, and
  `subtowers/socioeconomic-behavior/returns/contribution-mechanism-prior-art.md`;
- `sources/source-records.md` rows `SYN-CONTRIBUTION-MECHANISM` and
  `SRC-CONTRIBUTION-MECHANISM-*`;
- `claims/SOURCE-CLAIM-LEDGER.md` rows `C16`-`C19` and `R11`;
- `.arcanum/inventory/entries/contribution-mechanism-tower.md`;
- `prizes/BET-REGISTER.md` entries `BET-PRZ-04-a` through `BET-PRZ-06-a` and
  `prizes/PRIZE-REGISTER.md` entries `PRZ-04` through `PRZ-06`;
- `dispatch/towers/PROPOSED-CONTRIBUTION-MECHANISM-RESEARCH.md`; and
- the research dispatch and close rows in
  `telemetry/agents/subagents-dispatch.yaml` as process/governance evidence,
  never research truth.

The full-corpus rule means these are not divided among attackers. Each reads all
of them and attacks through one declared lens.

## Review Deliverables

- `subtowers/contribution-mechanism/returns/review/attacks.md` — verbatim attacker
  and verifier returns;
- `subtowers/contribution-mechanism/returns/review/findings.md` — verified,
  severity-ranked change requests with per-artifact KEEP/FIX verdicts; and
- no fixes, experiment verdicts, or authority promotions.

## Sheet

```json
{
  "dispatch_id": "2026-07-13-contribution-mechanism-review",
  "schema_version": "0.6.0",
  "dispatch_type": "review",
  "goal": "Red-team the completed contribution-mechanism tower and its bounded source cards for source and governance fidelity, reference integrity, operability, and abuse resistance, producing verified change requests rather than applying fixes or validating a mechanism.",
  "context": "The contribution-mechanism research dispatch closed resolved after final auditor ACCEPT. Its actual target corpus now includes the full contribution-mechanism tower and research returns, four bounded external source cards, repository source-record rows, claim-ledger rows C16-C19 and R11, the contribution-mechanism inventory entry, exact BET-PRZ-04-a through BET-PRZ-06-a and contested PRZ-04 through PRZ-06 records, and the research dispatch/close rows as governance evidence only. The review must preserve the investment/realization/cashing mechanism-alias KILLs, the current CM-D5 circularity KILL and prospective E1/E2 boundary, component-versus-integrated ownership separation, the six decision separation, three-bet independence, source-kind limits, and Goodhart pressure on candidate and defense proxies. It is local research only; KEEP/FIX verdicts create no reward, payout, reputation, allocation policy, governance, implementation, validation, or authority effect.",
  "max_loops": 1,
  "final_approver": "Brandenburg, Martin",
  "anti_bias_global": "tower completeness and usability optimism versus governance, evidence, operability, and abuse skepticism",
  "working_folder": "subtowers/contribution-mechanism/returns/review/",
  "groups": [
    {
      "group_id": "full-corpus-attackers",
      "n": 4,
      "robot_talks": true,
      "anti_bias": "methodology + attack-vector composite",
      "agents": [
        {
          "agent_name": "Ostrom, Elinor",
          "role": "explorer",
          "angle": "fidelity and governance lens using scope attack-vector and institutional methodology; attack research-policy leakage, authority collapse, participation boundaries, and silent reversal of the prior demotion",
          "model": "gpt-5.5",
          "token_budget": 2600,
          "initial_prompt": "Read the entire refreshed target manifest. Attack fidelity to AGENTS.md, the authority model, promotion policy, source spine, official-source boundary, and the prior deferred-contribution verdict. Look for research becoming policy, participation records becoming entitlement, reputation or credit becoming authority, randomness deciding fairness, or investment/cashing being rehabilitated without evidence. Every finding must quote the artifact, name file and severity, and propose one fix. If an attack fails, record what was tested. Return initial and final robot-talks positions. Read-only; do not modify targets. Budget around 2600 tokens."
        },
        {
          "agent_name": "Kuhn, Thomas",
          "role": "explorer",
          "angle": "ownership and reference-integrity lens using precedent attack-vector and historical source-audit methodology; attack citation drift, source-kind inflation, missing disanalogies, and evidence inheritance",
          "model": "gpt-5.5",
          "token_budget": 2600,
          "initial_prompt": "Read the entire refreshed target manifest. Attack ownership and reference integrity: verify citations, source kinds, supported versus unsupported inferences, bridge decisions, negative precedent, official-source constraints, terminology ownership, and claims about prior artifacts. Look for Wikipedia or external policy used as authority, academic/DAO transfer without a bridge, evidence inherited across bets, or prior art treated as validation. Every finding must quote the artifact, name file and severity, and propose one fix. If an attack fails, record what was tested. Return initial and final robot-talks positions. Read-only. Budget around 2600 tokens."
        },
        {
          "agent_name": "Fritz, Tobias",
          "role": "explorer",
          "angle": "mechanics and operability lens using vacuity attack-vector and computational/manual-execution methodology; attack undefined fields, incomparable dimensions, unrunnable experiments, missing thresholds, and broken links",
          "model": "gpt-5.5",
          "token_budget": 2800,
          "initial_prompt": "Read the entire refreshed target manifest. Attack mechanics and operability: follow links, inspect term definitions, trace the contribution-to-realization path, and attempt to instantiate each retained experiment on paper. Find hidden scalar weights, cross-family comparison, missing objective/proxy pairs, missing arms or assignment, undefined qualification/conflict rules, absent invalidity or collapse thresholds, and handoffs that cannot be executed. Every finding must quote the artifact, name file and severity, and propose one fix. If an attack fails, record what was tested. Return initial and final robot-talks positions. Read-only. Budget around 2800 tokens."
        },
        {
          "agent_name": "Taleb, Nassim Nicholas",
          "role": "explorer",
          "angle": "abuse and gaming lens using counter-example attack-vector and adversarial methodology; attack metric farming, reciprocal review, nepotism, failure farming, newcomer harm, concentration, and defense Goodhart",
          "model": "gpt-5.5",
          "token_budget": 2800,
          "initial_prompt": "Read the entire refreshed target manifest. Attack abuse and gaming end to end. Construct concrete counterexamples for activity counts, complexity inflation, record splitting, manufactured dependencies, reciprocal reviews, conflict concealment, reputation lock-in, qualified-pool capture, lottery rerolls, newcomer risk transfer, cheap failures, downstream-use farming, and anti-gaming defenses becoming new targets. Check every proposed benefit and distributional measure. Every finding must quote the artifact, name file and severity, and propose one fix. If an attack fails, record what was tested. Return initial and final robot-talks positions. Read-only. Budget around 2800 tokens."
        }
      ]
    },
    {
      "group_id": "review-synthesizer",
      "n": 1,
      "agents": [
        {
          "agent_name": "Senge, Peter",
          "role": "writer",
          "model": "gpt-5.5",
          "token_budget": 4200,
          "initial_prompt": "Using all attacker initial and final positions, deduplicate proposed findings and draft review findings.md. Organize by artifact, include file, quoted evidence, severity, one-line proposed fix, and provisional KEEP/FIX verdict. Keep distinct problems distinct; do not convert absence of evidence into a universal failure claim. Preserve all disputed items for verifier adjudication. Budget around 4200 tokens."
        }
      ]
    },
    {
      "group_id": "finding-verifiers",
      "n": 2,
      "anti_bias": "attack-vector",
      "agents": [
        {
          "agent_name": "Popper, Karl",
          "role": "skeptic",
          "angle": "counter-example attack-vector; refute each proposed finding by checking the literal artifact, links, target behavior, and smallest contrary witness",
          "model": "gpt-5.5",
          "token_budget": 2600,
          "initial_prompt": "Independently verify every proposed review finding against the literal files. Try to refute each with quoted target text, working links/checks, or a smallest contrary witness. Confirm only findings whose claimed failure actually exists. A refuted finding must be dropped, not softened. Also verify severity and proposed fix fit the evidence. Budget around 2600 tokens."
        },
        {
          "agent_name": "Quine, Willard Van Orman",
          "role": "skeptic",
          "angle": "scope and definitional attack-vector; refute findings that confuse local candidate language with canonical policy, duplicate one root cause, or claim a broader collapse than the artifact supports",
          "model": "gpt-5.5",
          "token_budget": 2600,
          "initial_prompt": "Independently verify every proposed review finding for scope and definitional precision. Refute findings that mistake a clearly labelled candidate for policy, duplicate another root cause, misidentify ownership, or generalize beyond the quoted artifact. Confirm only evidence-bounded findings and require the writer to drop refuted items. Verify that surviving fixes do not themselves promote terms or mechanisms. Budget around 2600 tokens."
        }
      ]
    },
    {
      "group_id": "coverage-auditor",
      "n": 1,
      "agents": [
        {
          "agent_name": "Brandenburg, Martin",
          "role": "auditor",
          "model": "gpt-5.5",
          "token_budget": 2400,
          "initial_prompt": "Audit the verified review package for coverage. Confirm every target was attacked under all four lenses, robot-talks initial/final positions reached the writer, every surviving finding cites and quotes the target, every refuted finding was dropped, severities follow the house taxonomy, and per-artifact KEEP/FIX verdicts plus a severity-ordered change-request list exist. Fire the zero-findings red flag if all attackers returned none without defended attacks. ACCEPT or request exact revisions. Budget around 2400 tokens."
        }
      ]
    }
  ],
  "connections": [
    {"from": "full-corpus-attackers", "to": "review-synthesizer", "type": "sequential"},
    {"from": "review-synthesizer", "to": "finding-verifiers", "type": "zig-zag", "loop_cap": 2},
    {"from": "finding-verifiers", "to": "coverage-auditor", "type": "sequential"}
  ]
}
```

## Lanes And Anti-Bias Positions

| Group | Purpose | Role | Anti-bias axis | Dependency |
| --- | --- | --- | --- | --- |
| `full-corpus-attackers` | attack every target under four full-corpus lenses | four explorer/attackers | methodology + attack-vector | first; agents parallel then robot-talks |
| `review-synthesizer` | deduplicate and severity-rank change requests | one writer | n/a | after attackers |
| `finding-verifiers` | refute false positives and scope inflation | two skeptics | attack-vector | zig-zag with writer |
| `coverage-auditor` | check coverage, citations, dropped refutations, and final verdicts | one auditor/final approver | n/a | after verifier convergence |

## Predicted Disagreements

### Attacker group

| Pair | Predicted disagreement required by the tension gate |
| --- | --- |
| Ostrom / Kuhn | Ostrom runs institutional scope and governance fidelity, while Kuhn runs precedent and historical source integrity on the methodology and attack-vector axes; a bias in Ostrom toward local governance coherence would be exposed by Kuhn's evidence that the cited owner or source does not support the claim. |
| Ostrom / Fritz | Ostrom runs scope/governance attack, while Fritz runs vacuity/operability attack on the attack-vector and methodology axes; a boundary-clean artifact that cannot be executed would be exposed by Fritz, while an executable path that leaks policy or authority would be exposed by Ostrom. |
| Ostrom / Taleb | Ostrom runs institutional fidelity, while Taleb runs adversarial counterexamples on the methodology axis; a rule that is procedurally legible but exploitable would be exposed by Taleb, while an abuse fix that violates participation or authority boundaries would be exposed by Ostrom. |
| Kuhn / Fritz | Kuhn runs historical ownership and citation audit, while Fritz runs manual/computational operability on the methodology axis; a well-cited but unrunnable proposal would be exposed by Fritz, while an executable but source-inflated proposal would be exposed by Kuhn. |
| Kuhn / Taleb | Kuhn runs reference-integrity and precedent attack, while Taleb runs gaming counterexamples on the attack-vector axis; a correctly cited mechanism that fails adversarially would be exposed by Taleb, while an attractive attack story unsupported by the cited corpus would be exposed by Kuhn. |
| Fritz / Taleb | Fritz runs vacuity and execution checks, while Taleb runs abuse counterexamples on the attack-vector and methodology axes; a mechanically complete happy path that creates a farming path would be exposed by Taleb, while a dramatic exploit claim that cannot be instantiated would be exposed by Fritz. |

### Verifier group

| Pair | Predicted disagreement required by the tension gate |
| --- | --- |
| Popper / Quine | Popper runs literal counter-example verification, while Quine runs scope and definitional verification on the attack-vector axis; a finding that points to a real failed check but overstates what collapsed would be exposed by Quine, while a semantically precise finding unsupported by the actual file would be exposed by Popper. |

Both subject groups specialize the global tension: attackers challenge claims of
tower completeness from governance, evidence, operability, and abuse positions;
verifiers challenge whether those attacks themselves exceed the literal proof.

## Dependency Flow

```text
four full-corpus attackers + robot-talks
  -> review writer
  <-> two finding verifiers (zig-zag, cap 2)
  -> coverage auditor / final approver
```

## Gate, Ledger, And Closeout State

- Check-tension: PASS/PASS for the current design on 2026-07-13; the independent
  checker and reviewer found no Test 1-5 or partition failure. This does not
  remove the target-readiness blocker or the refresh requirement.
- Target readiness: refreshed against the closed research artifacts.
- Human confirmation: separate confirmation required; refreshed tension gate is
  PASS/PASS.
- Ledger: not registered; no dispatch or close row exists.
- Execution: not run; no attack or review finding exists.
- Closeout expectation: `attacks.md`, verified `findings.md`, accepted
  per-artifact verdicts, dispatch + close rows, inventory update, and remaining
  fixes left to a separately authorized act.

## Next Human Action

Say `confirmed` to register and run this review dispatch, or request a sheet
revision. Research confirmation does not carry over.
