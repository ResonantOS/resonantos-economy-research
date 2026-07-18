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

1. **Start in the inventory.** Read the
   [.arcanum/inventory/index.md](.arcanum/inventory/index.md) **Start Here** ordered
   path. It is the canonical entry point: why the repo works the way it does, what
   to do next (the program fixture & constitution backlog), and how to move without
   breaching the boundaries.
2. Read [AGENTS.md](AGENTS.md) and run its four checks before any write.
3. Read [README.md](README.md), [GUIDE.md](GUIDE.md), and
   [authority/source-spine.md](authority/source-spine.md); check the inventory
   before adding a duplicate finding.
4. Pick the narrowest route: source reading, claim update, subtower harvest,
   fixture expansion, dispatch, or authority promotion request.

**Enable the pre-commit gate** (one-time per clone): `git config core.hooksPath .githooks`.
It keeps `.arcanum/inventory/index.json` a true projection of the entry files — on a
drift or a filesystem-truth failure it blocks the commit with the fix. Bypass a single
commit with `git commit --no-verify`. If the index drifts:
`python3 tools/build_inventory_index.py && git add .arcanum/inventory/index.json`.

## Your First Safe Contribution

Start with one small active-document route, not a new economy mechanism.

1. Pick a confusing link or explanation in `README.md`, `GUIDE.md`,
   `CONTRIBUTING.md`, `QUERYING.md`, `prizes/README.md`, or
   `validation/README.md`.
2. Read the linked owner before changing the explanation. Preserve status,
   evidence limits, blocked uses, and stop conditions.
3. Make the smallest change that helps a reader complete one task.
4. Run:

   ```bash
   python3 tools/check_markdown_links.py README.md GUIDE.md CONTRIBUTING.md \
     QUERYING.md prizes/README.md validation/README.md
   python3 tools/build_inventory_index.py --check
   git diff --check
   ```

   The expected result is three clean checks and a diff that changes only the
   intended reader route.
5. Stop and ask the canonical owner if the change would alter a definition,
   authority rule, source claim, register, schema, historical result, or
   generated runtime file.

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
  imported private source material without a dedicated scrub.
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

The current validation surface (review-only) is
[validation/contribution-edge-fixtures/](validation/contribution-edge-fixtures/README.md).
Use it to test whether observed contribution signals can move to reviewed
credit without creating reward entitlement, payout, governance power, launch
readiness, or authority transfer.

Fixture work may produce `research-pass`, `research-flag`, or `research-block`
for a local scaffold. It does not validate the economy.

The ranked **fixture & constitution backlog** lives in the
[economy-resilience-program](.arcanum/inventory/entries/economy-resilience-program.md)
entry (Tracks A/B/C, cheapest-unblocker first), backed by the full synthesis
[dispatch/economy-synthesis/findings.md](dispatch/economy-synthesis/findings.md):
four decidable-now fixtures (measurement-is-not-authority, flow-conservation,
treasury runway, audit-randomization), an upstream costly-identity (Douceur) gate,
and routings to the authority/constitution lane. Take the next fixture from that
backlog, not from intuition, and keep its decidable pass/fail condition — see
GUIDE's [*First Fixture, End To End*](GUIDE.md#first-fixture-end-to-end) for the
worked steps. A candidate invariant that only "owes a fixture" is not validated;
do not let a backlog item read as a result until its fixture has actually been run.
