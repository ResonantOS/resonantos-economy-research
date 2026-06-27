# Inventory Entry: Subagents Dispatch Strategy

Status: active
Entry type: workflow
Authority posture: method-authority
Tags: `dispatch`, `subagents`, `telemetry`, `domainspec`

## Source Refs

- [ops/subagents-strategy/README.md](../../../ops/subagents-strategy/README.md)
- [.agents/skills/domainspec-subagents-strategy/SKILL.md](../../../.agents/skills/domainspec-subagents-strategy/SKILL.md)
- [telemetry/agents/subagents-dispatch.yaml](../../../telemetry/agents/subagents-dispatch.yaml)

## Summary

The repository has a local DomainSpec subagent dispatch stack. Dispatches require
a Principle-1 trigger, pairwise tension, explicit human confirmation,
deterministic ledger append, close row, and an inventory trace.

The inventory trace must include the strategy result itself: lanes, subagents,
dependency flow, gate/ledger state, and next human action. Inventory does not
replace the chat answer; it makes the result reusable after the conversation.

## Reusable Selectors

- Router skill: `.agents/skills/domainspec-subagents-strategy/SKILL.md`
- Deterministic appender:
  `.agents/skills/domainspec-register-dispatch/append-dispatch.cjs`
- Agent pool: `telemetry/agents/agents.yaml`
- Strategy result entries: `.arcanum/inventory/entries/strategy-result-*.md`

## Residue

The CAv2/Lean harvest dispatch is closed with accepted local findings. Future
dispatches still need the same two-append ledger discipline and inventory
closeout.

## Promotion Boundary

Dispatch records are governance evidence. They do not make subagent findings
true or authoritative without source checks and owner gates.
