# Context Pack — SWU-LIV2-010

Session evidence only. This strict pack governs one isolated, health-only
TypeScript service and its explicit configuration boundary. It does not create
an intake, datastore, credential, deployment, or live capability.

## Identity

- Task/SWU: `SWU-LIV2-010 — Service/config isolation`
- Parent: `TASK-LIV2-003 — Invented-Data Intake Foundation`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-010`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependency: `SWU-LIV2-005` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T21:46:49Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-010-01 | Create an isolated Node.js/TypeScript package at the declared API root. | D-03; SWU primary | covered | Private package with pinned development dependencies and no workspace coupling. |
| O-010-02 | Start only a health service; no intake, database, session, moderation, or publication route. | SWU boundary; goal | covered | Built-in HTTP server exposes exact `GET /health` and generic 404 only. |
| O-010-03 | Require explicit validated configuration with no implicit defaults. | SWU Done | covered | Runtime, host, port, and log level are all required. |
| O-010-04 | Fail closed outside the synthetic L1 boundary. | capability contract; architecture View 1 | covered | Only `synthetic` runtime is accepted; live/staged/production values fail. |
| O-010-05 | Bind local tests to loopback without public network mutation. | goal; D-03 deployment boundary | covered | Only `127.0.0.1` or `::1`; port 0 permitted for isolated tests. |
| O-010-06 | Carry no default, placeholder, or production secret. | SWU Done; D-03 | covered | Health config contains no secret/key field; missing config fails rather than defaulting. |
| O-010-07 | Reveal no configuration or internals through health responses or errors. | SWU Done | covered | Exact response is `{\"status\":\"ok\"}`; generic not-found; safe config errors name fields, not values. |
| O-010-08 | Provide clean install, build, focused health/config tests, and dependency inventory. | SWU Evidence/Validation | covered | Lockfile plus `npm ci` and `npm test -- service-config`. |
| O-010-09 | Keep all automated inputs invented/local and create no external effects. | L1 rule; goal protected gates | covered | Tests use synthetic config and loopback ephemeral ports only. |
| O-010-10 | Stay within package/config/server/test/evidence/status scope. | SWU write scope; goal | covered | No `.env`, container, VPS, site, database, credential, or future SWU file. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `.../work-pack/tasks/TASK-LIV2-003.md`
   - Selectors: Objective; External effects; SWU-LIV2-010; Synchronization.
   - Covers: O-010-01–O-010-10.
2. `DECISIONS.md`
   - Selector: D-03 Initial Runtime And Datastore.
   - Covers: O-010-01, O-010-05, O-010-06.
3. `.../stages/06-architecture-bundle.md`
   - Selectors: View 1 capability table; View 6 application/runtime boundary.
   - Covers: O-010-02–O-010-05, O-010-07.
4. Passed capability contract and SWU-LIV2-005 receipt.
   - Selectors: default deny; `synthetic`; invented-data action; real/live gates.
   - Covers: O-010-04, O-010-09.
5. `IMPLEMENTATION-LAYERING.md` and active goal sidecar.
   - Selectors: L1 invented-data kernel; protected gates; write and safety boundaries.
   - Covers: O-010-02, O-010-05, O-010-08–O-010-10.

No outside source was used to choose the design. The package registry is used
only by the declared clean-install validation for pinned development tools.

## Architecture Guidance

Configuration is a constructor boundary, not ambient fallback behavior. A
server is created only after the complete synthetic configuration validates.
The server consumes config for binding but serializes none of it. Production
and live states are deliberately invalid in this SWU; later promotion requires
new adapters and evidence, not a different environment string.

## Constraints And Non-Goals

- Node.js/TypeScript package; built-in HTTP server is sufficient.
- Development-only dependencies may provide type checking and TS test execution.
- Required config: synthetic runtime, loopback host, explicit port, log level.
- No default values and no secret-bearing config fields.
- Health output has one public key only: `status`.
- No database, SQLite file, migrations, intake routes, request bodies, cookies,
  sessions, invite behavior, logging middleware, encryption, or moderation.
- No `.env`, production host, VPS/container/reverse-proxy, DNS, or network mutation.
- No real phrase, invitation, credential, key, or signing material.

## Write Scope

- `development/time-capsule-live-intake-v2/api/package.json`
- `development/time-capsule-live-intake-v2/api/package-lock.json`
- `development/time-capsule-live-intake-v2/api/tsconfig.json`
- `development/time-capsule-live-intake-v2/api/src/config/`
- `development/time-capsule-live-intake-v2/api/src/server/`
- health/config tests within the server source boundary
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-010/`
- active SWU-010 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

```bash
npm --prefix development/time-capsule-live-intake-v2/api ci
npm --prefix development/time-capsule-live-intake-v2/api test -- service-config
```

Tests must prove required-field failures, invalid runtime/host/port/log-level
failures, immutable parsed config, no secret/default fields, loopback startup,
exact health response, generic unknown-route response, and absence of config
values from output.

## Decisions And Gates

- Auto-selected: built-in `node:http` avoids an unnecessary runtime framework.
- Auto-selected: runtime value `synthetic` is the only accepted capability state.
- Auto-selected: package test script routes the task validation selector
  `service-config` without expanding the SWU.
- Gate verdict: pass for isolated implementation. Public/live capability remains denied.

## Gaps And Blockers

- Active: none.
- Deferred: SQLite schema starts only in SWU-LIV2-011; every real/human gate remains absent.

## Authority Precedence

1. Goal invented-data and protected-gate boundaries.
2. SWU-LIV2-010 write scope and done criteria.
3. Capability contract default deny and synthetic-only action.
4. D-03 runtime selection and architecture runtime boundary.

## Fallback Exploration Rule

No fallback search is needed. If the pinned local toolchain cannot clean-install
or run under the available Node runtime, preserve the error and stop this SWU
rather than selecting a different stack implicitly.

## Provenance

- Task contract SHA-256: `9f93ce186259264f021f01c029c0ae03293288e2b187dd290bc34720cf248c99`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Architecture SHA-256: `390f5c01fd48ac095b729790b2f78ef01974c6bd9dfe6d68e5597b585ea85d1f`
- Capability contract SHA-256: `908cebf4df692a106a186f23c633a8d11bcd2a4c491d129effd657ee640c4769`
- SWU-005 receipt SHA-256: `bd754c10ddc291cc320336b155d6278f1edc82a729ca98c5be78cca686839f59`
- Implementation layering SHA-256: `8d23a774dc94ed3d492fd3967bb8c2c00444f764cfffd28cc76bd0db5db33e0f`
- Goal sidecar SHA-256: `a15fa7ef29f7e78ceddb0930cc3475cca457c6ed4f88867d14b55b386db4224d`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-010/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-010/context-index.json`
- Strict coverage: pass
