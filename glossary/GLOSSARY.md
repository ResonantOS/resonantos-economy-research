# Local Glossary

Status: active
Promotion scope: local-research-only

This glossary is a reader-facing lookup layer, not the definition lifecycle
authority. Normative local semantics live in
[definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md), and lifecycle state
lives under [ER-D23](../definitions/DEFINITIONS.md#er-d23-load-bearing-term-lifecycle).
`Promotion status` below is a reader hint; it is not proof, validation, policy,
or implementation readiness.

## Contribution Economy

- Source kind: primary-source
- Local meaning: Phase 1 economy centered on verified contribution, community work, membership, education, ResonantOS, `$RES`, and `$RCT`.
- Arcanum reading: an economy whose first unit of proof should be reviewed contribution receipts, not payout optimization.
- Promotion status: local-only
- Misuse warning: do not treat this as proof that contribution measurement is solved.
- Evidence: `https://resonantdao.com/whitepaper/`, `3. Phase 1`.

## Bounty Retrieval

- Source kind: operator-reading
- Local meaning: the failure mode where actors optimize visible tasks, reward formulas, or payout queues instead of the community goal.
- Arcanum reading: a reward-induced residue that must be named before bounties or task rewards are designed.
- Promotion status: promotion-candidate
- Misuse warning: do not use this as an argument against all rewards; use it as a demand for bounded, reviewable reward design.
- Evidence: [definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md) ER-D3 (Bounty-Optimization Trap); [AGENTS.md](../AGENTS.md); [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md).

## Reviewed Credit Record

- Source kind: local-inference
- Local meaning: a reviewed contribution-evidence record carrying scope, status, and assumptions, with no reward entitlement and no authority effect — the bounded credit unit a first witness produces after review. (Formerly the local term "Credit Seed".)
- Arcanum reading: evidence that can route attention but cannot promote authority.
- Promotion status: local-only
- Misuse warning: not a payout entitlement, not final reputation, not anti-gaming proof, not governance authority.
- Evidence: [definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md) ER-D7; [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md).

## Economy Invariant

- Source kind: operator-reading
- Local meaning: a condition that should remain true across reward, reputation, governance, and financial mechanisms.
- Arcanum reading: candidate bridge from research to future constitution or validation work.
- Promotion status: promotion-candidate
- Misuse warning: research can propose invariants; authority must decide before they constrain work.
- Evidence: [authority/AUTHORITY-MODEL.md](../authority/AUTHORITY-MODEL.md), [authority/promotion-policy.md](../authority/promotion-policy.md).

## Randomized Reward Or Audit

- Source kind: open-residue
- Local meaning: a mechanism that introduces bounded unpredictability into audit selection, review, or reward eligibility to reduce gaming.
- Arcanum reading: a possible anti-gaming tool, not a justice model by itself.
- Promotion status: blocked
- Misuse warning: randomness can deter gaming and still produce unfair or illegible outcomes.
- Evidence: no source collected yet; assigned to formal-mechanisms and behavioral subtowers.

## Phase 2 Financial Mechanism

- Source kind: primary-source
- Local meaning: future token, treasury, liquidity, buyback/burn, reserve, UCI, or financial-growth mechanism described as gated and not immediate.
- Arcanum reading: future-work lane requiring failure precedent, legal/security/treasury evidence, and stress-test thresholds.
- Promotion status: blocked
- Misuse warning: do not use Phase 2 concepts to justify Phase 1 mechanisms.
- Evidence: `https://resonantdao.com/whitepaper/`, `12. Phase 2`, `16. Risk, Research, and Launch Discipline`.

## Local Research Status Vocabulary

- Source kind: local-inference
- Local meaning: the closed set {research-pass, research-flag, research-block} used to label research artifacts; research-pass means only "this artifact can move to its next research step," never validation proof, promotion, implementation readiness, reward eligibility, governance weight, policy, or authority effect.
- Arcanum reading: replaces ambiguous pass/flag/block wording so a research status cannot be misread as a safety or authority claim.
- Promotion status: local-only
- Misuse warning: do not use research-pass as evidence of safety, launch or implementation readiness, reward eligibility, governance weight, or authority.
- Evidence: [definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md) ER-D18.

## Privacy Redaction Policy Prerequisite

- Source kind: open-residue
- Local meaning: public lineage reuse requires a privacy redaction policy that names the excluded private context; do not publish contribution lineage, receipts, or reusable exports until a real scrub rule exists.
- Arcanum reading: a prerequisite gate before any public attribution or lineage export, not a feature.
- Promotion status: local-only
- Misuse warning: the absence of complaints is not a redaction policy; the excluded private context must be named first.
- Evidence: [definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md) ER-D13.

## Flow-Budget Conservation (candidate invariant)

- Source kind: local-inference
- Local meaning: a candidate invariant drafted under ER-D14 (invariant drafting route): a reward/credit flow should conserve a bounded budget — net outflow cannot exceed a conserved source.
- Arcanum reading: a draft Lane-3 invariant, not a validated rule; it must point to a testable witness or its exact negative case.
- Promotion status: local-research-only
- Witness: the decidable flow-conservation FAIL-region (formal-TF-1) — FAIL iff any `epoch` (ER-D25) `Σ(emitted)` (ER-D26) `> treasury` (ER-D24), OR any `$RCT` summed into `$RES`; PASS otherwise. This is the fixture test spec, not a passing result.
- Typed negative: an epoch where `Σ(emitted) > treasury`, or any path that sums `$RCT` into `$RES`.
- Misuse warning: a candidate draft, not proof of economy safety; not a validated invariant, not a decidable rule, not a promotion-candidate.
- Evidence: [definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md) ER-D14; [dispatch/economy-synthesis/findings.md](../dispatch/economy-synthesis/findings.md) L3-INV-A / formal-TF-1.
