---
module: resonant-time-capsule-intake
version: candidate-v1
status: planned
updatedAt: 2026-07-16
docType: implementation-layering
---

# Implementation Layering — Resonant Time Capsule Intake

## Target And Scope

- Target: explanation, six-slot intake, capsule root, supply selection, and releases
- Scope: product workflow and mechanism
- Current state: brownfield public explanation; no real intake or validated selector
- Primary constraint: no real content or token effect before evidence and owner gates

## Layer Boundary Rule

Each layer ends at the smallest slice that changes what the team can responsibly
decide next. Later layers preserve all earlier guarantees.

## Layer Decision Table

| Layer | Decision question | Minimum working unit | Included | Deferred | Exit evidence | Promotion |
| --- | --- | --- | --- | --- | --- | --- |
| L0 | After this layer, we know whether people understand and can use the two-per-opening model without data collection. | Updated public explanation + non-collecting six-slot form + synthetic schema/fixtures. | copy, wireframe, accessibility baseline, invented records | backend, real credentials, real sealed words, real selector | comprehension retell, form checks, zero network/storage proof, schema validation | continue to L1 only if people can state quota, number flow, and visibility consequences |
| L1 | After this layer, we know whether a synthetic/public capsule can close and reproduce the same root and supply. | Test-only credential quota + canonical records + root + synthetic beacon mapping in two implementations. | invented/public test data, close state, receipts, mapping fixtures | real admissions, real private content, launch | cross-implementation vectors, closure attacks, bias/boundary tests | continue to L2 only on exact reproduction and no unresolved steering path |
| L2 | After this layer, we know whether consent, sealed content, moderation, loss, and stewardship can fail safely. | Approved sealed profile and lifecycle exercised only in bounded synthetic/staging conditions. | threat model, client crypto, reconfirmation, quarantine, migration, loss/no-survivor drills | open ceremony, mint, broad rollout | security/privacy review, harmful-reveal fixtures, recovery/migration receipts | continue to L3 only with named owner acceptances |
| L3 | After this layer, we know whether a bounded founding ceremony can be operated and independently audited. | Staging ceremony, preservation package, incident drills, and multi-owner launch/block audit. | deployment package, runbooks, external reproduction, archive handoff | mint/distribution unless separately authorized | signed launch/block decision and reproducible rehearsal | launch, narrow, or stop; research prose cannot decide |

## Capability Progression

| Area | L0 | L1 | L2 | L3 |
| --- | --- | --- | --- | --- |
| Explanation/form | static and non-collecting | synthetic/public test flow | approved sealed and release states | production-reviewed intake |
| Admission/quota | fake credentials in fixtures | test credential service | owner-approved issuance/audit | operated founding cohort |
| Capsule mechanics | schemas and vectors | two reproducible implementations | degraded-mode and governance hardening | independent ceremony audit |
| Privacy/consent | honest disabled sealed copy | sealed interface only | approved construction and reconfirmation | operated custody/succession |
| Stewardship | event contract | synthetic release views | migration/loss drills | long-term archive handoff |

## Non-Regression Guardrails

- The quota stays at two slots per horizon unless a successor rules version is created.
- Empty participation remains valid and unpenalized.
- Credentials never become public identity or unique-human proof.
- No word gains fixed token value or extra weight from visibility.
- Rules close before the beacon is observed.
- Later releases never change the root or initial supply.
- Sealed plaintext never reaches the server under an approved live profile.
- No layer turns participation into allocation, rank, reward, or governance authority.
- A later layer may strengthen a guarantee but cannot silently rename a weaker guarantee.

## Promotion Evidence

Preference, stakeholder enthusiasm, or visual polish is never promotion evidence.
Each layer cites fixture results, comprehension evidence, reproducibility receipts,
and owner decisions from the preceding layer.

## Recommended Next Layer

- Next layer: L0
- Key decision: can a new participant understand and navigate the complete six-slot model?
- First SWU: `SWU-TC-001`
- Major deferred scope: all real credentials, words, sealed content, supply selection, and launch

