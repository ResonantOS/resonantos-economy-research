---
module: live-intake-v2
version: 2
status: candidate
updatedAt: 2026-07-17
docType: implementation-layering
---

# Implementation Layering — Live Intake V2

## Target And Scope

- Target: Resonant Time Capsule Live Intake V2
- Scope: invited phrase intake, close, recovery-complete publication, and ritual-number receipt
- Current state: V2 non-collecting form complete; live implementation and closure proofs absent

## Boundary Heuristic

Each layer ends when the next work unit answers a different decision at higher
coordination or irreversibility cost. Later layers preserve earlier guarantees.

## Layer Decision Table

| Layer | Decision question | Minimum working unit | Included | Deferred | Exit evidence | Promotion |
| --- | --- | --- | --- | --- | --- | --- |
| L0 — contract | After this layer, we know whether one normalized phrase/envelope contract is machine-reproducible and people understand the current consequences. | versioned contract/negative fixtures plus separate human access/retell receipts | phrase normalization, envelope/version schema, lifecycle classification, capability gates, V2 access matrix | API, database, credentials, deployment, cryptography, real content | contract validators; 32/32 historical browser evidence; screen-reader, IME, RTL, and 5-person receipts | L1 technical work may start from the machine-contract lane; L2 remains blocked until the human lane passes |
| L1 — invented-data kernel | After this layer, we know whether the selected Node/SQLite design can safely accept, edit, moderate, fence, snapshot, restore, and reproduce invented records. | isolated API and datastore using invented invitations and phrases only | sessions, immutable versions, idempotency, at-rest AEAD, private moderation queue, close fence, canonical manifest, fingerprint, restore/migration | real invite issuance, public promotion, external archive, Bitcoin mainnet, real keys/messages | unit/property/concurrency tests; forbidden-field scan; cold restore; canonical-byte and fingerprint vectors | L2 only after L0 human evidence, owner package, and exact L1 reconciliation pass |
| L2 — bounded live readiness | After this layer, we know whether the intake can fail safely under named human and operational ownership. | feature-gated same-origin adapter plus invented cohort on the existing VPS shape | owner contracts, private invite exchange, staged adapter, incident/restore rehearsal, accessibility/comprehension regression, manual enablement decision | real close, durable archive, mainnet transaction | owner accept/block package; staged deployment/rollback; incident and restore receipts; human regression; explicit real-intake gate | real intake remains disabled until every L2 gate passes and a human approval receipt exists |
| L3 — close and recovery | After this layer, we know whether one frozen capsule can be independently recovered, anchored, and opened at all horizons without a Resonant service. | disposable 2/5/10-year close rehearsal plus separately approved production ceremony | horizon bundles, tlock/drand, static decoder, 3-of-5 recovery, Arweave+mirrors, Bitcoin carrier, number derivation, final audit | private return, NFT, token mint/distribution, guaranteed permanence, scheduled maintenance | G-01–G-03, G-05–G-10; archive retrieval; recovery; Bitcoin rehearsal; six-confirmation receipt shape; named stewards; final audit | production close is a manual irreversible gate; failed evidence leaves the capsule in rehearsal or entrusted fallback state |

## Two-Lane L0 Rule

L0 contains two evidence lanes because they answer different questions:

1. Machine contract lane: permits only invented-data L1 implementation.
2. Human understanding lane: gates L2 staging promotion and real intake.

This is not a waiver. L1 cannot accept real phrases, issue real invitations, or
remove preview copy while the human lane is open.

## Non-Regression Guardrails

- At most two phrases per horizon; fixed `public_at_opening` visibility.
- Saved phrases never appear publicly before their horizon.
- Quiet creates no envelope, phrase, receipt, or penalty.
- Operators are not described as technically unable to read entrusted intake.
- Invitation secrets, envelope links, plaintext, encryption keys, and recovery
  shares never enter logs, analytics, public manifests, or Bitcoin.
- Every mutation is idempotent, expected-version checked, and close-fenced in
  its commit transaction.
- D-15 public-at-opening semantics supersede private-return paths.
- The canonical manifest exposes commitments, not phrase plaintext or identity
  linkage; opening bundles reveal phrases only when due.
- The ritual number creates no token-supply, minting, reward, rank, allocation,
  membership, or governance authority.
- A failed later layer cannot erase evidence from an earlier layer or silently
  downgrade its promises.

## Recommended Next Layer

- Active window: L0 machine-contract lane
- Selected first unit: `SWU-LIV2-001`
- Decision unlocked: browser and future server share one exact phrase normalization contract
- Major deferred scope: all real intake and all external/irreversible close actions

