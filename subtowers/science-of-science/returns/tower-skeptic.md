# science-of-science — Tower Skeptic (in-corpus attack)

Status: skeptic pass · Promotion scope: local-research-only · no promotion
Lens: "Quine, Willard Van Orman" — DEFINITIONAL-SOUNDNESS / UNBRIDGED ANALOGY. A lens, not authority.
Target: `returns/tower-findings.draft.md` (rev as read 2026-06-27)
Standard applied: claim ≤ proof; no academia→DAO sentence may be stated as if it measures ResonantDAO; every survivor must carry a NAMED and GENUINELY-UNRESOLVED bridge decision; magnitudes (OR=3.5, 1-in-5, 965%) may not be presented as DAO measurements.

---

## 0. The Quinean attack frame (what "unbridged" means here)

Every finding in this tower is a sentence of the form *academia exhibits X → ResonantDAO will exhibit X*. The middle arrow is a **bridge law**, and in this corpus the bridge law is **never observed inside ResonantDAO** (the draft's own RES-SoS-5 concedes this is the keystone residue). Under that condition the *only* honest semantic content of a finding is the **academic antecedent plus a warning that the consequent is untested**. Any sentence that asserts the consequent — that the DAO *will* game, *will* concentrate, *has* a coercion channel of magnitude M — is asserting more than the corpus proves. That is the line I cut on.

Two structural traps the draft must not fall into, named so each verdict can point at one:

- **TRAP-A (magnitude transfer):** an academic number (OR=3.5, 1-in-5, 965%, ~50%/50.1%, n=142, 37k reviews) is carried across the arrow and reads as if it sizes a DAO effect. Numbers do not survive an unbridged analogy. They are properties of the academic measurement instrument, not of ResonantDAO.
- **TRAP-B (renamed metric authority):** a "cure" ported from academia is itself a metric-that-pays (downstream citation, fork graph, reuse mass, minority-report channel). Porting it does not escape the very disease the tower documents (Goodhart). A cure that is a renamed metric-authority is forbidden by the project Refusal Standard ("authority-by-score / popularity-by-citation / governance-by-metric renamed").

The draft is, overall, unusually disciplined: §0 declares analogy-by-default, every TF carries a source-kind, and RES-SoS-5 is honest about the missing DAO witness. My attack is therefore mostly **REVISE** at the sentence level, with one **DEMOTE** and one verdict-vocabulary correction — not wholesale KILL. I found no finding that is pure popularity-by-citation smuggled in as authority; the tower is built to warn *against* that, not to do it.

---

## 1. Verdicts (one concrete reason each)

### TF-1 — downstream-credit cure vs Goodhart collision — **SURVIVES**
The strongest finding in the tower precisely because it refuses TRAP-B out loud: it names the downstream-usage / fork graph as *itself a payable metric* and blocks the claim that it is safe. That is the correct Quinean move — it denies the bridge law rather than assuming it. Source-kind `local-inference` is correctly labeled (neither source states the conjunction; the draft says so).
- **Synthesizer's flag (cure-inherits-Goodhart is local-inference):** ADJUDICATED — correctly labeled, no over-claim. The inference is *deflationary* (it removes a safe-metric claim, it does not add a DAO measurement), so it does not violate claim ≤ proof. Keep as local-inference; do not upgrade.
- **Bridge decision:** NAMED (choose the credit primitive; name the anti-gaming witness before it can touch `$RCT`/`$RES`) and GENUINELY UNRESOLVED (the draft asserts "there is no ungameable downstream signal to borrow," i.e. it leaves the choice open rather than resolving it). Confirmed.
- One required REVISE for consistency: the verdict line should read `borrow-carefully (warning-pair) / block-the-safe-metric-claim`, matching the §3 table, so no reader treats TF-1 as licensing a fork-graph credit primitive.

### TF-2 — priority-as-settlement manufactures disputes — **DEMOTE-TO-ANALOGY**
The academic antecedent (Merton: priority as sole property right → "frequent, harsh, ugly" disputes) is related-source and fine. But the consequent — "making first-to-submit the dominant credit event imports the *same* dispute structure" — is **pure analogy** with no bridge law. The draft itself labels the on-chain half "analogy" inside the source-kind line, yet then prints verdict `borrow-carefully`, which over-states. "First-claim disputes in academia" and "first-commit disputes on-chain" share a *word* (priority), not a demonstrated mechanism: on-chain timestamps are cryptographically settled in a way academic priority never was, which is a **disanalogy the draft never addresses**. Until that disanalogy is engaged, this is analogy-only.
- **Synthesizer's flag (TF-2 priority pure analogy):** ADJUDICATED — UPHELD and sharpened: the unexamined disanalogy (deterministic on-chain timestamp vs. contested academic priority) is the concrete reason it cannot be `borrow-carefully` yet.
- **Bridge decision:** NAMED (priority = THE settlement rule, or one signal among several?) and UNRESOLVED. Survives as a *named question*, demoted in verdict to analogy-only.

### TF-3 — simultaneous contribution needs a tie rule — **DEMOTE-TO-ANALOGY** (verdict already weak; reason differs from draft)
Already verdicted `future-work`, which is acceptable as a *sequencing* claim. But the substantive content ("winner-take-all over a fixed target → duplicate effort + tie disputes") is asserted of ResonantDAO bounties by analogy from Merton's multiple-discovery observation. Multiple *discovery* in science (independent labs, months apart, no shared spec) is not obviously the same object as multiple *submissions to a posted bounty with a fixed spec and a clock*. The tie-rule requirement is sensible engineering hygiene, but it does not *derive* from the academic source — it is reachable from first principles about any bounty. Presenting Merton as evidence for it is borrowed authority the source does not supply.
- **Synthesizer's flag (TF-3 tie pure analogy):** ADJUDICATED — UPHELD. The requirement survives as future-work; the *Merton-derivation* of it should be cut to "consistent with, not evidenced by."
- **Bridge decision:** NAMED (winner-take-all / split / co-priority + tie window) and UNRESOLVED. Confirmed. Keep verdict `future-work`; REVISE the source attribution so Merton is not cited as proof of an on-chain tie problem.

### TF-4 — maintenance/invisible-labor — **REVISE (verdict-vocabulary error, must change)**
This is the load-bearing correction. The verdict word **`promotion-candidate` is wrong here**, for a reason stronger than "it sounds like promotion":
1. The draft's **own §0** states the rule: *"the strongest contract verdict available at this stage is borrow-carefully or future-work, never promotion-candidate on the mechanism itself."* TF-4 then prints `promotion-candidate`. The draft **contradicts its own stated ceiling** — that is a definitional-soundness failure regardless of intent.
2. The hedge "promotion-candidate **as a RESIDUE/REQUIREMENT**" is a category error. `promotion-candidate` (per root `TOWER.md`) is a verdict about a *bridge decision / mechanism* moving up the ladder; a residue/requirement is the opposite ladder direction (it is *unclosed*, it routes to `authority/promotion-policy.md`, it has no witness). Calling an open requirement a "promotion-candidate" launders an open question into an advancing claim. The §3 table and §2 narrative even say it should "route through `authority/promotion-policy.md`, not this draft" — which is exactly *not* what `promotion-candidate` means inside a local-research-only tower whose contract forbids the synthesizer from promoting.
3. **Required fix:** restate the verdict as **`requirement-residue (RES-level) — borrow-carefully on the requirement, future-work on every mechanism; routes to authority/promotion-policy.md, NOT promoted here.`** This keeps the genuinely-high cross-witness confidence on the *requirement* while removing the promotion verb the contract reserves for the authority route.
- **Synthesizer's flag (TF-4 "promotion-candidate" wording):** ADJUDICATED — UPHELD as a hard REVISE, escalated from "wording" to "contract-ceiling violation."
- **TRAP-A check:** "~50% invisible / 50.1% uncompensated / n=142" — these are Meluso's OSS measurements. The draft mostly keeps them as antecedent, but the statement sentence reads them into "the shared implication" without a guard. REVISE: tag the numbers explicitly as *academic-OSS magnitudes, not DAO-measured*.
- **Bridge decision:** NAMED and notably well-posed — it includes the second-order question ("does receipt observation actually *capture* care work, or does ER-R10 miss it the way 'open' framing masks the OSS gap?"). GENUINELY UNRESOLVED. This is the best bridge in the tower. Survives as a *requirement* once the verb is fixed.

### TF-5 — gatekeeper evaluate+benefit coercion channel — **REVISE (TRAP-A live)**
The structural claim (a role that both evaluates and benefits is a coercion channel; separate reviewer-credit from reviewed-credit) is a clean, portable *requirement* and the separation control already exists in the harvest (`attention-route-not-authority`, `owner-route-authority-only`). That half SURVIVES as `borrow-carefully`. But the sentence **"empirically, reviewer self-citation requests are approved at OR=3.5 … coerced citation runs ~1-in-5 … ResonantDAO curation/authority roles … inherit this"** does exactly the forbidden thing: it places a measured academic magnitude immediately before "inherit this," so OR=3.5 reads as if it sizes the DAO channel. It does not. OR=3.5 is a property of a 37k-review eLife dataset, and 1-in-5 is *second-hand* (RES-SoS-2 records the Wilhite–Fong primary as paywalled — so even in academia this magnitude is uncorroborated in-corpus).
- **Synthesizer's flag (TF-5 OR=3.5 magnitude transfer):** ADJUDICATED — UPHELD. The draft's verdict parenthetical already says "do not present OR=3.5 as a DAO measurement," but the **statement sentence violates the verdict's own instruction.** REVISE the statement so the magnitude lives only as an academic citation with the RES-SoS-2 second-hand caveat inline, and "inherit this" is replaced with "*may* inherit this *structure* (magnitude untransferable)."
- **Bridge decision:** NAMED (do reviewers map to authority/curation roles; is reviewer-credit separated from reviewed-credit?) and UNRESOLVED. Confirmed.

### TF-6 — rings witnessed-before-emission — **SURVIVES**
The portable content is a *sequencing* claim ("emit-then-detect pays the ring before catching it") plus a block on "detect later" framing. Sequencing requirements are bridge-light: they constrain *order of operations*, not a magnitude or a metric, so they cross the analogy gap with the least baggage. The local-inference label on the "too-late" framing is correct.
- **Bridge decision:** NAMED (how do author-collusion patterns map to on-chain mutual-endorsement/fork rings; can a witness gate emission?) and UNRESOLVED. Confirmed.
- Minor REVISE: "detectable only post-hoc and statistically (anomaly-detection literature)" is an academic claim about *citation* rings; do not let it imply on-chain rings are *also* only post-hoc-detectable — on-chain graphs may be observable pre-emission, which is the whole hope of the finding. State that as the open question, not a borrowed fact.

### TF-7 — fairness witness must test distribution not aggregate — **SURVIVES (with TRAP-A guard)**
Methodological requirements ("test per-tier distribution, not aggregate rate") port well because they constrain *how you measure*, not *what the magnitude is*. The F5 targeting evidence is `related-source` and the DAO-tier mapping is honestly tagged `analogy`. Good.
- **TRAP-A note:** the antecedent leans on RI2's "965% / hyper-prolific" Goodhart signature indirectly; ensure that number never appears as a DAO figure. (The draft does not import 965% here — clean — but RES-SoS-3 flags RI2 as partial/preprint; keep the targeting-asymmetry claim at related-source-partial.)
- **Bridge decision:** NAMED (what are the contributor power tiers; does the witness test per-tier impact?) and UNRESOLVED. Confirmed. Keep `future-work`.

### TF-8 — novelty-bias / minority-report channel — **SURVIVES as analogy-only (already correctly demoted)**
The draft already self-demotes to `analogy-only` because Romero is fetch-failed (RES-SoS-1, open-residue) AND because the proposed cure (minority-report channel) is itself unbridged and risk-laden (re-imports ER-R3 speculation, ER-R5 randomness). This is the rare case where the draft pre-empts my attack: the cure is flagged as TRAP-B-adjacent (a reward channel insulated from reuse-mass is a new payable metric). No change needed beyond keeping it below the borrow line until Romero or a substitute is fetched.
- **Bridge decision:** NAMED (insulated minority-report channel without becoming a speculation lottery) and UNRESOLVED. Confirmed.

### TF-9 — intrinsic-motivation crowd-out — **REVISE (population assumption must be stated as assumption, and the TF-4 contradiction surfaced in-line)**
Two defects, both flagged by the synthesizer, both real:
1. **Population assumption:** Benkler–Nissenbaum's crowding-out result holds *for a population of intrinsically-motivated commons participants*. Asserting crowd-out as a ResonantDAO risk presupposes ResonantDAO contributors *are* that population. The draft's verdict line does warn against this ("do not overclaim that ResonantDAO contributors are commons-virtue actors — that is an assumption, not evidence"), which is good — but the **statement** still asserts "attaching pay/score … risks converting intrinsic motivation into extrinsic optimization" as if the intrinsic population is given. REVISE: move the population caveat into the statement, not just the verdict.
2. **TF-4 ↔ TF-9 contradiction:** TF-4 demands maintenance/care be *paid* (or it stays an unpaid externality); TF-9 warns that *paying* contribution crowds out intrinsic motivation. These are a genuine dilemma, and the draft's TF-9 bridge decision does name it ("these two requirements are in tension and must be resolved together"). **ADJUDICATION:** this is NOT a defect to KILL — it is the second real tension in the tower (alongside TF-1) and should be *elevated*, not hidden. But it is currently stated only inside TF-9's bridge line; it must also be cross-referenced from TF-4 so a reader of TF-4 alone does not walk away with "pay everything" as a clean requirement. REVISE TF-4 to carry a pointer: *"see TF-9 — the pay-maintenance requirement is in unresolved tension with intrinsic-motivation crowd-out."*
- **Synthesizer's flags (TF-9 population assumption + TF-4/TF-9 contradiction):** ADJUDICATED — both UPHELD; neither kills the finding, both require the REVISEs above. The contradiction is a feature (real dilemma) only if it is made *visible from both sides*; right now it is visible from one.
- **Bridge decision:** NAMED (intrinsic vs extrinsic population; protect intrinsics without starving them) and UNRESOLVED. Confirmed.

---

## 2. Cross-witness map (§1) and the "two independent witnesses" claim — **REVISE (independence overstated)**
The draft leans hard on "two independent witnesses agree → highest confidence" (esp. TF-4). Quinean caution: the two sub-lanes are **isolated by dispatch, not independent in content**. Both are reading the *same underlying object* (academic/peer-production credit systems) and several findings (invisible labor, concentration, gaming) are near-truisms of *any* credit-that-pays system. Two corpora that share a generative cause are not two independent draws. The convergence is real and worth noting, but "highest cross-witness confidence in this tower" should be softened to "convergent across two isolated readings of a shared domain — convergence raises *salience*, not statistical independence." This does not kill TF-4; it removes an unearned confidence multiplier.

---

## 3. Bridge-decision audit (the survivor obligation)
Every surviving / revised finding has a bridge decision that is **named** and **genuinely unresolved** — I checked each for the failure mode "quietly assumed resolved":

| TF | Bridge named? | Genuinely unresolved? | Quiet-resolution risk |
| --- | --- | --- | --- |
| TF-1 | yes | yes ("no ungameable signal to borrow" — leaves choice open) | none |
| TF-2 | yes | yes | none, but disanalogy unexamined → demote |
| TF-3 | yes | yes | none |
| TF-4 | yes (incl. 2nd-order receipt-capture question) | yes | **verdict verb pre-resolves it ("promotion-candidate") → must fix** |
| TF-5 | yes | yes | statement sentence smuggles resolved-magnitude → fix |
| TF-6 | yes | yes | none |
| TF-7 | yes | yes | none |
| TF-8 | yes | yes | none (cure self-flagged risky) |
| TF-9 | yes | yes | population presupposed in statement → fix |

No finding has a *secretly-resolved* bridge except via the TF-4 verdict verb, which is the one true smuggle.

---

## 4. Anything the synthesizer missed
1. **TF-2 disanalogy (on-chain timestamps are deterministically settled; academic priority was contested):** unaddressed; it is the reason TF-2 cannot sit at `borrow-carefully`. (New — drives the DEMOTE.)
2. **TF-3 Merton-as-evidence vs. Merton-as-consistent:** the tie-rule requirement is first-principles bounty hygiene, not derived from the source; citing Merton as its evidence is borrowed authority. (New — REVISE attribution.)
3. **§1 "independent witnesses" = isolated, not independent:** unearned confidence multiplier on TF-4. (New — §2 above.)
4. **1-in-5 is second-hand even in academia (RES-SoS-2):** TF-5/TF-6 lean on a magnitude whose primary is paywalled; the in-corpus status is "secondary-reported," weaker than `related-source`. The draft records this in residue but does not down-weight TF-5/TF-6 for it. (REVISE.)
5. **No collapse-test on the individual findings, only on the tower (RES-SoS-5).** The tower-level collapse test is excellent, but TF-4 and TF-1 (the two that carry the most weight) deserve their *own* named collapse observation. e.g. TF-4 collapse-test: *if a ResonantDAO receipt graph ever shows maintenance/care work IS captured and rewarded at parity, TF-4's requirement is satisfied, not open.* Recommend adding per-finding collapse observations to the two load-bearing findings. (Enhancement, not a defect.)

---

## 5. Verdict roll-up

| Finding | Skeptic verdict | One-line reason |
| --- | --- | --- |
| TF-1 | **SURVIVES** | refuses TRAP-B explicitly; deflationary local-inference; bridge open. Align verdict line to "block-the-safe-metric-claim." |
| TF-2 | **DEMOTE-TO-ANALOGY** | on-chain/academic priority share a word, not a mechanism; deterministic-timestamp disanalogy unexamined. |
| TF-3 | **DEMOTE-TO-ANALOGY** | keep `future-work`, but tie-rule is bounty hygiene, not Merton-evidenced — fix attribution. |
| TF-4 | **REVISE (must)** | `promotion-candidate` violates the draft's own §0 ceiling and the local-research-only contract; restate as requirement-residue / future-work-on-mechanism, route to authority. |
| TF-5 | **REVISE** | structural separation survives (`borrow-carefully`); OR=3.5 / 1-in-5 must be quarantined as academic+second-hand, not "inherited" magnitude. |
| TF-6 | **SURVIVES** | sequencing claim is bridge-light; don't import "post-hoc-only" as an on-chain fact. |
| TF-7 | **SURVIVES** | methodological (measure distribution) ports cleanly; keep RI2 magnitudes out. |
| TF-8 | **SURVIVES (analogy-only)** | already correctly self-demoted; cure is TRAP-B-adjacent; hold below borrow until Romero fetched. |
| TF-9 | **REVISE** | state intrinsic-population as assumption in the statement; surface the TF-4↔TF-9 pay-vs-crowd-out dilemma from BOTH findings. |

No KILL. One DEMOTE pair (TF-2, TF-3), four REVISE (TF-4, TF-5, TF-9, plus §1 independence wording), three clean SURVIVE (TF-1, TF-6, TF-7), one already-correct analogy-only (TF-8). The tower is honest; its single contract breach is the TF-4 verdict verb.

---

## 6. Single most important revision
**Change TF-4's verdict from `promotion-candidate` to a requirement-residue that explicitly routes to `authority/promotion-policy.md` and is NOT promoted in this draft.** It is the only place the draft contradicts its own stated ceiling (§0: "never promotion-candidate on the mechanism itself") and the only place a genuinely-open bridge decision is laundered into an advancing claim inside a local-research-only tower whose contract forbids the synthesizer from promoting. Everything else is sentence-level magnitude/assumption hygiene; this one is a contract breach.
