# Context Pack — Story-First Time Capsule

Status: bounded design context

## Objective

Design a first-time participant experience that can be understood without prior
knowledge of ResonantDAO, cryptography, token mechanics, or the earlier project
history. Use short phrases and storytelling. Produce an isolated, non-collecting
review prototype; do not mutate the hosted page or authorize live intake.

## Controlling Decisions

1. The capsule is a community ritual, not an economic proof or a personal reward.
2. A person may leave up to two short messages for each 2, 5, and 10-year opening.
3. A short message is one brief phrase or sentence. Its length gives no extra weight.
4. A message may be written for the participant's future self, for another person, or for
   the community. The shared capsule does not require a communal addressee.
5. A message may be shared from the beginning, saved for its opening, or omitted.
6. All accepted records form one shared capsule fingerprint.
7. A Bitcoin block after closing may act as the public closing marker; the fingerprint
   and block hash produce the ritual number inside a range agreed before participation.
8. The number is chosen once. Later openings reveal messages; they do not recalculate it.
9. The current artifact is a browser-only rehearsal. Nothing is submitted or saved.

## Selected Evidence

| Selector | Source | Use |
| --- | --- | --- |
| number-lottery-refinement | `.arcanum/inventory/entries/number-lottery-refinement.md` | Current ritual/number boundary and unvalidated status |
| live-intake-refine | `.arcanum/inventory/entries/time-capsule-live-intake-refine.md` | Static versus live capability boundary |
| prior UX design | `development/invoke-runs/2026-07-17-time-capsule-ux-clarity/` | Existing form and first-time comprehension work |
| mechanism refresh | `development/invoke-runs/2026-07-17-time-capsule-word-to-number-refresh/` | Record → fingerprint → later value → result model |
| current site | `development/refinement-runs/2026-07-12-number-lottery/presentation/site/` | Existing visual language and implemented simulator |
| operator corrections | current conversation | Short phrases; ritual-only rigor; simple Bitcoin marker; partial reveal requirement |

## Obligations

- Lead with the human invitation, not procedure.
- Keep the addressee open: self, another person, or community.
- Use short, spoken phrases.
- Explain how a phrase affects the shared result.
- Explain public and saved-for-opening behavior without claiming the saved path is live.
- Show 2, 5, and 10-year returns.
- Keep every interaction local and volatile.
- Preserve quiet as a complete, unpenalized choice.
- Avoid implying a phrase has a personal token value.

## Open Decisions

- Final character limit; the prototype uses 140 characters as a candidate.
- Final public number range and exact closing Bitcoin block rule.
- Real intake, moderation, encryption, key custody, recovery, and long-term stewardship.
- Whether “short message” or “short phrase” becomes the final product term.

## Gap Check

No blocker prevents a candidate UX design. The open decisions affect production and
ceremony rules, not the first-time story prototype. They remain visibly unapproved.
