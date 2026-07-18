# ResonantOS Economy Resilience Research Tower

Status: active research repository
Promotion scope: local-research-only
Started: 2026-06-26
Owner route: standalone research authority (repository-local research-credibility constitution)
Repository visibility: private/internal until public-export scrub

## Start With A Story

A community gathering goes well. Everyone remembers the speaker. Fewer people
notice who found an accessible venue, checked dietary needs, called members who
had stopped attending, or repaired the schedule when a volunteer cancelled.

Someone proposes: “Let’s recognize the people who do the invisible work.” It
sounds fair. But what should count as evidence? Could people manufacture the
right-looking activity? Would recognition help the community, or create a new
expectation of payment and influence? What result would make us abandon the
idea?

This repository exists for that moment. It is a **research wind tunnel**, not an
economy factory: ideas about recognition and rewards meet source evidence, hard
examples, rehearsals with known answers, and explicit ways to fail before anyone
treats them as policy.

The event story already contains separate questions. Whether evidence improves
recognition is one **bet**. Whether recognition language creates entitlement is
another. Evidence for one cannot silently answer the other.

| When the story needs... | The repository calls it... | Plain meaning |
| --- | --- | --- |
| A finishable research question | [Prize](prizes/README.md#the-two-objects) | An open target with a required witness—not a bag of money. |
| A claim that can lose | [Bet](prizes/README.md#the-two-objects) | A prediction card: what we compare, what we expect to see, and what would prove the idea wrong—not a financial wager. |
| A test design | [Experiment proposal](.agents/skills/domainspec-experiment-dispatch/SKILL.md#criterion-freeze--topology--immutability-never-a-column) | One question and the rules for answering it, agreed before anyone sees the result. |
| Known-answer rehearsal cases | [Fixtures](validation/contribution-edge-fixtures/README.md) | Made-up records whose answers we already know, used to check whether the evidence machinery behaves as promised. |
| An observation | Separately approved run | A later test with people or real events. Passing the rehearsal does not authorize this step. |
| A result for this test | Verdict | What the agreed rule says about this one run—not universal truth or permission to deploy. |

A fixture is like a crash-test dummy for the evidence pipeline. It can show that
a record with missing information is rejected or that a high activity count
does not silently create credit or decision-making power. It cannot show that
an idea helps real people. That requires a separately approved run.

## What This Repository Can Say Already

- Seeing activity does not prove that someone made a useful contribution.
- Even a reviewed contribution record does not create payment or
  decision-making power.
- Passing the made-up rehearsal cases only shows that records and calculations
  were handled as promised. It says nothing yet about an economy or community.
- Even when an experiment meets its target, the result applies only to the
  people, time period, and test rules that were actually used. It is not policy
  permission.
- The repository currently knows several failure boundaries more confidently
  than it knows which mechanisms will work.

Current bets, prizes, killed claims, and next work change over time. Inspect them
through the [current-state projection](maps/current-state/README.md), the
[live registers](prizes/README.md#files), and the inventory rather than copying
their counts into an introduction.

## Choose Your Next Door

1. **Understand the lifecycle through different stories:** read
   [Experiments, In Everyday Language](prizes/EXPERIMENT-EXAMPLES.md), then use the
   [full walkthrough](prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md) for
   the complete procedure.
2. **Create a first experiment:** follow the owner-linked assembly in the
   [example gallery](prizes/EXPERIMENT-EXAMPLES.md#build-your-first-experiment),
   then use [GUIDE.md](GUIDE.md) for the working route.
3. **Inspect what the repository actually knows:** start from the
   [inventory Start Here path](.arcanum/inventory/index.md) and query the
   [current evidence map](maps/current-state/README.md).

The inventory remains the **sole canonical Start Here path**. This front porch
is candidate teaching material: its mechanics and links are checked, but no
independent newcomer has yet passed the held-out comprehension witness.

This repository is therefore a governed research harness you can interrogate,
not just read. Working through conversation with an agent, you can ask what the
evidence says, ask it to **confirm** a claim against recorded sources, or ask it
to **try to deny** the claim by finding the collapse-test, counterexample, or
prior owner.

Before writing, also read [AGENTS.md](AGENTS.md) for the non-negotiable checks
and [CONTRIBUTING.md](CONTRIBUTING.md) for the continuation protocol.

## The Idea: Towers Of Evidence

The repository is organized as **towers**. A tower is a bounded, isolated body of
evidence built around one question or one corpus. It is *local research only* — it
collects sources, separates what a source actually says from what we infer, and
proposes mechanisms, invariants, and risk gates without ever turning those into
policy.

Each subtower runs the same small pipeline, kept deliberately bounded so the
research never trips into recursive paper-chasing:

```text
explorers  ->  skeptic  ->  reconciled findings
(read sources    (attack the      (a cited synthesis with
 under tensioned  candidate         source kinds, residue,
 angles)          picture)          and a verdict)
```

- **Explorers** read the corpus under *different, tensioned angles* so no single
  bias goes unchallenged.
- **A skeptic** attacks the candidate picture: is it already owned by prior art?
  Is there a concrete witness, or is it vacuous? Does it collapse to something
  already named?
- **Reconciled findings** record what survived, every load-bearing claim cited to
  the source it rests on, with unresolved questions kept visible as residue.

The four external evidence subtowers ran as isolated, human-confirmed dispatches
and closed `resolved` (2026-06-27), each whitepaper-bounded and depth-limited. A
cross-corpus synthesis then reconciled them into a ranked **fixture &
constitution backlog**.

## How The Towers Work Together

A source-first spine connects the towers:

| Layer | What it holds | File |
| --- | --- | --- |
| **L0 corpus** | What is actually being researched: the official whitepaper plus harvested external method/formalization precedent, kept as supporting-source record. | [levels/L0-corpus.md](levels/L0-corpus.md) |
| **L1 residue map** | Failure modes, incentive traps, authority risks, and missing witnesses — uncertainty kept visible. | [levels/L1-residue-map.md](levels/L1-residue-map.md) |
| **L2 closure plan** | Subtowers, dispatch route, gates, and next moves — how to attack without over-promoting. | [levels/L2-closure-plan.md](levels/L2-closure-plan.md) |

| Subtower | Role | Status |
| --- | --- | --- |
| [official-whitepaper](subtowers/official-whitepaper/README.md) | Primary-source-only ResonantDAO tower. | scaffolded |
| [failed-dao-crypto](subtowers/failed-dao-crypto/README.md) | Failed DAO, crypto economy, bounty, exploit, and algorithmic-token precedent tower. | first-pass returns present |
| [science-of-science](subtowers/science-of-science/README.md) | Scientometrics, bibliometrics, and science-of-science tower. | first-pass returns present |
| [formal-mechanisms](subtowers/formal-mechanisms/README.md) | Mechanism design, scoring, randomization, audits, and invariants tower. | first-pass returns present |
| [socioeconomic-behavior](subtowers/socioeconomic-behavior/README.md) | Socioeconomic mentalities and behavioral economics tower. | first-pass returns present |
| [contribution-mechanism](subtowers/contribution-mechanism/README.md) | Cross-cutting tower for contribution types, dimensions, deferred investment/realization language, failure, review integrity, allocation, bets, and Goodhart pressure. | scaffolded; research and review dispatches proposed, unregistered |
| [monetary-circulation](subtowers/monetary-circulation/README.md) | Program-extension tower for supply/accounting, typed schedules, holdings/access, obligation coverage, exit capacity, service use, and typed relations. | bounded research closed; auditor ACCEPT; surviving local handoffs `unrunnable` |

## Repository Components

Everything here serves the same loop: evidence in, attacked, kept honest, never
silently promoted. The main components:

| Component | What it is for |
| --- | --- |
| [subtowers/](subtowers/) | The isolated evidence towers — the core research surface. |
| [sources/](sources/source-records.md) | Source records and local provenance snapshots (the snapshots are local-only / gitignored). |
| [claims/](claims/SOURCE-CLAIM-LEDGER.md) | The source-claim ledger: what each source actually supports, by source kind. |
| [definitions/](definitions/DEFINITIONS.md), [glossary/](glossary/GLOSSARY.md), [NOTATION.md](NOTATION.md) | Controlled vocabulary and load-bearing-term tracking, so terms can't drift. |
| [levels/](levels/) | The L0/L1/L2 source-first spine (corpus, residue, closure). |
| [lanes/](lanes/ATTACK-LANES.md) | Attack lanes and two-lane dialectics: how a mechanism gets stress-tested. |
| [authority/](authority/AUTHORITY-MODEL.md) | What the repo is *allowed to claim* — authority model, promotion policy, constitutions. |
| [harvest/](harvest/README.md) | Completed method/formalization-precedent harvests, kept as research record. |
| [development/](development/implementation-boundary-plan.md) | What a finding can and cannot become (the implementation-boundary plans). |
| [validation/](validation/README.md) | The first validation scaffold (review-only; does not validate the economy) — contribution-edge fixtures. |
| [prizes/](prizes/README.md) | The bets & prizes device — generates candidate economic mechanisms that have survived attack (a prize closes only on a survived bet + witness, never novelty). |
| [dispatch/](dispatch/) + [telemetry/agents/](telemetry/agents/README.md) | Subagent fan-out proposals and the append-only dispatch ledger. |
| [.arcanum/inventory/](.arcanum/inventory/index.md) | The inventory: a read-model index over everything, with a **Start Here** path. |
| [reviews/](reviews/) + [residue/](residue/open-residue.md) + [gates/](gates/closure-gates.md) | Red-team review records, open residue, and closure gates. |
| [distills/](distills/DISTILLED-KNOWLEDGE.md) + [FINAL-LEARNING-PACK.md](FINAL-LEARNING-PACK.md) | Distilled, reusable takeaways. |
| [CRAFT.md](CRAFT.md) + [.craft/ledger.yml](.craft/ledger.yml) | The structured work ledger (stages, gates, blockers, decisions, gaps). |
| [.agents/skills/](.agents/skills/README.md) + [ops/subagents-strategy/](ops/subagents-strategy/README.md) | The dispatch skill machinery the harness runs on. |
| [tools/](tools/) | Deterministic checkers (e.g. load-bearing-term tracking). |

## How Research Is Done

Evidence only moves forward one careful step at a time, and no step is automatic:

```text
source evidence
  -> source record          (what it is, what kind, what it may and may not be used for)
  -> source-claim ledger    (the claim, kept at or below the evidence)
  -> subtower synthesis     (reconciled across tensioned angles, attacked by a skeptic)
  -> candidate invariant / workflow witness
  -> validation request     (a concrete fixture, not a proof)
  -> external owner decision (the only path to policy, token, governance, or launch)
```

A candidate can be blocked, demoted, split, or sent back to corpus work at any
step. Promoting past a failed step is not allowed. New fan-out research uses the
narrow **dispatch route** ([dispatch/](dispatch/),
[telemetry/agents/subagents-dispatch.yaml](telemetry/agents/subagents-dispatch.yaml)):
it requires human confirmation, a deterministic ledger append, closeout, and an
inventory update — and no dispatch output can promote token policy, bounty
policy, governance rule, payout rule, launch readiness, authority transfer, or
economy validation by itself.

## Querying The Tower By Conversation

This is the new way of working with the repository. **Open an agent session in
this repository root (e.g. the Claude Code harness), then ask** — it reads the
inventory and source records as context. You do not have to read thirty files to
understand where the evidence stands. You **talk to an agent** and tell it what
you want to understand. The agent grounds its answer in the recorded
evidence — naming the source and its kind — and then you can push it in two
directions:

1. **State what you want to understand.** e.g. "Is credit-before-money actually a
   safe first move for this economy?"
2. **Ask the agent to confirm.** It finds the supporting evidence, names the
   *source kind* (primary source, related source, analogy, local inference, or
   open residue), points to the workflow witness if one exists, and tells you how
   strongly the claim is grounded — not just that it sounds right.
3. **Ask the agent to try to deny it.** It runs the claim's collapse-test, sends
   it through the relevant attack lane and a skeptic gate, and looks for the prior
   art that already owns it. If the claim survives the attack, it is stronger. If
   it dies, record both the useful thing it promised and the exact fact that made
   that contribution disappear. The repository calls this record a *typed
   negative*.
4. **If it neither confirms nor denies cleanly, it stays residue.** Unresolved
   questions are kept visible, with a next check, instead of being smoothed into
   confident prose.

The harness is built to do the unglamorous half of that conversation for you:
demote attractive-but-unproven claims, refuse to let a score become authority,
and show exactly where the evidence actually stands. Start a query from the
[inventory **Start Here** path](.arcanum/inventory/index.md), then ask.

See **[QUERYING.md](QUERYING.md)** for how to ask well, in plain language — what a
good question looks like, a loose-vs-sharp contrast, and six worked examples (check
a claim, break a bounty, find prior work, propose a fix, pin down a term, find
where to start).

## Framing

Every artifact is read through the same lens — **source before mechanism**,
**signal is not authority**, **rewards train behavior**, **witness before
confidence**, **residue stays visible**, **claim ≤ evidence**, and **load-bearing
terms are tracked**. The canonical statement of these habits lives in
[GUIDE.md](GUIDE.md#framing); they are not re-listed here, so the two cannot
drift.

They are enforced locally by the
[research-credibility constitution](authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
and the [authority model](authority/AUTHORITY-MODEL.md) — the repository's own
method authority, not an external framework's.

## Current State

As of 2026-06-27, this repository is ready for internal consultation and
continued research, not implementation or policy adoption.

- The ResonantDAO whitepaper has a primary-source scaffold in
  [subtowers/official-whitepaper/](subtowers/official-whitepaper/README.md).
- External method and formalization precedent (CyberAlchemy v2 evidence-exchange
  and DomainSpec Lean formalization) was **harvested into local findings** and is
  kept as supporting-source record — not as authority — in
  [harvest/cav2-lean/](harvest/cav2-lean/README.md) and
  [harvest/cav2-authority-lifecycle/findings.md](harvest/cav2-authority-lifecycle/findings.md),
  with provenance in [sources/source-records.md](sources/source-records.md).
- The four external evidence subtowers ran as isolated, human-confirmed tower
  dispatches (closed `resolved`, 2026-06-27). Each has verbatim explorer returns,
  an in-corpus skeptic pass, and reconciled findings under `subtowers/*/returns/`,
  registered as `SYN-ECON-TOWER-*`. Every explorer ran whitepaper-only and bounded
  (depth-1, ≤6 sources/lane).
- The first validation scaffold, contribution-edge fixtures, exists at
  [validation/contribution-edge-fixtures/](validation/contribution-edge-fixtures/README.md).
- The cross-corpus program synthesis has run (closed `resolved`):
  [dispatch/economy-synthesis/findings.md](dispatch/economy-synthesis/findings.md)
  (`SYN-ECON-PROGRAM-FINDINGS`) reconciles the four towers by attack-lane. It
  passed one Popper/Quine/Meadows robot-talks round that **killed the affirmative
  "credit-graph-as-strengthening-mechanism" claim** (the measurement-≠-authority
  spine survives only as a prohibition) and left **three residual dissents**; the
  surviving residue hands off a ranked **fixture & constitution backlog** — four
  decidable-now fixtures plus an upstream costly-identity (Douceur) gate. Nothing
  in it promotes token, bounty, governance, payout, launch, authority, or
  implementation readiness; the four fixtures are validation-ready, not validated.

## Continue Research From Here

1. Start with the [inventory **Start Here** path](.arcanum/inventory/index.md),
   then [GUIDE.md](GUIDE.md) and [AGENTS.md](AGENTS.md).
2. For mechanism work, begin with the program start-path entry
   [economy-resilience-program](.arcanum/inventory/entries/economy-resilience-program.md) —
   the ranked **fixture & constitution backlog** (Tracks A/B/C, cheapest-unblocker
   first), backed by the full synthesis
   [findings.md](dispatch/economy-synthesis/findings.md) — then the
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
- Local source lineage: copied snapshots under `sources/local-snapshots/` — local-only and gitignored (purged from git history; absent from clones), including the harvested method and formalization precedent. They are kept as supporting-source record with preserved provenance and checksums; within a local working tree they are the operative copies of these sources.
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
- Track every load-bearing term: any symbol or named quantity you cite in a
  formal expression, fixture FAIL-region, invariant, decidable rule, or claim
  must resolve to a tracked definition ([REC-C14](authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
  / [ER-D23](definitions/DEFINITIONS.md)). New ones enter as a `candidate`
  definition with an `Open / to-ground:` note; run
  `tools/check_load_bearing_terms.py` to check.

## Status Vocabulary

Status words here are local research vocabulary, not truth or readiness
verdicts.

- `grounded` means a definition is tracked enough for local research use at its
  stated source posture and promotion boundary; it does not mean validated,
  official, proven, correct, fixture-passed, policy-ready, or
  implementation-ready.
- `promotion-candidate` means an idea would need owner-gated movement before it
  could constrain anything; it is not automatic escalation.
- `resolved` is dispatch closeout vocabulary, not a truth verdict.
- `survived` means not killed by a bounded pass, not generally proven.

For example, [ER-D1 Economy Resilience](definitions/DEFINITIONS.md#er-d1-economy-resilience)
is definition-lifecycle `grounded` under ER-D23, while the economy condition
itself remains `candidate`: a research target with open witness and
collapse-test work.

## Deep-Dive Corpus Order (after the inventory Start Here)

**Onboard via the [inventory Start Here path](.arcanum/inventory/index.md)
first** — that is the one canonical entry sequence. The list below is the
deep-dive corpus order for working through the repository *after* orientation, not
a competing onboarding path.

Structured work state (contexts, blockers, decisions, gaps) lives in
[CRAFT.md](CRAFT.md) (the craft ledger); per-pass narration lives in
[.arcanum/inventory/](.arcanum/inventory/index.md).

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
19. [prizes/README.md](prizes/README.md)

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

Candidate: reward signals may route attention and credit, but they must not promote authority, human governance power, or Phase 2 launch readiness by themselves. Collapse-test: one witnessed path where a reward signal *does* move governance or launch authority by itself would zero this candidate. Status: OPEN.

### OQ-2. What is the first workflow witness?

Candidate: one contribution edge moves from host-observed use to review action to bounded credit seed without changing authority. Collapse-test: if no such edge can be built without the credit seed also shifting an authority state, the candidate is dead. Status: OPEN.

### OQ-3. What does "randomness" protect?

Candidate: randomness should make gaming expensive and audit selection unpredictable, not make rewards feel arbitrary. Status: OPEN.
