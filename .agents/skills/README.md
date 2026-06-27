# Repo-Local Agent Skills

Status: active generated/runtime surface
Owner: ResonantOS economy research owner

This folder exposes the repo-local skill entrypoints agents should use before
falling back to global skills.

## Arcanum Skills

Installed from `/home/vrondelli/projects/domainspec-core/arcanum` via
`tools/bootstrap_arcanum.sh` with the `repo-local,repo-codex` profiles.

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
