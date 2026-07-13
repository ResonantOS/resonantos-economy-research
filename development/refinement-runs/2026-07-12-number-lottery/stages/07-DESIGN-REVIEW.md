# Refine Design Review

Mode: `refine-design-review`
Owner: Interrogation
Verdict: flag, repairable
Questions asked: 0

The design is coherent enough to repair without a human decision. It correctly
rejects direct supply coupling and separates the public baseline from hidden
extensions, but several interfaces could still overclaim or become attack
surfaces if carried into Plan unchanged.

## Review Gates

### Non-vacuity

The architecture names nine fixtures but does not yet specify complete fixture
records or expected evidence. It may proceed to repair and plan specification,
not execution.

### Definitional soundness

The core terms are materially separated. Remaining wording risks:

- “one artifact per eligible participant” can imply unique-human certainty; the
  counted unit must be one artifact per accepted eligibility receipt under one
  owner-defined rule;
- an `AbstentionReceipt` could turn non-participation into tracked participation;
  the minimum unit should require no public abstention record;
- policy field `planned_total_supply_reference` needs source version/date/digest
  so a future whitepaper change does not look like ritual immutability;
- a “symbolic integer” must not be rendered as a rank, score, payout, or
  personality/mentality measurement;
- “Number Lottery” implies chance or gambling although the baseline is
  deterministic; it remains only a working codename.

## Design Findings

| ID | Finding | Severity | Required repair |
| --- | --- | --- | --- |
| DR-1 | Eligibility receipt may be mistaken for unique human. | major | Count accepted artifacts under an external rule; state identity claims as none. |
| DR-2 | Recording abstention can create privacy/status pressure. | major | Make non-participation no-record by default; optional aggregate counts require separate consent/privacy review. |
| DR-3 | 1B policy reference lacks versioned source snapshot metadata. | major | Record URL, whitepaper version/date, observation date, and digest/handle; comparison checks separation, not eternal policy. |
| DR-4 | Public baseline remains vulnerable to last-submitter grinding. | major | Intake stays fixture-blocked; compare hidden provisional output, batch close, and commit-before-close designs without claiming resolution. |
| DR-5 | Harmful content discovered after freeze needs precise disposition semantics. | major | Root remains historical; display eligibility can change through signed disposition history, never silent deletion. |
| DR-6 | Event claims can drift into status leaderboards. | major | Prohibit person rankings, featured placement by role/donation, and reward-bearing attendance. |
| DR-7 | Policy firewall could be mistaken for economic validation. | critical wording | Name it `PolicyNonEffectCheck`; assert only absence of write dependency in the fixture model. |
| DR-8 | “Number Lottery” misstates deterministic architecture. | minor | Keep as codename; recommend user-facing rename before any pilot/public artifact. |
| DR-9 | Hidden-message requirements remain desired but outside L0. | flag | Preserve explicit commitment extension criteria; do not call public baseline complete for the original privacy aspiration. |
| DR-10 | Fixture scaffold could be mistaken for validation. | critical boundary | Every fixture row must carry `status: specification-only` until executed by an evidence harness. |

## Toy-Game Questions For Repair

1. Can two implementations reproduce canonical bytes and root across Unicode and
   ordering variants?
2. Can 100 wallets or duplicate receipts increase accepted artifact count?
3. Can last submitter steer the symbolic integer by variant search?
4. Can a later harmful-content disposition change display eligibility without
   changing historical root?
5. Does non-participation create any record, penalty, lost eligibility, or social
   inference?
6. Can steward migration change rules, consent, source snapshot, or policy fields?
7. Can founder/donor/technical roles affect placement, labels, or event voice?
8. Can any ritual mutation alter token/governance/reward state?
9. Does every fixture say specification-only and name its future evidence owner?

## Readiness Verdict

- Six-view coverage: pass.
- Owner boundaries: pass after named repairs.
- Privacy aspiration: flag; hidden path intentionally deferred.
- Fixture and policy non-effect evidence: block for execution, not for plan.
- Next route: Distill Repair (`validate-repair`).
