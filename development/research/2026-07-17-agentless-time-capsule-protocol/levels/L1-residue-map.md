# L1 — Residue Map

## R-01 — Ten-year cryptographic horizon

The longest release is at the edge of the tlock authors’ stated 5–10-year expected
security horizon and is not quantum-resistant.

Consequence: do not market ten-year confidentiality as guaranteed. The team must
either accept this bounded claim, shorten the horizon, or retain a migration-capable
human fallback.

## R-02 — Drand continuity

If quicknet ceases before the target round, that round’s signature never arrives and
the corresponding ciphertext may never open.

Consequence: an operatorless design trades key-custodian risk for network-continuity
risk. Encrypting independently to another beacon can improve availability but adds
security and compatibility questions that have not been closed.

## R-03 — Storage continuity

Arweave’s design targets permanent storage, but continued retrieval still depends on
the network, its economics, and paths to the stored transaction.

Consequence: distribute transaction IDs and keep ordinary mirrors. Mirrors improve
availability but are not the canonical proof surface.

## R-04 — Private-return recovery

An agentless private-return path makes the participant the only recovery authority.
The existing private invite link is not automatically a safe decade-long key store.

Consequence: design and test a separate printable/downloadable recovery kit. Never
put the recovery secret in server logs, public manifests, analytics, or Arweave.

## R-05 — Irreversible future publication

Tlock-only public messages become readable by anyone after their target round.
Arweave copies cannot be reliably recalled.

Consequence: “share at opening” must be explicit, and all public-at-opening content
must have a final accepted/rejected disposition before the close snapshot.

## R-06 — Decoder survivability

A source repository URL or live CDN dependency is not enough for a decade.

Consequence: archive source, built files, dependency lock, format specification,
test vectors, and a plain-language manual recovery procedure with each bundle.

## R-07 — Close ceremony

The architecture removes future agents, not the one-time closing work. Someone must
freeze content, run tests, fund storage, upload ciphertext, verify transactions, and
publish the manifest.

Consequence: closing is a reproducible ceremony with multiple witnesses and logged
outputs, not an undocumented button click.

## R-08 — Automatic availability versus automatic broadcast

Tlock makes decryption possible at the target round. It does not push a notification
or force a page to be visited.

Consequence: promise “openable from this date,” not “delivered automatically,”
unless a separate notification service is maintained.

