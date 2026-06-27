# failed-dao-crypto — Tower Skeptic Attack

Status: skeptic pass over `returns/tower-findings.draft.md` · Promotion scope: local-research-only.
Skeptic lens: "Myerson, Roger" — vector NON-VACUITY / INCENTIVE-FEASIBILITY. A lens, not authority.
Target: `subtowers/failed-dao-crypto/returns/tower-findings.draft.md` (synthesizer lens "Beer, Stafford").
Grounding for verdicts: `claims/SOURCE-CLAIM-LEDGER.md` (C1–C6), `glossary/GLOSSARY.md`, `sources/source-records.md`, `lanes/ATTACK-LANES.md`, `AGENTS.md` non-negotiables.

## Standard of attack

A finding survives only if it has (a) a concrete failure **mechanism**, (b) a **cited witness** of a kind matching its claimed source-kind, and (c) it is **incentive-feasible** against a ResonantDAO surface that is *locally verified to exist* — not merely asserted by an explorer reading a non-snapshotted primary. Where (c) fails on the surface (the named whitepaper feature is not in the claim ledger or glossary), the precedent itself may still be real; what dies is the *Resonant mapping*, which then becomes analogy, not a tower finding.

## Cross-cutting defect found (the one the synthesizer missed)

**The primary anchor is not snapshotted, and the draft asserts whitepaper specifics that the local claim ledger does not carry.**

`claims/SOURCE-CLAIM-LEDGER.md` verifies only: $RCT non-transferable (C4), $RES transferable/treasury-owned-at-launch (C5), Phase 2 financial mechanisms gated incl. buyback/burn/UCI/reserve as *future* (C6, glossary L54), governance not one-token-one-vote (C3), explicit anti-capital posture (C2). It does **not** verify the following, each of which the draft states as load-bearing whitepaper fact:

- "full-1B $RES treasury" / "~1B treasury supply" (T2, T3) — no supply figure in ledger or glossary.
- "buyback-burn (forced-buy mirror)" as a *present* design (T2) — glossary L54 records buyback/burn as a Phase-2 *future* mechanism, not a live treasury policy.
- "$R10/$R12/$R15 yield targets" as named instruments (T2, T3) — not in ledger/glossary.
- "six-sector $RCT" / "sector monopoly" (T1, T6) — no six-sector structure in ledger/glossary.
- "custodian bootstrap phase explicitly named" (T1, T7) — not in ledger/glossary.
- "AI-agent sponsor rule" as "exact 1-master-many-slave shape" (T4) — not in ledger/glossary.

These may all be true in WP v0.5; the point is the tower cannot *promote* a finding whose collapse-test rides on a surface feature the corpus has not recorded. Every such mapping is **operator-reading of an un-snapshotted primary**, and the draft repeatedly upgrades it to "local-inference against the named surface." That is the single systemic over-read. It does not kill the precedents; it caps the Resonant-side claim at analogy until those features land in the claim ledger.

---

## Verdict list

### T1 — Non-transferability displaces capture rather than closing it — **SURVIVES (REVISE)**
- Reason: This is the only genuinely *tensioned* finding (W1 credits, W3 attacks, W2 constrains), it is correctly typed **local-inference**, and it carries its collapse-test inline (cheap per-identity farming nullifies it). Incentive-feasible: an attacker who can mint governance-relevant $RCT per-identity below influence-value defeats the only claimed defense — a real, non-vacuous mechanism. Verdict survives.
- Required revision: the conclusion "displacement, not closure" leans on the *six-sector / sector-monopoly* (W2) and *custodian-bootstrap* (W2) legs, neither of which is locally verified. Strip those from T1's core and let T1 rest **only** on the W1-credit vs W3-identity-farming axis, which is locally grounded (C4 + journalistic sybil witnesses). The sector/bootstrap material moves to analogy (see T6, T7).
- Lane tag: Lane2 primary, Lane1, Lane5 — correct, but drop Lane5 from T1 once the bootstrap leg is removed; bootstrap belongs to T7.

### T2 — Reflexive native-token treasury / yield mask — **DEMOTE-TO-ANALOGY**
- Reason: The *precedent* (Terra/UST reflexive depletion, Anchor 20% APY demand-mask) is primary-sourced and real. But the Resonant mapping is built on three unverified surface assertions — "full-1B $RES treasury," "buyback-burn as forced-buy mirror," "$R10/$R12/$R15 yield targets." The claim ledger carries none of these; glossary L54 explicitly marks buyback/burn/UCI as *Phase-2 future*, i.e. **not a live structure to reflexively deplete today**. A reflexivity finding against a mechanism that does not yet exist is incentive-vacuous: there is no actor, no live treasury policy, nothing to run the sell-native-to-fund-ops loop against. Demote the Resonant mapping to analogy; keep the precedent as a Phase-2 stress-test *category* (which is what the "block design / future-work stress" decision already implies). The draft's own decision is right; its **source-kind label ("local-inference for the Resonant mapping") is too strong** — it is operator-reading of an un-snapshotted, explicitly-future mechanism.

### T3 — One-way exit jam / thin-pool blow-up — **DEMOTE-TO-ANALOGY**
- Reason: Same defect as T2, plus the draft already concedes the keystone witness ("DAO Treasury in a Bear Market") is practitioner/related-source, not peer-reviewed. The Curve/UST AMM-drain precedent is primary and survives *as precedent*. But "thin $RES pool against ~1B treasury supply, first-day external-liquidity blow-up" maps to (i) the unverified 1B figure and (ii) $RES external liquidity that C5 says is "considered later" — i.e. not a Phase-1 surface. No live mechanism, no live actor, not incentive-feasible *now*. Demote Resonant mapping to analogy; retain as Phase-2 liquidity-depth stress category. Decision (future-work/block) is fine; the **finding-grade claim is not**.

### T4 — Identity-manufacture defeats per-identity scoring — **SURVIVES (REVISE)**
- Reason: This is the strongest survivor and the one that actually contests T1. Mechanism is concrete (shard reward across cheap identities), witnesses are cited (Arbitrum 1,000+-wallet sybil, ZKsync 30k-phone farm, 1-master-500-slave clusters), and it is incentive-feasible against a *locally verified* surface: C4 confirms $RCT is non-transferable, and "non-transferable ≠ non-farmable per identity" is exactly the gap. Source-kind is honestly labeled related-source/journalistic. Survives.
- Required revision (this is the synthesizer's flagged weak point — adjudicated): the **"AI-agent sponsor rule = exact 1-master-500-slave shape"** leg is operator-reading of an un-verified surface feature. The shardability claim does **not** need it: per-identity reward + cheap identities is sufficient and locally grounded. Cut the AI-agent-sponsor specificity to a parenthetical "if such a rule exists, it instantiates this shape" — do not let T4's force depend on it. With that trim, T4 survives at full strength.
- Lane tag: Lane2 primary, Lane1, Lane3 — correct.

### T5 — The anti-sybil defense itself is gamed or over-corrects — **SURVIVES (REVISE)**
- Reason: Bidirectional mechanism is concrete and incentive-feasible in the abstract: (a) Hop report-a-sybil bounty → bribery market (farmer pays hunter), (b) ParaSwap 98.5%-exclusion over-correction. Leg (a) is a cited related-source incident and is exactly the kind of bounty-gaming AGENTS.md mandates analysis of — survives, and the "block sybil-bounty until its own gaming witness exists" decision is correctly conservative. Survives.
- Required revision: leg (b) is explicitly imported as Bowles "crowding-out" — the draft itself labels it **analogy** (behavioral-economics import, not Resonant-tested). Good. But ParaSwap's 98.5% exclusion is a *false-positive-rate* failure, not a motivation-crowding failure; the draft fuses an empirical sybil-defense incident with a behavioral-economics construct. Split them: ParaSwap = related-source (defense false-positive), crowding-out = analogy. Do not let the analogy borrow the incident's evidential weight.
- Lane tag: Lane4 primary, Lane1, Lane3 — correct.

### T6 — Low-turnout minority rule + accumulation — **REVISE (precedent survives; sector-monopoly leg DEMOTE-TO-ANALOGY)**
- Reason: The accumulation/low-turnout precedents (Build Finance bought under low turnout with no exploit, Compound GoldenBoyz 5 wallets, ApeCoin 4%-wallet veto, Shutter <2% turnout) are real, cited, and the mechanism is concrete. They survive as a **gap-class**, which is exactly how the draft already files them ("Resonant holes are residue not mechanisms" → future-work). That decision is correct and I do not weaken it.
- Required revision: the **"six-sector $RCT → sector monopoly"** mapping rides on an unverified surface feature (no six-sector structure in the claim ledger). Demote that specific leg to analogy. The generic claim — "token-weighted accumulation under low turnout captures governance, and ResonantDAO has no documented quorum/threshold" — survives because C3 ("not one-token-one-vote") plus the *absence* of a quorum in the corpus is a real, locally-grounded gap. Keep the gap; demote the sector-count specificity.
- Lane tag: Lane1, Lane2, Lane3 — correct.

### T7 — Custodian / bootstrap multisig as unchecked authority — **REVISE (DEMOTE Resonant-specificity to analogy; keep as open-residue)**
- Reason (synthesizer flag: "custodian priority" — adjudicated): The multisig-capture *precedent* is real and the mechanism (undefined transition → entrenchment) is concrete. But two defects compound: (1) it is **single-witness** (W2 only) and the draft already, correctly, refuses to amplify single-witness severity into proven priority; (2) the Resonant-specific hook — "whitepaper explicitly names a custodian bootstrap phase" — is **not in the claim ledger or glossary**, so the "highest-priority Resonant-specific surface" ranking rests on operator-reading of an un-snapshotted primary. You cannot call a surface the top priority when the corpus has not verified the surface exists. Demote the "highest-priority Resonant-specific" framing to analogy/open-residue; keep the *question* ("if a custodian bootstrap exists, its transition rules are undefined") as residue. The draft's decision (future-work / open-residue, "promote nothing") is already correct — the **severity ranking language is the over-read to cut.**
- Lane tag: Lane1, Lane5 — correct for residue.

### T8 — Proposal spam / contract-morphing — **SURVIVES (as residue)**
- Reason: Single-witness (W2) but the mechanism is concrete and the witnesses are real, cited incidents (Tornado CREATE2+selfdestruct, Beanstalk BIP-18, Audius re-init quorum→1%) — these are well-documented, not anecdote. Incentive-feasibility against Resonant is honestly hedged: "proposal-right thresholds are open" is a *gap*, filed as future-work/residue, not promoted. That is the correct, non-vacuous posture. Survives at residue grade. No over-read.
- Lane tag: Lane1, Lane4, Lane2 — correct.

### T9 — Governance-capture → treasury-drain precedent is UNVERIFIED — **SURVIVES (this is the model finding)**
- Reason (synthesizer flag: "unverified-source coupling" — adjudicated): T9 is the draft's strongest epistemic move and should be the template. It correctly (1) flags that the academic taxonomy backing (SoK 2406.15071) failed extraction and Beanstalk is cited-not-fetched, (2) types the finding open-residue, and (3) explicitly **firewalls T1 from leaning on the unverified attack** ("non-transferability must not be credited on the strength of an unverified attack it claims to block"). That firewall is exactly right and is what keeps T1 honest. Survives unchanged.
- One sharpening: T9 should also be cited *by T2/T3* as the reason their primary postmortems (Terra arXiv 2207.13914) are the verified backbone while the *practitioner* treasury/yield sources are not — making explicit that T2/T3's demotion is partly a T9-class provenance problem.

---

## Adjudication of the synthesizer's five flagged weak claims

| Flag | Synthesizer concern | Skeptic verdict |
| --- | --- | --- |
| T1 displacement-not-closure | over-readable | SURVIVES, but strip unverified sector/bootstrap legs; rest on W1-vs-W3 axis only |
| T4 cheap-identity shardability | AI-agent-sponsor mapping is operator-reading | SURVIVES; cut AI-sponsor specificity to a conditional — claim does not need it |
| T7 custodian priority | single-witness severity | DEMOTE the "highest-priority Resonant-specific" ranking to analogy/residue; surface unverified |
| T2/T3 Terra→treasury mapping | local-inference may be too strong | DEMOTE-TO-ANALOGY: maps to un-snapshotted + explicitly-future mechanisms; no live actor |
| T9 unverified-source coupling | provenance | SURVIVES as the model; T9's firewall on T1 is the correct discipline |

## Defects the synthesizer missed

1. **Un-snapshotted primary, asserted specifics** (cross-cutting, above): 1B supply, buyback-burn-as-live, $R10/$R12/$R15, six sectors, custodian phase, AI-sponsor rule — none in the claim ledger. The draft labels their mappings "local-inference"; they are operator-reading. This is the systemic over-read and it touches T1, T2, T3, T4, T6, T7.
2. **T2/T3 attack a Phase-2 mechanism that does not exist yet** (glossary L54: buyback/burn/UCI are *future*). Reflexivity needs a live loop and a live actor; against a not-yet-built mechanism the finding is incentive-vacuous *as a finding* (it is fine as a stress-test category, which is the decision already taken — so the fix is downgrading the source-kind, not the decision).
3. **T5 fuses an empirical incident (ParaSwap false-positives) with a behavioral construct (crowding-out)**; they have different source-kinds and must not share evidential weight.

## Net

No KILLs (every finding has a real, cited precedent; nothing is pure anecdote or forced-famous-failure). The damage is concentrated in **source-kind inflation**: real precedents mapped onto un-verified or not-yet-existing Resonant surfaces and then typed as "local-inference against the named surface." Survivors: T1, T4, T5, T8, T9. Demote-to-analogy (Resonant mapping only, precedent retained): T2, T3, plus the sector-monopoly leg of T6 and the priority-ranking of T7. All attack-lane tags are correct except: drop Lane5 from T1 once its bootstrap leg moves to T7.
