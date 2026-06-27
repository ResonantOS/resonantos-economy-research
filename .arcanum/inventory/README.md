# Inventory

Status: active
Owner: ResonantOS economy research owner
Package: `.arcanum/inventory`

This is the repo-local Arcanum inventory package. It lets agents ingest once,
index source-backed knowledge, preserve source posture, and reuse context across
research towers, dispatches, authority gates, and validation work.

Inventory is evidence infrastructure, not authority. Entries can support
research and owner review, but they cannot promote token, bounty, governance, or
mechanism claims by proximity.

## Layout

| Path | Role |
| --- | --- |
| [schema.md](schema.md) | Local inventory conventions and entry contract. |
| [index.md](index.md) | Human-readable lookup index. |
| [index.json](index.json) | Machine-readable lookup index for downstream agents. |
| [tags.md](tags.md) | Controlled tag register. |
| [log.md](log.md) | Append-style inventory maintenance log. |
| [raw/](raw/) | Optional immutable raw-source staging area. |
| [entries/](entries/) | Source-backed generated inventory entries. |
| [queries/](queries/) | Durable lookup/query traces. |
| [wiki/](wiki/) | Synthesized wiki/read-model pages. |
| [lint/](lint/) | Inventory lint and validation reports. |

## First Ingest Targets

1. [sources/source-records.md](../../sources/source-records.md)
2. [dispatch/PROPOSED-HARVEST-DISPATCH.md](../../dispatch/PROPOSED-HARVEST-DISPATCH.md)
3. [authority/AUTHORITY-MODEL.md](../../authority/AUTHORITY-MODEL.md)
4. [telemetry/agents/agents.yaml](../../telemetry/agents/agents.yaml)
5. [ops/subagents-strategy/README.md](../../ops/subagents-strategy/README.md)
