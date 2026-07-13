# Resonant Time Capsule One-Pager — HTML Validation

Status: pass
Artifact: `index.html`
Primary image: `number-lottery-single-image.png`
Validated: 2026-07-12

## Copy Revision

- Operator correction: initial public copy sounded guided by planning and
  mechanism language.
- Revised sequence: pick the range → add your word → lock the capsule → get the
  number → open it again.
- Removed public-facing phrases such as “candidate initial supply,” “founding
  record freezes,” and “explicit verification gates.”
- Desktop and mobile cards were rechecked after the rewrite; no text overflow.

## Static Checks

- Dependency-free HTML and inline CSS.
- One local image with explicit dimensions and descriptive alt text.
- Inline data favicon; no separate favicon request required.
- Semantic header, main, sections, articles, headings, figure, and footer.
- Keyboard focus visibility and reduced-motion handling present.
- Public boundary copy states that the concept is in development, no supply has
  been selected, and no contributions are being collected.
- `git diff --check`: pass.

## Browser Checks

Browser: Playwright CLI with cached Firefox.

### Desktop

- Viewport: 1280 × 720.
- Document width: 1280; no horizontal overflow.
- Image loaded: 1672 × 941 natural dimensions.
- Console errors/warnings: 0.
- Page and image requests: HTTP 200.
- Screenshot: `output/playwright/number-lottery-one-page/desktop-full.png`.

### Mobile

- Viewport: 390 × 844.
- Document width: 390; no horizontal overflow.
- Content width: 364.
- Rendered image width: 364 after removing the browser's default figure margin.
- CTA heights: 48px.
- Cards stack into a single column and headings remain visible.
- Revised step and participation cards have no content overflow.
- Screenshot: `output/playwright/number-lottery-one-page/mobile-full.png`.

## Visual Review

- `Resonant Time Capsule` is the dominant product identity.
- The poster remains the central visual.
- The caption explicitly explains that Number Lottery is the founding ceremony
  inside the time capsule.
- The 2/5/10-year lifecycle is visible both in the image and page timeline.
- Public, sealed, and silent participation modes remain distinct.
- Research-stage and no-intake boundaries remain visible at the final CTA.
