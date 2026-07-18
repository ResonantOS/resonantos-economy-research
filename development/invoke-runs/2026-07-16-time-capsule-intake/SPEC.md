---
title: Resonant Time Capsule Intake And Founding Supply
status: candidate-design
updatedAt: 2026-07-16
owner: Resonant Time Capsule product cycle
discovery_source: development/refinement-runs/2026-07-12-number-lottery/
discovery_waiver_reason: null
---

# Resonant Time Capsule Intake And Founding Supply

## What This Module Owns

This module turns bounded participant word choices into one frozen capsule
manifest, one reproducible capsule root, one candidate initial-supply result,
and three later release cohorts. It owns the intake and lifecycle contracts;
it does not own unique-human proof, token-economic calibration, production
cryptography, minting, or launch authority.

## The Plain-Language Contract

You have up to two places in each future opening: two years, five years, and ten
years. You may leave none, one, or two words in each. Every word can be visible
now or saved for that opening.

When contributions close, every accepted place becomes one record in the
capsule. The complete record becomes one digital fingerprint. That fingerprint
is mixed with a public value that arrives after the capsule is locked, and the
result is placed inside a range chosen in advance. That produces the initial
token supply once. Opening words later never changes the number.

## Module Map

```text
frozen rules
  -> admitted participant + six optional slots
  -> final accepted slot records
  -> canonical manifest + capsule root
  -> post-close beacon
  -> initial supply result
  -> 2y / 5y / 10y consent-safe releases
```

## Actors

| Actor | Responsibility | Boundary |
| --- | --- | --- |
| Participant | Fill 0–2 slots per horizon, choose visibility, review, and confirm. | A contribution is not identity, status, reward, or authority. |
| Admission owner | Issue one opaque participation credential per admitted participant. | The form enforces a credential quota; it does not prove one human. |
| Intake steward | Apply frozen timing, schema, and disposition rules. | Cannot change closed records, range, beacon, or mapping. |
| Moderation owner | Review public display and release-time display safety. | Display disposition never rewrites the frozen root. |
| Security/privacy owner | Approve the sealed construction, threat model, and custody. | Real sealed intake stays disabled until approval. |
| Capsule steward | Preserve manifests, commitments, receipts, and release state. | Custody is not consent or token authority. |
| Independent verifier | Reproduce manifest, root, beacon input, and supply result. | Reproduction is not proof of fairness, identity, or economics. |
| Token/protocol owner | Approve representable supply space and consume a validated result. | The capsule does not mint or calibrate economics. |

## Capabilities

| Capability | What it owns | Primary output |
| --- | --- | --- |
| FreezeRules | Version and freeze every result-affecting rule before intake. | `SupplySelectionRules` |
| AdmitParticipant | Resolve an opaque credential and enforce slot quotas. | `AdmissionSession` and quota receipt |
| ComposeSubmission | Draft, validate, review, and confirm up to six word slots. | `SubmissionEnvelope` |
| CloseCapsule | Freeze final accepted records and construct the manifest/root. | `CapsuleManifest` and `CapsuleRootReceipt` |
| SelectInitialSupply | Mix root with the declared later beacon and map into the frozen band. | `InitialSupplyReceipt` |
| ReleaseHorizon | Revisit public words and open only separately authorized sealed words. | `ReleaseManifest` and display receipts |
| PreserveAndAudit | Check integrity, migration, and reproducibility over time. | annual integrity and stewardship receipts |

## Core Domain Concepts

### Release Horizon

The closed set `2y | 5y | 10y`. Each horizon owns exactly two ordered optional
slots: slot 1 must be filled before slot 2.

### Word Slot

```yaml
horizon: 2y | 5y | 10y
slot: 1 | 2
state: empty | draft | confirmed | rejected | superseded | closed
visibility: public-now | sealed-until-release
word: one validated Unicode token in draft/public paths
consent_profile: versioned handle
```

An empty slot creates no capsule record. Therefore one admitted participant
contributes between zero and six accepted records.

### Submission Envelope

The private intake view for one participation credential. It contains the six
slots and enforces `accepted_count(horizon) <= 2`. The credential is not
published in the capsule manifest.

### Capsule Record

A versioned, canonical public record. In `public-now` mode it contains the
normalized word. In `sealed-until-release` mode it contains the approved
commitment and encrypted-envelope references, never plaintext. The live sealed
shape remains disabled until its cryptographic profile is approved.

### Capsule Root

A reproducible authenticated digest over every final accepted record across all
three horizons. Horizon labels are inside each record, so all releases shape the
founding root without collapsing into one undifferentiated list.

### Initial Supply Result

One integer inside the frozen inclusive band. It is computed once after close
from the rules digest, capsule root, and post-close beacon. It is not recomputed
when words are opened.

## Rules And Invariants

1. `0 <= accepted_words(participant, horizon) <= 2`.
2. `0 <= accepted_words(participant, all_horizons) <= 6`.
3. Slot 2 cannot be confirmed while slot 1 is empty.
4. Each filled slot chooses one visibility mode independently.
5. Public and sealed records each contribute one record; neither has extra weight.
6. Silence creates no penalty and no public abstention record by default.
7. The admission credential is quota infrastructure, not a public identity.
8. The capsule closes before the beacon value can be known.
9. The supply band, beacon source/fallback, canonicalization, root profile, and
   mapping algorithm are frozen before intake.
10. Release, non-release, moderation, or key loss after close cannot alter the
    root or initial supply.
11. `encoding != encryption`, `commitment != guaranteed confidentiality`, and
    `wallet_or_credential != unique_human`.
12. Participation grants no token allocation, rank, reward, membership proof,
    reputation, or governance authority.

## Word Input Profile

- UTF-8 input, normalized to Unicode NFC before confirmation;
- leading and trailing whitespace removed;
- any remaining whitespace or line break is rejected, preserving one token;
- 1–32 extended grapheme clusters after normalization;
- letters from any script plus marks, apostrophes, and hyphens are allowed;
- control characters and invisible formatting controls are rejected;
- the normalized value shown at review is the value that enters a public record;
- exact multilingual fixtures must pass before real intake.

This is a candidate input profile, not a claim that Unicode language bias is solved.

## Lifecycle

```text
rules-draft -> rules-frozen -> intake-open -> intake-closed
  -> manifest-frozen -> beacon-observed -> supply-reproduced
  -> 2y-release -> 5y-release -> 10y-release -> stewardship-handoff
```

Edits are permitted only during `intake-open`. Closing selects the latest
confirmed version of each slot. Rejected or superseded drafts do not enter the
manifest, but disposition receipts remain auditable.

## Acceptance Surface

Definition passes to design when the design:

- includes all six architecture views;
- shows exactly how six optional slots become capsule records;
- separates quota enforcement from personhood claims;
- specifies the root, beacon, and range-mapping flow;
- provides a complete form journey and copy;
- makes real sealed intake and real launch explicit owner gates;
- carries the three release horizons without recalculating supply.

## Non-Goals

- selecting the final supply band or beacon provider in this run;
- proving Sybil resistance or unique humanity;
- collecting real public or private words;
- claiming encrypted ten-year recovery before a custody design exists;
- proving economic optimality, fairness, or a mentality effect;
- minting, distribution, sale, liquidity, or governance integration.

