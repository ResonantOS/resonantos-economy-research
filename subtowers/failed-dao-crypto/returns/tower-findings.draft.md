# failed-dao-crypto — Tower Findings (DRAFT)

Status: draft · Promotion scope: local-research-only · Claim ≤ proof.
Synthesizer lens: "Beer, Stafford" (viable-system / variety-attenuation reading). A lens, not authority.
Inputs: `returns/research.md` — 3 isolated sub-lanes (Taleb tail-risk, Ostrom institutional, Bowles incentive-gaming), each run blind to its siblings and treated here as an **independent witness**.

This document reconciles three witnesses. It does **not** promote definitions, token policy, governance weights, or implementation. Where witnesses disagree, the disagreement is the finding.

---

## 0. Witness-Reconciliation Summary (read first)

The three witnesses were dispatched against the same whitepaper but from non-overlapping failure literatures. The interesting result is **not** their shared list of crypto failures — it is the single load-bearing claim they each independently touch and then **pull in opposite directions**:

> **The contested keystone: "$RCT non-transferability is a structural mitigation against capital-driven governance capture."**
> Collapse-test (bound to this headline): the claim's contribution drops to zero if a single actor can manufacture governance-relevant $RCT at per-identity cost below the value of the influence gained — i.e. if $RCT is *non-transferable but cheaply farmable per identity*. If that one fact holds, non-transferability buys nothing it claims to buy.

- **Taleb (W1)** *credits* non-transferability: governance keyed to a non-transferable, non-flash-loanable token removes the Beanstalk-class single-block capital takeover (W1-F5). Witness posture: structural mitigation **present**.
- **Bowles (W3)** *attacks the same claim*: non-transferable ≠ non-farmable. $RCT is farmable per identity, and identities are cheap (sybil clusters, 1-master-500-slave, mutual-validation rings) (W3-F5, W3-F3). Witness posture: the mitigation is **relocated, not removed** — the attack surface moves from capital to identity manufacture.
- **Ostrom (W2)** *constrains the same claim from a third side*: even granting non-transferability and honest identities, open-market/coordinated accumulation under low turnout lets one of the six sectors amass dominant $RCT (sector monopoly), and the custodian-bootstrap/transition is unspecified (W2-F2, W2-F5). Witness posture: the mitigation **does not cover** social/temporal accumulation or the bootstrap authority.

**Reconciled tower reading:** the three witnesses **converge** that capital-flash-takeover is plausibly attenuated by non-transferability, and **converge** that this is *not* a closure — it displaces the capture vector onto (a) identity manufacture [Bowles] and (b) slow social/sector accumulation + bootstrap authority [Ostrom]. No witness produces a transferable-capital exploit against $RCT governance; all three produce a non-capital one. That convergence-on-displacement is this tower's primary finding (T1 below), and it is **local-inference**, not proof.

**Variety note (Beer lens, operator-reading only):** the whitepaper attenuates *one* channel of capture variety (transferable capital) but the three failure literatures supply *more* capture variety than that one channel absorbs (identity, accumulation, bootstrap, reflexivity). By Ashby's reading the residual variety must go somewhere; the witnesses say it goes to Lanes 1/2 (identity + accumulation) and Lane 5 (reflexivity). This is an analogy, not a controller claim.

---

## 1. Tower Findings (typed)

Each finding: statement · source-kind · mapped ResonantDAO pressure point · attack-lane tag(s) · subtower-contract decision. Witness provenance noted as W1=Taleb, W2=Ostrom, W3=Bowles. A finding marked **CONVERGENT** is independently reached by ≥2 blind witnesses; **CONTESTED** means witnesses tension.

### T1 — Non-transferability displaces capture rather than closing it (CONTESTED → reconciled)
- **Statement:** Keying governance to non-transferable $RCT plausibly attenuates *capital-flash* takeover (W1), but the capture vector is relocated to identity-manufacture (W3) and slow sector/social accumulation plus undefined custodian-bootstrap authority (W2). The three witnesses do not agree this is a mitigation; they agree it is a *displacement*.
- **Source-kind:** local-inference (reconciliation of three related-source witnesses against a single primary anchor; no Resonant-specific exploit demonstrated).
- **Pressure point:** $RCT, member levels, contextual governance influence, custodian bootstrap.
- **Lanes:** Lane2 $RCT-capture (primary); Lane1 auth-credit; Lane5 Phase2-financial (bootstrap/transition).
- **Decision:** **borrow-carefully** — borrow non-transferability as a *partial* attenuator only, never as a capture solution. Its claim of safety is the thing most likely to be over-read.

### T2 — Reflexive native-token treasury / yield mask (CONVERGENT W1; supported)
- **Statement:** Native-token-concentrated treasury with no stable buffer reflexively depletes in a drawdown (sell-native-to-fund-ops → price down → treasury down), and unsustainable yield (Anchor 20% APY, new capital funds withdrawals) masks fragility until a run. The whitepaper's full-1B-$RES treasury + buyback-burn (forced-buy mirror) and $R10/$R12/$R15 yield targets sit on this exact structure.
- **Source-kind:** primary-source for the precedents (Terra/UST on-chain reconstruction arXiv 2207.13914; Harvard Law run analysis); local-inference for the Resonant mapping.
- **Pressure point:** treasury policy, $RES emission/liquidity, buyback/burn, UCI, Phase 2 $R10/$R12/$R15.
- **Lanes:** Lane5 Phase2-financial; Lane3 $RES-emission; Lane1 (treasury concentration).
- **Decision:** **block** as designable mechanism / **future-work** as stress-test category. No Phase 2 financial mechanism moves while Phase 2 gates are open (AGENTS.md non-negotiable). Hold as a launch-blocker stress category, not a design.

### T3 — One-way exit jam / thin-pool blow-up (CONVERGENT W1; supported)
- **Statement:** "Accept illiquidity for yield" lockups plus a thin external $RES pool against ~1B treasury supply reproduce the AMM-drain / one-way-slippage failure (Curve 3pool, UST >80% of pool, par redemption impossible). First-day external-liquidity provisioning is a blow-up vector.
- **Source-kind:** primary-source (Terra/Curve postmortems); local-inference for mapping; the "DAO Treasury in a Bear Market" practitioner item is **related-source / practitioner**, not peer-reviewed.
- **Pressure point:** $RES later-external-liquidity, Phase 2 lockup yields, liquidity management.
- **Lanes:** Lane3 $RES-emission; Lane5 Phase2-financial.
- **Decision:** **future-work** (stress-test: liquidity-depth vs supply ratio; exit-jam scenarios) / **block** as implementation.

### T4 — Identity-manufacture defeats per-identity scoring (CONVERGENT W3, touches W2)
- **Statement:** Any reward or score counted per-identity (participation rewards, $RES emission, $RCT, member levels, reputation) is shardable across cheap manufactured identities: sybil airdrop farming (1 actor / 1,000+ wallets / ~$531k), 30,000-phone bot farms, 1-master-500-slave AI-agent clusters, reciprocal mutual-validation rings. "Non-transferable" does not imply "non-farmable."
- **Source-kind:** related-source (DL News, Cointelegraph, Blockzeit reporting — journalistic, not academic); the AI-agent-sponsor mapping is **operator-reading** of the whitepaper.
- **Pressure point:** $RCT, member levels, contribution validation, Academy/marketplace quests, AI-agent sponsor rule, $RES emission.
- **Lanes:** Lane2 $RCT-capture; Lane1 auth-credit; Lane3 $RES-emission.
- **Decision:** **borrow-carefully** (borrow as a required *anti-sybil obligation* on every per-identity reward) — this is the witness that directly contests T1.

### T5 — The anti-sybil defense itself is gamed or over-corrects (CONVERGENT W3)
- **Statement:** Two opposite failure modes of the *defense*: (a) a report-a-sybil bounty creates a bribery market (Hop — farmer pays hunter not to report), and (b) over-correction excludes honest contributors (ParaSwap excluded 98.5%, caught legit users — Bowles "crowding-out"/distortion). The cure becomes a second attack surface in both directions.
- **Source-kind:** related-source (DL News reporting); analogy for the Bowles crowding mechanism (behavioral-economics import, not Resonant-tested).
- **Pressure point:** bounty/prize design, custodian/AI review, simple participation rewards, contribution validation.
- **Lanes:** Lane4 bounty-prize; Lane1 auth-credit; Lane3 $RES-emission.
- **Decision:** **borrow-carefully** as a *bounty-optimization failure analysis input* — AGENTS.md forbids accepting any bounty design without exactly this analysis. Anti-sybil bounty specifically: **block** until its own gaming witness exists.

### T6 — Low-turnout minority rule + accumulation (CONVERGENT W2)
- **Statement:** Token-weighted voting with no holding period and current-balance counting yields instant majority (Beanstalk $182M, GreenField $31M); open-market accumulation under <2% turnout seizes a DAO with no exploit (Build Finance; Compound "GoldenBoyz" 5 wallets; ApeCoin single 4% wallet vetoes a $1M grant). Six-sector $RCT with no cross-sector check permits sector monopoly.
- **Source-kind:** related-source (Shutter turnout data, practitioner taxonomies, Gerard/Immunefi reporting); the sector-monopoly mapping is **local-inference**.
- **Pressure point:** quorum/thresholds (undefined), member levels, recent-activity weighting, cross-sector $RCT concentration, tenure-without-contribution.
- **Lanes:** Lane1 auth-credit; Lane2 $RCT-capture; Lane3 $RES-emission.
- **Decision:** **future-work** — the Resonant-specific holes (quorum floors, proposal thresholds, cross-sector checks, tenure-decay) are *gaps*, not findings; recorded as residue (§3), not as borrowed mechanisms.

### T7 — Custodian / bootstrap multisig as unchecked authority (CONVERGENT W2, single-witness severity)
- **Statement:** Bootstrap/emergency multisig or custodian becomes unchecked authority when transition rules are undefined → entrenchment. The whitepaper explicitly names a custodian bootstrap phase but leaves the custodian→distributed transition unspecified. W2 flags this as the **highest-priority Resonant-specific surface**; W1 and W3 do not cover it (single-witness).
- **Source-kind:** related-source (DAO multisig-capture taxonomy) + **operator-reading** of the whitepaper's named-but-unspecified bootstrap.
- **Pressure point:** custodian bootstrap, governance transition, emergency multisig.
- **Lanes:** Lane1 auth-credit; Lane5 Phase2-financial (transition timing).
- **Decision:** **future-work / open-residue** — flagged highest-priority by one witness; promote nothing, record as the top governance residue. Single-witness severity is held *as* uncertainty, not amplified into proven priority.

### T8 — Proposal spam / contract-morphing (what-you-vote ≠ what-executes) (single-witness W2)
- **Statement:** Proposal spam exhausts monitoring; executed payload differs from reviewed payload (Tornado CREATE2+selfdestruct, Beanstalk BIP-18, Audius re-init dropping quorum to 1%). Resonant proposal-right thresholds are open.
- **Source-kind:** related-source (incident reporting); operator-reading for Resonant mapping.
- **Pressure point:** proposal-right thresholds, $RCT-gated proposal cost, payload immutability.
- **Lanes:** Lane1 auth-credit; Lane4 bounty-prize; Lane2 $RCT-capture.
- **Decision:** **future-work** — record as residue requiring $RCT-gated proposal cost + immutable payloads as *questions*, not designs.

### T9 — Governance-capture → treasury-drain precedent is UNVERIFIED (provenance flag)
- **Statement:** The flash-loan single-block voting-capture-drains-treasury class (Beanstalk ~$182M) is cited by W1 (F5) and W2 (F1), but W1's primary academic source for the taxonomy (*SoK: Attacks on DAOs*, arXiv 2406.15071) **failed PDF extraction (title-only, UNVERIFIED)**, and the Beanstalk postmortem is **cited-not-fetched**.
- **Source-kind:** open-residue (the *mechanism* is corroborated by W2's independent reporting witnesses, but the academic taxonomy backing is unverified).
- **Pressure point:** $RCT governance, treasury.
- **Lanes:** Lane2 $RCT-capture.
- **Decision:** **open-residue** — re-fetch SoK 2406.15071 and Beanstalk postmortem before any finding *leans on the academic taxonomy*. The non-transferability mitigation (T1) must not be credited on the strength of an unverified attack it claims to block; T1 currently rests on the displacement argument, not on the unverified primary.

---

## 2. Convergence / Tension Map

| Pressure point | W1 Taleb | W2 Ostrom | W3 Bowles | Tower reading |
| --- | --- | --- | --- | --- |
| $RCT non-transferability as capture defense | credits (mitigation) | constrains (sector/bootstrap accumulation) | attacks (farmable per identity) | **CONTESTED → displacement, not closure (T1)** |
| Native-token treasury / yield reflexivity | primary witness | — | — | single-witness, strong precedent (T2/T3) |
| Per-identity scoring | (governance angle) | accumulation angle | primary witness | CONVERGENT — identity is the soft underbelly (T4) |
| Anti-sybil defense fragility | — | — | primary witness | single-witness, bidirectional failure (T5) |
| Low turnout / accumulation | (flash-loan angle) | primary witness | (sybil reputation angle) | CONVERGENT (T6) |
| Custodian/bootstrap authority | — | primary witness (top priority) | — | single-witness severity — held as residue (T7) |

**Where they genuinely tension (not just differ in coverage):** only T1. Everywhere else the witnesses are complementary (different failure literatures, non-overlapping precedents) rather than contradictory. The honest tower statement is therefore: *the witnesses agree on the failure catalog and disagree only on whether non-transferability is a defense or a redirection — and the reconciliation favors redirection.*

---

## 3. Residue (corpus gaps — NOT coverage)

Recorded per AGENTS.md "open questions stay visible." None of these are claimed as researched.

**Provenance gaps (re-fetch before leaning on):**
- `SoK: Attacks on DAOs` arXiv 2406.15071 — PDF extract failed, title-only, UNVERIFIED (blocks T9-grade reliance).
- Beanstalk postmortem — cited-not-fetched (corroborated indirectly by W2 reporting; not primary-verified here).
- W1 residue: Anchor docs, LFG reserve disclosures, Curve 3pool data, Celsius/3AC postmortems, Chainalysis 85%-single-asset study.
- W3 residue: LayerZero×Nansen disqualification, ZKsync 7-criteria anti-sybil framework, Optimism 0xJohn proposal, CapitalGrug $10M+ claims.

**Resonant-specific design holes (W2 — gaps, never mechanisms):** quorum/participation floors; proposal-right thresholds; delegation framework (whitepaper describes none); custodian→distributed transition rules; cross-sector $RCT concentration checks; tenure-decay for inactive members.

**Source-kind caveats carried forward:**
- Several W3 sources are journalistic (DL News, Cointelegraph, Blockzeit) → related-source, not academic.
- "DAO Treasury Management in a Bear Market" (W1) is practitioner/Coinmonks → related-source.
- All Resonant-side mappings are local-inference or operator-reading of a single primary anchor (the whitepaper). No mapping is a validated Resonant exploit.

**Single-witness severity carried as uncertainty:** T7 (custodian) is flagged top-priority by one witness only; T5 and T8 are single-witness. They are not down-weighted for being single-witness, but their severity is not promoted beyond one witness's reading.

---

## 4. Decisions Roll-up (subtower contract)

| Finding | Decision | Reason |
| --- | --- | --- |
| T1 non-transferability displacement | borrow-carefully | partial attenuator only; most over-readable claim |
| T2 reflexive treasury/yield | block (design) / future-work (stress) | Phase 2 gates open |
| T3 exit-jam / thin pool | future-work / block | liquidity-depth stress category |
| T4 identity-manufacture | borrow-carefully | mandatory anti-sybil obligation on per-identity reward |
| T5 defense gamed / over-corrects | borrow-carefully / block (sybil-bounty) | bounty-optimization analysis required |
| T6 low-turnout accumulation | future-work | Resonant holes are residue not mechanisms |
| T7 custodian/bootstrap | future-work / open-residue | single-witness top-priority surface |
| T8 proposal-morphing | future-work | thresholds + immutable payloads as questions |
| T9 capture→drain provenance | open-residue | re-fetch SoK + Beanstalk before leaning |

**No promotion.** Nothing here becomes a definition, token policy, governance weight, bounty policy, or implementation. Claim ≤ proof. Lens, not authority.
