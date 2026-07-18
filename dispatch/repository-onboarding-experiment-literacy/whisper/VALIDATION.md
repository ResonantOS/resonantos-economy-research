# Whisper Validation — Repository Onboarding

Status: `FLAG`

Transport: `repository_onboarding` (unproven)

Intent state: `frozen`

## Deterministic checks

| Check | Result | Evidence |
| --- | --- | --- |
| Whisper draft validator | PASS | `prizes/EXPERIMENT-EXAMPLES.md` is 2,638 validator-counted words, satisfies the revised plain-language contract, stays inside 1,600–4,600 words, and emits no delivery-flow findings. |
| Substrate YAML | PASS | `text-intent-substrate.yaml` parses with PyYAML. |
| Local Markdown paths and anchors | PASS | 160 local links across `README.md`, `GUIDE.md`, and `prizes/EXPERIMENT-EXAMPLES.md` resolve with GitHub-style anchors. |
| Inventory machine view | PASS | 32 disk entries equal 32 machine-index entries; all indexed file paths resolve; all used tags are registered. |
| Whitespace | PASS | `git diff --check` reports no errors. |
| Load-bearing-term strict sweep | FLAG, pre-existing | The repository-wide first-pass checker reports longstanding untracked candidates across unchanged claim/subtower surfaces. Its configured scan set does not include the three onboarding targets. No definition promotion or unrelated sweep was attempted here. |

The operator rejected the first completed draft as still too jargon-heavy. In
particular, it addressed a beginner with phrases such as `counterbalanced`,
`bounded evidence`, `validity gates`, and `mechanical verdict`. The revised
contract requires the ordinary action before the formal label. Those phrases no
longer lead any beginner-facing explanation. A first revision pass also flagged
the author-facing phrase `This page shows`; replacing it with the reader-facing
action removed the finding.

## Editorial delivery-flow review

| Human check | Result | Judgment |
| --- | --- | --- |
| One job per block | PASS | README moves entry → meaning → consequence → action; GUIDE owns one clarification; the gallery owns transfer examples. |
| Semantic repetition | PASS | README gives the compact lifecycle; the gallery adds fixture reasoning and adjudication rather than repeating the same explanation. |
| Heading/body paraphrase | PASS | Headings name reader tasks or cases; opening sentences advance rather than restate them. |
| Reading sequence | PASS | Scene precedes jargon, fixture consequence precedes fictional runs, and owner routes follow transfer examples. |
| Plain action before formal label | PASS | The gallery first explains who sees what, what counts, and how the result is decided. Formal labels such as `FALSIFIED`, `SURVIVED`, and `post-freeze non-adjudicable` appear only after the everyday result. |
| Load-bearing examples preserved | PASS | Independent bets, dangerous-success fixtures, `FALSIFIED`, narrow `SURVIVED`, and post-freeze non-adjudicability remain explicit. |
| Retell chain | PASS as draft structure | Story → research target → written prediction → rules agreed before results → known-answer rehearsal → separately approved run → raw result → result for this test → limit → owner decision is visible and exercised. |
| Authority boundary | PASS | No fixture, fictional run, score, credit, or verdict becomes policy, payout, governance, launch, or implementation permission. |

## Why the result remains FLAG

Passing deterministic and editorial checks does not prove the transport works
for its intended audience. No independent newcomer has yet completed the
held-out artifact-transfer exercise unaided, no preregistered comparison shows
that story-first ordering is better, and no audience witness establishes that
the analogies help rather than confuse.

The existing pre-freeze/post-freeze `INVALID` owner conflict also remains
visible. The gallery teaches `design-invalid` before freeze and `post-freeze
non-adjudicable` after a broken run without pretending the owners already agree.

## Next witness

Give one unfamiliar reader the held-out mentorship story and a blank experiment
plan. Provide no mentor help. Score it using rules agreed beforehand, keep the
plan and scorer's notes, and ask the reader to retell the path without help.
That would show minimum understanding for this one reader only. Proving that
story-first teaching is better requires a separate comparison.
