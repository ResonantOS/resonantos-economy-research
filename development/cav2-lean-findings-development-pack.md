# CAv2/Lean Findings Development Pack

Status: active local research development pack
Source basis: [harvest/cav2-lean/findings.md](../harvest/cav2-lean/findings.md)
Definitions: [definitions/DEFINITIONS.md](../definitions/DEFINITIONS.md)
Constitution pack: [development/constitution-pack.md](constitution-pack.md)
Promotion scope: local-research-only

This pack refines each accepted CAv2/Lean harvest finding into definition,
design, and non-executed plan material. It is a project development aid, not a
mechanism spec, token policy, bounty policy, governance rule, payout rule,
financial launch package, anti-gaming proof, or product implementation
contract.

## Refine Result

- Target: CAv2/Lean harvest findings.
- Status: pass for local research development.
- Research mode: no external research in this pass; local findings and local
  snapshots only.
- Selected constitution rules: REC-C2, REC-C3, REC-C4, REC-C5, REC-C8, REC-C10,
  REC-C11.
- Main synthesis: develop the first contribution-edge witness before any reward,
  token, bounty, governance, or launch-facing mechanism.

## First Development Lane

Use this lane before broader mechanism work:

```text
one observed host surface
  -> receipt candidate
  -> review action
  -> bounded credit record
  -> no reward entitlement
  -> no authority effect
  -> no governance power change
  -> no payout claim
  -> attention-capture check
```

This lane is useful because it can produce a concrete workflow witness while
preserving the core separation among signal, credit, reward, attention, and
authority.

## Finding Refinements

| Finding | Definition | Design shape | Non-executed plan | Blocked escalation |
| --- | --- | --- | --- | --- |
| `credit-before-money-sequencing-hypothesis` | [ER-D4](../definitions/DEFINITIONS.md#er-d4-credit-before-money-sequencing-hypothesis) | Phase 1 sequence tests recognition, review, and bounded credit before money flows. | Build the contribution-edge witness; record whether reviewed credit has practical value without payout; leave socioeconomic evidence as open residue. | Token payout, bounty policy, governance weight, launch readiness, or a claim that credit alone is enough. |
| `one-observed-surface-receipt-candidate` | [ER-D5](../definitions/DEFINITIONS.md#er-d5-one-observed-surface-receipt-candidate) | Minimal receipt candidate with host surface, observed event reference, review status, privacy boundary, and no authority effect. | Choose one host surface; write one positive receipt fixture and one invisible-work exclusion fixture; define redaction fields. | Universal tracking, self-attribution as proof, promoted schema status, or invisible-work erasure. |
| `observed-signal-not-credit` | [ER-D6](../definitions/DEFINITIONS.md#er-d6-observed-signal) | Separate `observed_signal` from `reviewed_credit`, `reward`, and `authority`. | Add these fields to the next claim, inventory, and fixture templates; test that an observed signal can route attention without credit. | Automatic credit, reward, proof, truth, or governance authority. |
| `credit-record-not-reward` | [ER-D7](../definitions/DEFINITIONS.md#er-d7-reviewed-credit-record) | Reviewed credit record carries scope, status, assumptions, no reward entitlement, and no authority effect. | Build an authority-handoff no-effect fixture where high credit changes no authority state. | Payout entitlement, reputation finality, anti-gaming proof, or governance power. |
| `attention-route-not-authority` | [ER-D8](../definitions/DEFINITIONS.md#er-d8-attention-route) | Attention route can prioritize review or maintenance, but must include capture and bottleneck checks. | Add attention-capture, reviewer bottleneck, and incumbency failure cases to the witness matrix. | Visibility becoming de facto authority or reviewer capture. |
| `owner-route-authority-only` | [ER-D9](../definitions/DEFINITIONS.md#er-d9-owner-route) | Authority changes require the smallest applicable owner route. | Add `owner_route` and `promotion_boundary` fields to future promotion requests and fixture summaries. | Research consensus, score, validation run, inventory entry, or popularity becoming authority by proximity. |
| `credit-gaming-failure-fixtures` | [ER-D10](../definitions/DEFINITIONS.md#er-d10-credit-gaming-failure-fixture) | Negative fixture suite for duplicate paths, collusion, reciprocal review, spam, conflict of interest, and review capture. | Prepare research-evidence-harness fixtures before any positive scoring design; start with expected failure behavior. | Conserved credit, solved anti-gaming, payout safety, or score-as-verdict claims. |
| `candidate-contribution-taxonomy-not-entitlement` | [ER-D11](../definitions/DEFINITIONS.md#er-d11-candidate-contribution-taxonomy) | Work-class vocabulary for reuse, verification, maintenance, packaging, distribution, review, and contradiction-finding. | Keep as tags in fixtures; collect peer-production and science-credit bridge evidence before broad reuse. | Property claims, payout entitlement, expert authority, or a complete labor model. |
| `phase2-financial-blocker-register` | [ER-D12](../definitions/DEFINITIONS.md#er-d12-phase-2-financial-blocker-register) | Register identity, funding, wallet/security, legal/tax, privacy, anti-gaming, governance, and approval blockers. | Maintain blockers as residue; add blockers when any financial mechanism is discussed. | Phase 2 readiness, unlock checklist, token policy, payout, DAO distribution, bounty, or launch path. |
| `privacy-redaction-policy-prerequisite` | [ER-D13](../definitions/DEFINITIONS.md#er-d13-privacy-redaction-policy-prerequisite) | Redaction policy prerequisite for public lineage reuse and attribution. | Draft a redacted export fixture with prompt, memory, client, wallet, source-text, and maintainer-context boundaries. | Public attribution from private context or a claim that redaction is already safe. |
| `invariant-drafting-route-open-witness-or-typed-negative` | [ER-D14](../definitions/DEFINITIONS.md#er-d14-invariant-drafting-route) | Candidate invariant requires a workflow witness or typed negative. | Convert the first lane into one candidate invariant only after the witness and negative fixture are named. | Proof of economy safety or validation by elegant phrasing. |
| `claim-status-field-discipline` | [ER-D15](../definitions/DEFINITIONS.md#er-d15-claim-status-field-discipline) | Claim records include status, witness source, assumptions, and open residue. | Apply the fields to future claim-ledger, inventory, validation, and evidence-harness records. | Status labels, green builds, prize labels, theorem analogies, or inventory entries as mechanism validation. |
| `multi-axis-economy-audit-discipline` | [ER-D16](../definitions/DEFINITIONS.md#er-d16-multi-axis-economy-audit) | Separate audits for mechanism form, behavior, temporal gaming, attention capture, and governance loops. | Build the first contribution-edge witness matrix with one row for each axis and separate pass/flag/block notes. | One clean audit score certifying a whole economy mechanism. |
| `source-bridge-demotion-intake-rule` | [ER-D17](../definitions/DEFINITIONS.md#er-d17-source-bridge-demotion-intake-rule) | Source intake records source kind, bridge status, falsifier, and local relevance before reuse. | Add these fields to the next source-record and external-corpus intake pass. | Importing CAv2, Lean, DAO, academic, or crypto vocabulary as ResonantDAO policy by proximity. |

## Development Threads

### Thread A. Contribution-Edge Witness

Purpose: test whether one observed surface can become reviewed credit without
reward entitlement or authority effect.

Artifacts to create next:

- one positive receipt fixture;
- one invisible-work exclusion fixture;
- one authority-handoff no-effect fixture;
- one attention-capture fixture;
- one witness matrix using ER-D16 axes.

Done when: the fixture package can show where signal becomes reviewed credit
and where it explicitly does not become reward, authority, governance power, or
payout.

### Thread B. Failure Fixture Backlog

Purpose: make gaming and capture failure visible before scoring design.

Initial fixture families:

- duplicate-path and ancestor-damping attempt;
- reciprocal review and collusion;
- spam and low-effort reuse inflation;
- conflict of interest;
- reviewer bottleneck and incumbency;
- attention-capture loop.

Done when: each fixture has expected failure behavior, source posture, and a
blocked escalation statement.

### Thread C. Claim And Inventory Field Discipline

Purpose: prevent later artifacts from becoming hidden authority surfaces.

Fields to add in future claim and inventory templates:

- `claim_status`;
- `source_kind`;
- `bridge_status`;
- `witness_source`;
- `assumptions`;
- `open_residue`;
- `allowed_use`;
- `blocked_use`;
- `owner_route`;
- `promotion_boundary`.

Done when: the next reusable claim or evidence entry carries the fields without
claiming stronger authority.

### Thread D. Privacy And Public Lineage

Purpose: keep useful lineage work from exposing private context.

Artifacts to create next:

- redacted export fixture;
- excluded-private-context list;
- accountability tradeoff note;
- public/private scrub checklist.

Done when: public reuse has a policy candidate and a fixture, not merely good
intentions.

### Thread E. Source Bridge Intake

Purpose: make external and local lineage reusable without policy leakage.

Artifacts to create next:

- source-card intake template;
- bridge-decision table;
- falsifier field;
- local-relevance field;
- source-family selectors for the five subtowers.

Done when: a future external source can be ingested without collapsing analogy,
evidence, and authority.

## Recommended Next Work Units

1. Build Thread A as a fixture package under the evidence-harness route.
2. Add Thread C fields to the next claim-ledger and inventory update.
3. Draft Thread D's redacted export fixture before any public lineage artifact.
4. Prepare Thread B negative fixtures before any scoring, bounty, or reward
   design.
5. Use Thread E for the first external DAO, science-credit, behavioral,
   mechanism-design, legal, privacy, or governance corpus intake.

## What We Can Use Now

- A canonical vocabulary for the 14 harvested controls.
- A first development lane centered on authority-separated credit.
- A fixture backlog for gaming, attention capture, and authority no-effect.
- A blocker register for Phase 2 financial work.
- A source-intake rule for future external evidence.
- A constitution rule that keeps refined findings below policy authority.

## What We Cannot Use Yet

- No solved economy mechanism.
- No token or payout rule.
- No bounty policy.
- No governance weighting rule.
- No anti-gaming proof.
- No public lineage policy.
- No Phase 2 readiness claim.
- No implementation contract.

## Authority/Lifecycle Harvest Addendum

Source basis:
[harvest/cav2-authority-lifecycle/findings.md](../harvest/cav2-authority-lifecycle/findings.md)
and [harvest/cav2-authority-lifecycle/reviewer-positions.md](../harvest/cav2-authority-lifecycle/reviewer-positions.md).

Status: accepted FIX addendum.

The authority/lifecycle harvest confirms that more CAv2 material is useful, but
only as method, boundary, and design-scaffold evidence. It does not validate the
economy, prove anti-gaming safety, or create implementation readiness.

### Closed Local Research Status

Use [ER-D18](../definitions/DEFINITIONS.md#er-d18-local-research-status-vocabulary)
instead of loose `pass`, `flag`, and `block` labels:

| Local status | Meaning | Blocked collapse |
| --- | --- | --- |
| `research-pass` | The artifact can move to its next research step. | Not validation proof, PromotionRecord, readiness, reward eligibility, governance weight, policy effect, or authority effect. |
| `research-flag` | The artifact is useful but requires a named repair, owner route, source expansion, fixture, or typed negative. | Not soft approval. |
| `research-block` | The artifact must not move until the named blocker is resolved. | Not permanent rejection unless paired with a typed negative. |

### Non-Collapse Field Block

Every future fixture, source card, claim entry, validation note, and
implementation-boundary note should keep these fields separate when relevant:

```text
source_posture != evidence_status
evidence_status != confidence_status
observed_signal != reviewed_credit
reviewed_credit != reward_effect
reviewed_credit != authority_effect
claim_status != lifecycle_stage
claim_status != policy_effect
claim_status != implementation_status
```

Default `reward_effect`, `authority_effect`, `policy_effect`, and
`implementation_status` to `none` unless a named owner gate decides otherwise.

### Implementation Boundary

Use
[ER-D19](../definitions/DEFINITIONS.md#er-d19-implementation-boundary-plan)
for implementation-facing planning. The correct artifact is an
implementation-boundary plan, not implementation readiness.

Minimum planning fields:

- source expansion requirement;
- owner route;
- fixture contract or typed negative;
- falsification surface;
- validation-harness handoff condition;
- task-session block;
- blocked escalation statement.

### Reciprocal CAv2 Return

Use
[ER-D20](../definitions/DEFINITIONS.md#er-d20-reciprocal-return-candidate)
for any future CAv2 return package.

The package must include:

- source IDs;
- blocked uses;
- unresolved review findings;
- public/private scrub status;
- independent CAv2 owner route;
- no cyclic citation promotion;
- no CAv2 authority transfer;
- no ResonantOS economy proof;
- no validation report unless one exists;
- no implemented behavior unless a separate task route produced it.

### Source Expansion Queue

Local durable use requires copied snapshots or source records for the accepted
CAv2 authority/lifecycle material. This pass added the required local snapshots
and source records, but downstream use still needs exact local citations and
owner-route selection.

### Next Work Unit Shape

The next design/planning work should be:

```text
source-backed boundary
  -> local research status
  -> fixture or typed negative
  -> owner route
  -> validation-harness handoff
  -> implementation-boundary plan
  -> task-session only after gates pass
```
