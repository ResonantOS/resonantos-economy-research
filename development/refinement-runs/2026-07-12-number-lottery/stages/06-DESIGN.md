# Number Lottery Design — Ritual Capsule Boundary Contract

Status: non-executed design; fixture-ready, not validated
Owner: Invoke Design
Selected unit: RCBC (`05-selected-unit.json`)

## Profile And Source Contracts

- Profile: DomainSpec six-view architecture baseline.
- Companions: research evidence and UX/consent boundary.
- Source contracts:
  - ResonantDAO whitepaper owns current draft facts, including planned 1B `$RES`.
  - Repository authority owns research/promotion boundaries.
  - RFCs/NIST/original papers support only their narrow technical claims.
  - Behavioral/commons sources support hypotheses and constraints, not predicted
    DAO outcomes.
  - Registered findings own candidate verdicts; no fixture has run.

## View 1 — Context

RCBC sits between community ritual intent and multiple external owners. It may
derive and preserve a symbolic artifact but has no write path to economic or
governance state.

```text
contributors ──public artifact / abstain──▶ RCBC
                                                │
stewards ──rules + preservation receipts───────┤
                                                ├─▶ canonical manifest
verifiers ──independent recomputation──────────┤   cohort root
                                                │   symbolic integer
community ──annual / 2 / 5 / 10 events─────────┤   commemorative labels
                                                │
security owner ──future commitment extension──▶│
                                                │
token/governance systems ◀── NO-WRITE FIREWALL ┘
```

Actors:

- eligible member: eligibility determined outside RCBC;
- submitter: person/account exercising a submission mode;
- accepted submission artifact: counted unit in the manifest;
- intake steward: applies frozen rules;
- moderation panel: produces disposition, not silent mutation;
- archive custodian and successor council: preserve continuity;
- verifier: recomputes outputs;
- token/governance owner: external and unaffected;
- privacy/security/legal owners: required for hidden-message extensions.

## View 2 — High-Level Structure

1. **Ruleset Registry**
   - freezes cohort id, version, admission/duplicate/moderation rules, accepted
     modes, canonicalization profile, algorithms, ordering, close time, and
     event schedule before intake;
   - ruleset changes create a successor cohort/version.
2. **Intake Boundary**
   - accepts a public artifact or abstention in the minimum unit;
   - obtains explicit mode/epoch consent;
   - references eligibility owner without claiming unique-human proof.
3. **Moderation And Disposition Boundary**
   - evaluates public artifacts under published rules;
   - produces accepted/rejected/quarantined disposition receipts and appeals;
   - does not award rank, token, credit, or authority.
4. **Manifest Builder**
   - serializes accepted versioned artifacts under a frozen profile;
   - fixes deterministic ordering and duplicate behavior.
5. **Cohort Authenticator**
   - produces a named digest/root and integrity receipt over accepted records;
   - supports independent reproduction and, if designed, inclusion evidence;
   - proves no identity, consent, truth, fairness, or policy validity.
6. **Symbolic Renderer**
   - interprets exact digest/root bytes as a documented unsigned integer;
   - renders bounded commemorative fragments only where bias handling is exact;
   - produces no economic quantity.
7. **Policy Firewall**
   - asserts supply reference `1_000_000_000` as current draft source fact;
   - verifies all ritual mutations leave supply, mint, circulating supply,
     rewards, credit, reputation, and governance fields unchanged;
   - has no policy write capability.
8. **Event And Reflection Coordinator**
   - schedules annual verification plus 2/5/10-year events;
   - keeps original public artifact and later interpretation separate;
   - treats abstention/non-response as legitimate outcomes.
9. **Preservation And Succession Boundary**
   - records integrity checks, storage copies, migration, steward loss, and
     successor continuity;
   - cannot change consent, frozen rules, root, or policy fields.
10. **Extension Ports**
    - Commitment extension: disabled until protocol/threat-model fixtures.
    - Encrypted recovery: disabled and separately owner-gated.

## View 3 — Low-Level Components And Contracts

### Ruleset

```yaml
cohort_id: stable string
ruleset_version: semantic or monotonic version
source_posture: references
eligibility_owner: external handle
submission_modes: [public-artifact, abstain]
schema_id: immutable identifier
canonicalization_profile: immutable identifier
digest_algorithm: named identifier
tree_profile: named identifier or none
integer_interpretation: unsigned-big-endian
ordering_rule: explicit total order
duplicate_rule: explicit
moderation_policy: versioned handle
cohort_close: timestamp + clock authority
events: [annual, year-2, year-5, year-10]
policy_effects: none
```

### SubmissionArtifact

```yaml
artifact_id: deterministic or assigned identifier
cohort_id: ruleset cohort
submitter_eligibility_ref: opaque external receipt
mode: public-artifact
content: public structured payload
content_language: optional declared metadata
consent: public-preservation + event-display choices
submitted_at: intake timestamp
disposition_ref: moderation receipt
```

An accepted artifact is not a person, wallet, unique human, credit record, or
governance identity.

### AbstentionReceipt

```yaml
cohort_id: ruleset cohort
mode: abstain
penalty_effect: none
reward_effect: none
authority_effect: none
```

The minimum unit need not count or publicly identify abstainers; the contract
exists to forbid downstream penalties and coercive UX.

### DispositionReceipt

```yaml
artifact_ref: input artifact
verdict: accepted | rejected | quarantined
reason_code: published taxonomy
appeal_ref: optional
root_effect: defined by pre-freeze inclusion rule, never retroactive rewrite
status_effect: none
policy_effect: none
```

### CohortManifest

```yaml
ruleset_ref: immutable
accepted_artifacts: exact ordered records or handles
disposition_summary: non-content-bearing
canonical_bytes_digest: named algorithm
cohort_root: named construction
symbolic_integer: exact byte interpretation
policy_firewall_receipt: required
```

### EventContract

```yaml
event_id: cohort + event type
horizon: annual | 2y | 5y | 10y
eligible_artifacts: public only in minimum unit
display_policy: original beside current reflection
non_response_outcome: no penalty / no inference
moderation_gate: required before display
integrity_check: required
status_reward_authority_effect: none
```

### PolicyFirewallReceipt

```yaml
planned_total_supply_reference: 1000000000
source_status: current-draft-not-validated
ritual_input_hash: test input
observed_supply_fields: unchanged
observed_reward_credit_reputation_fields: unchanged
observed_governance_fields: unchanged
verdict: pass | hard-fail
```

This receipt tests separation only. It cannot validate 1B economics.

## View 4 — Workflow Process

### A. Before intake

1. Record source posture and current policy reference.
2. Name eligibility, moderation, stewardship, security, privacy/legal, and token
   owners.
3. Freeze Ruleset and public schema.
4. Execute the nine-fixture pack; intake stays blocked until required fixtures
   have evidence and owner gates.
5. Publish plain-language public/abstain consequences and a comprehension check.

### B. Intake

1. Resolve external eligibility receipt.
2. Offer public submission or abstention with parity.
3. Save reversible draft; require informed confirmation.
4. Apply duplicate/timing/schema checks.
5. Moderate under frozen policy and issue disposition receipt.

### C. Cohort freeze

1. Close intake at declared time.
2. Order accepted artifacts deterministically.
3. Canonicalize records.
4. Produce manifest, digest/root, and symbolic integer.
5. Independently reproduce outputs.
6. Run policy-firewall comparison.
7. Publish integrity/source/non-effect receipt.

### D. Preservation

1. Store public manifest and verification material redundantly.
2. Run annual checksum and recovery drill.
3. Record migration and steward continuity.
4. Create successor version rather than mutating frozen history.

### E. Events

- Annual: checksum/preservation drill and Counterfactual Number Day using toy
  profiles, never changing canonical history.
- Year 2: Then/Now Echo for public artifacts, with original/current separation.
- Year 5: Rule and Divergence Assembly for future cohorts plus recovery drill.
- Year 10: Constellation and Stewardship Handoff with orphan/no-survivor report.
- Optional bounded events: translation circle, newcomer response cohort,
  counter-capsule audit, anti-capture red team, memory walk.

## View 5 — Decision Flow

```text
Is the supply currently open inside this repo?
  no -> preserve 1B as current draft source fact; no economic mutation

Does an artifact request public preservation?
  yes -> public-artifact path
  no  -> abstain in minimum unit
        -> commitment extension only after separate owner/fixture approval

Does input pass frozen schema/timing/duplicate checks?
  no -> reject with receipt; no status/policy effect
  yes -> moderation

Does moderation permit inclusion/display?
  accepted -> include under predeclared rule
  quarantined/rejected -> disposition receipt; no silent root rewrite

Can two implementations reproduce canonical bytes/root/integer?
  no -> hard fail; do not freeze cohort
  yes -> policy firewall

Did any ritual variation mutate economic/governance fields?
  yes -> hard KILL of architecture
  no -> publish ritual integrity/non-effect receipt

At event time, is content public and still display-eligible?
  yes -> display original + current reflection
  no -> non-display; no inferred consent or penalty
```

## View 6 — Dependency And Interface Boundaries

| Interface | Owner | RCBC consumes | RCBC may emit | Forbidden collapse |
| --- | --- | --- | --- | --- |
| Eligibility | governance/membership owner | opaque eligibility/admission receipt | artifact-count result | wallet/member/artifact != unique human |
| Moderation | governance/content owner | versioned policy and verdict | disposition receipt | moderation != monetary policy or authority |
| Token policy | external token owner | read-only current draft reference | non-effect evidence | ritual != calibration/supply mutation |
| Cryptography | security owner | named algorithm/profile only | digest/root evidence | digest/root != privacy/fairness/identity |
| Commitment extension | security/privacy owner | future commit/open contract | committed leaf/opening receipt | commitment != encryption/consent |
| Encrypted recovery | security/legal/custody owners | future AEAD/key/custody contract | ciphertext/recovery receipt | ciphertext != indefinite recoverability |
| Stewardship | archive/successor owners | storage/migration/continuity receipts | integrity status | custody != consent/policy authority |
| Events/UX | community/behavioral owner | event contract and consent | participation hypothesis data | engagement != benefit/credit/authority |
| Evidence | fixture harness owner | fixture inputs/expected outputs | verdict receipts | fixture scaffold != validation result |

## Design Decisions

- D1: Name remains “Number Lottery” only as a working project label; the
  mechanism is deterministic and must not be marketed as random/gambling.
- D2: Preserve planned 1B as current draft source fact; no endorsement.
- D3: Minimum unit is public-artifact plus abstain; commitment is extension.
- D4: Symbolic output is provenance-bearing and commemorative only.
- D5: Character summation and direct supply are rejected; bounded mapping is
  outside this run.
- D6: Cohort/ruleset changes are versioned successors, never silent mutation.
- D7: Public display requires moderation and event-time eligibility; quarantine
  does not rewrite frozen integrity history.
- D8: All event effects are hypotheses with zero economic/authority output.
- D9: Intake is blocked until the relevant fixture and owner gates exist.

## Risk And Gap Ledger

| Risk/gap | Current disposition | Owner/next evidence |
| --- | --- | --- |
| Unicode/canonicalization bias | open | canonicalization fixtures + accessibility/language owner |
| wallet/Sybil capture | open | cohort-abuse fixture + eligibility owner |
| last-submitter grinding | open | grinding fixture + security/mechanism owner |
| harmful content/root integrity | open | harmful-reveal fixture + moderation owner |
| consent drift/death/non-response | open | loss-and-reveal fixture + privacy/legal owner |
| steward loss/migration | open | steward-migration fixture + preservation owner |
| founder/whale/technical status | open | status-capture fixture + governance owner |
| ritual-to-policy leak | hard gate | economic-boundary fixture + token/governance owner |
| commitment confidentiality | deferred | construction/threat model + committed extension fixtures |
| encrypted recovery | deferred | security/key/custody/legal design |
| behavioral efficacy | unvalidated hypothesis | bounded pilot/UX evidence after fixture readiness |
| current 1B economic quality | outside scope/unvalidated | separate economic owner/research process |

## Distill Design-Unit Check

- Coherent unit: RCBC remains single-responsibility after six-view expansion.
- Split pressure: commitment and encrypted recovery correctly remain extensions;
  event coordination stays inside because it is the reason the capsule exists.
- Recomposition: passes through explicit owner interfaces and zero-effect output.
- Plan readiness: **flag**—sufficient for a non-executed plan, insufficient for
  task-session or intake because all nine fixtures are unrun.

## Design Transport

Next owner: Invoke Plan, limited to a non-executed layering and work-pack. The
plan must not create live cohort tasks or claim implementation readiness. It may
specify the fixture pack and owner decision gates as future work units.
