# ResonantOS Economy Research — Craft Ledger

Human-readable view of [.craft/ledger.yml](.craft/ledger.yml). The ledger is the
source of truth; this page is a linked status and navigation surface. Detailed
per-pass narration lives in [.arcanum/inventory/log.md](.arcanum/inventory/log.md).

This ledger tracks research work. It does **not** promote definitions,
constitutions, mechanisms, token/bounty/governance policy, or launch readiness by
itself.

## Quick Links

- Root: [CTX-ECON-ROOT](#context-ctx-econ-root)
- Definitions + load-bearing-term tracking: [CTX-ECON-DEFINITIONS](#context-ctx-econ-definitions)
- Track A fixture backlog: [CTX-ECON-FIXTURES](#context-ctx-econ-fixtures)
- CAV2 reciprocal return: [CTX-ECON-CAV2-RETURN](#context-ctx-econ-cav2-return)
- Active blockers: [costly-identity](#blocker-blk-econ-costly-identity-001), [phase-2](#blocker-blk-econ-phase2-001), [candidate-grounding](#blocker-blk-econ-candidate-grounding-001), [whitepaper-snapshot](#blocker-blk-econ-whitepaper-snapshot-001)
- Active gaps: [adapter-compound](#gap-gap-econ-adapter-compound-001), [REX-artifact](#gap-gap-econ-rex-artifact-001), [README/GUIDE](#gap-gap-econ-readme-guide-001)

## Contexts

### <a id="context-ctx-econ-root"></a>CTX-ECON-ROOT — ResonantOS economy resilience research

- Stage: `execute` · Gate: `flag`
- Purpose: research a resilient ResonantOS/ResonantDAO economy, source-first, local-research-only.
- Next move: **build NOW-fixture #2 (flow-conservation, formal-TF-1)** via the evidence harness; grounding ER-D24/25/26 is its first task.

### <a id="context-ctx-econ-definitions"></a>CTX-ECON-DEFINITIONS — Definitions spine and load-bearing-term tracking

- Stage: `execute` · Gate: `pass`
- Purpose: keep ER-D1..D28 authoritative and every load-bearing term tracked under REC-C14 / ER-D23.
- Next move: ground the candidate terms (ER-D24..D28) as fixtures are built; lazy-migrate `Lifecycle status:` onto ER-D1..D22 when each is next touched.
- Artifacts: [DEFINITIONS.md](definitions/DEFINITIONS.md), [DEFINITIONS-INDEX.md](definitions/DEFINITIONS-INDEX.md), [DEFINITION-DRIFT-AUDIT.md](definitions/DEFINITION-DRIFT-AUDIT.md), [RESEARCH-CREDIBILITY-CONSTITUTION.md](authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md), [check_load_bearing_terms.py](tools/check_load_bearing_terms.py).

### <a id="context-ctx-econ-fixtures"></a>CTX-ECON-FIXTURES — Track A NOW-fixture backlog

- Stage: `plan` · Gate: `flag`
- Purpose: build the four RULE-DECIDABLE-NOW fixtures as decidable evidence.
- Next move: flow-conservation (#2) first; runway-inequality (#3) near-free after; TF-11 (#1) awaits a published adversary class; TF-3 (#4) is the heavy survey.

### <a id="context-ctx-econ-cav2-return"></a>CTX-ECON-CAV2-RETURN — Reciprocal return to CyberAlchemy v2

- Stage: `review-audit` · Gate: `flag`
- Purpose: offer reusable method/discipline back to CAV2 as candidate evidence (ER-D20 / REC-C13), transferring no authority.
- Next move: await CAV2 owner review of the [load-bearing-term-tracking handoff](/home/vrondelli/projects/domainspec-core/cyberAlchemy-v2/authority/imports/resonantos-economy-research/2026-06-28-load-bearing-term-tracking-handoff.md).

## Decisions

| ID | Question | Selected | Status |
| --- | --- | --- | --- |
| DEC-ECON-STANDALONE-001 | Standalone repo with CAV2 as method authority only? | standalone-repository | settled |
| DEC-ECON-LBT-SCOPE-001 | REC-C14 trigger scope? | formal-and-claims | settled |
| DEC-ECON-LEDGER-LOCATION-001 | Where does the work ledger live? | in-repo-craft | settled |
| DEC-ECON-SWEEP-INLINE-001 | Sweep via dispatch or inline? | inline-candidate-defs | settled |

## Blockers & Enablers

- <a id="blocker-blk-econ-costly-identity-001"></a>**BLK-ECON-COSTLY-IDENTITY-001** (active) — per-identity reward surfaces undefined until a costly-identity primitive lands (ER-D22 / Douceur 2002). Route: research-evidence-harness.
- <a id="blocker-blk-econ-phase2-001"></a>**BLK-ECON-PHASE2-001** (active) — Phase 2 financial mechanisms blocked (ER-D12) until external readiness gates. Route: decision-gate.
- <a id="blocker-blk-econ-candidate-grounding-001"></a>**BLK-ECON-CANDIDATE-GROUNDING-001** (active) — candidate terms await grounding: treasury size (D24), epoch basis (D25), emission schedule (D26), runway calibration (D27), TF-11 adversary class + CI (D28).
- <a id="blocker-blk-econ-whitepaper-snapshot-001"></a>**BLK-ECON-WHITEPAPER-SNAPSHOT-001** (active) — whitepaper un-snapshotted; gated mappings stay analogy until ledgered.
- **ENA-ECON-LBT-ADAPTER-001** (active) — the REC-C14 adapter enables deterministic load-bearing enforcement.

## Gaps

- <a id="gap-gap-econ-adapter-compound-001"></a>**GAP-ECON-ADAPTER-COMPOUND-001** (flag) — adapter misses compound identifiers (self_report near-miss); refine matching.
- <a id="gap-gap-econ-rex-artifact-001"></a>**GAP-ECON-REX-ARTIFACT-001** (flag) — `$REX`/`$REX-COM` un-sourced symbol in the socio tower; route to the tower owner.
- <a id="gap-gap-econ-readme-guide-001"></a>**GAP-ECON-README-GUIDE-001** (flag) — README/GUIDE not yet updated with the load-bearing-term discipline.
