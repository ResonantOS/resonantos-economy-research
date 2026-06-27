# Contribution-Edge Fixture Implementation Plan

Status: implementation-ready for fixture-scaffold materialization only
Promotion scope: local-research-only
Source basis:
[development/implementation-boundary-plan.md](implementation-boundary-plan.md),
[development/cav2-lean-findings-development-pack.md](cav2-lean-findings-development-pack.md),
[harvest/cav2-authority-lifecycle/findings.md](../harvest/cav2-authority-lifecycle/findings.md),
[definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md),
[validation/README.md](../validation/README.md)
Full Refine packet:
[development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md](refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md)

This plan is ready for a bounded task-session that creates validation fixture
files. It is not an economy mechanism, validator proof, implementation
readiness claim for the economy, product spec, token policy, bounty policy,
governance rule, payout rule, launch package, or authority promotion.

## Implementation Target

Create the first local validation fixture package:

```text
validation/contribution-edge-fixtures/
  README.md
  SCHEMA.md
  MATRIX.md
  TYPED-NEGATIVES.md
  IMPLEMENTATION-CHECKLIST.md
  fixture-positive-observed-use.md
  fixture-invisible-work-exclusion.md
  fixture-authority-handoff-no-effect.md
  fixture-attention-capture.md
  fixture-reviewer-bottleneck.md
  fixture-appeal-recusal.md
```

The package tests whether one observed contribution signal can become reviewed
credit without becoming reward entitlement, governance weight, owner authority,
policy, payout, or launch readiness.

## Ready-State Verdict

`research-pass` for fixture-scaffold task-session entry.

Reason: the source, definition, constitution, and boundary gates are now
sufficient to implement fixture files. They are not sufficient to implement
economy mechanics or claim validation success.

## Fixture Record Contract

Every fixture file must include these fields, either as a table or YAML-like
front matter:

```yaml
fixture_id:
local_research_status:
source_posture:
source_refs:
input_event:
observed_signal:
review_action:
expected_credit_state:
forbidden_state_mutations:
reward_effect: none
authority_effect: none
policy_effect: none
governance_effect: none
payout_effect: none
implementation_status: fixture_only
typed_negative:
deterministic_check:
review_check:
owner_route:
blocked_escalation:
open_residue:
```

Allowed local research statuses are `research-pass`, `research-flag`, and
`research-block`. A fixture status must not become validation proof, reward
eligibility, governance weight, policy authority, or implementation readiness.

## Fixture Set

| Fixture | Purpose | Expected result | Must not mutate |
| --- | --- | --- | --- |
| `fixture-positive-observed-use.md` | A visible host-surface event is reviewed into bounded credit. | `observed_signal -> reviewed_credit` with scope and assumptions. | Reward, payout, authority, governance, policy, launch state. |
| `fixture-invisible-work-exclusion.md` | Useful work lacks a clean observed signal. | Review routes to manual/privacy owner and records residue. | Erasure of invisible work, automatic zero credit, public exposure. |
| `fixture-authority-handoff-no-effect.md` | High reviewed credit appears near an owner decision. | Owner route remains separate from credit record. | Authority transfer, PromotionRecord, governance weight. |
| `fixture-attention-capture.md` | Repeated visible signals try to dominate attention. | Capture/damping check routes to review. | De facto authority, automatic score boost, agenda control. |
| `fixture-reviewer-bottleneck.md` | Reviewer capacity or capture risk appears. | Review flag, alternate owner route, expiry or cooldown. | Standing reviewer authority, permanent bottleneck, silent approval. |
| `fixture-appeal-recusal.md` | Conflict of interest or contested review appears. | Recusal/appeal path holds or remands credit. | Payout, governance effect, retaliatory authority, finality by score. |

## Rule Matrix

`MATRIX.md` must map each rule to a fixture, check, and failure mode:

| Rule | Required fixture coverage | Check shape |
| --- | --- | --- |
| Signal is not credit | positive observed use, invisible-work exclusion | Observed signal alone never creates reviewed credit. |
| Credit is not reward | positive observed use, authority-handoff no-effect | Reviewed credit keeps `reward_effect: none`. |
| Credit is not authority | authority-handoff no-effect, appeal/recusal | Reviewed credit keeps `authority_effect: none`. |
| Attention is not authority | attention capture, reviewer bottleneck | Routing attention never changes owner authority. |
| Reviewer route is governable | reviewer bottleneck, appeal/recusal | Reviewer overload, conflict, and appeal are visible states. |
| Invisible work is not erased | invisible-work exclusion | Absence of signal creates residue and owner route, not zero-value proof. |

## Implementation Units

### SWU-CEF-001. Package Skeleton

Create the directory, `README.md`, `SCHEMA.md`, and
`IMPLEMENTATION-CHECKLIST.md`.

Acceptance:

- README repeats the non-goals and source basis.
- SCHEMA records the fixture contract above.
- Checklist includes link check, forbidden-collapse scan, and fixture field
  completeness.

### SWU-CEF-002. Positive And Boundary Fixtures

Create:

- `fixture-positive-observed-use.md`
- `fixture-invisible-work-exclusion.md`
- `fixture-authority-handoff-no-effect.md`

Acceptance:

- each fixture has all required fields;
- every effect field defaults to `none`;
- each fixture has an owner route and blocked escalation.

### SWU-CEF-003. Capture And Governance Fixtures

Create:

- `fixture-attention-capture.md`
- `fixture-reviewer-bottleneck.md`
- `fixture-appeal-recusal.md`

Acceptance:

- reviewer capture, overload, recusal, appeal, and cooldown are represented;
- no reviewer state becomes standing authority;
- no attention route becomes governance power.

### SWU-CEF-004. Matrix And Typed Negatives

Create `MATRIX.md` and `TYPED-NEGATIVES.md`.

Required typed negatives:

- `observed_signal -> reviewed_credit` without review is rejected.
- `reviewed_credit -> reward_effect` is rejected.
- `reviewed_credit -> authority_effect` is rejected.
- `attention_route -> governance_effect` is rejected.
- `fixture_pass -> economy_validated` is rejected.
- `fixture_package -> implementation_readiness` is rejected.
- `reviewer_status -> standing_authority` is rejected.

### SWU-CEF-005. Local Integration

Update only local research surfaces:

- link the fixture package from [validation/README.md](../validation/README.md);
- link this plan from [development/implementation-boundary-plan.md](implementation-boundary-plan.md);
- optionally add an inventory entry after the package exists.

Do not update token, bounty, governance, payout, launch, product, or promotion
surfaces.

## Verification Commands

Run after fixture materialization:

```bash
node -e "const fs=require('fs'); for (const f of fs.readdirSync('validation/contribution-edge-fixtures')) console.log(f)"
rg -n "reward_effect: (?!none)|authority_effect: (?!none)|policy_effect: (?!none)|governance_effect: (?!none)|payout_effect: (?!none)" validation/contribution-edge-fixtures
rg -n "economy validated|implementation readiness|token policy|bounty policy|governance rule|payout rule|launch readiness" validation/contribution-edge-fixtures
```

The first command should list the package files. The second command should
return no unapproved effect mutations. The third command should return only
blocked-use or non-goal language.

## Stop Conditions

Stop the task-session if any fixture claims:

- an economy mechanism is validated;
- reviewed credit creates reward, payout, policy, authority, or governance
  effect;
- a fixture pass proves anti-gaming safety;
- a reviewer, status label, score, inventory entry, or citation becomes
  authority;
- private CAv2 or DomainSpec material is copied into public-facing text without
  a scrub decision.

## Task-Session Handoff

Next route: `task-session`

Objective:

```text
Materialize validation/contribution-edge-fixtures/ from
development/contribution-edge-fixture-implementation-plan.md, preserving
local-research-only status and all blocked-use boundaries.
```

Completion criteria:

- all planned fixture package files exist;
- all fixture files satisfy the fixture record contract;
- `MATRIX.md` covers all six rules;
- `TYPED-NEGATIVES.md` includes all seven typed negatives;
- validation README links to the package;
- no token, bounty, governance, payout, launch, or economy-validation claim is
  introduced.
