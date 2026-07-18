# Refine Seed Proposal — Time Capsule Live Intake Readiness

Status: confirmed, candidate refinement seed

Run id: `2026-07-17-time-capsule-live-intake-readiness`

Preset: `full`

Research mode: `research-if-gap-appears`; no external research is authorized by
the confirmation that started this run

## Target

Refine the existing Resonant Time Capsule candidate design into an
implementation-ready, non-executed plan for:

1. the live form and its API boundary;
2. the intake database, transactions, lifecycle, recovery, and deletion rules;
3. privacy, security, abuse, moderation, incident, release, and stewardship safety;
4. the exact boundary between a non-collecting prototype, synthetic backend,
   real public intake, and any future sealed intake.

The static explanation and non-collecting form are already planned. This run
must not redesign them without a finding that demonstrates a material gap.

## Source Context

Primary source packet:

- `development/invoke-runs/2026-07-16-time-capsule-intake/SPEC.md`
- `development/invoke-runs/2026-07-16-time-capsule-intake/ARCHITECTURE.md`
- `development/invoke-runs/2026-07-16-time-capsule-intake/FORM-SPEC.md`
- `development/invoke-runs/2026-07-16-time-capsule-intake/DECISIONS-AND-GAPS.md`
- `development/invoke-runs/2026-07-16-time-capsule-intake/IMPLEMENTATION-LAYERING.md`
- `development/invoke-runs/2026-07-16-time-capsule-intake/WORK-PACK.md`
- task contracts `TASK-TC-002`, `TASK-TC-004`, `TASK-TC-005`, and `TASK-TC-006`
- the architecture X-Ray and lane/result receipts from the same Invoke run

## Write Scope

This run may write only under:

`development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/`

The governed dispatch lifecycle additionally requires append-only rows in
`telemetry/agents/subagents-dispatch.yaml` and non-authority inventory and
observability traces. No application, production database, hosted site,
authority, definition, token, or deployment artifact is in write scope.

## Done Criteria

- The current implementation boundary is challenged from product, data, and
  safety perspectives with cited findings.
- A concrete target application boundary is selected or explicitly blocked.
- Database entities, sensitive fields, transactions, state transitions,
  retention, deletion, audit, backup, and recovery obligations are specified.
- Public and sealed modes have separate threat, data, consent, and custody
  contracts; sealed intake may be killed.
- Abuse, moderation, incident, accessibility, and long-term stewardship paths
  have named owners and fail-closed behavior.
- The smallest safe implementation unit and later promotion gates are explicit.
- The final plan contains bounded SWUs with validation evidence and no real-data
  authorization by implication.

## Validation Surface

- Dispatch Spec schema and technique validation.
- Strict Context Builder obligation coverage.
- Three independent review receipts and parent verification.
- Define/design/final interrogation verdicts.
- Distill closure, repair, and recomposition proof.
- Plan coverage for form, API, database, privacy, security, abuse, operations,
  accessibility, testing, migration, recovery, and owner gates.
- File-existence and evidence-index consistency checks.

## Selected Strategy

The canonical ten-stage Refine loop uses the confirmed `full` preset. It applies
baseline sequencing, route ambiguity, dialectic tension, alternative comparison,
hidden-structure X-Ray, low-cost falsification, and protected-context overlays.
Three approved role-bound reviewers challenge the same source packet:

- participant/form/accessibility;
- backend/database/recovery;
- privacy/security/abuse/stewardship.

Their findings inform the parent-owned interrogation, design, repair, and plan.
They do not implement fixes or approve live intake.

## Non-Goals

- no production code or database;
- no real credentials or words;
- no homemade cryptography or selected cryptographic profile;
- no token mint, supply selection, distribution, or launch;
- no claim that a database or encrypted payload proves unique humanity,
  fairness, consent, recoverability, or safety;
- no external research until a named gap is raised and separately confirmed.

