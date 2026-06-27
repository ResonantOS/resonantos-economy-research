# Observability

Status: active local package
Owner: ResonantOS economy research owner

This folder stores local Arcanum observability signals and reflection reports
for reusable repository skills and governed dispatch workflows.

Observability is evidence infrastructure, not authority. Signals and reflection
reports can recommend skill maintenance, but they do not promote research
claims, economy mechanisms, token policy, bounty policy, governance authority,
or launch readiness.

## Layout

| Path | Role |
| --- | --- |
| [signals/sigil-invocations.jsonl](signals/sigil-invocations.jsonl) | Compact per-use and observer signals for later reflection. |
| [reflections/](reflections/) | Workflow-reflect reports and maintenance recommendations. |
| [reflection-state.json](reflection-state.json) | Current reflection counters and next triggers. |

## Rules

- Append signals as one JSON object per line.
- Keep user corrections and observer findings summarized, not raw-sensitive.
- Run `workflow-reflect` before mutating a reusable skill because of output
  drift, repeated workflow gaps, or severe gaps.
- Use `sigil-development` as the lifecycle owner for applying skill edits after
  reflection.
