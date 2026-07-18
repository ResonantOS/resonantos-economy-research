# Prize Register

Status: active open-contract register
Promotion scope: local-research-only

Each prize is an open contract for one economic-mechanism target. A prize closes
`awarded-candidate` only when a bet in [BET-REGISTER.md](BET-REGISTER.md) survives
its award collapse-test with a concrete witness. See [README.md](README.md) for
the rules. A closed prize is a candidate invariant only — it promotes nothing.

---

## PRZ-01 — Contribution-credit that routes attention without becoming authority

- **Status:** open
- **Target:** Is there a contribution-credit mechanism that lets reviewed credit
  route reviewer and community *attention* while never becoming governance
  authority, payout, or launch readiness by itself?
- **Evidence state:** `OQ-1` (first economy invariant) and `OQ-2` (first workflow
  witness); claim `C7` (Evidence Exchange separates observed reuse, reviewed
  credit, and owner-routed authority); the `measurement-is-not-authority` (TF-11)
  fixture in the program backlog; harvest selectors `credit-record-not-reward`,
  `attention-route-not-authority`. Unknown: whether the separation survives
  repeated-visibility incumbency under real review pressure.
- **Required witness:** one contribution edge where high accrued credit changes
  **no** authority state — the authority-handoff fixture
  ([validation/contribution-edge-fixtures/](../validation/contribution-edge-fixtures/README.md)).
- **Award collapse-test:** a candidate wins only if it **survives the
  reputation-capture / attention-capture attack lane**
  ([lanes/ATTACK-LANES.md](../lanes/ATTACK-LANES.md)) **and** passes the
  authority-collapse check (no path from credit to governance power), **with** the
  witness present.
- **Allowed / blocked use:** candidate invariant only; never governance weight,
  payout, reputation finality, or launch.
- **Bets:** `BET-PRZ-01-a` (open).

---

## PRZ-02 — Reward-eligibility that resists bounty-farming

- **Status:** open
- **Target:** Is there a reward-eligibility rule that recognizes genuine
  contribution without training bounty-retrieval behavior in rational actors,
  cliques, or bots?
- **Evidence state:** the `block-as-default` posture on bounties
  ([TOWER.md](../TOWER.md) borrow/block table); the AGENTS non-negotiable (no
  bounty design without a bounty-optimization failure analysis); the
  `failed-dao-crypto` subtower's exploit/bounty precedent. Unknown: whether any
  eligibility rule separates maintenance value from completion-farming under
  adversarial optimization.
- **Required witness:** a fixture where a bounty-farming strategy yields **no**
  eligibility advantage over sustained, reviewed maintenance work.
- **Award collapse-test:** a candidate wins only if it **survives the
  bounty-optimization / farming attack lane** with delayed-reward eligibility and
  signal/credit/reward/authority separation intact, **with** the witness present.
- **Allowed / blocked use:** candidate invariant only; Phase-2 financial
  mechanisms stay blocked.
- **Bets:** none yet — open for staking.

---

## PRZ-03 — Bounded randomness that deters gaming without feeling arbitrary

- **Status:** open
- **Target:** Is there a randomized audit/selection mechanism that makes gaming
  expensive and audit selection unpredictable **without** making rewards feel
  arbitrary or unjust?
- **Evidence state:** `OQ-3` (what randomness protects); `REC-C6` (randomness with
  a job — must name what it protects, what it must not randomize, how fairness is
  witnessed, how abuse is audited); the `audit-randomization` fixture in the
  program backlog; the `formal-mechanisms` subtower (stochastic audits).
  Unknown: whether bounded randomness can raise gaming cost while a legitimacy /
  fairness target stays explicit.
- **Required witness:** a fixture where randomization measurably raises gaming
  cost while the fairness/audit target it protects stays explicit and the payout
  logic stays deterministic.
- **Award collapse-test:** a candidate wins only if it **survives the
  "randomness = arbitrary / unjust" attack** *and* names exactly what it must
  **not** randomize (it must not become payout logic), **with** the witness
  present.
- **Allowed / blocked use:** candidate invariant only; randomness never becomes
  reward/payout logic.
- **Bets:** none yet — open for staking.

---

## Deferred Contribution Model prize family

`PRZ-04..06` preserve three different uncertainties. They are linked, but no
prize inherits another prize's evidence:

```text
PRZ-04: can prior-activity evidence improve recognition?
PRZ-05: does that recognition help the community?
PRZ-06: can the model be explained without entitlement drift?
```

The overall model is only a viable research candidate if all three prizes reach
`awarded-candidate`. This family label is a coordination view, not a fourth
award, a score, a deployment decision, or an authority surface.

## PRZ-04 — Prior-activity evidence that adds recognition value

- **Status:** contested
- **Target:** Can prior-activity evidence help reviewers recognize genuine
  trace-linked or bridge-linked contributions that result-only review misses,
  without increasing false credit, receipt farming, entitlement, or unreasonable
  review burden?
- **Evidence state:** the accepted Deferred Contribution Basis findings specify
  a no-effect receipt → relevance claim → accepted/rejected/held → result-scoped
  ER-D7 candidate pipeline and E1–E4 handoffs
  ([findings](../dispatch/deferred-contribution-basis/findings.md)). The three
  load-bearing terms remain unregistered and no comparative witness has run.
- **Required witness:** a preregistered comparison of result-only review against
  result-plus-prior-activity review using seeded trace-linked, bridge-linked,
  general-capacity, and unlinked cases. Report genuine-link recovery, false-link
  acceptance, invisible/enabling-work misses, review time, disagreement, appeal,
  and entitlement errors under a frozen decision rule.
- **Award collapse-test:** a candidate wins only if the added evidence produces
  preregistered net informational value while attendance/time/topic-only controls
  remain rejected, held cases create no credit, and every reward/payout/
  reputation/governance/authority effect stays `none`, with the comparative
  witness present.
- **Allowed / blocked use:** candidate recognition-review invariant only; never
  an activity balance, reward rule, payout, reputation score, governance weight,
  or implementation claim.
- **Bets:** `BET-PRZ-04-a` (open).

---

## PRZ-05 — Result-scoped recognition that helps the community

- **Status:** contested
- **Target:** Does result-scoped recognition improve later useful contribution,
  retention, maintenance, mentoring, or contributor trust without crowding out
  intrinsic motivation, producing status competition, or privileging time-rich
  participants?
- **Evidence state:** the socioeconomic-behavior return supplies direction-only
  warnings about control, visibility, thresholds, unequal participation
  resources, and motivation crowding
  ([source cards](../subtowers/socioeconomic-behavior/returns/deferred-contribution-basis-prior-art.md)).
  No admitted source or local run shows that result-scoped recognition improves
  a ResonantOS community outcome.
- **Required witness:** after PRZ-04 has a survived recognition candidate, a
  preregistered bounded pilot comparing that recognition condition with an
  appropriate control. Measure one named primary community outcome plus
  contribution quality/diversity, voluntary follow-through, maintenance and
  mentoring, attrition, status/entitlement effects, access distribution, and
  review burden.
- **Award collapse-test:** a candidate wins only if the named community outcome
  improves under the preregistered rule and the improvement is not erased by
  crowding, gaming, exclusion, status capture, or authority leakage, with the
  bounded pilot witness present.
- **Allowed / blocked use:** behavioral candidate evidence only; never proof of
  universal motivation, reward entitlement, payout policy, reputation finality,
  governance legitimacy, or deployment readiness.
- **Dependency:** cannot reach `awarded-candidate` before PRZ-04 supplies its
  concrete workflow witness. Dependency is evidence order, not inherited proof.
- **Bets:** `BET-PRZ-05-a` (open).

---

## PRZ-06 — Bilingual explanation without entitlement drift

- **Status:** contested
- **Target:** Can the narrative language `investment → realization → cashing`
  improve understanding of deferred contribution while its operational mapping
  prevents guaranteed-return, automatic-credit, payout, reputation, or authority
  interpretations?
- **Evidence state:** the Deferred Contribution Basis dialogue produced a
  two-language candidate: narrative terms for explanation and operational terms
  for review. It has no comprehension witness. Behavioral sources warn that
  monetary and visibility framing can alter norms and expectations
  ([source cards](../subtowers/socioeconomic-behavior/returns/deferred-contribution-basis-prior-art.md)).
- **Required witness:** a preregistered comprehension comparison between
  operational-only language and the bilingual explanation. Test correct
  classification of accepted/rejected/held cases and beliefs about attendance,
  accumulation, guaranteed recognition, payment, reputation, and authority.
- **Award collapse-test:** a candidate wins only if bilingual language improves
  the named comprehension outcome without worsening any preregistered
  entitlement/authority error beyond its bound, with the comprehension witness
  present.
- **Allowed / blocked use:** communication candidate only; a win does not show
  that the mechanism works or helps the community. Failure revises or kills the
  narrative language, not automatically the operational research candidate.
- **Bets:** `BET-PRZ-06-a` (open).
