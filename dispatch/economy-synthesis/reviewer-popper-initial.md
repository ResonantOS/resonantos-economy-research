# Reviewer Initial Position — Lens: "Popper, Karl" · Vector: NON-VACUITY

Status: initial position (pre robot-talks with Quine and Meadows). Lens, not authority.
Target: `dispatch/economy-synthesis/synthesis-draft.md`.

## The bar I apply

A claim earns standing only if it **forbids an observable**. A fixture is non-vacuous only if a
**concrete input exists that would make it FAIL** — and that input must be constructible *now*, not
"once X is specified." Three failure modes I hunt:

- **F1 — No deciding input.** The pass condition references a quantity (`p*`, `T*`, `r`, `C`,
  identity-cost) that the corpus does not supply, so neither PASS nor FAIL can be evaluated. The
  "fixture" is a *promise of a fixture*. Decidable-once-you-have-X is NOT decidable.
- **F2 — Trivially-satisfiable / tautological.** The condition can be made to PASS by construction
  (definitional rather than empirical), so it forbids nothing.
- **F3 — Unfalsifiable failure condition.** The "collapse test" cannot be triggered by any
  observation, often because it rides on an un-ledgered surface feature that may never land.

A claim that is honestly labelled "salience, no proof / residue / blocked" is NOT vacuous — it is a
correctly-demoted non-claim. I do not kill those. I kill things **dressed as decidable that are
not**, and I demand the draft stop calling F1 items "decidable."

---

## Per-claim verdicts

### §0.3 — Separation-posture spine ("measurement structurally unable to act as authority")
**VERDICT: SURVIVES (as posture) — but the label "decidable elsewhere" must be quarantined to L1-INV-A only.**

§0.3 is explicitly tagged "Salience: high. Proof: none… a design *posture*, not a validated
invariant." That is the correct Popperian status: it is a *research program*, not a corroborated
law, and the draft does not dress it as decidable. A posture cannot be vacuous because it does not
yet claim to forbid anything specific — it points where to look.

The non-vacuity risk is not in §0.3's prose, it is in the **slippage** to its operational form
L1-INV-A (`∂authority/∂self_report = 0`). The draft itself admits (line 96-98) L1-INV-A "cannot be
certified violated, only flagged" because the whitepaper prose is underspecified. **That is an F1
admission.** So: the posture SURVIVES as a posture; but any sentence implying §0.3 is *already*
operationalized is REVISED-DOWN. The draft mostly does this correctly. Demand: §0.3 must carry an
explicit "this forbids nothing until L1-INV-A's spec lands" tag so a downstream reader cannot
promote the posture as if it were the invariant. Salience ≠ a forbidden observable.

### §1 Lane-2 keystone — "non-transferable ≠ non-farmable" (correlated-weak-witnesses)
**VERDICT: SURVIVES as a structural argument; KILL any reading of it as a finding *about Resonant*.**

The draft's own caveat (lines 168-171) is exactly the Popperian move I would demand: "None is a
fetched proof that Resonant's `$RCT` is farmable… they converge on a *structural argument*." Good.
The structural argument **is** falsifiable in the abstract: "any per-identity score is shardable
across cheap manufactured identities" is forbidden-from-being-safe *iff identities are cheap*. The
claim that would be vacuous — "Resonant `$RCT` is farmable" — is the one the draft already refuses
to make. So the keystone survives **only in its conditional form**: IF identity is costless THEN
per-identity scoring loses its exclusion precondition (this is formal TF-9, honestly an
open-residue).

The non-vacuity defect is downstream, at L2-OBLIGATION-A's fixture — see Backlog Rank 5 below. The
keystone is fine; the fixture that is supposed to discharge it is not.

### §6.1 — The MERGE-1 / MERGE-2 / MERGE-3 collapses
**VERDICT: MERGE-1 SURVIVES (revise scope). MERGE-2 SURVIVES (revise: it is ONE decidable leg + two non-fixtures, do not sell it as three). MERGE-3 KILL-as-stated (all three legs are F1).**

A "merge" is a non-vacuity claim in disguise: it asserts *one harness can decide three things*.
Popper's question: does the merged harness have a single deciding input set that can FAIL? Per
merge:

- **MERGE-1 (Lane-3 conservation+emission):** The flow-conservation leg (TF-1) has a genuine
  deciding input — replay an emission ledger, check `Σ(emitted) ≤ treasury`. **Constructible the
  moment an emission schedule exists, FAILable by any over-emitting epoch.** Non-vacuous. BUT the
  draft folds in TF-12 (emission-centralization, "must name T*") under the same harness. TF-12 is
  F1 (no T*, see Rank 4). So MERGE-1 as written bundles a decidable leg with an undecidable one and
  presents them as one harness. **REVISE:** MERGE-1 may merge TF-1 + the fairness/per-tier readout
  (which is a *reporting* step, always computable) but must **eject TF-12 to residue** until T* is
  named, or the merge inherits TF-12's vacuity. The merge is not free; it is only as decidable as
  its weakest co-run leg.

- **MERGE-2 (signal-separation):** Honest. TF-11 (stratified-estimate-unbiased-under-steering) is
  the *one* genuinely decidable leg and the draft says so (Rank 1, "already non-vacuous"). TF-2 is
  explicitly "blocked-pending-spec → routes to definitions, not a fixture yet." sci TF-5 is
  structure/analogy. So MERGE-2 is really **one fixture + two routings wearing one label.**
  SURVIVES, but REVISE the framing: do not call it a "three-fixture collapse." It is one fixture
  (TF-11) with two non-fixture companions. Calling three things a merged *fixture* when only one can
  FAIL today is an F2-adjacent overstatement.

- **MERGE-3 (anti-collusion / randomness-defends-signal):** **KILL as stated.** All three legs
  (TF-5 solve-for-p*, TF-6 blind-assignment, TF-10 audit-window-below-r) are by the draft's own
  admission "fixture-pending (must state their flipping value before promotion)" (line 283-285).
  Every one is F1: the pass condition references a threshold (`p*`, the uniform-distinguishability
  bound, `r`) that **the corpus has not produced.** A coalition simulator that cannot state p* has
  no FAIL region — you cannot fail `p < p*` if p* is unknown. This is the textbook unfalsifiable
  placeholder. MERGE-3 is not a fixture; it is **a specification for three fixtures that do not yet
  exist.** REVISE to: "MERGE-3 is a deliverable-to-produce-three-thresholds, not a harness that can
  pass/fail anything today." Until p*, the distinguishability bound, and r are *computed values*,
  MERGE-3 forbids nothing.

### §1/§4 — Randomness-vs-legibility stage-partition
**VERDICT: SURVIVES (this is the draft's best falsifiable structural claim) — tighten one word.**

T-L1.2 / T-L4.1's resolution — "randomness belongs in audit/reviewer-assignment selection (formal),
NOT in reward allocation (socio); legibility belongs in the contribution→recognition path" — is the
**most Popper-respectable claim in the document**, because it is a *partition that forbids a concrete
configuration*: it forbids "flat-random reward allocation to a high-claim contributor who loses" and
forbids "predictable/legible audit selection." Both forbidden states are observable. socio TF-3's
three-arm legitimacy test (Rank 13: deterministic vs weighted-lottery vs flat-random in the
high-claim-loser case) is an actual constructible fixture with a FAIL arm. This SURVIVES.

One tightening: the partition is asserted as "the corpus supports" / "cross-lane consistency" — but
it is *cross-lane consistency of two analogy-grade legs* (formal TF-10 fixture-pending, socio TF-3
primary). Per §0.1 that is salience, not corroboration. **REVISE the word "resolution" → "candidate
partition with one constructible witness (TF-3's three-arm test) and one fixture-pending leg
(TF-10)."** The partition is falsifiable; its *cross-tower endorsement* is not yet earned.

### §2/§3 — Pay-vs-crowd-out reconciliation (T-L2.1 / T-L3.1)
**VERDICT: REVISE — the tension SURVIVES (it is genuine and the draft refuses to false-resolve it), but the "framing-rescue" reconciliation is currently UNFALSIFIABLE and must be tagged so.**

The draft is honest that pay-as-first-class (sci TF-4) and crowd-out (sci TF-9 / socio TF-1) "are
not independently satisfiable" and that socio TF-7's gift/recognition-framing is "the only partial
reconciliation… but does not rescue the bootstrap population." Preserving an unresolved tension is
correct and non-vacuous — an admitted contradiction forbids the claim "this is solved."

The defect: the **framing-rescue itself ("frame as gift/recognition not price/contract flips the
sign")** is offered as a mechanism with no decidable witness in the draft. What observation would
show the framing *failed* to flip the sign? None is named. As stated it is an F3: "reframe and it
works" cannot be falsified without a within-population measure of motive-substitution under the two
framings. socio TF-1's own fixture (Rank 14: within-subject A→B→A', FAIL-persistence iff A'≥A) is
the *closest* deciding instrument, and it is flagged "weak — persistence single-study (Haifa)."
**REVISE:** the framing-rescue must be demoted from "reconciliation" to "untested hypothesis whose
only candidate witness (TF-1 within-subject A→B→A') is single-study," and the bootstrap-cohort
boundary must be stated as the *predicted failure region* (framing surplus weakest for
new/short-tenure → that is where A'≥A should appear if the rescue is false). That converts a vague
rescue into a falsifiable prediction. Without that, it is a hopeful narrative.

---

## Defects I found that the synthesizer did NOT flag

### NEW-1 — Backlog Rank 5 (L2-OBLIGATION-A anti-sybil witness): the fixture is VACUOUS, and the draft half-admits it.
**VERDICT: KILL the "fixture" status; KEEP only as a constitution routing + named open-residue.**

Rank 5's pass/fail is "fixture = identity-cost model (currently exogenous, formal TF-9
open-residue)." The note column even says "**the harness is vacuous until an identity-cost model
exists — largest residue.**" This is a confession of F1 sitting inside a table column labelled
"Decidable pass/fail." A row cannot be simultaneously "owes: fixture / decidable" and "vacuous until
a model that does not exist." **It has no FAIL region:** with identity cost exogenous, any sybil
result is parameter-dependent and you can drive the harness to PASS or FAIL by choosing the cost.
That is the definition of unfalsifiable. KILL its presentation as a fixture; it is **a constitution
routing (R7) plus the single largest open-residue in the corpus.** This is the most important
non-vacuity correction in the document because L2-OBLIGATION-A is invoked as a *necessary obligation*
on every per-identity reward — an obligation discharged by a vacuous witness is no obligation at all.

### NEW-2 — Backlog Rank 9 (TF-14 yield governor): F1 — `C` is undefined.
**VERDICT: REVISE to residue/future-work; remove from the fixture column.**

Pass/fail: "FAIL iff `|emission_rate − sustainable_rate|` grows past cap C under shock; PASS iff
governor holds ≤ C." `C` is never supplied, and "sustainable_rate" is itself undefined absent the
un-ledgered emission/supply surface. Two undefined quantities ⇒ no deciding input ⇒ no FAIL region.
It is already Phase-2-gated (C6), so honest disposition is **residue/future-work**, not a fixture
with a decidable condition. Currently it is dressed in pass/fail clothing it cannot wear.

### NEW-3 — Backlog Rank 4 (TF-12 emission-centralization): correctly conditional, but the draft lets MERGE-1 launder it. (cross-ref MERGE-1 above)
**VERDICT: SURVIVES only as written ("Without T*, reverts to residue") — but enforce that demotion upstream in MERGE-1.**

Rank 4 is actually the draft's *model* of an honest F1 handling: "Without T*, reverts to residue."
That is exactly right — the fixture has a FAIL region *only once T\* is named*, and the draft says
so. My objection is consistency, not the row itself: §6.1 MERGE-1 then re-absorbs TF-12 into a
"single highest-leverage harness" without carrying the "reverts to residue" tag. **REVISE MERGE-1 to
inherit Rank 4's conditional**, so the merge cannot smuggle an undecidable leg under a decidable
banner.

### NEW-4 — Backlog Rank 10 (TF-13 runway inequality): SURVIVES — this is a correctly-built non-vacuous launch-blocker.
**VERDICT: SURVIVES.** "FAIL iff `stables + liquidable·(1−haircut) = 0` while `burn > 0`" is a
genuine deciding condition: it forbids the observable state "zero non-native reserves while burning."
The thresholds (50/80 drawdown etc.) are honestly tagged "parameters, not asserted." This is what a
non-vacuous backlog row looks like, and I cite it as the template the F1 rows (5, 9, MERGE-3) fail to
meet.

### NEW-5 — Backlog Rank 2 (MERGE-1/TF-1 flow-conservation): SURVIVES with an F1 dependency flagged honestly.
**VERDICT: SURVIVES.** "PASS iff per-epoch `Σ(emitted) ≤ treasury` AND no `$RCT` summed into `$RES`"
is decidable and FAILable by any over-emitting ledger. The note "emission must be specified first
(open-residue leg)" correctly states that the *deciding input* (the emission schedule) is not yet in
hand — but the **decision rule is fully specified**, so the moment a schedule exists it can FAIL.
This is F1-of-input, not F1-of-rule, and is acceptable because the harness is constructible and its
FAIL region is defined independent of un-ledgered surface. Contrast Rank 5/9 where the *rule itself*
has no FAIL region.

### NEW-6 — Backlog Rank 1 (TF-11 estimate-unbiased-under-steering): SURVIVES as the sole genuine promotion-candidate — but its FAIL region depends on "true_rate" being knowable.
**VERDICT: SURVIVES — minor demand.** "PASS iff `|E[stratified_estimate] − true_rate| ≤ CI` under
adversarial steering" is the one row that is decidable *and* has its deciding input internally
(simulate a population with known true_rate, steer the optimized arm, measure bias). This is genuinely
non-vacuous: there exist steering strategies that would push the estimate outside CI ⇒ a real FAIL
region. My only demand: the fixture must publish the **adversarial steering policy class** it tests
against, or "under adversarial steering" becomes an existential the synthesizer can always claim to
have satisfied (F2 risk — passing against a weak adversary). Name the adversary class; otherwise the
PASS is cheap.

---

## Summary table

| Claim | Verdict | Core reason |
| --- | --- | --- |
| §0.3 separation posture | SURVIVES (posture) | Honestly "salience, no proof"; demand explicit "forbids nothing until L1-INV-A spec lands" tag |
| Lane-2 non-transferable≠non-farmable | SURVIVES (conditional) / KILL Resonant-finding reading | Structural arg is falsifiable; the Resonant claim the draft already refuses |
| MERGE-1 | SURVIVES (revise scope) | TF-1 decidable; must EJECT TF-12 to residue (don't bundle undecidable leg) |
| MERGE-2 | SURVIVES (revise framing) | One real fixture (TF-11) + two routings; stop calling it three fixtures |
| MERGE-3 | **KILL as stated** | All three legs F1 — no p*, no distinguishability bound, no r → no FAIL region |
| randomness/legibility partition | SURVIVES (tighten "resolution"→"candidate") | Best falsifiable structural claim; TF-3 three-arm test is a real witness |
| pay-vs-crowd-out reconciliation | REVISE | Tension survives; framing-rescue is F3 until cast as A→B→A' prediction over bootstrap cohort |
| NEW-1 Rank 5 anti-sybil "fixture" | **KILL fixture-status** | Self-confessed "vacuous until identity-cost model exists" — no FAIL region |
| NEW-2 Rank 9 yield governor | REVISE → residue | `C` and sustainable_rate undefined — F1 |
| NEW-3 Rank 4 TF-12 | SURVIVES (enforce demotion in MERGE-1) | "reverts to residue without T*" is correct; MERGE-1 must inherit it |
| NEW-4 Rank 10 runway inequality | SURVIVES | Template non-vacuous launch-blocker |
| NEW-5 Rank 2 flow-conservation | SURVIVES | Rule fully specified; only the input is pending |
| NEW-6 Rank 1 TF-11 | SURVIVES | Sole real promotion-candidate; must publish adversary class |

---

## Single highest-priority demand on the synthesis

**Split the §6 backlog's "Decidable pass/fail OR routing" column into two columns that cannot be
conflated: (A) RULE-DECIDABLE NOW — the FAIL region is fully specified and a concrete input exists
that would trigger it; (B) AWAITS-A-VALUE/MODEL — the pass condition names a quantity the corpus has
not produced (p*, T*, r, C, identity-cost), so it has no FAIL region and is a *promise of a fixture*,
not a fixture.**

By this test, exactly **Ranks 1, 2, 10 (and TF-3's three-arm test, Rank 13)** are RULE-DECIDABLE
NOW. **MERGE-3 in full (Ranks 6, 7, 8), Rank 5, and Rank 9** are AWAITS-A-VALUE/MODEL and must NOT
appear under a "decidable" banner. The current single column lets a vacuous placeholder ("measure X
once X exists") sit beside a genuine fixture under the same header — and a downstream reader will
treat the backlog as N decidable deliverables when only ~4 forbid anything today. Non-vacuity is
falsified by even one F1 row wearing decidable clothing; the document has at least four. Fix the
column, and the synthesis stops manufacturing the appearance of decidability — the exact mirror of
the §0.1 discipline against manufacturing confidence from correlated witnesses.
