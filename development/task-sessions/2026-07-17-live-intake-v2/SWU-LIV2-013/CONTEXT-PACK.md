# Context Pack — SWU-LIV2-013

Session evidence only. This strict pack governs invented-data confirmation of a
complete six-place envelope into immutable versions and scoped idempotency
receipts. It does not provide real encryption, moderation, or HTTP intake.

## Identity

- Task/SWU: `SWU-LIV2-013 — Immutable envelope confirmation lifecycle`
- Parent: `TASK-LIV2-003 — Invented-Data Intake Foundation`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-013`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependencies: `SWU-LIV2-011` pass; `SWU-LIV2-012` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T22:09:20Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-013-01 | Accept only an authenticated scope equal to the command session scope. | command contract step 1 | covered | Trusted command input carries both; mismatch/absence rejects before state reads. |
| O-013-02 | Normalize and validate the exact six-slot public-at-opening envelope. | phrase/envelope contracts | covered | Implement frozen Unicode algorithm, identities/order, second-after-first, and nonempty rule. |
| O-013-03 | Apply frozen rules, close state/epoch/fence, idempotency, and version precedence exactly. | command contract/fixtures; D-07 | covered | One immediate transaction returns typed commit/replay/conflict/rejection outcomes. |
| O-013-04 | Represent confirm/edit/withdraw as one full confirmed-snapshot operation. | D-04; SWU primary | covered | Operation remains `confirm_envelope`; changed or emptied slots create the next version. |
| O-013-05 | Reuse unchanged occurrence IDs and create fresh IDs/nonces only for changed nonempty phrases. | SWU Algorithm | covered | Prior immutable receipt maps slots to occurrences; payload port opens only for equality comparison. |
| O-013-06 | Omit withdrawn slots and never auto-save drafts. | D-04; SWU Handoff | covered | Only explicit service calls persist; empty slot maps to `null` in next immutable receipt. |
| O-013-07 | Keep phrase protection behind an explicit port until SWU-LIV2-014. | dependency graph; task security | covered | Test-only invented opaque payload port is named non-encryption; production use fails without a supplied port. |
| O-013-08 | Commit version, new occurrences, receipt, and non-content audit atomically. | SWU Done; schema | covered | Any payload/constraint failure rolls back every row. |
| O-013-09 | Prove replay, stale/race/closed negatives and no partial state. | SWU Evidence | covered | Contract precedence vectors plus two-writer sequential race and injected failure tests. |
| O-013-10 | Stay within envelope repository/commands/receipts/tests/evidence/status scope. | SWU write scope; goal | covered | No migration, admission mutation, real phrase/secret, crypto claim, route, moderation, or deployment. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `.../work-pack/tasks/TASK-LIV2-003.md`
   - Selectors: State Rules; Security And Failure Rules; SWU-LIV2-013; Synchronization.
   - Covers: O-013-01–O-013-10.
2. `DECISIONS.md`
   - Selectors: D-04 editable confirmed envelope; D-07 authoritative close fence.
   - Covers: O-013-03, O-013-04, O-013-06, O-013-08.
3. Frozen phrase-profile and envelope contracts plus fixtures.
   - Selectors: full normalization; six-place schema/invariants; positive/negative vectors.
   - Covers: O-013-02, O-013-04–O-013-06.
4. Frozen command-state contract and fixtures.
   - Selectors: six-step algorithm; outcomes; replay boundary; atomicity; 22 vectors.
   - Covers: O-013-01, O-013-03, O-013-08, O-013-09.
5. Passed SQL migration and SWU-LIV2-012 receipt.
   - Selectors: immutable version/occurrence/idempotency/audit tables; scoped session boundary.
   - Covers: dependencies and O-013-05, O-013-07–O-013-10.

No outside source was used.

## Architecture Guidance

The immutable `idempotency_results.result_json` is also the private receipt for
one committed version. It contains the full six-slot map of occurrence IDs or
`null`, never phrase content. An occurrence row is created only when a nonempty
phrase first appears or changes; a later receipt reuses its ID when the opened
prior payload matches. This event/snapshot boundary satisfies reuse without a
schema change. SWU-LIV2-014 must replace the invented opaque payload port before
any staged or real data exists.

## Constraints And Non-Goals

- One operation: `confirm_envelope`; edit/withdraw are new full snapshots.
- Initial expected version is `null`; subsequent expected version is exact integer.
- Full all-empty confirmation remains invalid under the frozen envelope contract.
- Strictly before the cohort close instant inside the same immediate transaction.
- Idempotency scope: `(session_scope, confirm_envelope, idempotency_key)`.
- Receipt stores IDs/versions/digests/times/slot map only; no phrase or capability.
- New/changed occurrence gets random stable ID, AEAD nonce-shaped bytes, and
  commitment nonce-shaped bytes from the supplied payload port.
- No claim that the test payload port encrypts; invented inputs only.
- No draft auto-save, HTTP route, moderation, public feed/export, or close snapshot.

## Write Scope

- `development/time-capsule-live-intake-v2/api/src/envelope/`
- envelope-command focused package script in `api/package.json`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-013/`
- active SWU-013 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

```bash
npm --prefix development/time-capsule-live-intake-v2/api test -- envelope-commands
```

Validation must cover phrase/envelope fixture parity, initial commit, edit,
slot withdrawal, unchanged ID reuse, changed ID creation, replay before version
check, idempotency conflict, scope/rules/close/epoch/fence/version precedence,
two-writer stale conflict, injected mid-command rollback, and package regressions.

## Decisions And Gates

- Auto-selected: one `confirm_envelope` operation owns confirm/edit/withdraw snapshots.
- Auto-selected: immutable idempotency result is the private version receipt/slot map.
- Auto-selected: payload protection is a required port; tests use a visibly invented non-crypto port.
- Gate verdict: pass for invented command implementation only; no encryption or live intake.

## Gaps And Blockers

- Active: none.
- Deferred: SWU-LIV2-014 must supply reviewed AEAD/redaction; HTTP adapter and server-derived session scope are later.

## Authority Precedence

1. Goal invented-data/privacy/real-intake boundaries.
2. Frozen command-state algorithm and SWU-LIV2-013 write scope.
3. Frozen phrase/envelope contracts.
4. D-04 and D-07.
5. Passed schema/session boundaries.

## Fallback Exploration Rule

No fallback search is needed. If the existing immutable receipt cannot carry
the complete occurrence map or atomicity cannot be proven, stop and route a
schema repair instead of mutating migrations in this SWU.

## Provenance

- Task contract SHA-256: `81533407bd5ddd5d7f7573fc34b91e8a099654ddb7fa3f550130a9083aefb7e0`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Phrase contract SHA-256: `47b78bf8fe93ad3ee5ffd6c34e2838105cd83e68d4ffae9eb2749624b9c25ec5`
- Envelope contract SHA-256: `d7dc33bc4bc77e09baed28f62497930771534da5572c7b9c612909d9aa071ad5`
- Command contract SHA-256: `eb2b28b4abea900f01bf25d1584dbe0f2671ab6e381a7981cc3ad7a98d4f1dff`
- Phrase fixtures SHA-256: `30f88f63a87881a108ad89d5aa3063c771650e6dbcbeb121afdc42387d6acc13`
- Envelope fixtures SHA-256: `bd7bb782e8eda401e20aaa8c0423e74c856bc7ac0e59e04daaf2c0c85e97bda9`
- Command fixtures SHA-256: `1766a4024992c055da2c35b5ddf228314b3c827dbca8c96b9fa28159340f4afa`
- Migration SHA-256: `933aad74f89bbfe9a2ba9cd5c3e4d72d4a5f975baf0dcfe88246e1b0a7fc908b`
- SWU-012 receipt SHA-256: `a3e5d08bfafc777e498c96ee4e851767910428fc6f1f7ac0d015ed27888ea0fe`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-013/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-013/context-index.json`
- Strict coverage: pass
