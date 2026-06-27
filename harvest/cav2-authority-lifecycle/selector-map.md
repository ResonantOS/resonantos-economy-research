# CAv2 Authority/Lifecycle Owned-Build Selector Map

Dispatch: `2026-06-27-cav2-authority-lifecycle-owned-build-harvest`
Status: synthesized pre-review map; superseded by accepted FIX findings
Promotion scope: local-research-only

## Boundary

CAv2 can be used here as method/provenance authority for source posture,
promotion gates, non-collapse rules, and authority separation; it cannot
validate ResonantDAO economy safety, rewards, tokens, bounty policy,
governance, or launch readiness (`SOURCE-MAP.md:5-6,21,25-33`;
`authority/boundaries.md:8-14,18-22,39-43`;
`authority/imports/resonantos-economy-research/README.md:12-30`). A
CAv2-facing return package is candidate evidence only, not reciprocal authority
(`authority/imports/resonantos-economy-research/README.md:12-30`;
`SOURCE-MAP.md:18-19,30`).

## Selector Map

| Selector | Verdict | Consolidate Into | Use | Reviewer Attack |
| --- | --- | --- | --- | --- |
| `cav2-method-authority-only` | ADD | source spine, promotion boundary | Method grammar only: source posture, owner routes, demotion (`SOURCE-MAP.md:5-6,21,25-33`; `authority/boundaries.md:8-14,18-22,39-43`). | Does any sentence turn method authority into economy policy? |
| `authority-promotion-lifecycle / D48` | SOURCE-EXPANSION-NEEDED | definitions, promotion policy, inventory | Stage/gate/owner-route/stop-rule scaffold after local snapshot expansion (`authority/definitions/DEFINITIONS.md:3182-3236`; `authority/promotion-policy.md:6-18`). | Does lifecycle naming imply promotion or safety? Reject via `authority/definitions/DEFINITIONS.md:3230`. |
| `build-from-owned / C17` | SOURCE-EXPANSION-NEEDED | constitution, reviewer criteria | Found owner means `build-from-owned`, not KILL, novelty, or authority (`authority/constitutions/STABLE-REPOSITORY-CONSTITUTION.md:371-399`). | Does owned precedent get treated as standing authority? Reject via `authority/definitions/DEFINITIONS.md:3235`. |
| `allowed_use / blocked_use / owner_route` | ADD | definitions, inventory, source cards | Required selector-card fields, grounded by local review gaps and CAv2 posture model (`reviews/cav2-lean-development-pack-review/findings.md:37-53`; `ontology/AUTHORITY-POSTURES.md:8-20,24-33,35-44`). | Are fields acting as confidence/proof labels? |
| `authority-kind-routing-not-decision` | DEFER | authority model, definitions | Kind labels may route candidate artifacts, but must not decide authority (`ontology/AUTHORITY-KINDS.md:8-10,25-40`). | Does the label decide the gate? |
| `ontology-projection-not-verdict` | ADD | inventory | Inventory/ontology may show rails, support, and residue; owner routes issue verdicts (`ontology/LIFECYCLE-MODEL.md:8-11,15-20,36-54`; `authority/boundaries.md:22`). | Does inventory become authority by convenience? |
| `promotion-gate-vocabulary` | ADD | constitution, L2 closure plan | Use `pass / flag / block` only as local research movement vocabulary (`authority/promotion-policy.md:20-37`). | Does `pass` imply validation, launch, or implementation approval? |
| `validation-scaffold-not-proof` | ADD | development pack, implementation-readiness plan | Borrow deterministic checks, review-gated checks, fixtures, and observability fields as scaffold (`validation/README.md:6`; `validation/authority-kind-closure-validator-SPEC.md:1,15`). | Does specified-not-built become proof? Reject via `validation/authority-kind-closure-validator-SPEC.md:35-36,52-62`. |
| `implementation-waits-for-gate` | ADD | implementation-readiness plan | Planning is allowed; implementation/code/spec/policy waits for gate and task route (`implementation/README.md:3-7`; `authority/boundaries.md:39`). | Does a plan smuggle in execution readiness? |
| `cav2-validates-economy-readiness` | REJECT | none | KILL: CAv2 lifecycle/validators do not validate ResonantOS economy readiness (`development/research/2026-06-25-cav2-authority-synthesis/findings.md:13`; `validation/authority-kind-closure-validator-SPEC.md:1-3,52-62`; `implementation/README.md:3-7`). | Any wording like validated economy should fail review. |
| `ostrom-bridge-gap` | SOURCE-EXPANSION-NEEDED | source expansion, subtowers | No CAv2 `Ostrom` source was found; external commons-governance evidence is required (`SOURCE-MAP.md:21`). | Is Ostrom being inferred from CAv2 lifecycle vocabulary? |
| `reciprocal-owned-build-return` | CAV2-RETURN-CANDIDATE | optional CAv2 return package | Return only as candidate evidence of disciplined packaging/demotion, not authority (`harvest/cav2-lean/findings.md:20-28,32-47,49-69`; `reviews/cav2-lean-development-pack-review/findings.md:14-23,37-53,81-92`). | Does reciprocal import inflate both projects at once? |

## Consolidation Matrix

| Surface | Verdict | Consolidation Move | Hard Block |
| --- | --- | --- | --- |
| Definitions | ADD | Add closed local status semantics plus REC-C11-style fields: `allowed_use`, `blocked_use`, `source_posture`, `bridge_status`, witness/fixture/typed negative, authority/promotion boundary, residue (`reviews/cav2-lean-development-pack-review/findings.md:37-53`). | Do not import D48/authority-kind terms as local authority before source expansion (`authority/definitions/DEFINITIONS.md:3182-3236`; `ontology/AUTHORITY-KINDS.md:8-10,25-40`). |
| Constitution | ADD | Add active REC-C6/REC-C7 coverage, falsification matrix, and scalar-collapse blockers for credit/reputation/status/pass labels (`reviews/cav2-lean-development-pack-review/findings.md:37-53`). | Do not say a rule "keeps findings below policy authority" unless enforcement, owner routes, and validation checks are named (`reviews/cav2-lean-development-pack-review/findings.md:37-53`). |
| Development pack | ADD | Keep as demotion/development scaffold; add owner-route table, review-governance fixture, scenario contracts, typed negatives, expiry/revision paths (`development/cav2-lean-findings-development-pack.md:26-63,67-99`; `reviews/cav2-lean-development-pack-review/findings.md:14-23,37-53,81-92`). | Not validation evidence or executable prerequisite yet (`reviews/cav2-lean-development-pack-review/findings.md:81-92`). |
| L2 closure plan | ADD | Define verdict enum, falsifier, minimum source evidence, fixture requirement, vacuity definition, and random-audit governance (`reviews/cav2-lean-development-pack-review/findings.md:37-53`; `levels/L2-closure-plan.md:26-67`). | Demote Phase 1/whitepaper alignment unless directly cited or framed as candidate alignment (`reviews/cav2-lean-development-pack-review/findings.md:37-53`). |
| Inventory | ADD | Add selector/evidence cards with allowed/blocked use, owner route, bridge status, witness source, assumptions, open residue (`ontology/AUTHORITY-POSTURES.md:8-20,24-33,35-44`; `development/cav2-lean-findings-development-pack.md:100-118`). | Inventory and telemetry remain evidence surfaces, not authority surfaces (`ontology/LIFECYCLE-MODEL.md:8-11,15-20,36-54`; `authority/boundaries.md:22`). |
| Implementation-readiness plan | ADD | Plan only: status labels, fixture contracts, owner routes, review controls, evidence-harness handoff conditions (`validation/authority-kind-closure-validator-SPEC.md:15`; `implementation/README.md:3-7`). | DEFER task-session/build until owner gates pass; reject token, bounty, governance, payout, launch, or product effects (`authority/boundaries.md:39`; `implementation/README.md:3-7`). |
| Source snapshot expansion | SOURCE-EXPANSION-NEEDED | Snapshot or locally record D48, C17, authority postures/kinds/lifecycle, validation spec, import boundary, and any Ostrom/external bridge sources before durable reuse (`authority/definitions/DEFINITIONS.md:3187-3236`; `authority/constitutions/STABLE-REPOSITORY-CONSTITUTION.md:371-398`; `SOURCE-MAP.md:21,23-33`). | Do not cite private CAv2 paths into public-facing or durable local claims without source posture and scrub (`SOURCE-MAP.md:18-19,30`). |
| Optional CAv2 return package | CAV2-RETURN-CANDIDATE | Package local harvest findings, selector map, development pack, review findings, authority model/source spine, claim ledger, and L2 plan as candidate CAv2 import evidence (`harvest/cav2-lean/findings.md:20-28,32-47,49-69`; `harvest/cav2-lean/selector-map.md:15-27,30-45,47-56`; `authority/AUTHORITY-MODEL.md:20-24,39-52,54-66`; `claims/SOURCE-CLAIM-LEDGER.md:15-18,21-29`). | Must state: not CAv2 authority, not ResonantOS economy proof, no implemented behavior, no validation report (`authority/imports/resonantos-economy-research/README.md:12-30`; `reviews/cav2-lean-development-pack-review/findings.md:14-23,81-92`). |

## Reviewer Attack Points

- Attack any ADD that depends on unsnapshotted CAv2 source; it should move to
  SOURCE-EXPANSION-NEEDED (`SOURCE-MAP.md:18-19,30`).
- Attack any `pass`, fixture, validator, inventory entry, or lifecycle stage
  that mutates policy, authority, payout, governance, implementation, or launch
  status (`validation/authority-kind-closure-validator-SPEC.md:35-36,52-62`;
  `authority/boundaries.md:39`).
- Attack the reciprocal return hardest: the failure mode is two projects
  inflating each other through clean-looking import discipline
  (`authority/imports/resonantos-economy-research/README.md:12-30`;
  `SOURCE-MAP.md:21,23-33`).
