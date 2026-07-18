# Workflow Reflection: Whisper Correction Convergence

## Reflection Context

- Target: `whisper`
- Observed tier: spell/library workflow
- Reflection trigger: manual request plus usage, output, gap, and correction thresholds
- Primary signal ledger: `.arcanum/observability/signals/sigil-invocations.jsonl`
- Corroborating DomainSpec Core evidence:
  - `.arcanum/observability/by-sigil/whisper.jsonl`
  - `.arcanum/observability/runs/whisper-20260716T220908Z-80vintebot-conciseness-review.json`
  - `.arcanum/observability/reflections/20260711T161044Z-whisper-live-presentation-reflection.md`
  - `.arcanum/observability/reflections/20260711T162455Z-whisper-sigil-maintenance-report.md`
- Signals reviewed: 32 unique Whisper signals: 18 from the economy repository and 14
  deduplicated DomainSpec Core signals
- Period: 2026-06-19T14:28:32Z through 2026-07-17T12:17:13Z
- Prior Whisper reflection: none in the economy repository; one relevant reflection and
  maintenance pass in DomainSpec Core
- Mutation boundary: reflection only; this report does not edit canonical Whisper

The report summarizes workflow behavior. It does not promote the content, mechanisms,
or public artifacts produced during observed runs.

## Signal Summary

The normalized counts below describe the 18 economy-repository signals. DomainSpec
Core's 14-signal projection uses an older, narrower schema, so its evidence is reported
separately rather than merged into incompatible fields.

| Signal type | Count | Interpretation |
| --- | ---: | --- |
| Meaningful executions | 18 | Above the default usage threshold of 5. |
| Generated outputs | 164 | Above the default output threshold of 10. |
| User corrections | 14 | 77.8% of executions carried a material user correction. |
| Quality status `pass` | 5 | Five runs reached a complete internal quality status. |
| Quality status `partial` | 13 | Mostly honest external or human gates, not thirteen simple quality failures. |
| Result `flag` | 10 | Pending human, production, or comprehension evidence dominated. |
| Result `pass` | 1 | One normalized result reached pass. |
| Result missing | 7 | Older telemetry does not provide a normalized result field. |
| Output-contract drift | 1 | One prior pass was rejected by later user evidence. |
| Anti-pattern hits | 14 | Fourteen unique labels; recurrence appears in semantic families, not exact strings. |
| Workflow-gap entries | 21 | Eleven mention comprehension or retell evidence; twenty mention pending, unrun, untested, unapproved, or candidate proof. |
| Human gate approved | 1 | The short-video voice gate reached approval after revision. |
| Human gate pending | 7 | Seven runs explicitly recorded a pending human gate. |
| Human gate missing | 10 | Telemetry predating the newer schema did not normalize gate state. |

### DomainSpec Core Corroboration

- DomainSpec Core contains 14 deduplicated Whisper signals in its per-sigil projection.
- One user-triggered clarity pass used structural compression to reduce visible copy
  from 1,377 to 711 words and the main sequence from 11 to 8 sections. It removed a
  duplicate map, removed a duplicate metrics block, and grouped six deliverables into
  four without dropping the concrete economic example.
- The earlier live-presentation reflection names the underlying failure as authoring
  structure leaking into audience language. Phrases such as `Start With The Table` and
  `generic object becomes a bounded target` delivered planning metadata instead of
  natural audience copy.
- That failure was severe enough that a result marked ready was rejected by the user.
  The resulting maintenance pass separated projected, spoken, notes, interaction, and
  authoring surfaces, but it did not establish a general compression and reading-flow
  gate for web pages, articles, or other transports.
- The public Arcanum submodule ledger currently contains no Whisper rows. This is a
  telemetry-projection gap, not evidence that the canonical workflow had no use.

### Concentrated Revision Window

On 2026-07-17 alone, the ledger records:

- 11 Whisper executions,
- 10 user corrections,
- 143 generated outputs,
- 10 flagged results,
- 1 passed result.

This concentration is the strongest evidence in the set. The issue is not that Whisper
failed to generate artifacts. It generated many coherent artifacts while the meaning,
voice, agency model, visual role, and causal explanation were still moving.

## Evidence Method

Exact anti-pattern names do not repeat. The patterns below therefore use two evidence
classes:

1. **Threshold-backed quantitative evidence**: execution, output, correction, gap, drift,
   and missing-field counts.
2. **Human-reviewed semantic families**: concise grouping of distinct anti-pattern labels
   that describe the same contract pressure.

No pattern claim rests on a single anecdote without being marked as narrower evidence.

## Patterns Found

### Pattern 1 — Derivative fan-out precedes intent stability

Evidence strength: **high; threshold-backed**

- 14 of 18 executions include user correction.
- The concentrated 2026-07-17 window produced 143 outputs across 11 executions with 10
  corrections.
- Nine runs used `human-gate-pending` as the reflection trigger.
- One event records output-contract drift after a prior pass was rejected by user evidence.

Whisper correctly preserved many lifecycle artifacts, but it repeatedly projected them
before the operator-facing meaning had stabilized. Each correction then required updates
across substrate, copy, architecture, validation, browser evidence, learning residue, and
other projections.

### Pattern 2 — Delivery text retains author intent, redundancy, and weak reading flow

Evidence strength: **high; semantic family across transports**

Related anti-patterns:

- `voice-too-formal-for-source-community`
- `public-copy-sounded-like-planning-document`
- `atmospheric-time-prompt`
- `brittle-time-copy`
- `repeated-years-from-now`
- `easter-egg-overexplained-in-voice`

The current three-moment audition is effective for live presentations. Similar early
audition pressure is not consistently enforced for interactive web copy, one-page public
copy, or short video. Those transports reached full artifacts before naturalness,
literalness, and rhetorical restraint were settled.

DomainSpec Core shows the same problem in a different transport. A proposal required a
48% visible-word reduction, removal of two duplicate sections, and a shorter section
sequence only after the user asked for concision and clarity. Its earlier reflection also
recorded planning commands and state descriptions appearing as audience text. The
recurring defect is therefore broader than tone: Whisper can preserve the author's
reasoning by describing the intent of a section instead of delivering the meaning
directly, then repeat that meaning across headings, introductions, explanations, and
closings.

### Pattern 3 — Causal meaning and lifecycle coverage can disappear between story and proof

Evidence strength: **high; repeated correction family plus gap count**

Related anti-patterns:

- `safe-abstraction-without-causal-explanation`
- `starting-token-number-omitted`
- `proof-detail-without-lifecycle-explanation`

Eleven workflow-gap entries mention comprehension or unaided retell evidence. The
observed revisions moved between two failure modes:

1. a warm story that did not explain the load-bearing outcome, and
2. proof detail that explained a local mechanism without explaining the full lifecycle.

The missing bridge is a small participant-retell chain that survives every transport:
input or invitation, shared transformation, immediate outcome, and later lifecycle.

### Pattern 4 — Participation agency needs an explicit relevance contract

Evidence strength: **medium; narrow but internally coherent**

Related anti-patterns:

- `community-only-addressee`
- `quiet-path-buried`
- `penalty-framed-quietness`

The relevance core captured audience and tone but did not force a stable account of who
an action may address, whether participation is optional, whether silence is visible, and
whether copy implies penalty, reward, allocation, or influence.

### Pattern 5 — Visual role and crop behavior are meaning-bearing, not post-copy decoration

Evidence strength: **medium; two related corrections with browser proof**

Related anti-patterns:

- `hero-image-as-accessory`
- `image-ratio-loss`

The same image changed from a structural narrative field into an accessory and then into
a stretched field. Browser checks repaired rendering, but Whisper's surface map did not
hold the image's role, native ratio, crop-safe content, and hierarchy as explicit
composition obligations before implementation.

### Pattern 6 — Telemetry conflates editorial quality with proof and gate status

Evidence strength: **high; threshold-backed schema gap**

- 13 signals report `quality_bar_status: partial` while 17 separately carry
  `quality-pass`.
- 7 signals omit normalized `result`.
- 10 signals omit normalized `human_gate`.
- Workflow gaps mix comprehension, production, governance, security, and human approval
  in free-form strings.

This does not invalidate the evidence, but it makes reflection more dependent on manual
interpretation. A polished draft that is honestly pending audience evidence should not be
indistinguishable from an editorially partial draft.

## Gap Analysis

| ID | Gap | Severity | Evidence | Affected contract area |
| --- | --- | --- | --- | --- |
| WH-G01 | No convergence checkpoint before derivative fan-out. | high | 10 corrections and 143 outputs in one day; one drift event. | artifact lifecycle, phases 4–6 |
| WH-G02 | No general delivery-first compression and reading-flow gate outside the live-presentation path. | high | Six destination-language anti-patterns; one 1,377-to-711-word correction; two duplicate sections removed; prior authoring-metadata leak. | transport schema, phases 4–5 |
| WH-G03 | No mandatory participant-retell chain across story, mechanism, outcome, and later lifecycle. | high | Three causal anti-patterns; eleven comprehension/retell gaps. | substrate, composition, validation |
| WH-G04 | Agency semantics are not a first-class relevance field. | medium | Three related agency anti-patterns. | relevance core, public CTA validation |
| WH-G05 | Visual anchors lack a pre-implementation role and crop contract. | medium | Two visual corrections followed by browser repair. | surface map, composition plan |
| WH-G06 | Telemetry fields do not separate editorial result from external proof state. | medium | Seven missing results, ten missing gate states, partial/pass ambiguity. | observability contract |

## Proposed Iterations

### WH-P01 — Add an intent-stability and correction-convergence checkpoint

- Priority: **high**
- Affected sections: Artifact Lifecycle Contract, phases 4–6, observability
- Recommended change:
  - Add `intent_state: forming | volatile | frozen` to Whisper shared state.
  - Set `volatile` after two related operator corrections in one transport or any
    correction that changes a meaning core.
  - While volatile, update only canonical intent, language audition, surface map, and
    composition plan. Do not fan out review HTML, implementation copy, generated model
    inputs, validation projections, or learning residue.
  - Freeze with a compact receipt that states: what this is, how it works, why a person
    may care, and what remains deliberately unresolved.
  - Own the receipt as authoring-only state. Its explanatory language must not be copied
    directly into audience-facing text.
  - Regenerate derivatives only after the receipt is approved or the correction is
    explicitly classified as local presentation-only.
- Expected prevention effect: reduce multi-artifact rework and cross-projection drift
  without weakening iterative collaboration.
- Compatibility impact: **minor to moderate**; adds a state and gate but preserves the
  current lifecycle.

### WH-P02 — Extend readability dynamics with delivery flow, then generalize the audition

- Priority: **high**
- Affected sections: optional `readability_dynamics`, Transport Sequence, transport
  profiles, phases 4–5
- Recommended change:
  - Extend the existing optional `readability_dynamics` family rather than introducing a
    parallel base gate.
  - Add passing and failing delivery-flow fixtures before considering base-contract
    promotion. Keep semantic editorial judgment distinct from executable density and
    exact-duplication checks.
  - Preserve the existing live-presentation audition.
  - Keep `author_intent` and planning rationale in authoring state only. Do not project
    sentences that explain what the author wants the text to do when the text can do it
    directly.
  - Before derivative generation, give each audience-facing block one job: introduce new
    meaning, make a consequence concrete, enable an action, or transition to a new idea.
    Merge or remove blocks that do none of these.
  - Run structural compression before line editing: remove repeated thesis statements,
    heading/body paraphrases, duplicate mechanism explanations, and conclusions that
    merely restate the opening.
  - Build a compact reading-flow map—entry, new information, consequence, transition—and
    verify that each step earns the next. Do not impose one universal word limit; set a
    transport-specific budget and preserve load-bearing examples and boundaries.
  - Run the candidate extension by default for public-facing transport profiles; require
    a recorded reason to opt out. This is an editorial default, not base-schema promotion.
  - Name three representative moments before derivative generation.
  - Default moment sets:
    - interactive web: opening, causal bridge, action;
    - one-page public copy: headline, explanation, close;
    - short video: opening, turn, reveal;
    - long article: opening, central claim, ending.
  - Check each moment for destination-native voice, literal comprehension, earned
    terminology, natural speech where relevant, direct delivery rather than intent
    narration, and explanation that does not narrate its own cleverness.
  - Require operator approval for public author-voice work; allow a recorded self-audition
    for low-risk informational transports.
  - A successful audition improves editorial confidence only. It cannot promote an
    unproven transport beyond `flag` or substitute for transport fixtures and validation.
- Expected prevention effect: catch author-intent leakage, redundancy, weak reading
  sequence, formal or planning-like voice, atmospheric prompts, and overexplanation
  before full artifact expansion.
- Compatibility impact: **minor**; generalizes an existing successful pattern.

### WH-P03 — Add a conditional participant-retell chain

- Priority: **high**
- Affected sections: SCU model, text intent substrate, composition plan, validation
- Recommended change:
  - Use `retell_chain` only when the transport explains a mechanism or lifecycle, or asks
    a participant to enter one. Do not require it for every text.
  - Within those transports, use four slots:
    1. invitation or participant input,
    2. shared transformation or mechanism,
    3. immediate outcome or consequence,
    4. later lifecycle, return, maintenance, or limit.
  - Require the primary audience surface to carry only the parts needed for accurate
    unaided retell; technical proof may remain in a secondary surface.
  - When mechanism ownership is unresolved, label the rule candidate and route the gap
    rather than abstracting away the causal bridge.
  - Separate browser/source validation from first-time comprehension evidence in the
    validation report.
- Expected prevention effect: prevent generic story-first artifacts, mechanism-only
  explainers, and false completion from browser proof.
- Compatibility impact: **minor**; extends relevance and trajectory without changing the
  three-core model.

### WH-P04 — Add a participation-agency matrix for participatory transports

- Priority: **medium**
- Affected sections: relevance core, transport schema, audition validation
- Recommended change:
  - When the audience is asked to act, capture:
    `addressee_scope`, `participation_optional`, `quiet_path`, `visibility_choices`,
    `reward_or_penalty_implication`, and `allocation_or_influence_implication`.
  - Validate the opening, action, and close against the matrix.
  - Keep the matrix optional for non-participatory explanatory writing.
- Expected prevention effect: prevent collective containers from forcing collective
  addressees and prevent silence from becoming hidden or penalty-framed.
- Compatibility impact: **minor and conditional**.

### WH-P05 — Add a visual-role contract to the surface map

- Priority: **medium**
- Affected sections: surface map, composition plan, transport validation
- Recommended change:
  - For image-led or motion-led transports, record:
    `visual_role`, `native_aspect_ratio`, `crop_safe_region`, `must_remain_visible`,
    `copy_relationship`, and `fallback_meaning`.
  - Distinguish `structural_anchor` from `supporting_asset`.
  - Require one exact-target viewport or frame check before visual signoff.
  - Keep browser/frame correctness separate from editorial or comprehension approval.
- Expected prevention effect: preserve the intended narrative role and geometry of a
  visual across implementation and responsive layouts.
- Compatibility impact: **minor; transport-conditional**.

### WH-P06 — Separate Whisper event requirements from shared telemetry normalization

- Priority: **medium**
- Affected sections: Observability, output contract, signal schema
- Recommended change:
  - Require Whisper to emit its owned values: `transport`, `draft_status`,
    `transport_proof_status`, `human_gate`, `intent_state`, `correction_scope`, and
    `generated_output_count` when available.
  - Keep the distinction between editorial status and production, audience, source, and
    human proof state in Whisper's event semantics.
  - Normalize correction scope to `meaning | audience | voice | structure | visual |
    mechanism | local-copy`.
  - Record derivative fan-out count so convergence policy can be measured.
  - Route shared envelope fields, workflow-gap schema, projection repair, and telemetry
    consumer migration to Signal Observer or the observability owner. Do not make Whisper
    own the cross-capability envelope.
- Expected prevention effect: make future reflection less dependent on interpreting
  ambiguous `partial`, `flag`, and free-form gap strings.
- Compatibility impact: **moderate for telemetry consumers; none for audience-facing
  artifacts**.

## Proposal Summary

| Priority | Count | Proposal IDs |
| --- | ---: | --- |
| High | 3 | WH-P01, WH-P02, WH-P03 |
| Medium | 3 | WH-P04, WH-P05, WH-P06 |
| Low | 0 | — |

## Rejected Or Deferred Changes

### Reject a major rewrite of Whisper's core contract

The evidence supports the existing intent substrate, SCU cores, transport schema,
audition, validation, and learning-residue lifecycle. The failure is convergence and
transport enforcement, not the core model.

### Reject mandatory human approval for every copy edit

That would make iteration bureaucratic and could worsen the observed churn. Human
approval should attach to author voice, public high-impact language, or a frozen intent
receipt—not typos or local presentation adjustments.

### Reject treating all `partial` or `flag` signals as workflow failures

Many flags correctly preserved external proof, governance, production, or audience gates.
The proposal separates those statuses instead of weakening honest boundaries.

### Reject browser validation as comprehension proof

Browser checks are useful for rendering, interaction, and overflow. Eleven gaps show that
human retell evidence remains a distinct obligation.

### Defer domain mechanism and safety decisions

Whisper should explain known candidate mechanisms honestly and route unresolved
cryptography, custody, recovery, governance, or production decisions to their owners. It
should not absorb those domains into a writing workflow.

### Defer shared observability-envelope normalization

Whisper should emit the values it owns, but shared ledger schema, projections, consumer
migration, and cross-capability gap normalization belong to observability ownership.

### Treat the visual-only easter-egg correction as supporting evidence, not its own rule

One correction does not justify an easter-egg-specific core contract. It supports the
broader destination-native audition check: do not overexplain the device in the voice.

## Contract Preservation

- Core contract preserved: **yes**
- Recommended change shape: **targeted update**
- Compatibility impact: **minor to moderate**

The proposed update preserves:

- Whisper's resonance, relevance, and trajectory cores;
- the artifact lifecycle and transport ownership model;
- the three-moment live-presentation guardrail;
- the separation of audience, presenter, authoring, and proof surfaces;
- the rule that browser/source evidence cannot replace editorial or human approval;
- learning residue as observed evidence rather than automatic canon.

## Updated Reflection Policy

- Usage threshold: 5 meaningful executions after this reflection.
- Output threshold: 40 generated or materially revised artifacts after this reflection.
- Correction threshold: 3 related corrections in one transport or 2 meaning-core
  corrections before derivative generation completes.
- Gap threshold: 3 related workflow gaps.
- Drift rule: reflect immediately after any prior pass is rejected by later user evidence.
- Severe-gap rule: reflect immediately after unsafe scope expansion, public copy that
  contradicts a frozen meaning core, privacy or safety overclaim, or bypass of a required
  human gate.
- Next review should compare derivative fan-out before and after WH-P01 and correction
  density, visible-word reduction, duplicate-block removal, and late structural rewrites
  before and after WH-P02/WH-P03.

## Decision

- Outcome: **targeted update recommended**
- Proposal count: 3 high, 3 medium
- Evidence boundary: economy telemetry plus deduplicated DomainSpec Core Whisper signals,
  exact run evidence, and the prior canonical reflection/maintenance reports
- Canonical owner: `sigil-development` in `/home/vrondelli/projects/domainspec-core`
- Observer pass: completed and accepted at
  `ops/development/2026-07-17-whisper-maintenance-observer/findings.md`
- Next lifecycle step: apply the accepted staged generic changes to canonical Whisper,
  validate/regenerate its native runtime package, then sync the updated package into the
  economy repository.
