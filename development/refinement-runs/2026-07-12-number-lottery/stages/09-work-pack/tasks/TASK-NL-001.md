# TASK-NL-001 — Authority And Source Contracts

Layer: L0
Objective: make source drift and external owner boundaries machine-readable.
Dependencies: none.
Write scope: future RCBC source-contract folder only.

Inputs: current whitepaper selector, authority model, repaired design glossary.
Outputs: `PolicySourceSnapshot` schema/example and owner/interface matrix.

Algorithm:

1. capture URL, document version/date, observed date, selector, digest/handle;
2. classify source fact versus local inference;
3. enumerate each external owner and allowed/forbidden RCBC interaction;
4. fail closed on missing owner or unverifiable source selector.

SWUs: SWU-NL-001 source snapshot; SWU-NL-002 owner/interface matrix.
Done: schemas validate and no source fact implies economic validation.
Validation: schema check, source selector review, authority-boundary review.
Execution owner: local-fallback/manual.
Handoff: Context Builder selects authority/source spine and RCBC design only.
