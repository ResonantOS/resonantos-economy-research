# L0 — Corpus

## Primitive A: threshold timelock encryption

Drand’s tlock construction encrypts a symmetric payload key to the identity of a
future randomness round. When the drand threshold network publishes that round’s
signature, anyone can derive the decryption capability. This is a closer conceptual
fit than placing a secret key with a future committee: the release material does not
exist publicly until the target round.

Primary evidence: S-01 through S-06.

## Primitive B: one-time-funded public ciphertext storage

Arweave is designed to fund continued replicated storage from an upfront payment.
It is a better conceptual fit than renewable storage deals for a system intentionally
left without a maintainer. The claim still depends on protocol economics and network
survival.

Primary evidence: S-07.

## Primitive C: static, locally verifiable recovery

The official TypeScript implementation permits encryption and decryption in a
browser. A static decoder can be archived with the payload, verify fixed hashes and
chain metadata, and avoid a future application server.

Primary evidence: S-03 and S-05.

## Rejected primitive: self-executing contract timer

An on-chain condition can reject an early call, but a transaction still has to be
submitted and funded. A keeper network can do that, but the capsule then depends on
a registered upkeep service. This is automation, not absence of an agent.

Primary evidence: S-10 and S-11.

## Rejected primitive: storage renewal loop

Filecoin can provide strong storage proofs, but the documented renewal and repair
surfaces are themselves ongoing work. It is suitable as a maintained mirror, not as
the only operatorless copy in this design.

Primary evidence: S-08.

## Corpus conclusion

No reviewed primitive makes decade-long preservation unconditional. The useful
design target is therefore:

> remove the single appointed future actor, distribute the remaining assumptions,
> publish enough fixed recovery material that a future visitor can verify and open
> the capsule without asking Resonant for permission.

