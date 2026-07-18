# Resonant Time Capsule — UX Clarity Architecture

Status: `pass` as a candidate design; `flag` for human comprehension proof

Profile: DomainSpec six-view architecture + UX companion

## Design Intent

Give a first-time visitor one memorable model:

> The capsule chooses one beginning and returns three times.

The page should answer, in order:

1. **What is it?** A community time capsule.
2. **What can I do?** Leave up to two words for each return, or leave space
   quiet.
3. **What do the words do?** All accepted words become one shared pattern that
   helps select the starting token number.
4. **What happens later?** The number stays fixed; the words return in 2, 5,
   and 10 years.

Technical and safety detail remains available, but it cannot compete with these
four answers in the first visual field.

## Source Contracts

| ID | Contract |
| --- | --- |
| SC-01 | The public product name is **Resonant Time Capsule**. “Number Lottery” is a secondary ceremony codename, not the lead. |
| SC-02 | A participant may leave at most two words for each 2, 5, and 10-year horizon. Every slot is optional. |
| SC-03 | All final accepted records produce one shared digital pattern; a later public number combines with it to select one integer inside a range agreed in advance. |
| SC-04 | The initial number is selected once. Later openings return words and do not recalculate the supply. |
| SC-05 | Participation gives no personal token allocation, status, rank, reward, or governance authority. Quiet is unpenalized. |
| SC-06 | Public, saved-for-later, and quiet are different states. Saved-for-later cannot be enabled until its protection and recovery design is approved. |
| SC-07 | The current surface is a non-collecting rehearsal. Nothing leaves the browser. |
| SC-08 | The voice is warm, direct, collective, and voluntary—not procedural, grandiose, or coercive. |

## View 1 — Context

```text
first-time visitor
       |
       v
What is this?  -->  What can I do?  -->  What does it change?
       |                   |                      |
       v                   v                      v
community time       optional words       one shared pattern
capsule              at 2 / 5 / 10y       + later public input
                                                    |
                                                    v
                                           one starting number
                                                    |
                            +-----------------------+------------------+
                            |                                          |
                            v                                          v
                    number stays fixed                    words return at
                                                           2 / 5 / 10y
```

The emotional story and the mechanism story meet at “one shared pattern.” The
page does not ask a person to understand hashes or beacon mechanics before they
can understand the idea.

## View 2 — High-Level Experience Structure

### 1. Persistent Preview Boundary

A narrow bar stays visible above the page:

> Preview · Use invented words. Nothing leaves this browser.

It establishes the current truth once and avoids repeating legalistic warnings
throughout the experience.

### 2. Ten-Second Hero

The hero contains only:

- category: “A time capsule for ResonantDAO”;
- invitation: “What should our future remember?”;
- one-sentence explanation;
- one visual equation;
- one primary action.

The hero does not lead with “lottery,” cryptography, moderation, credentials,
or governance.

### 3. Memorable Visual Equation

```text
YOUR WORDS  +  OUR WORDS
            |
            v
     ONE SHARED PATTERN  +  A LATER PUBLIC NUMBER
                         |
                         v
               ONE STARTING NUMBER

                 2y      5y      10y
                  \       |       /
                   THE WORDS RETURN
```

The visual prevents the two common timing errors: one word is not converted
into a fixed token amount, and the number is not recalculated at each opening.

### 4. One Progressive Form Shell

The form is one stable card with three internal panels:

1. **Words** — the three horizons and optional words;
2. **Choices** — how each non-empty word may be seen;
3. **Review** — the whole contribution and consequence summary.

Only one panel is active. Back and forward preserve volatile browser state.
There is no long form containing every field, mode, warning, and acknowledgement
at the same time.

### 5. Compact Mechanism Disclosure

After the invitation, a closed-by-default disclosure answers “How can words
help choose a number?” in three plain steps. Technical details may link to the
concept page, but are not repeated in the core journey.

### 6. Receipt And Return

The rehearsal ends with a visual capsule receipt: chosen words, intended
horizons, public/quiet state, and a clear “not submitted” mark. The page offers
one next action: start over or read the full idea.

## View 3 — Low-Level Interaction Components

### PreviewBar

Always visible. It is status, not a dismissible promotion. It does not rely on
yellow alone; text and an icon communicate rehearsal state.

### HeroStory

Fields:

```yaml
eyebrow: short category
title: one invitation question
lead: one sentence with action + shared effect + future return
visual_equation: accessible SVG with equivalent text
primary_action: anchors to FormShell
secondary_action: opens mechanism disclosure
```

### StoryEquation

An SVG may draw lines, capsule, and time marks, but every label remains real
text or has a complete text alternative. Animation is optional, respects
reduced motion, and never carries unique meaning.

### FormShell

```yaml
active_panel: words | choices | review | receipt
draft_state: volatile-memory-only
progress_label: "Step n of 3"
heading_focus: moves to panel heading after transition
back: preserves all draft values
next: validates only the current panel
refresh: clears draft
network_requests: none in rehearsal
```

The shell keeps a stable visual anchor. On small screens, it uses document flow
instead of a fixed height so content is never clipped.

### WordsPanel

Three compact horizon rows:

```text
2 YEARS   A first look back        [word] [another word]
5 YEARS   What may still matter    [word] [another word]
10 YEARS  A message to a later us  [word] [another word]
```

- Both inputs are optional.
- The second field is visually secondary but always reachable.
- Character rules and live counts appear only after focus or error.
- Continuing with every field empty is valid and is named “continue quietly.”
- The interface never says “complete all six.”

### ChoicesPanel

Generated only for non-empty words. Each word is shown as a small card with its
horizon and one plain visibility question.

- **Visible with the capsule** — current supported concept.
- **Saved for that future opening** — visible but disabled in the rehearsal;
  no claim of encryption, privacy, or recovery.

If there are no words, this panel becomes a short quiet-state confirmation and
does not display empty controls.

### ReviewPanel

Shows time first, words second, visibility third. It contains a concise
consequence block rather than six disconnected acknowledgements:

1. visible words may become public and remain in the archive;
2. a word brings no personal tokens, rank, or special influence;
3. quiet is welcome and has no penalty.

For a future live form, explicit consent remains required for public content.
The reduction in visual checkboxes does not remove an obligation; it groups
plain-language consequences and gives the final action an unambiguous label.

### MechanismDisclosure

Plain layer:

1. accepted words form one shared digital pattern;
2. after the capsule closes, a public number that nobody could know in advance
   is added;
3. the result lands inside the range agreed before the capsule opened.

Proof layer links to the frozen rules, manifest, root, later public input, and
reproduction receipt. “Digital fingerprint” is allowed here only after “shared
pattern” has established meaning.

## View 4 — State, Trust, And Safety

### Rehearsal State Model

```text
empty draft
  -> words entered or quiet selected
  -> choices assigned to non-empty words
  -> contribution reviewed
  -> simulated close
  -> local receipt

refresh / start over -> empty draft
```

All state remains in page memory. No analytics, fetch, form action, local
storage, session storage, IndexedDB, service worker, or browser history payload
is allowed in the rehearsal.

### Concept States

| State | Meaning | Current rehearsal behavior |
| --- | --- | --- |
| Visible | May be shown with the capsule and archived. | Can be selected with invented words. |
| Saved for later | Intended for a future opening under a separately approved protection profile. | Disabled; explanatory only. |
| Quiet | No word supplied for that place. | Fully supported and unpenalized. |

### Claim Boundary

The design may say that words **help shape** the shared result. It may not say:

- a word has a calculable token value;
- a participant can win or receive tokens;
- secrecy, identity, permanence, fairness, or recovery is guaranteed;
- the proposed mechanism is live;
- comprehension has been proven.

## View 5 — Surface And Delivery

```text
static hosted page
  ├── preview boundary
  ├── semantic HTML story
  ├── accessible SVG equation
  ├── progressive form shell
  ├── local-only state controller
  └── simulated receipt

no server dependency for rehearsal
no collection endpoint
no persistence
no deployment authorized by this design
```

The design recomposes cleanly into a later live application: a future Task
Session can replace only the state/admission/receipt boundaries after their
owners and safety gates are settled. The comprehension architecture does not
depend on a backend choice.

## View 6 — UX Journey And Responsive Behavior

### First Desktop View

```text
┌ Preview: nothing leaves this browser ───────────────────────────────┐
│ A TIME CAPSULE FOR RESONANTDAO                                     │
│ What should our future remember?        [simple visual equation]   │
│ We each may leave a few words...                                    │
│ [Try it with invented words] [How does the number happen?]          │
└──────────────────────────────────────────────────────────────────────┘
```

No content needed for basic comprehension is cut below a full-screen hero.
The hero is compact enough that the beginning of the form is visible on common
desktop viewports.

### Mobile Order

1. preview bar;
2. category, title, lead;
3. compact equation;
4. primary action;
5. form shell.

The equation stacks vertically. Horizon inputs stack only below the horizon
label; the second word remains clearly optional. Controls are at least 44 CSS
pixels high, headings preserve hierarchy, and no horizontal scrolling is
required at 320 CSS pixels.

### Attention Budget

| Moment | One thought | Detail withheld |
| --- | --- | --- |
| Hero | This is a time capsule whose words shape one beginning and return later. | Hashes, moderation, credentials, sealed custody. |
| Words | I can leave up to two words for each return—or leave space quiet. | Visibility rules and final consent. |
| Choices | I decide what may be seen for each word I entered. | Unrelated empty slots. |
| Review | I can see exactly what this version means. | Mechanism internals. |
| Receipt | This rehearsal saved nothing. | Live-system promises. |

## Acceptance Gates

| Gate | Evidence required | Current status |
| --- | --- | --- |
| Ten-second comprehension | 5 first-time participants correctly answer “what is it?” | `pending` |
| Mechanism retell | 4/5 say words combine as a whole, number is chosen once, words return later | `pending` |
| Voluntariness | 5/5 understand all six places are optional and quiet has no penalty | `pending` |
| No reward confusion | 5/5 understand participation gives no personal tokens or rank | `pending` |
| Rehearsal truth | 5/5 understand nothing was submitted or saved | `pending` |
| Accessibility | keyboard, screen-reader, zoom, contrast, reduced-motion, and mobile checks on implementation | `pending` |

The design can pass structure review now. It cannot pass the product
comprehension gate until these tests run on an implementation.

