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

Use carefully: future versions need workflow witnesses for each conjunct.

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
research-evidence-harness work for duplicate paths, collusion, reciprocal
review, spam, and review capture.

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
