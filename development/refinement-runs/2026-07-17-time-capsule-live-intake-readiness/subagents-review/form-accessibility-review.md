# Form And Accessibility Attack Review

Status: `FIX`

Boundary: participant comprehension, voluntariness, accessibility, Unicode,
public/sealed/quiet consequences, and edit/close/receipt/release behavior. This
review does not approve collection or intake readiness.

Scope labels: **static** = L0 non-collecting repair; **public-live blocker** =
must close before accepting/displaying public words; **sealed-live blocker** =
must close before accepting/opening/displaying sealed words.

## Findings

### FAR-01 — “Public now” permits an unmoderated reading

- **Scope / severity:** public-live blocker — **CRITICAL**
- **File/evidence:** `FORM-SPEC.md:71-77` says public words “may be visible from
  confirmation.” `ARCHITECTURE.md:85-90` permits accepted, rejected,
  quarantined, or superseded dispositions, while `DECISIONS-AND-GAPS.md:27-29`
  says moderation/appeals still block real display.
- **Attack:** The participant cannot tell whether confirmation publishes
  immediately or enters pre-display review. The first reading bypasses a named
  live-display gate.
- **Proposed fix:** Freeze one owner-approved public transition and matching
  copy: `confirmed -> pending display review -> show | quarantine | reject`,
  including appeal and receipt consequences.

### FAR-02 — Sealed release consent is not a complete interaction

- **Scope / severity:** sealed-live blocker — **CRITICAL**
- **File/evidence:** `FORM-COPY.md:105-110` offers “open it for review, keep it
  sealed, or do nothing.” `ARCHITECTURE.md:292-300` requires a valid opening and
  separate current display confirmation. `TASK-TC-005.md:30-43` additionally
  distinguishes refusal, silence, loss, invalid/late opening, moderation, and
  appeal.
- **Attack:** “Open” can be mistaken for “publish”; no participant journey says
  when plaintext is privately previewed, when display consent occurs, when the
  choice expires, or what receipt follows.
- **Proposed fix:** Require one approved release interaction contract with
  accessible invitation, private preview after opening, separate unselected
  display consent, keep-sealed/no-response outcomes, deadline/retry,
  moderation/appeal, and terminal receipts.

### FAR-03 — Edit, withdrawal, deletion, and abandonment collapse

- **Scope / severity:** public-live blocker; sealed-live blocker — **MAJOR**
- **File/evidence:** `FORM-COPY.md:97-103` says participants may “return and
  change” places. `TASK-TC-004.md:31-38` allows remove/replace, supersedes prior
  versions, retains auditable state, and later emits inclusion/non-inclusion
  receipts. `UX-PLAN.md:54-59` says an abandoned draft may be local/server state
  and should be preserved, but offers no discard path.
- **Attack:** “Change” does not say whether it withdraws display, excludes the
  final root, deletes stored history, or merely supersedes. Starting an optional
  contribution may silently create durable draft state with no voluntary exit.
- **Proposed fix:** Add one participant-visible lifecycle matrix for draft,
  discard, confirm, public display, replace/remove, supersede, close, retention,
  and deletion, stating the storage, display, inclusion, and receipt effect of
  every action.

### FAR-04 — Quiet meaning and the all-empty result contradict or disappear

- **Scope / severity:** static; public-live blocker — **MAJOR**
- **File/evidence:** `FORM-COPY.md:29-33` says quiet is “part of the capsule,”
  while `FORM-SPEC.md:55` and `SPEC.md:87-88` say an empty slot creates no
  record. The receipt at `FORM-SPEC.md:84-101` only models confirmed slots with
  visibility and commitment, although all-empty completion is valid.
- **Attack:** Users may infer silence shapes the root/supply; live code may then
  issue no receipt, a false confirmed-slot receipt, or a private abstention-like
  artifact.
- **Proposed fix:** Define one quiet contract across copy, API, and receipt:
  empty is valid/unpenalized, creates no public abstention or capsule/root
  record, and has an explicit private zero-word completion/edit outcome.

### FAR-05 — The L0 wireframe contradicts its control and review contract

- **Scope / severity:** static — **MAJOR**
- **File/evidence:** `UX-PLAN.md:65-75` requires slot 2 to enable only after a
  valid slot 1 and visibility controls only after text. In
  `FORM-WIREFRAME.html:313-330` (repeated for all horizons), both are always
  active. `FORM-SPEC.md:57-82` requires six normalized previews, per-slot
  consequences, edit links, deadline, and six acknowledgements; the wireframe
  at `:385-399` shows none of them.
- **Attack:** Keyboard/screen-reader users encounter impossible radio states,
  and L0 cannot test normalization or consequence comprehension before confirm.
- **Proposed fix:** Repair L0 as a zero-persistence simulation: conditional
  controls with announced enablement plus a synthetic/volatile six-slot review
  containing normalized values, exact consequences, edits, deadline, and all
  acknowledgements.

### FAR-06 — Unicode length and grammar cannot be implemented consistently

- **Scope / severity:** static; public-live blocker; sealed-live blocker — **MAJOR**
- **File/evidence:** `FORM-SPEC.md:109-123` requires 1–32 extended grapheme
  clusters and fixture-driven script support, but all word inputs use HTML
  `maxlength="32"` and say “32 characters” (`FORM-WIREFRAME.html:315-317`).
  `SPEC.md:134-145` does not decide whether a letter is mandatory, which
  apostrophe/hyphen code points are accepted, their positions, or validation
  during IME composition. G-07 (`DECISIONS-AND-GAPS.md:30`) blocks real intake.
- **Attack:** Browser, client, and server can reject different strings by
  representation, script, punctuation, or unfinished composition.
- **Proposed fix:** Freeze one shared versioned word grammar and grapheme
  validator, remove native `maxlength` as authority, specify IME/normalization
  timing, and run positive/negative client-server parity fixtures across scripts
  and combining sequences.

### FAR-07 — RTL editing and rendered-word isolation are absent

- **Scope / severity:** static; public-live blocker; sealed-live blocker — **MAJOR**
- **File/evidence:** `UX-PLAN.md:91-101` requires RTL/input-method testing. The
  document is English (`FORM-WIREFRAME.html:1-3`), but its inputs have no
  per-value direction behavior (`:315-316`, repeated), and no review/public
  rendering contract isolates bidirectional words. `FORM-SPEC.md:111-115`
  rejects invisible format controls.
- **Attack:** RTL words can be hard to edit or can reorder neighboring slot,
  punctuation, and status text in review, receipts, moderation, or release.
- **Proposed fix:** Add one cross-surface bidi contract using automatic input
  direction and isolated word rendering, then test editor, review, receipt,
  moderation, public display, and release with keyboard/screen reader and mixed
  directions.

### FAR-08 — The non-collecting form retains a GET submission boundary

- **Scope / severity:** static — **MAJOR**
- **File/evidence:** `FORM-WIREFRAME.html:309` declares `<form action=""
  method="get">`. `TASK-TC-001.md:38-49` requires no action and treats any
  working request as a hard L0 failure.
- **Attack:** Implicit submission or a later button regression can place entered
  words in URL history, logs, and referrers—the leak L0 is meant to make
  impossible.
- **Proposed fix:** Remove the action/method path, prevent every L0 submit event,
  and add keyboard Enter cases for each input to the zero-network,
  zero-history, zero-storage evidence capture.

### FAR-09 — Accessible error behavior is missing

- **Scope / severity:** static; public-live blocker; sealed-live blocker — **MAJOR**
- **File/evidence:** `FORM-SPEC.md:138-148` provides strings only.
  `UX-PLAN.md:54-63,91-99` requires focus on the first invalid field, reasons,
  native error semantics, keyboard access, and screen-reader testing. The
  wireframe has no invalid state, associated error, summary, or announcement
  surface (`FORM-WIREFRAME.html:315-330`).
- **Attack:** A user can be stranded after client/server, credential, close, or
  disposition failure without knowing which slot failed or whether input was
  preserved.
- **Proposed fix:** Define one error interaction contract with field
  association, invalid/description semantics, announced summary, deterministic
  focus, safe-input preservation, and retry/help for every failure source.

### FAR-10 — Close and receipt behavior is not legible or recoverable

- **Scope / severity:** public-live blocker; sealed-live blocker — **MAJOR**
- **File/evidence:** `{date and timezone}` first appears after confirmation in
  `FORM-COPY.md:99-103`, though `UX-PLAN.md:88-89` requires exact timezone and
  clock source. `TASK-TC-004.md:34-42` makes concurrent writes, clock skew,
  partial transactions, and final inclusion/non-inclusion receipts critical.
  `FORM-SPEC.md:84-105` allows a private link/recovery instruction without
  defining loss, rotation, revocation, or final receipt shape.
- **Attack:** A user cannot know whether click, request arrival, or commit wins
  at close, what version survived, or how to recover from a lost/compromised
  edit handle.
- **Proposed fix:** Freeze one server-authoritative close/receipt contract shown
  at welcome, review, and receipt: absolute time/timezone/clock source,
  commit-before-close and network-failure behavior, last-confirmed version,
  handle sensitivity/recovery/rotation, and per-slot final
  inclusion/non-inclusion reasons.

### FAR-11 — L0 evidence can pass without voluntariness or access parity

- **Scope / severity:** static — **MAJOR**
- **File/evidence:** `IMPLEMENTATION-LAYERING.md:25-28`, `WORK-PACK.md:109-115`,
  and `UX-PLAN.md:114-123` request retell and accessibility checks but define no
  participant/access-mode coverage, scenarios, threshold, or rule that a
  consequence misunderstanding blocks promotion.
- **Attack:** One fluent retell can pass while quiet participants,
  screen-reader/keyboard users, RTL/IME users, and people distinguishing opening
  from display consent fail.
- **Proposed fix:** Predeclare one decidable L0 protocol covering quota,
  quiet/public/sealed consequences, normalization, edit/close, and release
  consent across access modes, with thresholds and any critical consequence
  misunderstanding as a promotion block.

## Blocker Separation

- **Static repairs:** FAR-04 through FAR-09 and FAR-11.
- **Public-live blockers:** FAR-01, FAR-03, FAR-04, FAR-06, FAR-07, FAR-09,
  FAR-10.
- **Sealed-live blockers:** FAR-02, FAR-03, FAR-06, FAR-07, FAR-09, FAR-10,
  additional to the preserved security/privacy/legal/stewardship owner gates.

## Receipt

```yaml
dispatch_id: 2026-07-17-time-capsule-live-intake-review
step_id: s03
capability_ref: interrogation-review
role_id: form-accessibility
status: FIX
artifacts:
  - development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/subagents-review/form-accessibility-review.md
validation:
  - assigned context and selected source/task contracts read
  - each finding has file evidence, severity, scope, and one proposed fix
  - only the assigned review artifact was written
observer_status: pending-parent
blockers: [FAR-01, FAR-02, FAR-03, FAR-04, FAR-06, FAR-07, FAR-09, FAR-10]
residue:
  - No comprehension, Unicode/IME, assistive-technology, close, recovery, or release-consent evidence has run.
  - Moderation, privacy/legal, credential recovery, sealed threat/custody, and stewardship decisions remain owner-gated.
handoff_note: Carry static repairs into L0 and preserve public/sealed blockers as explicit owner-gated obligations; do not infer live authorization.
spawn_status: completed
join_status: pending-parent
close_status: pending-parent
reroute: parent-refinement-owner
```
