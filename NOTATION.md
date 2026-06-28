# Notation Bridge

Status: active
Promotion scope: local-research-only

## Local Symbols

| Symbol | Source meaning | Plain-language reading | Used in |
| --- | --- | --- | --- |
| `$RES` | Whitepaper Phase 1 transferable economy and reward token. | Spendable/reward utility token whose transferability and later liquidity create gaming and speculation risk. | L0, L1, attack lanes. |
| `$RCT` | Whitepaper non-transferable contribution and reputation token. | Reputation score/token that cannot be bought or transferred, but can still be gamed through behavior, collusion, and metric optimization. | L0, L1, definitions. |
| `$R10` | Proposed Phase 2 financial token with aspirational 10 percent annual growth target. | Future algorithmic financial mechanism, blocked for MVP research until readiness and stress tests exist. | L1, closure gates. |
| `$R12`, `$R15` | Proposed future research tokens with lock periods and higher target rewards. | Future financial/reward adapter concepts with liquidity, expectation, and risk surfaces. | L1, closure gates. |
| UCI | Universal Contribution Income. | Long-term contribution-income idea, not passive income and not a launch claim. | L1, attack lanes. |
| Reviewed Credit Record | Reviewed contribution-evidence record (ER-D7): scope + status + assumptions, no reward entitlement, no authority effect. Formerly "Credit seed". | A reviewed record that may route attention or eligibility, but is not payout, reputation finality, or authority. | L1, L2, final learning pack. |
| Authority | CyberAlchemy v2 owner-routed reliance state. | What the system is allowed to rely on after gates, not what the market likes. | All artifacts. |
| Invariant | A candidate rule that should remain true across mechanisms and workflows; under ER-D14 a draft requires a workflow witness OR a typed negative, and is not proof of economy safety. | Candidate research output needing a testable witness or named negative case; must go through authority before constraining implementation. | Attack lanes, definitions. |
| treasury | ER-D24 (candidate): launch-time reserve owning the `$RES` supply (role from claim C5); size is a gated, un-snapshotted whitepaper figure. | The pot `$RES` is paid out of — role known, size not locally verified. | ER-D24, flow-conservation fixture. |
| epoch | ER-D25 (candidate): accounting period emissions are summed over; a fixture-declared parameter. | The time window the conservation check uses; a knob, not a source fact. | ER-D25, flow-conservation fixture. |
| Σ(emitted) | ER-D26 (candidate): per-epoch sum of `$RES` emitted from the treasury; schedule is the pending input. | Total reward paid out in a period. | ER-D26, flow-conservation fixture. |
| `Σ(emitted) ≤ treasury` | Flow-conservation fixture FAIL-region (formal-TF-1): FAIL iff any `epoch` `Σ(emitted) > treasury`, OR any `$RCT` summed into `$RES`; PASS otherwise. | The decidable test the fixture runs — it specifies the test, not a passing result. | formal-TF-1, ER-D24/D25/D26. |
| stables · liquidable · haircut · obligations · burn | ER-D27 (candidate) runway primitives: non-native reserves · cash-convertible assets · liquidation discount (0..1) · liabilities due · outflow rate. | The pieces of the solvency runway numerator and denominator. | ER-D27, formal-TF-13. |
| `runway numerator = 0 while burn > 0` | ER-D27 runway-inequality FAIL-region (formal-TF-13): runway undefined/≤0 at 100%-native init; named thresholds are analogy, not asserted. | Can't pay bills once the liquid buffer is zero. | ER-D27, formal-TF-13. |
| `\|E[stratified_estimate] − true_rate\| ≤ CI` | ER-D28 (candidate) measurement-not-authority FAIL-region (formal-TF-11): FAIL iff `> CI` under a DECLARED adversarial steering class. | A random-sample health estimate that stays honest even when the rewarded path is gamed. | ER-D28, formal-TF-11. |

## Reading Warning

Do not read `token`, `credit`, `reputation`, or `contribution` as interchangeable. The main design risk is collapse:

```text
activity metric -> reward -> status -> governance influence -> authority
```

The tower's job is to break or gate each arrow until evidence justifies it.
