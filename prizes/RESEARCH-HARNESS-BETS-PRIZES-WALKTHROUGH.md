---
to: newcomers using the ResonantOS economy research harness
from: a Whisper-guided research-harness walkthrough
re: "How to turn an attractive mechanism idea into prizes, falsifiable bets, witnesses, and bounded conclusions"
date: 2026-07-13
audit-against: "GUIDE.md + prizes/README.md + research-evidence-harness + dispatch-spec + repository authority model"
status: local-research-only candidate walkthrough — not mechanism validation or policy authority
---

# From an Attractive Idea to a Testable Bet

This walkthrough is for someone who has a mechanism idea but has never worked
with this research harness before.

You will follow one example from the first tempting sentence to a set of
separate bets, research questions, experiment witnesses, and honest verdicts.
You will also see the human corrections that make the process work. The harness
is not a machine for proving your idea. It is a way to become precisely wrong,
learn from the failure, and preserve what is still worth testing.

> **Boundary:** here, a **research prize** is an open target for inquiry, not a
> promise of money, tokens, status, governance weight, or implementation. A
> prize or bet can close as a research result without authorizing any of those
> consequences.

The companion
[validation record](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.validation.md)
maps the workflow claims in this guide to repository-owned sources and records
what has *not* been validated yet.

If you are teaching this process live, use the
[facilitator-led workshop package](training/README.md) rather than presenting
this document page by page.

---

## The idea we will work with

Imagine somebody says:

> People attend calls, study a difficult subject, mentor others, and maintain
> shared context. Much later, one of them helps produce a witnessed result.
> Could the earlier activity be treated like an investment that is realized
> when the result appears?

It is an interesting proposition. It is also several untested claims hiding in
one sentence.

The unsafe move is to start designing balances, points, payouts, or a scoring
formula. The safe first move is to ask:

> **What would have to become observably better for this mechanism to be worth
> keeping?**

That question begins the research lifecycle.

---

## Five objects you must keep separate

You do not need this vocabulary before you feel the problem. Now you need it.

| Object | Plain-language meaning | Example | It is not |
| --- | --- | --- | --- |
| **Mechanism** | The candidate rule or process that might change an outcome. | After a witnessed result, allow earlier activity to be submitted for relevance review. | Proof that the rule helps. |
| **Prize** | The bounded research target worth resolving. | Find a defensible way to recognize relevant earlier activity without automatic entitlement. | A payout or implementation order. |
| **Bet** | A falsifiable prediction about what the mechanism will do. | Adding prior-activity evidence improves attribution compared with result-only review. | A slogan, hope, or task list. |
| **Witness** | The observable result and evidence needed to adjudicate a bet. | A preregistered comparison using the same cases, labels, and reviewers. | A favorable anecdote or schema pass. |
| **Typed negative** | A preserved record of what failed, under which conditions, and what remains open. | The language increased entitlement inference even though people understood the story. | A deleted failure or a verdict on every related bet. |

The smallest complete unit is one prize, one bet, one predicted failure, one
witness, and one bounded verdict. Everything else in this guide helps that unit
stay honest.

---

## The interaction loop at a glance

```text
attractive proposition
  -> define the desired observable change
  -> open a research prize
  -> state the mechanism as a bet
  -> split independent consequences into independent bets
  -> name collapse tests and attack lanes
  -> collect bounded prior art
  -> preregister witnesses and comparators
  -> validate the evidence pipeline with fixtures
  -> run the approved experiment
  -> adjudicate each bet independently
  -> preserve negatives and open residue
  -> route any policy or implementation request to its owner
```

Later evidence can send the work backward. That is normal. This repository's
[working guide](../GUIDE.md) requires residue to remain visible and allows a
candidate to be blocked, demoted, split, or returned to corpus work at any step.

---

## Step 1 — Orient before proposing a solution

Every repository has different authority, source, inventory, and promotion
rules. Read its start-here path and determine:

- where research questions and residue live;
- which sources are official, supporting, imported, or private;
- where prize, bet, claim, and experiment records live, if they exist;
- who can approve a dispatch, experiment, policy, or implementation;
- what the repository explicitly forbids.

This repository already has a [prize register](PRIZE-REGISTER.md), a
[bet register](BET-REGISTER.md), and this directory's [device contract](README.md).
Use them; do not create a parallel prize vocabulary or register. A different
host repository would need to establish its own owner and authority boundary.

**Say to the research partner**

> Orient me to this repository's research, evidence, dispatch, and promotion
> boundaries. Do not design the mechanism yet.

**Stop if:** you cannot tell research evidence from policy authority, or you do
not know whether the source material may enter the target artifact.

---

## Step 2 — Restate the proposition without promising its conclusion

Write the idea as a candidate causal chain:

```text
earlier activity evidence
  + later witnessed result
  + relevance review
  -> more accurate result-scoped recognition
```

Every arrow is a claim, not a fact. “Earlier activity existed” does not show that
it caused the result. “The result was good” does not show which earlier activity
was relevant. “A reviewer accepted the claim” does not show that the community
benefited.

**Say to the research partner**

> Rewrite this as an open proposition. Mark every causal leap, entitlement
> implication, and authority implication.

**Write:** a one-paragraph mechanism sketch plus its explicit unknowns.

---

## Step 3 — Define the prize before optimizing the mechanism

A useful prize names what would be valuable to learn and what it refuses to
authorize.

### Prize card

```yaml
prize_id: PRZ-EXAMPLE-01
question: >
  Can prior-activity evidence improve recognition of contributions to a later
  witnessed result without creating automatic entitlement or excessive review?
why_it_matters: >
  Important enabling work is easy to miss when only the final artifact is seen.
required_witnesses:
  - comparative attribution evidence
  - false-attribution and review-burden evidence
collapse_test: >
  If prior-activity evidence does not improve attribution, or the improvement is
  outweighed by false attribution or review burden, this prize yields no viable
  mechanism candidate.
status: open
non_authority_boundary: >
  Closure does not authorize payout, token policy, governance weight, or deployment.
```

The collapse test prevents an attractive title from becoming inflation. It says
which concrete result would reduce the proposed contribution to zero.

---

## Step 4 — Make the correction that matters: the mechanism is a bet

A common first draft treats the mechanism as given and creates a bet only about
how to explain it. Challenge that immediately:

> We do not know whether prior activity helps recognition at all. Why is the
> mechanism not itself the bet?

That correction changes the work. The mechanism must now compete against a
baseline and expose a failure condition.

### Bet card

```yaml
bet_id: BET-EXAMPLE-01A
prize_id: PRZ-EXAMPLE-01
conjecture: >
  For later witnessed results, reviewing bounded prior-activity evidence improves
  correct contribution attribution compared with reviewing the result alone.
comparator: result-only review of the same cases
predicted_observation: >
  Attribution accuracy improves by a preregistered amount while false attribution
  and review burden remain below preregistered limits.
falsifier: >
  No meaningful improvement, unacceptable false attribution, or unacceptable
  review burden under the declared test conditions.
attack_lane:
  - causal leakage
  - hindsight bias
  - evidence farming
  - reviewer capture
  - administrative burden
status: open
```

Do not fill the thresholds after seeing the results. If you cannot state a
comparator, observation, and falsifier before the run, the bet is not ready.

---

## Step 5 — Split one attractive story into independent bets

The example actually contains at least three bets.

| Bet | Research question | Example witness | Failure scope |
| --- | --- | --- | --- |
| **A — Recognition utility** | Does prior-activity evidence improve correct attribution? | Blinded comparison against result-only review, including false attribution and review cost. | If killed, the proposed recognition mechanism has no demonstrated utility. |
| **B — Community utility** | Does the practice make valuable enabling activity more likely or more sustainable? | A staged or controlled pilot with preregistered participation, quality, gaming, and burden outcomes. | If killed, recognition may still describe the past, but the community-benefit claim fails. |
| **C — Communication safety** | Can the investment/realization metaphor explain the idea without creating false entitlement? | A comprehension test that separately measures understanding and entitlement inference. | If killed, the metaphor fails even if an operational mechanism remains researchable. |

These bets may share context, but they do not inherit evidence. A good
attribution result does not prove community benefit. Community enthusiasm does
not prove correct attribution. Clear comprehension does not prove mechanism
utility.

The combined proposal — mechanism, community claim, and narrative framing —
survives only if all three survive their own tests. A failure can still leave a
narrower proposal worth researching, but the original combined claim must be
demoted.

**Say to the research partner**

> List every independently falsifiable promise inside this mechanism. Give each
> one its own comparator, witness, falsifier, and verdict. Do not allow evidence
> inheritance.

---

## Step 6 — Keep two languages, but only one operational authority

People may understand “investment,” “realization,” and “cashing” better than
“deferred result-scoped relevance review.” Erasing the human language can make
the mechanism impossible to explain. Letting the metaphor write the rules can
create entitlement by implication.

Use a bilingual contract:

| Narrative language | Operational translation | Consequence limit |
| --- | --- | --- |
| investment | recorded earlier activity that may later be submitted as evidence | recording creates no balance, debt, or guaranteed return |
| realization | a later witnessed result makes a relevance claim reviewable | the result does not prove earlier causation |
| cashing | an accepted, result-scoped recognition decision | no automatic money, token, authority, or reusable balance |

The narrative language may inform people. The operational language determines
the record, test, and decision. There are two languages, not two authorities.

This is why Bet C is real. We do not know in advance whether the metaphor helps
people understand the proposal or teaches them to expect a return.

---

## Step 7 — Give each relevant subtower directed, bounded prior-art work

Prior art should challenge and refine a bet, not decorate it. Search separately
for each load-bearing claim and its strongest failure precedent. Use the shared
[mechanism-directed prior-art contract](../subtowers/MECHANISM-PRIOR-ART-CONTRACT.md)
for the return shape.

| Subtower | Directed question for this mechanism | Required pressure |
| --- | --- | --- |
| official whitepaper | What does the official source support, leave open, or prohibit about this mechanism? | unsupported inference, missing rule, caveat, or phase boundary |
| failed DAO / crypto | Which deployed or failed system exposes the closest gaming, entitlement, capture, or authority-collapse path? | strongest negative precedent plus structural disanalogy |
| science of science | How have delayed, invisible, or collaborative contributions been attributed or distorted? | evidence types, misattribution, cumulative advantage, maintenance neglect |
| formal mechanisms | Which representation can express the candidate, and which assumption change reverses its output? | sensitivity, alternative graph/baseline, interaction loss, non-merit warning |
| socioeconomic behavior | What behavior, motivation, access pattern, status performance, or entitlement could this train? | crowd-out, threshold gaming, selection effects, time horizon, confounders |

Select every subtower for which you can state a non-vacuous question tied to a
bet, assumption, collapse-test, or witness decision. Do not fan out
mechanically. Record why an excluded subtower cannot currently change the bet;
that exclusion remains open residue.

For every source, record source kind, supported claim, unsupported inference,
the local bridge, and the bridge risk or disanalogy. Each selected subtower must
seek a negative precedent, not only an enabling analogy. External precedent can
establish plausibility, vocabulary, representation choices, or a known failure
mode. It cannot prove the local mechanism works.

**Stop if:** a source analogy is being used as the experiment result.

---

## Step 8 — Decide whether to work inline or propose a dispatch

One bounded lookup can remain inline. Use a dispatch when the work benefits from
independent research lanes, adversarial review, synthesis, or a separate
approver.

The local [Dispatch Spec](../formulae/dispatch-spec/SKILL.md) makes a route
explicit and validates its structure; it does not execute the route or choose
domain policy. This repository adds the stricter registration and confirmation
contract in its
[subagent strategy](../.agents/skills/domainspec-subagents-strategy/SKILL.md).

For a nontrivial fan-out, the human interaction should be visible:

1. The research partner proposes the filled route, roles, sources, outputs,
   attacks, dependencies, stop conditions, and approver.
2. The route is tension-checked and structurally validated.
3. The human explicitly confirms, revises, or abandons it.
4. Only the confirmed route runs.
5. Explorer results remain partial until synthesis, adversarial review, and
   final artifact inspection are complete.

**Say to the research partner**

> Propose the dispatch sheet, including a directed, bounded prior-art question
> in every relevant subtower and an exclusion reason for the others. Do not
> register or run it until I explicitly confirm.

Silence, curiosity, or another question is not confirmation.

---

## Step 9 — Preregister the witness before observing the result

A research plan becomes testable when another person could tell, before the
run, what would count as survival, falsification, or invalidity.

### Witness card

```yaml
experiment_id: EXP-EXAMPLE-01A
bet_id: BET-EXAMPLE-01A
unit_of_analysis: one later result with a bounded prior-activity evidence packet
population: declared case set and eligibility rule
comparator: result-only review of the same case
assignment: declared before data collection
primary_outcome: correct attribution against preregistered reference labels
guardrails:
  - false attribution
  - reviewer disagreement
  - review time
  - evidence farming indicators
thresholds: preregister exact values before the run
exclusions: declared before the run
missing_data_policy: declared before the run
verdicts:
  survived: primary outcome and every blocking guardrail pass
  falsified: predicted effect fails or a blocking guardrail fails
  invalid: the run cannot adjudicate the bet because protocol validity failed
```

Do not choose “the nicest metric.” Choose the measurement that can distinguish
the mechanism from its baseline and expose its dangerous success modes.

If a consequential design choice is unresolved — for example, whether reviewer
disagreement is a blocker or a secondary outcome — route it through
[Decision Gate](../.agents/skills/decision-gate/SKILL.md) before freezing the
experiment.

---

## Step 10 — Validate the evidence pipeline without pretending to validate the bet

Before a live experiment, prove that the records and calculations behave as
declared. The
[Research Evidence Harness](../.agents/skills/research-evidence-harness/SKILL.md)
requires bounded claims and protocols, explicit schemas, synthetic passing and
failing fixtures, and separation between dry-run and live evidence.

At minimum, create:

- a run-record schema;
- one synthetic case that should pass validation;
- one synthetic case that should fail validation;
- deterministic metric calculations, when applicable;
- a result-summary template that cannot silently upgrade claim status.

This step can show that the evidence pipeline rejects missing fields, calculates
the declared metric, and produces the expected report shape. It cannot show that
the mechanism helps real people.

**Verdict vocabulary matters:**

- `pass` means the fixture or contract met its declared validation gate;
- `flag` means the artifact is usable only with a named caveat;
- `block` means a required input, boundary, or gate is missing;
- none of these is automatically “the mechanism survived.”

---

## Step 11 — Run the experiment and keep the evidence layers separate

Use a separately approved experiment dispatch when the repository has a frozen
protocol, validity gates, and witnesses. The installed
[DomainSpec experiment route](../.agents/skills/domainspec-experiment-dispatch/SKILL.md)
owns preregistration and renders `SURVIVED`, `FALSIFIED`, or `INVALID` only under
its declared lifecycle. The
[research evidence harness](../.agents/skills/research-evidence-harness/SKILL.md)
can prove schemas, fixture pairs, and calculations before that live run; it
cannot substitute for it.

Keep these layers distinct:

| Evidence layer | What it can show | What it cannot show by itself |
| --- | --- | --- |
| source review | the bet has precedent, vocabulary, and known attacks | the local effect exists |
| route validation | the research workflow is explicit and gated | any research conclusion is true |
| schema and fixtures | records and calculations follow their contract | real-world utility or safety |
| live experiment | the declared observations occurred under the test conditions | universal validity or policy readiness |
| adversarial review | weaknesses, leakage, and overclaims were inspected | authority to deploy or pay |
| promotion decision | the owning authority accepted a bounded next state | more evidence than the record contains |

Do not merge dry-run, simulated, and live evidence into one “validated” label.

---

## Step 12 — Adjudicate each bet, then the family

Read the preregistration before reading the result. For each bet, return one of
these bounded outcomes:

- **open** — the required witness has not run or is incomplete;
- **survived** — the preregistered survival condition passed under the declared
  conditions;
- **falsified** — the predicted result failed or a blocking failure occurred;
- **invalid** — protocol failure prevents adjudication;
- **abandoned** — the human or owner stopped the route before a verdict.

### Adjudication record

```yaml
bet_id: BET-EXAMPLE-01A
verdict: open | survived | falsified | invalid | abandoned
evidence_refs:
  - path or stable identifier
criterion_comparison: criterion-by-criterion result
scope: population, conditions, duration, and exclusions
typed_negative: what failed and what the failure does not imply
claim_change: unchanged | demoted | candidate-for-owner-review
remaining_residue:
  - unresolved question
next_owner: named capability or human authority
```

Then evaluate the family without evidence inheritance:

```text
Recognition bet A survives?  no -> recognition mechanism claim fails
Community bet B survives?    no -> community-benefit claim fails
Communication bet C survives? no -> narrative framing fails

All three survive?           yes -> combined proposal may enter owner review
```

“May enter owner review” is intentionally weaker than “approved.”

---

## Step 13 — Preserve the negative and route the next authority

Do not delete a killed bet. A typed negative tells the next researcher:

- what was attempted;
- which conditions were tested;
- which criterion failed;
- whether the mechanism, a secondary claim, or only its language failed;
- what remains untested;
- which modification would require a new bet rather than a rewritten verdict.

Make reusable findings discoverable through this repository's
[inventory](../.arcanum/inventory/index.md),
but remember that inventory is a retrieval surface, not an authority surface.
Any request for payout, token policy, governance weight, product implementation,
or canonical promotion belongs to a separate owner and gate.

The research lifecycle closes when the evidence and uncertainty are navigable,
not when the idea wins.

---

## The human corrections you should expect

The strongest part of this workflow is not the template. It is the permission
for the human to challenge the framing while the work is still open.

| Human challenge | Why it matters | Correct response |
| --- | --- | --- |
| “Why did you kill investment, realization, and cashing?” | Operational caution erased the language needed to inform people. | Restore the narrative language, bind it to operational translations, and test it separately. |
| “The problem is to inform other people.” | The artifact was optimizing internal precision but failing its audience. | Add a communication objective and a comprehension witness without weakening operational boundaries. |
| “Can we have two languages?” | One vocabulary cannot always carry both human intuition and formal consequence. | Yes: two languages, one operational authority, explicit mapping limits. |
| “Is there a bet and a prize?” | A mechanism sketch without an open target and falsifier can drift into design theater. | Open the prize and write the candidate conjecture. |
| “Isn't the mechanism a bet too?” | The workflow assumed its central causal claim. | Make mechanism utility the first bet and give it a baseline. |
| “Do not lose the other two bets.” | A correction to the central bet accidentally collapsed independent social and language questions. | Keep all three bets separate and prohibit evidence inheritance. |
| “Add directed, bounded prior art in each relevant subtower.” | One generic literature review can miss the strongest domain-specific failure; mechanical fan-out produces irrelevant citations. | Give every relevant subtower its own bet-linked question, source boundary, negative precedent, bridge risk, and next falsifier; record why the others are excluded. |

When a correction invalidates an earlier pass, append the correction and demote
the prior result. Do not silently rewrite history so the workflow appears to
have been right from the beginning.

---

## A copyable newcomer conversation

Use these prompts one at a time. Read each proposed artifact before moving on.

1. **Orient**

   > Show me this repository's start-here path, evidence surfaces, source kinds,
   > human gates, and promotion boundaries. Make no changes yet.

2. **Open the proposition**

   > Restate my idea as an open mechanism proposition. Mark causal,
   > entitlement, measurement, and authority assumptions.

3. **Create the prize**

   > Propose one research prize with a question, value, required witnesses,
   > collapse test, status, and non-authority boundary.

4. **Treat the mechanism as a bet**

   > Write the mechanism's main conjecture with a comparator, predicted
   > observation, falsifier, attack lanes, and open verdict.

5. **Split the hidden bets**

   > Separate mechanism utility, social effect, and communication safety. Do
   > not let one bet inherit evidence from another.

6. **Bound the research**

   > Give each relevant subtower a directed prior-art question tied to a bet or
   > collapse-test, allowed source boundary, bridge risk, required negative
   > precedent, and next falsifier. Record why excluded subtowers are not
   > currently relevant.

7. **Propose before dispatch**

   > If independent lanes are justified, propose the complete dispatch and its
   > approval gate. Do not register or run it until I explicitly confirm.

8. **Preregister the witness**

   > For each bet, define unit, population, baseline, assignment, outcomes,
   > thresholds, exclusions, missing-data policy, and survived/falsified/invalid
   > rules before looking at results.

9. **Validate the pipeline**

   > Create passing and failing fixtures and prove only the schema, calculation,
   > and report contract. Keep fixture evidence separate from live evidence.

10. **Adjudicate without promotion**

    > Compare the evidence to the frozen criteria, record a scoped verdict and
    > typed negative, preserve residue, and name the next owner. Do not convert
    > the verdict into policy or authority.

---

## Quick self-check before you say “validated”

You are not ready to use that word if any answer is “no”:

- Is the mechanism itself expressed as a falsifiable bet?
- Does every independent promise have its own bet and verdict?
- Is there a baseline or comparator?
- Were the primary outcome, thresholds, and exclusions frozen before the run?
- Are dangerous success modes included as blocking guardrails?
- Can another person replay the evidence pipeline?
- Are fixture, simulated, and live evidence visibly separate?
- Does every source have a source kind and a bounded local bridge?
- Did the human explicitly confirm any nontrivial dispatch?
- Are failed bets preserved as typed negatives?
- Does the conclusion name its population, conditions, and limitations?
- Is any policy, payout, governance, or implementation step routed separately?

If the artifact passes only deterministic checks, say exactly that. If the live
witness has not run, the bet is still open.

---

## Where to continue in this repository

| Need | Continue with | Relationship |
| --- | --- | --- |
| understand the working method | [Repository Working Guide](../GUIDE.md) | owns the confirm/deny loop and continuation route |
| use the canonical local objects | [Bets & Prizes device](README.md) | owns prize, bet, award, and blocked-use semantics |
| inspect the live research state | [Prize register](PRIZE-REGISTER.md) and [bet register](BET-REGISTER.md) | own open targets, conjectures, witnesses, and resolutions |
| make a multi-step route explicit | [Dispatch Spec](../formulae/dispatch-spec/SKILL.md) | validates route structure; does not execute it |
| run governed fan-out research | [Subagent strategy](../.agents/skills/domainspec-subagents-strategy/SKILL.md) | owns proposal, human confirmation, registration, run, and closeout |
| resolve a consequential blocker choice | [Decision Gate](../.agents/skills/decision-gate/SKILL.md) | owns explicit decision closure |
| prove schemas, fixtures, and metrics | [Research Evidence Harness](../.agents/skills/research-evidence-harness/SKILL.md) | prepares evidence without overclaiming live proof |
| preregister a falsification run | [Experiment Dispatch](../.agents/skills/domainspec-experiment-dispatch/SKILL.md) | owns frozen criteria, validity gates, and experiment verdicts |
| inspect authority boundaries | [Authority Model](../authority/AUTHORITY-MODEL.md) and [promotion policy](../authority/promotion-policy.md) | block research-to-policy promotion by proximity |

This guide explains the repository's existing bets-and-prizes device. Its
example cards are teaching aids, not new register entries or economy mechanisms.
