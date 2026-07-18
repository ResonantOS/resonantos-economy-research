# Documentation Coverage

Status: complete path-level coverage; bounded pilot only
Machine projection: [documentation-coverage.json](documentation-coverage.json)
Rule: the strictest authority, lifecycle, ownership, or preservation rule wins

“Update all documentation” does not mean rewriting every Markdown file. It
means no documentation surface disappears from the decision. Every Markdown
path is assigned to a class with orthogonal reader, authority, lifecycle,
owner, transport, allowed-change, and disposition fields.

Current projection: 1,073 Markdown files — 25 `pilot`, 382 `defer`, 666
`exclude`, and 0 unclassified.

## Selected Active Pilots

| Surface | Reader task added or clarified | Reader-effect status |
| --- | --- | --- |
| Root `README.md` | Ask one bounded question and recognize a boundary-crossing answer. | `no-conclusion` |
| `GUIDE.md` | Rehearse one confirm/deny question with an expected result and stop condition. | `no-conclusion` |
| `CONTRIBUTING.md` | Make one small active-doc contribution and run real checks. | `no-conclusion` |
| `QUERYING.md` | Copy one question that demands a source, attack, and boundary. | `no-conclusion` |
| `prizes/README.md` | Understand prize and bet through one ordinary disagreement before field contracts. | `no-conclusion` |
| `prizes/EXPERIMENT-EXAMPLES.md` | Choose the closest story and isolate one question. | `no-conclusion` |
| `validation/README.md` | Rehearse one known-answer positive and one stop case. | `no-conclusion` |

The GitHub README preset, local overlay index, ownership manifest, and current
Whisper implementation receipts are also classified as pilots. This means they
may be exercised and revised; it does not promote them to canonical core.

## Navigation-Only Surfaces

The inventory Start Here and current-state map keep their canonical routing
roles. The inventory projection was rebuilt because the accepted dispatch
became reusable. No competing Start Here surface was created.

## Deferred Classes

- Authority, constitutions, definitions, claims, sources, and glossary files:
  owner-led ambiguity or navigation repair only.
- The long bet/prize walkthrough: wait for a frozen-baseline reader witness
  before attempting a visible-short-route comparison.
- Training workbooks and facilitator guides: role-specific owner review; no
  forced README structure.
- Unselected active reference docs: defer until a concrete reader task and
  owner authorize a bounded change.
- Presentations and interactive maps: separate transports.

## Excluded Classes

- Generated Whisper core and other generated/formula packages: regenerate from
  their canonical owner; only declared local overlays are writable here.
- Accepted findings, explorer returns, reviews, harvests, subtower returns,
  development runs, and task receipts: historical evidence.
- Telemetry, inventory log, observability signals, and reflections: append only.
- Registers, schemas, and structured state: owner-led structural updates only,
  not narrative modernization.

## Coverage Guarantee

The machine projection contains one row for every repository Markdown path and
an empty `unclassified` list. Re-run after adding or moving documentation:

```bash
python3 tools/build_documentation_coverage.py \
  --output dispatch/whisper-repo-readme-writing-patterns/whisper/documentation-coverage.json
```

Coverage proves that every path received a disposition. It does not prove that
the dispositions are permanent, that the pilot helps readers, or that deferred
documents never need owner-led repair.
