# TASK-NL-003 — Deterministic Public Toy

Layer: L1
Objective: implement a synthetic, public-only RCBC toy for reproducibility and
policy non-effect testing.
Dependencies: TASK-NL-002 accepted.
Write scope: future RCBC toy implementation/tests only; no live data.

Inputs: frozen toy ruleset and synthetic fixture records.
Outputs: canonical bytes, manifest, root/digest, symbolic integer,
PolicyNonEffectCheck receipts.

Algorithm:

1. validate records under frozen schema;
2. canonicalize exact accepted fields;
3. sort under explicit total order;
4. domain-separate leaf/root hashing under named algorithms;
5. interpret final bytes as unsigned big-endian integer;
6. compare external policy model before/after every ritual variation;
7. hard-fail any dependency or cross-implementation mismatch.

SWUs: SWU-NL-006 canonical records; SWU-NL-007 manifest/root/integer;
SWU-NL-008 policy check.
Edge cases: Unicode, duplicates, empty cohort, malformed input, algorithm id,
ordering tie, grinding.
Validation: known vectors, independent reproduction, economic-boundary matrix.
