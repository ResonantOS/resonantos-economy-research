# UX Plan — Leave Words For The Future

Status: candidate design; form prepared, not connected to collection

## User Goals

| Goal | Actor | Success signal |
| --- | --- | --- |
| Understand the whole ritual before sharing anything. | participant | Can explain words -> locked capsule -> later public value -> one supply -> 2/5/10 openings. |
| Leave none, one, or two words for each opening. | participant | Completes all desired slots without exceeding two per horizon. |
| Choose visibility separately for every word. | participant | Can correctly restate public-now versus sealed-until-release. |
| Review what will happen before confirmation. | participant | Sees all six places, normalized words, modes, deadline, and future opening. |
| Return and edit before close. | participant | Can recover the envelope and replace or remove draft slots. |
| Verify inclusion without exposing identity. | participant | Receives private slot and later inclusion receipts. |

## Actors

| Actor | Needs | Constraints |
| --- | --- | --- |
| Admitted participant | clarity, control, multilingual input, quiet participation | credential does not prove personhood; public choices are durable |
| Intake steward | deterministic validation and deadline behavior | no manual result-shaping or post-close changes |
| Community reader | simple explanation of how words affect one number | cannot see credentials or sealed plaintext |
| Future participant | safe reconfirmation and display choice | non-response is not consent |
| Accessibility/language reviewer | testable form and word-profile fixtures | candidate rules may need repair before launch |

## Primary Journey

| Step | Surface | Participant experience | System meaning |
| --- | --- | --- | --- |
| 1 | Welcome | “You have two places at each future opening.” | Explain quota and whole ritual. |
| 2 | Admission | Open invitation or enter opaque credential. | Resolve one six-slot envelope privately. |
| 3 | 2-year card | Leave 0–2 words; choose visibility per word. | Draft `2y` slots 1–2. |
| 4 | 5-year card | Leave 0–2 words; choose visibility per word. | Draft `5y` slots 1–2. |
| 5 | 10-year card | Leave 0–2 words; choose visibility per word. | Draft `10y` slots 1–2. |
| 6 | Review | See all six places and what each choice means. | Validate normalized values and consent versions. |
| 7 | Confirm | Acknowledge public/sealed consequences and deadline. | Create a new confirmed envelope version. |
| 8 | Receipt | Save private receipt; edit remains possible before close. | Return slot refs, confirmation version, and close time. |

## Surfaces

| Surface | Purpose | Entry | Exit |
| --- | --- | --- | --- |
| Public explanation | Explain the capsule and number in one pass. | homepage or invitation | begin form or leave |
| Welcome/admission | Establish quota and resolve credential. | invitation link/code | six-slot editor |
| Six-slot editor | Compose contributions by horizon. | valid credential | review or save draft |
| Consequence drawer | Explain public/sealed for a specific slot. | visibility choice | return to slot |
| Review | Show exactly what will be confirmed. | valid draft | edit or confirm |
| Confirmation | Capture explicit acknowledgements. | review | receipt |
| Receipt | Make status and next actions clear. | successful confirm | edit before close or finish |
| Release invitation | Ask again before displaying sealed content. | matching horizon | open, refuse, or remain silent |

## State Model

| State | User meaning | Allowed transitions | Error behavior |
| --- | --- | --- | --- |
| no-credential | invitation not recognized | retry, request help, leave | no slot state created |
| draft | changes are local/server draft and not final | save, review, remove, leave | preserve safe draft; explain validation |
| review-ready | all filled slots valid | edit, confirm | focus first invalid field |
| confirmed | current version enters close-time selection | edit/reconfirm before close | show current receipt and deadline |
| closed | no more changes | view receipt/inclusion status | all writes fail with close receipt |
| rejected/quarantined | one or more slots cannot enter/display | appeal where available, remove before close | reason code, no status penalty |
| released | public or reconfirmed word is in release view | reflect, request display review | original root remains unchanged |
| still-sealed | no valid opening/reconfirmation | remain sealed | never infer refusal or disagreement |

## Interaction Rules

1. Render the three horizon cards in chronological order.
2. Keep both slots visible so the two-word limit is obvious; present slot 2 as
   “another word, if you want one.”
3. Slot 2 enables only after slot 1 contains a valid word.
4. Leaving both slots empty is complete, not an error.
5. Visibility controls appear only when a slot has text.
6. Default no visibility silently. Require a deliberate choice for every filled slot.
7. Show normalized text in review; never alter it silently after confirmation.
8. Keep the difference between “saved for later” and “secure/recoverable” visible.
9. Show one calm progress line: `2 years -> 5 years -> 10 years -> review`.
10. Do not display contribution counts, leaderboards, trending words, founder
    badges, or social proof during intake.

## Content Requirements

| Content | Purpose | Constraint |
| --- | --- | --- |
| one-paragraph mechanism | connect a word to the number | avoid letter-score or fixed-token implication |
| horizon prompt | invite reflection without demanding significance | no loyalty or legacy pressure |
| visibility copy | communicate consequences | no “private” or “encrypted” claim without profile |
| quiet-path copy | preserve parity | no guilt, penalty, or disagreement inference |
| deadline copy | make edit/closure behavior legible | exact timezone and clock source before launch |
| receipt copy | explain what is and is not proven | receipt != identity, privacy, reward, or authority |

## Accessibility And Language

- use native `fieldset`, `legend`, `label`, radio, and error semantics;
- full keyboard access and visible focus;
- do not use color alone for public/sealed states;
- announce per-horizon count such as “one of two places used”;
- show character/grapheme limit without calling Latin letters universal;
- allow browser zoom and narrow screens without horizontal scrolling;
- test right-to-left scripts and input methods before real intake;
- preserve the submitted normalized word and add translations only as annotations;
- provide a non-wallet admission route if the admission owner chooses wallet access.

## Risks And Mitigations

| Risk | Mitigation |
| --- | --- |
| Six slots feel like an obligation. | Repeat that every place is optional; no completion meter rewards filling more. |
| “Sealed” sounds automatically secure. | Explain the current guarantee and keep real option disabled until approved. |
| Public words become status objects. | No feed, counts, reactions, ranking, or participant profile linkage. |
| Participant believes one word equals tokens. | Show the whole-capsule fingerprint explanation next to the form. |
| Deadline or normalization surprises. | Preview exact normalized word, timezone, and close behavior before confirm. |
| Future silence becomes inferred consent. | Release-time reconfirmation; no response remains sealed. |

## Acceptance Signals

| Signal | Evidence | Owner |
| --- | --- | --- |
| People can state the quota correctly. | comprehension test: “up to two per opening, six total” | product/community |
| People can explain how words affect the number. | retell test without “letter sum” or fixed-token language | product/community |
| People distinguish public and sealed. | scenario questions including no-reveal/lost-key case | privacy/security |
| Empty horizons feel valid. | observation/interview; no forced errors or completion pressure | UX research |
| Screen-reader and keyboard flow works. | automated and manual accessibility checks | accessibility owner |
| No real data leaves the L0 wireframe. | network and storage inspection | implementation owner |

## Gate Result

Pass for a non-collecting prototype and synthetic tests. Real intake remains
blocked by admission, sealed-profile, moderation, privacy/legal, and stewardship gates.

