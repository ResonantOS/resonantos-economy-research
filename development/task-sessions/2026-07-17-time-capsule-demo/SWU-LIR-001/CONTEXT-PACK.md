# Context Pack — SWU-LIR-001

Session evidence only. This pack is not a reusable product or policy authority.

## Identity

- Task: `SWU-LIR-001 — Repair Static Simulator`
- Parent: `TASK-LIR-001 — Non-Collecting Contract Simulator`
- Goal: have a safe, demonstrable form by 2026-07-18 while keeping all real
  intake and sealed cryptography disabled
- Mode: `lean`, strict
- Target: `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/`
- Git baseline: `c617ace5f10df9f46ec9f203743f4baca5cacbd6`
- Captured: `2026-07-17T04:30:49Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status |
| --- | --- | --- | --- |
| O-01 | Build exactly one six-place, three-horizon browser journey. | task contract; form spec Steps 0–5 | covered |
| O-02 | Use volatile memory only: no request, URL submission, history, storage, analytics, credential, or backend adapter. | task boundary; CR-08; architecture L0 | covered |
| O-03 | Enable slot 2 only after valid slot 1; require a non-default mode for each filled word. | task detail 3; form spec Step 2 | covered |
| O-04 | Keep sealed collection unavailable and explain why without claiming encryption. | task detail 4; CR-18–CR-20; Sealed Adapter | covered |
| O-05 | Validate one Unicode word using NFC, grapheme-aware length, IME-safe events, and bidi-isolated review. | task details 5/8; CR-05; client validation | covered |
| O-06 | Show quiet, moderation-pending, six-place review, consequences, edits, deadline posture, and six acknowledgements. | task details 4/6; CR-01–CR-07 | covered |
| O-07 | Provide accessible errors, focus, zero-word completion, simulated close conflict, and fake receipt. | task detail 7; CR-06/CR-09 | covered |
| O-08 | Validate responsive layout, keyboard flow, console, network, storage, and history in a real browser. | task acceptance; work-pack validation | covered |
| O-09 | Keep deployment, DNS, production intake, token state, and cryptography outside this SWU. | task synchronization; work-pack exclusions | covered |

Strict coverage: `9/9`, pass.

## Selected Evidence

1. `.../tasks/TASK-LIR-001.md`
   - Selectors: Objective; Implementation Detail; SWU-LIR-001; Synchronization.
   - Covers: O-01–O-09.
2. `.../stages/09-work-pack.md`
   - Selectors: Delivery Boundary; SWU-LIR-001 row; Validation Strategy.
   - Covers: O-02, O-08, O-09.
3. `.../stages/06-architecture-bundle.md`
   - Selectors: capability table; Contract Simulator; Sealed Adapter; L0 workflow.
   - Covers: O-02, O-04, O-06.
4. `.../subagents-review/findings.md`
   - Selectors: CR-01–CR-09; CR-18–CR-22.
   - Covers: O-03–O-08.
5. `development/invoke-runs/2026-07-16-time-capsule-intake/FORM-SPEC.md`
   - Selectors: Form Promise; Steps 0–5; Client Validation; Error Copy;
     Privacy Boundaries; Acceptance Checklist.
   - Covers: O-01, O-03, O-05–O-07.
6. `development/invoke-runs/2026-07-16-time-capsule-intake/FORM-COPY.md`
   - Selectors: Form Header through Public Status Copy.
   - Covers: O-04, O-06.
7. `development/invoke-runs/2026-07-16-time-capsule-intake/FORM-WIREFRAME.html`
   - Selectors: complete form structure; current GET/always-active defects.
   - Covers: O-01, O-03, O-06.
8. `development/refinement-runs/2026-07-12-number-lottery/presentation/site/index.html`
   - Selectors: theme variables; header; invitation; current public boundary.
   - Covers: O-01, O-09 and target visual continuity.

Every selected source closes at least one obligation. Broader economy, token,
research-tower, deployment, and live-intake sources were excluded because this
SWU cannot act on them.

## Hard Constraints

- No `<form action>` or method; every submit/Enter path must be prevented.
- No `fetch`, XHR, beacon, WebSocket, form navigation, analytics, cookies,
  IndexedDB, Cache API, service worker, `localStorage`, or `sessionStorage`.
- Refresh must reset all user-entered state.
- Saved/sealed is visible as a disabled future option, not a fake protection.
- Public words are described as `moderation-pending`, never instantly public.
- Empty slots are `Quiet`; quiet creates no simulated record and carries no
  penalty language.
- All real dates and credentials remain absent; the page labels its deadline
  and receipt as simulated.
- No homepage, full-idea page, deployment config, DNS, remote server, or token
  artifact is in write scope.

## Decision Pack

- Auto-selected safe option: `no sealed path for this demo`. The control is
  disabled and explains the later owner/evidence gate.
- Auto-selected implementation: standalone static HTML/CSS/external JavaScript
  under `/contribute/`, using in-memory state only.
- Auto-selected confirmation: a visibly simulated receipt rendered in the DOM;
  it makes no identity, inclusion, confidentiality, or durability claim.
- Deferred: public-live, real cryptography, key custody, recovery, successor
  access, moderation operations, database, deployment, and publication.

## Done And Validation Surface

Done requires all O-01–O-09 obligations to pass or return an exact blocker.
Validation uses static scans plus Playwright CLI against a local Python static
server at desktop and mobile viewports. The browser trace must show only the
initial document and static asset requests; interaction must add zero requests,
leave the URL unchanged, and leave cookies and browser storage empty.

