# Research Workflow

Status: active working route
Owner: ResonantOS economy research owner

## First-Pass Lanes

| Lane | Question | First artifact |
| --- | --- | --- |
| Official-source lane | What does ResonantDAO actually commit to in the whitepaper? | `subtowers/official-whitepaper/` |
| Failure lane | Which DAO, crypto, bounty, treasury, and exploit precedents should scare us first? | `subtowers/failed-dao-crypto/` |
| Science-of-science lane | How do credit, priority, novelty, peer review, and field incentives shape long-run knowledge production? | `subtowers/science-of-science/` |
| Formal-mechanism lane | Which invariants, stochastic audits, scoring rules, and anti-collusion checks are even coherent? | `subtowers/formal-mechanisms/` |
| Socioeconomic lane | Which reward structures train extraction, trust, identity, status seeking, or community care? | `subtowers/socioeconomic-behavior/` |
| Authority lane | Which signals may influence credit without becoming governance authority? | `authority/` and `levels/L2-closure-plan.md` |

## Dialectic

Every proposed mechanism should be read through two lanes:

1. **Builder lane:** what useful contribution flow, trust signal, or coordination
   improvement does this mechanism create?
2. **Adversary lane:** how would a rational actor, clique, bot, speculator, or
   status-maximizer farm it?

If the adversary lane has no concrete answer, the mechanism remains residue.

## First Witness Candidate

Trace one contribution edge through:

```text
observed use
  -> contextual review
  -> bounded credit seed
  -> delayed reward eligibility
  -> no automatic governance authority
  -> audit or appeal path
```

This witness is useful because it tests the repo's central separation: signal can
route attention, reviewed credit can preserve memory, and rewards can remain
bounded without collapsing into authority.
