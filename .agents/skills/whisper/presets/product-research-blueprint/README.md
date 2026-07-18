# Product Research Blueprint Preset

Preset ID: `product_research_blueprint`

Use this Whisper preset when the desired artifact is an in-depth proposal,
description blueprint, or research document for a product/system idea that must
stay visionary while naming its evidence, gaps, verification plan, goals, and
impact.

The model example is `research/tower-system-taxonomy/Tower-System.pdf`: it opens
with a product view that makes the reader feel the problem and the target scene,
then follows with a system view that explains layers, flow, reuse, gaps, and
load-bearing stances. The key lesson is not the exact section titles; it is the
discipline of staying story-first and proof-honest at the same time.

## Use When

- The idea is promising but not fully proven.
- The author wants a proposal that can guide research, product direction, or
  early implementation planning.
- The document needs to explain why the idea matters, what exists already, what
  remains uncertain, what must be verified, and what impact success would have.
- The reader should leave with a clean mental model, not a dump of every note.

## Preset Files

- `preset.yaml`: Whisper transport/preset contract.
- `template.md`: Draft scaffold for the generated document.

## Invocation Shape

```text
Use whisper preset product_research_blueprint.
Target idea: <idea name>
Source material: <paths or notes>
Audience: <founder / product builder / research group / technical investor / internal team>
Desired output: proposal and description blueprint research document
```

## Non-Negotiables

- Start from a concrete human/product scene before architecture.
- Preserve the one-line promise.
- Separate product vision from system mechanics.
- Label evidence tiers: executed, owned but unproven, net-new, blocked, unknown.
- Name the few load-bearing gaps that decide whether the idea lives or dies.
- Turn verification into a concrete plan with pass/fail signals.
- Keep token, legal, authority, funding, safety, and public claims behind gates
  when those gates are not proven.
- Cut anything that is interesting but not load-bearing for the reader's next
  decision.
