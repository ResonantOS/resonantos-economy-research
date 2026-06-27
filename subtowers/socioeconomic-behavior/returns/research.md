# socioeconomic-behavior — Explorer Returns (verbatim/faithful)

Dispatch: `2026-06-27-econ-tower-socioeconomic-behavior` · isolated tower · whitepaper-only base · depth-1 search bound (≤6 sources/sub-lane). 3 sub-lanes.

---

## Sub-lane 1 — Kahneman (cognitive-behavioral)

**Sources (6):** Kahneman, Knetsch & Thaler, *Fairness as a Constraint on Profit Seeking* (1986, primary) — dual-entitlement, reference transaction (existing-worker wage cut 83% unfair vs 27% for replacement); *Fairness and randomness in decision-making* (Synthese 2025) — when deterministic thresholds are less fair than weighted lotteries; *Loss Aversion* (BE.com, 403 partial); Starke et al., *Fairness perceptions of algorithmic decision-making* (Big Data & Society 2022); *Loss aversion or lack of trust* (JBEE 2023); *Fairness in Social Psychology* (procedural>distributive).

**Typed findings:**
- **F1 Reference-point entitlement (dual entitlement)** — contributors entitle to terms of most recent transaction; cutting reads as exploitation (existing 83% unfair vs new-joiner 27%). → $RES emission cuts, $RCT recalibration, retroactive epoch adjustments. Witness: A/B vignette, fairness gap >40pp = hazard. Lanes 3, 1.
- **F2 Demand-exploitation unfairness** — raising the bar to capture a demand shift judged unfair; cost-shock framing accepted. → $RES throttling under participation spikes; Phase-2 fee levers. Witness: cost-frame vs demand-frame fairness delta. Lanes 3, 5.
- **F3 Randomness/opacity legitimacy is conditional** — people dislike randomization even when "fair," esp. when a claimant has stronger claim; legitimacy needs arbitrary criteria + proportional chances + stable public rules. → bounty/prize random rewards; opaque $RCT selection. Witness: threshold vs weighted-lottery vs flat-random, measure legitimacy when high-claim contributor loses. Lanes 4, 2.
- **F4 Loss aversion distorts contribution** — losses ~2x gains; held credit clawback/decay/rank-drop felt as outsized loss → disengagement, safe-task hoarding. → $RCT decay, leaderboard demotions, use-it-or-lose-it emission. Witness: pre/post contribution around decay events; loss/gain sensitivity ratio >1.5. Lanes 1, 2.
- **F5 Framing effects on legitimacy** — identical reward judged differently by frame; process/explanation > outcome; unexplained opaque allocation unfair even when favorable. → recognition comms, bounty framing, Phase-2 messaging. Witness: hold payout constant, vary explanation/frame; >15pp legitimacy move = manipulability flag. Lanes 4, 1, 5.

**Residue:** Akerlof, Okun, Broome (weighted-lottery), Tversky-Kahneman 1979 (cited-not-fetched). KKT read verbatim (high confidence); loss-aversion encyclopedia 403 (supporting only).

---

## Sub-lane 2 — Bowles (social-preference / experimental)

**Sources (6, 2 blocked):** Bowles, *Policies Designed for Self-Interested Citizens May Undermine the Moral Sentiments* (Science 2008, lens anchor) — 4 crowding channels; Bowles *Moral Economy* (2016, via review) — Haifa daycare-fine, Boston Fire; *Incentives crowd out voluntary cooperation* (gift-exchange, 429 residue); Barclay & Willer, *Partner choice creates competitive altruism* (2007, fetched); Bellemare & Shearer, *Gift Exchange within a Firm* (IZA 2007, fetched); *Institutions, motivations and public goods* (JEBO, 403 residue).

**Typed findings:**
- **F1 Sphere change / price-as-permission** — Haifa daycare fine → late pickups ~doubled and stayed high AFTER removal (hysteresis); Boston Fire cap → universal max. Pricing reframes stewardship as transaction; crowding-out PERSISTENT. → premise that emissions can attach to "everything." Witness: within-subject A→B→A' on unpaid contribution; fails if A'<A. Lanes 3, 1.
- **F2 Incentive-as-distrust signal** — explicit incentive contracts crowd out reciprocity; "I'm monitoring you" reduces effort below no-control baseline. → slashing, conditional escrow, tight bounty gates read as distrust. Witness: trust-frame vs monitored-contract at equal pay. Lanes 4, 1.
- **F3 Reputation → status game; collapses when unobserved** — Barclay-Willer: contributions rose when observed (p=0.001) + partner choice (p=0.021), highest contributor chosen 17/18; BUT post-selection median = 0 all conditions; receivers discount signals when stakes highest. → visible reputation/leaderboards convert stewardship to status competition; collapses when unwatched; gameable. Witness: observed vs anonymized contribution; post-"win" decay; receiver discounting. Lanes 1, 2, 4.
- **F4 Reciprocity works but is relationship-conditional** — Bellemare-Shearer: unconditional wage gift raised productivity, strongest in long-term relationships. → anonymous one-shot reward forfeits reciprocity surplus. Witness: unconditional grant uplift, long-tenure vs new cohort. Lanes 3, 5.
- **F5 Endogenous preferences / long-run civic erosion** — incentives adversely shape evolution of civic preferences; institutions create self-interested actors. → even small short-run crowding can selectively cultivate self-interest + drive out intrinsics (composition shift), invisible to single-period A/B. Witness: longitudinal zero-reward contribution share across epochs vs control. Lanes 3, 5, 2.

**Residue:** Gneezy-Rustichini "A Fine is a Price", Milinski-Semmann, Frey-Jegen (cited-not-fetched). Fehr-Falk gift-exchange (429), JEBO institutions (403) — discovered, blocked. Open inference: no source tested crowding-out in a tokenized-DAO environment → external validity is OPEN.

---

## Sub-lane 3 — Hirschman (exit-voice / institutional-response)

**Sources (6):** Hirschman, *Exit, Voice, and Loyalty* (1970, base text); Frey & Schneider, *Effective Voice: Beyond Exit and Affect in Online Communities* (arXiv 2009.12470) — effective (binding) vs affective (expressive) voice; Heath, *Burnout in OSS Communities* (2025) — 73% burnout, 60% considered leaving; *Motivation Crowding Theory* (Frey/Jegen) — controlling vs recognition framing; *Overjustification effect* (Deci/Lepper); *Predicting OSS Contributor Turnover from Value Discussions* (ICSE 2024) — respectfulness-themed discussion predicts leaving; social-power discussion predicts better outcomes.

**Typed findings:**
- **F1 Identity split via reward-controllingness (mercenary capture)** — $RES + Phase-2 yield reframe intrinsic work as paid; locus shifts external → disengage if payout<effort. → vague $RES emission attaching tokens to formerly-intrinsic acts. Witness: voluntary uncompensated activity before vs after first $RES payout; declining (non-rewarded/rewarded) ratio = mercenary drift. Lanes 3, 5, 1.
- **F2 Exit-by-default from paucity of effective voice** — bootstrap custodian offers affective (venting) not effective (binding) voice → contributors leave instead of repairing. → custodian-led bootstrap, no appeal process, undefined thresholds. Witness: effective-voice ratio vs 90-day retention per sector. Lanes 1, 2.
- **F3 Trust decay from opaque/subjective credit** — loyalty needs perceived meaningful influence; "human trust state" scoring + undefined $RCT→level → perceived favoritism → exit threshold drops base-wide. → no published formula. Witness: publish $RCT derivation; perceived-fairness scale at credit events vs 60-day decay; dispute-rate per 100 credit events. Lanes 2, 1.
- **F4 Review fatigue / surveillance-driven burnout** — governance load + fraud-control surveillance raise job demandingness (burnout driver); review labor unrewarded; 73% burnout predicts quitting. → AI-assisted + custodian review unbounded; no rotation/load cap. Witness: validation actions/reviewer/week + 3-item burnout survey; 80th-pct load → 90-day exit hazard; recognition gap. Lanes 1, 4, 2.
- **F5 Respectfulness-discourse as turnover early-warning** — rising respectfulness-themed discussion predicts more leaving/fewer joining; social-power discussion predicts better outcomes. → $REX-COM onboarding/moderation; no discourse-health metric. Witness: NLP-classify threads; test respectfulness-share Granger-leads next-quarter exit. Lanes 1, 2.
- **F6 Bounty/prize crowding-out & overjustification of creative/educational work** — bounties attach expected reward to intrinsic creative/Academy work → post-cycle baseline may fall BELOW pre-bounty; invites mercenary inflow that exits when bounties stop. → marketplace/Academy paths, no framing-as-recognition vs framing-as-payment policy. Witness: randomized bounty subset; compare post-bounty uncompensated output treated vs control. Lanes 4, 3, 5.

**Residue:** Hirschman internal pages, Arnstein 1969 ladder, Seering 2019, JetBrains 2023 / Tidelift 2024 surveys, Deci/Lepper primaries (cited-not-fetched). ICSE 2024 full text (cross-host redirect, abstract only).
