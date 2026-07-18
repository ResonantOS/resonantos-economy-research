# TASK-TC-005 — Model Consent, Moderation, And Horizon Releases

Layer: L2

Slice: S-05

Wave: W2

Status: blocked by L1 evidence and content/legal owner decisions

## Objective

Specify and exercise the release lifecycle so public words, authorized openings,
refusals, silence, loss, and harmful content produce explicit display outcomes
without changing the frozen root or initial supply.

## Source Contracts

- `../../ARCHITECTURE.md#at-a-release`
- `../../ARCHITECTURE.md#releasemanifest`
- `../../FORM-COPY.md#release-invitation`
- `../../DECISIONS-AND-GAPS.md` D-09 and G-05

## Implementation Detail

Inputs are one horizon's frozen records, opening receipts, current confirmation,
moderation policy, and integrity status. Output is a release manifest and
non-content-bearing disposition receipts.

Transition algorithm:

1. Select records whose frozen horizon matches the event.
2. Route public records to release-time display review.
3. Invite sealed records to open; verify opening against the frozen commitment.
4. Require explicit current display confirmation after a valid opening.
5. Map refusal, non-response, loss, invalid opening, and no authorized survivor
   to distinct non-display states.
6. Apply content policy as `show | quarantine | withhold`; preserve reason/appeal.
7. Emit release manifest; compare root and supply before/after and hard-fail on change.

Edge cases: contributor death/incapacity, third-party personal data, policy
change, illegal content, false opening, late confirmation, appeal after event,
quarantine leak, duplicate opening, and future reflection overwriting original.

## Smallest Working Units

### SWU-TC-009 — Consent And Display Transition Specification

- Dependencies: TASK-TC-004 evidence
- Source anchors: `ARCHITECTURE.md#at-a-release`, `FORM-COPY.md#release-invitation`
- Related context: G-05 and prior consent/stewardship findings
- Write scope: future `development/time-capsule/release-lifecycle/` spec and fixtures
- Done when: every state/event has a deterministic transition, non-display default,
  owner, reason, appeal, and root/supply effect of none
- Acceptance evidence: reviewed transition table and negative fixture set
- Validation: model checker or exhaustive transition-table review
- Execution owner: local-fallback
- Handoff: return transition spec, owner decisions, and unresolved legal cases

### SWU-TC-010 — Synthetic Release Manifest And Disposition Overlay

- Dependencies: SWU-TC-009
- Source anchors: `ARCHITECTURE.md#releasemanifest`, TASK-TC-009 transitions
- Related context: root/supply non-regression guardrails
- Write scope: future synthetic release implementation and tests
- Done when: public/opened/still-sealed/unrecoverable/disposition counts reconcile
  and every display variation leaves root/supply byte-identical
- Acceptance evidence: transition fixtures and before/after non-effect receipt
- Validation: state tests, harmful-content negatives, root/supply diff
- Execution owner: local-fallback
- Handoff: return release manifests, disposition receipts, and failed cases

## Synchronization

This task cannot infer consent policy from implementation. Content, privacy, and
legal owners must approve the transition contract before promotion.

