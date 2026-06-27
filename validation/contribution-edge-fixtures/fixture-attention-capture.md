# Fixture: Attention Capture

```yaml
fixture_id: CEF-FIX-004-attention-capture
local_research_status: research-pass
source_posture: local-method-and-design-scaffold
source_refs:
  - ../../development/contribution-edge-fixture-implementation-plan.md
  - ../../development/cav2-lean-findings-development-pack.md
  - ../../definitions/DEFINITIONS.md
input_event: A contributor or contribution pattern repeatedly produces visible signals that dominate review attention.
observed_signal: Multiple visible events cluster around one actor, topic, channel, or work type.
review_action: Reviewer applies capture, damping, cooldown, diversity, or owner-route checks before attention routing affects review queues.
expected_credit_state: Attention is review-routed or damped; reviewed credit remains scoped and non-authoritative.
forbidden_state_mutations:
  - agenda_control
  - automatic_score_boost
  - governance_effect
  - authority_effect
  - reward_effect
  - payout_effect
reward_effect: none
authority_effect: none
policy_effect: none
governance_effect: none
payout_effect: none
implementation_status: fixture_only
typed_negative: attention_route -> governance_effect is rejected.
deterministic_check: Repeated observed_signal does not change governance_effect, authority_effect, or reward_effect.
review_check: Reviewer checks for capture, incumbency, channel bias, repeated self-routing, and neglected invisible work.
owner_route: local review-governance owner for queue behavior; authority owner for any attempted power change.
blocked_escalation: Block if visibility becomes de facto authority, agenda-setting power, governance effect, or reward entitlement.
open_residue: Needs later behavioral evidence for cooldown thresholds and capture detection.
```

## Scenario

A visible contributor, topic, or channel repeatedly attracts attention. The
system risks mistaking visibility for importance or authority.

## Expected Behavior

Attention may route review, but it does not grant governance power, reward,
authority, or agenda control. Capture risk is visible and reviewable.

## Failure Interpretation

The fixture fails if attention concentration silently determines what matters,
who decides, who gets rewarded, or who gains governance influence.
