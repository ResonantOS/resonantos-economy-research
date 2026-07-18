# UX Plan — Leave A Message For A Future Opening

Status: pass for implementation

## User Goals

| Goal | Actor | Success Signal |
| --- | --- | --- |
| Understand what happens without reading a protocol. | participant | Can retell “hidden until the date, public when opened.” |
| Leave a personal or communal phrase without pressure. | participant | Writes one phrase or takes the quiet exit. |
| Use no more than two places per opening. | participant | Cannot create a third place; second place is clearly optional. |
| Know how phrases affect the number. | participant | Retells “the whole capsule becomes one fingerprint.” |
| Review before confirming. | participant | Sees normalized six-place projection and consequences. |

## Actors

| Actor | Needs | Constraints |
| --- | --- | --- |
| invited participant | meaning, calm, clear public consequence | no technical knowledge assumed |
| keyboard/screen-reader participant | semantic grouping, focus and errors | no visual-only state |
| intake implementation owner | stable draft and adapter contract | preview cannot imply persistence |

## Journey

| Start | Action | End |
| --- | --- | --- |
| invitation/form entry | understand the one-paragraph ritual | ready to write or leave quietly |
| editor | fill 1–2 phrases in any horizon | valid draft |
| valid draft | review inline | exact consequence projection |
| review | acknowledge and confirm | preview receipt |
| review/receipt | edit | draft, with old projection invalidated |

## Surfaces

- Compact ritual header.
- One six-place form.
- Inline errors and used-place summaries.
- Inline review/consent panel.
- Preview receipt.
- Quiet exit.

## State Model

| State | Meaning | Transition | Failure |
| --- | --- | --- | --- |
| empty | no contribution | type or quiet exit | review explains one phrase is required |
| editing | draft changed | review | per-field error and focus |
| review | normalized projection frozen in memory | edit or confirm | missing acknowledgement disables confirm |
| receipt | preview confirmation complete | edit/reset | never says saved |
| closed | deadline reached | view boundary | all mutations fail closed |

## Content Requirements

- “A short message” rather than “the right word.”
- “Public when this opening arrives” beside every horizon.
- “Your phrase changes the shared fingerprint; it does not equal tokens.”
- “Preview only—nothing is sent or saved” in every terminal state.
- Exact close copy: Monday July 20, 21:00 São Paulo / Tuesday 00:00 UTC.

## Accessibility

- Native fieldsets, legends, labels and buttons.
- Error summary plus associated per-field errors.
- 44px minimum interactive targets and visible focus.
- Unicode/IME-safe input events and `bdi dir=auto` review output.
- No horizontal overflow at 360px; reduced-motion honored.
- Character counts are advisory and announced without interrupting composition.

## Acceptance Signals

- At least one phrase is required for review; zero creates no record.
- Six fields exist, but each second place starts disabled.
- All review phrases are normalized and safely text-rendered.
- Future-public consent is explicit.
- Preview produces zero interaction requests and empty browser storage.

## Handoff Boundaries

- Architecture: this run.
- Implementation: four sequential SWUs in `WORK-PACK.md`.
- API/database: deferred to the selected Node/TypeScript/SQLite work-pack.
- Deployment: not authorized by this form slice.

