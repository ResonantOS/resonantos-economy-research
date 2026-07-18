# Design Decisions And Gap Ledger

## Settled Decisions

| ID | Decision | Rejected alternative | Reason |
| --- | --- | --- | --- |
| D-01 | Three release horizons: 2y, 5y, 10y. | one undifferentiated word list | The user assigns words to releases and future meaning. |
| D-02 | Zero to two words per admitted participant per horizon. | one total word; unbounded words | Matches the request while keeping bounded influence. |
| D-03 | Visibility is chosen per word slot. | one visibility mode for the entire participant | A person may want different words public at different times. |
| D-04 | All accepted horizons shape one founding root and one supply. | one supply per release; recalculate later | ResonantDAO needs one initial supply; later openings are memory events. |
| D-05 | Later openings never change supply. | release-driven supply mutation | Preserves founding finality and keeps stewardship from becoming monetary policy. |
| D-06 | Quota is enforced by an opaque credential in a private ledger. | wallet = person; public identity in manifest | Enforceable without a false unique-human claim or public identity link. |
| D-07 | Slot 1 fills before slot 2. | participant chooses arbitrary slot labels | Removes a free root-grinding choice and simplifies the form. |
| D-08 | Duplicate word values are allowed. | vocabulary deduplication | Repetition can carry community meaning; influence is bounded by slot quota. |
| D-09 | Sealed display uses release-time reconfirmation. | automatic public reveal | No response, death, loss, or changed context must not become inferred consent. |
| D-10 | The root uses records, not letter scores. | character/code-point sums | Preserves order, mode, horizon, and provenance under a reproducible profile. |
| D-11 | Range mapping uses rejection sampling. | direct modulo | Avoids the known modulo-bias failure pattern; still requires fixtures. |
| D-12 | The first executable unit is explanation + non-collecting form. | real intake first | It closes the current comprehension gap without exposing real content. |

## Target-Artifact Gaps

| ID | Gap | Impact | Owner | Repair path | Blocks |
| --- | --- | --- | --- | --- | --- |
| G-01 | Final supply unit and inclusive band | Mapping cannot run against a real token space. | token/protocol owner | Decide unit, decimals, min/max, overflow and wallet constraints; add fixtures. | L1 real selector |
| G-02 | Beacon provider, round rule, and fallback | Post-close input may be unavailable or influenceable. | security/mechanism owner | Compare candidates; freeze one source and fail/fallback behavior; attack it. | L1 real selector |
| G-03 | Credential issuance and admission legitimacy | Form quota does not prove one human or fair admission. | governance/membership owner | Specify issuance, recovery, revocation, audit, and Sybil posture. | real intake |
| G-04 | Sealed commitment/encryption/custody profile | Real sealed words could be guessable, lost, exposed, or unrecoverable. | security/privacy/custody owners | Threat model, named constructions, client flow, keys, migration, loss, and no-survivor fixtures. | sealed intake |
| G-05 | Moderation, appeal, and harmful release policy | Public/released content may harm people or third parties. | legal/content owner | Versioned policy, appeal path, release-time review, quarantine receipts. | real display/release |
| G-06 | Ten-year stewardship and succession | Promise may depend on one service, key, or person. | archive/successor owner | Redundancy, annual drills, migration, successor authority, loss outcomes. | real ceremony |
| G-07 | Multilingual and assistive-technology fixtures | Candidate word profile may exclude scripts or users. | accessibility/language owner | Test normalization, grapheme counts, input methods, screen readers, keyboard-only flow. | real intake |
| G-08 | Independent implementations and fixture results | Reproducibility and bias claims remain untested. | fixture/evidence owner | Build and run the corrected fixture pack with two implementations. | supply acceptance |

## Invoke Gaps

- Candidate template families remain invoke-local; no promotion is requested.
- Repository-wide observability and inventory projections were not mutated
  because those files already contain unrelated working-tree changes. Run-local
  receipts preserve this invocation without overwriting that work.

