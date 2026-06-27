# Validation

Status: scaffold
Owner: ResonantOS economy research owner

This folder is reserved for validation harnesses, fixtures, and reports.

Current validation is review-only:

- source links resolve;
- claims preserve source kind;
- authority files block policy promotion;
- dispatch remains confirmation-required;
- candidate mechanisms have collapse tests and witness paths.

No mechanism has passed a validation harness yet.

## Local Research Statuses

Validation-adjacent artifacts must use local research statuses from
[ER-D18](../definitions/DEFINITIONS.md#er-d18-local-research-status-vocabulary):

| Status | Meaning | Blocked collapse |
| --- | --- | --- |
| `research-pass` | The artifact can move to its next research step. | Not validation proof, implementation readiness, reward eligibility, governance weight, policy effect, authority effect, or launch readiness. |
| `research-flag` | The artifact is useful but needs a named repair, source expansion, fixture, owner route, or typed negative. | Not soft approval. |
| `research-block` | The artifact cannot move until the named blocker is resolved. | Not permanent rejection unless paired with a typed negative. |

## Scaffold Boundary

Specified validators, fixture plans, and checklists are design scaffolds until a
harness emits an explicit report. A fixture pass, green script, local status,
inventory entry, lifecycle stage, or validator spec must not mutate policy,
reward, governance, authority, implementation, or launch state.

The first likely validation route remains a contribution-edge fixture package,
but it must be accepted through the evidence-harness route before any
task-session materializes fixtures.

## Contribution-Edge Fixtures

The first fixture package has been materialized at
[contribution-edge-fixtures/](contribution-edge-fixtures/).

Status: `research-pass` for fixture-scaffold materialization only.

This package does not validate the economy, prove anti-gaming safety, create
token policy, bounty policy, governance rules, payout rules, launch readiness,
or authority promotion. It is local evidence scaffolding for later
research-evidence-harness review.
