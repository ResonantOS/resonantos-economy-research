# Local Definition Cards

Status: active
Promotion scope: local-research-only
Canonical source: yes

These definitions are local research definitions for the ResonantOS economy
research tower. They do not define ResonantDAO policy, token policy, bounty
policy, governance weight, payout rules, launch readiness, or implementation
contracts.

Each card keeps three voices together:

- Formal voice: the normative local meaning and boundary.
- Plain-language voice: non-normative intuition.
- Domain-context voice: how the term is used in this repository now.

## ER-D1. Economy Resilience

Source kind: operator-reading; local-inference

Evidence: [README.md](../README.md), [levels/L1-residue-map.md](../levels/L1-residue-map.md)

Formal voice:

```text
economy_resilience =
  contribution_value_visible
  AND reward_gaming_bounded
  AND authority_not_promoted_by_signal
  AND treasury_or_financial_risk_gated
  AND community_mentalities_do_not_collapse_to_task_extraction
```

Plain-language voice: the economy keeps rewarding real work even after
participants learn the reward rules.

Domain-context voice: this is the repo's top-level research target. It is a
candidate condition to study, not a proven invariant.

Definition lifecycle: `grounded` under ER-D23, meaning tracked enough for local
research use at this source posture and promotion boundary.

Economy-condition status: `candidate`. The conjunct set is the current research
target; it is not validated, official, proven, fixture-passed, promoted,
policy-ready, or implementation-ready.

Use carefully: future versions need workflow witnesses or typed negatives for
each conjunct.

Required witness/challenge matrix (current status: open):

| Conjunct | Source posture | Witness or typed negative | Collapse test / attack lane | Current route |
| --- | --- | --- | --- | --- |
| `contribution_value_visible` | operator-reading; local-inference | open | A workflow where contribution value cannot be made visible without erasing important invisible work would force revision. | ER-D23 `grounded` definition / candidate condition |
| `reward_gaming_bounded` | operator-reading; local-inference | open | A witnessed reward path that is profitably farmed without useful contribution would force revision or split. | ER-D23 `grounded` definition / candidate condition |
| `authority_not_promoted_by_signal` | operator-reading; local-inference | open | A witnessed path where signal alone changes authority, governance power, or launch readiness would zero this conjunct. | ER-D23 `grounded` definition / candidate condition |
| `treasury_or_financial_risk_gated` | operator-reading; local-inference; open-residue | open | A financial mechanism that bypasses Phase-2 gates or treats candidate treasury/runway terms as readiness would force revision. | ER-D23 `grounded` definition / candidate condition |
| `community_mentalities_do_not_collapse_to_task_extraction` | operator-reading; local-inference | open | A witnessed incentive loop where contributors optimize task extraction over community purpose would force revision. | ER-D23 `grounded` definition / candidate condition |

Misuse warning: do not equate resilience with token price stability,
participation volume, or clean audits.

Promotion boundary: promotion-candidate

## ER-D2. Authority-Separated Credit

Source kind: method-authority; local-inference

Evidence: [authority/source-spine.md](../authority/source-spine.md),
[sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md](../sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md),
[harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md)

Formal voice:

```text
credit_signal may_route attention_or_eligibility
credit_signal must_not_route authority_without_owner_gate
```

Plain-language voice: contribution can matter without letting a scoreboard
govern the system.

Domain-context voice: this is the first preferred development lane for this
repo: one contribution edge may become bounded credit while authority remains
unchanged.

Use carefully: it permits attention routing only through declared gates.

Misuse warning: do not use it to imply credit has no consequences, or that
credit can become governance power by accumulation.

Promotion boundary: promotion-candidate

## ER-D3. Bounty-Optimization Trap

Source kind: operator-reading; local-inference

Evidence: [AGENTS.md](../AGENTS.md), [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md)

Formal voice:

```text
visible_reward_rule -> participant_strategy_update -> extraction_of_reward_rule
```

Plain-language voice: once the system pays for a named task, some actors may
specialize in harvesting that task instead of improving the commons.

Domain-context voice: this is a required failure lens before any bounty,
reward, payout, or task-compensation design.

Use carefully: it is a design hazard, not a moral accusation against
contributors.

Misuse warning: do not use it to block all explicit tasks; use it to demand
review, rotation, delayed credit, anti-collusion, and maintenance incentives.

Promotion boundary: promotion-candidate

## ER-D4. Credit-Before-Money Sequencing Hypothesis

Candidate control: `credit-before-money-sequencing-hypothesis`

Source kind: method-authority; product-research precedent; local-inference

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/cav2/evidence-exchange/proposal-blueprint.md](../sources/local-snapshots/cav2/evidence-exchange/proposal-blueprint.md)

Formal voice:

```text
phase1_sequence may_test reviewed_credit_and_recognition
phase1_sequence must_not_imply payout_or_token_readiness
```

Plain-language voice: learn whether contribution credit is meaningful before
designing money flows around it.

Domain-context voice: this is the repo's near-term sequencing discipline for
Phase 1 research, not evidence that contributors already value non-monetary
credit.

Use carefully: pair it with behavioral evidence and a workflow witness.

Misuse warning: do not convert it into token payout, bounty policy, governance
weight, launch readiness, or a claim that credit is enough.

Promotion boundary: local-research-only

## ER-D5. One Observed Surface Receipt Candidate

Candidate control: `one-observed-surface-receipt-candidate`

Source kind: product-research precedent; local-inference

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/cav2/evidence-exchange/proposal-blueprint.md](../sources/local-snapshots/cav2/evidence-exchange/proposal-blueprint.md)

Formal voice:

```text
receipt_candidate =
  host_surface_id
  + observed_event_reference
  + review_status
  + privacy_boundary
  + no_authority_effect
```

Plain-language voice: start with one narrow trace of observed use, then review
it before calling it contribution evidence.

Domain-context voice: this is the first possible witness substrate for a
contribution-edge fixture. It is not a universal tracking system.

Use carefully: name invisible-work exclusions and redaction boundaries.

Misuse warning: do not treat self-declared attribution, automated tracking, or
a receipt candidate as proof of contribution.

Promotion boundary: local-research-only

## ER-D6. Observed Signal

Candidate control: `observed-signal-not-credit`

Source kind: method-authority; formalization-precedent; local-inference

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/domainspec-lean/FRAMEWORK-IMPLICATIONS.md](../sources/local-snapshots/domainspec-lean/FRAMEWORK-IMPLICATIONS.md)

Formal voice:

```text
observed_signal may_route attention
observed_signal != reviewed_credit
observed_signal != reward
observed_signal != authority
```

Plain-language voice: seeing that something happened is not the same as
deciding what it means.

Domain-context voice: every future claim or inventory entry about observed use,
audit hits, citations, reuse, or activity must keep this field separate from
credit, reward, and authority.

Use carefully: record source kind, review status, assumptions, and residue.

Misuse warning: do not let observed activity become automatic credit, payout,
truth, or governance power.

Promotion boundary: local-research-only

## ER-D7. Reviewed Credit Record

Candidate control: `credit-record-not-reward`

Source kind: method-authority; local-inference

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md](../sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md)

Formal voice:

```text
reviewed_credit_record =
  reviewed_contribution_evidence
  + scope
  + status
  + assumptions
  + no_reward_entitlement
  + no_authority_effect
```

Plain-language voice: a review can say "this counts as useful evidence" without
saying "pay this" or "give this person power."

Domain-context voice: this is the bounded credit unit the first witness should
produce after review.

Use carefully: attach scope, reviewer context, appeal path, and expiry or
revision rules.

Misuse warning: do not treat credit as payout entitlement, final reputation,
anti-gaming proof, or governance authority.

Promotion boundary: local-research-only

## ER-D8. Attention Route

Candidate control: `attention-route-not-authority`

Source kind: method-authority; open-residue

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md](../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)

Formal voice:

```text
attention_route may_prioritize review_or_maintenance
attention_route must_not_change governance_authority
attention_route must_include capture_check
```

Plain-language voice: signals can help decide what humans look at next, but
visibility is not power.

Domain-context voice: this term names the allowed near-term use of signals in
the first contribution-edge design.

Use carefully: include attention-capture, reviewer-bottleneck, and incumbency
checks.

Misuse warning: do not let repeated visibility become de facto authority.

Promotion boundary: local-research-only

## ER-D9. Owner Route

Candidate control: `owner-route-authority-only`

Source kind: method-authority

Evidence: [authority/AUTHORITY-MODEL.md](../authority/AUTHORITY-MODEL.md),
[authority/promotion-policy.md](../authority/promotion-policy.md),
[harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md)

Formal voice:

```text
authority_change requires smallest_applicable_owner_route
research_result alone cannot_change authority
```

Plain-language voice: the right owner has to say yes before a research result
starts governing work.

Domain-context voice: this separates repo-local synthesis from ResonantDAO,
token, bounty, governance, payout, or product decisions.

Use carefully: name the owner route before any artifact tries to constrain
policy or implementation.

Misuse warning: consensus, popularity, inventory entries, validation runs, or
scores are not owner decisions.

Promotion boundary: active local authority term

## ER-D10. Credit-Gaming Failure Fixture

Candidate control: `credit-gaming-failure-fixtures`

Source kind: local-inference; negative selector; formalization-precedent

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/domainspec-lean/GLOSSARY.md](../sources/local-snapshots/domainspec-lean/GLOSSARY.md)

Formal voice:

```text
credit_gaming_fixture =
  adversarial_pattern
  + expected_failure_or_block
  + witness_data
  + no_payout_claim
  + no_solved_anti_gaming_claim
```

Plain-language voice: before trusting credit, build examples where credit should
fail or be resisted.

Domain-context voice: this is the bridge from harvested controls into
research-evidence-harness work for duplicate paths, collusion, self-report,
reciprocal review, spam, and review capture. Self-report independence (an actor
cannot be the sole witness for their own credit) and reviewer-reviewed
independence are fixture cases here, not separate definitions.

Use carefully: start with negative fixtures before positive scoring claims.

Misuse warning: do not rename fixture design as conserved credit, payout
safety, or solved anti-gaming.

Promotion boundary: local-research-only

## ER-D11. Candidate Contribution Taxonomy

Candidate control: `candidate-contribution-taxonomy-not-entitlement`

Source kind: product-research precedent; local-inference

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[glossary/GLOSSARY.md](../glossary/GLOSSARY.md)

Formal voice:

```text
candidate_contribution_taxonomy names work_classes
candidate_contribution_taxonomy must_not grant entitlement_or_authority
```

Plain-language voice: the repo can name kinds of work without deciding what
they are worth.

Domain-context voice: this is seed vocabulary for reuse, verification,
maintenance, packaging, distribution, review, and contradiction-finding labor.

Use carefully: require peer-production and science-credit bridge evidence before
broad reuse.

Misuse warning: do not treat a category as property, payout entitlement, expert
authority, or a complete labor model.

Promotion boundary: local-research-only

## ER-D12. Phase 2 Financial Blocker Register

Candidate control: `phase2-financial-blocker-register`

Source kind: method-authority; open-residue; formalization-precedent

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[authority/promotion-policy.md](../authority/promotion-policy.md)

Formal voice:

```text
phase2_financial_blocker_register lists blockers
phase2_financial_blocker_register != unlock_checklist
phase2_financial_blocker_register cannot authorize financial_mechanism
```

Plain-language voice: the list says what remains unsafe, not what is unlocked.

Domain-context voice: this keeps identity, funding, wallet/security, legal/tax,
privacy, anti-gaming, governance, and human approval in the blocked lane until
evidence exists.

Use carefully: add blockers when a financial mechanism is discussed.

Misuse warning: do not use the register as Phase 2 readiness, token policy,
payout design, DAO distribution, bounty program, or launch path.

Promotion boundary: blocked

## ER-D13. Privacy Redaction Policy Prerequisite

Candidate control: `privacy-redaction-policy-prerequisite`

Source kind: method-authority; open-residue

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md](../sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md)

Formal voice:

```text
public_lineage_reuse requires privacy_redaction_policy
privacy_redaction_policy must_name excluded_private_context
```

Plain-language voice: do not publish contribution lineage until private context
has a real scrub rule.

Domain-context voice: this is a prerequisite before public attribution,
published receipts, or reusable lineage exports.

Use carefully: include prompt, memory, client, wallet, source-text, and
maintainer-context boundaries.

Misuse warning: do not claim redaction is safe just because a receipt is useful.

Promotion boundary: blocked until policy and fixture exist

## ER-D14. Invariant Drafting Route

Candidate control: `invariant-drafting-route-open-witness-or-typed-negative`

Source kind: method-authority; formalization-precedent

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/domainspec-lean/theorem/README.md](../sources/local-snapshots/domainspec-lean/theorem/README.md)

Formal voice:

```text
candidate_invariant requires workflow_witness OR typed_negative
candidate_invariant != proof_of_economy_safety
```

Plain-language voice: an invariant draft must point to something testable or to
the exact negative case it blocks.

Domain-context voice: this is the drafting rule for moving from research text
into L1/L2 residue, closure plans, and evidence harness requests.

Use carefully: keep assumptions and residue visible.

Misuse warning: do not treat elegant wording as validation.

Promotion boundary: local-research-only

## ER-D15. Claim Status Field Discipline

Candidate control: `claim-status-field-discipline`

Source kind: formalization-precedent

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/domainspec-lean/README.md](../sources/local-snapshots/domainspec-lean/README.md)

Formal voice:

```text
claim_record requires claim_status + witness_source + assumptions + open_residue
status_label != mechanism_validation
source_posture != evidence_status
evidence_status != confidence_status
observed_signal != reviewed_credit
reviewed_credit != reward_effect
reviewed_credit != authority_effect
claim_status != lifecycle_stage
claim_status != policy_effect
claim_status != implementation_status
```

Plain-language voice: every claim needs a visible tag for how strong it really
is.

Domain-context voice: this applies to claims, inventory entries, definitions,
validation notes, and future evidence-harness outputs.

Use carefully: use labels to demote claims, not to decorate them.

Misuse warning: green builds, prize labels, theorem analogies, status labels,
fixture passes, validator specs, lifecycle stages, or inventory entries do not
validate economy mechanisms.

Promotion boundary: active local discipline

## ER-D16. Multi-Axis Economy Audit

Candidate control: `multi-axis-economy-audit-discipline`

Source kind: formalization-precedent; analogy

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/local-snapshots/domainspec-lean/FRAMEWORK-IMPLICATIONS.md](../sources/local-snapshots/domainspec-lean/FRAMEWORK-IMPLICATIONS.md)

Formal voice:

```text
economy_audit =
  mechanism_form_check
  + behavior_check
  + temporal_gaming_check
  + attention_capture_check
  + governance_loop_check
```

Plain-language voice: a clean check on one layer does not make the whole
economy safe.

Domain-context voice: this defines the audit lanes for the first
contribution-edge witness and later mechanism sketches.

Use carefully: keep axes separate in result summaries.

Misuse warning: do not collapse audit axes into one score or verdict.

Promotion boundary: local-research-only

## ER-D17. Source-Bridge Demotion Intake Rule

Candidate control: `source-bridge-demotion-intake-rule`

Source kind: formalization-precedent; analogy; open-residue

Evidence: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md),
[sources/source-records.md](../sources/source-records.md)

Formal voice:

```text
source_intake requires source_kind + bridge_status + falsifier + local_relevance
external_or_local_lineage must_be_demoted_before_reuse
```

Plain-language voice: imported ideas arrive with labels and limits before they
can influence local design.

Domain-context voice: this governs future external DAO, science-credit,
behavioral, mechanism-design, legal, privacy, and local lineage reuse.

Use carefully: preserve bridge decisions and falsifiers near every reused
source claim.

Misuse warning: do not import CAv2, Lean, DAO, academic, or crypto vocabulary as
ResonantDAO policy by proximity.

Promotion boundary: active local discipline

## ER-D18. Local Research Status Vocabulary

Candidate control: `closed-local-research-status`

Source kind: synthesis; review-findings; method-authority

Evidence: [harvest/cav2-authority-lifecycle/findings.md](../harvest/cav2-authority-lifecycle/findings.md),
[reviews/cav2-lean-development-pack-review/findings.md](../reviews/cav2-lean-development-pack-review/findings.md),
[validation/README.md](../validation/README.md)

Formal voice:

```text
local_research_status in {research-pass, research-flag, research-block}
research-pass != validation_proof
research-pass != PromotionRecord
research-pass != implementation_readiness
research-pass != reward_eligibility
research-pass != governance_weight
research-pass != policy_effect
research-pass != authority_effect
```

Plain-language voice: a local pass only means "this research artifact can move
to its next research step."

Domain-context voice: this vocabulary replaces ambiguous `pass`, `flag`, and
`block` wording in validation scaffolds, closure plans, inventory summaries,
and fixture reports. It is deliberately local and research-only.

Use carefully: pair every status with owner route, source posture, falsifier,
fixture or typed negative, and next check.

Misuse warning: do not use `research-pass` as evidence of safety, launch
readiness, implementation readiness, reward eligibility, governance weight, or
policy approval.

Promotion boundary: active local discipline

## ER-D19. Implementation Boundary Plan

Candidate control: `implementation-boundary-not-readiness`

Source kind: synthesis; review-findings; method-authority

Evidence: [harvest/cav2-authority-lifecycle/findings.md](../harvest/cav2-authority-lifecycle/findings.md),
[development/cav2-lean-findings-development-pack.md](../development/cav2-lean-findings-development-pack.md),
[sources/local-snapshots/cav2/implementation/README.md](../sources/local-snapshots/cav2/implementation/README.md)

Formal voice:

```text
implementation_boundary_plan =
  source_expansion_queue
  + owner_route_table
  + fixture_contracts
  + validation_handoff_conditions
  + task_session_blocks

implementation_boundary_plan != implementation_readiness
implementation_boundary_plan != implementation_contract
```

Plain-language voice: it says what must be true before implementation can even
be considered.

Domain-context voice: this is the design/planning surface this repo may use
next. It can organize prerequisites for a future task-session, but it cannot
start a build or certify readiness.

Use carefully: keep every future work unit tied to a gate, fixture, owner
route, or source-expansion item.

Misuse warning: do not rename a boundary plan into implementation approval,
product readiness, token policy, bounty policy, governance policy, or launch
readiness.

Promotion boundary: local-research-only

## ER-D20. Reciprocal Return Candidate

Candidate control: `reciprocal-owned-build-return`

Source kind: synthesis; review-findings; local-inference

Evidence: [harvest/cav2-authority-lifecycle/findings.md](../harvest/cav2-authority-lifecycle/findings.md),
[harvest/cav2-authority-lifecycle/reviewer-positions.md](../harvest/cav2-authority-lifecycle/reviewer-positions.md),
[sources/local-snapshots/cav2/authority/imports/resonantos-economy-research/README.md](../sources/local-snapshots/cav2/authority/imports/resonantos-economy-research/README.md)

Formal voice:

```text
reciprocal_return_candidate =
  source_ids
  + blocked_uses
  + owner_route
  + unresolved_findings
  + no_cyclic_citation_promotion

reciprocal_return_candidate != CAv2_authority
reciprocal_return_candidate != ResonantOS_economy_proof
```

Plain-language voice: a return package can show useful work, but it cannot
make itself authoritative by being neatly packaged.

Domain-context voice: this governs any future package sent back to
CyberAlchemy v2 as candidate owned-build evidence. It stays deferred until
independent CAv2 owner review.

Use carefully: include the unresolved FIX findings and public/private scrub
status in the manifest.

Misuse warning: do not promote a claim in either repository using a reciprocal
citation chain alone.

Promotion boundary: deferred CAv2 return candidate

## ER-D21. Signal-to-Authority Cascade Collapse

Candidate control: `cascade-collapse-must-be-gated`

Source kind: operator-reading; local-inference

Evidence: [dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) §0.3,
[NOTATION.md](../NOTATION.md) (reading warning),
[distills/DISTILLED-KNOWLEDGE.md](../distills/DISTILLED-KNOWLEDGE.md)

Formal voice:

```text
cascade_collapse =
  activity_metric -> reward -> status -> governance_influence -> authority

economy_resilience requires each_arrow gated_or_broken_until_evidence
```

Plain-language voice: the core failure is letting one gameable scoreboard flow
from "what happened" all the way to "who has power."

Domain-context voice: this names the central risk the tower exists to prevent.
ER-D1 resilience rides on breaking or gating each arrow of the cascade; the
notation reading-warning and the one-sentence distill are informal pointers to
this canonical lens.

Use carefully: each arrow is a separate gate; do not assume breaking one arrow
breaks the rest.

Misuse warning: naming the cascade is not preventing it. Do not treat a single
gate, or the existence of this definition, as proof of resilience.

Promotion boundary: promotion-candidate

## ER-D22. Costly-Identity Prerequisite

Candidate control: `costly-identity-prerequisite-not-solved`

Source kind: supporting (Douceur 2002, Sybil attack); local-inference; open-residue

Evidence: [dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) L2-OBLIGATION-A,
Douceur 2002 (The Sybil Attack)

Formal voice:

```text
per_identity_reward requires costly_or_reviewed_identity
costly_identity_prerequisite gates reward_surfaces_upstream
sybil_resistance != solved_by_naming
```

Plain-language voice: if making new identities is cheap, any per-person reward
can be farmed by one actor wearing many masks; a cost or review on identity must
sit upstream of reward.

Domain-context voice: this is a precondition (a gate) upstream of every
per-identity reward, contribution-count, or member-level surface. It is not a
fixture and not a mechanism. Build-from-owned: the Sybil problem is owned by the
distributed-systems literature (Douceur 2002) — cite it, do not re-derive it.

Use carefully: pair the prerequisite with the specific reward surface it gates,
and with the failure-corpus and behavioral checks for that surface.

Misuse warning: naming the prerequisite is not a Sybil-resistance proof. Do not
treat any identity-cost design as solved without a failure-corpus and behavioral
pass.

Promotion boundary: blocked until an identity-cost model and fixture exist

## ER-D23. Load-Bearing Term Lifecycle

Candidate control: `load-bearing-term-must-track-to-authority`

Source kind: method-authority; synthesis

Evidence: [authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md](../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md) REC-C14,
[authority/AUTHORITY-MODEL.md](../authority/AUTHORITY-MODEL.md),
[research/four-surface-reconciliation/findings.md](../research/four-surface-reconciliation/findings.md)

Formal voice:

```text
load_bearing_term =
  symbol_or_named_quantity
  in {formal_expression, fixture_fail_region, candidate_invariant,
      decidable_rule, normative_claim_content}

load_bearing_term requires tracked_definition_id
new_load_bearing_term enters lifecycle_status = candidate

lifecycle_status in {candidate, grounded, promoted, residue, retired}
candidate -> grounded   (source_kind + workflow_witness_or_typed_negative attached)
grounded  -> promoted    (owner gate per promotion-policy)
candidate -> residue     (no source can be found)
any       -> retired     (term no longer cited by any load-bearing surface)

candidate != validated
candidate != grounded
```

Plain-language voice: if a term carries weight in a rule or claim, it must have a
tracked entry; a brand-new such term starts as a "candidate" placeholder that
says what is known and what is still missing, and it moves up only as evidence
arrives.

Domain-context voice: this is the repo-wide anti-drift rule. It closes the gap
that let `treasury`, `epoch`, and `emission` be cited in a decidable
flow-conservation FAIL-region with no tracked entry. It adds a `Lifecycle status:`
field to every new definition card; ER-D1 through ER-D22 are read as `grounded`
(at their stated promotion boundary) until individually revised. It plugs into
the AUTHORITY-MODEL source-movement pipeline and `pass/flag/block/defer` gate
vocabulary rather than replacing them.

Use carefully: pair every `candidate` term with an `Open / to-ground:` field
naming exactly what must arrive to reach `grounded`. The trigger scope is
formal-and-claims: symbols in formal expressions, fixture FAIL-regions, candidate
invariants, decidable rules, or the normative content of a claim-ledger entry.

Misuse warning: `candidate` status is not a license to treat the term as
defined; a rule containing a `candidate` term is not "fully specified," and a
candidate term must not be cited as if validated.

Lifecycle status: grounded

Promotion boundary: active local discipline

## ER-D24. Treasury (candidate)

Candidate control: `treasury-reserve-not-sized`

Source kind: primary-source (role); open-residue (value)

Evidence: [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md) C5,
[dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) L3-INV-A

Formal voice:

```text
treasury = launch_time_reserve owning $RES_supply
emission draws_from treasury
treasury_value = un_snapshotted_whitepaper_claim   # NOT locally verified
```

Plain-language voice: the reserve that holds the `$RES` supply at launch and that
emissions are paid out of. We know its role; we do not have a locally verified
size.

Domain-context voice: appears as the right-hand side of the flow-conservation
fixture FAIL-region (`Σ(emitted) > treasury`). Its role is anchored by claim C5
(`$RES` is "treasury-owned at launch"); its size (the 1B / `10⁹` `$RES` figure)
is a gated, un-snapshotted whitepaper claim and must not be asserted as fact.

Use carefully: cite the role from C5; treat any numeric size as analogy/gated.

Misuse warning: do not assert the treasury size locally; do not treat the
treasury as a Phase-2 financial mechanism (that is ER-D12, blocked).

Open / to-ground: a ledgered, source-backed treasury size (currently gated
behind the un-snapshotted whitepaper supply claim).

Lifecycle status: candidate

Promotion boundary: local-research-only

## ER-D25. Epoch (candidate)

Candidate control: `epoch-accounting-period-parameter`

Source kind: local-inference

Evidence: [dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) §3.2 (flow-conservation fixture)

Formal voice:

```text
epoch = accounting_period over_which emission is summed
flow_conservation_check evaluated per epoch
epoch_basis = fixture_declared_parameter   # block | round | day | ...
```

Plain-language voice: the time window the flow-conservation check sums emissions
over before comparing to the treasury. It is a knob the fixture must set, not a
fact from the source.

Domain-context voice: the quantifier in the flow-conservation FAIL-region
(`any epoch Σ(emitted) > treasury`). It has no source; the fixture that builds
formal-TF-1 must declare its basis (per block, per distribution round, per day),
and that choice is part of the fixture contract.

Use carefully: declare the epoch basis explicitly in the fixture; a different
basis can change the verdict.

Misuse warning: do not treat the epoch basis as source-given or as a single
canonical period; it is a parameter.

Open / to-ground: the declared epoch basis in the flow-conservation fixture
contract.

Lifecycle status: candidate

Promotion boundary: local-research-only

## ER-D26. Emission (candidate)

Candidate control: `emission-flow-input-pending`

Source kind: primary-source (surface); open-residue (schedule)

Evidence: [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md) C5,
[dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) Lane 3 (L3-INV-A/B/C)

Formal voice:

```text
emission = per_epoch outflow of $RES from treasury
Σ(emitted) per epoch  <=  treasury    # the flow-conservation rule
emission_schedule = pending_input     # not locally specified
emission != $RCT                      # $RCT never summed into $RES
```

Plain-language voice: the `$RES` paid out per period. The conservation rule
bounds the running total of emissions by the treasury; the actual payout
schedule is the missing input.

Domain-context voice: the left-hand side of the flow-conservation FAIL-region and
the named Lane-3 risk surface ("the stock is conserved but the flow has no
certificate"). The emission *schedule* is the "emission input pending" that keeps
fixture #2 (formal-TF-1) from running today.

Use carefully: emission is a flow, not the `$RES` stock; the risk is in the flow
dynamics (formal-TF-1 / TF-12 / TF-14), not the supply size.

Misuse warning: do not conflate emission flow with the conserved `$RES` stock,
and never sum `$RCT` into `$RES`.

Open / to-ground: a source-backed or fixture-declared emission schedule.

Lifecycle status: candidate

Promotion boundary: local-research-only

## ER-D27. Runway Inequality (candidate)

Candidate control: `runway-inequality-zero-buffer-not-thresholds`

Source kind: related-source (Beer F5, solvency/reserve-adequacy); local-inference; open-residue (calibration)

Evidence: [dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) L5-LAUNCH-BLOCKER / formal-TF-13,
[subtowers/formal-mechanisms/returns/tower-findings.md](../subtowers/formal-mechanisms/returns/tower-findings.md) TF-13

Formal voice:

```text
runway = (stables + liquidable*(1 - haircut) - obligations) / burn

# decidable zero-buffer fixture (formal-TF-13):
FAIL iff (stables + liquidable*(1 - haircut)) = 0 while burn > 0   # runway undefined / <= 0
PASS iff non-native reserves make the numerator > 0 for a stated burn

stables     = non-native liquid reserves (e.g. stablecoins)
liquidable  = assets convertible to cash
haircut     = fractional discount taken when liquidating (0..1)
obligations = liabilities due in the period
burn        = outflow rate per period
named_thresholds = search-only / analogy   # NOT invariants this repo asserts
```

Plain-language voice: how long the treasury can pay its bills. At 100% native
`$RES` with no outside reserves the runway is structurally undefined; you need
non-native reserves to make the numerator positive.

Domain-context voice: the decidable part of the runway-inequality fixture
(NOW-fixture #3). The *inequality* is borrowed (Beer F5); the named numeric
thresholds (drawdown 50/80, depeg 0.97–0.99, time-to-cash 1h/24h/7d) are
search-only analogy from one non-peer source — inputs to calibrate, not
invariants asserted.

Use carefully: assert only the zero-buffer inequality; treat every numeric
threshold as a parameter to calibrate, source-kind analogy.

Misuse warning: do not present the named thresholds as validated invariants, and
do not read a positive runway as Phase-2 financial readiness (ER-D12 stays
blocked).

Open / to-ground: a source-backed non-native reserve position, a calibrated
burn, and the provenance of the threshold values.

Lifecycle status: candidate

Promotion boundary: local-research-only

## ER-D28. Measurement-Not-Authority (Stratified Estimate) (candidate)

Candidate control: `stratified-estimate-unbiased-under-steering`

Source kind: related-source (Beer F2 stratified estimate; Fritz F2 order-morphism independence); local-inference; open-residue (adversary class)

Evidence: [dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) formal-TF-11,
[subtowers/formal-mechanisms/returns/tower-findings.md](../subtowers/formal-mechanisms/returns/tower-findings.md) C1 / TF-11

Formal voice:

```text
# keep a stratified-random arm separate from the risk-selected (optimized) arm
stratified_estimate = health estimate from the stratified-random arm
true_rate            = ground-truth rate being estimated
CI                   = stated confidence interval

# decidable fixture (formal-TF-11), under a DECLARED adversarial steering class:
FAIL iff |E[stratified_estimate] - true_rate| > CI    # estimate biased by steering
PASS iff |E[stratified_estimate] - true_rate| <= CI   # unbiased regardless of steering

measurement_loop != authority
```

Plain-language voice: measure system health with a random sample kept separate
from the optimized/rewarded path, so gaming the rewarded path cannot bias the
measurement. Seeing the number is not the same as it being right — and it is not
authority.

Domain-context voice: the decidable part of the Measurement≠Authority fixture
(NOW-fixture #1, promotion-candidate). It instantiates the observed-signal /
attention-vs-authority non-collapse (ER-D6 / ER-D8) on the measurement loop.

Use carefully: the PASS is only meaningful once the adversarial steering class is
PUBLISHED; an unstated adversary makes PASS cheap.

Misuse warning: do not treat an unbiased estimate as authority, as solved
anti-gaming, or as validated without the declared steering class and CI.

Open / to-ground: the declared adversarial-steering class and the CI bound.

Lifecycle status: candidate

Promotion boundary: local-research-only
