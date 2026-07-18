# TASK-LIV2-007 — Bitcoin Carrier And Ritual Number

## Objective

Freeze and rehearse the one Bitcoin commitment event and the deterministic
manifest→fingerprint→block→seed→number chain without broadcasting a production
transaction or granting supply authority.

- Layer/slice: L3 / S-07
- Wave: W4
- Dependencies: SWU-LIV2-019
- Target root: `development/time-capsule-live-intake-v2/bitcoin-number/`
- External effects: regtest by default; disposable testnet only with separate funding approval

## Binary Carrier

Candidate payload to freeze in SWU-031:

```text
UTF8("resonant-time-capsule:v1\0") || raw_32_byte_capsule_fingerprint
```

It must fit the standard data-carrier limit and contain no manifest, URL,
ciphertext, identity, phrase, share, or key. Any replacement carries identical
payload bytes and is disclosed in one lineage.

## Number Algorithm

1. Wait until the canonical fingerprint transaction or disclosed identical-payload
   replacement is in its lowest-height containing block and that block has six confirmations.
2. Use lowercase 64-character hex with no `0x` for both fingerprint and the
   conventional displayed Bitcoin block hash.
3. Compute UTF-8 bytes of:
   `resonant-time-capsule-number-v1\n{fingerprint_hex}\n{block_hash_hex}`.
4. SHA-256 those bytes; interpret the 32-byte digest as an unsigned big-endian integer `n`.
5. Compute `number = 1_000_000_000 + (n mod 99_000_000_000)`.
6. Publish inputs, seed, formula version, inclusive range, and result.

D-09's direct modulo formula is authority. The older rejection-sampling candidate
is superseded. This low-stakes ritual result is not economic-appropriateness proof.

## Smallest Working Units

### SWU-LIV2-031 — Direct carrier and replacement-lineage rehearsal

- Primary behavior: prove one fingerprint payload can be found in the selected
  transaction/block and every valid replacement preserves identical bytes.
- Independent acceptance: chain receipt passes without number calculation.
- Candidate children: payload construction, transaction, replacement, block selection.
- Retained boundary: together they define the single canonical Bitcoin event selected by D-13/D-14.
- Dependencies: SWU-LIV2-019.
- Write scope: payload spec, isolated signer interface, regtest/testnet scripts,
  fixtures, receipt verifier; never wallet seed.
- Procedure: build exact payload → construct/sign in isolated disposable wallet →
  broadcast regtest/testnet → optionally exercise replacement → verify payload equality
  and lineage → mine/observe containing block → verify six-confirmation receipt shape.
- Done: conflicting payload, undisclosed replacement, neighboring block, and early
  confirmation all fail; raw transaction/txid/block height/hash are reproducible.
- Evidence: disposable transaction lineage and independent verifier output.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/bitcoin-number test -- carrier`
- Owner: local-fallback.
- Source anchors: D-12–D-14.
- Handoff: production wallet funding/signing/broadcast remains SWU-036; no seed material in repo.

### SWU-LIV2-032 — Seed and range golden vectors

- Primary behavior: produce the same final number from one fingerprint/block pair
  in browser, Node, and an independent reference calculation.
- Independent acceptance: vectors pass without a live chain or transaction.
- Candidate children: seed hash and modulo mapping.
- Retained boundary: the user-visible behavior is the complete deterministic mapping;
  either half alone cannot reproduce the number.
- Dependencies: SWU-LIV2-019 and SWU-LIV2-031 receipt shape.
- Write scope: number algorithm spec, browser/Node/reference implementations, vectors/tests.
- Done: exact string/hex/newline/endianness/range rules frozen; endpoints and leading
  zeros covered; modified fingerprint/block changes vector.
- Evidence: published fixtures and three-way equality report.
- Validation: `npm --prefix development/time-capsule-live-intake-v2/bitcoin-number test -- number-vectors`
- Owner: local-fallback.
- Source anchors: D-08/D-09/D-14.
- Handoff: copy and receipts must call it a ritual number, never final token supply policy.

## Synchronization

The payload version, manifest fingerprint version, and number formula version are
immutable inputs to rehearsal and close. Changing any one reruns SWUs 031–034.

