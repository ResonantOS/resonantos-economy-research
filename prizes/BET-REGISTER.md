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

## BET-PRZ-04-a — Prior-activity receipts improve result attribution

- **Stakes against:** `PRZ-04` (prior-activity evidence that adds recognition
  value).
- **Resolution:** open
- **Conjecture:** Adding versioned prior-activity receipts and explicit
  result-link claims to review recovers genuine trace-linked and bridge-linked
  contributions that result-only review misses, while general-capacity,
  attendance-only, time-only, and unlinked controls remain without result-scoped
  credit.
- **Predicted falsifier (collapse-test):** under a preregistered comparative
  decision rule, the added evidence produces no net improvement in genuine-link
  recovery, or any gain is erased by false acceptance, receipt farming,
  entitlement error, or unreasonable review burden.
- **Attack lane:** Lane 1 authority-separated credit plus ER-D10 credit-gaming,
  invisible-work, reviewer-capture, and authority-handoff controls
  ([lanes](../lanes/ATTACK-LANES.md)).
- **Precedent label:** `build-from-owned components` — operational and formal
  precedents own receipt or representation fragments, but no admitted source
  owns or validates the integrated review pipeline.
- **Position (tension):** the proposer predicts that contemporaneous evidence
  recovers enabling work that result-only review misses; the skeptic predicts
  that extra records create hindsight narratives, false credit, and review cost
  without net information.
- **Witness status:** no comparative fixture or run exists; the three
  load-bearing candidate terms must be registered before fixture use.

---

## BET-PRZ-05-a — Result-scoped recognition improves later contribution

- **Stakes against:** `PRZ-05` (result-scoped recognition that helps the
  community).
- **Resolution:** open
- **Conjecture:** Receiving carefully scoped recognition for a witnessed result
  increases a preregistered later community outcome—such as voluntary useful
  follow-through, retention, maintenance, mentoring, or trust—without making
  contribution more performative, status-seeking, exclusionary, or reward-
  entitled.
- **Predicted falsifier (collapse-test):** the named community outcome does not
  improve relative to the control, or any observed gain is erased by motivation
  crowding, status gaming, access inequality, entitlement, attrition, or review
  burden.
- **Attack lane:** Lane 2 reputation capture, with socioeconomic-behavior
  crowding, visibility, threshold, and access controls
  ([lanes](../lanes/ATTACK-LANES.md)).
- **Precedent label:** `novel-attempt / direction borrowed` — behavioral sources
  supply warnings and experimental questions, not a ResonantOS effect or a safe
  recognition rule.
- **Position (tension):** the proposer predicts that recognition sustains
  otherwise invisible enabling work; the skeptic predicts that formal
  recognition crowds out intrinsic contribution and creates a status game.
- **Witness status:** no bounded behavioral pilot exists. PRZ-04's witness is an
  upstream evidence prerequisite and cannot be reused as behavioral proof.

---

## BET-PRZ-06-a — Bilingual investment language informs without promising

- **Stakes against:** `PRZ-06` (bilingual explanation without entitlement
  drift).
- **Resolution:** open
- **Conjecture:** Presenting `investment → realization → cashing` together with
  the exact operational mapping improves understanding of deferred contribution
  without increasing beliefs that activity accumulates guaranteed value, that
  cashing guarantees recognition or payment, or that recognition creates
  reputation or authority.
- **Predicted falsifier (collapse-test):** compared with operational language
  alone, the bilingual explanation fails to improve the preregistered
  comprehension outcome or worsens any bounded entitlement/authority error.
- **Attack lane:** Lane 1 signal/credit/authority separation plus Lane 4
  bounty/prize/reward-language drift
  ([lanes](../lanes/ATTACK-LANES.md)).
- **Precedent label:** `novel-attempt` — the narrative/operational mapping has no
  admitted comprehension witness; behavioral sources only motivate the risk.
- **Position (tension):** the proposer predicts that economic metaphor makes the
  delayed mechanic legible; the skeptic predicts that the metaphor imports a
  guaranteed-return model that disclaimers cannot undo.
- **Witness status:** no randomized comprehension comparison exists. A language
  win would not satisfy PRZ-04 or PRZ-05.

---

*Open for staking: `PRZ-02` and `PRZ-03` still have no bets. The Deferred
Contribution family has three open bets with separate witnesses; none may
inherit another bet's resolution.*
