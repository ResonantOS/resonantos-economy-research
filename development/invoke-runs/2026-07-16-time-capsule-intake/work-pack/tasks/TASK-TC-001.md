# TASK-TC-001 — Explain The Model And Add The Form Preview

Layer: L0

Slice: S-01

Wave: W0

Status: ready after explicit Task Session approval

## Objective

Replace the current one-word explanation with the settled `0–2 words per
2y/5y/10y opening` model, then add a non-collecting form preview that uses the
same copy and six-slot structure.

## Source Contracts

- `../../SPEC.md#the-plain-language-contract`
- `../../FORM-COPY.md#short-explanation-for-the-first-page`
- `../../FORM-SPEC.md#form-acceptance-checklist`
- `../../UX-PLAN.md#interaction-rules`
- existing `development/refinement-runs/2026-07-12-number-lottery/presentation/site/index.html`
- existing `development/refinement-runs/2026-07-12-number-lottery/presentation/site/idea/index.html`

## Implementation Detail

Inputs are the settled copy, current static site, and wireframe. Outputs are an
updated homepage/full-idea explanation and a static `contribute/` preview.

Ordered implementation:

1. Update metadata, hero promise, “How it works,” participation, timeline, and
   status copy so they agree on two optional words at each opening.
2. Explain that all accepted places across horizons enter one capsule root and
   one supply calculation; later openings never recalculate it.
3. Keep public, saved, and quiet choices invitational; remove “everyone gets one word.”
4. Adapt `FORM-WIREFRAME.html` into a site-native `contribute/index.html`.
5. Keep the form without action, persistence, analytics, credentials, or enabled submit.
6. Add a clearly labeled “Preview the form” link; never label it “Contribute now.”
7. Validate desktop/mobile layout, keyboard order, semantics, and zero network writes.

Edge/failure cases:

- any page still saying one total word is a consistency failure;
- wording that implies six words are expected is a coercion failure;
- a working submit request, local storage, or analytics capture is a hard L0 failure;
- sealed copy that implies encryption/recovery is a hard boundary failure;
- form links must not replace the current “not live” status.

## Smallest Working Units

### SWU-TC-001 — Update The Public Explanation

- Dependencies: none
- Source anchors: `FORM-COPY.md#short-explanation-for-the-first-page`, current
  homepage `#ritual`, full-idea `#short-version`, `#experience`, `#number`, `#returns`
- Related context: `ARCHITECTURE.md#view-4--workflow-process`
- Write scope: the two existing presentation HTML files only
- Done when: every first-page path states up to two words per 2/5/10 opening,
  one whole-capsule root, one supply, and no later recalculation
- Acceptance evidence: focused copy diff plus a cold-reader retell checklist
- Validation: HTML parse and manual phrase search for stale one-word claims
- Execution owner: local-fallback
- Handoff: return exact sections changed, stale claims found, and retell result

### SWU-TC-002 — Add The Non-Collecting Form

- Dependencies: SWU-TC-001
- Source anchors: `FORM-WIREFRAME.html`, `FORM-SPEC.md#steps`, `UX-PLAN.md#accessibility-and-language`
- Related context: existing site CSS and deployment package
- Write scope: new `presentation/site/contribute/` files plus link edits approved in SWU-TC-001 scope
- Done when: six optional slots render; all visibility and status copy is present;
  no data leaves the page; submit remains disabled
- Acceptance evidence: browser screenshots, keyboard review, DOM/form inspection,
  and network/storage capture showing zero writes
- Validation: local browser smoke test at desktop and mobile sizes
- Execution owner: local-fallback
- Handoff: return files, evidence paths, accessibility findings, and any copy residue

## Synchronization

Update `WORK-PACK.md` only after the selected SWU's evidence passes. Do not mark
the task complete until both SWUs pass. Completion does not promote W1.

