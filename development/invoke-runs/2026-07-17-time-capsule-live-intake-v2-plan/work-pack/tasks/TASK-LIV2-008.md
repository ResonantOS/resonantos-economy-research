# TASK-LIV2-008 — Close Rehearsal And Ceremony

## Objective

Turn validated components into one fail-closed close procedure, prove it end to
end on disposable 2/5/10-year-shaped fixtures, obtain real emergency-custody
acceptance, and only after readiness audit execute a separately authorized real close.

- Layer/slice: L3 / S-08
- Wave: W5
- Dependencies: SWU-LIV2-025–032
- Target roots: `development/time-capsule-live-intake-v2/ceremony/`, runbook, receipts
- Irreversibility: SWU-036 only

## Ordered Ceremony

1. Verify rule/contract/dependency/owner hashes and authoritative UTC clock.
2. Fence intake; resolve or exclude every moderation-pending phrase; freeze one snapshot.
3. Build record proofs, public manifest bytes, and capsule fingerprint.
4. Build and locally verify three encrypted horizon bundles, tlock key envelopes,
   and five emergency shares per horizon.
5. Publish recovery-complete package to Arweave and two independent mirrors; retrieve
   and byte/decode verify through clean paths.
6. Construct/sign/broadcast the exact Bitcoin fingerprint payload from an isolated signer.
7. Wait for inclusion and six confirmations; preserve replacement lineage if any.
8. Derive and independently reproduce the ritual number.
9. Publish close/archive/Bitcoin/number receipts and static recovery handles.
10. After independent verification, deliver shares, destroy working content keys,
    retire the live intake/database path and separately handled open-period key/backups
    according to the approved runbook. Failures before verification preserve recoverability
    and block destructive cleanup.

## Smallest Working Units

### SWU-LIV2-033 — Fail-closed close runbook/controller

- Primary behavior: encode the ordered ceremony with checkpoints, resumability,
  evidence, and prohibited transitions.
- Independent acceptance: dry-run state-machine review passes without external writes.
- Candidate children: runbook prose and controller state.
- Retained boundary: the controller is the executable interpretation of the runbook;
  either alone risks ordering drift.
- Dependencies: SWU-LIV2-025–032.
- Write scope: ceremony runbook, state schema/controller, dry-run fixtures.
- Done: every step has precondition, owner, input/output hash, receipt, retry behavior,
  and abort/recovery path; destructive cleanup is after independent verification only.
- Evidence: dry-run trace covering success, Bitcoin delay, archive failure, share failure,
  restart, and conflicting fingerprint.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/ceremony test -- runbook-controller`
- Owner: local-fallback.
- Source anchors: D-07–D-16; protocol closure gates.
- Handoff: dry-run only; no external final IDs, real keys, or destruction.

### SWU-LIV2-034 — Complete disposable 2/5/10 close rehearsal

- Primary behavior: execute the full controller once for all three horizon shapes
  and recover every produced artifact independently.
- Independent acceptance: one rehearsal receipt closes G-10.
- Candidate children: one SWU per horizon or subsystem.
- Retained boundary: G-10 asks whether the composed ceremony works across all horizon
  shapes; subsystem proofs already exist and this unit tests recomposition.
- Dependencies: SWU-LIV2-033.
- Write scope: disposable ceremony workspace and evidence only.
- Done: three bundles, manifest/fingerprint, disposable archive/mirrors, Bitcoin carrier,
  number, tlock-format recovery, 3-of-5 recovery, static decoder, restart, and audit reconcile.
- Evidence: exact commands/versions/hashes/costs/test IDs/witnesses with invented content.
- Validation: independent runbook replay and artifact hash verification.
- Owner: local-fallback.
- Source anchors: G-10; DECISIONS Implementation And Proof Gates.
- Handoff: no production credentials or participant data; failed composition repairs
  the owning SWU and reruns the full rehearsal.

### SWU-LIV2-035 — Five-steward custody acceptance

- Primary behavior: establish five independent real share custodians who accept
  the early-open, loss, succession, and 3-of-5 obligations.
- Independent acceptance: one custody roster/receipt proves the fallback exists
  without executing close.
- Candidate children: one SWU per steward.
- Retained boundary: threshold readiness is a set property; fewer than five cannot
  prove the selected 3-of-5 loss tolerance.
- Dependencies: SWU-LIV2-029 and SWU-LIV2-034.
- Write scope: protected custody receipts and public non-secret acceptance summary;
  never shares or private contact details in public artifacts.
- Done: five named accountable people/roles, independently tested delivery/storage,
  succession procedure, three-person reconstruction drill, and explicit early-open risk acceptance.
- Evidence: individual acceptance handles plus public threshold readiness receipt.
- Validation: ceremony owner and independent witness review.
- Owner: manual.
- Source anchors: D-10/D-11; GAP-LEDGER G-L3-03/G-L3-08.
- Handoff: no real share generation/delivery until the approved close; practice uses disposable shares.

### SWU-LIV2-036 — Approved production close ceremony

- Primary behavior: transition the one real cohort from open intake to independently
  verifiable recovery-complete closed capsule.
- Independent acceptance: one final close receipt either passes fully or records a block;
  partial external success is reconciled and never called complete.
- Candidate children: archive, Bitcoin, number, shares, cleanup.
- Retained boundary: these are staged checkpoints of one irreversible close transaction;
  accepting them separately would permit contradictory manifests or premature destruction.
- Dependencies: SWU-LIV2-025, SWU-LIV2-034–035, and `TASK-LIV2-READINESS-009` ready verdict.
- Write scope: production close state, approved external archive/mirror/Bitcoin actions,
  protected share delivery, public receipts, and approved cleanup; no token state.
- Done: all ordered ceremony steps and independent checks pass; final public chain is
  manifest→fingerprint→transaction→containing block→seed→number; recovery package is retrievable.
- Evidence: owner approval, witnesses, content-addressed public receipt, protected
  custody receipts, six-confirmation evidence, independent reproduction, cleanup attestation.
- Validation: two-person/manual ceremony plus independent verifier; no automatic execution.
- Owner: manual.
- Source anchors: all D-07–D-16; final readiness report; SWU-033 runbook.
- Handoff: this SWU requires a new explicit user authorization after readiness; stop on any mismatch.

## Synchronization

SWU-036 is never selected by completing this plan or a predecessor. The readiness
audit owns the last pre-close join; the human operator owns the irreversible approval.

