# Implementation Boundary Plan

Status: active pre-readiness plan
Promotion scope: local-research-only
Source basis:
[harvest/cav2-authority-lifecycle/findings.md](../harvest/cav2-authority-lifecycle/findings.md),
[development/cav2-lean-findings-development-pack.md](cav2-lean-findings-development-pack.md),
[definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md)

This is not an implementation plan, implementation readiness claim,
implementation contract, product spec, token policy, bounty policy, governance
rule, payout rule, validation proof, or launch package. It is the boundary plan
for deciding what must be true before a future task-session can safely
materialize fixtures or schemas.

## Boundary Definitions

- [ER-D18 Local Research Status Vocabulary](../definitions/DEFINITIONS.md#er-d18-local-research-status-vocabulary)
- [ER-D19 Implementation Boundary Plan](../definitions/DEFINITIONS.md#er-d19-implementation-boundary-plan)
- [ER-D20 Reciprocal Return Candidate](../definitions/DEFINITIONS.md#er-d20-reciprocal-return-candidate)

## Current Verdict

`research-pass` for fixture-scaffold task-session entry only.

Reason: the refined implementation plan now defines fixture contracts, typed
negatives, owner routes, acceptance checks, and task-session boundaries for the
first validation fixture package. This does not create implementation readiness
for the economy, token policy, bounty policy, governance, payout, launch, or
authority effects.

Refined plan:
[development/contribution-edge-fixture-implementation-plan.md](contribution-edge-fixture-implementation-plan.md)

Full Refine packet:
[development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md](refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md)

## Boundary Sequence

```text
source-backed boundary
  -> local research status
  -> fixture or typed negative
  -> owner route
  -> validation-harness handoff
  -> implementation-boundary plan
  -> task-session only after gates pass
```

## Work Packages Before Task-Session

| Work package | Owner route | Required output | Status |
| --- | --- | --- | --- |
| Source expansion closure | source reading route | Local source-record citations for D48/C17, authority posture/kinds/lifecycle, validation spec, import boundary, and implementation boundary. | research-pass |
| Local status and field discipline | definitions-governance | ER-D18/ER-D19/ER-D20 plus index and drift audit sync. | research-pass |
| Constitution hardening | constitution-governance | REC-C12 and REC-C13 selected in the constitution pack. | research-pass |
| Contribution-edge fixture contract | research-evidence-harness | Positive fixture, invisible-work exclusion, authority-handoff no-effect, attention-capture, reviewer-bottleneck, and appeal/recusal fixtures. | research-pass for fixture materialization |
| Rule-by-rule falsification matrix | research-evidence-harness | Each rule has deterministic check, review check, pass fixture, fail fixture, review-flag fixture, typed negative, owner route, and verdict. | research-pass for fixture materialization |
| Review governance fixture | local research owner / decision-gate if contested | Reviewer eligibility, recusal, appeal, owner overload, expiry/revision, agenda-setting authority, and cooldown/damping fields. | research-pass for fixture materialization |
| Reciprocal CAv2 return package | source reading route plus CAv2 owner route | Manifest with source IDs, blocked uses, unresolved findings, public/private scrub status, and no cyclic citation promotion. | research-block until independent CAv2 owner review |
| Task-session proposal | task-session | Bounded fixture/materialization scope with no policy, payout, governance, launch, or economy-implementation-readiness claim. | research-pass for fixture materialization only |

## Minimum Fixture Contract

Each fixture must include:

- fixture ID;
- source posture;
- input event;
- review action;
- expected credit state;
- forbidden state mutation;
- typed negative or failure expectation;
- deterministic check, if any;
- review check;
- owner route;
- blocked escalation;
- open residue.

## Explicit Blocks

Do not start a task-session for implementation until:

- every selected fixture has the minimum contract above;
- every local status is one of `research-pass`, `research-flag`, or
  `research-block`;
- reward, authority, policy, and implementation effects default to `none`;
- no validator spec is treated as a validation report;
- reviewer bottleneck/capture and attention-credit feedback have explicit
  fixtures;
- external owner decisions are named for any token, bounty, governance, payout,
  launch, or product effect.

## First Candidate Task-Session Shape

The first task-session may now materialize fixture files, not mechanism code,
using
[development/contribution-edge-fixture-implementation-plan.md](contribution-edge-fixture-implementation-plan.md):

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

This task-session remains limited to fixture materialization. Any mechanism,
validator-proof, token, bounty, governance, payout, launch, or authority work
requires a separate owner gate.

## Materialization Status

The contribution-edge fixture package now exists at
[validation/contribution-edge-fixtures/](../validation/contribution-edge-fixtures/).

Status: `research-pass` for fixture-scaffold materialization only. This does
not create mechanism implementation readiness or economy validation.
