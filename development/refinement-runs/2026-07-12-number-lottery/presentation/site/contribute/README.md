# Resonant Time Capsule Intake — V2 Candidate

This directory contains the show-ready, non-collecting candidate for the
Resonant Time Capsule intake form.

## Participant Contract

- One continuous form, not a wizard.
- Two optional short-phrase places at each 2-, 5-, and 10-year opening.
- At least one phrase is required to create a preview receipt; the separate
  quiet path creates no receipt or record.
- Every accepted phrase has one visibility: out of public view until its
  opening, then public.
- Phrases shape one shared capsule fingerprint. No phrase has a personal token
  score or creates allocation, rank, reward, or governance power.
- The current candidate close is `2026-07-21T00:00:00Z` (Monday July 20 at
  21:00 in São Paulo).

## Important Boundary

This candidate does **not** collect anything. It has no API connection,
credentials, account, analytics, storage write, cookie write, or durable
receipt. All values remain in page memory and disappear on refresh.

Do not remove the visible preview boundary or call this live intake until a
real adapter, database, moderation path, operational owner, backup/recovery
procedure, and deployment evidence have passed their own gate.

## Preview Locally

From the parent `site/` directory:

```sh
python3 -m http.server 8080
```

Open:

- form: `http://127.0.0.1:8080/contribute/`
- machine fixtures: `http://127.0.0.1:8080/contribute/tests/fixture-runner.html`

Use invented phrases during testing.

## Current Browser Evidence

- V2 fixture runner: 32/32 checks passed in Firefox.
- desktop `1440 × 1000`: no horizontal overflow.
- mobile `360 × 800`: no horizontal overflow.
- visible buttons and phrase controls: no target below 44px.
- keyboard path: skip link → first phrase → unlocked second phrase → review →
  two acknowledgements → receipt.
- interaction requests: zero after initial static resources.
- console warnings/errors: zero.
- browser storage and cookies: empty.

Screenshots and the closure receipt live under
`output/playwright/time-capsule-intake/` and
`development/task-sessions/2026-07-17-time-capsule-intake-form-2h/`.

Manual screen-reader, native-IME, and five-person comprehension evidence remain
explicitly unclaimed.

## Future Live Adapter Seam

`window.TimeCapsuleIntakeV2.buildEnvelope()` emits six ordered places with a
fixed `public_at_opening` visibility and explicit UTC close instant. The current
confirmation uses only a volatile preview adapter. A later server adapter may
consume that contract, but should not silently change its fields or consequence
copy.
