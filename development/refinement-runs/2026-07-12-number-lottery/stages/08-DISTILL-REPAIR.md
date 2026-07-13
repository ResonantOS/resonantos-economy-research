# Distill Repair — RCBC

Mode: validate-repair
Verdict: pass for non-executed plan; block for implementation/live intake

## Repair Disposition

| Finding | Repair | Verdict |
| --- | --- | --- |
| DR-1 identity non-collapse | Count at most one accepted artifact per valid external eligibility receipt; identity claim remains `none`. | accept |
| DR-2 abstention tracking | Remove mandatory `AbstentionReceipt`; non-participation creates no RCBC record by default and no penalty outside RCBC. | accept |
| DR-3 policy source freshness | Replace scalar 1B reference with versioned `PolicySourceSnapshot` containing URL, whitepaper version/date, observed date, and digest/handle. | accept |
| DR-4 grinding | Keep intake blocked; specify batch-close, hidden provisional output, and variant-search witnesses without claiming a solution. | accept |
| DR-5 harmful content | Separate immutable historical cohort root from mutable signed display-disposition history. No silent deletion or root rewrite. | accept |
| DR-6 status capture | Prohibit person rankings, donor/founder/technical placement privileges, reward-bearing attendance, and role-weighted labels. | accept |
| DR-7 policy-validation collapse | Rename component to `PolicyNonEffectCheck`; it proves only no modeled dependency, never economic quality. | accept |
| DR-8 misleading name | “Number Lottery” remains internal codename. Candidate public name: `Resonant Time Capsule`; user-facing naming remains owner choice. | defer non-blocking |
| DR-9 hidden-message aspiration | State public baseline is incomplete for hidden-message needs; preserve `CommittedArtifactExtension` entry criteria. | accept |
| DR-10 scaffold/validation collapse | Every fixture carries `status: specification-only`, `executed: false`, evidence owner, and future pass/fail criteria. | accept |

## Repaired Core Contracts

### Counted Unit

```text
accepted_counted_unit = one accepted artifact per valid external eligibility receipt
identity_claim = none
wallet_claim = none
unique_human_claim = none
```

Eligibility remains external. RCBC may reject duplicate receipts under frozen
rules but cannot infer that two receipts or wallets belong to different humans.

### Non-Participation

RCBC stores no abstention record by default. No artifact means no capsule entry.
The surrounding community product must not convert absence into a penalty,
ranking, reward loss, eligibility loss, or inferred disagreement. Any aggregate
participation metric is a separate privacy/behavioral decision.

### PolicySourceSnapshot

```yaml
url: https://resonantdao.com/whitepaper/
document_version: "0.5 draft"
document_date: "2026-05-07"
observed_date: "2026-07-12"
claim_selector: "§5 planned supply"
observed_planned_total_supply: 1000000000
content_handle_or_digest: required before executable fixture
authority_effect: source fact only
economic_validation_effect: none
```

If the source changes, the fixture records drift and routes to the token-policy
owner. RCBC does not freeze policy forever.

### Historical Root And Display Disposition

- cohort root authenticates the accepted historical record under the frozen
  intake rules;
- later display disposition is a signed/versioned overlay stating whether an
  artifact may be shown at an event;
- quarantine/non-display does not erase the historical root;
- the interface can omit harmful content while publishing a non-content-bearing
  disposition receipt;
- legal requirements that demand deletion or make retention unlawful are
  external-owner blockers and may invalidate the architecture.

### PolicyNonEffectCheck

The check varies ritual inputs and observes modeled external fields. It passes
only if there is no dependency from ritual state to:

- planned/maximum/initial/circulating supply;
- token allocations or emissions;
- rewards, credit, reputation, or ranks;
- governance eligibility, weight, or rights.

This is a structural separation check. It does not evaluate whether any external
policy value, including 1B, is economically safe or desirable.

### Extension Entry Criteria

`CommittedArtifactExtension` stays disabled until:

1. security owner names the commit/open construction and assumptions;
2. low-entropy guessing, randomness, opening, selective non-opening, ordering,
   and grinding fixtures exist;
3. contributor-held opening material and no-survivor behavior are defined;
4. privacy/legal owner approves the data/consent posture;
5. extension preserves the PolicyNonEffectCheck.

Encryption is not an implicit part of the commitment extension.

## Manual Toy-Game Summary

- Character sum loses order (`AB`/`BA`), confirming its KILL.
- Reordered structured records require canonical bytes for reproduction.
- 100 wallets demonstrate that wallet caps do not establish unique humans.
- Variant search demonstrates potential last-submitter steering.
- Non-participation must leave no RCBC record or penalty.
- Harmful later display can be quarantined without rewriting historical root.
- Lost keys/openings and steward loss require explicit no-survivor/migration
  outcomes.
- Founder/donor/technical status must not alter placement or weight.
- Every ritual mutation must leave policy fields unchanged in the model.

These are reasoning witnesses, not executed harness results.

## Closure And Recomposition

The repaired RCBC remains coherent:

- public ritual baseline closes without identity, commitment, encryption, or
  token mechanisms;
- source drift and display disposition are explicit overlays;
- extension entry criteria preserve the original hidden-message aspiration
  without pretending it is solved;
- nine specification-only fixtures give Invoke Plan a bounded evidence backlog;
- no implementation or live intake route is opened.

## Residue

- exact schema/algorithms and executable fixtures;
- eligibility owner and duplicate semantics;
- legal deletion versus immutable historical root;
- content moderation taxonomy and appeals;
- commitment/security design;
- public naming decision;
- independent economic review of current supply draft.
