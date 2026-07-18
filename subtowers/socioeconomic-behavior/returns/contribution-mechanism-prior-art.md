# Contribution Mechanism Prior Art — Socioeconomic Behavior

Dispatch: `2026-07-13-contribution-mechanism-research`
Status: bounded related/formal evidence; synthesis pending
Source boundary: Verbatim Agent 4 — Bowles, Samuel — socioeconomic-behavior return only; no additional sources admitted.
Source return: [Agent 4 — Bowles, Samuel — socioeconomic-behavior](../../contribution-mechanism/returns/research/research.md#agent-4--bowles-samuel--socioeconomic-behavior)

```yaml
mechanism_id: contribution-mechanism
prize_id: PRZ-05
bet_ids:
  - BET-PRZ-01-a
  - BET-PRZ-04-a
  - BET-PRZ-05-a
  - BET-PRZ-06-a
subtower: socioeconomic-behavior
date_checked: 2026-07-13
bounded_question: >-
  Under what bounded empirical conditions do effort estimates, consequential
  incentives, symbolic recognition, visible status, reviewer access to identity,
  qualified lotteries, and newcomer/access distinctions change motivation,
  participation, legitimacy, exclusion, or allocation-seeking?
why_this_subtower_is_relevant: >-
  These behavioral and distributional effects directly attack the tower's
  assumptions that contribution descriptions can remain planning-only,
  result-scoped recognition can help without creating a status game, reviewer
  selection can avoid incumbency, and qualified randomness can broaden access
  without appearing arbitrary.
decision_this_research_can_change: >-
  Whether the next witness must separate shadow from consequential metrics;
  require reference-class correction for estimates; blind status in first-pass
  review; measure strategic adaptation, motivation crowding, and structural
  access separately; and treat lottery legitimacy as a measured outcome rather
  than an assumed property.
allowed_source_kinds:
  - peer-reviewed primary behavioral experiment
  - peer-reviewed field experiment
  - controlled institutional experiment
  - official operating-scheme applicant survey
source_depth_bound: 1
source_quota: 6 admitted sources
required_negative_precedent: >-
  Satisfied. Gneezy and Rustichini, Mellström and Johannesson, and Tomkins et al.
  each show a pathway by which an incentive or visible status signal can worsen
  behavior, crowd participation, or advantage incumbents.
attack_target: >-
  BET-PRZ-05-a's crowding/status/access collapse-test, BET-PRZ-01-a's
  attention-incumbency path, CM-R2/CM-R15 effort inflation, CM-R11 reviewer
  qualification becoming insider status, CM-R12/CM-R13 randomness legitimacy,
  and CM-Q6's shadow-versus-consequential proxy conjecture.

sources:
  - source_ref: "Buehler, Griffin, and Ross (1994), DOI 10.1037/0022-3514.67.3.366"
    date_checked: 2026-07-13
    source_kind: peer-reviewed primary behavioral studies
    supported_claim: >-
      Across academic and nonacademic tasks, participants' own completion-time
      forecasts were systematically optimistic and focused on future plans
      rather than relevant past experience; explicitly connecting past
      experience to the forecast removed the optimistic bias in one study.
    unsupported_inference: >-
      An effort estimate reveals contribution value, complexity, honesty, or
      deliberate gaming.
    local_bridge: >-
      Keep effort and complexity estimates planning-only; record forecast versus
      actual and require an outside/reference-class view before such estimates
      affect scarce review attention.
    bridge_risk_or_disanalogy: >-
      Mostly student and individual completion tasks, not joint, voluntary DAO
      contribution; time-to-completion is not usefulness or merit.

  - source_ref: "Gneezy and Rustichini (2000), DOI 10.1086/468061"
    date_checked: 2026-07-13
    source_kind: peer-reviewed daycare field experiment
    supported_claim: >-
      Introducing a small fine for late pickup increased late pickups, and the
      increase did not disappear when the fine was removed. A consequence can
      therefore change behavior in the opposite direction from its stated aim.
    unsupported_inference: >-
      The study cleanly identifies intrinsic-motivation crowding, proves a
      universal pricing effect, or predicts responses to positive recognition.
    local_bridge: >-
      Treat this as strategic adaptation plus possible norm reinterpretation,
      not as clean motivation evidence. The CM-Q6 witness must observe whether
      making a formerly descriptive signal consequential creates more
      record-splitting, inflation, or allocation-seeking.
    bridge_risk_or_disanalogy: >-
      A small monetary penalty in a parent-caregiver relationship differs from
      recognition, opportunity allocation, and continuing community work.

  - source_ref: "Mellström and Johannesson (2008), DOI 10.1162/JEEA.2008.6.4.845"
    date_checked: 2026-07-13
    source_kind: peer-reviewed randomized blood-donation experiment
    supported_claim: >-
      A monetary payment reduced willingness to donate among women relative to
      no payment, while allowing the payment to be donated to charity offset
      that reduction; the corresponding payment effect was not significant for
      men.
    unsupported_inference: >-
      Every reward crowds out contribution, symbolic recognition behaves like
      cash, or the reported sex heterogeneity transfers to another population.
    local_bridge: >-
      Motivation crowding must be a separately measured hypothesis with
      preregistered subgroup and framing analyses, not inferred from strategic
      gaming or from an average participation count.
    bridge_risk_or_disanalogy: >-
      Blood donation is a morally salient, episodic act; DAO contribution is
      heterogeneous and repeated.

  - source_ref: "Kosfeld and Neckermann (2011), DOI 10.1257/mic.3.3.86"
    date_checked: 2026-07-13
    source_kind: peer-reviewed organizational field experiment
    supported_claim: >-
      A purely symbolic best-performance award increased short-run database-work
      performance by about 12% on average.
    unsupported_inference: >-
      Recognition improves long-run community value, intrinsic motivation,
      maintenance, retention, inclusion, or trust.
    local_bridge: >-
      This contradicts any blanket assumption that visible recognition only
      harms motivation. A local pilot must test output together with quality,
      voluntary follow-through, status-seeking, exclusion, and persistence.
    bridge_risk_or_disanalogy: >-
      Short student employment for an NGO, a narrow countable task, and a
      competitive award differ sharply from ongoing mixed-form contribution.

  - source_ref: "Tomkins, Zhang, and Heavlin (2017), DOI 10.1073/pnas.1707323114"
    date_checked: 2026-07-13
    source_kind: controlled peer-review experiment at WSDM 2017
    supported_claim: >-
      Reviewers who could see author identities bid for fewer papers and were
      more likely than double-blind reviewers to recommend papers from famous
      authors, top universities, and top companies; estimated acceptance-odds
      multipliers were 1.63, 1.58, and 2.10 respectively.
    unsupported_inference: >-
      Blinding removes every bias, improves decision quality, or can always be
      maintained in a small identifiable community.
    local_bridge: >-
      Separate reviewer identity, contributor identity, and evidence content.
      Test a status-blinded first pass before exposing history needed for
      conflicts or qualification.
    bridge_risk_or_disanalogy: >-
      A selective computer-science conference is not contribution review.
      Institutional prestige evidences structural status access, not material
      resource inequality itself.

  - source_ref: "Liu et al. (2020), DOI 10.1186/s41073-019-0089-z"
    date_checked: 2026-07-13
    source_kind: survey of applicants to an operating modified-lottery grant scheme
    supported_claim: >-
      Among 126 respondents from 325 invited applicants, 63% accepted
      randomization for Explorer Grants but only 40% supported it for other
      grants. Support was conditional on a prior fundability threshold and was
      outcome-associated: 78% among funded respondents versus 44% among those
      declined by the panel. Applicant anonymity had 89% support.
    unsupported_inference: >-
      A qualified lottery is fair, improves quality or access, deters gaming, or
      will be legitimate in a DAO.
    local_bridge: >-
      Randomness should occur only after explicit eligibility and conflict
      checks. Legitimacy, reroll trust, applicant effort, and outcome-conditioned
      perceptions must be measured independently of allocation concentration.
    bridge_risk_or_disanalogy: >-
      Research grants have large career stakes; the survey had a 39% response
      rate, and respondent experience with winning confounds legitimacy reports.

bounded_finding: >-
  The admitted evidence does not support one universal incentive effect.
  Consequential signals can invite strategic adaptation or norm reinterpretation;
  explicit payment can crowd participation in a subgroup; symbolic recognition
  can increase short-run output; visible prestige can alter review; effort
  estimates can be sincerely optimistic; and lottery legitimacy can depend on
  eligibility framing and personal outcome. These are distinct mechanisms.
  None establishes a safe ResonantOS contribution mechanism.

decisions_changed:
  - >-
    Retain CM-Q6, but its witness must distinguish strategic gaming, motivation
    crowding, and structural access rather than combine them as "behavior change."
  - >-
    Keep effort/complexity estimates out of contribution value and allocation
    rules; add reference-class and estimate-versus-actual observations.
  - >-
    Revise reviewer tests to compare status-blinded and status-visible first
    passes while preserving separate conflict checks.
  - >-
    Revise qualified-lottery tests to measure legitimacy before and after
    outcomes and to report concentration by newcomer and resource strata.
  - >-
    BET-PRZ-05-a requires both positive and adverse outcomes; increased visible
    production alone cannot satisfy it.

next_falsifier: >-
  Preregister a bounded local comparison among (a) shadow/private contribution
  description, (b) visible but non-consequential result-scoped recognition, and
  (c) the same record affecting entry to a qualified opportunity lottery.
  Freeze the eligibility rule and primary outcome; measure output quality,
  voluntary follow-through, estimate error, record inflation/splitting,
  allocation-seeking, attrition, perceived legitimacy, and distribution across
  declared newcomer/resource strata. The candidate is falsified if its primary
  gain is erased by any preregistered gaming, crowding, exclusion, or legitimacy
  bound.

excluded_or_uncollected_residue:
  - >-
    Direct material-resource inequality was not adequately covered by the six
    admitted sources; institutional prestige is not a substitute. Mani et al.
    (2013), DOI 10.1126/science.1238041, remains an unadmitted candidate requiring
    replication-sensitive assessment.
  - >-
    Socially distinct newcomer labels may lower perceived effectiveness while
    improving group performance: Phillips, Liljenquist, and Neale (2009), DOI
    10.1177/0146167208328062, was found but left surplus under the quota.
  - >-
    Learning from success versus failure remains uncollected; Madsen and Desai
    (2010), DOI 10.5465/AMJ.2010.51467631, remains the named depth-1 candidate.
  - >-
    No admitted source tests multilingual framing, recurring volunteer work,
    mentoring, preventive contribution, bot participation, or long-run
    recognition/status feedback in a DAO.
```

Stable links: [Buehler et al.](https://doi.org/10.1037/0022-3514.67.3.366), [Gneezy & Rustichini](https://doi.org/10.1086/468061), [Mellström & Johannesson](https://doi.org/10.1162/JEEA.2008.6.4.845), [Kosfeld & Neckermann](https://doi.org/10.1257/mic.3.3.86), [Tomkins et al.](https://doi.org/10.1073/pnas.1707323114), [Liu et al.](https://doi.org/10.1186/s41073-019-0089-z).
