# Resonant Time Capsule UX Clarity — Context Pack

Status: `pass` as a design context; human comprehension remains untested

## Intent

Design an impactful, easy-to-understand web experience and completely rewrite
the visible copy so a ResonantDAO community member can quickly explain:

1. this is a community time capsule;
2. a person may leave up to two words for each 2, 5, and 10-year return;
3. all accepted words together influence one initial token-supply number;
4. that number is chosen once, while the words return later;
5. participation has no personal token reward, rank, or penalty; and
6. the current surface is a rehearsal, not a live collection system.

The operator's direct evidence is that the prior explanation did not reliably
land. That is a design failure signal, not proof of why each person was
confused. The new proposal must therefore remain `candidate` until tested.

## Audience And Moment

- **Primary audience:** ResonantDAO community and founding contributors.
- **Entry condition:** little or no prior knowledge; may arrive through a link.
- **First question:** “What is this?”
- **Second question:** “What does my word do?”
- **Third question:** “What happens later?”
- **Desired action:** safely rehearse the capsule with invented words.
- **Success signal:** after one pass, a person can retell the idea without
  confusing it with gambling, personal rewards, six required words, or a
  number that changes at every future opening.

## Controlling Sources

| ID | Source | Why it controls |
| --- | --- | --- |
| C-01 | operator request, 2026-07-17 | Requires an impactful, easy-to-understand UX and complete copy rewrite after a failed comprehension attempt. |
| C-02 | `development/invoke-runs/2026-07-16-time-capsule-intake/SPEC.md` | Approved definition of the product, actors, limits, and non-guarantees. |
| C-03 | `development/invoke-runs/2026-07-16-time-capsule-intake/GLOSSARY.md` | Canonical names and distinctions. |
| C-04 | `development/invoke-runs/2026-07-16-time-capsule-intake/UX-PLAN.md` | Existing journey, slot limit, and consent contract. |
| C-05 | `development/invoke-runs/2026-07-16-time-capsule-intake/FORM-COPY.md` | Current safe wording and prohibited claims. |
| C-06 | `development/refinement-runs/2026-07-12-number-lottery/presentation/VOICE-CORRECTIONS.md` | Requires a warmer collective voice instead of procedural governance prose. |
| C-07 | `development/refinement-runs/2026-07-12-number-lottery/presentation/learning-residue.md` | Prior composition lessons: lead with meaning; move safety close to its action. |
| C-08 | `development/refinement-runs/2026-07-12-number-lottery/presentation/TIME-CAPSULE-CONCEPT-AND-PLAN.md` | Establishes time capsule as the product and supply selection as its founding act. |
| C-09 | `development/refinement-runs/2026-07-12-number-lottery/presentation/site/index.html` | Current landing-page hierarchy and density. |
| C-10 | `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/index.html` | Current live form structure and visible copy. |
| C-11 | `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack.md` | Preserves collection, privacy, safety, and launch gates. |
| C-12 | `.arcanum/inventory/index.json` | Confirms the prior Number Lottery and live-intake refinement packages. |

The public Augmentatism manifesto is used only as a voice reference: collective,
direct, patient, anti-capture, and built from clear choices. It does not own
product mechanics or authorize new claims.

## Required Obligations

| ID | Obligation | Evidence | Design response |
| --- | --- | --- | --- |
| O-01 | Name the thing before explaining it. | C-01, C-08 | Lead with “A time capsule for ResonantDAO.” |
| O-02 | Explain the two outcomes without conflating their timing. | C-02, C-03 | One number is chosen once; words return three times. |
| O-03 | Explain how words affect the number without fake arithmetic. | C-02 | “All accepted words become one shared digital pattern”; no letter score or word-to-token equivalence. |
| O-04 | Preserve the two-word maximum per horizon. | C-02, C-04 | Three horizon rows with two optional fields each. |
| O-05 | Preserve quiet as a valid choice. | C-02, C-04 | Empty fields remain quiet; continuing never requires a word. |
| O-06 | Avoid reward or influence implications. | C-02, C-05 | State once near participation that words bring no personal token allocation or status. |
| O-07 | Keep rehearsal status unmistakable. | C-05, C-11 | Persistent preview bar and invented-word prompt; nothing leaves the browser. |
| O-08 | Do not claim sealed privacy or recovery. | C-02, C-11 | “Saved for later” remains disabled and carries no protection claim. |
| O-09 | Reduce simultaneous decisions. | C-01, C-09, C-10 | One form shell with one active panel: Words → Choices → Review. |
| O-10 | Use inviting, grounded language. | C-01, C-06, C-07 | Short concrete sentences, gentle questions, sparse collective “we.” |
| O-11 | Keep technical proof available but secondary. | C-02, C-09 | A compact “How the number is made” disclosure after the plain story. |
| O-12 | Do not claim the rewrite works before testing it. | C-01 | Editorial status `candidate`; five-person retell gate remains pending. |

## Observed Comprehension Risks

1. “Number Lottery” can be read as gambling or a chance to win tokens.
2. Opening with the token number makes the time capsule feel like a wrapper.
3. Six fields shown at once can look like six required contributions.
4. “Digital fingerprint,” “public value,” “moderation-pending,” and “sealed”
   arrive before their meaning is needed.
5. The current page asks a person to absorb the concept and operate a dense form
   in the same visual moment.
6. Many acknowledgements make a rehearsal feel like a legal transaction.

## Boundaries

This run may write only to:

`development/invoke-runs/2026-07-17-time-capsule-ux-clarity/`

It does not change the current site, implement a form, collect words, select a
number, enable sealed content, deploy, or authorize token effects.

## Gap Check

No blocking interview question remains. Audience, transport, action, word
limits, safety boundaries, and the reported failure are known. Exact visual
execution and comprehension performance remain validation questions, not
requirements questions.

