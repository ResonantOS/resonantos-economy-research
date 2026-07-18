# Privacy-Safety Review — Time Capsule Live Intake

Verdict: **BLOCK**. Killing sealed mode would remove some risks, but would not
make public intake safe. This is an attack receipt, not an intake-readiness claim
or security-profile selection.

Source root below: `development/invoke-runs/2026-07-16-time-capsule-intake/`.

## Findings

### PS-01 — Public-live has no independent promotion gate

- **File:** `FORM-SPEC.md`; `IMPLEMENTATION-LAYERING.md`
- **Evidence:** The form says real public intake requires “admission, moderation,
  retention, and incident owners,” yet the layering table keeps L1 synthetic,
  bundles consent/moderation with sealed work in L2, and reaches
  “production-reviewed intake” only in L3.
- **Severity:** CRITICAL
- **Blocks:** both
- **Proposed fix:** Add separate public-live and sealed-live gate rows. Public
  requires credential, consent, moderation, abuse, retention/deletion, incident,
  restore, and successor evidence; sealed requires all of those plus its own
  threat/custody evidence. Killing sealed must waive none of the public gates.

### PS-02 — A public commitment to one word can reveal the sealed word

- **File:** `ARCHITECTURE.md`; `work-pack/tasks/TASK-TC-006.md`
- **Evidence:** `SealedWordRecord` publishes horizon, slot, mode, and
  `commitment`, while canonical record bytes are published. The input is one
  bounded Unicode token, and TC-006 explicitly requires “low-entropy guessing”
  tests.
- **Severity:** CRITICAL
- **Blocks:** sealed-live
- **Proposed fix:** Make resistance to offline guessing over realistic word
  distributions a hard, adversarially tested property. If no approved profile
  can hide the word while meeting the public contract, kill sealed intake.

### PS-03 — Client and custody threats are only named, not bounded

- **File:** `FORM-SPEC.md`; `work-pack/tasks/TASK-TC-006.md`
- **Evidence:** The design requires client-side protection and names keys,
  custody, migration, and loss, while listing one-person custody and an
  organizer master key as failures. It does not bound altered client code,
  third-party scripts, browser residue, crash capture, key compromise,
  rotation/revocation, or recovery authority.
- **Severity:** CRITICAL
- **Blocks:** sealed-live
- **Proposed fix:** Require an owner-approved client/key/custody threat contract
  and fixtures for code substitution, local residue, telemetry leakage,
  compromise, rotation, recovery, loss, and migration. “No sealed path” remains
  the required outcome if that contract cannot be supported.

### PS-04 — The server-plaintext guarantee contradicts release processing

- **File:** `FORM-SPEC.md`; `work-pack/tasks/TASK-TC-005.md`
- **Evidence:** The invariant says “sealed plaintext never reaches server.” At
  release, TC-005 verifies an opening, obtains display confirmation, moderates,
  and may show the word, without defining where plaintext changes class or may
  be processed.
- **Severity:** MAJOR
- **Blocks:** sealed-live
- **Proposed fix:** Define an explicit sealed → release-candidate → public state
  transition, with permitted processors, log/backup exclusions, erasure, and
  failure behavior at each step. Keep the no-server guarantee before authorized
  opening or narrow the published guarantee honestly.

### PS-05 — Public artifacts leak participation and sealed-choice metadata

- **File:** `ARCHITECTURE.md`; `FORM-SPEC.md`
- **Evidence:** Public artifacts may expose accepted/rejected aggregates,
  horizon, slot, mode, commitments, ciphertext references, and still-sealed or
  unrecoverable counts. Private receipts repeat record commitments. In a small
  known cohort these fields can link a person, choice, loss, or non-response.
- **Severity:** MAJOR
- **Blocks:** both
- **Proposed fix:** Threat-model linkage across manifests, counts, receipts,
  timing, logs, and support. Suppress unsafe low-cardinality aggregates, remove
  unnecessary stable references, and run smallest-cohort inference fixtures
  before publishing any metadata.

### PS-06 — Consent, deletion, and immutable publication conflict

- **File:** `FORM-SPEC.md`; `ARCHITECTURE.md`
- **Evidence:** Public words may be visible from confirmation and “preserved
  long-term”; `PublicWordRecord` embeds `word_nfc`; canonical bytes are
  published; quarantine never changes the root. Only a *saved* word is warned
  that deletion is not promised. Public replication, withdrawal, and required
  takedown are not reconciled.
- **Severity:** CRITICAL
- **Blocks:** both
- **Proposed fix:** Approve a mode- and state-specific consent/deletion/display
  matrix before collection. Exclude disallowed content before freeze; state what
  can and cannot be removed afterward; obtain explicit consent to irreversible
  replication. If owner obligations conflict with public canonical bytes, do
  not publish those bytes or open intake under this record contract.

### PS-07 — Moderation and abuse do not fail closed before display

- **File:** `FORM-SPEC.md`; `work-pack/tasks/TASK-TC-004.md`;
  `work-pack/tasks/TASK-TC-005.md`
- **Evidence:** Public words may appear “from confirmation,” while moderation is
  specified mainly for release. Real abuse coverage stops at failed-credential
  rate limiting and synthetic replay/concurrency cases; queue exhaustion,
  distributed attacks, version floods, cross-site requests, and harmful first
  publication are unhandled.
- **Severity:** CRITICAL
- **Blocks:** both
- **Proposed fix:** Insert a non-public `moderation-pending` state before every
  display and specify policy version, timeout, appeal, emergency takedown, and
  outage behavior. Add bounded real-service abuse controls and load fixtures;
  overload must never publish unreviewed content or corrupt confirmed state.

### PS-08 — No incident-response contract exists

- **File:** `FORM-SPEC.md`; run-local `stages/01-context-builder/CONTEXT-PACK.md`
- **Evidence:** The form only requires an “incident owner”; context gap G-R4 says
  incident policy lacks approval. Detection, containment, intake stop, credential
  or key response, notice, restore, and resume authority are absent.
- **Severity:** CRITICAL
- **Blocks:** both
- **Proposed fix:** Add and rehearse an incident state machine covering detection,
  severity, stop/resume authority, containment, revocation/rotation, evidence,
  affected-participant communication, known-good restore, and signed reopen.

### PS-09 — Credential and edit handles remain guessable/takeover surfaces

- **File:** `FORM-SPEC.md`; `DECISIONS-AND-GAPS.md`
- **Evidence:** Admission returns several distinct statuses and only says to
  rate-limit failures. Receipts contain an `edit_handle: private link or recovery
  instruction`; G-03 leaves issuance, recovery, revocation, audit, and Sybil
  posture unresolved.
- **Severity:** MAJOR
- **Blocks:** both
- **Proposed fix:** Require non-enumerating responses, unguessable scoped and
  expiring capabilities, protected storage, replay/idempotency rules,
  revocation/rotation/recovery, distributed-guessing controls, and takeover
  fixtures. Admission and edit authority must remain separate.

### PS-10 — Retention/deletion omits drafts, logs, receipts, and backups

- **File:** `SPEC.md`; `work-pack/tasks/TASK-TC-004.md`; `FORM-SPEC.md`
- **Evidence:** Confirmation creates immutable versions; superseded drafts stay
  out of the manifest but disposition receipts remain auditable. No retention or
  erasure rule covers credentials, drafts, receipts, moderation evidence, audit
  logs, support copies, caches, replicas, or backups.
- **Severity:** MAJOR
- **Blocks:** both
- **Proposed fix:** Produce a field-level lifecycle matrix with purpose, owner,
  processors, storage surfaces, retention clock, deletion trigger, backup
  propagation, exception, and deletion/restore proof for every state.

### PS-11 — Death/incapacity can silently become survivor consent

- **File:** `work-pack/tasks/TASK-TC-005.md`;
  `work-pack/tasks/TASK-TC-006.md`
- **Evidence:** TC-005 names “no authorized survivor” and death/incapacity;
  TC-006 names successor access. Neither defines appointment, revocation, proof,
  scope, or whether access also authorizes opening and display.
- **Severity:** MAJOR
- **Blocks:** sealed-live
- **Proposed fix:** Default to no-survivor authority unless a participant-chosen,
  owner-approved delegation exists. Separate access, recovery, opening, and
  display authority and test appointment, revocation, coercion, conflict, and
  failure. Death or silence must never imply consent.

### PS-12 — Ten-year loss and migration are promises without restore evidence

- **File:** `FORM-SPEC.md`; `ARCHITECTURE.md`; `DECISIONS-AND-GAPS.md`
- **Evidence:** The form promises possible long-term preservation; architecture
  proposes redundancy and annual integrity checks; G-06 admits dependence on
  one service, key, or person and lacks drills, migration, succession, and loss
  outcomes. Integrity checking does not prove cold restore or service survival.
- **Severity:** CRITICAL
- **Blocks:** both
- **Proposed fix:** Require separate public/sealed continuity contracts and
  rehearsed cold restore, independent failure domains, export, migration,
  dependency change, key-loss response, shutdown, participant notice, funding,
  and permanent-loss behavior. Remove the promise if evidence cannot persist.

### PS-13 — Successor authority has no transfer or revocation protocol

- **File:** `ARCHITECTURE.md`; `DECISIONS-AND-GAPS.md`
- **Evidence:** Release verifies “current steward authority,” but G-06 provides
  no appointment, transfer, quorum, revocation, compromise, competing-claim, or
  forbidden-action rules.
- **Severity:** MAJOR
- **Blocks:** both
- **Proposed fix:** Add and drill a versioned successor-authority protocol that
  survives one operator disappearing, authenticates transfer/revocation, resolves
  conflicts, audits privileged actions, and forbids changing root, consent,
  purpose, or sealed access outside the approved participant/custody contract.

## Receipt

```yaml
dispatch_id: 2026-07-17-time-capsule-live-intake-review
step_id: s03
capability_ref: interrogation-review
role_id: privacy-safety
status: block
artifacts:
  - development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/subagents-review/privacy-safety-review.md
validation:
  - all findings include file, precise evidence, severity, one fix, and blocked live mode
  - no cryptographic profile selected; no source artifact edited; no intake readiness claimed
observer_status: not-run-parent-owned
blockers: [PS-01, PS-02, PS-03, PS-04, PS-05, PS-06, PS-07, PS-08, PS-09, PS-10, PS-11, PS-12, PS-13]
residue:
  - public-live remains blocked even if sealed mode is killed
  - sealed-live adds low-entropy, client, custody, plaintext-transition, and survivor blockers
handoff_note: Carry these findings into parent-owned interrogation and plan gates; do not infer readiness.
spawn_status: completed
join_status: pending-parent
close_status: pending-parent
reroute: parent-refine-interrogation
```
