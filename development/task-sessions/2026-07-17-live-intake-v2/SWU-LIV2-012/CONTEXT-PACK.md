# Context Pack — SWU-LIV2-012

Session evidence only. This strict pack governs the invented-data private
invitation exchange, revocation, recovery, and scoped-session authorization
boundary. It does not issue real invitations or expose a public HTTP route.

## Identity

- Task/SWU: `SWU-LIV2-012 — Private invite session lifecycle`
- Parent: `TASK-LIV2-003 — Invented-Data Intake Foundation`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-012`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependency: `SWU-LIV2-011` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T22:01:23Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-012-01 | Accept an invite secret only through a body-shaped private handler, never URL query/path. | task Data Model/Algorithm | covered | Pure handler consumes `{origin, body}`; fragment helper returns a sanitized URL before exchange. |
| O-012-02 | Store only domain-separated invitation and session digests. | D-02; field lifecycle | covered | SHA-256 digests stored; raw bearer/CSRF values exist only in the caller exchange result. |
| O-012-03 | Verify high-entropy invitation format and digest without reflecting or enumerating failures. | SWU Done | covered | Fixed-size timing-safe digest comparison with dummy path; unknown/revoked share one response. |
| O-012-04 | Atomically rotate/issue one envelope-scoped session. | SWU Algorithm; schema | covered | Exchange transaction revokes prior active sessions, inserts one combined digest, and appends non-content audit. |
| O-012-05 | Return a Secure, HttpOnly, SameSite=Strict, API-scoped cookie plus separate CSRF token. | task Data Model | covered | Cookie carries session capability; combined digest binds cookie capability plus CSRF token. |
| O-012-06 | Require cookie, CSRF token, exact origin, active cohort, and unexpired session. | SWU Done | covered | Authorization is fail-closed and returns one non-enumerating denial. |
| O-012-07 | Revoke an invite and all its sessions atomically. | SWU primary | covered | Steward command updates active invite/session states and appends a pseudonymous audit event. |
| O-012-08 | Recover by revoking old digest, inserting new digest on the same envelope, and invalidating sessions. | D-02; SWU Algorithm | covered | One transaction; conflict rolls back to the prior active binding. |
| O-012-09 | Keep secrets/content out of database audit and handler failure outputs. | field lifecycle; task security | covered | Tests scan persisted rows and negative responses for invented secret needles. |
| O-012-10 | Stay within admission/session repository/handler/tests/evidence/status scope. | SWU write scope; goal | covered | No migration, envelope command, phrase, logger, deployment, or real invite issuance. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `.../work-pack/tasks/TASK-LIV2-003.md`
   - Selectors: Data And Interface Model; State Rules; Security And Failure
     Rules; SWU-LIV2-012; Synchronization.
   - Covers: O-012-01–O-012-10.
2. `DECISIONS.md`
   - Selector: D-02 private invite link and recovery consequences.
   - Covers: O-012-02, O-012-04–O-012-08.
3. Passed field-lifecycle contract.
   - Selectors: invite secret/digest; session capability/digest; audit pseudoref.
   - Covers: O-012-02, O-012-09.
4. Passed initial migration, datastore adapter, and SWU-LIV2-011 receipt.
   - Selectors: invite/session/audit schema; transaction/pragma boundary; residue.
   - Covers: dependency and O-012-04, O-012-07–O-012-10.
5. Capability contract.
   - Selectors: invented-data action; synthetic state; real-intake denial.
   - Covers: O-012-10.

No outside source was used. Cryptographic randomness, SHA-256, and timing-safe
comparison come from the already selected Node runtime.

## Architecture Guidance

Invitation and session secrets are bearer capabilities, not identities. The
handler cannot claim unique-human or Sybil resistance. The stored session digest
is computed over both independently random values—cookie capability and CSRF
token—so authorization requires both without adding a stored CSRF secret. The
repository owns transactions; the handler owns parsing, same-origin checks,
cookie flags, and non-enumerating outputs.

## Constraints And Non-Goals

- Invented base64url secrets/tokens only; never persist test outputs in receipts.
- Domain-separated SHA-256 digests; fixed-size timing-safe verification.
- Unknown, malformed, revoked, closed, and expired credentials fail without enumeration.
- Cookie: Secure, HttpOnly, SameSite=Strict, `Path=/api`, bounded Max-Age.
- Exact configured origin; CSRF token required for authorization.
- Recovery preserves envelope binding and revokes all prior sessions atomically.
- Audit carries stable IDs/reason/action only, never invite/session/CSRF values.
- No real invitation issuance/delivery policy, steward authentication route,
  email/wallet, HTTP server wiring, form adapter, phrase, or public output.
- No migration mutation; use the passed invite/session schema as-is.

## Write Scope

- `development/time-capsule-live-intake-v2/api/src/admission/`
- invite-session focused package script in `api/package.json`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-012/`
- active SWU-012 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

```bash
npm --prefix development/time-capsule-live-intake-v2/api test -- invite-session
```

Validation must cover fragment sanitization, exchange success, digest-only
storage, cookie flags, exact origin, CSRF/cookie binding, session rotation,
expiry/closed/revoked denial, unknown/revoked indistinguishability, revoke,
successful recovery, conflict rollback, audit redaction, and service/migration regressions.

## Decisions And Gates

- Auto-selected: session digest binds `cookie capability + CSRF token`.
- Auto-selected: pure handlers remain unwired until the later client/server adapter SWU.
- Auto-selected: recovery receives a caller-created new secret; it does not own issuance policy.
- Gate verdict: pass for invented lifecycle implementation only; no live credential exists.

## Gaps And Blockers

- Active: none.
- Deferred: real invite issuance/delivery and steward authentication require owner design before L2; HTTP adapter is later.

## Authority Precedence

1. Goal invented-data, privacy, and real-intake boundaries.
2. SWU-LIV2-012 algorithm, done criteria, and write scope.
3. D-02 invitation/recovery contract.
4. Field lifecycle and passed schema constraints.

## Fallback Exploration Rule

No fallback search is needed. Any need for a new schema field, identity provider,
or secret service blocks/reroutes this SWU rather than expanding it.

## Provenance

- Task contract SHA-256: `2e6f25d302c0b61389b9686b75805d25914974da1fd07213ef2f0a9794045165`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Field lifecycle SHA-256: `1b929ece943a55de31d3d36ee8f50a4c76cb756e2ad85afda20bf5e66a6f4e87`
- Migration SHA-256: `933aad74f89bbfe9a2ba9cd5c3e4d72d4a5f975baf0dcfe88246e1b0a7fc908b`
- Datastore adapter SHA-256: `d8b5e97684d0a8d1a5221c958c710a00f5971de521d63ad8f73a4ab47dcb22cf`
- SWU-011 receipt SHA-256: `705f63edc1b1a6e4a67e4dac367711fd0d29e8dec3685d6c37555dc8ddde777d`
- Capability contract SHA-256: `908cebf4df692a106a186f23c633a8d11bcd2a4c491d129effd657ee640c4769`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-012/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-012/context-index.json`
- Strict coverage: pass
