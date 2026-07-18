# Candidate Specification — Time Capsule Live Intake Boundary

Status: definition-complete for refinement; not implementation-ready and not authorized for live intake

## Purpose

Define the smallest product boundary that could eventually accept Time Capsule
contributions without collapsing a friendly form into an unsafe database or a
security promise the system cannot keep.

## Capability States

| State | Data | Allowed behavior | Explicitly forbidden |
| --- | --- | --- | --- |
| `static-preview` | invented browser-only examples | explain and exercise the six-slot journey without collection | network submission, persistence, analytics, credentials |
| `synthetic-intake` | invented records and test credentials | exercise API, schema, transactions, close, export, and receipts in isolation | hosted-site connection, production storage, real participants |
| `public-live` | approved public words plus private quota/session metadata | accept public words under approved admission, moderation, retention, incident, and operations contracts | sealed plaintext, implied anonymity, unique-human claims, token effects |
| `sealed-live` | commitments/ciphertext plus approved recovery material | only behavior allowed by an approved client-side security/custody profile | server plaintext, automatic reveal, unspecified master keys, inferred consent |

Promotion changes the capability state; it is never inferred from code existing.

## Actors And Owners

- Participant: chooses zero to six optional places and a mode for each filled place.
- Product/community owner: owns comprehension and invitation posture.
- Admission owner: issues, recovers, revokes, and audits opaque credentials; does not claim unique humanity without separate evidence.
- Intake service owner: owns API behavior, transactions, close, receipts, and operations.
- Data steward: owns retention, deletion, backup, restore, migration, and access review.
- Content/moderation owner: owns public display, quarantine, appeal, and harmful-release decisions.
- Security/privacy/custody owners: own any sealed profile and its narrow guarantees.
- Incident owner: owns detection, containment, notification, evidence, and recovery.
- Archive/successor owner: owns ten-year continuity and no-survivor behavior.
- Independent verifier: reproduces public manifests and receipts without receiving private admission state.

No implementation artifact may silently stand in for one of these owners.

## Data Classes

| Class | Examples | Default exposure | Required boundary |
| --- | --- | --- | --- |
| public rules | cohort id, rules version, close time, schemas | public | immutable/versioned |
| public content | confirmed `public-now` words after disposition | public | explicit consent and moderation |
| public verification | canonical records, manifest, root, selector receipts | public | no credential/session references |
| private admission | credential digest/ref, status, issuance/audit metadata | restricted | separate owner and namespace |
| private intake state | envelope, slot drafts, confirmation versions, edit session | restricted | transactional, access-controlled, time-bounded |
| private operational | audit events, rate limits, incident evidence | restricted | minimization, access log, retention schedule |
| sealed artifacts | commitment, ciphertext ref, opening/recovery material | profile-specific | disabled until approved profile |
| forbidden telemetry | word fields, credentials, commitments, receipts in analytics/log payloads | forbidden | structural redaction and tests |

The same value may have different consequences in different states, but no
data class changes exposure silently.

## Core Guarantees

1. Zero participation is valid and unpenalized.
2. At most two accepted records exist per horizon and six per envelope.
3. A confirmation creates a new immutable envelope version atomically.
4. Close rejects every mutation at or after the frozen instant.
5. Only the latest confirmed accepted slot versions feed the manifest.
6. Credentials, sessions, audit metadata, and envelope links never enter public records.
7. Public and sealed paths have different consent and data contracts.
8. Sealed plaintext never reaches the service under an approved sealed profile.
9. Release-time display cannot change the founding root or initial supply.
10. Participation creates no allocation, rank, reward, membership proof, or governance power.

## Required Live-Form Journey

1. Load frozen public rules before asking for a credential.
2. Resolve an opaque credential without disclosing whether another credential exists.
3. Establish an expiry-bounded private session for one envelope.
4. Edit the six optional places with identical client/server validation.
5. Explain public, sealed-disabled/approved, and quiet outcomes per filled place.
6. Review normalized values and all consequences before confirmation.
7. Confirm through an idempotent request and return a private receipt.
8. Permit edit/reconfirmation until close under explicit version semantics.
9. At close, reject writes, reconcile latest confirmed versions, and issue inclusion/non-inclusion receipts.
10. Preserve an accessible recovery/help path that does not disclose other participants.

## Database Contract Questions This Run Must Answer

- Which logical entities and keys exist, and which must never join publicly?
- Which operations are transactional and what is their isolation requirement?
- How are retries, replay, idempotency, optimistic concurrency, and close races handled?
- Which values are encrypted at rest, tokenized, hashed, or not stored at all?
- What are retention, deletion, legal-hold, and display-removal semantics by data class?
- What is backed up, restored, verified, migrated, and deliberately excluded?
- What audit facts are required without logging words or secrets?
- How does public export prove absence of forbidden fields?
- How does the system fail when the database, clock, queue, key, or steward is unavailable?

This definition does not select a database product or application framework.

## Safety Questions This Run Must Answer

- What can an attacker learn from credentials, timing, counts, errors, metadata, and releases?
- How are brute force, replay, enumeration, spam, coercion, and abusive content handled?
- What does “sealed” mean: commitment only, recoverable encryption, or no sealed path?
- Who can decrypt/open, under what authority, and what happens on loss, death, or succession?
- How can moderation alter display without rewriting the frozen record?
- What incident classes stop intake, stop display, invalidate a cohort, or require notification?
- Which guarantees remain true after partial failure, operator compromise, or ten-year migration?

## Readiness Conditions

- Static preview may proceed with zero data flow evidence.
- Synthetic intake requires schemas, fixtures, state tests, and isolated storage.
- Public-live requires selected runtime/stack, approved admission, moderation,
  retention, incident, operations, accessibility, and recovery contracts.
- Sealed-live additionally requires an approved threat model, construction,
  custody, loss/migration plan, negative fixtures, and recovery drills.
- Any unresolved blocker keeps its capability state unavailable.

## Definition Gaps

- G-D1 application repository/runtime/database technology not selected;
- G-D2 production scale, availability, and operational envelope not stated;
- G-D3 credential issuance and account recovery authority unresolved;
- G-D4 retention, deletion, jurisdiction, and incident-owner decisions unresolved;
- G-D5 sealed profile and ten-year custody unresolved;
- G-D6 independent fixture evidence absent.

These gaps are inputs to Design and Plan. They are not permission to invent answers.

