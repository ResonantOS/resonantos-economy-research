# Decision Gate — SWU-LIV2-016 Writer Clock Repair

Status: `BLOCK` — user choice required before scope or plan mutation

## Blocked Work

SWU-LIV2-016 cannot prove that envelope confirmation and moderation transactions
committing at or after `2026-07-21T00:00:00Z` fail. Both services use timestamp
values supplied before their SQLite write transaction owns the lock, while the SWU
permits changes only in new close coordinator/repository/tests modules.

## Blocker Decision

How should the work-pack authorize the transaction-time writer-clock repair?

### Option 1 — Add a repair SWU before SWU-LIV2-016 (recommended)

- Benefit: preserves one-behavior SWU boundaries and makes invalidation/rerun of the
  frozen command contract, envelope tests, and moderation tests explicit.
- Cost/risk: adds one planned unit and one more receipt before close work resumes.
- Choose when: evidence traceability and atomic review matter more than the smallest
  number of work-pack rows.
- Downstream impact: revise command-time semantics/fixtures, inject a clock read
  after write-lock acquisition into both writers, rerun affected receipts, then
  return to the unchanged close coordinator SWU.

### Option 2 — Expand SWU-LIV2-016 in place

- Benefit: fastest path with one Task Session and one final close-fence receipt.
- Cost/risk: turns SWU-LIV2-016 into a wider cross-module repair plus coordinator;
  prior command/envelope/moderation evidence still needs explicit supersession.
- Choose when: delivery speed outweighs the existing atomic work-pack shape.
- Downstream impact: amend its write scope to include the command contract/fixtures,
  envelope service/tests, moderation service/tests, and close modules, then rerun all
  affected validation before marking it pass.

### Explain / more context

This does not resolve the gate. Ask for it to receive the concrete crossing-race
timeline, affected receipts, and exact file list before choosing Option 1 or 2.

## Rejected Shortcut

Trusting a timestamp populated by a later HTTP adapter is not sufficient. A request
can capture a pre-fence server time, wait for the SQLite lock, and commit after the
fence. D-07 requires the acceptance clock to be read inside the committing transaction.

## Recommendation

Choose Option 1. It is slower by one bounded SWU but keeps the work graph honest and
prevents a close-only test from masking unchanged unsafe writer paths.

## Decision Record

- Decision: pending
- Source: Task Session strict-context gate
- Detected at: `2026-07-17T22:35:38Z`
- Remaining blockers: 1
- Consequential mutation: stopped
