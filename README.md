# ResonantOS Economy Resilience Research Tower

Status: active research repository
Promotion scope: local-research-only
Started: 2026-06-26
Owner route: standalone research authority; CyberAlchemy v2 method authority
Repository visibility: private/internal until public-export scrub

## What This Repository Is

This repository is a governed research tower and continuation surface for the
economy around ResonantOS / ResonantDAO. It is designed so researchers can
consult the evidence, continue the work, and add new source-backed findings
without accidentally turning early research into token policy, bounty policy,
governance authority, or launch readiness.

The work posture is deliberately suspicious of attractive mechanisms. A reward
system that looks elegant can still train bounty harvesting, clique behavior,
status games, metric farming, or authority-by-score. The tower exists to make
those failures visible before any mechanism becomes operational.

Use [GUIDE.md](GUIDE.md) as the working guide for how to move through the
repository, and [CONTRIBUTING.md](CONTRIBUTING.md) for the continuation protocol.

## Current State

As of 2026-06-27, this repository is ready for internal consultation and
continued research, not implementation or policy adoption.

- The ResonantDAO whitepaper has a primary-source scaffold in
  [subtowers/official-whitepaper/](subtowers/official-whitepaper/README.md).
- CyberAlchemy v2 and DomainSpec Lean local snapshots are recorded in
  [sources/local-snapshots/](sources/local-snapshots/README.md) and
  [sources/source-records.md](sources/source-records.md).
- The CAv2/Lean and CAv2 authority/lifecycle harvests are recorded as local
  research findings in [harvest/cav2-lean/](harvest/cav2-lean/README.md) and
  [harvest/cav2-authority-lifecycle/findings.md](harvest/cav2-authority-lifecycle/findings.md).
- The four external evidence subtowers ran as isolated, human-confirmed tower
  dispatches (closed `resolved`, 2026-06-27). Each has verbatim explorer
  returns, an in-corpus skeptic pass, and reconciled findings under
  `subtowers/*/returns/`, registered as `SYN-ECON-TOWER-*`. Every explorer ran
  whitepaper-only and bounded (depth-1, ≤6 sources/lane) so the research never
  tripped into recursive paper-chasing.
- The first validation scaffold, contribution-edge fixtures, exists at
  [validation/contribution-edge-fixtures/](validation/contribution-edge-fixtures/README.md).
- The cross-corpus program synthesis has run (closed `resolved`, auditor
  ACCEPT): [dispatch/economy-synthesis/findings.md](dispatch/economy-synthesis/findings.md)
  (`SYN-ECON-PROGRAM-FINDINGS`) reconciles the four towers by attack-lane,
  survived a Popper/Quine/Meadows robot-talks round, and hands off a ranked
  **fixture & constitution backlog** — four decidable-now fixtures plus an
  upstream costly-identity (Douceur) gate. Nothing in it promotes token, bounty,
  governance, payout, launch, authority, or implementation readiness; the four
  fixtures are validation-ready, not validated, and still require the authority
  route to advance.

## Continue Research From Here

1. Start with [GUIDE.md](GUIDE.md), [AGENTS.md](AGENTS.md), and
   [.arcanum/inventory/index.md](.arcanum/inventory/index.md).
2. For mechanism work, begin with the program synthesis
   [findings.md](dispatch/economy-synthesis/findings.md) fixture & constitution
   backlog (it ranks what to build and names each result's owner), then the
   contribution-edge fixture package and the
   [implementation boundary plan](development/implementation-boundary-plan.md).
3. For external evidence, work inside the relevant subtower and update
   [sources/source-records.md](sources/source-records.md) plus
   [claims/SOURCE-CLAIM-LEDGER.md](claims/SOURCE-CLAIM-LEDGER.md) before relying
   on a claim.
4. For subagent research, use the dispatch route and human confirmation gate in
   [telemetry/agents/](telemetry/agents/README.md).
5. For any promotion toward policy, implementation, token, bounty, payout,
   governance, launch, or authority effects, use
   [authority/promotion-policy.md](authority/promotion-policy.md).

## Source Boundary

- Primary source: `https://resonantdao.com/whitepaper/`, fetched 2026-06-26 from the local environment, HTTP 200, page title `Whitepaper | ResonantDAO`, whitepaper metadata version `0.5`, draft, dated `2026-05-07`.
- Local source lineage: copied snapshots in [sources/local-snapshots/](sources/local-snapshots/README.md), including CyberAlchemy Evidence Exchange, CAv2 authority/promotion sources, and selected DomainSpec Lean formalization files.
- Snapshot provenance: [sources/local-snapshots/README.md](sources/local-snapshots/README.md) preserves original paths and checksums, but the copied snapshots are the operative sources for this standalone repository.
- Repository policy: [AGENTS.md](AGENTS.md), [authority/README.md](authority/README.md), and [ops/research-workflow.md](ops/research-workflow.md).
- Local agent runtime: [.agents/skills/README.md](.agents/skills/README.md), [.arcanum/inventory/README.md](.arcanum/inventory/README.md), and [telemetry/agents/README.md](telemetry/agents/README.md).
- Non-goal: no token policy, bounty policy, governance rule, spec, runtime contract, or implementation is promoted by this tower.
- Public export posture: the repository is not public-export-safe as a whole.
  Local snapshots and telemetry preserve provenance and operator context. Keep
  the GitHub repository private/internal until a dedicated scrub produces a
  public derivative.

## Research Question

How can ResonantOS / ResonantDAO design an economy that rewards real contribution, grows long-term community capacity, and resists the predictable failure mode where actors optimize the visible reward mechanism instead of the community's underlying purpose?

## Working Thesis

The economy should be attacked as a coupled system:

1. The social layer asks which participant mentalities the mechanism trains.
2. The algorithmic layer asks which behaviors the reward and randomness model makes profitable.
3. The authority layer asks which signals are allowed to influence governance, credit, and launch gates without becoming authority by accident.

## Working Posture

- Treat every mechanism as a training environment for future behavior.
- Separate signal, credit, reward, and authority before evaluating any design.
- Ask what a rational actor, clique, bot, speculator, or exhausted maintainer
  would optimize.
- Prefer concrete workflow witnesses over abstract incentive claims.
- Keep randomness bounded: it may protect audits and sampling, but it must not
  make fairness arbitrary.
- Keep unresolved questions visible as residue instead of smoothing them into
  confident prose.

## Reading Order

1. [GUIDE.md](GUIDE.md)
2. [AGENTS.md](AGENTS.md)
3. [CONTRIBUTING.md](CONTRIBUTING.md)
4. [sources/source-records.md](sources/source-records.md)
5. [authority/README.md](authority/README.md)
6. [TOWER.md](TOWER.md)
7. [levels/L0-corpus.md](levels/L0-corpus.md)
8. [NOTATION.md](NOTATION.md)
9. [claims/SOURCE-CLAIM-LEDGER.md](claims/SOURCE-CLAIM-LEDGER.md)
10. [harvest/cav2-authority-lifecycle/findings.md](harvest/cav2-authority-lifecycle/findings.md)
11. [development/implementation-boundary-plan.md](development/implementation-boundary-plan.md)
12. [validation/contribution-edge-fixtures/README.md](validation/contribution-edge-fixtures/README.md)
13. [lanes/TWO-LANE-DIALECTICS.md](lanes/TWO-LANE-DIALECTICS.md)
14. [lanes/ATTACK-LANES.md](lanes/ATTACK-LANES.md)
15. [RELATED-FRAMEWORK-CROSSWALK.md](RELATED-FRAMEWORK-CROSSWALK.md)
16. [levels/L1-residue-map.md](levels/L1-residue-map.md)
17. [levels/L2-closure-plan.md](levels/L2-closure-plan.md)
18. [FINAL-LEARNING-PACK.md](FINAL-LEARNING-PACK.md)

## Subtowers

| Subtower | Role | Status |
| --- | --- | --- |
| [official-whitepaper](subtowers/official-whitepaper/README.md) | Primary-source-only ResonantDAO tower. | scaffolded |
| [failed-dao-crypto](subtowers/failed-dao-crypto/README.md) | Failed DAO, crypto economy, bounty, exploit, and algorithmic-token precedent tower. | first-pass returns present |
| [science-of-science](subtowers/science-of-science/README.md) | Scientometrics, bibliometrics, and science-of-science tower. | first-pass returns present |
| [formal-mechanisms](subtowers/formal-mechanisms/README.md) | Mechanism design, scoring, randomization, audits, and invariants tower. | first-pass returns present |
| [socioeconomic-behavior](subtowers/socioeconomic-behavior/README.md) | Socioeconomic mentalities and behavioral economics tower. | first-pass returns present |

## Dispatch Gate

Research dispatches live under [dispatch/](dispatch/) and
[telemetry/agents/subagents-dispatch.yaml](telemetry/agents/subagents-dispatch.yaml).
Earlier harvest and subtower work produced local research artifacts, but any
new fan-out, synthesis, or review still requires the narrow dispatch route,
human confirmation, deterministic ledger append, closeout, and inventory update.

No dispatch output can promote token policy, bounty policy, governance rule,
payout rule, launch readiness, authority transfer, implementation readiness, or
economy validation by itself.

## Open Questions

### OQ-1. What is the first economy invariant?

Candidate: reward signals may route attention and credit, but they must not promote authority, human governance power, or Phase 2 launch readiness by themselves. Status: OPEN.

### OQ-2. What is the first workflow witness?

Candidate: one contribution edge moves from host-observed use to review action to bounded credit seed without changing authority. Status: OPEN.

### OQ-3. What does "randomness" protect?

Candidate: randomness should make gaming expensive and audit selection unpredictable, not make rewards feel arbitrary. Status: OPEN.
