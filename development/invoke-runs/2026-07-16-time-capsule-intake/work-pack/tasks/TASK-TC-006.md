# TASK-TC-006 — Approve And Exercise The Sealed And Stewardship Profile

Layer: L2

Slice: S-06

Wave: W2

Status: blocked by security/privacy/custody and archive/successor owners

## Objective

Turn “save for this opening” into a bounded, named security and stewardship
contract—or reject the feature—before any real sealed word can be accepted.

## Source Contracts

- `../../ARCHITECTURE.md#sealedwordrecord`
- `../../FORM-SPEC.md#privacy-and-storage-boundaries`
- `../../DECISIONS-AND-GAPS.md` G-04/G-06
- TASK-TC-005 release transitions

## Implementation Detail

This task begins with a manual threat-model decision, not code. It must decide
whether the product needs commitment only, encrypted recoverability, or no
sealed path. If encryption is chosen, the profile names client-side algorithms,
randomness, nonces, associated data, keys, opening, custody, successor access,
migration, deletion/display behavior, and explicit loss/no-survivor outcomes.

Only after approval:

1. implement client-side sealing so plaintext never reaches the service;
2. bind commitment/ciphertext to rules, horizon, slot, and consent version;
3. return contributor recovery/opening material under the approved custody model;
4. test low-entropy guessing, tampering, replay, wrong horizon, key loss, steward
   loss, migration, corrupted storage, and harmful opening;
5. exercise release-time reconfirmation and disposition from TASK-TC-005;
6. publish narrow guarantees and all non-guarantees in form copy.

Failure modes: homemade cryptography, server plaintext, reused nonces, weak
entropy, organizer master key without governance, one-person custody, undeclared
permanent loss, automatic release without reconfirmation, and recovery claims
without restore evidence.

## Smallest Working Units

### SWU-TC-011 — Decide The Threat Model And Profile

- Dependencies: TASK-TC-005; security, privacy, custody, legal, archive owners
- Source anchors: `ARCHITECTURE.md#sealedwordrecord`, `DECISIONS-AND-GAPS.md` G-04/G-06
- Related context: release transition and ten-year stewardship promise
- Write scope: future threat model, decision record, and profile specification only
- Done when: protected assets, actors, attacks, algorithms, keys, custody,
  migration, loss, non-survivor, and non-guarantees are approved or feature is killed
- Acceptance evidence: signed multi-owner decision with explicit rejection criteria
- Validation: security/privacy/legal/archive review; no implementation command
- Execution owner: manual
- Handoff: return selected option, rejected options, rationale, owners, and blockers

### SWU-TC-012 — Implement And Test The Approved Profile

- Dependencies: SWU-TC-011 pass with an implementation option
- Source anchors: approved profile from SWU-TC-011 and TASK-TC-005 transitions
- Related context: `FORM-SPEC.md#privacy-and-storage-boundaries`
- Write scope: future client crypto, sealed record adapter, test custody, migration, and recovery fixtures
- Done when: implementation matches profile; negative, loss, and restore fixtures
  pass; plaintext is absent from network/server logs/storage
- Acceptance evidence: security test report, network/storage inspection, restore/migration receipts
- Validation: cryptographic vectors, fuzz/negative tests, recovery drill, privacy inspection
- Execution owner: local-fallback after manual approval
- Handoff: return versioned profile, implementation paths, evidence, and residual risks

## Synchronization

If SWU-TC-011 selects “no sealed path,” mark SWU-TC-012 not applicable and
repair public copy. Do not silently substitute access restriction for encryption.

