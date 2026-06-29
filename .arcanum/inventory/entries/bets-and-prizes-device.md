# Inventory Entry: Bets & Prizes — a falsification-first mechanism generator

Status: active (Stage 1 built; no prize closed yet)
Entry type: workflow
Authority posture: non-authority-read-model
Tags: `prizes`, `bets`, `mechanism-generator`, `workflow`, `resonantos-economy`

## Source Refs

- [prizes/README.md](../../../prizes/README.md) — the device, award rule, and its own collapse-test
- [prizes/PRIZE-REGISTER.md](../../../prizes/PRIZE-REGISTER.md) — open prizes (`PRZ-01..03`)
- [prizes/BET-REGISTER.md](../../../prizes/BET-REGISTER.md) — bets (`BET-PRZ-01-a`, open)
- [prizes/SEED.md](../../../prizes/SEED.md) — imported form + source posture
- Imported form from: `SRC-DST-PRIZES` ([PRIZES.md](../../../sources/local-snapshots/domainspec-lean/PRIZES.md)); harvest selectors `dlean-prize-not-achievement`, `dlean-bet-register-boundary` ([harvest/cav2-lean/findings.md](../../../harvest/cav2-lean/findings.md))

## Summary

A standalone research device that turns the tower from a precedent cataloguer into
a generator of **candidate economic mechanisms that have survived attack**. A
**prize** is an open contract for one mechanism target; a **bet** is a falsifiable
candidate staked against it; a prize closes `awarded-candidate` **only when** a bet
survives its named attack lane **and** the authority-collapse check **with** a
concrete workflow witness. Novelty never closes a prize — the award is resilience,
not novelty (the Goodhart trap this repo exists to catch).

Built standalone by owner decision: the upstream `invoke` runtime is **not**
imported (it would re-couple to the Arcanum framework and reverse
`DEC-ECON-STANDALONE-001`). The device reuses machinery the repo already has — the
confirm/deny loop, skeptic gates, attack lanes, and the authority/promotion gate —
so it is portable to any new research harness. Only the *form* was imported, with
source posture preserved; no private snapshot content was copied.

## How It Runs

```text
open PRIZE -> place BETS -> resolve via confirm/deny loop + skeptic gates + attack lanes
  survived (+witness) -> prize awarded-candidate -> authority/promotion route
  killed              -> typed negative -> residue
  none survive        -> prize stays open (honest result)
```

A large multi-mechanism prize may spawn a normal research dispatch (bets = explorer
angles, award collapse-test = skeptic), under the usual human-confirm gate.

## Reusable Selectors

- `bets-and-prizes-device` for the full prize/bet model and award rule.
- `award-equals-survives-attack` for the crux: prize closes on survival + witness, never novelty.
- `prize-as-open-contract` / `bet-as-labeled-conjecture` for the two object shapes.
- `rec-c13-candidate-handoff` for packaging a survived candidate to the domainspec owner route (runs upstream `invoke handoff`; after closure only).

## Residue

Nothing is awarded — `PRZ-01..03` are open; `BET-PRZ-01-a` cannot reach `survived`
until its authority-handoff witness fixture is built. The device is method
infrastructure, not a result: it has generated no validated mechanism.

## Promotion Boundary

This entry and the `prizes/` surface are non-authority read/work models. A closed
prize is a candidate invariant only; it promotes nothing into definitions,
constitutions, token policy, bounty policy, governance authority, anti-gaming
proof, payout, launch readiness, or implementation. A handoff is a deferred
candidate evidence package under `REC-C13`, transferring no authority.
