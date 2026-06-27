# Rule Matrix

Status: active fixture coverage matrix
Promotion scope: local-research-only

This matrix maps contribution-edge safety rules to fixture coverage. It is a
coverage scaffold, not a validation report.

| Rule | Fixture coverage | Check shape | Failure mode |
| --- | --- | --- | --- |
| Signal is not credit | [fixture-positive-observed-use.md](fixture-positive-observed-use.md), [fixture-invisible-work-exclusion.md](fixture-invisible-work-exclusion.md) | Observed signal alone never creates reviewed credit. | Automatic credit from raw observation. |
| Credit is not reward | [fixture-positive-observed-use.md](fixture-positive-observed-use.md), [fixture-authority-handoff-no-effect.md](fixture-authority-handoff-no-effect.md) | Reviewed credit keeps `reward_effect: none`. | Credit becomes payout, entitlement, token, or reward claim. |
| Credit is not authority | [fixture-authority-handoff-no-effect.md](fixture-authority-handoff-no-effect.md), [fixture-appeal-recusal.md](fixture-appeal-recusal.md) | Reviewed credit keeps `authority_effect: none`. | Credit grants owner authority, PromotionRecord, or governance weight. |
| Attention is not authority | [fixture-attention-capture.md](fixture-attention-capture.md), [fixture-reviewer-bottleneck.md](fixture-reviewer-bottleneck.md) | Attention routing never changes owner authority. | Visibility becomes agenda control or de facto authority. |
| Reviewer route is governable | [fixture-reviewer-bottleneck.md](fixture-reviewer-bottleneck.md), [fixture-appeal-recusal.md](fixture-appeal-recusal.md) | Reviewer overload, conflict, recusal, appeal, expiry, and cooldown are visible states. | Reviewer status becomes standing authority or silent approval. |
| Invisible work is not erased | [fixture-invisible-work-exclusion.md](fixture-invisible-work-exclusion.md) | Absence of observed signal creates residue and owner route, not zero-value proof. | Invisible work is assigned automatic zero credit or forced public exposure. |

## Coverage Verdict

Current coverage is `research-pass` for fixture-scaffold completeness. It is
not economy validation, implementation readiness, token policy, bounty policy,
governance rule, payout rule, launch readiness, anti-gaming proof, or authority
promotion.
