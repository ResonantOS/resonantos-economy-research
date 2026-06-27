# Fixture Schema

Status: active fixture contract
Promotion scope: local-research-only

Every fixture in this package uses the same record contract. Missing fields
mean the fixture is incomplete.

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

## Field Rules

| Field | Rule |
| --- | --- |
| `fixture_id` | Stable fixture identifier matching the filename. |
| `local_research_status` | One of `research-pass`, `research-flag`, or `research-block`. |
| `source_posture` | Source posture for the fixture claim; this is not confidence or authority. |
| `source_refs` | Local source references used by the fixture. |
| `input_event` | Candidate observed contribution event. |
| `observed_signal` | The signal available before review. |
| `review_action` | Review or owner-route action required before credit state changes. |
| `expected_credit_state` | Expected reviewed-credit state after the fixture. |
| `forbidden_state_mutations` | State transitions this fixture must never create. |
| `typed_negative` | Rejected transition or failure expectation. |
| `deterministic_check` | Machine-checkable check when available. |
| `review_check` | Human or owner-route check when machine checks are insufficient. |
| `owner_route` | Smallest route that owns any unresolved decision. |
| `blocked_escalation` | What must not happen and where escalation stops. |
| `open_residue` | Remaining research uncertainty. |

## Non-Collapse Defaults

All fixture files must keep these defaults unless a separate owner gate creates
a different artifact outside this package:

```yaml
reward_effect: none
authority_effect: none
policy_effect: none
governance_effect: none
payout_effect: none
implementation_status: fixture_only
```
