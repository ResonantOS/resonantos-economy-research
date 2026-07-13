# TASK-NL-006 — Commitment Extension Criterion

Layer: L3
Objective: prepare, not assume, a hidden-message commit/open extension.
Dependencies: accepted L2 evidence plus security/privacy/legal owner participation.
Write scope: future security criterion and synthetic fixtures only.

Inputs: RCBC extension interface, threat model, candidate primary technical
sources.
Outputs: frozen protocol criterion, parameters/assumptions, synthetic commitment
fixture specs, review record.

Decision procedure:

1. define adversaries, information exposure, hiding/binding goals and limits;
2. select candidate construction/parameters through security owner review;
3. define randomness, ordering, opening, non-opening, guessing, grinding,
   migration, and no-survivor behavior;
4. prove extension preserves PolicyNonEffectCheck structurally;
5. block if encryption/key recovery is smuggled into commitment semantics.

SWUs: SWU-NL-013 criterion; SWU-NL-014 fixtures.
Validation: security and privacy/legal review plus executable synthetic negatives.
