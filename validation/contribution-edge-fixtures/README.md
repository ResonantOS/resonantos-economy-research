# Contribution-Edge Fixtures

Status: fixture scaffold
Promotion scope: local-research-only
Source basis:
[development/contribution-edge-fixture-implementation-plan.md](../../development/contribution-edge-fixture-implementation-plan.md),
[development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md](../../development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md),
[definitions/DEFINITIONS.md](../../definitions/DEFINITIONS.md),
[harvest/cav2-authority-lifecycle/findings.md](../../harvest/cav2-authority-lifecycle/findings.md)

This package contains local validation fixtures for the contribution-edge
boundary: one observed contribution signal may route to reviewed credit, but it
must not create reward entitlement, owner authority, policy, governance power,
payout, launch readiness, economy validation, or anti-gaming proof.

## Package Files

| File | Purpose |
| --- | --- |
| [SCHEMA.md](SCHEMA.md) | Required fixture record contract. |
| [MATRIX.md](MATRIX.md) | Rule-to-fixture coverage matrix. |
| [TYPED-NEGATIVES.md](TYPED-NEGATIVES.md) | Rejected state transitions. |
| [IMPLEMENTATION-CHECKLIST.md](IMPLEMENTATION-CHECKLIST.md) | Completion and verification checklist. |
| [fixture-positive-observed-use.md](fixture-positive-observed-use.md) | Visible signal reviewed into bounded credit. |
| [fixture-invisible-work-exclusion.md](fixture-invisible-work-exclusion.md) | Missing observed signal does not erase invisible work. |
| [fixture-authority-handoff-no-effect.md](fixture-authority-handoff-no-effect.md) | Reviewed credit does not change owner authority. |
| [fixture-attention-capture.md](fixture-attention-capture.md) | Repeated visibility is routed through capture/damping checks. |
| [fixture-reviewer-bottleneck.md](fixture-reviewer-bottleneck.md) | Reviewer overload or capture remains visible and governable. |
| [fixture-appeal-recusal.md](fixture-appeal-recusal.md) | Conflict, recusal, and appeal hold or remand credit. |

## Non-Goals

These fixtures do not define a token policy, bounty policy, governance rule,
payout rule, launch package, product implementation, authority promotion,
economy validation, validator proof, or anti-gaming proof.

## Use Rule

Use this package as a local fixture scaffold for future
research-evidence-harness work. A fixture result may identify a pass, flag, or
block condition for later review, but it must not promote policy, reward,
authority, governance, payout, launch, or implementation readiness.
