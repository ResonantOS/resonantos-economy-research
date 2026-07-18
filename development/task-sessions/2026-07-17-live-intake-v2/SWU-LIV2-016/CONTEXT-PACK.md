# Context Pack — SWU-LIV2-016

Session evidence only. This strict pack evaluates the transactional close fence.
It is blocked before implementation because the current writer paths cannot prove
the authoritative commit-time rule inside the selected SWU write scope.

## Identity

- Task/SWU: `SWU-LIV2-016 — Transactional close fence`
- Parent: `TASK-LIV2-004 — Close, Manifest, Fingerprint, And Resilience`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-016`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter/subagent
- Dependencies: `SWU-LIV2-013` pass; `SWU-LIV2-015` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` dirty
- Captured: `2026-07-17T22:35:38Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-016-01 | Sample the authoritative close clock after the close coordinator acquires the SQLite write transaction. | D-07; SWU Algorithm | covered | A new close coordinator can own this clock seam within scope. |
| O-016-02 | Envelope confirmation must compare authoritative commit time inside its transaction, not trust a caller value captured before lock acquisition. | D-07; command contract; envelope service | block | Current service parses `command.serverCommitInstantUtc` after `BEGIN IMMEDIATE`; selected write scope excludes this service and contract. |
| O-016-03 | Moderation disposition must compare authoritative commit time inside its transaction, not trust a caller value captured before lock acquisition. | D-07; moderation service | block | Current service parses `command.actionInstantUtc` before its transaction; selected write scope excludes this service. |
| O-016-04 | Advance one cohort atomically from open through closing to closed and increment its epoch. | SWU Algorithm; schema | covered | Existing mutable state/epoch fields support one coordinator transaction. |
| O-016-05 | Persist one durable idempotent close receipt and snapshot identifier. | SWU Algorithm; audit schema | covered | One close audit receipt can be appended in the same state transition and replayed after restart. |
| O-016-06 | Ensure two closers cannot create two epochs, snapshots, or receipts. | SWU Done; SQLite immediate transaction | covered | Serialized state check plus atomic receipt insertion can prove this. |
| O-016-07 | Prove the request-before/commit-after writer race against the real envelope and moderation paths. | SWU Done/Evidence | block | Both real writers lack an in-transaction authoritative clock; a close-only test double would not prove the system. |
| O-016-08 | Ensure browser/request timestamps never decide acceptance. | D-07 Handoff | block | Writer APIs currently accept timestamp fields from their command boundaries; origin cannot be proven within close-only scope. |
| O-016-09 | Keep execution invented, local, frozen-clock, and externally effect-free. | SWU boundary; goal | covered | No public VPS, real intake, external time source, or production close is needed. |
| O-016-10 | Complete the fence without modifying files outside close coordinator/repository/tests. | SWU write scope | block | Satisfying O-016-02/03/07/08 requires command-contract and writer-service changes or a preceding repair SWU. |

Strict coverage: `5/10`, `BLOCK`.

## Selected Sources

1. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-004.md`
   - Selectors: SWU-LIV2-016 primary behavior, algorithm, write scope, done, handoff.
   - Covers: O-016-01, O-016-04–O-016-10.
2. `DECISIONS.md`
   - Selector: D-07 authoritative closing instant and transaction-commit rule.
   - Covers: O-016-01–O-016-04, O-016-07–O-016-09.
3. `development/time-capsule-live-intake-v2/contracts/command-state-v1.json`
   - Selectors: command field `server_commit_instant_utc`; algorithm step 3; replay boundary.
   - Covers: O-016-02, O-016-07, O-016-08.
4. Current envelope and moderation service implementations.
   - Selectors: transaction entry; parsing of command timestamps; state/epoch/fence checks.
   - Covers: O-016-02, O-016-03, O-016-07, O-016-08, O-016-10.
5. `development/time-capsule-live-intake-v2/api/migrations/0001_initial_intake.sql`
   - Selectors: cohort state/epoch/close instant; audit events.
   - Covers: O-016-04–O-016-06.
6. `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-015/VALIDATION-RECEIPT.json`
   - Selectors: dependency proof; deferred transport authentication/close reconciliation.
   - Covers: dependency proof and O-016-03, O-016-09.

No outside source was used.

## Blocking Evidence

The envelope service enters `EnvelopeRepository.transaction()` and only then parses
`command.serverCommitInstantUtc`. The value is nevertheless supplied before lock
acquisition. If that call waits behind another SQLite writer and crosses the close
instant, it can still present the earlier value and pass while cohort state remains
open. The moderation service parses `command.actionInstantUtc` before entering its
own transaction, leaving the same race. A close coordinator cannot correct either
path without changing those services or adding a shared transaction-time clock seam
that those services actually use.

Testing a new close-only writer helper would produce a false proof: the deployed
envelope and moderation paths would remain unchanged. Installing a runtime trigger
or relying on the close scheduler to win the lock would either exceed scope or fail
D-07's independent commit-time rule.

## Available Safe Paths

1. Add a repair SWU before SWU-LIV2-016 that revises the command-time contract and
   both writer services to read an injected authoritative clock only after acquiring
   their write transaction, then rerun affected receipts.
2. Expand SWU-LIV2-016 itself to include the command contract/fixtures plus envelope
   and moderation services/tests, accepting a wider and less atomic SWU.

Weakening the criterion to trust a transport-populated timestamp is not a safe
option because a queued transaction can cross the fence after that value is captured.

## Write Scope

- Permitted implementation: `api/src/close/` coordinator/repository/tests.
- Required but not permitted for a valid proof: command-state contract/fixtures,
  `api/src/envelope/service.ts`, `api/src/moderation/service.ts`, and affected tests.
- Evidence only: this Task Session folder and synchronized blocker status.

No implementation file was mutated.

## Validation Surface

The declared command remains:

```bash
npm --prefix development/time-capsule-live-intake-v2/api test -- close-fence
```

It was not created or run because strict coverage blocked before mutation. Existing
source inspection is sufficient to reproduce the unsafe crossing case conceptually;
a passing close-only test could not close the missing real-writer obligations.

## Decisions And Gates

- Blocker: choose whether to add a repair SWU or expand SWU-LIV2-016 scope.
- Recommendation: add a repair SWU, preserving SWU atomicity and making invalidated
  command/envelope/moderation evidence explicit before close work resumes.
- Gate verdict: `BLOCK`; no consequential implementation mutation allowed.

## Authority Precedence

1. D-07 same-transaction authoritative commit-time rule.
2. Frozen command-state contract and real writer implementations.
3. SWU-LIV2-016 done criteria and exact write scope.
4. Goal invented-data and no-external-effect boundary.

## Provenance

- Task contract SHA-256: `c668c500f1c7916d55fc5bffa6a60875bf36ab8a3ccca726fa21e39753e2dcd3`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Command contract SHA-256: `eb2b28b4abea900f01bf25d1584dbe0f2671ab6e381a7981cc3ad7a98d4f1dff`
- Envelope service SHA-256: `d197a2be23401b8dbc8e462b02b0dd4465aeef3ae701b5dc9840e1ff9ff8ba95`
- Moderation service SHA-256: `648efafbb1e720f60b1727f8a37d54423e97076f99ac19689d309aeac7cb4b40`
- Migration SHA-256: `933aad74f89bbfe9a2ba9cd5c3e4d72d4a5f975baf0dcfe88246e1b0a7fc908b`
- SWU-015 receipt SHA-256: `46d91232c695182f280dcd85ad0f7451fc98642581d272f18e5f82f9d4c3db28`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-016/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-016/context-index.json`
- Strict coverage: block
