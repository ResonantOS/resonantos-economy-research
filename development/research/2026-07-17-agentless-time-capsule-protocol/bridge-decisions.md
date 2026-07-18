# Bridge to Active Decisions

## Decisions left intact

- D-01 remains the intake privacy boundary until the private-return client key flow
  passes its closure gate. The server may still be entrusted with plaintext during
  intake.
- D-02 through D-09 remain compatible with this research candidate.

## Resolved architecture decision

D-11 selects the hybrid architecture:

- drand tlock plus Arweave is the normal release path;
- D-10's 3-of-5 quorum is retained only for emergency recovery;
- D-12 requires a Bitcoin anchor for the canonical capsule fingerprint;
- D-13 selects a direct Bitcoin data commitment as its carrier;
- D-14 selects that transaction's containing block as D-08's number signal;
- D-15 selects public-at-opening only;
- D-16 selects one-time recovery-complete publication with no scheduled maintenance.

The public verification chain is therefore manifest to fingerprint to transaction
to containing block hash to final number.

## Resolved opening visibility

D-15 selects public at opening only:

- every accepted saved phrase remains hidden until its selected horizon;
- the due horizon bundle then becomes readable by anyone;
- no participant recovery key or inner private-return encryption is created;
- G-04 is not applicable to the initial capsule.

Private return remains a separately governed future feature.

## Decision state and earliest responsible live claim

The design Decision Gate is complete. The architecture must not be described as live
or proven until:

- G-01 through G-03, G-05, G-06, G-08, G-09, and G-10 pass;
- the direct Bitcoin carrier and containing-block selection are rehearsed;
- the 3-of-5 fallback is tested and real stewards accept their assignments.
