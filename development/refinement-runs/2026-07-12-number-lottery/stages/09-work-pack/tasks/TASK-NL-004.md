# TASK-NL-004 — L1 Evidence Harness

Layer: L1
Objective: run and adjudicate the L1 fixture subset without overclaiming.
Dependencies: TASK-NL-003.
Write scope: future evidence-run folder and result summary only.

Inputs: fixture specs and toy implementation.
Outputs: JSONL run receipts, objective/metric calculations, candidate verdict
summary, discrepancy ledger.

Process:

1. pre-register exact fixture/version/expected outcomes;
2. run canonicalization, cohort-abuse, grinding, and economic-boundary fixtures;
3. retain raw results and command/environment metadata;
4. adjudicate each expected outcome as pass/flag/block without promoting policy;
5. reroute any mismatch to the owning task.

SWUs: SWU-NL-009 run; SWU-NL-010 adjudicate.
Validation: research-evidence-harness schemas and independent claim/evidence
audit.
Execution owner: research-evidence-harness plus manual approver.
