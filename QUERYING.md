# Querying The Tower — How To Ask

Status: active how-to
Promotion scope: local-research-only

You don't really *read* this repository — you *interrogate* it. You ask an agent a
question; it answers from what's actually on record, and — this is the whole point —
it tells you **how solid that answer is** instead of just sounding confident. This
page shows how to ask well, with real examples. The method behind it lives in
[GUIDE.md](GUIDE.md).

## What a good question looks like

Three things make a question easy to answer well:

1. **Be specific about *what*.** Ask about one claim, idea, or decision — not a
   whole topic. "Is paying people per finished task a good idea here?" beats "tell
   me about rewards."
2. **Say what you want done with it.** Usually one of: *check it* (is this backed by
   anything?), *try to break it* (what would prove it wrong?), *who did it first?*
   (has someone already solved this?), *pin down a word* (what does this term
   actually mean here?), or *where do I start?*
3. **Expect an honest answer, not a yes.** A good answer says where the idea comes
   from, how strong the evidence is, and what's still missing — or admits the
   question is still open.

## Loose vs sharp

| Loose (avoid) | Sharp (do this) |
| --- | --- |
| "Is the economy good?" | "Is starting with reviewed credit, before any money, actually backed by anything we've recorded?" |
| "Are bounties bad?" | "Try to break the idea of paying a bounty for finished work — where's the catch?" |
| "Tell me about randomness." | "Can randomness make cheating expensive without making rewards feel unfair?" |
| "Summarize the repo." | "I've got 30 minutes — what's the single most useful thing to do next?" |

## Examples

Each shows the question, what the agent does, and the kind of answer you get back.

### 1. Check a claim — "Is starting with credit, not money, a safe first move?"

**You ask:** *"Is it safe to build the economy around reviewed credit before introducing any money?"*

**What happens:** it finds what's on record, says where it comes from, and refuses to oversell it.

> It's a sensible starting posture — but it hasn't been proven here. The strongest
> thing on record is that a related project kept three things firmly apart: what
> people are *seen* doing, the *credit* they earn for reviewed work, and any real
> *authority*. That's borrowed reasoning, not something the official whitepaper
> says, and **nobody has actually built or tested it yet**. So: a good idea to build
> *from*, not a settled rule. (On record as claim **C7** in the
> [claim ledger](claims/SOURCE-CLAIM-LEDGER.md).)

### 2. Try to break it — "Pay a bounty for finished work"

**You ask:** *"Attack the idea of paying a bounty whenever someone finishes a contribution. Where does it fall apart?"*

**What happens:** it attacks the idea the way the repo is built to — by asking how a clever person would game it.

> Fast, and the repo already blocks it by default. If you pay for *finishing
> things*, people optimize for finishing the cheapest things that qualify — not the
> work that actually matters, and not the quiet maintenance nobody sees. So a bounty
> trains "grab the bounty," not "help the community." It isn't banned forever, but
> it can't come back without a real answer to that gaming problem — which is exactly
> the open challenge being tracked as prize `PRZ-02`.

### 3. Who did it first? — "delayed rewards"

**You ask:** *"Has anyone already worked out making rewards kick in only after a delay?"*

**What happens:** it checks for prior work — and finding some is a *win*, not a dead end.

> Yes — that same related project already builds in delayed eligibility, so you
> don't have to reinvent it. The move is to *use and adapt* it, not start from
> scratch. It still hasn't been tried inside this repo, so treat it as a strong lead,
> not a finished mechanism.

### 4. Propose a fix — "credit that only steers attention"

**You ask:** *"I think this fixes the credit-without-power problem: credit only ever moves people's attention — what gets looked at first — and we show separately that no amount of credit changes who gets to decide anything. Does that hold up?"*

**What happens:** it turns your idea into a concrete proposal — naming exactly what would prove it wrong, and what you'd have to show to call it solved.

> Logged as a candidate against the open challenge `PRZ-01`. The thing that would
> sink it: if being seen a lot quietly *becomes* power — the people always at the top
> of the review queue end up calling the shots in practice. To actually win this,
> you'd need a real case where someone with a mountain of credit still can't change a
> single decision. Until that case exists, it stays a proposal, not a fix.

### 5. Pin down a word — "what counts as a tracked term?"

**You ask:** *"Why does the repo insist some terms be 'tracked', and is 'runway' one of them?"*

**What happens:** it explains the rule in plain terms and points you to the check.

> Any word that carries real weight in a rule, a formula, or a pass/fail test needs
> one agreed definition on file — otherwise people quietly mean different things by
> it and the rules drift. For "runway", run `tools/check_load_bearing_terms.py`; if
> it isn't on file, that's a gap to close before you lean on it.

### 6. Where do I start? — "I have limited time"

**You ask:** *"I've got an hour — what's the highest-leverage thing to do?"*

**What happens:** it sends you to the ranked plan instead of guessing.

> Start with the [inventory's Start Here](.arcanum/inventory/index.md), then the
> ranked to-do list in the
> [program entry](.arcanum/inventory/entries/economy-resilience-program.md). Right
> now the highest-leverage move is the whitepaper-snapshot work; after that, the
> first fixture (flow-conservation). Take the next item off that list rather than
> going by gut.

## When the answer is "we don't know yet"

That's a real, useful answer — not a failure. If an idea can't be backed up *and*
can't be cleanly knocked down, the honest result is to leave it open with a note on
what would settle it. Two answers that sound disappointing but are actually good:

- **"It's a lead, not proven."** Worth building from — just don't treat it as decided.
- **"Someone already did this."** Cite them and adapt — you just saved yourself the work.
