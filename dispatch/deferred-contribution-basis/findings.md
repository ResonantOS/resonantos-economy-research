# Deferred Contribution Basis — Converged Findings

Dispatch: `2026-07-13-deferred-contribution-basis`

Status: `local-research-only`; `REVISE / fixture-instantiation candidate`

Deployment status: undeployed

Validation status: unvalidated; proposed definitions are not registered and
proposed fixtures have not been instantiated or run

This file records a bounded research result. It defines no reward, payout,
reputation, governance, authority, token, bounty, policy, or implementation
effect. Explorer convergence and reviewer convergence establish neither
mechanism validity nor safety.

## Direct Answer

Do not model call attendance, study, mentoring, or maintenance as an
"investment" that accumulates and is later "cashed." The admitted evidence
supports only temporal separation: an earlier activity may be recorded, and a
later review may examine a contestable link to one specific result. It does not
support automatic accumulation or conversion ([Explorer 1](research.md) (lines 73–81); [Explorer 2](research.md) (lines 93–94)).
The official source also reserves investment/equity language and leaves the
proposed linkage, aggregation, and adjudication rules unspecified ([Explorer 5](research.md) (lines 247–265)).

Retain only this candidate pipeline:

```text
ER-D5 One Observed Surface Receipt Candidate
  instantiated as a prior-activity receipt
    -> candidate Prior-Activity-to-Result Relevance Claim
    -> contextual ER-D7 review
       + conflict and recusal state
       + ER-D10 adversarial fields
    -> accepted | rejected | held
    -> if accepted: one result-scoped ER-D7 Reviewed Credit Record
    -> END
```

The receipt is an observed signal, not credit, under
[ER-D5](../../definitions/DEFINITIONS.md#er-d5-one-observed-surface-receipt-candidate)
and [ER-D6](../../definitions/DEFINITIONS.md#er-d6-observed-signal). The terminal
record is bounded by [ER-D7](../../definitions/DEFINITIONS.md#er-d7-reviewed-credit-record)
and the conflict/farming cases by
[ER-D10](../../definitions/DEFINITIONS.md#er-d10-credit-gaming-failure-fixture).
All terminal effect fields are `none`:

```yaml
reward_effect: none
payout_effect: none
reputation_effect: none
governance_effect: none
authority_effect: none
policy_effect: none
implementation_status: fixture_only
```

No later owner decision is a transition in this pipeline. A future external
owner may independently consider a separate policy question, but this research
record neither creates eligibility nor supplies a recommendation to do so. This
follows the repository's
[authority model](../../authority/AUTHORITY-MODEL.md#core-rule) and
[promotion policy](../../authority/promotion-policy.md#promotion-ladder).

## Vocabulary Verdict

`investment`, `cashing`, and `realization` are **KILL as pipeline aliases**.
They imply stored value, entitlement, or financial conversion that neither the
external corpus nor the official whitepaper supports. The whitepaper expressly
uses a non-investment/non-equity boundary and distinguishes contribution income
from passive capital income ([Explorer 5](research.md) (lines 247–247)).

Earlier activity time and duration may be retained only as provenance metadata.
They cannot be balances, weights, decay inputs, person totals, or evidence of
result relevance. This restriction responds to evidence that time resources are
unequally distributed and that raw time/attendance aggregation can reward access
rather than result relevance ([Explorer 4](research.md) (lines 189–194)).

## Candidate Definitions Requiring Registration

The following are definition candidates under
[ER-D23](../../definitions/DEFINITIONS.md#er-d23-load-bearing-term-lifecycle),
not registered definitions. Until the definitions owner registers them with
stable IDs and `Open / to-ground` fields, any fixture using them is incomplete.

### Prior-Activity-to-Result Relevance Claim (candidate)

A contestable claim that one ER-D5 receipt bears an evidenced relationship to
one witnessed result. Required fields:

```yaml
receipt_ref:
result_ref:
claimant_ref:
exact_relevance_path:
result_link_evidence_class:
evidence_refs: []
review_criteria_version:
joint_dependency_refs: []
counterfactual_statement:
comparison_case_ref:
uncertainty:
review_disposition: accepted | rejected | held
no_reward_entitlement: true
no_reputation_effect: true
no_governance_effect: true
no_authority_effect: true
no_policy_effect: true
```

`exact_relevance_path` must name the observable steps from receipt to result; a
shared topic label is insufficient. A claimant cannot be the sole witness, a
conflicted reviewer must recuse, missing observation cannot prove zero
contribution, and an accepted claim remains scoped to that result. These
negatives extend the existing
[fixture schema](../../validation/contribution-edge-fixtures/SCHEMA.md),
[typed negatives](../../validation/contribution-edge-fixtures/TYPED-NEGATIVES.md),
and [appeal/recusal fixture](../../validation/contribution-edge-fixtures/fixture-appeal-recusal.md).

### Review Disposition (candidate)

- `accepted`: the frozen criteria and evidence support the claimed path for the
  named result; create one result-scoped ER-D7 record.
- `rejected`: evidence contradicts the path or shows no result link; create no
  ER-D7 record.
- `held`: conflict, missing provenance, competing accounts, privacy constraint,
  or material uncertainty prevents either conclusion; create no ER-D7 record
  unless and until a later review accepts it.

These are research fixture outcomes, not approval, truth, entitlement, or
authority statuses.

### Result-Link Evidence Class (candidate)

This is load-bearing and requires its own registration unless the definitions
owner formally nests it inside the relevance-claim card:

| Class | Candidate meaning | Permitted disposition |
| --- | --- | --- |
| `trace-linked` | Stable evidence directly connects the earlier artifact/action to the named result. | `accepted`, `rejected`, or `held` after review. |
| `bridge-linked` | A stated intermediate artifact or transfer path connects the receipt and result. | `accepted`, `rejected`, or `held` after review. |
| `general-capacity/no-result-link` | The activity may have built capacity, but no result-specific path is evidenced. | `rejected` for this relevance claim. |
| `unlinked` | No supported path to the result exists, or the evidence is unrelated. | `rejected`. |

Subject similarity may help search or triage records. It cannot choose a class
or determine a disposition. Related precedent attaches omitted work to a
specific project/process, while warning that broad "helped the process"
narratives expand retrospective credit ([Explorer 2](research.md) (lines 106–107)). No admitted source supplies a general
subject-relatedness rule ([Explorer 4](research.md) (lines 223–227)).

## Precedent and Ownership Map

| Lane | What the evidence supports | Precedent status | Actual owner | Boundary |
| --- | --- | --- | --- | --- |
| Official whitepaper | Calls, learning, mentoring/care, development and participation are in the stated vocabulary; attendance alone should not permanently substitute for contribution; validation and anti-farming remain open ([Explorer 5](research.md) (lines 238–247)). | Official intent and open questions, not an operative mechanism. | ResonantDAO whitepaper owner. | Owns vocabulary, non-investment boundary, attendance warning, and open questions; does not own the local non-collapse rules or this pipeline ([Explorer 5](research.md) (lines 251–267)). |
| Failed DAO/crypto | Retroactive assessment, bounded epochs, mutable scores, attendance credentials, and identity checks exist; the same precedents expose entitlement, recency, reweighting, farming, and score-to-authority risks ([Explorer 1](research.md) (lines 19–71)). | Component precedent plus failure warning. | Each cited operating system/program owns its own rule; the failed-DAO/crypto subtower owns only the local bridge reading. | No source owns or validates the integrated pipeline ([Explorer 1](research.md) (lines 73–81)). |
| Science of science | Typed contribution descriptions and result-specific process links can improve records, while unilateral attribution, delayed-recognition inference, and cumulative advantage remain risks ([Explorer 2](research.md) (lines 97–113)). | Analogical/related evidence. | CRediT/NISO, ICMJE, and study authors own their respective standards/findings; the subtower owns the bridge reading. | Role labels and delayed recognition do not establish value, causation, or entitlement ([Explorer 2](research.md) (lines 97–121)). |
| Formal mechanisms | Edge, graph, interaction, counterfactual, temporal, and vector representations are computational precedents ([Explorer 3](research.md) (lines 134–158)). | Formal representation precedent. | Each paper/model family owns its mathematical result. | The mathematics does not supply social legitimacy, a true causal graph, fair baselines, or person-level merit ([Explorer 3](research.md) (lines 135–165)). |
| Socioeconomic behavior | Pricing, control, visibility, thresholds, unequal participation resources, and compliance framing can alter participation or create gaming risks ([Explorer 4](research.md) (lines 175–215)). | Behavioral warning and fixture-question precedent. | Study authors own their empirical results; the subtower owns the bridge reading. | No source tests delayed contextualization or supports automatic reward, reputation, payout, or authority ([Explorer 4](research.md) (lines 217–227)). |

The integrated pipeline has no admitted precedent owner, deployment, or
validation. Its conflict controls, frozen evidence classes, non-collapse fields,
and deterministic checks are local proposals; source convergence does not
promote them into established safeguards.

## Common Fixture Contract

E1–E4 must extend the existing contribution-edge schema rather than create a
parallel evidence grammar:

```yaml
fixture_id:
local_research_status: research-pass | research-flag | research-block
source_posture:
source_refs: []
input_event:
observed_signal:
review_action:
expected_credit_state: result_scoped | none
forbidden_state_mutations: []
hypothesis:
receipt_ref:
result_ref:
claimant_ref:
result_link_evidence_class:
exact_relevance_path:
evidence_refs: []
joint_dependency_refs: []
counterfactual_statement:
comparison_case_ref:
uncertainty:
reviewer_ref:
conflict_state: clear | recused | unresolved
review_criteria_version:
expected_disposition: accepted | rejected | held
er_d10_adversarial_pattern:
typed_negative:
deterministic_check:
review_check:
reward_effect: none
payout_effect: none
reputation_effect: none
governance_effect: none
authority_effect: none
policy_effect: none
implementation_status: fixture_only
owner_route:
blocked_escalation:
open_residue:
```

`expected_credit_state` is the required base-schema field and carries the
proposed `result_scoped | none` state; there is no parallel
`expected_reviewed_credit_state` field. `expected_disposition` records the
separate review outcome that determines which of those credit states is
expected.

Deterministic checks must reject missing required fields, self-witness-only
claims, unresolved reviewer conflicts presented as final, unknown evidence
classes, mismatches between expected class/disposition, and any non-`none`
effect field. They must produce an exact tuple:

```text
NO_EFFECTS = {reward:none, payout:none, reputation:none,
              governance:none, authority:none, policy:none}

(review_disposition, result_link_evidence_class,
 expected_credit_state, NO_EFFECTS)
```

Only a contextual reviewer assesses whether the evidence supports the path;
deterministic completeness is not evidence of relevance. Formal precedents
warn that reasonable baselines or graphs can reverse attribution ([Explorer 3](research.md) (lines 140–165)).

## Four Single-Hypothesis Experiment Handoffs

These are pre-registered fixture handoffs, not executed experiments. Each tests
only whether the proposed review grammar yields the named dispositions on
instantiated cases.

### E1 — Governance call to proposal result

**Hypothesis:** given a stable call record and stable proposal diff, review
distinguishes an evidenced path from attendance alone.

- Positive: timestamped call contribution is quoted in a versioned proposal
  diff and confirmed by an independent artifact witness. Expected
  `(accepted, trace-linked, result_scoped, NO_EFFECTS)`.
- Negative: same attendance receipt, but no utterance/artifact path appears in
  the proposal history. Expected
  `(rejected, unlinked, none, NO_EFFECTS)`.
- Held: a call note suggests the idea, but record identity or proposal
  provenance is disputed. Expected
  `(held, bridge-linked, none, NO_EFFECTS)`.
- Comparator: keep call, topic, proposal, and timing stable; vary only the
  quoted/versioned path evidence.
- Kill: the criteria accept attendance-only, reject the stable trace, or change
  under an irrelevant event insertion.
- Gaming case: duplicate attendance receipts, retrospective note edits,
  claimant-only witnessing, and reciprocal reviewers must not produce
  acceptance.

Attendance can be credentialized without establishing contribution, and no
source demonstrates a causal call-to-governance-innovation rule ([Explorer 1](research.md) (lines 55–62 and 77–81)).

### E2 — Directed study to technical result

**Hypothesis:** review distinguishes an exact studied technique carried into a
commit from study time or topic similarity alone.

- Positive: dated study note names an exact technique; the commit implements
  it; version history and an independent provenance witness connect the two.
  Expected `(accepted, trace-linked, result_scoped, NO_EFFECTS)`.
- Negative: study occurred in the same broad subject, but the commit uses a
  different technique and has no transfer path. Expected
  `(rejected, general-capacity/no-result-link, none, NO_EFFECTS)`.
- Held: the technique matches but note or commit provenance is incomplete or
  contested. Expected
  `(held, trace-linked, none, NO_EFFECTS)`.
- Comparator: same task and commit quality, with versus without stable evidence
  of the exact technique transfer.
- Kill: duration, course completion, or subject similarity changes disposition
  without the provenance path.
- Gaming case: copied study notes, post-hoc timestamps, generic vocabulary, and
  self-witness-only provenance must not produce acceptance.

The science corpus does not support study time as contribution by itself, and
role/acknowledgement vocabularies do not resolve contribution quality
([Explorer 2](research.md) (lines 93–101 and 115–122)).

### E3 — Mentoring or maintenance to team result

**Hypothesis:** review distinguishes an exact, evidenced dependency used by a
team result from generic helping hours or maintenance presence.

- Positive: a versioned maintenance fix or mentoring artifact removes a named
  blocker used by the result; contributor and recipient records plus an
  independent repository trace agree. Expected
  `(accepted, bridge-linked, result_scoped, NO_EFFECTS)`.
- Negative: mentoring/maintenance occurred, but the result neither used it nor
  depended on it. Expected
  `(rejected, general-capacity/no-result-link, none, NO_EFFECTS)`.
- Held: the dependency is plausible, but recipient accounts or repository
  traces conflict. Expected
  `(held, bridge-linked, none, NO_EFFECTS)`.
- Comparator: matched team results with and without the named blocker-removal
  path.
- Kill: generic help time, contributor status, or result success substitutes
  for the exact dependency evidence.
- Gaming case: mutual credit rings, split duplicate claims, invisible-work
  erasure, and reviewer-reviewed conflicts must block or hold acceptance.

Formal one-agent subtraction may erase complementary mentoring, maintenance,
or coordination and depends on evaluator-controlled baselines ([Explorer 3](research.md) (lines 140–147)); therefore this fixture records joint
dependencies but computes no individual total.

### E4 — Cross-domain transfer and relatedness

**Hypothesis:** with evidence classes frozen before review, an explicit transfer
path can be distinguished from subject similarity and an unrelated activity.

- Positive: an earlier method from domain A is named in a versioned bridge
  artifact and changes the result in domain B. Expected
  `(accepted, bridge-linked, result_scoped, NO_EFFECTS)`.
- Negative: an earlier activity shares neither an explicit transfer path nor a
  relevant artifact with the result. Expected
  `(rejected, unlinked, none, NO_EFFECTS)`.
- Held: a bridge artifact exists, but its use by the result is materially
  disputed. Expected
  `(held, bridge-linked, none, NO_EFFECTS)`.
- Comparator: same cross-domain subject distance, varying only evidence of the
  explicit bridge and result use.
- Kill: reviewer topic familiarity or subject similarity changes the expected
  class; post-review class changes rescue a failing claim.
- Gaming case: keyword stuffing, broad expertise assertions, relabeled generic
  training, and bridge artifacts created after the result must not produce
  acceptance.

No admitted source resolves cross-context relatedness, and model-relative
attribution must remain plural when reasonable specifications reverse results
([Explorer 1](research.md) (lines 77–81); [Explorer 3](research.md) (lines 160–165)).

### E5 — Preventive or negative work: prior-art handoff only

Preventive work is outside the admitted corpus. It is not experiment-ready.
The candidate shape is an earlier intervention, a specific avoided failure, an
observable counterfactual/comparison case, an independent witness, uncertainty,
and a no-effect boundary. Before any fixture is designed, run a bounded
prior-art sweep across safety engineering, incident prevention, security,
maintenance, and counterfactual evaluation. The sweep must ask when a
non-event can be evidenced without inventing causality and return supported
claims, bridge risks, and falsifiers. Current sources do not handle endogenous
objective choice or supply a socially valid counterfactual rule ([Explorer 3](research.md) (lines 137–165)).

## Aggregation Answer

Do not compute an aggregation mechanism at this stage. In particular, do not
create person totals, rankings, reputation, time accounts, stored balances, or
cross-result scores. Mutable scalar precedents can reweight history and collapse
score into money/access/governance ([Explorer 1](research.md) (lines 37–53));
formal scalarization hides disputed weights ([Explorer 3](research.md) (lines 149–165)).

The only admissible candidate read models are:

1. a result-link case set: accepted, rejected, and held claims grouped by one
   result;
2. a vector evidence view that preserves provenance, link class, uncertainty,
   joint dependencies, and disposition without a total;
3. an edge/joint-dependency graph with alternative-graph sensitivity and no
   graph-as-truth claim; and
4. a result-centred dossier for contextual review and appeal.

Caps, decay, concavity, expiry-as-value-loss, and diminishing returns are
removed from the candidate until a named use, unit, owner, and witness exist.
The formal corpus supplies no socially legitimate cap, curve, or half-life
([Explorer 3](research.md) (lines 152–165)).

## Step-by-Step Repository Walkthrough

1. **Orient.** Read `.arcanum/inventory/index.md`, `AGENTS.md`, `README.md`, and
   `GUIDE.md`; state the four gate checks.
2. **Read the evidence boundary.** Start from this file and `research.md`; do
   not treat explorer or reviewer convergence as validation.
3. **Register the terms.** Route the relevance-claim, review-disposition, and
   result-link-class candidates to the definitions owner under ER-D23. Stop if
   they remain unregistered.
4. **Extend the existing fixture grammar.** Add E1–E4 only inside
   `validation/contribution-edge-fixtures/`, preserving its schema, typed
   negatives, appeal/recusal route, and all non-collapse defaults.
5. **Instantiate three cases per experiment.** Use stable local artifact refs
   for one positive, one negative, and one held case. Do not invent evidence to
   complete a fixture.
6. **Freeze before review.** Record evidence class, criteria version,
   comparator, expected tuple, kill condition, and ER-D10 gaming case before
   evaluating the case.
7. **Run deterministic checks.** Validate fields, enum values, conflict state,
   expected class/disposition compatibility, and all-`none` effects.
8. **Run contextual review.** Use an independent reviewer; recuse conflicts;
   emit exactly `accepted`, `rejected`, or `held` with assumptions and residue.
9. **Compare expected and observed tuples.** Any mismatch is a fixture finding,
   not a reason to rewrite the expected outcome after the fact.
10. **Report without promotion.** Record all cases, including failures and
    holds. Route reusable results through sources/claims/subtower/inventory only
    after their respective owner checks. End before reward or authority.

## Failure and Farming Model

| Attack | Observable failure | Required negative/control |
| --- | --- | --- |
| Attendance or time farming | More receipts create acceptance without a result link. | Duplicate/time-only records retain no credit state. |
| Retrospective entitlement | Receipt holders expect eligibility despite `none` effects. | Comprehension/behavior check; any entitlement pathway remains out of pipeline. Optimism and POAP expose this risk ([Explorer 1](research.md) (lines 19–26 and 55–62)). |
| Recency and visibility capture | Recent/public work receives different disposition under equal evidence. | Blind or order-swapped matched dossiers; visibility does not alter tuple. Coordinape and behavioral sources motivate the check ([Explorer 1](research.md) (lines 28–35); [Explorer 4](research.md) (lines 196–208)). |
| Unilateral history rewriting | Claimant or gatekeeper reconstructs an uncontested causal story. | Contemporaneous refs plus independent witness; otherwise reject or hold. Disclosure precedent shows unilateral attribution risk ([Explorer 2](research.md) (lines 103–104)). |
| Cumulative status prior | Previously accepted people receive easier acceptance. | Reviewer sees result-link evidence without prior person totals/status. Early recognition can compound later advantage ([Explorer 2](research.md) (lines 109–113)). |
| Duplicate/Sybil path | One person or event appears as multiple independent claims. | Deduplicate identity/event without letting identity score decide credit; unresolved cases hold ([Explorer 1](research.md) (lines 64–71)). |
| Reviewer capture/reciprocity | Conflicted reviewers exchange acceptance. | Conflict declaration, recusal, reviewer-reviewed independence, appeal. |
| Model/graph laundering | A chosen DAG, baseline, or weight is presented as factual attribution. | Preserve alternatives and uncertainty; disagreement holds or rejects rather than scalarizing ([Explorer 3](research.md) (lines 140–165)). |
| Compliance and motivation crowd-out | Evidence work becomes mandatory record production or status theater. | Optional-vs-compliance and private-vs-public control questions; no general behavioral claim. Relevant studies show context-specific crowding and visibility effects ([Explorer 4](research.md) (lines 175–215)). |
| Invisible-work erasure | No receipt is treated as proof of no contribution. | Preserve open residue; never infer zero from missing observation. |

Passing these controls would show only that the instantiated fixture behaved as
specified. It would not prove anti-gaming, fairness, economic safety, or general
validity.

## Reviewer Convergence

The dispatch runtime reviews produced three binding corrections:

- **Myerson (precedent):** separate component precedent from pipeline ownership;
  give the official source only its vocabulary/boundary ownership and give
  formal models no social-legitimacy role.
- **Popper (non-vacuity):** replace open-ended experiment language with
  instantiated positive/negative/held cases, exact expected tuples, comparators,
  kills, and gaming cases; E5 remains corpus work.
- **Quine (definition):** treat relevance claim, disposition, and result-link
  class as ER-D23 candidates, freeze their semantics before fixtures, and kill
  financial aliases.

These are internal dispatch review receipts, not external evidence and not
validation. Their convergence changed the candidate from an investment-like
mechanism into a narrower definition-and-fixture handoff.

## Candidate Verdict Matrix

| Candidate | Precedent status | Actual owner | Witnessed? | Soundness now | Verdict |
| --- | --- | --- | --- | --- | --- |
| Investment/cashing mechanism | Official boundary conflicts; no admitted enabling owner ([Explorer 5](research.md) (lines 247–267)). | None admitted. | No. | Entitlement and financial-framing collapse. | **KILL**. |
| Prior-activity ER-D5 receipt instance | Temporal-record/component precedent only ([Explorer 1](research.md) (lines 28–35 and 55–73)). | Local definitions and fixture owners for research form only. | No local E1–E4 case. | Plausible as non-credit metadata if privacy/invisible-work limits hold. | **REVISE / register and instantiate**. |
| Prior-Activity-to-Result Relevance Claim | Result-specific description has related precedent, not DAO validation ([Explorer 2](research.md) (lines 97–121)). | No integrated mechanism owner; proposed local definitions owner. | No. | Incomplete until ER-D23 registration and cases. | **REVISE**. |
| Result-Link Evidence Class | Graph/edge and specific-project precedents are conditional ([Explorer 2](research.md) (lines 106–107); [Explorer 3](research.md) (lines 143–158)). | Proposed local definitions owner. | No. | Search/topic similarity must remain non-decisive. | **REVISE**. |
| Accepted result-scoped ER-D7 record | Local method authority already separates credit from reward/authority; external evidence does not validate this application. | Local fixture/review owner only. | No E1–E4 case. | Boundary is coherent; application untested. | **REVISE / fixture**. |
| Person-level aggregation, caps, or decay | No socially legitimate rule admitted ([Explorer 1](research.md) (lines 77–81); [Explorer 3](research.md) (lines 152–165)). | None admitted. | No. | Units, use, owner, and witness absent. | **DEFER / exclude**. |
| E1–E4 package | Source-shaped questions only; no source validates their criteria. | Local fixture owner after definition registration. | Not instantiated or run. | Single-hypothesis shapes are now falsifiable. | **REVISE / instantiate**. |
| E5 preventive-work case | Out of admitted corpus. | Unassigned prior-art subtower handoff. | No. | Counterfactual basis absent. | **DEFER to bounded sweep**. |

## Gate Outcomes

| Gate | Outcome | Condition for next research move |
| --- | --- | --- |
| Precedent/ownership | **FLAG — component precedents only; integrated-pipeline ownership absent** | Preserve the five-lane ownership boundaries; do not say any source owns or validates the integrated pipeline. |
| Definition/non-drift | **BLOCK before fixture use — three load-bearing terms remain unregistered under ER-D23** | Register all three load-bearing candidates under ER-D23, including `Open / to-ground`, before fixture use. |
| Non-vacuity | **FLAG — handoffs are specified, but instantiated and executed witnesses remain absent** | Instantiate E1–E4 in actual fixture files and run checks that produce the pre-registered expected tuples. Until those witnesses exist, block every validation claim. |
| Policy/authority | **PASS for research-only continuation** | Pipeline ends at result-scoped ER-D7; every reward, payout, reputation, governance, authority, policy, and implementation effect stays `none`. |
| Overall | **REVISE / fixture-instantiation candidate** | No mechanism PASS, validation claim, deployment, or promotion. |

## Subtower Routing Recommendations

- **Official whitepaper:** route one card for activity vocabulary, attendance
  warning, unresolved validation/anti-farming, non-investment boundary, and
  explicit absence of linkage/aggregation ownership ([Explorer 5](research.md) (lines 233–267)).
- **Failed DAO/crypto:** route six source cards with entitlement, recency,
  mutable-score, authority-collapse, attendance-farming, and identity-score
  bridge risks intact ([Explorer 1](research.md) (lines 17–81)).
- **Science of science:** route six cards as related evidence for typed records,
  result-specific scope, unilateral attribution, delayed recognition, and
  cumulative advantage; do not translate authorship thresholds into DAO credit
  ([Explorer 2](research.md) (lines 95–122)).
- **Formal mechanisms:** route six cards as conditional representation tools
  and falsifiers; explicitly block math-to-merit and math-to-legitimacy
  inference ([Explorer 3](research.md) (lines 124–165)).
- **Socioeconomic behavior:** route six cards as context-bound warning evidence
  for pricing, control, unequal access, visibility, thresholds, and compliance;
  do not claim DAO effect magnitude or persistence ([Explorer 4](research.md) (lines 167–227)).

## Visible Residue

- No admitted source tests the integrated deferred contextualization pipeline
  or validates attendance/study/mentoring/maintenance-to-result attribution
  ([Explorer 2](research.md) (lines 115–122); [Explorer 4](research.md) (lines 217–227)).
- The three load-bearing candidate definitions are unregistered.
- E1–E4 have no actual fixture files, executed checks, reviewer observations,
  privacy analysis, appeal timing, or evidence-burden rule.
- There is no admitted owner or evidence for aggregation, caps, decay, or
  cross-result person scoring ([Explorer 1](research.md) (lines 75–81);
  [Explorer 3](research.md) (lines 160–165)).
- Subject similarity remains triage-only; cross-domain relatedness is open.
- Retrospective consent, record visibility, deletion/redaction, contributor
  confirmation, duplicate claims, reviewer capacity, and cumulative advantage
  remain unresolved ([Explorer 2](research.md) (lines 103–122);
  [Explorer 3](research.md) (lines 160–165)).
- E5 requires a separate bounded prior-art sweep before a fixture proposal.
- Even exact E1–E4 tuple matches would validate only those fixture executions,
  not the mechanism, economy, fairness, anti-gaming, policy, or authority.
