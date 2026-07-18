# Explorer Returns — Whisper / repo-readme Writing Patterns

Dispatch: `2026-07-17-whisper-repo-readme-patterns`

The explorer returns below are preserved verbatim. They are evidence inputs, not accepted findings or policy.

## Agent 1 — Kuhn, Thomas

## Kuhn source archaeology

Snapshot inspected: default branch `master` at `e8f866b6e186c523a5f9b3147cb2ce6015908e29` (2026-07-04). The repository has four commits, no tags, no releases, one contributor, and one unmerged external PR. I also unpacked `github-readme.skill`; its five text files are byte-identical to `SKILL.md` plus the four root reference files.

### What it actually is

This is a static instruction package, not an executable generator or validator. Its operation is:

1. Infer repository README, profile README, or redesign mode.
2. Gather or infer ten context fields, including project description, features, installation, tone, and license.
3. Load `PATTERNS.md` always, then conditionally load badge, profile-widget, or advanced-Markdown references.
4. Select one of six skeletons and produce one complete `README.md`.
5. Present the result. There is no verification phase after generation.  
   [Workflow and context fields](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/SKILL.md#L28-L77)

The archetypes are genuinely implemented as fill-in skeletons:

- Standard: banner, badges, problem, features, demo, quick start, use, configuration.
- Library: package badges, installation, basic use, API table, advanced use.
- Application: screenshot, platform installation table, environment configuration.
- Framework/ecosystem: architecture diagram, package table, multiple startup paths.
- Progressive disclosure: quick start visible; most depth inside `<details>`.
- Profile: biography, technology grid, generated activity cards, projects, social links.  
  [Complete template catalog](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/PATTERNS.md#L18-L516)

The package’s conditional-reference design is real: the ZIP places the four files under `github-readme/references/`, matching the packaged skill’s lookup instructions. The raw checkout does not: its reference files are at repository root, so running the root `SKILL.md` literally cannot find the paths it names.

### Technique taxonomy

**General structure candidates**

- Route by document/job type before drafting.
- State the reader’s problem and intended outcome before expanding features.
- Put the shortest usable path before advanced detail.
- Keep deeper configuration available without making it the entry experience.
- Show one concrete example before exhaustive reference material.
- Give each template a recognizable default sequence, then vary only the parts its audience needs.  
  [Section guidance](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/PATTERNS.md#L516-L565)

**Workflow candidates**

- Infer what is safely inferable and avoid repeating questions already answered by an existing document.
- Load specialized reference material only when triggered.
- Use explicit all-capital placeholders and nearby maintainer comments.
- Adapt tone separately from structural archetype.
- Constrain output size.  
  [Context and placeholder rules](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/SKILL.md#L37-L69), [quality rules](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/SKILL.md#L96-L156)

**GitHub-only surface techniques**

Badges, `<picture>` theme switching, GitHub alerts, Mermaid front matter, collapsible sections, reference links, HTML tables, profile cards, and external activity widgets are transport-specific rendering devices, not general writing principles. [Advanced Markdown catalog](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/ADVANCED-MARKDOWN.md#L25-L353), [widget catalog and dependency warnings](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/PROFILE-WIDGETS.md#L22-L273)

### Evidence classification

| Class | Finding |
|---|---|
| Implemented behavior | Six templates, conditional reference routing, tone table, placeholder syntax, badge/widget recipes, and the packaged ZIP. |
| Documented rule | Badge limits, diagram-size advice, section order, line-count targets, “no em dashes,” and the conversion-funnel framing. These are instructions, not measured results. |
| Self-marketing claim | “High-impact,” “battle-tested,” “best READMEs,” “convert within 30 seconds,” and “for any project.” No experiment, corpus analysis, reader test, or before/after output supports these claims. [Claims](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/SKILL.md#L7-L26) |
| Self-demonstration | Its README demonstrates that the listed Markdown devices can coexist in one file. It does not prove that the skill generated the file, improves comprehension, or increases adoption. [Checklist](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/README.md#L257-L286) |
| Attributed precedent | A footnote names two “awesome” lists, Shields, and three popular repositories. There is no rule-to-source map, sample-selection method, comparison table, or extraction record, so copied text cannot be distinguished from synthesis. [Lineage claims](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/README.md#L296-L305) |
| Unresolved gap | No tests, generated fixtures, rendering check, link check, placeholder check, accessibility test, reader trial, or outcome measurement exists. |

### Credibility and lineage caveats

The current default branch advertises MIT in a badge and License section but contains no `LICENSE`; GitHub reports no detected license. It also defaults an unknown project’s license to MIT. Therefore the external prose and templates should not be copied into Whisper as licensed material. Abstracting ideas with attribution is safer until the rights posture is resolved. [False license surface](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/README.md#L18-L23), [declared default](https://github.com/ConsultingFuture4200/repo-readme/blob/e8f866b6e186c523a5f9b3147cb2ce6015908e29/SKILL.md#L41-L53)

The README’s release download points to an empty Releases page; two `./references/` links point to a nonexistent directory; its Mermaid diagram hardcodes light colors despite claiming no hardcoded theme; and only one of three hero badges is linked despite the adjacent comment. These are acknowledged in [unmerged PR #1](https://github.com/ConsultingFuture4200/repo-readme/pull/1), not fixed in current `master`. The PR’s proposed license names the external PR author as copyright holder, so it does not by itself settle upstream ownership.

### Candidate lessons requiring downstream tests

1. **Job-first preset routing:** test whether a small family of document jobs produces better choices than one universal writing preset.
2. **Conditional reference loading:** measure context saved and omissions introduced.
3. **Visible shortest path, hidden depth:** test on a README, research explanation, and procedural guide; collapsing caveats may be harmful outside GitHub onboarding.
4. **Self-demonstrating examples:** require an input/output receipt and reader task, not merely a feature checklist.
5. **Traceable placeholders:** pair human-visible placeholders with an automated unresolved-placeholder report.
6. **Preflight before delivery:** check links, referenced files, claimed licenses, placeholder coverage, source-backed claims, and transport rendering.
7. **Conversion framing as an opt-in transport:** do not generalize it to research, policy, historical, or deliberative writing without audience evidence.

No repository files were created or changed.

## Agent 2 — Kahneman, Daniel

## Empirical reader-evidence synthesis

### Bottom line

`repo-readme` is a useful collection of GitHub presentation patterns, but it is not evidence of a “30-second conversion system.” Its strongest transferable ideas are:

- make the reader’s first task obvious;
- use descriptive headings and short, objective blocks;
- show a runnable example early when the audience needs to act;
- keep secondary detail available without letting it obstruct the common path;
- demonstrate capabilities concretely.

Its weakest claims are the fixed conversion funnel, the 30-second promise, automatic archetype selection, badges as quality signals, and “the documentation is the demo” as proof of reader success. The repository’s cited stars and successful-project examples are precedent, not comprehension or causal evidence.

### Evidence matrix

| Claim | Verdict | Evidence and boundary |
|---|---|---|
| Scan-first structure | **Supported, with scope limits** | A 1997 study of 81 web users found scanning common and measured better time, errors, memory, and site-structure scores for concise, scannable, objective variants. It studied general websites, not modern GitHub developer tasks. [Morkes and Nielsen](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) |
| Thirty-second conversion | **Unsupported** | The source asserts this but cites the implicit structure and popularity of high-star repositories. Neither stars nor structural similarity measures comprehension, task completion, or conversion, and no 30-second experiment is supplied. [Source README and skill](https://github.com/ConsultingFuture4200/repo-readme) |
| README as sales funnel | **Partly contradicted** | GitHub says READMEs explain what a project does, why it is useful, how to start, where to get help, and who maintains it. That supports orientation and action, not universal persuasion. The web-writing experiment found objective language outperformed promotional “marketese.” [GitHub README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), [web-writing study](https://www.nngroup.com/articles/how-users-read-on-the-web/) |
| Progressive disclosure | **Plausible, conditional** | Authoritative UX guidance recommends showing frequent essentials first and clearly labelled secondary material on demand. It also warns that the initial/secondary split needs task analysis and usability testing, and that more than two levels often causes navigation problems. This does not validate nested `<details>` as a universal README technique. [Progressive disclosure guidance](https://www.nngroup.com/articles/progressive-disclosure/) |
| Quick Start near the top | **Plausible, not universally witnessed** | GitHub expects getting-started information and says a README should contain what developers need to start using or contributing. It does not prove a fixed section position. Readers evaluating safety, purpose, or fit may need a short orientation before commands. [GitHub README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Outcome-led features | **Supported when concrete; rejected as “desire” marketing** | Explaining intent and matching capabilities to scenarios are recurring needs in a mixed-method study involving more than 440 professional developers. The evidence supports “problem → scenario → capability/example,” not a persuasion stage labelled Desire. [Microsoft Research field study](https://www.microsoft.com/en-us/research/publication/field-study-api-learning-obstacles/) |
| Six archetypes | **Plausible authoring heuristic, unwitnessed reader effect** | Library, application, framework, and profile audiences do have different tasks. No comparison shows that these six categories, automatic inference, or their fixed section orders improve comprehension or completion. |
| Visual hierarchy | **Supported semantically, not cosmetically** | W3C guidance supports short descriptive headings, meaningful hierarchy, concise blocks, lists, and meaningful text alternatives. Merely centering banners, changing size, or adding horizontal rules does not supply accessible structure. [W3C writing guidance](https://www.w3.org/WAI/tips/writing/) |
| Badges | **GitHub-specific and accessibility-sensitive** | Badges can compactly expose version, build, or license state, but no reviewed source here shows that badge rows improve understanding or trust. Stars are social signals, not quality evidence. Badge alt text such as only “npm” or “CI” is too weak to preserve the actual message when images fail or are read aloud. |
| Callouts | **GitHub-specific, narrowly supported** | GitHub says alerts should be crucial to user success, limited to one or two per article, and not placed consecutively. This is stricter than the source skill’s “maximum two consecutive callouts.” Their presence is supported as platform syntax, not as a demonstrated comprehension improvement. [GitHub alert guidance](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) |
| Diagrams | **Potentially useful, never automatically accessible** | A diagram can expose relations that prose handles poorly, but no evidence in this sweep supports adding one by archetype alone. The source’s front-matter `title` is not equivalent to Mermaid’s author-supplied `accTitle` and `accDescr`; Mermaid only inserts accessible title and description when authors provide them. [Mermaid accessibility contract](https://mermaid.js.org/config/accessibility) |
| Examples | **Supported for developer learning** | The Microsoft field study identifies code examples, intent, scenarios, format, and presentation as important API-learning factors. That supports small, realistic, checkable examples, but not ornamental demos or screenshots without a reader task. |
| “Documentation is the demo” | **Capability witness, not reader proof** | The README demonstrates that the generator can emit badges, callouts, diagrams, and collapsible sections. It does not prove that readers understand the project, complete installation, choose the correct path, or avoid false conclusions. |

### Audience and transport limits

- The empirical evidence concerns web reading and API learning. It does not establish the same section order for research papers, constitutions, procedures, business plans, presentations, or narrative essays.
- Developer expertise changes what can safely be compressed. Newcomers need terms and prerequisites explained; experienced users may want the runnable path immediately.
- Research and governance documents optimize accurate understanding and bounded conclusions, not adoption. “Conversion” is the wrong success measure there.
- Never hide prerequisites, risks, evidence posture, limitations, or irreversible actions inside progressive disclosure.
- GitHub alerts, badges, Mermaid rendering, `<picture>`, and `<details>` are transport features. They are not general writing principles.

### Transferable principles

1. Start from the reader’s job: understand, decide, perform, verify, or navigate.
2. Put the shortest accurate orientation before detail.
3. Use descriptive semantic headings that form a useful outline by themselves.
4. Give each block one job and lead with its consequence or action.
5. Pair abstract capability claims with a scenario or concrete example.
6. Put the common path in view; reveal genuinely secondary detail through clearly labelled links or disclosure.
7. Keep prose objective and distinguish capability, evidence, limitation, and invitation.
8. Use a visual only when it makes a relationship easier to answer; preserve the same meaning for nonvisual readers.
9. Select document structure from audience tasks, not a universal funnel or cosmetic archetype.
10. Treat a self-demo as a reproducibility check, not proof of usefulness.

### Rejected universals

- Every document is a conversion funnel.
- A reader must become a user or contributor within 30 seconds.
- Attention → Interest → Desire → Action is the default order for all writing.
- Quick Start always precedes purpose, fit, prerequisites, or risk.
- Badges, banners, screenshots, or diagrams signal quality.
- Nested disclosure always improves scanning.
- A Mermaid title alone makes a diagram accessible.
- A project’s stars, forks, or contributor growth validate its documentation.
- Demonstrating a formatting feature proves reader comprehension.

### Concrete validation checks

- **Thirty-second orientation diagnostic:** after 30 seconds, can a newcomer accurately state what this is, who it serves, the first safe next step, and one important limit? Score correctness, not “conversion.”
- **Findability task:** can readers locate prerequisites, installation, help, and a known limitation within 60 seconds without guessing?
- **Fresh-start task:** using only the document, can a target reader complete the smallest useful action? Record completion, time, errors, external searches, and where they stop.
- **Retell check:** can the reader restate input, action, expected result, and limit without copying the text?
- **Disclosure comparison:** compare open versus collapsed secondary material on both common and advanced tasks. Measure missed prerequisites and unnecessary expansions.
- **Scenario matching:** give several user problems and ask which documented capability fits each. Record false matches caused by vague feature language.
- **Callout check:** test whether readers notice and act on the prerequisite or warning; compare against the same sentence in ordinary flow.
- **Badge/accessibility check:** disable images and use a screen reader. The status and link purpose must remain intelligible without color or icon recognition.
- **Diagram check:** ask relationship questions with diagram-plus-text and text-only variants. Require no loss for keyboard or screen-reader users.
- **Archetype test:** compare two structures for the same repository against actual user and contributor tasks, not visual preference.
- **Demo-boundary check:** readers must identify both what the live demo proves and what it does not prove.

### Source limit

The bounded sweep used eight source sets: the source repository; two official GitHub documents; W3C writing-accessibility guidance; the Morkes–Nielsen web-writing study; Nielsen’s progressive-disclosure guidance; the Microsoft API-learning field study; and Mermaid’s official accessibility contract. Only two are direct empirical studies. None measures this repository’s specific README, and none supports stars, forks, or engagement as comprehension evidence. No repository files were changed.

## Agent 3 — Myerson, Roger

## Myerson Explorer Return — Local Ownership and Migration Fit

Read-only audit completed. No files changed.

### Main finding

`repo-readme` should become one candidate GitHub README transport preset, not a universal Whisper writing doctrine.

Its strongest transferable ideas are structural hypotheses:

- choose a document shape from the reader’s job;
- make the project’s purpose specific immediately;
- expose the shortest useful first action;
- keep secondary depth available without crowding the entry;
- show concrete use before exhaustive reference material.

The source’s “conversion funnel,” 30-second conversion claim, line limits, badge preferences, and visual recipes are not established general writing laws. They should remain transport-specific until fixtures and reader evidence support them.

## Owner matrix

| Candidate concept | Existing Whisper owner | Fit and extension |
|---|---|---|
| Six README archetypes | `transport_schema` + preset package | Add one `github_repository_readme` preset with `standard`, `library`, `application`, `framework`, `progressive`, and `profile` modes. Do not create six top-level presets. |
| README redesign | Invocation/output mode | `existing_readme_revision`, not a new archetype. Preserve extracted facts and links before restructuring. |
| Conversion-funnel sequence | `trajectory_core` + `composition_plan` | Abstract cautiously as optional `reader_progression`: recognize → understand → first useful action → deepen → contribute. Never default it across research, authority, or evidence records. |
| Progressive disclosure | `surface_map` | Add a candidate `disclosure_map`: visible core, expandable depth, linked depth, authoring-only. Status, evidence boundary, safety limits, and required gates must never be collapsed. |
| Scan-first hierarchy | `readability_dynamics.delivery_flow` | Build from the existing entry/new-information/consequence/transition model. Add document-level checks only after fixtures; present validator currently does not inspect headings, lists, tables, or code. |
| Specific one-line description | README transport contract | Require object, audience/problem, and practical outcome. Evidence posture is additionally required for governed research repositories. |
| Shortest copyable Quick Start | Conditional narrative primitive | Candidate `first_success_path` for executable or procedural writing. For this repo, “success” may be a first query or fixture rehearsal, not installation. |
| Outcomes before implementation details | `relevance_core` + section guidance | Already present in product/business presets. Build from owned behavior rather than naming a new universal rule. |
| Self-demonstrating documentation | `show-don’t-tell instrument` / live example | Already owned by `veritasium` and multiple preset examples. A self-demo proves that a surface renders or can be used, not that it converts or teaches effectively. |
| Minimal questioning and inference | Whisper intake | Already owned: ask one focused question only when transport or intent is consequentially ambiguous. |
| Badges, banners, dark/light images, alerts, Mermaid, `<details>` | GitHub surface profile | Keep exclusively inside the GitHub README preset. These are rendering techniques, not narrative primitives. |
| Link and placeholder integrity | Validation | Add transport-specific checks for unresolved placeholders, local links, fabricated URLs, code fences, and required alt text. |
| “No em dash” and fixed 80–400-line limits | None | Reject as general rules. They are source preferences without demonstrated cross-transport value. |

## Concrete extension shape

### Repository-local preset

```text
.agents/skills/whisper/presets/github-repository-readme/
  README.md
  preset.yaml
  template.md
  fixtures/
```

Recommended modes:

- `standard`
- `library`
- `application`
- `framework`
- `progressive`
- `profile`
- local overlay: `governed_research_repository`

The local research overlay should require these elements to remain visible:

- research status;
- claim/evidence boundary;
- what the repository cannot authorize;
- canonical Start Here route;
- first useful action;
- deeper evidence and governance routes.

### Upstream generic candidates

These belong to canonical Whisper through `sigil-development`, not a hand-edit of the installed mirror:

- `trajectory_core.reader_progression`
- `surface_map.disclosure_map`
- conditional `first_success_path`
- heading/list/table-aware readability checks
- generic review-part mapping rather than article-specific inference

Keep all candidate until cross-transport fixtures and reader evidence exist.

## Local implementation constraints

1. `.agents/skills/whisper/SKILL.md` declares `generated-native-runtime-package` and `regenerate-from-canonical-source`.
2. Its declared source, `spells/whisper/README.md`, does not exist in this repository.
3. Observability records that the package was copied from DomainSpec Core and that local presets were specially preserved.
4. Therefore:
   - a repository-local preset is precedented;
   - edits to the core lifecycle, schema, or generic validator need an upstream patch and regeneration;
   - the local overlay needs an explicit preservation manifest or the next sync may erase it.
5. `SKILL.md` and `README.md` are effectively duplicate runtime projections.
6. `presets/README.md` omits the present `veritasium` and `veritasium-formal` files.
7. Schema and review instructions reference nonexistent local paths such as `spells/whisper/` and `arcanum/spells/whisper/`.
8. The review builder hardcodes part inference for the `substack-language-ai` example.
9. The draft validator mostly evaluates prose paragraphs. It cannot currently validate the hierarchy, Quick Start, lists, code blocks, tables, alerts, placeholders, or collapsible sections that carry a README.

## Minimum fixture set

| Fixture | Purpose | Expected result |
|---|---|---|
| Small library README | Specific promise, install, basic example, API link, verified links | `PASS` structurally; audience effect still unproven |
| Large governed research README | Visible status/boundary, Start Here, first query, linked depth | `PASS` only if no gate or non-authority boundary is collapsed |
| Dangerous “conversion” README | Hides uncertainty, source posture, or governance limits beneath marketing or `<details>` | `BLOCK` |
| Research explanation | Tests reader progression without badges, Quick Start commands, or sales language | `PASS` or candidate `FLAG` |
| Procedural guide | Visible first action plus linked detail; prerequisites and stop conditions stay visible | `PASS` |
| Historical-record negative control | Tool is asked to “modernize” accepted findings or telemetry | `PASS` only when it refuses mutation and proposes a front-door/index update |
| Broken-link/placeholder case | Invented URL, unresolved placeholder, misleading badge, or missing alt text | `BLOCK` |
| Held-out unfamiliar repository | Tests archetype selection without copying a training fixture | Required before calling the preset proven |

## Documentation migration matrix

| Documentation class | Route |
|---|---|
| `README.md` | Update through the governed-research README overlay. Keep status and Start Here visible; move exhaustive orientation behind clear routes rather than marketing conversion. |
| `GUIDE.md` | Apply procedural `first_success_path`; retain full gates and stop conditions visibly. |
| `CONTRIBUTING.md` | Make the first valid contribution and validation command immediately actionable; link deeper standards. |
| `QUERYING.md` | Already close to the desired pattern. Preserve plain questions and worked answers; add no visual ornament without need. |
| `prizes/README.md` | Add an immediate plain-language entry and first action; preserve canonical semantics and blocked uses. |
| `prizes/EXPERIMENT-EXAMPLES.md` | Preserve current story-first structure. Treat it as a fixture for the new disclosure and progression checks, not as proof. |
| 612-line bets/prizes walkthrough | Strong candidate for visible short route plus linked/expandable deep procedure. Do not hide authority boundaries or verdict rules. |
| Training README/workbook/facilitator guide | Keep role-specific surfaces. Improve only each role’s entry route; do not force README funnel structure onto live teaching. |
| Validation and fixture READMEs | Add shortest valid use path where missing; precision and non-goals remain visible. |
| Authority, definitions, claims, source records | Reference contracts, not conversion surfaces. Allow navigation improvements only; do not rewrite for persuasion. |
| Prize/bet registers and schemas | Structural state records. No narrative rewrite. |
| Inventory index and current-state map | Active front doors; update links and concise routing when migrations land. Generated JSON remains a projection only. |
| Accepted findings, dispatch returns, reviews, harvests, subtower evidence | Historical evidence. Explicitly excluded from prose rewriting. Add indexes or current explanations instead. |
| Telemetry, inventory log, observability signals/reflections | Append-only evidence. Excluded except for new closeout or migration records. |
| Generated `.agents`, `.claude`, and formula packages | Excluded from direct mutation unless regenerated from their canonical owner. |
| Development runs, task-session reports, browser evidence | Execution history. Preserve; link from new current-state summaries when useful. |
| HTML presentations and interactive maps | Separate transports. They may reuse reader progression, but not GitHub-specific markup rules. |

## Unresolved owner questions

- Will the generic Whisper improvements be applied in DomainSpec Core and regenerated, or remain a repository-local overlay?
- What mechanism guarantees that local presets survive the next runtime sync?
- The external README claims MIT, but the current repository tree exposes no `LICENSE` file and `/LICENSE` returns 404. Exact template copying should remain blocked until licensing is clarified; abstracted, attributed lessons are safer.
- Does the owner want a public-conversion README or an internal research front door? Those are different audience modes.
- Which human reader witness is required before migrating the long walkthrough and other active newcomer documents at scale?

The most conservative build is: one local candidate GitHub README preset, one governed-research overlay, cross-transport fixtures, and an upstream patch request for generic Whisper behavior.
