# Prize Register

Status: active open-contract register
Promotion scope: local-research-only

Each prize is an open contract for one economic-mechanism target. A prize closes
`awarded-candidate` only when a bet in [BET-REGISTER.md](BET-REGISTER.md) survives
its award collapse-test with a concrete witness. See [README.md](README.md) for
the rules. A closed prize is a candidate invariant only — it promotes nothing.

---

## PRZ-01 — Contribution-credit that routes attention without becoming authority

- **Status:** open
- **Target:** Is there a contribution-credit mechanism that lets reviewed credit
  route reviewer and community *attention* while never becoming governance
  authority, payout, or launch readiness by itself?
- **Evidence state:** `OQ-1` (first economy invariant) and `OQ-2` (first workflow
  witness); claim `C7` (Evidence Exchange separates observed reuse, reviewed
  credit, and owner-routed authority); the `measurement-is-not-authority` (TF-11)
  fixture in the program backlog; harvest selectors `credit-record-not-reward`,
  `attention-route-not-authority`. Unknown: whether the separation survives
  repeated-visibility incumbency under real review pressure.
- **Required witness:** one contribution edge where high accrued credit changes
  **no** authority state — the authority-handoff fixture
  ([validation/contribution-edge-fixtures/](../validation/contribution-edge-fixtures/README.md)).
- **Award collapse-test:** a candidate wins only if it **survives the
  reputation-capture / attention-capture attack lane**
  ([lanes/ATTACK-LANES.md](../lanes/ATTACK-LANES.md)) **and** passes the
  authority-collapse check (no path from credit to governance power), **with** the
  witness present.
- **Allowed / blocked use:** candidate invariant only; never governance weight,
  payout, reputation finality, or launch.
- **Bets:** `BET-PRZ-01-a` (open).

---

## PRZ-02 — Reward-eligibility that resists bounty-farming

- **Status:** open
- **Target:** Is there a reward-eligibility rule that recognizes genuine
  contribution without training bounty-retrieval behavior in rational actors,
  cliques, or bots?
- **Evidence state:** the `block-as-default` posture on bounties
  ([TOWER.md](../TOWER.md) borrow/block table); the AGENTS non-negotiable (no
  bounty design without a bounty-optimization failure analysis); the
  `failed-dao-crypto` subtower's exploit/bounty precedent. Unknown: whether any
  eligibility rule separates maintenance value from completion-farming under
  adversarial optimization.
- **Required witness:** a fixture where a bounty-farming strategy yields **no**
  eligibility advantage over sustained, reviewed maintenance work.
- **Award collapse-test:** a candidate wins only if it **survives the
  bounty-optimization / farming attack lane** with delayed-reward eligibility and
  signal/credit/reward/authority separation intact, **with** the witness present.
- **Allowed / blocked use:** candidate invariant only; Phase-2 financial
  mechanisms stay blocked.
- **Bets:** none yet — open for staking.

---

## PRZ-03 — Bounded randomness that deters gaming without feeling arbitrary

- **Status:** open
- **Target:** Is there a randomized audit/selection mechanism that makes gaming
  expensive and audit selection unpredictable **without** making rewards feel
  arbitrary or unjust?
- **Evidence state:** `OQ-3` (what randomness protects); `REC-C6` (randomness with
  a job — must name what it protects, what it must not randomize, how fairness is
  witnessed, how abuse is audited); the `audit-randomization` fixture in the
  program backlog; the `formal-mechanisms` subtower (stochastic audits).
  Unknown: whether bounded randomness can raise gaming cost while a legitimacy /
  fairness target stays explicit.
- **Required witness:** a fixture where randomization measurably raises gaming
  cost while the fairness/audit target it protects stays explicit and the payout
  logic stays deterministic.
- **Award collapse-test:** a candidate wins only if it **survives the
  "randomness = arbitrary / unjust" attack** *and* names exactly what it must
  **not** randomize (it must not become payout logic), **with** the witness
  present.
- **Allowed / blocked use:** candidate invariant only; randomness never becomes
  reward/payout logic.
- **Bets:** none yet — open for staking.
