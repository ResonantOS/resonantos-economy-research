# Goal Frontier — Time Capsule Tomorrow Demo

## Bound Authority

- Active Craft source: `.craft/ledger.yml`
- Selected goal handle: the governed Time Capsule work-pack at
  `development/refinement-runs/2026-07-17-time-capsule-live-intake-readiness/stages/09-work-pack.md`
- Reconciliation: the active Craft ledger has no Time Capsule context, so the
  work-pack is the execution frontier and any ledger change remains a staged
  proposal.
- Goal: deliver a safe demonstrable form, define remaining work, and execute
  one SWU at a time until a real blocker.

## Frozen Frontier

| Order | Node | Risk | Owner | Entry | Result |
| --- | --- | --- | --- | --- | --- |
| 1 | SWU-LIR-001 | T1 reversible local source | Task Session | ready | pass |
| 2 | SWU-LIR-002 | T1 reversible fixture/test source | Task Session | after 001 | flag: machine pass; manual evidence unrun |
| 3 | SWU-LIR-003 | T1 specification source | Task Session | requires 001/002 pass | blocked by 002 |
| later | SWU-LIR-005/009 and publication | T2 owner/protected | Decision Gate / approved Task Session | owner and evidence gates | not dispatched |
| later | SWU-LIR-011/012 sealed profile | T3 security/privacy/custody | multi-owner decision and independent evidence | public-live plus threat-model gates | not dispatched |

## Stop Condition Reached

The Goal stopped after node 2 because an actual screen-reader/browser run,
native-IME run, and five-person critical consequence-retell protocol require
external people and access modes. Automation cannot produce that evidence.
Starting node 3 would violate its explicit dependency.
