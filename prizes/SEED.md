# Bets & Prizes — Imported Form (source posture)

Status: active source-posture record
Promotion scope: local-research-only

This device adopts the **form** of the bet/prize discipline from harvested
precedent. It does **not** import the precedent's content, and it copies no
private snapshot text — only citations and the already-demoted vocabulary. The
source snapshots are local-only (gitignored); cite the source-record IDs and line
ranges, never paste.

## What Was Adopted (form only)

| Adopted form | Source | Source kind | What we take | What we do NOT take |
| --- | --- | --- | --- | --- |
| **Prize = aim until closed by a witness or a typed negative** | `SRC-DST-PRIZES` — [sources/local-snapshots/domainspec-lean/PRIZES.md](../sources/local-snapshots/domainspec-lean/PRIZES.md) | formalization-precedent / analogy | The contract shape: a prize is an open aim that closes only on a concrete closing witness (there: a Lean theorem; here: a survived candidate with a workflow witness) or a banked typed negative. | The catalog's content — Lean / category-theory / thermodynamics mappings, which are irrelevant to economics. |
| **`prize` is not an achievement** | harvest selector `dlean-prize-not-achievement` — [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md), [research.md:186-190](../harvest/cav2-lean/research.md#L186-L190) | formalization-precedent | Prizes are research aims with evidence states, witnesses, and open contracts. | Treating prize/badge/green-build/tier labels as solved mechanisms, reward policy, or governance authority. |
| **`bet` is a labeled conjecture, never a stake** | harvest selector `dlean-bet-register-boundary` — [harvest/cav2-lean/research.md:222-225](../harvest/cav2-lean/research.md#L222-L225) | formalization-precedent | "Bet" = a labeled research conjecture / candidate bridge. | "Bet" as economic staking, wager, or authority. |
| **Credit / contribution + open-problem framing** | Evidence Exchange — `CAV2-EE-*` selectors, claim `C7` — [claims/SOURCE-CLAIM-LEDGER.md:15](../claims/SOURCE-CLAIM-LEDGER.md#L15) | method-authority / local-inference (harvested, supporting source) | The separation of observed signal, reviewed credit, reward, and owner-routed authority as the field structure prizes must respect. | Treating the credit framing as an economy invariant or as ResonantDAO policy. |

## Blocked Uses (carried forward from the demotions)

- A prize label is **not** an achievement, a validation, or a reward entitlement.
- A bet is **not** a stake, a wager, or an authority claim.
- A closed (`awarded-candidate`) prize is a **candidate invariant only** — not a
  deployed mechanism, payout, governance weight, or launch readiness.
- A prize-as-deployed-economy-mechanism (a real staking / prediction-market
  design) stays **blocked** under the Phase-2 financial blocker register until it
  is independently witnessed and owner-routed.

## Why Form-Only Keeps The Boundary Clean

Adopting only the form preserves `REC-C10` (source posture) and the AGENTS
public/private check: no private upstream content enters tracked files, and the
device remains a standalone, portable harness feature rather than a re-coupling to
the upstream framework. See [README.md](README.md) for the device and its
collapse-test.
