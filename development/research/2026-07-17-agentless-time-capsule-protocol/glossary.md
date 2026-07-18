# Glossary

## Agentless / operatorless release

A release that needs no appointed Resonant steward, future server job, or funded
keeper to become openable. It still depends on public networks and a future visitor.

## Canonical manifest

The deterministically encoded record that fixes the capsule’s contents, horizon,
formats, chain parameters, storage references, and commitments.

## Ciphertext

Encrypted bytes. Arweave stores ciphertext, not message plaintext.

## drand

A distributed threshold network that publishes verifiable randomness in numbered
rounds.

## Horizon

One scheduled opening: 2, 5, or 10 years after close.

## Inner encryption

Participant-key encryption used for a private-return message before it receives its
timelock wrapper.

## Recovery kit

The participant-held secret and instructions required to read a private-return
message after its timelock opens.

## Target round

The drand round corresponding to the intended UTC opening time.

## Timelock / tlock

Encryption whose decryption material becomes available from a future drand round.

## Timestamp anchor

An optional on-chain commitment showing that a manifest hash existed by its
inclusion in a chain history. It does not perform the opening.
