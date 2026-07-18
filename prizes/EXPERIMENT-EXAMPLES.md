# Experiments By Example

- Status: candidate teaching material
- Evidence posture: fictional examples derived from
  [auditor-accepted research](../dispatch/repository-onboarding-experiment-literacy/findings.md);
  not validated by a newcomer trial

## Begin Before The Vocabulary

A community event succeeds. The speaker is visible, while Ana's venue search,
accessibility work, outreach, and schedule repair disappear from the recap.
Someone proposes recognizing invisible work.

Before designing points or rewards, ask two questions:

1. What observation would show that bounded evidence improves recognition?
2. What separate observation would show that the recognition language does not
   create payout or authority expectations?

Those are two independent bets. The first may survive while the second fails.
Neither may inherit the other's evidence.

This is an example gallery, not a new rulebook. The
[prizes README](README.md) owns prize and bet records, the
[full walkthrough](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md) owns the complete
lifecycle, the
[experiment-dispatch contract](../.agents/skills/domainspec-experiment-dispatch/SKILL.md)
owns criterion freeze and experiment verdicts, and the
[fixture package](../validation/contribution-edge-fixtures/README.md) owns the
reusable fixture shape.

## Six Objects, With Their Breakpoints

| Object | Useful analogy | Operational meaning | Where the analogy breaks |
| --- | --- | --- | --- |
| [Prize](README.md#the-two-objects) | Research finish line | A bounded target, witness, and collapse-test. | It is not a bounty and authorizes no payout. |
| [Bet](README.md#the-two-objects) | Prediction card | A registered conjecture with a comparator, predicted observation, and falsifier. | It transfers no money, status, or authority. |
| [Frozen criterion](../.agents/skills/domainspec-experiment-dispatch/SKILL.md#the-criterion-artifact--what-criterionmd-must-contain) | Sealed finish line | One hypothesis and its adjudication rule, fixed before results. | Sealing a weak design does not make it informative. |
| Fixture | Crash-test dummy | A known synthetic input with expected handling. | It observes no real community behavior and proves no general safety. |
| Separately approved run | Field probe | A later observation under the frozen criterion. | Approval and execution do not guarantee an adjudicable result. |
| Verdict | Match report | The mechanical result for one declared run and scope. | It is not universal truth, policy, or deployment permission. |

A bet can remain `open` without any run. A run can be `FALSIFIED` or narrowly
`SURVIVED` under the experiment contract. There is also an unresolved vocabulary
conflict: the experiment contract uses `INVALID` for a design rejected before
criterion freeze, while the long walkthrough also uses `invalid` for a run that
cannot be adjudicated. Until those owners reconcile, this gallery says
**design-invalid before freeze** and **post-freeze non-adjudicable after a broken
run**. In the second case, the bet stays open.

## Why Fixtures Matter

Imagine testing a smoke alarm. You do not begin by setting the building on fire.
You press the test button, disconnect a sensor, and feed the system cases whose
answers you already know.

Fixtures do the same for an evidence pipeline. They answer questions such as:

- Does a complete record pass?
- Does a missing assignment block calculation?
- Does an unknown value fail the schema?
- Does a superficially successful record get rejected if it silently creates a
  payout, credit, or authority effect?

The last case is a **dangerous success**. It matters because a harness can
calculate the requested number perfectly while enforcing the wrong consequence.

A useful fixture set therefore includes four kinds:

| Fixture kind | What it tests |
| --- | --- |
| Valid | The declared happy path works and produces only allowed effects. |
| Rejected | A complete-looking record violates a protocol or safety rule. |
| Malformed | A required field or valid value is missing. |
| Dangerous success | The calculation succeeds but attempts a forbidden claim, reward, or authority mutation. |

A fixture pass is evidence about the scaffold. It is not evidence that people
will behave as hoped. Only a separately approved run can produce that kind of
observation.

## Example 1 — Invisible Event Work (`open`)

**Story.** Ana's enabling work is missing from the event recap.

**Prize.** Can bounded evidence support accurate, safe recognition of enabling
work?

### Bet A — recognition accuracy

Forty fictional unfamiliar reviewers classify 12 counterbalanced invented event
cases. Compare a public recap with the same recap plus bounded evidence.

The bet predicts at least 15 percentage points more correct classification,
false acceptance increasing by no more than 5 points, and median review time no
greater than 8 minutes. Identical cases, blinded reference labels, balanced
assignment, and no answer-revealing packets are required.

### Bet B — communication safety

A separate fictional group of 40 readers interprets a bounded recognition
notice or award-style language about the same recognized act.

The bet predicts at least 20 points fewer payout or authority errors, with
comprehension no more than 5 points lower. The population is separate because
recognition accuracy cannot prove communication safety.

| Fixture | Known input | Expected handling |
| --- | --- | --- |
| Valid | Bet ID, arm, assignment, case, response, and time present. | Accept and calculate only the named bet's measures. |
| Rejected | Assignment is missing. | Block as non-adjudicable. |
| Malformed | Arm is unknown or time is impossible. | Schema block; calculate nothing. |
| Dangerous success | `recognized=true` creates payout, authority, or A-to-B evidence inheritance. | Block the forbidden mutation. |

No run has occurred. Both bets remain `open`, and there is no experiment
verdict. The fixture table merely states what the evidence machinery must do.

## Example 2 — Software Maintenance (fictional `FALSIFIED` run)

**Story.** A feature author receives attention. A maintainer quietly catches a
breaking migration, reviews dependency changes, and prevents an incident. A
commit-count dashboard sees volume more easily than preventive value.

**One hypothesis.** For these fictional repository histories, bounded context
packets improve correct classification of seeded risk-reducing work by at least
15 percentage points over commit and merge counts, without breaking any
guardrail.

| Criterion field | Frozen teaching value |
| --- | --- |
| Population and assignment | 48 fictional maintainers, randomly assigned 24/24; identical 12-history set in counterbalanced order. |
| Comparator | Activity-count dashboard versus maintenance context packet. |
| Exclusions | Fixture and history authors excluded before assignment; incomplete rows rejected rather than imputed. |
| Validity gates | Balanced assignment, identical histories, hidden frozen labels, unchanged rubric, at least 20 valid rows per arm, no answer reveal. |
| Mechanical rule | With all validity gates true, `SURVIVED` only if correct classification improves at least 15 points, false positives rise no more than 5 points, and median review time rises no more than 3 minutes; otherwise `FALSIFIED`. |

| Fixture | Known input | Expected handling |
| --- | --- | --- |
| Valid | Complete row for a low-volume preventive review. | Pass; retain, with no reward or authority effect. |
| Rejected | Reviewer can see the seeded label. | Block and record the protocol violation. |
| Malformed | Arm or classification is missing. | Schema block; calculate nothing. |
| Dangerous success | High activity automatically becomes credit or merge power. | Block even if the classification is correct. |

**Fictional run.** All validity gates pass. Correct classification is 72% versus
66% (`+6` points), false positives 9% versus 8% (`+1` point), and median time
8.2 versus 4.0 minutes (`+4.2` minutes).

The mechanical verdict is **`FALSIFIED`** because the improvement and time
requirements both fail. The typed negative is narrow: this packet did not beat
the dashboard under this criterion. It does not show that all maintenance
context is useless, and it authorizes no score, reward, merge right, or
governance power.

## Example 3 — Independent Second Review (fictional `SURVIVED` run)

**Story.** A small group repeatedly reviews one another's contribution claims.
Adding a second reviewer might reduce reciprocal approval, but it might also
create delay without solving capture.

**One hypothesis.** In this fictional claim set, two conflict-checked independent
reviewers reduce reciprocal-approval errors by at least 25 percentage points
versus one reviewer without breaking delay, completion, conflict, or authority
guardrails.

| Criterion field | Frozen teaching value |
| --- | --- |
| Population and assignment | 60 fictional claims, randomly assigned 30/30 after eligibility checks. |
| Comparator | One reviewer versus two independently assigned reviewers. |
| Exclusions | Claims without a frozen reference label and reviewers with declared conflicts excluded before assignment; no post-result exclusions. |
| Validity gates | Balanced assignment, identical claim packets, randomization receipt, blinded labels, frozen rubric, verified reviewer independence. |
| Mechanical rule | With all gates true, `SURVIVED` only if errors fall at least 25 points, median delay rises no more than 24 hours, completion is at least 90%, conflict contamination is zero, and authority mutations are zero; otherwise `FALSIFIED`. |

| Fixture | Known input | Expected handling |
| --- | --- | --- |
| Valid | Two independent, conflict-checked reviews with all outcome fields. | Pass and retain. |
| Rejected | Reviewers share a declared conflict. | Block before calculation. |
| Malformed | Second-review field is absent. | Schema block; calculate nothing. |
| Dangerous success | Agreement automatically grants payout or governance weight. | Block the forbidden mutation. |

**Fictional run.** All gates pass. Reciprocal-approval error falls from 40% to
9% (`31` points), median delay rises 10 hours, completion is 93%, conflict
contamination is zero, and authority mutations are zero.

The mechanical verdict is narrowly **`SURVIVED`** for this population, rubric,
and duration. The typed negative remains load-bearing: this does not establish
general capture resistance, community benefit, payout eligibility, governance
safety, or implementation readiness.

## Example 4 — Testing This Introduction (post-freeze non-adjudicable)

**Story.** We want to know whether beginning with an ordinary situation helps a
newcomer create a structurally correct experiment.

**One hypothesis.** Among fictional newcomers without prior harness experience,
story-first instructions produce at least 20 percentage points more complete
experiment artifacts than terminology-first instructions, without increasing
payout, authority, fixture-as-proof, or evidence-inheritance errors.

| Criterion field | Frozen teaching value |
| --- | --- |
| Population and assignment | 24 fictional newcomers, randomly assigned 12/12 after excluding prior harness experience. |
| Comparator | Story-first guide versus terminology-first guide for the same held-out prompt. |
| Validity gates | No mentor intervention, blinded evaluators, frozen rubric, balanced assignment, at least 10 analyzable artifacts per arm. |
| Mechanical rule | Check validity first. With every gate true, `SURVIVED` only if completeness improves at least 20 points and boundary errors do not increase; otherwise `FALSIFIED`. A broken gate yields no experiment verdict. |

| Fixture | Known input | Expected handling |
| --- | --- | --- |
| Valid | Prize, two bets, comparator, criterion, fixture classes, and blocked uses present. | Pass to rubric scoring. |
| Rejected | A mentor supplies the missing falsifier. | Block and record a protocol-scope failure. |
| Malformed | Comparator is absent. | Schema block; calculate nothing. |
| Dangerous success | Fixture pass changes the claim to “deployable.” | Block the forbidden claim change. |

**Fictional run.** Completeness is 75% versus 41.7%, but four story-arm readers
receive mentor help and evaluators see the assignments. Those were frozen
validity gates.

The run is therefore **post-freeze non-adjudicable**. Its attractive raw rate
does not earn `SURVIVED`; no `FALSIFIED` verdict exists either, and the bet stays
open. The typed negative is that protocol failure neither supports nor falsifies
story-first teaching.

## Assemble Your First Experiment

Use this as a route, not a replacement for the owning procedure:

1. **Name the observable change.** Avoid starting from a token, score, payout,
   or implementation.
2. **Write the prize** using the [prize owner](README.md#the-two-objects): target,
   current evidence, required witness, collapse-test, blocked uses, and status.
3. **Split the story into independent bets.** For each, record the conjecture,
   comparator, predicted observation, falsifier, attack lane, and `open` state.
4. **Send one hypothesis to the experiment owner.** The
   [experiment-dispatch contract](../.agents/skills/domainspec-experiment-dispatch/SKILL.md#criterion-freeze--topology--immutability-never-a-column)
   validity-attacks and freezes the criterion before results.
5. **Build the four fixture kinds** using the
   [contribution-edge schema](../validation/contribution-edge-fixtures/SCHEMA.md):
   valid, rejected, malformed, and dangerous success.
6. **Stop after fixture validation.** Any live observation needs separate
   approval. Preserve its raw result and apply only the frozen mechanical rule.
7. **Record the bounded conclusion and typed negative.** Bet-register resolution
   and any promotion remain separate owner decisions.

For the full record shapes and handoff sequence, follow the
[complete walkthrough](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#step-3--define-the-prize-before-optimizing-the-mechanism).

## Try A Held-Out Story

A mentor records ten hours of newcomer support. The community proposes using
those hours to recognize the mentor and claims that recognition will improve
newcomer retention.

Without copying an example above, produce:

- one prize;
- at least two independent bets—recognition accuracy and later retention are
  not the same claim;
- one selected hypothesis with a comparator and falsifier;
- a frozen validity rule;
- valid, rejected, malformed, and dangerous-success fixtures;
- a bounded conclusion template naming what even `SURVIVED` cannot authorize.

Then retell the chain without looking:

```text
story -> prize -> registered bet -> frozen criterion -> fixtures
      -> separately approved run -> raw result -> scoped verdict
      -> bounded conclusion -> external owner decision
```

Treat payout or authority inference, fixture-as-live-proof, and evidence
inheritance as blocking errors. Preserve the completed artifact and a
criterion-by-criterion scoring receipt. Passing this exercise would witness
minimum experiment literacy for one reader; it would not prove that story-first
onboarding is better.

## Where To Go Next

- Full procedure and reusable cards:
  [Research Harness, Bets & Prizes Walkthrough](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md)
- Prize and bet definitions and registers: [prizes README](README.md)
- Experiment proposal and criterion freeze:
  [experiment-dispatch contract](../.agents/skills/domainspec-experiment-dispatch/SKILL.md)
- Reusable fixture shape:
  [contribution-edge fixtures](../validation/contribution-edge-fixtures/README.md)
- Current evidence rather than copied status:
  [inventory](../.arcanum/inventory/index.md) and
  [current-state projection](../maps/current-state/README.md)

These examples are evidence-grounded candidate pedagogy, not validated
newcomer usability.
