# Operator Correction — Supply Is Intentionally Selectable

Date: 2026-07-12
Status: accepted Refine input; supersedes the 1B constraint in derived synthesis
Owner: operator decision recorded by Refine

## Correction

The existing `1,000,000,000 RES` whitepaper value is not a constraint for this
project. ResonantDAO intends to replace it. The Number Lottery may therefore
select the initial total supply through an intentionally arbitrary but publicly
specified community procedure.

This correction supersedes conclusions that preserve 1B or prohibit all
ritual-to-supply coupling. It does not rewrite the explorer, reviewer, writer,
or auditor receipts: those remain historical evidence produced under the
earlier premise.

## What Still Holds

- Raw character/code-point summation remains unsuitable because it creates
  trivial collisions, language and normalization bias, and cheap steering.
- Encoding plaintext or ciphertext as an integer is not encryption.
- Public, committed-but-unopened, and encrypted artifacts remain distinct.
- Admission, ordering, duplicate, moderation, closure, non-reveal, and
  canonicalization rules must be frozen before the result is known.
- A community-derived number is meaningful because of its provenance and
  ceremony; that does not make the procedure private, random, fair, Sybil-safe,
  or economically optimal without separate evidence.

## Corrected Design Question

Which transparent, reproducible, manipulation-aware procedure should transform
a frozen community capsule cohort into ResonantDAO's initial total token supply?

## Leading Candidate

1. Freeze a `SupplySelectionRules` document containing:
   - supply unit and token decimals;
   - allowed supply band or exact decimal-width rule;
   - eligibility, admission, duplicate, moderation, and ordering rules;
   - canonicalization and commitment profiles;
   - closure time and non-reveal behavior;
   - public post-close beacon source and failure fallback;
   - exact digest-to-supply mapping and rejection procedure.
2. Accept either a public word/artifact or a commitment to a non-public capsule
   artifact. Private plaintext and encryption keys are not part of the public
   supply-selection record.
3. Close and freeze the admitted cohort, then publish its canonical manifest and
   cohort root.
4. Obtain the predeclared beacon value only after cohort closure.
5. Derive a domain-separated seed from the frozen root and beacon.
6. Map the seed into the frozen supply band using the declared unbiased integer
   selection procedure.
7. Publish the selected supply and a complete independent-reproduction receipt.
8. Keep the capsule's annual and 2/5/10-year lifecycle separate from later
   changes to token supply.

The beacon does not remove all manipulation or Sybil risk. It prevents the
closing steward or last submitter from knowing the final seed while changing the
cohort, assuming the beacon is not known or controllable before closure.

## Revised Evidence Boundary

The former economic/policy non-effect fixture is superseded. Before choosing the
real supply, the corrected mechanism needs executable evidence for:

1. canonicalization and independent reproduction;
2. admission, duplicate, moderation, and Sybil behavior;
3. public artifact versus commitment separation;
4. closure, withholding, and non-reveal outcomes;
5. beacon availability, independence, and anti-grinding behavior;
6. supply-band and digest-to-integer mapping correctness;
7. modulo-bias avoidance or an explicit non-randomness claim;
8. token-decimal, overflow, mint, and wallet compatibility;
9. frozen-rule governance and no post-result parameter changes;
10. harmful reveal, custody, steward migration, and 2/5/10-year continuity.

No fixture has run and no final supply number has been selected.
