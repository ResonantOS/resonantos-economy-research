# formal-mechanisms — Tower Skeptic Pass

Status: skeptic attack · lens "Popper, Karl" · vector NON-VACUITY · a lens, not authority.
Target: `returns/tower-findings.draft.md` (14 findings, 5 tensions, 4 convergences).
Cross-checked against: `returns/research.md` (Fritz/Myerson/Beer witnesses), `TOWER.md` closure + borrow/block posture, `CLAUDE.md` refusal standard.

## Attack standard (the bar every candidate invariant must clear)

A candidate invariant is NON-VACUOUS only if it states a fixture whose **pass/fail
condition is itself decidable** — i.e. an adversary action, a measured quantity, and
a threshold or inequality that flips the verdict. A finding that only *names* a
fixture ("needs a cartel-simulation fixture") but cannot say what number, under what
attack, makes it PASS vs FAIL is still vacuous and is demoted to residue/future-work
until it can. "Measurable" ≠ "names a measurement"; it means the measurement has a
falsifying value.

Two systematic vacuity patterns recur and are charged below:
- **P-VAC (purpose without metric):** the witness gives a *direction* ("randomness
  defends a signal") but the fixture has no failing observation.
- **P-PROV (provenance inflation):** the finding asserts a number/threshold whose
  only source is search-only / inference, then carries it into a fixture as if fetched.

---

## Adjudication of the 5 synthesizer-flagged weak claims

### TF-2 — signal-separation "UNMET as written"  →  **REVISE (verdict downgraded, invariant SURVIVES)**

Concrete reason: The *invariant* (authority ⊥ self-reported score) is non-vacuous and
witness-backed twice (Fritz F2 order-morphism independence + Beer F2 estimate/control
split = C1). But the **"UNMET as written" verdict is an operator-reading of a single
whitepaper quote**, exactly as flagged. The quote — "governance influence *should*
depend on contribution level, sector reputation, recent activity" — is normative-aspirational
prose, not a specified rule. "Should depend on" does not fix whether the dependence is
*binding allocation* or *non-binding routing*; the draft itself names that very
distinction in its own fixture (TF-2 harness: "reputation confined to a non-binding
routing channel"). You cannot label an invariant UNMET against an unspecified rule —
absence of specification is **open-residue (T5-class)**, not violation. The draft
over-claims by promoting an interpretive reading to "violates / UNMET, not merely
unproven."

REVISE to: "Signal-separation is a candidate invariant; the whitepaper's governance-influence
clause is **UNDERSPECIFIED on the binding/routing axis**, so the surface is **blocked
pending specification**, not certified-violated." Keep the block (correct precautionary
posture per refusal standard); drop the false certainty of "UNMET as written."

Non-vacuous fixture (decidable): construct two governance-input graphs — (a) `authority =
f(reputation_self_reported, …)` and (b) `authority = f(independently_verified_inputs)` with
reputation feeding only a display/routing edge. FAIL iff an agent can change its realized
authority weight by unilaterally changing its own reported score with all
independently-verified inputs held fixed (∂authority/∂self_report ≠ 0). PASS iff that
partial derivative is identically 0. That is the order-morphism-independence test made
executable.

### TF-12 — geometric-emission centralization, carries own finite-horizon counterpoint  →  **REVISE (scope the claim to long-horizon; SURVIVES as scoped)**

Concrete reason: Beer F4 is a genuine fetched result (arXiv 2206.02227, martingale/urn)
and the single-holder attractor is a falsifiable long-run statement. The defect is that
the **"block geometric as safe" decision is stated horizon-blind** while the witness
itself supplies the defeater (Kiayias/Fanti: geometric is finite-horizon *optimal*). A
block that ignores its own admitted counterpoint is not falsifiable as written — any
counterexample is pre-excused by "but long-run." That is a degenerating research program
(Popper/Lakatos): it cannot be wrong.

REVISE to scope: block geometric/growth-shaped emission *as a long-horizon steady-state
posture*; the finite-horizon optimality is a **legitimate competing regime**, not residue
to suppress. The decision must name the horizon at which the block bites.

Non-vacuous fixture (decidable): martingale/urn replay of N holders under (i) geometric
and (ii) bounded/decreasing emission. Define centralization = top-holder share fraction.
FAIL-for-geometric iff top-holder share → 1 (within ε) as t → T_long for a stated T_long,
AND the bounded curve does NOT. The fixture MUST also report top-holder share at the
finite horizon T_fin where Kiayias/Fanti claims optimality — if geometric is non-centralizing
*and* optimal at T_fin, the horizon-dependence is confirmed rather than hidden. The
pass/fail is the crossover horizon T* where centralization overtakes optimality; without
T* the claim is vacuous.

### TF-7 — posted-price > discretionary, single-bidder  →  **DEMOTE (category-error in transfer; invariant intact only inside its case)**

Concrete reason: Confirmed flag. Myerson F6 is explicitly the **single-bidder** result
("In the single-bidder case the only IC + collusion-resistant mechanisms are posted
prices"). A contribution-scoring economy with a review pool, competing contributors, and
a custodian is **not the single-bidder environment** — it is multi-agent with a designer.
Transferring a single-bidder optimality to "posted-price dominates discretionary scoring"
across the whole contribution surface is a category error: the theorem's quantifier does
not range over this setting. The draft promotes it to **promotion-candidate**, which is
the strongest posture, on a misapplied scope.

DEMOTE from promotion-candidate to **borrow-carefully**, scoped strictly to surfaces that
are *genuinely* single-evaluator-per-item (e.g. a fixed reward-per-validated-artifact
schedule where no second bidder exists). The general claim "posted-price beats relative
scoring" is **unsupported by F6** and must be marked local-inference if retained at all.

Non-vacuous fixture (only inside scope): for a single-evaluator-per-item surface, contrast
a published fixed schedule vs a relative/discretionary score under a misreport coalition of
size k. FAIL iff the coalition can raise its realized payout by joint misreport under the
posted schedule. PASS iff posted-schedule payout is invariant to any coalition misreport
(truth-dominance survives). Outside single-evaluator scope, no fixture is claimed — that is
the honest state.

### TF-13 — treasury stress thresholds, search-only provenance  →  **DEMOTE (P-PROV; thresholds are unsourced)**

Concrete reason: Confirmed flag, and worse than the draft admits. The draft already labels
the ~82% native-heavy figure "search-only / analogy," but then **carries the named numeric
thresholds (drawdown 50/80, correlation flip 0.8–0.95, depeg-lite 0.97–0.99, time-to-cash
1h/24h/7d, revenue collapse 60–90%) into a fixture matrix as if they were calibrated.** Per
research.md the entire threshold set comes from one non-peer secondary source ("Treasury
Stress Tests Your DAO Needs" / Quellin), not a fetched primary. These are illustrative
defaults, not invariants. Promoting them to a "stress-scenario fixture matrix" dresses
analogy as measurement (P-PROV).

DEMOTE to **failure-precedent / future-work** (the draft's decision line already says this —
make the harness line agree). The *structural* claim survives and is the real finding:
**runway is undefined while the liquidable-haircut buffer is zero** (treasury 100% native at
init). That inequality needs no external calibration.

Non-vacuous fixture (the part that survives): `runway = (stables + liquidable·(1−haircut) −
obligations)/burn`. FAIL iff `stables + liquidable·(1−haircut) = 0` while `burn > 0` →
runway undefined/≤0. PASS iff non-native reserves make the numerator positive for a stated
burn. The *thresholds* (50/80, 0.97, etc.) are **inputs to be calibrated by the design, not
asserted by this tower** — mark them parameters, not findings.

### TF-9 — sybil = costless all-inclusive cartel  →  **SURVIVES as residue (correctly self-labeled), but harness is vacuous**

Concrete reason: Confirmed flag and the draft is honest: research.md F9 is explicitly
"local inference, not fetched." Decision (future-work + open-residue) is correct and the
refusal-standard self-check cites it properly. No KILL — the labeling is sound. BUT the
harness line ("needs the identity-cost model this tower does not contain") is **a vacuous
fixture**: it names a missing model with no pass/fail. As written TF-9 cannot be tested at
all, so it must not sit anywhere above open-residue, and it must not be counted toward C3
convergence as if load-bearing-and-supported. C3 leans on F9 + F7 + Beer F1; F9 is inference,
so C3's weight rests on F7 (fetched) + Beer F1 (fetched) only — **down-weight C3 accordingly.**

SURVIVES (residue). Make explicit: TF-9 contributes *a question*, not a witness. The single
non-vacuous thing it can assert today: IF identity is costless THEN the all-inclusive-cartel
exclusion lever (TF-5) loses its "≥1 guaranteed honest" precondition. That conditional is the
only testable content and should be the stated residue.

---

## Findings the synthesizer missed

### M-1 — TF-5 / TF-6 / TF-10 promotion-candidates rest on P-VAC fixtures  →  **DEMOTE all three to borrow-carefully**

The three randomness/anti-collusion invariants are promoted to **promotion-candidate** (the
top posture) while their fixtures are purpose-without-metric (P-VAC):

- TF-5: "fixture demonstrating honest-minority guarantee and nonzero-withholding under a
  simulated all-inclusive cartel" — names a scenario, states no failing number. What
  withholding probability counts as PASS? Against what cartel size? Undecidable as written.
- TF-6: "measure collusion-detectability vs blindness" — a *plot*, not a verdict. No
  threshold flips it.
- TF-10: "schedule-inference attack drives measured deterrence toward 0" — closest to
  decidable, but "toward 0" has no stated ε and no defined deterrence metric.

Per the refusal standard, **random rewards require an explicit fairness + anti-gaming witness
before promotion**, and TF-5 itself admits this. A promotion-candidate whose fixture has no
pass/fail condition violates the non-vacuity vector AND the refusal standard simultaneously.

DEMOTE TF-5, TF-6, TF-10 from promotion-candidate to **borrow-carefully (fixture-pending)**.
They re-earn promotion-candidate only once each states a decidable threshold. Concretely:

- TF-5 PASS/FAIL: under an all-inclusive cartel of size = pool size, with withholding
  probability p, FAIL iff expected-cartel-payoff > expected-honest-payoff for p below a
  stated p*. The fixture must *solve for p\** — naming "nonzero" is not enough; 0⁺ is nonzero
  and useless.
- TF-6 PASS/FAIL: FAIL iff a participant can predict its reviewer-assignment edge with
  probability > 1/(pool size) before scoring (i.e. assignment is distinguishable from
  uniform-random). PASS iff assignment is statistically indistinguishable from uniform to the
  participant.
- TF-10 PASS/FAIL: FAIL iff, given the published audit rule, any agent can identify an
  unaudited window with probability > the base audit rate, raising defection EV above
  compliance EV. PASS iff no such predictable window exists.

### M-2 — TF-11 promotion-candidate has a hidden unfalsifiable step  →  **REVISE**

TF-11 (optimize/estimate separation) is fetched (Beer F2) and its fixture — "stratified-random
estimate is unbiased when the optimized arm is adversarially steered" — is the *most*
decidable in the draft (unbiasedness is a measurable property: E[estimate] = true rate within
CI under adversarial steering of the optimized arm). It legitimately SURVIVES. But its
promotion is coupled to TF-2 ("strongly reinforces TF-2"), and since TF-2's verdict is
softened above (REVISE, not UNMET), TF-11 must not be used to *prove* TF-2's violation — only
to support the invariant. REVISE the cross-reference: TF-11 reinforces the *invariant*
(measurement ≠ authority), not the *verdict* (whitepaper violates). Otherwise two
under-determined readings are stacked into a false certainty.

### M-3 — TF-4 / T4 "the design must declare which pole it concedes" is not a tower finding  →  **REVISE (scope)**

TF-4 (DSIC + 1-SCP → revenue 0) is a real fetched impossibility (Myerson F1 / Ferreira et al.)
and SURVIVES as a baseline. But its "decision" — "the design must *state* which pole it
concedes" — is a **policy directive**, and TOWER.md / CLAUDE.md forbid this tower from
issuing design policy. Demanding the design declare a pole edges past "local research only."
REVISE to: the tower *records the trade* as a constraint and a residue question; it does not
instruct the design to choose. Same correction applies to T4's "whitepaper bounty/prize
surface must declare which side of this it accepts."

### M-4 — Convergence map double-counts a single source family as "two unrelated formalisms"  →  **REVISE**

C1 claims Fritz F2 and Beer F2 are "two unrelated formalisms" forbidding the
measurement→control collapse, earning higher confidence. They are *methodologically* distinct
(order-morphism vs stratified estimator) — fair. But C3 and C4 each lean partly on
**inference-grade or counterpointed** witnesses (C3 on F9-inference; C4 on Beer F4 which
carries the Kiayias/Fanti defeater). The map presents all four convergences as uniformly
"cross-method → higher confidence" without down-weighting the ones standing on a
non-fetched or self-defeated leg. REVISE: tag C3 and C4 as **convergence-with-a-soft-leg**
(F9 inference; F4 counterpointed) so the confidence uplift is not claimed uniformly. C1 and
C2 are the only clean cross-method convergences.

---

## Verdict table

| Finding / item | Verdict | One-line reason |
| --- | --- | --- |
| TF-1 flow-conservation gap | SURVIVES | Decidable fixture (`Σemitted ≤ treasury` per epoch); honestly residue on flow. |
| TF-2 signal separation | REVISE | Invariant good; "UNMET as written" is operator-reading of unspecified prose → "blocked pending spec." |
| TF-3 decay absent | SURVIVES (future-work) | Correctly residue; fixture needs the cross-into-$RES threshold stated. |
| TF-4 DSIC impossibility | REVISE | Fetched baseline SURVIVES; strip the "design must declare" policy directive. |
| TF-5 exclusion principle | DEMOTE | Promotion-candidate on a P-VAC fixture ("nonzero withholding" has no p*). |
| TF-6 blind assignment | DEMOTE | Promotion-candidate but fixture is a plot, not a verdict. |
| TF-7 posted-price | DEMOTE | Single-bidder theorem transferred to multi-agent surface = category error. |
| TF-8 side-info conditioning | SURVIVES (borrow-carefully) | Fetched; depends on absent identity layer — correctly future-work. |
| TF-9 sybil = cartel | SURVIVES (residue) | Correctly self-labeled inference; harness vacuous → cannot exceed residue. |
| TF-10 randomization-for-deterrence | DEMOTE | Closest to decidable but "toward 0" lacks ε/metric → not yet promotion-grade. |
| TF-11 optimize/estimate split | SURVIVES (REVISE xref) | Best fixture in draft (unbiasedness testable); don't use it to prove TF-2's verdict. |
| TF-12 geometric centralization | REVISE | Block must be horizon-scoped; state crossover horizon T* or it's unfalsifiable. |
| TF-13 treasury thresholds | DEMOTE | Named thresholds are search-only (P-PROV); only the zero-buffer runway inequality survives. |
| TF-14 open-loop yield set-point | SURVIVES (REVISE) | Real control gap; fixture needs the divergence metric + governor bound stated, and "block" softened to "block-as-safe." |
| C1 measurement≠authority | SURVIVES | Clean cross-method convergence. |
| C2 randomness defends signal | SURVIVES | Clean; Beer F1 + Myerson F4 both fetched. |
| C3 identity load-bearing | REVISE | Soft leg (F9 inference); down-weight uplift. |
| C4 growth-emission attractor | REVISE | Soft leg (F4 counterpointed); down-weight uplift. |

Net: 0 KILL, 6 DEMOTE (TF-5, TF-6, TF-7, TF-10, TF-13, + the C3/C4 uplift), 6 REVISE,
remainder SURVIVES. No invariant is killed outright — the corpus is honest — but **four of
the five promotion-candidates are over-promoted on vacuous (P-VAC) or miscategorized fixtures.**

---

## Refusal-standard recheck (skeptic view)

The draft's self-check claims "random rewards (TF-5) flagged as requiring fairness +
anti-gaming witness before promotion." Correct in prose — but the draft then **lists TF-5,
TF-6, TF-10 as promotion-candidates anyway**, before that witness exists and before their
fixtures are decidable. That is the refusal standard's "random rewards without a fairness and
anti-gaming witness" failure, committed at the posture-label level. The demotions in M-1 are
required to make the self-check true rather than merely asserted.
