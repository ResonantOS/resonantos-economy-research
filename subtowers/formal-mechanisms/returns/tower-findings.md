# formal-mechanisms — Tower Findings (FINAL)

Status: final · synthesizer lens "Meadows, Donella H." · skeptic-passed (lens "Popper, Karl", non-vacuity vector) · ISOLATED tower · local-research-only.
Claim ≤ proof. No promotion of definitions, token policy, governance weights, or implementation.
Revision: one zig-zag pass (loop_cap 1) applying ALL verdicts in `returns/tower-skeptic.md`.

Inputs reconciled: `returns/research.md` — three independent isolated witnesses:
- **Fritz** (structural-invariant): F1 conservation, F2 signal separation, F3 temporal decay.
- **Myerson** (strategic / game-theoretic): F1–F9, collusion / IC / posted-price.
- **Beer** (stochastic-control): F1–F6, randomized audit / phase-transition / treasury stress.

Each sub-lane is an **independent witness**. Confidence is raised only where ≥2
witnesses converge from *different, fetched* method bases; tensions are surfaced,
not averaged. Systems-lens reading (Meadows): name the **stock**, the **flow**,
the **feedback loop**, the **leverage point** — and refuse to let a measurement
signal act as a control authority.

**Non-vacuity bar (Popper, adopted):** a candidate invariant is non-vacuous only
if its fixture states an **adversary action, a measured quantity, and a threshold
or inequality whose value flips the verdict**. "Names a measurement" ≠
"measurable"; the measurement must have a falsifying value. Findings whose fixture
only names a scenario are held at borrow-carefully / residue until a decidable
threshold exists.

---

## Reading frame (Meadows lens, non-authoritative)

The whitepaper fixes one stock ($RES = 10⁹) and leaves the **flows** (emission,
treasury spend, decay) open. The dangerous gaps are the unlabeled flows and the
missing governors, not the stock. Three witnesses independently locate failure at
the same seam: a quantity that is *measured* (reputation / contribution / audit
score) is allowed to *act* as authority or as an open-loop set-point. That seam is
the through-line.

---

## Convergence map (skeptic-reweighted)

Confidence uplift is claimed ONLY for clean cross-method convergence on two
*fetched* legs. Convergences standing on an inference-grade or self-defeated leg
are tagged **soft-leg** and carry no uplift (skeptic M-4).

| # | Theme | Witnesses | Status |
| --- | --- | --- | --- |
| **C1 Measurement ≠ authority** | Fritz F2 (order-morphism independence) + Beer F2 (stratified-unbiased estimate vs control) | **clean** — two distinct fetched formalisms; uplift earned. |
| **C2 Randomness defends a *signal*, not a payout** | Myerson F4 (informational asymmetry) + Beer F1 (unpredictable audit) — both fetched | **clean** — uplift earned. |
| **C3 Identity / side-info is load-bearing** | Myerson F7 (fetched) + Beer F1 (fetched) + Myerson F9 (**inference**) | **soft-leg** — F9 is local inference; C3's weight rests on F7 + Beer F1 only. No uplift from F9. |
| **C4 Growth-shaped emission is a centralization attractor** | Beer F4 (fetched, but carries Kiayias/Fanti finite-horizon **counterpoint**) + Fritz F1 (stock-monotone exists, flow does not) | **soft-leg** — F4 is self-defeated at short horizon; uplift held until crossover horizon T* (TF-12) is shown. |

---

## Tension map

| Tension | Poles | Tower note (skeptic-corrected) |
| --- | --- | --- |
| **T1 Reputation-into-governance** | Whitepaper: "governance influence *should* depend on contribution / sector reputation / recent activity" **vs** Fritz F2 + Myerson F8 (DSIC): authority ⊥ self-reported score | The quote is normative-aspirational prose and does NOT fix binding-allocation vs non-binding-routing. The invariant survives; the surface is **blocked pending specification** (T5-class residue), NOT certified-violated. |
| **T2 Discretionary vs posted-price scoring** | Whitepaper open/relative scoring **vs** Myerson F6: only IC + collusion-resistant *single-bidder* class is posted prices | F6's quantifier is single-bidder. The tension holds ONLY on genuinely single-evaluator-per-item surfaces; the general claim is unsupported (TF-7 demoted). |
| **T3 Geometric optimality vs long-run capture** | Beer F4 (long-run chaotic-centralizing) **vs** Kiayias/Fanti (finite-horizon optimal) | Horizon-dependence, not contradiction. The block bites only past a stated crossover horizon T* (TF-12). |
| **T4 DSIC price vs non-vacuity** | Myerson F1: DSIC + 1-SCP forces coordinator revenue → 0 | The tower **records the trade as a constraint and residue question**; it does NOT instruct the design to choose a pole (policy directive removed, skeptic M-3). |
| **T5 Stock conservation vs flow openness** | Fritz F1: stock monotone exists ($RES=10⁹); flow (emission/treasury) has none | The "fixed supply" fact does not bound the dangerous quantity. |

---

## Findings (typed, skeptic-applied)

Each finding: statement · source-kind · ResonantDAO surface · attack-lane tag(s)
· subtower-contract decision · **decidable** fixture (adversary / metric / flipping
threshold). Every fixture below is a candidate, not a proof.

### TF-1 — Credit conservation holds for stock, not flow  · SURVIVES
- **Statement:** An additive monotone certifies a conserved bounded budget for the *stock* ($RES = 10⁹), but emission/limits/treasury are OPEN, so **no flow-conservation certificate exists**. $RCT (reputation, no fixed supply) must carry a *separate* monotone and must NOT be summed into the $RES law.
- **Source-kind:** primary-source (Fritz F1) + local-inference (the stock/flow split as applied).
- **Surface:** $RES supply law; treasury; emission schedule.
- **Lanes:** Lane3 $RES-emission, Lane2 $RCT-capture.
- **Decision:** borrow-carefully (the invariant statement); the negative result is **open-residue** until emission is specified.
- **Fixture (decidable):** JSONL ledger replay. FAIL iff for any epoch `Σ(emitted) > treasury`, OR if any $RCT unit is found summed into the $RES total. PASS iff per-epoch `Σ(emitted) ≤ treasury` holds for all epochs AND $RCT is accounted on a disjoint monotone.

### TF-2 — Signal separation: surface UNDERSPECIFIED → blocked pending specification  · REVISE
- **Statement:** Authority/allocation `A` is signal-separated iff `A` is independent of the agent's own *report* of its score `S` (VCG-redistribution / order-morphism independence). The invariant is non-vacuous and twice-witnessed (Fritz F2 + Beer F2, C1). The whitepaper's "governance influence *should* depend on contribution/reputation/recent activity" is **underspecified on the binding-allocation vs non-binding-routing axis** — it cannot be certified as violating an invariant it never specified.
- **Source-kind:** primary-source (Fritz F2; Guo et al. VCG) for the *invariant*; **open-residue** (T5-class) for the whitepaper surface (prose, not a rule).
- **Surface:** governance weighting; $REX-* reputation → governance influence.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture.
- **Decision:** **blocked pending specification** (precautionary block kept; the false certainty of "UNMET as written" dropped). NOT certified-violated.
- **Fixture (decidable):** construct two governance-input graphs — (a) `authority = f(reputation_self_reported, …)` and (b) `authority = f(independently_verified_inputs)` with reputation on a display/routing edge only. FAIL iff an agent can change its realized authority weight by unilaterally changing its own reported score with all independently-verified inputs held fixed (`∂authority/∂self_report ≠ 0`). PASS iff that partial is identically 0.

### TF-3 — Temporal decay law is absent  · SURVIVES (future-work)
- **Statement:** A defensible reputation has form `R_t = D·(recent, half-life λ) ⊕ P·(permanent, absorbing submonoid)`: recent decays, durable work is non-erasable. The whitepaper has **no decay formula**. If a decayed quantity touches $RES claims it re-enters the budget law (TF-1).
- **Source-kind:** related-source (Fritz F3; Wang et al. recency-weighted reputation) + open-residue (whitepaper silence).
- **Surface:** $RCT/$REX accrual; recent-activity weighting.
- **Lanes:** Lane2 $RCT-capture, Lane5 Phase2-financial.
- **Decision:** future-work.
- **Fixture (decidable):** replay accrual with an absorbing channel P and a decaying channel D(λ). FAIL iff any unit of the decaying channel crosses into a $RES-denominated claim (i.e. `decayed_mass · 1[touches_$RES] > 0`). PASS iff decayed mass is confined to non-$RES routing and the permanent channel is non-erasable.

### TF-4 — Anti-collusion vs non-vacuity is a hard trade (impossibility baseline)  · SURVIVES (policy directive removed)
- **Statement:** DSIC + immunity to a single colluding coordinator is achievable only by a trivial mechanism with coordinator revenue forced to 0 (1-SCP impossibility). A custodian/validator who scores AND can side-deal cannot be both truth-dominant and prize-bearing without zeroing the prize.
- **Source-kind:** primary-source (Myerson F1; Ferreira/Gafni/Resnick).
- **Surface:** validator/custodian scoring role; bounty/prize pool.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture, Lane4 bounty-prize.
- **Decision:** borrow-carefully (as a recorded constraint + residue question). **The tower records the trade; it does NOT instruct the design to declare a pole** (policy directive removed, skeptic M-3).
- **Fixture:** N/A (impossibility/baseline). Recorded residue question: *which pole — truthfulness vs non-trivial prize — does any future bounty surface sit on?* This is a question logged for downstream authority, not a directive issued by this tower.

### TF-5 — Exclusion principle: bounded randomized credit-withholding  · DEMOTE → borrow-carefully (fixture-pending)
- **Statement:** Collusion-proofness obtains iff a cartel is not all-inclusive (≥1 guaranteed honest), OR multiple competing cartels exist, OR there is nontrivial no-allocation probability. Lever: randomized credit-withholding + guaranteed honest minority + partitioned competing review pools.
- **Source-kind:** primary-source (Myerson F2/F3; Che & Kim exclusion principle).
- **Surface:** review-pool assignment; credit-award step; bounty adjudication.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture, Lane3 $RES-emission, Lane4 bounty-prize.
- **Decision:** **borrow-carefully (fixture-pending)** — demoted from promotion-candidate: prior fixture said only "nonzero withholding", and 0⁺ is nonzero and useless (P-VAC). Re-earns promotion-candidate only once it solves for p*.
- **Fixture (decidable, threshold-bearing):** under an all-inclusive cartel of size = pool size, with withholding probability `p`, **solve for the critical p\*** such that `E[honest_payoff] = E[cartel_payoff]`. FAIL iff for the chosen `p`, `E[cartel_payoff] > E[honest_payoff]` (i.e. `p < p*`). PASS iff `p ≥ p*`. Naming "nonzero" is insufficient; the deliverable is the value p* and proof that the chosen p exceeds it. Random reward → requires explicit fairness + anti-gaming witness before any promotion (refusal standard).

### TF-6 — Informational asymmetry / blind reviewer assignment  · DEMOTE → borrow-carefully (fixture-pending)
- **Statement:** Complete-information colluders act as a single agent (design futile); leverage exists only via mutual asymmetry. Lever: blind/randomized reviewer assignment, hidden pairing, so colluders cannot verify each other pre-scoring.
- **Source-kind:** primary-source (Myerson F4) — supports C2 (clean).
- **Surface:** reviewer assignment; reviewer↔contribution pairing.
- **Lanes:** Lane1 auth-credit, Lane4 bounty-prize.
- **Decision:** **borrow-carefully (fixture-pending)** — demoted: prior fixture was a plot ("detectability vs blindness"), not a verdict.
- **Fixture (decidable, threshold-bearing):** FAIL iff a participant can predict its reviewer-assignment edge with probability `> 1/(pool size)` before scoring (assignment distinguishable from uniform). PASS iff assignment is statistically indistinguishable from uniform-random to the participant (e.g. KS/χ² test against uniform fails to reject at stated α).

### TF-7 — Posted-price scoring (single-evaluator scope ONLY)  · DEMOTE → borrow-carefully (scope-restricted)
- **Statement:** In the **single-bidder** case the only IC + collusion-resistant mechanisms are posted prices (Myerson F6). This does NOT transfer to a multi-contributor / review-pool / custodian surface — that is a multi-agent-with-designer setting outside the theorem's quantifier (category error).
- **Source-kind:** primary-source (Myerson F6) *inside single-evaluator scope only*; the general "posted-price beats relative scoring" claim is **local-inference** if retained at all.
- **Surface:** fixed reward-per-validated-artifact schedules where no second bidder exists.
- **Lanes:** Lane2 $RCT-capture, Lane3 $RES-emission, Lane4 bounty-prize.
- **Decision:** **borrow-carefully, scoped strictly to single-evaluator-per-item surfaces** — demoted from promotion-candidate (scope misapplication).
- **Fixture (decidable, inside scope only):** for a single-evaluator-per-item surface, contrast a published fixed schedule vs a relative/discretionary score under a misreport coalition of size `k`. FAIL iff the coalition can raise its realized payout by joint misreport under the posted schedule. PASS iff posted-schedule payout is invariant to any coalition misreport. **Outside single-evaluator scope: no fixture claimed** — that is the honest state.

### TF-8 — Side-information as payment-conditioning channel  · SURVIVES (borrow-carefully)
- **Statement:** Conditioning payment on a signal ~independent of valuations makes outcomes unpredictable, eroding colluder confidence. Anti-sybil signals (proof-of-life, tenure, attestation) should *condition payment*, not merely gate membership.
- **Source-kind:** primary-source (Myerson F7) — supports C3 (its fetched leg).
- **Surface:** payment/credit gating; anti-sybil layer.
- **Lanes:** Lane1 auth-credit, Lane3 $RES-emission.
- **Decision:** borrow-carefully (conditioning channel) + future-work (the identity layer it depends on).
- **Fixture (decidable):** make payment `= g(contribution, attestation_signal)` with attestation ~independent of valuation. FAIL iff colluder can predict realized payment to within ε without the attestation signal (signal adds no unpredictability). PASS iff payment variance attributable to the attestation channel is bounded below by a stated δ.

### TF-9 — Sybil = costless all-inclusive cartel  · SURVIVES (residue only; vacuous harness)
- **Statement:** Sybil attack reduces to a costless all-inclusive cartel; it decomposes to (a) guarantee a non-sybil honest minority and (b) make identity costly. Pure scoring cannot deliver either.
- **Source-kind:** **local-inference** (Myerson F9, witness-flagged as inference, not fetched). Contributes *a question*, not a witness — does not carry C3.
- **Surface:** identity / sybil-resistance layer; all reputation accrual.
- **Lanes:** Lane1 auth-credit, Lane3 $RES-emission.
- **Decision:** **open-residue only** (cannot sit above residue: the "needs an identity-cost model" harness is vacuous — no pass/fail).
- **Testable content (the only non-vacuous assertion today):** the conditional — **IF identity is costless THEN the exclusion lever (TF-5) loses its "≥1 guaranteed honest" precondition.** That conditional is the stated residue; the identity-cost model itself is out-of-tower.

### TF-10 — Randomization-for-deterrence (audit signal, not payout)  · DEMOTE → borrow-carefully (fixture-pending)
- **Statement:** If any subset can predict it won't be audited, it stops complying. Unpredictability defends the audit *signal* (requisite variety), not the payout.
- **Source-kind:** primary-source (Beer F1) — supports C2 (clean).
- **Surface:** audit/challenge sampling; anti-farming rules; proof-of-life.
- **Lanes:** Lane1 auth-credit, Lane4 bounty-prize.
- **Decision:** **borrow-carefully (fixture-pending)** — demoted: prior "deterrence → 0" had no ε and no defined deterrence metric (P-VAC), closest-to-decidable but not yet promotion-grade.
- **Fixture (decidable, threshold-bearing):** define base audit rate `r`. FAIL iff, given the published audit rule, any agent can identify an unaudited window with probability `> r`, making `EV(defect) > EV(comply)`. PASS iff no agent can identify any window with audit probability below `r` (no predictable gap exists). The flipping value is whether a window with `P(audit) < r` is identifiable.

### TF-11 — Optimize-and-estimate separation (measurement ≠ authority)  · SURVIVES (xref revised)
- **Statement:** Keep a stratified-random arm (unbiased health estimate) *separate* from the risk-selected (optimized) arm; collapsing both biases the estimate. The measurement loop must not become authority.
- **Source-kind:** primary-source (Beer F2) — supports C1 (clean). Best-decidable fixture in the corpus.
- **Surface:** $RCT validation; treasury/health dashboards.
- **Lanes:** Lane1 auth-credit, Lane2 $RCT-capture.
- **Decision:** **promotion-candidate** (the estimate/control separation invariant). **Cross-reference corrected:** TF-11 reinforces the *invariant* (measurement ≠ authority), NOT TF-2's verdict — it must not be stacked into a false certainty that the whitepaper violates (skeptic M-2).
- **Fixture (decidable):** adversarially steer the optimized arm; measure `E[stratified_estimate]` vs the true rate. FAIL iff `|E[estimate] − true_rate|` exceeds the stated CI under adversarial steering (estimate biased). PASS iff the stratified estimate remains unbiased within CI regardless of how the optimized arm is steered.

### TF-12 — Reward-scheme phase transition → centralization (horizon-scoped)  · REVISE
- **Statement:** Constant/decreasing-to-nonzero reward keeps large holders stable; a **geometric reward concentrates all shares on one holder in the long run** (Beer F4) — even though geometric is **finite-horizon optimal** (Kiayias/Fanti, T3). The block applies to geometric/growth-shaped emission **as a long-horizon steady-state posture**; finite-horizon optimality is a legitimate competing regime, not residue to suppress.
- **Source-kind:** primary-source (Beer F4; arXiv 2206.02227 martingale/urn) + open-residue counterpoint (Kiayias/Fanti, cited-not-fetched). Supports C4 (soft-leg).
- **Surface:** $RES emission curve; holder concentration; Phase-2 yield-target tokens ($R10/$R12/$R15).
- **Lanes:** Lane3 $RES-emission, Lane5 Phase2-financial.
- **Decision:** **block geometric/growth-shaped emission as a safe long-horizon posture** (horizon-scoped) + future-work (the crossover horizon and the safe-emission family).
- **Fixture (decidable, must name T\*):** martingale/urn replay of N holders under (i) geometric and (ii) bounded/decreasing emission; centralization = top-holder share fraction. The fixture MUST report top-holder share at the finite horizon `T_fin` (Kiayias/Fanti optimality) AND as `t → T_long`. **PASS/FAIL is the crossover horizon T\*** where centralization overtakes optimality: FAIL-for-geometric iff `top-holder share → 1 (±ε)` as `t → T_long` while the bounded curve does not, AND `T* < deployment horizon`. Without a named T*, the claim is unfalsifiable and reverts to residue.

### TF-13 — Zero-buffer runway inequality (thresholds demoted)  · DEMOTE
- **Statement:** Treasury at 100% $RES at init = maximum concentration with a **zero liquidable-haircut buffer → runway is structurally undefined until non-native reserves exist**. The *structural inequality* survives; the named numeric thresholds do NOT.
- **Source-kind:** related-source (Beer F5) for the runway inequality; the named thresholds (drawdown 50/80, correlation flip 0.8–0.95, depeg-lite 0.97–0.99, time-to-cash 1h/24h/7d, revenue collapse 60–90%) and the ~82% native-heavy figure are **search-only / analogy (P-PROV)** — illustrative defaults from one non-peer secondary source (Quellin), not calibrated invariants.
- **Surface:** treasury composition; Phase-2 reserve/liquidity mechanisms; launch-blocker register.
- **Lanes:** Lane3 $RES-emission, Lane5 Phase2-financial.
- **Decision:** **failure-precedent / future-work.** The thresholds are **parameters to be calibrated by the design, NOT findings asserted by this tower**.
- **Fixture (the part that survives, decidable):** `runway = (stables + liquidable·(1−haircut) − obligations)/burn`. FAIL iff `stables + liquidable·(1−haircut) = 0` while `burn > 0` → runway undefined / ≤ 0 (the init state: 100% native). PASS iff non-native reserves make the numerator positive for a stated burn. The 50/80/0.97/… values are inputs, not thresholds this tower asserts.

### TF-14 — Open-loop yield set-point without a governor  · REVISE
- **Statement:** If emissions are unaffordable relative to supply, reflexive sell pressure follows. Phase-2 yield targets are **open-loop set-points**; without a feedback governor the loop diverges.
- **Source-kind:** primary-source (Beer F6) + local-inference (the control-systems "missing governor" framing, Meadows lens).
- **Surface:** $RES emission affordability; Phase-2 yield-target tokens.
- **Lanes:** Lane3 $RES-emission, Lane5 Phase2-financial.
- **Decision:** **block yield targets *as safe* while open-loop** (softened from a bare "block") + future-work (the governor/feedback design).
- **Fixture (decidable, must name divergence metric + bound):** drive a supply/affordability shock. Divergence metric = `|emission_rate − sustainable_rate|` over time. FAIL iff under the open-loop set-point this metric grows without bound (monotone increasing past a stated cap C over the horizon). PASS iff a feedback governor holds the metric ≤ C for all shocks in the stated envelope. Without the metric and bound C, the set-point is residue, not a mechanism.

---

## Candidate invariants — consolidated (post-skeptic posture)

The TOWER closure standard: each mechanism names its invariant; each invariant
names its witness/harness; randomness assigned to a purpose; no token policy.

| L1 family | Candidate invariant (≤ proof) | Witness(es) | Decidable flipping condition | Posture |
| --- | --- | --- | --- | --- |
| Conservation | flow-budget `Σ(emitted) ≤ treasury`; $RCT on separate monotone | Fritz F1 | per-epoch sum exceeds treasury | borrow-carefully |
| Signal separation | `∂authority/∂self_report = 0` | Fritz F2 + Beer F2 (C1 clean) | partial ≠ 0 | blocked pending spec |
| Temporal decay | decayed mass never crosses into $RES | Fritz F3 | any decayed unit touches $RES | future-work |
| Anti-collusion (withholding) | chosen `p ≥ p*` (solve for p*) | Myerson F2/F3 | `E[cartel] > E[honest]` | borrow-carefully |
| Anti-collusion (blind assign) | assignment indistinguishable from uniform | Myerson F4 (C2 clean) | predict edge `> 1/pool` | borrow-carefully |
| Anti-collusion (posted-price) | posted payout ⊥ coalition misreport | Myerson F6 (single-evaluator only) | coalition raises payout | borrow-carefully (scoped) |
| Randomness (audit) | no window with `P(audit) < r` identifiable | Beer F1 + Myerson F4 (C2 clean) | identifiable low-audit window | borrow-carefully |
| Measurement ≠ authority | stratified estimate unbiased under steering | Beer F2 (C1 clean) | `|E[est]−true| > CI` | **promotion-candidate** |
| Stress threshold | runway numerator > 0 (non-native reserves) | Beer F5 | numerator = 0, burn > 0 | future-work |
| Emission curve | crossover horizon `T* < deployment` | Beer F4 (C4 soft-leg) | top-holder share→1 before T_long, T* named | block (long-horizon) |
| Yield governor | divergence metric ≤ C under shock | Beer F6 | metric grows past C | block-as-safe (open-loop) |

**Only ONE promotion-candidate survives the non-vacuity bar: TF-11** (its fixture
already has a decidable falsifying value — unbiasedness within CI under adversarial
steering). All other prior promotion-candidates are demoted to borrow-carefully
(fixture-pending) until they state their flipping value. All entries remain
candidate invariants requiring evidence harnesses — none is a proof.

---

## Subtower-contract decisions — summary (post-skeptic)

| Finding | Decision (final) | Lane(s) |
| --- | --- | --- |
| TF-1 flow-conservation gap | borrow-carefully + open-residue | 3, 2 |
| TF-2 signal separation | **blocked pending specification** | 1, 2 |
| TF-3 decay absent | future-work | 2, 5 |
| TF-4 DSIC impossibility | borrow-carefully (constraint; no policy directive) | 1, 2, 4 |
| TF-5 exclusion principle | **borrow-carefully (fixture-pending)** ← demoted | 1, 2, 3, 4 |
| TF-6 blind assignment | **borrow-carefully (fixture-pending)** ← demoted | 1, 4 |
| TF-7 posted-price | **borrow-carefully (single-evaluator scope only)** ← demoted | 2, 3, 4 |
| TF-8 side-info conditioning | borrow-carefully + future-work | 1, 3 |
| TF-9 sybil = cartel | **open-residue only** (vacuous harness) | 1, 3 |
| TF-10 randomization-for-deterrence | **borrow-carefully (fixture-pending)** ← demoted | 1, 4 |
| TF-11 optimize/estimate split | **promotion-candidate** (sole survivor) | 1, 2 |
| TF-12 phase-transition centralization | block (long-horizon; T* required) + future-work | 3, 5 |
| TF-13 treasury thresholds | **failure-precedent / future-work** (runway inequality only) | 3, 5 |
| TF-14 open-loop yield set-point | block-as-safe (open-loop) + future-work | 3, 5 |

Promotion-candidate = candidate for the next tower stage (evidence harness), NOT
promotion to definition, token policy, or governance weight.

---

## Corpus gaps recorded as residue

- **Evidence Exchange absent** from the whitepaper fetch (Fritz) — the Lane-1 surface closest to existing CAv2 work is unobserved. Open residue.
- **Cited-not-fetched (Fritz):** Coecke-Fritz-Spekkens resource theory; Holmström uniqueness; Lieb-Yngvason. Over-quota: Agent Contracts (2601.08815).
- **Cited-not-fetched (Myerson):** Myerson 1981; Graham-Marshall; McAfee-McMillan; Chung-Shi impossibility; Roughgarden TFM. **F9 is local inference, not fetched** — sybil/identity proof missing.
- **Fetch-failed / low-confidence (Beer):** INFORMS Audit & Remediation (403 → F3 lower confidence); Kiayias/Fanti counterpoint and Horvitz-Thompson cited-not-fetched; "State of DAO Treasuries" ~82% figure **search-only**; all named treasury thresholds **search-only (Quellin secondary)**.
- **Whole missing layer:** the **identity / sybil-cost** layer (TF-8/TF-9) is exogenous to this tower's corpus. C3 (soft-leg) flags it as load-bearing, yet no fetched source models its cost. Largest single residue.
- **Whitepaper silences:** emission curve, treasury spend boundary, decay formula, scoring rule (discretionary vs posted), and governance-input independence are all OPEN — the tower's tensions live in these gaps.

---

## Skeptic pass — residue (verdicts preserved verbatim-in-effect)

Source: `returns/tower-skeptic.md` (lens "Popper, Karl", non-vacuity vector).
Net: 0 KILL, 6 DEMOTE, 6 REVISE, remainder SURVIVES. All applied above.

| Item | Skeptic verdict | Applied as |
| --- | --- | --- |
| TF-2 | REVISE — "UNMET as written" is operator-reading of unspecified prose | → "blocked pending specification"; `∂authority/∂self_report = 0` fixture. |
| TF-12 | REVISE — block horizon-blind; must name crossover horizon T* | → block scoped to long-horizon; T* required or reverts to residue. |
| TF-7 | DEMOTE — single-bidder theorem transferred to multi-agent = category error | → borrow-carefully, single-evaluator scope only; general claim → local-inference. |
| TF-13 | DEMOTE — named thresholds are search-only (P-PROV) | → failure-precedent; only zero-buffer runway inequality survives; thresholds = parameters. |
| TF-9 | SURVIVES residue; harness vacuous | → open-residue only; the IF-costless-identity conditional is the sole testable content; C3 down-weighted. |
| **M-1** TF-5/TF-6/TF-10 | DEMOTE all three — P-VAC fixtures (purpose without metric) | → borrow-carefully (fixture-pending); TF-5 must solve p*, TF-6 uniform-indistinguishability, TF-10 no-window-below-r. |
| **M-2** TF-11 | REVISE — don't stack TF-11 into TF-2's *verdict* | → cross-reference reinforces the invariant, not the violation claim. |
| **M-3** TF-4 / T4 | REVISE — "design must declare a pole" is a forbidden policy directive | → tower records the trade as a residue question; issues no directive. |
| **M-4** C-map | REVISE — C3/C4 stand on soft legs, no uniform uplift | → C1/C2 clean (uplift); C3 (F9 inference) + C4 (F4 counterpointed) tagged soft-leg, no uplift. |

**Refusal-standard recheck (skeptic-applied):** the prior draft asserted random
rewards needed a fairness/anti-gaming witness yet listed TF-5/TF-6/TF-10 as
promotion-candidates before that witness existed — the refusal standard's "random
rewards without a fairness and anti-gaming witness" failure at the posture-label
level. **Now corrected:** those three are borrow-carefully (fixture-pending); the
sole promotion-candidate (TF-11) carries no reward and has a decidable fixture. No
research claim is turned into token policy; contribution scores are not treated as
governance authority (TF-2 blocks exactly that, TF-11 reinforces the invariant);
bounties are not presented as safe (TF-4 impossibility, TF-5 exclusion with p*);
no formal-proof claim is made where there is analogy/inference (TF-9, TF-13
thresholds, Beer-F3 labelled as such).

Claim ≤ proof. Final.
