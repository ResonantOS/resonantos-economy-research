# TASK-LIV2-005 — Bounded Public-Live Readiness

## Objective

Join the validated invented-data kernel to the current form under explicit owner,
deployment, rollback, incident, restore, accessibility, and comprehension gates.
Real intake stays disabled until the final manual SWU passes.

- Layer/slice: L2 / S-05
- Wave: W3
- Dependencies: SWU-LIV2-001–020, including all human evidence
- Target roots: implementation package, current contribute surface, candidate deployment/runbooks
- External boundary: invented staging until SWU-025 receives separate authorization

## Owner Package

Required owners accept or block: admission/invite issuance; moderation/abuse;
privacy/retention/entrusted access; incident stop/resume; backup/restore; deployment;
successor/close continuity; accessibility/comprehension; and security/key custody.
Each decision names scope, evidence, failure action, and contact/role without
publishing credentials or message content.

## Staged Runtime Shape

The existing Nginx/Traefik site remains the public edge. A separate API container
and persistent SQLite volume are reachable only through Nginx `/api/`; the DB is
never attached to the edge network. Candidate CSP adds only the same-origin
connection required by the adapter. Health endpoints expose no sensitive state.

## Smallest Working Units

### SWU-LIV2-021 — Admission, safety, and operations owner package

- Primary behavior: give every real-intake gate one accountable owner and explicit accept/block rule.
- Independent acceptance: signed package can be reviewed without changing code/deployment.
- Candidate children: one SWU per owner domain.
- Retained boundary: real-intake promotion requires the joined package; no single
  owner can authorize the cross-domain risk surface.
- Dependencies: SWU-LIV2-007–009 and SWU-LIV2-020.
- Write scope: `development/time-capsule-live-intake-v2/owner-package/` only.
- Done: admission, privacy, moderation, incident, data, operations, successor,
  access, and security rows each have owner, evidence, failure behavior, accept/block.
- Evidence: dated signatures/approvals and unresolved blocker list.
- Validation: multi-owner review against GAP-LEDGER G-L2-01/02.
- Owner: manual.
- Source anchors: D-01–D-07; architecture View 6; GAP-LEDGER.
- Handoff: approval is for this bounded intake, not close, Bitcoin, archive, or token policy.

### SWU-LIV2-022 — Feature-gated same-origin client adapter

- Primary behavior: exchange one invented invite and confirm one invented envelope
  through the API while preview mode remains the default.
- Independent acceptance: adapter integration passes locally without deployment.
- Candidate children: invite exchange and envelope submit UI.
- Retained boundary: they form one authenticated participant round trip and one receipt.
- Dependencies: SWU-LIV2-020–021.
- Write scope:
  - current contribute surface adapter/config/tests only;
  - `development/time-capsule-live-intake-v2/deployment/` candidate config.
- Algorithm: read secret from fragment → POST exchange → remove fragment → keep
  HttpOnly session/CSRF → build current six-slot envelope → confirm with expected
  version/idempotency → render durable/editable private status; preview adapter
  remains selected unless explicit runtime flag and health/gate response pass.
- Done: offline/API failure falls back to honest unavailable state, never false receipt;
  no secret/storage/history leak; fixtures distinguish preview vs durable receipt.
- Evidence: browser network/storage/history/console and API contract receipt.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- client-adapter && node development/time-capsule-live-intake-v2/tools/validate-client-boundary.mjs`
- Owner: local-fallback.
- Source anchors: current README Future Live Adapter Seam; D-02–D-04.
- Handoff: do not enable the adapter on the public host in this SWU.

### SWU-LIV2-023 — Invented staged deploy, rollback, incident, and restore

- Primary behavior: run one invented cohort through deploy→pause→restore→rollback
  while preserving acknowledged state.
- Independent acceptance: one operations rehearsal report can pass without real content.
- Candidate children: deployment, rollback, incident, restore.
- Retained boundary: the claim being tested is operational recoverability of one
  deployed release; each step is a required phase of that single rehearsal.
- Dependencies: SWU-LIV2-022.
- Write scope: candidate compose/nginx/deploy config, runbooks, and staged receipts;
  no live secrets committed.
- Procedure: dry-run config → isolated stage → health → invented invite/envelope →
  pause intake/display → backup → corrupt/stop API → clean restore → reconcile receipt
  and bytes → rollback image/site while preserving DB → verify unavailable/fail-closed modes.
- Done: DB not public, persistent volume survives, rollback is documented, and
  canonical state/receipts reconcile.
- Evidence: commands with secrets redacted, image/config hashes, health/restore report.
- Validation: staged runbook review plus automated smoke/restore suite.
- Owner: local-fallback.
- Source anchors: D-03; existing deployment validation; SWU-020.
- Handoff: default to a local/isolated staging host; public VPS change requires separate authority.

### SWU-LIV2-024 — Staged accessibility and comprehension regression

- Primary behavior: prove the API-connected candidate preserves the manual V2 consequences.
- Independent acceptance: one regression matrix compares staged vs L0 behavior.
- Candidate children: access run and retell run.
- Retained boundary: adapter errors/receipts can change both semantics and understanding;
  the acceptance claim is that the connected journey preserves the whole contract.
- Dependencies: SWU-LIV2-023.
- Write scope: Task Session evidence; repairs route to exact UI/API SWU.
- Done: screen-reader/keyboard/RTL/IME and five-person critical retell pass; durable
  receipt and entrusted/public-at-opening consequences are correctly distinguished.
- Evidence: V2 matrix plus staged receipt scenarios, no phrases recorded.
- Validation: manual protocol; 100% critical cells.
- Owner: manual.
- Source anchors: updated Access Matrix; SWU-007–009 receipts.
- Handoff: any critical divergence blocks SWU-025 and requires full affected rerun.

### SWU-LIV2-025 — Bounded real-intake enablement gate

- Primary behavior: explicitly enable or block the live adapter for the approved cohort.
- Independent acceptance: one signed promotion receipt changes one capability flag/deployment state.
- Candidate children: approval and enablement.
- Retained boundary: enabling without the contemporaneous approval is unsafe; the
  controlled state transition is one protected action.
- Dependencies: SWU-LIV2-021–024.
- Write scope: promotion receipt, approved deployment config/flag, public status copy;
  no close/archive/Bitcoin action.
- Procedure: verify owner/human/restore receipts and zero blockers → record cohort,
  start/end/close, capacity, rollback owner → take pre-change backup → deploy exact
  reviewed artifact → enable invite exchange → run synthetic canary → publish honest status.
- Done: either live intake is bounded and observable under the approved profile, or
  the page remains preview/unavailable with blocker reason.
- Evidence: human approval, artifact hashes, canary, rollback checkpoint, public status.
- Validation: two-person checklist/review; no automatic promotion.
- Owner: manual.
- Source anchors: WORK-PACK gates; GAP-LEDGER G-L2; D-07.
- Handoff: authorization is only for intake until the close fence; it does not authorize SWU-036.

## Synchronization

Every staged or live artifact is content-addressed in receipts. A repair that changes
participant consequences reruns SWU-024; an operations/config repair reruns SWU-023.

