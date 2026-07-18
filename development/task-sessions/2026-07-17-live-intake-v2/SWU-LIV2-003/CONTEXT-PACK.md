# Context Pack — SWU-LIV2-003

Session evidence only. This strict pack governs one pure command-state contract
Task Session. It does not choose transport, database, authentication technology,
or create a live mutation path.

## Identity

- Task/SWU: `SWU-LIV2-003 — Version, idempotency, and close-epoch state contract`
- Parent: `TASK-LIV2-001 — Machine Contract Freeze`
- Session id: `2026-07-17-live-intake-v2/SWU-LIV2-003`
- Mode: lean, strict, Markdown plus JSON
- Runtime: local Task Session; no adapter or subagent
- Dependency: `SWU-LIV2-002` pass
- Repository revision: `c617ace5f10df9f46ec9f203743f4baca5cacbd6` with pre-existing dirty worktree
- Captured: `2026-07-17T21:18:53Z`

## Obligation Matrix

| ID | Obligation | Evidence | Status | Resolution |
| --- | --- | --- | --- | --- |
| O-003-01 | Freeze immutable version/domain and command/state fields without selecting transport. | SWU-003 Done/Handoff; Command Contract | covered | JSON data contract plus pure validator only. |
| O-003-02 | Enforce exact precedence: authenticate scope, rules digest, close state/epoch/fence, idempotency, expected version, commit. | SWU-003 Algorithm precedence | covered | Ordered step IDs and precedence-overlap fixtures are pinned. |
| O-003-03 | Return the original result for same scoped key and same digest. | SWU-003 Done; Command Contract | covered | Replay returns stored result without a new version or record. |
| O-003-04 | Reject same scoped key with a different digest. | SWU-003 Done | covered | Typed `idempotency_key_reused` conflict; no mutation. |
| O-003-05 | Reject stale rules, close epoch, close state, and expected envelope version with typed outcomes. | task rules; D-04; D-07 | covered | Every error precedes mutation and preserves state. |
| O-003-06 | Fence a command whose server commit instant is at or after `2026-07-21T00:00:00Z`, even if it began earlier. | D-07 | covered | Only the server commit instant participates in acceptance. |
| O-003-07 | Commit one next immutable version atomically when all checks pass. | D-04; Command Contract | covered | Pure result contains one next-state plan and one stored replay result. |
| O-003-08 | Prove no partial state for all replay/conflict/closed paths. | SWU-003 Done | covered | Classifier is pure; validator deep-checks input state before/after every vector. |
| O-003-09 | Produce explicit transition/preference vectors and content-addressed receipt. | SWU-003 Acceptance/Validation | covered | Positive, negative, replay, and overlapping-failure fixtures are required. |
| O-003-10 | Stay within the three declared files plus session/status evidence and preserve product boundaries. | goal write/safety boundary | covered | No API, SQL, UI, real data, public feed, or token effect. |

Strict coverage: `10/10`, pass.

## Selected Sources

1. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/work-pack/tasks/TASK-LIV2-001.md`
   - Selectors: implementation rule 5; SWU-LIV2-003; Synchronization.
   - Covers: O-003-01–O-003-10.
2. `DECISIONS.md`
   - Selectors: D-04 Editable Confirmed Envelope; D-07 Authoritative Closing Instant.
   - Covers: O-003-03–O-003-08, O-003-10.
3. `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/06-architecture-bundle.md`
   - Selectors: Command Contract; Cohort And Close State Machine.
   - Covers: O-003-01–O-003-08.
   - This is the SWU's explicit architecture source anchor, not fallback exploration.
4. `development/time-capsule-live-intake-v2/contracts/envelope-v1.schema.json`
   - Selectors: schema/profile identity and confirmed state.
   - Covers: O-003-01, O-003-05, O-003-07.
5. `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-002/TASK-SESSION-REPORT.md`
   - Selectors: result, done audit, receipt.
   - Covers: dependency gate and O-003-09–O-003-10.
6. `development/invoke-runs/2026-07-17-time-capsule-live-intake-v2-plan/WORK-PACK.md`
   - Selectors: current frontier, Gates, Receipt Contract.
   - Covers: O-003-09–O-003-10.
7. Goal sidecar/handoff
   - Selectors: iteration policy, write boundary, protected gates, safety boundary.
   - Covers: O-003-09–O-003-10.

No outside source was used.

## Architecture Guidance

This SWU defines a pure decision kernel. Input is current state plus one proposed
confirmed-envelope command; output is commit, replay, or a typed failure with an
explicit mutation flag. The kernel may describe a next state but never performs
I/O. Later SQL/API code must implement the whole classification inside one
transaction and may not reorder checks.

## Constraints And Non-Goals

- Use invented scopes, digests, keys, versions, epochs, receipts, and timestamps.
- Command fields: authenticated/session scope, expected rules digest, expected
  envelope version, expected close epoch, idempotency key, command digest, and
  server commit instant.
- Current state fields: rules digest, close state/epoch/instant, current envelope
  version, and operation-scoped idempotency records with stored results.
- `open` is the only mutable close state. `closing` and `closed` reject.
- Commit time, not request start time or browser clock, determines the UTC fence.
- No partial state, transport status code, SQL layout, authentication mechanism,
  message content, logging, moderation, crypto, deployment, or token behavior.

## Write Scope

- `development/time-capsule-live-intake-v2/contracts/command-state-v1.json`
- `development/time-capsule-live-intake-v2/fixtures/command-state-v1.json`
- `development/time-capsule-live-intake-v2/tools/validate-command-state.mjs`
- `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-003/`
- active SWU-003 task/work-pack and goal frontier rows after validation

No other path is writable.

## Done And Validation Surface

The transition matrix must cover initial/update commit, same-key replay,
changed-digest conflict, bad/missing scope, rules drift, non-open state, stale
epoch, just-before/at/after close, stale version, and precedence overlaps. Every
non-commit result must have `mutated:false`; replay must return its stored result.

Exact command:

```bash
node development/time-capsule-live-intake-v2/tools/validate-command-state.mjs
```

Successful output records transition counts, drift guards, and SHA-256 hashes.

## Decisions, Contradictions, And Gates

- Auto-selected, non-blocking: pure JSON state vectors plus a dependency-free
  Node ESM classifier; persistence is deliberately deferred.
- Resolved precedence tension: same-key/same-digest replay is deterministic only
  after scope/rules/current-open-epoch/fence checks pass. At/after close or after
  an epoch advance, D-07 and the task's explicit precedence win, so the result is
  a typed close/epoch rejection rather than replay. Within the current open epoch,
  replay returns the original stored receipt exactly.
- Gate verdict: pass; SWU-002 is receipted and no blocker choice remains.

## Gaps And Blockers

- Active: none.
- Deferred: transaction/SQL realization and concurrency tests belong to L1;
  server clock evidence and real close remain later operational gates.

## Authority Precedence

1. D-04 and D-07.
2. SWU-LIV2-003 algorithm and done criteria.
3. Architecture Command Contract and Close State Machine.
4. Passed SWU-LIV2-002 envelope identity.
5. Work-pack and goal controls.

## Fallback Exploration Rule

No fallback search is needed. Explore only for a named pure-runtime gap and
report the source and its effect.

## Provenance

- Task contract SHA-256: `33a6b6cc808f12e42850fa2a137c1f4d44e67a20d89358ea52990d8bce0bfe54`
- Decisions SHA-256: `f4ecab3de66e4d398629930e2b8e36e11351d8861afcb61ab05f095549fc4c46`
- Architecture SHA-256: `390f5c01fd48ac095b729790b2f78ef01974c6bd9dfe6d68e5597b585ea85d1f`
- Envelope schema SHA-256: `d7dc33bc4bc77e09baed28f62497930771534da5572c7b9c612909d9aa071ad5`
- SWU-002 report SHA-256: `acece16cd743fc03998dab16e14bcf86ab047d48b7ad246e141a63e57d25c8e3`
- Work-pack SHA-256: `ac4eacf04d6d30b9989a60a40b3f2e760f255afcb0b4ff530e4d73307c0deb31`

## Outputs

- Markdown: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-003/CONTEXT-PACK.md`
- JSON/index: `development/task-sessions/2026-07-17-live-intake-v2/SWU-LIV2-003/context-index.json`
- Strict coverage: pass

