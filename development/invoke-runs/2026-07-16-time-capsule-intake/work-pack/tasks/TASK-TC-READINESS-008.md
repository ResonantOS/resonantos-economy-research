# TASK-TC-READINESS-008 — Multi-Owner Launch Or Block Audit

Layer: L3

Slice: S-08

Wave: W3

Status: blocked by TASK-TC-007 and every named owner gate

## Objective

Produce an evidence-indexed `launch | narrow | stop` decision for the ceremony.
This task verifies prior work; it cannot repair missing implementation or make
research evidence into policy by prose.

## Source Contracts

- all task/SWU receipts;
- `../../DECISIONS-AND-GAPS.md`;
- layer promotion evidence from `../../IMPLEMENTATION-LAYERING.md`;
- external token, governance/admission, security/privacy, content/legal,
  accessibility/language, archive/succession, and community-operations decisions.

## Readiness Algorithm

1. Index every required decision, fixture, receipt, incident, and unresolved risk.
2. Reject stale, missing, failed, or scope-mismatched evidence.
3. Confirm public copy matches actual guarantees and parameters.
4. Confirm no capsule participation field becomes allocation, rank, reward, or authority.
5. Confirm the deployable ceremony has no mint authority unless a separately
   authorized token route explicitly supplies it after this audit.
6. Ask each owner to sign `accept | accept-with-bound | reject` for their domain.
7. Return `launch` only if every mandatory domain accepts and no hard failure remains;
   otherwise return the narrowest safe scope or stop.

## Smallest Working Unit Exemption

- Reason: closure-only readiness verification task
- Allowed because task ID contains: `READINESS`

## Validation

- Acceptance evidence: signed decision matrix with concrete artifact paths,
  failed checks, approved scope, expiry conditions, and rollback/incident owner
- Reviewable check: independent audit that no missing owner or fixture is
  represented as accepted by omission
- Execution owner: manual

## Synchronization

Only the authorized external owner route can act on the final decision. Invoke,
Inventory, fixtures, or this audit do not mint, launch, or promote policy.

