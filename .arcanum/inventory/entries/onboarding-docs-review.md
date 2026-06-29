# Inventory Entry: Onboarding-Docs Review — README/GUIDE/CONTRIBUTING red-team

Status: closed `resolved` (auditor ACCEPT, 2026-06-28); change requests applied 2026-06-29 (MI4 pending owner)
Entry type: review-findings
Authority posture: non-authority-read-model
Tags: `review`, `strategy-result`, `dispatch`, `subagents`, `resonantos-economy`

## Source Refs

- [reviews/onboarding-docs-review/findings.md](../../../reviews/onboarding-docs-review/findings.md) — verified change requests + punch list
- [reviews/onboarding-docs-review/attacks.md](../../../reviews/onboarding-docs-review/attacks.md) — verbatim attacker initial + final (robot_talks) positions
- Ledger: `2026-06-28-onboarding-docs-review` (dispatch + close rows) in [telemetry/agents/subagents-dispatch.yaml](../../../telemetry/agents/subagents-dispatch.yaml)

## Strategy Result (lanes / subagents / flow / gate)

- **P1 / type:** DISPATCH (isolation from author bias — the targets were authored this session — + parallelism + synthesis); `dispatch_type: review`.
- **Targets:** README.md, GUIDE.md, CONTRIBUTING.md (each attacker read all three + governing context).
- **Lanes / subagents:** Attackers `robot_talks` (Ostrom = operability · Taleb = fidelity/governance · Fritz = ownership/reference-integrity) → strategist-authored synthesis → verifier Quine (zig-zag) → coverage auditor Brandenburg (`final_approver`).
- **Dependency flow:** attackers ─seq→ synthesis ↔ verifier (zig-zag, ran once) → auditor; feedback edge unused.
- **Gate / ledger:** check-tension gate both PASS (checker + reviewer); human `confirmed`; registered + closed `resolved`; agents_spawned total 5, loops_used 1.

## Result Summary

Three docs are posture-faithful but the edit session left **16 verified findings**:
**2 CRITICAL** (README "auditor ACCEPT" invented vs ledger; README links + leans on
gitignored/purged `sources/local-snapshots/`), **8 MAJOR** (start-path pointer targets
the wrong file; no single authoritative onboarding order; "Framing" double-owned &
drifted; "two documents" omits AGENTS; subtower status drift; "survived" understates
kills; "safe" validation-scaffold; no worked first-action), **6 MINOR** (incl. the
de-CAV2 method-authority decision still un-superseded — MI4). Verdict: all three FIX.
Verifier confirmed 13/13 factual findings, 0 dropped.

## Reusable Selectors

- `onboarding-docs-review` for the full verified change-request list.
- `current-state-drift-cluster` (README:184-230: 3 concentrated broken/inflated pointers — fix as one reconciliation pass).
- `no-canonical-onboarding-order` (MA7: declare the inventory Start Here the one order; relabel README Reading Order a deep-dive index).
- `de-cav2-method-authority-decision-debt` (MI4: the reframe rests on prose; needs a superseding decision).

## Residue / Next Act

**Change requests applied 2026-06-29** (all 16 + the consistency spillovers found
on apply): edits to `README.md`, `GUIDE.md`, `CONTRIBUTING.md`, `AGENTS.md`, the
inventory index, and the four external subtower headers (`scaffolded` →
`first-pass returns present`). Verified: links resolve, no "auditor ACCEPT", no
"safe validation scaffold", Framing single-owned by GUIDE, load-bearing checker
clean. **MI4 enacted 2026-06-29** (owner-approved): the superseding decision
([2026-06-29 localize method authority](../../../authority/decisions/2026-06-29-method-authority-localized.md),
status `pass`) transfers method authority to the local constitution; the 2026-06-26
method-authority clause is superseded (marked in place). All 16 findings now closed.

## Promotion Boundary

Non-authority review read-model. Promotes no token, bounty, governance, mechanism, or
validation claim.
