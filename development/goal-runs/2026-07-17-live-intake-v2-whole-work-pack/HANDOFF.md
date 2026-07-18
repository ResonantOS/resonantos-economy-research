# Codex Goal Handoff Pack — Live Intake V2 Whole Work-Pack

## Identity

- Task/SWU: `LIVE-INTAKE-V2-WHOLE-WORK-PACK`
- Source work-pack: `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
- Session/run id: `codex-goal-profile-live-intake-v2-2026-07-17`
- Session evidence path: `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/`
- Runtime handoff: `codex-goal`
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` with pre-existing dirty worktree
- Evidence date: 2026-07-17

This is execution-session evidence. It does not replace the work-pack, task
contracts, decisions, or per-SWU Context Builder packs.

## Obligation Coverage

| ID | Obligation | Status | Selected evidence | Resolution |
| --- | --- | --- | --- | --- |
| O-01 | Execute the explicitly selected 36-SWU stream one SWU at a time. | covered | WORK-PACK Shared SWU Manifest; task contracts | Use dependency-ready frontier; never bundle Task Sessions. |
| O-02 | Respect six-wave dependencies, two-lane L0, and promotion evidence. | covered | EXECUTION-PACK; IMPLEMENTATION-LAYERING | Safe machine branches may continue while manual L0 evidence remains pending; L2 cannot. |
| O-03 | Generate a strict execution-time pack before each SWU. | covered | WORK-PACK Gates; Context Builder contract | Persist Markdown plus JSON/index in that Task Session evidence folder. |
| O-04 | Keep automated work through L2 on invented data unless the real-intake gate passes. | covered | VALIDATION-STRATEGY; tasks 003–005 | SWU-025 is the protected transition; no earlier receipt substitutes. |
| O-05 | Constrain writes to the current SWU's declared paths and evidence synchronization. | covered | all task-local Write scope fields | Shared union does not authorize touching every path at once. |
| O-06 | Validate each SWU and persist a complete receipt before advancing dependents. | covered | WORK-PACK receipt contract; task Validation fields | Failed/flagged validation blocks dependents and names a repair path. |
| O-07 | Preserve human and owner gates as human evidence. | covered | GAP-LEDGER G-L0/G-L2/G-L3; tasks 002/005/008 | Do not synthesize screen-reader, retell, owner, witness, or steward acceptance. |
| O-08 | Preserve external and irreversible approval boundaries. | covered | DISPATCH boundaries; tasks 005–008 | Public VPS, real intake, paid archive/testnet, real shares, signing, broadcast, cleanup, and close require their explicit gate. |
| O-09 | Preserve privacy, no-live-feed, public-at-opening, and token non-effect. | covered | cross-task decisions; D-01–D-16 | Never introduce private return, pre-opening feed, minting, allocation, reward, rank, membership, or governance effects. |
| O-10 | Permit only bounded repair/reroute capabilities. | covered | dispatch and one-shot policy | Context Builder and Task Session are normal; Decision Gate only for a blocker; no ambient Invoke/Refine/Craft/subagents. |
| O-11 | Complete only with every applicable SWU, readiness audit, and separately approved close receipt. | covered | task 008 and READINESS-009 | Otherwise return the exact completed/runnable/blocked frontier; do not mark complete. |
| O-12 | Report every source used outside this pack. | covered | Codex Goal Profile contract | Name source, named gap/SWU requirement, and whether it changed result. |

Strict coverage: `pass`

## Selected Sources

- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
  - Selectors: Objective, Delivery Boundary, Task Board, Shared SWU Manifest, Gates, Next Route
  - Obligations: O-01–O-06, O-11
  - Evidence: 36 atomic SWUs, one Task Session each, only evidence-backed promotion.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/EXECUTION-PACK.md`
  - Selectors: Wave Choreography, Scheduling Rules, Promotion Stops
  - Obligations: O-01–O-03, O-07–O-08
  - Evidence: W0–W5 ordering and parallel boundaries.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/IMPLEMENTATION-LAYERING.md`
  - Selectors: Layer Decision Table, Two-Lane L0 Rule, Non-Regression Guardrails
  - Obligations: O-02, O-04, O-09
  - Evidence: machine work may continue safely; human lane remains a hard L2 gate.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/GAP-LEDGER.md`
  - Selectors: G-L0-01 through G-L3-09
  - Obligations: O-07–O-08, O-11
  - Evidence: 16 named later gates with owners and repair paths.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/VALIDATION-STRATEGY.md`
  - Selectors: Evidence Classes, Negative Evidence, Secret And Real-Data Rule, Receipt Shape
  - Obligations: O-04, O-06, O-09
  - Evidence: positive/negative validation and secret boundaries.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/DISPATCH.json`
  - Selectors: subagent_strategy, gates, boundary_evidence, promotion_guardrails
  - Obligations: O-07–O-10
  - Evidence: no subagents; separate lifecycle/execution/promotion owners.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-001.md`
  - Selectors: Implementation Rules; SWU-001–005
  - Obligations: O-01, O-05–O-06
  - Evidence: contract write scopes and validators.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-002.md`
  - Selectors: Procedure, Privacy Rule, SWU-006–009
  - Obligations: O-02, O-07
  - Evidence: human evidence cannot be fabricated or averaged.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-003.md`
  - Selectors: Data/Interface Model, State/Security Rules, SWU-010–015
  - Obligations: O-04–O-06, O-09
  - Evidence: invented Node/SQLite intake with entrusted/private moderation boundary.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-004.md`
  - Selectors: Canonical Record Design, SWU-016–020
  - Obligations: O-01, O-05–O-06
  - Evidence: close fence, manifest, fingerprint, and resilience.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-005.md`
  - Selectors: Owner Package, Staged Runtime Shape, SWU-021–025
  - Obligations: O-04, O-07–O-08
  - Evidence: local/invented staging before separately approved live intake.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-006.md`
  - Selectors: Bundle Algorithm, SWU-026–030
  - Obligations: O-05–O-08
  - Evidence: disposable tlock, decoder, threshold, archive path; external upload gated.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-007.md`
  - Selectors: Binary Carrier, Number Algorithm, SWU-031–032
  - Obligations: O-05–O-06, O-08–O-09
  - Evidence: regtest local path; testnet/production funding and broadcast gated.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-008.md`
  - Selectors: Ordered Ceremony, SWU-033–036, Synchronization
  - Obligations: O-07–O-09, O-11
  - Evidence: close is last, manual, and separately authorized.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-READINESS-009.md`
  - Selectors: Audit Algorithm, Done Criteria, Validation
  - Obligations: O-06, O-08, O-11
  - Evidence: readiness audit only offers SWU-036 for approval.
- `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/shared/cross-task-decisions.md`
  - Selectors: decision-to-effect table
  - Obligations: O-09
  - Evidence: compact D-01–D-16 binding effects and precedence.
- `DECISIONS.md`
  - Selectors: D-01–D-16; Implementation And Proof Gates; Assumptions
  - Obligations: O-07–O-09
  - Evidence: product and ceremony authority.
- `development/research/2026-07-17-agentless-time-capsule-protocol/gates/closure-gates.md`
  - Selectors: G-01–G-10; Fail-closed rule
  - Obligations: O-06–O-08, O-11
  - Evidence: future-opening proof gates.
- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/README.md`
  - Selectors: Participant Contract, Important Boundary, Future Live Adapter Seam
  - Obligations: O-04, O-09
  - Evidence: current form remains non-collecting until promotion.
- `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/fixtures/time-capsule-fixtures-v1.js`
  - Selectors: phraseProfile, accessModes, retellProtocol
  - Obligations: O-02, O-05–O-07
  - Evidence: V2 contract and manual-evidence seed.

## Architecture Guidance

Use the work-pack composition path `waves → tasks → one SWU → receipt`. Keep
preview, synthetic, staged, live, closing, closed, recovery, and opening states
distinct. Persist only explicitly confirmed versions. The initial content class
is hidden until its horizon, then public; no pre-opening feed exists.

## Related Feature Context

The current V2 form is completed historical L0 machine evidence and remains
non-collecting. New implementation lives under
`development/time-capsule-live-intake-v2/` except for the exact existing form,
Access Matrix, candidate deployment, and evidence paths named by later SWUs.

## Constraints And Non-Goals

- One SWU per Task Session; build a new strict per-SWU pack before mutation.
- Preserve pre-existing dirty worktree changes and unrelated files.
- Use invented content/secrets for automated work until SWU-025 passes.
- No public feed, private return, participant key, E2E claim, or permanence guarantee.
- No production secret, phrase, invite, key, share, wallet seed, or signing material in repository receipts.
- No NFT, minting, token supply, allocation, reward, rank, membership, or governance effect.
- No subagents; no broad ambient Invoke, Refine, Craft, or Decision Gate authority.

## Write Scope

- The exact write scope declared by the active SWU only.
- Task Session and per-SWU Context Builder evidence under `development/task-sessions/`.
- Goal-run frontier/receipt synchronization under this session evidence folder.
- Work-pack/task status synchronization after a validated receipt.

The union of future paths is not permission to modify them before their SWU is
dependency-ready and selected.

## Validation Surface

- The exact `Validation:` command/review in the active SWU.
- `VALIDATION-STRATEGY.md` evidence class for the current slice.
- Standard SWU receipt with artifacts, files, validation, blockers, residue, and reroute.
- Wave exit and promotion gates before unlocking dependent capabilities.
- Final independent `TASK-LIV2-READINESS-009` audit before SWU-036 can be offered.

## Gaps And Blockers

- G-L0-01–03: require real human access/retell evidence; no automated substitute.
- G-L2-01–03: require named owner and operations evidence before real intake.
- G-L3-01–08: require protocol, recovery, custody, archive, Bitcoin, number, rehearsal, and risk evidence.
- G-L3-09: production external/irreversible actions require separate authorization.

Continue other dependency-ready safe branches when one blocker does not affect
them. Stop when no safe eligible SWU remains, a blocker affects all remaining
frontiers, or the next action needs new human/external authority.

## Authority Precedence

1. `DECISIONS.md` D-01–D-16 and explicit later user approvals.
2. `WORK-PACK.md`, task contracts, and `EXECUTION-PACK.md` dependency/gate rules.
3. Completed Task Session and manual-owner receipts.
4. This handoff/sidecar as runtime control; it cannot loosen items 1–3.
5. Inventory and extra sources as non-authority evidence only.

## Fallback Exploration Rule

Read this pack first. Explore outside it only for a named gap or an active SWU's
explicit current-source requirement, such as official dependency/chain metadata.
Report every extra source, the gap/SWU that justified it, and whether it changed
the implementation or result. Extra evidence cannot bypass a human gate.

## Provenance

- Work-pack SHA-256: `c0d66deedb913f4b33e4bb2ec93884042f9fa2df88d8b91677e18d3e95bbe031`
- Execution-pack SHA-256: `5134ba53d88c35dd425621d904bcaf9ae697b55efe51da29b8ecbdcb1770a4f3`
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6`; dirty state preserved
- Builder mode: `deep`, 20 selected files, strict

## Output Paths

- Markdown: `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/HANDOFF.md`
- JSON/index: `development/goal-runs/2026-07-17-live-intake-v2-whole-work-pack/handoff-index.json`

