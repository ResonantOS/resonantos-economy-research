# Architecture — Story-First Time Capsule Experience

Status: `pass` as candidate design; `flag` for participant comprehension and production capability

## Architecture Intent

Let a newcomer move from curiosity to an accurate retell in one short journey:

> I leave a short message for myself, another person, or everyone at a future opening. It becomes one record in our shared
> capsule. The capsule fingerprint and its Bitcoin closing block help choose how many
> tokens ResonantDAO starts with. Later, we return to the messages together.

## Source Contracts

| ID | Source | Required | Contract |
| --- | --- | --- | --- |
| SC-01 | operator correction | yes | Up to two short messages at each 2/5/10-year opening |
| SC-02 | mechanism refresh | yes | Message → record → shared fingerprint → closing block → starting token number |
| SC-03 | live-intake Refine | yes | Review prototype collects and stores nothing |
| SC-04 | operator correction | yes | Ritual number is symbolic, not a personal allocation or economic proof |
| SC-05 | partial reveal decision | yes | Saved messages use individual commitments inside one master manifest |
| SC-06 | operator request | yes | Visually explain how the number is created, how the capsule is maintained, and how future openings are verified |

## View 1 — Context

```text
new participant
      |
      v
personal invitation --> short message --> public now / saved for opening
                                               |
                                               v
                                        capsule record
                                               |
                                               v
community records --> master manifest --> shared fingerprint
                                               |
                              Bitcoin closing block
                                               |
                                               v
                                    starting token number
                                               |
                 2 years -------- 5 years -------- 10 years
                    reveal           reveal            reveal
```

The participant-facing experience owns explanation and rehearsal only. The ceremony
rules, storage, moderation, cryptography, Bitcoin transaction, and later recovery remain
separate owner surfaces.

## View 2 — High-Level Structure

1. **Arrival** — name the time capsule and invite one human thought.
2. **Future glimpse** — show the community returning in 2, 5, and 10 years.
3. **Message studio** — one stable screen for all three horizons, two messages maximum each.
4. **Visibility choice** — share from the beginning or save for that opening.
5. **Shared ritual** — animate the selected message through record, capsule, fingerprint,
   Bitcoin closing block, and number.
6. **Review receipt** — show the draft and state unmistakably that it was not submitted.

## View 3 — Low-Level Components

| Component | Responsibility | Boundary |
| --- | --- | --- |
| PreviewRibbon | Persist rehearsal truth | Never dismissible or promotional |
| StoryHero | Invite a message for self, another person, or community before rules | No cryptographic vocabulary |
| ReturnTimeline | Make 2/5/10 years memorable | Does not imply a new number per opening |
| MechanismXray | Trace number creation, candidate stewardship, and staged opening | Visibly separates explained method from unapproved maintenance choices |
| MessageStudio | Capture local draft messages | Volatile memory only; 140-character candidate limit |
| VisibilityChoice | Explain public versus saved | Saved is demonstrative, not operational |
| RitualPath | Show the causal chain | No fixed value per message; no fake hash |
| ReviewReceipt | Summarize and close rehearsal | Explicit “not sent · not saved” state |

## View 4 — Workflow Process

```text
arrive
  -> imagine a future opening
  -> write zero to six short messages
  -> choose public or saved for each written message
  -> review the shared path
  -> close rehearsal
  -> receive local-only receipt

back -> preserve volatile draft
refresh / start again -> clear draft
all empty -> continue quietly
```

Saved-message concept path:

```text
message + random secret -> per-message commitment
commitment -> master manifest -> master fingerprint
opening date -> message + secret published -> commitment verified
```

The prototype explains this without creating secrets, commitments, or recovery promises.

## View 5 — Decision Flow

| Decision | Branch | Result |
| --- | --- | --- |
| Leave a message? | yes / quiet | create a draft record / no record |
| When should it meet the community? | 2 / 5 / 10 years | assign opening horizon |
| When may it be read? | from beginning / at opening | public text / saved commitment concept |
| Does length add influence? | no | each accepted message is one record |
| Is number recalculated later? | no | only messages return |
| Is this prototype submitted? | no | local receipt only |

## View 6 — Dependency Interface

| Dependency | Candidate interface | Rule |
| --- | --- | --- |
| Ceremony rules | versioned public manifest profile | freeze before intake |
| Public intake | accepted record export | outside this prototype |
| Saved-message system | commitment and recovery profile | blocked until owner approval |
| Bitcoin | closing transaction id and containing block hash | anchor fingerprint; do not store messages |
| Result mapper | published range and deterministic rule | candidate only |
| Future openings | release bundle + verification receipt | separate per horizon |

## Constraints

| Constraint | Source | Impact |
| --- | --- | --- |
| First-time audience | user request | story precedes explanation |
| Short phrases | user request | brief prompts and 140-character candidate limit |
| Non-collecting | live-intake review | no form action, fetch, storage, analytics, or cookies |
| Honest claims | existing safety findings | saved path is explained but unavailable |
| Compact page | prior visual feedback | one active experience card; no wall of rules |

## Dependency And Interface Rules

| ID | Rule | Enforcement |
| --- | --- | --- |
| R-01 | No message has a personal numeric value | copy and comprehension check |
| R-02 | One master fingerprint may contain many individual commitments | architecture contract |
| R-03 | Bitcoin carries only an anchor/closing marker | proof disclosure |
| R-04 | No production capability is implied by the prototype | persistent preview state |
| R-05 | All written-message choices are explicit | no silent visibility default |

## Decision Log

| ID | Decision | Alternatives | Reason |
| --- | --- | --- | --- |
| D-01 | Lead with “leave something for later” inside a full-image hero | split image card, longer, community-only, or mechanism-first hero | restores the artwork as the opening's central field and gives a compact personal reason to care |
| D-02 | Say “short message” in UI | word / phrase | feels personal; helper says phrase or sentence |
| D-03 | Reveal mechanism after first action | explain everything first | question appears when curiosity exists |
| D-04 | Use one stable story card | long form / four equal rule cards | reduces cognitive switching |
| D-05 | Keep saved mode visible but conceptual | hide it / claim it works | preserves the idea without false safety claims |
| D-06 | Keep literal years in the opening labels and give each heading a distinct meaning | repeat “years from now” / unanchored metaphors | preserves clarity while differentiating continuity, change, and memory |
| D-07 | Explain the lifecycle as “one number, three returns” | one dense technical diagram / proof text only | separates the one-time number from the continuing capsule lifecycle |
| D-08 | Show long-term custody as a dashed stewardship proposal | silently choose storage and keys / omit maintenance | makes the missing production decision visible without leaving the reader with no candidate shape |

## Risks

| Risk | Mitigation | Owner |
| --- | --- | --- |
| Participant thinks their message maps to a fixed number | show whole-capsule step and one-record rule | experience design |
| Participant thinks messages are stored | persistent preview ribbon and receipt | prototype owner |
| Saved mode implies privacy guarantee | “planned, not live” in choice and review | privacy owner |
| Candidate stewardship is mistaken for a deployed service | dashed treatment, candidate label, and explicit open-decision panel | stewardship owner |
| Bitcoin sounds like message storage | plain line: “Only the fingerprint is anchored” | ceremony owner |
| Story is memorable but inaccurate | five-person unaided retell gate | UX owner |

## Downstream Planning Notes

- Implementation-plan input: approved story, message grammar, saved-message owner decision,
  and comprehension evidence.
- Work-pack implication: none generated in this design run.
- Validation implication: real participant retell remains mandatory before publication.

## Design Transport Notes

Carry the experience as one sentence, one story arc, one ritual diagram, and one visible
capability boundary. Do not re-expand it into a rule-heavy landing page.

## X-Ray Lane Model — Mechanism Visual

| Lane handle | Visual responsibility | Evidence boundary |
| --- | --- | --- |
| `surface.one-number-three-returns` | Name the one-time number and continuing capsule lifecycle | source-backed synthesis of SC-02 and SC-05 |
| `properties.frozen-and-staged` | One frozen manifest, one number, three scheduled openings | source-backed |
| `components.number-path` | Records, manifest, fingerprint, Bitcoin block, range mapper | source-backed components; final mapper remains candidate |
| `components.stewardship-path` | Horizon bundles, verified copies, access shares, recovery checks | explicit design inference, not approved |
| `flow.create-maintain-open` | Trace creation → care → reveal and verify | mixed; maintenance detail is candidate |
| `lifecycle.close-once-open-thrice` | Close once, maintain, open at 2/5/10 years | source-backed order |
| `risk.questions` | Range, formula, encryption, copies, stewards, succession, recovery | open decisions |
| `visual.method-map` | Three connected inline-SVG panels plus fixed/open boundary | L0 custom capsule shapes using lifecycle-stack and evidence-inference-split patterns |

## Gate Result

- Status: `flag`
- Reason: coherent candidate and review prototype exist; participant comprehension and all
  production capability remain unproven.
