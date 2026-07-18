# Resonant Time Capsule — Settled Candidate Architecture

Status: `pass` for planning; unvalidated and not authorized for real intake

Profile: DomainSpec six-view architecture + UX companion

## Design Intent

Make the human experience simple—two optional word places at each of three
future openings—while making every result-affecting technical rule explicit.
The architecture must let independent verifiers reproduce the founding number
without exposing participation credentials or pretending the mechanism proves
identity, confidentiality, fairness, or economic quality.

## Source Contracts

| ID | Source | Contract |
| --- | --- | --- |
| SC-01 | `OPERATOR-CORRECTION-2026-07-12.md` | Supply selection is in scope; root + post-close beacon is the leading candidate. |
| SC-02 | `RESULT.md` | Character sums remain killed; real intake, band, beacon, crypto, and launch remain unauthorized. |
| SC-03 | prior `stages/06-DESIGN.md` | Preserve reusable canonicalization, consent, disposition, stewardship, and owner boundaries. |
| SC-04 | prior research findings | Do not collapse public, commitment, ciphertext, identity, consent, or fairness. |
| SC-05 | `TIME-CAPSULE-CONCEPT-AND-PLAN.md` | Product is the time capsule; number selection is its founding act. |
| SC-06 | operator request, 2026-07-16 | At most two words per participant for each 2/5/10-year release. |

## View 1 — Context

```text
participant
  -> admission credential
  -> six optional word slots
  -> intake + review + confirmation

admission owner -> quota verdict -----------------------------+
moderation owner -> display disposition ----------------------+ 
security/privacy owner -> sealed profile ---------------------+ 
                                                               v
rules owner -> frozen rules -> capsule manifest -> capsule root
                                                   + later beacon
                                                   -> supply receipt

capsule steward -> annual integrity -> 2y -> 5y -> 10y releases
independent verifier -> reproduction receipts
token/protocol owner <- validated selected-supply candidate
```

The public capsule consumes final accepted records. The private intake ledger
enforces the quota. The public manifest never needs a wallet, email, name, or
credential identifier.

## View 2 — High-Level Structure

### 1. Rules Registry

Freezes one `SupplySelectionRules` version before intake:

- cohort id and schema versions;
- 2y/5y/10y horizons and two-slot limit;
- word profile and record canonicalization;
- admission owner and quota semantics;
- timing, edits, closure, moderation, and appeals;
- public and sealed profiles;
- manifest and Merkle-root construction;
- inclusive supply band and token units;
- beacon source, observation rule, and fallback;
- rejection-sampling mapping;
- release, non-release, and stewardship contracts.

Any result-affecting change creates a successor rules version and a new cohort.

### 2. Admission Boundary

Consumes one opaque credential from an external owner. It creates one private
`SubmissionEnvelope` with six optional slots. It enforces two accepted slots
per horizon and rejects reuse after closure. Credential issuance and unique
personhood remain outside the module.

### 3. Form And Draft Store

Maintains reversible drafts until close. It validates the word profile, fills
slot 1 before slot 2, stores each slot's visibility choice, presents a complete
review, and issues a confirmation receipt. A participant may return and edit
until the deadline.

### 4. Disposition Boundary

Applies frozen eligibility, schema, timing, and public-content rules. It records
accepted, rejected, quarantined, or superseded outcomes without awarding rank
or silently rewriting closed history. Sealed plaintext is never moderated at
intake because the server must not receive it.

### 5. Manifest And Root Builder

Selects the latest confirmed accepted slot version, produces canonical public
records, sorts their leaf hashes lexicographically, constructs the Merkle root,
and publishes reproduction material. Duplicate word values are allowed; the
quota limits records, not vocabulary.

### 6. Supply Selector

After closure, observes the frozen beacon input, combines it with the rules
digest and capsule root under a domain tag, and uses rejection sampling to
select one integer inside the inclusive band. It emits a receipt but performs
no mint.

### 7. Release Coordinator

At 2, 5, and 10 years, selects records for that horizon. Public words can be
revisited. Sealed words require a valid opening plus release-time confirmation
before public display. Non-response remains sealed. Display quarantine changes
the release view, never the original record or supply.

### 8. Preservation And Verification

Stores public manifests and receipts redundantly, checks them annually, records
migrations, and supports independent reproduction. Sealed payload custody is a
separate approved profile with a declared loss/no-survivor outcome.

## View 3 — Low-Level Components

### SupplySelectionRules

```yaml
schema: resonant-time-capsule.rules.v1
cohort_id: stable-string
rules_version: immutable-version
horizons: [2y, 5y, 10y]
slots_per_horizon: 2
word_profile: rtc-word-nfc-v1
record_profile: rtc-record-jcs-v1
root_profile: rtc-merkle-sha256-v1
admission_profile: owner-handle
public_profile: public-word-v1
sealed_profile: disabled | approved-profile-handle
intake_open: timestamp
intake_close: timestamp
clock_source: frozen-handle
supply_unit: whole-token | atomic-unit
supply_min: non-negative-integer
supply_max: integer-gte-min
beacon_profile: provider-and-round-handle
beacon_fallback: fail-closed | predeclared-secondary
mapping_profile: rtc-rejection-sampling-v1
release_policy: reconfirm-before-sealed-display-v1
```

### SubmissionEnvelope — private intake state

```yaml
cohort_id: string
credential_ref: private opaque handle
state: draft | confirmed | closed | rejected
slots:
  2y: [slot-1, slot-2]
  5y: [slot-1, slot-2]
  10y: [slot-1, slot-2]
updated_at: timestamp
confirmation_version: integer
```

The envelope is excluded from the public manifest. A public quota receipt may
publish aggregate accepted/rejected counts but not credential mappings.

### PublicWordRecord

```yaml
schema: resonant-time-capsule.record.v1
rules_ref: immutable digest
horizon: 2y | 5y | 10y
slot: 1 | 2
mode: public-now
word_nfc: validated token
consent_profile: public-word-consent-v1
```

### SealedWordRecord

```yaml
schema: resonant-time-capsule.record.v1
rules_ref: immutable digest
horizon: 2y | 5y | 10y
slot: 1 | 2
mode: sealed-until-release
commitment: approved-profile output
ciphertext_ref: optional approved recovery envelope
consent_profile: sealed-reconfirm-v1
```

The sealed record shape is an interface contract. It cannot be enabled by this
document; security/privacy approval and fixtures are required.

### Canonical Record And Root Algorithm

1. Validate every final record against the frozen record schema.
2. Serialize each record under the frozen canonical JSON profile.
3. Compute `leaf_hash = SHA-256(0x00 || canonical_record_bytes)`.
4. Sort all `leaf_hash` values lexicographically as unsigned bytes. Repeated
   hashes remain repeated list elements.
5. Build the binary tree using `node_hash = SHA-256(0x01 || left || right)`.
6. When a level has an odd final node, promote it unchanged to the next level;
   do not duplicate it.
7. Define the empty-capsule root in the rules. Recommended: fail the founding
   ceremony when there are zero accepted records rather than select a supply.
8. Publish record canonical bytes, ordered leaf hashes, tree profile, root, and
   independent reproduction receipts. Sealed plaintext is never published.

The exact tree profile remains a candidate until two implementations reproduce
fixture outputs.

### Initial Supply Algorithm

Inputs:

- `rules_digest`;
- `capsule_root`;
- frozen beacon bytes and beacon receipt;
- inclusive integers `supply_min` and `supply_max` in the declared unit.

Pseudocode:

```text
domain = UTF8("RESONANTDAO_TIME_CAPSULE_SUPPLY_V1")
n = supply_max - supply_min + 1
require n > 0 and n <= 2^256

base = SHA256(domain || rules_digest || capsule_root || beacon_bytes)
limit = floor(2^256 / n) * n
counter = 0

loop:
  candidate = UINT256_BE(SHA256(domain || base || U64_BE(counter)))
  counter = counter + 1
  if candidate < limit:
    return supply_min + (candidate mod n)
  if counter exceeds the frozen safety bound:
    fail closed
```

The receipt includes every input byte, counter, selected integer, unit, and
mapping version. The algorithm is deterministic and designed to avoid modulo
bias; those properties require fixtures and independent reproduction before use.

### ReleaseManifest

```yaml
cohort_id: string
horizon: 2y | 5y | 10y
public_records: record refs
opened_sealed_records: opening receipt refs
still_sealed_count: integer
unrecoverable_count: integer
display_dispositions: show | quarantine | withhold
integrity_receipt: handle
stewardship_receipt: handle
supply_effect: none
```

## View 4 — Workflow Process

### Before Intake

1. Owners decide and freeze every `SupplySelectionRules` field.
2. Two implementations pass synthetic canonicalization, root, beacon, and
   mapping fixtures.
3. Form comprehension tests distinguish public, sealed, and quiet paths.
4. The sealed option remains disabled until its profile and custody pass review.
5. Publish rules, deadline, public copy, source code/recipe, and failure behavior.

### During Intake

1. Participant opens an opaque credential link or enters the credential.
2. The service resolves one private six-slot envelope.
3. Participant fills 0–2 words under each horizon.
4. Each filled slot chooses public-now or sealed-until-release.
5. Inline validation shows the normalized word and consequences.
6. Participant reviews all six places and confirms.
7. The service issues a private confirmation receipt.
8. Participant may edit and reconfirm until close; prior versions become superseded.

### Closing And Number Reveal

1. At the frozen deadline, writes fail closed.
2. Intake resolves the latest confirmed version of every slot.
3. Disposition rules create the final accepted record set.
4. Manifest builder canonicalizes records and freezes the root.
5. The root and manifest are published before the beacon is observed.
6. The declared beacon value is observed; fallback follows the frozen rule.
7. Supply selector runs the frozen algorithm.
8. Independent verifiers reproduce the result.
9. The result and receipts are published; no mint occurs in this module.

### At A Release

1. Verify capsule integrity and current steward authority.
2. Select the matching horizon records.
3. Revisit public words beside current voluntary reflections.
4. Invite sealed contributors to open and reconfirm display.
5. Treat no response, lost material, or refusal as still sealed/unrecoverable.
6. Moderate display without changing the root.
7. Publish a release manifest and stewardship receipt.

## View 5 — Decision Flow

```text
Valid admission credential?
  no -> explain and stop; no slot state created
  yes -> load six-slot envelope

For each horizon:
  zero words -> leave quiet
  one word -> fill slot 1
  two words -> fill slots 1 and 2
  more than two -> reject locally and server-side

For each filled slot:
  public-now -> store validated normalized word
  sealed-until-release -> only enable approved client-side sealed profile
  sealed profile unavailable -> keep option disabled; never collect plaintext

Before close?
  yes -> draft/edit/reconfirm
  no -> reject all writes

Manifest/root reproduced by two implementations?
  no -> hard fail; do not observe/accept supply result
  yes -> observe frozen beacon

Beacon valid under frozen rule?
  no -> apply predeclared fallback or fail closed
  yes -> map into frozen band

At horizon, valid opening and current display confirmation?
  yes -> moderation -> show or quarantine
  no -> remain sealed

Any release path tries to change supply?
  yes -> hard fail
```

## View 6 — Dependency And Interface Boundaries

| Interface | Owner | Consumed | Emitted | Forbidden collapse |
| --- | --- | --- | --- | --- |
| Admission | governance/membership | opaque credential verdict | quota receipt | credential/wallet != unique human |
| Token engineering | token/protocol | approved unit and band | selected integer + receipt | selected != economically optimal or minted |
| Beacon | security/mechanism | source, round, value, availability | beacon receipt | public != independent/uncontrollable by itself |
| Cryptography | security/privacy | approved commitment/encryption profile | sealed/opening receipts | commitment != encryption or guaranteed recovery |
| Moderation | content/legal | versioned policy | display disposition | quarantine != root rewrite |
| Stewardship | archive/successor | storage and migration contract | integrity/continuity receipt | custody != consent |
| UX/accessibility | product/community | word/form content contract | comprehension evidence | participation != engagement proof |
| Verification | fixture/evidence owner | public rules, records, beacon, outputs | reproduction receipt | fixture scaffold != validation result |

## Design Gate

The architecture is coherent and plan-ready. It is not intake-ready. L0 may
implement only public explanation, non-collecting form UX, schemas, and synthetic
fixtures. Real sealed data, real supply selection, and ceremony operations stay
behind their named owner gates.

