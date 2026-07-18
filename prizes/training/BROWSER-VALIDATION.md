---
to: workshop facilitator and reviewers
from: bounded Task Session browser validation
re: "Real-browser behavior of the projected workshop surface"
date: 2026-07-13
status: flag — navigation and layout pass; one console-cleanliness residue remains
---

# Presentation Browser Validation

This record covers `presentation.html` in a real Chromium browser. It is
implementation evidence for the projected surface only. It does not validate
the workshop's teaching result, any contribution mechanism, any bet, or any
policy decision.

## Verdict

**Flag.** Navigation, direct hashes, endpoint bounds, title/progress state,
desktop layout, mobile layout, vertical scrolling, and projected-surface
separation passed. A clean HTTP launch logged one console error because the page
requested `/favicon.ico` and the local server returned 404. No JavaScript page
errors, failed runtime requests, or console warnings were observed.

The missing favicon does not falsify the navigation or layout results, but the
predeclared B8 condition was “no browser console errors.” It therefore stays
visible rather than being relabeled as a pass.

## Environment

| Field | Value |
| --- | --- |
| Date | 2026-07-13 |
| URL | `http://127.0.0.1:8765/prizes/training/presentation.html` |
| Server | Python `http.server`, bound to `127.0.0.1:8765` |
| Browser | Playwright Chromium headless shell |
| Desktop viewport | 1440 × 900 CSS pixels |
| Mobile viewport | 390 × 844 CSS pixels |
| Session | `training-browser` |

The first launch requested the system Chrome channel and failed because
`/opt/google/chrome/chrome` is absent. The run then used Playwright Chromium.
That setup failure is environment residue, not presentation evidence.

## Obligation Results

| ID | Result | Evidence |
| --- | --- | --- |
| B1 — initial render | pass | one active slide; slide `01`; hash `#1`; matching title; previous disabled; next enabled; progress `5.55556%` |
| B2 — button navigation | pass | Next moved `#1 → #2`; Previous moved `#2 → #1` |
| B3 — keyboard navigation | pass | Arrow Right/Left, Page Down/Up, Space, Home, and End reached the expected slides |
| B4 — direct links | pass | a fresh load at `#8` rendered only `08 · Core correction` |
| B5 — endpoint bounds | pass | previous disabled at slide 1; next disabled at slide 18; Arrow Right at 18 remained at 18 |
| B6 — desktop layout | pass | all 18 slides had zero document, active-slide, and content horizontal overflow; no active descendant escaped the 1440 × 900 viewport |
| B7 — mobile layout | pass | all 18 slides had zero document, active-slide, and content horizontal overflow; slide 5 exposed a usable 50 px vertical scroll range |
| B8 — surface and console | **flag** | 18 projected slides, one active slide, zero note selectors, and zero forbidden authoring-language hits; zero page errors; one `/favicon.ico` 404 console entry |

Coverage: all 8 obligations were exercised. Seven pass and one is flagged.

## Navigation Trace

| Action | Resulting slide | Hash and controls |
| --- | --- | --- |
| initial load | 01 — Fixed premise | `#1`; previous disabled |
| Next button | 02 — Workshop posture | `#2` |
| Previous button | 01 — Fixed premise | `#1` |
| Arrow Right / Arrow Left | 02 / 01 | matching hash and title |
| Page Down / Page Up | 02 / 01 | matching hash and title |
| Space | 02 | `#2` |
| Home | 01 | `#1` |
| End | 18 — Close | `#18`; next disabled |
| Arrow Right at endpoint | 18 — Close | remained at `#18` |
| direct load | 08 — Core correction | `#8`; both controls enabled |

## Layout Trace

At 1440 × 900, every slide reported:

- exactly one active slide;
- `documentOverflowX = 0`;
- `slideOverflowX = 0`;
- `contentOverflowX = 0`;
- no active descendant outside the viewport.

At 390 × 844, every slide reported the same zero-horizontal-overflow result.
Slide 5 was the only slide taller than the viewport in this run:
`scrollHeight = 894`, `clientHeight = 844`, `overflowY = auto`. Setting it to
the bottom reached `scrollTop = 50`, so the overflow was accessible rather than
clipped.

## Projected-Surface Boundary

The browser DOM contained 18 `.slide` elements, exactly one `.slide.active`, and
no `aside`, `.speaker-notes`, `.notes`, or `[data-speaker-notes]` elements. A
case-insensitive scan found none of the authoring/facilitator markers `Spoken
Copy`, `Facilitation note`, `Correction Trace`, `operator-approved`, `authoring
metadata`, `Source Map`, or `Whisper Result`.

## Console Trace

The Playwright console reported:

```text
[ERROR] Failed to load resource: the server responded with a status of 404
        http://127.0.0.1:8765/favicon.ico
```

A reload instrumented for `pageerror`, `requestfailed`, and HTTP error responses
reported no new entries; the browser had already cached the favicon result. The
clean-launch error remains the controlling evidence.

## Screenshots

- `output/playwright/contribution-mechanisms-desktop-slide-01.png`
- `output/playwright/contribution-mechanisms-desktop-slide-08-settled.png`
- `output/playwright/contribution-mechanisms-desktop-slide-14.png`
- `output/playwright/contribution-mechanisms-mobile-slide-05-top.png`
- `output/playwright/contribution-mechanisms-mobile-slide-14.png`

All five listed captures were inspected. The slide-8 artifact was captured only
after the 220 ms transition settled; a mid-transition diagnostic capture is not
part of the evidence set.

## Reproduction Route

```bash
python3 -m http.server 8765 --bind 127.0.0.1
"$HOME/.codex/skills/playwright/scripts/playwright_cli.sh" \
  -s=training-browser open \
  http://127.0.0.1:8765/prizes/training/presentation.html#1 \
  --browser chromium
"$HOME/.codex/skills/playwright/scripts/playwright_cli.sh" \
  -s=training-browser resize 1440 900
"$HOME/.codex/skills/playwright/scripts/playwright_cli.sh" \
  -s=training-browser console error
```

The detailed navigation and all-slide geometry checks used Playwright
`run-code` against the live page and are summarized above; no Playwright test
file or project dependency was added.

## Residue And Next Route

1. Add an explicit favicon response or embed a data favicon, then repeat the
   clean-launch console check if a console-clean pass is required.
2. Keep the first live-cohort trial independent. Browser behavior supplies no
   evidence that trainees learn the harness.

