# Repository Working Guide

Status: active posture contract
Promotion scope: local-research-only
Owner route: standalone research authority; CyberAlchemy v2 method authority

## Purpose

This repository is a research instrument and continuation surface for the
ResonantOS economy problem. It is not an economy spec, a token model, a bounty
program, a DAO governance rule, or a launch-readiness package.

The central risk is not only exploitability. The deeper risk is training a
community to optimize the visible reward surface instead of the shared purpose.
Every artifact should therefore ask: what mentality does this mechanism produce
if it becomes profitable, legible, and repeatable?

## Consultation Boundary

The repository can be used by ResonantOS researchers to consult and continue the
work. It is not public-export-safe as a whole: local snapshots and telemetry may
preserve provenance paths, operator context, and private source posture. Keep
public derivatives separate until a dedicated scrub removes or replaces that
material.

## Posture

Work from five habits:

1. **Source before mechanism.** Start by naming source kind: primary source,
   method authority, formalization precedent, related evidence, analogy, local
   inference, or open residue.
2. **Signal is not authority.** A score, citation, audit hit, bounty, token,
   reputation mark, or marketplace price may route attention. It does not grant
   governance authority by itself.
3. **Rewards train behavior.** Evaluate the behavior a mechanism will train in
   ordinary contributors, adversarial actors, maintainers, cliques, and bots.
4. **Witness before confidence.** Prefer one concrete workflow witness over a
   polished but unwitnessed theory.
5. **Residue stays visible.** If a claim is not closed, keep it as residue with
   a next check instead of smoothing it into a confident paragraph.

## How To Start Work

For any non-trivial change:

1. Read [AGENTS.md](AGENTS.md) and run its four checks out loud.
2. Read the relevant source spine in [authority/source-spine.md](authority/source-spine.md).
3. Check [.arcanum/inventory/index.md](.arcanum/inventory/index.md) for existing
   reusable entries.
4. Choose the narrowest route:
   - source reading;
   - claim ledger update;
   - subtower harvest;
   - invariant proposal;
   - mechanism sketch;
   - dispatch;
   - authority promotion request.
5. If the work is meant for other researchers, update
   [CONTRIBUTING.md](CONTRIBUTING.md), this guide, or the relevant README only
   when the route actually changes.
6. Update inventory when the result becomes reusable for future agents.

## Current Continuation Surface

The first local harvests have been completed enough to let researchers resume
from existing selectors instead of inventing the repo's grammar.

Start from these surfaces:

- [harvest/cav2-lean/findings.md](harvest/cav2-lean/findings.md) for the first
  CAv2/Lean method harvest.
- [harvest/cav2-authority-lifecycle/findings.md](harvest/cav2-authority-lifecycle/findings.md)
  for owner-route, lifecycle, validation-scaffold, and non-collapse discipline.
- [development/implementation-boundary-plan.md](development/implementation-boundary-plan.md)
  for what can become a fixture task-session and what remains blocked.
- [validation/contribution-edge-fixtures/](validation/contribution-edge-fixtures/README.md)
  for the first safe validation scaffold.
- `subtowers/*/returns/` for first-pass external evidence and skeptic notes.

The older proposed dispatch sheets remain useful as route history and templates,
but the live status must be checked in
[telemetry/agents/subagents-dispatch.yaml](telemetry/agents/subagents-dispatch.yaml)
before continuing a dispatch thread.

### CyberAlchemy v2 Harvest

Treat CyberAlchemy v2 as method authority, not as proof of an economy mechanism.

Look for:

- source posture and source-kind separation;
- credit versus authority separation;
- reward adapter gates;
- non-collapse rules for evidence markets;
- workflow witnesses around reviewed contribution and delayed reward
  eligibility;
- failure cases where measurement would become the target.

Write into:

- [sources/source-records.md](sources/source-records.md)
- [claims/SOURCE-CLAIM-LEDGER.md](claims/SOURCE-CLAIM-LEDGER.md)
- [authority/source-spine.md](authority/source-spine.md)
- [.arcanum/inventory/](.arcanum/inventory/README.md)

### DomainSpec Lean Formalization Harvest

Treat DomainSpec Lean formalization as formalization discipline, not as proof of
ResonantOS economics.

Look for:

- invariant style;
- witness requirements;
- open-problem loop closure;
- theorem/proof vocabulary that can keep claims below evidence;
- ways to express authority, prize, bet, workflow, and mechanism safety without
  pretending the economy is already proven.

Write into:

- [NOTATION.md](NOTATION.md)
- [levels/L1-residue-map.md](levels/L1-residue-map.md)
- [levels/L2-closure-plan.md](levels/L2-closure-plan.md)
- [.arcanum/inventory/](.arcanum/inventory/README.md)

## When To Dispatch

Do not run a dispatch just because the tower exists.

Run a new or resumed dispatch only when:

- the posture guide is current;
- the relevant local selectors are present and citeable;
- the dispatch sheet still matches the intended work;
- the human explicitly says `confirmed`;
- the dispatch is registered through the deterministic appender;
- closeout will update both telemetry and inventory.

If the sheet changes materially, re-run the tension gate before asking for
confirmation.

## How To Continue Research

Use the smallest route that can answer the question:

- For a new source, add source kind, bridge risk, local relevance, and claim
  impact before synthesis.
- For a new claim, update the source-claim ledger and record whether it is
  primary-source, method-authority, formalization precedent, related evidence,
  analogy, inference, or residue.
- For a new mechanism idea, write it as a research lane or closure-plan entry
  until the attack path, trained behavior, authority collapse check, and witness
  are explicit.
- For a validation idea, extend
  [validation/contribution-edge-fixtures/](validation/contribution-edge-fixtures/README.md)
  before building validators.
- For any proposed policy, reward, payout, launch, implementation, or authority
  effect, stop and use [authority/promotion-policy.md](authority/promotion-policy.md).

## Mechanism Evaluation Loop

Every proposed mechanism should pass through this loop:

```text
mechanism idea
  -> source kind
  -> trained behavior
  -> adversarial farming path
  -> authority-collapse check
  -> workflow witness
  -> invariant candidate
  -> residue or promotion gate
```

Stopping at any step is acceptable. Promoting past a failed step is not.

## First Witness To Prefer

The first useful witness is one contribution edge:

```text
observed use
  -> contextual review
  -> bounded credit seed
  -> delayed reward eligibility
  -> no automatic governance authority
  -> audit or appeal path
```

This witness is intentionally small. It tests whether the repository can keep
signal, credit, reward, and authority separate under pressure.

## Dispatch Closeout Expectations

A completed dispatch should leave:

- a dispatch row and close row in `telemetry/agents/subagents-dispatch.yaml`;
- durable findings in the dispatch working folder;
- source-kind labels for load-bearing claims;
- an inventory log update;
- inventory entries for reusable findings;
- visible residue for unresolved questions.

No dispatch output can promote token policy, bounty policy, governance authority,
or implementation readiness without the authority promotion route.
