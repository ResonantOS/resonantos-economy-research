# Stage 9 — Invoke Plan (non-executed)

The build plan for `task-session`. **Non-executed** — nothing here is implemented.

## Work-pack 1 — `tools/build_inventory_index.py` (M)

1. `parse_entry(path)`: read the entry markdown; extract `id` (stem), `title`
   (first `# `), `status`/`type`/`authority_posture` (label lines), `tags`
   (backtick tokens on `Tags:`), `sources` (links under `## Source Refs`),
   `summary` (first paragraph of `## Summary`), `selectors`, `residue`, `path`.
   Optional fields absent in some entries (`confidence`, `evidence_*`) → omit, don't fail.
2. `build(entries)`: stable-sort by `id`; assemble `entries[]` + `indexes`
   {`by_id`, `by_type`, `by_tag`, `by_source`, `by_status`} (each pointing back to ids) + `generated_at` (UTC now).
3. CLI: default = write `index.json`; `--check` = build in memory, diff vs committed, exit 1 on mismatch, write nothing; `--strict` = also exit 1 if any entry failed to parse (report the list).
4. Stdlib only. No `domainspec-core`/external path. ~150–200 LOC.
5. Authority mirror: emit `authority_posture` verbatim from the entry; **do not** emit a gate-readable promotion field (owner decision D2).

**Acceptance:** running it now produces 22 entries + repopulated `by_tag`; re-running is idempotent (modulo `generated_at`); a malformed entry is reported, not crashed.

## Work-pack 2 — filesystem-truth validator (S)

New `.agents/skills/inventory/scripts/validate-inventory-truth.sh` (Route A default):
checks (1) entries==disk, (2) every `by_source` exists, (3) every tag ∈ `tags.md`;
exit non-zero on any failure. (Route B: extend `validate-index-json.sh` + update its
boundary token — owner decision D1.)

**Acceptance (toy-game):** FAILS on the current committed `index.json`; PASSES on the freshly generated one.

## Work-pack 3 — wire the gate (#6) (S)

A pre-commit / CI step: `python3 tools/build_inventory_index.py --check && bash .agents/skills/inventory/scripts/validate-inventory-truth.sh`, gating on **delta vs the committed baseline** (existing residue grandfathered; only *new* drift blocks).

## Owner decisions to resolve (flagged, non-blocking for WP1)

- **D1 (#5):** validator Route A (new script, default) vs Route B (extend + re-label contract).
- **D2 (#19):** emit `authority_posture` mirror (default yes, describe-only) and whether to ever add a gate-readable `promotion_boundary` (default: no, deferred — score≠authority).

## Next route

`task-session` — WP1 then WP2 then WP3, each a bounded work-pack. (Refine stops here; it does not execute.)
