# Agent Context Router

Use `AGENTS.md` as the canonical agent policy. This file gives a compact router
for Claude-style sessions.

## Default Route

This repository is a standalone research surface. The correct default is
source-first research, not policy, not implementation, and not tokenomics.

Before tools that write, edit, dispatch, or commit, say out loud:

1. Which route applies.
2. Which files you will read for it. Read **only** that route's files —
   never load all docs at once.
3. The `AGENTS.md` stop-and-question checks.
4. Proceed only if the work remains within research authority.

Propose before mutating files. Do not silently "fix" items flagged as open,
intentional, or residue — surface them and let the user decide.

## Main Routes

### 0. Local Skill And Inventory Surface

Read these before using global skill assumptions:

- `.agents/skills/README.md`
- `.arcanum/inventory/index.md`
- `telemetry/agents/README.md`

### 1. Source or Corpus Work

Read the local source record first:

- `sources/source-records.md`
- `claims/SOURCE-CLAIM-LEDGER.md`
- the relevant `subtowers/*/README.md`

Preserve source kind. A source can be primary, supporting, related, analogy,
local inference, or open residue. Do not collapse those labels.

### 2. Economy Mechanism Work

Place mechanism ideas in lanes, residue maps, or closure plans first:

- `lanes/ATTACK-LANES.md`
- `lanes/TWO-LANE-DIALECTICS.md`
- `levels/L1-residue-map.md`
- `levels/L2-closure-plan.md`

Every mechanism needs a collapse test: the concrete observation that would make
the mechanism useless, unsafe, or already owned by prior art.

### 3. Authority or Promotion Work

Use the local authority spine:

- `authority/AUTHORITY-MODEL.md`
- `authority/promotion-policy.md`
- `authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md`
- `authority/decisions/`

CyberAlchemy v2 can authorize method and promotion posture. It does not authorize
the economy design itself.

### 4. Dispatch Work

The proposed fan-out lives at `dispatch/PROPOSED-DISPATCH.md`.

It has passed a tension gate, but it is still confirmation-required. Do not run
or register research agents until the user explicitly confirms the dispatch.
When confirmed, use the local DomainSpec skill chain under `.agents/skills/`,
the agent pool at `telemetry/agents/agents.yaml`, and the deterministic appender
owned by `domainspec-register-dispatch`.

### 5. Ambiguous Or Doesn't Fit A Route

If the task is unclear, inconsistent, or fits no route above, **ask the user
before loading docs or acting**. State which routes you considered and why none
fit. Do not start tool calls to "figure it out."

## Refusal Standard

Refuse or demote artifacts that:

- turn research claims into token policy;
- treat contribution scores as governance authority;
- present bounties as safe without gaming analysis;
- use random rewards without a fairness and anti-gaming witness;
- claim formal proof where there is only analogy or operator reading.
