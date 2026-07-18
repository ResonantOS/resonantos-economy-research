# Browser Validation

Date: 2026-07-17

Browser: Firefox through Playwright CLI

## Results

| Check | Result |
| --- | --- |
| Page loads and renders | pass |
| Desktop 1440×900 | pass |
| Mobile 390×844 | pass; no horizontal overflow |
| Generated hero image | pass; 1672×941 asset loaded at desktop and mobile sizes |
| Personal-or-shared copy correction | pass; hero and first form prompt name future-self participation without excluding other recipients |
| Full-image opening | pass; artwork covers the first viewport and contains the header, invitation, explanation, and actions |
| Tall desktop 1667×1181 | pass; hero is 938px high, matching the 1672:941 source ratio instead of stretching to the viewport |
| Standard desktop composition | pass; 1440×900 keeps the image ratio and shows the complete invitation, token path, and both actions |
| Starting-token meaning | pass; opening states how many tokens ResonantDAO starts with and shows messages → capsule → starting token number |
| Quiet agency in opening | pass; hero offers “message or any small mark” and a direct “Or leave nothing” action |
| Direct quiet journey | pass; shortcut opens the quiet state without traversing empty message fields |
| Quiet-path honesty | pass; empty openings show no invented record, three “Left open” review states, and a quiet-specific receipt |
| Small-mark input | pass; a single `·` is accepted and becomes one capsule record |
| Meaningful horizon arc | pass; literal years remain visible while prompts distinguish continuity, change, and memory |
| Repetition reduction | pass; participant copy contains no repeated “years from now” headings |
| Horizon questions | pass; 2/5/10-year questions and distinct placeholders render without desktop or mobile overflow |
| Mechanism X-Ray | pass; one connected explanation shows number creation, long-term maintenance, and staged opening |
| Number path | pass; messages become a manifest and fingerprint, combine with a later Bitcoin block, then map into the published range |
| Maintenance path | pass; the 2/5/10-year bundles, public verification copy, steward access, and recovery check are visible |
| Opening path | pass; only the due bundle opens and its revealed message is checked against the original commitment |
| Evidence boundary | pass; solid panels describe the method while the dashed stewardship panel is explicitly labeled as a proposal |
| SVG accessibility | pass; all three diagrams expose a title and description through `aria-labelledby` |
| Mechanism desktop 1440×900 | pass; three aligned 383px panels, no horizontal overflow |
| Mechanism mobile 390×844 | pass; vertical 366px panels and 320px diagrams, no horizontal overflow |
| Full three-message journey | pass |
| Public and saved-for-opening choices | pass |
| Shared ritual panel | pass |
| Review and not-sent receipt | pass |
| All-quiet path | pass |
| Start-again reset | pass |
| Console | 0 errors, 0 warnings |
| Local storage | empty |
| Session storage | empty |
| Cookies | empty |
| Interaction network requests | none |

Screenshots:

- `output/playwright/time-capsule-story-desktop-final.png`
- `output/playwright/time-capsule-story-mobile-final.png`
- `output/playwright/time-capsule-story-receipt.png`
- `output/playwright/time-capsule-story-new-hero-desktop.png`
- `output/playwright/time-capsule-story-new-hero-mobile.png`
- `output/playwright/time-capsule-personal-copy-desktop-final.png`
- `output/playwright/time-capsule-personal-copy-mobile-final.png`
- `output/playwright/time-capsule-full-image-hero-desktop.png`
- `output/playwright/time-capsule-full-image-hero-mobile.png`
- `output/playwright/time-capsule-token-number-tall-desktop.png`
- `output/playwright/time-capsule-token-number-standard-desktop.png`
- `output/playwright/time-capsule-token-number-mobile.png`
- `output/playwright/time-capsule-quiet-path-opening.png`
- `output/playwright/time-capsule-quiet-path-state.png`
- `output/playwright/time-capsule-quiet-path-ritual.png`
- `output/playwright/time-capsule-quiet-path-mobile.png`
- `output/playwright/time-capsule-meaningful-horizons-desktop.png`
- `output/playwright/time-capsule-horizon-five-desktop.png`
- `output/playwright/time-capsule-horizon-ten-desktop.png`
- `output/playwright/time-capsule-meaningful-horizons-mobile.png`
- `output/playwright/time-capsule-horizon-ten-mobile.png`
- `output/playwright/time-capsule-method-xray-desktop.png`
- `output/playwright/time-capsule-method-xray-mobile.png`

## Remaining Manual Gate

This validates browser behavior, not human understanding. The five-person first-time
participant retell and assistive-technology checks remain pending.
