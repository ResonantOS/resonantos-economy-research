# TASK-LIV2-006 — Public-At-Opening Recovery Package

## Objective

Prove a service-independent package in which every due horizon can be decrypted
through drand/tlock normally or a 3-of-5 emergency key path, verified against the
public manifest, and retrieved without the original site/API.

- Layer/slice: L3 / S-06
- Wave: W4
- Dependencies: SWU-LIV2-018–019
- Target root: `development/time-capsule-live-intake-v2/recovery/`
- External effects: disposable fixtures only; no real phrases/shares/final archive

## Bundle Algorithm

For each horizon H:

1. Build a JCS canonical plaintext bundle containing capsule/manifest identifiers
   and each selected record's complete opening proof object (phrase and secret
   commitment nonce). Verify every record hash against the public manifest.
2. Generate a random 32-byte content key `K_H` and fresh 96-bit AES-GCM IV.
3. Encrypt the bundle with AES-256-GCM; AAD binds domain/version, capsule ID,
   horizon, target time, and manifest fingerprint.
4. Tlock-encrypt `K_H` to the target round of one pinned drand chain.
5. Split the same `K_H` into five integrity-labelled Shamir shares with threshold three.
6. Package encrypted bundle, IV/tag, tlock envelope, manifest, pinned chain data,
   decoder, dependency lock, format spec, vectors, hashes, and recovery instructions.
7. After verified publication/recovery, destroy the working `K_H`; shares remain
   an acknowledged early-open risk under policy, not a cryptographic impossibility.

Target UTC instants derived from the close are 2028-07-21, 2031-07-21, and
2036-07-21 at 00:00:00Z. Target rounds are computed and independently checked
from pinned chain hash/public key/genesis/period data.

## Smallest Working Units

### SWU-LIV2-026 — Horizon bundle/envelope format

- Primary behavior: encrypt/decrypt one canonical invented horizon bundle and
  verify all record commitments.
- Independent acceptance: local AEAD/vector suite passes without tlock, shares, or storage.
- Candidate children: plaintext bundle and AEAD envelope.
- Retained boundary: the envelope exists to protect exactly that canonical bundle;
  format acceptance requires the round trip and commitment reconciliation.
- Dependencies: SWU-LIV2-018–019.
- Write scope: recovery format/spec, serializer, vectors, tests.
- Done: field ordering/encoding, AAD, IV/tag, key size, target metadata, and
  record proof verification are frozen; wrong AAD/key/record fails.
- Evidence: golden plaintext/ciphertext vector using an explicitly disposable fixed test key.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/recovery test -- bundle-format`
- Owner: local-fallback.
- Source anchors: D-11, D-15; manifest format; G-05.
- Handoff: production keys must be random; fixed keys exist only in published vectors.

### SWU-LIV2-027 — Tlock/drand due-time key path

- Primary behavior: prevent recovery of an invented content key before a near-future
  target round and recover it after the verified round.
- Independent acceptance: tlock receipt passes without static UI or storage.
- Candidate children: target calculation, pre-round failure, post-round recovery.
- Retained boundary: all three constitute one timelock claim.
- Dependencies: SWU-LIV2-026.
- Write scope: pinned tlock/drand adapter, chain manifest, fixtures/tests.
- Algorithm: pin reviewed dependency/chain parameters → compute target round from UTC
  fixture → tlock `K` → verify early failure → retrieve/verify due beacon against
  pinned chain → recover `K` → decrypt SWU-026 envelope.
- Done: G-01/G-02 pass; wrong chain/round/beacon fails; 2/5/10 round calculations are frozen.
- Evidence: timestamps/rounds, chain identity, ciphertext, hashes, before/after receipt.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/recovery test -- tlock-drand`
- Owner: local-fallback.
- Source anchors: protocol L2 Phase 1; closure G-01/G-02.
- Handoff: verify dependency/chain from official sources at execution; record version, do not assume currentness.

### SWU-LIV2-028 — Static offline decoder

- Primary behavior: recover one due invented bundle with original app/API/domain unavailable.
- Independent acceptance: clean-browser receipt closes G-03 independently of archive upload.
- Candidate children: static build and clean recovery.
- Retained boundary: a static build is not useful evidence until it succeeds in the isolated recovery.
- Dependencies: SWU-LIV2-027.
- Write scope: recovery decoder source/build, lockfile, offline fixtures, instructions.
- Procedure: serve archived static build from unrelated local origin/file-safe host →
  load package by file/URL → verify hashes/manifest/chain → obtain due beacon → unwrap
  key → decrypt locally → verify commitments → render due public phrases.
- Done: no Resonant API/domain/network except selected drand/archive endpoints; source
  and reproducible build hash included; pre-due and tampered package fail.
- Evidence: clean environment network trace and recovery transcript.
- Validation: Playwright/manual clean-browser recovery plus `npm ... test -- static-decoder`.
- Owner: local-fallback.
- Source anchors: D-11/D-16; G-03/G-09.
- Handoff: decoder displays only the selected horizon and contains no stewardship secret.

### SWU-LIV2-029 — Three-of-five emergency recovery

- Primary behavior: recover one invented horizon key with any three valid shares and
  fail with fewer, mixed, corrupted, or wrong-horizon shares.
- Independent acceptance: share matrix passes without tlock or storage availability.
- Candidate children: share generation and reconstruction.
- Retained boundary: neither alone proves the threshold behavior; one matrix does.
- Dependencies: SWU-LIV2-026.
- Write scope: recovery share adapter, labelled share format, fixtures/tests, handling guide.
- Done: 10 choose 3 combinations recover; 0–2 do not; mixed horizon/version/share-set
  and checksum failures are rejected; no share appears in repository/runtime logs.
- Evidence: disposable matrix, library/version review, early-open risk notice.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/recovery test -- emergency-shares`
- Owner: local-fallback.
- Source anchors: D-10/D-11; G-L3-03.
- Handoff: use invented shares; real delivery/custody belongs to SWU-035.

### SWU-LIV2-030 — Disposable archive and mirror retrieval

- Primary behavior: retrieve the same byte-verified disposable recovery package
  from Arweave and two independent mirrors.
- Independent acceptance: one publication/retrieval receipt closes the storage proof.
- Candidate children: upload and retrieval paths.
- Retained boundary: durability evidence requires publication plus independent retrieval of identical bytes.
- Dependencies: SWU-LIV2-028–029.
- Write scope: archive tooling/config/runbook and disposable transaction/URL receipts;
  no final package or secret material.
- Procedure: assemble package → hash every file and root manifest → fund/submit disposable
  encrypted fixture → record immutable ID → copy exact package to two owner-distinct
  mirrors → retrieve through independent paths in clean environment → byte-compare → decode.
- Done: G-06/G-09 pass; corrupt/missing mirror cannot override manifest; costs and confirmation procedure recorded.
- Evidence: transaction ID, mirror handles, byte hashes, clean recovery transcript.
- Validation: archive retrieval script plus manual independent path review.
- Owner: local-fallback.
- Source anchors: D-16; protocol G-06/G-09.
- Handoff: external spending/upload needs explicit Task Session authority; fixture contains invented ciphertext only.

## Synchronization

Format, dependency, chain, archive, and decoder hashes flow into the close package.
Any version change reruns SWUs 026–030 and invalidates later rehearsal evidence.

