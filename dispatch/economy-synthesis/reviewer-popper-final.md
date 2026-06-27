# Reviewer FINAL Position — Lens: "Popper, Karl" · Vector: NON-VACUITY

Status: final (post robot-talks confrontation with Quine and Meadows). Lens, not authority.
Supersedes `reviewer-popper-initial.md` where they differ; keeps it as the record of my opening.
Target: `dispatch/economy-synthesis/synthesis-draft.md`.

## The confrontation, resolved up front

Quine (definitional), Meadows (precedent), and I (non-vacuity) attacked the **same §6 backlog
table** from three orthogonal axes, and the attacks **compose into one transformation** rather than
three competing edits. This is the load-bearing result of the round:

- **Quine de-fuses the ROWS** — a merged row that emits one verdict over three distinct objects
  (budget-conservation, centralization, fairness) is a category error; each object needs its own
  verdict field. *Axis: object identity.*
- **My column-split classifies each (de-fused) row by DECIDABILITY** — RULE-DECIDABLE-NOW vs
  AWAITS-A-VALUE/MODEL, i.e. does this row forbid an observable *today*. *Axis: falsifiability.*
- **Meadows re-ranks the resulting rows by OWNER-STRENGTH × decidability, deleting salience tags**
  from the ranking key. *Axis: provenance / what may legitimately order the build queue.*

These are not in tension; they are three independent coordinates on the same cells. **A row must
first be de-fused (Quine) into single-object verdicts, then each verdict classified decidable-now or
awaits-a-value (Popper), then the decidable-now set ordered by owner-strength (Meadows).** Salience
plays no role in any of the three. They merge into **one consolidated demand** (stated at the end).

I confirm the composition is clean: Quine's de-fuse is a *precondition* for my column-split (you
cannot classify a row's FAIL-region until the row decides exactly one object — a fused row has three
FAIL-regions and no single answer), and my column-split is a *precondition* for Meadows's re-rank
(you cannot rank by decidability×owner if "decidable" is conflated with "promise of a fixture"). The
three are a **pipeline, not a vote.**

---

## Where I CONCEDE (convergence)

### C1 — MERGE-1: I move from "REVISE scope" to Quine's KILL-as-a-merge. CONCEDED.
My initial said "SURVIVES, eject TF-12." Quine is right that the residual problem is deeper than
TF-12: even TF-1 (budget-conservation) and the per-tier fairness readout are **distinct objects** —
a ledger can conserve budget (TF-1 PASS) while concentrating distribution across tiers (fairness
FAIL), and vice versa. My non-vacuity test actually *demands* Quine's de-fuse: a harness that emits
one "MERGE-1 PASS" hides which of three FAIL-regions fired, which destroys decidability (you no
longer know what was forbidden). So I withdraw "merge with scope-revision" and adopt **KILL the
aggregate-MERGE; replace with three independent verdict fields on one shared replay input.** This is
strictly stronger than my initial and I concede it fully. Note: TF-1 and the fairness readout each
remain RULE-DECIDABLE-NOW *after* de-fusing; only TF-12 (no T*) is AWAITS-A-VALUE. So de-fusing also
*rescues* the two good legs from TF-12's vacuity — Quine's move serves my vector.

### C2 — §0.3 spine: I adopt Quine's affirmative/prohibitive split. CONCEDED and sharpened.
Quine KILLs the *affirmative* reading ("the smallest strengthening mechanism IS the observe-and-route
credit graph") as an un-witnessed design claim from correlated witnesses, keeping only the
*prohibition* ("measurement must not act as authority/payout/governance weight"). This is more
precise than my initial "tag it pending L1-INV-A spec," and it is exactly the Popperian cut: **a
prohibition forbids an observable (it is falsifiable by exhibiting a working system where measurement
DOES act as authority safely); an affirmative existence-claim about the *one smallest* mechanism
forbids nothing and is unfalsifiable from four correlated witnesses.** I concede: §0.3 SURVIVES as a
prohibition only; its affirmative "IS the credit graph" reading is KILLED. My non-vacuity test and
Quine's definitional test return the *same verdict* here.

### C3 — TF-9 / L2-OBLIGATION-A anti-sybil: unanimous. CONCEDED, and I upgrade my disposition.
All three of us land on the same place by different routes: I called it vacuous-until-identity-cost
(F1, no FAIL-region); Quine calls it residue+constitution not a fixture; Meadows identifies *why* —
the three "converging" legs (failed T4, formal TF-9, sci TF-1) are **one owned theorem (Douceur 2002
Sybil impossibility) restated three times**, so it is a tautology of an owned impossibility, not a
convergence. Meadows's provenance read strengthens my non-vacuity read: it is vacuous-as-a-fixture
*because* it is an impossibility result with an exogenous precondition (identity cost), and an
impossibility theorem has no fixture FAIL-region — it has a *precondition gate*. I concede Meadows's
reclassification: **L2-OBLIGATION-A is one owned impossibility (Douceur) with a hard identity-cost
precondition = a GATE upstream of the build queue, not item #5 in it.** This is better than my
"constitution routing + residue" because it states the *owner* and the *gate semantics*. The
sybil-anti-gaming witness obligation does not get a rank; it gates whether per-identity scoring may
enter the queue at all.

### C4 — Meadows's §0.1 self-contradiction: CONCEDED — this exposes a leak my initial missed.
Meadows: salience is declared "never a confidence multiplier" (§0.1), yet it ranks the §6.2 build
queue — a real resource — so measurement (convergence-counting) acts as authority *about its own
measurements*, which is the exact thing §0.3 prohibits. This is a genuine self-contradiction I did
not flag, and it is **the same defect as my single highest-priority demand seen from the provenance
side**: my column-split removes salience from the decidability axis; Meadows's re-rank removes
salience from the ordering key. Same poison (salience-as-authority), two exit doors. I concede the
diagnosis and adopt: **all convergence/salience tags DELETED from the §6.2 ranking key.** Salience may
survive only as prose annotation ("look here first"), never as a sort key or a verdict input.

---

## Where I HOLD the non-vacuity line

### H1 — De-fusing and re-ranking are necessary but NOT sufficient; the decidability classification must remain a HARD GATE on promotion, not a sort field.
Meadows ranks by "decidability × owner-strength." Quine de-fuses into verdict fields. Both are right,
but a *ranking* can still place an AWAITS-A-VALUE row at rank 6 instead of excluding it — and a
downstream reader treats "rank 6 fixture" as a fixture. I HOLD: **decidability is not a multiplier in
a score; it is a binary admission gate.** A row that is AWAITS-A-VALUE/MODEL (no FAIL-region today)
may not enter the *fixture* queue at any rank — it enters a separate **"deliverable: produce the
value" queue.** MERGE-3's three legs (TF-5 p*, TF-6 distinguishability bound, TF-10 r) and TF-14's C
do not get a low rank; they get **ejected from the fixture column entirely** until their threshold is
a computed value. I hold this against any re-ranking that keeps them in-table with a number beside
them. (Meadows's "owner-strength" does not save them: Myerson/Beer *own the theorems*, but the
theorem names a purpose without a flipping value — owned-but-thresholdless is still no FAIL-region.)

### H2 — MERGE-3: KILL stands, and owner-strength does not rescue it. HOLD.
Confronting Meadows directly: he says "nearly everything else = build-from-owned with named owners,"
and MERGE-3's legs are owned (Myerson exclusion principle, Beer audit). I HOLD my KILL. **Provenance
is necessary, not sufficient, for non-vacuity.** TF-5 "solve for p* such that E[cartel]=E[honest]" is
a well-owned *instruction to compute p\**; until p* is a number, the fixture `FAIL iff p < p*` has no
FAIL-region. An owned impossibility-with-a-free-parameter is a research task, not a decidable fixture.
MERGE-3 SURVIVES as a **"produce-three-thresholds" deliverable with named owners** (this is the
synthesis I and Meadows reach) — but it is KILLED as a *fixture/harness that can pass/fail anything
today.* The de-fuse applies here too: the three legs are three distinct objects (collusion-pricing,
assignment-unpredictability, audit-coverage) and must not share one "MERGE-3 PASS."

### H3 — Pay-vs-crowd-out framing-rescue: HOLD REVISE (F3 until cast as a prediction).
Neither Quine nor Meadows addressed this; it is in my vector and I hold it. The gift/recognition
framing-rescue forbids no observation as written. It SURVIVES only recast as a falsifiable
prediction: TF-1 within-subject A→B→A', with the **bootstrap/short-tenure cohort named as the
predicted failure region** (framing surplus weakest there → that is where A'≥A must appear if the
rescue is false). Meadows's owner discipline reinforces this: the only owned witness (the Haifa
within-subject result) is single-study, so the prediction inherits a weak owner and may not be
promoted past borrow-carefully. Tension genuine; rescue = untested hypothesis with a named failure
region.

### H4 — TF-11 (sole promotion-candidate): HOLD the adversary-class demand.
This is the one row all three of us let survive as genuinely decidable and owned. I HOLD: it must
publish its **adversarial steering policy class**, else "unbiased under adversarial steering" is an
existential the builder always claims to satisfy (F2 — cheap PASS against a weak adversary). Decidable
*and* owned is still not enough if the adversary is unnamed; the FAIL-region depends on the adversary
class being fixed in advance. This is the non-vacuity tax even on the best row.

---

## Final per-claim verdicts

| Claim | Initial | FINAL | Why changed / held |
| --- | --- | --- | --- |
| §0.3 spine | SURVIVES (posture) | **SURVIVES as PROHIBITION only; KILL affirmative "IS the credit graph"** | Conceded Quine's affirmative/prohibitive cut — sharper than my pending-spec tag |
| Lane-2 non-transf≠non-farmable | SURVIVES (conditional) | **SURVIVES as one owned impossibility (Douceur); KILL convergence framing** | Conceded Meadows: 3 legs = 1 theorem restated, tautology not convergence |
| MERGE-1 | SURVIVES (revise scope) | **KILL the aggregate-merge; 3 independent verdict fields on shared input** | Conceded Quine's de-fuse; it serves my vector (rescues TF-1 + fairness from TF-12's vacuity) |
| MERGE-2 | SURVIVES (revise framing) | **SURVIVES; de-fuse — 1 fixture (TF-11) + 2 routings, no shared verdict** | Quine de-fuse applies; TF-11 only RULE-DECIDABLE-NOW leg |
| MERGE-3 | KILL as stated | **KILL as fixture; HOLD — survives only as produce-3-thresholds deliverable** | Held against owner-strength rescue: owned≠thresholded≠decidable |
| randomness/legibility partition | SURVIVES (tighten) | **SURVIVES as candidate partition; TF-3 three-arm = the one real witness** | Unchanged; the document's best falsifiable structural claim |
| pay-vs-crowd-out reconciliation | REVISE | **REVISE — framing-rescue F3 until cast as A→B→A' prediction w/ bootstrap failure region** | Held; in my vector, others silent |
| Rank 5 anti-sybil "fixture" | KILL fixture-status | **KILL fixture-status → GATE upstream of queue (Douceur + identity-cost precondition)** | Unanimous; upgraded via Meadows's owner+gate semantics |
| Rank 9 yield governor (TF-14) | REVISE → residue | **EJECT from fixture column (AWAITS-A-VALUE: C undefined)** | Held; hardened from "revise" to "eject" via admission-gate (H1) |
| Rank 4 TF-12 centralization | SURVIVES (conditional) | **AWAITS-A-VALUE until T* named; de-fused out of MERGE-1** | Conceded de-fuse rescues the good legs; TF-12 itself stays gated |
| Rank 10 runway inequality | SURVIVES | **SURVIVES — RULE-DECIDABLE-NOW (template row)** | Unchanged |
| Rank 2 flow-conservation (TF-1) | SURVIVES | **SURVIVES — RULE-DECIDABLE-NOW (input pending, rule complete)** | Unchanged; now stands alone post de-fuse |
| Rank 1 TF-11 | SURVIVES | **SURVIVES — sole promotion-candidate; MUST publish adversary class** | Held adversary-class demand (H4) |
| §0.1→§6.2 salience leak (Meadows) | (missed) | **CONCEDE — DELETE salience/convergence tags from §6.2 ranking key** | Same poison as my demand, provenance side |

RULE-DECIDABLE-NOW (forbids an observable today): **TF-11 (R1), TF-1 (R2), runway inequality (R10),
TF-3 three-arm (R13).** Everything else is AWAITS-A-VALUE/MODEL, a routing, a gate, residue, or
prohibition-only. Four rows in the entire backlog can FAIL today.

---

## Consolidated demand — jointly held by all three reviewers

**Rebuild §6 as a three-stage pipeline, salience-free:**

1. **DE-FUSE (Quine).** Every merged row emits one verdict per distinct object. No aggregate
   "MERGE-n PASS." MERGE-1 → {budget-conservation, centralization, fairness}; MERGE-2 → {TF-11
   fixture, TF-2 routing, TF-5 routing}; MERGE-3 → {p*-deliverable, distinguishability-deliverable,
   audit-coverage-deliverable}.
2. **CLASSIFY + GATE (Popper).** Tag each de-fused verdict RULE-DECIDABLE-NOW (FAIL-region fully
   specified, triggering input constructible) vs AWAITS-A-VALUE/MODEL (pass condition names an
   unproduced quantity — p*, T*, r, C, identity-cost). Decidability is a **binary admission gate, not
   a sort multiplier**: AWAITS-A-VALUE rows leave the fixture queue for a separate
   "produce-the-value" queue.
3. **RE-RANK (Meadows).** Order only the RULE-DECIDABLE-NOW set by owner-strength × decidability,
   with **all convergence/salience tags deleted from the ranking key** (salience survives as prose,
   never as sort key or verdict input). Pull L2-OBLIGATION-A out of the queue entirely as a
   **Douceur-owned impossibility GATE** with a hard identity-cost precondition.

The three lenses agree this pipeline is the single corrective: it removes the appearance of
decidability (Popper), the category-error of fused verdicts (Quine), and the salience-as-authority
leak (Meadows) in one ordered operation. After it runs, exactly four rows remain in the fixture
queue, one is a promotion-candidate (TF-11, adversary-class pending), one is an upstream gate
(Douceur), and the §0.3 spine stands as a prohibition only.

## Residual dissent

- **vs Meadows — H1/H2.** Meadows's "decidability × owner-strength" *ranking* is too soft for my
  vector: owner-strength must not promote a thresholdless owned theorem (MERGE-3 legs) into the
  fixture queue at any rank. I require decidability as a hard gate *before* owner-strength orders
  anything. Likely reconcilable (Meadows's re-rank can operate only on the post-gate set), but I
  flag it as the one place where "owned" and "decidable-now" must not be allowed to trade off.
- **vs Quine — none material.** De-fuse and column-split compose without remainder; Quine's
  prohibition-only reading of §0.3 is a strict improvement I adopt.
- **In my vector, unaddressed by others — H3.** The pay-vs-crowd-out framing-rescue's F3 status is
  mine alone; I carry it as a REVISE the others did not contest.

Claim ≤ proof. A fixture that cannot FAIL is not a fixture. Lens, not authority. Promote nothing.
