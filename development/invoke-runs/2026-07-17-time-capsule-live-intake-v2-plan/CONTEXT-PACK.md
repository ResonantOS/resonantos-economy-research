# Context Pack — Live Intake Plan V2

- Mode: `deep`
- Strict coverage: `pass`
- Target: `Live Intake Plan V2`
- Mutation boundary: planning artifacts only
- Evidence date: 2026-07-17

## Planning Objective

Author the high-complexity, split implementation plan that moves the existing
non-collecting Time Capsule form toward bounded real intake and a recoverable
2/5/10-year close without treating design decisions as implementation proof.

## Obligation Matrix

| ID | Obligation | Selected evidence | Status |
| --- | --- | --- | --- |
| O-01 | Preserve the completed V2 non-collecting form as historical L0 evidence. | Task Session closeout; browser evidence | covered |
| O-02 | Preserve manual screen-reader, native-IME, RTL pronunciation, and five-person retell gaps. | V2 fixtures; current Access Matrix; refresh report | covered |
| O-03 | Implement the private-invite, editable-envelope, Node/TypeScript and SQLite decisions without claiming readiness. | `DECISIONS.md` D-02–D-04 | covered |
| O-04 | Keep all initial phrases hidden until opening and moderate them through a steward-only queue. | D-01, D-05, D-15 | covered |
| O-05 | Fence close at the server-authoritative UTC instant and produce one reproducible accepted snapshot. | D-04, D-07; candidate architecture | covered |
| O-06 | Define canonical manifest, fingerprint, Bitcoin carrier, block selection, and number mapping precisely. | D-08, D-09, D-12–D-14 | covered |
| O-07 | Plan protocol-primary opening, emergency recovery, archive publication, and accepted failure behavior. | D-10, D-11, D-15, D-16; protocol closure gates | covered |
| O-08 | Reuse the existing VPS/Traefik route without treating the static deployment receipt as API readiness. | deployment validation and configuration | covered |
| O-09 | Separate invented-data execution from real-intake and irreversible-close promotion. | refresh Distill result; candidate four-state architecture | covered |
| O-10 | Provide L0–L3 waves, implementation-detail task contracts, atomic SWUs, validation, receipts, and owner gates. | Invoke Plan contract and templates | covered |
| O-11 | Make the first executable unit the narrowest reversible trust-building step. | refresh Distill result; Invoke SWU policy | covered |
| O-12 | Preserve ritual/token non-effect: the number is not supply policy, minting, reward, rank, or governance authority. | D-09; decisions assumptions; V2 participant contract | covered |

## Selected Sources

| Source | Selectors | Obligation fit |
| --- | --- | --- |
| `DECISIONS.md` | D-01–D-16; Implementation And Proof Gates; Assumptions | O-03–O-07, O-12 |
| `development/invoke-runs/2026-07-17-time-capsule-live-intake-refresh/REFRESH-REPORT.md` | Proposed Plan Shape; Unresolved Gaps; Next Route | O-02, O-09–O-11 |
| `development/invoke-runs/2026-07-17-time-capsule-live-intake-refresh/DISTILL-VALIDATION.md` | Smallest Coherent Unit; Closure And Recomposition | O-09, O-11 |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/06-architecture-bundle.md` | Views 1–6; DD-05–DD-09 | O-03–O-05, O-09 |
| `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack.md` | task/SWU manifest; blockers; validation | O-09, O-10 |
| `development/task-sessions/2026-07-17-time-capsule-intake-form-2h/TASK-SESSION-CLOSEOUT.md` | Delivered; Residual Frontier | O-01, O-02 |
| `development/task-sessions/2026-07-17-time-capsule-intake-form-2h/SWU-FORM-VERIFY-004/BROWSER-EVIDENCE.json` | fixture, journey, browser state, unclaimed evidence | O-01, O-02 |
| `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/README.md` | Participant Contract; Important Boundary; Future Live Adapter Seam | O-01, O-04, O-12 |
| `development/refinement-runs/2026-07-12-number-lottery/presentation/site/contribute/fixtures/time-capsule-fixtures-v1.js` | `phraseProfile`; `accessModes`; `retellProtocol` | O-02, O-03, O-11 |
| `development/research/2026-07-17-agentless-time-capsule-protocol/README.md` | selected release mode; recommendation | O-07 |
| `development/research/2026-07-17-agentless-time-capsule-protocol/gates/closure-gates.md` | G-01–G-10; fail-closed rule | O-07, O-10 |
| `development/research/2026-07-17-agentless-time-capsule-protocol/levels/L2-closure-plan.md` | local protocol, manifest, storage, close phases | O-06, O-07 |
| `development/refinement-runs/2026-07-12-number-lottery/presentation/deployment/DEPLOYMENT-VALIDATION.md` | deployment shape; validation boundary | O-08 |
| `.arcanum/inventory/entries/time-capsule-live-intake-refine.md` | candidate plan summary and gate state | O-09, O-10 |

## Explicit Resolutions

1. D-15 supersedes earlier private-return and release-time-consent language for
   the initial capsule: every accepted phrase becomes public at its horizon.
2. D-05 does not create a live feed for these saved phrases. Its own boundary
   excludes saved-for-opening content; V2 therefore uses a private moderation
   queue and no pre-opening public message feed.
3. D-03 resolves the old stack gap. It does not provide an implementation,
   restore, or operations receipt.
4. D-09's published direct modulo formula supersedes the older candidate
   rejection-sampling design.
5. Contract/schema work and the isolated invented-data kernel may proceed from
   machine-verifiable contracts while human access/comprehension evidence runs
   in parallel. Human evidence remains mandatory before L2 staging promotion
   or real intake.

## Excluded Candidates

- Raw subagent review returns: accepted findings are already carried by the
  candidate architecture and refresh.
- Private-return implementation: explicitly deferred by D-15.
- Immediate public feed: no current message class is public before opening.
- Token minting, allocation, distribution, rank, membership, reward, or
  governance behavior: outside the ritual plan.
- Production credentials, wallet material, real messages, or external writes:
  forbidden in Invoke Plan.

## Coverage Result

- Files selected: 14
- Obligations covered: 12/12
- Strict coverage: pass
- Runtime handoff pack: not generated; Task Session creates it for the selected SWU
- Planning blockers: none
- Target execution blockers: preserved in `GAP-LEDGER.md`

