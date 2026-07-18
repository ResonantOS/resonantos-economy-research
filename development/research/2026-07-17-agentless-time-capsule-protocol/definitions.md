# Definitions

## D-ATC-01 — Operatorless opening

An **operatorless opening** is a capsule state transition in which the information
needed to remove the time restriction becomes publicly derivable from a
precommitted external protocol at or after the target horizon, without a key
release, transaction, or scheduled process controlled by Resonant.

It does not imply automatic notification, guaranteed network survival, or private
key recovery.

## D-ATC-02 — Public-at-opening item

A **public-at-opening item** is content whose tlock layer is its final confidentiality
boundary. Anyone may read it after the target round.

## D-ATC-03 — Private-return item

A **private-return item** is content encrypted to a participant-controlled recovery
identity inside its tlock layer. After the target round, the archive becomes
available but the participant identity remains necessary to read the plaintext.

## D-ATC-04 — Recovery-complete package

A **recovery-complete package** contains the ciphertext, canonical manifest, pinned
protocol parameters, hashes, transaction identifiers, decoder source and build,
dependency lock, format specification, test vectors, and human instructions needed
to attempt recovery without the originating service.

## D-ATC-05 — Close ceremony

The **close ceremony** is the one-time, witnessed and reproducible production of the
frozen manifests, encrypted horizon bundles, storage transactions, optional
timestamp anchor, and recovery-complete package.

