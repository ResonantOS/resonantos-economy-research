# Refine Seed Proposal — Inventory Index Generator

Run id: `20260629-inventory-index-generator`
Preset: standard · Research: no-research · Subagents: none

## Target

Ergonomics findings **#4 + #5**: a deterministic generator that builds
`.arcanum/inventory/index.json` from the per-entry files, and a validator that
checks the index against filesystem truth (not just internal consistency).

## Source context (in-repo only)

- Source of truth: `.arcanum/inventory/entries/*.md` (22 entry files).
- Current projection: `.arcanum/inventory/index.json` (hand-maintained; **drifted** — missing 2 entries, `by_tag: {}`, `generated_at` lies).
- Current validator: `.agents/skills/inventory/scripts/validate-index-json.sh` (internal-consistency only; passes on the stale file).
- Adjacent: `index.md` (human table), `tags.md` (controlled register), `schema.md` (entry contract that diverges from the json shape — finding C5/#19).

## Write scope (when built — NOT this run)

- `tools/build_inventory_index.py` (new).
- A filesystem-truth validator (new `validate-inventory-truth.sh`, or extend the existing one — route decision in design).

## Done criteria for the PLAN (this run)

A non-executed plan that: pins the entry→json field mapping; specifies the 5 derived indexes + `generated_at`; specifies the 3 truth checks; names a toy-game that proves the generator catches the current drift; and surfaces the 2 owner decisions (validator route #5; authority-posture field #19) without blocking the core.

## Constraints (honor)

generate-not-hand-edit · in-repo-only deps (`DEC-ECON-STANDALONE-001`) · report-never-auto-create (no inflation) · inventory stays a non-authority read model.

## Stage configuration

Standard canonical 10-stage loop; overlays: `baseline_sequence`, `route_menu_for_ambiguity` (extend-vs-new validator), `toy_game_for_low_cost_falsification` (catch the live drift before planning).
