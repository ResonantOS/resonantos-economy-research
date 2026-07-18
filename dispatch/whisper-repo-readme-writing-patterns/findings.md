# Findings — Whisper / `repo-readme` Writing Patterns

Status: candidate research verdict; final dispatch audit pending  
Dispatch: `2026-07-17-whisper-repo-readme-patterns`  
Source posture: related external precedent plus local repository evidence  
Promotion effect: none  

## Direct Answer

[`ConsultingFuture4200/repo-readme`](https://github.com/ConsultingFuture4200/repo-readme/tree/e8f866b6e186c523a5f9b3147cb2ce6015908e29) is a static GitHub README instruction and template package. It contains useful examples of routing by repository kind, exposing an early action, conditionally loading references, and using GitHub-native presentation features. It contains no executable generator, validator, reader trial, or evidence that its structures improve comprehension or conversion. Its “high-impact,” “battle-tested,” “30-second conversion,” and universal-project claims are therefore rejected as transfer evidence. The implemented behavior and evidence gaps are documented in the [source-archaeology receipt](research.md#agent-1--kuhn-thomas).

The smallest warranted adaptation is:

1. one **candidate**, repository-only `github_repository_readme` Whisper preset;
2. a few non-vacuous candidate extensions built from existing Whisper owners;
3. structure checks separated from human truth, safety, and meaning judgments;
4. a documentation coverage audit followed by staged pilots, not a repository-wide prose rewrite; and
5. an upstream or explicit local-overlay patch route for generic Whisper changes, because the installed core is generated.

This is not a validated preset, a general writing doctrine, accepted repository policy, or evidence that changing documentation will help readers.

## Source, Lineage, And License Posture

The inspected external snapshot is commit [`e8f866b6e186c523a5f9b3147cb2ce6015908e29`](https://github.com/ConsultingFuture4200/repo-readme/commit/e8f866b6e186c523a5f9b3147cb2ce6015908e29). Its workflow gathers or infers context, selects among six README skeletons, loads specialized references conditionally, and emits a README without a verification phase ([source workflow](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/SKILL.md#L28-L77), [pattern catalog](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/PATTERNS.md#L18-L516)). GitHub-specific devices include badges, alerts, theme-aware images, Mermaid, tables, and collapsible blocks ([advanced Markdown catalog](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/ADVANCED-MARKDOWN.md#L25-L353)). These are source behaviors, not reader-effect evidence.

The snapshot advertises MIT but the explorer found no `LICENSE` file, while its template also defaults an unknown project to MIT ([advertised license](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/README.md#L18-L23), [license default](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/SKILL.md#L41-L53)). Until ownership and licensing are clarified:

- keep the upstream URL and exact commit in every lineage receipt;
- abstract and paraphrase lessons only;
- do not copy its prose, templates, or distinctive section sequences verbatim;
- record `license_posture: unresolved` and `reader_effect_proof: none`; and
- do not treat [unmerged PR #1](https://github.com/ConsultingFuture4200/repo-readme/pull/1) as resolving upstream ownership.

## Evidence Verdict

| Proposition | Verdict | Evidence boundary |
| --- | --- | --- |
| Route README structure by repository and reader task | Candidate adaptation | The source implements archetypes, but no comparison establishes reader benefit. |
| Use descriptive headings and concise, objective blocks | Supported with scope limits | W3C supports meaningful headings and text alternatives; an older web study supports concise, scannable, objective variants, but neither validates this repository or a fixed README order ([W3C](https://www.w3.org/WAI/tips/writing/), [Morkes and Nielsen](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/)). |
| Show a small, realistic example for developer action | Supported with scope limits | A mixed-method Microsoft study of API learning supports intent, scenario, and example needs; it does not establish universal placement or reader success here ([Microsoft Research](https://www.microsoft.com/en-us/research/publication/field-study-api-learning-obstacles/)). |
| Keep genuinely secondary depth available | Plausible, conditional | Progressive disclosure needs task analysis and testing; prerequisites, risk, evidence posture, and irreversible consequences must remain visible ([Nielsen Norman Group](https://www.nngroup.com/articles/progressive-disclosure/)). |
| Put a Quick Start first in every document | Rejected universal | GitHub asks READMEs to explain purpose, usefulness, how to begin, help, and maintenance, but does not prescribe one fixed order ([GitHub README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)). |
| Badges, banners, alerts, Mermaid, or collapsibles improve quality | Unsupported and transport-specific | They are GitHub rendering features. Mermaid accessibility requires explicit accessible title and description metadata; presence alone is not quality evidence ([Mermaid](https://mermaid.js.org/config/accessibility)). |
| The documentation can demonstrate its own capability | Capability witness only | A rendered self-demo can show that a feature works. It cannot show comprehension, usefulness, correctness, adoption, or safe action. |
| A fixed funnel or 30-second target improves conversion | Killed | No admitted source measures this claim. Stars, forks, and engagement are not comprehension or causal evidence. |

The bounded empirical receipt and its transport limits are preserved in [Agent 2's return](research.md#agent-2--kahneman-daniel). Only two admitted sources were direct empirical studies, and neither tested this repository.

## Candidate Verdict Matrix

| Candidate | Verdict | Owner and boundary | Required next witness |
| --- | --- | --- | --- |
| `github_repository_readme` preset | **Revise, then pilot** | One local transport preset, not six top-level mechanisms. Exclude profile READMEs in this iteration. | Selector, preservation, positive, typed-negative, accessibility/link, and held-out fixtures. |
| `reader_job` | **Revise, candidate generic extension** | Add only if it makes a decision not already made by `relevance_core`, `trajectory_core`, or `composition_plan`. | Cross-transport pairs must show a unique routing or validation decision; otherwise kill it as a rename. |
| `reader_progression` | **Demote** | Useful planning language at most; not a schema proposal. Existing delivery flow owns reading sequence. | Reconsider only if fixtures show a unique decision that delivery flow cannot express. |
| Audience disclosure | **Revise, build from owned** | Extend the existing `surface_map`; do not add a parallel disclosure object if that map already owns visibility. | Fixture must distinguish required-inline from safely deferred material. |
| `first_action_path` | **Revise, conditional** | Procedural or executable writing only. It may remain a preset convention if it creates no generic decision. | README, research explanation, and contributor-procedure pairs plus a dangerous-success negative. |
| Conditional reference loading | **Pilot inside preset** | Context-routing implementation behavior, not a narrative law. | Measure omitted requirements and context savings; omissions outweigh savings. |
| Structure-aware inspection | **Revise, technical candidate** | Heading/list/table/code/fence/path/placeholder inspection. It cannot judge truth or quality. | Deterministic fixtures with manual/unmapped fallback. |
| Generic review-part mapping | **Revise, technical candidate** | Replace example-specific inference only through the canonical Whisper owner. | Known, mixed, and unmapped structures without fabricated part IDs. |
| GitHub presentation features | **Transport-only candidate** | Optional GitHub surface feature set inside the README preset; not a profile-README mode. | Rendering and accessibility checks; absence must never fail a non-GitHub transport. |
| Self-demo as reader proof | **Demote to capability receipt** | Existing show-don't-tell behavior may demonstrate execution. | Reader study required for any comprehension claim. |
| Universal conversion funnel | **Kill** | Persuasion is not writing quality, research truth, or repository policy. | None under this dispatch. |
| Fixed 30-second gate, line limits, badge quotas, “no em dash” | **Kill as general rules** | Source preferences without demonstrated cross-transport value. | A 30-second orientation task may be configured only as an exploratory diagnostic. |

## Proposed Whisper Extension Architecture

### Ownership boundary

The local Whisper front matter declares `surface_kind: generated-native-runtime-package`, `canonical_source: spells/whisper/README.md`, and `mutation_policy: regenerate-from-canonical-source` ([runtime front matter](../../.agents/skills/whisper/SKILL.md#L1-L8)). That canonical path is absent in this repository. The installed runtime already owns intent, transport schema, composition plan, surface map, validation, and learning residue ([lifecycle contract](../../.agents/skills/whisper/SKILL.md#L55-L91)). Therefore:

- do not directly edit core `SKILL.md`, `README.md`, schema, validator, or review builder here;
- send generic changes to the canonical owner through an upstream patch request and regeneration;
- create a local preset inside the generated package only after a non-generated ownership record says that local overlays are supported;
- before any such local placement, record a preservation manifest, inventory the files and pre-sync hashes, rehearse the sync, and compare post-sync paths and hashes; and
- if preservation cannot be guaranteed, stage the preset outside the generated surface and issue a local-overlay patch request instead.

The local ownership audit and current validator limitations are detailed in [Agent 3's return](research.md#agent-3--myerson-roger).

### Candidate preset contract

```yaml
id: github_repository_readme
host: github_repository
status: candidate
operation: create | revise_existing
project_kind: general | library | application | framework_ecosystem
depth: direct | progressive_disclosure
overlay_ids: []
source_lineage:
  url: https://github.com/ConsultingFuture4200/repo-readme
  commit: e8f866b6e186c523a5f9b3147cb2ce6015908e29
  license_posture: unresolved
  reuse: abstracted_paraphrase_only
reader_effect_proof: none
```

Selectors must be explicit and inspectable. Mixed or uncertain cases must abstain and request manual selection; they must not silently force the nearest archetype. `revise_existing` must first preserve verified facts, commands, links, current status, license evidence, and repository boundaries. Missing evidence must become a visible placeholder or block, never an inferred fact.

A repository-local `governed_research_repository` overlay must keep the following inline and visible:

- canonical status and `local-research-only` posture;
- claim/evidence and research/policy boundaries;
- the inventory **Start Here** route as the only canonical entry point;
- a safe first action when one applies; and
- clear deeper evidence, source, and authority routes.

It must refuse requests to modernize historical findings, returns, telemetry, or execution receipts. A refusal may propose an active front-door or index update instead.

### Candidate generic contracts

`reader_job` means one primary **verb + object + completion witness**, with optional ordered supporting jobs. Example: “run the inventory query and identify the returned source record.” It is distinct from the author's objective, desired reader change, and success signal. Kill the field if paired fixtures across transports produce no unique decision.

Audience disclosure belongs in the existing `surface_map` and has two axes:

```yaml
placement: inline | linked | on_demand
obligation: required_inline | may_defer
```

`authoring_only` remains a surface-ownership classification, not a reader-disclosure value. `required_inline` is enforceable by a validator. Prerequisites, safety limits, evidence posture, stop conditions, irreversible consequences, and authority boundaries default to `required_inline`.

`first_action_path` applies only when the document supports a procedure or executable action:

```yaml
applicability: who and when this path serves
prerequisite: what must already be true
action: the smallest safe action
expected_observable_result: what the reader should see
verification: how the reader checks it
stop_condition: when not to continue
deeper_route: where full detail lives
```

If this creates no decision beyond a transport's existing schema, keep it as a preset convention rather than adding a core field.

## Validation And Experiment Boundary

Machine checks may inspect declared structure only: required markers and paths, unresolved placeholders, balanced fences, link targets, meaningful image-alt presence, Mermaid `accTitle`/`accDescr`, required-inline placement, and evidence for a claimed license. Their status vocabulary is:

- `structure_check_pass`
- `flag`
- `block`

A machine pass must never become canonical `research-pass` automatically. Humans remain responsible for completeness, factual truth, safety, meaning, evidence posture, authority boundaries, and whether the selected structure helps the intended reader. A structural fixture proves contract behavior only; it does not prove readability, comprehension, usefulness, conversion, or correctness.

Any comparison that claims reader benefit must preregister:

- frozen baseline and candidate versions;
- an author-independent, held-out reader cohort and its starting knowledge;
- the task and ground truth;
- metrics, including boundary errors and unsafe continuations;
- a failure threshold; and
- one disposition: `retain`, `revise`, `demote`, `kill`, or `no-conclusion`.

Priorities are **correctness and visible boundaries**, then **task sufficiency**, then brevity. A configurable 30-second test may ask whether a reader can correctly state what the artifact is, who it serves, the first safe next step, and an important limit. It is exploratory and never a gate or conversion measure.

### Minimum fixture matrix

| Fixture | Decidable expectation |
| --- | --- |
| Small library README | Correct selector; verified install and example; API/deeper route; no invented link or license. |
| Governed research README | Status, non-authority boundary, Start Here, safe first query, and deeper route remain visible. |
| Research explanation | Reader job and reading sequence work without badges, Quick Start sales language, or hidden evidence limits. |
| Contributor procedure | Applicability through stop condition is complete; a newcomer can verify the first action. |
| Mixed selector / abstention | Selector declines to guess and returns a manual choice receipt. |
| Dangerous-conversion negative | Marketing structure that hides uncertainty, prerequisites, or authority boundaries blocks. |
| Historical-record refusal | Requested rewrite is refused; active front-door/index alternative is proposed. |
| Accessibility and link negative | Missing meaningful alt text, Mermaid metadata, claimed license evidence, or local target flags or blocks. |
| Held-out unfamiliar repository | Selection and preservation run without copying a training fixture; reader effect remains unproven. |

Each fixture needs typed positive and negative expectations, including dangerous success where a visually polished document would mislead or hide a boundary.

## Documentation Coverage And Migration Verdict

The downstream pass must inventory every documentation class using orthogonal fields:

```text
reader_role | authority_posture | lifecycle | canonical_owner |
transport | allowed_change | disposition
```

When classifications conflict, the strictest preservation or authority rule applies. Every class receives `pilot`, `defer`, or `exclude` with a reason; “update all documentation” cannot mean silently rewriting all Markdown.

| Documentation class | Disposition | Boundary and pilot |
| --- | --- | --- |
| Root `README.md` | **Pilot** | Freeze a baseline; evaluate the governed-research overlay. Preserve local status, plain-language purpose, non-authority boundary, and canonical Start Here. |
| `GUIDE.md` | **Pilot, bounded** | Test a complete first-action path without hiding gates, stop conditions, or owner routes. |
| `CONTRIBUTING.md` | **Pilot, bounded** | Test the first valid contribution and verification path; retain blocked shapes and minimum evidence standard inline. |
| `QUERYING.md` | **Pilot, examples only** | Preserve plain questions and worked answers; test job clarity, not ornament. |
| Prize, bet, and experiment guides | **Pilot, examples and entry route** | Clarify reader jobs and first safe action. Preserve canonical mechanics, invalidity, verdict, and blocked-use language. |
| Experiment-example gallery | **Pilot fixture** | Test story/example navigation; do not treat the examples or structure as reader proof. |
| Long bet/prize walkthrough | **Defer pending witness** | Evaluate a frozen baseline against a visible short route plus linked depth. Never defer authority boundaries or verdict rules. |
| Training README, workbook, facilitator guide | **Defer to role owners** | Role-specific entry improvements only; no forced README funnel. |
| Validation and fixture READMEs | **Pilot, shortest valid use** | Keep precision, non-goals, typed negatives, and status non-collapse visible. |
| Inventory index and current-state maps | **Pilot navigation only** | Keep the inventory as the sole canonical Start Here; generated JSON remains a projection. |
| Authority, constitutions, definitions, claims, sources | **Defer to canonical owners** | Only owner-led ambiguity or navigation fixes; no persuasion rewrite. |
| Registers, schemas, structured state | **Exclude from narrative rewrite** | Machine/state contracts; owner-led schema work only. |
| Generated Whisper core and other generated/formula packages | **Exclude from direct edit** | Regenerate from canonical owner; local preset remains conditional on preservation contract. |
| Accepted findings, explorer returns, reviews, harvests, subtower evidence | **Exclude as historical evidence** | Preserve verbatim/history; link from active explanations when useful. |
| Telemetry, inventory log, observability signals/reflections | **Exclude; append only** | Add only the current closeout or authorized new record. |
| Development runs, task reports, browser/evidence receipts | **Exclude as execution history** | Preserve and link from current summaries only where needed. |
| HTML presentations and interactive maps | **Defer as separate transports** | May test generic reader-job ideas; must not inherit GitHub markup rules. |

The current repository already makes the inventory the sole canonical Start Here ([inventory path](../../.arcanum/inventory/index.md#start-here-read-in-this-order)) and prohibits local scaffold status from becoming economy validation ([contribution boundary](../../CONTRIBUTING.md#validation-work)). Those constraints outrank any candidate readability change.

## Kill, Demotion, Revision, And No-Conclusion Rules

- **Kill** a candidate when it produces no unique decision beyond an existing owner, hides a required boundary, relies on conversion/engagement/stars as truth, or succeeds only cosmetically.
- **Demote** a generic field to preset convention or planning language when it is useful but adds no stable cross-transport contract.
- **Revise** when the contract is decidable but a positive, typed-negative, preservation, accessibility, or abstention fixture fails.
- **No conclusion** is mandatory when a reader comparison lacks an independent held-out cohort, ground truth, preregistration, or enough observations to cross its declared threshold.
- A structure pass never promotes a truth, safety, evidence, policy, or authority claim.

## Downstream Whisper Handoff

Proceed in this order only after the final dispatch auditor accepts or repairs these findings:

1. Create a documentation coverage ledger with the seven fields above and frozen baselines for selected pilots.
2. Record the generated-runtime ownership and overlay-preservation decision outside the generated Whisper package.
3. Draft the `github_repository_readme` preset and `governed_research_repository` overlay as candidate contracts using only paraphrased, attributed precedent.
4. Add selector, preservation, abstention, typed-negative, accessibility/link, historical-refusal, and held-out fixtures.
5. Add deterministic structure checks whose result cannot auto-promote editorial or research status.
6. Stage generic `reader_job`, `surface_map` disclosure, `first_action_path`, structure inspection, and generic review mapping as an upstream patch request; omit any field that does not make a unique decision.
7. Run bounded pilots on frozen copies of the root README, GUIDE, CONTRIBUTING, and one example-oriented guide. Do not bulk rewrite active documentation.
8. Run a separately preregistered held-out reader comparison before claiming benefit; otherwise record `no-conclusion`.
9. Update active indexes and inventory with the resulting disposition while preserving historical and append-only classes.

## Open Residue

- The external source's licensing and ownership remain unresolved.
- No reader has tested the external source, proposed preset, or local documentation changes.
- The canonical Whisper source is absent here, and local-overlay survival across regeneration is not yet guaranteed.
- It is undecided whether each generic candidate makes a unique decision beyond current Whisper owners.
- The correct held-out reader cohorts, starting-knowledge bands, tasks, ground truth, and failure thresholds remain to be preregistered.
- The long walkthrough migration has no audience witness and remains deferred.
- Profile README selection is deliberately outside the first preset iteration.

## Dispatch Closeout Record

The dispatch completion values are recorded below; `resolved` means the bounded research question produced an implementation boundary, not that the preset or reader effects were validated.

```yaml
exit_reason: resolved
agents_spawned:
  total: 9
  tree:
    explorer: 3
    synthesizer: 1
    skeptic: 3
    writer: 1
    auditor: 1
    helpers: 0
loops_used: 1
final_audit: accepted
```
