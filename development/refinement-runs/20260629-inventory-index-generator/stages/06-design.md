# Stage 5 Distill + Stage 6 Design (+ Stage 7 Interrogation, Stage 8 Repair)

## Stage 5 — Distill: smallest coherent unit

**SCU = a deterministic `entries → index.json` generator + a filesystem-truth
validator.** Rejected alternatives: (a) a full inventory DB/ORM — overbuilt;
(b) regenerate *all* projections at once (index.md table, CRAFT, DEFINITIONS-INDEX)
— too broad, do those as separate units; (c) hand-fix `index.json` — the anti-pattern.
Deferred (separate units): index.md-table regen, CRAFT-from-rows (#7), tag-check as
its own script (#8 — subsumed by the validator here).

## Stage 6 — Design

### A. `tools/build_inventory_index.py`
- `parse_entry(path) -> dict`: extract the labeled lines + sections per the field map.
- `build(entries) -> index`: `entries[]` (stable-sorted by id) + 5 derived indexes
  (`by_id`→path-or-pointer, `by_type`, `by_tag`, `by_source`, `by_status`) + `generated_at`.
- `write` (default) | `--check` (build in memory, diff vs committed json, exit 1 on mismatch, write nothing).
- **Authority mirror (C5/#19, describe-only):** emit `authority_posture` as a *verbatim mirror* of the entry's `Authority posture:` line. Do **not** emit a gate-readable `promotion_boundary` decision field — owner-gated (#19).
- Pure stdlib (`pathlib`, `json`, `re`); **no external/`domainspec-core` import** (`DEC-ECON-STANDALONE-001`).

### B. The validator (route decision — `route_menu` overlay)
- **Route A (default, recommended):** new `validate-inventory-truth.sh` — keeps `validate-index-json.sh`'s stated "inventory-read-model-only" contract intact; no owner gate.
- **Route B:** extend `validate-index-json.sh` + update its declared boundary token in lockstep — owner-gated (#5, Quine flag).
- Either way, 3 checks: (1) `set(entries[].id) == set(basename entries/*.md)`; (2) every `by_source` path exists on disk; (3) every used tag ∈ `tags.md`. Exit non-zero on any failure.

### Toy-game (falsification, `toy_game` overlay) — to RUN at build, described here
Run the generator against the **current drifted** tree and assert:
1. it emits **22** entries (vs the stale count in the committed json) and a **repopulated `by_tag`**;
2. `validate-inventory-truth.sh` **FAILS** on the *committed* `index.json` (missing entries, empty `by_tag`);
3. it **PASSES** on the freshly generated json.
If (2) doesn't fail, the validator isn't checking truth — the test itself is the proof the design fixes the exact drift the strategy found.

## Stage 7 — Interrogation (refine-design-review) verdict: FLAG (2 owner decisions)
- D1: validator route A vs B (#5). Design defaults to A (no contract change).
- D2: authority field (#19). Design defaults to `authority_posture` mirror = yes (describe-only, validator asserts equality); gate-readable `promotion_boundary` = deferred. No gate may branch on the mirror.
Otherwise sound: parser targets the real format; optional fields handled; determinism + report-not-create honored.

## Stage 8 — Distill Repair verdict: PASS
The two flags are **decisions, not defects** — the core generator + validator are
decidable-now with the defaults (Route A; posture-mirror-only). The owner can pick B
/ enable the promotion field later without changing the generator's core. No repair
blocker remains.
