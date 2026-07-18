# Repository Working Guide

Status: active posture contract
Promotion scope: local-research-only
Owner route: standalone research authority (repository-local research-credibility constitution)

## Purpose

This repository is a research instrument and continuation surface for the
ResonantOS economy problem. It is not an economy spec, a token model, a bounty
program, a DAO governance rule, or a launch-readiness package.

The central risk is not only exploitability. The deeper risk is training a
community to optimize the visible reward surface instead of the shared purpose.
Every artifact should therefore ask: what mentality does this mechanism produce
if it becomes profitable, legible, and repeatable?

This guide is the **working method**. [README.md](README.md) explains what the
repository is and how the towers fit together; this file explains how research is
framed and how you query the tower in practice.

## Framing

Work from seven habits. They are not style preferences — they are how a claim
earns the right to stay in the repository. This is the canonical list; other docs
point here rather than re-stating it.

1. **Source before mechanism.** Start by naming source kind: primary source,
   supporting source, related evidence, analogy, local inference, or open
   residue. A mechanism with no source posture is an opinion.
2. **Signal is not authority.** A score, citation, audit hit, bounty, token,
   reputation mark, or marketplace price may route attention. It does not grant
   governance authority by itself.
3. **Rewards train behavior.** Evaluate the behavior a mechanism will train in
   ordinary contributors, adversarial actors, maintainers, cliques, and bots.
4. **Witness before confidence.** Prefer one concrete workflow witness over a
   polished but unwitnessed theory.
5. **Residue stays visible.** If a claim is not closed, keep it as residue with
   a next check instead of smoothing it into a confident paragraph.
6. **Load-bearing terms are tracked.** Any symbol or named quantity you cite in a
   formal expression, fixture FAIL-region, invariant, decidable rule, or claim
   must resolve to a tracked definition ([REC-C14](authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
   / [ER-D23](definitions/DEFINITIONS.md)). A new one enters as a `candidate`
   definition with an `Open / to-ground:` field. Run
   `tools/check_load_bearing_terms.py` to catch untracked terms.
7. **Claim ≤ evidence.** No artifact may claim a safer, more complete, more
   official, or more proven economy than its cited evidence supports.

These habits are enforced by the repository's own
[research-credibility constitution](authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
and [authority model](authority/AUTHORITY-MODEL.md). That constitution — not any
external framework — is this repository's method authority.

## The Confirm / Deny Loop

The primary way to *use* this repository is to query it through conversation with
an agent, rather than reading every file yourself. **Open an agent session in this
repository root (e.g. the Claude Code harness), then ask** — it reads the inventory
and source records as context. You bring a question; the harness keeps the answer
honest. The loop has four moves:

1. **Say what you want to understand.** State the claim or question plainly —
   "is credit-before-money a safe first move?", "does randomness make rewards
   feel arbitrary?", "what owns the idea of delayed reward eligibility?"
2. **Confirm.** Ask the agent to ground the claim. It returns the supporting
   evidence, names the *source kind* (primary / supporting / related / analogy /
   local inference / residue), points to the workflow witness if one exists, and
   states how strongly the claim is grounded — not merely that it reads well.
   Confirmation is "the evidence supports this and here is exactly how much," not
   applause.
3. **Deny / falsify.** Ask the agent to attack the claim. It runs the claim's
   collapse-test (the one fact that would make it useless, unsafe, or already
   owned), routes it through the relevant [attack lane](lanes/ATTACK-LANES.md),
   and applies a skeptic gate:
   - **precedent** — is this already owned? Find the actual owner. (A found owner
     is a result, not a kill — cite and build, or note it is already deployed.)
   - **non-vacuity** — build the smallest concrete witness, or force a closed
     negative. No witness is a kill.
   - **definitional-soundness** — does it collapse to something already named,
     re-skinned? Tautology is a kill.
   A claim that survives attack is stronger. If it dies, keep both the useful
   thing it promised and the exact fact that made that contribution disappear.
   The repository calls this record a **typed negative**.
4. **Residue if neither holds.** If the claim neither confirms nor falsifies
   cleanly, the honest result is residue: record it in
   [levels/L1-residue-map.md](levels/L1-residue-map.md) or
   [residue/open-residue.md](residue/open-residue.md) with the next check.

This is the "new way of working with the repo": you converse with a harness built
to demote attractive-but-unproven claims and to show where the evidence actually
stands, instead of trusting a paragraph because it sounds finished.

For plain-language guidance on asking well — a loose-vs-sharp contrast and six
worked examples grounded in the actual record — see **[QUERYING.md](QUERYING.md)**.

## Consultation Boundary

The repository can be used by ResonantOS researchers to consult and continue the
work. It is not public-export-safe as a whole: local snapshots and telemetry may
preserve provenance paths, operator context, and private source posture. Keep
public derivatives separate until a dedicated scrub removes or replaces that
material.

## How To Start Work

For any non-trivial change:

1. **Orient via the inventory first.** Read the
   [.arcanum/inventory/index.md](.arcanum/inventory/index.md) **Start Here** ordered
   path — why the repo works the way it does, the current start path (the program
   fixture & constitution backlog), and how to move. It is the canonical entry point.
2. Read [AGENTS.md](AGENTS.md) and run its four checks out loud.
3. Read the relevant source spine in [authority/source-spine.md](authority/source-spine.md),
   and check the inventory for an existing reusable entry before adding a duplicate.
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
6. Update inventory when the result becomes reusable for future agents, and
   update [CRAFT.md](CRAFT.md) / [.craft/ledger.yml](.craft/ledger.yml) when a
   context's stage, gate, next move, blocker, decision, or gap changes — the
   craft ledger is the structured work-tracking surface; the inventory log is the
   per-pass narration.

## Current Continuation Surface

The first local harvests have been completed enough to let researchers resume
from existing selectors instead of inventing the repo's grammar.

Start from these surfaces:

- [harvest/cav2-lean/findings.md](harvest/cav2-lean/findings.md) for the first
  method/formalization-precedent harvest (kept as supporting-source record).
- [harvest/cav2-authority-lifecycle/findings.md](harvest/cav2-authority-lifecycle/findings.md)
  for owner-route, lifecycle, validation-scaffold, and non-collapse discipline.
- [development/implementation-boundary-plan.md](development/implementation-boundary-plan.md)
  for what can become a fixture task-session and what remains blocked.
- [validation/contribution-edge-fixtures/](validation/contribution-edge-fixtures/README.md)
  for the first validation scaffold (review-only; it does not validate the economy).
- `subtowers/*/returns/` for first-pass external evidence and skeptic notes.

The older proposed dispatch sheets remain useful as route history and templates,
but the live status must be checked in
[telemetry/agents/subagents-dispatch.yaml](telemetry/agents/subagents-dispatch.yaml)
before continuing a dispatch thread.

## Harvested External Precedent

Two external bodies of work were harvested into local findings and are kept as
**supporting-source record**, not as authority over the economy design:

- **Method/source-posture precedent** (credit-vs-authority separation, reward
  adapter gates, non-collapse rules, owner-route discipline) — reconciled in
  [harvest/cav2-lean/findings.md](harvest/cav2-lean/findings.md) and
  [harvest/cav2-authority-lifecycle/findings.md](harvest/cav2-authority-lifecycle/findings.md).
- **Formalization precedent** (invariant style, witness requirements, open-problem
  loop closure, theorem/proof vocabulary that keeps claims below evidence, and the
  **demoted prize/bet vocabulary** — `prize` as a research aim carrying evidence
  states and witnesses, `bet` as a written research prediction, neither one a
  reward payout, economic stake, or authority) — feeding [NOTATION.md](NOTATION.md),
  [levels/L1-residue-map.md](levels/L1-residue-map.md), and
  [levels/L2-closure-plan.md](levels/L2-closure-plan.md). The bet/prize selectors
  are recorded in [harvest/cav2-lean/findings.md](harvest/cav2-lean/findings.md)
  (`dlean-prize-not-achievement`, `dlean-bet-register-boundary`).

Treat both as precedent and discipline, never as proof that a ResonantOS economy
mechanism is safe. When you reuse them, cite the local snapshot and preserve the
harvest demotions (signals are not credit; credit is not reward; attention is not
authority; authority moves only by owner route). Write source records into
[sources/source-records.md](sources/source-records.md) and
[claims/SOURCE-CLAIM-LEDGER.md](claims/SOURCE-CLAIM-LEDGER.md), and update the
[inventory](.arcanum/inventory/README.md) when a result becomes reusable.

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
  primary-source, supporting-source, related evidence, analogy, inference, or
  residue.
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

## First Fixture, End To End

If you want to *do the work* — not just query it — the first concrete action is to
take the next fixture from the program backlog and run it. A worked pass:

**A fixture run is not a live experiment.** A fixture is a rehearsal using
made-up records whose answers we already know. A complete record should be
handled as promised. A record with missing assignment information should be
rejected. A record that tries to turn activity into automatic credit or
decision-making power should be blocked. Passing these cases shows only that
the test machinery follows its written rules. It does not show how a community
will behave, settle the research question, or authorize a test with real
people. That later step needs rules agreed before anyone sees the result (the
formal documents call this a **frozen criterion**) and a **separately approved
run**. See [Experiments, In Everyday Language](prizes/EXPERIMENT-EXAMPLES.md) for the same
boundary across several ordinary scenarios, and the
[full walkthrough](prizes/RESEARCH-HARNESS-BETS-PRIZES-WALKTHROUGH.md#step-10--validate-the-evidence-pipeline-without-pretending-to-validate-the-bet)
for the owning procedure.

1. **Pick the next fixture from the backlog, not from intuition.** The ranked
   start path is the
   [economy-resilience-program](.arcanum/inventory/entries/economy-resilience-program.md)
   entry — build order flow-conservation → runway-inequality → TF-11
   (measurement≠authority) → TF-3 (three-arm). Take **flow-conservation** first.
2. **Copy the template, don't start blank.** The
   [contribution-edge fixtures package](validation/contribution-edge-fixtures/README.md)
   is the *shape* to reuse: record format, cases that must fail, notes about what
   each failure teaches, and checklist. It is the template, not the same
   fixture.
3. **Write the fixture as decidable evidence.** Produce the fixture files with an
   explicit, decidable pass/fail condition and its FAIL-region. A candidate
   invariant that only "owes a fixture" is not validated — keep the condition
   decidable, and track any new load-bearing term (habit 7).
4. **Record the result honestly.** A fixture pass emits `research-pass` /
   `research-flag` / `research-block` for the *scaffold* — it does **not** validate
   the economy, prove anti-gaming safety, or create reward/governance/launch effect.
5. **Update the ledgers.** Land any load-bearing claim in
   [claims/SOURCE-CLAIM-LEDGER.md](claims/SOURCE-CLAIM-LEDGER.md) with its source
   kind, and update the [inventory](.arcanum/inventory/README.md) when the result
   becomes reusable.

Stop at any step. Do not let a backlog item read as a result until its fixture has
actually been run.

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
