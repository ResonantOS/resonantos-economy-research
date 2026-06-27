# Inventory Schema

Status: active local schema
Owner: ResonantOS economy research owner

## Entry Contract

Every inventory entry should include:

- `Status`
- `Entry type`
- `Source refs`
- `Authority posture`
- `Summary`
- `Reusable selectors`
- `Residue`
- `Promotion boundary`

Material claims must cite source refs or be labeled `synthesis`,
`local-inference`, or `open-residue`.

## Entry Types

- `source`
- `concept`
- `decision`
- `workflow`
- `dispatch`
- `skill-surface`
- `authority-model`
- `telemetry`
- `question`
- `synthesis`

## Authority Postures

- `primary-source`
- `supporting-source`
- `related-source`
- `method-authority`
- `local-inference`
- `non-authority-read-model`
- `open-residue`

## Promotion Rule

Inventory entries may support context packs, source lookup, and owner review.
They do not promote definitions, constitutions, specs, governance policy, token
policy, bounty policy, or validation results.
