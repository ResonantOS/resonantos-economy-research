# Research Credibility Constitution

Status: active local constitution
Owner: constitution-governance
Authority level: repository-local constitution
Selectors: `**`

## Scope

This constitution governs the credibility of ResonantOS economy research in this
standalone repository.

## Rules

### REC-C1. Primary Source Boundary

Validation mode: review

The official ResonantDAO primary source is currently only
`https://resonantdao.com/whitepaper/`. Every other source is supporting,
related, analogy, local inference, or open residue.

### REC-C2. Claim <= Evidence

Validation mode: review

No artifact may claim a safer, more complete, more official, or more proven
economy design than the cited evidence supports.

### REC-C3. Research Before Mechanism

Validation mode: review

Mechanism sketches must stay in research lanes, residue maps, closure plans, or
validation requests until source, formal, behavioral, and authority gates are
named.

### REC-C4. Signal, Credit, Reward, And Authority Separation

Validation mode: review

The repository must keep observable signals, reviewed credit, rewards,
reputation, and governance authority separate unless an external owner decision
explicitly binds them.

### REC-C5. Failure Corpus First

Validation mode: review

Bounty, token, treasury, DAO-governance, exploit-defense, and market mechanisms
must pass through failed-project and attack-surface research before promotion.

### REC-C6. Randomness With A Job

Validation mode: review

Randomness may be proposed only when the artifact names what it protects, what
it must not randomize, how fairness is witnessed, and how abuse is audited.

### REC-C7. No Scalar Reputation Collapse

Validation mode: review

The repo must not compress contribution, trust, expertise, governance authority,
community care, and financial eligibility into one unreviewed scalar.

### REC-C8. Phase 2 Is Future Work

Validation mode: review

Financial mechanisms, external liquidity, algorithmic token systems, and
payout-like designs remain future-work until external readiness gates pass.

### REC-C9. Dispatch Confirmation

Validation mode: review

Subagent research dispatches require explicit human confirmation after tension
gate. A passed tension gate is not permission to run.

### REC-C10. Source Posture Preserved

Validation mode: hybrid

Imported CyberAlchemy, DomainSpec, DAO, crypto, scientometrics, formal, and
behavioral sources must retain source posture and boundary. Do not copy private
material into public-facing artifacts without a scrub.

### REC-C11. Finding-To-Development Contract

Validation mode: hybrid

Any artifact that converts a harvested finding into definition, design, plan,
fixture, schema, or implementation-adjacent work must carry:

- a canonical definition ID or an explicit reason no definition exists yet;
- allowed use and blocked use;
- source posture and local bridge status;
- the required workflow witness, failure fixture, or typed negative;
- authority boundary and promotion boundary;
- open residue that would block policy, financial, governance, or launch use.

The artifact must not treat a refined finding as a mechanism, policy,
implementation contract, payout entitlement, governance authority, or launch
readiness.

### REC-C12. Local Research Status Non-Collapse

Validation mode: hybrid

Local status labels such as `research-pass`, `research-flag`, and
`research-block` may route local research work, but they must not create
validation proof, implementation readiness, PromotionRecord status, reward
eligibility, governance weight, policy effect, authority effect, payout effect,
or launch readiness.

Any status-bearing artifact must keep these fields separate when relevant:

- `source_posture`;
- `evidence_status`;
- `confidence_status`;
- `observed_signal`;
- `reviewed_credit`;
- `reward_effect`;
- `authority_effect`;
- `policy_effect`;
- `implementation_status`;
- `lifecycle_stage`.

### REC-C13. No Reciprocal Authority Laundering

Validation mode: review

No claim may be promoted in this repository or in a reciprocal CyberAlchemy v2
return package through a cyclic citation chain alone. A return package may be
candidate evidence for an external owner route, but it must name source IDs,
blocked uses, unresolved review findings, public/private scrub status, and the
independent owner route that would decide any reuse.

The package must state that it transfers no CAv2 authority, proves no
ResonantOS economy mechanism, contains no validation report unless one exists,
and implements no behavior unless a separate task route did so.

### REC-C14. Load-Bearing Term Tracking

Validation mode: hybrid

Every **load-bearing term** must resolve to a tracked authority entry (a
canonical definition ID, per [ER-D23](../../definitions/DEFINITIONS.md#er-d23-load-bearing-term-lifecycle)).
A term is load-bearing when it is a symbol or named quantity appearing in a
formal expression, a fixture FAIL-region, a candidate invariant, a decidable
rule, or the normative content of a `claims/SOURCE-CLAIM-LEDGER.md` entry.

A load-bearing term first cited without a tracked entry must be created as a
`candidate` definition (`Lifecycle status: candidate`) carrying an
`Open / to-ground:` field, and then moved through the ER-D23 lifecycle. Citing a
load-bearing term with no tracked entry is a drift defect that
`definitions/DEFINITION-DRIFT-AUDIT.md` must flag.

Candidate status is not validation: a candidate term may be cited with its
`Open / to-ground:` field visible, but a decidable rule must not be called
"fully specified" while any of its terms is still `candidate`.

Deterministic adapter (built): `tools/check_load_bearing_terms.py` scans
formal-voice blocks, fixture FAIL-regions, and claim-ledger code spans for
identifiers absent from `definitions/DEFINITIONS-INDEX.md`. It is a first-pass
extractor (the judgment of which untracked identifiers are genuinely
load-bearing stays with definitions-governance); run with `--strict` for a CI
non-zero exit.

## Open Questions

### OQ-1. Which validation harness should become first?

Candidate: a small contribution-edge workflow that tests whether reviewed credit
can route attention without becoming governance authority. Status: OPEN.
