# Typed Negatives

Status: active negative-control scaffold
Promotion scope: local-research-only

These rejected transitions are part of the fixture package. They are not
evidence that the economy is safe; they are controls that future validation
must preserve.

| Typed negative | Verdict | Covered by |
| --- | --- | --- |
| `observed_signal -> reviewed_credit` without review | rejected | [fixture-positive-observed-use.md](fixture-positive-observed-use.md), [fixture-invisible-work-exclusion.md](fixture-invisible-work-exclusion.md) |
| `reviewed_credit -> reward_effect` | rejected | [fixture-positive-observed-use.md](fixture-positive-observed-use.md), [fixture-authority-handoff-no-effect.md](fixture-authority-handoff-no-effect.md) |
| `reviewed_credit -> authority_effect` | rejected | [fixture-authority-handoff-no-effect.md](fixture-authority-handoff-no-effect.md), [fixture-appeal-recusal.md](fixture-appeal-recusal.md) |
| `attention_route -> governance_effect` | rejected | [fixture-attention-capture.md](fixture-attention-capture.md), [fixture-reviewer-bottleneck.md](fixture-reviewer-bottleneck.md) |
| `fixture_pass -> economy_validated` | rejected | [MATRIX.md](MATRIX.md) |
| `fixture_package -> implementation_readiness` | rejected | [README.md](README.md), [MATRIX.md](MATRIX.md) |
| `reviewer_status -> standing_authority` | rejected | [fixture-reviewer-bottleneck.md](fixture-reviewer-bottleneck.md), [fixture-appeal-recusal.md](fixture-appeal-recusal.md) |

## Blocked Escalation

Any artifact that treats these rejected transitions as accepted behavior must
block before promotion, policy, reward, governance, payout, launch, or mechanism
implementation.
