# Research Tower

## Tower contract

Research question:

> What protocol can preserve and release the Resonant Time Capsule for 2, 5, and
> 10 years without requiring an appointed future agent?

Depth: compact

Promotion boundary: local research only

Subagent mode: not used

Notation bridge: not needed

## Operational meaning of “without an agent”

For this tower, an operatorless release means:

- no Resonant person or committee holds the only release key;
- no future server-side timer, cron job, or keeper transaction is required;
- no one must renew a storage contract every year;
- a public static decoder can determine that a horizon is due and recover it from
  public protocol data;
- the recovery instructions remain usable if the original domain and application
  disappear.

It does **not** mean:

- no one ever visits or downloads the capsule;
- no network or economic assumption exists;
- future confidentiality and availability are mathematically guaranteed;
- a private message can be recovered after its participant loses the only private
  recovery key.

## Selected initial architecture

~~~text
INTAKE (before close)
  accepted public-at-opening phrases
                    └─> horizon manifest
                           2y / 5y / 10y
                       |
                       v
CLOSE CEREMONY
  canonical JSON -> SHA-256 commitment
  bundle -> tlock(target drand round)
  ciphertext + decoder + metadata -> Arweave
  hashes + transaction IDs -> website, repository, optional Bitcoin anchor
                       |
                       v
FUTURE OPENING
  visitor loads static decoder
  -> fetches and verifies drand beacon
  -> fetches ciphertext from Arweave
  -> verifies SHA-256 and target metadata
  -> removes tlock wrapper
       due horizon: publicly readable
~~~

## Component responsibilities

### Canonical manifest

One deterministic manifest is frozen for each horizon. It records stable item IDs,
the public-at-opening mode, content hashes, encoding rules, target UTC time, target drand
round, pinned drand chain hash and public key, encryption formats, archive
transaction IDs, and decoder version.

The manifest must not contain private plaintext, invitation secrets, private
recovery keys, or log-derived personal data.

### drand tlock

Tlock encrypts a payload to a future drand round. The threshold signature published
for that round supplies the material needed for decryption. This substitutes a
distributed future beacon for a key-holding Resonant steward.

The closing package pins the chain metadata rather than trusting whichever network
configuration a future gateway happens to return. The currently documented
quicknet chain hash is:

`52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971`

That value must be re-verified from official drand endpoints at closing.

### Arweave

Arweave is the one-time-funded storage candidate for ciphertext and the recovery
kit. It avoids periodic deal renewal, but “permanent” remains a protocol and
economic claim, not an unconditional guarantee. Multiple transaction gateways and
ordinary mirrors should be recorded.

Only encrypted content is uploaded. Anything uploaded as plaintext should be
treated as irreversibly public.

### Static decoder

The decoder is a small, dependency-pinned browser application distributed as source
and built static files. It:

1. reads the manifest;
2. checks the current drand round;
3. verifies the beacon against the pinned chain;
4. fetches and hashes the encrypted bundle;
5. attempts tlock decryption only when due;
6. renders the verified due public bundle locally.

The decoder needs no application API. Its build inputs and a human-readable recovery
procedure travel with the capsule.

### Optional close-time timestamp

A direct Bitcoin data commitment or another independently verifiable timestamp may
anchor the frozen root hash. A hash does not contain a trusted date by itself; block
inclusion provides the time evidence. This is evidence for when the commitment
existed, not a release mechanism.

## Why the obvious alternatives were not selected

| Alternative | Reason it does not meet the operatorless target |
|---|---|
| Smart-contract timestamp | State changes still require an externally submitted, gas-funded transaction. |
| Chainlink Automation | Removes a single operator but requires registered and funded upkeep. |
| Filecoin storage deal alone | Long horizons require monitoring, renewal, or repair services. |
| Lit access policy | Capable threshold network, but adds capacity-credit and policy machinery not needed for a public timed release. |
| IPFS alone | Content addressing does not guarantee that anyone continues pinning the bytes. |
| One human-held encryption key | Recreates the agent and recovery problem the design is meant to remove. |

## Research verdict

The tlock plus Arweave architecture is the clearest match for the desired ritual:
the future itself supplies the missing public decryption material. It is viable
enough to prototype and explain, but the ten-year horizon sits at the edge of
drand’s own stated 5–10-year security expectation. The design must therefore be
presented as an operatorless protocol with explicit failure assumptions, never as
guaranteed permanence.

Participant-key private return remains documented in the research residue as a
future variant, but D-15 removes it from the selected initial architecture.
