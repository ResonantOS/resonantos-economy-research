# Staged Craft Delta — Time Capsule Demo Context

Status: `held` — proposal only; not applied to `.craft/ledger.yml`

Approval token: absent

## Why This Delta Exists

The governed Time Capsule work-pack now has two Task Session receipts but no
corresponding Craft context. The Goal spell may stage that reconciliation; it
may not mutate the active ledger without an explicit approval token and durable
decision record.

## Framed Batch

If approved through Craft validation, propose:

```yaml
contexts:
  + context_id: CTX-ECON-TIME-CAPSULE
    parent_id: CTX-ECON-ROOT
    title: Resonant Time Capsule contract and intake readiness
    purpose: Define and evidence-gate the community word capsule without allowing research, simulator output, or fixture conformance to become token, cryptographic, privacy, deployment, or launch authority.
    stage: execute
    gate: flag
    next_move: Run the declared screen-reader, native-IME, and five-person consequence-retell matrix for SWU-LIR-002; do not start SWU-LIR-003 until it passes.
    owned_artifacts:
      - ART-ECON-TC-WORK-PACK
      - ART-ECON-TC-FORM
      - ART-ECON-TC-FIXTURES
      - ART-ECON-TC-RECEIPTS

artifacts:
  + artifact_id: ART-ECON-TC-WORK-PACK
    title: Time Capsule live-intake readiness work-pack
    path: development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack.md
    status: flag
    owner_context: CTX-ECON-TIME-CAPSULE
  + artifact_id: ART-ECON-TC-FORM
    title: Non-collecting Time Capsule form simulator
    path: development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/index.html
    status: active
    owner_context: CTX-ECON-TIME-CAPSULE
  + artifact_id: ART-ECON-TC-FIXTURES
    title: Versioned Time Capsule simulator fixtures and access matrix
    path: development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/fixtures/time-capsule-fixtures-v1.js
    status: flag
    owner_context: CTX-ECON-TIME-CAPSULE
  + artifact_id: ART-ECON-TC-RECEIPTS
    title: Time Capsule bounded Task Session receipts
    path: development/task-sessions/2026-07-17-time-capsule-demo/
    status: flag
    owner_context: CTX-ECON-TIME-CAPSULE

typed_items:
  + item_id: BLK-ECON-TC-ACCESS-001
    kind: blocker
    base_type: evidence_blocker
    primary_lane: validation
    source_id: CTX-ECON-TIME-CAPSULE
    target_id: CTX-ECON-TIME-CAPSULE
    status: active
    delegation_route: task-session
    requires_human: true
    role_notes: SWU-LIR-002 has 29/29 machine fixture checks but lacks actual screen-reader/browser, native-IME, and five-person critical consequence-retell evidence. Any critical misunderstanding blocks promotion and requires a full rerun after repair.
```

Derived indexes and `CRAFT.md` would then be regenerated through the installed
Craft workflow, not hand-edited. This batch remains held until the operator
explicitly approves this exact ledger promotion.
