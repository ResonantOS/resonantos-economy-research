---
name: orchestrate
description: "Route repository work through installed Arcanum capabilities."
surface_kind: generated-native-runtime-package
runtime: codex
canonical_source: arcanum/runtime/orchestrate
alias_of: null
generated_by: tools/bootstrap_arcanum.sh --profile
mutation_policy: regenerate-from-canonical-source
---

# Skill: Arcanum Orchestrate

<objective>
Route repository work through installed Arcanum sigils and spells while preserving dispatch-spec, task-session, and observability boundaries.
</objective>

<installed-capabilities>
- `arcanum-orchestrate`: route requests through installed Arcanum capabilities.
- `inventory` sigil (`arcana` tier)
- `context-builder` sigil (`transmutations` tier)
- `research-tower` sigil (`arcana` tier)
- `research-evidence-harness` sigil (`arcana` tier)
- `decision-gate` sigil (`arcana` tier)
- `constitution-governance` sigil (`arcana` tier)
- `definitions-governance` sigil (`arcana` tier)
- `ontology-vault` sigil (`arcana` tier)
- `observability-setup` sigil (`formulae` tier)
- `signal-observer` sigil (`arcana` tier)
- `robot-talks` sigil (`arcana` tier)
- `discovery-to-inventory` spell
- `ontology-harness` spell
- `publication-research-pipeline` spell
</installed-capabilities>

<process>
1. Classify the request as authoring, refinement, task execution, observability, install/setup, validation, or help.
2. Prefer the host runtime's native skill, agent, or instruction execution for model-backed work.
3. Use native skills, subagents, and dispatch-spec validators for active execution evidence.
4. Treat `tools/arcanum` helpers as deterministic handoff preparation or explicit legacy compatibility only.
5. Do not spawn nested model-backed CLIs for the same stage.
6. Return capability, mode, receipt kind, execution surface, status, artifacts, validation, observer status, blockers, and handoff note.
</process>
