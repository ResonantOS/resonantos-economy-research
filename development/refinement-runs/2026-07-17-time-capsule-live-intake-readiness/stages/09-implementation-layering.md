# Implementation Layering — Time Capsule Live Intake

Status: candidate execution boundary; no SWU authorized by this artifact

## Layer Decision Table

| Layer | Decision unlocked | Minimum working unit | Included | Deferred | Exit evidence | Promotion |
| --- | --- | --- | --- | --- | --- | --- |
| L0 — contract | Do participants and machines agree on every visible state without collecting anything? | non-collecting contract simulator + versioned schemas/fixtures | conditional six-slot form, review, quiet, moderation-pending, errors, Unicode/IME/bidi, fake close/receipt, field/gate matrices | server, database, credentials, real content | accessibility/retell thresholds, zero network/history/storage, schema and negative-fixture pass | L1 only when form states and machine fixtures are byte/version aligned |
| L1 — synthetic kernel | Can invented data survive idempotent edits, concurrency, fenced close, failure, export, restore, and migration? | isolated synthetic public-intake kernel | selected implementation target, logical store, commands/queries, audit, close, allowlist export, restore/migration fixtures | real credentials/content, live moderation, sealed adapter | state/property tests, race/partial failure tests, export privacy scan, restore/migration reconciliation | L2 only with exact reconciliation and no unresolved result-steering path |
| L2 — public-live readiness | Can public collection fail safely under real owner and operational contracts? | signed public-live gate package + bounded no-real-data staging rehearsal | admission, consent/deletion, moderation/appeal, abuse, incident, data lifecycle, accessibility, operations, continuity, successor decisions | real opening, sealed mode, token/ceremony | named owner acceptances, load/incident/restore drills, independent review, signed launch/block decision | public-live remains unavailable until every gate passes; preference cannot promote |
| L3 — optional sealed readiness | Is any sealed profile defensible and sustainable, or should the feature be killed? | signed threat decision plus conditional synthetic profile rehearsal | low-entropy threat test, client/key/custody/opening/display consent/loss/migration/no-survivor profile | real sealed collection until separate final approval | adversarial vectors, network/storage inspection, recovery/migration drills, multi-owner accept/kill decision | enable only after public-live gates plus sealed gates; otherwise kill and repair copy |

## Capability Progression

| Surface | L0 | L1 | L2 | L3 |
| --- | --- | --- | --- | --- |
| form | volatile simulator | synthetic API client | production-reviewed public path | approved sealed path or removed option |
| data | schemas/fixtures | invented isolated persistence | approved public data lifecycle | separate sealed-artifact lifecycle |
| admission | none | fixture capability | owner-approved issuance/recovery/revocation | same; never unique-human proof by default |
| safety | honest unavailable states | negative fixtures | public owner contracts and drills | sealed threat/custody evidence |
| operations | zero-flow proof | restart/restore/migration tests | bounded staging/incident/continuity | long-horizon sealed recovery or kill |

## Non-Regression Guardrails

- The four capability states remain distinct and fail closed.
- No real content appears before L2 promotion.
- Public content begins moderation-pending, not immediately visible.
- Quiet creates no public/root record and no penalty.
- Credentials and private object identities never enter public export.
- Every mutation is idempotent, expected-version and close-epoch checked.
- Closed snapshots and public exports are reproducible and reconciled.
- Analytics/logging never captures words, credentials, commitments, or receipts.
- Killing sealed waives no public-live gate.
- No participation effect on allocation, rank, reward, membership, or governance.
- No capsule module mint capability.

## Recommended First Unit

`SWU-LIR-001`: repair the existing static presentation form into the
non-collecting contract simulator. It is selected but not authorized; Task
Session requires a separate explicit user instruction.

