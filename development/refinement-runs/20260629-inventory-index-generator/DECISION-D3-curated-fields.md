# Decision D3 — How does the generator treat hand-curated index.json fields?

Status: **resolved — Option B** (operator, 2026-06-29: "big bang cleanest faster") · Discovered: task-session WP1 context pack
Owner route: decision-gate (this record) → operator

> **Resolution (2026-06-29):** Option **B** — pure regenerate. `tools/build_inventory_index.py`
> derives every per-entry field from the entry files; `confidence` is **dropped**
> (informal, non-load-bearing, lived only in the projection); `updated` is derived
> from each entry's **last git-commit date**; `summary` from the entry's `## Summary`;
> top-level config/meta (`projections`, `validation`, schema fields) preserved.
> `authority_posture` kept (it is in the entries; describe-only, no gate reads it).
> Built + validated; the existing validator still passes. (Option C — moving the
> fields into entry headers — remains available later if `confidence`/`updated` are
> wanted as first-class source fields.)

## Context

WP1 designed a pure `entries/*.md → index.json` generator. But the committed
`index.json` carries three per-entry fields that are **hand-curated and not present
in any entry file**:

- `updated` — a date (e.g. `2026-06-26`)
- `confidence` — `medium` / `high`
- `summary` — a *condensed* one-liner (the entry's `## Summary` is a full paragraph)

(Confirmed: `grep` finds no `confidence:`/`updated:` in any of the 22 entries; entry
`Status:` lines are also free-text, e.g. `closed-first-harvest`.) A pure generator
cannot reproduce these, so the first regeneration would **drop the curated
`confidence`/`updated` and replace curated summaries** — silent metadata loss. This
is the schema-divergence the ergonomics review flagged (C5/#19), surfacing at build.

## Options

**A — Merge / preserve (recommended now).** The generator reads the existing
`index.json`, preserves `updated` / `confidence` / curated `summary` for entries that
already have them, derives everything else, and **adds** missing entries (deriving
their fields; `updated` = today, `confidence` omitted/`unset`, `summary` = first line
of the entry's `## Summary`). *Non-lossy; fixes the drift now.* Cost: the generator is
not a pure projection (it merges prior curated state), and those curated fields can
still drift since they live only in the json.

**B — Pure regenerate (lossy).** Derive everything from entries only; drop
`confidence`, compute `updated` from git/file mtime (or drop), use the entry's
`## Summary` first line. *Cleanest single-source projection.* Cost: **loses** the
existing curated `confidence` levels and `updated` dates.

**C — Move the fields into the entries, then pure-generate (cleanest long-term).**
Add `Updated:` / `Confidence:` lines to the 22 entry headers (so they become part of
the source of truth), then generate purely. *Entries become the true single source.*
Cost: edit all 22 entries first (more work; a separate work-pack).

## Recommendation

**A now, C as the clean follow-up.** A unblocks the drift fix immediately without
losing curated metadata; C is the principled end-state (entries as the sole source)
and can be a later work-pack. B is not recommended — it discards human-authored
metadata for a purity that C achieves without loss.

## Next step

Operator picks A / B / C (or "A now + C later"). On selection, WP1 build resumes.
