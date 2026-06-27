# Fixture: Invisible Work Exclusion

```yaml
fixture_id: CEF-FIX-002-invisible-work-exclusion
local_research_status: research-pass
source_posture: local-method-and-design-scaffold
source_refs:
  - ../../development/contribution-edge-fixture-implementation-plan.md
  - ../../development/cav2-lean-findings-development-pack.md
  - ../../definitions/DEFINITIONS.md
input_event: A contributor reports useful work that lacks a clean public observed signal.
observed_signal: No sufficient host-surface signal is available; private or maintenance context may exist but is not exposed.
review_action: Reviewer routes the case to a manual/privacy owner and records residue rather than assigning automatic zero credit.
expected_credit_state: Credit remains held, review-flagged, or unresolved until a privacy-safe witness or owner decision exists.
forbidden_state_mutations:
  - automatic_zero_credit
  - forced_public_exposure
  - reward_effect
  - authority_effect
  - policy_effect
  - governance_effect
  - payout_effect
reward_effect: none
authority_effect: none
policy_effect: none
governance_effect: none
payout_effect: none
implementation_status: fixture_only
typed_negative: absent observed_signal -> zero value proof is rejected.
deterministic_check: Missing observed_signal creates open_residue and owner_route, not automatic zero credit.
review_check: Reviewer confirms that privacy, maintenance, care, or invisible labor is not erased by the observation model.
owner_route: privacy/manual-review owner for witness decisions; local research owner for fixture interpretation.
blocked_escalation: Block if the fixture forces private context public or treats missing observation as proof of no contribution.
open_residue: Requires later privacy/redaction policy fixture before public lineage or attribution work.
```

## Scenario

Useful work may happen in maintenance, coordination, moderation, mentoring,
security, private client context, or other places where a clean public signal is
missing.

## Expected Behavior

The absence of an observed signal does not erase the work. The fixture creates a
review flag, owner route, and residue. It does not grant automatic credit, but it
also does not prove zero value.

## Failure Interpretation

The fixture fails if missing observation becomes automatic exclusion, if private
context is exposed to create a witness, or if unresolved credit is used as a
reward, payout, governance, policy, or authority input.
