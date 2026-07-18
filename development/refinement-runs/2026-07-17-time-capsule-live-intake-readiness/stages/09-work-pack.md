# Work Pack — Time Capsule Live Intake Readiness

Status: `flag` — demonstrable L0 form and machine fixtures ready; manual access/retell evidence blocks the next SWU

Complexity: high

Output mode: split

Active layer window: L0 only

Selected SWU: none; Goal loop stopped at the real `SWU-LIR-002` manual-evidence blocker

## Objective

Move from a static explanation to an evidence-gated intake architecture without
accepting real words until the form contract, synthetic state kernel, public
owner obligations, and optional sealed profile each pass their own layer.

## Delivery Boundary

Included:

- static contract simulator and accessibility/Unicode evidence;
- schemas, data/gate matrices, negative fixtures;
- isolated synthetic public-intake state, close, export, restore, and migration;
- manual public-live and sealed-live decision packages and rehearsals;
- bounded SWUs and receipts.

Excluded:

- real credentials, words, commitments, keys, moderation cases, or incidents;
- production database/deployment before target-stack selection;
- unapproved cryptography or sealed collection;
- root/supply algorithm changes, minting, distribution, token policy, or launch.

## Task Board

| Task | Goal | Layer | Status | Contract |
| --- | --- | --- | --- | --- |
| LIR-001 | Build non-collecting contract simulator | L0 | SWU-LIR-001 pass; SWU-LIR-002 machine pass/manual evidence flag | [TASK-LIR-001.md](09-work-pack/tasks/TASK-LIR-001.md) |
| LIR-002 | Freeze schemas, field lifecycle, gates, and fixtures | L0 | blocked until SWU-LIR-002 manual evidence passes | [TASK-LIR-002.md](09-work-pack/tasks/TASK-LIR-002.md) |
| LIR-003 | Select target and build synthetic intake kernel | L1 | blocked by L0 evidence and stack decision | [TASK-LIR-003.md](09-work-pack/tasks/TASK-LIR-003.md) |
| LIR-004 | Prove close, export, restore, and migration | L1 | blocked by LIR-003 | [TASK-LIR-004.md](09-work-pack/tasks/TASK-LIR-004.md) |
| LIR-005 | Produce public-live owner package and rehearsal | L2 | blocked by L1 and owners | [TASK-LIR-005.md](09-work-pack/tasks/TASK-LIR-005.md) |
| LIR-006 | Decide and conditionally exercise sealed profile | L3 | blocked by L2 and security/privacy/custody owners | [TASK-LIR-006.md](09-work-pack/tasks/TASK-LIR-006.md) |
| LIR-READINESS-007 | Multi-owner launch/block audit | L3 | blocked by every applicable prior gate | [TASK-LIR-READINESS-007.md](09-work-pack/tasks/TASK-LIR-READINESS-007.md) |

## SWU Manifest

| SWU | Parent | Goal | Dependencies | Write scope | Acceptance evidence | Verification | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SWU-LIR-001 | LIR-001 | Repair the static site form into a zero-flow contract simulator | none | existing presentation `site/contribute/` and simulator assets/tests only | semantic journey, conditional controls, complete review/error/quiet/receipt states, zero-flow proof | browser network/storage/history + keyboard/a11y review | local-fallback | pass — `development/task-sessions/2026-07-17-time-capsule-demo/SWU-LIR-001/TASK-SESSION-REPORT.md` |
| SWU-LIR-002 | LIR-001 | Add versioned volatile state and access/Unicode fixtures | 001 | simulator fixtures/tests only | parity across Unicode/IME/bidi and access modes; retell threshold | fixture runner + manual screen-reader matrix | local-fallback | flag — machine 29/29 pass; screen-reader/native-IME/five-person retell evidence unrun — `development/task-sessions/2026-07-17-time-capsule-demo/SWU-LIR-002/TASK-SESSION-REPORT.md` |
| SWU-LIR-003 | LIR-002 | Define logical schemas, IDs, field lifecycle, and capability gates | 001/002 | future `development/time-capsule/spec/` | schemas parse; every field/copy and gate owned; forbidden public joins | schema/coverage validator | local-fallback | blocked by LIR-001 |
| SWU-LIR-004 | LIR-002 | Encode command/state/close/export/incident negatives | 003 | future fixture package | every CRITICAL counter-example has expected failure/receipt | fixture completeness validator | local-fallback | blocked by 003 |
| SWU-LIR-005 | LIR-003 | Select implementation repository/runtime/datastore for synthetic kernel | 003/004 | decision record only | selected option satisfies transaction/fence/export/restore needs; alternatives rejected with evidence | manual decision review | manual | blocked by L0 |
| SWU-LIR-006 | LIR-003 | Implement invented-data command/state kernel | 005 | selected isolated app modules/tests | IDs, versions, idempotency, audit, and state properties pass | stack-specific unit/property/concurrency suite recorded by 005 | local-fallback | blocked by 005 |
| SWU-LIR-007 | LIR-004 | Implement fenced close and allowlist public projection | 006 | close/projection/receipt modules/tests | stale writes fail; one snapshot/export; forbidden fields absent; retries reconcile | frozen-clock/race/export tests | local-fallback | blocked by 006 |
| SWU-LIR-008 | LIR-004 | Exercise partial failure, backup/restore, migration, corruption | 007 | isolated resilience fixtures/runbooks | acknowledged state survives; close never reopens; canonical bytes remain identical | failure injection + cold restore/migration report | local-fallback | blocked by 007 |
| SWU-LIR-009 | LIR-005 | Approve public-live admission, lifecycle, moderation, abuse, incident, continuity contracts | 008 + owners | decision/spec folder only | every public-live gate has owner, evidence, failure, and signed accept/block | multi-owner manual review | manual | blocked by owners |
| SWU-LIR-010 | LIR-005 | Rehearse public-live architecture with invented data | 009 | isolated staging only, no real credentials/content | load, abuse, incident stop/restore, accessibility, export, shutdown drills pass | staging rehearsal + independent review | local-fallback | blocked by 009 |
| SWU-LIR-011 | LIR-006 | Select commitment-only, recoverable encryption, or no sealed path | 010 + security/privacy/custody/archive owners | threat/decision record only | explicit assets, adversaries, low-entropy result, client/key/custody/loss/migration/no-survivor outcome | signed threat-model review | manual | blocked by owners |
| SWU-LIR-012 | LIR-006 | Exercise approved sealed profile with invented data, or remove feature | 011 | conditional client/sealed test modules or public copy repair | profile vectors, metadata/network/storage, opening/consent, recovery/migration tests pass; or option removed | security fixtures and recovery drill | local-fallback | blocked by 011 |
| SWU-LIR-013 | LIR-READINESS-007 | Produce final public/sealed capability launch/block audit | 010 and 012 if applicable | readiness report only | all receipts linked; unresolved blocker forces `block`; no token authority inferred | independent multi-owner audit | manual | blocked by prior layers |

## Blocker Ledger

| ID | Blocks | Owner | Repair |
| --- | --- | --- | --- |
| BL-00 L0 manual access and consequence-retell evidence unrun | SWU-LIR-002 pass and SWU-LIR-003 | access-mode operators + at least five participants | run `site/contribute/tests/ACCESS-MATRIX.md`; any critical misunderstanding requires repair and full rerun |
| BL-01 target application/runtime/datastore absent | L1 code | implementation owner | SWU-LIR-005 |
| BL-02 public deletion/takedown vs immutable canonical bytes unresolved | public-live | content/privacy/legal + verification | SWU-LIR-009 decision; do not default in code |
| BL-03 credential issuance/recovery/revocation/Sybil posture absent | public-live | governance/membership | SWU-LIR-009 |
| BL-04 moderation/appeal/abuse/incident policy absent | public-live | content/privacy/legal/incident | SWU-LIR-009 |
| BL-05 RPO/RTO, restore, migration, shutdown, successor/funding absent | public-live and sealed-live | data/archive/successor | SWU-LIR-008/009 |
| BL-06 sealed low-entropy/client/key/custody profile absent | sealed-live | security/privacy/custody | SWU-LIR-011 |
| BL-07 no live fixture/rehearsal evidence exists | L1+ promotion | evidence owner | execute preceding synthetic SWUs only after authorization |

## Validation Strategy

| Slice | Evidence |
| --- | --- |
| L0 simulator | parser, keyboard, screen reader, RTL/IME, retell, zero request/history/storage |
| L0 schemas | schema parse, cross-object invariant checks, field/gate coverage, negative fixtures |
| L1 kernel | state/property/concurrency/idempotency/clock tests and receipt reconciliation |
| L1 resilience | partial failure, allowlist privacy scan, restore, migration, corruption, canonical-byte diff |
| L2 public readiness | owner decisions, abuse/load/incident/restore/accessibility/shutdown rehearsal |
| L3 sealed | low-entropy/client/key/metadata/network/storage/recovery/migration/no-survivor fixtures or killed path |
| final audit | artifact existence, owner signatures, blocker scan, capability-state and non-effect audit |

## Handoff Contract

Every Task Session handles exactly one SWU and returns:

```yaml
swu_id: SWU-LIR-001
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

Start with `SWU-LIR-001` only after explicit Task Session authorization.
