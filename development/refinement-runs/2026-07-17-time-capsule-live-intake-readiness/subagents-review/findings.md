# Verified Change Requests — Time Capsule Live Intake

Dispatch: `2026-07-17-time-capsule-live-intake-review`

Final approver: parent Refine coordinator

Verdict: `FIX` for the candidate implementation package; review dispatch may
close resolved once these change requests are accepted as plan inputs. `FIX`
does not authorize live intake.

## FORM-SPEC.md And Participant Contract — FIX

| # | Evidence | Severity | Proposed change |
| --- | --- | --- | --- |
| CR-01 | FAR-01 and PS-07: “public now” may mean display at confirmation although moderation/appeal remains open | CRITICAL | Replace direct display with `confirmed -> moderation-pending -> show | quarantine | reject`, including timeout, appeal, outage, and receipts. |
| CR-02 | FAR-02 and PS-04: opening, private preview, display consent, moderation, and erasure have no complete release journey | CRITICAL | Specify an accessible sealed-release state machine with separate opening and unselected current display consent; no response remains sealed. |
| CR-03 | FAR-03, DBR-06, PS-06, PS-10: edit, withdrawal, supersession, deletion, immutable publication, logs, and backups conflict | CRITICAL | Add a field/state lifecycle matrix showing storage, display, manifest, retention, deletion, backup, legal/incident hold, and impossible-after-publication effects. |
| CR-04 | FAR-04: quiet is described as meaningful but creates no record; all-empty completion lacks a receipt contract | MAJOR | Define quiet as valid/unpenalized with no public/root record and an explicit private zero-word completion/edit outcome. |
| CR-05 | FAR-06/FAR-07: grapheme, punctuation, IME, RTL editing, and bidi rendering are not one implementable contract | MAJOR | Freeze one versioned Unicode/IME/bidi contract and client/server/access-mode parity fixtures. |
| CR-06 | FAR-09/FAR-10 and PS-09: errors, exact close semantics, edit-handle recovery, and final receipts are incomplete | MAJOR | Define accessible error/focus/retry behavior plus server-authoritative close, idempotent receipt, lost/compromised handle, and final inclusion outcomes. |

## FORM-WIREFRAME.html And L0 Evidence — FIX

| # | Evidence | Severity | Proposed change |
| --- | --- | --- | --- |
| CR-07 | FAR-05: slot 2 and visibility are always active; review lacks normalization, consequences, edits, deadline, and acknowledgements | MAJOR | Repair the zero-persistence simulation to enforce conditional controls and a complete volatile review state. |
| CR-08 | FAR-08: the non-collecting form retains a GET submission path | MAJOR | Remove form action/method, prevent all submit/Enter requests, and verify zero network/history/storage. |
| CR-09 | FAR-11: comprehension/accessibility evidence has no participant matrix or critical threshold | MAJOR | Predeclare retell and access-mode scenarios with any consequence misunderstanding as a promotion block. |

## ARCHITECTURE.md And Data Contract — FIX

| # | Evidence | Severity | Proposed change |
| --- | --- | --- | --- |
| CR-10 | DBR-01: result-affecting records lack stable identity and uniqueness while legitimate duplicate words are allowed | CRITICAL | Define stable internal IDs and exactly-one-selected-record uniqueness for `(cohort,envelope,horizon,slot)` without exposing credential links. |
| CR-11 | DBR-03/DBR-04: retries and replay are undefined; atomic close lacks a linearization point and fencing | CRITICAL | Add idempotency/request-digest/expected-version rules and an atomic `open -> closing -> closed` epoch that every mutation validates at commit. |
| CR-12 | DBR-05: confirmation, disposition, close, export, publication, and receipt failure lack recovery states | CRITICAL | Define durable operation IDs/states, atomic boundaries, retry semantics, reconciliation, and restart behavior for every partial failure. |
| CR-13 | DBR-02 and PS-05: private fields and linkable metadata are not classified across logs, backups, receipts, aggregates, and support | MAJOR | Create a field-level data inventory with purpose, exposure, processors, prohibited telemetry, access, retention, deletion, and small-cohort publication rules. |
| CR-14 | DBR-10: public export removes private fields late and can serialize new fields accidentally | CRITICAL | Create a separately versioned allowlist-only public projection from the fenced snapshot with atomic publication, forbidden-field checks, and reconciliation. |

## Reliability, Incident, And Stewardship Contracts — FIX

| # | Evidence | Severity | Proposed change |
| --- | --- | --- | --- |
| CR-15 | DBR-07/DBR-08/DBR-09: audit, backup/restore, migration, and corruption handling cannot prove acknowledged state or canonical history | CRITICAL | Define non-content audit events, RPO/RTO, consistent backup scope, durable close state, restore reconciliation, versioned immutable bytes, checksums, and copy-verify migration drills. |
| CR-16 | PS-08: no incident state machine or stop/resume authority exists | CRITICAL | Specify detection, severity, containment, intake/display stop, revocation/rotation, notice, known-good restore, and signed resume. |
| CR-17 | PS-12/PS-13: ten-year continuity and successor authority lack cold restore, transfer, revocation, conflict, and shutdown proof | CRITICAL | Require separate public/sealed continuity contracts, independent failure domains, rehearsed export/restore/migration, successor protocol, funding/shutdown, and permanent-loss behavior. |

## Sealed Profile — FIX Or KILL

| # | Evidence | Severity | Proposed change |
| --- | --- | --- | --- |
| CR-18 | PS-02: a public commitment to one low-entropy word may reveal that word offline | CRITICAL | Make realistic offline-guess resistance an adversarial gate; kill sealed intake if the public record contract cannot satisfy it. |
| CR-19 | PS-03: client substitution, browser residue, telemetry, keys, compromise, rotation, recovery, and migration are unbounded | CRITICAL | Require an owner-approved client/key/custody threat contract and negative fixtures before enabling the control. |
| CR-20 | PS-11: successor access can silently become opening/display consent | MAJOR | Default to no survivor authority; separate and test access, recovery, opening, and display authority under participant-chosen delegation. |

## Capability And Promotion Boundary — FIX

| # | Evidence | Severity | Proposed change |
| --- | --- | --- | --- |
| CR-21 | PS-01: public-live has no independent promotion gate; killing sealed does not close public risks | CRITICAL | Define separate static, synthetic, public-live, and sealed-live gates with evidence and owners. |
| CR-22 | All three receipts: the application runtime, datastore, credential governance, policy owners, and safety profile are unselected | MAJOR | Keep the design system-agnostic through Refine, then route stack selection and each owner decision explicitly; do not hide them in implementation tasks. |

## Ordered Change-Request List

1. Separate capability gates and keep both live modes disabled.
2. Repair the L0 form as a true zero-network contract simulator.
3. Freeze moderation-pending, quiet, edit/withdraw/delete, error, close, and receipt semantics.
4. Freeze Unicode/IME/bidi and accessibility evidence protocols.
5. Define the logical data model, IDs, uniqueness, idempotency, transactions, close fencing, and recovery.
6. Define field-level data lifecycle and allowlist-only public export.
7. Define audit, incident, backup/restore, migration, corruption, and successor contracts.
8. Threat-model sealed mode separately; approve a narrow profile or kill it.
9. Select an implementation stack only after these system-agnostic contracts are plan-ready.

## Parent Approval

Accepted as the evidence-backed change-request set for Refine stages 03–10.
Refuted findings: none. Duplicates were recomposed into CR-01 through CR-22;
their source IDs remain cited. No change request grants intake readiness.

