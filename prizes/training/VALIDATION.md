---
to: reviewers of the bets, mechanisms, and prizes training workshop
from: Whisper live-presentation validation pass
re: "Editorial, source, implementation, and live-cohort evidence"
date: 2026-07-13
status: pass for source/editorial/navigation/layout; flag for unrun live cohort and favicon console residue
---

# Workshop Validation

This record validates the authored training package. It does not validate a DAO
mechanism, adjudicate any registered bet, or authorize policy.

## Current Verdict

- **Pass:** operator voice approval, surface separation, source grounding,
  workshop structure, local links, HTML structure, inventory integration, real
  browser navigation, and desktop/mobile layout.
- **Flag:** no facilitator has yet run the session with a trainee cohort. The
  browser trial also found one clean-launch console error: the local server
  returns 404 for `/favicon.ico`; presentation JavaScript produced no page error.
- **Out of scope:** mechanism experiments, prize closure, payout, governance,
  implementation, and public-export readiness.

## Post-Validation Extension

The workshop discussion later produced
[Contribution Measurement, Failure, Review, and
Allocation](CONTRIBUTION-MEASUREMENT-FAILURE-AND-ALLOCATION.md). The guide is an
anonymized, workshop-derived continuation and is not projected by the current
deck or required by the current participant workbook.

Its local links and authority boundaries may be checked as documentation, but
none of its contribution taxonomy, failure classifications, reviewer controls,
allocation candidates, or proposed experiments inherits this file's earlier
editorial/browser pass. No cohort or mechanism experiment has tested them.

## Whisper Result

| Field | Result |
| --- | --- |
| Spell | `whisper` |
| Transport | `live_presentation` plus facilitator-led workshop |
| Transport proof status | candidate |
| Objective | Let trainees reproduce the research interaction that turns a contribution mechanism into prizes, bets, attacks, witnesses, and bounded verdicts. |
| Target public | People being trained to work with this repository's research harness. |
| Resonance core | Informal, curious, collaborative, and willing to let the room attack the presenter's idea. |
| Relevance core | The DAO already counts calls as contributions; the open question is how a later mechanism should use those records. |
| Trajectory core | Fixed premise → candidate mechanisms → meaning of best → mechanism bet → attack → three independent bets → witness → verdict. |
| Candidate selected | Performed research interaction plus workbook; a lecture deck and a transcript-only format were rejected. |
| Human gate | Approved after two operator corrections. |
| Draft status | `flag` pending the live cohort and a console-clean browser rerun after the favicon residue is resolved. |

## Distill Result

- **Target context:** a 90-minute training room with one facilitator and groups
  of 3–5 participants.
- **Objective and output:** teach reproducible mechanism research through a
  projected deck, facilitator guide, participant workbook, and validation record.
- **Mode and budget:** Standard; one proposal track, two bounded role rounds,
  and reconciliation.
- **Proposer claim:** a slide-led worked example can reproduce the original
  research corrections.
- **Balancer objection — cognitive load:** a deck alone turns the session into a
  lecture and lets trainees agree without producing research records.
- **Balancer objection — concept boundary:** asking whether calls “matter”
  contradicts the fixed DAO premise and sends the room into the wrong debate.
- **Balancer objection — validation ambiguity:** “best mechanism” becomes
  vacuous unless criteria and blocking guardrails are frozen first.
- **Reconciliation:** the projected surface carries one thought at a time; the
  workbook requires concrete records; the facilitator guide protects the fixed
  premise and freezes comparison criteria before selection.
- **Smallest coherent unit:** one group takes one mechanism from candidate rule
  to prize, bet, collapse-test, witness, and bounded verdict.
- **Recomposition:** multiple groups create a mechanism comparison; the selected
  mechanism then splits into recognition, community, and communication bets.
- **Frame-expiry:** revise the workshop if the DAO no longer treats calls and
  similar activities as contributions, or if the local prize/bet contract changes.

## Operator Correction Trace

| Audition | Operator finding | Repair |
| --- | --- | --- |
| 1 | Too formal; used `work` instead of `contribution`. | Informal voice and contribution vocabulary. |
| 2 | “Did it matter?” reopened a settled premise. | Contribution remains fixed; mechanism comparison becomes the open problem. |
| 3 | Approved. | Full workshop generation authorized. |

The exact approved copy is preserved in
[APPROVED-LANGUAGE-AUDITION.md](APPROVED-LANGUAGE-AUDITION.md).

## Source Map

| Workshop claim or contract | Repository owner | Status |
| --- | --- | --- |
| Calls, learning, mentoring/care, development, and participation are in the official contribution vocabulary; this does not validate a mechanism. | [Deferred Contribution findings](../../dispatch/deferred-contribution-basis/findings.md) | supported with stated boundary |
| Prize and bet are research objects; closure requires attack survival, authority-collapse check, and witness. | [Bets & Prizes device](../README.md) | supported |
| Recognition, community, and communication are three separate open bets without evidence inheritance. | [Prize register](../PRIZE-REGISTER.md), [bet register](../BET-REGISTER.md) | supported |
| Research uses confirm/deny, attack, residue, and witness-before-confidence. | [Repository Working Guide](../../GUIDE.md) | supported |
| Nontrivial dispatch requires explicit human confirmation. | [Subagent strategy](../../.agents/skills/domainspec-subagents-strategy/SKILL.md) | supported |
| Synthetic fixtures cannot upgrade live claims. | [Research Evidence Harness](../../.agents/skills/research-evidence-harness/SKILL.md) | supported |
| Experiment verdicts require frozen criteria and validity gates. | [Experiment Dispatch](../../.agents/skills/domainspec-experiment-dispatch/SKILL.md) | supported |
| No score, recognition, prize, or bet grants policy or authority by proximity. | [Authority Model](../../authority/AUTHORITY-MODEL.md), [promotion policy](../../authority/promotion-policy.md) | supported |

## Surface-Separation Review

| Surface | File | Review |
| --- | --- | --- |
| projected copy | [presentation.html](presentation.html) | contains only audience-facing thoughts, prompts, timing, and progress |
| spoken copy | [FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md) | natural presenter language separated from slides |
| speaker notes | [FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md) | timing, redirects, source boundaries, and expected misconceptions |
| interaction prompts | facilitator guide plus [PARTICIPANT-WORKBOOK.md](PARTICIPANT-WORKBOOK.md) | questions require participant work and do not contain their answers |
| authoring metadata | this validation record and the approved audition | never projected |

## Editorial Checks

| Check | Result |
| --- | --- |
| approved opening, tension, and reveal preserved | pass |
| projected language addresses the room | pass |
| spoken copy is informal and read-aloud oriented | pass by manual review |
| `contribution` replaces the rejected `work` framing | pass |
| fixed premise is visible before mechanism vocabulary | pass |
| formal terms appear after the case and mechanism-generation exercise | pass |
| questions preserve genuine participant thinking time | pass |
| one visible thought per moment | pass, with criterion and object lists as bounded reveal moments |
| notes and authority metadata stay off the projected surface | pass |

## Static Implementation Checks

| Check | Result |
| --- | --- |
| HTML parses and contains 18 slides | pass |
| exactly one slide begins active | pass |
| every slide has a title, phase, timing, footer, and `aria-hidden` state | pass |
| keyboard, button, hash, progress, Home, and End navigation are present | pass |
| mobile, print, focus-visible, and reduced-motion styles are present | pass |
| local Markdown links resolve | pass |
| JavaScript syntax check | pass |
| whitespace and git diff checks | pass |
| real browser at 1440 × 900 and 390 × 844 | **run — flag:** navigation and all-slide layout pass; one `/favicon.ico` 404 prevents a console-clean verdict ([evidence](BROWSER-VALIDATION.md)) |

## First Live-Cohort Trial

Use 6–12 participants who have not worked on the Deferred Contribution research.
Do not teach from the source walkthrough before the trial.

### Required observations

- Can participants keep “contribution counts” fixed?
- Can they generate at least three mechanisms without treating one as the answer?
- Do they freeze “best” criteria before selection?
- Can they write a comparator and falsifier?
- Can an attacking group find a concrete dangerous optimization?
- Do they keep the three bets independent?
- Can they distinguish fixture evidence from experiment evidence?
- Do they avoid inferring payout, reputation, governance, or authority?

### Survival condition

At least 80% of groups produce a structurally complete prize, mechanism bet,
collapse-test, and witness; every group keeps the fixed premise and authority
boundary intact; facilitator intervention is recorded.

### Falsifier

The workshop requires repeated facilitator correction because participants
reopen whether calls count, select mechanisms before defining criteria, treat
fixture success as mechanism proof, or infer entitlement from the narrative
language.

### Correction policy

If the trial falsifies the teaching design, append the cohort result here before
revising. Do not replace this unrun status with a polished retrospective.

## Learning Residue

1. A live workshop needs a fixed premise as much as it needs an open question.
2. “Best mechanism” becomes researchable only after the room freezes a primary
   criterion and blocking guardrails.
3. Trainees learn the harness by producing and attacking records, not by hearing
   the vocabulary explained.
4. The correction history is a teaching asset: it demonstrates that a human can
   change the research frame before the artifact hardens.
5. A projected deck can support the room, but the workbook is the actual
   learning witness.

## Next Route

Resolve or explicitly accept the favicon console residue, then rerun the clean
browser launch. Separately, facilitate one bounded cohort and append its
observations. Browser behavior does not make the training workshop tested with
trainees.
