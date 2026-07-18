# Stage 06 Receipt — Invoke Redefine / Design

## Invoke Result

- Mode: `design`
- Spell: `invoke`
- Canonical ID: `invoke`
- Scope: library capability authoring a run-local target design
- Phase status: `flag`; architecture is coherent for planning, while live capability gates remain unresolved
- Mode contract: `spells/invoke/design.md`
- Outputs: `stages/06-architecture-bundle.md`, `stages/06-glossary-consistency.md`, this receipt
- Design views: context, high-level structure, low-level components/data, workflow process, decision flow, dependency/interface
- Template/profile selection: DomainSpec six-view architecture profile with UX/data/safety companions; eligible from approved stage 02 definition and stage 03 evidence
- Dispatch techniques: `sequence`, `x_ray`, `component_descriptor`, `entity_component_reference`, `state_namespace_boundary`, `authority_split_gate`, `recomposition_proof`, `owner_boundary_check`
- Distill validation: `pass`; LIR-SCU-01 is preserved as the first unit and recomposes into the synthetic kernel
- Implementation layering: existing L0–L3 model is refined by four capability states; a full revised layering artifact belongs to Plan
- Work-pack: n/a in Design
- Decisions: separate public/sealed gates, moderation-pending display, idempotent versioned commands, fenced close, allowlist export, field lifecycle, incident/continuity components, disabled sealed adapter
- Unresolved gaps: runtime/stack, operations envelope, admission governance, lifecycle/legal policy, incident authority, continuity owner, sealed profile, evidence runs
- Next route: `interrogation refine-design-review`, then Distill repair and Plan

## Native Stage Receipt

```yaml
dispatch_id: refine-2026-07-17-time-capsule-live-intake-readiness
step_id: s06
capability_ref: invoke
receipt_kind: native-stage
status: flag
artifacts:
  - stages/06-invoke-design.md
  - stages/06-architecture-bundle.md
  - stages/06-glossary-consistency.md
validation:
  - all six required design views present
  - all CRITICAL review requirements represented or retained as explicit risk/gap
  - glossary consistency checked
  - LIR-SCU-01 recomposition preserved
observer_status: run-local receipt prepared
blockers:
  - public-live and sealed-live unavailable
residue: stack and owner decisions remain downstream gates
handoff_note: Stage 07 must verify that no review finding disappeared and that the design does not imply implementation readiness.
```

