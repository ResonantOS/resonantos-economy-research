# Harvest Strategy

Status: active strategy
Promotion scope: local-research-only
Owner route: standalone research authority; CyberAlchemy v2 method authority

## Purpose

Harvesting turns nearby source lineages into local snapshots and selectors
before the broad economy research fan-out runs. The goal is not to copy
everything from CyberAlchemy v2 or DomainSpec Lean. The goal is to copy the
necessary source files into this standalone repository, then extract the grammar
this repository needs in order to ask sharper questions:

- What is a source claim?
- What is method authority?
- What is a workflow witness?
- What is a candidate invariant?
- What remains open residue?
- What must not become token, bounty, or governance policy by proximity?

## First Harvest

The first harvest is:

```text
CyberAlchemy v2 Evidence Exchange
  +
DomainSpec Lean formalization
  ->
ResonantOS economy research selectors
```

The proposed dispatch is
[dispatch/PROPOSED-HARVEST-DISPATCH.md](../dispatch/PROPOSED-HARVEST-DISPATCH.md).
The current source snapshot set is
[sources/local-snapshots/](../sources/local-snapshots/README.md). The dispatch
is not registered or run until the human explicitly confirms it.

If the harvest needs another CyberAlchemy v2 or DomainSpec Lean file, add it to
`sources/local-snapshots/` first, update the manifest checksum, and then use the
local copy. Do not require another person's machine to have the original
checkout.

To reduce expansion churn, use
[sources/local-snapshots/CLOSURE-STRATEGY.md](../sources/local-snapshots/CLOSURE-STRATEGY.md):
do not expand for every internal link inside copied source text; batch only
load-bearing missing sources that cannot be supported or demoted from the
current snapshot corpus.

## Source Surfaces

### CyberAlchemy v2

Use the local snapshots first, as method authority and product-research
precedent, not as proof of a safe ResonantOS economy:

- [proposal-blueprint.md](../sources/local-snapshots/cav2/evidence-exchange/proposal-blueprint.md)
- [findings.md](../sources/local-snapshots/cav2/evidence-exchange/findings.md)
- [research.md](../sources/local-snapshots/cav2/evidence-exchange/research.md)
- [AUTHORITY-MODEL.md](../sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md)
- [promotion-policy.md](../sources/local-snapshots/cav2/authority/promotion-policy.md)
- [standalone repository decision](../sources/local-snapshots/cav2/authority/decisions/2026-06-26-resonantos-economy-research-standalone.md)

Extract:

- credit versus authority separation;
- source-kind and promotion vocabulary;
- reward-adapter gates;
- non-collapse rules for evidence markets;
- contribution workflow witnesses;
- failure modes where measurement becomes the target.

### DomainSpec Lean Formalization

Use the local snapshots first, as formalization discipline and invariant-writing
precedent, not as proof of ResonantOS economics:

- [README.md](../sources/local-snapshots/domainspec-lean/README.md)
- [FRAMEWORK-IMPLICATIONS.md](../sources/local-snapshots/domainspec-lean/FRAMEWORK-IMPLICATIONS.md)
- [OPEN-PROBLEM-LOOP-CLOSURE.md](../sources/local-snapshots/domainspec-lean/OPEN-PROBLEM-LOOP-CLOSURE.md)
- [PRIZES.md](../sources/local-snapshots/domainspec-lean/PRIZES.md)
- [GLOSSARY.md](../sources/local-snapshots/domainspec-lean/GLOSSARY.md)
- [LEAN-ARCHITECTURE.md](../sources/local-snapshots/domainspec-lean/LEAN-ARCHITECTURE.md)
- [theorem README.md](../sources/local-snapshots/domainspec-lean/theorem/README.md)
- [research-social-dynamic README.md](../sources/local-snapshots/domainspec-lean/research-social-dynamic/README.md)

Extract:

- invariant style;
- witness requirements;
- typed negative and open-problem loop closure;
- prize versus achievement separation;
- theorem/proof vocabulary for claim discipline;
- authority, bet, prize, workflow, and mechanism-safety vocabulary that can be
  translated without overclaiming.

## Harvest Outputs

The first harvest should produce:

- copied source snapshots under `sources/local-snapshots/`;
- `harvest/cav2-lean/research.md`: verbatim explorer returns if a dispatch runs.
- `harvest/cav2-lean/findings.md`: cited selector synthesis if a dispatch runs.
- `harvest/cav2-lean/selector-map.md`: parent-integrated selector map.
- updates to [sources/source-records.md](../sources/source-records.md).
- updates to [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md).
- updates to [NOTATION.md](../NOTATION.md).
- updates to [levels/L1-residue-map.md](../levels/L1-residue-map.md).
- updates to [levels/L2-closure-plan.md](../levels/L2-closure-plan.md).
- inventory entries for reusable selectors.

## Selector Shape

Every harvested selector should carry:

| Field | Meaning |
| --- | --- |
| `selector_id` | Stable local id. |
| `source_ref` | Exact source file and section or line anchor when available. |
| `source_kind` | `method-authority`, `formalization-precedent`, `local-inference`, or `open-residue`. |
| `local_reading` | How the selector matters for ResonantOS economy research. |
| `allowed_use` | What future agents may reuse it for. |
| `blocked_use` | What it must not be used to claim. |
| `next_check` | Witness, source, invariant, or gate needed before promotion. |

## Dispatch Readiness

Run the harvest dispatch only after:

1. the necessary source snapshots exist under `sources/local-snapshots/`;
2. snapshot expansion behavior follows
   [sources/local-snapshots/CLOSURE-STRATEGY.md](../sources/local-snapshots/CLOSURE-STRATEGY.md);
3. the proposed harvest sheet has a current tension gate result after any
   material sheet change;
4. the human explicitly says `confirmed`;
5. the deterministic appender registers the row;
6. the parent is ready to integrate source records, claim ledger entries,
   notation, residue, closure plan, and inventory.

The broad economy fan-out should remain blocked until this harvest creates
enough local selectors for external explorers to cite.
