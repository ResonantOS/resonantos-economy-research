# Context Pack — SWU-LIV2-015

Session evidence only. This strict pack governs invented-data private moderation
of saved phrase occurrences. It does not create a public feed, issue steward
credentials, wire HTTP routes, select the closing snapshot, or accept real data.

## Identity

- Task/SWU: `SWU-LIV2-015 — Private moderation queue`
- Parent: `TASK-LIV2-003 — Invented-Data Intake Foundation`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-015`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependencies: `SWU-LIV2-013` pass; `SWU-LIV2-014` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T22:27:46Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-015-01 | Reject absent or non-moderator authority before occurrence lookup. | SWU Algorithm; later adapter boundary | covered | Require a typed transport-supplied moderator principal; do not invent credential issuance. |
| O-015-02 | Reveal saved plaintext only through a steward-private pending queue. | D-05 saved-message exclusion; field lifecycle | covered | Queue output is explicitly private, requires moderator authority, and has no public projection or route. |
| O-015-03 | Bind a decision to the exact occurrence/version while intake is open and before its close instant. | SWU Algorithm | covered | Load occurrence/cohort/version inside an immediate transaction and check expected version, `open`, and action time. |
| O-015-04 | Append exactly one final accepted or rejected disposition using bounded reason codes. | D-15; schema | covered | Accepted requires `within_policy`; rejected uses a fixed non-content safety reason allowlist. |
| O-015-05 | Commit disposition and non-content audit atomically. | SWU Done; schema | covered | One repository transaction inserts both; audit carries IDs/disposition/reason/time, never phrase or steward secret. |
| O-015-06 | Make duplicate and conflicting decisions fail deterministically without mutation. | SWU Done; append-only schema | covered | Same final decision returns `moderation_already_decided`; different final decision returns `moderation_disposition_conflict`. |
| O-015-07 | Expose participant status privately without exposing plaintext or another envelope. | SWU Algorithm; field lifecycle | covered | Require the authenticated envelope ID to match the occurrence; return disposition/reason metadata only. |
| O-015-08 | Mark only accepted occurrences eligible for later close selection. | D-15; SWU Evidence | covered | Eligibility is accepted/pending/rejected; pending and rejected remain fail-closed. |
| O-015-09 | Keep phrase text and steward reference out of audit and logs; add no pre-opening feed. | D-05 exclusion; field lifecycle; SWU-014 | covered | Scan audit/logger outputs and the module surface with invented needles. |
| O-015-10 | Stay inside moderation repository/service/tests/evidence with invented data only. | SWU write scope; goal | covered | No migration, HTTP/steward UI, credential scheme, close snapshot, deployment, or real phrase. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-003.md`
   - Selectors: SWU-LIV2-015; State Rules; Security And Failure Rules; Synchronization.
   - Covers: O-015-01–O-015-10.
2. `DECISIONS.md`
   - Selectors: D-05 saved-for-opening exclusion from live feed; D-15 final disposition and fail-closed release.
   - Covers: O-015-02, O-015-04, O-015-08, O-015-09.
3. `development/time-capsule-live-intake-v2/contracts/field-lifecycle-v1.json`
   - Selectors: phrase plaintext/ciphertext; moderation fields; audit fields; forbidden audit phrase copy; no-live-feed invariant.
   - Covers: O-015-02, O-015-05, O-015-07–O-015-10.
4. `development/time-capsule-live-intake-v2/api/migrations/0001_initial_intake.sql`
   - Selectors: occurrences; moderation disposition uniqueness/append-only triggers; audit events.
   - Covers: O-015-03–O-015-06, O-015-08.
5. Existing envelope repository and AEAD payload adapter.
   - Selectors: occurrence record lookup; transaction boundary; `PhrasePayloadPort.reveal`; bound AAD.
   - Covers: O-015-02, O-015-03, O-015-05, O-015-09.
6. `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-014/VALIDATION-RECEIPT.json`
   - Selectors: passed crypto/redaction boundary; residue and dependency proof.
   - Covers: dependency proof and O-015-02, O-015-09, O-015-10.

No outside source was used.

## Architecture Guidance

Create a `moderation` repository/service boundary over the existing SQLite schema.
The repository returns occurrence metadata plus cohort/close state and provides one
immediate transaction for disposition plus audit. The service receives a principal
that a later same-origin adapter must authenticate; this SWU checks the role and a
bounded opaque steward reference but does not mint or validate credentials.

The private queue may decrypt a pending phrase through the passed
`PhrasePayloadPort` using the occurrence's original AAD. Participant status never
decrypts. Close eligibility reports only the final moderation class; a later close
selector must still reconcile that class with the latest immutable envelope receipt.

## Constraints And Non-Goals

- Moderator authorization is required before all steward operations and record lookup.
- A moderation action targets one occurrence ID and exact occurrence version.
- Accepted reason: `within_policy` only.
- Rejected reasons: `harmful_content`, `personal_data`, `spam`, or `other_safety`.
- Decisions are valid only while the cohort is `open` and action time is strictly before close.
- Disposition rows and audit events are append-only and committed together.
- Audit facts contain stable identifiers, final disposition, and reason code only.
- Private queue items can contain decrypted phrase text; they must never be logged,
  returned by participant status, or projected publicly.
- Participant status requires its owning envelope and returns metadata only.
- Accepted means disposition-eligible, not automatically current-snapshot eligible.
- No D-05 public-now feed/hide/restore path applies to saved-for-opening phrases.
- No steward credential issuance, HTTP adapter, browser UI, migration, close selector,
  public export, deployment, or real data.

## Write Scope

- `development/time-capsule-live-intake-v2/api/src/moderation/`
- moderation focused script in `api/package.json`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-015/`
- active SWU-015 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

```bash
npm --prefix development/time-capsule-live-intake-v2/api test -- moderation
```

Validation must cover authorization-before-lookup, private pending queue decryption,
accepted and rejected terminal transitions, exact-version/open/pre-close checks,
same and conflicting duplicate decisions, transaction rollback, participant envelope
scope, accepted-only eligibility, text/steward-reference absence from audit/logs, no
public route/projection, and prior package regressions.

## Decisions And Gates

- Auto-selected: transport-supplied typed principal rather than an invented credential scheme.
- Auto-selected: fixed reason-code vocabulary to prevent free-text leakage.
- Auto-selected: service exposes disposition eligibility; later close owns snapshot reconciliation.
- Gate verdict: pass for invented private moderation only.

## Gaps And Blockers

- Active: none.
- Deferred: steward credential issuance/authentication, UI and HTTP adapter,
  operational access logging, close-snapshot reconciliation, and staging approval.

## Authority Precedence

1. Goal invented-data/privacy/real-intake boundaries.
2. D-15 final disposition requirement and D-05 saved-message live-feed exclusion.
3. Frozen field-lifecycle and no-live-feed prohibitions.
4. SWU-LIV2-015 algorithm, write scope, and validation contract.
5. Passed immutable occurrence and AEAD boundaries.

## Fallback Exploration Rule

No fallback search is needed. If final dispositions cannot remain append-only, if
the audit would require phrase text, or if the service cannot require moderator
authority before lookup, stop and report a design blocker rather than weakening
the schema or creating a public moderation path.

## Provenance

- Task contract SHA-256: `504823f581afabc216e8069dc43d6641d29bdec94316af45d053c6837d1078b5`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Field lifecycle SHA-256: `1b929ece943a55de31d3d36ee8f50a4c76cb756e2ad85afda20bf5e66a6f4e87`
- Migration SHA-256: `933aad74f89bbfe9a2ba9cd5c3e4d72d4a5f975baf0dcfe88246e1b0a7fc908b`
- Envelope repository SHA-256: `54a78a348f564a38ed83b1aa4030f316b1586aa4d2441e8c71f00edf690f52b9`
- Payload adapter SHA-256: `790b22da6437f85103c0e14381a9b8656f108aaefa1f68c4940331d4585e9399`
- SWU-014 receipt SHA-256: `a9fea3b5b685b707de9b7531a57a0016385b1f1d8baaff7c6d2eba3099f7e6a4`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-015/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-015/context-index.json`
- Strict coverage: pass
