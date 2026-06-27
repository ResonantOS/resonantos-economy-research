# Agent Telemetry

Status: active
Owner: ResonantOS economy research owner

This folder stores local governed-dispatch support files.

## Files

| File | Role |
| --- | --- |
| [agents.yaml](agents.yaml) | Local agent-name pool for proposed and future dispatches. |
| [subagents-dispatch.yaml](subagents-dispatch.yaml) | Append-only dispatch and close ledger. Empty until a dispatch is confirmed and registered. |

## Rules

- Do not hand-edit `subagents-dispatch.yaml` after rows exist; use
  `.agents/skills/domainspec-register-dispatch/append-dispatch.cjs`.
- A proposed dispatch is not registered until a human explicitly confirms it.
- Every registered or closed dispatch must also update `.arcanum/inventory/log.md`.
- Reflection or observability subagents should use role fits such as
  `observer` or `reflector`; they inspect and report, but they do not mutate the
  observed sigil directly.
