# Resonant Time Capsule — UX Plan

Status: `candidate`

## Experience Promise

In one short visit, a person should understand the Time Capsule well enough to
say:

> We can leave a few words for the future. Together, all the words help choose
> ResonantDAO's starting token number once. The words come back in 2, 5, and 10
> years.

This is the target retell, not a script the interface forces people to repeat.

## Information Hierarchy

### First visual field

1. A time capsule for ResonantDAO.
2. Leave a few words if you want.
3. Together the words shape one starting number.
4. The words return in 2, 5, and 10 years.
5. Try it safely with invented words.

### Second visual field

1. one progressive form card;
2. Words → Choices → Review;
3. concise participation boundary.

### Supporting detail

- how the number is made;
- why it cannot be known before closure;
- public versus saved-for-later states;
- full concept and verification details.

## Page Map

```text
/
├── preview bar
├── hero + visual equation
├── primary CTA -> #capsule
├── progressive capsule rehearsal
├── mechanism disclosure
└── footer / full idea
```

The form should live on the main page for the shortest path. A dedicated
`/contribute/` route may remain as a direct link, but it should render the same
component and copy rather than a separate long-form experience.

## Core Flow

### Entry

The person reads the category, question, and one-sentence explanation. The
primary CTA scrolls a short distance to a form whose heading repeats the action,
not the concept lecture.

### Step 1 — Words

Goal: make the action feel small and voluntary.

- Show all three horizons so the time structure is immediately visible.
- Give each horizon two optional word inputs.
- Use evocative but concrete prompts; do not prescribe emotional depth.
- Do not show public/saved controls yet.
- Permit an all-empty draft.
- Primary button is dynamic:
  - with words: “Choose how they return”;
  - without words: “Continue quietly.”

### Step 2 — Choices

Goal: make visibility a decision about actual words, not six abstract slots.

- Render one card per non-empty word.
- Default nothing silently in a future live form.
- Rehearsal can offer “Visible with the capsule.”
- “Saved for that future opening” is disabled and plainly marked unavailable.
- If no words were entered, show one calm quiet-state panel and continue.

### Step 3 — Review

Goal: let the person recognize the whole contribution at a glance.

- Group by 2, 5, and 10 years.
- Show `Quiet` where a horizon has no words, but do not repeat six empty slots.
- Present three consequences in one readable block.
- In rehearsal, the primary action is “Close this rehearsal.”
- In a future live flow, the label must say exactly what is submitted and can
  only be finalized after public-consent requirements are approved.

### Receipt

Goal: leave no false sense of submission.

- Heading: “The rehearsal is closed.”
- Stamp: “Not submitted · not saved.”
- Show the local contribution summary.
- Explain what the real capsule would do next in two sentences.
- Offer “Start again” and “Read the full idea.”

## Mechanism Explanation Pattern

Use progressive disclosure:

### Plain version

> Every accepted word changes the capsule as a whole. After it closes, all the
> words become one shared digital pattern. We combine that pattern with a
> public number no one could know in advance, then place the result inside the
> range agreed before we began.

### One-line correction

> A word is never worth a fixed number of tokens by itself.

### Timing correction

> The starting number is chosen once. Opening the capsule later only brings the
> words back.

### Proof link

“See the proposed rules and verification path.”

## Emotional Arc

| Moment | Desired feeling | Design behavior |
| --- | --- | --- |
| Arrival | curiosity without confusion | question-led hero and immediate category label |
| Understanding | “I can explain this” | one visual equation and two timing sentences |
| Contribution | permission, not pressure | optional fields and quiet path |
| Choice | agency | controls only for words actually entered |
| Review | confidence | complete, compact consequence summary |
| Receipt | closure without deception | unmistakable rehearsal stamp |

## Language Rules

Use:

- time capsule;
- our words / a few words;
- one shared pattern;
- one starting number;
- return in 2, 5, and 10 years;
- visible with the capsule;
- saved for later, when referring to the disabled concept;
- quiet.

Delay or avoid:

- Number Lottery in first-pass copy;
- tokenomics;
- hash, Merkle root, beacon, entropy;
- moderation-pending;
- encrypted or private;
- contribution score;
- win, reward, allocation, influence.

## Visual Direction

- Keep the existing dark field and warm paper-like type, but use a deeper amber
  for surfaces and a brighter cream for text contrast.
- Use one luminous line to connect “words,” “one beginning,” and the three
  returns. The line supports memory; it is not decoration spread across every
  section.
- Reserve bright amber for primary actions and progress. Muted gold frames
  supporting content.
- Avoid four equal explainer cards above the fold; they imply four rules to
  memorize. Use one equation and one sentence instead.
- Keep the page compact enough to capture the full context in one desktop
  screenshot without turning body text into small print.

## Accessibility Contract

- semantic heading and form order matches the visual order;
- progress is announced as text, not color alone;
- panel transitions move focus to the new heading;
- errors appear beside the field and in an error summary;
- no auto-advance after typing;
- Unicode input and IME composition are not interrupted;
- 200% zoom and 320 CSS pixel layouts preserve all actions;
- SVG has an equivalent text explanation;
- animation respects `prefers-reduced-motion`;
- minimum contrast target is WCAG AA for normal text and controls.

## Comprehension Test Script

Recruit five people who have not seen the project. Do not explain before the
test.

After the first visual field, ask:

1. What is this?
2. What can you do here?
3. What do the words change?
4. When is the number chosen?
5. What happens in 2, 5, and 10 years?
6. Do you receive tokens or status for participating?
7. Must you fill all the word spaces?
8. Did this rehearsal save anything?

Record exact answers. A wrong answer is a copy/design defect to diagnose, not a
participant failure. Revise one confusing unit at a time and rerun with new
people.

## Implementation Handoff Boundary

After operator approval, route a bounded Task Session to implement only the
landing hierarchy, accessible visual equation, and local progressive form.
Production intake, persistence, identity, saved-for-later protection,
deployment, and token effects remain outside that task unless separately
authorized.

