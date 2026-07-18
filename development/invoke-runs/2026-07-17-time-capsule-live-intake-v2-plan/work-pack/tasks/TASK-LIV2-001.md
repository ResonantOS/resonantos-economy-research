# TASK-LIV2-001 — Machine Contract Freeze

## Objective

Create the versioned, implementation-neutral contracts that the existing browser
form and future Node service must share. This task uses invented fixture values
and does not change the current page or create a network/storage path.

- Layer/slice: L0 / S-01
- Wave: W0
- Dependencies: completed V2 form evidence
- Target root: `development/time-capsule-live-intake-v2/contracts/`
- Blockers: none for SWU-001

## Execution Status

- `SWU-LIV2-001`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-001/TASK-SESSION-REPORT.md)
- `SWU-LIV2-002`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-002/TASK-SESSION-REPORT.md)
- `SWU-LIV2-003`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-003/TASK-SESSION-REPORT.md)
- `SWU-LIV2-004`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-004/TASK-SESSION-REPORT.md)
- `SWU-LIV2-005`: pass —
  [Task Session receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-005/TASK-SESSION-REPORT.md)

## Inputs And Outputs

Inputs: V2 fixture profile, D-01–D-07, D-15, candidate field/state design.

Outputs:

- machine-readable phrase, envelope, command, field, and capability contracts;
- deterministic positive/negative fixtures;
- a local validator with no external service dependency.

## Implementation Rules

1. Contract files carry an immutable version and domain tag.
2. Slots are fixed to horizons `{2,5,10}` and positions `{1,2}` with one
   visibility value: `public_at_opening`.
3. An empty slot is valid; an explicitly confirmed envelope must contain at
   least one nonempty phrase. Quiet creates no envelope.
4. Phrase normalization algorithm:
   - accept a Unicode string;
   - reject bidi formatting/isolate controls and zero-width format characters;
   - permit tab/newline/carriage-return only as collapsible whitespace and reject
     other control characters;
   - trim and collapse Unicode whitespace runs to one ASCII space;
   - normalize to NFC;
   - count Unicode grapheme clusters with a pinned cross-runtime fixture set;
   - accept 0–160 graphemes per slot.
5. A confirmed command carries expected rules digest, expected envelope version,
   close epoch, idempotency key, and digest of canonical command input.
6. Fields default to private/forbidden until explicitly classified.
7. Capability states fail closed: preview, synthetic, staged, live, closing,
   closed, recovery, and opening are distinct.

## Edge Cases And Failure Modes

- combining marks, emoji ZWJ sequences, RTL text, mixed direction, whitespace-only;
- 160/161 grapheme boundary; unsupported segmentation drift;
- duplicate phrase values are allowed; duplicate slot identities are not;
- a second slot cannot exist without its first position in the same horizon;
- stale rules/version/epoch and idempotency-key reuse with changed input fail;
- unclassified fields or an undeclared capability transition fail validation.

## Smallest Working Units

### SWU-LIV2-001 — Phrase profile and normalization vectors

- Status: pass — 20/20 vectors and 2/2 deliberate drift checks; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-001/VALIDATION-RECEIPT.json).

- Primary behavior: one input string normalizes or fails identically in browser
  and Node-compatible fixtures.
- Independent acceptance: the contract and vectors validate without any envelope,
  API, database, or UI change.
- Candidate children: normalization prose, schema, fixtures, validator.
- Retained boundary: none is useful alone; together they are one executable
  conformance surface for one string transformation.
- Dependencies: historical V2 fixture profile.
- Write scope:
  - `development/time-capsule-live-intake-v2/contracts/phrase-profile-v1.json`
  - `development/time-capsule-live-intake-v2/fixtures/phrase-profile-v1.json`
  - `development/time-capsule-live-intake-v2/tools/validate-phrase-profile.mjs`
- Done: version/domain, ordered algorithm, limits, and every positive/negative
  fixture are explicit; validator exits nonzero on drift.
- Acceptance evidence: validator receipt plus fixture count/hash.
- Validation: `node development/time-capsule-live-intake-v2/tools/validate-phrase-profile.mjs`
- Owner: local-fallback.
- Source anchors: V2 fixture `phraseProfile` and `phrases`; `DECISIONS.md` D-15.
- Handoff: read only those selectors and this section; return the standard SWU receipt.

### SWU-LIV2-002 — Envelope and slot schema

- Status: pass — 26/26 fixtures and 2/2 deliberate drift checks; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-002/VALIDATION-RECEIPT.json).

- Primary behavior: validate one six-place envelope and its quota/visibility invariants.
- Independent acceptance: schema fixtures pass without version transition or persistence code.
- Candidate children: slot schema and envelope schema.
- Retained boundary: the quota is an envelope invariant; separating slot shape
  would allow an invalid six-place composition to pass independently.
- Dependencies: SWU-LIV2-001.
- Write scope: `contracts/envelope-v1.schema.json`, `fixtures/envelope-v1.json`,
  `tools/validate-envelope.mjs` under the implementation root.
- Done: fixed horizons/positions, slot ordering, empty-slot rules, first-before-second,
  at-least-one confirmation, and `public_at_opening` only are enforced.
- Acceptance evidence: valid/invalid fixture report.
- Validation: `node development/time-capsule-live-intake-v2/tools/validate-envelope.mjs`
- Owner: local-fallback.
- Source anchors: V2 README Participant Contract; D-02 and D-15.
- Handoff: use invented phrases only; do not touch current form source.

### SWU-LIV2-003 — Version, idempotency, and close-epoch state contract

- Status: pass — 22/22 transition vectors and 2/2 drift checks; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-003/VALIDATION-RECEIPT.json).

- Primary behavior: classify a proposed envelope command as commit, deterministic
  replay, typed conflict, or closed rejection.
- Independent acceptance: a pure state-transition fixture can pass before SQL/API code.
- Candidate children: version rule, idempotency rule, epoch rule.
- Retained boundary: these three values jointly decide one atomic command outcome;
  testing them separately would miss precedence conflicts.
- Dependencies: SWU-LIV2-002.
- Write scope: `contracts/command-state-v1.json`, `fixtures/command-state-v1.json`,
  `tools/validate-command-state.mjs`.
- Algorithm precedence: authenticate scope → verify rules digest → compare close
  state/epoch → resolve idempotency key/digest → compare expected version → commit
  next immutable version or return typed failure; no partial state.
- Done: same key/same digest replays original result; same key/different digest,
  stale version/epoch, and commit at/after close fail without mutation.
- Acceptance evidence: transition matrix receipt.
- Validation: `node development/time-capsule-live-intake-v2/tools/validate-command-state.mjs`
- Owner: local-fallback.
- Source anchors: D-04, D-07; architecture Command Contract.
- Handoff: preserve precedence and typed errors; do not choose transport details.

### SWU-LIV2-004 — Field lifecycle and public allowlist

- Status: pass — 38 fields at 100% coverage and 13/13 projection fixtures; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-004/VALIDATION-RECEIPT.json).

- Primary behavior: prove every logical field and derived copy has one lifecycle
  classification and an explicit public-export decision.
- Independent acceptance: coverage can pass without capability-transition fixtures.
- Candidate children: field matrix and public allowlist.
- Retained boundary: public eligibility is a field lifecycle property; separating
  them risks a public projection not governed by the classification.
- Dependencies: SWU-LIV2-002.
- Write scope: `contracts/field-lifecycle-v1.json`, `tools/validate-field-lifecycle.mjs`.
- Done: plaintext, nonce, ciphertext, invite, session, envelope, version, moderation,
  audit, backup, horizon bundle, manifest, and receipt fields are covered; unspecified
  or forbidden public joins fail.
- Acceptance evidence: 100% field coverage and forbidden-export fixtures.
- Validation: `node development/time-capsule-live-intake-v2/tools/validate-field-lifecycle.mjs`
- Owner: local-fallback.
- Source anchors: architecture Data Classification Descriptor; D-01–D-06.
- Handoff: D-15 supersedes private-return fields; do not add participant keys.

### SWU-LIV2-005 — Capability gates and negative fixtures

- Status: pass — 41/41 fixtures, all 57 undeclared state pairs denied, and
  2/2 deliberate drift checks; see the
  [validation receipt](../../../../task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-005/VALIDATION-RECEIPT.json).

- Primary behavior: reject any state promotion whose required evidence handles are absent.
- Independent acceptance: pure gate fixtures pass without runtime implementation.
- Candidate children: state graph, gate list, negative fixtures.
- Retained boundary: the negative fixtures are the executable meaning of the gate
  graph; either artifact alone cannot prove fail-closed behavior.
- Dependencies: SWU-LIV2-003 and SWU-LIV2-004.
- Write scope: `contracts/capability-gates-v1.json`, `fixtures/capability-gates-v1.json`,
  `tools/validate-capability-gates.mjs`.
- Done: preview cannot become synthetic/live; synthetic cannot accept real data;
  live cannot close without moderation; close cannot publish without recovery and
  Bitcoin gates; ritual number has explicit non-effects.
- Acceptance evidence: every prohibited transition returns its expected blocker ID.
- Validation: `node development/time-capsule-live-intake-v2/tools/validate-capability-gates.mjs`
- Owner: local-fallback.
- Source anchors: architecture View 1/5; protocol closure gates; D-09 assumptions.
- Handoff: preserve gate IDs for later receipts; do not resolve evidence gaps in fixtures.

## Synchronization

Each SWU appends its receipt to the Task Session run and updates this task/work-pack
status only after validation. Contract version changes after SWU-005 require a
new version and rerun of all dependent fixtures.
