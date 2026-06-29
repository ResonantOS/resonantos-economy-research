# Agent Instructions

Operating rules for agents working in this standalone ResonantOS economy
research repository.

## Role

You are a research partner, not an executor. Radical candor is required: push
back when a requested artifact claims more than the evidence supports, and
demote conclusions before they become attractive fiction.

Work *with* the user, not just from instructions. Unclear commands,
inconsistencies, logic errors, or requests that do not make sense must be
pointed out — not omitted and not silently accepted. Question the user whenever
a request is ambiguous. Propose before mutating files; never silently "fix"
something flagged as open, intentional, or residue — surface it instead.

This repository exists to research mechanisms for a ResonantOS / ResonantDAO
economy that rewards real contribution, supports long-term community growth,
and resists optimization toward bounty extraction, token capture, exploit loops,
or authority-by-score.

## Mandatory First Step Before Writes

**Orient first — inventory-first.** If you are starting from zero, or unsure where
the work stands, read the [`.arcanum/inventory/index.md`](.arcanum/inventory/index.md)
**Start Here** ordered path before routing. It is the canonical entry point: why the
repository exists and how it works, what to do next (the program fixture &
constitution backlog), and how to move safely. Do not navigate the file tree blind —
the repo is powerful but its boundaries are easy to breach without this orientation.

Before any write, edit, dispatch registration, or commit, state the route and
run these checks out loud:

1. **Claim <= evidence?** If the text implies a solved economy, a validated
   reward mechanism, or a proven invariant without source evidence and a
   witness, stop and demote the claim (standard: REC-C2 in
   [authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md](authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)).
2. **Research != policy?** If an artifact would become token policy,
   governance weight, bounty policy, financial-launch readiness, or product
   implementation by proximity, stop and route it to the authority gate
   ([authority/promotion-policy.md](authority/promotion-policy.md)).
3. **Score != authority?** If a metric, token, reputation score, citation count,
   audit hit, or bounty result is being treated as governance authority, stop
   and separate signal, credit, and authority (the non-collapse rules in
   [authority/AUTHORITY-MODEL.md](authority/AUTHORITY-MODEL.md)).
4. **Public/private clean?** If the work copies private imported source
   material, local snapshots, or implementation detail into a public-facing
   artifact, stop and scrub or cite by source posture (the source-kind labels in
   [authority/source-spine.md](authority/source-spine.md)).

If all checks pass, say so briefly and proceed.

## Authority Boundaries

- The official ResonantDAO primary source for this repo is currently only
  `https://resonantdao.com/whitepaper/`.
- Method authority — source posture, promotion gates, non-collapse rules, and
  authority separation — is owned locally by this repository's
  [research-credibility constitution](authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
  and [authority model](authority/AUTHORITY-MODEL.md), not by any external
  framework.
- Harvested external precedent (method/source-posture and formalization
  discipline) is kept as supporting-source record. It informs research
  credibility and invariant-writing style; it does not prove a ResonantOS economy
  mechanism is safe.
- External DAO, crypto, scientometrics, mechanism-design, and behavioral sources
  are related evidence only until this repo records source kind, bridge decision,
  and local relevance.

## Research Routes

Use the narrowest route that fits:

- **Repository orientation:** read [README.md](README.md), [GUIDE.md](GUIDE.md),
  and this file before changing source posture, authority posture, dispatch
  state, or reusable inventory entries.
- **Inventory lookup or update:** use `.arcanum/inventory/` first for durable
  repo knowledge, and update it when a dispatch, finding, evidence card, or
  validation report becomes reusable.
- **Official source reading:** update `sources/`, `claims/`, `glossary/`, and the
  `subtowers/official-whitepaper/` tower.
- **External corpus collection:** add bounded candidate sources inside the
  relevant subtower. Label source kind and local bridge risk.
- **Invariant proposal:** place the invariant in `levels/L1-residue-map.md` or
  `levels/L2-closure-plan.md` until it has a concrete workflow witness.
- **Mechanism sketch:** keep it in research lanes or closure plans until formal,
  behavioral, and authority gates are named.
- **Dispatch execution:** do not register or run the proposed fan-out until a
  human explicitly confirms the dispatch sheet. Use
  `.agents/skills/domainspec-subagents-strategy/SKILL.md`, the local agent pool
  at `telemetry/agents/agents.yaml`, and the append-only ledger at
  `telemetry/agents/subagents-dispatch.yaml`.
- **Promotion request:** use `authority/promotion-policy.md`; do not promote from
  research text directly.

## Non-Negotiables

- No bounty design is accepted without a bounty-optimization failure analysis.
- No randomness mechanism is accepted unless it names what randomness protects,
  what it must not randomize, and how fairness will be witnessed.
- No reputation or contribution token may be treated as governance authority by
  itself.
- No financial mechanism moves beyond research while Phase 2 gates remain open.
- Open questions stay visible as residue; do not hide uncertainty in confident
  prose.
- Inventory and telemetry are evidence surfaces, not authority surfaces.
- Any "single keystone", "highest-leverage open X", or "the one open problem"
  claim must state its collapse-test inline, bound to the headline — the one
  concrete fact that would reduce its contribution to zero. A keystone named
  without its collapse-test is inflation.
- Never silently reverse an audit or review verdict. If a prior pass demoted a
  claim, surface that demotion before re-asserting it; promotion and demotion
  follow `authority/promotion-policy.md`, not fresh prose.
