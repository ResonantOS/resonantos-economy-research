# L2 Closure Plan

Status: active
Promotion scope: local-research-only

## Closure Target

Close the first research pass by producing:

1. a bounded source synthesis from the proposed explorer fan-out;
2. a verdict matrix over candidate economy mechanisms;
3. a small invariant set;
4. one workflow witness recommendation;
5. an evidence-harness handoff for any scoring, reward, or anti-gaming claim that needs measurement.

## Ordered Attack

1. Official source lock: keep the ResonantDAO whitepaper as the only official source.
2. Failure precedent sweep: identify DAO, bounty, crypto, treasury, reputation, and algorithmic-token failure patterns.
3. Behavioral sweep: identify motivation, identity, trust, and status dynamics that reward systems alter.
4. Formal mechanism sweep: identify scoring, random audit, collusion resistance, and conserved-budget candidates.
5. Science-of-science sweep: learn from credit systems that sustained knowledge production and from their distortions.
6. Synthesis and review: produce borrow/block decisions and kill vacuous mechanisms.
7. Evidence handoff: route measurable claims to research-evidence-harness before any implementation.

## First Recommended Lane

Attack the problem first through the `authority-separated credit` lane, using
the CAv2/Lean harvest's demoted candidate controls:

```text
one observed host surface
  -> receipt candidate
  -> review action
  -> bounded credit record
  -> no reward entitlement
  -> no authority effect
  -> no governance power change
  -> no payout claim
  -> attention-capture check
```

Reason: it uses the strongest existing local work, aligns with the whitepaper's Phase 1 posture, and avoids starting with financial tokens or bounties. It also creates the right witness shape for later anti-gaming experiments.

Development handoff: use
[development/cav2-lean-findings-development-pack.md](../development/cav2-lean-findings-development-pack.md)
as the definition/design/plan pack for this lane. The key local definitions are
[ER-D2 Authority-Separated Credit](../definitions/DEFINITIONS.md#er-d2-authority-separated-credit),
[ER-D5 One Observed Surface Receipt Candidate](../definitions/DEFINITIONS.md#er-d5-one-observed-surface-receipt-candidate),
[ER-D6 Observed Signal](../definitions/DEFINITIONS.md#er-d6-observed-signal),
[ER-D7 Reviewed Credit Record](../definitions/DEFINITIONS.md#er-d7-reviewed-credit-record),
[ER-D8 Attention Route](../definitions/DEFINITIONS.md#er-d8-attention-route),
[ER-D10 Credit-Gaming Failure Fixture](../definitions/DEFINITIONS.md#er-d10-credit-gaming-failure-fixture),
and
[ER-D16 Multi-Axis Economy Audit](../definitions/DEFINITIONS.md#er-d16-multi-axis-economy-audit).
These definitions keep the lane below token, bounty, governance, payout,
launch, anti-gaming, and implementation claims.

## Next Governed Route

After the confirmed research fan-out, route measurable claims to `research-evidence-harness` for fixtures:

- one-observed-surface receipt fixture;
- credit-gaming failure fixtures;
- collusion and reciprocal-review fixture;
- random audit selection fixture;
- authority-handoff no-effect fixture.
- privacy/redaction export fixture.

## Pre-Readiness Boundary Addendum

Source basis:
[harvest/cav2-authority-lifecycle/findings.md](../harvest/cav2-authority-lifecycle/findings.md)
and
[development/implementation-boundary-plan.md](../development/implementation-boundary-plan.md).

The next planning surface is an implementation-boundary plan, not
implementation readiness. Use
[ER-D19](../definitions/DEFINITIONS.md#er-d19-implementation-boundary-plan)
to keep this distinction explicit.

### Local Verdict Vocabulary

Use [ER-D18](../definitions/DEFINITIONS.md#er-d18-local-research-status-vocabulary):

- `research-pass`: may move to next research step only;
- `research-flag`: useful but needs repair, fixture, owner route, or source
  expansion;
- `research-block`: cannot move until blocker is resolved.

No local verdict creates validation proof, PromotionRecord status,
implementation readiness, reward eligibility, governance weight, policy effect,
authority effect, or launch readiness.

### L2 Verdict Matrix Fields

Every L2 candidate must name:

- candidate ID;
- source kind;
- local status;
- owner route;
- falsifier;
- minimum source evidence;
- fixture or typed negative;
- deterministic check, if any;
- review check;
- blocked escalation;
- next check.

### Current L2 Research Status

| Candidate | Status | Reason |
| --- | --- | --- |
| Contribution-edge witness lane | `research-flag` | Useful first lane, but fixture contracts and review-governance controls remain open. |
| Validation-scaffold design | `research-flag` | Design shape exists; no validation harness or report exists. |
| D48/C17 authority-lifecycle reuse | `research-pass` for source records, `research-flag` for local use | Local snapshots and source records now exist; downstream definition/constitution use still needs owner-route selection and exact local citations. |
| Implementation-boundary plan | `research-pass` | Boundary plan exists and blocks task-session work until evidence-harness gates pass. |
| Reciprocal CAv2 return package | `research-block` | Requires manifest, public/private scrub, independent CAv2 owner review, and cycle-breaker before return. |

### Random Audit Governance Residue

Randomness remains blocked for any reward or payout use. A future random-audit
fixture must name what randomness protects, what it must not randomize, how
fairness is witnessed, and how abuse is audited under REC-C6.
