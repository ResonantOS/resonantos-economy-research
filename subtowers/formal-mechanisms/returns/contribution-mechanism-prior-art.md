# Contribution Mechanism Prior Art — Formal Mechanisms

Dispatch: `2026-07-13-contribution-mechanism-research`
Status: bounded related/formal evidence; synthesis pending
Source boundary: Verbatim Agent 3 — Myerson, Roger — formal-mechanisms return only; no additional sources admitted.
Source return: [Agent 3 — Myerson, Roger — formal-mechanisms](../../contribution-mechanism/returns/research/research.md#agent-3--myerson-roger--formal-mechanisms)

mechanism_id: `contribution-mechanism-research`
prize_id: `null` — this lane spans unregistered experiments A–D and may inform `PRZ-04..06`; it inherits none of their evidence.
bet_ids: [`BET-PRZ-04-a`, `BET-PRZ-05-a`, `BET-PRZ-06-a`]
subtower: `formal-mechanisms`
date_checked: `2026-07-13`
status: `flag — bounded representation and sensitivity evidence only`
bounded_question: Which formal models can represent multidimensional work, temporal/joint attribution, reviewer assignment, qualified lotteries, and audit sampling, and under which assumption or adversary do their rankings or defenses reverse?
why_this_subtower_is_relevant: It can change representation choices and preregistered sensitivity fixtures for candidates A–D without deciding contribution merit, legitimacy, reward, or authority.
decision_this_research_can_change: Retain/revise/split candidate experiments, their adversary classes, and their fixture measures.
allowed_source_kinds: [`primary technical paper`, `peer-reviewed primary empirical study`]
source_depth_bound: `1`
source_quota: `6 admitted / 6 maximum`
required_negative_precedent: `satisfied — multitask distortion, malicious assignment bids, gate-contingent lottery acceptance, and four Goodhart families`
attack_target: Declared `(objective, proxy, controlled benefit)` triples and any defense/replacement proxy.

sources:

1. source_ref: [Holmström & Milgrom, “Multitask Principal–Agent Analyses”](https://doi.org/10.1093/jleo/7.special_issue.24)  
   source_kind: Primary formal economics paper.  
   assumptions: Risk-averse agent; multiple effort dimensions; observable but noisy performance signals; contract/job design determines incentives; effort can shift among tasks.  
   supported_claim: Strong incentives on an easily measured task can divert effort from valuable poorly measured tasks; measurement quality and task interaction affect optimal incentive intensity.  
   unsupported_inference: The model identifies valid contribution dimensions, weights, merit, or a DAO reward rule.  
   local_bridge: Candidate A must compare scalar and vector views while measuring displacement into omitted work, not merely reviewer agreement.  
   bridge_risk_or_disanalogy: A community is not a single principal-agent employment contract; objectives and task boundaries are contested.  
   reversal_condition: The distortion weakens or reverses when all relevant tasks are measured comparably, effort is not substitutable, or tasks are sufficiently complementary.

2. source_ref: [Wang, Wiens & Lundberg, “Shapley Flow”](https://proceedings.mlr.press/v130/wang21b.html)  
   source_kind: Primary technical paper, AISTATS/PMLR.  
   assumptions: A defensible directed acyclic causal graph, boundary, structural model, baseline, and intervention semantics.  
   supported_claim: Conditional attribution can be assigned to edges over an entire DAG; flat node attribution can hide dependencies.  
   unsupported_inference: Activity logs reveal the true causal graph, edge credit is human causation, or computed flow is merit.  
   local_bridge: `PRZ-04` fixtures can retain contested result-link graphs and compare path attribution rather than produce person totals. Time can be represented only when encoded in the DAG.  
   bridge_risk_or_disanalogy: Invisible work, cycles, omitted nodes, and alternative temporal boundaries are adjudicator choices. Explicit high-order complementarity is not solved by edge attribution alone.  
   reversal_condition: If two plausible DAGs produce different relevant paths or ordering, attribution remains plural/model-relative.

3. source_ref: [Jecmen et al., “Mitigating Manipulation in Peer Review via Randomized Reviewer Assignments”](https://doi.org/10.48550/arXiv.2006.16437)  
   source_kind: Primary technical paper with conference-data evaluation.  
   assumptions: Feasible qualified reviewer pool; meaningful similarity matrix; known pairwise/joint assignment constraints; conflict and close-association data are available.  
   supported_claim: Randomized assignments can cap reviewer-paper assignment probabilities subject to constraints; arbitrary joint constraints are NP-hard, while a practical special case is tractable. Their evaluated instances limited a malicious reviewer’s desired assignment probability to 50% while retaining over 90% of optimal similarity.  
   unsupported_inference: The algorithm prevents bribery, detects undisclosed conflicts, yields fair reviews, or transfers its percentages to ResonantOS.  
   local_bridge: Candidate B should test marginal probability caps, joint reciprocal edges, conflict filtering, similarity loss, and pool feasibility—not “random versus manual” alone.  
   bridge_risk_or_disanalogy: Similarity and qualification are themselves proxies that bidders or incumbents can manipulate.  
   reversal_condition: Missing conflicts, manipulable similarity, or a scarce pool can make the constrained distribution infeasible or concentrate assignment despite randomization. This is the required adversarial sensitivity case.

4. source_ref: [Henderson et al., “Integrating Reward Maximization and Population Estimation”](https://doi.org/10.48550/arXiv.2204.11910)  
   source_kind: Primary technical paper, AAAI 2023, using IRS audit data.  
   assumptions: Contextual arms and rewards are specified; sampling propensities are known; some population coverage remains; delayed feedback and distribution shift are modeled.  
   supported_claim: Risk-targeted audit selection and unbiased population estimation are different objectives; a structured optimize-and-estimate design can preserve an estimation arm while obtaining reward comparable to baselines.  
   unsupported_inference: An audit score measures contributor honesty, random audits deter gaming, or the estimator authorizes sanctions.  
   local_bridge: Split audit fixtures into a risk-selected arm and a stratified/random estimation arm; never use the health estimate as authority.  
   bridge_risk_or_disanalogy: Tax misreporting has a statutory target and observable recoveries unlike contested contribution value.  
   reversal_condition: If selection probabilities are unknown, random coverage disappears, nonresponse is strategic, or strata drift, the “unbiased” estimate can fail. Optimizing the estimate arm recreates the selection bias it was meant to prevent.

5. source_ref: [Liu et al., “The acceptability of using a lottery to allocate research funding”](https://doi.org/10.1186/s41073-019-0089-z)  
   source_kind: Peer-reviewed primary applicant survey plus operating-process description.  
   assumptions: A qualification gate creates a sufficiently comparable pool; conflicted reviewers recuse; RNG and ordering are auditable; budget is fixed.  
   supported_claim: HRC used a two-stage modified lottery: three reviewers applied viability/transformative criteria, two “yes” votes admitted an application, then random ordering allocated funds. In the 39%-response survey, 63% accepted this use, but winners were more favorable and support was lower for other grant types.  
   unsupported_inference: Qualified lotteries are generally fair, newcomer-safe, quality-preserving, or suitable for contribution allocation.  
   local_bridge: Candidate C can operationalize “qualified lottery,” but must separately test gate error, concentration, newcomer access, completion quality, and legitimacy.  
   bridge_risk_or_disanalogy: The lottery moves optimization pressure to qualification; a biased or gameable gate merely randomizes within a biased pool.  
   reversal_condition: If eligible cases are not meaningfully comparable, qualification excludes protected entrants, or outcome-conditioned legitimacy breaches its bound, the lottery defense fails.

6. source_ref: [Manheim & Garrabrant, “Categorizing Variants of Goodhart’s Law”](https://doi.org/10.48550/arXiv.1803.04585)  
   source_kind: Primary formal taxonomy paper/preprint.  
   assumptions: A true objective, proxy, selection/optimization process, and causal/adversarial environment can be distinguished.  
   supported_claim: Proxy failure should be separated into regressional, extremal, causal, and adversarial families; stronger optimization can worsen divergence.  
   unsupported_inference: The taxonomy predicts effect size, supplies a safe proxy, or validates a local defense.  
   local_bridge: Apply it twice—first to the candidate proxy, then to the defense proxy. Examples: vector ratings/reference cases; similarity/qualification/conflict flags; eligibility gates; audit-risk scores/random arms.  
   bridge_risk_or_disanalogy: Classification is diagnostic, not a mechanism or fairness theorem.  
   reversal_condition: A defense only survives when its replacement proxy stays aligned under selection, intervention, distribution shift, and strategic adaptation.

bounded_finding: Formal precedent supports plural/vector measurement, contested edge-based attribution, constrained randomized reviewer assignment, qualification-before-lottery, and separated risk/estimation audit arms as computable read models. It does not support a canonical contribution score. Each defense creates another proxy surface: reference cases, similarity, qualification, conflict flags, eligibility, and audit risk all require their own Goodhart attack.

decisions_changed:

- Candidate A: revise to measure omitted-task displacement and ordering reversals under plausible dimension choices; agreement is not truth.
- Candidate B: retain only with probability caps, joint-edge checks, missing-conflict attacks, and pool-feasibility reporting.
- Candidate C: retain as an experiment, but split qualification-gate validity from lottery allocation and add outcome-conditioned legitimacy analysis.
- Candidate D: retain and broaden from estimate inflation to all four Goodhart families; attack the defense proxy too.
- `PRZ-04`: preserve competing DAGs and joint-dependency evidence; prohibit automatic person totals.
- Audit fixture: split optimize and estimate arms; no source here supplies a deterrence threshold.

next_falsifier: Hand-run one joint-contribution case across substitute/complementary tasks, two plausible DAGs, malicious reviewer bids with one hidden conflict, a gameable qualification gate, and adversarial steering of the risk-selected audit arm. Record every rank/path reversal and whether the defense proxy becomes the new target.

excluded_or_uncollected_residue:

- No general strategic-classification theorem was admitted within quota; Jecmen supplies one concrete strategic-bidding case only.
- Explicit temporal traces, Shapley-Taylor interaction indices, and counterfactual multi-agent baselines remain in the prior local formal card, not re-admitted here.
- No source establishes the true contribution graph, socially legitimate dimensions/weights, audit deterrence rate, qualified-pool fairness, or RNG legitimacy.
- Conflict discovery, privacy, appeals, sybil-cost, reviewer collusion outside declared edges, cyclic dependencies, and endogenous objective choice remain open.
- Computability remains separate from legitimacy, merit, credit, reward, and authority.

