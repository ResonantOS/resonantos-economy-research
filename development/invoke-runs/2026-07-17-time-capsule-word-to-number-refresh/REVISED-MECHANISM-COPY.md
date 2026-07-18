# Revised Web Copy — How Words Reach The Number

Status: `candidate`; proposal-only replacement sections

## Metadata Replacement

**Title**

Resonant Time Capsule — How words shape the starting number

**Description**

See how every accepted word becomes a capsule record, changes the capsule's
digital fingerprint, and helps select ResonantDAO's starting token number.

## Hero Replacement

**Eyebrow**

A time capsule for ResonantDAO

**Heading**

How does a word reach the number?

**Lead**

A word does not receive a token value. It becomes one record in the capsule.
When the capsule closes, all its records become one digital fingerprint. That
fingerprint and a new public value then select one number inside the range
chosen before anyone contributed.

**Timing line**

Change one word and the capsule fingerprint changes. But the final number
cannot be known until the later public value arrives.

**Primary action**

See one word move through it

**Secondary action**

Try the capsule

## Causal Pipeline

**Accessible heading**

From one word to the starting number

### 1. Your word

`resonance`

### 2. Its capsule record

`5 years · first word · visible`

**Explanation**

The word travels with its return year and place in the capsule.

### 3. The whole-capsule fingerprint

Made from every final record—not only yours.

**Explanation**

We do not count letters or add word scores. The complete ordered capsule is
turned into one long number, shown as a shorter digital fingerprint.

### 4. A later public value

Arrives only after the capsule is locked.

**Explanation**

Until this value arrives, nobody can know the final number while words are
still being chosen.

### 5. The starting token number

One number inside the range agreed before contributions began.

**Pipeline caption**

Your word changes the fingerprint of the whole capsule. It never equals a fixed
amount of tokens by itself.

## Transformation Explorer

**Eyebrow**

Invented example · computed in this browser

**Heading**

Change one word. See what follows.

**Introduction**

This rehearsal uses invented records, an invented future value, and an invented
range. Nothing here is ResonantDAO's real supply.

### Input

**Field label**

Example word

**Default value**

resonance

**Horizon label**

Returns in 5 years

**Slot label**

First word

**Action**

Build the example capsule

### Record state

**Heading**

The word becomes one record

**Plain record label**

5 years · first word · visible · “{word}”

**Fixture note**

It joins {fixture_count} other invented records.

**Technical details label**

See the exact record used in this example

### Fingerprint state

**Heading**

All records become one capsule fingerprint

**Fingerprint label**

Example capsule fingerprint

**Short value**

{computed_short_root}

**Helper**

This fingerprint belongs to the complete example capsule, not to one person.

### Waiting state

**Heading**

The capsule is locked. The final number is still unknown.

**Rows**

- Capsule fingerprint: {computed_short_root}
- Later public value: waiting
- Starting number: not available yet

**Body**

The words can no longer change. The invented future value has not arrived, so
the example has no final number yet.

**Action**

Use the invented future value

### Result state

**Heading**

Now the public rule can select the example number.

**Rows**

- Example range: {example_min}–{example_max}
- Capsule fingerprint: {computed_short_root}
- Invented future value: {computed_short_future_value}
- Example result: {computed_example_result}

**Body**

The range was fixed first. The capsule fingerprint and later value now point to
one whole number inside it.

**Truth label**

Example only · not a proposed or real token supply

### Comparison action

**Heading**

What if one word had been different?

**Body**

Compare a second possible capsule. Every other invented record, the future
value, the range, and the public rule will stay the same.

**Field label**

Different example word

**Action**

See what changes

### Comparison result

**Heading**

One different word, a different capsule fingerprint.

**Rows**

- First word: {baseline_word}
- First fingerprint: {baseline_short_root}
- First result: {baseline_result}
- Different word: {comparison_word}
- Different fingerprint: {comparison_short_root}
- Different result: {comparison_result}

**Body**

Only the word changed in this comparison. That changed its record, the
fingerprint of the complete capsule, and the example result. The future value
and range did not change.

**Timeline correction**

This compares two possible capsules. In the real process, words are locked
before the later public value arrives and cannot be edited afterward.

**Screen-reader announcement**

In the comparison, only the word changed. The capsule fingerprint and example
result changed. The range and future value did not.

## Time Capsule Bridge Replacement

**Heading**

One number is chosen. The words keep travelling.

**Body**

The number is selected once after the capsule closes. The words remain in the
time capsule and return to the community in 2, 5, and 10 years. Those openings
do not choose new numbers.

**Participation invitation**

If you want, leave up to two words for each return—or leave any space quiet.

**Primary action**

Try it with invented words

## Form Step 1 Addition

Show this only after a word is entered.

**Record preview label**

This word would enter as:

**Record preview value**

{horizon} years · {slot_label} · {visibility_label}

**Helper**

It would join every other accepted record before the capsule fingerprint is
made.

## Review Addition

**Heading**

How these words would affect the number

**Body**

Each accepted word would become one record in the final capsule. Together, all
final records would create the capsule fingerprint. Your words would not
produce a personal number or give you a fixed amount of tokens.

## Rehearsal Receipt Replacement

**Heading**

What the real mechanism would do next

**Body**

After contributions close, every accepted word would become a final capsule
record. The complete ordered capsule would become one digital fingerprint.

Only then would the declared public source produce its new value. The public
rule would use the fingerprint and that later value to select one number inside
the range frozen before contributions began.

The number would be selected once. The words would return in 2, 5, and 10
years without changing it.

## Technical Proof Disclosure

**Collapsed label**

See the exact public computation

**Introduction**

The plain explanation and the proof describe the same steps:

```text
canonical records
  -> record hashes
  -> ordered capsule root
  + frozen rules
  + later public value
  -> deterministic range mapping
  -> one integer inside [minimum, maximum]
```

**Boundary note**

The production range, public source, and final mechanism profile are not
selected or approved by this preview. The candidate algorithm still requires
independent fixture reproduction before real use.

## Error And Disabled States

**Example computation unavailable — heading**

This browser could not compute the example.

**Example computation unavailable — body**

Nothing was sent or saved. You can still read every step, but this browser did
not produce the invented fingerprint and result.

**Invalid comparison word**

Use one example word that fits the rehearsal rules.

**Same comparison word**

Choose a different word to see which later stages change.

## No-Script Addition

**Heading**

Read the chain without the computed example

**Body**

Every accepted word becomes a capsule record. Every final record changes the
capsule fingerprint. After closure, that fingerprint and a later public value
select one number inside the range chosen in advance. Enable JavaScript to run
the invented comparison in this browser.

