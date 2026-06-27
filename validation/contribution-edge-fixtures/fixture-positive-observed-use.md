# Fixture: Positive Observed Use

```yaml
fixture_id: CEF-FIX-001-positive-observed-use
local_research_status: research-pass
source_posture: local-method-and-design-scaffold
source_refs:
  - ../../development/contribution-edge-fixture-implementation-plan.md
  - ../../definitions/DEFINITIONS.md
  - ../../harvest/cav2-authority-lifecycle/findings.md
input_event: A host-surface contribution event is visible enough to review.
observed_signal: A timestamped event reference, actor handle, host surface, and contribution summary are available.
review_action: Reviewer checks source posture, contribution scope, privacy boundary, and duplicate/conflict risk before assigning bounded credit.
expected_credit_state: Reviewed credit is recorded with scope, assumptions, review status, and open residue.
forbidden_state_mutations:
  - reward_effect
  - authority_effect
  - policy_effect
  - governance_effect
  - payout_effect
  - launch_state
reward_effect: none
authority_effect: none
policy_effect: none
governance_effect: none
payout_effect: none
implementation_status: fixture_only
typed_negative: observed_signal -> reviewed_credit without review is rejected.
deterministic_check: The fixture record contains observed_signal and review_action, and all effect fields remain none.
review_check: Reviewer confirms the event is in scope and credit remains bounded to the described contribution.
owner_route: local research owner for fixture interpretation; authority owner for any attempted promotion.
blocked_escalation: Block if raw observation is treated as automatic credit, reward, authority, governance power, payout, or launch readiness.
open_residue: Later evidence-harness work must decide whether this fixture can become executable JSON/YAML input.
```

## Scenario

A contribution appears on a known host surface, such as a useful review,
maintenance action, or reusable research note. The event is visible and can be
referenced without exposing private context.

## Expected Behavior

The observed signal routes to review. If review accepts the contribution, the
result is bounded reviewed credit only. The credit record may help future
research inspect whether recognition is useful, but it creates no entitlement,
authority, governance power, payout, policy, or launch state.

## Failure Interpretation

If any downstream artifact treats the raw signal as automatic credit or treats
reviewed credit as reward, payout, policy, authority, governance weight, launch
readiness, economy validation, or anti-gaming proof, the fixture fails.
