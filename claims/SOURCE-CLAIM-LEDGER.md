# Source Claim Ledger

Target: ResonantOS economy resilience
Status: active
Promotion scope: local-research-only

| ID | Claim | Source kind | Evidence | Local reading | Status |
| --- | --- | --- | --- | --- | --- |
| C1 | ResonantDAO's Phase 1 is a contribution economy before algorithmic financial token launch. | primary-source | `https://resonantdao.com/whitepaper/`, `3. Phase 1`. | Start with contribution and reputation witnesses, not yield design. | accepted |
| C2 | The current economy is criticized for rewarding capital more reliably than contribution. | primary-source | `https://resonantdao.com/whitepaper/`, `1. Why ResonantDAO Exists`. | The economy design has an explicit anti-capital-control posture. | accepted |
| C3 | Governance influence is intended to depend on contextual signals, not one-token-one-vote. | primary-source | `https://resonantdao.com/whitepaper/`, `10. Governance`. | Governance needs signal separation and capture checks. | accepted |
| C4 | `$RCT` is non-transferable and used for contribution reputation, governance influence, eligibility, and future economic participation. | primary-source | `https://resonantdao.com/whitepaper/`, `6. $RCT`. | Non-transferability is necessary but insufficient. It does not prove non-gameability. | accepted |
| C5 | `$RES` is transferable, treasury-owned at launch, internal first, with external liquidity considered later. | primary-source | `https://resonantdao.com/whitepaper/`, `5. $RES`. | `$RES` is the first token-surface needing spend, emission, abuse, and liquidity gates. | accepted |
| C6 | Phase 2 financial mechanisms should wait for readiness and learn from prior algorithmic token failures. | primary-source | `https://resonantdao.com/whitepaper/`, `16. Risk, Research, and Launch Discipline`. | Failure-precedent research is required before Phase 2 design is credible. | accepted |
| C7 | Evidence Exchange separates observed reuse, reviewed credit, and owner-routed authority in its local product-research framing. | method-authority / local-inference | `sources/local-snapshots/cav2/evidence-exchange/proposal-blueprint.md:21-37`; `sources/local-snapshots/cav2/authority/AUTHORITY-MODEL.md:23-46`, `:122-133`; `harvest/cav2-lean/findings.md`. | Reuse as candidate control fields: signal, credit, reward, authority. Do not promote it as an economy invariant without a workflow witness. | candidate |
| C8 | DomainSpec Lean formalization contributes separate audit-axis discipline and claim-status discipline. | formalization-precedent / analogy | `sources/local-snapshots/domainspec-lean/FRAMEWORK-IMPLICATIONS.md:25-45`, `:117-123`; `sources/local-snapshots/domainspec-lean/GLOSSARY.md:356-406`; `harvest/cav2-lean/findings.md`. | Economy design should not collapse mechanism form, behavior, temporal/gaming dynamics, and governance self-reference into one score. This is audit discipline, not proof of economy safety. | candidate |
| C9 | The CAv2/Lean harvest accepted research controls, not mechanisms. | synthesis | `harvest/cav2-lean/findings.md`; `harvest/cav2-lean/selector-map.md`; `harvest/cav2-lean/reviewer-positions.md`. | Use the harvested controls to guide future source cards, claims, residue, and fixtures. | accepted-local-research |
| C10 | The CAv2 authority/lifecycle harvest strengthens boundary and scaffold design, but does not validate the economy or prove implementation readiness. | synthesis / method-authority | `harvest/cav2-authority-lifecycle/findings.md`; `sources/local-snapshots/cav2/validation/authority-kind-closure-validator-SPEC.md`; `sources/local-snapshots/cav2/implementation/README.md`; `sources/local-snapshots/cav2/authority/imports/resonantos-economy-research/README.md`. | Use as local field/status discipline, source expansion closure, implementation-boundary planning, and CAv2 return-candidate boundary. Do not use as validator proof, policy, authority, reciprocal promotion, or implementation readiness. | accepted-local-research |

## Open Claim Residue

| ID | Question | Blocking artifact | Next route |
| --- | --- | --- | --- |
| R1 | What concrete signals should count toward `$RCT` without creating bounty retrieval behavior? | No confirmed related-source synthesis yet. | Run research fan-out. |
| R2 | What bounded randomness, if any, helps resist gaming without destroying perceived fairness? | No formal mechanism witness yet. | Formal-mechanisms subtower. |
| R3 | Which DAO and crypto failures are most relevant to this exact whitepaper design? | Failed-precedent corpus not collected. | Failed DAO / crypto subtower. |
| R4 | What minimal evidence must exist before Phase 2 financial-token research becomes more than speculative design? | No risk-threshold matrix yet. | Closure plan and evidence-harness handoff. |
| R5 | Can non-monetary credit and review attention motivate contribution without becoming de facto authority or reward entitlement? | No socioeconomic-behavior evidence or attention-capture witness yet. | Socioeconomic-behavior subtower plus attention-route audit. |
| R6 | What receipt shape can capture one host-observed contribution without erasing invisible work or creating privacy pressure? | `ObservedUseReceipt` is a candidate only; no promoted schema or redacted export fixture exists. | Closure plan fixture plus privacy/redaction review. |
| R7 | Which anti-gaming fixtures should precede any credit, reputation, bounty, or scoring mechanism? | Harvest produced fixture candidates, not solved anti-gaming. | Formal-mechanisms and failed-DAO subtowers. |
| R8 | What fixture package is sufficient to move from implementation-boundary planning to a task-session? | `development/implementation-boundary-plan.md` is `research-pass` as a boundary, but fixture contracts are still `research-flag`. | Research-evidence-harness fixture contract before task-session. |
| R9 | Can this repo return candidate owned-build evidence to CAv2 without reciprocal authority laundering? | ER-D20 requires a manifest, blocked uses, public/private scrub status, unresolved findings, and independent CAv2 owner review. | Draft a deferred CAv2 return package and route to CAv2 owner review. |
