# Time Capsule Word-to-Number Refresh — Context Pack

Status: `pass`

Mode: Invoke `refresh`, proposal-only

## Controlling Correction

The reported comprehension failure is narrower and more concrete than the
previous design assumed:

> People do not understand how words become the number.

The prior package successfully named the time capsule and separated the
one-time number from the later openings, but it used “one shared pattern” as a
bridge. That phrase names an outcome without showing the transformation.

## Refresh Objective

Propose the smallest safe changes that let a first-time visitor see and retell
this causal chain:

```text
word
  -> capsule record
  -> final ordered capsule
  -> digital fingerprint
  + public value produced after closure
  -> one number inside the range chosen in advance
```

## Source Evidence

| ID | Source | Role |
| --- | --- | --- |
| S-01 | operator correction, 2026-07-17 | Controlling evidence: the missing understanding is word-to-number causality. |
| S-02 | `development/invoke-runs/2026-07-16-time-capsule-intake/SPEC.md` | Approved plain-language and domain contract. |
| S-03 | `development/invoke-runs/2026-07-16-time-capsule-intake/ARCHITECTURE.md` | Candidate record, root, beacon, and range-mapping algorithm. |
| S-04 | `development/invoke-runs/2026-07-17-time-capsule-ux-clarity/ARCHITECTURE.md` | Current experience hierarchy and “shared pattern” abstraction. |
| S-05 | `development/invoke-runs/2026-07-17-time-capsule-ux-clarity/UX-PLAN.md` | Current mechanism disclosure and comprehension plan. |
| S-06 | `development/invoke-runs/2026-07-17-time-capsule-ux-clarity/WEB-COPY.md` | Current hero, mechanism, receipt, and interaction copy. |
| S-07 | `development/invoke-runs/2026-07-17-time-capsule-ux-clarity/COMPOSITION-PLAN.md` | Prior Memory First candidate and its known mechanism risk. |
| S-08 | `development/invoke-runs/2026-07-17-time-capsule-ux-clarity/WHISPER-VALIDATION.md` | Prior author validation; human comprehension remained pending. |
| S-09 | `.arcanum/inventory/index.json` | Target lookup for Number Lottery and live-intake refinement evidence. |

## Exact Mechanism Boundary

The public explanation must remain faithful to the candidate design:

1. Each accepted public word becomes a canonical record containing its return
   horizon, slot, mode, normalized word, and rules reference.
2. Each record is deterministically encoded and hashed.
3. All record hashes are ordered and combined into one capsule root—the public
   explanation may call it the capsule's digital fingerprint.
4. The range, record rules, root rules, later public source, and mapping rule
   are frozen before intake.
5. After the capsule closes and its root is published, the declared public
   source produces a value that could not be known while words were chosen.
6. The root, rules, and later value are hashed together and deterministically
   mapped to one integer inside the frozen inclusive range.
7. The result is selected once. Later word openings do not recalculate it.

The explanation must not say that letters are summed, that a word has a token
price, that the public source is already selected, or that the candidate
algorithm has passed independent reproduction.

## Target Artifact Inventory

Proposal-only deltas target:

- `.../time-capsule-ux-clarity/ARCHITECTURE.md`;
- `.../time-capsule-ux-clarity/UX-PLAN.md`;
- `.../time-capsule-ux-clarity/WEB-COPY.md`;
- `.../time-capsule-ux-clarity/COMPOSITION-PLAN.md`;
- `.../time-capsule-ux-clarity/WHISPER-VALIDATION.md`;
- the later local-only HTML implementation, only after Task Session approval.

## Obligations

| ID | Obligation |
| --- | --- |
| O-01 | Put word-to-number causality in the first visual field, not a collapsed disclosure. |
| O-02 | Show a word becoming a complete record, not a letter score. |
| O-03 | Show that every accepted record changes one capsule-wide fingerprint. |
| O-04 | Show why the later public value exists: the final number cannot be known while words are still chosen. |
| O-05 | Show that a fixed public rule selects a number inside a range agreed before intake. |
| O-06 | State that a word has no fixed token amount or personal reward. |
| O-07 | Use one concrete, correctly computed rehearsal example in the implementation; do not publish invented fake hash results. |
| O-08 | Keep saved-for-later, identity, fairness, privacy, and launch claims outside this explanation. |
| O-09 | Preserve the time capsule and 2/5/10-year return story as context after causality is clear. |
| O-10 | Keep human comprehension status pending until a mechanism retell test passes. |

## Gap Check

No interview question is needed. The operator supplied the exact failed concept,
the target transport is unchanged, and the approved mechanism identifies the
required causal chain. The final range, public source, and production algorithm
proof remain implementation/owner gaps; the copy can name their role without
selecting them.

## Write Boundary

This run writes only to:

`development/invoke-runs/2026-07-17-time-capsule-word-to-number-refresh/`

and appends one observability correction event. It does not edit the prior
package or current site.

