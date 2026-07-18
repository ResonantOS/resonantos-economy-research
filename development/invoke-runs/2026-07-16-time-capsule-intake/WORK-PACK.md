---
module: resonant-time-capsule-intake
version: candidate-v1
status: planned
updatedAt: 2026-07-16
docType: work-pack
---

# WORK-PACK — Resonant Time Capsule Intake

## Control Fields

| Field | Value | Notes |
| --- | --- | --- |
| workPackGateStatus | pass | L0 planning only; later tasks retain their owner gates. |
| complexity | high | Durable personal data, algorithmic selection, multiple outputs, and several owner gates. |
| outputMode | split | Task and wave contracts are separate. |
| executionPackRef | [EXECUTION-PACK.md](EXECUTION-PACK.md) | Required choreography. |
| layeringArtifactRef | [IMPLEMENTATION-LAYERING.md](IMPLEMENTATION-LAYERING.md) | L0–L3 authority. |
| dispatchTechniqueTrace | [DISPATCH-TECHNIQUE-TRACE.md](DISPATCH-TECHNIQUE-TRACE.md) | Required plan trace. |
| distillValidationStatus | pass | L0 route recomposes; later gaps are owned and gated. |
| activeLayerWindow | L0 | No later layer is authorized. |
| selectedSWU | SWU-TC-001 | Recommended only; execution still needs an explicit Task Session. |
| readinessProfile | pilot | Does not imply ceremony or token launch readiness. |

## Objective

Deliver a clear, testable path from the new two-words-per-release rule to a
bounded form, synthetic capsule, reproducible supply selector, consent-safe
release lifecycle, and owner-gated ceremony—without collecting real words or
changing token state during Invoke.

## Delivery Boundary

Included in the plan:

- public explanation and form integration;
- schema, quota, state, canonicalization, root, beacon, and mapping implementation details;
- synthetic fixtures and two-implementation reproduction;
- sealed-path, moderation, release, preservation, and readiness gates;
- L0–L3 waves and one-SWU handoff contracts.

Excluded from this plan's authority:

- issuing real participation credentials;
- collecting real public or sealed words;
- choosing the final supply band or beacon provider;
- approving cryptography, privacy/legal posture, or ten-year custody;
- minting, distribution, sale, liquidity, or governance integration;
- authorizing the real ceremony.

## Delivery Slices

| Slice | Outcome | Layer | Wave | Dependencies | Validation |
| --- | --- | --- | --- | --- | --- |
| S-01 | Public explanation and non-collecting six-slot form | L0 | W0 | design artifacts | retell test, HTML/a11y checks, zero data flow |
| S-02 | Schemas and adversarial fixture contract | L0 | W0 | S-01 copy contract | schema validation and fixture completeness |
| S-03 | Reproducible synthetic capsule and supply selector | L1 | W1 | S-02 | two implementations, known vectors, mapping tests |
| S-04 | Test-only admission, drafts, close, and receipts | L1 | W1 | S-02, S-03 records | state/property tests and close attacks |
| S-05 | Consent, moderation, and release lifecycle | L2 | W2 | L1 evidence | transition fixtures and display/root separation |
| S-06 | Sealed profile and long-term stewardship | L2 | W2 | owner approvals + S-05 | threat-model review, loss/migration fixtures |
| S-07 | Bounded staging and preservation package | L3 | W3 | all L2 evidence | rehearsal, incident drills, external reproduction |
| S-08 | Multi-owner launch/block audit | L3 | W3 | S-07 | signed decision with evidence refs |

## Task Status Board

| Task | Goal | Layer | Wave | Gate | Status |
| --- | --- | --- | --- | --- | --- |
| [TASK-TC-001](work-pack/tasks/TASK-TC-001.md) | Integrate explanation and non-collecting form | L0 | [W0](work-pack/waves/W0.md) | ready after Task Session approval | not-started |
| [TASK-TC-002](work-pack/tasks/TASK-TC-002.md) | Define schemas and fixture pack | L0 | [W0](work-pack/waves/W0.md) | ready after TC-001 copy contract | not-started |
| [TASK-TC-003](work-pack/tasks/TASK-TC-003.md) | Implement synthetic root and supply selector | L1 | [W1](work-pack/waves/W1.md) | blocked by L0 evidence + G-01/G-02 for real parameters | not-started |
| [TASK-TC-004](work-pack/tasks/TASK-TC-004.md) | Implement test-only intake state and quota | L1 | [W1](work-pack/waves/W1.md) | blocked by TC-002/003 | not-started |
| [TASK-TC-005](work-pack/tasks/TASK-TC-005.md) | Model consent, moderation, and releases | L2 | [W2](work-pack/waves/W2.md) | blocked by L1 + G-05 | not-started |
| [TASK-TC-006](work-pack/tasks/TASK-TC-006.md) | Approve and exercise sealed/stewardship profile | L2 | [W2](work-pack/waves/W2.md) | blocked by G-04/G-06 | not-started |
| [TASK-TC-007](work-pack/tasks/TASK-TC-007.md) | Package bounded staging ceremony | L3 | [W3](work-pack/waves/W3.md) | blocked by L2 | not-started |
| [TASK-TC-READINESS-008](work-pack/tasks/TASK-TC-READINESS-008.md) | Produce launch/block audit | L3 | [W3](work-pack/waves/W3.md) | blocked by TC-007 and all owners | not-started |

## SWU Manifest

| SWU | Parent | Goal | Dependencies | Write scope | Acceptance evidence | Check | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SWU-TC-001 | [TC-001](work-pack/tasks/TASK-TC-001.md) | Replace one-word copy with the three-horizon model. | none | existing presentation homepage/full-idea page | retell copy review and no overclaim diff | HTML/text review | local-fallback | selected, not authorized |
| SWU-TC-002 | [TC-001](work-pack/tasks/TASK-TC-001.md) | Add the non-collecting form surface. | TC-001 | presentation site form path/assets | semantic form, responsive/a11y check, zero submit endpoint | browser + network inspection | local-fallback | blocked by SWU-TC-001 |
| SWU-TC-003 | [TC-002](work-pack/tasks/TASK-TC-002.md) | Define rules, envelope, record, receipt schemas. | TC-001 | future capsule spec/schema folder | schemas parse and encode six-slot invariants | schema validator | local-fallback | blocked by TC-001 |
| SWU-TC-004 | [TC-002](work-pack/tasks/TASK-TC-002.md) | Encode corrected fixture matrix and negatives. | TC-003 | future capsule fixture folder | all ten evidence areas plus form/quota/release cases | fixture completeness review | local-fallback | blocked by TC-003 |
| SWU-TC-005 | [TC-003](work-pack/tasks/TASK-TC-003.md) | Implement canonical records and Merkle root. | TC-003/004 | future capsule core implementation A | known vectors and malformed cases | unit/property tests | local-fallback | blocked by L0 |
| SWU-TC-006 | [TC-003](work-pack/tasks/TASK-TC-003.md) | Implement beacon mixing, rejection sampling, and independent implementation B. | TC-005 | future capsule selector + verifier | byte-identical results and boundary/bias cases | cross-implementation test | local-fallback | blocked by TC-005/G-01/G-02 |
| SWU-TC-007 | [TC-004](work-pack/tasks/TASK-TC-004.md) | Implement test credential quota and draft/version state. | TC-003 | future intake test service | 0–2/horizon properties and atomic supersession | state/property tests | local-fallback | blocked by TC-003 |
| SWU-TC-008 | [TC-004](work-pack/tasks/TASK-TC-004.md) | Implement close, manifest selection, and receipts. | TC-005/007 | future intake close/receipt modules | close is fail-closed; latest confirmed records only | clock/concurrency tests | local-fallback | blocked by TC-005/007 |
| SWU-TC-009 | [TC-005](work-pack/tasks/TASK-TC-005.md) | Specify consent/display transition machine. | TC-004 | future release lifecycle spec | transition table covers public, reconfirm, refuse, silence, loss | model review | local-fallback | blocked by L1/G-05 |
| SWU-TC-010 | [TC-005](work-pack/tasks/TASK-TC-005.md) | Implement release manifest and disposition overlay with synthetic data. | TC-009 | future release lifecycle implementation | display changes never change root/supply | transition/negative tests | local-fallback | blocked by TC-009 |
| SWU-TC-011 | [TC-006](work-pack/tasks/TASK-TC-006.md) | Decide sealed threat model and profile. | TC-005 + owners | future security decision/spec folder | named algorithms, keys, custody, loss, migration, no-survivor decision | security/privacy review | manual | blocked by G-04/G-06 |
| SWU-TC-012 | [TC-006](work-pack/tasks/TASK-TC-006.md) | Implement and test approved sealed/stewardship profile. | TC-011 | future client crypto + stewardship staging | guessing/opening/loss/migration fixtures pass | security and recovery tests | local-fallback | blocked by TC-011 |
| SWU-TC-013 | [TC-007](work-pack/tasks/TASK-TC-007.md) | Build staging deployment and operator runbooks. | TC-006 | future staging/deployment/runbook paths | isolated rehearsal with no mint capability | staging rehearsal | local-fallback | blocked by L2 |
| SWU-TC-014 | [TC-007](work-pack/tasks/TASK-TC-007.md) | Build preservation export and independent reproduction package. | TC-013 | future archive/export package | external verifier reproduces and restore drill passes | cold restore + verifier check | local-fallback | blocked by TC-013 |

## Blockers

| ID | Scope | Description | Owner | Next action |
| --- | --- | --- | --- | --- |
| B-01 | L1 real parameters | Final supply unit/band is absent. | token/protocol | decide and fixture whole/atomic units, decimals, min/max, overflow |
| B-02 | L1 real beacon | Provider, round, independence posture, and fallback are absent. | security/mechanism | select and attack a frozen beacon contract |
| B-03 | real intake | Credential issuance is not a unique-person or legitimacy solution. | governance/membership | specify issuance, recovery, audit, revocation, Sybil posture |
| B-04 | L2 sealed | No approved cryptographic/custody profile exists. | security/privacy/custody | complete SWU-TC-011 before any real sealed collection |
| B-05 | L2 release | Moderation, appeals, privacy/legal, death/incapacity behavior are open. | content/legal/privacy | approve transition and display policy |
| B-06 | L2/L3 stewardship | No ten-year continuity owner or runbook exists. | archive/successor | define redundancy, migration, succession, loss/no-survivor outcomes |
| B-07 | L1+ evidence | No corrected fixture has run. | fixture/evidence | execute synthetic evidence pack after L0 |

## Validation Strategy

| Check | Scope | Evidence |
| --- | --- | --- |
| retell/comprehension | explanation and form | participant states quota, number flow, visibility, releases |
| HTML and accessibility | L0 form | parser, keyboard, screen reader, responsive review |
| no-collection proof | L0 form | network/storage inspection and disabled submission |
| schema and invariant | L0/L1 | validators and property tests for 0–2/horizon |
| cross-implementation reproduction | L1 | exact canonical bytes, root, seed, counter, supply |
| adversarial closure/beacon | L1 | reopen, withholding, fallback, substitution, concurrency fixtures |
| bias/range/token compatibility | L1 | rejection, boundaries, decimals, overflow, wallet-display fixtures |
| consent/moderation/loss | L2 | transition, harmful reveal, silence, death, key loss, quarantine fixtures |
| stewardship | L2/L3 | migration, cold restore, successor, no-survivor drills |
| authority/non-effect | all layers | no allocation/rank/reward/governance; no mint capability in capsule module |

## Navigation And Handoff

Start with `SWU-TC-001`. At execution time, Context Builder must generate a
strict Markdown + JSON session-evidence pack from its task source anchors.
Invoke has not pre-generated that runtime pack. Each Task Session returns:

```yaml
swu_id: SWU-TC-001
result: pass | flag | block | interrupted
capability_ref: task-session
receipt_kind: native-stage | local-fallback | blocked
receipt_artifact: path | none
files_touched: []
validation: []
blockers: []
residue: []
reroute: next-swu | owner | none
handoff_note: summary
```

No task starts from this file alone; the user must authorize Task Session and
the active SWU. L1–L3 also require their layer promotion evidence and owner gates.

