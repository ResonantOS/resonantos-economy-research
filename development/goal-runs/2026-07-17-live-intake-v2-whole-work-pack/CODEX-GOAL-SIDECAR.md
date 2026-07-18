# Codex Goal Sidecar — Live Intake V2 Whole Work-Pack

## Identity

- Stream: `LIVE-INTAKE-V2-WHOLE-WORK-PACK`
- Mode: explicit gated one-shot
- Runtime owner: native Codex Goals
- Source: `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
- Handoff: `HANDOFF.md` and `handoff-index.json`
- Decision profile: none

## Outcome

Advance every dependency-ready SWU in the 36-SWU work-pack, one bounded Task
Session at a time, until the complete capsule is evidenced and separately
approved, or until no safe runnable frontier remains. Completion requires all
applicable receipts, the final readiness audit, and the explicitly authorized
SWU-LIV2-036 close receipt. Planning or local-test success is not completion.

## Initial Frontier

Start with `SWU-LIV2-001`. After each receipt, recompute the dependency frontier
from WORK-PACK and EXECUTION-PACK rather than assuming numeric order alone.

The L0 human lane may remain pending while the machine lane advances through
invented-data L1. After SWU-018/019, safe disposable/local W4 work may also
advance. L2 and production promotion remain blocked by their human gates.

## Iteration Policy

For each iteration:

1. Read this sidecar and the strict root handoff first.
2. Select exactly one dependency-ready SWU whose required authority is present.
3. Generate a strict per-SWU Context Builder Markdown+JSON pack in that Task
   Session evidence folder; block if coverage/write scope/validation is incomplete.
4. Run one Task Session within the exact SWU write scope.
5. Execute its exact validation plus the slice-level negative checks.
6. Persist the standard receipt and synchronize only proven status/frontier.
7. Preserve failed evidence and reroute the named repair; do not edit acceptance
   criteria to make the implementation pass.
8. Continue another safe branch when a blocker does not affect it.
9. Every runtime report lists extra sources, the named gap/SWU requirement that
   justified each, and whether each changed the result.

## Capability Policy

- Allowed normally: `context-builder`, `task-session`, local build/test/browser tools.
- `decision-gate`: only for a newly discovered blocker-level multi-option decision;
  stop for the human answer before consequential implementation.
- `invoke` or `refine`: only after a receipt names a concrete plan/design defect;
  they may author a repair proposal, not continue target mutation in the same step.
- `craft`: disabled unless the user separately requests a scoped ledger update.
- Subagents: not authorized; Dispatch Spec records `subagent_strategy.status=none`.
- External read-only research: only for an active SWU's explicit current-source
  requirement or named gap; prefer official/primary sources and report them.

## Protected Gates

Do not infer, simulate, or bypass:

- SWU-007–009: real screen-reader/RTL, native-IME, and five-person retell evidence.
- SWU-021/024: owner signatures and repeated human evidence.
- SWU-023: local/isolated staging is allowed; public VPS mutation needs explicit authority.
- SWU-025: real-intake enablement needs its human approval receipt.
- SWU-030: Arweave upload, mirror publication, or spending needs explicit external-write approval.
- SWU-031: local regtest is allowed; funded testnet or public broadcast needs approval.
- SWU-035: five real steward acceptances and protected custody evidence are human-owned.
- SWU-036: final archive, real shares, mainnet signing/broadcast, key destruction,
  live database retirement, and production close need readiness plus a new explicit authorization.

Manual gates may be prepared but not marked passed without their real receipts.

## Write Boundary

Use only the active SWU's declared write scope, its Task Session evidence, this
goal-run frontier/evidence, and work-pack/task status synchronization after a
validated receipt. Preserve all unrelated dirty worktree changes. A union of
future paths is not ambient write authority.

## Safety And Product Boundary

- Invented phrases/secrets only through automated L2 work until SWU-025 passes.
- Saved phrases remain hidden until their horizon; no pre-opening public feed.
- Entrusted storage is not E2E encryption; do not make absolute confidentiality claims.
- No production secret, phrase, key, share, wallet seed, or signing material in repo evidence.
- No private-return feature, NFT dependency, permanence guarantee, scheduled maintenance,
  minting, token supply decision, allocation, reward, rank, membership, or governance effect.

## Verification And Completion

Verification is cumulative:

- active SWU command/review passes;
- receipt is complete and content-addressed where required;
- wave exit evidence passes before promotion;
- applicable G-01–G-10 closure gates pass;
- READINESS-009 independently returns ready;
- SWU-036 has separate approval and final independently reproducible receipt.

Do not mark the native goal complete before those conditions. When no safe
eligible SWU remains, stop and report completed, runnable, skipped, and blocked
SWUs; exact blocker/owner/unblock action; validations; residue; extra sources;
and the first next action after authority changes.

