# Number Lottery Definition Baseline

Status: pass for design, local-research-only
Owner: Invoke Define
Discovery source: `REFINE-SEED-PROPOSAL.md`
Discovery waiver: not required

## Intent Record

Define a community ritual that can derive a reproducible symbolic integer from
public messages and/or privacy-preserving submission artifacts, preserve those
artifacts across 2-, 5-, and 10-year capsule horizons, and create recurring
community engagement without claiming that the integer determines an
economically safe token supply.

The operator approved this intent and the frozen dispatch on 2026-07-12. No
blocker-level clarification remains at Define.

## Problem

ResonantDAO can choose an arbitrary initial token amount. A culturally meaningful
number may create a stronger origin story and recurring community ritual than a
round number such as 42 million, billion, or trillion. Directly summing characters
or user-chosen integers, however, can be order-sensitive, gameable, ambiguous
across encodings, and falsely presented as cryptographic or economically safe.

The design problem is therefore not “find the right number.” It is:

> define a verifiable meaning-making ritual whose numeric output remains
> explicitly separate from token-economics authority.

## Actors

| Actor | Responsibility | Must not gain |
| --- | --- | --- |
| Contributor | Submit an eligible public message or privacy-preserving artifact under informed terms. | governance authority, entitlement, or extra influence from volume |
| Capsule steward | Publish rules, moderate eligible public content, preserve artifacts, and coordinate reveals. | unilateral ability to rewrite frozen cohorts or read private content by default |
| Independent verifier | Recompute cohort membership and symbolic outputs from disclosed rules and artifacts. | policy authority merely from verification status |
| Community | Interpret reveals and participate in bounded events. | retroactive power to expose private submissions or change prior consent |
| External token-policy owner | Decide whether and how any symbolic output relates to denomination or supply. | permission to describe ritual evidence as economic validation |

## Defined Objects

1. **Submission artifact** — the canonical per-contributor input accepted into a
   cohort. It is either public normalized content or a privacy-preserving artifact
   such as a commitment. It is not automatically plaintext, a ciphertext, or a
   token allocation claim.
2. **Normalization profile** — the versioned rules that convert eligible public
   content and metadata into canonical bytes. It must define Unicode form,
   casing, whitespace, language handling, metadata inclusion, ordering, and
   duplicate policy.
3. **Commitment** — a binding reference to hidden content plus contributor-held
   opening material. A hash alone may expose low-entropy words to guessing;
   commitment design therefore requires randomness/salt and a threat model.
4. **Private capsule mode** — a mode where the system accepts a commitment or
   other privacy-preserving artifact rather than plaintext. Calling the artifact
   “encrypted” requires a separately named encryption construction and key model.
5. **Cohort** — the frozen set of eligible submission artifacts admitted under one
   ruleset and time window.
6. **Cohort root** — a reproducible digest or authenticated-set commitment to the
   ordered cohort. It supports later inclusion and tamper checks; it does not
   prove submission truth, identity uniqueness, consent, or economic safety.
7. **Symbolic seed** — the deterministic numeric interpretation of a cohort root
   or other frozen aggregate. It carries narrative meaning through provenance,
   not through numerology.
8. **Economic supply calibration** — the separate process that would justify
   total supply, denomination, allocation, emission, liquidity, and treasury
   consequences. This repository does not own it.
9. **Capsule epoch** — one scheduled horizon, initially 2, 5, or 10 years, with a
   predefined reveal policy and event contract.
10. **Engagement event** — a bounded communal activity connected to a cohort or
    reveal. Participation is not credit, reward entitlement, or authority.

## Core Invariants

- `symbolic_seed != economic_supply_validation`
- `encoding != encryption`
- `commitment != confidentiality_without_threat_model`
- `randomness != fairness`
- `submission_count != contribution_value`
- `participation != governance_authority`
- `cohort_root != identity_or_consent_proof`
- a private-mode path must not require server-side plaintext collection;
- frozen cohort rules cannot change without producing a new cohort/version;
- no reveal may override the contributor’s declared mode and consent contract;
- every derived integer must be independently reproducible from eligible public
  artifacts and/or published commitment metadata.

## Functional Scope

The research design must define:

- public and private-mode submission contracts;
- eligibility, moderation, duplicate, Sybil, and ordering rules;
- deterministic normalization and cohort aggregation;
- symbolic-number derivation candidates;
- capsule preservation and 2/5/10-year reveal contracts;
- engagement events and opt-out/absence handling;
- audit receipts and toy-game failure cases;
- the external-owner gate between symbolic seed and token policy.

## Non-Functional Qualities

- reproducible;
- legible to non-specialists;
- source- and version-traceable;
- resistant to trivial input-volume manipulation;
- consent-preserving;
- inclusive of languages and scripts without hidden normalization bias;
- degradable when keys, contributors, or services disappear;
- honest about privacy and economic limits.

## Candidate Families Kept Open

| ID | Candidate | Economic coupling | Define verdict |
| --- | --- | --- | --- |
| C1 | Ritual-only symbolic seed | none | viable for design |
| C2 | Bounded supply-window seed | external owner maps seed into justified range | viable but policy-gated |
| C3 | Direct word-derived supply | direct | high-risk; must survive toy witness and external policy gate |
| C4 | Capsule independent of supply | none | fallback if all supply coupling fails |
| C5 | Fixed supply with ritual-derived denomination/epoch labels | none for total supply | viable for design |

## Acceptance Surface For Design

Design may proceed when it:

- preserves all core invariants;
- names cryptographic constructions rather than using “cipher” generically;
- keeps C1–C5 distinguishable;
- includes an explicit no-survivor outcome;
- models 2/5/10-year stewardship failure;
- treats economic coupling as an external-owner interface, not an internal
  conclusion.

## Explicit Gaps

- exact normalization profile;
- commitment/encryption construction and threat model;
- identity-cost/Sybil policy;
- moderation and appeal policy;
- storage, stewardship, migration, key-loss, death, and absence rules;
- external economic supply model;
- legal and jurisdictional privacy review.

These are design or downstream specialist gaps, not permission to invent facts.
