# TASK-NL-005 — Stewardship And Event State Model

Layer: L2
Objective: specify synthetic state transitions for display disposition,
non-participation, consent, loss, migration, and status capture.
Dependencies: TASK-NL-004 accepted or repaired.
Write scope: future lifecycle model/fixtures only.

Inputs: public toy evidence and moderation/stewardship owner decisions.
Outputs: signed disposition overlay model, lifecycle state machine, five L2
fixture implementations and traces.

State rules:

- historical root is immutable under its frozen rule;
- display eligibility is versioned overlay state;
- no submission creates no RCBC record;
- non-response/refusal/loss never infers consent;
- successor may preserve/migrate but not rewrite consent/policy;
- role/funding cannot change placement, count, reward, or authority.

SWUs: SWU-NL-011 disposition overlay; SWU-NL-012 lifecycle/migration model.
Validation: negative transition fixtures and owner review.
