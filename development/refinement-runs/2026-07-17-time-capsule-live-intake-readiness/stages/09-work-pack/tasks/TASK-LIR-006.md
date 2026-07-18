# TASK-LIR-006 — Sealed Threat Decision And Conditional Profile

Layer: L3

Status: blocked by public readiness and security/privacy/custody/archive owners

## Objective

Decide whether one-word sealed intake can provide defensible guarantees. Select
commitment-only, recoverable encryption, or no sealed path; implement nothing
until the decision names the complete profile.

## Threat Decision Inputs

Assets/adversaries, realistic word distributions, altered clients/third-party
scripts, browser residue, metadata, nonces/randomness, keys/rotation/revocation,
custody/recovery, opening/private preview/current display consent, moderation,
loss/death/incapacity/survivor, migration, dependency loss, shutdown, ten-year cost.

## Smallest Working Units

### SWU-LIR-011 — Approve Or Kill Sealed Profile

- Dependencies: SWU-LIR-010 and named owners
- Write scope: threat model and signed decision only
- Done: option/rejected alternatives/narrow guarantees/non-guarantees/kill criteria recorded
- Acceptance: offline-guess and client/custody risks have evidence; no-survivor default explicit; every authority separated
- Verification: security/privacy/legal/archive multi-owner review
- Owner: manual
- Handoff: approved versioned profile or kill decision and copy repairs

### SWU-LIR-012 — Exercise Profile Or Remove Feature

- Dependencies: SWU-LIR-011
- Write scope: conditional client/sealed synthetic modules and fixtures, or public-copy removal
- Done: approved profile implemented only with invented data, or sealed control/copy removed
- Acceptance: guessing/tamper/replay/client substitution/metadata/key loss/opening/consent/recovery/migration tests pass; plaintext absent where forbidden
- Verification: security vectors/fuzz, browser/network/storage inspection, recovery/migration drill
- Owner: local-fallback
- Handoff: evidence and residual risks; never an implicit live enablement

## Synchronization

No sealed outcome changes the founding root/supply contract or public-live gates.

