# failed-dao-crypto — Tower Findings

Status: final (post-skeptic) · Promotion scope: local-research-only · Claim ≤ proof.
Synthesizer lens: "Beer, Stafford" (viable-system / variety-attenuation reading). A lens, not authority.
Skeptic pass: "Myerson, Roger" (non-vacuity / incentive-feasibility) — verdicts applied; see `returns/tower-skeptic.md` and §5.
Inputs: `returns/research.md` — 3 isolated sub-lanes (W1 Taleb tail-risk, W2 Ostrom institutional, W3 Bowles incentive-gaming), each run blind to its siblings and treated as an **independent witness**.

This document reconciles three witnesses and then applies one skeptic revision (zig-zag loop_cap 1). It does **not** promote definitions, token policy, governance weights, or implementation.

---

## 0. The snapshot constraint (governs every finding below)

The primary anchor — the ResonantDAO whitepaper — is **not snapshotted in this corpus**. `claims/SOURCE-CLAIM-LEDGER.md` verifies only:

- **C1** Phase 1 is a contribution economy before financial-token launch.
- **C2** explicit anti-capital-control posture.
- **C3** governance is contextual, **not** one-token-one-vote.
- **C4** `$RCT` is **non-transferable** (necessary, not sufficient; does not prove non-gameability).
- **C5** `$RES` is transferable, treasury-owned at launch, internal first, external liquidity **considered later**.
- **C6** Phase 2 financial mechanisms (incl. buyback/burn/UCI/reserve) are **gated / future**.

The ledger does **NOT** carry, and therefore this tower may **not** treat as locally verified: a 1B `$RES` supply figure, buyback-burn as a *live present* policy, named `$R10/$R12/$R15` instruments, a six-sector `$RCT` structure, a named custodian-bootstrap phase, or an AI-agent-sponsor rule. Each of those is **operator-reading of an un-snapshotted primary**. Any finding whose collapse-test rides on one of them is capped at **analogy** and **gated behind that feature landing in the claim ledger** — the *precedent* stays real; the *Resonant mapping* drops to analogy. This is the single systemic correction the skeptic pass imposed, and it cascades through T1, T2, T3, T4, T6, T7.

---

## 1. Witness-Reconciliation Summary (read first)

The three witnesses were dispatched against the same whitepaper from non-overlapping failure literatures. The load-bearing result is the one claim they each independently touch and then pull apart:

> **Contested keystone: "$RCT non-transferability is a structural mitigation against capital-driven governance capture."**
> Collapse-test (bound, locally grounded on C4): the claim's contribution drops to zero if a single actor can manufacture governance-relevant $RCT at per-identity cost below the value of the influence gained — i.e. if $RCT is *non-transferable (C4-verified) but cheaply farmable per identity*. If that one fact holds, non-transferability buys nothing it claims to buy.

- **W1 Taleb** *credits* non-transferability: governance keyed to a non-transferable, non-flash-loanable token removes the Beanstalk-class single-block capital takeover. Posture: structural mitigation **present**.
- **W3 Bowles** *attacks the same claim on locally grounded terms*: non-transferable (C4) ≠ non-farmable; $RCT is farmable per identity and identities are cheap (sybil clusters, bot farms, mutual-validation rings). Posture: mitigation **relocated** — capture moves from capital to identity manufacture.
- **W2 Ostrom** *constrains from a third side, but on un-ledgered terms*: open-market/coordinated accumulation under low turnout, and an unspecified bootstrap authority. These legs touch surface features (six sectors, custodian phase) the corpus has **not** verified, so they are held as **analogy**, not as part of the keystone's core.

**Reconciled tower reading (revised):** the keystone now rests **only** on the W1-credit-vs-W3-identity-farming axis, both locally grounded (C4 + journalistic sybil witnesses). On that axis the witnesses converge that capital-flash takeover is plausibly attenuated by non-transferability and that this is **not a closure — it displaces capture onto identity-manufacture**. The W2 sector-accumulation and bootstrap legs are *consistent with* displacement but are demoted to analogy (T6, T7) because their Resonant surfaces are un-ledgered. That convergence-on-displacement, restricted to the grounded axis, is this tower's primary finding (T1). It is **local-inference**, not proof.

**Variety note (Beer lens, operator-reading only):** non-transferability attenuates *one* capture channel (transferable capital); the failure literatures supply more capture variety than that one channel absorbs. By Ashby's reading the residual must go somewhere; on the grounded axis it demonstrably goes to identity-manufacture (Lane2/Lane1). This is analogy, not a controller claim.

---

## 2. Tower Findings (typed, post-skeptic)

Each finding: statement · source-kind · pressure point · attack-lane tag(s) · subtower-contract decision. W1=Taleb, W2=Ostrom, W3=Bowles. **CONVERGENT** = independently reached by ≥2 blind witnesses; **CONTESTED** = witnesses tension. Skeptic verdict noted per finding.

### T1 — Non-transferability displaces capture rather than closing it — *SURVIVES (revised)*
- **Statement:** Keying governance to non-transferable $RCT (C4) plausibly attenuates *capital-flash* takeover (W1), but the capture vector is relocated to identity-manufacture (W3): non-transferable ≠ non-farmable per identity, and identities are cheap. On the locally grounded W1-vs-W3 axis this is a *displacement*, not a closure.
- **Source-kind:** local-inference (reconciliation of W1 credit vs W3 identity-farming, grounded on C4 + journalistic sybil witnesses).
- **Pressure point:** $RCT (C4), member levels, contextual governance influence (C3).
- **Lanes:** **Lane2 $RCT-capture** (primary); **Lane1 auth-credit**. *(Lane5 dropped — the bootstrap leg that justified it moved to T7.)*
- **Skeptic revision applied:** stripped the W2 *sector-monopoly* and *custodian-bootstrap* legs from T1's core (both ride on un-ledgered surfaces); the keystone now rests only on the C4-grounded W1-vs-W3 axis. Lane5 removed.
- **Decision:** **borrow-carefully** — borrow non-transferability as a *partial* attenuator only, never as a capture solution. Its safety claim is the most over-readable item in this tower.

### T2 — Reflexive native-token treasury / yield mask — *DEMOTE-TO-ANALOGY (Resonant mapping)*
- **Statement (precedent):** Native-token-concentrated treasury with no stable buffer reflexively depletes in a drawdown (sell-native-to-fund-ops → price down → treasury down); unsustainable yield (Anchor 20% APY, new capital funds withdrawals) masks fragility until a run.
- **Resonant mapping = ANALOGY:** the mapping to a "full-1B $RES treasury," "buyback-burn as forced-buy mirror," and "$R10/$R12/$R15 yield targets" rides on surface assertions the ledger does **not** carry; C6 marks buyback/burn/UCI as **Phase-2 future**. There is no live treasury policy and no live actor to run the reflexive loop against today, so the Resonant-side claim is **incentive-vacuous as a finding** — it survives only as a Phase-2 stress-test *category*.
- **Source-kind:** **primary-source** for the precedent (Terra/UST on-chain reconstruction, arXiv 2207.13914; Harvard Law run analysis); **analogy / operator-reading of an un-snapshotted, explicitly-future mechanism** for the Resonant mapping. *(Provenance note: the verified backbone is the Terra arXiv postmortem; the "DAO Treasury in a Bear Market" practitioner item is related-source — see T9.)*
- **Pressure point:** treasury policy, $RES emission (C5), Phase-2 financial (C6).
- **Lanes:** Lane5 Phase2-financial; Lane3 $RES-emission.
- **Skeptic revision applied:** source-kind of the Resonant mapping demoted from local-inference to analogy; gated behind the supply/buyback-burn/$R-instrument features landing in the claim ledger.
- **Decision:** **block** as designable mechanism (C6 gate open) / **future-work** as a Phase-2 reflexivity stress category. Decision unchanged; only the finding-grade label dropped.

### T3 — One-way exit jam / thin-pool blow-up — *DEMOTE-TO-ANALOGY (Resonant mapping)*
- **Statement (precedent):** "Accept illiquidity for yield" plus a thin pool reproduces AMM-drain / one-way slippage (Curve 3pool, UST >80% of pool, par redemption impossible).
- **Resonant mapping = ANALOGY:** "thin $RES pool against ~1B treasury supply, first-day external-liquidity blow-up" maps to (i) the un-ledgered 1B figure and (ii) external $RES liquidity that C5 says is *considered later* — i.e. not a Phase-1 surface. No live mechanism, no live actor → not incentive-feasible now.
- **Source-kind:** **primary-source** for the AMM-drain precedent (Curve/UST postmortems); **analogy** for the Resonant mapping; the "DAO Treasury in a Bear Market" keystone is **related-source / practitioner**, not peer-reviewed.
- **Pressure point:** $RES later-external-liquidity (C5), Phase-2 lockup yields (C6), liquidity management.
- **Lanes:** Lane3 $RES-emission; Lane5 Phase2-financial.
- **Skeptic revision applied:** Resonant mapping demoted to analogy; gated behind external-liquidity + supply features landing in the ledger.
- **Decision:** **future-work** (Phase-2 liquidity-depth-vs-supply stress category) / **block** as implementation. Decision unchanged; finding-grade claim dropped.

### T4 — Identity-manufacture defeats per-identity scoring — *SURVIVES (revised)*
- **Statement:** Any reward or score counted per-identity (participation rewards, $RES emission, $RCT, member levels, reputation) is shardable across cheap manufactured identities: sybil airdrop farming (1 actor / 1,000+ wallets / ~$531k), 30,000-phone bot farms, 1-master-500-slave clusters, reciprocal mutual-validation rings. Non-transferable (C4) does **not** imply non-farmable per identity — this is the locally grounded contest to T1.
- **Source-kind:** **related-source** (DL News, Cointelegraph, Blockzeit reporting — journalistic). The shardability claim is grounded on C4 + cited sybil witnesses.
- **Pressure point:** $RCT (C4), member levels, contribution validation, $RES emission (C5).
- **Lanes:** **Lane2 $RCT-capture** (primary); **Lane1 auth-credit**; **Lane3 $RES-emission**.
- **Skeptic revision applied:** the "AI-agent sponsor rule = exact 1-master-500-slave shape" leg was operator-reading of an un-ledgered feature. Cut to a conditional parenthetical — *(if an AI-agent-sponsor rule exists, it would instantiate this 1-master-many-slave shape; the shardability claim does not depend on it)*. T4 stands at full strength without it.
- **Decision:** **borrow-carefully** — borrow as a *mandatory anti-sybil obligation* on every per-identity reward.

### T5 — The anti-sybil defense itself is gamed, OR over-corrects — *SURVIVES (split)*
- **Statement, leg (a) — defense gamed:** a report-a-sybil bounty creates a bribery market (Hop — farmer pays hunter not to report). Concrete, incentive-feasible, and exactly the bounty-gaming AGENTS.md mandates analysis of.
- **Statement, leg (b) — defense over-corrects:** sybil defenses produce false positives that exclude honest contributors (ParaSwap excluded 98.5%, caught legit users).
- **Skeptic revision applied — the two legs are now split (different source-kinds, no shared evidential weight):**
  - leg (a) Hop bribery-market = **related-source** (cited incident).
  - leg (b)-empirical: ParaSwap 98.5% exclusion = **related-source** (a *false-positive-rate* defense failure — an incident).
  - leg (b)-construct: Bowles "crowding-out" / motivation distortion = **analogy** (behavioral-economics import, not Resonant-tested). The ParaSwap *incident* must NOT lend its evidential weight to the crowding-out *construct* — they are different failure mechanisms (false-positive rate ≠ motivation crowding).
- **Pressure point:** bounty/prize design, custodian/AI review, simple participation rewards, contribution validation.
- **Lanes:** **Lane4 bounty-prize** (primary); **Lane1 auth-credit**; **Lane3 $RES-emission**.
- **Decision:** **borrow-carefully** as a bounty-optimization-failure-analysis input; **block** the anti-sybil bounty specifically until its own gaming witness exists.

### T6 — Low-turnout minority rule + accumulation — *REVISE (gap survives; sector-monopoly leg → analogy)*
- **Statement (survives, grounded):** token-weighted accumulation under low turnout captures governance with no exploit (Build Finance bought under low turnout; Compound "GoldenBoyz" 5 wallets; ApeCoin single 4% wallet vetoes a $1M grant; Shutter <2% turnout). Against ResonantDAO this survives as a **gap-class**: C3 says governance is *not* one-token-one-vote, yet the corpus records **no quorum / threshold** — the *absence* is a real, locally grounded gap.
- **Sector-monopoly leg = ANALOGY:** "six-sector $RCT → sector monopoly" rides on a six-sector structure the ledger does not carry. Demoted to analogy; gated behind a sector structure landing in the ledger.
- **Source-kind:** **related-source** (Shutter turnout data, practitioner taxonomies, Gerard/Immunefi reporting) for the precedents; the surviving Resonant claim is **local-inference** (C3 + documented absence of quorum); the sector-monopoly leg is **analogy**.
- **Pressure point:** quorum/thresholds (undocumented), member levels, recent-activity weighting, tenure-without-contribution.
- **Lanes:** Lane1 auth-credit; Lane2 $RCT-capture; Lane3 $RES-emission.
- **Decision:** **future-work** — the surviving Resonant content is a *gap recorded as residue* (§4), not a borrowed mechanism. Sector-monopoly held as analogy only.

### T7 — Custodian / bootstrap multisig as unchecked authority — *DEMOTE Resonant-specificity to analogy; keep as open-residue*
- **Statement (precedent):** bootstrap/emergency multisig or custodian becomes unchecked authority when transition rules are undefined → entrenchment (multisig-capture taxonomy).
- **Resonant-specificity = ANALOGY / open-residue:** the "whitepaper explicitly names a custodian bootstrap phase" hook is **not in the ledger or glossary**; and the finding is **single-witness** (W2 only). Therefore the draft's "highest-priority Resonant-specific surface" *ranking* is an over-read on two counts (un-ledgered surface + single-witness severity) and is **cut**. What is kept is the conditional question only.
- **Source-kind:** **related-source** (multisig-capture taxonomy) for the precedent; **analogy / open-residue** for the Resonant hook (operator-reading of an un-snapshotted primary).
- **Pressure point:** custodian/bootstrap authority and transition (un-ledgered).
- **Lanes:** Lane1 auth-credit; Lane5 Phase2-financial.
- **Skeptic revision applied:** "highest-priority Resonant-specific" severity ranking removed; demoted to open-residue (§4). Promote nothing.
- **Decision:** **open-residue** — kept only as the conditional question: *if a custodian bootstrap exists, its transition rules are undefined.*

### T8 — Proposal spam / contract-morphing (vote ≠ execute) — *SURVIVES (residue grade)*
- **Statement:** proposal spam exhausts monitoring; the executed payload differs from the reviewed payload (Tornado CREATE2+selfdestruct, Beanstalk BIP-18, Audius re-init dropping quorum to 1%). Resonant proposal-right thresholds are open.
- **Source-kind:** **related-source** (well-documented, cited incidents — not anecdote); operator-reading for the Resonant mapping, honestly hedged as a *gap*.
- **Pressure point:** proposal-right thresholds (open), $RCT-gated proposal cost, payload immutability.
- **Lanes:** Lane1 auth-credit; Lane4 bounty-prize; Lane2 $RCT-capture.
- **Decision:** **future-work** — recorded as residue (questions: $RCT-gated proposal cost, immutable payloads), not promoted. Skeptic: survives, no over-read.

### T9 — Governance-capture → treasury-drain precedent is UNVERIFIED — *SURVIVES (model finding)*
- **Statement:** the flash-loan single-block voting-capture-drains-treasury class (Beanstalk ~$182M) is cited by W1 and W2, but W1's academic taxonomy backing (*SoK: Attacks on DAOs*, arXiv 2406.15071) **failed PDF extraction (title-only, UNVERIFIED)** and the Beanstalk postmortem is **cited-not-fetched**.
- **Source-kind:** **open-residue** (the *mechanism* is corroborated by W2's independent reporting witnesses; the academic taxonomy backing is unverified).
- **Pressure point:** $RCT governance (C4), treasury.
- **Lanes:** Lane2 $RCT-capture.
- **Firewall (kept — the discipline that keeps T1 honest):** the non-transferability mitigation (T1) must **not** be credited on the strength of an unverified attack it claims to block. T1 rests on the C4-grounded displacement argument, not on this unverified primary.
- **Sharpening applied (skeptic):** T9 is also the provenance reason T2/T3's verified backbone is the Terra arXiv postmortem while their *practitioner* treasury/yield sources are not — making explicit that part of T2/T3's demotion is a T9-class provenance problem, not only an un-ledgered-surface problem.
- **Decision:** **open-residue** — re-fetch SoK 2406.15071 and the Beanstalk postmortem before any finding leans on the academic taxonomy.

---

## 3. Convergence / Tension Map (post-skeptic)

| Pressure point | W1 Taleb | W2 Ostrom | W3 Bowles | Tower reading (final) |
| --- | --- | --- | --- | --- |
| $RCT non-transferability as capture defense | credits | constrains (un-ledgered legs) | attacks (farmable per identity, C4-grounded) | **CONTESTED → displacement on the C4 axis only (T1)** |
| Native-token treasury / yield reflexivity | primary (Terra) | — | — | precedent strong; Resonant mapping = analogy, Phase-2-gated (T2/T3) |
| Per-identity scoring | (governance angle) | accumulation angle | primary witness | CONVERGENT, grounded — identity is the soft underbelly (T4) |
| Anti-sybil defense fragility | — | — | primary witness | survives split: incident (related) vs crowding-out (analogy) (T5) |
| Low turnout / accumulation | (flash-loan) | primary witness | (sybil reputation) | gap survives; sector-monopoly leg = analogy (T6) |
| Custodian/bootstrap authority | — | single witness | — | demoted to open-residue; un-ledgered + single-witness (T7) |

**Genuine tension (not just coverage difference):** only T1, and after the revision it is held strictly on the C4-grounded W1-vs-W3 axis. Everywhere else the witnesses are complementary. Honest tower statement: *the witnesses agree on the failure catalog and disagree only on whether non-transferability is a defense or a redirection — and on the grounded axis the reconciliation favors redirection.*

---

## 4. Residue (corpus gaps — NOT coverage)

**Un-ledgered surface features (Resonant mappings GATED behind these landing in `claims/SOURCE-CLAIM-LEDGER.md`):**
- 1B $RES supply figure (gates T2, T3).
- buyback-burn as a *live present* policy — ledger/C6 has it as Phase-2 *future* only (gates T2).
- named `$R10/$R12/$R15` instruments (gates T2, T3).
- six-sector $RCT structure (gates the sector-monopoly legs of T1/T6).
- named custodian-bootstrap phase + transition rules (gates T7).
- AI-agent-sponsor rule (gates the cut leg of T4).

**Provenance gaps (re-fetch before leaning on):**
- `SoK: Attacks on DAOs` arXiv 2406.15071 — PDF extract failed, title-only, UNVERIFIED.
- Beanstalk postmortem — cited-not-fetched (corroborated indirectly by W2 reporting; not primary-verified here).
- W1 residue: Anchor docs, LFG reserve disclosures, Curve 3pool data, Celsius/3AC postmortems, Chainalysis 85%-single-asset study.
- W3 residue: LayerZero×Nansen disqualification, ZKsync 7-criteria anti-sybil framework, Optimism 0xJohn proposal, CapitalGrug $10M+ claims.

**Resonant-specific design holes (gaps, never mechanisms):** quorum/participation floors; proposal-right thresholds; delegation framework (none recorded); custodian→distributed transition rules; cross-sector $RCT concentration checks (conditional on a sector structure existing); tenure-decay for inactive members. Several map to open claim residue R1, R3, R4, R7.

**Source-kind caveats carried forward:** several W3 sources are journalistic (related-source, not academic); the "DAO Treasury in a Bear Market" item is practitioner/related-source; all surviving Resonant-side mappings are local-inference grounded only on C3/C4/C5/C6, with un-ledgered specifics held as analogy.

---

## 5. Skeptic pass — verdicts preserved (for program synthesis)

Source: `returns/tower-skeptic.md` (Myerson lens, non-vacuity / incentive-feasibility). No KILLs — every finding has a real cited precedent. Damage was concentrated in **source-kind inflation**: real precedents mapped onto un-verified or not-yet-existing Resonant surfaces, then typed as "local-inference against the named surface."

| Finding | Skeptic verdict | What was demoted / changed | Why |
| --- | --- | --- | --- |
| T1 | SURVIVES (revise) | stripped W2 sector + bootstrap legs; dropped Lane5 | those legs ride on un-ledgered surfaces; keystone rests on C4-grounded W1-vs-W3 axis |
| T2 | DEMOTE-TO-ANALOGY | Resonant mapping local-inference → analogy | 1B supply, buyback-burn-as-live, $R-instruments un-ledgered; C6 marks them future → no live actor/loop |
| T3 | DEMOTE-TO-ANALOGY | Resonant mapping → analogy | un-ledgered 1B + C5 "external liquidity later" → not a Phase-1 surface |
| T4 | SURVIVES (revise) | AI-agent-sponsor leg → conditional parenthetical | un-ledgered feature; shardability claim does not need it (C4-grounded) |
| T5 | SURVIVES (split) | ParaSwap incident (related-source) split from crowding-out (analogy) | false-positive-rate failure ≠ motivation crowding; no shared evidential weight |
| T6 | REVISE | sector-monopoly leg → analogy; gap survives | six-sector structure un-ledgered; quorum-absence gap is C3-grounded |
| T7 | DEMOTE-TO-RESIDUE | "highest-priority Resonant-specific" ranking cut | un-ledgered custodian phase + single-witness severity |
| T8 | SURVIVES (residue) | unchanged | concrete cited incidents; gap honestly hedged |
| T9 | SURVIVES (model) | unchanged; cited by T2/T3 for provenance | correct firewall keeping T1 off an unverified attack |

**Systemic correction:** the un-snapshotted-primary defect (§0) cascaded through T1, T2, T3, T4, T6, T7. The fix was downgrading source-kinds and gating Resonant mappings behind the claim ledger — **not** changing the subtower-contract decisions, which the skeptic affirmed as already correct.

**Survivors at finding grade:** T1, T4, T5(a/b-incident), T8, T9. **Held as analogy / Phase-2 stress category / open-residue:** T2, T3, sector-monopoly leg of T6, T5 crowding-out construct, T7.

---

## 6. Decisions Roll-up (subtower contract)

| Finding | Decision | Grade after skeptic |
| --- | --- | --- |
| T1 non-transferability displacement | borrow-carefully | finding (local-inference, C4 axis) |
| T2 reflexive treasury/yield | block (design) / future-work (stress) | analogy + Phase-2 stress category |
| T3 exit-jam / thin pool | future-work / block | analogy + Phase-2 stress category |
| T4 identity-manufacture | borrow-carefully | finding (related-source, C4-grounded) |
| T5 defense gamed / over-corrects | borrow-carefully / block (sybil-bounty) | finding (incident) + analogy (crowding-out) |
| T6 low-turnout accumulation | future-work | gap-finding (C3) + analogy (sector leg) |
| T7 custodian/bootstrap | open-residue | open-residue (un-ledgered + single-witness) |
| T8 proposal-morphing | future-work | finding (residue grade) |
| T9 capture→drain provenance | open-residue | open-residue (model firewall) |

**No promotion.** Nothing here becomes a definition, token policy, governance weight, bounty policy, or implementation. Every Resonant mapping built on an un-ledgered surface feature is gated behind that feature landing in `claims/SOURCE-CLAIM-LEDGER.md`. Claim ≤ proof. Lens, not authority.
