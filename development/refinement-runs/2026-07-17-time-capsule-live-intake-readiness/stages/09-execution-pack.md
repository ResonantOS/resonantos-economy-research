# Execution Pack — Time Capsule Live Intake

Status: choreography only; no wave authorized

| Wave | Layer | Tasks | Entry gate | Exit evidence | Parallelism |
| --- | --- | --- | --- | --- | --- |
| W0 Contract | L0 | LIR-001 then LIR-002 | approved SWU-LIR-001 Task Session | simulator/fixtures/schema evidence; zero collection | 001 before 002; fixture subparts may parallelize after vocabulary freezes |
| W1 Synthetic | L1 | LIR-003 then LIR-004 | all W0 evidence + manual SWU-LIR-005 stack decision | kernel/close/export/restore/migration evidence with invented data | state and fixture implementation may parallelize only after schemas; close waits for kernel |
| W2 Public readiness | L2 | LIR-005 | W1 exact reconciliation + named owners | signed public-live gate package and no-real-data staging rehearsal | owner reviews may parallelize; final gate joins all |
| W3 Optional sealed/readiness | L3 | LIR-006 then READINESS-007 | public gates + explicit choice to continue sealed evaluation | signed sealed accept/kill plus final capability audit | threat reviews parallelize; implementation waits for one approved profile |

## Scheduling Rules

- One SWU per Task Session.
- A manual owner/stack decision cannot be simulated by an implementation agent.
- A failed layer check blocks only later capabilities; it does not erase prior evidence.
- Sealed work never runs merely because public work passes.
- No wave includes minting, token distribution, or ceremony authorization.

## First Handoff

`SWU-LIR-001` consumes stage 06 Contract Simulator design, stage 03 FAR findings,
the existing form source, and the zero-flow validation boundary. Context Builder
must generate its execution-time Markdown+JSON handoff pack; this Plan does not
pre-generate it.

