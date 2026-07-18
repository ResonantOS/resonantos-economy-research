# Repository Onboarding and Experiment Literacy — Findings

Dispatch: `2026-07-17-repository-onboarding-experiment-literacy`

## Direct answer

Improve the repository with a **candidate front porch**, not a second Start
Here. Put one human-scale story before the specialist vocabulary, name the
durable boundaries in plain language, and route readers to a derived gallery of
fictional experiment examples. Keep the inventory as the sole canonical entry
point and keep definitions, registers, experiment procedure, fixtures, and
verdict rules with their existing owners. The repository already contains a
plain-language purpose, a full prize-to-verdict walkthrough, a participant
workbook, and explicit fixture/live separation. Artifact inspection also finds
that these are scattered and rely heavily on one example; whether those traits
are the primary cause of newcomer difficulty remains untested
([research transcript, lines 16–25](research.md#L16),
[lines 68–80](research.md#L68)).

Whether this architecture helps an unfamiliar reader remains open. Neither the
walkthrough nor the workshop has passed its intended audience witness
([walkthrough validation, lines 19–25](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.validation.md#L19),
[workshop validation, line 142](../../prizes/training/VALIDATION.md#L142)).

## Evidence and source map

- Canonical orientation: [inventory index](../../.arcanum/inventory/index.md#L6).
- Purpose and research-only boundary: [README](../../README.md#L9) and
  [GUIDE](../../GUIDE.md#L7).
- Prize/bet definitions and procedure: [prizes README](../../prizes/README.md#L7)
  and [walkthrough](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L183).
- Fixture contract: [walkthrough](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L375)
  and [fixture schema](../../validation/contribution-edge-fixtures/SCHEMA.md#L6).
- Durable boundaries versus current status: [definitions](../../definitions/DEFINITIONS.md#L184),
  [claim ledger](../../claims/SOURCE-CLAIM-LEDGER.md#L7), and
  [bets/prizes inventory](../../.arcanum/inventory/entries/bets-and-prizes-device.md#L67).
- No automatic policy, payout, implementation, or governance consequence:
  [authority model](../../authority/AUTHORITY-MODEL.md#L20).
- Candidate story/example/attempt/retell sequence, with bridge risks:
  [research transcript, lines 84–105](research.md#L84).

## Candidate documentation architecture

1. **`README.md`:** event-story front porch, durable/open distinction, and three
   routes—lifecycle, first experiment, current evidence.
2. **`GUIDE.md`:** one fixture-versus-separately-approved-run bridge.
3. **`prizes/EXPERIMENT-EXAMPLES.md`:** fictional examples and analogies only;
   no definition, register, recipe, fixture, validation, or verdict ownership.

This architecture follows the explorer's candidate destinations while avoiding
another register or start page ([research transcript, lines 49–58](research.md#L49)).
It is one candidate architecture, not a demonstrated minimum.

## Owner-linked state flow, without collapsing its objects

| object or transition | operational meaning | primary owner |
|---|---|---|
| Prize | A bounded research target with evidence state, required witness, collapse-test, blocked uses, and its own `open -> contested -> awarded-candidate`/`void` states; it is not a purse. | [prizes README, lines 35–45](../../prizes/README.md#L35) |
| Registered bet | A falsifiable conjecture attached to a prize. Its register owns `open` (unresolved), `survived`, and `killed`; registration and later register resolution are separate writes. It is not an economic stake. | [bet register, lines 6–16](../../prizes/BET-REGISTER.md#L6) |
| Selected single hypothesis | One testable claim chosen from a bet for one criterion. Independent promises require independent bets and criteria rather than evidence inheritance. | [experiment skill, lines 72–90](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L72), [walkthrough, lines 223–241](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L223) |
| Experiment proposal | A dispatch that designs and validity-attacks an experiment; it does not execute a run. | [experiment skill, lines 16–21](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L16) |
| Frozen criterion | The pre-result, immutable artifact fixing hypothesis, non-goals, categories, falsifier, mechanical rule, and design-validity properties. An edit after freeze creates a new proposal. | [experiment skill, lines 55–96](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L55) |
| Fixture and fixture validation | Known synthetic inputs check schema, calculations, rejection behavior, and report shape. The artifact outcome is `pass`, `flag`, or `block`; none is an experiment verdict or behavioral observation. | [walkthrough, lines 375–400](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L375), [evidence harness, lines 68–101](../../.agents/skills/research-evidence-harness/SKILL.md#L68) |
| Approved run | A separate downstream activity consuming the frozen criterion read-only. Approval to run is not supplied by fixture success. | [experiment skill, lines 142–158](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L142), [walkthrough, lines 404–413](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L404) |
| Preserved raw result | `experiment.md` records what the runner observed before adjudication; preserving it prevents a verdict from rewriting the observation. | [experiment skill, lines 167–179](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L167) |
| Artifact/data/protocol-scope validation | Schema and fixture checks establish artifact behavior; run-scope checks establish whether assignment, exclusions, missing-data rules, blinding, and other frozen protocol gates were obeyed. Neither is the experiment verdict. | [evidence harness, lines 88–101](../../.agents/skills/research-evidence-harness/SKILL.md#L88), [walkthrough witness, lines 336–363](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L336) |
| Mechanical experiment verdict | An adjudicator re-derives the outcome from frozen criterion plus preserved result. The experiment skill owns run-level `SURVIVED`/`FALSIFIED`; the conflicting run-invalid vocabulary is residue below. | [experiment skill, lines 113–127](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L113) |
| Bounded conclusion or claim change | A scoped record names evidence, conditions, typed negative, `unchanged`/`demoted`/`candidate-for-owner-review`, residue, and next owner. | [walkthrough, lines 442–456](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L442) |
| External promotion decision | An owner may accept a bounded next state; this does not manufacture additional evidence and is not automatic from a verdict. | [walkthrough, lines 415–426](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L415), [authority model, lines 20–37](../../authority/AUTHORITY-MODEL.md#L20) |

Fixture validation, run execution, experiment adjudication, bet-register
resolution, and external promotion are five different state transitions. A
`FALSIFIED` experiment finding, for example, does not silently rewrite the bet
register to `killed`; that update belongs to the register's confirm/deny owner
([bet register, lines 12–16](../../prizes/BET-REGISTER.md#L12)).

### Unresolved owner conflict: `INVALID`

The experiment-dispatch owner reserves `INVALID` for a criterion whose internal
validity is knocked down **before freeze**, and says later runs end only
`SURVIVED` or `FALSIFIED`
([experiment skill, lines 98–125](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L98)).
The walkthrough separately permits `invalid` after a run when protocol failure
prevents adjudication
([walkthrough, lines 336–363](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L336),
[lines 430–446](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L430)).
These owner contracts conflict. This findings artifact does not choose a
canonical transition. It uses **design-invalid before freeze** for the first
case and **post-freeze non-adjudicable** for the second. Under the latter, no
adjudicable experiment verdict exists and the registered bet remains
`open`/unresolved until its owner resolves the vocabulary and a valid run occurs.

## Recommended newcomer journey

1. Read a 60–90 second situation before seeing local terminology.
2. Answer: “What observation would support this idea, and what would make us
   drop it?”
3. Map the story to the state flow above.
4. Hand-run one complete example containing a rejected fixture and either a
   falsified or post-freeze non-adjudicable run, not only a survived path.
5. Complete a second example with some fields omitted.
6. Construct a third example unaided and retell the boundaries.
7. Continue through the canonical inventory, full walkthrough, or current
   evidence map.

This sequence is a candidate transfer of worked-example, concrete-to-abstract,
anchored-story, and retrieval patterns—not proof that this repository's readers
will learn from it ([research transcript, lines 84–105](research.md#L84)).

## Opening story: one prize, two bets

A community event succeeds. The speaker is visible, while Ana's venue search,
accessibility work, outreach, and schedule repair disappear from the recap. The
research target is: **Can bounded evidence support accurate, safe recognition
of enabling work?** This is an opening illustration, not one of the three
decidable cards below. It contains at least two conjectures.

| bet | fictional criterion | state |
|---|---|---|
| A1 — recognition accuracy | Forty unfamiliar fictional reviewers classify 12 counterbalanced invented cases. Compare recap-only with recap-plus-bounded-evidence. Require at least +15 percentage points correct classification, no more than +5 points false acceptance, and median review time at most 8 minutes. | Registered and `open`; no run or observed result. |
| A2 — communication safety | A separate fictional group of 40 interprets a bounded recognition notice versus award-style language. Require at least 20 points fewer payout/authority errors with comprehension no more than 5 points lower. | Registered and `open`; no run or observed result. |

A1 cannot prove A2. The first asks whether evidence changes recognition
accuracy; the second asks whether language creates entitlement errors. That
separation follows the repository's existing warning against evidence
inheritance across recognition, community benefit, and communication safety
([research transcript, lines 34–35](research.md#L34)).

Any later fixture must reject missing assignment, malformed arms, payout or
authority mutation, and A1-to-A2 evidence inheritance. Fixture success would
still resolve neither bet ([research transcript, lines 185–191](research.md#L185)).

## Constrained analogies

| analogy | useful mapping | where it breaks |
|---|---|---|
| Repository as a wind tunnel | Mechanisms meet controlled stress before operation. | The repository is not a vehicle factory and cannot certify a complete economy. |
| Prize as an open research finish line | It names a bounded target and closure witness. | Closing it authorizes no payout or implementation. |
| Bet as a prediction card | It records a claim and how it could lose. | No money, status, stake, or authority transfers. |
| Frozen criterion as a sealed finish line | Comparator, thresholds, exclusions, and validity gates are fixed before results. | Sealing a weak protocol does not make it informative. |
| Fixture as a crash-test dummy | Known setup and expected failure test sensors and procedure. | Synthetic records contain no real community behavior and prove no general safety. |
| Verdict as a match report | It reports one result under declared conditions. | It is not universal truth or deployment permission. |

Analogies must always be followed by the operational term and breakpoint; they
are teaching aids, never definitions ([research transcript, lines 126–135](research.md#L126)).

## Stable boundaries and volatile state

README may state durably that this is research, activity is not contribution,
observed signal is not reviewed credit, reviewed credit is neither reward nor
authority, fixture success is not behavioral validation, and `SURVIVED` is not
policy permission. These separations are owned by the definitions and authority
model ([definitions, lines 184–279](../../definitions/DEFINITIONS.md#L184),
[authority model, lines 75–87](../../authority/AUTHORITY-MODEL.md#L75)).

Counts of open prizes, unresolved bets, dated projections, fixture backlog, and
next work are volatile. README should link to the live registers, inventory, and
current-state projection rather than copy their values. At this dispatch's
evidence date, all registered bets remain unresolved; that is status, not a
durable conclusion ([bets/prizes inventory entry, lines 67–77](../../.arcanum/inventory/entries/bets-and-prizes-device.md#L67)).

## Counterfactual teaching gallery

All populations, thresholds, and observations below are deliberately fictional.
The verdicts show how frozen rules would adjudicate hypothetical, separately
approved runs; they are not repository results. Each rule follows the owner's
requirement that one hypothesis and a mechanical verdict be fixed before a run
([experiment skill, lines 72–96](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L72)).

### Card 1 — software maintenance (`FALSIFIED`)

**One hypothesis.** For the declared fictional histories, a bounded maintenance
context packet increases correct classification of seeded risk-reducing work by
at least 15 percentage points over a commit/merge-count dashboard without
breaking any guardrail.

| criterion field | frozen value |
|---|---|
| Population and assignment | 48 fictional maintainers, randomly assigned 24/24, each receiving the same 12 seeded histories in counterbalanced order. |
| Comparator | Count dashboard versus context packet. |
| Exclusions | Fixture authors and history authors excluded before assignment; incomplete rows rejected, never imputed. |
| Validity gates | Exactly 24 assigned per arm; identical histories; seeded labels frozen before assignment and hidden; rubric unchanged; at least 20 valid rows per arm; no answer reveal. |
| Mechanical rule | When all validity gates pass: `SURVIVED` iff `correct_delta >= 15pp AND false_positive_delta <= 5pp AND median_time_delta <= 3min`; else `FALSIFIED`. Any failed validity gate instead makes the run post-freeze non-adjudicable, not a taught canonical `INVALID`. |

| fixture | synthetic row | deterministic handling |
|---|---|---|
| valid | Arm, assignment, history, classification, time, and frozen label present; no authority mutation. | `pass`; retain and calculate. |
| rejected | Seeded label exposed to reviewer. | `block`; exclude from run input and report the protocol violation. |
| malformed | Arm missing. | Schema `block`; calculate nothing. |
| dangerous success | High activity automatically creates reviewed credit or merge power. | `block`; reject forbidden mutation even if classification is correct. |

**Hypothetical values.** All validity gates are true; 24/24 are assigned and
23/arm are valid. Correct classification is 72% versus 66% (`+6pp`), false
positives 9% versus 8% (`+1pp`), and median time 8.2 versus 4.0 minutes
(`+4.2min`). Therefore the re-derivable outcome is **`FALSIFIED`**: two required
conjuncts fail. The bounded conclusion is only that this packet did not beat the
dashboard under the fictional criterion. **Typed negative:** this does not show
that all maintenance context is useless or authorize activity scoring, reward,
merge rights, or governance.

### Card 2 — independent second review (`SURVIVED`)

**One hypothesis.** In the declared fictional contribution-claim set, two
conflict-checked independent reviewers reduce reciprocal-approval errors by at
least 25 percentage points versus one reviewer without breaking delay,
completion, conflict, or authority guardrails.

| criterion field | frozen value |
|---|---|
| Population and assignment | 60 fictional claims, randomly assigned 30/30 after eligibility checks. |
| Comparator | One reviewer versus two independently assigned reviewers. |
| Exclusions | Claims without a frozen reference label and reviewers with declared conflicts excluded before assignment; no post-result exclusions. |
| Validity gates | 30 assigned per arm; identical claim packets; randomization receipt present; reference labels blinded; rubric frozen; reviewer independence checked. |
| Mechanical rule | When all validity gates pass: `SURVIVED` iff `error_reduction >= 25pp AND median_delay_increase <= 24h AND completion >= 90% AND conflict_contamination = 0 AND authority_mutations = 0`; else `FALSIFIED`. Any failed validity gate instead makes the run non-adjudicable. |

| fixture | synthetic row | deterministic handling |
|---|---|---|
| valid | Two independent, conflict-checked reviews and every outcome field present. | `pass`; retain and calculate. |
| rejected | Reviewers share a declared conflict. | `block`; reject before calculation. |
| malformed | Second-review field absent in the two-review arm. | Schema `block`; calculate nothing. |
| dangerous success | Reviewer agreement automatically grants payout or governance weight. | `block`; reject the forbidden mutation. |

**Hypothetical values.** Every validity gate is true. Reciprocal-approval error
is 40% versus 9% (`31pp` reduction), median delay rises 10 hours, completion is
93%, conflict contamination is `0`, and authority mutations are `0`. Therefore
the re-derivable outcome is **`SURVIVED`**. The bounded conclusion applies only
to this fictional population, assignment, rubric, and duration. **Typed
negative:** survival does not establish general capture resistance, community
benefit, payout eligibility, governance safety, or implementation readiness.

### Card 3 — story-first onboarding (post-freeze non-adjudicable)

**One hypothesis.** Among fictional newcomers without prior harness experience,
story-first instructions increase structurally complete experiment artifacts by
at least 20 percentage points over terminology-first instructions without
increasing boundary errors.

| criterion field | frozen value |
|---|---|
| Population and assignment | 24 fictional newcomers, randomly assigned 12/12 after excluding prior harness experience. |
| Comparator | Story-first guide versus terminology-first guide for the same held-out prompt. |
| Exclusions | Prior harness experience declared before assignment; no exclusion for poor performance or missing answers after assignment. |
| Validity gates | No mentor intervention; evaluator blinded to arm; rubric frozen; 12 assigned per arm; at least 10 analyzable artifacts per arm. |
| Mechanical rule | First require every validity gate. If true, `SURVIVED` iff `completion_delta >= 20pp AND boundary_error_delta <= 0pp`; otherwise `FALSIFIED`. If any validity gate is false, report post-freeze non-adjudicability, issue no experiment-skill verdict, and leave the bet open. |

| fixture | synthetic row | deterministic handling |
|---|---|---|
| valid | Prize, two bets, comparator, criterion, four fixture classes, and blocked uses present. | `pass`; retain for rubric scoring. |
| rejected | Mentor supplies the missing falsifier. | `block`; record protocol-scope failure. |
| malformed | Comparator field absent. | Schema `block`; calculate nothing. |
| dangerous success | Fixture pass changes the claim to deployable. | `block`; reject forbidden claim mutation. |

**Hypothetical values.** Completeness is 9/12 (75%) versus 5/12 (41.7%), a
`+33.3pp` difference; boundary errors are 2/12 (16.7%) versus 1/12 (8.3%), a
`+8.4pp` difference. Four story-arm readers received mentor help and evaluators
saw assignments; the rubric stayed frozen, assignment was 12/12, and all 12
artifacts per arm were analyzable. The
unconditional re-derivable outcome is **post-freeze non-adjudicable** because two
validity gates are false; no `SURVIVED`/`FALSIFIED` experiment verdict exists and
the bet remains `open`. The walkthrough would call this run `invalid`, which is
the unresolved owner conflict documented above. **Typed negative:** protocol
failure neither falsifies nor supports story-first instruction, even though its
raw completion rate is attractive.

The three cards adapt the explorer's example families and dangerous-success
checks ([research transcript, lines 217–253](research.md#L217)) while keeping
fixture `pass`/`block` distinct from experiment verdicts
([walkthrough, lines 375–400](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L375)).

## Assemble a first experiment from existing owners

The gallery should provide this checklist and link every step instead of
re-owning the procedure:

1. Name the observable change and create the prize record using
   [`prizes/README.md`](../../prizes/README.md#L35).
2. Split independent promises into separately registered bets with conjecture,
   comparator, predicted observation, falsifier, attack lane, and open
   resolution using the [bet owner](../../prizes/README.md#L47).
3. Send one hypothesis through the
   [experiment-dispatch owner](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L55),
   which attacks validity and freezes the criterion before results.
4. Build valid, rejected, malformed, and dangerous-success records using the
   [fixture schema](../../validation/contribution-edge-fixtures/SCHEMA.md#L6).
5. Validate fixtures without changing a claim, then obtain separate approval
   for any run. Preserve raw results; only an adjudicable run receives the
   frozen mechanical `SURVIVED`/`FALSIFIED` verdict under the experiment owner
   ([experiment skill, lines 142–179](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L142)).
6. Record the bounded conclusion, typed negative, residue, and owner route;
   resolve the bet register through its own confirm/deny owner. Promotion
   remains a separate external decision.

The required lifecycle and fixture/live boundary are documented in the
walkthrough and experiment skill ([research transcript, lines 179–193](research.md#L179)).

## Misconceptions and typed negatives

Block a teaching artifact if it implies any of the following
([research transcript, lines 137–147](research.md#L137)):

- prize means payment, or bet means financial staking;
- an attractive story is evidence;
- fixture success means the mechanism works;
- one bet inherits another's observations;
- design-invalid means falsified, post-freeze non-adjudicability is silently
  collapsed into the same state, or `SURVIVED` means deployable;
- a metric, credit record, or recognition signal grants authority.

Rejected claims:

- **“Discovery and variation are the primary difficulty.”** Zeroed by the
  absence of an unaided audience diagnostic.
- **“Story-first is superior.”** Zeroed by the absence of a preregistered
  comparative run.
- **“These analogies improve comprehension.”** Zeroed by the absence of an
  audience witness.
- **“The revised introduction is newcomer-usable.”** Zeroed by the unrun
  held-out artifact-transfer trial.

## Executable comprehension witness

Give an unfamiliar reader a held-out scenario and blank artifact with no mentor
help. Freeze the rubric first. Require one prize, two independent registered
bets, one hypothesis criterion, comparator, falsifier, all four fixture
categories, validity gates, and a bounded conclusion. Payout/authority
inference, fixture-as-proof, or evidence inheritance are blocking errors.
Preserve the artifact and criterion-by-criterion scoring receipt. Require both
an unaided retell and successful construction; satisfaction or vocabulary recall
alone is insufficient ([research transcript, lines 149–159](research.md#L149)).

Passing would witness only minimum experiment-literacy under this task. Showing
that the front porch improves performance requires a separate preregistered
comparison.

## Candidate verdict matrix

| candidate | owner | witnessed? | sound? | verdict |
|---|---|---:|---:|---|
| Core instructional content exists | [README, lines 9–33](../../README.md#L9); [walkthrough, lines 10–93](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#L10); [workbook, line 22](../../prizes/training/PARTICIPANT-WORKBOOK.md#L22) | Yes: artifact inspection | Yes | GO |
| Difficulty is primarily discovery/variation | Precedent-clean local synthesis; [transcript, lines 75–82](research.md#L75) | No audience witness | Testable, not established | KILL |
| Bounded README front porch plus inventory routing | Precedent-clean composition; [README, lines 9–33](../../README.md#L9); [inventory, lines 6–37](../../.arcanum/inventory/index.md#L6) | Yes: route can be hand-traced | Yes as composition candidate | GO |
| Three-card derived experiment gallery preserves lifecycle semantics | [experiment skill, lines 72–96](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L72); [evidence harness, lines 68–101](../../.agents/skills/research-evidence-harness/SKILL.md#L68) | Yes: three counterfactual outcomes are mechanically re-derivable | Yes within its no-ownership boundary | GO |
| Story-first improves performance | Precedent-clean related pedagogy; [transcript, lines 84–105](research.md#L84) | No comparative run | Testable, not established | KILL |
| Constrained analogies preserve local boundaries | Precedent-clean mapping; [prize/bet definitions, lines 12–18](../../prizes/README.md#L12); [experiment skill, lines 72–96](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md#L72) | Yes: each has mapping and breakpoint | Yes as candidate wording | GO |
| Analogies improve comprehension | Precedent-clean related analogy theory; [transcript, lines 90–93](research.md#L90) | No audience witness | Testable, not established | KILL |
| Revised front porch is newcomer-usable | [walkthrough audience contract, lines 19–25](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.validation.md#L19) | No audience trial | Testable, not established | KILL |

## Owner routes and open residue

- Definitions or state meanings: [definitions](../../definitions/DEFINITIONS.md),
  [prizes README](../../prizes/README.md), and the
  [experiment-dispatch skill](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md).
- Bet/prize state: [live bet register](../../prizes/BET-REGISTER.md), prize
  register, and their inventory entry.
- Fixture behavior: [contribution-edge fixtures](../../validation/contribution-edge-fixtures/README.md)
  and the [evidence harness](../../.agents/skills/research-evidence-harness/SKILL.md).
- Policy, payout, governance, launch, or implementation:
  [authority/promotion owners](../../authority/promotion-policy.md), never this
  onboarding work.
- Current status: inventory and the
  [dated current-state projection](../../maps/current-state/README.md).

Open residue: unresolved pre-freeze/post-freeze `INVALID` vocabulary across the
experiment skill and walkthrough; no unaided newcomer diagnosis; no comparative
story-first run; no audience witness for the analogies; no completed held-out
artifact-transfer trial; no evidence that three examples cover the range of
likely newcomer errors. The existing walkthrough remains teaching-effectiveness `flag`, not
`pass` ([walkthrough validation, lines 19–25](../../prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.validation.md#L19)).

## Downstream Whisper handoff

Whisper may change exactly these public surfaces:

- `README.md`: add the front porch, durable boundaries, and owner links;
- `GUIDE.md`: add one fixture-versus-live alignment passage;
- `prizes/EXPERIMENT-EXAMPLES.md`: create the narrow fictional gallery.

It must only link—not rewrite or duplicate ownership—from
`.arcanum/inventory/index.md`, `QUERYING.md`, `maps/current-state/README.md`,
`prizes/README.md`, the full bets/prizes walkthrough, prize and bet registers,
the experiment-dispatch skill, the contribution-edge fixture package,
definitions, claims, and authority documents. It must not copy volatile counts
into README, create another Start Here or register, imply that fixture rows are
live evidence, or upgrade any `open`, `flag`, `contested`, or unresolved state.
The public copy must preserve the owner-linked state flow, independent-bet rule,
fixture/live boundary, `FALSIFIED` versus pre-freeze design-invalid distinction,
the unresolved post-freeze non-adjudicability vocabulary, typed negatives, and
authority boundary documented above.

This is evidence-grounded candidate pedagogy, not validated newcomer usability.
