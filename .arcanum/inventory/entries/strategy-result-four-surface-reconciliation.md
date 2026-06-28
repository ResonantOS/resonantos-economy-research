# Inventory Entry: Strategy Result - Four-Surface Reconciliation

Status: closed
Entry type: dispatch
Authority posture: non-authority-read-model
Tags: `strategy-result`, `dispatch`, `subagents`, `definitions`, `glossary`, `resonantos-economy`

## Source Refs

- [research/four-surface-reconciliation/findings.md](../../../research/four-surface-reconciliation/findings.md)
- [research/four-surface-reconciliation/research.md](../../../research/four-surface-reconciliation/research.md)
- [definitions/DEFINITION-DRIFT-AUDIT.md](../../../definitions/DEFINITION-DRIFT-AUDIT.md)
- [telemetry/agents/subagents-dispatch.yaml](../../../telemetry/agents/subagents-dispatch.yaml) (dispatch_id `2026-06-28-four-surface-reconciliation`)

## Summary

A research dispatch triggered by the user's suspicion that the reader-facing
vocabulary surfaces — `glossary/GLOSSARY.md`, `NOTATION.md`,
`distills/DISTILLED-KNOWLEDGE.md` — "were not done correctly." Scoped to two
defect classes the user confirmed: **out-of-sync surfaces** and **coverage
gaps** against the canonical `ER-D1–D20` definitions (which were trusted as
anchors, not re-litigated). The sheet passed the check-tension gate, was
confirmed, registered, run, accepted by the auditor, and closed `resolved`.
The dispatch is **propose-only**: it produced a per-surface change-set; it did
not edit `DEFINITIONS.md` or any surface file.

## Strategy Result

### P1 Trigger Decision

Dispatch justified by synthesis (ER-D definitions + claim ledger + source corpus
+ three surfaces), context protection (the 661-line definitions file and corpus
exceed inline budget), and isolation (a discardable audit pass).

### Lanes / Groups

| Group | Runs | Purpose | Anti-bias axis |
| --- | --- | --- | --- |
| `explorers` | Parallel first stage | Find coverage gaps (source-first) and out-of-sync defects (governance-first). | `composite(source-corpus + methodology)` |
| `synthesizer` | After explorers | Reconcile into one per-surface change-set; preserve dissent. | n/a |
| `reviewers` | Zig-zag after synthesizer | Attack the change-set on non-vacuity and definitional-soundness. | `attack-vector` |
| `writer` | After reviewers | Persist `findings.md` with change-set tables and verdict matrix. | n/a |
| `auditor` | Final approval after writer | Accept/reject against goal, claim≤proof, source-kind, promotion boundary. | n/a |

Sheet-level anti_bias_global: `coverage completeness vs source-grounded restraint`.

### Subagents

| Agent | Role | Angle | Expected output |
| --- | --- | --- | --- |
| Kuhn, Thomas | explorer | Empirical source-extraction; coverage gaps. | Concepts/ER-D lacking surface entries. |
| Ostrom, Elinor | explorer | Adversarial governance-audit; restraint. | Out-of-sync/mis-structured entries + reject categories. |
| Simon, Herbert | synthesizer | Reconcile coverage vs restraint. | Per-surface change-set, dissent preserved. |
| Popper, Karl | skeptic | Non-vacuity gate. | Kills/survives for missing-witness rows. |
| Quine, Willard Van Orman | skeptic | Definitional-soundness gate. | Kills for re-skins/collapse + promotion flags. |
| Senge, Peter | writer | Findings writer. | `findings.md` change-set + verdict matrix. |
| Brandenburg, Martin | auditor | Final approval. | Accept/reject. |

### Dependency Flow

```text
explorers
  -> synthesizer
  -> reviewers   (zig-zag, one loop)
  -> writer
  -> auditor
  -> writer feedback if needed (not exercised)
```

### Gate / Ledger State

- Check-tension gate: both agents PASS (checker clean; reviewer PASS with two
  non-blocking advisory notes on the reviewer group).
- Human confirmation: satisfied before registration.
- Dispatch ledger: registered + closed `resolved`,
  dispatch_id `2026-06-28-four-surface-reconciliation`.
- Execution: 7 dispatch agents (2 explorer, 1 synthesizer, 2 skeptic, 1 writer,
  1 auditor), 1 zig-zag loop used; plus 2 check-tension gate agents (gate
  infrastructure, outside the dispatch tree).
- Outcome: 10 actionable surface edits (3 sync-fix, 4 coverage-add,
  3 structure-fix), 1 KILL (Reviewer⊥Reviewed Credit — definitional collapse
  into ER-D2∧ER-D10, banked as typed negative with salvage route), 9
  owner-gated disputes.
- Durable outputs: `research/four-surface-reconciliation/research.md` and
  `research/four-surface-reconciliation/findings.md`.

### Next Human Action

Decide whether to apply the 10 actionable edits as a **separate governed write**
through the definitions/glossary authority (the highest-confidence move is
`Credit Seed → Reviewed Credit Record`, ER-D7, flagged by both explorers).
Route the 9 owner-gated disputes through the authority/promotion lane; they are
not surface edits.

## Reusable Selectors

- `four-surface-reconciliation-change-set` for the per-surface edit list.
- `credit-seed-to-reviewed-credit-record` (ER-D7 rename, high-confidence).
- `surface-vs-er-d-drift-audit` for the audit method.

## Residue

The 9 owner-gated disputes (candidate invariants awaiting fixtures/values,
orphaned entries, mis-typed gate-vs-fixture items) remain open and route to the
authority/promotion lane, not the surface pass.

## Promotion Boundary

This inventory entry records a strategy result. It does not promote source
claims, surface edits, economy mechanisms, token policy, bounty policy,
governance authority, or launch readiness. Applying the proposed edits is a
separate governed write.
