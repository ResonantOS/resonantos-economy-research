# Inventory Entry: Load-Bearing Term Tracking Discipline (session synthesis)

Status: active
Entry type: synthesis
Authority posture: non-authority-read-model
Tags: `synthesis`, `definitions`, `constitution`, `load-bearing`, `craft`, `resonantos-economy`

## The single most important thing established

**Every load-bearing term must resolve to a tracked authority entry — and new
ones enter as `candidate` and move through a lifecycle.** This is the durable,
generalizable outcome of the 2026-06-28 session: a governance rule that prevents
a whole *class* of drift, not just the instances found.

Why it is the headline: it is method/discipline (not economy-specific), it is
enforceable (a constitution rule + a deterministic tool), and it was strong
enough to hand back to CyberAlchemy v2 as candidate method authority. Everything
else this session either triggered it, fed it, or was cleaned up by it.

## Source Refs

- [authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md](../../../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md) REC-C14
- [definitions/DEFINITIONS.md](../../../definitions/DEFINITIONS.md) ER-D23 (and ER-D21–D28)
- [tools/check_load_bearing_terms.py](../../../tools/check_load_bearing_terms.py)
- [definitions/DEFINITION-DRIFT-AUDIT.md](../../../definitions/DEFINITION-DRIFT-AUDIT.md) (2026-06-28 sections)
- [research/four-surface-reconciliation/findings.md](../../../research/four-surface-reconciliation/findings.md)
- [CRAFT.md](../../../CRAFT.md) / [.craft/ledger.yml](../../../.craft/ledger.yml)

## The discipline (three load-bearing parts)

1. **REC-C14 Load-Bearing Term Tracking** (constitution rule, validation mode
   hybrid). Scope = *formal-and-claims*: any symbol or named quantity in a formal
   expression, fixture FAIL-region, candidate invariant, decidable rule, or the
   normative content of a claim-ledger entry. Citing one untracked is a drift
   defect the drift audit must flag.
2. **ER-D23 Load-Bearing Term Lifecycle** (canonical definition). Defines the
   term, the `candidate → grounded → promoted / residue / retired` states, the
   new `Lifecycle status:` definition-card field, and the mandatory
   `Open / to-ground:` field on candidates. Key invariant: *candidate is not
   validation* — a rule with a candidate term is not "fully specified."
3. **The deterministic adapter** (`tools/check_load_bearing_terms.py`) — a
   first-pass extractor that scans formal blocks + FAIL-regions + claim spans for
   identifiers absent from `DEFINITIONS-INDEX.md`. Flips REC-C14 from review-only
   to enforceable; `--strict` for CI.

## What it found (the drift was systematic)

The rule was born from a real failure: `treasury` / `epoch` / `emission` were
cited in a decidable flow-conservation FAIL-region (`Σ(emitted) > treasury`) with
no tracked definition. The adapter then proved the drift was *systematic* —
**every NOW-fixture's formula primitives were untracked**. All three fixtures are
now covered by candidate definitions:

| Fixture | Candidate terms tracked |
| --- | --- |
| flow-conservation (formal-TF-1) | ER-D24 Treasury, ER-D25 Epoch, ER-D26 Emission |
| runway-inequality (formal-TF-13) | ER-D27 Runway Inequality (stables/liquidable/haircut/obligations/burn) |
| measurement≠authority (formal-TF-11) | ER-D28 Measurement-Not-Authority (stratified_estimate/true_rate/CI) |

## Supporting outcomes this session

- **Four-surface reconciliation** (the trigger): glossary/notation/distills
  reconciled to ER-D1–D20; `Credit Seed → Reviewed Credit Record` (ER-D7). See
  [[strategy-result-four-surface-reconciliation]].
- **Definitions promoted:** ER-D21 Signal-to-Authority Cascade Collapse,
  ER-D22 Costly-Identity Prerequisite; ER-D10 enriched (self-report fixture case).
- **In-repo `.craft/` ledger** — structured work-tracking (contexts, blockers,
  decisions, gaps), kept local to this standalone repo.
- **CAv2 reciprocal-return handoff** — the discipline offered back to CyberAlchemy
  v2 as candidate evidence (ER-D20 / REC-C13), transferring no authority.

## Reusable Selectors

- `load-bearing-term-tracking` — the rule: cite it → track it.
- `candidate-definition-lifecycle` — `candidate → grounded → promoted/residue`.
- `rec-c14-adapter` — the deterministic untracked-term checker.
- `fixture-primitive-drift` — the systematic class: every fixture's formula
  primitives need tracked definitions before the fixture is "fully specified."

## Residue

Five flagged items remain non-definitions: `$REX/$REX-COM` (un-sourced subagent
artifact → tower owner), `cartel` (deferred to MERGE-3), `submonoid`/`absorbing`
(analogy-only), `emission_rate` (subsumed). Candidate terms ER-D24–D28 await
grounding — that grounding is the first task of building each fixture. The
adapter has a known compound-matching gap (`self_report` near-miss).

## Promotion Boundary

This is an Inventory read model. The discipline and definitions are
local-research-only: candidate terms are not validated; the runway thresholds and
the TF-11 PASS stay un-asserted; no token, treasury-size, bounty, governance,
mechanism, or launch claim is promoted. Any CAv2 reuse is a separate CAv2 owner
decision.
