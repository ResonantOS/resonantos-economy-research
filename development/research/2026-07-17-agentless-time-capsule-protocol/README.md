# Operatorless Time Capsule Protocol

Status: protocol-primary architecture selected by D-11; production gates not passed

Date: 2026-07-17

## Question

Can the Resonant Time Capsule remain recoverable and become openable after 2, 5,
and 10 years without appointing a person, committee, or scheduled server process to
hold keys and perform each opening?

## Short answer

Yes, with an important qualification: a capsule can become **openable without an
appointed Resonant steward**, but it cannot exist without dependencies.

The strongest researched candidate is:

1. freeze deterministic horizon manifests when intake closes;
2. encrypt each horizon bundle to a future drand quicknet round using tlock;
3. upload only the encrypted bundles, manifest commitments, and a static recovery
   kit to Arweave;
4. publish the transaction IDs, hashes, target rounds, pinned drand chain
   parameters, and source code in several ordinary mirrors;
5. let a static browser page fetch the due drand beacon and decrypt a bundle when
   anyone visits it after its target round.

No future cron job, key-holding operator, smart-contract keeper, or Resonant server
is required for the release to become possible. A visitor still has to retrieve or
open the material, and the drand and Arweave networks must still be available.

## Selected initial release mode

- **Public at opening:** tlock-only ciphertext. After the target round, anyone can
  decrypt and read the due horizon bundle.

D-15 excludes private return from the initial capsule. Participant recovery keys and
inner encryption remain researched future possibilities, not launch behavior.

## Recommendation

Treat this as the selected **normal release path**, not as a Monday-ready production
promise. D-11 retains 3-of-5 stewardship only for emergency recovery. Run the
closure gates in [gates/closure-gates.md](gates/closure-gates.md) before describing
the real capsule as protocol-openable.

For a demonstration today, the page can explain and simulate this architecture.
For real closing, do not upload the only copy until the encryption, recovery, and
static-decoder round trips have passed.

## Tower map

- [TOWER.md](TOWER.md) — architecture and research boundary
- [sources/source-record.md](sources/source-record.md) — primary-source record
- [claims/claim-ledger.md](claims/claim-ledger.md) — supported claims and limits
- [levels/L0-corpus.md](levels/L0-corpus.md) — evidence corpus
- [levels/L1-residue-map.md](levels/L1-residue-map.md) — unresolved failure surfaces
- [levels/L2-closure-plan.md](levels/L2-closure-plan.md) — validation sequence
- [gates/closure-gates.md](gates/closure-gates.md) — decision-grade acceptance gates
- [bridge-decisions.md](bridge-decisions.md) — effect on the active Decision Gate
- [FINAL-LEARNING-PACK.md](FINAL-LEARNING-PACK.md) — concise handoff
