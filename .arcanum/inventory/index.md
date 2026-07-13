# Inventory Index

Status: active
Owner: ResonantOS economy research owner

## Start Here (read in this order)

New to this repository? It is a governed research tower — a powerful tool, but
only if you understand **why** and **how** it works before you write. Orient
through this inventory **first**, in this order. This is the canonical entry path;
`AGENTS.md`, `GUIDE.md`, and `CONTRIBUTING.md` all point back here.

1. **Why & posture** — [README.md](../../README.md) "What This Is, In Plain Language". The
   tower exists to make reward-mechanism failures visible *before* they become
   operational. Hold its standing rules everywhere: `claim ≤ proof`,
   `research ≠ policy`, `score ≠ authority`, and `cite a load-bearing term →
   track it` (REC-C14 / ER-D23 — see
   [load-bearing-term-tracking-discipline](entries/load-bearing-term-tracking-discipline.md)).
2. **Agent rules (non-negotiable)** — [AGENTS.md](../../AGENTS.md): run its four
   checks out loud before ANY write, edit, dispatch, or commit.
3. **What to do next (the single most useful read)** — the
   [economy-resilience-program](entries/economy-resilience-program.md) entry: it
   names the concrete start path (Tracks A/B/C, cheapest-unblocker first) and the
   ranked **fixture & constitution backlog**, backed by the full synthesis
   [dispatch/economy-synthesis/findings.md](../../dispatch/economy-synthesis/findings.md).
4. **How to move** — [GUIDE.md](../../GUIDE.md): pick the narrowest route.
5. **Before relying on any claim** —
   [claims/SOURCE-CLAIM-LEDGER.md](../../claims/SOURCE-CLAIM-LEDGER.md) and
   [sources/source-records.md](../../sources/source-records.md); keep claim ≤ evidence.
6. **For subagent research** — the dispatch route + human confirm gate:
   [subagents-dispatch-strategy](entries/subagents-dispatch-strategy.md).
7. **To contribute & continue** — [CONTRIBUTING.md](../../CONTRIBUTING.md); update
   this inventory when your result becomes reusable for the next agent.

Rule of thumb: **steps 1–3 tell you _why_ and _what_; steps 4–7 tell you _how_,
safely.** Do not skip 1–3 — the repo's power is wasted, and its boundaries are
easy to breach, without them.

## Entries

| Entry | Type | Tags | Role |
| --- | --- | --- | --- |
| [research-tower-root](entries/research-tower-root.md) | source | `tower`, `resonantos-economy` | Root research tower and reading order. |
| [subagents-dispatch-strategy](entries/subagents-dispatch-strategy.md) | workflow | `dispatch`, `subagents`, `telemetry` | DomainSpec dispatch stack, ledger, and inventory hook. |
| [repo-skill-surface](entries/repo-skill-surface.md) | skill-surface | `skills`, `arcanum`, `domainspec` | Installed Arcanum and DomainSpec skills. |
| [telemetry-agent-pool](entries/telemetry-agent-pool.md) | telemetry | `agents`, `subagents`, `pool` | Local agent-name pool for governed dispatches. |
| [repository-working-guide](entries/repository-working-guide.md) | workflow | `guide`, `workflow`, `authority`, `resonantos-economy` | Posture and continuation guide after first harvests and fixture scaffold. |
| [harvest-strategy](entries/harvest-strategy.md) | workflow | `harvest`, `workflow`, `dispatch`, `authority`, `resonantos-economy` | Narrow CAv2 and Lean harvest strategy before broad fan-out; first harvest is closed. |
| [local-source-snapshots](entries/local-source-snapshots.md) | source | `source-snapshot`, `harvest`, `cav2`, `domainspec` | Copied CAv2 and DomainSpec Lean source snapshots plus closure strategy for local harvest citation. |
| [strategy-result-cav2-lean-harvest](entries/strategy-result-cav2-lean-harvest.md) | dispatch | `strategy-result`, `harvest`, `dispatch`, `subagents` | Lanes, subagents, flow, gate state, ledger state, and closeout for the CAv2/Lean harvest. |
| [cav2-lean-selector-map](entries/cav2-lean-selector-map.md) | synthesis | `harvest`, `dispatch`, `source-snapshot`, `resonantos-economy` | Reviewer-revised candidate controls from CAv2 and Lean harvest. |
| [cav2-lean-findings](entries/cav2-lean-findings.md) | synthesis | `harvest`, `dispatch`, `resonantos-economy` | Accepted local research findings and blocked-claim summary from the CAv2/Lean harvest. |
| [cav2-lean-findings-development-pack](entries/cav2-lean-findings-development-pack.md) | development-handoff | `harvest`, `development`, `definitions`, `constitution`, `resonantos-economy` | Refined definition/design/plan handoff for the CAv2/Lean harvest findings. |
| [cav2-lean-development-pack-review](entries/cav2-lean-development-pack-review.md) | review-findings | `review`, `dispatch`, `subagents`, `development`, `validation-scaffold`, `resonantos-economy` | FIX verdict review of the CAv2/Lean development pack as validation scaffold candidate. |
| [cav2-authority-lifecycle-owned-build-harvest](entries/cav2-authority-lifecycle-owned-build-harvest.md) | synthesis | `harvest`, `dispatch`, `cav2`, `authority`, `validation-scaffold`, `implementation-boundary`, `owned-build`, `resonantos-economy` | FIX verdict authority/lifecycle harvest, local status discipline, implementation-boundary plan, and deferred CAv2 return candidate. |
| [contribution-edge-fixture-full-refine-plan](entries/contribution-edge-fixture-full-refine-plan.md) | development-handoff | `refine`, `dispatch-spec`, `implementation-boundary`, `validation-scaffold`, `fixture-scaffold`, `task-session`, `resonantos-economy` | Full dispatch-spec validated Refine packet and task-session-ready plan for contribution-edge validation fixtures only. |
| [contribution-edge-fixtures](entries/contribution-edge-fixtures.md) | validation-scaffold | `validation-scaffold`, `fixture-scaffold`, `implementation-boundary`, `resonantos-economy` | Materialized contribution-edge fixture package with schema, matrix, typed negatives, checklist, and six fixture files. |
| [domainspec-subagents-reflection-loop](entries/domainspec-subagents-reflection-loop.md) | telemetry | `reflection`, `observability`, `sigil-development`, `workflow-reflect`, `subagents` | Local reflection loop for subagent strategy output drift, inventory-result checks, and lifecycle maintenance. |
| [economy-resilience-program](entries/economy-resilience-program.md) | synthesis | `strategy-result`, `dispatch`, `subagents`, `synthesis`, `attack-lane`, `fixture-backlog`, `resonantos-economy` | Four isolated towers + cross-corpus synthesis (closed `resolved`); the ranked fixture & constitution backlog and the concrete start path (Tracks A/B/C). |
| [number-lottery-refinement](entries/number-lottery-refinement.md) | strategy-result | `strategy-result`, `dispatch`, `subagents`, `token-boundary`, `time-capsule`, `community-ritual`, `refine` | Operator-amended result: supply selection is in scope; cohort-root plus post-close beacon is the leading unvalidated selector behind a redesigned fixture boundary. |
| [deferred-contribution-basis](entries/deferred-contribution-basis.md) | strategy-result | `strategy-result`, `dispatch`, `subagents`, `synthesis`, `tower`, `validation-scaffold`, `definitions`, `resonantos-economy` | Five-lane prior-art and fixture-handoff result: investment/cashing aliases killed; no-effect prior-activity-to-result review candidate retained but blocked before fixture use on three unregistered terms. |
| [strategy-result-four-surface-reconciliation](entries/strategy-result-four-surface-reconciliation.md) | dispatch | `strategy-result`, `dispatch`, `subagents`, `definitions`, `glossary` | Audit reconciling glossary/notation/distills vs ER-D1–D20 (closed `resolved`); 10 actionable surface edits, 1 KILL, 9 owner-gated disputes; propose-only. |
| [load-bearing-term-tracking-discipline](entries/load-bearing-term-tracking-discipline.md) | synthesis | `synthesis`, `definitions`, `constitution`, `load-bearing`, `craft` | **Session headline synthesis.** Every load-bearing term must resolve to a tracked definition (REC-C14 + ER-D23 + adapter); ER-D21–D28 added; systematic fixture-primitive drift closed; handed to CAv2. |
| [authority-definition-lifecycle-clarity](entries/authority-definition-lifecycle-clarity.md) | strategy-result | `strategy-result`, `dispatch`, `subagents`, `definitions`, `authority`, `resonantos-economy` | Closed dispatch clarifying ER-D1 as definition-lifecycle `grounded` but economy-condition `candidate`; crosswalk + witness/challenge matrix scaffold applied, not validation. |
| [bets-and-prizes-device](entries/bets-and-prizes-device.md) | workflow | `prizes`, `bets`, `mechanism-generator`, `workflow`, `resonantos-economy` | Falsification-first mechanism generator: a prize closes only when a bet survives its attack + authority-collapse check with a witness (never novelty). Standalone, portable; imports form only. |
| [onboarding-docs-review](entries/onboarding-docs-review.md) | review-findings | `review`, `strategy-result`, `dispatch`, `subagents`, `resonantos-economy` | Red-team of README/GUIDE/CONTRIBUTING (closed `resolved`): 16 verified findings (2 CRITICAL, 8 MAJOR, 6 MINOR), all three FIX; verifier confirmed 13/13 factual, 0 dropped. Change requests applied 2026-06-29 (MI4 enacted). |
| [ergonomics-strategy](entries/ergonomics-strategy.md) | strategy-result | `strategy-result`, `dispatch`, `subagents`, `synthesis`, `ergonomics`, `resonantos-economy` | Repo-ergonomics strategy (closed `resolved`): 18 ranked improvements; master move = generate projections from their source of truth + truth-check; 3 do-now trust fixes, 5 owner-gated. Live evidence: `index.json` stale (19/21, empty `by_tag`). |

## Open Gaps

- A bounded deferred-contribution dispatch has ingested related DAO/crypto,
  science-of-science, formal-attribution, and behavioral source cards into all
  five relevant subtowers. These sources remain related evidence only.
- The CAv2/Lean harvest dispatch is closed with accepted local findings.
- Broader legal/tax, wallet/security, privacy, governance, and preventive-work
  evidence remains unharvested; the bounded deferred-contribution cohorts do
  not close those domains or validate transfer to ResonantOS.
- No validation harness has emitted evidence yet.
- The CAv2/Lean harvest findings now have a development handoff with
  canonical definitions, design threads, and non-executed next work units.
- The CAv2/Lean development handoff has a closed review dispatch with a FIX
  verdict: it is a sound local demotion scaffold, but not yet an executable
  validation scaffold or prerequisite for research validity.
- The CAv2 authority/lifecycle owned-build harvest is closed with accepted FIX
  findings: it adds local status/field non-collapse discipline, source snapshot
  expansion, an implementation-boundary plan, and a deferred CAv2 return
  candidate, but no economy validation or implementation readiness.
- A full dispatch-spec validated Refine packet made the contribution-edge
  fixture package task-session-ready, and the package has now been
  materialized. The package is fixture-scaffold evidence only; no validation
  harness report or economy mechanism exists yet.
- A harvest strategy exists, local source snapshots have been copied, and the
  expansion-reduction closure strategy passed the current check-tension gate.
  The harvest dispatch has been registered and closed.
- README, GUIDE, and CONTRIBUTING now orient internal researchers to continue
  from current harvest findings, subtower returns, and contribution-edge
  fixtures. Public export remains blocked until a separate scrub.
