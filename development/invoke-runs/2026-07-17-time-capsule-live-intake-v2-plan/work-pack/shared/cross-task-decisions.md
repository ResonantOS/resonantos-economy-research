# Cross-Task Decisions

| Decisions | Binding effect |
| --- | --- |
| D-01, D-15 | entrusted during intake; hidden until horizon; then public; no private return |
| D-02 | private bearer invite; one six-slot envelope; max two phrases per horizon |
| D-03 | Node.js/TypeScript, SQLite, existing VPS, `/api/`, separate secrets |
| D-04 | browser-only drafts; immutable confirmed versions; edit/withdraw before close |
| D-05 | saved phrases do not enter a live feed; use a steward-only moderation queue |
| D-06, D-07 | no participant removal after close; server commit fence at `2026-07-21T00:00:00Z` |
| D-08, D-09 | manifest fingerprint plus commitment-containing block; direct modulo into 1,000,000,000–99,999,999,999 |
| D-10, D-11 | drand/tlock primary; 3-of-5 emergency recovery |
| D-12–D-14 | required direct Bitcoin fingerprint payload; containing block final after six confirmations |
| D-16 | one-time recovery-complete publication; no scheduled maintenance or permanence guarantee |

Any contradiction routes back to `DECISIONS.md`; task code does not reinterpret it.

