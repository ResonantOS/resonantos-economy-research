# Mechanism Clarity Design — From Word To Number

Status: `candidate`

## Design Correction

The prior page made the time capsule easy to feel but left the transformation
abstract. The corrected experience must **show the mechanism before asking for
words**.

Selected hierarchy: **Visible Transformation First**.

```text
What is this?
  A community time capsule.

What is confusing?
  How a word can affect a token number.

What must be shown?
  word -> record -> fingerprint -> later public value -> range result

What happens after understanding?
  optional participation -> future returns
```

## First Visual Field

```text
┌ Preview · invented words only · nothing leaves this browser ──────────┐
│ A TIME CAPSULE FOR RESONANTDAO                                        │
│                                                                       │
│ How does a word reach the number?                                     │
│                                                                       │
│ A word gets no token value by itself. It becomes one record in the    │
│ capsule. All records create one fingerprint. After closure, that      │
│ fingerprint and a new public value select one number inside the       │
│ range chosen before we began.                                         │
│                                                                       │
│ WORD → RECORD → CAPSULE FINGERPRINT + LATER PUBLIC VALUE → NUMBER     │
│                                                                       │
│ [See one word move through it]                                        │
└───────────────────────────────────────────────────────────────────────┘
```

The 2/5/10-year return story follows immediately after this field. It remains
important, but it no longer interrupts the causal answer.

## The Four Visible Steps

### 1. A word becomes a record

The interface shows a concrete public-word example:

```text
word: resonance
returns in: 5 years
place: first word
visibility: visible with the capsule
```

Plain explanation:

> We save more than the spelling. The return year and its place travel with
> the word, so everyone can rebuild the same final capsule.

The default view does not show schema names. “See exact record” may reveal the
candidate canonical record for technical readers.

### 2. Every record changes the capsule fingerprint

The example record joins a small, clearly invented fixture capsule. The page
computes each record hash and the capsule root with the candidate public rules.

Plain explanation:

> The computer turns the complete, ordered capsule into one long number. We
> show it as a short fingerprint. Change one word and the fingerprint changes.

The visual shows shortened hexadecimal only after naming it as a long number.
It never calls the fingerprint encryption or privacy.

### 3. A later public value joins after closure

The example first shows a locked capsule with the final result unavailable:

```text
CAPSULE FINGERPRINT  8b1e…3f90
LATER PUBLIC VALUE   waiting
FINAL NUMBER         not knowable yet
```

Then a button—“Use the invented future value”—adds a fixed fixture value.

Plain explanation:

> The public source is chosen before contributions begin, but its value arrives
> only after the capsule is locked. This stops anyone from choosing or changing
> words after seeing the final answer.

The production source remains unselected. The interface says “invented future
value” in every fixture state.

### 4. The public rule selects one number inside the agreed range

The demonstration declares a small toy range before revealing the fixture
result:

```text
EXAMPLE RANGE         1,000–9,999
CAPSULE FINGERPRINT   [computed shortened value]
FUTURE VALUE          [computed shortened value]
EXAMPLE RESULT        [computed fixture result]
```

Plain explanation:

> The same public rule turns those inputs into one whole number inside the
> range chosen before anyone contributed.

The result must be computed from the published fixture with the candidate
mapping algorithm. Decorative or manually invented hash/result values are not
allowed in implementation evidence.

## Transformation Explorer

### Purpose

Turn an abstract cryptographic pipeline into a visible cause-and-effect
experience without pretending to run the real founding ceremony.

### Interaction

1. Starts with the invented word `resonance`.
2. Shows its plain record.
3. Shows a fixed invented community fixture plus that record.
4. Computes and shows the capsule fingerprint.
5. Stops at `waiting` for the later value.
6. “Use invented future value” computes a toy range result.
7. “Compare a different word” creates a second hypothetical capsule; it does
   not edit the already closed first example.
8. “See what changes” computes the second record, fingerprint, and toy result.
9. The comparison highlights changed stages; all other invented records, the
   range, and the future value stay fixed.

### Lesson

The person should discover:

- the word changes the record;
- the record changes the capsule fingerprint;
- the later public value is needed before the result exists;
- the fixed range does not move;
- the word has no fixed or personal token value.

### Accessible Behavior

- The pipeline is a semantic ordered list before it is an SVG.
- An SVG may connect stages visually but cannot own unique text.
- Recalculation occurs only after the explicit “See what changed” action, not
  on every keystroke.
- A polite live region announces: “In the comparison, only the word changed.
  The capsule fingerprint and example result changed. The range and future
  value did not.”
- Full inputs and shortened outputs are available in a details element.
- Color is not the only indication of a changed stage.
- Reduced-motion users see a direct state replacement.

## Progressive Disclosure Layers

### Layer 1 — everyone sees

```text
word -> record -> fingerprint + later public value -> number in the range
```

### Layer 2 — interactive example

Actual local computation using invented records, an invented later value, and
an invented range.

### Layer 3 — proof details

- exact canonical record bytes;
- record hashes;
- ordered leaves;
- capsule root;
- rules digest;
- later-value fixture;
- range and mapping steps;
- reproduction link.

The layers add proof without changing the story.

## Copy/Component Map

| Component | Single job | Must not do |
| --- | --- | --- |
| MechanismHero | Ask and answer how words reach the number. | Lead with future nostalgia alone. |
| CausalPipeline | Show all five causal nodes in order. | Collapse record, fingerprint, and final number. |
| TransformationExplorer | Let one word visibly change downstream computed states. | Imply a real token result. |
| TimingLock | Explain why the later value arrives after closure. | Claim a provider is selected or perfectly independent. |
| RangeMapper | Show that the range is fixed first. | Teach modulo/rejection-sampling detail in the default view. |
| TimeCapsuleBridge | Return to 2/5/10-year meaning after mechanism clarity. | Suggest openings recalculate the supply. |
| ParticipationCTA | Invite a rehearsal after the explanation. | Force a word or imply personal reward. |

## Form Integration

The progressive form remains Words → Choices → Review, but its entry changes:

1. mechanism hero;
2. transformation explorer;
3. one-sentence time-capsule bridge;
4. form CTA.

Inside Step 1, the first filled word gains a small inline record preview:

> This word would enter as: **5 years · first place · visible**

Do not show or recompute the full capsule fingerprint inside every input. That
would overload the form and confuse a personal draft with the collective final
capsule.

At review, show:

> Your words would become records in the final capsule. They do not produce a
> personal number. The founding number comes from the capsule as a whole after
> it closes.

## Responsive Direction

- Desktop: pipeline is horizontal; the explorer places word/record left and
  fingerprint/range right.
- Mobile: pipeline becomes a vertical numbered sequence with arrows; no
  horizontal scrolling.
- The first screen must contain the question, four-sentence answer, and full
  five-node pipeline at 1366×768 without body text below 18 CSS pixels.
- The explorer may begin below the fold; the causal chain may not.

## Comprehension Gate

After first view, ask without prompting:

1. Does one word receive its own token amount?
2. What happens to a word first?
3. What is the capsule fingerprint made from?
4. Why does a public value arrive later?
5. When is the possible range chosen?
6. What changes if one word changes?
7. Do the 2/5/10-year openings choose new numbers?

Pass threshold:

- 5/5 answer question 1 with “no”;
- 4/5 correctly retell record → whole-capsule fingerprint → later value →
  range result;
- 4/5 explain that the later value prevents knowing the final answer while
  word choices remain open;
- 5/5 say later openings do not recalculate the number.

No layout or author review can satisfy this gate.
