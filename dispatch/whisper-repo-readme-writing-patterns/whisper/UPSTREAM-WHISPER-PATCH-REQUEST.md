# Upstream Whisper Patch Request — Reader Tasks And Structured Documentation

Status: candidate upstream request; not applied to generated runtime
Target owner: canonical Whisper through `sigil-development`
Local source: auditor-accepted [`findings.md`](../findings.md)
Reader-effect proof: none

## Problem

Whisper's current delivery-flow extension can reject repeated or intent-narrating
paragraphs, but it does not yet own several document-level decisions exposed by
the repository onboarding work:

1. beginner copy can pass delivery flow while leading with protocol jargon;
2. headings, lists, tables, code, links, images, and disclosure placement are
   largely outside the current paragraph validator;
3. the review builder infers parts from one Substack example instead of a
   transport-owned map;
4. generic “next step” language does not require an observable result or stop
   condition; and
5. audience-facing placement is not yet expressed independently from surface
   ownership.

The user correction was concrete: a sentence beginning “Forty fictional
unfamiliar reviewers classify 12 counterbalanced invented event cases” remained
too jargon-heavy. The accepted repair begins with an event, people, an action,
and a comparison, then introduces the deeper experiment labels only when the
reader needs them.

This gap is editorial evidence, not comprehension evidence.

## Requested Targeted Changes

### 1. Conditional ordinary-action-before-formal-label check

Build from `relevance_core.reader_state` and the existing delivery/audition
owner. For a reader unfamiliar with the domain:

- begin with a recognizable situation or question;
- name concrete people, objects, and actions;
- explain what changes, what the reader compares, or what result to expect;
- introduce the formal label afterward; and
- keep protocol metadata in authoring or deeper-reference surfaces.

Proposed editorial check: `plain_action_before_formal_label`.

It must remain a human editorial judgment. A passing review does not prove
understanding.

Fixture pair:

- negative: protocol terms lead and the reader must decode the setup;
- positive: the same experiment begins with the ordinary event and comparison,
  while preserving all evidence and authority limits.

### 2. Candidate reader-job contract

Definition: one primary `verb + object + completion_witness`, with optional
ordered supporting jobs.

It differs from:

- author objective: what the author wants the artifact to accomplish;
- desired reader change: an intended effect;
- success signal: an observation used in evaluation.

Non-vacuity requirement: keep this field only if a paired cross-transport
fixture shows a drafting, routing, or validation decision that existing
`relevance_core`, `trajectory_core`, and `composition_plan` fields cannot make.
If removing it leaves every decision unchanged, kill the field and retain the
phrase as guidance only.

Do not add `reader_progression` now. It currently renames trajectory and
delivery flow without a unique decision.

### 3. Audience disclosure placement inside the existing surface owner

Extend, rather than duplicate, `surface_map`:

```yaml
placement: inline | linked | on_demand
obligation: required_inline | may_defer
```

`authoring_only` remains a surface-ownership classification. It is not a
disclosure placement. Transport profiles may realize `on_demand` differently;
only GitHub Markdown should assume `<details>`.

Default `required_inline` candidates:

- status and source posture;
- prerequisites and stop conditions;
- safety and irreversible-action limits;
- evidence and claim boundaries; and
- authority, policy, payout, or governance boundaries.

A deterministic check may verify that declared required markers remain outside
on-demand blocks. A human must decide whether the author declared all material
limits.

### 4. Conditional `first_action_path`

Use only for procedural or executable primary reader jobs:

```yaml
applicability:
prerequisite:
action:
expected_observable_result:
verification:
stop_condition:
deeper_route:
```

Positive fixture: a contributor can run one check, see the expected output, and
know when to stop. Negative fixture: a research explanation is forced to invent
a Quick Start even though its task is understanding a bounded claim.

Keep this as a preset convention if it adds no unique cross-transport decision.

### 5. Structure-aware Markdown inspection

Preserve deterministic and semantic layers:

Deterministic candidates:

- headings and declared section presence;
- lists, tables, and code-fence boundaries;
- unresolved placeholders;
- local path existence;
- alt-text presence, not quality;
- Mermaid `accTitle` and `accDescr` presence;
- required-inline marker placement; and
- license evidence or an explicit unknown state.

Human-only review:

- truth, completeness, safety, usefulness, and meaning;
- whether alt text carries the right meaning;
- whether the intended reader understood;
- whether a claim may promote; and
- any policy or authority decision.

Use structural statuses such as `structure_check_pass`,
`structure_check_flag`, and `structure_check_block`. Never auto-map them to a
research verdict.

### 6. Transport-owned review-part mapping

Replace Substack-specific part inference with declared transport mappings.
Unknown headings or blocks must route to `unmapped/manual_review`, never to a
fabricated part ID.

This claims stable addressability only, not reader benefit.

### 7. Generated-runtime documentation repairs

- Replace review/schema commands that point to absent local paths such as
  `spells/whisper/` or `arcanum/spells/whisper/` with generated-runtime-safe
  instructions.
- Remove the duplicated `Draft status` field in the result contract.
- Document local-overlay preservation as a host-repository responsibility or a
  first-class regeneration extension point.
- Ensure preset discovery can include repository-local overlay indexes without
  replacing the upstream preset index wholesale.

## Required Experiment Harness

Do not promote the generic changes from the local README fixture alone. The
upstream owner should add low, medium, and complex examples across at least:

1. a GitHub library README;
2. a governed research README;
3. a research explanation with no action path;
4. a contributor procedure;
5. a mixed repository that must abstain from automatic routing;
6. a polished but boundary-hiding dangerous success; and
7. a historical record that must refuse modernization.

For any reader-benefit claim, preregister baseline and candidate versions,
author-independent held-out readers, starting knowledge, task ground truth,
metrics, boundary errors, failure threshold, and a fixed
`retain | revise | demote | kill | no-conclusion` disposition.

Priority remains correctness and visible boundaries, then task sufficiency,
then brevity or speed.

## Source Lineage

The local GitHub preset abstracts ideas observed in
[`ConsultingFuture4200/repo-readme`](https://github.com/ConsultingFuture4200/repo-readme)
at commit `e8f866b6e186c523a5f9b3147cb2ce6015908e29`.

The inspected source advertises MIT but exposed no `LICENSE` file. No source
prose, templates, or distinctive skeleton expression is requested for copying.
Reader-effect proof from the source is `none`.

## Acceptance Boundary

An upstream patch is eligible for regeneration only when:

- every new field changes a named decision unavailable through an existing
  owner, or is demoted/killed;
- positive and typed-negative fixtures pass;
- generated-runtime links and review mapping validate;
- the output contract keeps structural, editorial, audience, source, and human
  proof states separate; and
- no result turns readability, engagement, conversion, stars, or fixture success
  into truth, policy, or authority.
