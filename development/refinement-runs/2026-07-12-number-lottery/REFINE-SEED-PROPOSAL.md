# Number Lottery Refine Seed Proposal

Status: proposed research seed
Promotion scope: local-research-only
Run ID: `2026-07-12-number-lottery`
Owner: Refine

## Target

Refine the proposed "Number Lottery" into a non-executed design for deriving a
meaningful ResonantDAO token-supply candidate from a community word time capsule.
The proposal includes public or privacy-preserving submissions, release horizons
at 2, 5, and 10 years, and additional community events.

The project is hosted as a research run in this repository. It is not a token
policy, launch decision, cryptographic implementation, or public capsule.

## Operator Intent

The operator wants an initial token amount with meaning rather than an arbitrary
round number such as 42 million, billion, or trillion. One candidate ritual is
to encode community-submitted words or messages, combine their numeric
representations, and use the result to influence the symbolic supply number.
The same submissions could form a time capsule with staged reveals and further
engagement events, informed by Augmentatism and ResonantDAO/ResonantOS framing.

## Refinement Objective

Produce a source-bounded, adversarially reviewed, non-executed plan that:

1. separates the symbolic derivation ritual from economic supply calibration;
2. compares deterministic derivation mechanisms rather than assuming character
   summation is adequate;
3. distinguishes encoding, hashing, commitment, encryption, and aggregation;
4. designs public and privacy-preserving capsule modes without collecting real
   private submissions during refinement;
5. compares engagement events at the 2-, 5-, and 10-year horizons;
6. names manipulation, coercion, exclusion, offensive-content, Sybil, key-loss,
   permanence, and governance risks;
7. emits concrete toy witnesses and typed negative results for candidates that
   collapse under review; and
8. leaves actual token supply and launch decisions with the external owner.

## Core Boundary

The community ritual may produce a meaningful number. It cannot, by itself,
prove that the number is an economically safe token supply. A text-to-integer
mapping is encoding unless a real confidentiality construction and threat model
support an encryption claim.

## Initial Candidate Families

- Transparent deterministic aggregation: public normalized submissions produce
  a reproducible symbolic integer.
- Commit-and-reveal aggregation: commitments are public now and selected content
  is revealed at the declared horizon.
- Dual-lane capsule: public messages are readable; private submissions contribute
  only a commitment or deliberately disclosed derived value.
- Supply-window mapping: the ritual derives a symbolic seed which an external
  economic owner may map into a separately justified safe range.
- Fixed-supply story: economics chooses the supply independently, while the
  capsule explains denomination, allocation labels, epochs, or commemorative
  milestones rather than determining total supply.

No candidate is selected in this seed.

## Write Scope

Allowed before the frozen dispatch is approved:

- this run folder;
- Refine-owned route, manifest, handoff, and gate-receipt artifacts.

Blocked before approval:

- dispatch ledger registration;
- inventory promotion;
- authority, definitions, claims, glossary, or source-spine changes;
- worker subagent execution;
- external research execution;
- token, contract, wallet, or capsule implementation.

## Done Criteria

- The Refine dispatch validates against the repository-local dispatch schema.
- The proposed subagent sheet receives two independent check-tension passes.
- The operator sees and explicitly approves the frozen worker dispatch.
- After that approval, every canonical Refine stage returns a native receipt or
  exact blocked reason.
- The final synthesis contains a candidate matrix, engagement-event portfolio,
  threat model, toy witnesses, rejected alternatives, and a non-policy plan.

## Validation Surface

- `formulae/dispatch-spec/scripts/validate-dispatch.py`
- repo-local research-credibility and authority gates
- two-agent `domainspec-check-tension` gate
- reviewer verdict matrix and auditor receipt
- concrete toy scenarios, not claims of live economic validation

## Configuration

- Preset: `deep`
- Research mode: `bounded-research`
- Research authorization: approved by operator on 2026-07-12 for the confirmed
  Refine strategy, but execution remains behind frozen dispatch approval.
- Subagent strategy: recommended, authorization pending frozen dispatch approval.
