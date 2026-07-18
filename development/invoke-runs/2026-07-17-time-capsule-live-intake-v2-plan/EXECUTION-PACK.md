# Execution Pack — Live Intake Plan V2

## Planning Control

| Field | Value |
| --- | --- |
| planningGateStatus | pass for SWU-LIV2-001 only |
| complexity | high |
| baselineWave | W0 |
| activePlanRef | `work-pack/waves/W0-L0-contract.md` |
| workPackManifest | `WORK-PACK.md` |
| layeringArtifact | `IMPLEMENTATION-LAYERING.md` |
| activeLayerWindow | L0 machine-contract lane |
| readinessProfile | bounded initial release |

## Wave Choreography

| Wave | Layer | Tasks | Entry | Exit | Parallelism |
| --- | --- | --- | --- | --- | --- |
| [W0](work-pack/waves/W0-L0-contract.md) | L0 | 001, 002 | historical V2 evidence | machine contract plus separate human receipts | Task 002 may run beside 001 after its matrix is refreshed |
| [W1](work-pack/waves/W1-L1-intake.md) | L1 | 003 | machine contract lane passes | invented intake receipts | sequential database foundations; independent crypto negatives after schema |
| [W2](work-pack/waves/W2-L1-close.md) | L1 | 004 | W1 exact reconciliation | one snapshot/manifest/fingerprint and resilience receipts | canonicalization follows snapshot; resilience follows stable bytes |
| [W3](work-pack/waves/W3-L2-live-readiness.md) | L2 | 005 | W0 human + W2 + owners | signed live/block decision | no real data; owner review precedes adapter promotion |
| [W4](work-pack/waves/W4-L3-recovery.md) | L3 | 006, 007 | stable manifest/fingerprint | protocol/archive/Bitcoin/number receipts | Tasks 006 and 007 may proceed in parallel after shared format freeze |
| [W5](work-pack/waves/W5-L3-close.md) | L3 | 008, READINESS-009 | W3/W4 pass | rehearsal, audit, then separately authorized close | audit joins all pre-close receipts; production close is last and manual |

## Scheduling Rules

- One SWU per Task Session.
- The only current handoff is SWU-LIV2-001.
- Parallel branches require disjoint write scopes; their receipts join at the
  wave gate before promotion.
- Manual evidence and owner decisions cannot be simulated by implementation work.
- External or irreversible operations are never implied by completing local fixtures.
- A failed layer remains visible as residue and does not silently trigger a weaker route.

## Receipt Contract

```yaml
swu_id: SWU-LIV2-NNN
result: pass | flag | block | interrupted
capability_ref: task-session | manual-owner
receipt_kind: native-stage | local-fallback | handoff | blocked
receipt_artifact: path | none
files_touched: []
validation: []
blockers: []
residue: []
reroute: next-swu | owner | decision-gate | none
handoff_note: summary
```

## Promotion Stops

- W0 machine evidence cannot promote real collection.
- W1/W2 invented data cannot replace W0 human evidence.
- W3 cannot approve the close protocol.
- W4 cannot broadcast/upload final artifacts or destroy working keys.
- W5 rehearsal cannot authorize SWU-LIV2-036.

