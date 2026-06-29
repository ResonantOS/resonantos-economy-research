# Refine Result — Inventory Index Generator

Run `20260629-inventory-index-generator` · Status: **pass** · preset standard · no-research · subagents none.

## One-paragraph synthesis

The inventory index should stop being hand-maintained and become a **generated
projection** of the entry files, guarded by a validator that checks the index
against **filesystem truth** rather than its own internal tidiness. The refinement
pinned the hard part — the entry files are *markdown with labeled header lines +
sections*, not YAML, so the generator's core is a precise entry→json **field map**
(id=stem, title=`#` heading, status/type/authority_posture=label lines,
tags=backtick tokens, sources=`## Source Refs` links, summary=`## Summary` para,
selectors/residue=sections). With that map, the generator emits `entries[]` + five
derived indexes + a real `generated_at`, idempotently, reporting (never auto-creating)
malformed entries. A separate `validate-inventory-truth.sh` adds the three checks
that would have caught the live drift (entries==disk, by_source paths exist, tags
registered). A **toy-game** is the acceptance proof: the validator must *fail* on the
current committed `index.json` (missing entries, empty `by_tag`) and *pass* on the
freshly generated one.

## What the plan delivers (non-executed)

- **WP1** `tools/build_inventory_index.py` — parser + builder + `--check`/`--strict`; stdlib-only; in-repo-only.
- **WP2** `validate-inventory-truth.sh` — the 3 filesystem-truth checks.
- **WP3** wire `--check` + the validator into a pre-commit/CI gate, gating on delta vs the committed baseline.

Full plan: [stages/09-plan.md](stages/09-plan.md). Design + toy-game: [stages/06-design.md](stages/06-design.md).

## Two owner decisions (flagged, non-blocking for WP1)

- **D1 (#5):** new validator script (default — keeps `validate-index-json.sh`'s stated contract) vs extend it + relabel the contract (owner-gated).
- **D2 (#19):** emit `authority_posture` as a describe-only mirror (default yes; validator asserts equality) — and **defer** any gate-readable `promotion_boundary` field (default no: a machine field a gate reads to grant posture is the score≠authority failure the repo guards against).

## Boundary

Non-executed design only — nothing built, nothing promoted. Honors
generate-not-hand-edit, in-repo-only deps (`DEC-ECON-STANDALONE-001`),
report-never-auto-create (no definition/entry inflation), and inventory-stays-a-
non-authority-read-model.

## Recommended next route

`task-session` — execute WP1 → WP2 → WP3 as bounded work-packs. (Resolve D1/D2 at or before WP2.)
