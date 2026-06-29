# Bet Register

Status: active bet register
Promotion scope: local-research-only

Each bet is a falsifiable candidate mechanism staked against a prize in
[PRIZE-REGISTER.md](PRIZE-REGISTER.md). A bet carries the one fact that would kill
it and the attack lane it must survive. Resolution runs through the confirm/deny
loop and skeptic gates ([GUIDE.md](../GUIDE.md)). A bet is a labeled research
conjecture — never an economic stake. See [README.md](README.md).

| resolution | meaning |
| --- | --- |
| `open` | not yet resolved |
| `survived` | survived its attack lane + authority-collapse check, witness present → closes its prize to `awarded-candidate` |
| `killed` | refuted → banked as a typed negative in [residue/open-residue.md](../residue/open-residue.md) (what it would have contributed + the fact that zeroed it) |

---

## BET-PRZ-01-a — Reviewed-credit-as-attention-router

- **Stakes against:** `PRZ-01` (contribution-credit that routes attention without
  becoming authority)
- **Resolution:** open
- **Conjecture:** Credit accrues only from *reviewed* contribution and is allowed
  to do exactly one thing — order/route review attention (visibility in a review
  queue). An explicit authority-handoff fixture proves that any level of accrued
  credit changes **no** authority state (no vote weight, no merge right, no payout
  trigger).
- **Predicted falsifier (collapse-test):** an attention-capture path where
  repeated visibility becomes *de-facto* authority — incumbency, reviewer
  bottleneck, or a clique routing attention to itself — so that credit governs
  indirectly even though it is formally separated.
- **Attack lane:** reputation-capture / attention-capture
  ([lanes/ATTACK-LANES.md](../lanes/ATTACK-LANES.md)).
- **Precedent label:** `build-from-owned` — the Evidence Exchange owns
  credit-before-money and signal/credit/authority separation (claim `C7`); this
  repository does not yet deploy or witness it. Cite and build, do not re-derive.
- **Position (tension):** the proposer predicts survival *if and only if* the
  authority-handoff fixture holds under adversarial review; a skeptic on the
  attention-capture gate predicts the indirect-authority path kills it. The
  disagreement is exactly: *does formal credit/authority separation survive
  repeated-visibility incumbency?*
- **Witness status:** required witness (authority-handoff fixture) not yet built —
  this bet cannot reach `survived` until it exists.

---

*Open for staking: `PRZ-02` and `PRZ-03` have no bets yet. A good bet names its
own falsifier and the lane it must survive before it is registered.*
