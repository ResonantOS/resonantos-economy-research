# Definition Drift Audit

Status: active audit
Canonical source: [DEFINITIONS.md](DEFINITIONS.md)
Audit date: 2026-06-27
Promotion scope: local-research-only

## Summary

- Definition voices complete: yes for ER-D1 through ER-D20.
- Index synced: yes, [DEFINITIONS-INDEX.md](DEFINITIONS-INDEX.md).
- Drift found: yes, nonblocking narrative drift only.
- Undefined critical terms from the CAv2/Lean and authority/lifecycle harvest
  findings: 0 after this pass.
- Conflicting consumers: 0 blocker conflicts found.

## Nonblocking Drift

| Surface | Drift | Recommended action |
| --- | --- | --- |
| [glossary/GLOSSARY.md](../glossary/GLOSSARY.md) | Older local glossary terms cover only the pre-harvest vocabulary and still use older phrasing such as `Credit Seed`. | In a glossary pass, align glossary entries with ER-D IDs and keep glossary non-canonical. |
| [levels/L2-closure-plan.md](../levels/L2-closure-plan.md) | Resolved during this pass: the first recommended lane now points to the development handoff and key ER-D definition IDs. | Keep future fixture requests linked to the same ER-D definitions. |
| [claims/SOURCE-CLAIM-LEDGER.md](../claims/SOURCE-CLAIM-LEDGER.md) | Claim records should carry `claim_status`, `witness_source`, `assumptions`, and `open_residue` fields when next revised. | Apply ER-D15 during the next claim-ledger update. |
| [.arcanum/inventory/entries/cav2-lean-findings.md](../.arcanum/inventory/entries/cav2-lean-findings.md) | Existing inventory entry summarizes findings but does not expose the refined design/plan mapping. | Add a separate development-pack inventory entry rather than overloading the findings entry. |
| [harvest/cav2-authority-lifecycle/selector-map.md](../harvest/cav2-authority-lifecycle/selector-map.md) | The synthesized map has pre-review `ADD` labels over unsnapshotted CAv2 paths. | Treat [findings.md](../harvest/cav2-authority-lifecycle/findings.md) as the accepted verdict source; use ER-D18/ER-D19/ER-D20 for post-review wording. |

## Authority Check

The new definitions preserve the harvest demotion:

- no solved or validated economy mechanism;
- no token, payout, bounty, governance, launch, or implementation readiness;
- no authority from score, credit, attention, review, or inventory presence;
- no public lineage reuse without privacy/redaction policy;
- no anti-gaming claim without failure fixtures and witnesses.

## Follow-Ups

1. Update glossary entries only when a reader-facing glossary pass is requested.
2. Preserve ER-D references in the first evidence-harness fixture request.
3. Use ER-D15 and ER-D18 fields for future claim-ledger and inventory entries.
4. Rename implementation-facing planning to ER-D19 implementation boundary
   planning until owner gates and validation reports exist.
5. Use ER-D20 for any CAv2 return package; do not allow cyclic citation
   promotion.
6. Keep the Phase 2 blocker register as a blocker register, not an unlock list.
