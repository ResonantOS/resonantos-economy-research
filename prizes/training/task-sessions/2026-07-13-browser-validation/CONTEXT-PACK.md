# Context Pack — Presentation Browser Validation

Status: bounded Task Session evidence
Task reference: `prizes/training/presentation.html — real-browser validation`
Date: 2026-07-13
Runtime: local Playwright CLI against a local HTTP server

## Objective

Establish whether the authored presentation behaves as declared in a real
browser at one common desktop presentation viewport and one common mobile
viewport. This session validates the projected surface and its navigation only.

It does not validate the workshop's teaching result, any contribution
mechanism, any bet, or any policy decision.

## Obligation Matrix

| ID | Obligation | Evidence surface | Done condition |
| --- | --- | --- | --- |
| B1 | Initial render is coherent. | browser state at `#1` | slide 1 alone is active; hash, title, progress, and disabled previous control agree |
| B2 | Button navigation works. | next and previous controls | both controls move exactly one slide and update browser state |
| B3 | Keyboard navigation works. | Arrow, Page, Space, Home, and End keys | declared keys move or jump to the expected slide |
| B4 | Direct links work. | load at `#8` | the core-correction slide alone is active and state agrees |
| B5 | Endpoints are bounded. | slides 1 and 18 | previous is disabled at 1 and next is disabled at 18 |
| B6 | Desktop layout is viable. | 1440 × 900 viewport across all 18 slides | no document or active-slide horizontal overflow; screenshots preserve the intended surface |
| B7 | Mobile layout is viable. | 390 × 844 viewport across all 18 slides | no document or active-slide horizontal overflow; vertical scrolling remains possible where needed |
| B8 | Projected-surface boundary holds. | rendered DOM/text and console | no speaker notes or authoring metadata are projected; no browser console errors |

Strict obligation coverage target: 8 of 8 obligations (100%). A failed check is
recorded as a failure or flag; it is not edited out of the task definition.

## Selected Context

| Source | Why selected |
| --- | --- |
| `AGENTS.md` | claim, policy, authority, and source-posture gates |
| `prizes/training/README.md` | workshop purpose, fixed premise, and projected-surface role |
| `prizes/training/presentation.html` | implementation under validation |
| `prizes/training/VALIDATION.md` | current browser-trial flag and synchronization target |
| `prizes/training/APPROVED-LANGUAGE-AUDITION.md` | approved projected opening, correction, and reveal |
| `prizes/training/FACILITATOR-GUIDE.md` | intended separation between projected copy and trainer-only material |
| `authority/AUTHORITY-MODEL.md` | research/policy and contribution-credit/authority non-collapse boundaries |

Selected files: 7 of a maximum 8. Selection is sufficient for every obligation;
repository-wide fallback search is not authorized unless the browser evidence
exposes an unexplained dependency.

## Fixed Decisions

- Serve the repository on `127.0.0.1` so validation uses ordinary HTTP behavior
  rather than relying on browser-specific `file://` behavior.
- Exercise Chromium through the repository-independent Playwright CLI wrapper.
- Use 1440 × 900 for the desktop presentation check and 390 × 844 for the
  narrow/mobile check.
- Store browser artifacts under `output/playwright/` and the adjudication record
  beside this context pack.
- Treat browser evidence as implementation evidence. The unrun live cohort
  remains an independent flag.

## Write Scope

Allowed writes:

- `output/playwright/` browser artifacts;
- `prizes/training/BROWSER-VALIDATION.md`;
- this Task Session directory;
- the browser-trial status in `prizes/training/VALIDATION.md`;
- the repository observability row required by Task Session.

No mechanism, prize, bet, authority, contribution-credit, or policy artifact is
within scope.

## Validation Surface

The browser run must record:

1. explicit assertions for B1–B8;
2. at least one desktop and one mobile screenshot;
3. console state after navigation;
4. the exact commands or executable snippets used;
5. a bounded `pass`, `flag`, or `block` verdict with any residue preserved.

## Known Boundary

The first live-cohort trial in `prizes/training/VALIDATION.md` is not executable
without trainees and a facilitator. It is a separate task and remains unrun.
