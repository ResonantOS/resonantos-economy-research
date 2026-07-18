# Claim Ledger

| ID | Claim | Support | Strength | Boundary |
|---|---|---|---|---|
| C-01 | Tlock can encrypt content now so it becomes decryptable from a future drand round signature. | S-01, S-02, S-04 | strong | Assumes the selected drand chain reaches the target round. |
| C-02 | The future release does not require a single trusted time/key server. | S-01, S-04 | strong | A malicious threshold can still decrypt early. |
| C-03 | A static TypeScript/browser decoder is implementable with the official tlock-js library. | S-03, S-05 | strong | Must be pinned, vendored, built, and locally tested. |
| C-04 | The current quicknet chain emits a round approximately every three seconds and has a published chain identity. | S-02, S-06 | strong/current | Reverify and pin at closing; do not discover dynamically in the future. |
| C-05 | If the selected drand network stops before a target round, unopened ciphertext may become permanently undecryptable. | S-01 | strong | This is the principal availability failure. |
| C-06 | Tlock is not quantum-resistant and its authors frame present security as roughly a 5–10-year expectation. | S-01, S-02, S-05 | strong | The 10-year capsule is at the boundary of the stated expectation. |
| C-07 | Arweave is designed for one-time-funded, replicated long-term data storage. | S-07 | moderate/official protocol claim | “Permanent” is not an unconditional empirical guarantee. |
| C-08 | Uploading only ciphertext keeps Arweave from becoming the plaintext publication surface before release. | design inference from S-01 and S-07 | strong design inference | Metadata and future public plaintext still need threat review. |
| C-09 | A smart contract timer alone is not operatorless because a transaction must still trigger state-changing execution and pay gas. | S-10 | strong | Read-only clients can inspect time, but cannot make a contract publish by itself. |
| C-10 | Filecoin deal maintenance normally introduces renewal/repair activity. | S-08 | strong | A separate endowed service could perform it, but that reintroduces an agent/service. |
| C-11 | Tlock plus Arweave can remove the need for an appointed Resonant steward after close. | synthesis of C-01, C-03, C-07 | candidate | Does not remove drand, Arweave, browser, and retrieval dependencies. |
| C-12 | Private return without a steward requires participant-held decryption material and accepts permanent loss when it is lost. | cryptographic design consequence | strong design inference | Recovery by someone else would recreate custody or escrow. |
| C-13 | A block-anchored hash proves commitment inclusion by that chain history; the hash alone does not prove a date. | cryptographic design principle | strong | Optional evidence, not required for tlock release. |

## Claims explicitly rejected

- “The capsule is guaranteed to last forever.”
- “Nobody can ever open it early.”
- “The protocol has no dependencies.”
- “A private message is recoverable even if its owner loses the only recovery key.”
- “A smart contract automatically wakes up at a future timestamp.”
- “Putting a date inside hashed data independently proves that date.”

