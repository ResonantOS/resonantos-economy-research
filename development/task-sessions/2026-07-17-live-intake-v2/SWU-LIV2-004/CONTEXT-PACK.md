# Context Pack — SWU-LIV2-004

Session evidence only. This strict pack governs one field-lifecycle/public-export
contract Task Session. It creates no storage, export, feed, or participant key.

## Identity

- Task/SWU: `SWU-LIV2-004 — Field lifecycle and public allowlist`
- Parent: `TASK-LIV2-001 — Machine Contract Freeze`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-004`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependency: `SWU-LIV2-002` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` with dirty worktree preserved
- Captured: `2026-07-17T21:28:42Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-004-01 | Freeze version/domain and a complete v1 field catalog. | SWU-004 Done; architecture descriptor | covered | Exact required IDs must equal exact descriptor entries. |
| O-004-02 | Give every field and derived copy exactly one lifecycle descriptor. | Data Classification Descriptor | covered | All required descriptor keys are mandatory; duplicate/unknown IDs fail. |
| O-004-03 | Cover plaintext, nonce, ciphertext, invite, session, envelope, version, moderation, audit, backup, horizon bundle, manifest, and receipt fields. | SWU-004 Done | covered | Required category coverage is executable. |
| O-004-04 | Default unknown and unspecified fields to forbidden. | architecture descriptor | covered | Public projection rejects every field absent from the catalog. |
| O-004-05 | Make public export allowlist-only and reject private/forbidden joins. | SWU-004 primary behavior | covered | Inline positive/negative projection fixtures execute the rule. |
| O-004-06 | Keep phrase plaintext out of logs, analytics, backups, exports, receipts, and pre-opening public views. | D-01, D-15 | covered | Plaintext is process-memory-only before an allowlisted opening-derived copy. |
| O-004-07 | Keep invite/session/envelope relationships and audit pseudorefs private. | D-02, D-04; architecture entities | covered | Private classes have `public_export: forbidden`. |
| O-004-08 | Preserve no-live-feed; current phrases use steward-only moderation and public-at-opening release. | cross-task D-05/D-15; goal | covered | Older D-05 public-now feed does not apply to saved phrases. |
| O-004-09 | Remove private-return/participant-key fields from the initial catalog. | D-15 | covered | Validator rejects participant key field IDs as forbidden additions. |
| O-004-10 | Stay within two declared implementation files plus evidence/status synchronization. | SWU-004 Write scope; goal | covered | No runtime/schema/UI/database mutation. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `.../work-pack/tasks/TASK-LIV2-001.md`
   - Selectors: implementation rule 6; SWU-LIV2-004; Synchronization.
   - Covers: O-004-01–O-004-10.
2. `.../stages/06-architecture-bundle.md`
   - Selectors: logical entities; Data Classification Descriptor.
   - Covers: O-004-01–O-004-07.
3. `DECISIONS.md`
   - Selectors: D-01–D-06; D-15.
   - Covers: O-004-06–O-004-09.
4. `.../work-pack/shared/cross-task-decisions.md`
   - Selectors: D-01/D-15, D-02, D-04, D-05, D-06/D-07 effects.
   - Covers: O-004-06–O-004-09.
5. `development/time-capsule-live-intake-v2/contracts/envelope-v1.schema.json`
   - Selectors: envelope/profile/slot fields and non-effects.
   - Covers: O-004-03, O-004-07.
6. `.../SWU-LIV2-002/TASK-SESSION-REPORT.md`
   - Selectors: result and schema receipt.
   - Covers: dependency and O-004-10.
7. Active work-pack and goal handoff
   - Selectors: frontier, receipt contract, no-feed/privacy/token boundaries.
   - Covers: O-004-08–O-004-10.

No outside source was used.

## Architecture Guidance

The v1 catalog is a fail-closed registry, not a database schema. Each entry owns
classification, purpose, lifecycle states, stores/processors, logging, analytics,
access, retention, deletion, backup, derivation, and public-export status. A public
projection supplies field IDs and is valid only when every ID exists and every
entry is allowlisted. A future field requires a new contract version or explicit
catalog update plus full rerun; it never inherits public status.

## Constraints And Non-Goals

- Initial messages are entrusted during intake, hidden until their horizon, then public.
- Authorized processing of plaintext is not E2E confidentiality.
- Plaintext exists only in bounded process memory; at-rest copies are ciphertext.
- Audit/log/analytics records never copy phrase content, invite secrets, or session capabilities.
- Public manifest uses stable public IDs, horizon, visibility, and commitments—not
  invite/session/envelope IDs, nonce/plaintext, moderation owner, or audit pseudoref.
- Public opening phrase is a separately classified derived copy allowed only in opening.
- No pre-opening public feed, private return, participant key, NFT, or token effect.
- This SWU does not implement retention jobs, backups, encryption, moderation, or exports.

## Write Scope

- `development/time-capsule-live-intake-v2/contracts/field-lifecycle-v1.json`
- `development/time-capsule-live-intake-v2/tools/validate-field-lifecycle.mjs`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-004/`
- active SWU-004 task/work-pack and goal frontier rows after validation

No other path is writable.

## Done And Validation Surface

Pass requires exact catalog/descriptor coverage; required category coverage;
zero duplicate, unknown, or participant-key fields; public allowlist consistent
with classes/states; and inline fixtures proving valid manifest/opening projections
plus forbidden plaintext/invite/session/envelope/audit/receipt/unknown/mixed joins.

Exact command:

```bash
node development/time-capsule-live-intake-v2/tools/validate-field-lifecycle.mjs
```

Output records field/class/export counts, fixture results, drift guards, and hashes.

## Decisions, Contradictions, And Gates

- Auto-selected, non-blocking: inline projection fixtures in the contract because
  the SWU write scope names only the contract and validator.
- Resolved authority conflict: D-05's immediate feed applied to a public-now class,
  but D-15 and the current work-pack define only saved public-at-opening phrases.
  Therefore no initial phrase field is allowlisted for pre-opening public display;
  moderation is steward-only and `public_opening_phrase` becomes exportable only at opening.
- Gate verdict: pass; no blocker choice remains.

## Gaps And Blockers

- Active: none.
- Deferred: concrete SQL columns, encryption, backup, moderation, bundle, manifest,
  and opening implementations must later consume this registry.

## Authority Precedence

1. D-15 and the current cross-task decision table/no-feed goal boundary.
2. D-01–D-06 for entrusted intake, admission, editing, moderation, retention.
3. SWU-LIV2-004 done/write scope.
4. Architecture Data Classification Descriptor.
5. Passed envelope schema and work-pack controls.

## Fallback Exploration Rule

No fallback search is needed. Explore only for a named catalog-validation gap and
report the source and effect.

## Provenance

- Architecture SHA-256: `390f5c01fd48ac095b729790b2f78ef01974c6bd9dfe6d68e5597b585ea85d1f`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Cross-task decisions SHA-256: `0df4bb9622a48ff25f598464baeb6e4e11960f978ab6e249b0151e75ce9ae842`
- Task contract SHA-256: `586bec34610354451d7c60b43ff1e38fb1cde67eb224e72604ed1ef4da7b5df5`
- Envelope schema SHA-256: `d7dc33bc4bc77e09baed28f62497930771534da5572c7b9c612909d9aa071ad5`
- SWU-002 report SHA-256: `acece16cd743fc03998dab16e14bcf86ab047d48b7ad246e141a63e57d25c8e3`
- Work-pack SHA-256: `7589cf3082b1a16897d0162cd22543763dc9a762d54ad4fb21642facdfa03b97`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-004/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-004/context-index.json`
- Strict coverage: pass

