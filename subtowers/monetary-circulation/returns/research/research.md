# Explorer Research Returns — Monetary Circulation And Liquidity Resilience

Dispatch: `2026-07-13-monetary-circulation-research`
Status: explorer stage complete; four bounded returns preserved
Promotion scope: local-research-only

This file preserves the four explorer returns by assigned lane. Returns are
appended mechanically without synthesizing them. External sources remain
related evidence or precedent; their presence here does not admit them into the
tower claim ledger and does not validate a ResonantOS mechanism.

## Agent 1 — Myerson, Roger

## Explorer return — Myerson, Roger

**Lane:** supply, issuance, and distribution prior art  
**Cutoff:** one bounded depth-1 web pass; six sources admitted; no recursive bibliography chase  
**Date checked:** 2026-07-13  
**Posture:** external precedent only. Nothing below validates or selects a ResonantOS supply, emission, burn, vesting, reward, or distribution policy.

### 1. EIP-1559 — demand-dependent burn destroys fixed-supply certainty

**Citation:** Buterin et al., [“EIP-1559: Fee Market Change for ETH 1.0 Chain”](https://eips.ethereum.org/EIPS/eip-1559), created 2019-04-13.

- **Source kind:** Official external protocol specification; primary mechanism document.
- **Assumptions:** A protocol-priced base fee varies with block demand and is burned; priority fees go to block producers. The specification predates Ethereum’s proof-of-stake transition, so its miner/issuance framing is not evidence of Ethereum’s current aggregate issuance.
- **Supported claim:** A burn rule makes net supply path-dependent: issuance can exceed burn or burn can exceed issuance, and user demand prevents a fixed long-run quantity guarantee. The specification also distinguishes payer outflow, producer income, and protocol destruction—three states MC-E1 must not collapse.
- **Unsupported inference:** Burning fees makes a currency scarce, stable, fairly distributed, affordable, or useful; nor does a burn offset prove sustainable rewards.
- **Local bridge:** **MC-E1:** record issued, transferred, paid-as-fee, rewarded, and irreversibly burned units separately. **MC-E2:** compare gross issuance and demand-sensitive removal rather than labeling a schedule “inflationary” from issuance alone. **MC-E3:** no direct distribution result; payer and producer cohorts would still need tracing.
- **Disanalogy:** Ethereum’s blockspace market and consensus incentives are not established properties of `$RES`.
- **Reversal condition:** The supply-uncertainty result weakens if burn is absent, negligible, capped, or funded by an exogenous quantity rather than endogenous use; any present-Ethereum claim reverses without a separately fetched post-merge issuance specification.

### 2. UNI — vesting, retrospective allocation, and perpetual dilution coexist

**Citation:** Uniswap Labs, [“Introducing UNI”](https://blog.uniswap.org/uni), 2020-09-16.

- **Source kind:** Official external protocol launch/allocation documentation; first-party schedule record, not an independent outcome study.
- **Assumptions:** One billion UNI minted at genesis; accessibility unfolds across four years. Team, investor, and advisor allocations vest over four years; 2% annual perpetual inflation begins afterward. Historical-user allocation depends on a fixed snapshot, with historical LP rewards weighted toward periods of low total liquidity.
- **Supported claim:** “Finite genesis stock” does not imply finite distribution: locked-to-accessible transitions and later perpetual issuance create separate horizons. The record also exposes an explicit trade-off—future participation is funded by diluting passive holders—and embeds intentional early-participant advantage.
- **Unsupported inference:** Four-year vesting prevented selling or concentration; perpetual inflation reached newcomers or useful contributors; retrospective allocation was equitable; token ownership produced legitimate authority.
- **Local bridge:** **MC-E1:** distinguish minted, treasury-held, vested-but-locked, claimable, claimed, circulating, and newly issued states. **MC-E2:** model the four-year unlock and post-year-four inflation as distinct schedule regimes. **MC-E3:** compare insiders, historical users/LPs, treasury recipients, passive holders, and post-snapshot newcomers.
- **Disanalogy:** UNI is a liquid governance token attached to an operated exchange protocol; ResonantOS cannot borrow its governance or market assumptions.
- **Reversal condition:** The stated trajectory reverses if governance altered or declined to activate inflation, vesting contracts differ from prose, treasury distribution remained dormant, or entity-level holdings show redistribution unlike the announced cohort allocation.

### 3. Filecoin — explicit attack on front-loaded exponential rewards

**Citation:** Filecoin Project, [“Minting Model”](https://spec.filecoin.io/systems/filecoin_token/minting_model/), undated live specification.

- **Source kind:** Official external cryptoeconomic specification. The page labels itself `reliable` but lists theory audit as `n/a`; its simulation rationale is first-party evidence, not independent validation.
- **Assumptions:** Storage power is measurable and meaningfully proxies network creation; miners respond to reward timing; a hybrid schedule allocates 30% of storage-mining rewards to simple exponential minting and 70% to baseline minting tied to network growth.
- **Supported claim:** The specification explicitly attacks a preferred bounded/growth-shaped family: pure exponential decay front-loads tokens when participation is low, can reward timing over delivered storage, and can induce overinvestment followed by exit. Its baseline alternative delays more issuance until declared storage growth, but still retains an early simple-minting component and acknowledges that component disproportionately rewards early miners.
- **Unsupported inference:** Baseline minting produced durable storage, newcomer access, low concentration, or welfare improvement; measured capacity equals user value; 30/70 is portable or safe.
- **Local bridge:** **MC-E1:** track unminted allocation, time-minted rewards, activity-conditioned rewards, and recipient balances. **MC-E2:** compare pure decay with hybrid time/activity schedules over matched horizons. **MC-E3:** measure reward per unit of verified contribution by entry cohort, not total network growth alone.
- **Disanalogy:** Filecoin rewards capital-intensive, cryptographically verified storage provision; ResonantOS contribution lacks that direct capacity witness.
- **Reversal condition:** The proposed advantage reverses if activity is cheaply inflated, storage power poorly predicts durable value, baseline growth locks out capital-poor entrants, or later cohorts receive less reward per useful unit despite higher system value.

### 4. Fanti et al. — proportional-stake rewards can compound concentration even honestly

**Citation:** Giulia Fanti et al., [“Compounding of Wealth in Proof-of-Stake Cryptocurrencies”](https://arxiv.org/abs/1809.07468), arXiv:1809.07468v2, 2018-10-15.

- **Source kind:** Primary formal paper/preprint.
- **Assumptions:** Block proposers are sampled proportionally to stake; rewards compound into stake; equitability is relative stake amplification; the central result first examines honest protocol behavior. Strategic deviations are bounded in the paper’s model, not in an open DAO population.
- **Supported claim:** Reward allocation can be inequitable without misconduct. Small initial stake pools and rewards large relative to the pool worsen equitability. The paper proves a geometric reward function maximally equitable within its modeled reward-function class under honest behavior.
- **Unsupported inference:** A geometric schedule prevents real-world concentration, improves newcomer access, or is best outside proportional-stake proposer selection; “maximally equitable” is not general social fairness.
- **Local bridge:** **MC-E1:** rewards must update cohort/entity balances before concentration is evaluated. **MC-E2:** compare schedule shape relative to initial stock, not only nominal emission. **MC-E3:** test relative amplification by initial cohort and entry epoch, including compounding.
- **Disanalogy:** `$RES` rewards need not be stake-proportional, automatically reinvestable, or coupled to block-proposer probability—and must not turn a balance into authority.
- **Reversal condition:** The concentration mechanism weakens or disappears when rewards are not proportional to current holdings, cannot compound, participation costs dominate, stake is frequently redistributed, or entry/exit flows overwhelm endogenous rewards.

### 5. Budish — bounded issuance can strand a recurring reward obligation

**Citation:** Eric Budish, [“Trust at Scale: The Economic Limits of Cryptocurrencies and Blockchains”](https://academic.oup.com/qje/article/140/1/1/7824430), *Quarterly Journal of Economics* 140(1), 2025, DOI 10.1093/qje/qjae033.

- **Source kind:** Peer-reviewed primary formal economic paper.
- **Assumptions:** Permissionless Nakamoto-style consensus, free-entry/zero-profit trust support, majority-attack incentive compatibility, and modeled attack benefits/frictions. Quantitative results rely especially on proof-of-work longest-chain and acknowledged difficulty in valuing attacks.
- **Supported claim:** A stock of token value cannot substitute for recurring security flow. In the model, ongoing compensation for honest trust support must be large relative to one-off attack benefit. This attacks the attractive fiction that a bounded or declining issuance schedule is self-sufficient: terminating subsidy leaves some other recurring funding or deterrence assumption to carry the obligation.
- **Unsupported inference:** `$RES` needs perpetual inflation, faces a majority-attack security budget, or inherits Budish’s numeric bounds.
- **Local bridge:** **MC-E1:** separate token stock from recurring obligations and recipient flows. **MC-E2:** every finite-horizon schedule needs an explicit post-emission continuation state. **MC-E3:** the paper does not establish distribution fairness.
- **Disanalogy:** ResonantOS may not use anonymous permissionless consensus; identity, contracts, law, revocable roles, or non-token deterrence could dominate.
- **Reversal condition:** The bridge largely reverses if no recurring token-funded security service exists, attack benefits are negligible, or credible confiscation, specialized capital, legal enforcement, or trusted membership supplies stock-like deterrence.

### 6. Kondor et al. — early Bitcoin wealth showed preferential accumulation, with entity caveats

**Citation:** Dániel Kondor et al., [“Do the Rich Get Richer? An Empirical Analysis of the Bitcoin Transaction Network”](https://doi.org/10.1371/journal.pone.0086197), *PLOS ONE* 9(2), 2014.

- **Source kind:** Peer-reviewed primary empirical paper using the Bitcoin transaction graph through 2013.
- **Assumptions:** Addresses are analyzed as nodes; positive balance increments approximate wealth acquisition; the public chain captures transfers but not off-chain ownership or reliable address-to-entity identity.
- **Supported claim:** The observed address network had highly heterogeneous balances and sublinear preferential attachment in wealth accumulation: richer addresses tended to acquire balances faster. By 2013, specialized mining investment had also shifted ordinary newcomer acquisition toward exchanges or compensation rather than direct issuance.
- **Unsupported inference:** Bitcoin’s issuance schedule caused the pattern; addresses equal people; the result persists today; any `$RES` distribution will reproduce it.
- **Local bridge:** **MC-E1:** entity resolution and off-system holdings are accounting blockers. **MC-E2:** schedule comparison needs actual recipient trajectories. **MC-E3:** entry epoch, acquisition route, balance growth, and concentration must be measured together.
- **Disanalogy:** Early Bitcoin was a pseudonymous proof-of-work market with specialized mining and speculative exchange access.
- **Reversal condition:** Later entity-resolved data showing no preferential accumulation, strong redistribution, or broad direct access to issuance would weaken the bridge.

## Surplus and cited-but-unfetched residue

No further source was admitted. Depth-1 residue includes Carlsten et al.’s *On the Instability of Bitcoin Without the Block Reward* cited by EIP-1559; Bitcoin’s subsidy/halving specification; Filecoin’s linked Token Allocation and Block Reward Minting pages; UNI vesting contracts, treasury transactions, and present entity concentration; Ethereum’s post-merge issuance specification; Fanti et al.’s proceedings version and strategic-model details; and Kondor et al.’s correction, code, and linked dataset.

**Cross-source implication:** MC-E1 must reconcile state transitions, not one headline supply. MC-E2 must include terminal obligations, unlock regimes, endogenous burns, activity-conditioned release, and horizon reversals. MC-E3 must use entity/cohort trajectories and newcomer acquisition routes. None currently has Resonant-specific initial conditions, thresholds, or a policy witness.

## Agent 2 — Taleb, Nassim Nicholas

# Explorer source card — treasury solvency and reserve management

**Agent:** Taleb, Nassim Nicholas  
**Scope:** Treasury/reserve prior art only; read-only, one depth-1 web pass  
**Checked:** 2026-07-13  
**Posture:** Related evidence for MC-E4/MC-E6, not ResonantOS policy or a source of DAO-safe thresholds.

## Admitted sources

### 1. Luna Foundation Guard peg-defense audit

**Citation:** [JS Held, *Luna Foundation Guard, TFL, and UST Peg Defense*](https://lfg.org/audit/LFG-Audit-2022-11-14.pdf), report dated 2022-11-09; checked 2026-07-13.

- **Source kind:** Commissioned forensic analysis of on-chain and exchange records; supporting empirical source. TFL paid for the work, and the report discloses unavailable exchange data and missing Jump trading records.
- **Supported claim:** During 8–12 May 2022, LFG/TFL used roughly 80,000 BTC, 26.28m USDT, and 23.56m USDC to buy UST in peg defense. The recorded LFG balance moved from 80,394 BTC to 313 BTC; its USDT and USDC balances moved to zero, while AVAX and BNB remained. The reserve therefore had several asset labels but its immediately deployed defense capacity was concentrated and rapidly consumed against one obligation.
- **Unsupported inference:** The audit does not prove that diversification itself caused the collapse, establish an optimal reserve ratio, or show that every DAO treasury faces peg-redemption liabilities. It evaluates transaction accounting, not whether the mechanism was safe.
- **Local bridge:** **MC-E4** should represent each reserve asset by stressed executable value, obligation served, liquidation venue, deployment latency, and post-defense balance—not ticker count or pre-shock mark-to-market value. **MC-E6** needs the path `liability stress → reserve sale → market purchase of liability asset → reserve depletion`, together with the UST/LUNA mint-burn loop.
- **Disanalogy:** LFG defended a dollar peg through centrally executed market operations; ResonantOS has no admitted peg, redemption promise, or equivalent reserve mandate.
- **Tail condition:** A nominally multi-asset reserve fails as diversification when one binding obligation requires simultaneous rapid liquidation, the principal reserve assets share the crypto drawdown, and defense purchases increase exposure to the impaired liability. This is the required counterexample to a simple diversification story.

### 2. IRON/TITAN run using Polygon transaction data

**Citation:** [Federal Reserve, *Runs on Algorithmic Stablecoins: Evidence from Iron, Titan, and Steel*](https://www.federalreserve.gov/econres/notes/feds-notes/runs-on-algorithmic-stablecoins-evidence-from-iron-titan-and-steel-20220602.html), 2022-06-02; checked 2026-07-13.

- **Source kind:** Public-sector empirical/risk note using Polygon and Binance-chain transaction data; related evidence.
- **Supported claim:** IRON was approximately 75% USDC-backed and 25% backed by endogenous TITAN. When TITAN fell from about $60 to near zero within hours, its ten-minute average price lagged spot, allowing underpriced IRON creation and secondary-market selling. The collateral controller could raise the target ratio only 0.25 percentage points per hour, too slowly for the run. External reserves used to buy TITAN produced only a temporary rebound. Larger accounts exited first, demonstrating first-mover pressure.
- **Unsupported inference:** The source does not show that all partial reserves, mint/burn systems, or slow controllers fail; the same code on BSC did not experience an equivalent run, which limits mechanism-only explanations.
- **Local bridge:** **MC-E4** must separate exogenous spendable reserves from endogenous assets and haircut the latter jointly with the liability/token shock. **MC-E6** needs an executable loop: `endogenous price fall → stale valuation → undercollateralized mint → liability sale → peg loss → redemption/issuance pressure → further endogenous sale`, with controller latency and large-holder exit order.
- **Disanalogy:** This was a redeemable stablecoin with a fixed collateral formula and cross-venue arbitrage, not an ordinary operating treasury or contributor-credit system.
- **Tail condition:** Failure appears when asset price moves faster than the valuation window and collateral controller, while early redemption has a better recovery value than late redemption.

### 3. GitcoinDAO treasury runway analysis and challenge thread

**Citation:** [Gitcoin Governance, *Gitcoin Treasury Runway Analysis*](https://gov.gitcoin.co/t/gitcoin-treasury-runway-analysis/11077), 2022-07-07; checked 2026-07-13.

- **Source kind:** DAO governance-forum scenario analysis by Llama contributors, with in-thread operator challenges; first-party operating context but unaudited and not a ratified policy.
- **Supported claim:** The analysis treated a treasury reported near $134m as more than 99.5% GTC. At constant spending, modeled runway fell from 9.3 years under flat GTC to 0.9 years after a 90% fall. A modeled $15m diversification increased that bear-case runway only to 1.8 years and assumed discounted OTC/venture sales. Participants challenged the omission of sell-pressure feedback and noted that treasury token quantity times spot price could exceed circulating market capitalization. Budget versus actual-spend disagreement also moved runway materially.
- **Unsupported inference:** These are illustrative scenarios, not realized liquidation results. They do not establish a safe stablecoin buffer, expense multiple, native-token haircut, or universal runway formula.
- **Local bridge:** **MC-E4** needs separate inputs for obligation burn, actual versus approved spending, stable reserves, native-token liquidation discount, volume/time-to-cash, and price scenarios. **MC-E6** must not hold price exogenous when operating grants produce recurring native-token sales.
- **Disanalogy:** Gitcoin’s 2022 budget structure, GTC liquidity, vesting inventory, and contributor spending are not ResonantOS facts.
- **Tail condition:** A long headline runway collapses when native-token price, realizable sale size, and recurring burn are jointly adverse; a diversification transaction may itself require delay, discounts, or market impact. This directly contradicts a simple spot-value runway story.

### 4. Observable DAO treasury composition dataset

**Citation:** [DefiLlama Research, *State of DeFi 2025*](https://defillama.com/research/report/state-of-defi-2025), treasury section; checked 2026-07-13.

- **Source kind:** Dataset-provider sector snapshot based on observable on-chain balances; related empirical evidence.
- **Supported claim:** Across 360 visible treasuries, the report records strong size skew and, among the largest twenty, an average mix near 58% native tokens, 14% stablecoins, and 29% other cryptoassets. It explicitly distinguishes native-token supply reserves from diversified balance sheets and notes that off-chain foundations, fiat, endowments, and intermediary-held assets are not captured.
- **Unsupported inference:** Balance snapshots do not reveal obligations, encumbrances, liquidation depth, actual burn, legal access, or causal survival advantage. “Stablecoin share” cannot be promoted to spendable runway without those missing fields.
- **Local bridge:** **MC-E4** should preserve at least three non-collapsing buckets: native supply reserve, non-native on-chain reserve, and obligation-matched spendable reserve, plus an `unobserved/off-chain` flag. **MC-E6** may use composition to select shocks, but this source alone supplies no feedback coefficient.
- **Disanalogy:** The sample is dominated by a few large protocols and uses heterogeneous treasury labels; it is not a representative operating-history panel.
- **Tail condition:** Apparent diversification fails under common crypto factors, stablecoin/venue dependence, or hidden obligations; observable balance is only an upper bound on immediately usable capacity.

### 5. CoW DAO 2025 operating treasury review

**Citation:** [CoW DAO, *Treasury: 2025 Annual Review*](https://forum.cow.fi/t/cow-dao-treasury-2025-annual-review/3356); checked 2026-07-13.

- **Source kind:** First-party DAO treasury review prepared in an active-management context; official operational record, not an independent audit.
- **Supported claim:** The review reports approximately $34.36m net assets: $29.19m actively managed and $5.17m in a separate defense reserve. Managed assets included USD/EUR stablecoins, COW, and ETH-correlated assets, with stablecoins near a stated two-year target. Assets were not simply cash: positions included liquidity pools, lending markets, LSTs, and curated vaults. Following a Balancer incident and Morpho liquidity crunch, the team consolidated or exited several positions.
- **Unsupported inference:** The stated two-year target and sub-30% protocol exposure do not prove two years of stressed spendable runway or safety under joint protocol, stablecoin, custody, and liquidity shocks.
- **Local bridge:** **MC-E4** needs a cash ladder: idle/unencumbered, defense-restricted, LP/lending-deployed, exit-notice or market-dependent, and unavailable. **MC-E6** should model venue shock causing treasury withdrawal and protocol-owned-liquidity contraction at the same time.
- **Disanalogy:** CoW uses a professional manager, active DeFi deployments, a defense reserve, and market-liquidity objectives that ResonantOS has not adopted.
- **Tail condition:** Diversification still fails operationally when positions share venues, collateral, or redemption rails and must be unwound together while the defense obligation is active.

## Cross-source fixture implications

The evidence rejects four shortcuts: `native quantity × spot price = runway`; “more tickers = independent reserves”; a controller necessarily responds within shock time; and stablecoin/deployed-asset value equals immediate cash. MC-E4 should output a vector of obligation-matched stressed capacity, haircut, encumbrance, liquidation depth, and time-to-cash. MC-E6 should treat spending, defense, redemption, reserve sales, and liquidity withdrawal as endogenous feedback paths. No admitted source supplies a ResonantOS-safe threshold or policy choice.

## Surplus and cited-but-unfetched residue

- MakerDAO Black Thursday postmortem and auction-level records: official blog URL redirected during this pass; keep as unfetched failure residue.
- Ethereum Foundation 2025 treasury policy: official page was not retrievable in the bounded pass; keep as surplus reserve-policy precedent.
- Iron Finance’s first-party Medium postmortem: cited by contemporaneous records but not admitted because the stronger Fed data analysis was available.
- Gitcoin’s linked detailed Llama report, Snapshot proposal, monthly financial reports, and market-volume data: depth-2 residue.
- CoW’s linked Dune LP dashboards, CIP-69 Snapshot, manager scope, and incident-specific records: depth-2 residue.
- LFG report limitation: Jump did not provide its trade records, and some exchange APIs were unavailable; those gaps remain explicit rather than treated as verified execution detail.

## Agent 3 — Fritz, Tobias

# Liquidity and Market-Microstructure Prior-Art Source Card

- **Dispatch:** `2026-07-13-monetary-circulation-research`
- **Explorer:** `Fritz, Tobias`
- **Date checked:** 2026-07-13
- **Scope:** executable liquidity, AMM/order-book depth, slippage, price impact, LP concentration/withdrawal, oracle/routing dependence, manipulation, run dynamics, and stressed exit capacity
- **Search bound:** one depth-1 pass; 6/6 sources admitted; no recursive citation chasing
- **Local targets:** `MC-E5` liquidity exit capacity and `MC-E6` reflexive feedback
- **Authority boundary:** related evidence only. No source selects ResonantOS liquidity, oracle, market, treasury, or launch policy.

## 1. Uniswap v3 Core

**Citation:** Adams, Zinsmeister, Salem, Keefer, and Robinson, [*Uniswap v3 Core*](https://app.uniswap.org/whitepaper-v3.pdf) (2021).

- **Source kind:** first-party protocol whitepaper and formal mechanism specification.
- **Assumptions:** Constant-product execution within each active price range; deterministic on-chain state; LPs may choose, add, remove, and rebalance positions; the relevant venue and fee tier are known.
- **Supported claim:** Concentrated liquidity is only executable inside its chosen range. When price exits that range, the position becomes inactive and one reserve has been depleted. Thus virtual liquidity or total deposited value does not by itself state executable two-sided exit capacity. Multiple pools and fee tiers also make routing venue-dependent.
- **Unsupported inference:** Capital efficiency guarantees stressed liquidity, LP persistence, low slippage outside the current range, or an oracle that cannot be manipulated.
- **Local bridge:** For `MC-E5`, reconstruct the complete active-liquidity curve across ticks and venues, then execute declared sell sizes through it. For `MC-E6`, shock price across range boundaries and observe whether inactive positions and LP rebalancing reinforce impact.
- **Disanalogy:** This is a protocol design, not evidence that a future `$RES` market will have LPs, competitive routing, external arbitrage, or stable collateral.
- **Flipping observed quantity:** Active in-range liquidity and the executable output for the declared order size after fees. A headline pool value flips from “possibly sufficient” to “insufficient” when price crosses concentrated ranges or the realized impact/time bound fails.

## 2. Order-book price impact

**Citation:** Cont, Kukanov, and Stoikov, [“The Price Impact of Order Book Events”](https://doi.org/10.1093/jjfinec/nbt003), *Journal of Financial Econometrics* 12(1), 2014.

- **Source kind:** peer-reviewed empirical market-microstructure study using trades and quotes for 50 US equities.
- **Assumptions:** Short execution intervals, observable best-bid/ask queues, and an order-driven market where order-flow imbalance aggregates market orders, limit orders, and cancellations.
- **Supported claim:** Short-horizon price changes were more robustly associated with order-flow imbalance than trade volume; the impact slope was inversely related to market depth. Volume alone was a noisy liquidity proxy.
- **Unsupported inference:** The estimated equity-market coefficient transfers to crypto, remains linear in a run, or gives a safe price-impact threshold.
- **Local bridge:** `MC-E5` should replay market orders, limit-order arrivals, and cancellations against the full book, recording implementation shortfall and refill—not infer exit capacity from volume. `MC-E6` should allow cancellations and same-direction flow to reduce depth during the shock.
- **Disanalogy:** S&P 500 equities have regulated venues, market hours, established market makers, and deep external capital unlike a new DAO-linked asset.
- **Flipping observed quantity:** Order-flow imbalance divided by contemporaneous depth, plus realized impact and recovery time. A high-volume market flips to illiquid when cancellation-driven imbalance produces impact beyond the frozen bound.

## 3. DeFi manipulation through flash liquidity

**Citation:** Qin, Zhou, Livshits, and Gervais, [*Attacking the DeFi Ecosystem with Flash Loans for Fun and Profit*](https://doi.org/10.48550/arXiv.2003.03810) (FC 2021 version).

- **Source kind:** formal-computational attack analysis reproducing two operated DeFi attacks and optimizing attacks over blockchain/protocol state.
- **Assumptions:** Atomic composability, borrowable flash liquidity, deterministic transaction execution, and protocols whose decisions depend on manipulable on-chain market state.
- **Supported claim:** Temporary capital and cross-protocol composition can make manipulation profitable even without persistent attacker inventory. The authors modeled two executed attacks with returns above 500,000% and found parameter choices that would have increased profit further.
- **Unsupported inference:** Every AMM or oracle is manipulable, flash loans are the root cause, or any specific delay/TWAP prevents exploitation.
- **Local bridge:** `MC-E5` must test routes as a connected venue graph, including borrowed liquidity and private routing. `MC-E6` must couple manipulated price/oracle state to any liquidation, treasury, emission, or withdrawal response.
- **Disanalogy:** The attacked lending/trading protocols had specific oracle and composability assumptions not yet present for `$RES`.
- **Flipping observed quantity:** Maximum net attack profit after fees, slippage, repayment, and gas under an admissible capital/routing envelope. A liquidity/oracle design flips to failure when a feasible atomic route yields positive profit or forces the protected state across its frozen bound.

## 4. MakerDAO “Black Thursday”

**Citation:** MakerDAO governance forum, [“Black Thursday Response Thread”](https://forum.skyeco.com/t/black-thursday-response-thread/1433) (12 March 2020).

- **Source kind:** contemporaneous first-party operating/governance incident record; its root-cause statements were explicitly provisional.
- **Assumptions:** Maker’s then-current collateral auctions depended on external keepers, Ethereum transaction inclusion, oracle-triggered liquidations, DAI bidding liquidity, and short auction timing.
- **Supported claim:** During the ETH crash and network congestion, high gas, delayed execution, slippage fear, and insufficient bidding liquidity coincided with keepers ceasing activity. One keeper could submit zero bids without competition for roughly two to three hours; the thread recorded about $4 million in system deficit.
- **Unsupported inference:** Keeper concentration alone caused the loss, the reported provisional account is a complete causal postmortem, or the same loss path transfers directly to `$RES`.
- **Local bridge:** This is the mechanism-attacking case for both handoffs. `MC-E5` must include participant availability, capital, transaction inclusion, and auction throughput. `MC-E6` must couple price decline → congestion/slippage → keeper withdrawal → poor clearing → system impairment.
- **Disanalogy:** Maker used overcollateralized lending, liquidation auctions, DAI, ETH collateral, and MKR recapitalization; the current ResonantOS corpus specifies none of these.
- **Flipping observed quantity:** Number and capital share of executable bidders, inclusion latency, auction bid coverage, realized collateral discount, and resulting system deficit. Nominal collateral value flips to non-executable when bidders cannot or will not clear within the required time.

## 5. TVL versus market depth in concentrated-liquidity DEXs

**Citation:** Zhu, Liu, Wan, Liao, Moallemi, and Bachu, [*What Drives Liquidity on Decentralized Exchanges? Evidence from the Uniswap Protocol*](https://arxiv.org/abs/2410.19107v2) (2025 revision).

- **Source kind:** primary empirical preprint using on-chain Uniswap data and a counterfactual-spread decomposition; not treated as peer-reviewed authority.
- **Assumptions:** Its counterfactual v2 spread meaningfully separates TVL from concentration; observed pool, platform, token-pair, gas, routing, fee, volatility, and markout variables proxy the studied liquidity channels. Reported relations are predictive, not automatically causal.
- **Supported claim:** Market depth depends on both deposited value and where liquidity is concentrated. Gas prices, returns, and venue share predicted depth through concentration; private-market-maker internalization affected TVL without improving overall depth.
- **Unsupported inference:** The predictors are causal, the metric captures a run, or more TVL/private inventory guarantees more executable liquidity.
- **Local bridge:** `MC-E5` should report TVL and concentration separately, then compare native-pool depth with routed depth including private inventory. `MC-E6` should stress whether volatility, adverse markout, or gas changes cause effective depth to disappear.
- **Disanalogy:** Historical Uniswap pools have mature arbitrage, fee revenue, and competing venues absent from a hypothetical `$RES` market.
- **Flipping observed quantity:** Actual spread/depth versus the v2-counterfactual spread at multiple order sizes, before and after removal of top LPs or private routes. The conclusion flips when TVL stays high while executable depth deteriorates.

## 6. Run dynamics under liquidity transformation

**Citation:** Diamond and Dybvig, [“Bank Runs, Deposit Insurance, and Liquidity”](https://doi.org/10.1086/261155), *Journal of Political Economy* 91(3), 1983.

- **Source kind:** peer-reviewed formal economic model.
- **Assumptions:** Depositors have uncertain timing needs; the intermediary holds productive but illiquid long-duration assets while promising sequential, liquid withdrawal; beliefs can coordinate withdrawals.
- **Supported claim:** Liquidity transformation can admit both a normal equilibrium and a self-fulfilling run equilibrium in which expected withdrawals make early withdrawal individually rational and force costly liquidation.
- **Unsupported inference:** A freely traded token is a demand deposit, deposit insurance is an applicable DAO control, or the model calibrates crypto exit thresholds.
- **Local bridge:** Use only as an `MC-E6` feedback template: expected exit → attempted exit → depth depletion/forced sale → worse realized exit → more exit. `MC-E5` must measure the executable capacity that this demand confronts.
- **Disanalogy:** An AMM or order book does not necessarily promise par redemption, apply sequential service, or own long-duration assets.
- **Flipping observed quantity:** Concurrent exit demand relative to immediately executable capacity, liquidation haircut, and recovery/replenishment time. A stable state flips when expected exits make realized exit value deteriorate enough to induce further exits.

## Bounded finding

Executable liquidity is a state- and size-dependent path, not a stock statistic. The minimum non-compensatory vector for `MC-E5` is:

- trade size and horizon;
- venue/route and fees;
- active AMM liquidity by range or order-book depth by level;
- expected and realized slippage/price impact;
- replenishment and transaction-inclusion time;
- concentration among LPs, bidders, routers, or market makers; and
- output after removing the largest providers and private routes.

`MC-E6` must then couple that vector to adaptive withdrawal, cancellation, oracle-triggered actions, treasury impairment, forced selling, or emission pressure. The Maker incident and flash-loan analysis attack any design that assumes visible reserves, nominal TVL, or a spot oracle remain executable under stress. None of the six sources supplies a ResonantOS threshold or policy.

## Surplus and unfetched residue

- Direct empirical LP-withdrawal hazard and top-provider concentration during depegs remains uncollected; the admitted Uniswap study establishes TVL/concentration separation, not a causal withdrawal curve.
- Sandwich and routing-extractor measurement was bounded out; cited-but-unfetched candidates include Daian et al., *Flash Boys 2.0*, and later MEV datasets.
- Cross-venue liquidation models, stable-swap amplification/depeg behavior, CEX withdrawal suspensions, bridge outages, sequencer downtime, and oracle-governance capture remain residue.
- Diamond–Dybvig descendants with strategic wholesale runs or market-based intermediation were not citation-chased.
- No source establishes prospective `$RES` venues, LPs, oracle inputs, redemption rights, market-maker commitments, shock bounds, or acceptable impact/time-to-cash thresholds.

## Agent 4 — Bowles, Samuel

## Explorer return — Bowles, Samuel

**Lane:** utility, demand, and behavioral feedback  
**Search bound:** one depth-1 web pass; six sources admitted; no recursive citation chase  
**Posture:** related evidence only. Price, trading volume, token holding, and app use are not treated as transactional utility. No ResonantOS policy is selected.

### 1. Li and Mann — a utility token can coordinate use, but only inside a narrow equilibrium construction

**Citation:** Jiasun Li and William Mann, [“Digital Tokens and Platform Building”](https://doi.org/10.1093/rfs/hhaf015), *Review of Financial Studies* 38(7), 2025.  
**Checked:** 2026-07-13.  
**Source kind:** Peer-reviewed primary formal paper.

- **Supported claim:** A platform-specific token can help overcome a no-trade coordination equilibrium when it is the exclusive medium of exchange, token purchase is costly and publicly observable, participants use forward-induction reasoning, and acquisition communicates credible intent to transact. The model also permits early financial investors to hold tokens and resell them to later users at a higher price.
- **Unsupported inference:** A token creates underlying service value, guarantees adoption, proves that holders will transact, or makes token price/volume a utility measure. The authors explicitly do not model realistic secondary-market price or trading-volume dynamics, and their tractable setup includes one token per player, deterministic play, and restricted strategies.
- **Local bridge:** **MC-E7:** a valid utility-isolation fixture needs observable service exchange with token appreciation, subsidy, and resale motives removed or separately modeled. **MC-E6:** test a coordination loop—expected participation → acquisition → visible commitment → participation—against a rival holding/resale loop.
- **Disanalogy:** ResonantOS contribution is not yet shown to be bilateral platform trade requiring an exclusive exchange token.
- **Population/horizon boundary:** Strategic agents in a stylized repeated peer-to-peer platform; no heterogeneous community motives, off-platform substitutes, liquidity shocks, or empirical post-launch horizon.

### 2. Catalini and Tucker — subsidy availability does not override social sequencing

**Citation:** Christian Catalini and Catherine Tucker, [“Seeding the S-Curve? The Role of Early Adopters in Diffusion”](https://doi.org/10.3386/w22596), NBER Working Paper 22596, 2016; later condensed as *Science* 357(6347), 2017.  
**Checked:** 2026-07-13.  
**Source kind:** Primary randomized field experiment.

- **Supported claim:** All 4,494 MIT undergraduates received access to Bitcoin, but randomized adoption timing changed persistence. Natural early adopters delayed relative to peers were more likely to reject the technology, and their rejection reduced peer adoption. Identity, distinctiveness, and social sequence changed behavior even though broad monetary access was supplied.
- **Unsupported inference:** Bitcoin’s transactional utility was measured, early adopters always improve diffusion, or exclusive access should be engineered. Retaining Bitcoin may represent experimentation, speculation, identity, or use.
- **Local bridge:** **MC-E7:** compare active non-rewarded use after a subsidy with immediate exit/holding, and record peer-network position and adoption sequence. **MC-E6:** test subsidy/timing → early-adopter interpretation → retention or abandonment → peer spillover.
- **Disanalogy:** A one-time Bitcoin distribution to residential university students differs from sustained, heterogeneous DAO contribution.
- **Population/horizon boundary:** MIT undergraduates beginning in 2014; unusually dense peer networks and high technical interest. The result supports local social spillovers, not universal long-run circulation.

### 3. Auer et al. — retail entry followed price, not demonstrated payment utility

**Citation:** Raphael Auer, Giulio Cornelli, Sebastian Doerr, Jon Frost, and Leonardo Gambacorta, [“Crypto Trading and Bitcoin Prices: Evidence from a New Database of Retail Adoption”](https://www.bis.org/publ/work1049.htm), BIS Working Paper 1049, 2022, revised 2023.  
**Checked:** 2026-07-13.  
**Source kind:** Official-institution empirical working paper with downloadable cross-country data.

- **Supported claim:** Using daily crypto-exchange-app activity across 95 countries in 2015–22, the authors find that rising Bitcoin prices precede new-user entry. Two external mining-related shocks are used to support a price-to-entry effect. New entrants skew young and male, and back-of-envelope estimates put initial-investment losses near three quarters of users.
- **Unsupported inference:** Every app user speculated, price caused all adoption, or Bitcoin lacked any utility. App use is an entry/trading proxy, not transaction-level service use.
- **Local bridge:** **MC-E7:** price- and exchange-entry metrics must fail the utility witness unless joined to non-subsidized service transactions and persistence. **MC-E6:** candidate reinforcing loop: price rise → retail entry → attention/demand → price exposure, followed by losses and possible exit pressure.
- **Disanalogy:** Bitcoin exchange participation is not an internal contribution economy and has no Resonant-specific service obligation.
- **Population/horizon boundary:** Exchange-app users, 95 countries, 2015–22 boom-bust episodes; incomplete coverage of self-custody, off-app transfers, and non-investment users.

### 4. Ariely, Bracha, and Meier — public rewards can corrupt the meaning of contribution

**Citation:** Dan Ariely, Anat Bracha, and Stephan Meier, [“Doing Good or Doing Well? Image Motivation and Monetary Incentives in Behaving Prosocially”](https://doi.org/10.1257/aer.99.1.544), *American Economic Review* 99(1), 2009.  
**Checked:** 2026-07-13.  
**Source kind:** Peer-reviewed experimental paper with laboratory and field components.

- **Supported claim:** Prosocial effort is partly image-motivated and therefore sensitive to visibility. Extrinsic monetary incentives can crowd out that image motivation and are more likely to be counterproductive when prosocial action is public than private.
- **Unsupported inference:** All rewards reduce intrinsic motivation, all public recognition is harmful, or token rewards necessarily cause extraction. The result is interaction-specific: visibility changes the meaning of payment.
- **Local bridge:** **MC-E7:** compare rewarded/unrewarded contribution crossed with public/private observability; measure post-reward persistence and contribution quality separately from count. **MC-E6:** reward visibility → inferred motive/reputational value → participation or withdrawal → changed community norm.
- **Disanalogy:** Short experimental charity-effort tasks are not persistent technical, governance, care, or research contributions.
- **Population/horizon boundary:** Experimental participants and a bounded charity exercise; strongest for image-relevant public action, with no evidence here about multi-year community identity.

### 5. Lacetera, Macis, and Slonim — incentives can increase participation while merely relocating it

**Citation:** Nicola Lacetera, Mario Macis, and Robert Slonim, [“Will There Be Blood? Incentives and Displacement Effects in Pro-social Behavior”](https://doi.org/10.1257/pol.4.1.186), *American Economic Journal: Economic Policy* 4(1), 2012.  
**Checked:** 2026-07-13.  
**Source kind:** Peer-reviewed empirical study using nearly 14,000 American Red Cross drives plus a natural field experiment.

- **Supported claim:** Economic incentives increased blood donations, with larger effects for higher-value incentives, without increasing the share of ineligible donors. This directly contradicts the blanket claim that incentives only harm prosocial participation. However, much of the increase came from donors shifting away from nearby non-incentivized drives; local success overstated system-wide gain.
- **Unsupported inference:** Rewards created new donors, durable commitment, more total contribution across time, or safer DAO behavior.
- **Local bridge:** **MC-E7:** measure net-new contributors and retained uncompensated participation, not rewarded-event counts. **MC-E6:** reward → movement toward paid venue/epoch → apparent local growth → depletion elsewhere; this is a bounty-extraction/displacement witness.
- **Disanalogy:** Blood donation has standardized output, medical screening, trusted institutions, and strong altruistic norms unlike open-ended DAO work.
- **Population/horizon boundary:** US Red Cross drives and nearby geographic substitution; evidence concerns event attendance, not multi-year learning, governance, or creative work.

### 6. Aramonte, Huang, and Schrimpf — yield seeking and redemption can form extraction/run loops without real-economy utility

**Citation:** Sirio Aramonte, Wenqian Huang, and Andreas Schrimpf, [“DeFi Risks and the Decentralisation Illusion”](https://www.bis.org/publ/qtrpdf/r_qt2112b.htm), *BIS Quarterly Review*, December 2021.  
**Checked:** 2026-07-13.  
**Source kind:** Official institutional analytical report using protocol/market data available through late 2021; not a peer-reviewed causal study.

- **Supported claim:** At the cutoff, DeFi activity was predominantly speculation, investment, and arbitrage rather than real-economy use. Automated portfolios shifted funds across lending venues to seek the best yields. Leverage, volatile collateral, and momentum behavior could amplify price declines; stablecoin first-mover redemption incentives could trigger runs, collateral fire sales, and loss of networked liquidity.
- **Unsupported inference:** Every yield-seeking participant is “mercenary,” all stablecoins fail, or liquidity movement proves absence of service value. The report does not isolate the causal effect of token rewards or buybacks.
- **Local bridge:** **MC-E7:** isolate service persistence after yield, appreciation, and subsidy are removed. **MC-E6:** model yield differential → capital inflow → collateral/price exposure → adverse shock → liquidation/redemption → price and participation decline.
- **Disanalogy:** Leveraged DeFi lending and redeemable stablecoins differ from an unlaunched internal contribution system.
- **Population/horizon boundary:** Crypto/DeFi protocols through late 2021; a high-leverage boom period, not ordinary communities or later market structures.

## Bounded synthesis

The evidence rejects both simple stories. “Token utility” is not self-proving: coordination requires narrow beliefs and institutional assumptions, subsidized access can fail through social sequencing, and price-led entry can masquerade as adoption. But “incentives only harm” is also false: field evidence shows increased participation, while warning that the increase may be displacement rather than net contribution.

For MC-E7, the minimum comparison is:

`observed activity = service use | subsidy isolated | appreciation isolated | yield isolated | buyback expectation isolated`

For MC-E6, candidate feedbacks must keep distinct: price-attention entry, visible-reward norm shifts, contributor displacement, yield-chasing capital, and redemption/liquidation runs.

## Surplus and unfetched residue

Depth-1 residue includes Cong–Li–Wang’s *Tokenomics: Dynamic Adoption and Valuation*; Sockin–Xiong’s token speculation model; the full Science version and longitudinal transaction records for the MIT experiment; the Iron Finance first-party postmortem cited by the BIS; Compound’s erroneous-reward incident; protocol-level liquidity-mining inflow/outflow datasets; and direct studies of buyback cessation, sink exhaustion, velocity, hoarding, and expectation changes immediately before/after reward-schedule revisions. Those last topics remain open rather than inferred from price or trading activity.
