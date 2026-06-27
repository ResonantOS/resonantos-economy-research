# Repo-Local Agent Skills (Claude surface)

Status: active generated/runtime surface
Owner: ResonantOS economy research owner

This folder exposes the repo-local Claude Code skill entrypoints. It mirrors the
Codex surface at [`../../.agents/skills`](../../.agents/skills/README.md): same
skill set and bodies, regenerated for the `claude` runtime.

The only per-runtime differences are frontmatter provenance (`runtime: claude`)
and the `allowed-tools` token names (`Task` → `Agent`,
`AskQuestions` → `AskUserQuestion`). Skill names keep their prefixes so the
unified directory stays collision-free (Arcanum `robot-talks` vs DomainSpec
`domainspec-robot-talks`).

## Arcanum Skills

Generated from `/home/vrondelli/projects/domainspec-core/arcanum` canonical
sources (`arcana/<name>/SKILL.md`). Mutation policy:
`regenerate-from-canonical-source` — do not hand-edit; regenerate.

Core installed skills:

- `inventory`
- `context-builder`
- `research-tower`
- `research-evidence-harness`
- `decision-gate`
- `constitution-governance`
- `definitions-governance`
- `ontology-vault`
- `observability-setup`
- `signal-observer`
- `sigil-development`
- `workflow-reflect`
- `robot-talks`
- `discovery-to-inventory`
- `ontology-harness`
- `publication-research-pipeline`
- `orchestrate`

## DomainSpec Dispatch Skills

DomainSpec subagent dispatch support is exposed with prefixed names to avoid
colliding with Arcanum skill names:

- `domainspec-subagents-strategy`
- `domainspec-check-tension`
- `domainspec-register-dispatch`
- `domainspec-research-dispatch`
- `domainspec-review-dispatch`
- `domainspec-experiment-dispatch`
- `domainspec-robot-talks`

The canonical local bundle lives at [../../ops/subagents-strategy](../../ops/subagents-strategy/README.md).
