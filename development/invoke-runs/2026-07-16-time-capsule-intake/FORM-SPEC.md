# Time Capsule Word Form Specification

Status: settled candidate form contract; not connected to intake

## Form Promise

One form holds six optional places: two for the 2-year opening, two for the
5-year opening, and two for the 10-year opening. Each accepted place becomes one
record in the founding capsule. Every place is optional and has equal weight in
the record—no word is worth a fixed number of tokens.

## Steps

### Step 0 — Welcome

Show:

- why there are three openings;
- the `0–2 per opening / 0–6 total` rule;
- how the locked whole capsule shapes one supply;
- public-now, sealed-until-release, and quiet outcomes;
- current close date and edit rights;
- non-effect on allocation, rank, reward, membership, and governance.

### Step 1 — Admission

Input: opaque credential from invitation link or code.

Server response:

```yaml
status: valid | invalid | expired | already-closed | help-required
cohort_id: public handle when valid
envelope_ref: private session handle
rules_version: immutable public handle
close_at: timestamp
```

Do not expose whether another person's credential exists. Rate-limit failed
attempts. Do not publish credential or envelope references.

### Step 2 — Horizon Editor

Render identical fieldsets for `2y`, `5y`, and `10y`.

Each fieldset contains:

| Field | Type | Required | Rules |
| --- | --- | --- | --- |
| word 1 | Unicode token | no | Must validate before word 2 enables. |
| word 1 visibility | radio | when word 1 filled | `public-now` or `sealed-until-release` |
| word 2 | Unicode token | no | Requires a valid word 1. |
| word 2 visibility | radio | when word 2 filled | same modes |

Do not create a “skip” record. The empty fieldset itself is a valid quiet choice.

### Step 3 — Review

For all six places, show:

- horizon and slot;
- empty or normalized word preview;
- public-now or saved-for-opening label;
- exact consequence sentence;
- edit link.

Also show the whole-capsule explanation and close deadline.

### Step 4 — Confirm

Required acknowledgements:

1. Public words may be visible from confirmation and preserved long-term.
2. A saved word is not promised anonymity, deletion, or recovery; the enabled
   sealed profile states its exact guarantees.
3. At the matching opening, sealed display requires another confirmation; no
   answer keeps it sealed.
4. Accepted records shape the founding capsule as a whole; no word has a fixed
   token value.
5. Participation creates no allocation, rank, reward, membership proof, or
   governance power.
6. Edits end at the published close time.

### Step 5 — Receipt

Private receipt:

```yaml
cohort_id: string
rules_digest: hex
confirmation_version: integer
confirmed_at: timestamp
close_at: timestamp
slots:
  - horizon: 2y | 5y | 10y
    slot: 1 | 2
    state: confirmed
    mode: public-now | sealed-until-release
    record_commitment: hex
edit_handle: private link or recovery instruction
```

The receipt proves that the service accepted a version under a credential. It
does not prove identity, final inclusion, confidentiality, fairness, or token
allocation. A close-time inclusion receipt follows later.

## Client Validation

Run the same checks client- and server-side:

1. normalize to NFC;
2. trim leading/trailing whitespace;
3. reject remaining whitespace, line breaks, controls, and invisible format controls;
4. count 1–32 extended grapheme clusters;
5. allow letters/marks across scripts plus internal apostrophe or hyphen;
6. require slot 1 before slot 2;
7. require one visibility choice per filled slot;
8. reject a visibility choice on an empty slot;
9. cap confirmed records at two per horizon;
10. show, never hide, the normalized value that will be confirmed.

The exact character-category implementation must be fixture-driven; it must not
silently reject a script because a browser regex lacks Unicode support.

## Server Invariants

```text
credential maps to at most one active envelope per cohort
confirmed records per envelope/horizon <= 2
confirmed records per envelope/all horizons <= 6
new confirmation supersedes prior envelope version atomically
close_at rejects all mutations at or after the frozen instant
manifest consumes latest confirmed accepted slots only
credential_ref never enters public capsule record
sealed plaintext never reaches server in an approved sealed profile
```

## Error Copy

| Condition | Copy |
| --- | --- |
| invalid credential | “This invitation did not open the capsule. Check the link or ask the capsule team for help.” |
| invalid word | “Keep this to one word, without spaces. Apostrophes and hyphens are welcome.” |
| too long | “This word is longer than the capsule can hold. Try 32 characters or fewer.” |
| slot 2 first | “Begin with the first place, then add another word if you want one.” |
| visibility missing | “Would you like this word to be visible now or saved for that opening?” |
| close reached | “The capsule is closed. Your last confirmed version is the one we kept.” |
| sealed unavailable | “Saving a word for later is not ready yet. We will not accept it until the protection has been tested.” |

## Privacy And Storage Boundaries

- L0 wireframe: no network, database, analytics, local storage, or real credentials.
- L1 synthetic/public test: invented data only; public path may be exercised.
- Real public intake: requires admission, moderation, retention, and incident owners.
- Real sealed intake: additionally requires approved client-side cryptography,
  custody, recovery, migration, deletion/display, and no-survivor behavior.
- Analytics must never capture word fields, commitments, credentials, or receipts.

## Form Acceptance Checklist

- [ ] Three horizon fieldsets are present and chronologically ordered.
- [ ] Each fieldset contains exactly two optional word slots.
- [ ] Word 2 depends on word 1; more than two cannot be added.
- [ ] Visibility is per word and has no silent default.
- [ ] Empty horizons complete successfully.
- [ ] Review shows all six places and normalized values.
- [ ] Confirm captures six boundary acknowledgements.
- [ ] Receipt contains no public credential identifier.
- [ ] Closing is atomic and fail-closed.
- [ ] Public explanation connects the whole capsule—not letters—to the number.
- [ ] Release-time reconfirmation does not alter root or supply.

