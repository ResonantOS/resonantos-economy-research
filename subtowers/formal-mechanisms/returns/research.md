# formal-mechanisms — Explorer Returns (verbatim/faithful)

Dispatch: `2026-06-27-econ-tower-formal-mechanisms` · isolated tower · whitepaper-only base · depth-1 search bound (≤6 sources/sub-lane).

---

## Sub-lane 1 — Fritz (structural-invariant)

**Sources (6):** Fritz, *Resource convertibility & ordered commutative monoids* (arXiv 1504.03661) — monotones as conserved-quantity certificates; Guo et al., *Worst-Case VCG Redistribution* (arXiv 2305.11011) — weak budget balance + allocation⊥own-type; ResonantDAO Whitepaper (constraint); Wang et al., *Long-Term Participation Incentive in Participatory Sensing* (arXiv 1501.02480) — recency-weighted reputation (temporal decay handle); Ball et al., *Mechanism Design under Costly Signaling* (arXiv 2302.09168) — signal separable from allocation; budget-balanced ridesharing mechanism (arXiv 2105.11292) — bounded reward pool analogy.

**Typed findings:**
- **F1 Credit conservation** — invariant: ∃ additive monotone M with Σ allocations invariant under every legal earn-transition (allocation = order-morphism into bounded monoid; budget = top element). Whitepaper FIXES $RES stock = 10⁹ but leaves emission/limits/treasury OPEN → monotone exists for *stock* not *flow*. $RCT (reputation, no fixed supply) must carry a SEPARATE monotone, NOT summed into $RES law. Fixture: JSONL ledger replay asserting per-epoch Σ(emitted) ≤ treasury. Lanes 3, 2.
- **F2 Signal separation** — invariant: score S authority-separated iff allocation/authority rule A independent of agent's own report of S (VCG redistribution condition). Whitepaper VIOLATES as written: "governance influence should depend on contribution level, sector reputation, recent activity" → $REX-* feeds authority directly. Invariant UNMET, not just unproven. Fixture: prove governance = f(independently-verified inputs) with reputation only in non-binding routing channel. Lanes 1, 2.
- **F3 Temporal decay** — invariant: R_t = D·(recent) ⊕ P·(permanent); recent decays (half-life λ), permanent is absorbing/non-erasable submonoid. Whitepaper has NO decay formula. Open: does decayed quantity touch $RES claims? If yes, re-enters F1 budget law. Lanes 1, 5.

Cross-cut: F1 & F3 are the same conservation law on two monoids (budget-stock vs contribution-record); F2 is the order-morphism independence condition. None proven by whitepaper; all need replay fixtures.

**Residue:** Coecke-Fritz-Spekkens *A mathematical theory of resources*; Holmström uniqueness theorem; Lieb-Yngvason (cited-not-fetched). Over-quota: *Agent Contracts: Resource-Bounded AI* (arXiv 2601.08815, hierarchical-budget conservation analogy). Evidence Exchange ABSENT from whitepaper fetch → open residue.

---

## Sub-lane 2 — Myerson (strategic / game-theoretic)

**Sources (4 admitted of 6):** Che & Kim, *Optimal Collusion-Proof Auctions* (2008) — exclusion principle; Ferreira/Gafni/Resnick, *IC Collusion-resistance via Posted Prices* (arXiv 2412.20853) — DSIC+1-SCP impossibility, posted-price class; *Collusion-proof Auction via Side Information* (arXiv 2511.12456) — side-info breaks cartels; Narahari *Myerson Optimal Auction* notes — revelation principle, DSIC⊋BIC.

**Typed findings:**
- **F1 Impossibility baseline** — DSIC + 1-SCP achievable only by trivial mechanism, coordinator revenue forced to 0. Can't make truth dominant AND immunize vs single colluding coordinator without zeroing the prize. → custodian/validator who scores AND can side-deal. Lanes 1, 2.
- **F2 Collusion-on-participation** — cartels coordinate who shows up (designated winner, others withdraw); team farming routes credit to one account. Deter via **exclusion principle**: withhold credit from collusive-looking contributor with positive probability. Lanes 1, 3, 4.
- **F3 Exclusion principle (general lever)** — collusion-proof iff cartel not all-inclusive (≥1 honest), OR multiple competing cartels, OR nontrivial no-allocation probability. → randomized credit withholding + guaranteed honest minority + partitioned competing review pools. Lanes 1, 2, 3.
- **F4 Informational asymmetry is the weapon** — complete-info colluders act as one agent (design futile); leverage exists only via mutual asymmetry. → blind/randomized reviewer assignment, hidden pairing, so colluders can't verify each other pre-scoring. Lanes 1, 4.
- **F5 IC-collusion refinement** — requiring the collusion itself be IC+IR exposes many side-deals as self-defeating (higher type exploits low-type cashback; coordinator injects fake bids). → make reciprocal-credit splits internally exploitable (asymmetric splits, validator-injectable noise). Lanes 1, 2, 5.
- **F6 Posted-price = collusion-resistant + IC class** — single-bidder: only IC+collusion-resistant mechanisms are posted prices. → fixed published reward schedule per validated contribution > discretionary/relative scoring (the open whitepaper surface). Lanes 2, 3, 4.
- **F7 Side information defeats cartels** — conditioning payment on signal ≈ independent of valuations makes outcomes unpredictable → colluders lose confidence. → anti-sybil signals (proof-of-life, tenure, attestation) as payment-CONDITIONING side channel, not just membership gate. Lanes 1, 3.
- **F8 DSIC vs BIC** — BIC ("honest in equilibrium") fragile to coordinated misreport; DSIC survives coalitions but costs revenue (F1). → any "fair-in-expectation" scoring must declare DSIC vs BIC. Lanes 1, 2, 5.
- **F9 Sybil = costless all-inclusive cartel (local inference)** — reduces to (a) guarantee non-sybil honest minority + (b) make identity costly. Pure scoring can't deliver; must come from identity/side-info layer (F7). Flagged as analogy/inference, not fetched proof. Lanes 1, 3.

**Residue:** Myerson 1981; Graham-Marshall; McAfee-McMillan; Chung-Shi impossibility; Roughgarden TFM (cited-not-fetched). F9 = local inference, not fetched.

---

## Sub-lane 3 — Beer (stochastic-control)

**Sources (4 + 1 blocked):** PoS share-stability phase transitions (arXiv 2206.02227) — martingale/urn, geometric reward → chaotic centralization; INFORMS *Audit & Remediation under Evasion* (403, residue) — PDMP stochastic control, dynamic cyclic auditing; IRS audit-selection bandit (arXiv 2204.11910) — optimize-and-estimate, stratified random preserves unbiased estimate; *Treasury Stress Tests Your DAO Needs* (Quellin) — 10 scenarios + haircut/runway; HBS randomized enforcement (unfetched).

**Typed findings:**
- **F1 Randomization-for-deterrence** — if any subset predicts it won't be audited, it stops complying; unpredictability defends the audit SIGNAL not payout. → proof-of-life, behavior analysis, open anti-farming rules. Collapse test: inferable audit schedule → deterrence→0 (requisite variety lost). Lanes 1, 4.
- **F2 Optimize-AND-estimate separation** — keep a stratified-random arm (unbiased health estimate) separate from risk-selected arm; collapsing both biases the estimate. → $RCT validation + treasury dashboards. Boundary: measurement loop, NOT authority. Lanes 1, 2.
- **F3 Dynamic cyclic auditing under evasion (PDMP)** — optimal vs adaptive evaders = randomized cyclic audit + cost-sharing; gap grows with scale. → AI-agent accountability, anti-spam. (Source 403, lower confidence.) Lanes 1, 4.
- **F4 Reward-scheme phase transition / chaotic centralization** — constant/decreasing→nonzero reward: large holders stable; **geometric reward → all shares concentrate on one holder** (long-run), even though geometric is finite-horizon optimal. → $RES emission + holder concentration (no caps); Phase-2 yield-target tokens are growth-shaped → exposed. Collapse test: geometric-like emission curve → single-holder capture attractor. Lanes 3, 5.
- **F5 Treasury/liquidity stress thresholds** — 50/80 drawdown, correlation flip 0.8–0.95, depeg-lite 0.97–0.99, liquidity freeze time-to-cash 1h/24h/7d, unlock cliff, revenue collapse 60–90%; runway = (stables + liquidable net haircut − obligations)/burn. → treasury 100% $RES at init = max concentration (~82% of DAO treasuries native-heavy → forced-selling spiral); zero liquidable-haircut buffer → runway structurally undefined until non-native reserves exist. Lanes 3, 5.
- **F6 Emission affordability spiral** — emissions unaffordable vs supply → reflexive sell pressure. → $RES (no final cap) + Phase-2 yield targets. Yield targets are open-loop set-points; without a feedback governor the loop diverges. Lanes 3, 5.

**Residue:** Kiayias, Fanti (geometric optimal at fixed horizon — counterpoint to F4), Horvitz-Thompson (cited-not-fetched). INFORMS 2022.0289 fetch-failed (F3 lower confidence). Blockchain Research Lab "State of DAO Treasuries" (~82% figure, search-only).
