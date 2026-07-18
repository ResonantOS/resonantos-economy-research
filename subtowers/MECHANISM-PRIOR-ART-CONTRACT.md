# Mechanism-Directed Prior-Art Contract

Status: active local research workflow
Owner: ResonantOS economy research owner
Promotion scope: local-research-only

## Purpose

When a prize or bet proposes a mechanism, route a directed and bounded prior-art
question into every **relevant** subtower before treating the witness design as
ready. Prior art must pressure a named conjecture, assumption, collapse-test, or
attack lane. It must not become a generic literature review or borrowed proof
that the local mechanism works.

This contract governs the return shape. Each subtower still owns its corpus
boundary and domain-specific question.

## Relevance Gate

Route the mechanism to a subtower only when all three fields can be completed:

1. the exact bet, assumption, or collapse-test the subtower can challenge;
2. a non-vacuous bounded question inside that subtower's corpus;
3. the decision that the answer could change in the local research plan.

Do not fan out mechanically. For every excluded subtower, record one sentence
explaining why its corpus cannot currently change the bet or witness. An
exclusion is residue, not a claim that the domain is permanently irrelevant.

## Required Return

Write the return to:

```text
subtowers/<subtower>/returns/<mechanism-slug>-prior-art.md
```

Every return must contain:

```yaml
mechanism_id:
prize_id:
bet_ids: []
subtower:
bounded_question:
why_this_subtower_is_relevant:
decision_this_research_can_change:
allowed_source_kinds: []
source_depth_bound:
source_quota:
required_negative_precedent:
attack_target:
sources:
  - source_ref:
    source_kind:
    supported_claim:
    unsupported_inference:
    local_bridge:
    bridge_risk_or_disanalogy:
bounded_finding:
next_falsifier:
excluded_or_uncollected_residue: []
```

The default bound is depth 1 and at most six admitted sources unless the
subtower has a tighter corpus rule. Surplus candidates go to residue; source
quantity does not increase the authority of a finding.

## Research Requirements

- Tie every admitted source to the bounded question.
- Require at least one source or case that attacks the preferred mechanism,
  unless the return explicitly records that the bounded search found none.
- State source kind, supported claim, unsupported inference, local bridge, and
  bridge risk or disanalogy.
- Preserve contradictory precedents instead of averaging them into a score.
- End with the next local falsifier or witness change, not a mechanism verdict.
- Keep official-source claims, related evidence, formal representations,
  behavioral warnings, and local synthesis visibly separate.

## Stop Rules

Stop and mark the return `block` or `flag` when:

- a source analogy is being used as the experiment result;
- the search question no longer names the bet or collapse-test it serves;
- a formal model is being treated as social legitimacy or person-level merit;
- citation count or cross-subtower repetition is being treated as confidence,
  credit, or authority;
- a source cohort exceeds its bound without recording the expansion decision;
- the return implies payout, token, reputation, governance, policy,
  implementation, or launch readiness.

## Synthesis And Witness Handoff

After relevant returns close:

1. compare their supported claims, disanalogies, contradictions, and missing
   evidence;
2. revise, split, kill, or retain each bet without evidence inheritance;
3. update the collapse-test and attack lanes;
4. use the returns to design or revise a preregistered witness;
5. route empirical execution to the evidence harness.

Prior art can establish vocabulary, plausibility, representation choices,
known failure modes, and better falsifiers. It cannot emit `SURVIVED`, validate
the mechanism, or authorize deployment.

If the work requires multiple independent lanes, synthesis, adversarial review,
or a separate approver, propose a governed research dispatch. Do not register or
run it until the human confirms the dispatch sheet.

## Current Worked Example

The deferred-contribution dispatch produced five accepted, bounded examples:

- [official-source return](official-whitepaper/returns/deferred-contribution-basis-prior-art.md);
- [failed-DAO/crypto return](failed-dao-crypto/returns/deferred-contribution-basis-prior-art.md);
- [science-of-science return](science-of-science/returns/deferred-contribution-basis-prior-art.md);
- [formal-mechanisms return](formal-mechanisms/returns/deferred-contribution-basis-prior-art.md);
- [socioeconomic-behavior return](socioeconomic-behavior/returns/deferred-contribution-basis-prior-art.md).

Those returns narrowed the candidate and exposed missing evidence. They did not
validate it. Preventive contribution remains a separate bounded sweep rather
than inheriting the five completed returns.

