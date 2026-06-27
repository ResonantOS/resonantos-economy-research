# failed-dao-crypto — Explorer Returns (verbatim)

Dispatch: `2026-06-27-econ-tower-failed-dao-crypto` · isolated tower · whitepaper-only base · depth-1 search bound (≤6 sources/sub-lane).
Mechanical append by the strategist. Each lane ran in its own isolated context, blind to siblings.

---

## Sub-lane 1 — Taleb (tail-risk / reflexivity)

**Source candidates (5 admitted):**
1. *Anatomy of a Stablecoin's Failure: the Terra-Luna Case* — Briola, Vidal-Tomás, Wang, Aste (arXiv 2207.13914), 2022 — primary postmortem — on-chain reconstruction of UST/LUNA reflexive death spiral.
2. *Anatomy of a Run: The Terra Luna Crash* — Harvard Law Forum, 2023 — analysis — depeg as bank-run on an uncollateralized peg.
3. *DAO Treasury Management in a Bear Market* — AlphaYields/Coinmonks, 2026 — practitioner — native-token-concentrated treasury → forced-sale → reflexive depletion (70–90% single-asset).
4. *Why Algorithmic Stablecoins Fail: The Collateral Imperative* — ChainScore Labs, 2025/26 — postmortem — "confidence ≠ collateral" failure class.
5. *SoK: Attacks on DAOs* — arXiv 2406.15071, 2024 — academic (PDF extract FAILED; title-only, UNVERIFIED) — treasury-drain/governance-capture taxonomy.

**Typed findings:**
- **F1 UST/LUNA reflexive mint-burn death spiral** — peg backed by sibling token; redemptions hyperinflated LUNA (~350B, ~20x); no circuit-breaker/collateral floor. >$40B in ~5 days. → Phase 2 financial tokens ($R10/$R12/$R15 lockup yields are the "accept illiquidity for yield" structure → one-way exit-jam in a run). Lanes 5, 3.
- **F2 Unsustainable-yield demand mask (Anchor 20% APY)** — yield not backed by cash flow; new capital funds withdrawals; ~$18B TVL masked fragility. → $R10/$R12/$R15 % yield "targets" + UCI if paid in $RES/Phase2. Whitepaper's "lower target/increase reserves" caveat is the tell. Lanes 5, 3.
- **F3 AMM liquidity-pool drain / one-way slippage** — Curve 3pool drained, UST >80% of pool, par redemption impossible. → $RES "later external liquidity": a thin $RES pool against 1B treasury supply is first-day blow-up vector. Lanes 3, 5.
- **F4 Native-token-concentrated treasury reflexive depletion** — 70–90% treasury in own token, no stable buffer; market drop → sell native to fund ops → price down → treasury down. → Treasury holds full 1B $RES; buyback-burn is the forced-buy mirror. Lanes 3, 5, 1.
- **F5 Governance-capture → treasury-drain (Beanstalk-class, UNVERIFIED)** — flash-loan single-block voting capture drains treasury (~$182M). → ResonantDAO governance keyed to $RCT (non-transferable) + UCI, NOT a flash-loanable token = structural mitigation; residual risk shifts to $RCT-capture. Lanes 2, 1.

**Residue:** Anchor docs, LFG reserve disclosures, Curve 3pool data, Celsius/3AC postmortems, Chainalysis 85%-single-asset study, Beanstalk postmortem (cited-not-fetched). SoK 2406.15071 fetch-failed → re-fetch before trusting F5.

---

## Sub-lane 2 — Ostrom (institutional / collective-action)

**Source candidates (6):** ResonantDAO Whitepaper (anchor); *DAO Governance Attacks* (Smart Contract Hacking, taxonomy); Beanstalk flash-loan capture (David Gerard, 2022; Immunefi post-mortem, $182M); *DAO Voting Confidence in Decline* (Shutter Network — 5–10% turnout norm); aggregate (ApeCoin 4%-supply veto, Uniswap <3% turnout, Compound GoldenBoyz).

**Typed findings:**
- **F1 Whale/flash-loan instant majority** — token-weighted voting, no holding period, current-balance counting (Beanstalk $182M; GreenField $31M). → $RCT non-transferable structurally resists capital flash-takeover, BUT custodian bootstrap + undefined quorum/thresholds are where analogous instant-majority forms. Lanes 2, 5.
- **F2 Open-market/coordinated accumulation** — Build Finance seized with no exploit (just bought tokens under low turnout); Compound "GoldenBoyz" 5 wallets. → six-sector $RCT with no cross-sector check lets one sector amass dominant $RCT (sector monopoly). Lanes 1, 2.
- **F3 Voter apathy / low-turnout minority rule** — <2% vote (2025); ApeCoin single 4% wallet vetoed $1M grant; herding suppresses small-holders. → member levels + recent-activity weighting; tenure-without-contribution; no documented quorum. Lanes 1, 3.
- **F4 Delegation capture** — delegated rights concentrate in compromised/malicious delegates. → whitepaper describes NO delegation framework (gap). Lanes 1, 2.
- **F5 Council/multisig/custodian capture** — bootstrap/emergency multisig becomes unchecked authority; transition rules undefined → entrenchment. → custodian bootstrap phase explicitly named, transition unspecified = highest-priority Resonant-specific surface. Lanes 1, 5.
- **F6 Proposal spam / contract-morphing** — proposal spam exhausts monitoring; what voters review ≠ what executes (Tornado CREATE2+selfdestruct, Beanstalk BIP-18, Audius re-init quorum→1%). → proposal-right thresholds open; need $RCT-gated proposal cost + immutable payloads. Lanes 1, 4, 2.

**Open residue (Resonant-specific holes):** quorum/participation floors, proposal-right thresholds, delegation framework, custodian→distributed transition, cross-sector $RCT concentration checks, tenure-decay for inactive members.

---

## Sub-lane 3 — Bowles (incentive-gaming / behavioral)

**Source candidates (6):** Sybil airdrop farming (DL News — Arbitrum 1,000+ wallets/~$531k one actor); Hop tipoff-bounty (DL News — bribe attempt vs hunter); Optimism "Zero Contribution Accounts" blacklist (Blockzeit); 30,000-phone bot farm (Cointelegraph — ZKsync 85 wallets/$753k); AI-agent airdrop tactics (GOAT/AIXBT); ResonantDAO Whitepaper (anchor).

**Typed findings:**
- **F1 Airdrop sybil farming (multi-wallet)** — per-account reward captured across thousands of wallets; later cluster-randomized funding evades analytics. → simple participation rewards + $RES emission (activity-counted = shardable). Lanes 3, 2.
- **F2 Points-program/quest grinding** — fake-activity surge pre-airdrop then collapse; grind cheapest measurable action. → contribution validation (verified-task/Academy/marketplace = gameable quest surfaces). Lanes 1, 3.
- **F3 AI-agent/bot-farm accounts** — 1 master→500 slaves defeat per-device fingerprinting. → AI-agent sponsor rule = exact 1-master-many-slave shape. Lanes 2, 3, 1.
- **F4 Anti-sybil bounty itself gamed** — Hop report-a-sybil bounty created a bribery market; farmer pays hunter not to report. → bounty/prize + custodian/AI review. Lanes 4, 1.
- **F5 Reputation/governance sybil → score capture** — sybil clusters inflate reputation, dump on launch; reciprocal mutual-validation rings. → member levels + $RCT (non-transferable ≠ non-farmable: farmable per-identity, identities cheap). Lanes 1, 2.
- **F6 Over-correction (Bowles crowding)** — ParaSwap excluded 98.5% to kill sybils, caught legit users; the defense becomes a second distortion punishing honest contributors. → simple participation rewards + contribution validation. Lanes 3, 4.

**Residue:** LayerZero×Nansen disqualification, ZKsync 7-criteria framework, Optimism 0xJohn proposal, CapitalGrug $10M+ claims (cited-not-fetched).
