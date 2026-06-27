# Fixture: Appeal Recusal

```yaml
fixture_id: CEF-FIX-006-appeal-recusal
local_research_status: research-pass
source_posture: local-method-and-design-scaffold
source_refs:
  - ../../development/contribution-edge-fixture-implementation-plan.md
  - ../../harvest/cav2-authority-lifecycle/findings.md
  - ../../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md
input_event: A reviewed-credit decision is contested or a conflict of interest appears.
observed_signal: Appeal request, conflict marker, reviewer relationship, or disputed evidence is visible.
review_action: Recuse conflicted reviewer, hold or remand credit, and route appeal to the smallest appropriate owner.
expected_credit_state: Credit is held, remanded, or revised; no reward, authority, governance, or payout effect occurs while contested.
forbidden_state_mutations:
  - retaliatory_authority
  - finality_by_score
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
typed_negative: reviewed_credit -> governance_effect during appeal is rejected.
deterministic_check: The fixture records appeal/recusal state and keeps all effect fields none.
review_check: Owner verifies conflict, recusal path, appeal route, remand status, and open residue.
owner_route: appeal/recusal owner for contested credit; authority owner for any attempted governance or policy effect.
blocked_escalation: Block if contested credit becomes payout, governance effect, authority effect, retaliation, or finality by score.
open_residue: Needs later appeal timing, evidence burden, and reviewer eligibility rules.
```

## Scenario

A contribution-credit decision is contested, or a reviewer has a conflict of
interest. A contributor may appeal the review outcome.

## Expected Behavior

Credit is held, remanded, or revised through an owner route. Recusal and appeal
are explicit. A contested or appealed credit record cannot create reward,
authority, governance, payout, policy, or launch effects.

## Failure Interpretation

The fixture fails if appeals are ignored, if conflicted review becomes final, if
reviewed credit becomes governance power, or if score-like finality overrides
the owner route.
