# Four-Surface Reconciliation: Glossary / Notation / Distills vs ER-D1–D20

Dispatch: `2026-06-28-four-surface-reconciliation` · type: research ·
working folder: `research/four-surface-reconciliation/` · promotion: local-research-only.

**One-line answer:** The drift audit finds 10 actionable, source-backed surface fixes (3 sync, 4 coverage-add, 3 structure), kills 1 redundant proposed glossary term (Reviewer⊥Reviewed Credit) on definitional collapse, and defers 9 rows to owner gates — proposing entry text only, never touching canonical definitions.

---

## 2. Context

The repository carries a pending glossary/notation/distill pass that has drifted behind the canonical definition spine **ER-D1–D20** (`DEFINITIONS.md`). The reader-facing surfaces — `glossary/GLOSSARY.md`, `NOTATION.md`, `distills/DISTILLED-KNOWLEDGE.md` — lag those definitions (the standing `DEFINITION-DRIFT-AUDIT.md` already flags a pending "glossary pass"). Two defect classes are in scope:

- **Out-of-sync**: a surface entry names or labels a concept inconsistently with its ER-D owner (e.g. "Credit Seed" vs ER-D7's record framing).
- **Coverage gaps**: a canonical ER-D (or a clean source path) has no surface entry at all.

ER-D1–D20 are **trusted and not re-litigated** here. This dispatch audits *downstream surfaces against* those definitions; it does not contest the definitions themselves. Every actionable row below carries a confirmed witness and a real reader need (Popper non-vacuity gate: 0 kills). Definitional soundness is enforced by the Quine gate (1 terminal KILL, 1 demotion).

---

## 3. Per-Surface Change-Sets

### 3a. Glossary (`glossary/GLOSSARY.md`)

| Entry / concept | Class | ER-D anchor / source | Proposed change | Promotion flag |
|---|---|---|---|---|
| Credit Seed | SYNC-FIX (high-conf; both explorers) | ER-D5/ER-D7 | Rename to "Reviewed Credit Record", align to ER-D7, keep local-inference kind | local-only |
| Bounty Retrieval | STRUCTURE-FIX | ER-D3 | Add `Evidence:` field with ER-D3 path | local-only |
| ER-D18 Status Vocabulary | COVERAGE-ADD | ER-D18 (`DEFINITIONS.md:545`) | Add local research-status vocabulary entry | local-only |
| ER-D13 Privacy Redaction Policy | COVERAGE-ADD | ER-D13 (`DEFINITIONS.md:388`) | Add entry, clean anchor | local-only |
| Reviewer ⊥ Reviewed Credit | **KILL (Quine)** | ER-D2 ∧ ER-D10 | Do not mint term; salvage as conjunct/witness under ER-D2 or fixture row under ER-D10 | dropped |
| Randomized Reward Or Audit | DISPUTED | orphaned (no source) | Block until ER-D evidence lands | needs-owner-gate |
| Self-Report Independence | DISPUTED | L1-INV-A / formal-TF-2 | Candidate invariant not in the 4 decidable-now | needs-owner-gate |
| Flow-Budget Conservation | COVERAGE-ADD (Quine-demoted) | L3-INV-A = formal-TF-1, UNDER ER-D14 | Add as candidate invariant under ER-D14 drafting route; STRIP "RULE-DECIDABLE-NOW" + "promotion-candidate" | local-research-only |
| Sybil / Costly-Identity Gate | DISPUTED | L2-OBLIGATION-A / Douceur 2002 | Gate upstream of queue, not a fixture | needs-owner-gate |
| Cascade Collapse (Signal→Credit→Reward→Authority) | DISPUTED | §0.3 | Multi-mechanism claim w/o single witness | needs-owner-gate |

### 3b. Notation (`NOTATION.md`)

| Entry / concept | Class | ER-D anchor / source | Proposed change | Promotion flag |
|---|---|---|---|---|
| Credit seed (line 15) | SYNC-FIX (high-conf) | ER-D5/ER-D7 | Update label to "Reviewed Credit Record" per ER-D7 | local-only |
| Economy Invariant / Invariant symbol | STRUCTURE-FIX | ER-D14 | Require witness/typed-negative field before asserting mechanism | promotion-candidate |
| ER-D10 Credit-Gaming Failure Fixture | DISPUTED | ER-D10 | Symbol asserts mechanism; needs witness — also salvage home for killed Reviewer⊥Reviewed | needs-owner-gate |
| Random Audit / Legible-Reward Split | DISPUTED | T-L1.2 / formal-TF-10 | Awaiting value | needs-owner-gate |

### 3c. Distills (`distills/DISTILLED-KNOWLEDGE.md`)

| Entry / concept | Class | ER-D anchor / source | Proposed change | Promotion flag |
|---|---|---|---|---|
| One Sentence (line 6) | STRUCTURE-FIX | ER-D1/ER-D2 | Anchor orphaned one-sentence distill with cite | local-only |
| Phase 2 financial tokens (line 39) | SYNC-FIX | ER-D12 | Reword to align with ER-D12, keep operator-reading kind | local-only |
| ER-D8 Attention Route | COVERAGE-ADD | ER-D8 (`DEFINITIONS.md:233`; distinct from ER-D6 raw-signal and ER-D2 credit-routing — it is attention-*use*) | Add distilled line | local-only |
| Maintenance First-Class Rewarded | DISPUTED | L3-REQUIREMENT | Awaiting fixture | needs-owner-gate |
| Decay-as-Loss / Randomized Withholding / Blind Reviewer Assignment | DISPUTED | socio-TF-6 / L4-INV-B / L4-INV-A | Sourced narrative/socio w/o standalone witness | needs-owner-gate |

---

## 4. Verdict Matrix (actionable rows only)

| Candidate | Owner | Witnessed? (non-vacuity) | Sound? (definitional) | Verdict |
|---|---|---|---|---|
| Credit Seed → Reviewed Credit Record (glossary) | ER-D7 | Yes (both explorers) | Yes | SYNC |
| Credit seed label (notation L15) | ER-D7 | Yes | Yes | SYNC |
| Phase 2 financial tokens (distills L39) | ER-D12 | Yes (operator-reading) | Yes | SYNC |
| Bounty Retrieval `Evidence:` field | ER-D3 | Yes | Yes | STRUCTURE |
| Economy Invariant symbol | ER-D14 | Yes | Yes | STRUCTURE |
| One Sentence distill anchor | ER-D1/ER-D2 | Yes | Yes | STRUCTURE |
| ER-D18 Status Vocabulary | ER-D18 (`DEFINITIONS.md:545`) | Yes | Yes | ADD |
| ER-D13 Privacy Redaction Policy | ER-D13 (`DEFINITIONS.md:388`) | Yes | Yes | ADD |
| ER-D8 Attention Route | ER-D8 (`DEFINITIONS.md:233`) | Yes | Yes | ADD |
| Flow-Budget Conservation (demoted) | ER-D14 (drafting route) | Yes (conservation accounting) | Yes, demoted | ADD |
| Reviewer ⊥ Reviewed Credit | ER-D2 ∧ ER-D10 | Yes | **No (collapses)** | **KILL** |

---

## 5. Typed Negatives — the 1 KILL

**Reviewer ⊥ Reviewed Credit** (proposed glossary term).

- **What it would have added:** a peer-level glossary term naming the requirement that a reviewer's credit be independent of the credit they review — guarding against reciprocal-review / review-capture gaming.
- **The exact fact that zeroed it (Quine, definitional collapse):** the requirement is already fully expressed by **ER-D2 (Authority-Separated Credit)**'s separation conjunct **∧ ER-D10 (Credit-Gaming Failure Fixture)**, which already enumerates reciprocal-review / review-capture as a fixture case. Minting a peer term would create a redundant definition with no marginal extension — definitionally unsound.
- **Salvage route:** do **not** mint a peer term. Record the content as (a) a named conjunct / witness under ER-D2, **or** (b) a fixture row under ER-D10. The promotion flag is dropped. This is a salvage, not a discard: the content survives, attached to its rightful owner.

---

## 6. Owner-Gated Disputes (9 rows)

Each is deferred — none is wrong, each lacks the witness or owner authority to land now.

| Row | Surface | Deferral reason (restraint / RULE gate) |
|---|---|---|
| Randomized Reward Or Audit | glossary | Orphaned — no source backing; blocked until an ER-D evidence path lands. |
| Self-Report Independence | glossary | L1-INV-A / formal-TF-2 — candidate invariant **not** among the 4 decidable-now; owner gate required. |
| Sybil / Costly-Identity Gate | glossary | L2-OBLIGATION-A / Douceur 2002 — is a gate upstream of the queue, not a fixture; mis-typed if added as-is. |
| Cascade Collapse | glossary | §0.3 — multi-mechanism claim with no single witness; fails non-vacuity at the term level. |
| ER-D10 Credit-Gaming Failure Fixture | notation | ER-D10 — symbol asserts a mechanism without a witness; also the salvage home for the killed term, so owner must adjudicate. |
| Random Audit / Legible-Reward Split | notation | T-L1.2 / formal-TF-10 — awaiting a concrete value. |
| Maintenance First-Class Rewarded | distills | L3-REQUIREMENT — awaiting a fixture before it can be distilled as load-bearing. |
| Decay-as-Loss / Randomized Withholding / Blind Reviewer Assignment | distills | socio-TF-6 / L4-INV-B / L4-INV-A — sourced narrative/socio material with no standalone witness. |
| Flow-Budget Conservation (promotion aspect) | glossary | Quine-demoted: "RULE-DECIDABLE-NOW" and "promotion-candidate" tags **stripped**; lands only as local-research candidate under ER-D14's drafting route. |

The recurring restraint categories: **no source → block**; **candidate invariant outside the decidable-now set → owner gate**; **mechanism asserted without a single witness → non-vacuity gate**; **mis-typed (gate vs fixture vs invariant) → re-route before entry**.

---

## 7. Promotion Boundary

This dispatch is **propose-only**.

- It proposes **entry text** for the reader surfaces. It does **not** edit canonical definitions and does **not** touch `DEFINITIONS.md` (ER-D1–D20 are trusted inputs, read-only here).
- Applying any proposed edit is a **separate governed write**, owned by the definitions/glossary authority, not by this audit.
- **No promotion** of token policy, bounty safety, governance authority, or economy mechanism occurs. The single `promotion-candidate` flag (Economy Invariant symbol, ER-D14) is a *flag for later adjudication*, not an enacted promotion.
- All **source kinds are preserved**: local-inference stays local-inference (Credit Seed), operator-reading stays operator-reading (Phase 2 distill), socio/narrative material stays deferred rather than being upgraded to a witness-backed claim.

---

## 8. Source-Kind & Citation Key

- **ER-D anchors** (`DEFINITIONS.md`): ER-D1, ER-D2 (Authority-Separated Credit), ER-D3, ER-D5, ER-D6 (raw-signal), ER-D7 (Reviewed Credit Record), ER-D8 (attention-use, `:233`), ER-D10 (Credit-Gaming Failure Fixture), ER-D12, ER-D13 (`:388`), ER-D14, ER-D18 (`:545`) — **canonical, trusted, read-only**.
- **Explorer/source paths**: L1-INV-A/formal-TF-2, L2-OBLIGATION-A/Douceur 2002 (supporting prior art), L3-INV-A/formal-TF-1, L3-REQUIREMENT, L4-INV-A/B, T-L1.2/formal-TF-10, socio-TF-6, §0.3 — all from `dispatch/economy-synthesis/findings.md` and the subtower returns.
- **Source kinds preserved throughout:** primary/canonical (ER-D), supporting (Douceur 2002), local-inference (Credit Seed), operator-reading (Phase 2 financial tokens), narrative/socio (decay/withholding cluster), open residue (orphaned Randomized Reward Or Audit).

*Verdict legend: SYNC = relabel to match owner; ADD = new entry filling a coverage gap; STRUCTURE = add required field/anchor; KILL = redundant, collapses into existing ER-D.*

---

*Subagent closeout: explorers Kuhn + Ostrom (integrated), synthesizer Simon (integrated, 1 zig-zag revision), reviewers Popper + Quine (integrated — 0 + 1 kills), writer Senge (this doc), auditor Brandenburg (see close report). No open subagent lane.*
