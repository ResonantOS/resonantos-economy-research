# Browser Validation — SWU-LIR-001

Status: `pass` for the non-collecting simulator contract

Date: 2026-07-17

Browser: Playwright Firefox. The default Playwright CLI Chrome channel was not
installed, so the run recovered with the available managed Firefox runtime.

Local URL: `http://127.0.0.1:8127/contribute/`

## Static Contract

- HTML parser: pass.
- JavaScript syntax: pass.
- Unique IDs and label targets: pass.
- Six slots, six word inputs, six disabled sealed controls, and six
  acknowledgements: pass.
- Form action/method absent: pass.
- Source scan for network, navigation, cookie, storage, cache, and service-worker
  APIs: pass.
- Trailing whitespace and diff whitespace: pass.

## Browser Scenarios

| Scenario | Evidence | Verdict |
| --- | --- | --- |
| initial state | first places enabled; second places disabled; sealed controls disabled | pass |
| Enter key | Enter inside a word input leaves the URL unchanged and sends nothing | pass |
| invalid word | `two words` produces an inline error and focuses the invalid field | pass |
| conditional slot | valid place 1 unlocks place 2; clearing/reset locks it again | pass |
| public choice | no default; explicit choice becomes `Public · pending review` | pass |
| Unicode and bidi | Arabic `صدى` validates and renders inside `<bdi dir="auto">` | pass |
| grammar | hyphenated invented fixture `co-create` validates | pass |
| six-place review | three public fixtures and three quiet places render with exact consequences | pass |
| acknowledgements | six required checks gate the confirm control | pass |
| fake receipt | reports three invented words and states that none left the browser | pass |
| zero-word completion | all six places render `Quiet`; receipt states no record was created | pass |
| fake close conflict | all six inputs disable; review/confirm fails closed; reopening changes memory only | pass |
| refresh | all six values clear; sealed remains disabled | pass |

## Zero-Flow Evidence

- Requests after initial load: only `/contribute/`, `simulator.css`, and
  `simulator.js`.
- Interaction requests: zero.
- URL after invalid, valid, receipt, zero-word, and close flows: unchanged.
- `localStorage`: 0 items.
- `sessionStorage`: 0 items.
- Cookies: empty.
- Console: 0 errors, 0 warnings.
- Simulated receipt: DOM-only and cleared by refresh.

## Layout And Keyboard

- Desktop `1440×900`: scroll width equals client width; no horizontal overflow.
- Mobile `390×844`: scroll width equals client width; no horizontal overflow.
- Smallest visible control height: 44 CSS px.
- Initial keyboard order begins with skip link, home link, and primary preview
  action; focus styling is visible.
- Playwright accessibility snapshot exposes banner, main regions, three named
  horizon groups, six labeled textboxes, radio groups, alert/status regions,
  review region, acknowledgement group, receipt terms, and footer.

Screenshots:

- `output/playwright/time-capsule-swu-lir-001-desktop.png`
- `output/playwright/time-capsule-swu-lir-001-mobile.png`

## Residue

Manual screen-reader/browser combinations, IME composition on native input
methods, and participant retell thresholds belong to `SWU-LIR-002`. This does
not weaken the SWU-LIR-001 result: its done criteria require the semantic and
keyboard simulator contract, not access-matrix completion or live readiness.

