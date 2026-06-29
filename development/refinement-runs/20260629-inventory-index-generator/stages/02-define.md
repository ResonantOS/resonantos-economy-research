# Stage 2 — Invoke Define (+ Stage 3 Interrogation verdict)

## Define: what the generator is

A deterministic Python script `tools/build_inventory_index.py` that **reads** the
entry files and **emits** `index.json`. The entry file is the single source of
truth; the index is a pure projection.

**Inputs:** `.arcanum/inventory/entries/*.md`.
**Output:** `.arcanum/inventory/index.json` = `{ generated_at, entries[], indexes{by_id,by_type,by_tag,by_source,by_status} }`.

**Entry file shape (observed, real):** the entries are *markdown with labeled
header lines + sections*, not YAML front-matter:
```
# Inventory Entry: <title>
Status: <...>
Entry type: <...>
Authority posture: <...>
Tags: `a`, `b`, `c`
## Source Refs        -> list of links
## Summary            -> first paragraph
## Reusable Selectors -> list
## Residue ...
## Promotion Boundary ...
```

**Field mapping (entry → json):** `id` = filename stem; `title` = first `# ` heading;
`status` = `Status:` line; `type` = `Entry type:`; `authority_posture` = `Authority posture:`;
`tags` = backtick tokens on the `Tags:` line; `sources` = paths/links under `## Source Refs`;
`summary` = first paragraph of `## Summary`; `selectors` = `## Reusable Selectors` items;
`residue` = `## Residue`; `path` = the entry file path.

**Determinism:** stable sort by `id`; idempotent (same entries → byte-identical json
modulo `generated_at`); `generated_at` stamped at run time (CI/local — fine).

**Error handling:** a malformed/incomplete entry is **collected and reported**, never
crashes, never auto-filled. `--check` mode builds in memory and diffs against the
committed `index.json` (exit 1 on mismatch), writing nothing.

## Stage 3 — Interrogation (refine-review) verdict: FLAG

Gaps the define must close before design:
1. The "front-matter" is markdown-label style, not YAML — the parser must target the
   *actual* format (label lines + section headings), robustly.
2. `index.json` today carries fields entries may not have (`confidence`,
   `evidence_card_ids`, `evidence_set_ids`) — generator must treat them optional.
3. **Schema divergence (C5/#19):** entries carry `Authority posture` / `Promotion
   boundary` that `index.json` drops, while `schema.md` documents a *different* set.
   Design must decide whether the generator emits the current json shape or a
   reconciled one. → routed to design as an owner decision.
