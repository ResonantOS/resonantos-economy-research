# Final Learning Pack

## What we learned

The capsule does not need a future person to hold and release a key. Drand tlock can
make the decryption capability publicly derivable at a chosen future round, and
Arweave can hold the encrypted package under a one-time storage model. A static
decoder can perform recovery in a visitor’s browser even if the Resonant application
server is gone.

## What remains true

“No agent” cannot honestly mean “no dependency.” The design depends on:

- the selected drand chain reaching each target round;
- the ciphertext remaining retrievable from Arweave or a mirror;
- the archived decoder and format remaining interpretable;
- the public-release decoder remaining compatible with the archived format.

The longest horizon is materially uncertain because tlock is not
quantum-resistant and its own documentation frames current security as approximately
5–10 years.

## Proposed protocol

At close:

1. freeze canonical manifests for 2, 5, and 10 years;
2. tlock each public-release horizon bundle to its verified quicknet target round;
3. upload only ciphertext and recovery material to Arweave;
4. publish hashes, chain parameters, transaction IDs, decoder source/build, and
   optional Bitcoin timestamp evidence.

At a horizon:

1. a visitor opens any surviving copy of the static decoder;
2. the decoder verifies the due drand beacon and archive hashes;
3. the public bundle opens locally;
4. every accepted item in the due bundle becomes public.

## Decision consequence

D-11 selects this as the normal opening path and narrows the 3-of-5 quorum to
emergency recovery. The selection does not prove readiness: protocol failure,
quorum misuse, or participant key loss may still be irreversible.

## Immediate proof

Before real close, run a disposable near-future tlock round trip, a private
double-envelope round trip, a deterministic manifest cross-runtime test, and an
Arweave clean-environment recovery. If any blocking gate fails, keep the entrusted
and stewarded path rather than claim operatorless release.
