# WP3 — Pre-commit gate for the inventory generator + truth validator

Authored by: `invoke plan` · target owner: task-session · complexity: **low**.

**Status (2026-06-29):** WP3.1 + WP3.2 **DONE** via task-session `--auto` — `.githooks/pre-commit`
built + enabled (`git config core.hooksPath .githooks`), tested (clean→pass, drift→block,
cleanup→pass), and documented in `CONTRIBUTING.md`. The deferrable decision auto-resolved to
block-with-fix (no auto-mutate). **WP3.3 (LBT delta gate) remains deferred.**

## Goal

Make inventory drift **impossible** by running the two checks automatically before
every commit. Today the generator (`build_inventory_index.py`) and validator
(`validate-inventory-truth.sh`) exist but nothing runs them — the "built but
dormant" trap the ergonomics review (#3/#6) named.

## Approach (decided defaults)

- **Mechanism: a repo-tracked git hook**, `.githooks/pre-commit`, enabled per clone
  with `git config core.hooksPath .githooks`. **No external dependency** — pure git +
  bash + python3 (already present), so it honors `DEC-ECON-STANDALONE-001` (avoids the
  `pre-commit` pip framework). Independent of the domainspec append-only hooks (those
  are tool-level settings hooks, a different mechanism — no conflict).
- **On failure: block + print the fix command. No auto-mutate** (the hook never
  silently regenerates/stages — report, don't surprise). *(Alt considered: auto-regenerate
  and re-stage — rejected as surprising; deferrable, not a blocker.)*

## Compact layering (low complexity)

- **L0 — the hook** (`.githooks/pre-commit`): run, in order, and block (exit 1) on any failure:
  1. `python3 tools/build_inventory_index.py --check` → drift (index ≠ entries) blocks with: *"inventory index out of sync — run `python3 tools/build_inventory_index.py` and stage `.arcanum/inventory/index.json`."*
  2. `bash .agents/skills/inventory/scripts/validate-inventory-truth.sh` → entries≠disk / broken `by_source` / unregistered tag blocks with the failure list.
- **L1 — wiring**: `git config core.hooksPath .githooks` (one-time, per clone).
- **L2 — docs**: a short CONTRIBUTING note: how to enable, and that `git commit --no-verify` bypasses (escape hatch).

## Work-pack

| Task | Write scope | Acceptance |
|---|---|---|
| **WP3.1** write `.githooks/pre-commit` (executable; the two checks above; clear block messages) | `.githooks/pre-commit` | edit an entry without regenerating → `git commit` **blocks**; regenerate + stage → commit **passes**; `--no-verify` bypasses |
| **WP3.2** enable + document | run `git config core.hooksPath .githooks`; add the note to `CONTRIBUTING.md` | a fresh clone enables with one command; the note states enable + bypass |
| **WP3.3 (DEFERRED — not in this plan)** load-bearing-term `--strict` delta gate (#3/#6) | — | **blocked on a prerequisite**: needs a committed baseline + delta logic so the 73 known first-pass hits are grandfathered and only *new* untracked terms fail. Wiring `--strict` as-is would block every commit. Separate work-pack. |

## Validation strategy (per slice)

- WP3.1: the acceptance table above is the test — drift→block, fix→pass, bypass works. Run it manually after building.
- WP3.2: clone-fresh (or unset+reset `core.hooksPath`) and confirm one command enables it; confirm the CONTRIBUTING note is accurate.
- Regression: confirm `validate-index-json.sh` (internal) still runs independently; the hook adds, never replaces.

## Distill validation: **pass**

SCU = "a tracked pre-commit hook running the two inventory checks, block-on-fail." Small
enough to execute (~30-line bash), large enough to preserve the whole gate, recomposes
into the design. **Named gaps:** (a) the LBT gate is deferred (needs the baseline-delta
mechanism — WP3.3); (b) `core.hooksPath` is an opt-in per clone, not automatic (documented,
not enforced). No overbuild.

## Dispatch technique trace

`sequence` (ordered checks) · `validation_loop` (the checks are the validation) ·
`owner_boundary_check` (blocks consequential drift; never auto-mutates) ·
`concrete_path_evidence` (exact script + hook paths) · `conditional_component` (WP3.3 LBT
gate is conditional/deferred) · `frame_handoff` (hands to task-session). No full dispatch
JSON needed (single-capability, no subagents, no protected context).

## Next route

`task-session` — build **WP3.1** then **WP3.2** (each a bounded task). WP3.3 stays deferred
until the baseline-delta mechanism exists.
