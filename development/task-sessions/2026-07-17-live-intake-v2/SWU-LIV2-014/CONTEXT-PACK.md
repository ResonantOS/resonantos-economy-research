# Context Pack — SWU-LIV2-014

Session evidence only. This strict pack governs invented-data authenticated
encryption and log redaction for entrusted phrase payloads. It does not provide
end-to-end encryption, production key custody, backup operations, deployment, or
real intake.

## Identity

- Task/SWU: `SWU-LIV2-014 — At-rest AEAD and log redaction`
- Parent: `TASK-LIV2-003 — Invented-Data Intake Foundation`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-014`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependencies: `SWU-LIV2-011` pass; envelope payload seam from `SWU-LIV2-013` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T22:19:41Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-014-01 | Implement entrusted at-rest protection without implying end-to-end secrecy. | D-01; SWU handoff | covered | Use server-side AEAD and describe authorized steward access honestly. |
| O-014-02 | Pin one explicit authenticated-encryption profile. | SWU Security And Failure Rules | covered | Node built-in `aes-256-gcm`, 256-bit key, 96-bit nonce, 128-bit tag, versioned ciphertext layout. |
| O-014-03 | Bind cohort, envelope, version, horizon, position, and purpose as AAD. | SWU Security And Failure Rules; `PhraseAad` | covered | Encode a fixed-key-order JSON record as UTF-8 and reject any changed binding. |
| O-014-04 | Generate a fresh nonce for each phrase protection and preserve an independent 32-byte commitment nonce. | SWU State Rules; payload port | covered | Inject a random-byte source for tests; production default is `crypto.randomBytes`. |
| O-014-05 | Load the data key through a separate no-default secret seam. | D-03; SWU Done | covered | Require one canonical base64url environment value decoding to exactly 32 bytes; never serialize it. |
| O-014-06 | Fail uniformly and safely for wrong key, AAD, nonce, tag, or ciphertext. | SWU Done/Evidence | covered | Return one stable protection error code with no secret or crypto material in message/cause. |
| O-014-07 | Keep bodies and all forbidden fields out of structured logs and errors. | field lifecycle; SWU Security And Failure Rules | covered | Build logs from a fixed metadata allowlist; ignore arbitrary input, bodies, headers, cookies, receipts, crypto fields, messages, and stacks. |
| O-014-08 | Prove persisted SQLite bytes, receipts, and audit facts contain neither plaintext nor key. | D-01/D-03; schema; SWU Done | covered | Integrate the real payload adapter with the existing envelope service and scan synthetic persisted artifacts. |
| O-014-09 | Exercise round trip, fresh nonce, tamper, wrong-key/AAD, loader, redaction, and regression paths. | SWU Evidence/Validation | covered | Focused misuse and integration suite plus prior package suites. |
| O-014-10 | Remain inside the crypto/logger/key/test/evidence scope and use invented data only. | SWU write scope; goal boundary | covered | No HTTP wiring, migration, moderator, deployment, real key, backup operation, or durability claim. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-003.md`
   - Selectors: Security And Failure Rules; SWU-LIV2-014; Synchronization.
   - Covers: O-014-01–O-014-10.
2. `DECISIONS.md`
   - Selectors: D-01 entrusted capsule; D-03 application encryption and separate key/backup boundary.
   - Covers: O-014-01, O-014-05, O-014-08, O-014-10.
3. `development/time-capsule-live-intake-v2/contracts/field-lifecycle-v1.json`
   - Selectors: phrase plaintext/nonce/ciphertext; invite/session secret and digest; forbidden audit copy; receipt fields; no-plaintext invariant.
   - Covers: O-014-07, O-014-08, O-014-10.
4. `development/time-capsule-live-intake-v2/api/src/envelope/service.ts`
   - Selectors: `PhraseAad`, `ProtectedPhrase`, `PhrasePayloadPort`, protect/reveal call sites.
   - Covers: O-014-03, O-014-04, O-014-08, O-014-09.
5. `development/time-capsule-live-intake-v2/api/migrations/0001_initial_intake.sql`
   - Selectors: `message_occurrences`, `idempotency_results`, `audit_events`.
   - Covers: O-014-04, O-014-08.
6. `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-013/VALIDATION-RECEIPT.json`
   - Selectors: payload-port residue; envelope command and regression results.
   - Covers: dependency proof and O-014-08–O-014-10.

No outside source was used.

## Architecture Guidance

`AeadPhrasePayload` implements the existing synchronous `PhrasePayloadPort`. It
stores a one-byte format version, GCM ciphertext, and 16-byte authentication tag in
`phrase_ciphertext`; the 12-byte nonce remains in `phrase_aead_nonce`. AAD is the
UTF-8 encoding of a fixed-order JSON record containing every `PhraseAad` property.
The key is a `KeyObject` created from a separately loaded 32-byte value and is never
returned through configuration, persistence, receipts, audits, or logs.

The logger is allowlist-only, not a recursive best-effort redactor: callers may
supply arbitrary objects, but output is constructed only from fixed operational
metadata fields and a stable error code. Unknown route names collapse to `unknown`.

## Constraints And Non-Goals

- Algorithm profile: Node built-in `crypto`, `aes-256-gcm`, 256-bit key, 96-bit
  nonce, 128-bit tag, explicit AAD; no added runtime dependency.
- Ciphertext layout is versioned and validated before decryption.
- Fresh AEAD and commitment nonces come from a cryptographic random source by default.
- Missing, malformed, non-canonical, or wrong-length key material fails closed.
- Wrong key, changed AAD, and all payload tampering share one sanitized failure.
- Logs contain only allowlisted operational metadata; arbitrary request or error
  objects are never serialized.
- Tests use visibly invented phrases and keys only.
- This SWU does not implement key custody, rotation, backup scheduling, restore,
  HTTP middleware wiring, moderation, public projection, close, or opening.
- A SQLite artifact scan proves only this synthetic write path, not every future
  backup path or operating-system artifact.

## Write Scope

- `development/time-capsule-live-intake-v2/api/src/crypto/`
- `development/time-capsule-live-intake-v2/api/src/logging/`
- crypto-redaction focused script in `api/package.json`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-014/`
- active SWU-014 task/work-pack and goal frontier rows after validation

## Done And Validation Surface

```bash
npm --prefix development/time-capsule-live-intake-v2/api test -- crypto-redaction
```

Validation must cover deterministic round trip, independent fresh nonces, wrong
key, wrong AAD, version/nonce/ciphertext/tag tampering, key-loader rejection without
reflection, allowlist-only log scanning, real adapter integration with an invented
envelope, SQLite/receipt/audit absence of plaintext and key material, and prior
service, migration, admission, and envelope regressions.

## Decisions And Gates

- Auto-selected: built-in Node AES-256-GCM with a small versioned storage format.
- Auto-selected: canonical fixed-order JSON AAD because all bound values are already typed scalars.
- Auto-selected: allowlist-only structured logging rather than name-based recursive redaction.
- Gate verdict: pass for invented-data at-rest protection and redaction only.

## Gaps And Blockers

- Active: none.
- Deferred: production key custody/rotation, independent encrypted-backup and key
  storage, restore drill, HTTP wiring, and staging approval.

## Authority Precedence

1. Goal invented-data/privacy/real-intake boundaries.
2. D-01 entrusted boundary and D-03 separate-key requirement.
3. Frozen field-lifecycle prohibitions.
4. SWU-LIV2-014 security profile, write scope, and validation contract.
5. Existing payload-port and SQLite contracts.

## Fallback Exploration Rule

No fallback search is needed. If the existing payload port cannot carry the pinned
format, if the key would need to enter persisted configuration, or if plaintext/key
material appears in the synthetic SQLite/receipt/audit/log scan, stop and report a
design blocker rather than weakening the safety boundary or changing the migration.

## Provenance

- Task contract SHA-256: `a2232f9db90cd5e60484d31b24a09639aec8b8e22386fab961f8affa8f2de0ff`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Field lifecycle SHA-256: `1b929ece943a55de31d3d36ee8f50a4c76cb756e2ad85afda20bf5e66a6f4e87`
- Envelope service SHA-256: `d197a2be23401b8dbc8e462b02b0dd4465aeef3ae701b5dc9840e1ff9ff8ba95`
- Migration SHA-256: `933aad74f89bbfe9a2ba9cd5c3e4d72d4a5f975baf0dcfe88246e1b0a7fc908b`
- SWU-013 receipt SHA-256: `6598ae5273d7ffb4a2e28e7bfd060eb0ba0476bfc72cc5135b585c9bf35126da`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-014/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-014/context-index.json`
- Strict coverage: pass
