# TASK-NL-002 — Fixture Specification Package

Layer: L0
Objective: convert nine manual fixture descriptions into validator-safe schemas
without claiming execution evidence.
Dependencies: TASK-NL-001.
Write scope: future RCBC fixture/schema/tool folders only.

Inputs: `08-toy-game-evidence.json`, source/owner contracts.
Outputs: common envelope schema, nine fixture files, structural/completeness
validator and negative tests.

Algorithm:

1. define required fields for id/status/executed/owner/inputs/expected/failure;
2. encode each fixture without changing semantics;
3. reject missing evidence owner or pass-like claims when `executed=false`;
4. emit completeness report across all nine ids.

SWUs: SWU-NL-003 envelope; SWU-NL-004 fixtures; SWU-NL-005 validator.
Done: all fixtures validate and negative tests reject laundering scaffolds into
results.
Validation: schema tests, missing-field tests, fixture-id completeness.
Execution owner: subagent/local-fallback.
