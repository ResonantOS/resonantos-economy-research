# L2 — Closure Plan

## Phase 1 — Local protocol proof

1. Pin the official tlock-js version and quicknet chain information.
2. Create a two-minute target-round fixture.
3. Demonstrate that decryption fails before the round and succeeds afterward.
4. Verify the retrieved beacon against the pinned chain identity.
5. Save ciphertext, manifest, and expected plaintext hashes as test vectors.

Exit: repeatable local test with no application API.

## Deferred phase — Private-return proof

Not applicable to the D-15 initial public-at-opening capsule. Preserve this protocol
experiment only for a separately governed future private-return feature.

1. Generate an AGE/X25519 recipient identity in the browser.
2. give the participant a recovery kit and retain only the public recipient;
3. encrypt a sample private message to the participant public key;
4. tlock the inner ciphertext to a near-future round;
5. prove that the outer layer opens when due;
6. prove that the correct recovery identity opens the inner layer and an incorrect
   identity does not.

Exit: a clean browser can recover the message with only the public archive and the
participant’s recovery kit.

## Phase 3 — Deterministic manifest proof

1. Specify canonical JSON field ordering, UTF-8 normalization, line endings, dates,
   horizon labels, and content encoding.
2. Generate the same SHA-256 commitment in browser and Node.js.
3. Include public-at-opening items and private-return ciphertext commitments without
   exposing private plaintext.
4. Freeze test vectors and verify them in CI.

Exit: two implementations produce the same root from the same capsule.

## Phase 4 — Storage and recovery proof

1. Build a static decoder with no backend route.
2. Archive its source, build, lockfile, format specification, and test vectors.
3. Upload only an encrypted disposable fixture to Arweave.
4. retrieve it through at least two independent paths;
5. recover it from the transaction ID in a clean environment;
6. verify every byte against the manifest.

Exit: recovery succeeds with the original application and domain unavailable.

## Phase 5 — Decision and close rehearsal

1. Obtain explicit acceptance of drand shutdown, 10-year cryptographic, Arweave
   continuity, and participant key-loss risks.
2. Choose whether the selected 3-of-5 recovery is superseded, retained only as an
   emergency fallback, or kept as primary.
3. Perform the complete close ceremony on non-sensitive fixtures.
4. record exact commands, versions, hashes, costs, transaction IDs, and witnesses;
5. run the recovery procedure from the produced package.

Exit: the active Decision Gate can be updated with evidence rather than aspiration.
