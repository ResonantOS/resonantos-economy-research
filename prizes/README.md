# Bets & Prizes — a falsification-first mechanism generator

Status: active research device
Promotion scope: local-research-only
Owner route: standalone research authority (repository-local research-credibility constitution)

## What This Is

This is the research device that turns the tower from a *precedent cataloguer* into
a *generator of candidate economic mechanisms that have survived attack*.

- A **prize** is an open research contract for one economic-mechanism target. It
  stays open until some candidate mechanism survives a named attack with a
  concrete witness.
- A **bet** is a falsifiable candidate mechanism staked against a prize, carrying
  the one fact that would kill it.
- A prize **closes** only when a bet **survives its collapse-test** — never for
  novelty, never for looking elegant.

It is built to be **portable**: it depends only on a confirm/deny loop, attack
lanes, and an authority gate — all of which this repository already has — so any
new research harness can adopt it without importing a runtime. (It deliberately
does **not** copy the upstream `invoke` runtime; see *Authoring & handoff* below.)

## Imported Form, Not Content

The discipline is adopted as **form only** from harvested precedent, with source
posture preserved — no upstream content or private snapshot text is copied here.
See [SEED.md](SEED.md) for the citations and blocked uses. In one line, from the
DomainSpec Lean prize catalog: *every prize remains an aim until it becomes a
theorem (here: a witnessed survived candidate) or a banked typed negative.*

## The Two Objects

**Prize** — an open contract for an economic-mechanism target:

| field | meaning |
| --- | --- |
| `Prize ID` | `PRZ-NN` |
| Target | the mechanism question, one sentence |
| Evidence state | what is known / unknown now (links to claims, OQs, residue, fixtures) |
| Required witness | the concrete workflow witness any winner must exhibit |
| **Award collapse-test** | the named attack the candidate must survive — gaming/farming path **and** authority-collapse check — with the witness present |
| Allowed / blocked use | a closed prize is a **candidate invariant only**; never deployment, payout, authority, or validation |
| Status | `open` → `contested` → `awarded-candidate` → (authority route) / `void` |

**Bet** — a falsifiable candidate mechanism staked against a prize:

| field | meaning |
| --- | --- |
| `Bet ID` | `BET-PRZ-NN-x` |
| Conjecture | the candidate mechanism |
| Predicted falsifier | the one fact that would kill it (its collapse-test) |
| Attack lane | which [lane](../lanes/ATTACK-LANES.md) it must survive |
| Precedent label | `novel-attempt` / `build-from-owned` / `already-deployed` — *informational, never the award* |
| Resolution | `survived` (+ witness) / `killed` (typed negative) / `open` |

## Award Rule (the crux)

A prize closes `awarded-candidate` **only when** a bet:

1. **survives** its named attack lane (the gaming/farming path), **and**
2. **passes the authority-collapse check** (no path from the mechanism's signal to
   governance power, payout, or launch by itself), **and**
3. **exhibits a concrete workflow witness.**

Novelty never closes a prize — a precedent-clean label is a *byproduct*, not the
award. Rewarding novelty would train novelty-farming, the exact Goodhart failure
this repository exists to catch. A closed prize is a **candidate invariant**,
gated by [authority/promotion-policy.md](../authority/promotion-policy.md); it
promotes nothing on its own.

## How To Run It (wiring — reuse, don't reinvent)

```text
open a PRIZE            (a precise mechanism target + witness + award collapse-test)
  -> place BETS         (candidate mechanisms, each with its falsifier + attack lane)
  -> resolve each bet   (confirm/deny loop + skeptic gates + attack lanes)
        survived (+witness) -> prize -> awarded-candidate -> authority/promotion route
        killed              -> typed negative -> residue (what it would have
                               contributed + the fact that zeroed it)
  -> if no bet survives -> prize stays open (an honest, useful result)
```

- Bet resolution uses the existing **confirm/deny loop** ([GUIDE.md](../GUIDE.md))
  and skeptic gates (precedent / non-vacuity / definitional-soundness).
- A large multi-mechanism prize may spawn a normal **research dispatch**
  ([telemetry/agents/](../telemetry/agents/README.md)): the bets become explorer
  angles and the award collapse-test becomes the skeptic. The dispatch route's
  human-confirmation gate still applies.
- Killed bets bank as typed negatives in
  [levels/L1-residue-map.md](../levels/L1-residue-map.md) /
  [residue/open-residue.md](../residue/open-residue.md).

## The Device's Own Collapse-Test (governance)

Every mechanism needs a collapse-test; this device is one too. It is useless or
unsafe — and each failure is gated:

| failure mode | gate |
| --- | --- |
| A prize is "awarded" with no witness → collapses to a scoreboard. | Award rule hard-requires a concrete witness. |
| A closed prize is read as deployment / payout / authority / validation. | Blocked-use + the authority/promotion route; closed = candidate only. |
| "Bet" drifts into economic staking or authority. | Keep the `dlean-bet-register-boundary` demotion: a bet is a labeled conjecture, never a stake. |
| The prize rewards novelty. | Award = survives-attack; novelty is never the award. |
| A research prize is confused with a deployed economy mechanism. | A prize-as-deployed-economy-mechanism stays blocked under the Phase-2 financial blocker register. |

If any gate cannot hold for a given prize, the prize is `void`, not awarded.

## A Prize Is Not A Bounty

A bounty pays for *completion* and trains bounty-retrieval. A prize here grants
**recognition only for surviving falsification**, and even then only as
**deferred candidate evidence** — it creates no reward entitlement, payout,
reputation finality, or governance weight. Signal, credit, reward, and authority
stay separate (see [authority/AUTHORITY-MODEL.md](../authority/AUTHORITY-MODEL.md)).

## Authoring & Handoff

A survived candidate can be packaged as a **handoff** to the upstream domainspec
owner route — but as a `REC-C13` *deferred candidate evidence package* (names
source IDs, blocked uses, unresolved findings, scrub status, and the independent
owner route; transfers no authority, proves no mechanism). This is the existing
`CTX-ECON-CAV2-RETURN` work item and happens **after** a prize closes, never
before. When that handoff is authored, run the upstream `invoke handoff` from the
domainspec checkout — this repository stays standalone and imports no runtime.

## Files

- [DEFERRED-CONTRIBUTION-BETS-PLAIN-LANGUAGE.md](DEFERRED-CONTRIBUTION-BETS-PLAIN-LANGUAGE.md) — standalone, sendable explanation of the three open deferred-contribution bets and their failure conditions.
- [RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md) — newcomer walkthrough from mechanism proposition to independent bets, witnesses, experiment handoff, and bounded verdicts.
- [RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.validation.md](RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.validation.md) — source map, boundary review, and the still-open newcomer-reader trial.
- [training/](training/README.md) — 90-minute facilitator-led workshop with an approved voice, projected deck, trainer script, participant workbook, and validation record.
- [training/CONTRIBUTION-MEASUREMENT-FAILURE-AND-ALLOCATION.md](training/CONTRIBUTION-MEASUREMENT-FAILURE-AND-ALLOCATION.md) — anonymized workshop-derived guide to contribution families, vector measurement, informative failure, conflict-aware review, qualified lotteries, newcomer access, and allocation-gaming experiments; no mechanism is registered or validated.
- [PRIZE-REGISTER.md](PRIZE-REGISTER.md) — the open prizes.
- [BET-REGISTER.md](BET-REGISTER.md) — bets staked against prizes.
- [SEED.md](SEED.md) — the imported form, with source posture and blocked uses.
