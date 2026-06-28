# Definition Drift Audit

Status: active audit
Canonical source: [DEFINITIONS.md](DEFINITIONS.md)
Audit date: 2026-06-27
Promotion scope: local-research-only

## Summary

- Definition voices complete: yes for ER-D1 through ER-D26.
- Index synced: yes, [DEFINITIONS-INDEX.md](DEFINITIONS-INDEX.md).
- Drift found: yes, nonblocking narrative drift only.
- Undefined critical terms from the CAv2/Lean and authority/lifecycle harvest
  findings: 0 after this pass.
- Conflicting consumers: 0 blocker conflicts found.

## 2026-06-28 Definitions Governance Pass (the 9 owner-gated disputes)

Source: [research/four-surface-reconciliation/findings.md](../research/four-surface-reconciliation/findings.md).
Triaged the 9 owner-gated disputes against the [promotion ladder and gates](../authority/promotion-policy.md).
Owner decision: promote the two clean named-concept disputes, enrich one existing
fixture, hold the rest below the definition line.

| Dispute | Disposition |
| --- | --- |
| Cascade Collapse (§0.3) | **Promoted** → ER-D21 (failure lens, promotion-candidate). |
| Sybil / Costly-Identity Gate (Douceur 2002) | **Promoted** → ER-D22 (prerequisite, build-from-owned, blocked). |
| Self-Report Independence (L1-INV-A) | **Enriched ER-D10** as a named fixture case (no peer definition — would collapse into ER-D2 ∧ ER-D10). |
| Flow-Budget Conservation (L3-INV-A) | **Held as ER-D14 draft** (glossary candidate entry); Formal gate not yet cleared — no canonical ID. |
| Randomized Reward Or Audit | **Residue** — fails source-kind gate (no source collected). |
| Random Audit / Legible-Reward Split (T-L1.2) | **Residue** — awaits a value; route through ER-D14. |
| Maintenance First-Class Rewarded (L3-REQUIREMENT) | **Authority lane** — Behavioral gate; routes to promotion-policy, not a definition. |
| Decay-as-Loss / Randomized Withholding / Blind Reviewer Assignment | **Residue** — narrative/socio, awaits bounds; Formal + Behavioral gates unmet. |
| (Reviewer⊥Reviewed Credit, the dispatch KILL) | **Already owned** by ER-D10 domain-context; no action. |

Authority check: ER-D21 and ER-D22 are named concepts with honest promotion
boundaries (promotion-candidate / blocked); neither asserts a validated
mechanism, token policy, bounty safety, governance authority, or launch
readiness. The 5 residue/authority-lane disputes remain below the definition
line until a collapse test, witness, value, or owner route exists.

## 2026-06-28 Load-Bearing Term Tracking (anti-drift rule + candidate lifecycle)

Trigger: `treasury`/`epoch`/`emission` were cited in the flow-conservation
fixture FAIL-region (`Σ(emitted) > treasury`) with no tracked definition — a
load-bearing-symbol drift the prior surface pass did not catch because the
primitives live one level below the enumerated concepts.

Remediation (constitution + lifecycle + backfill):

- **Rule:** [REC-C14 Load-Bearing Term Tracking](../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
  (validation mode hybrid; deterministic adapter `none-yet`). Scope =
  formal-and-claims: symbols in formal expressions, fixture FAIL-regions,
  candidate invariants, decidable rules, or claim-ledger normative content.
- **Lifecycle:** ER-D23 Load-Bearing Term Lifecycle — defines `load_bearing_term`,
  the `candidate → grounded → promoted/residue/retired` states, and the new
  `Lifecycle status:` definition-card field. ER-D1–D22 read as `grounded` until
  individually revised (lazy migration).
- **Backfill (candidate):** ER-D24 Treasury, ER-D25 Epoch, ER-D26 Emission —
  each with an `Open / to-ground:` field naming the exact missing input
  (treasury size / epoch basis / emission schedule). Notation rows added for
  `treasury`, `epoch`, `Σ(emitted)`, and the `Σ(emitted) ≤ treasury` FAIL-region;
  the glossary Flow-Budget draft now carries the concrete decidable witness.

Authority check: the three backfilled terms are `candidate`, not validated; the
flow-conservation rule is explicitly NOT "fully specified" while they remain
candidate. No token, treasury-size, governance, or mechanism claim is asserted —
the treasury *size* stays a gated un-snapshotted whitepaper claim.

Open follow-up: build the REC-C14 deterministic adapter (grep formal blocks +
FAIL-regions against DEFINITIONS-INDEX); grounding the three candidates is the
first task of fixture #2 (formal-TF-1).

## 2026-06-28 Load-Bearing Term Sweep (adapter-driven)

The REC-C14 adapter (`tools/check_load_bearing_terms.py`) was built and run over
the non-definition surfaces (60 files). After structural-noise filtering it
surfaced a clean cluster of untracked load-bearing terms — all primitives of the
*other two* NOW-fixtures, the same drift class as treasury/epoch/emission.

Dispositions:

| Terms | Disposition |
| --- | --- |
| `stables`, `liquidable`, `haircut`, `obligations`, `burn`, `runway` | **Tracked** → ER-D27 Runway Inequality (candidate). |
| `stratified_estimate`, `true_rate`, `CI` | **Tracked** → ER-D28 Measurement-Not-Authority (candidate). |
| `cartel` | **Deferred** — load-bearing in MERGE-3 (`E[cartel]=E[honest]`), which already AWAITS `p*`; tracks with that owner item, not a standalone definition yet. |
| `$REX` / `$REX-COM` | **Residue / flag** — an un-sourced token symbol appearing once as prose in `subtowers/socioeconomic-behavior/returns/`; not in the claim ledger, not `$RES`/`$RCT`. Likely a subagent artifact; routed to the tower owner to correct, not defined. |
| `submonoid`, `absorbing` | **Analogy-only** — formal-modeling terms (algebraic / Markov), not economy primitives; no definition. |
| `emission_rate` | **Subsumed** under ER-D26 Emission. |
| `self_report` | **Already tracked** — folded into ER-D10 (adapter near-miss on compound matching). |

Authority check: ER-D27 and ER-D28 are `candidate`, each with an
`Open / to-ground:` field (reserve/burn calibration for runway; the declared
adversarial-steering class + CI for TF-11). Both keep the runway thresholds and
the TF-11 PASS explicitly un-asserted until grounded. No mechanism, treasury
size, or Phase-2 readiness is claimed.

## Nonblocking Drift

| Surface | Drift | Recommended action |
| --- | --- | --- |
| [glossary/GLOSSARY.md](../glossary/GLOSSARY.md) | Resolved 2026-06-28 (dispatch `2026-06-28-four-surface-reconciliation`): `Credit Seed`→`Reviewed Credit Record` (ER-D7); added `Local Research Status Vocabulary` (ER-D18), `Privacy Redaction Policy Prerequisite` (ER-D13), and `Flow-Budget Conservation` candidate under ER-D14; `Bounty Retrieval` anchored to ER-D3. Notation and distills aligned in the same pass. Glossary remains non-canonical. | Closed for this pass. 9 owner-gated disputes route to the authority/promotion lane, not the surfaces. |
| [levels/L2-closure-plan.md](../levels/L2-closure-plan.md) | Resolved during this pass: the first recommended lane now points to the development handoff and key ER-D definition IDs. | Keep future fixture requests linked to the same ER-D definitions. |
| [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md) | Claim records should carry `claim_status`, `witness_source`, `assumptions`, and `open_residue` fields when next revised. | Apply ER-D15 during the next claim-ledger update. |
| [.arcanum/inventory/entries/cav2-lean-findings.md](../.arcanum/inventory/entries/cav2-lean-findings.md) | Existing inventory entry summarizes findings but does not expose the refined design/plan mapping. | Add a separate development-pack inventory entry rather than overloading the findings entry. |
| [harvest/cav2-authority-lifecycle/selector-map.md](../harvest/cav2-authority-lifecycle/selector-map.md) | The synthesized map has pre-review `ADD` labels over unsnapshotted CAv2 paths. | Treat [findings.md](../harvest/cav2-authority-lifecycle/findings.md) as the accepted verdict source; use ER-D18/ER-D19/ER-D20 for post-review wording. |

## Authority Check

The new definitions preserve the harvest demotion:

- no solved or validated economy mechanism;
- no token, payout, bounty, governance, launch, or implementation readiness;
- no authority from score, credit, attention, review, or inventory presence;
- no public lineage reuse without privacy/redaction policy;
- no anti-gaming claim without failure fixtures and witnesses.

## Follow-Ups

1. Glossary/notation/distills reader-facing pass completed 2026-06-28 (dispatch
   `2026-06-28-four-surface-reconciliation`); see
   [research/four-surface-reconciliation/findings.md](../research/four-surface-reconciliation/findings.md).
2. Preserve ER-D references in the first evidence-harness fixture request.
3. Use ER-D15 and ER-D18 fields for future claim-ledger and inventory entries.
4. Rename implementation-facing planning to ER-D19 implementation boundary
   planning until owner gates and validation reports exist.
5. Use ER-D20 for any CAv2 return package; do not allow cyclic citation
   promotion.
6. Keep the Phase 2 blocker register as a blocker register, not an unlock list.
