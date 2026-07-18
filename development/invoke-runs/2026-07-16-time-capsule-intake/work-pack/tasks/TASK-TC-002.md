# TASK-TC-002 — Specify Schemas And The Corrected Fixture Pack

Layer: L0

Slice: S-02

Wave: W0

Status: blocked by TASK-TC-001 copy contract

## Objective

Create machine-checkable candidate schemas for rules, six-slot envelopes,
public/sealed records, manifests, and receipts, plus fixtures that make the
quota, language, closure, beacon, mapping, release, and authority boundaries decidable.

## Source Contracts

- `../../SPEC.md#core-domain-concepts`
- `../../FORM-SPEC.md#server-invariants`
- `../../ARCHITECTURE.md#view-3--low-level-components`
- prior `RESULT.md#revised-evidence-boundary`

## Implementation Detail

Inputs are the candidate data contracts and corrected ten evidence areas.
Outputs are versioned JSON Schemas, example instances, a fixture envelope
schema, a matrix, and a validator that labels them specification evidence only.

Algorithm:

1. Define stable schema IDs and strict `additionalProperties` behavior.
2. Encode closed enums for horizons, slots, modes, states, and dispositions.
3. Encode conditional rules: filled slot -> visibility; slot 2 -> slot 1; sealed
   mode -> approved profile fields; credential excluded from public record.
4. Encode integer constraints without JavaScript-number precision assumptions.
5. Build positive and negative examples for 0/1/2/3 words per horizon.
6. Expand fixtures across canonicalization, admission/Sybil, public/sealed,
   closure/non-reveal, beacon, mapping/bias, token compatibility, frozen rules,
   harmful release, stewardship, and form comprehension.
7. Make the validator reject any fixture result that claims economic, privacy,
   unique-human, fairness, or launch validation from schema conformance.

Edge/failure cases include Unicode normalization differences, duplicate words,
identical records, empty cohort, unknown enums, unsafe integers, third slot,
slot-2-only input, sealed plaintext, missing consent versions, post-close edits,
beacon fallback ambiguity, and release-time root mutation.

## Smallest Working Units

### SWU-TC-003 — Define Candidate Schemas

- Dependencies: SWU-TC-001
- Source anchors: `ARCHITECTURE.md#supplyselectionrules`, `#submissionenvelope--private-intake-state`, record and receipt sections
- Related context: `FORM-SPEC.md#client-validation`
- Write scope: future `development/time-capsule/spec/schemas/`
- Done when: all objects validate; cross-object invariants have validator rules
  or explicit fixture checks; public schemas contain no credential field
- Acceptance evidence: schema validator pass plus negative-instance failures
- Validation: repository-selected JSON Schema validator and parse checks
- Execution owner: local-fallback
- Handoff: return schema IDs, unsupported cross-field checks, and validation output

### SWU-TC-004 — Encode Fixture Matrix And Typed Negatives

- Dependencies: SWU-TC-003
- Source anchors: `DECISIONS-AND-GAPS.md#target-artifact-gaps`, `WORK-PACK.md#validation-strategy`
- Related context: previous corrected ten-fixture boundary
- Write scope: future `development/time-capsule/fixtures/` and specification-only validator
- Done when: every evidence area has exact input, expected output/failure, owner,
  claim boundary, and independent reproduction requirement
- Acceptance evidence: completeness report with zero unowned acceptance-critical gaps
- Validation: fixture schema validation and manual claim/evidence audit
- Execution owner: local-fallback
- Handoff: return fixture inventory, missing parameters, and blocked live cases

## Synchronization

Task completion produces specification readiness only. It cannot mark a selector,
sealed profile, or ceremony validated.

