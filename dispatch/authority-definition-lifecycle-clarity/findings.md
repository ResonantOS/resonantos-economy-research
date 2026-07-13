# Authority Definition Lifecycle Clarity Findings

Dispatch: `2026-06-30-authority-definition-lifecycle-clarity`
Status: FIX / change-request package
Promotion scope: local-research-only

## Answer

Economy Resilience should carry two distinct statuses: definition lifecycle
`grounded` under ER-D23, and economy-condition status `candidate`. `grounded`
means tracked enough for local research use at stated source posture; it does
not mean right, proven, official, fixture-passed, promoted, or
implementation-ready. ER-D1 already says Economy Resilience is a "candidate
condition to study, not a proven invariant," while ER-D23 says ER-D1 through
ER-D22 are read as `grounded` at their stated boundary. The needed repair is
reader-facing separation, not a new authority layer. See
`definitions/DEFINITIONS.md:18-46`, `definitions/DEFINITIONS.md:735-790`, and
`dispatch/authority-definition-lifecycle-clarity/research.md:50-60`.

## Candidate Verdict Matrix

| Candidate | Owner (precedent) | Witnessed? (non-vacuity) | Sound? (definitional) | Verdict |
| --- | --- | --- | --- | --- |
| ER-D1 two-status clarification: definition lifecycle `grounded`; economy-condition status `candidate` | Already-local: ER-D23 owns definition lifecycle; `authority/promotion-policy.md` and `authority/AUTHORITY-MODEL.md` own owner-routed movement. CAv2 is supporting precedent only. | Partly. The challenge path exists through ER-D23, GUIDE confirm/deny, and promotion-policy, but ER-D1 still needs an inline witness/challenge matrix for each conjunct. | Yes if constrained to a reader-facing crosswalk. KILL any version that creates a new ontology authority layer, second promotion ladder, or truth verdict. | FIX / build-from-owned crosswalk debt; not KILL, not promoted validation. |

## Reviewer Gate Summary

| Reviewer | Verdict | Keep | Fix |
| --- | --- | --- | --- |
| Popper | FIX, not KILL | ER-D1 is non-vacuous if every conjunct is made challengeable. | Add an inline witness/challenge matrix for each ER-D1 conjunct before any stronger reading. See `definitions/DEFINITIONS.md:26-41` and `authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md:144-162`. |
| Quine | FIX, not KILL | Keep a reader-facing crosswalk. | Do not create a second ontology, promotion ladder, or truth verdict. Clarify that `grounded`, `promotion-candidate`, `resolved`, and `survived` are bounded local statuses. See `dispatch/authority-definition-lifecycle-clarity/research.md:68-88`. |
| Myerson | Owner found, not KILL | ER-D23 owns definition lifecycle; promotion policy and AUTHORITY-MODEL own owner-routed movement. | Build only the missing crosswalk and reader clarifications. CAv2 remains supporting precedent, not economy correctness. See `authority/promotion-policy.md:8-40`, `authority/AUTHORITY-MODEL.md:20-52`, and `.arcanum/inventory/entries/cav2-authority-lifecycle-owned-build-harvest.md:18-28`. |

## Local Authority/Lifecycle Proposal

Use ER-D23 as the single definition-lifecycle authority: `candidate ->
grounded`, `grounded -> promoted`, `candidate -> residue`, `any -> retired`.
Keep promotion policy as the separate owner-routed movement ladder for research
artifacts. See `definitions/DEFINITIONS.md:735-790` and
`authority/promotion-policy.md:8-40`.

Add a short crosswalk wherever ER-D1 is read:

- `grounded`: tracked enough for local research use at stated source posture and
  boundary.
- `candidate`: the economy condition remains a research target, not a settled
  invariant.
- `promotion-candidate`: a boundary label requiring owner-gated movement, not
  automatic escalation.
- `resolved`: dispatch closeout vocabulary, not a truth verdict.
- `survived`: not killed by a bounded pass, not generally proven.

This matches the dispatch diagnosis that the main risk is reader misreading of
status language, not ER-D1 overclaiming in its own card. See
`dispatch/authority-definition-lifecycle-clarity/research.md:68-88`.

## Required Witness/Challenge Path For ER-D1

For each ER-D1 conjunct, attach one of: source posture plus evidence, workflow
witness, or typed negative. The five conjuncts are
`contribution_value_visible`, `reward_gaming_bounded`,
`authority_not_promoted_by_signal`, `treasury_or_financial_risk_gated`, and
`community_mentalities_do_not_collapse_to_task_extraction`. See
`definitions/DEFINITIONS.md:26-41`.

For each conjunct, run a confirm/deny path with:

- source posture and bridge boundary;
- witness or typed negative;
- collapse test;
- attack lane;
- skeptic gate;
- ER-D23 lifecycle result.

Until that matrix exists, ER-D1 remains usable as a local research target only.
This follows ER-D23's requirement for source kind plus workflow witness or typed
negative, and REC-C14's rule that load-bearing terms cannot be treated as fully
specified while lifecycle gaps remain. See `definitions/DEFINITIONS.md:756-786`
and `authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md:144-162`.

## Change Requests

1. In ER-D1, add: `Definition lifecycle: grounded under ER-D23; economy-condition
   status: candidate.` Cite the existing source posture and witness need. See
   `definitions/DEFINITIONS.md:18-46`.
2. In `promotion-policy.md`, add a "Definition Lifecycle Crosswalk" that points
   to ER-D23 and states that definition lifecycle movement is not the same as
   mechanism, artifact, or owner-routed research movement. See
   `definitions/DEFINITIONS.md:756-790` and `authority/promotion-policy.md:8-40`.
3. In `definitions/DEFINITIONS-INDEX.md`, split `Promotion boundary` from
   `Lifecycle status`, or add a lifecycle column, so ER-D1 does not visually
   conflict with ER-D23. See `definitions/DEFINITIONS-INDEX.md:10-39`.
4. Near ER-D1 or in the reader guide, add the status legend for `grounded`,
   `promotion-candidate`, `resolved`, and `survived`. See
   `dispatch/authority-definition-lifecycle-clarity/research.md:73-88`.
5. Keep CAv2 references explicitly demoted as method/scaffold precedent only.
   See `.arcanum/inventory/entries/cav2-authority-lifecycle-owned-build-harvest.md:18-28`.

## Blocked Uses

This finding cannot be used to assert that Economy Resilience is validated,
official, proven correct, fixture-passed, policy-ready, token-ready,
bounty-ready, payout-ready, governance-ready, launch-ready, or
implementation-ready. The authority model says research can propose mechanisms,
invariants, workflows, and gates, but cannot move them into external owner
decisions. See `authority/AUTHORITY-MODEL.md:20-37`.

This finding also cannot make CAv2 reciprocal authority or economy correctness
evidence. The local inventory entry blocks that reading. See
`.arcanum/inventory/entries/cav2-authority-lifecycle-owned-build-harvest.md:50-55`.

## Residue

The main open residue is the ER-D1 witness/challenge matrix: each conjunct still
needs source posture, evidence or typed negative, collapse test, attack lane,
skeptic gate, and ER-D23 routing. See `definitions/DEFINITIONS.md:26-41` and
`definitions/DEFINITIONS.md:756-786`.

A second residue item is reader ergonomics: current materials use `grounded`,
`promotion-candidate`, `resolved`, and `survived` across different surfaces, and
the dispatch found that these can sound stronger than intended. See
`dispatch/authority-definition-lifecycle-clarity/research.md:68-88`.

## Closeout Recommendation

Close this dispatch as FIX/change-request package. Do not demote ER-D1 to
unusable, and do not promote it beyond local research use. Apply the crosswalk
and ER-D1 witness/challenge matrix next; route any later status movement through
ER-D23, promotion policy, and the authority model. See
`definitions/DEFINITIONS.md:735-790`, `authority/promotion-policy.md:8-40`, and
`authority/AUTHORITY-MODEL.md:20-52`.
