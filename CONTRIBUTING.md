# Continuing The Research

Status: active contribution guide
Promotion scope: local-research-only
Repository visibility: private/internal until public-export scrub

This repository is open for continued ResonantOS economy research. Contributions
should make the evidence base easier to inspect, extend, falsify, or route. They
must not turn research into policy, implementation readiness, payout design,
token design, bounty design, launch readiness, or governance authority by
proximity.

## Start Here

1. Read [AGENTS.md](AGENTS.md) and run its four checks before any write.
2. Read [README.md](README.md), [GUIDE.md](GUIDE.md), and
   [authority/source-spine.md](authority/source-spine.md).
3. Check [.arcanum/inventory/index.md](.arcanum/inventory/index.md) before
   adding a duplicate finding.
4. Pick the narrowest route: source reading, claim update, subtower harvest,
   fixture expansion, dispatch, or authority promotion request.

## Acceptable Contribution Shapes

- Add or correct a source record with source kind, bridge risk, local relevance,
  and blocked uses.
- Add a claim ledger row that keeps the claim below the evidence.
- Add subtower evidence with skeptic notes and unresolved residue.
- Extend contribution-edge fixtures with typed positives, typed negatives,
  owner routes, review checks, and blocked state transitions.
- Improve definitions, guides, or indexes when a reusable research term or route
  has become stable enough to prevent drift.

## Blocked Contribution Shapes

- No token, bounty, payout, launch, or governance policy.
- No implementation-readiness claim from fixture scaffolds or validator specs.
- No score, reputation mark, audit hit, citation count, or token treated as
  governance authority.
- No public export of local snapshots, telemetry, private provenance, or
  CyberAlchemy/DomainSpec implementation material without a dedicated scrub.
- No mechanism proposal without a bounty-optimization or capture/farming failure
  analysis.

## Minimum Evidence Standard

Every durable contribution should name:

- source kind;
- local relevance;
- allowed use;
- blocked use;
- owner route;
- next check or falsifier;
- open residue, if any.

## Validation Work

The current safe validation surface is
[validation/contribution-edge-fixtures/](validation/contribution-edge-fixtures/README.md).
Use it to test whether observed contribution signals can move to reviewed
credit without creating reward entitlement, payout, governance power, launch
readiness, or authority transfer.

Fixture work may produce `research-pass`, `research-flag`, or `research-block`
for a local scaffold. It does not validate the economy.

The cross-corpus program synthesis
([dispatch/economy-synthesis/findings.md](dispatch/economy-synthesis/findings.md))
now supplies a ranked **fixture & constitution backlog**: four decidable-now
fixtures (measurement-is-not-authority, flow-conservation, treasury runway,
audit-randomization), an upstream costly-identity (Douceur) gate, and routings
to the authority/constitution lane. Take the next fixture from that backlog, not
from intuition — and keep its decidable pass/fail condition. A candidate
invariant that only "owes a fixture" is not validated; do not let a backlog item
read as a result until its fixture has actually been run.
