# formal-mechanisms — Tower Findings (DRAFT)

Status: draft · synthesizer lens "Meadows, Donella H." · ISOLATED tower · local-research-only.
Claim ≤ proof. No promotion of definitions, token policy, governance weights, or implementation.

Inputs reconciled: `returns/research.md` — three independent isolated witnesses:
- **Fritz** (structural-invariant): F1 conservation, F2 signal separation, F3 temporal decay.
- **Myerson** (strategic / game-theoretic): F1–F9, collusion / IC / posted-price.
- **Beer** (stochastic-control): F1–F6, randomized audit / phase-transition / treasury stress.

Each sub-lane is treated as an **independent witness**. A finding is upgraded in
confidence only where ≥2 witnesses converge from different method bases; tensions
are surfaced rather than averaged away. The systems-lens reading (Meadows): name
the **stock**, the **flow**, the **feedback loop**, and the **leverage point** —
and refuse to treat a measurement signal as a control authority.

---

## Reading frame (Meadows lens, non-authoritative)

The whitepaper fixes one stock ($RES = 10⁹) and leaves the **flows** (emission,
treasury spend, decay) open. In systems terms the dangerous gaps are not the
stock but the **unlabeled flows and the missing governors**. Three of the
witnesses independently locate failure at the same structural seam: a quantity
that is *measured* (reputation / contribution / audit score) is allowed to *act*
as an authority or an open-loop set-point. That seam is the through-line of this
tower.

---

## Convergence map (where independent witnesses agree)

| Convergent theme | Witnesses | Joint reading |
| --- | --- | --- |
| **C1 Measurement ≠ authority** | Fritz F2 (signal separation), Beer F2 (optimize/estimate split) | A score may route attention/health-estimation but must not *decide* allocation or governance. Two unrelated formalisms (order-morphism independence; stratified-unbiased estimator) forbid collapsing the measurement arm into the control arm. |
| **C2 Randomness defends a *signal*, not a payout** | Myerson F4/F3 (informational asymmetry, exclusion prob.), Beer F1/F3 (unpredictable audit) | Bounded randomness is legitimate when it protects unpredictability of *audit/review*, illegitimate when it is a vague "fair lottery" over rewards. Collapse test (Beer F1): inferable schedule → deterrence → 0. |
| **C3 Identity/side-info is the load-bearing layer** | Myerson F7/F9 (side-info defeats cartels; sybil = costless cartel), Beer F1 (proof-of-life) | Pure scoring cannot deliver collusion/sybil resistance; it must be *conditioned* on an independent identity/attestation channel. Convergent across game-theoretic and control witnesses. |
| **C4 Growth-shaped emission is a centralization attractor** | Beer F4/F6 (geometric reward → single-holder capture; affordability spiral), Fritz F1 (stock monotone exists, *flow* monotone does NOT) | The conserved-stock certificate says nothing about the flow; the stochastic witness says an unconstrained growth-shaped flow has a single-holder fixed point. Same gap from two directions. |

These convergences are **cross-method**, so they earn higher (not certain)
confidence. They remain candidate invariants, not proofs.

---

## Tension map (where witnesses or the whitepaper disagree)

| Tension | Poles | Tower note |
| --- | --- | --- |
| **T1 Reputation-into-governance** | Whitepaper: "governance influence should depend on contribution level, sector reputation, recent activity" **vs** Fritz F2 + Myerson F8 (DSIC): authority must be independent of self-reported score | **Direct contradiction.** Fritz labels the invariant *UNMET as written* (not merely unproven). This is the tower's sharpest tension. |
| **T2 Discretionary vs posted-price scoring** | Whitepaper leaves scoring open / relative **vs** Myerson F6: only IC + collusion-resistant single-bidder class is **posted prices** | Discretionary/relative scoring is, by F6, outside the collusion-resistant class. Tension is structural, not stylistic. |
| **T3 Geometric/finite-horizon optimality vs long-run capture** | Beer F4 (geometric reward chaotic-centralizing long-run) **vs** residue counterpoint (Kiayias/Fanti: geometric optimal at fixed horizon) | The witness *itself* carries its own counterpoint: optimal short-horizon, capturing long-horizon. Not a contradiction to suppress — a horizon-dependence to flag. |
| **T4 DSIC price vs non-vacuity** | Myerson F1: DSIC + 1-SCP forces coordinator revenue → 0 | Anti-collusion strength trades against any non-trivial prize. Whitepaper bounty/prize surface must declare which side of this it accepts. |
| **T5 Stock conservation vs flow openness** | Fritz F1: monotone for *stock* ($RES=10⁹) exists; *flow* (emission/treasury) has none | The reassuring "fixed supply" fact does not bound the dangerous quantity. A false sense of conservation. |

---

## Findings (typed)

Each finding: statement · source-kind · ResonantDAO surface · attack-lane tag(s)
· subtower-contract decision · harness/fixture need.

### TF-1 — Credit conservation holds for stock, not flow
- **Statement:** An additive monotone certifies a conserved bounded budget for the *stock* ($RES fixed at 10⁹), but the whitepaper leaves emission, limits, and treasury OPEN, so **no flow-conservation certificate exists**. $RCT (reputation, no fixed supply) must carry a *separate* monotone and must NOT be summed into the $RES law.
- **Source-kind:** primary-source (Fritz F1, monotones-as-conserved-quantity; whitepaper constraint) + local-inference (the stock/flow split as applied here).
- **Surface:** $RES supply law; treasury; emission schedule.
- **Lanes:** Lane3 $RES-emission, Lane2 $RCT-capture.
- **Decision:** borrow-carefully (the *invariant statement*); the negative result ("flow uncertified") is **open-residue** until emission is specified.
- **Harness:** candidate invariant. Needs JSONL ledger-replay fixture asserting per-epoch `Σ(emitted) ≤ treasury` and `Σ($RCT)` accounted on a *distinct* monotone. Candidate, not proof.

### TF-2 — Signal separation invariant is UNMET as written
- **Statement:** Authority/allocation rule `A` is signal-separated iff `A` is independent of the agent's own report of its score `S` (VCG-redistribution / order-morphism independence). The whitepaper's "governance influence depends on contribution/reputation/recent activity" **violates** this; $REX-* feeds authority directly.
- **Source-kind:** primary-source (Fritz F2; Guo et al. VCG redistribution) + operator-reading (the whitepaper quote interpreted as authority-binding).
- **Surface:** governance weighting; $REX-* reputation → governance influence.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture.
- **Decision:** **block** (as authority binding). Convergent with Myerson F8 (DSIC fragility) → highest-tension finding (T1).
- **Harness:** candidate invariant. Needs fixture proving `governance = f(independently-verified inputs)` with reputation confined to a *non-binding routing* channel. Until then the surface is blocked, not borrowed.

### TF-3 — Temporal decay law is absent
- **Statement:** A defensible reputation has form `R_t = D·(recent, half-life λ) ⊕ P·(permanent, absorbing submonoid)`: recent decays, durable work is non-erasable. The whitepaper has **no decay formula**. If a decayed quantity ever touches $RES claims it re-enters the budget law (TF-1).
- **Source-kind:** related-source (Fritz F3; Wang et al. recency-weighted reputation) + open-residue (whitepaper silence).
- **Surface:** $RCT/$REX reputation accrual; recent-activity weighting.
- **Lanes:** Lane2 $RCT-capture, Lane5 Phase2-financial (if decay touches financial claims).
- **Decision:** future-work (decay form is a candidate; whitepaper gap is residue).
- **Harness:** candidate. Needs fixture distinguishing absorbing (permanent) from decaying (recent) channels and asserting decayed mass does NOT cross into $RES.

### TF-4 — Anti-collusion vs non-vacuity is a hard trade (impossibility baseline)
- **Statement:** DSIC + immunity to a single colluding coordinator is achievable only by a trivial mechanism with coordinator revenue forced to 0 (1-SCP impossibility). A custodian/validator who *scores and can side-deal* cannot be both truth-dominant and prize-bearing without zeroing the prize.
- **Source-kind:** primary-source (Myerson F1; Ferreira/Gafni/Resnick posted-price impossibility).
- **Surface:** validator/custodian scoring role; bounty/prize pool.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture, Lane4 bounty-prize.
- **Decision:** borrow-carefully (as a *constraint the design must declare against*, T4), not a mechanism to adopt.
- **Harness:** N/A (impossibility/baseline). The design must *state* which pole (truthfulness vs non-trivial prize) it concedes.

### TF-5 — Exclusion principle: bounded randomized credit-withholding
- **Statement:** Collusion-proofness obtains iff a cartel is not all-inclusive (≥1 guaranteed honest), OR multiple competing cartels exist, OR there is nontrivial no-allocation probability. Lever: randomized credit-withholding (positive probability) + guaranteed honest minority + partitioned competing review pools.
- **Source-kind:** primary-source (Myerson F2/F3; Che & Kim exclusion principle).
- **Surface:** review-pool assignment; credit-award step; bounty adjudication.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture, Lane3 $RES-emission, Lane4 bounty-prize.
- **Decision:** **promotion-candidate** (the *invariant family*: randomness assigned to a named anti-collusion purpose, satisfying TOWER closure standard). NOT promotion of any specific probability or weight.
- **Harness:** candidate invariant. Needs fixture demonstrating (a) honest-minority guarantee and (b) nonzero-withholding under a simulated all-inclusive cartel. Random rewards here require an explicit fairness + anti-gaming witness (refusal-standard requirement) before any promotion past candidate.

### TF-6 — Informational asymmetry is the weapon (blind/randomized assignment)
- **Statement:** Complete-information colluders act as a single agent (mechanism design is futile against them); leverage exists only via *mutual asymmetry*. Lever: blind/randomized reviewer assignment and hidden pairing so colluders cannot verify each other pre-scoring.
- **Source-kind:** primary-source (Myerson F4) — converges with Beer F1 (unpredictable audit) and Myerson F5 (IC-collusion self-defeating).
- **Surface:** reviewer assignment; pairing of reviewer↔contribution.
- **Lanes:** Lane1 auth-credit, Lane4 bounty-prize.
- **Decision:** borrow-carefully → promotion-candidate (the *assignment-blindness invariant*).
- **Harness:** candidate. Needs fixture: assignment graph is unpredictable to participants pre-scoring; measure collusion-detectability vs blindness.

### TF-7 — Posted-price > discretionary scoring (collusion-resistant + IC class)
- **Statement:** In the single-bidder case the only IC + collusion-resistant mechanisms are **posted prices**. A fixed published reward schedule per *validated* contribution dominates discretionary/relative scoring on collusion-resistance + truthfulness.
- **Source-kind:** primary-source (Myerson F6).
- **Surface:** contribution scoring rule; $RES reward-per-contribution; bounty schedule.
- **Lanes:** Lane2 $RCT-capture, Lane3 $RES-emission, Lane4 bounty-prize.
- **Decision:** **promotion-candidate** (posted-price *form* as the safer scoring class; T2 tension with the whitepaper's open/relative scoring).
- **Harness:** candidate. Needs fixture contrasting posted-schedule vs relative-scoring under a misreport coalition; assert posted schedule's truth-dominance survives.

### TF-8 — Side-information as payment-conditioning channel
- **Statement:** Conditioning payment on a signal ~independent of valuations makes outcomes unpredictable, eroding colluder confidence. Anti-sybil signals (proof-of-life, tenure, attestation) should *condition payment*, not merely gate membership.
- **Source-kind:** primary-source (Myerson F7; "Collusion-proof Auction via Side Information") — converges with Beer F1/C3.
- **Surface:** payment/credit gating; anti-sybil layer.
- **Lanes:** Lane1 auth-credit, Lane3 $RES-emission.
- **Decision:** borrow-carefully (conditioning channel) + future-work (the identity layer it depends on).
- **Harness:** candidate. Needs fixture where payment is a function of an independent attestation signal; measure cartel-confidence collapse.

### TF-9 — Sybil = costless all-inclusive cartel (identity is exogenous to scoring)
- **Statement:** Sybil attack reduces to a costless all-inclusive cartel; it decomposes to (a) guarantee a non-sybil honest minority and (b) make identity costly. Pure scoring cannot deliver either — they come from the identity/side-info layer (TF-8).
- **Source-kind:** **local-inference** (Myerson F9, explicitly flagged by the witness as inference, not fetched proof).
- **Surface:** identity / sybil-resistance layer; all reputation accrual.
- **Lanes:** Lane1 auth-credit, Lane3 $RES-emission.
- **Decision:** future-work (identity layer is out-of-tower) + open-residue (proof not fetched).
- **Harness:** candidate; flagged inference. Needs the identity-cost model that this tower does not contain.

### TF-10 — Randomization-for-deterrence (audit signal, not payout)
- **Statement:** If any subset can predict it won't be audited, it stops complying. Unpredictability defends the audit *signal* (requisite variety), not the payout. Collapse test: inferable audit schedule → deterrence → 0.
- **Source-kind:** primary-source (Beer F1; PoS / audit-bandit literature) — converges with Myerson F4 (C2).
- **Surface:** audit/challenge sampling; anti-farming rules; proof-of-life.
- **Lanes:** Lane1 auth-credit, Lane4 bounty-prize.
- **Decision:** **promotion-candidate** (randomness-for-audit-defense invariant; directly satisfies the TOWER closure standard "randomness assigned to a purpose").
- **Harness:** candidate. Needs fixture: schedule-inference attack drives measured deterrence toward 0 (the collapse test made executable).

### TF-11 — Optimize-and-estimate separation (measurement loop ≠ authority)
- **Statement:** Keep a stratified-random arm (unbiased health estimate) *separate* from the risk-selected (optimized) arm; collapsing both biases the estimate. The measurement loop must not become authority.
- **Source-kind:** primary-source (Beer F2; IRS audit-selection bandit) — converges with Fritz F2 (C1).
- **Surface:** $RCT validation; treasury/health dashboards.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture.
- **Decision:** **promotion-candidate** (the estimate/control separation invariant; strongly reinforces TF-2 from an independent method).
- **Harness:** candidate. Needs fixture asserting the stratified-random estimate is unbiased when the optimized arm is adversarially steered.

### TF-12 — Reward-scheme phase transition → chaotic centralization
- **Statement:** Constant/decreasing-to-nonzero reward keeps large holders stable; a **geometric reward concentrates all shares on one holder** in the long run — even though geometric is finite-horizon optimal (T3). $RES emission (no caps) and Phase-2 growth-shaped yield tokens are exposed. Collapse test: geometric-like emission curve → single-holder capture attractor.
- **Source-kind:** primary-source (Beer F4; PoS share-stability phase transitions) + open-residue counterpoint (Kiayias/Fanti finite-horizon optimality, cited-not-fetched).
- **Surface:** $RES emission curve; holder concentration; Phase-2 yield-target tokens ($R10/$R12/$R15).
- **Lanes:** Lane3 $RES-emission, Lane5 Phase2-financial.
- **Decision:** **block** (any geometric/growth-shaped emission as "safe") + future-work (the safe-emission family). Converges with Fritz F1 flow-gap (C4).
- **Harness:** candidate. Needs simulation fixture (martingale/urn replay) showing the single-holder attractor under geometric emission and its absence under bounded/decreasing emission. This is a *gaming/centralization* analysis — required by the refusal standard before any emission posture.

### TF-13 — Treasury / liquidity stress thresholds; native-heavy concentration
- **Statement:** Treasury at 100% $RES at init = maximum concentration; with ~82% of DAO treasuries native-heavy historically, this invites a forced-selling spiral. Zero liquidable-haircut buffer → runway is *structurally undefined* until non-native reserves exist. Named thresholds: drawdown 50/80, correlation flip 0.8–0.95, depeg-lite 0.97–0.99, time-to-cash 1h/24h/7d, revenue collapse 60–90%; `runway = (stables + liquidable·(1−haircut) − obligations)/burn`.
- **Source-kind:** related-source (Beer F5; "Treasury Stress Tests" / Quellin) + analogy (the ~82% native-heavy figure is search-only, not fetched).
- **Surface:** treasury composition; Phase-2 reserve/liquidity mechanisms; launch-blocker register.
- **Lanes:** Lane3 $RES-emission, Lane5 Phase2-financial.
- **Decision:** future-work / failure-precedent-only (Lane 5 is explicitly research-and-precedent, not implementation).
- **Harness:** candidate. Needs a stress-scenario fixture matrix (the 10 named scenarios) evaluating runway under each haircut; populates the Lane-5 launch-blocker register.

### TF-14 — Emission affordability is an open-loop set-point without a governor
- **Statement:** If emissions are unaffordable relative to supply, reflexive sell pressure follows. Phase-2 yield targets are **open-loop set-points**; without a feedback governor the loop diverges.
- **Source-kind:** primary-source (Beer F6) + local-inference (the control-systems "missing governor" framing, Meadows lens).
- **Surface:** $RES emission affordability; Phase-2 yield-target tokens.
- **Lanes:** Lane3 $RES-emission, Lane5 Phase2-financial.
- **Decision:** **block** (yield targets as open-loop set-points presented as safe) + future-work (the governor/feedback design).
- **Harness:** candidate. Needs fixture: open-loop yield target diverges under a supply/affordability shock; a feedback governor bounds it. Until a governor exists, the set-point is residue, not a mechanism.

---

## Candidate invariants — consolidated (closure-standard view)

The TOWER closure standard requires: each mechanism names its invariant; each
invariant names its witness/harness; randomness assigned to a purpose; no token
policy. Mapped to the L1 residue families:

| L1 family | Candidate invariant (≤ proof) | Witness(es) | Harness need |
| --- | --- | --- | --- |
| Conservation | flow-budget `Σ(emitted) ≤ treasury`; $RCT on separate monotone | Fritz F1 | JSONL ledger replay |
| Signal separation | `authority = f(independently-verified inputs)` only | Fritz F2 + Beer F2 | governance-input independence fixture |
| Temporal decay | `R = D·recent(λ) ⊕ P·permanent(absorbing)` | Fritz F3 | absorbing-vs-decaying channel fixture |
| Anti-collusion | honest-minority + nonzero-withholding + competing pools; posted-price scoring; blind assignment | Myerson F2/F3/F4/F6 | cartel-simulation fixtures |
| Randomness | unpredictability defends audit signal; collapse if schedule inferable | Beer F1 + Myerson F4 | schedule-inference attack fixture |
| Stress threshold | bounded/decreasing emission avoids single-holder attractor; runway defined only w/ non-native reserves | Beer F4/F5/F6 | martingale-replay + stress-scenario matrix |

**All entries are candidate invariants requiring evidence harnesses — none is a
proof.** Where a witness self-labels inference (Myerson F9) or carries a
counterpoint (Beer F4 vs Kiayias/Fanti), that status is preserved.

---

## Subtower-contract decisions — summary

| Finding | Decision | Lane(s) |
| --- | --- | --- |
| TF-1 flow-conservation gap | borrow-carefully + open-residue | 3, 2 |
| TF-2 signal separation unmet | **block** (authority binding) | 1, 2 |
| TF-3 decay absent | future-work | 2, 5 |
| TF-4 DSIC impossibility | borrow-carefully (constraint) | 1, 2, 4 |
| TF-5 exclusion principle | **promotion-candidate** | 1, 2, 3, 4 |
| TF-6 asymmetry / blind assignment | promotion-candidate | 1, 4 |
| TF-7 posted-price scoring | **promotion-candidate** | 2, 3, 4 |
| TF-8 side-info conditioning | borrow-carefully + future-work | 1, 3 |
| TF-9 sybil = cartel | future-work + open-residue (inference) | 1, 3 |
| TF-10 randomization-for-deterrence | **promotion-candidate** | 1, 4 |
| TF-11 optimize/estimate split | **promotion-candidate** | 1, 2 |
| TF-12 phase-transition centralization | **block** + future-work | 3, 5 |
| TF-13 treasury stress thresholds | future-work / failure-precedent | 3, 5 |
| TF-14 open-loop yield set-point | **block** + future-work | 3, 5 |

Promotion-candidate = candidate for the *next* tower stage (evidence harness),
NOT promotion to definition, token policy, or governance weight. Every
promotion-candidate above still owes a fixture before it leaves "candidate".

---

## Corpus gaps recorded as residue

- **Evidence Exchange absent** from the whitepaper fetch (Fritz) — the Lane-1
  surface closest to existing CAv2 work is unobserved here. Open residue.
- **Cited-not-fetched (Fritz):** Coecke-Fritz-Spekkens resource theory;
  Holmström uniqueness; Lieb-Yngvason. Over-quota: Agent Contracts (2601.08815).
- **Cited-not-fetched (Myerson):** Myerson 1981; Graham-Marshall;
  McAfee-McMillan; Chung-Shi impossibility; Roughgarden TFM. **F9 is local
  inference, not fetched** — sybil/identity proof is missing from this tower.
- **Fetch-failed / low-confidence (Beer):** INFORMS Audit & Remediation (403 →
  F3 lower confidence); Kiayias/Fanti counterpoint and Horvitz-Thompson
  cited-not-fetched; "State of DAO Treasuries" ~82% figure is **search-only**,
  not a fetched primary source (downgrade to analogy/related).
- **Whole missing layer:** the **identity / sybil-cost** layer (TF-8/TF-9) is
  exogenous to this tower's corpus. C3 convergence says it is load-bearing, yet
  no fetched source models its cost. Largest single residue.
- **Whitepaper silences:** emission curve, treasury spend boundary, decay
  formula, scoring rule (discretionary vs posted), and the governance-input
  independence are all OPEN — the tower's tensions live in these gaps.

---

## Refusal-standard self-check

- No research claim is turned into token policy: all reward/emission findings are
  candidates with required gaming/stress harnesses (TF-5, TF-12, TF-14).
- Contribution scores are NOT treated as governance authority — TF-2 blocks
  exactly that; TF-11 reinforces measurement ≠ authority.
- Bounties are not presented as safe: TF-4 (impossibility) and TF-5 (exclusion)
  carry the gaming analysis.
- Random rewards (TF-5) are flagged as requiring an explicit fairness +
  anti-gaming witness before any promotion.
- No formal-proof claim is made where there is analogy/inference: TF-9 (inference),
  TF-13 (search-only figure), Beer-F3 (403/low-confidence) are labelled as such.

Claim ≤ proof. Draft for skeptic pass.
