# Popper Non-Vacuity Review

Verdict: REVISE with KILLs

No candidate earns `PASS`: the synthesis names attacks but provides no runnable
fixture corpus with expected outputs.

| Candidate | Verdict | Non-vacuity finding |
| --- | --- | --- |
| Character/code-point sum | **KILL** | `"AB" = "BA"` falsifies order preservation; script/normalization choices remain load-bearing. Educational art only. |
| Public-manifest digest | **REVISE** | No frozen schema, canonical bytes, expected digest, duplicate policy, Sybil outcome, or grinding witness exists. |
| Commitment-cohort root | **REVISE** | Construction, randomness, ordering, opening rules, guessing test, and last-submitter defense are unspecified. |
| Hybrid commitment + encrypted payload | **REVISE** | No key/nonce/opening-loss, custody migration, harmful-reveal, or 2/5/10-year recovery fixture. |
| Fixed 1B + ritual labels | **REVISE** | Needs a machine-checkable proof that ritual mutation leaves supply and authority unchanged, plus status-confusion test. |
| Externally bounded mapping | **KILL for this run** | No independently justified range, economic owner, or executable unbiased-mapping fixture. |
| Direct word-derived supply | **KILL** | 100-wallet, grinding, moderation, and normalization witnesses show direct monetary manipulability. |

## Minimum Fixture Pack

1. `canonicalization.json`: reordered fields, Unicode forms, scripts, empty and
   malformed inputs; exact accepted records, bytes, digest/root, two independent
   reproductions.
2. `cohort-abuse.json`: duplicate artifact/identity and one actor with 100
   wallets; exact counted leaves.
3. `participation-modes.json`: public, committed-but-unopened, abstain, and
   never-open cases; no penalty for abstention/non-opening.
4. `harmful-reveal.json`: quarantine/disposition receipt, no publication,
   unchanged root, no status consequence.
5. `loss-and-reveal.json`: lost opening/key, early request, year-2 consent,
   year-5 refusal, year-10 silence/death; no inferred consent.
6. `steward-migration.json`: successor reproduces state/root but cannot alter
   consent or supply.
7. `grinding.json`: final submitter tries 10,000 variants; material selection
   advantage falsifies intake design.
8. `status-capture.json`: founder, whale, steward, and ordinary participant get
   no extra inclusion, placement, reveal privilege, rank, or weight.
9. `economic-boundary.json`: every ritual input/output varies while planned
   supply remains `1_000_000_000` and reward/governance fields remain unchanged.

No cryptographic, behavioral, governance, or economic validation is claimed.
