# TASK-LIV2-003 — Invented-Data Intake Foundation

## Objective

Implement the selected Node.js/TypeScript and SQLite intake design in an isolated
package using invented data only. Prove admission, versioning, encryption,
moderation, and fail-closed behavior before any client or deployment promotion.

- Layer/slice: L1 / S-03
- Wave: W1
- Dependencies: SWU-LIV2-001–005
- Target root: `development/time-capsule-live-intake-v2/api/`
- External effects: none; localhost/test database only

## Execution Status

- `SWU-LIV2-010`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-010/TASK-SESSION-REPORT.md)
- `SWU-LIV2-011`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-011/TASK-SESSION-REPORT.md)
- `SWU-LIV2-012`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-012/TASK-SESSION-REPORT.md)
- `SWU-LIV2-013`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-013/TASK-SESSION-REPORT.md)
- `SWU-LIV2-014`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-014/TASK-SESSION-REPORT.md)
- `SWU-LIV2-015`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-015/TASK-SESSION-REPORT.md)

## Data And Interface Model

Core tables: cohort/rules, invite digest/status, session, envelope, immutable
envelope version, message occurrence, idempotency result, moderation disposition,
audit event. Phrase and commitment nonce fields are application-encrypted before SQL.

Invite links place the bearer secret in a URL fragment so it does not reach HTTP
access logs or referrers. The browser exchanges it once through a body-redacted
same-origin endpoint, removes the fragment, and receives an HttpOnly, Secure,
SameSite=Strict scoped session cookie plus a CSRF token. Only the invite digest is stored.

## State Rules

- one active invite maps to one envelope;
- recovery revokes the old digest and binds a new invite to the same envelope;
- browser drafts are volatile; only explicit confirmation reaches the API;
- confirmation atomically creates an immutable envelope version and message
  occurrences for changed nonempty slots;
- a new/changed phrase receives a random opaque public record ID and a random
  32-byte commitment nonce stored inside its encrypted payload;
- identical retries return the original receipt; conflicts never partially write;
- all saved phrases enter a private steward queue, never a pre-opening public feed.

## Security And Failure Rules

Use a pinned, reviewed authenticated-encryption profile such as AES-256-GCM with
a fresh 96-bit nonce and AAD binding cohort, envelope, version, horizon, position,
and field purpose. The data key is outside the database/image and is not the
future horizon bundle key. Bodies, bearer secrets, plaintext, ciphertext,
nonces, tags, cookies, and receipt capabilities are forbidden from logs.

## Smallest Working Units

### SWU-LIV2-010 — Service/config isolation

- Status: pass — exact clean install/build, 17/17 focused assertions, and zero
  runtime dependencies; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-010/VALIDATION-RECEIPT.json).

- Primary behavior: start one health-only TypeScript service with explicit config validation.
- Independent acceptance: process/health/config can pass without a database schema.
- Candidate children: package scaffold and config loader.
- Retained boundary: a process cannot prove isolation if it starts with invalid or implicit config.
- Dependencies: SWU-LIV2-005.
- Write scope: API `package.json`, lockfile, tsconfig, `src/config`, `src/server`, health tests.
- Done: no default production secret; invalid/missing config fails; health route reveals no internals.
- Evidence: clean install/build/test receipt and dependency inventory.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api ci && npm --prefix development/time-capsule-live-intake-v2/api test -- service-config`
- Owner: local-fallback.
- Source anchors: D-03; deployment boundary; SWU-005 capability contract.
- Handoff: no production `.env`, host, credential, or network change.

### SWU-LIV2-011 — SQLite migrations and invariants

- Status: pass — 6/6 migration scenarios plus 17/17 service regressions;
  see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-011/VALIDATION-RECEIPT.json).

- Primary behavior: create/migrate the logical schema with uniqueness, foreign-key,
  and immutable-version constraints.
- Independent acceptance: migration round-trip passes before HTTP command handlers.
- Candidate children: tables, constraints, migration runner.
- Retained boundary: schema without a repeatable migration cannot be accepted or restored.
- Dependencies: SWU-LIV2-010.
- Write scope: API `migrations/`, datastore adapter, migration tests.
- Done: WAL/foreign keys/busy timeout are explicit; one invite/envelope binding,
  version uniqueness, idempotency uniqueness, and append-only audit constraints pass.
- Evidence: empty→latest→restore migration receipt and constraint negatives.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- migrations`
- Owner: local-fallback.
- Source anchors: D-03; architecture Logical Entities.
- Handoff: schema stays portable; isolate SQLite-specific pragmas in the adapter.

### SWU-LIV2-012 — Private invite session lifecycle

- Status: pass — 8/8 lifecycle scenarios plus 23/23 package regressions;
  see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-012/VALIDATION-RECEIPT.json).

- Primary behavior: exchange, revoke, and steward-recover one invite without storing the bearer secret.
- Independent acceptance: session tests pass without envelope confirmation.
- Candidate children: exchange, revocation, recovery.
- Retained boundary: they are one credential lifecycle; testing issue without revoke/recover would create an unsafe live seam.
- Dependencies: SWU-LIV2-011.
- Write scope: API admission/session handlers, repositories, tests.
- Algorithm: parse body secret → constant-time digest lookup → verify active/cohort
  state → rotate/issue scoped session → record non-content audit; recovery transaction
  revokes old digest, inserts new digest, preserves envelope binding.
- Done: fragment secret never appears in access/referrer logs; invalid/revoked links
  are non-enumerating; session/cookie/CSRF/origin checks pass.
- Evidence: lifecycle and log-redaction fixtures.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- invite-session`
- Owner: local-fallback.
- Source anchors: D-02; field lifecycle contract.
- Handoff: invented secrets only; no invite issuance policy is implemented.

### SWU-LIV2-013 — Immutable envelope confirmation lifecycle

- Status: pass — all 46 frozen phrase/envelope vectors, 15 command tests, and
  31 prior regressions; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-013/VALIDATION-RECEIPT.json).

- Primary behavior: atomically confirm, edit, or withdraw one envelope version.
- Independent acceptance: command/state suite passes without moderation handlers.
- Candidate children: confirm, edit, withdraw.
- Retained boundary: all are the same next-version transition over one six-slot snapshot.
- Dependencies: SWU-LIV2-011–012.
- Write scope: API envelope commands, repository transactions, receipts, tests.
- Algorithm: authorize session → normalize/validate full envelope → apply SWU-003
  precedence → reuse unchanged occurrence IDs → create new occurrence IDs/nonces for
  changed phrases → omit withdrawn slots → insert next immutable version and receipt atomically.
- Done: concurrent/stale/replayed/closed negatives pass; no partial occurrence/version exists.
- Evidence: property and concurrent transaction report.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- envelope-commands`
- Owner: local-fallback.
- Source anchors: D-04, D-07; SWU-002/003 contracts.
- Handoff: server persists only explicit confirmations; never auto-save drafts.

### SWU-LIV2-014 — At-rest AEAD and log redaction

- Status: pass — 7/7 focused security tests, 46/46 prior package tests, and all
  46 frozen phrase/envelope vectors; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-014/VALIDATION-RECEIPT.json).

- Primary behavior: protect and recover one phrase payload while every forbidden
  value remains absent from logs/errors/backups in the test boundary.
- Independent acceptance: crypto adapter and redaction tests pass without moderation.
- Candidate children: encryption and logging.
- Retained boundary: encrypted storage is not a safety property if the same value leaks through logs.
- Dependencies: SWU-LIV2-011.
- Write scope: API crypto adapter, logger middleware, secret-loading seam, tests.
- Done: fresh nonce, bound AAD, tamper/wrong-key failure, separate key path, body
  redaction, and sanitized errors pass; key never enters DB/image/receipt.
- Evidence: known-answer round trip, misuse negatives, structured-log scan.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- crypto-redaction`
- Owner: local-fallback.
- Source anchors: D-01, D-03; field lifecycle contract.
- Handoff: do not claim E2E encryption; executor records algorithm/dependency version.

### SWU-LIV2-015 — Private moderation queue

- Status: pass — 6/6 focused moderation scenarios, 53/53 prior package tests,
  and all 46 frozen phrase/envelope vectors; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-015/VALIDATION-RECEIPT.json).

- Primary behavior: move a saved phrase occurrence from pending to accepted or rejected.
- Independent acceptance: disposition transitions pass without public display code.
- Candidate children: accept and reject.
- Retained boundary: both are terminal outcomes of one steward-only queue contract.
- Dependencies: SWU-LIV2-013–014.
- Write scope: API moderation routes/repository/tests and steward test UI if needed.
- Algorithm: authenticate steward → load exact occurrence/version → require pending
  and pre-close state → append disposition with reason/steward/time → expose only
  private participant status; unresolved/rejected is ineligible at close.
- Done: no route projects saved text publicly; audit records IDs/reasons, not text;
  duplicate/conflicting decisions fail deterministically.
- Evidence: transition, authorization, redaction, and close-eligibility fixtures.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/api test -- moderation`
- Owner: local-fallback.
- Source anchors: D-05 saved-message exclusion; D-15 irreversible future-public rule.
- Handoff: do not implement the D-05 public-now feed; no current message belongs there.

## Synchronization

Each SWU updates only its declared modules. Shared migration/types changes require
sequential integration. W1 remains synthetic even if every test passes.
