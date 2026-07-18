# Invoke Result — Time Capsule Live Intake Refresh

- Mode: `refresh`
- Spell: `invoke`
- Canonical ID: `invoke`
- Scope: library
- Phase status: `flag`
- Mode contract: `arcanum/spells/invoke/refresh.md`
- Outputs: `REFRESH-REPORT.md`, `refresh-report.json`,
  `REFRESH-PATCH-PROPOSAL.md`
- Mutation mode: proposal-only
- Source signals: 10; evidence 2, status 1, drift 3, route 3, no-op 1
- Target artifacts: 11
- Proposed changes: 8
- Applied changes: none
- Skipped changes: existing targets preserved; no target work executed
- Dispatch techniques: 8 selected; trace pass; full dispatch deferred to revised plan
- Distill validation: Standard pass for refresh; mutation-capable execution remains plan-gated
- Implementation layering: existing L0 and high-complexity layers inventoried; revised artifact required
- Work-pack: no new executable work-pack authored in refresh mode
- Refresh: report and patch proposal complete
- Target artifact: Time Capsule live-intake workflow, owned by its Invoke/Task Session lifecycle
- Template/recipe selection: standard refresh report plus patch proposal
- Decisions: D-02–D-06 and D-11–D-16 are current plan inputs; D-15 removes private return from the initial release
- Unresolved gaps: V2 human evidence, revised dependency graph, public-live owners, implementation, operations and close/recovery proofs
- Next route: `invoke plan` to author `Live Intake Plan V2`
