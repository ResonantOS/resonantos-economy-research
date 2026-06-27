# Inventory Entry: Local Source Snapshots

Status: active
Entry type: source
Authority posture: supporting-source
Tags: `source-snapshot`, `harvest`, `cav2`, `domainspec`, `resonantos-economy`

## Source Refs

- [sources/local-snapshots/README.md](../../../sources/local-snapshots/README.md)
- [sources/local-snapshots/CLOSURE-STRATEGY.md](../../../sources/local-snapshots/CLOSURE-STRATEGY.md)
- [sources/local-snapshots/cav2/](../../../sources/local-snapshots/cav2/)
- [sources/local-snapshots/domainspec-lean/](../../../sources/local-snapshots/domainspec-lean/)

## Summary

The repository now contains local snapshots of the CAv2 Evidence Exchange,
CAv2 authority/promotion sources, and selected DomainSpec Lean formalization
sources required for the first harvest. Harvest agents should cite these local
snapshots and use the closure strategy before requesting expansion.

## Reusable Selectors

- `local-source-snapshots` for the copied evidence surface.
- `snapshot-closure-strategy` for reducing expansion requests.
- `cav2-snapshot` for CAv2 method authority and Evidence Exchange sources.
- `lean-snapshot` for DomainSpec Lean formalization discipline sources.

## Residue

The first harvest distilled these snapshots into
`harvest/cav2-lean/selector-map.md` and `harvest/cav2-lean/findings.md`. If a
future harvest requires a missing source for a load-bearing stronger claim, the
snapshot set must be expanded before that source can be used.

## Promotion Boundary

Snapshots are source evidence. They do not promote source material into
ResonantOS economy policy, token policy, bounty policy, governance authority, or
implementation readiness.
