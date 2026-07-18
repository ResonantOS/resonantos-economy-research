# Context Pack — SWU-LIV2-011

Session evidence only. This strict pack governs the first SQLite schema,
migration runner, datastore configuration, and invented-data constraint tests.
It does not create HTTP commands, credentials, real data, or deployment state.

## Identity

- Task/SWU: `SWU-LIV2-011 — SQLite migrations and invariants`
- Parent: `TASK-LIV2-003 — Invented-Data Intake Foundation`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-011`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependency: `SWU-LIV2-010` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T21:52:50Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-011-01 | Create a repeatable versioned migration from empty database to latest. | SWU primary/Done | covered | Ordered SQL files plus checksum-tracked `schema_migrations`. |
| O-011-02 | Represent the declared cohort/rules, invite, session, envelope/version, occurrence, idempotency, moderation, and audit entities. | task Data Model; architecture Logical Entities | covered | Stable text IDs and explicit relational tables; no public projection. |
| O-011-03 | Enforce foreign-key and uniqueness invariants in SQL. | D-03; SWU Done | covered | Composite keys, scoped idempotency key, version/slot uniqueness, and restrictive FKs. |
| O-011-04 | Enforce one active invitation per envelope while permitting revoked-then-recovered binding. | task State Rules; D-02/D-03 | covered | Partial unique active-binding index; recovery keeps the envelope and changes the digest row. |
| O-011-05 | Make confirmed envelope versions and audit events append-only. | architecture Logical Entities; SWU Done | covered | update/delete denial triggers; occurrences and idempotency results are immutable too. |
| O-011-06 | Keep SQLite-specific WAL, foreign-key, and busy-timeout behavior in the adapter. | SWU Handoff | covered | `node:sqlite` adapter owns pragmas; logical migration contains no pragmas. |
| O-011-07 | Preserve private-field shape and avoid plaintext/invite secrets. | field lifecycle; task security rules | covered | Schema stores digests and ciphertext/nonce placeholders only; tests use invented bytes. |
| O-011-08 | Prove empty→latest→cold-copy restore without drift. | SWU Evidence | covered | Apply, seed invented rows, checkpoint/close/copy, reopen/reconcile, integrity and row checks. |
| O-011-09 | Exercise negative constraints and checksum drift. | SWU acceptance | covered | FK, active binding, version, slot, idempotency, immutable/audit, and migration checksum failures. |
| O-011-10 | Stay within migrations/datastore/tests/evidence/status scope and synthetic L1. | SWU write scope; goal | covered | No HTTP route, real phrase/secret, external database, deployment, or production file. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `.../work-pack/tasks/TASK-LIV2-003.md`
   - Selectors: Data And Interface Model; State Rules; Security And Failure
     Rules; SWU-LIV2-011; Synchronization.
   - Covers: O-011-01–O-011-10.
2. `DECISIONS.md`
   - Selectors: D-02 active invite mapping; D-03 runtime/datastore consequences.
   - Covers: O-011-03, O-011-04, O-011-06.
3. `.../stages/06-architecture-bundle.md`
   - Selectors: Logical Entities; Data Classification Descriptor; Command Contract.
   - Covers: O-011-02–O-011-05, O-011-07.
4. Passed command-state and field-lifecycle contracts.
   - Selectors: idempotency scope; version fields; private stores; forbidden plaintext/log copies.
   - Covers: O-011-03, O-011-07, O-011-09.
5. SWU-LIV2-010 receipt and current API package/lock.
   - Selectors: Node runtime; package scripts; synthetic/loopback boundary.
   - Covers: dependency and O-011-06, O-011-10.

No outside source was used. The selected Node 22 runtime already provides
`node:sqlite`; this SWU adds no runtime package.

## Architecture Guidance

The SQL migration owns portable logical tables and invariants. The TypeScript
adapter owns database opening, WAL, foreign keys, busy timeout, ordered loading,
checksum verification, and transactional application. No repository or HTTP
behavior is added. A copied database is only a bounded migration check here;
full restore, corruption, and migration proof remains SWU-LIV2-020.

## Constraints And Non-Goals

- Use file-backed temporary SQLite databases and invented identifiers/bytes only.
- `PRAGMA foreign_keys=ON`, `journal_mode=WAL`, `busy_timeout=5000` in adapter.
- Store invitation/session digests, never bearer capabilities.
- Store phrase ciphertext/nonce columns, never plaintext.
- Stable scoped primary/unique keys; no auto-increment identity dependence.
- Append-only triggers for versions, occurrences, idempotency results,
  moderation dispositions, and audit events where applicable.
- No API command, invite issuance/exchange, encryption implementation,
  moderation route, close logic, backup promise, or deployment.
- No real `.sqlite` file retained in the repository; tests clean temporary files.

## Write Scope

- `development/time-capsule-live-intake-v2/api/migrations/`
- `development/time-capsule-live-intake-v2/api/src/datastore/`
- migration-focused package script in `api/package.json`
- generated `api/package-lock.json` only if package metadata requires synchronization
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-011/`
- active SWU-011 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

```bash
npm --prefix development/time-capsule-live-intake-v2/api test -- migrations
```

Validation must cover pragma values, exact migration registry/checksum,
empty→latest idempotence, all declared tables, foreign keys, one active invite,
version and slot uniqueness, scoped idempotency uniqueness, append-only denials,
checkpointed cold-copy reopen, integrity check, and checksum drift rejection.

## Decisions And Gates

- Auto-selected: built-in `node:sqlite` under the already pinned Node 22 runtime.
- Auto-selected: one initial logical migration plus checksum registry.
- Auto-selected: partial unique index models one active invitation per envelope.
- Gate verdict: pass for isolated migration implementation only; no data capability is promoted.

## Gaps And Blockers

- Active: none.
- Deferred: repositories/commands begin in SWU-LIV2-012/013; full restore is SWU-LIV2-020.

## Authority Precedence

1. Goal invented-data/write/protected-gate boundaries.
2. SWU-LIV2-011 done criteria and exact write scope.
3. Architecture Logical Entities and command/data descriptors.
4. D-02/D-03 selected constraints.
5. Existing API package conventions from SWU-LIV2-010.

## Fallback Exploration Rule

No fallback search is needed. If `node:sqlite` cannot meet the declared tests in
the pinned runtime, preserve the failure and stop rather than introducing a
native dependency or changing the datastore decision implicitly.

## Provenance

- Task contract SHA-256: `574b7092dd63c1af9877be00bdf838362261f57b065615aec91afb2de10683b4`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Architecture SHA-256: `390f5c01fd48ac095b729790b2f78ef01974c6bd9dfe6d68e5597b585ea85d1f`
- Command contract SHA-256: `eb2b28b4abea900f01bf25d1584dbe0f2671ab6e381a7981cc3ad7a98d4f1dff`
- Field lifecycle SHA-256: `1b929ece943a55de31d3d36ee8f50a4c76cb756e2ad85afda20bf5e66a6f4e87`
- SWU-010 receipt SHA-256: `fcada2b5d42fcf4ce3cfc07c91f0add2adccdf8e65bcab3a8be346675d242e1d`
- API package SHA-256: `c701a828ca3a2fa936acc6fabe32f1b1cdf645f9386f441dd5773327ae149e8e`
- API lock SHA-256: `38709002ace0e8088a396c496cb8cd60913e13e18ce33be56cb29cdd7fa0cd0e`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-011/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-011/context-index.json`
- Strict coverage: pass
