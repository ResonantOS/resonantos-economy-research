# Stage 02 Receipt — Invoke Define

## Invoke Result

- Mode: `define`
- Spell: `invoke`
- Canonical ID: `invoke`
- Scope: library capability authoring a run-local target artifact
- Phase status: `pass` for definition coverage; target remains blocked for live intake
- Mode contract: `spells/invoke/define.md`
- Outputs: `stages/02-live-intake-spec.md`, `stages/02-glossary.md`, this receipt
- Template selection: DomainSpec-style specification plus a local explanatory glossary; eligible because the target is a high-complexity product/data/safety boundary with actors, invariants, lifecycle, and owner gates
- Discovery: existing 2026-07-16 Invoke run and X-Ray satisfy the discovery-existence gate
- Glossary linking: `partial`; terms are local to this refinement and are not promoted into canonical definitions
- Implementation layering: reuse the existing L0–L3 layering; the definition strengthens four capability states without changing layer authority
- Dispatch techniques: `sequence`, `frame_handoff`, `minimum_component_catalog`, `component_descriptor`, `owner_boundary_check`, `x_ray`, `protected_context_flag`
- Distill validation: `flag`; the target is intentionally split-prone across product, data, and safety, so canonical stage 05 must select the smallest coherent implementation unit before planning
- Decisions: preserve the existing concept; distinguish static, synthetic, public-live, and sealed-live states; keep the design system-agnostic until an implementation target is selected
- Unresolved gaps: application stack, operational envelope, admission governance, retention/deletion/legal posture, sealed profile, stewardship, and fixture evidence
- Next route: `interrogation refine-review`, then `distill`

## Definition Coverage

- Goal and scope: covered.
- Actors and owners: covered.
- Data classes and forbidden telemetry: covered.
- Form journey and database questions: covered.
- Privacy, security, abuse, moderation, incident, and stewardship questions: covered.
- Guarantees and non-guarantees: covered.
- Readiness states and owner gates: covered.
- Production implementation choices: intentionally unresolved.

## Native Stage Receipt

```yaml
dispatch_id: refine-2026-07-17-time-capsule-live-intake-readiness
step_id: s02
capability_ref: invoke
receipt_kind: native-stage
status: pass
artifacts:
  - stages/02-invoke-define.md
  - stages/02-live-intake-spec.md
  - stages/02-glossary.md
validation:
  - definition obligations mapped to Context Builder O-01 through O-09
  - capability states and owner boundaries explicit
  - no production stack or safety guarantee invented
observer_status: run-local receipt prepared
blockers:
  - live intake remains blocked by G-D1 through G-D6
residue: selected runtime and owner approvals remain downstream decisions
handoff_note: Stage 03 must challenge this definition using all three registered review lanes.
```

