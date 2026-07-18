---
module: live-intake-v2
version: 2
status: candidate
updatedAt: 2026-07-17
docType: work-pack
---

# WORK-PACK: Live Intake Plan V2

## Control Fields

| Field | Value |
| --- | --- |
| workPackGateStatus | block — `SWU-LIV2-001`–`006` and `010`–`015` evidenced; `SWU-LIV2-016` stopped at its writer-clock scope gate |
| phaseStatus | flag — later human, owner, external-protocol, and irreversible gates remain open |
| complexity | high |
| outputMode | split |
| executionPackRef | [EXECUTION-PACK.md](EXECUTION-PACK.md) |
| layeringArtifactRef | [IMPLEMENTATION-LAYERING.md](IMPLEMENTATION-LAYERING.md) |
| dispatchTechniqueTrace | [DISPATCH-TECHNIQUE-TRACE.md](DISPATCH-TECHNIQUE-TRACE.md) |
| distillValidationStatus | pass for plan structure and selected first SWU |
| swuAtomicityStatus | pass; task-shaped count 0 |
| firstUnitNarrownessStatus | pass |
| activeLayerWindow | L1 invented-data machine lane; L0 human evidence pending |
| lastUpdatedAt | 2026-07-17 |
| readinessProfile | bounded initial release |

## Objective

Deliver an evidence-gated path from the completed non-collecting phrase form to
an invited, editable, public-at-opening capsule that can close reproducibly,
publish a recovery-complete package, anchor its fingerprint in Bitcoin, and
derive the ritual number without creating token or governance authority.

## Delivery Boundary

Included:

- versioned phrase, envelope, lifecycle, capability, and negative-fixture contracts;
- separate manual accessibility/IME/comprehension evidence;
- isolated Node.js/TypeScript and SQLite implementation with invented data;
- private invite exchange, immutable versions, at-rest AEAD, and private moderation;
- server-authoritative close, canonical manifest, fingerprint, restore, and migration;
- feature-gated staged adapter and owner/incident/restore rehearsal;
- public-at-opening horizon bundles, tlock/drand, static decoder, 3-of-5 emergency recovery;
- Arweave plus mirrors, Bitcoin direct carrier, number vectors, and close audit.

Excluded:

- private-return keys or messages;
- pre-opening public phrase feed;
- open anonymous or wallet-based admission;
- real participant data before L2 manual promotion;
- mainnet/archive writes before their explicit L3 ceremony gates;
- NFT requirements, token minting/distribution, allocation, reward, rank,
  membership, governance power, or an economic supply claim;
- guaranteed permanence or scheduled maintenance.

## Delivery Slices

| Slice | Outcome | Layer | Wave | Dependencies | Validation |
| --- | --- | --- | --- | --- | --- |
| S-01 | versioned machine contract | L0 | [W0](work-pack/waves/W0-L0-contract.md) | completed V2 form evidence | schema/vector/gate validation |
| S-02 | human consequence evidence | L0 | [W0](work-pack/waves/W0-L0-contract.md) | V2 access matrix | manual mode receipts and 5/5 retell |
| S-03 | invented-data intake kernel | L1 | [W1](work-pack/waves/W1-L1-intake.md) | S-01 | unit/property/concurrency/security tests |
| S-04 | fenced close and reproducible manifest | L1 | [W2](work-pack/waves/W2-L1-close.md) | S-03 | race, canonicalization, privacy, restore tests |
| S-05 | bounded live-readiness decision | L2 | [W3](work-pack/waves/W3-L2-live-readiness.md) | S-02–S-04 and owners | staging, rollback, incident, restore, human regression |
| S-06 | recovery-complete future opening | L3 | [W4](work-pack/waves/W4-L3-recovery.md) | S-04 | G-01–G-03, G-05–G-06, G-09 |
| S-07 | Bitcoin and number verification | L3 | [W4](work-pack/waves/W4-L3-recovery.md) | manifest/fingerprint | carrier and deterministic-vector receipts |
| S-08 | close rehearsal, readiness audit, and manual ceremony | L3 | [W5](work-pack/waves/W5-L3-close.md) | S-05–S-07 | G-07–G-10, custody receipts, final audit |

## Task Board

| Task | Goal | Layer | Wave | Gate | Status |
| --- | --- | --- | --- | --- | --- |
| [TASK-LIV2-001](work-pack/tasks/TASK-LIV2-001.md) | freeze machine contracts | L0 | W0 | pass | SWU-001–005 pass |
| [TASK-LIV2-002](work-pack/tasks/TASK-LIV2-002.md) | obtain human access/comprehension evidence | L0 | W0 | manual evidence blocked | SWU-006 pass; SWU-007–009 require humans |
| [TASK-LIV2-003](work-pack/tasks/TASK-LIV2-003.md) | build invented-data intake foundation | L1 | W1 | pass | SWU-010–015 pass |
| [TASK-LIV2-004](work-pack/tasks/TASK-LIV2-004.md) | prove close, manifest, fingerprint, resilience | L1 | W2 | blocked by writer-clock scope decision | SWU-016 context gate block |
| [TASK-LIV2-005](work-pack/tasks/TASK-LIV2-005.md) | produce bounded public-live readiness evidence | L2 | W3 | blocked by L0 human, L1, owners | not started |
| [TASK-LIV2-006](work-pack/tasks/TASK-LIV2-006.md) | prove public-at-opening recovery package | L3 | W4 | blocked by canonical format | not started |
| [TASK-LIV2-007](work-pack/tasks/TASK-LIV2-007.md) | prove Bitcoin carrier and ritual number | L3 | W4 | blocked by fingerprint | not started |
| [TASK-LIV2-008](work-pack/tasks/TASK-LIV2-008.md) | rehearse and perform separately approved close | L3 | W5 | blocked by all proof gates | not started |
| [TASK-LIV2-READINESS-009](work-pack/tasks/TASK-LIV2-READINESS-009.md) | final launch/block audit | L3 | W5 | blocked by pre-close receipts | not started |

## Shared SWU Manifest

Every row links to the task-local executable contract. `local-fallback` means a
single Task Session executes the SWU locally; it does not authorize execution.

| SWU | Parent | Primary behavior | Dependencies | Owner | Handoff |
| --- | --- | --- | --- | --- | --- |
| SWU-LIV2-001 | [001](work-pack/tasks/TASK-LIV2-001.md) | freeze phrase normalization/profile vectors | historical V2 fixture | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-001/TASK-SESSION-REPORT.md) |
| SWU-LIV2-002 | [001](work-pack/tasks/TASK-LIV2-001.md) | freeze envelope/slot schema | 001 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-002/TASK-SESSION-REPORT.md) |
| SWU-LIV2-003 | [001](work-pack/tasks/TASK-LIV2-001.md) | freeze version/idempotency state contract | 002 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-003/TASK-SESSION-REPORT.md) |
| SWU-LIV2-004 | [001](work-pack/tasks/TASK-LIV2-001.md) | freeze field lifecycle/public allowlist | 002 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-004/TASK-SESSION-REPORT.md) |
| SWU-LIV2-005 | [001](work-pack/tasks/TASK-LIV2-001.md) | encode capability/negative fixtures | 003–004 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-005/TASK-SESSION-REPORT.md) |
| SWU-LIV2-006 | [002](work-pack/tasks/TASK-LIV2-002.md) | regenerate V2 access matrix | V2 fixture | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-006/TASK-SESSION-REPORT.md) |
| SWU-LIV2-007 | [002](work-pack/tasks/TASK-LIV2-002.md) | screen-reader/keyboard/RTL manual run | 006 | manual | blocked |
| SWU-LIV2-008 | [002](work-pack/tasks/TASK-LIV2-002.md) | native-IME manual run | 006 | manual | blocked |
| SWU-LIV2-009 | [002](work-pack/tasks/TASK-LIV2-002.md) | five-person consequence retell | 006 | manual | blocked |
| SWU-LIV2-010 | [003](work-pack/tasks/TASK-LIV2-003.md) | isolate Node/TypeScript service and config boundary | 005 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-010/TASK-SESSION-REPORT.md) |
| SWU-LIV2-011 | [003](work-pack/tasks/TASK-LIV2-003.md) | create SQLite migrations/constraints | 010 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-011/TASK-SESSION-REPORT.md) |
| SWU-LIV2-012 | [003](work-pack/tasks/TASK-LIV2-003.md) | exchange/revoke/recover private invite sessions | 011 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-012/TASK-SESSION-REPORT.md) |
| SWU-LIV2-013 | [003](work-pack/tasks/TASK-LIV2-003.md) | confirm/edit/withdraw immutable envelope versions | 011–012 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-013/TASK-SESSION-REPORT.md) |
| SWU-LIV2-014 | [003](work-pack/tasks/TASK-LIV2-003.md) | encrypt phrase fields and redact logs | 011 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-014/TASK-SESSION-REPORT.md) |
| SWU-LIV2-015 | [003](work-pack/tasks/TASK-LIV2-003.md) | private steward moderation dispositions | 013–014 | local-fallback | pass — [receipt](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-015/TASK-SESSION-REPORT.md) |
| SWU-LIV2-016 | [004](work-pack/tasks/TASK-LIV2-004.md) | fence close at transactional commit | 013,015 | local-fallback | blocked — [decision gate](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-016/DECISION-GATE.md) |
| SWU-LIV2-017 | [004](work-pack/tasks/TASK-LIV2-004.md) | select one eligible closing snapshot | 016 | local-fallback | blocked |
| SWU-LIV2-018 | [004](work-pack/tasks/TASK-LIV2-004.md) | serialize public canonical commitment manifest | 017 | local-fallback | blocked |
| SWU-LIV2-019 | [004](work-pack/tasks/TASK-LIV2-004.md) | compute cross-runtime capsule fingerprint | 018 | local-fallback | blocked |
| SWU-LIV2-020 | [004](work-pack/tasks/TASK-LIV2-004.md) | cold restore/migrate/corrupt without drift | 016–019 | local-fallback | blocked |
| SWU-LIV2-021 | [005](work-pack/tasks/TASK-LIV2-005.md) | sign admission/safety/operations owner package | 007–009,020 | manual | blocked |
| SWU-LIV2-022 | [005](work-pack/tasks/TASK-LIV2-005.md) | add feature-gated same-origin client adapter | 020–021 | local-fallback | blocked |
| SWU-LIV2-023 | [005](work-pack/tasks/TASK-LIV2-005.md) | stage deploy/rollback/incident/restore with invented cohort | 022 | local-fallback | blocked |
| SWU-LIV2-024 | [005](work-pack/tasks/TASK-LIV2-005.md) | repeat human regression against staged candidate | 023 | manual | blocked |
| SWU-LIV2-025 | [005](work-pack/tasks/TASK-LIV2-005.md) | decide bounded real-intake enablement | 021–024 | manual | blocked |
| SWU-LIV2-026 | [006](work-pack/tasks/TASK-LIV2-006.md) | freeze horizon bundle/envelope format | 018–019 | local-fallback | blocked |
| SWU-LIV2-027 | [006](work-pack/tasks/TASK-LIV2-006.md) | prove tlock/drand due-time key path | 026 | local-fallback | blocked |
| SWU-LIV2-028 | [006](work-pack/tasks/TASK-LIV2-006.md) | prove static offline decoder | 027 | local-fallback | blocked |
| SWU-LIV2-029 | [006](work-pack/tasks/TASK-LIV2-006.md) | prove 3-of-5 emergency key path | 026 | local-fallback | blocked |
| SWU-LIV2-030 | [006](work-pack/tasks/TASK-LIV2-006.md) | publish/retrieve disposable archive and mirrors | 028–029 | local-fallback | blocked |
| SWU-LIV2-031 | [007](work-pack/tasks/TASK-LIV2-007.md) | rehearse direct Bitcoin carrier/replacement lineage | 019 | local-fallback | blocked |
| SWU-LIV2-032 | [007](work-pack/tasks/TASK-LIV2-007.md) | freeze seed/range vectors | 019,031 | local-fallback | blocked |
| SWU-LIV2-033 | [008](work-pack/tasks/TASK-LIV2-008.md) | freeze fail-closed close runbook/controller | 025–032 | local-fallback | blocked |
| SWU-LIV2-034 | [008](work-pack/tasks/TASK-LIV2-008.md) | run complete disposable 2/5/10 rehearsal | 033 | local-fallback | blocked |
| SWU-LIV2-035 | [008](work-pack/tasks/TASK-LIV2-008.md) | accept five steward custody assignments | 029,034 | manual | blocked |
| SWU-LIV2-036 | [008](work-pack/tasks/TASK-LIV2-008.md) | execute one approved production close ceremony | readiness audit,025,034–035 | manual | blocked |

## Atomicity And First-Unit Review

- 36 non-exempt SWUs each own one primary behavior and one reviewable receipt.
- Candidate child units and retained-boundary reasoning are recorded in each
  task contract; none relies on shared files or sequence alone for atomicity.
- `SWU-LIV2-001` changes only the reusable phrase-profile contract and its
  deterministic vectors. It does not build an API, alter the existing form,
  accept data, or choose external services.
- Closure-only `TASK-LIV2-READINESS-009` uses the allowed `READINESS` exemption.
- Task-shaped SWUs: 0.

## Gates

1. `SWU-LIV2-001` through `SWU-LIV2-006` and `SWU-LIV2-010` through `015`
   passed with content-addressed receipts. `SWU-LIV2-016` is blocked by its
   [writer-clock scope decision](../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-016/DECISION-GATE.md);
   human `SWU-LIV2-007` through `009` remain blocked.
2. Every execution uses one SWU and an execution-time Context Builder pack.
3. L1 receives only invented data.
4. L2 requires all L0 human receipts and all L1 reconciliation evidence.
5. Real intake requires the manual receipt from SWU-LIV2-025.
6. External archive/mainnet/custody actions remain disabled until their L3 gates.
7. Production close requires `TASK-LIV2-READINESS-009` to return ready and a
   separate human authorization for SWU-LIV2-036.
8. Any unresolved blocking row in [GAP-LEDGER.md](GAP-LEDGER.md) fails closed.

## Validation And Trace

- Validation: [VALIDATION-STRATEGY.md](VALIDATION-STRATEGY.md)
- Decisions: [work-pack/shared/cross-task-decisions.md](work-pack/shared/cross-task-decisions.md)
- Gaps: [work-pack/shared/cross-task-gaps.md](work-pack/shared/cross-task-gaps.md)
- Traceability: [work-pack/shared/traceability.md](work-pack/shared/traceability.md)
- Context: [work-pack/shared/context.md](work-pack/shared/context.md)
- Distill: [DISTILL-VALIDATION.md](DISTILL-VALIDATION.md)

## Next Route

Execution is stopped at the SWU-LIV2-016 Decision Gate. Choose either a preceding
writer-clock repair SWU (recommended) or an in-place scope expansion before another
Task Session mutates the command contract, envelope/moderation writers, or close modules.
