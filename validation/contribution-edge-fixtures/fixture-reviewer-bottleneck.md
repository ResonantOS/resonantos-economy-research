# Fixture: Reviewer Bottleneck

```yaml
fixture_id: CEF-FIX-005-reviewer-bottleneck
local_research_status: research-pass
source_posture: local-method-and-design-scaffold
source_refs:
  - ../../development/contribution-edge-fixture-implementation-plan.md
  - ../../harvest/cav2-authority-lifecycle/findings.md
  - ../../definitions/DEFINITIONS.md
input_event: Review queue or owner route becomes overloaded, captured, stale, or dependent on a narrow reviewer set.
observed_signal: Pending reviews accumulate, one reviewer dominates outcomes, or appeal/cooldown signals appear.
review_action: Route to alternate reviewer, recusal, expiry, cooldown, or owner escalation rather than silent approval.
expected_credit_state: Credit remains pending, review-flagged, expired, remanded, or bounded; reviewer status remains non-authoritative.
forbidden_state_mutations:
  - silent_approval
  - permanent_bottleneck
  - standing_authority
  - governance_effect
  - reward_effect
  - payout_effect
reward_effect: none
authority_effect: none
policy_effect: none
governance_effect: none
payout_effect: none
implementation_status: fixture_only
typed_negative: reviewer_status -> standing_authority is rejected.
deterministic_check: The fixture names reviewer overload/capture state and keeps authority_effect: none.
review_check: Reviewer verifies whether recusal, appeal, alternate owner, expiry, or cooldown is required.
owner_route: review-governance owner for reviewer pool behavior; authority owner for attempted power changes.
blocked_escalation: Block if bottlenecked review becomes silent approval, permanent authority, reward gate, or governance power.
open_residue: Needs later reviewer eligibility, capacity, and appeal policy evidence.
```

## Scenario

The review process can fail through overload, capture, fatigue, incumbency, or a
single reviewer becoming the practical owner of outcomes.

## Expected Behavior

The bottleneck is surfaced as a review-governance problem. Credit may be held,
expired, remanded, or routed elsewhere. Reviewer status does not become
authority.

## Failure Interpretation

The fixture fails if reviewer overload silently approves credit, if reviewer
status becomes standing authority, or if participants can capture reward,
authority, governance, or payout through reviewer bottlenecks.
