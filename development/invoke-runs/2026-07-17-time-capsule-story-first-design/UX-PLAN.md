# UX Plan — A Message for a Later Us

Status: candidate

## User Goals

| Goal | Actor | Success Signal |
| --- | --- | --- |
| Understand the idea quickly | first-time participant | can retell it without crypto terms |
| Leave something without pressure | participant | leaves a message, any small mark, or nothing at all |
| Choose who the message is for | participant | understands it may be for self, another person, or community |
| Know when it can be read | participant | distinguishes public now from saved for opening |
| Understand how it joins the number | participant | says the capsule helps choose how many tokens ResonantDAO starts with, not that one message has a score |
| Trust the rehearsal boundary | participant | knows nothing was sent or stored |

## Actors

| Actor | Needs | Constraints |
| --- | --- | --- |
| Curious newcomer | purpose before procedure | knows nothing about the project |
| Community participant | agency and a small action | at most two messages per opening |
| Future community | recoverable context and verification | 2/5/10-year stewardship is unapproved |
| Ceremony steward | frozen manifest and closing marker | production rules remain candidate |

## Journeys

| Journey | Start | End | Story beat |
| --- | --- | --- | --- |
| Discover | “What is this?” | “It is a message to our future” | invitation |
| Contribute | blank draft | up to six brief messages or quiet | offering |
| Choose | written message | public now or saved for opening | agency |
| Understand | personal message | shared capsule record | belonging |
| Close | reviewed draft | not-sent local receipt | honest closure |
| Return | present community | future opening | reunion |

## Surfaces

| Surface | Purpose | Entry | Exit |
| --- | --- | --- | --- |
| Story hero | establish emotional reason and equal quiet agency | page load | leave a message/mark or take the quiet path |
| Future timeline | make 2/5/10 years tangible | scroll / CTA | message studio |
| Mechanism x-ray | explain one-time number, continuing care, and staged opening | future timeline | message studio |
| Message studio | compose all horizons in one place | enter capsule | see shared path |
| Ritual path | answer “how does this affect the number?” | after drafting | review |
| Receipt | prevent false submission belief | close rehearsal | restart |

## State Model

| State | User Meaning | Allowed Transition | Error Behavior |
| --- | --- | --- | --- |
| invited | I know why this exists | begin | no pressure state |
| composing | I am leaving messages | next/back/quiet | inline length help |
| choosing | I decide when each can be read | next/back | require a choice per non-empty message |
| understanding | I see the shared ritual | review/back | no technical test |
| reviewing | I recognize my draft | close/back | precise summary |
| receipt | nothing was submitted | restart | none |

## Interaction Flow

1. Read: “Leave something for later” and see that a message, any small mark, or nothing at all is welcome.
2. Choose to enter the studio or take the quiet path immediately.
3. See: today → 2 years → 5 years → 10 years.
4. Trace: create the number once → maintain three future bundles → open and verify one horizon at a time.
5. Enter one stable studio and write messages or marks for any horizon.
6. Choose “share from the beginning” or “save for this opening” for each message.
7. Watch one selected message become a record inside the shared capsule, or see that quiet adds no invented record.
8. See the capsule fingerprint meet the Bitcoin closing block and help choose the starting token number.
9. Review the whole draft and close the rehearsal.

## Content Requirements

| Content | Purpose | Constraint |
| --- | --- | --- |
| “message or mark” | human input name | define as a word, symbol, or small sentence |
| “nothing at all” | quiet agency | visible in the hero and available as a direct path |
| “shared capsule fingerprint” | causal bridge | explain before saying hash |
| “Bitcoin closing block” | public closing marker | explicitly not message storage |
| “saved for its opening” | delayed reveal | label planned, not live |
| “one record” | fairness intuition | length gives no extra weight |
| “one number, three returns” | lifecycle distinction | number created once; message visibility changes later |
| “stewardship proposal” | evidence boundary | storage, access, and recovery shown as candidate, not live |
| “not sent · not saved” | capability truth | persistent and on receipt |

## Visual Direction

- Open with the generated artwork covering the entire first section.
- On wide screens, keep the first section close to the artwork's native 1672:941 shape;
  do not stretch it to fill an unusually tall viewport.
- Place the brand, invitation, explanation, and actions inside the image field; do not
  reduce the artwork to an accessory card beside the copy.
- Use a deep directional overlay to keep the cream text readable without hiding the
  luminous capsule at the center-right of the image.
- Keep the literal year in each opening label, then give the heading a distinct purpose:
  continuity at 2 years, change at 5 years, and memory across 10 years.

## Accessibility Considerations

| Consideration | Required Response |
| --- | --- |
| Keyboard and focus | real buttons, predictable order, visible focus |
| Screen reader | semantic steps and text equivalent for ritual SVG |
| Reduced motion | no auto-motion; direct state change |
| Zoom/mobile | one-column document flow below 760px |
| Color contrast | cream text on deep navy; amber not sole status cue |
| Unicode/IME | textarea input; no keypress filtering |

## Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Too poetic | concept remains unclear | every story beat has one concrete action |
| Community-only framing | personal possibilities feel excluded | name self, another person, and community equally |
| Too technical | newcomer leaves | mechanics only after message draft |
| Saved mode overpromises | privacy harm | “planned, not live” at every relevant state |
| Maintenance diagram looks production-ready | false trust | dashed candidate treatment plus explicit open decisions |
| Choice overload | abandonment | one stable card; reveal only the current layer |

## Acceptance Signals

| Signal | Evidence | Owner |
| --- | --- | --- |
| 5/5 know it is a time capsule | unaided retell | UX owner |
| 5/5 know a message may be personal or communal | unaided retell | UX owner |
| 5/5 notice from the opening that a mark or no contribution is allowed | unaided retell | UX owner |
| 4/5 can distinguish why they might write for 2, 5, and 10 years | horizon retell | UX owner |
| 5/5 know their message has no fixed number | mechanism question | UX owner |
| 5/5 know the shared capsule helps choose how many tokens ResonantDAO starts with | unaided retell | UX owner |
| 4/5 retell shared fingerprint + closing block | comprehension interview | ceremony/UX |
| 4/5 distinguish number creation, capsule care, and future opening | lifecycle retell | ceremony/stewardship/UX |
| 5/5 know the custody design is still a proposal | evidence-boundary question | stewardship/UX |
| 5/5 know nothing was submitted | post-receipt question | prototype owner |
| no critical keyboard/mobile defects | browser and manual checks | implementation owner |

## Handoff Boundaries

- Architecture handoff: included in this run.
- Implementation-plan handoff: deferred until operator and comprehension approval.
- Research handoff: real Bitcoin anchor, saved-message recovery, and participant testing.

## Gate Result

- Status: `flag`
- Reason: story and interaction are coherent; human comprehension remains unrun.
