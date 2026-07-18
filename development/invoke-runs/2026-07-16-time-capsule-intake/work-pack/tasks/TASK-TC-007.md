# TASK-TC-007 — Package A Bounded Staging Ceremony And Preservation Export

Layer: L3

Slice: S-07

Wave: W3

Status: blocked by complete L2 evidence

## Objective

Rehearse the entire ceremony in an isolated staging environment, prove that an
outside verifier and successor can reproduce/restore it, and produce operator
runbooks without any token-mint capability.

## Source Contracts

- `../../IMPLEMENTATION-LAYERING.md` L3
- all L1/L2 receipts
- `../../ARCHITECTURE.md#before-intake`, `#closing-and-number-reveal`, `#at-a-release`

## Implementation Detail

The staging package uses synthetic participants and parameters. It must separate
web intake, private quota ledger, public manifest/receipts, beacon adapter,
selector, sealed custody where approved, and archive export. No component has a
mint key or production token endpoint.

Rehearsal sequence:

1. deploy from a pinned build and publish rules digest;
2. issue synthetic credentials and exercise all participation modes;
3. perform edits, dispositions, close race, manifest/root publication, beacon
   observation/failure, mapping, and independent reproduction;
4. simulate 2y/5y/10y release transitions with accelerated fixture time;
5. export public archive and protected custody packages under their separate policies;
6. destroy/restore a steward instance and complete a successor recovery;
7. publish incident, continuity, and reproduction receipts.

Failure modes: staging connects to production, hidden mutable configuration,
single steward/key/service, logs contain words/credentials, build cannot be
reproduced, outside verifier needs private state, restore changes root, or any
module can mint tokens.

## Smallest Working Units

### SWU-TC-013 — Staging Deployment And Runbooks

- Dependencies: all L2 tasks and owner gates
- Source anchors: `EXECUTION-PACK.md#choreography`, architecture workflow sections
- Related context: final approved rules/sealed/release contracts
- Write scope: future staging deployment, infrastructure, operator and incident runbooks
- Done when: pinned isolated deployment completes the full synthetic ceremony
  and exposes no mint/production capability
- Acceptance evidence: deployment receipt, run log, incident drills, forbidden-capability audit
- Validation: clean deploy, network policy, log scan, synthetic rehearsal
- Execution owner: local-fallback
- Handoff: return build ids, runbook paths, receipts, incidents, and residue

### SWU-TC-014 — Preservation Export And Independent Reproduction

- Dependencies: SWU-TC-013
- Source anchors: completed staging receipts, `ARCHITECTURE.md#preservation-and-verification`
- Related context: approved stewardship profile
- Write scope: future public archive/export, verifier package, restore fixtures
- Done when: an independent environment reproduces root/supply and a successor
  restores continuity without changing consent or historical state
- Acceptance evidence: external reproduction receipt and cold-restore receipt
- Validation: clean-room verifier run, checksum audit, restore/migration drill
- Execution owner: local-fallback
- Handoff: return export manifest, verifier instructions, receipts, and dependency gaps

## Synchronization

Passing staging does not authorize the real ceremony. It supplies evidence to
TASK-TC-READINESS-008 only.

