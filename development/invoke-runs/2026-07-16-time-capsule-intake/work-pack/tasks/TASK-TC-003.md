# TASK-TC-003 — Implement The Synthetic Capsule Root And Supply Selector

Layer: L1

Slice: S-03

Wave: W1

Status: blocked by W0 evidence; real parameters also blocked by B-01/B-02

## Objective

Build two intentionally independent implementations that turn synthetic final
records into identical canonical bytes, Merkle roots, beacon-mixed seeds, and
rejection-sampled supply results.

## Source Contracts

- `../../ARCHITECTURE.md#canonical-record-and-root-algorithm`
- `../../ARCHITECTURE.md#initial-supply-algorithm`
- TASK-TC-002 schemas and fixture vectors

## Implementation Detail

Implementation A is the reference library; Implementation B is an independent
verifier that must not import A's serialization, tree, or mapping code.

Ordered algorithm:

1. Parse rules and final records with strict schemas.
2. Canonicalize records under the frozen profile.
3. Compute prefixed leaf hashes, sort bytes, and construct the tree exactly as specified.
4. Serialize/freeze the root receipt before accepting a beacon input.
5. Validate the beacon receipt against frozen provider/round/fallback metadata.
6. Compute the domain-separated base digest.
7. Run bounded rejection sampling and return supply + counter.
8. Emit complete reproduction receipts from A and B and compare every byte-level intermediate.

Failure modes: schema mismatch, different Unicode bytes, unstable sort, odd-node
ambiguity, empty cohort, integer overflow, `n=0`, unbounded rejection loop,
beacon substitution, fallback after result inspection, and implementations that
share code and therefore do not count as independent.

## Smallest Working Units

### SWU-TC-005 — Canonical Records And Merkle Root

- Dependencies: SWU-TC-003, SWU-TC-004
- Source anchors: `ARCHITECTURE.md#canonical-record-and-root-algorithm`
- Related context: fixture canonicalization, duplicate, and empty-cohort cases
- Write scope: future `experiments/time-capsule-selector/implementation-a/`
- Done when: reference implementation emits exact intermediates and rejects malformed profiles
- Acceptance evidence: known vectors, property tests, and deterministic reruns
- Validation: unit/property tests over canonical bytes, sorting, duplicate leaves, and odd tree levels
- Execution owner: local-fallback
- Handoff: return algorithm version, vectors, commands, and discrepancies

### SWU-TC-006 — Beacon Mapping And Independent Verifier

- Dependencies: SWU-TC-005; synthetic frozen band/beacon allowed; real use also needs B-01/B-02
- Source anchors: `ARCHITECTURE.md#initial-supply-algorithm`
- Related context: `DECISIONS-AND-GAPS.md` G-01/G-02/G-08
- Write scope: future selector mapping module and `implementation-b/`
- Done when: A and B agree on all vectors; rejection/boundary cases terminate or fail closed
- Acceptance evidence: cross-implementation report including at least one rejection case
- Validation: independent test commands and byte-for-byte receipt diff
- Execution owner: local-fallback
- Handoff: return both receipts, counter vectors, shared-code audit, and unresolved beacon assumptions

## Synchronization

Synthetic pass may promote L1 research evidence. It does not approve real band,
beacon, token economics, or minting.

