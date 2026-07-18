# Contribution Mechanism Prior Art — Science of Science

Dispatch: `2026-07-13-contribution-mechanism-research`
Status: bounded related/formal evidence; synthesis pending
Source boundary: Verbatim Agent 2 — Kuhn, Thomas — science-of-science return only; no additional sources admitted.
Source return: [Agent 2 — Kuhn, Thomas — science-of-science](../../contribution-mechanism/returns/research/research.md#agent-2--kuhn-thomas--science-of-science)

```yaml
mechanism_id: contribution-mechanism
prize_id: PRZ-04
bet_ids:
  - BET-PRZ-04-a
  - BET-PRZ-05-a
subtower: science-of-science
bounded_question: >-
  Which contributorship, peer-review, bibliometric, negative-result, delayed-
  recognition, and cumulative-advantage findings constrain result-specific
  recognition, reviewer selection, history use, and newcomer/experience
  configurations?
why_this_subtower_is_relevant: >-
  The preferred candidate depends on contribution records and qualified review
  improving recognition without turning declared roles, visible history,
  citation-like counts, or prestige into self-reinforcing credit.
decision_this_research_can_change: >-
  The evidence vectors and adversarial cases used in CM-Q1, CM-Q2, CM-Q3,
  CM-Q4, and CM-Q6 fixtures; it cannot change policy, authority, or bet status.
allowed_source_kinds:
  - official standards and operating rules
  - primary controlled empirical research
  - primary survey research
  - primary bibliometric research
source_depth_bound: one depth-1 web pass; no recursive citation chasing
source_quota: 6 admitted sources
required_negative_precedent: >-
  Met. S2 attacks truthful contribution records and metric resistance; S4
  attacks identity-visible review; S6 attacks passive negative-result visibility.
attack_target: >-
  The assumption that typed contribution evidence plus qualified reviewer
  history preserves invisible or joint work without creating manipulable credit,
  prestige advantage, incumbent protection, or result-visibility bias.

sources:
  - source_ref: >-
      S1 — NISO, CRediT Contributor Roles,
      https://credit.niso.org/contributor-roles/
    date_checked: 2026-07-13
    source_kind: official ANSI/NISO-aligned contributorship taxonomy guidance
    supported_claim: >-
      CRediT permits multiple roles per contributor and multiple contributors
      per role, optionally marks lead/equal/supporting participation, recommends
      including contributors beyond formal authors, and recommends contributor
      review of assignments. It explicitly does not determine authorship and is
      voluntary.
    unsupported_inference: >-
      A taxonomy detects invisible labor, makes assignments truthful, measures
      value or causal importance, or resolves hybrid and omitted contribution.
    local_bridge: >-
      Fixture precedent only: compare contributor-confirmed, result-scoped,
      multi-role descriptions with result-only review, including omitted,
      honorary, hybrid, and joint-dependency cases.
    bridge_risk_or_disanalogy: >-
      CRediT describes work behind scholarly outputs and often relies on a
      corresponding author; the local setting has different artifacts,
      incentives, disputes, and no right to convert a role label into credit.

  - source_ref: >-
      S2 — Fong and Wilhite (2017), Authorship and citation manipulation in
      academic research, https://doi.org/10.1371/journal.pone.0187394
    date_checked: 2026-07-13
    source_kind: primary cross-disciplinary self-report survey
    supported_claim: >-
      Among respondents, 35.5% reported adding a minimally contributing author.
      The study also found reported citation coercion/padding and rank-related
      pressure: its model estimated assistant professors had 90% higher odds
      than full professors of honorary authorship in manuscripts. The survey
      response rate was 10.5%, so these are respondent/model results, not clean
      population prevalence.
    unsupported_inference: >-
      The reported rates transfer to a DAO, every senior-junior relationship is
      coercive, or contribution statements and fractional credit prevent gaming.
    local_bridge: >-
      Add adversarial cases for honorary inclusion, authority pressure,
      reciprocity, prestige borrowing, citation-like padding, and newcomer
      reluctance to contest a senior contributor’s claim.
    bridge_risk_or_disanalogy: >-
      Academic careers control publication, tenure, and grants; the local
      mechanism has different stakes. This source attacks the preferred
      mechanism but does not predict a local effect size.

  - source_ref: >-
      S3 — NIH, Managing Conflict of Interest in NIH Peer Review,
      https://grants.nih.gov/policy-and-compliance/policy-topics/peer-review/coi
    date_checked: 2026-07-13
    source_kind: official operating rule and recusal precedent
    supported_claim: >-
      NIH treats both specified relationships and the reasonable appearance of
      impaired impartiality as conflicts; reviewers certify disclosure, and a
      conflicted reviewer is excluded from evaluation or the relevant panel.
    unsupported_inference: >-
      Disclosure detects hidden reciprocity, recusal alone improves review
      quality, or NIH categories are sufficient for local contribution review.
    local_bridge: >-
      Separate conflict eligibility from reviewer qualification and test
      disclosure, exclusion, replacement, audit-trail, and appeal behavior.
    bridge_risk_or_disanalogy: >-
      NIH has statutory rules, professional staff, sanctions, and a grant-review
      institution. The source owns an operating pattern, not proof of local
      fairness or effectiveness.

  - source_ref: >-
      S4 — Tomkins, Zhang, and Heavlin (2017), Reviewer bias in single- versus
      double-blind peer review, https://doi.org/10.1073/pnas.1707323114
    date_checked: 2026-07-13
    source_kind: primary controlled peer-review experiment
    supported_claim: >-
      At WSDM 2017, papers received two single-blind and two double-blind
      reviews. Single-blind reviewers preferentially bid on prestigious
      submissions and had estimated acceptance-recommendation odds multipliers
      of 1.63 for famous authors, 1.58 for top universities, and 2.10 for top
      companies.
    unsupported_inference: >-
      Masking removes every bias or conflict, these multipliers generalize
      beyond one computer-science conference, or reputation never conveys useful
      information.
    local_bridge: >-
      Compare identity/status-visible and status-masked review while holding the
      result dossier fixed; measure prestige differential separately from
      expertise and disclosed conflict.
    bridge_risk_or_disanalogy: >-
      Conference paper acceptance differs from contested contribution
      recognition. This supports a prestige-risk fixture, not a local remedy.

  - source_ref: >-
      S5 — Ke et al. (2015), Defining and identifying Sleeping Beauties in
      science, https://doi.org/10.1073/pnas.1424329112
    date_checked: 2026-07-13
    source_kind: primary large-scale bibliometric analysis
    supported_claim: >-
      Across roughly 22 million papers spanning more than a century, delayed
      citation recognition formed a continuous spectrum rather than a small,
      cleanly separable class. The paper contrasts that evidence with citation
      models whose cumulative-advantage dynamics normally create first-mover
      advantage.
    unsupported_inference: >-
      Late citations prove that an earlier person or activity caused a later
      result, or justify retroactive balances, entitlements, or automatic credit.
    local_bridge: >-
      Include long-delay cases but require a result-specific link independently
      of elapsed time and later visibility; do not use delay itself as merit.
    bridge_risk_or_disanalogy: >-
      The unit is a cited paper, not joint human labor. Citation awakening can
      reflect field change, rediscovery, or visibility rather than contribution.

  - source_ref: >-
      S6 — Franco, Malhotra, and Simonovits (2014), Publication bias in the
      social sciences: Unlocking the file drawer,
      https://doi.org/10.1126/science.1255484
    date_checked: 2026-07-13
    source_kind: primary empirical study of a known study population
    supported_claim: >-
      In 221 peer-reviewed TESS studies, strong results were 40 percentage
      points more likely to be published and 60 points more likely to be written
      up than null results; the principal loss occurred when authors did not
      write up and submit null findings.
    unsupported_inference: >-
      Every negative result is informative, mandatory visibility fixes bias, or
      publication effects transfer directly to contribution records.
    local_bridge: >-
      Test whether negative-result dossiers are created and surfaced before
      reviewers select them, while distinguishing informative failure from cheap
      or undocumented failure.
    bridge_risk_or_disanalogy: >-
      TESS studies passed a prior quality gate and publication is not local
      recognition. The evidence locates a visibility failure stage; it does not
      define which local failures deserve attention.

bounded_finding: >-
  Typed, contributor-confirmed roles are a plausible representation aid, but
  they cannot detect undeclared invisible labor or establish value and
  causality. The strongest attacks are institutional: declared credit and
  citation-like measures can be manipulated; junior contributors may face more
  pressure to accept false credit; identity-visible review can favor prestige;
  null results may disappear before review; and delayed attention does not prove
  an earlier contribution link. The admitted cohort supports prestige and
  first-mover pressure, but not a longitudinal person-level cumulative-advantage
  estimate for this setting. No academia-to-DAO effect transfer is warranted.

decisions_changed:
  - >-
    Revise CM-Q1 fixtures to include confirmed multi-role records plus omitted,
    honorary, hybrid, and joint-contribution attacks; role labels never score value.
  - >-
    Revise CM-Q2 to test structural COI exclusion and prestige masking as
    separate controls; neither substitutes for reviewer expertise.
  - >-
    Revise CM-Q3/history tests so newcomer, experience, qualification, and
    visible status are independently varied rather than collapsed into one rank.
  - >-
    Revise CM-Q4 to measure whether negative results are documented and surfaced
    before reviewer selection, not merely whether reviewers accept them.
  - >-
    Keep delayed recognition separate from result-link causation and add
    honorary-credit/citation-padding attacks to CM-Q6.
  - >-
    No bet, prize, mechanism, validation, policy, reward, or authority status changes.

next_falsifier: >-
  Preregister a shadow-only review fixture with fixed result quality and seeded
  true, omitted, honorary, hybrid, conflicted, prestige-visible, newcomer, and
  delayed-link cases. Randomize status visibility and result sign; record genuine
  link recovery, false credit, omission, prestige differential, conflict-recusal
  failure, newcomer/experienced error rates, negative-dossier visibility, and
  review burden. The representation candidate loses its claimed contribution if
  typed history adds no genuine-link recovery or its gain is erased by false
  credit, prestige, omission, or burden.

excluded_or_uncollected_residue:
  - >-
    Petersen et al. (2014), https://doi.org/10.1073/pnas.1323111111 — identified
    cumulative-advantage candidate, not admitted after the six-source quota.
  - >-
    Packalen and Bhattacharya (2019), https://doi.org/10.1086/703160 — identified
    young/experienced team-configuration candidate, not admitted after quota.
  - >-
    Direct empirical evidence on whether NIH-style COI rules detect hidden
    reciprocity or improve outcomes was not collected.
  - >-
    Direct measurement of invisible or under-credited labor beyond declared-role
    and false-credit evidence remains open.
  - >-
    No admitted source establishes a ResonantOS effect, safe mechanism, or policy.
```

