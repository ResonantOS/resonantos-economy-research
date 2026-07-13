# Resonant Time Capsule — Hostable Site Validation

Status: pass
Package: `site/`
Local preview: `http://127.0.0.1:4173/`
Validated: 2026-07-12

## Package Contract

```text
site/
├── index.html
├── idea/
│   └── index.html
├── assets/resonant-time-capsule-poster.png
├── README.md
├── .nojekyll
└── _headers
```

- No build command.
- No package manager.
- No JavaScript.
- No external fonts, scripts, stylesheets, or images.
- The homepage links to `idea/`; the full-idea page links back with `../`.
- Section navigation uses internal anchors.
- Poster path is relative to the package root.
- The hosted package does not depend on the Markdown research source.
- `.nojekyll` supports direct GitHub Pages publication.
- `_headers` provides security headers on hosts that support the convention.

## Browser Validation

Browser: Playwright CLI using cached Firefox.

### Desktop

- Viewport: 1280 × 720.
- Homepage `Read the full idea` control navigates to `/idea/`.
- Homepage word-to-number explanation renders as four ordered stages: word,
  locked capsule, later public number, and founding supply.
- All four explanation cards render at equal width with no horizontal overflow.
- Complete `How it works` section is 798px tall at 1920px viewport width,
  reduced from 1,279px, and fits inside one 1920×1080 capture.
- Single-image capture: `how-it-works-one-image.png` (1180×798).
- Participation close uses invitation language rather than prohibition language:
  `Offer a word when it feels right` and `Silence still keeps you in the circle`.
- Participation invitation cards use rounded, centered styling instead of
  warning-like left rules.
- Invitation cards use a deeper amber-brown field and 52%-opacity warm border;
  the foreground remains high-contrast cream (`rgb(255, 240, 215)`).
- The complete homepage uses a burnished amber palette: `#c47d2c` for core
  accents, `#e5a84f` for brighter accents, and stronger 42%-opacity amber lines.
- Page-wide text contrast is increased with `#fff1dc` primary cream and
  `#ded2bf` secondary cream over darker, more opaque panels.
- Caption-to-declaration spacing is 116px and declaration-to-next-section
  spacing is 72px at the 1920px desktop check; the declaration is 396px tall.
- Full-idea page title: `The Full Idea — Resonant Time Capsule`.
- Full-idea document width: 1280; no horizontal overflow.
- Image loaded from `assets/resonant-time-capsule-poster.png` at the expected
  1672px natural width.
- All eight full-idea section links resolve to existing anchors.
- Both full-idea back links resolve to the homepage.

### Mobile

- Viewport: 390 × 844.
- Document width: 390; no horizontal overflow.
- Poster width: 364, equal to the content width.
- Word-to-number explanation becomes one vertical sequence with downward arrows;
  all four cards remain within the 390px viewport.
- Both participation invitation cards stack at 364px wide with no overflow.
- Caption-to-declaration spacing is 88px and declaration-to-next-section
  spacing is 44px at the 390px mobile check.
- No full-idea element extends outside the viewport.

### Runtime

- Homepage response: HTTP 200/304.
- Full-idea response: HTTP 200/304.
- Image response: HTTP 200/304.
- Console errors: 0.
- Console warnings: 0.

## Publication Boundary

The packaged page keeps the public boundary visible: the project is an early
idea, the token supply has not been selected, no real words are being collected,
and the number-selection, sealed-content, and ten-year-care assumptions still
need to be tested.
