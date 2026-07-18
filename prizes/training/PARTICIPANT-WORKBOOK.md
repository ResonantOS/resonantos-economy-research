---
to: participants in the bets, mechanisms, and prizes workshop
from: the workshop facilitator
re: "Working pages for turning a contribution mechanism into falsifiable research"
date: 2026-07-13
status: training fixture — not a prize or bet register
---

# Participant Workbook

## Today’s Fixed Premise

The DAO already counts calls, study, mentoring, maintenance, and similar
activities as contributions.

We are not deciding whether they count. We are exploring how prior contribution
records should interact with a later witnessed result.

Workshop records stay in this workbook. They do not change the DAO, the prize
register, the bet register, or anyone’s authority.

## Case

One person joins twenty governance calls. Months later, they release a major
governance proposal that the DAO can witness.

- The calls are recorded contributions.
- The proposal is a witnessed result.
- No mechanism connecting them has been selected.

## Round 1 — Generate Mechanism Candidates

Complete the sentence at least three different ways. Include one mechanism you
expect to fail.

> After a contribution is recorded, the DAO could…

| Candidate | Mechanism in one sentence | Desired behavior | Dangerous optimization |
| --- | --- | --- | --- |
| A |  |  |  |
| B |  |  |  |
| C |  |  |  |
| D, optional |  |  |  |

## Round 2 — Define “Best” Before Choosing

### Primary criterion

The one outcome that must improve:

> _Write the primary criterion here._

### Blocking guardrails

A candidate cannot survive if any of these fail:

1. _Guardrail:_
2. _Guardrail:_
3. _Guardrail:_

### Costs

| Cost we can accept | Why |
| --- | --- |
|  |  |

| Cost we cannot accept | Why |
| --- | --- |
|  |  |

### Default comparison checklist

Mark each `primary`, `guardrail`, `secondary`, or `out of scope`.

| Criterion | Role | How we would observe it |
| --- | --- | --- |
| result-linked recognition usefulness |  |  |
| false-credit acceptance |  |  |
| contribution-farming resistance |  |  |
| review burden |  |  |
| access and inclusion |  |  |
| entitlement leakage |  |  |
| authority separation |  |  |

## Round 3 — Open the Research Prize

```yaml
prize_id: TRAINING-ONLY
question:
why_it_matters:
required_witnesses:
  -
award_collapse_test:
allowed_use: training research only
blocked_use:
  - payout
  - reputation finality
  - governance weight
  - implementation
status: open
```

## Round 4 — Make the Mechanism a Bet

```yaml
bet_id: TRAINING-ONLY
prize_id: TRAINING-ONLY
conjecture:
comparator:
predicted_observation:
falsifier:
attack_lane:
  -
status: open
```

### One-sentence check

> We predict that __________________ will outperform __________________ on
> __________________ without causing __________________.

### Collapse-test

> We will drop or demote this candidate if __________________.

## Round 5 — Attack Exchange

Bet received from group: __________________

| Attack | Finding |
| --- | --- |
| easiest farming or gaming path |  |
| missing comparator |  |
| missing witness |  |
| hidden authority or entitlement effect |  |
| condition that makes the claim vacuous |  |
| contribution still worth preserving if the bet dies |  |

### Restatement accepted by the proposing group

> _Write the accepted restatement here._

## Round 6 — Split the Hidden Promises

No row may use another row’s evidence as its own verdict.

| Independent bet | Conjecture | Comparator | Witness | Falsifier |
| --- | --- | --- | --- | --- |
| Recognition utility |  |  |  |  |
| Community utility |  |  |  |  |
| Communication safety |  |  |  |  |

### Evidence-order dependencies

Draw only the order in which witnesses must run. Explain why the arrow does not
transfer proof:

> _Describe the evidence-order dependency here._

## Round 7 — Two Languages, One Authority

| Narrative term | Operational record or event | What it must not imply |
| --- | --- | --- |
| investment |  |  |
| realization |  |  |
| cashing |  |  |

### Mapping-limit sentence

> The narrative language helps people understand __________________, but only
> the operational language can determine __________________.

## Round 8 — Bounded Prior-Art Route

Select every subtower that can change a bet, collapse-test, or witness decision.
For an excluded subtower, write `excluded` and the reason instead of inventing a
generic question.

| Subtower | Bet / collapse-test served | Exact bounded question or exclusion reason | Allowed source boundary | Negative precedent required | Local bridge risk / disanalogy | Next falsifier |
| --- | --- | --- | --- | --- | --- | --- |
| official whitepaper |  |  |  |  |  |  |
| failed DAO / crypto |  |  |  |  |  |  |
| science of science |  |  |  |  |  |  |
| formal mechanisms |  |  |  |  |  |  |
| socioeconomic behavior |  |  |  |  |  |  |

One external analogy we must **not** treat as local proof:

> _Name the analogy and its transfer limit here._

## Round 9 — Design the Witness

```yaml
experiment_id: TRAINING-ONLY
bet_id: TRAINING-ONLY
unit_of_analysis:
eligible_population:
mechanism_condition:
comparator_condition:
assignment:
primary_outcome:
blocking_guardrails:
  -
thresholds_frozen_before_run:
exclusions:
missing_data_policy:
survived_if:
falsified_if:
invalid_if:
```

### Evidence-layer check

This design produces:

- [ ] source evidence
- [ ] route-validation evidence
- [ ] schema/fixture evidence
- [ ] live experiment evidence
- [ ] promotion authority

Explain why the unchecked boxes remain unchecked:

> _Explain the evidence-layer boundary here._

## Round 10 — Mock Adjudication

Mock result received:

> _Record the mock result here._

```yaml
bet_id: TRAINING-ONLY
verdict: open | survived | falsified | invalid | abandoned
criterion_comparison:
scope:
typed_negative:
claim_change: unchanged | demoted | candidate-for-owner-review
remaining_residue:
  -
next_owner:
```

### What this verdict does not authorize

> _List the consequences this verdict cannot authorize._

## Exit Reflection

Complete one sentence:

> The next time I see an attractive mechanism, I will ask __________________.

Optional:

> The contribution can be real while the mechanism is __________________.
