# science-of-science — Tower Findings (DRAFT)

Status: draft · Promotion scope: local-research-only · no promotion
Synthesizer lens: "Simon, Herbert" (bounded rationality / satisficing — a lens, not authority)
Source base: `returns/research.md` (2 isolated sub-lanes, independent witnesses)
Claim discipline: claim ≤ proof. Every ported lesson carries an UNRESOLVED bridge decision (academia→DAO). No finding is promoted; none is treated as governance authority.

---

## 0. Reading frame

Two sub-lanes ran isolated and are treated as **independent witnesses**:

- **Sub-lane 1 (Kuhn / paradigm / institutional):** Merton, Shen–Barabási, Romero (snippet-only), Matthew-effect literature. Institutional-norm and credit-allocation angle.
- **Sub-lane 2 (Benkler / peer-production / empirical):** Meluso (invisible labor), Wilhite–Fong (coercive citation), Barnett (reviewer self-citation), RI2 (Goodhart signatures), Benkler–Nissenbaum (CBPP virtue), anomaly-detection. Empirical-gaming and labor-distribution angle.

The whole tower is **analogy-by-default**: academia is not a DAO, and the subtower contract (`README.md`, `TOWER.md`) forbids copying academia as a model. A finding only escapes analogy-only status if its bridge decision is *named AND independently witnessable inside ResonantDAO* — and none are witnessed yet. So the strongest contract verdict available at this stage is **borrow-carefully** or **future-work**, never **promotion-candidate** on the mechanism itself.

ResonantDAO pressure points referenced (from `levels/L1-residue-map.md` and whitepaper L0):

- `$RCT` — non-transferable contribution reputation (ER-R2 reputation gaming, ER-R4 authority collapse)
- `$RES` — transferable reward/utility token, no external liquidity at launch (ER-R3, ER-R8)
- Owner/authority gate (ER-R4)
- Attention capture (ER-R9)
- Receipt boundary / invisible care work (ER-R10)
- Bounty optimization (ER-R1)
- Harvested controls: `observed-signal-not-credit`, `credit-record-not-reward`, `attention-route-not-authority`, `owner-route-authority-only`, `credit-gaming-failure-fixtures`.

---

## 1. Cross-witness map (convergence / tension BEFORE port)

| Theme | Kuhn witness (lane 1) | Benkler witness (lane 2) | Relation |
| --- | --- | --- | --- |
| Credit metric integrity | B: real allocator is downstream citation, naive self/equal rules distort | F1: any numeric score is Goodhart-optimized once it pays | **Convergent on the problem, TENSE on the fix.** Kuhn's witness implies "use downstream-usage signal instead of self-declared." Benkler's witness says the downstream signal *also* gets gamed the moment it pays (F2/F3: citation-as-currency is what coercion and rings exploit). The downstream-citation "fix" is itself a metric, so it inherits Goodhart. **No clean reconciliation: the fix and the warning collide.** |
| Gatekeeper capture | (implicit in B/E: allocator power) | F2: reviewer who evaluates AND benefits = coercion channel, OR=3.5 | Benkler supplies the empirical magnitude; Kuhn lane supplies the structural reason (whoever sets credit holds power). Convergent. |
| Collusion / rings | A: priority disputes; C: simultaneous discovery | F3: citation rings detectable post-hoc only | Convergent: mutual unmerited credit is a recurrent failure; **anti-collusion must precede emission, not follow it forensically.** |
| Invisible / maintenance labor | D: novelty-bias starves replication & maintenance | F4: ~50% OSS work invisible, 50.1% uncompensated | **Strong convergence across two independent corpora** — both name uncredited maintenance/care as a structural gap, not an accident. Highest cross-witness confidence in this tower. |
| Concentration / Matthew | D: credit→resources lock in; E: paradigm lock-in penalizes challengers | F5: coercion targets younger/non-native/small teams | Convergent on direction (concentration), distinct mechanisms (compounding vs targeting asymmetry). Together they argue a fairness witness must test *distribution*, not aggregate rate. |

Net: the two witnesses **agree on the diseases** (gaming, capture, rings, invisible labor, concentration) and **disagree on whether any measured-credit cure is stable** (Kuhn-lane leans "better signal," Benkler-lane leans "any paying signal rots"). That tension is the central finding and is preserved below, not collapsed.

---

## 2. Tower findings (typed, bridged, mapped, tagged, verdicted)

Each finding: **statement · source-kind · named bridge decision · ResonantDAO pressure point · attack-lane tag(s) · subtower-contract verdict.**

### TF-1 — The downstream-credit cure and the Goodhart warning collide (central tension)

- **Statement:** Lane 1 (B) says credit is community-set by downstream citation and self/equal-declared credit distorts; lane 2 (F1) says any numeric score stops measuring contribution the moment it gates reward. An on-chain "downstream usage / who-forks-depends-on-reuses" graph is *itself a payable metric*, so it does not escape Goodhart — it relocates the gaming surface from self-declaration to dependency/fork manufacturing.
- **Source-kind:** local-inference (synthesis of two related-source witnesses; neither source states this conjunction).
- **Bridge decision (UNRESOLVED):** Decide ResonantDAO's credit primitive: self/peer-declared weights (gameable directly) vs. independent downstream-usage graph (gameable via manufactured dependency/forks). Whichever is chosen, name the anti-gaming witness BEFORE the signal can affect `$RCT` or `$RES`. There is no "ungameable downstream signal" to borrow.
- **Pressure point:** ER-R2 ($RCT reputation gaming), ER-R3 ($RES emission), ER-R4 (authority collapse). Harvested control `observed-signal-not-credit`.
- **Lanes:** Lane 2, Lane 3, Lane 1.
- **Verdict:** **borrow-carefully** as a warning pair; **block** any claim that downstream/citation-graph credit is a safe metric.

### TF-2 — Priority-as-settlement manufactures disputes (do not make first-claim the dominant credit event)

- **Statement:** When one property right (priority/being first) carries all reward-affect, disputes become "frequent, harsh, ugly" (Merton). Mapped on-chain, making first-to-submit / first-commit / first-bounty-claim the dominant credit event imports the same dispute structure.
- **Source-kind:** related-source (Merton 1957, fetched) for the academic claim; analogy for the on-chain mapping.
- **Bridge decision (UNRESOLVED):** Does ResonantDAO treat first-attribution as THE settlement rule or as one signal among several? Decide before any bounty queue or first-claim mechanic exists.
- **Pressure point:** ER-R1 (bounty optimization), ER-R4 (authority collapse).
- **Lanes:** Lane 1, Lane 4.
- **Verdict:** **borrow-carefully** (port as a design warning, not a mechanism).

### TF-3 — Simultaneous/independent contribution needs a tie rule defined BEFORE bounties

- **Statement:** Multiple/simultaneous discovery is recurrent (Merton); winner-take-all over a fixed target produces duplicate effort plus ex-post tie disputes. ResonantDAO bounties over fixed targets inherit this unless a tie-window + tie-rule exist a priori.
- **Source-kind:** related-source (Merton) + analogy (on-chain bounty mapping).
- **Bridge decision (UNRESOLVED):** For near-identical independent submissions inside a window — winner-take-all, split, or co-priority? Define the tie-window and rule before any bounty is live.
- **Pressure point:** ER-R1 (bounty optimization). Lane-4 prerequisite.
- **Lanes:** Lane 4, Lane 1.
- **Verdict:** **future-work** (Lane 4 is "attack fourth, only after Lanes 1–3"; this is a named prerequisite for that lane, not a present mechanism).

### TF-4 — Reward concentration starves maintenance/replication unless verification is a first-class paid act (strongest cross-witness)

- **Statement:** Two independent corpora converge: lane 1 (D) — eminent actors get disproportionate credit, early funding compounds (Matthew), novelty-bias starves replication/maintenance; lane 2 (F4) — ~50% of OSS work is invisible and 50.1% uncompensated, with moderation/maintenance least visible. The shared implication: if verification, maintenance, moderation, and care work are not first-class *rewarded acts*, they remain an unpaid externality and concentration compounds.
- **Source-kind:** related-source (Meluso n=142; Matthew-effect literature) — two-witness convergence raises confidence to the highest in this tower, but it remains **related-source / analogy** for the DAO, not primary.
- **Bridge decision (UNRESOLVED):** Is verification/maintenance/care a first-class rewarded contribution in ResonantDAO accounting, or an unpaid externality? AND — does receipt observation actually *capture* invisible care work, or does the receipt boundary (ER-R10) systematically miss it the same way "open" framing masks the OSS gap?
- **Pressure point:** ER-R10 (receipt boundary), ER-R1, ER-R9 (attention capture). Harvested control `credit-record-not-reward`.
- **Lanes:** Lane 3, Lane 2, Lane 5.
- **Verdict:** **promotion-candidate as a RESIDUE/REQUIREMENT** ("maintenance and invisible-care work must be representable and rewardable, or the economy trains extraction") — NOT a promotion of any mechanism. The *requirement* is well-witnessed; the *solution* is open.

### TF-5 — Gatekeepers who both evaluate and benefit create a coercion channel (separate reviewer-credit from reviewed-credit)

- **Statement:** A role that evaluates a contribution AND benefits from the credit metric becomes a coercion channel — empirically, reviewer self-citation requests are approved at OR=3.5 (Barnett, 37k+ reviews); coerced citation runs ~1-in-5 (Wilhite–Fong). ResonantDAO curation/authority roles that can both gate credit and accrue it inherit this.
- **Source-kind:** related-source (Barnett eLife 2025, Wilhite–Fong 2012) — empirical, but in academia, so **analogy** for the DAO mapping.
- **Bridge decision (UNRESOLVED):** Do editors/reviewers map to ResonantDAO authority/curation roles, and if so is reviewer-credit structurally separated from reviewed-credit? Names the `attention-route-not-authority` / `owner-route-authority-only` controls.
- **Pressure point:** ER-R4 (authority collapse), ER-R9 (attention capture), ER-R2.
- **Lanes:** Lane 1, Lane 2.
- **Verdict:** **borrow-carefully** (port the separation requirement; the OR=3.5 magnitude is academic, do not present it as a DAO measurement).

### TF-6 — Collusion/rings must be witnessed BEFORE emission, not detected after

- **Statement:** Mutual unmerited credit (citation rings/cartels) is detectable only post-hoc and statistically (anomaly-detection literature). A reward system that emits on a credit signal and audits collusion afterward pays the ring before catching it.
- **Source-kind:** related-source (PMC10836843 anomaly detection) + local-inference (the "emit-then-detect is too late" framing).
- **Bridge decision (UNRESOLVED):** How do inter-author collusion patterns map to on-chain mutual-endorsement / voting / fork-ring behavior, and can an anti-collusion witness gate emission rather than follow it? Maps to `credit-gaming-failure-fixtures`.
- **Pressure point:** ER-R2 (reputation gaming), ER-R1, ER-R4.
- **Lanes:** Lane 1, Lane 4, Lane 3.
- **Verdict:** **borrow-carefully** as a sequencing requirement (witness-before-emission); **block** any "we can detect rings later" framing.

### TF-7 — Fairness witness must test distribution, not aggregate gaming rate

- **Statement:** Coercion/extraction pressure concentrates on younger, non-native, and small actors (F5); Matthew dynamics compound for the already-eminent (D). An aggregate "gaming rate looks low" metric can hide that harm lands on the weakest tier. A fairness witness must test distributional impact across contributor power tiers.
- **Source-kind:** related-source (RI2/targeting evidence) + analogy (DAO power tiers).
- **Bridge decision (UNRESOLVED):** What are ResonantDAO contributor power tiers, and does the anti-gaming/fairness witness test per-tier distributional impact rather than only aggregate rate?
- **Pressure point:** ER-R9, ER-R2, ER-R8 (Phase-2 fairness). Connects to ER-R5 (randomness legitimacy) if randomized audit is used.
- **Lanes:** Lane 4, Lane 1, Lane 5.
- **Verdict:** **future-work** (fairness-witness design is downstream; recorded as a named requirement on it).

### TF-8 — Novelty-bias and paradigm lock-in penalize boundary-spanning/minority work

- **Statement:** A credit metric that is paradigm-internal (citation mass) penalizes paradigm-challenging work until late (lane 1, E); novelty earns higher citations while replication is discouraged (Romero, snippet-only). A reputation economy keyed to current-consensus reuse can under-reward minority-report and boundary-spanning contributions.
- **Source-kind:** related-source (E) + **open-residue** (Romero is fetch-failed, snippet-only — the replication-discouragement claim is under-sourced in this tower).
- **Bridge decision (UNRESOLVED):** Is there a forward-looking / minority-report reward channel insulated from current reuse-mass, WITHOUT becoming a gameable speculation lottery? (The insulation cure risks re-importing ER-R3 speculation and ER-R5 randomness-legitimacy problems.)
- **Pressure point:** ER-R3 ($RES emission / speculation), ER-R2, ER-R5.
- **Lanes:** Lane 3, Lane 2.
- **Verdict:** **analogy-only** until Romero (or a substitute) is fetched; the cure ("minority-report channel") is itself unbridged and risk-laden.

### TF-9 — Intrinsic motivation is crowded out when contribution is metricized/paid

- **Statement:** Benkler–Nissenbaum (lens anchor): commons-based peer production is mobilized by intrinsic motivation and virtue. Lane 2 (F4) notes intrinsic contributors are crowded out when "open" framing masks uncompensated labor. Attaching pay/score to contribution risks converting intrinsic motivation into extrinsic optimization — the motivational analogue of Goodhart.
- **Source-kind:** related-source (Benkler–Nissenbaum) + operator-reading (crowding-out as a ResonantDAO risk).
- **Bridge decision (UNRESOLVED):** Does ResonantDAO assume contributors are intrinsically motivated commons participants or extrinsically driven earners — and does the reward design protect the former without starving them (the TF-4 invisible-labor problem cuts the other way)? These two requirements (pay maintenance AND don't crowd out intrinsics) are in tension and must be resolved together.
- **Pressure point:** ER-R1 (bounty optimization → "task-harvesting labor market" failure in the three-view frame), ER-R10.
- **Lanes:** Lane 2, Lane 1.
- **Verdict:** **borrow-carefully** (motivational warning; do not overclaim that ResonantDAO contributors are commons-virtue actors — that is an assumption, not evidence).

---

## 3. Subtower-contract roll-up

| Finding | Source-kind | Verdict | Lanes |
| --- | --- | --- | --- |
| TF-1 credit-cure vs Goodhart collision | local-inference | borrow-carefully / block-the-safe-claim | 2,3,1 |
| TF-2 priority-as-settlement disputes | related-source/analogy | borrow-carefully | 1,4 |
| TF-3 simultaneous-contribution tie rule | related-source/analogy | future-work | 4,1 |
| TF-4 maintenance/invisible labor (2-witness) | related-source | promotion-candidate (as requirement, not mechanism) | 3,2,5 |
| TF-5 gatekeeper evaluate+benefit capture | related-source/analogy | borrow-carefully | 1,2 |
| TF-6 rings witnessed-before-emission | related-source/local-inference | borrow-carefully / block-detect-later | 1,4,3 |
| TF-7 fairness = distribution not aggregate | related-source/analogy | future-work | 4,1,5 |
| TF-8 novelty-bias / minority-report channel | related-source/open-residue | analogy-only | 3,2 |
| TF-9 intrinsic-motivation crowd-out | related-source/operator-reading | borrow-carefully | 2,1 |

No mechanism is promoted. The single "promotion-candidate" (TF-4) is a **requirement/residue**, not a mechanism, and even that should route through `authority/promotion-policy.md`, not this draft.

---

## 4. Corpus gaps recorded as residue (RES-SoS-*)

| ID | Gap | Effect on findings | Owner |
| --- | --- | --- | --- |
| RES-SoS-1 | Romero *Novelty vs Replicability* (2017) fetch-failed, snippet-only | TF-8 under-sourced; replication-discouragement claim is open-residue not related-source | science-of-science subtower |
| RES-SoS-2 | Wilhite & Fong (2012) primary paywalled; only secondary "1-in-5" figure available | TF-5/TF-6 magnitude is second-hand | subtower |
| RES-SoS-3 | RI2 official (Springer) reduced to arXiv preprint; partial | TF-7 targeting-asymmetry evidence partial | subtower |
| RES-SoS-4 | Merton *Matthew Effect* (1968) abstract-only; *Priority and Privilege* (2020) preprint | TF-4 Matthew direction held on partial primary text | subtower |
| RES-SoS-5 | No source links academic credit gaming to *on-chain* mechanics — every bridge in §2 is unwitnessed inside ResonantDAO | Entire tower is analogy/related until a DAO-side witness exists; this is the dominant residue | main tower / authority route |
| RES-SoS-6 | Over-quota & uncollected: Bruton (reproducibility reward structure), arXiv 2501.17456 novelty-measurement review, COPE manipulation, Elsevier 69k peer-review study, ACM 3476060 crowd-work invisible labor | Depth-1 bound left likely-relevant primaries uncollected | subtower (future dispatch) |

RES-SoS-5 is the keystone residue. **Collapse-test:** if a ResonantDAO-internal observation (an actual receipt/credit/fork graph) ever shows these academic failure modes do NOT reproduce on-chain, every §2 finding drops to analogy-only with zero borrow weight. Until such an observation exists, none of these is more than a warning.

---

## 5. Closure-gate status update (proposed, not authoritative)

| Gate | Prior | Proposed after this draft |
| --- | --- | --- |
| Source set bounded | pending | pass (depth-1, ≤6/sub-lane, residue logged) |
| Academic analogy boundary explicit | pass | pass (reinforced: analogy-by-default in §0) |
| Credit distortion map | pending | **partial** (TF-1..TF-9 map distortions; TF-8 under-sourced) |
| Relevance to ResonantOS economy | pending | **partial** (every finding mapped to ER-R pressure points, but RES-SoS-5 keeps relevance unwitnessed) |

Gate changes are proposals for the gate owner; this synthesizer is a lens, not authority.
