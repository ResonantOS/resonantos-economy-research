# Flow-Conservation Fixture (STUB)

Status: research-block
Promotion scope: local-research-only
Owner route: research-evidence-harness

> **This is a structure-only skeleton, not a fixture.** It exists so the first
> concrete action ("build the flow-conservation fixture") has a real starting file
> instead of a backlog name (ergonomics #17 / GUIDE *First Fixture, End To End*).
> It asserts **no invariant**, contains **no result**, and promotes **nothing**.
> Fill the TODO fields when the fixture work actually starts; until then it stays
> `research-block`.

## What it will test (when built)

The candidate **flow-conservation** invariant from the program backlog (formal
target **TF-1**): per epoch, total emitted credit/value does not exceed the treasury
basis —

```text
candidate FAIL-region (NOT asserted here):  Σ(emitted_in_epoch) > treasury_basis
```

This is an **open residue** (`TF-1`): no flow-conservation certificate exists yet
(`subtowers/formal-mechanisms/returns/tower-findings.md`). The rule above is a
*candidate* FAIL-region, not an established mechanism.

## Non-collapse defaults (inherited; do not remove)

```yaml
status: research-block
implementation_status: fixture_only
reward_effect: none
authority_effect: none
policy_effect: none
open_residue: TF-1   # no flow-conservation certificate exists
```

## Fields to fill (TODO — all empty; assert nothing yet)

```yaml
treasury_basis:        # TODO: the per-epoch treasury quantity (load-bearing term -> track via REC-C14)
epoch:                 # TODO: the epoch definition / basis
emitted:               # TODO: what counts as emitted in an epoch
deterministic_check:   # TODO: the decidable pass/fail expression over the above (leave empty until grounded)
typed_positives: []    # TODO
typed_negatives: []    # TODO
```

## Before this becomes a real fixture

- Ground the load-bearing terms it needs (`treasury_basis`, `epoch`, `emitted`) as
  tracked definitions (REC-C14 / ER-D23) — they are currently candidates.
- Pattern the file *shape* on the
  [contribution-edge fixtures package](../contribution-edge-fixtures/README.md)
  (schema / matrix / typed-negatives / checklist) — that is the template, **not** the
  same fixture (different domain: treasury flow, not contribution edges).
- A passing fixture emits `research-pass` / `research-flag` / `research-block` for a
  scaffold only. It does **not** validate the economy, prove anti-gaming safety, or
  create reward / governance / launch effect.
