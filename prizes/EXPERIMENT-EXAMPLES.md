# Experiments, In Everyday Language

- Status: candidate teaching material
- Evidence posture: made-up examples derived from
  [auditor-accepted research](../dispatch/repository-onboarding-experiment-literacy/findings.md);
  not yet tested with newcomers

## Start With The Situation

A community event goes well. The speaker is easy to remember. Ana's work is
not. She found the venue, checked accessibility, called people who had stopped
attending, and repaired the schedule when a volunteer cancelled.

Someone says, "We should recognize work like Ana's." Before inventing points or
rewards, we need to ask two separate questions:

1. Would a short evidence note help people notice this kind of work more
   accurately?
2. Could the recognition message accidentally sound like a promise of payment
   or decision-making power?

One answer cannot stand in for the other. The evidence note might improve
recognition while the message still creates the wrong expectation.

The examples below turn ordinary questions like these into small tests that can
fail. They do not create new repository rules. The
[prizes README](README.md) owns the official prize and bet records, the
[full walkthrough](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md) owns the complete
process, the
[experiment-dispatch contract](../.agents/skills/domainspec-experiment-dispatch/SKILL.md)
owns formal experiment review, and the
[fixture package](../validation/contribution-edge-fixtures/README.md) owns the
reusable record format.

## Pick The Closest Story

You do not need to read every example in order.

| If your situation sounds like... | Start with... | The one question it isolates |
| --- | --- | --- |
| Important work disappeared from a public recap | [The Event Work Nobody Saw](#example-1--the-event-work-nobody-saw) | Does a short evidence note improve recognition without creating entitlement? |
| Quiet maintenance is visible only after something breaks | [Quiet Software Maintenance](#example-2--quiet-software-maintenance) | Can records reveal maintenance without rewarding noisy activity? |
| One review may be biased or mistaken | [A Second Independent Review](#example-3--a-second-independent-review) | Does another reviewer change the decision for the right reason? |
| The numbers look successful but the test procedure failed | [The Numbers Look Good, But The Test Broke](#example-4--the-numbers-look-good-but-the-test-broke) | Can we refuse a verdict when the evidence process is broken? |

After one story makes sense, use [Build Your First Experiment](#build-your-first-experiment)
to replace its people and situation with your own. The formal names below help
you save the result in the repository; they are not the starting point.

## The Six Pieces

The repository uses precise names because different steps have different
owners. Here is the everyday meaning first.

| Everyday meaning | Repository name | What it does | What it does not do |
| --- | --- | --- | --- |
| A research question worth finishing | [Prize](README.md#the-two-objects) | Names the target, the evidence still needed, and the fact that would make the target collapse. | It is not money and promises no payout. |
| A written prediction that can lose | [Bet](README.md#the-two-objects) | Says what we compare, what we expect to see, and what would prove the idea wrong. | It is not gambling and transfers no status or power. |
| Test rules agreed before results | [Frozen criterion](../.agents/skills/domainspec-experiment-dispatch/SKILL.md#the-criterion-artifact--what-criterionmd-must-contain) | Fixes one question and the rule for deciding what its result means. | Agreeing on a weak test does not make it useful. |
| Made-up cases with known answers | Fixture | Checks whether the test machinery accepts, rejects, and calculates cases as promised. | It tells us nothing yet about real community behavior. |
| A later test with real observations | Separately approved run | Collects observations using the agreed rules. | It still might break or produce no usable result. |
| The result for this one test | Verdict | Applies the agreed rule to the recorded observations. | It is not universal truth, policy, or permission to launch. |

A bet can stay open for a long time without any test being run. When a proper
run finishes, the formal result may say that the prediction lost (`FALSIFIED`)
or narrowly held up (`SURVIVED`). If the test itself breaks, there is no verdict
and the bet stays open.

For readers following the formal documents, there is one unresolved naming
wrinkle. One owner uses `INVALID` for a bad design rejected before the rules are
sealed; another also uses `invalid` after a run breaks. This page says **design
rejected** before results and **test broken, no verdict** afterward. The latter
is formally called *post-freeze non-adjudicable*.

## Why Made-Up Cases Matter

Imagine testing a smoke alarm. You do not start by setting the building on
fire. You press the test button, disconnect a sensor, and try cases whose
answers you already know.

A fixture is that kind of rehearsal for the evidence machinery. It lets us ask:

- Does a complete record pass?
- Does a record with missing information stop?
- Does an impossible value stop the calculation?
- Does the system reject a result that looks successful but quietly creates a
  reward or decision-making power?

That last one is a **dangerous success**: the calculation works, but the system
does something it was never allowed to do. It is like a smoke alarm that makes
the correct sound while also unlocking every door in the building.

A useful rehearsal includes four kinds of made-up case:

| Kind | Simple example |
| --- | --- |
| Good case (`valid`) | All required information is present, so the declared calculation runs. |
| Rule-breaking case (`rejected`) | The record looks complete but violates a safety or test rule, so it stops. |
| Broken record (`malformed`) | Required information is missing or impossible, so nothing is calculated. |
| Dangerous success | The calculation could finish, but it would also make a forbidden claim or grant a reward or power. |

Passing this rehearsal shows that the machinery follows its written rules. It
does not show that people will behave as hoped. Only a separately approved run
can collect that kind of observation.

## Example 1 — The Event Work Nobody Saw

**The situation.** Ana's enabling work is missing from the event recap.

**The research target.** Find out whether a short, consistent evidence note can
help people recognize enabling work accurately without making recognition sound
like a promise of payment or power.

### Question A — Does the note improve recognition?

Imagine 40 people who have never seen these event records before. Everyone
reads the same 12 made-up event stories. Half see only the public recap; half see
that recap plus a short evidence note. The stories appear in a mixed order so
neither group gets an easier set.

We predict that the note will produce at least 15 percentage points more correct
answers. We also set two limits: wrong acceptances may rise by no more than 5
points, and a typical review may take no more than 8 minutes. The correct
answers stay hidden, and the note cannot reveal them.

### Question B — Does the message create the wrong expectation?

Now imagine 40 different readers. Half see a plain recognition notice. Half see
award-style language about the same act. We ask what each message seems to
promise.

We predict that the plain notice will cause at least 20 percentage points fewer
mistakes about payment or decision-making power, while ordinary comprehension
falls by no more than 5 points. This needs a separate group because recognizing
the work accurately does not prove that the message is safe.

| Made-up case | What the machinery should do |
| --- | --- |
| The question, reader group, story, answer, and review time are all present. | Accept the record and calculate only the measures for that question. |
| The record does not say which message or evidence version the reader saw. | Stop. We cannot compare groups without that information. |
| The message type is unknown or the review time is impossible. | Stop and calculate nothing. |
| `recognized=true` automatically creates payment, credit, power, or evidence for the other question. | Block the forbidden effect even though the calculation itself could succeed. |

No test has happened. Both predictions remain open. The table only describes
how the rehearsal cases should be handled.

## Example 2 — Quiet Software Maintenance

**The situation.** A feature author receives attention. A maintainer quietly
catches a breaking migration, reviews dependency changes, and prevents an
incident. A dashboard sees commit volume more easily than preventive value.

**The question.** Does a short maintenance note help reviewers find seeded
risk-reducing work more accurately than commit and merge counts alone?

| Part of the test | Agreed setup for this made-up example |
| --- | --- |
| Who takes part | Imagine 48 maintainers, split at random into two groups of 24. Everyone reviews the same 12 repository histories in a mixed order. |
| What we compare | One group sees an activity-count dashboard. The other sees a short note explaining the maintenance context. |
| What we leave out | People who wrote the sample histories do not participate. Incomplete answers are rejected, not guessed. |
| When the test counts | The groups are balanced, the histories are identical, the correct labels stay hidden, the scoring guide does not change, each group has at least 20 usable answers, and nobody reveals an answer. |
| How we decide | The prediction holds up only if correct answers improve by at least 15 points, wrong acceptances rise by no more than 5 points, and typical review time rises by no more than 3 minutes. Otherwise it loses. |

The rehearsal includes a complete preventive-review record, a case where the
reviewer can see the correct answer, a record missing its group or answer, and a
dangerous-success case where high activity automatically creates credit or
merge power. Only the complete record may pass. The other three must stop.

**Made-up result.** All the rules above were followed. Correct answers were 72%
with the context note and 66% with counts alone: an improvement of 6 points.
Wrong acceptances rose by 1 point. Typical review time rose from 4.0 to 8.2
minutes: an increase of 4.2 minutes.

The prediction **loses this round (`FALSIFIED`)**. It needed a 15-point accuracy
gain and no more than 3 extra minutes; it achieved neither. What this teaches is
narrow: this note did not beat the dashboard in this test. It does not show that
all maintenance context is useless, and it creates no score, reward, merge
right, or governance power.

## Example 3 — A Second Independent Review

**The situation.** A small group repeatedly reviews one another's contribution
claims. A second reviewer might reduce friendly reciprocal approval. It might
also add delay without solving the problem.

**The question.** Do two conflict-checked independent reviewers reduce
reciprocal-approval mistakes by at least 25 percentage points compared with one
reviewer, without causing too much delay or granting automatic power?

| Part of the test | Agreed setup for this made-up example |
| --- | --- |
| What is reviewed | Imagine 60 contribution claims, split at random into two groups of 30 after basic eligibility checks. |
| What we compare | One reviewer versus two independently assigned reviewers. |
| What we leave out | Claims without a known reference answer and reviewers with declared conflicts are removed before assignment. Nothing is removed after results are seen. |
| When the test counts | Both groups receive identical claim packets, assignments are recorded, correct labels stay hidden, the scoring guide does not change, and reviewer independence is checked. |
| How we decide | The prediction holds up only if mistakes fall by at least 25 points, typical delay rises by no more than 24 hours, at least 90% of reviews finish, no conflict slips through, and no result grants automatic power. |

The rehearsal includes one complete two-reviewer record, one record with a
declared conflict, one missing the second review, and one where agreement would
automatically grant payment or governance weight. Only the complete,
conflict-free record may pass.

**Made-up result.** All test rules were followed. Reciprocal-approval mistakes
fell from 40% to 9%, a drop of 31 points. Typical delay rose by 10 hours, 93% of
reviews finished, no conflict slipped through, and no automatic power was
created.

The prediction **narrowly holds up (`SURVIVED`)** for these claims, these rules,
and this time period. That is not proof that the design resists capture in
general, benefits the community, deserves payment, is safe for governance, or
is ready to build.

## Example 4 — The Numbers Look Good, But The Test Broke

**The situation.** We want to know whether starting with an ordinary story helps
a newcomer create a complete experiment plan.

**The question.** Does a story-first guide help newcomers complete the required
parts more often than a terminology-first guide, without creating more mistakes
about rewards, authority, or what a rehearsal can prove?

| Part of the test | Agreed setup for this made-up example |
| --- | --- |
| Who takes part | Imagine 24 newcomers with no prior experience, split at random into two groups of 12. |
| What we compare | A story-first guide and a terminology-first guide using the same new prompt. |
| When the test counts | Nobody receives mentor help, scorers cannot see which guide was used, the scoring guide does not change, groups stay balanced, and each group produces at least 10 usable plans. |
| How we decide | First check whether those test rules were followed. If they were, the prediction holds up only if complete plans improve by at least 20 points without more boundary mistakes. If a test rule breaks, there is no verdict. |

The rehearsal includes a complete plan, a plan completed with mentor help, a
plan missing what it compares against, and a dangerous-success case where
passing the rehearsal changes the claim to "ready to deploy." Only the complete,
unaided plan may reach scoring.

**Made-up result.** The story-first group produced 75% complete plans, compared
with 41.7% for the terminology-first group. But four people in the story-first
group received mentor help, and the scorers could see which guide each person
used. Both actions broke rules agreed before the test.

The attractive numbers therefore earn **no verdict**. The formal label is
*post-freeze non-adjudicable*: the test broke after its rules were sealed. We
cannot say that the prediction held up or lost, so the bet stays open. The only
honest lesson is that this broken run tells us nothing about whether story-first
teaching is better.

## Build Your First Experiment

Use these steps as a map. Follow the linked owner documents for the official
record formats and review process.

1. **Start with a change you could observe.** Do not begin with a token, score,
   payout, or feature.
2. **Write the research target (the prize).** Say what you want to learn, what
   evidence is missing, what would count as enough, what would make the target
   collapse, and what the result must never authorize.
3. **Split different promises into different predictions (bets).** For each one,
   say what you compare, what you expect to see, and what would make you drop
   the idea. Keep every prediction open until its own evidence exists.
4. **Choose one prediction and agree on the test rules before results.** The
   [experiment-dispatch contract](../.agents/skills/domainspec-experiment-dispatch/SKILL.md#criterion-freeze--topology--immutability-never-a-column)
   attacks weak designs and records the final rules.
5. **Write four known-answer rehearsal cases (fixtures).** Include a good case,
   a rule-breaking case, a broken record, and a dangerous success. Use the
   [contribution-edge schema](../validation/contribution-edge-fixtures/SCHEMA.md)
   for the official shape.
6. **Stop after the rehearsal.** A test with real observations requires separate
   approval. If it later runs, keep the raw result and use only the decision rule
   agreed beforehand.
7. **Write what the result means and what it does not mean.** Resolving the bet
   and changing policy are separate decisions owned elsewhere.

The
[complete walkthrough](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#step-3--define-the-prize-before-optimizing-the-mechanism)
has the full cards and handoff sequence.

## Try It With A New Story

A mentor records ten hours of newcomer support. The community proposes
recognizing the mentor and says recognition will improve newcomer retention.

Without copying an example above, write:

- one research target;
- at least two separate predictions, because recognizing the mentor accurately
  and improving later retention are not the same question;
- one chosen question, what you compare, and what would make you drop the idea;
- the test rules that must be agreed before results;
- a good case, a rule-breaking case, a broken record, and a dangerous success;
- a conclusion template that says what even a good result cannot authorize.

Then retell the path without looking:

```text
story -> research target -> written prediction -> rules agreed before results
      -> known-answer rehearsal cases -> separately approved run -> raw result
      -> result for this test -> what the result does not mean -> owner decision
```

Stop the exercise if a rehearsal is treated as evidence about real people, if
one prediction borrows evidence from another, or if a result silently creates
payment or decision-making power. Keep the completed plan and the scorer's
notes. One newcomer completing this exercise unaided would show minimum
understanding for that reader. It would not prove that story-first teaching is
better.

## Where To Go Next

- Full process and reusable cards:
  [Research Harness, Bets & Prizes Walkthrough](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md)
- Prize and bet definitions and registers: [prizes README](README.md)
- Formal experiment review and test-rule freeze:
  [experiment-dispatch contract](../.agents/skills/domainspec-experiment-dispatch/SKILL.md)
- Reusable fixture record shape:
  [contribution-edge fixtures](../validation/contribution-edge-fixtures/README.md)
- Current evidence rather than copied status:
  [inventory](../.arcanum/inventory/index.md) and
  [current-state projection](../maps/current-state/README.md)

These examples are evidence-grounded candidate teaching material. They have not
yet been shown to work for newcomers.
