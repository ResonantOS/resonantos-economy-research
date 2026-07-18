# Validation Strategy — Live Intake Plan V2

## Evidence Classes

| Slice | Required evidence | Promotion effect |
| --- | --- | --- |
| L0 contract | JSON/schema parse, deterministic normalization vectors, state/gate negatives, field coverage | permits invented-data L1 only |
| L0 human | screen-reader, native-IME, RTL pronunciation, keyboard spot check, 5-person critical retell | required before L2 and real intake |
| L1 intake | unit/property tests, SQL constraints, concurrent version/idempotency tests, cryptographic misuse negatives, no-content logs | permits staged adapter review |
| L1 close | frozen-clock race tests, one-snapshot invariant, canonical JSON cross-runtime vectors, forbidden-field scan, cold restore/migration/corruption | required before L2 promotion and L3 package work |
| L2 operations | owner signatures, invented cohort, API health, rollback, incident pause, restore, accessibility/comprehension regression | permits a separate human real-intake decision |
| L3 protocol | closure gates G-01–G-03 and G-05–G-10, emergency recovery, two-path archive retrieval | required before real close |
| L3 Bitcoin/number | regtest/testnet carrier and replacement fixtures, six-confirmation receipt shape, independent seed/range reproduction | required before real close and reveal |
| Final audit | all receipts exist, no blockers unresolved, no production secrets in repo, no token authority, named owners approve irreversible steps | permits only the manually approved ceremony |

## Negative Evidence Is First-Class

The suite must prove failures, not only happy paths: wrong invite, revoked invite,
replayed idempotency key with changed digest, stale envelope version, transaction
committing at/after close, unresolved moderation, forbidden public field, duplicate
snapshot, corrupted backup, wrong AEAD tag, wrong drand chain, pre-round tlock
attempt, fewer than three shares, modified archive bytes, conflicting Bitcoin
payload, undisclosed replacement, neighboring block substitution, and number-vector
divergence.

## Secret And Real-Data Rule

All automated tests through L2 use invented values. Production invite secrets,
message plaintext, database encryption keys, steward shares, wallet seeds, and
signing material are never fixture data and never enter repository receipts.

## Receipt Shape

Every Task Session returns the Invoke-required SWU receipt with `swu_id`, result,
capability, receipt kind/path, files touched, validation, blockers, residue,
reroute, and handoff note. Manual gates additionally record owner, time,
scope, explicit accept/block, and artifact references without phrase content.

