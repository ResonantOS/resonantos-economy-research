# Source Record

Accessed: 2026-07-17

Only primary protocol documentation, official repositories, and the underlying
cryptography paper are used for the central claims.

## S-01 — drand timelock encryption documentation

- URL: https://docs.drand.love/docs/timelock-encryption/
- Owner: drand
- Role: explains future-round encryption, public decryption, trust assumptions, and
  failure conditions.
- Important limit: a malicious threshold can decrypt early; shutdown before a
  target round can make future ciphertext undecryptable; the construction is not
  quantum-resistant.

## S-02 — tlock reference implementation

- URL: https://github.com/drand/tlock
- Owner: drand
- Role: Go implementation, network configuration, CLI behavior, quicknet chain
  hash, endpoint examples, and stated security horizon.
- Important limit: repository documentation describes an expected 5–10-year
  security horizon rather than a guarantee.

## S-03 — tlock-js

- URL: https://github.com/drand/tlock-js
- Owner: drand
- Role: TypeScript/browser implementation; AGE payload encryption; round and time
  conversion functions.
- Important limit: dependency and browser compatibility must be frozen and tested in
  the actual recovery kit.

## S-04 — tlock paper

- URL: https://eprint.iacr.org/2023/189
- Authors: Nicolas Gailly, Kelsey Melissaris, and Yolan Romailler
- Role: construction and security model for practical timelock encryption based on
  threshold BLS networks.
- Important limit: claims hold under the paper’s cryptographic and threshold-network
  assumptions.

## S-05 — independent implementation assessment

- URL: https://docs.drand.love/blog/2023/05/26/tlock-security-assessment/
- Owner: drand summary of Kudelski Security assessment
- Role: confirms review of Go and TypeScript implementations and remediation of
  findings.
- Important limit: an assessment reduces implementation uncertainty; it does not
  guarantee future network continuity or ten-year security.

## S-06 — drand developer and chain information

- URLs:
  - https://docs.drand.love/developer/
  - https://docs.drand.love/developer/API-v2/v-2-chains-chain-hash-info/
  - https://docs.drand.love/blog/2023/10/16/quicknet-is-live/
- Owner: drand
- Role: current quicknet identity, 3-second period, genesis and verification
  guidance.
- Important limit: current parameters must be pinned and rechecked at close.

## S-07 — Arweave protocol documentation

- URL: https://docs.arweave.org/developers/development/protocol
- Owner: Arweave
- Role: replicated storage, proof-of-access/storage incentives, and one-time
  endowment model.
- Important limit: future retrieval depends on the protocol, participants,
  economics, and accessible gateways or nodes. Nodes may filter content.

## S-08 — Filecoin programmatic storage and RaaS

- URL: https://docs.filecoin.io/smart-contracts/programmatic-storage/raas-interfaces
- Owner: Filecoin
- Role: documents renewal and repair jobs used to maintain storage.
- Important limit: demonstrates why a bare storage deal does not remove ongoing
  maintenance.

## S-09 — Lit Protocol encryption

- URL: https://datil.developer.litprotocol.com/sdk/access-control/encryption
- Owner: Lit Protocol
- Role: threshold-network encryption controlled by access conditions.
- Important limit: more policy and capacity machinery than the capsule’s simple
  public-time condition requires.

## S-10 — Ethereum smart contracts and transactions

- URLs:
  - https://ethereum.org/developers/docs/smart-contracts/
  - https://ethereum.org/developers/docs/transactions/
- Owner: ethereum.org
- Role: establishes that contract state changes are triggered through transactions
  and consume gas.
- Important limit: a contract can validate time, but it does not wake itself up and
  publish data.

## S-11 — Chainlink documentation

- URL: https://docs.chain.link/
- Owner: Chainlink
- Role: automation and decentralized service context.
- Important limit: automation remains registered, funded infrastructure rather than
  a zero-maintenance release primitive.
