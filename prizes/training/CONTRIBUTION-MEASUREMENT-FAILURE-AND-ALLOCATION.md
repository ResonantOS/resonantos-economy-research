# Contribution Measurement, Failure, Review, and Allocation

Status: candidate workshop-derived research guide
Promotion scope: local-research-only
Audience: facilitators, participants, and researchers extending the contribution-mechanism workshop
Source posture: anonymized participant-supplied examples, local research synthesis, and bounded related-evidence candidates
Validation state: not run as a mechanism experiment

## Purpose

This guide preserves the contribution-mechanism questions and examples that
arose during a live discussion on 2026-07-13. It extends the
[training workshop](README.md) without changing the already-authored 90-minute
core or claiming that a cohort validated any mechanism.

The DAO premise remains fixed for this research exercise: calls, learning,
mentoring, maintenance, participation, and similar activities may already count
as contributions. The open questions are how to:

- describe different kinds of contribution without ranking them on one ladder;
- estimate effort, difficulty, uncertainty, and risk without converting a
  planning estimate into personal value;
- recognize informative failures without rewarding failure farming;
- assign reviewers while limiting conflicts, reciprocity, nepotism, and status
  bias;
- use history without turning it into entitlement or authority;
- test lotteries among qualified people;
- provide newcomers real access without transferring uncontrolled risk to them;
  and
- observe whether people inflate complexity or allocation claims once those
  claims become valuable.

This guide proposes research objects and experiments only. It creates no
reward, payout, token, reputation finality, governance weight, allocation
entitlement, implementation rule, or authority effect.

## Workshop Provenance and Privacy Boundary

The source notes were supplied directly by a workshop participant and included
participant names. This reusable version removes the names because repository
visibility may change. It preserves the ideas without preserving personal
identifiers.

The workshop named these examples:

- testing;
- code review;
- starting a new meeting;
- moderating Discord;
- presenting in a meeting;
- making a YouTube video;
- hosting learning sessions;
- making new groups;
- raising pull requests;
- attending;
- engaging in discussion;
- applying learned knowledge inside community contribution;
- teaching someone else;
- creating documentation;
- creating a new service for the DAO;
- replying to messages in Discord;
- creating a bug report;
- reproducing bugs;
- labeling issues;
- closing duplicates; and
- a participant phrase, `shared inference?`, whose meaning remains ambiguous.

## Keep Four Questions Separate

The same contribution can appear in four different decisions. Evidence from one
decision must not silently decide another.

| Decision | Question | Relevant dimensions | Must not imply |
| --- | --- | --- | --- |
| Contribution description | What happened, and what kind of contribution was it? | family, action, recipient, output, context | value rank or reward |
| Planning | What may this contribution require before it begins? | effort range, uncertainty, dependencies, difficulty, risk, reversibility | personal merit or later recognition |
| Result-specific recognition | What witnessed result is connected to this contribution? | provenance, result-link class, evidence confidence, joint dependencies, disposition | reusable balance, global reputation, or authority |
| Opportunity allocation | Who may receive a scarce contribution opportunity or review assignment? | current capability, availability, conflicts, load, newcomer access, relevant history | retrospective merit, payout, or governance power |

The local authority rule remains controlling: contribution credit is not
governance authority, reputation is not proof of truth, and randomness is not
fairness without a named target and audit path. See the
[Authority Model](../../authority/AUTHORITY-MODEL.md#non-collapse-rules).

## Contribution Chain

The workshop examples mix activities, outputs, outcomes, and later reuse. Keep
all four visible:

```text
contribution activity -> output -> witnessed outcome -> later reuse
```

For example:

```text
joins a governance call
  -> presents a documented proposal
  -> the room resolves a named decision
  -> the adopted decision is used in a later governance result
```

The call remains a contribution under the fixed premise. The chain prevents
attendance time from automatically deciding the separate result-link claim.

## Working Contribution Families

The families are descriptive, non-exclusive labels. They are not a hierarchy.
A contribution may have one primary family and several secondary labels.

| Family | Workshop examples | Candidate witnessed result | Weak proxy that must not decide value |
| --- | --- | --- | --- |
| Engineering and delivery | creating a DAO service, raising pull requests, testing | usable service, accepted change, test that exposes or prevents a defect | pull-request count, lines of code, test count |
| Quality and maintenance | code review, bug report, reproducing bugs, labeling, closing duplicates | defect reproduced, risk discovered, review changes the solution, duplicate correctly consolidated | comment count, label count, issue-closure count |
| Coordination and governance | starting a meeting, presenting, engaging in discussion, making a new group | decision clarified, blocker removed, responsibility accepted, group delivers its stated purpose | meeting count, speaking time, group/channel count |
| Community operations and care | moderating Discord, replying to messages | conflict de-escalated, question resolved, contributor routed, channel kept usable | message count, constant availability, public visibility |
| Documentation and communication | documentation, YouTube video | accurate reusable explanation that enables understanding or action | page count, video length, views alone |
| Learning and capacity | attending, hosting a learning session, teaching someone | demonstrated understanding, completed exercise, later transfer, learner can act independently | attendance, course completion, hours alone |
| Applied learning | applying learned knowledge in community contribution | exact learned technique appears in and changes a witnessed result | topic similarity, generic expertise claim |
| Collective sensemaking | candidate reading of `shared inference?` | evidence combined into a documented conclusion, decision, or explicit disagreement | agreement, popularity, confidence, or seniority alone |

If `shared inference?` meant **shared infrastructure**, classify it under
engineering and commons maintenance instead. The workshop record does not
resolve which meaning was intended.

## Candidate Meaning of Shared Inference

For research purposes only:

> A shared inference is a documented conclusion produced from multiple
> contributions, with its evidence, assumptions, disagreements, and decision
> consequence visible.

Example:

```text
several contributors reproduce a failure
  -> compare evidence
  -> infer a permission boundary is involved
  -> document uncertainty and dissent
  -> a later decision changes the permission design
```

Agreement is not the result by itself. The reusable object is the inspectable
reasoning and its bounded consequence.

## Measurement Dimensions

Do not ask for one universal complexity or contribution number. `Complexity`
usually hides several disputed dimensions, and summing them would hide the
weights that decide which kinds of contribution count most.

### Ex ante planning dimensions

| Dimension | Question |
| --- | --- |
| Effort range | What capacity may this consume? Use a range; do not require invasive time tracking. |
| Uncertainty | What is not known before starting? |
| Technical or cognitive difficulty | What expertise or reasoning is required to execute correctly? |
| Dependencies | Which people, artifacts, systems, or decisions must be available? |
| Coordination burden | How much synchronization and communication is required? |
| Risk of error | What happens if the contribution is wrong? |
| Reversibility | How easily can a harmful or mistaken result be undone? |
| Verification cost | How difficult is it to establish that the result worked? |

### Ex post result dimensions

| Dimension | Question |
| --- | --- |
| Result quality | Did the result meet its declared acceptance conditions? |
| Result linkage | Is the contribution `trace-linked`, `bridge-linked`, `general-capacity/no-result-link`, or `unlinked` to this result? |
| Evidence confidence | How strong, independent, and contestable is the evidence? |
| Joint dependencies | Which other contributions were necessary, and where would individual subtraction erase complementarity? |
| Durability | Does the result remain useful, and what maintenance obligation did it create? |
| Observed consequence | What changed after the result, with uncertainty and alternative explanations preserved? |

Compare contributions only within the same declared family, for the same
decision, using shared reference cases. An eight-point moderation estimate and
an eight-point security estimate are not comparable quantities.

Effort is evidence about cost and capacity. It is not evidence of community
value. Difficulty is not impact. Impact is not attribution. None of these is
authority.

## What Agile Estimation Can and Cannot Show

The [2020 Scrum Guide](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf)
is an official framework source, not ResonantDAO evidence. It says that backlog
attributes such as size vary with the domain, that the people doing the work are
responsible for sizing, and that past performance, upcoming capacity, and a
shared Definition of Done can improve a forecast.

Used carefully, relative estimation or a planning-poker-style discussion can
surface:

- different understandings of the contribution;
- hidden dependencies;
- uncertainty and risk;
- reasons to decompose an item; and
- local forecast calibration within a stable group and reference set.

It cannot establish:

- social value;
- individual merit;
- result impact;
- deservingness of recognition or reward;
- comparable performance across people or teams; or
- governance authority.

Story points, velocity, T-shirt sizes, or effort ranges therefore belong only
to the planning surface. They must not feed person ranking, payout, recognition,
or authority.

## Result-Specific Recognition

The current local candidate terminates at a review of one claimed connection
between an earlier contribution and one witnessed result:

```text
earlier contribution record
  -> later witnessed result
  -> claimed connection
  -> independent review
  -> accepted | rejected | held
```

Subject similarity may route records for inspection. It cannot determine the
result-link class or disposition. The accepted candidate read models remain a
result-link case set, a vector evidence view, a joint-dependency graph with
alternatives, or a result-centred dossier. Person totals, time accounts, stored
balances, cross-result rankings, and global reputation remain excluded. See the
[Deferred Contribution aggregation answer](../../dispatch/deferred-contribution-basis/findings.md#aggregation-answer).

## Informative Failure

Failure is valuable only when it produces trustworthy information. A failure
count would train cheap failure production.

Candidate admission rule:

```text
credible attempt
  + preserved evidence
  + witnessed negative result
  + a hypothesis, path, or assumption genuinely changed
  = informative-failure candidate
```

### Failure classifications

| Classification | Meaning | Candidate research treatment |
| --- | --- | --- |
| Informative negative | Credible evidence rules out a path or exposes a constraint. | accepted negative result |
| Useful near-miss | Evidence exposes a vulnerability before serious harm. | learning residue; preventive-work boundary still applies |
| Inconclusive | Evidence cannot distinguish material explanations. | held, not rewritten as success or failure |
| Execution defect | Bad method, missing evidence, or avoidable non-delivery. | not an informative result |
| Safety or policy breach | Failure follows violation of an agreed boundary. | separate incident and authority route |
| Duplicate failure | Repeats a known negative without new evidence. | no additional result claim |

### Failure evidence vector

Record, without producing a person total:

- expected observation;
- actual observation;
- method and safety compliance;
- preserved evidence;
- uncertainty reduced;
- option, assumption, or design ruled out;
- reproducibility or reuse path;
- later decision or result changed;
- costs and harms; and
- remaining alternative explanations.

A failed experiment may itself be a witnessed result when it credibly rules out
a path. It may also become an earlier investment that is later realized when a
separate witnessed result explicitly reuses the negative evidence:

```text
negative evidence
  -> later contributor avoids the ruled-out path
  -> witnessed result cites that dependency
  -> result-specific review
```

The local bet device already banks a killed bet as a typed negative: what the
bet could have contributed plus the fact that killed it. See the
[Bet Register resolution contract](../BET-REGISTER.md#bet-register).

Preventive work and avoided non-events are a harder, separate problem. The
current repository requires prior-art research on counterfactual evidence before
that lane becomes experiment-ready. See
[E5 — Preventive or negative work](../../dispatch/deferred-contribution-basis/findings.md#e5--preventive-or-negative-work-prior-art-handoff-only).

### Failure-farming attacks

- select easy or already-known failures;
- intentionally under-resource the attempt;
- exaggerate initial uncertainty;
- split one negative result into many records;
- relabel execution defects as experiments;
- hide safety breaches inside learning language; or
- claim later credit whenever another person chooses a different path.

Controls to test include frozen questions, novelty checks, comparison cases,
independent witnesses, exact later references, and no count-based accumulation.

## Reviewer Conflict, Nepotism, and Status

Rank and reputation do not prevent nepotism. They can make it durable by turning
past recognition into a status prior.

The [NIH conflict-of-interest rules](https://grants.nih.gov/policy-and-compliance/policy-topics/peer-review/coi)
are an official external policy precedent: an appearance of conflict sufficient
to make a reasonable person question impartiality prevents participation in
that review. This is not ResonantDAO policy, but it supplies a concrete recusal
pattern.

A controlled computer-science peer-review experiment found an advantage for
famous authors and high-prestige institutions under single-blind review. This is
related evidence for testing status priors, not proof of the same effect size in
a DAO. See
[Tomkins, Zhang, and Heavlin (2017)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5715744/).

Candidate controls:

1. Maintain a conflict graph covering family, financial relationships, current
   team, supervision, recent collaboration, reciprocal reviewing, and any
   relationship that reasonably questions impartiality.
2. Freeze the eligible reviewer pool and remove conflicts before assignment.
3. Do not let a claimant select reviewers.
4. Blind person-level identity and prior status where the evidence can still be
   reviewed correctly.
5. Use current, domain-specific reviewer qualification rather than a global
   reputation rank.
6. Require independent reasons linked to evidence.
7. Hold or adjudicate material disagreement instead of averaging it away.
8. Provide recusal, appeal, and random-audit routes.
9. Monitor repeated reciprocal pairs and concentrated positive reviewing.
10. Treat reviewer history as challengeable eligibility evidence, never standing
    authority.

### What randomness may protect

Bounded randomness may make reviewer assignment less predictable and raise the
cost of buying or coordinating a particular review. It must not randomize away
conflict removal, minimum capability, safety requirements, or appeal.

A primary preprint using data from two computer-science venues found that
randomized assignment had only a small cost under its selected review-quality
measures. That result is context-specific and does not validate a DAO design.
See [Jecmen et al., Counterfactual Evaluation of Peer-Review Assignment
Policies](https://arxiv.org/abs/2305.17339).

For a candidate assignment draw:

- freeze the qualified, conflict-filtered pool first;
- conceal assignment until the review is submitted where feasible;
- use auditable randomness;
- forbid undocumented rerolls;
- keep the pool large enough that one relationship cannot dominate; and
- audit review quality, conflicts, appeals, and assignment concentration.

Randomness cannot repair a corrupt pool, Sybil reviewers, false qualifications,
or post-assignment collusion. The local synthesis therefore places randomness
in audit and reviewer assignment while requiring a legible
contribution-to-recognition path. See the
[economy synthesis tension](../../dispatch/economy-synthesis/findings.md#lane-1--authority-separated-credit).

## History and Allocation

`Allocation` is ambiguous and must name its object:

- **contribution-opportunity allocation:** who receives a scarce chance to
  contribute;
- **reviewer allocation:** who reviews a result-link claim; or
- **resource/reward allocation:** who receives money or another scarce economic
  benefit.

This guide proposes experiments for the first two only. Resource and reward
allocation remains outside the local research candidate and behind the
[promotion policy](../../authority/promotion-policy.md).

History may inform current capability, completion reliability, workload,
conflicts, and repeated allocation exposure. It must not become entitlement,
global rank, or allocation amount. A history-only rule creates a cumulative
loop:

```text
past allocation -> more visible history -> stronger status prior -> more allocation
```

Absence of DAO history is not evidence of inability.

### Qualified-pool lottery candidate

1. Name the opportunity and its safety boundary.
2. Declare current capability and availability requirements.
3. Remove conflicts and overloaded participants.
4. Preserve protected access for newcomers or people with little prior
   allocation.
5. Draw transparently among the eligible pool.
6. Permit rerolls only for documented disqualification.
7. Measure quality, harm, concentration, newcomer access, review cost, and
   legitimacy.

The New Zealand Health Research Council's
[Explorer Grants](https://gateway.hrc.govt.nz/funding/ideas-funding/2026-explorer-grants)
are an official operating precedent: anonymous applications are checked for
scheme criteria, after which eligible applications are randomly ordered. This
shows that an eligibility-then-lottery procedure can operate in another domain;
it does not prove that the same procedure is fair or effective for ResonantDAO.

## Newcomer Access

Do not treat every newcomer as the same:

| Newcomer condition | Candidate allocation treatment |
| --- | --- |
| New to the DAO, experienced in the field | normal qualified pool; lack of DAO history is not a penalty |
| Experienced in the DAO, new to the field | exploration lane with reversible scope, mentoring, and review |
| New to both | learning and paired contribution opportunities before safety-critical or irreversible allocation |

Protected access is preferable to unconditional priority:

| Opportunity | Newcomer posture |
| --- | --- |
| reversible exploration | protected slot or qualified lottery candidate |
| documentation and independent reproduction | strong entry opportunity |
| novel alternatives and red-teaming | deliberately include newcomer perspective |
| bounded pull request, testing, bug reproduction, issue triage | real contribution with proportional review |
| safety-critical or irreversible execution | require demonstrated capability or pairing |
| final high-authority adjudication | newcomer may observe, review, or dissent; no person decides by novice status alone |

A large biomedical publication study found that earlier-career researchers were
more likely to try newer ideas, while a pairing of an earlier-career first author
and a more experienced last author was also associated with newer idea inputs.
The authors explicitly warn against unconditional preference for youth over
experience. This is analogy-level evidence for testing newcomer-plus-experienced
pairings, not a direct DAO result. See
[Packalen and Bhattacharya, Age and the Trying Out of New Ideas](https://pubmed.ncbi.nlm.nih.gov/31435457/).

Do not assign newcomers disproportionately risky contributions and then call
their failures valuable. That would transfer experimentation risk onto people
with the least institutional power.

## Allocation-Seeking Is a Central Attack Lane

If allocation brings money, access, visibility, recognition, or future
eligibility, participants may rationally try to increase it through:

- complexity inflation;
- splitting one contribution into many records;
- choosing visible activity over maintenance;
- reciprocal reviews;
- lobbying for favorable dimensions or weights;
- hoarding reviewer status;
- excluding newcomers from the qualified pool;
- converting prior allocation into entitlement; or
- requesting higher allocations because the allocation itself creates history.

The system should treat this behavior as a predicted response to the rule, not
as an exceptional personality defect. Planning estimates must therefore remain
separate from recognition and reward, and allocation experiments must measure
estimate drift, record splitting, concentration, reciprocal edges, invisible
contribution loss, and appeals.

## Candidate Contribution Record

This is a research worksheet, not a canonical schema:

```yaml
contribution_ref:
contribution_family:
activity:
intended_recipient_or_context:
intended_result:
output_ref:
witnessed_result_ref:
result_link_class: trace-linked | bridge-linked | general-capacity/no-result-link | unlinked
evidence_refs: []
joint_dependency_refs: []
planning_dimensions:
  effort_range:
  uncertainty:
  dependencies:
  difficulty:
  risk_of_error:
  reversibility:
reviewer_ref:
conflict_state: clear | recused | unresolved
disposition: accepted | rejected | held
failure_classification:
later_reuse_refs: []
reward_effect: none
payout_effect: none
reputation_effect: none
governance_effect: none
authority_effect: none
open_residue: []
```

Any fixture implementation must extend the governed
[contribution-edge fixture schema](../../validation/contribution-edge-fixtures/SCHEMA.md)
instead of copying this worksheet into a parallel authority surface.

## Proposed Experiments — Not Registered Bets

These are workshop-derived candidates. They do not modify the
[Prize Register](../PRIZE-REGISTER.md) or [Bet Register](../BET-REGISTER.md).

### Candidate A — Vector measurement

**Conjecture:** family-specific dimensions and reference cases produce better
calibrated review than one complexity score without unacceptable review burden.

**Arms:** single scalar; unweighted vector; vector plus family-specific reference
cases.

**Measures:** reviewer agreement, later rework, result quality, rank reversals,
review time, and perceived legitimacy. Agreement alone is not truth.

### Candidate B — Reviewer independence

**Conjecture:** conflict-filtered random assignment within a qualified band
reduces conflicts and reciprocal reviewing without unacceptable loss of review
quality.

**Arms:** manual/history-led assignment; conflict-filtered expertise matching;
conflict-filtered bounded random assignment among qualified reviewers.

**Measures:** known conflicts, reciprocal edges, reviewer confidence, evidence
quality, disagreement, appeals, concentration, and review time.

### Candidate C — Opportunity allocation

**Conjecture:** a qualified lottery with protected newcomer access reduces
allocation concentration and improves newcomer entry without unacceptable loss
of completion quality or safety.

**Arms:** history-ranked; qualified equal lottery; qualified lottery with a
newcomer exploration reserve and experienced support.

**Measures:** completion quality, harmful error, rework, concentration,
newcomer retention, novel options, review burden, and legitimacy.

### Candidate D — Allocation inflation

**Conjecture:** when a complexity estimate directly improves allocation,
estimates and record splitting increase; separating planning estimates from
benefits reduces the effect.

**Measures:** estimate drift against frozen reference cases, contribution
splitting, visibility shifts, allocation requests, and reviewer reciprocity.

### Candidate E — Informative failure

**Conjecture:** preserving credible negative-result dossiers reduces duplicate
attempts and improves later decisions without increasing cheap or intentionally
under-resourced failures.

**Measures:** repeated-path rate, later citations, decision changes, evidence
quality, safety breaches, duplicate negatives, and review burden.

### Candidate F — Newcomer plus experienced pairing

**Conjecture:** protected newcomer participation paired with experienced review
produces more novel options than history-ranked allocation without crossing
quality, harm, or support-cost bounds.

**Collapse-test:** novelty and reusable learning do not improve, or quality,
harm, exclusion, or support burden crosses a threshold frozen before the run.

## Next Workshop Exercise

For every example in the contribution-family table, write:

1. a positive case with a witnessed result and stable evidence;
2. a negative case where the contribution occurred but the claimed result link
   is unsupported; and
3. a held case with a material evidence or conflict dispute.

Then attack each case for:

- count farming;
- visibility bias;
- retrospective rewriting;
- reciprocal review;
- newcomer exclusion;
- failure farming;
- hidden authority; and
- allocation inflation.

Passing the exercise would show only that participants can produce the required
research records. It would not validate a contribution mechanism.

## Working-Term and Definition Boundary

The following labels are useful here but are not canonical economy definitions:

| Working label | Current posture | Required route before fixture or policy use |
| --- | --- | --- |
| contribution family | descriptive workshop classification | ER-D23 definition-owner review if it becomes a schema field |
| planning dimension | planning-only field group | define locally in a fixture/schema owner before validation use |
| shared inference | unresolved participant phrase and candidate local reading | clarify intended meaning, then ER-D23 if load-bearing |
| informative failure | candidate classification, distinct from preventive non-events | bounded prior art plus ER-D23 before fixture use |
| qualified pool | candidate allocation input | name capability, conflict, safety, and audit rules before experiment dispatch |
| protected newcomer access | candidate experimental condition | freeze target, eligibility, harm bounds, and fairness witness before run |

Until those routes occur, the labels may organize research discussion but may
not decide credit, reward, allocation policy, or authority.

## Bounded Related-Evidence Candidates

These external references help frame questions. They are not official
ResonantDAO sources and do not validate local transfer.

| Source | Source kind | Supported contextual use | Local bridge limit |
| --- | --- | --- | --- |
| [Scrum Guide 2020](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf) | official framework source | sizing is local/domain-dependent and belongs to people doing the work | no contribution-value, reward, or cross-team comparison rule |
| [NIH peer-review COI policy](https://grants.nih.gov/policy-and-compliance/policy-topics/peer-review/coi) | official external policy | concrete disclosure, appearance-of-conflict, and recusal precedent | not ResonantDAO policy and does not prevent undisclosed conflicts |
| [Tomkins et al. 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5715744/) | peer-reviewed primary experiment | identity and prestige can affect review in one conference context | no DAO effect-size or universal blindness claim |
| [Jecmen et al. 2023](https://arxiv.org/abs/2305.17339) | primary technical preprint | bounded randomized reviewer assignment can be evaluated against selected quality measures | no fairness, bribery-proof, or DAO-validity claim |
| [HRC Explorer Grants](https://gateway.hrc.govt.nz/funding/ideas-funding/2026-explorer-grants) | official operating precedent | eligibility followed by random ordering can operate in a real allocation process | does not establish the fairest DAO allocation rule |
| [Madsen and Desai 2010](https://journals.aom.org/doi/10.5465/AMJ.2010.51467631) | peer-reviewed empirical study | organizations in one industry learned differently from failure and success | no claim that every failure is valuable or transferable |
| [Franco et al. 2014](https://pubmed.ncbi.nlm.nih.gov/25170047/) | peer-reviewed primary study | null results can be systematically under-written and under-published | no rule for rewarding failed execution |
| [Packalen and Bhattacharya 2019](https://pubmed.ncbi.nlm.nih.gov/31435457/) | peer-reviewed large-scale empirical study | earlier-career and mixed-experience research configurations can relate to newer idea inputs | career age is not DAO newcomer status; authors warn against unconditional preference |

Before any source becomes load-bearing for a registered bet, fixture, or claim,
route it through the repository's source-kind and claim-ledger process.

## Current Verdict

- **Survives as documentation:** the workshop produced a usable set of
  contribution families, decision separations, dimensions, attack cases, and
  candidate experiments.
- **Remains open:** no universal task comparison, failure-value function,
  reviewer-assignment mechanism, history rule, lottery, newcomer reserve, or
  allocation rule is validated.
- **Blocked use:** person scoring, reward, payout, token, reputation finality,
  governance weight, policy, implementation, or authority.
