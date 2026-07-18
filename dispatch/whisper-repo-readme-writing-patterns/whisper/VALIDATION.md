# Whisper Validation

Final status: `flag`

The candidate preset, overlay guard, documentation links, inventory, and
coverage mechanics pass their declared checks. Reader understanding and generic
Whisper promotion remain untested, so the overall result cannot be `pass`.

## Deterministic Checks

| Check | Result | Boundary |
| --- | --- | --- |
| Preset YAML and text-intent YAML parse | PASS | Syntax only. |
| README preset fixtures | PASS | Nine declared Markdown, selector, and lifecycle cases matched: two structural positives, one dangerous-success block, four selector cases, and two lifecycle decisions. |
| Dangerous-success fixture | PASS as expected block | Conversion language and a required boundary hidden in `<details>` both block. |
| Overlay export/restore rehearsal | PASS | Three owned paths and fourteen files restored into an empty staged root with no missing, added, or changed file. |
| Overlay snapshot verification | PASS | Current paths, sizes, and SHA-256 values match the committed receipt. |
| Selected Markdown local targets | PASS | Twenty-three selected files and 209 local link targets exist. External URLs and anchor semantics are outside this check. |
| Documentation coverage | PASS | 1,073 Markdown paths: 25 pilot, 382 defer, 666 exclude, and 0 unclassified. |
| Inventory projection | PASS | 33 entries on disk and in the index; 125 indexed repository paths exist; all 47 used tags are registered among 49 tags. |
| Pre-commit inventory gate | PASS | Projection and filesystem-truth checks pass. |
| Whitespace | PASS | `git diff --check` reports no errors. |
| Python cache hygiene | PASS | No `__pycache__` directory was produced. |

## Existing Whisper Editorial Validator

The installed validator ran against all seven active prose pilots with the new
substrate. Every file returned `FLAG`, not `BLOCK`. The flags are paragraph and
sentence-density warnings, including tables flattened into long prose blocks.

This is preserved as evidence for the upstream request: the current validator
does not model headings, lists, tables, and code as their actual structures.
The flags are not silently cleared, but they also do not prove that the new
reader paths are bad. Human review found the new additions start from ordinary
situations or actions, state expected results, and keep stop or authority
boundaries visible.

## Global Diagnostic Flag

`tools/check_load_bearing_terms.py` completed successfully but reported 1,365
first-pass untracked identifiers across 110 pre-existing non-definition
surfaces. The tool explicitly says false positives are expected and a separate
term sweep must judge them. This implementation does not close or rewrite that
global backlog.

## Unrun Evidence

- No author-independent newcomer has compared the baseline and candidate docs.
- No held-out reader task, ground truth, failure threshold, or disposition rule
  has run.
- The canonical upstream Whisper patch has not been applied or regenerated.
- The external precedent's license remains unresolved.

Therefore:

- preset status: `candidate_whisper_preset`;
- local composition status: `flag`;
- reader effect: `no-conclusion`; and
- policy, implementation, payout, governance, and authority effect: none.
