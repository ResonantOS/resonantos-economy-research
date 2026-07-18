# Decisions

## Time Capsule Initial Live Design

Status: `PASS` — Decision Gate complete; implementation proof gates pending

Last updated: 2026-07-17T14:55:58Z

### Scope

Define the smallest honest Time Capsule implementation that can be demonstrated
today, accept an approved class of real contributions, close intake on Monday,
derive the ritual starting number, and preserve future 2/5/10-year openings.

### Evidence Basis

- `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/RESULT.md`
- `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/subagents-review/findings.md`
- `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/02-live-intake-spec.md`
- `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack.md`
- `development/research/2026-07-17-agentless-time-capsule-protocol/README.md`

### D-01 — Initial Saved-Message Privacy Boundary

Question: What does “saved for the opening” mean in the initial version?

Classification: blocker

Decision: **Entrusted capsule**

Selected by: user, in chat

Selected at: 2026-07-17T13:07:51Z

Amended by: D-15. Entrusted saved content remains hidden until its horizon and is
then released publicly; private return is not part of the initial capsule.

Rationale: This preserves the delayed personal-message experience while remaining
feasible for the Monday closing. Saved messages may be encrypted at rest and access
restricted, but the system does not claim end-to-end encryption or that authorized
stewards are technically unable to read them.

Considered options:

1. Entrusted capsule — selected. Feasible for Monday and preserves delayed messages,
   but depends on explicit operator trust and access controls.
2. Public-only launch — lower privacy and operational risk, but removes the delayed
   personal-message experience from the initial live version.
3. Cryptographically sealed — stronger confidentiality, but requires an approved
   browser-encryption, key-custody, recovery, migration, and permanent-loss profile
   that cannot responsibly be assumed for Monday.

Downstream consequences:

- Participant copy must say “saved for opening” or “entrusted to the capsule,” not
  “only you can read this,” “nobody can access it,” or equivalent absolute claims.
- Before its horizon, saved plaintext must never appear in analytics, application
  logs, public exports, receipts, or the number-calculation input.
- Storage encryption, authorization, access logging, backup handling, and the
  opening procedure remain implementation requirements.
- Client-side encryption and distributed recovery remain a possible later upgrade,
  not a property of the initial version.

### D-02 — Initial Admission And Quota Credential

Question: How does the initial system recognize a participant, enforce at most two
messages per opening, and permit editing before close?

Classification: blocker

Decision: **Private invite link**

Selected by: user, in chat

Selected at: 2026-07-17T13:11:40Z

Rationale: A private bearer invitation provides the smallest workable admission and
edit mechanism without collecting email addresses or requiring a wallet. It can
enforce one six-slot envelope per issued invitation while remaining honest that
invitation issuance, not the software, determines who counts as one participant.

Considered options:

1. Private invite link — selected. Minimal personal data and low participant
   friction, with steward-assisted recovery when a link is lost.
2. Email magic link — familiar recovery, but adds identity data, an email provider,
   deliverability behavior, and a larger privacy surface.
3. Wallet signature — avoids email but adds wallet friction and still does not prove
   one wallet equals one person.
4. Open anonymous access — lowest friction, but cannot credibly enforce the intended
   per-participant quota or recover editing access.

Downstream consequences:

- Each invitation is a high-entropy bearer secret; only a cryptographic digest is
  stored server-side.
- One active invitation maps to one envelope containing at most two accepted slots
  for each of the 2/5/10-year openings.
- Invitation secrets, digests, envelope links, and edit-session data never enter the
  public manifest, analytics, or application logs.
- Recovery is an explicit steward action: revoke the old invitation and issue a new
  one for the same envelope, with an audit event that contains no message text.
- The system claims neither unique-human verification nor Sybil resistance beyond
  the invitation issuer's process.

### D-03 — Initial Runtime And Datastore

Question: Which application and database stack should run the initial intake?

Classification: blocker

Decision: **Node.js/TypeScript API with SQLite on the existing VPS**

Selected by: user, in chat

Selected at: 2026-07-17T13:14:35Z

Rationale: The existing static site already runs through Docker Compose, Nginx,
Traefik, and `time-capsule.cyberalchemize.com`. A small Node.js/TypeScript API and
single-writer SQLite database add the fewest new operational parts while providing
the transactions and constraints needed for an invited, bounded cohort before the
Monday close.

Considered options:

1. Node.js/TypeScript plus SQLite on the existing VPS — selected. Lowest delivery
   and operational complexity for the bounded initial cohort.
2. Node.js/TypeScript plus PostgreSQL on the VPS — stronger multi-worker growth
   path, but adds database administration and failure surfaces before Monday.
3. Managed PostgreSQL/backend — reduces some database operations but introduces a
   new provider, trust boundary, access-key surface, and deployment path.

Downstream consequences:

- Browser and server remain in the JavaScript/TypeScript ecosystem.
- Nginx serves the site and reverse-proxies a narrow `/api/` surface to a separate
  application container; the database is never exposed through Traefik.
- SQLite lives on a persistent host volume and uses transactions, stable IDs,
  uniqueness constraints, expected versions, and idempotency keys for mutations.
- Saved-message fields receive application-level authenticated encryption before
  database insertion. Encryption material is not stored in the database or image.
- Database backups and encryption material are protected separately, and a restore
  check is required before real intake is described as available.
- The logical schema must remain portable to PostgreSQL; no scale, high-availability,
  or decade-long durability claim follows from this initial single-host stack.

### D-04 — Participant Changes Before Close

Question: What may a participant change before the capsule closes?

Classification: blocker

Decision: **Editable, explicitly confirmed envelope until close**

Selected by: user, in chat

Selected at: 2026-07-17T13:17:34Z

Rationale: Participants need a humane way to correct or withdraw personal messages
without introducing steward-mediated editing. Immutable confirmed versions preserve
an audit trail, while the latest confirmed version provides one deterministic state
for the Monday snapshot.

Considered options:

1. Editable envelope until close — selected. Supports correction and withdrawal
   through the participant's private invitation, at the cost of explicit version and
   concurrency behavior.
2. Submit once, then immutable — mechanically simpler, but unnecessarily punishing
   for mistakes or reconsidered personal messages.
3. Steward-mediated changes — reduces participant-facing functionality but increases
   operator access, manual work, and ambiguity over authorization.

Downstream consequences:

- Unconfirmed drafts remain in browser memory; the server stores only explicitly
  confirmed immutable envelope versions.
- Every confirmation carries an idempotency key, request digest, and expected prior
  version. A version conflict returns a recoverable error rather than overwriting.
- Adding, replacing, changing visibility, or withdrawing a slot creates a new
  confirmed envelope version atomically.
- A withdrawn slot is absent from the selected closing state; non-content audit facts
  may record that a version transition occurred without retaining withdrawn text in
  application logs.
- Only the latest confirmed version committed before the closing instant is eligible
  for moderation and the frozen manifest.
- At or after the server-authoritative closing instant, every mutation path is fenced
  and must return the same closed-state response and final receipt path.

### D-05 — Live Public Feed And Rapid Moderation

Question: When should public messages appear, and how can unwanted messages be
removed quickly?

Classification: blocker

Decision: **Immediate public feed with rapid reversible hiding and explicit rejection**

Selected by: user, in chat

Selected at: 2026-07-17T13:20:20Z

Rationale: Seeing other contributions makes the ritual feel inhabited while it is
open. A one-action hide path limits exposure without allowing a hurried moderation
action to silently decide whether a contribution belongs to the frozen capsule.

Considered options:

1. Review before display — strongest preventive control, but delays the visible
   shared experience and creates an approval bottleneck.
2. Publish only after close — operationally simpler, but removes the live community
   feed from the open-capsule period.
3. Publish immediately and moderate afterward — selected with a two-stage
   hide-versus-reject repair to reduce its takedown and manifest risks.

Simple moderation process:

1. A participant explicitly confirms a public message.
2. The server publishes an anonymous display projection containing the message,
   horizon, stable public display ID, and time—never the invitation or envelope link.
3. The public page begins showing the message in the shared feed. A small report
   control may create a rate-limited flag for steward attention.
4. A steward uses a separate authenticated moderation view and selects **Hide**.
   The text disappears from the public feed immediately and the record moves to
   `hidden-pending-review`.
5. The steward then selects **Restore** or **Reject**, with a short reason code.
   Restore returns it to the feed. Reject removes it from closing eligibility and
   gives the participant a private rejected-status receipt.
6. A hidden record still awaiting review at close is excluded rather than silently
   accepted.

Downstream consequences:

- Hide is immediate, reversible, display-only, and records message ID, action,
  steward, reason, and time without copying message text into the audit log.
- Reject is a distinct pre-close disposition that changes eligibility and cannot be
  inferred from a report count or a temporary hide.
- Only visible/accepted public records and accepted saved-message commitments enter
  the closing snapshot. Rejected and unresolved hidden records do not.
- After an accepted record enters the frozen manifest, later display hiding cannot
  rewrite its commitment, fingerprint, or the derived number.
- Public removal cannot recall copies already seen or captured; participant copy must
  say this plainly.
- Saved-for-opening messages never enter this public feed and are not exposed to this
  live moderation surface.

### D-06 — Content Retention After Close

Question: Once the capsule fingerprint and number are frozen, what may a participant
remove?

Classification: blocker

Decision: **No participant removal after close**

Selected by: user, in chat

Selected at: 2026-07-17T13:22:28Z

Rationale: The capsule is an archival commitment: participants have an editable and
withdrawable period while it is open, followed by a clear point after which its
accepted contents and proof remain intact for their scheduled return.

Considered options:

1. Keep proof but allow authenticated content destruction — preserves the number
   while providing later participant withdrawal, but creates intentional empty
   openings and weakens the archival promise.
2. Permit no participant removal after close — selected. Strongest continuity and
   simplest future-opening contract, with a correspondingly stronger consent duty
   before confirmation.
3. Remove content and commitment — strongest erasure but breaks the frozen manifest,
   fingerprint, and reproducibility of the ritual number.

Downstream consequences:

- Participants may edit or withdraw only before the server-authoritative closing
  instant. The final confirmation screen must state this irreversibility plainly.
- Accepted public content, saved content, commitments, and required verification
  metadata remain in the archive through their governed retention horizon.
- Moderation may suppress public display after close without deleting or rewriting
  the archived record. A hidden placeholder and stable public record ID preserve the
  distinction between display removal and archival deletion.
- The system cannot recall copies of public messages already viewed or captured.
- Saved content remains access-restricted until its selected opening procedure; its
  retention does not grant automatic public-display consent at opening.
- Backup, restore, migration, successor, and incident procedures must preserve the
  accepted closed state rather than silently reopening participant mutation.

### D-07 — Authoritative Closing Instant

Question: At what exact instant does the initial capsule stop accepting changes?

Classification: blocker

Decision: **2026-07-21T00:00:00Z**

Selected by: user, in chat

Selected at: 2026-07-17T13:34:28Z

Rationale: Midnight UTC at the start of Tuesday keeps the capsule open through most
of Monday while providing one unambiguous, timezone-independent closing instant.
It corresponds to Monday, July 20 at 21:00 in São Paulo.

Considered options:

1. Tuesday, July 21 at 00:00 UTC — selected. Monday at 21:00 in São Paulo.
2. Monday, July 20 at 00:00 UTC — rejected because it would close on Sunday at
   21:00 in São Paulo, earlier than the intended Monday collection period.
3. Another exact UTC instant — not selected.

Downstream consequences:

- Public copy shows both the UTC instant and the participant-facing local conversion:
  “Closes Monday, July 20 at 21:00 São Paulo / Tuesday 00:00 UTC.”
- The API validates the closing fence inside the same transaction that commits a
  confirmation or moderation disposition. A transaction committing at or after
  `2026-07-21T00:00:00Z` is rejected even if the request began earlier.
- Intake changes atomically from `open` to `closing` to `closed`; the closing epoch
  and snapshot identifier are durable and idempotent.
- Only the latest confirmed, eligible records committed before the fence enter the
  canonical snapshot. Unresolved hidden public records are excluded.
- Server clock synchronization and the recorded UTC close time become operational
  evidence; browser clocks never decide acceptance.

### D-08 — Number Seed

Question: What combines with the closed capsule to create the deterministic number
seed?

Classification: blocker

Decision: **Canonical capsule fingerprint plus the Bitcoin block containing its
required commitment transaction**

Selected by: user, in chat

Selected at: 2026-07-17T13:39:59Z

Amended by: D-14, selected by the user at 2026-07-17T14:32:32Z

Rationale: The capsule fingerprint makes every accepted contribution part of one
shared input. Requiring that fingerprint inside a transaction before using the
transaction's containing block hash ensures the public signal is produced only
after the commitment exists, without pretending that this low-stakes ritual is a
high-assurance randomness beacon.

Considered options:

1. Capsule fingerprint plus first later Bitcoin block — originally selected, then
   narrowed by D-14 to the block containing the required fingerprint transaction.
2. Capsule fingerprint only — simpler, but permits candidate-result preview while
   contributions and moderation are still changing.
3. Bitcoin block only — unpredictable before close, but submitted messages would
   not affect the number.

Canonical method:

1. Freeze the latest eligible accepted records at close.
2. Produce versioned canonical manifest bytes containing public rules, close time,
   horizon, slot, stable public record ID, and a commitment for every accepted
   record. Saved plaintext and invitation/envelope references are excluded.
3. Compute `capsule_fingerprint = SHA-256(canonical_manifest_bytes)`.
4. Construct and broadcast the D-13 Bitcoin mainnet transaction carrying that exact
   fingerprint after the close transition and manifest freeze have completed.
5. Select the Bitcoin block containing that canonical transaction. It becomes final
   after six confirmations.
6. Compute the domain-separated seed:

   `seed = SHA-256("resonant-time-capsule-number-v1\n" + capsule_fingerprint + "\n" + bitcoin_block_hash)`

7. Interpret the seed as one unsigned big-endian integer and map it into the
   separately approved numeric range.

Downstream consequences:

- Canonicalization, ordering, normalization, commitment construction, hash encoding,
  and range mapping are published before the capsule closes.
- Saved-message commitments use high-entropy per-record randomness so the public
  commitment does not become a practical dictionary of short phrases.
- The result receipt publishes the manifest bytes and hash, selected block height,
  block hash, seed, formula version, range, and final number.
- A pre-confirmation chain reorganization changes the candidate block. The selected
  block becomes final only after six confirmations.
- If the Bitcoin signal is temporarily unavailable, the ritual waits. No operator
  may substitute another block, timestamp, or random value.
- The fingerprint transaction is required and its containing block is the only
  Bitcoin block eligible for the number signal. No operator may substitute a
  neighboring block.

### D-09 — Number Range

Question: Into which published interval does the deterministic seed map?

Classification: blocker

Decision: **Broad billion range from 1,000,000,000 through 99,999,999,999**

Selected by: user, in chat

Selected at: 2026-07-17T13:48:07Z

Rationale: A broad billion-scale interval lets the capsule influence the complete
readable result instead of reserving the leading digits for the earlier 42 reference.
It keeps the reveal within one coherent magnitude while preserving 99 billion
possible values.

Considered options:

1. 42-billion band — preserves the original cultural reference while the capsule
   controls the remaining nine digits.
2. Broad billion range — selected. More of the visible number comes from the ritual
   while remaining legible.
3. Broad trillion range — more possible magnitudes, but less consistent and less
   memorable as one reveal.

Canonical mapping:

`number = 1_000_000_000 + (unsigned_big_endian(seed) mod 99_000_000_000)`

Range: `1,000,000,000–99,999,999,999`, inclusive.

Downstream consequences:

- The range, inclusive endpoints, seed interpretation, and formula version are
  published before intake closes.
- The same manifest bytes and Bitcoin block always reproduce the same result.
- The result is a ritual candidate number, not evidence that the selected magnitude
  is economically appropriate and not authorization to mint or distribute tokens.

### D-10 — Future Steward Access Quorum

Question: How many independent stewards must cooperate to unlock a future release
bundle?

Classification: blocker

Decision: **Three of five stewards**

Selected by: user, in chat

Selected at: 2026-07-17T13:49:49Z

Rationale: A 3-of-5 threshold prevents unilateral or two-person opening while
surviving the loss or unavailability of two shares across the ten-year horizon.
The additional coordination cost is justified by the capsule's long-lived entrusted
content.

Considered options:

1. Three of five stewards — selected. Stronger compromise resistance and long-term
   loss tolerance, with higher coordination and succession obligations.
2. Two of three stewards — simpler and still non-unilateral, but survives only one
   missing share.
3. One steward — fastest, but creates a single point of access, compromise, loss,
   incapacity, and succession.

Downstream consequences:

- Closing produces independent encrypted 2/5/10-year release bundles with distinct
  randomly generated bundle keys.
- Each bundle key is divided into five separately delivered shares; any three
  reconstruct that bundle key. A share for one horizon cannot unlock another.
- No steward, server image, database, archive copy, or backup retains a complete
  future bundle key after the verified closing transition.
- Share material is never stored beside an encrypted release bundle and is never
  transmitted through application logs, analytics, participant receipts, or the
  public manifest.
- Replacing a steward requires an existing three-person quorum, a new five-share set,
  revocation of the former set, and a signed public succession receipt that exposes
  no share or message content.
- The five people, their acceptance, and independent storage arrangements must be
  published before saved-message intake is enabled. Placeholders may support today's
  design demonstration but cannot support a live stewardship claim.
- D-11 narrows this quorum to emergency recovery. It is no longer the normal future
  opening path.

### Research Candidate — Operatorless Future Opening

Status: **research complete; selected as the protocol-primary path by D-11**

The candidate uses drand tlock to make each horizon bundle decryptable from a
precommitted future randomness round, Arweave to store only ciphertext and a static
recovery package under a one-time-funded model, and a browser decoder that requires
no Resonant API or scheduled job.

This removes the need for an appointed Resonant steward during an ordinary opening,
but it does not remove dependencies. It assumes the selected drand chain reaches
every target round, the encrypted archive remains retrievable, and the decoder
remains interpretable. The 10-year horizon is at the edge of tlock's documented
5–10-year expected security range and is not quantum-resistant.

D-11 selects the protocol-primary hybrid, D-10 is narrowed to emergency recovery,
and D-15 selects public-at-opening only.

The candidate architecture, primary-source record, claim ledger, failure residue,
and required proof gates are defined in
`development/research/2026-07-17-agentless-time-capsule-protocol/`.

### D-11 — Future Opening Architecture

Question: Which path normally opens a future bundle, and what happens if that path
fails?

Classification: blocker

Decision: **Protocol-primary hybrid with 3-of-5 emergency recovery**

Selected by: user, in chat

Selected at: 2026-07-17T14:21:23Z

Rationale: Drand tlock plus an Arweave recovery-complete package removes the need
for a Resonant operator during an ordinary opening. Retaining the already selected
3-of-5 quorum provides a separately held recovery path if the public protocol,
archive retrieval, or decoder fails during the long horizon.

Considered options:

1. Operatorless primary only — simplest future ceremony and no appointed recovery
   actor, but drand failure, archive loss, or participant key loss can become
   permanent.
2. Protocol-primary hybrid — selected. Normal opening uses drand, Arweave, and a
   static decoder; 3-of-5 stewards exist only for emergency recovery.
3. Human primary — the quorum performs every opening, with public protocols used
   only as mirrors and evidence.

Downstream consequences:

- Each horizon uses one encrypted content bundle and two independent key paths:
  a tlock envelope for the target drand round and 3-of-5 recovery shares stored away
  from the bundle.
- The static opening page requires no Resonant API. It retrieves the archive,
  verifies the pinned manifest and drand chain, and decrypts locally when due.
- The fallback is not described as cryptographically unable to open early. Any
  cooperating three stewards can reconstruct their recovery material before the
  horizon; policy, audit, and public receipts constrain that risk.
- Public-at-opening messages become readable by anyone after release. D-15 removes
  private-return items and participant recovery keys from the initial capsule.
- Every real bundle must pass the operatorless and 3-of-5 disposable recovery tests
  before the close ceremony destroys working plaintext and complete bundle keys.
- This decision selects the architecture but does not claim its closure gates have
  passed. Live use remains blocked until those proofs and real steward assignments
  exist.

### D-12 — Durable Bitcoin Commitment

Question: Must the frozen capsule fingerprint be committed into Bitcoin at close?

Classification: blocker

Decision: **Required Bitcoin anchor of the canonical capsule fingerprint**

Selected by: user, in chat

Selected at: 2026-07-17T14:21:23Z

Rationale: A confirmed Bitcoin commitment gives the small capsule fingerprint a
durable, independently verifiable publication surface even if the Resonant domain,
database, and ordinary mirrors disappear.

Considered options:

1. Required Bitcoin anchor — selected. Strongest durable public commitment, with a
   transaction, fee, confirmation, and proof-packaging requirement.
2. Optional Bitcoin anchor — lower closing risk but allows the capsule to close
   without the intended independent commitment.
3. No Bitcoin anchor — simplest, but leaves durability entirely to archive and
   ordinary publication paths.

Downstream consequences:

- Bitcoin stores the 32-byte fingerprint commitment, not the manifest, messages,
  ciphertext, decoder, or decryption keys. Those remain in the recovery-complete
  archive and mirrors.
- The closing receipt records the fingerprint, transaction identifier, raw
  transaction or reproducible commitment evidence, block height, block hash, and
  confirmation state.
- Verification requires retrieving the manifest separately, recomputing its hash,
  and comparing it with the Bitcoin commitment.
- The commitment proves inclusion in Bitcoin's ordered block history. It does not
  make the archived content recoverable and does not turn a self-declared date
  inside hashed data into an independent timestamp.
- D-13 selects a direct Bitcoin data commitment as the carrier mechanism.
- D-14 selects the commitment-containing block as D-08's public number signal.

### D-13 — Bitcoin Commitment Carrier

Question: How is the canonical capsule fingerprint carried into Bitcoin?

Classification: blocker

Decision: **Direct Bitcoin data commitment**

Selected by: user, in chat

Selected at: 2026-07-17T14:27:49Z

Rationale: A direct transaction carrying the versioned 32-byte fingerprint is the
smallest independently verifiable Bitcoin-native proof. It avoids a timestamp
calendar and later proof-upgrade step, while keeping NFT ownership and marketplace
semantics out of the capsule's durability layer.

Considered options:

1. Direct Bitcoin fingerprint — selected. Clearest proof and fewest protocol
   layers, with a funded wallet, fee, confirmation, and transaction-recovery
   requirement.
2. Bitcoin-anchored OpenTimestamps proof — reduces direct data-transaction handling
   but adds proof-file preservation and upgrade behavior.
3. Direct Bitcoin fingerprint plus optional NFT certificate — the same durable
   commitment with a separate symbolic asset; not required for preservation.

Canonical carrier requirements:

- The transaction contains one versioned data payload composed of a fixed capsule
  domain/version tag and the 32-byte canonical capsule fingerprint.
- The exact binary payload and hexadecimal representation are published before the
  transaction is signed.
- Mainnet wallet funding, fee selection, transaction construction, signing, and
  broadcasting are isolated from the application server and recorded in the close
  ceremony.
- Any fee replacement must carry the identical fingerprint payload. A replacement
  carrying different capsule bytes is a conflicting close and fails closed.
- The closing receipt preserves the payload, raw transaction, transaction ID,
  containing block height and hash, and final confirmation evidence.
- An NFT may later reference this receipt as a ceremonial certificate, but it is
  not part of storage, timelock release, or commitment verification.

Downstream consequences:

- OpenTimestamps is no longer the primary carrier.
- A funded Bitcoin mainnet signing path and disposable testnet/regtest rehearsal are
  required before the real close.
- The transaction must not contain plaintext, ciphertext, invitation data,
  participant identifiers, recovery material, or an archive URL—only the versioned
  fingerprint commitment.
- D-14 makes the block containing this transaction D-08's number signal after six
  confirmations.

### D-14 — Bitcoin Commitment And Number Signal Coupling

Question: Which Bitcoin block hash combines with the capsule fingerprint to produce
the ritual number?

Classification: blocker

Decision: **The block containing the canonical fingerprint transaction**

Selected by: user, in chat

Selected at: 2026-07-17T14:32:32Z

Rationale: The transaction commits the capsule fingerprint before miners produce
the containing block hash. Using that same block gives the ritual one durable,
auditable Bitcoin event and prevents the number signal from preceding the on-chain
capsule commitment.

Considered options:

1. Commitment-containing block — selected. One event couples durable proof and the
   later public signal, but the reveal waits for transaction inclusion and six
   confirmations.
2. Separate first qualifying post-close block — preserves the original D-08 rule
   but creates two Bitcoin events and may let the public signal precede confirmation
   of the durable capsule commitment.

Canonical selection rule:

- The exact transaction payload is derived from the already frozen manifest and
  fingerprint under D-13.
- The transaction ID is published when broadcast. Fee acceleration should preserve
  that transaction through child-pays-for-parent where practical.
- If replacement is unavoidable, every valid replacement must contain the identical
  versioned fingerprint payload, and the closing receipt must expose the complete
  replacement lineage before confirmation.
- The selected signal is the lowest-height block containing the canonical broadcast
  transaction or a disclosed valid replacement. It becomes final at six
  confirmations.
- A conflicting fingerprint payload, undisclosed replacement, or operator-selected
  neighboring block fails the close rather than producing an alternative number.

Downstream consequences:

- D-08 is amended to use the commitment-containing block rather than the first block
  selected only by header time.
- The final number cannot be calculated until the fingerprint transaction is mined
  and its containing block reaches six confirmations.
- The public receipt verifies one chain: manifest to fingerprint to Bitcoin
  transaction to containing block hash to seed to final number.

### D-15 — Future Message Visibility

Question: Who may read an accepted saved message when its selected 2-, 5-, or
10-year horizon opens?

Classification: blocker

Decision: **Public at opening only**

Selected by: user, in chat

Selected at: 2026-07-17T14:52:16Z

Rationale: A single public-release mode preserves the delayed time-capsule ritual
while removing participant key generation, decade-long personal key custody,
private-return recovery, and the second inner encryption layer. It is the smallest
opening model compatible with a static operatorless decoder.

Considered options:

1. Public and private per message — most expressive, but requires participant
   recovery keys, double encryption, lost-key behavior, and a substantially larger
   recovery test matrix.
2. Public at opening only — selected. Every saved phrase remains hidden until its
   horizon and then becomes readable by anyone.
3. Private return only — preserves personal messages but removes the collective
   future reveal and requires participant recovery keys.

Downstream consequences:

- Participant copy must state before confirmation that every accepted saved phrase
  will become public at its selected horizon. “Private,” “only for you,” and
  equivalent language are prohibited.
- Each participant may still contribute at most two short phrases for each of the
  2-, 5-, and 10-year openings.
- Intake remains entrusted under D-01: authorized operators may technically access
  saved plaintext before close, and no end-to-end confidentiality claim is made.
- Closing creates one public-release tlock bundle per horizon. No participant public
  key, private key, recovery phrase, inner ciphertext, or private-return lookup is
  created.
- After the target drand round, anyone with the archive and static decoder can read
  the horizon bundle. The 3-of-5 emergency quorum can also recover that public
  bundle and is technically capable of opening it early.
- Because release is irreversible, every saved phrase must receive a final accepted
  or rejected moderation disposition before it enters the frozen bundle. Unresolved
  content fails closed and is excluded.
- G-04, the private-return recovery gate, is not applicable to the initial capsule.
  Private return becomes a separately governed future feature rather than a hidden
  option in this release.

### D-16 — Long-Term Maintenance Model

Question: What ongoing action is required to keep the closed capsule recoverable?

Classification: blocker

Decision: **One-time recovery-complete publication with no scheduled maintenance**

Selected by: user, in chat

Selected at: 2026-07-17T14:55:58Z

Rationale: The capsule is intended to remain openable without an annually funded
service or recurring human ceremony. A complete one-time publication distributes
the protocol data, ciphertext, decoder, proof material, and emergency shares at
close, accepting that silent deterioration may only be discovered at an opening.

Considered options:

1. No scheduled maintenance — selected. Best fit for the operatorless goal, with
   greater undetected long-horizon availability risk.
2. Annual steward check — improves early detection and migration opportunities but
   makes continuing human coordination part of the normal system.
3. Automated monitoring service — provides continuous checks but requires a funded,
   maintained server or agent.

Canonical publication profile:

- Arweave holds each encrypted horizon bundle and the recovery-complete package
  under immutable transaction identifiers.
- The recovery-complete package contains the static decoder source and build,
  dependency lock, format specification, manifests, pinned drand parameters, hashes,
  test vectors, Bitcoin receipt, and plain-language recovery instructions.
- At closing, at least two additional independent retrieval mirrors receive the
  identical byte-verified package. Mirrors are conveniences; the manifest and
  Bitcoin fingerprint remain the verification authority.
- Five independently delivered emergency share sets implement D-10. They are
  dormant unless a 3-of-5 emergency recovery or voluntary succession event occurs.
- No domain, Resonant API, database, cron job, annual check, subscription, storage
  renewal, or notification service is required after the verified close ceremony.
- Voluntary future re-mirroring may copy the exact package without changing the
  canonical manifest, fingerprint, Bitcoin receipt, or opening rules.

Accepted permanent-loss behavior:

- If Arweave and every mirror lose the ciphertext, no key path can recover the
  missing messages.
- If drand does not reach a target round and fewer than three emergency shares
  survive, that horizon may never open.
- If the archived format or decoder cannot be interpreted, recovery depends on the
  included specification, source, and test vectors; no maintainer is guaranteed.
- The capsule therefore promises a distributed, operatorless recovery attempt—not
  guaranteed permanence.

Downstream consequences:

- The close ceremony, not later maintenance, carries the full durability burden.
- All blocking closure gates except conditional private-return G-04 must pass before
  real saved messages enter the final packages.
- A failed proof gate leaves the demonstration in rehearsal state; it does not
  authorize a weaker live durability claim.

### Remaining Decision Blockers

None.

### Implementation And Proof Gates

Decision completion does not make the capsule live. Before real close, the project
still requires:

1. near-future drand encryption/decryption and pinned-chain verification;
2. deterministic browser/server manifest and fingerprint test vectors;
3. static recovery with the application API and original domain unavailable;
4. disposable Arweave upload and independent retrieval verification;
5. direct Bitcoin transaction rehearsal and funded mainnet signing path;
6. complete 2/5/10-year close and recovery rehearsal;
7. five named stewards, accepted share custody, and a verified 3-of-5 recovery;
8. final public-release moderation and irreversibility copy.

### Deferred Decisions

- Private-return client encryption, participant recovery keys, and distributed key
  custody are deferred beyond the initial public-at-opening capsule.

### Assumptions

- Today’s presentation can remain a clearly labeled rehearsal until real intake is
  enabled.
- No token minting, distribution, or economic-policy authority is granted by this
  ritual implementation.
