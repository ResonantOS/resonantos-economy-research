# Querying The Tower — Worked Examples

Status: active how-to
Promotion scope: local-research-only

The repository is meant to be *interrogated by conversation*, not read
front-to-back. This page shows what a **good** query looks like, contrasts it with
a loose one, and walks through real examples grounded in actual repo artifacts.
For the underlying method see the confirm/deny loop in [GUIDE.md](GUIDE.md).

## Anatomy Of A Good Query

A good query has three parts. A loose query is missing one or more.

1. **Name the target precisely** — a specific claim, mechanism, term, or decision,
   not a topic. ("Is credit-before-money safe as a *first* move?" — not "tell me
   about rewards.")
2. **Say which move you want** — one of:
   - **confirm** — find the supporting evidence and how strongly it holds;
   - **deny / falsify** — attack it, find its collapse-test;
   - **find-owner** — who (prior art) already owns this idea?
   - **stake a bet / open a prize** — turn a candidate into a falsifiable contract;
   - **define** — what does this term mean here, and is it tracked?
   - **route** — what should I do next / where does this go?
3. **Expect a grounded answer**, not applause. Every answer should carry a
   **source kind** (`primary-source`, `supporting-source`, `related-source`,
   `analogy`, `local-inference`, `operator-reading`, `open-residue`), a **witness
   status**, and an honest **confidence** — or a **typed negative**, or visible
   **residue**.

## Loose vs Sharp

| Loose (avoid) | Sharp (do this) | Why |
| --- | --- | --- |
| "Is the economy good?" | "Confirm: does any recorded source support *credit-before-money* as the Phase-1 sequencing? Name source kind and witness." | Names a claim + a move + the expected answer shape. |
| "Are bounties bad?" | "Deny: attack a completion-paid bounty as the contribution reward. What's its collapse-test?" | Asks for the attack and the kill condition, not an opinion. |
| "Tell me about randomness." | "Confirm/deny `PRZ-03`: can bounded randomness raise gaming cost without becoming payout logic?" | Targets a specific prize with its award condition. |
| "Summarize the repo." | "Route: I have 30 minutes — what's the single highest-leverage next move?" | Asks the inventory for the ranked start path. |

## Worked Examples

### 1. Confirm a claim — "Is credit-before-money safe as a first move?"

**You ask:** *"Confirm: is sequencing the economy around reviewed credit before any money a safe first move?"*

**What the harness does:** finds the supporting record, names its kind, checks for a witness, and refuses to over-state.

**What you get back:**
> Supported as a *research posture*, not as a proven design. The closest evidence
> is claim **C7** ([SOURCE-CLAIM-LEDGER.md](claims/SOURCE-CLAIM-LEDGER.md)) — the
> Evidence Exchange separates observed reuse, reviewed credit, and owner-routed
> authority — source kind **method-authority / local-inference** (harvested,
> supporting source). **Witness status: none yet** — the authority-handoff fixture
> that would show high credit changing *no* authority state is not built. So:
> safe enough to *build from*, not validated. It's a **candidate**, gated by
> [promotion-policy](authority/promotion-policy.md). (Open: `OQ-1`, `OQ-2`.)

### 2. Deny / falsify — "Break a bounty-paid contribution reward"

**You ask:** *"Deny: attack paying a bounty on completed contributions. What's the collapse-test?"*

**What the harness does:** routes to the recorded decision and the attack lane, runs the skeptic, and banks a typed negative.

**What you get back:**
> Killed by design. The repo's standing decision is **bounty = block-as-default**
> ([TOWER.md](TOWER.md) borrow/block), and no bounty is accepted without a
> bounty-optimization failure analysis ([AGENTS.md](AGENTS.md) non-negotiables).
> **Collapse-test:** a rational actor optimizes for *bounty retrieval* — completing
> the cheapest qualifying unit, not sustained maintenance — so completion-pay
> trains extraction. **Typed negative banked:** "completion-paid bounty as the
> contribution reward" → what it would have contributed (fast contributor
> throughput) / the fact that zeroed it (it rewards retrieval, not durable value).
> Re-open only via `PRZ-02` with a farming-resistant eligibility witness.

### 3. Find-owner (precedent) — "Does anyone already own 'delayed reward eligibility'?"

**You ask:** *"Find-owner: who owns delayed reward eligibility — is it novel here?"*

**What the harness does:** runs the precedent gate (a found owner is a *result*, not a kill).

**What you get back:**
> Owned. The Evidence Exchange credit-before-money posture (claim **C7**,
> harvest selector `credit-before-money-sequencing-hypothesis`) already carries
> delayed eligibility. Label: **`build-from-owned`** — cite it and build, don't
> re-derive. It is **not** deployed or witnessed here, so it stays a candidate.

### 4. Stake a bet / open a prize — "Reviewed-credit-as-attention-router solves PRZ-01"

**You ask:** *"Stake a bet on `PRZ-01`: credit accrues only from reviewed work and only routes review attention; an authority-handoff fixture proves credit changes no authority state."*

**What the harness does:** turns the idea into a falsifiable bet — names the collapse-test and the lane it must survive — and checks the award rule.

**What you get back:**
> Registered as **`BET-PRZ-01-a`** ([BET-REGISTER.md](prizes/BET-REGISTER.md)),
> resolution **open**. **Predicted falsifier:** an attention-capture path where
> repeated visibility becomes de-facto authority (incumbency / reviewer
> bottleneck). **Attack lane:** reputation-capture
> ([ATTACK-LANES.md](lanes/ATTACK-LANES.md)). It **cannot reach `survived`** until
> its required witness — the authority-handoff fixture — exists, because the prize
> closes only on *survives-attack + witness*, never on novelty.

### 5. Define — "What is a 'load-bearing term' here?"

**You ask:** *"Define: load-bearing term — and is `runway` tracked?"*

**What the harness does:** grounds the term in the constitution + definition, and points to the checker.

**What you get back:**
> A **load-bearing term** is any symbol/named quantity in a formal expression,
> fixture FAIL-region, candidate invariant, decidable rule, or claim-ledger
> normative content (**REC-C14** / **ER-D23**). It must resolve to a tracked
> definition or enter as a `candidate` with an `Open / to-ground:` field. To check
> `runway`, run `tools/check_load_bearing_terms.py`; if it's untracked, that's a
> drift defect for [DEFINITION-DRIFT-AUDIT.md](definitions/DEFINITION-DRIFT-AUDIT.md).

### 6. Route — "Where should I start?"

**You ask:** *"Route: I have limited time — what's the highest-leverage next move?"*

**What the harness does:** sends you to the inventory Start Here and the ranked backlog instead of guessing.

**What you get back:**
> Start at the [inventory **Start Here** path](.arcanum/inventory/index.md), then
> the [economy-resilience-program](.arcanum/inventory/entries/economy-resilience-program.md)
> backlog: **Track B** (snapshot the whitepaper, land six un-ledgered facts) is the
> highest-leverage unblocker; then **Track A** fixtures (flow-conservation first).
> Take the next item from the backlog, not from intuition.

## What Makes A Query Good (checklist)

- It names a **specific** claim, term, mechanism, prize, or decision.
- It states the **move** (confirm / deny / find-owner / bet / define / route).
- It expects a **source kind + witness status + honest confidence**, a **typed
  negative**, or **residue** — never bare reassurance.
- It accepts "**candidate**, not validated" and "**owned**, build from it" as
  *good* answers, not failures.
