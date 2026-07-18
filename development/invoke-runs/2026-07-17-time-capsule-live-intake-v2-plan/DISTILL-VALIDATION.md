# Distill Validation — Live Intake Plan V2

## Intent And Budget

- Mode: Validate
- Target: existing high-complexity plan artifacts
- Objective: verify smallest units, first-unit narrowness, recomposition, hidden gaps, and navigability
- Role path: local Proposer/Balancer simulation; no subagents requested
- Verdict: pass for plan structure and SWU-LIV2-001

## Role Conversation

### Pass 1 — Dependency shape

- Proposer: hold all schema/API work until screen-reader, IME, and retell evidence passes.
- Balancer objection — unnecessary coupling: those human receipts decide whether
  the participant experience may be promoted, but they do not change whether a
  versioned invented-data contract can be built and tested.
- Reconciliation: split L0 into machine and human evidence lanes. The machine lane
  may feed invented-data L1; both lanes remain mandatory before L2 or real intake.

### Pass 2 — Message visibility

- Proposer: implement D-05 immediate public feed plus moderation.
- Balancer objection — authority conflict: D-05 explicitly excludes saved-for-opening
  messages, and D-15 makes every initial phrase saved/public-at-opening.
- Reconciliation: private steward queue only; no phrase appears before its horizon.

### Pass 3 — Unit size

- Proposer: make “schema/gates/negative fixtures” the first SWU.
- Balancer objection — atomicity: phrase normalization, envelope composition,
  command precedence, lifecycle classification, and capability promotion have
  independent acceptance boundaries.
- Reconciliation: split them into SWUs 001–005; select only phrase normalization.

## Smallest Coherent Unit

`SWU-LIV2-001` freezes one phrase normalization profile plus the vectors and
validator that give it executable meaning. It is reversible, uses invented values,
does not touch the current form, and unlocks envelope/schema work without creating
a live seam.

Further splitting fails semantic closure: prose without vectors is ambiguous;
vectors without a profile lack authority; either without the validator cannot
produce a reviewable pass/fail receipt.

## Atomicity Review

- Non-exempt SWUs: 36
- Closure exemption: 1 valid `READINESS` task
- SWUs with explicit child candidates/rationale: 36/36
- Task-shaped SWUs: 0
- Missing independent acceptance boundaries: 0
- Parallel write-scope conflicts: 0 at planned boundaries; shared migrations/types are sequential
- Verdict: pass

## Recomposition Proof

Phrase profile → envelope/version/lifecycle/gates → isolated invite/version/encryption/
moderation kernel → fenced snapshot/manifest/fingerprint → owner-gated adapter and
operations → horizon encryption/tlock/emergency/archive → Bitcoin carrier/number →
disposable full rehearsal → readiness audit → separately authorized close.

The joining artifacts are explicit: versioned contracts, immutable snapshot ID,
canonical manifest bytes, fingerprint, recovery package hashes, Bitcoin lineage,
SWU receipts, and owner approvals. No hidden participant-key or live-feed adapter is required.

## Deferred Complexity

- private return, participant keys, NFT, token implementation, guaranteed permanence;
- PostgreSQL/HA/scale beyond the bounded cohort;
- scheduled monitoring/maintenance;
- any production external action before W5.

## Tension Ledger

- Resolved: manual evidence vs safe invented-data progress — two-lane L0.
- Resolved: D-05 feed vs D-15 visibility — no pre-opening feed.
- Resolved: old rejection sampling vs D-09 — direct modulo is authoritative.
- Preserved: 3-of-5 can open early — explicit policy/audit risk, not hidden.
- Preserved: ten-year tlock/archive availability is not guaranteed — G-L3-08.

## Premortem

Likely failure: urgency collapses “plan/test pass” into “safe to collect/close,”
leading to real data before restore/human evidence or destructive cleanup before
independent package verification. Guardrails: capability-state gates, one-SWU
handoffs, manual SWU-025/036, and final readiness audit.

## Frame Expiry

Repeat Invoke Plan and Distill if visibility, runtime/datastore, close instant,
range formula, drand chain, archive profile, Bitcoin payload/carrier/block rule,
or emergency quorum changes.

## Navigation

Start: `WORK-PACK.md` → `TASK-LIV2-001.md` → `SWU-LIV2-001`.
Do not begin at the API or deployment tasks. Generate the execution-time Context
Builder pack only after the user explicitly authorizes that SWU.

