# Inventory Entry: Repo Skill Surface

Status: active
Entry type: skill-surface
Authority posture: non-authority-read-model
Tags: `skills`, `arcanum`, `domainspec`

## Source Refs

- [.agents/skills/README.md](../../../.agents/skills/README.md)
- [.agents/skills/inventory/SKILL.md](../../../.agents/skills/inventory/SKILL.md)
- [.agents/skills/domainspec-subagents-strategy/SKILL.md](../../../.agents/skills/domainspec-subagents-strategy/SKILL.md)
- [.agents/skills/sigil-development/SKILL.md](../../../.agents/skills/sigil-development/SKILL.md)
- [.agents/skills/workflow-reflect/SKILL.md](../../../.agents/skills/workflow-reflect/SKILL.md)

## Summary

The repository exposes selected Arcanum skills for inventory, context building,
research towers, evidence harnessing, authority routing, and publication
research, sigil lifecycle maintenance, workflow reflection, plus prefixed
DomainSpec dispatch skills.

## Reusable Selectors

- `inventory` for `.arcanum/inventory/`
- `research-tower` for tower evolution
- `domainspec-subagents-strategy` for governed fan-out
- `domainspec-register-dispatch` for append-only ledger writes
- `sigil-development` for governed skill maintenance
- `workflow-reflect` for evidence-backed reflection reports

## Residue

No personal/global skill installation was changed; this is a repo-local skill
surface.

## Promotion Boundary

Installed skills are capability surfaces. They do not authorize economy
mechanisms or policy claims.
