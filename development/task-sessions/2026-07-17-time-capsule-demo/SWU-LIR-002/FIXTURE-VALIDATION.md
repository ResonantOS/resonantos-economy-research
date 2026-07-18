# Fixture Validation — SWU-LIR-002

- Fixture: `resonant-time-capsule-simulator@1.0.0`
- Machine result: `PASS`
- Manual access/comprehension result: `UNRUN`
- Browser: Playwright Firefox, fresh in-memory session
- Local route: `/contribute/tests/fixture-runner.html`

## Machine Evidence

| Surface | Result | Evidence |
| --- | --- | --- |
| JavaScript and HTML syntax | pass | Node syntax checks and Python HTML parser |
| route/context contracts | pass | Dispatch Spec validator; strict context 9/9 |
| fixture identity and boundary | pass | explicit frozen id/version; invented-only and non-promotion copy |
| word grammar | pass | 12/12 quiet, trim, NFC, Arabic, punctuation, space, emoji, format-control, and length cases |
| state/event flows | pass | slot unlock, IME suppression, bidi review, invalid focus, Enter, receipts, close, reset |
| sealed boundary | pass | all six sealed controls remain disabled |
| request boundary | pass | iframe resource count stayed 2 through every interaction |
| browser state | pass | no local/session storage or cookies |
| browser console | pass | 0 errors, 0 warnings in a fresh session |
| layout | pass | no horizontal overflow |
| aggregate | pass | `29/29` runner checks |

Screenshot:

- `output/playwright/time-capsule-swu-lir-002-fixture-runner.png`

The fixture runner and its source are not linked from the participant page. The
form HTML, CSS, JavaScript, and README were not changed by this SWU. Handoff
hashes are:

```text
bfa0588f775ed46018b222fe6880f5c0880b81a6e94adb8bb01d1162d00c55bf  index.html
a65ad43528790ad87b5882b15f86f8d285a3b828ac6d57770ac8b14892fdd40b  simulator.css
e94bff5970b6ea688bd7809876e744d31e909ca6f91f728648e755f9a0c0eaab  simulator.js
40f81ebf39699088333cdeccbdba0b9ca68cf92a5b2915ad45a086a8d5df1794  README.md
```

## Manual Gate

The matrix in `site/contribute/tests/ACCESS-MATRIX.md` is declared but has not
run with an actual screen reader, native IME, or participant set. This is a real
evidence dependency, not a machine defect:

1. Run the named screen-reader/browser scenarios.
2. Run the named native-IME scenarios.
3. Run all six critical retell prompts with at least five participants whose
   combined access experience meets the sampling rule.
4. Treat any critical misunderstanding as a block, repair the contract, and
   rerun the full protocol.

Until those four steps have evidence, `SWU-LIR-002` cannot pass and
`SWU-LIR-003` must not start.
