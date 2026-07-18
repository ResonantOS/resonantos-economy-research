# Template And Profile Selection

## Inventory Lookup

The target repository machine index was parsed first. It contains one matching
candidate plan entry: `.arcanum/inventory/entries/time-capsule-live-intake-refine.md`.
That entry is a non-authority historical candidate and is used only for drift
and traceability.

## Eligibility

| Candidate | Eligible | Reason |
| --- | --- | --- |
| standalone Invoke `work-pack.md` | yes | mandatory canonical executable plan |
| standalone Invoke `implementation-layering.md` | yes | mandatory L0–L3 decision boundary |
| DomainSpec `execution-pack.md` | yes | high complexity and six layer-mapped waves |
| retired `implementation-plan` | no | explicitly retired; `WORK-PACK.md` is authority |
| legacy `module-formulae` execution pack | no | domainspec-spec execution pack is the active family |

## Selection

- Complexity: high
- Output mode: split
- Work-pack profile: standalone Invoke companion
- Layering profile: standalone implementation-layering companion
- Choreography profile: domainspec-spec execution pack
- Tie: none; no user question needed
- Promotion: none; templates are instantiated locally and no inventory or
  template registry state is changed

