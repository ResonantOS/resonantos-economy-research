# TASK-LIR-READINESS-007 — Capability Launch/Block Audit

Layer: L3 closure

Status: blocked by all applicable prior gates

## Objective

Produce a final per-capability `available | unavailable | killed` decision from
actual receipts. This task cannot implement repairs or convert enthusiasm into evidence.

## Smallest Working Unit

### SWU-LIR-013 — Multi-Owner Readiness Audit

- Dependencies: SWU-LIR-010 and SWU-LIR-012 when sealed remains in scope
- Write scope: readiness report only
- Done: every gate links artifact, validation, owner, expiry, and residual risk;
  missing evidence yields `unavailable`; killed sealed path repairs copy
- Acceptance: independent audit confirms no open agent/task, hidden real-data
  path, token/mint effect, or unsupported safety/privacy/readiness claim
- Verification: artifact existence/hash check, blocker scan, capability-state matrix, owner signatures
- Owner: manual
- Handoff: explicit next owner or stop decision per capability

## Exclusion

The audit does not authorize minting, token distribution, ceremony, governance,
or another system's launch. Those remain separate authority decisions.

