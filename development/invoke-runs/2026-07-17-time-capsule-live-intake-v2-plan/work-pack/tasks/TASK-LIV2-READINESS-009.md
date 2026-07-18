# TASK-LIV2-READINESS-009 — Final Launch/Block Audit

## Objective

Independently decide whether SWU-LIV2-036 may be offered for explicit human
authorization. This task never performs close or repairs evidence while auditing it.

- Layer/slice: L3 / S-08
- Wave: W5
- Dependencies: SWU-LIV2-001–035 as applicable
- Write scope: final readiness report only

## Smallest Working Unit Exemption

- Reason: closure-only verification task
- Allowed because task ID contains: `READINESS`
- It aggregates owner-held receipts and creates no implementation behavior.

## Audit Algorithm

1. Resolve every SWU ID to one terminal receipt and validation result.
2. Verify all L0 human, L1 reconciliation, L2 owner/operations, and L3 closure
   gates; G-04 is not applicable under D-15.
3. Recompute manifest/fingerprint and number from disposable rehearsal receipts.
4. Check artifact/dependency/version/chain/payload hashes against the runbook.
5. Verify five steward acceptances, isolated signer readiness, archive funding,
   mirror owners, witnesses, and abort/recovery owners.
6. Scan for unresolved blockers, production secrets in repository evidence,
   phrase/plaintext leakage, private-return drift, live-feed drift, or token authority.
7. Return `ready` only when every applicable check passes; otherwise return
   `block` with owner and exact repair/rerun path.

## Done Criteria

- one content-addressed readiness report links every receipt;
- applicability and not-applicable gates are explicit;
- any missing/flagged evidence forces block;
- `ready` says only that SWU-LIV2-036 may be presented for authorization.

## Validation

Independent manual audit plus machine link/JSON/hash checks. The auditor must not
be the sole author of the close controller or production ceremony receipts.

