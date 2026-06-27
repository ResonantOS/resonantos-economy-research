---
tags: [hooks, skill, subagents, dispatch, governance, workflow, claude-code, internal-tools, cross-repo, portable]
node_type: readme
is_session: false
layer: architecture
nature: reference
status: exploratory
version: 0.6.0
last_updated: 2026-06-14
---

# `ops/subagents-strategy/` — Dispatch Governance

## What is this?

A **self-contained, portable subagents-strategy system** — the complete `router → type-skill → form` chain, its constitution, governance hooks, and deterministic appender. Node-only, zero runtime dependencies. Together they make subagent dispatches get authored under one law and recorded in an append-only per-repo ledger at `<repo-root>/telemetry/agents/subagents-dispatch.yaml`. In this repository, invocable Codex skill entrypoints live under `.agents/skills/` with DomainSpec-prefixed names.

## The chain (router → type-skill → form)

A dispatch flows through three authority layers, each owning a distinct concern:

| Layer | Skill | Owns |
|-------|-------|------|
| **Router** | [`skills/domainspec-subagents-strategy/`](skills/domainspec-subagents-strategy/SKILL.md) | the Principle-1 trigger, the human gate, universal invariants; routes by `dispatch_type` |
| **Type skill** (LIVE: `research`, `review`, `experiment`) | [`skills/research/`](skills/research/SKILL.md) · [`skills/review/`](skills/review/SKILL.md) · [`skills/experiment/`](skills/experiment/SKILL.md) | type-specific judgment only — roles, tension axes, the findings/verdict shape. Defines no field. |
| **Form** | [`skills/register-dispatch/`](skills/register-dispatch/SKILL.md) | the ledger row schema, field tables, enums, the appender |
| **Companion** | [`skills/robot-talks/`](skills/robot-talks/SKILL.md) | intra-group discussion when a group sets `robot_talks: true` |

The **law** these point to lives in [`constitution/`](constitution/): field semantics (§5), the `dispatch_type` vocabulary, and the principles (P1–P12). `constitution/subagents-strategy-constitution-proposal.md` is the single canonical constitution (the repo-root copy was deleted) and is the v0.6.0 law that governs the ledger (wire `schema_version` is now `0.6.0`); `constitution/robot-talks-constitution.md` is the companion bound by robot-talks groups.

## Business Context

This repo runs multi-agent dispatches under a subagents-strategy constitution (schema v0.6.0): every dispatch contributes **two appends** — the dispatch row (the spec: `goal`, `context`, `groups` with per-agent `angle`/`model`/`token_budget`/`initial_prompt`, `connections`) at dispatch, and the close row (`close_of` + `exit_reason` + `agents_spawned`, optionally the verbatim `feedback_prompts`) at termination. Registration is a **skill the model invokes**, not an auto-logger, because a hook sees only the raw `Agent` call and cannot author `angle`/`anti_bias`/`goal`, and not every dispatch is a research dispatch with a roster to derive from. The reminder hook only nudges.

The ledger is the **governance record** (who was dispatched, with what angle, tensioned how). It is distinct from the research skill's per-folder `dispatch.yaml` **rosters** and from `internal_tools/agents-telemetry/` (SQLite **usage measurement**) — the three coexist; do not conflate them. Whether the ledger is committed to git is an open decision.

Operational facts: population depends on the model actually invoking the skill — the reminder is a nudge, not enforcement. Install is per-user, so a teammate gets the behavior only after running [install.cjs](install.cjs) once (new repos on an already-installed machine are covered). Claude Code shows the hooks and asks the user to trust them on first run. The installer is Claude Code-specific; the appender itself is harness-neutral.

## Why it matters

It mitigates three risks in multi-agent practice, while the human stays the gate (nothing here dispatches or approves on its own):

- **Unrecorded or over-eager fan-outs** — the reminder hook nudges registration on every `Agent` call, and the `Workflow` tool is denied so dispatch goes through the governed path.
- **In-place tampering of dispatch history** — the ledger is append-only, mechanically enforced by a hook; closing a dispatch is an appended `close_of` event, never an edit to the original row.
- **Silent ledger corruption** — the appender structurally self-checks the ledger before every append and refuses (exit 1) if it is corrupt, so damage surfaces at the next write instead of accumulating. Incoming records are additionally validated strictly against the v0.6.0 schema (exit 2 on violation; since 2026-06-12 this includes the `anti_bias_global` conditional — required when ≥ 2 groups have ≥ 2 agents) — but **only the incoming record**: rows written under older schemas are grandfathered historical artifacts, never re-validated.

## 📁 Navigation

- **`hooks/`**: Canonical sources of the three `PreToolUse` hooks.
  - **[remind-register-dispatch.cjs](hooks/remind-register-dispatch.cjs)**: On `Agent` — reminder-only nudge to run `register-dispatch`; writes no ledger itself. Fail-open.
  - **[block-workflow.cjs](hooks/block-workflow.cjs)**: On `Workflow` — deterministic deny; the project mandates the `Agent` tool / research skill for subagent dispatch.
  - **[enforce-append-only-dispatch.cjs](hooks/enforce-append-only-dispatch.cjs)**: On `Edit|MultiEdit|Write|NotebookEdit|Bash|PowerShell` — owns the append-only enforcement contract: path canonicalization, the read-only command allowlist, the deliberate absence of an appender-mention escape hatch, and the guardrail-not-security-boundary / fail-open stance (rules documented in its header).
- **`skills/register-dispatch/`**: The source skill for the deterministic ledger appender. The repo-local runtime entrypoint is `.agents/skills/domainspec-register-dispatch/`.
  - **[SKILL.md](skills/register-dispatch/SKILL.md)**: Owns the v0.6.0 row schema (dispatch row: `groups`/`connections` field reference with the conditional `anti_bias`/`angle` rules; close row: `exit_reason` vocabulary, `agents_spawned` shape, verbatim `feedback_prompts`; `invoked_by` on both), the grandfathering rule, and the authoring procedure (temp JSON file → appender).
  - **[append-dispatch.cjs](skills/register-dispatch/append-dispatch.cjs)**: The only sanctioned write path. Owns the appender contract: UTF-8 file argument (not stdin), strict v0.6.0 validation of the incoming record (exit 2; removed v0.3.0 keys get an explicit removed-by-v0.5.2 error — historical message), `invoked_by` resolution (record → `git config user.email` → null), idempotency on `dispatch_id`/`close_of`, JSON-column emission, repo-root resolution, and the structure-only pre-append self-check that grandfathers old rows (rules documented in its header).
- **`skills/domainspec-subagents-strategy/`**: The **router** — checks the trigger, holds the human gate, enforces universal invariants, routes by `dispatch_type`. Defines no field and no type-specific judgment.
- **`skills/research/`, `skills/review/`, `skills/experiment/`**: The three LIVE **type skills**. Each owns only its type's judgment (roles-as-functions, tension axes, findings/verdict shape) and points back to the router / form / constitution for everything universal.
- **`skills/robot-talks/`**: The companion skill for intra-group discussion (`robot_talks: true`).
- **`constitution/`**: The **law** the skills point to — the single canonical location (the repo-root copy was deleted). `subagents-strategy-constitution-proposal.md` (v0.6.0 — field semantics §5, `dispatch_type` vocabulary, principles P1–P12) and `robot-talks-constitution.md`.
- **`tests/`**: Zero-dependency test battery — `node tests/test-append-dispatch.cjs` runs the appender against temp ledgers (never the real one): valid/invalid records, enums, conditionals, idempotency, grandfathering, `invoked_by` resolution.
- **[install.cjs](install.cjs)**: Per-user installer/uninstaller (`node install.cjs [--uninstall]`). Owns the install semantics: replace-semantics registrations from a source-of-truth table, event-generalized registration entries, retired-hook migration, and the Claude Code-specific vs harness-neutral boundary (documented in its header).
- **`docs/`**: Model & background docs (the *why/what*, distinct from the field schema in SKILL.md).
  - **[LEDGER-MODEL.md](docs/LEDGER-MODEL.md)**: The ledger's data model — what it is/isn't, the two-append discipline, the `dispatch → groups → agents` tree as JSON columns, and the L1/L2/L3 normalization. Read this for the *mental model*; SKILL.md owns the field-by-field schema.
  - Historical discovery docs were not copied into this standalone repository;
    the live local contract is the skill chain plus constitution in this folder.

## Live vs canonical, and migrating

This folder is the **canonical migration source** for the whole subagents-strategy system. Two caveats for anyone syncing or migrating it:

- **Single source of truth.** This bundle is the visible local source for the DomainSpec dispatch stack. The repo-local runtime entrypoints are under `.agents/skills/domainspec-*`; keep them synchronized with this bundle when the dispatch law changes.
- **Cross-references on migration.** The source bundle was ported from DomainSpec implementation and rebased to `ops/subagents-strategy/`. New migrations should point type skills at this local constitution and ledger surface, not at the private parent checkout.
