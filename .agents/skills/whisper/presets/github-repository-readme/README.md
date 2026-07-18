# GitHub Repository README Preset

Preset ID: `github_repository_readme`
Status: `candidate_whisper_preset`
Host surface: GitHub repository README
Reader-effect proof: none

Use this preset to create or revise a repository README around one concrete
reader task: understand the project, decide whether it fits, perform a first
safe action, verify a result, or find the correct deeper route.

It is not a conversion funnel. It does not promise that a reader will understand
or adopt a project within a fixed time. Badges, diagrams, screenshots, alerts,
and collapsible sections are optional GitHub features, not evidence of quality.

## Start With A Concrete Situation

Imagine opening an unfamiliar repository because you need to answer one
question: “Can this help me, and what is the first safe thing I can try?”

A useful README answers that question before asking the reader to learn the
repository's internal vocabulary. It gives the project in ordinary language,
shows a small action or example when one exists, says what result to expect, and
keeps prerequisites and important limits visible.

## When To Use It

- Creating a new repository README.
- Revising an existing README without losing verified facts, commands, links,
  status, license posture, or governance/evidence boundaries.
- Writing for a general repository, library, application, or
  framework/ecosystem.
- Applying the `governed_research_repository` overlay to a research front porch.

Do not use it for profile READMEs, historical findings, append-only telemetry,
authority contracts, schemas, registers, or a general prose cleanup.

## Selection

| Evidence | `project_kind` |
| --- | --- |
| Reusable import/API plus an install and use path | `library` |
| A bounded product or service that an end user runs | `application` |
| Several packages, plugins, or extension paths coordinated together | `framework_ecosystem` |
| None is clearly primary | `general` |
| More than one is primary or evidence conflicts | `abstain`; ask for manual selection |

`progressive_disclosure` is a depth strategy, not a project kind. It may defer
only content marked `may_defer`. Status, prerequisites, safety limits, evidence
posture, authority boundaries, stop conditions, and irreversible consequences
remain inline.

## Existing README Revision

Before changing the structure, extract and freeze:

- verified project facts;
- commands and their expected results;
- working local and external links;
- current status and evidence posture;
- license evidence or an explicit unknown state; and
- safety, governance, policy, or other blocked-use boundaries.

Never infer a license, command, URL, maturity level, or reader result from a
template.

## First Action Path

Use this only when the primary reader task is procedural or executable:

```yaml
applicability: who and when this path serves
prerequisite: what must already be true
action: the smallest safe action
expected_observable_result: what the reader should see
verification: how to check the result
stop_condition: when not to continue
deeper_route: where the full procedure lives
```

An explanation or historical record may correctly use `not_applicable`; do not
manufacture a Quick Start.

## Governed Research Overlay

The local `governed_research_repository` overlay requires these to stay inline:

- canonical local research status and `local-research-only` posture;
- claim/evidence and research/policy boundaries;
- what the repository cannot authorize;
- the inventory Start Here route as the sole canonical orientation path;
- a safe first action when one applies; and
- deeper evidence, source, and authority routes.

## Validation Boundary

The preset's local validator checks declared structure: markers, paths,
placeholders, fences, link targets, alt-text presence, Mermaid accessibility
metadata, required-inline placement, and license evidence. It cannot judge
truth, safety, completeness, meaning, reader understanding, policy, or
authority.

Run the deterministic fixtures:

```bash
python3 .agents/skills/whisper/presets/github-repository-readme/tools/validate_readme_preset.py --fixtures
```

A passing fixture means only that the candidate contract behaved as declared.

## Source Lineage

This preset independently paraphrases structural precedent observed in
[`ConsultingFuture4200/repo-readme`](https://github.com/ConsultingFuture4200/repo-readme)
at commit `e8f866b6e186c523a5f9b3147cb2ce6015908e29`.

- Reuse kind: abstracted and paraphrased precedent.
- License posture at inspection: unresolved; no `LICENSE` file observed.
- Verbatim source prose or templates: prohibited.
- Reader-effect proof from the source: none.

The research and evidence boundary are recorded in
[`dispatch/whisper-repo-readme-writing-patterns/findings.md`](../../../../../dispatch/whisper-repo-readme-writing-patterns/findings.md).
