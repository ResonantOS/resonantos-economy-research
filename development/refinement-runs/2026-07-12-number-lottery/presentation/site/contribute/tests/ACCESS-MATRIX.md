# Access And Consequence Protocol — Fixture V2.0.0

This protocol tests whether the short-phrase, public-at-opening candidate is
usable and understandable. It follows `TimeCapsuleFixturesV2` version `2.0.0`.

The current candidate page is a non-collecting preview: it has no server
connection and stores phrases nowhere. Automated fixture results are useful
prechecks, but they do not count as screen-reader, native-IME, RTL
pronunciation, or participant-comprehension evidence.

## The Five Meanings People Must Understand

Participants may use their own words, but every answer must preserve these
meanings:

| ID | Ask | Required meaning |
| --- | --- | --- |
| quota | How many phrases can you leave for each opening? | Up to two short phrases for each of 2, 5, and 10 years. |
| visibility | When can other people read a saved phrase? | It stays out of public view until its opening, then becomes public. |
| preview | Where is a phrase entered on this page stored? | Nowhere; this candidate page has no server connection. |
| number | How does a phrase affect the ritual number? | All accepted places become one shared digital fingerprint. A later Bitcoin block helps place that shared result inside a range agreed in advance. No phrase has its own token value, and this ritual does not mint or allocate tokens. |
| quiet | What happens if you choose the quiet path? | No phrase, receipt, or record is created. |

## Evidence Lanes

Each lane produces its own receipt. Evidence from one lane cannot stand in for
another.

| Lane | Required scenarios | Evidence required | Status before a run |
| --- | --- | --- | --- |
| keyboard | logical focus order; visible focus; first-invalid focus; no keyboard trap; review, edit, quiet, and close paths | manual keyboard traversal; automated checks are prechecks only | unrun |
| screen reader | named horizons and phrase places; errors announced; second place unlock announced; review, acknowledgements, preview receipt, and quiet path understandable | manual screen-reader/browser traversal | unrun |
| RTL/bidi | Arabic editing; mixed-direction isolation; review pronunciation order | manual pronunciation/order check; automated `<bdi dir="auto">` check is a precheck only | unrun |
| native IME | no validation during composition; candidate selection preserved; validation after composition; value preserved in error and review | manual run with a native input method | unrun |
| participant retell | quota; future-public visibility; preview boundary; number method; quiet path | five people answer all five prompts without coaching | unrun |

## Access-Mode Run

Use invented phrases only. Before starting, record the page/fixture version and
the browser, operating system, and relevant assistive technology or input
method version.

For keyboard, screen-reader, and RTL/bidi evidence, follow one complete journey:

1. Reach all three horizons and their first phrase places in logical order.
2. Enter an invented phrase and confirm that its second place becomes available.
3. Trigger one validation error and confirm that focus and announcement reach it.
4. Review all six places, including quiet ones, and verify mixed-direction text
   is isolated and pronounced in a meaningful order.
5. Find and understand both consequence acknowledgements and the preview receipt.
6. Edit after review, take the quiet path, and exercise the closed-state path.
7. Confirm visible focus, no keyboard trap, and no unexpected phrase, receipt,
   or record after the quiet path.

For native IME evidence, complete a candidate-selection composition before the
160-grapheme rule runs. Confirm the final candidate survives validation, errors,
and review. Never record the phrase used.

If a required scenario fails, mark that lane failed, describe the divergence
without copying the phrase, route a repair, and rerun the complete affected
lane. Do not convert an automated precheck into a manual pass.

## Five-Person Consequence Retell

Use anonymous session labels `P1` through `P5`. Ask the five questions in “The
Five Meanings” without coaching or showing the required answer. Record only
whether the meaning was preserved.

| Participant | quota | visibility | preview | number | quiet | Result |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | unrun | unrun | unrun | unrun | unrun | unrun |
| P2 | unrun | unrun | unrun | unrun | unrun | unrun |
| P3 | unrun | unrun | unrun | unrun | unrun | unrun |
| P4 | unrun | unrun | unrun | unrun | unrun | unrun |
| P5 | unrun | unrun | unrun | unrun | unrun | unrun |

Pass requires all 25 critical cells to pass without coaching. Any failed or
missing cell blocks the comprehension gate. Repair the contract or interaction,
then rerun the full five-person protocol; do not average away a
misunderstanding.

## Non-Sensitive Receipt Template

Create one receipt per evidence lane with only:

- date and operator;
- candidate page and fixture version;
- browser, operating system, and relevant assistive technology or input method
  with versions;
- scenario or prompt IDs and pass/fail;
- observed divergence and repair needed;
- rerun reference, when applicable.

Do not record participant phrases, names, contact details, accessibility or
medical details, screenshots containing entered phrases, or unrelated personal
information.

## Promotion Rule

This document is ready when it matches fixture V2.0.0; that is not a human
evidence pass. The manual lanes remain `unrun` until their real, mode-specific
receipts exist. No L2 promotion or real intake may treat an incomplete lane as
passed.
