# Decision: Localize Method Authority

Status: pass
Owner route: decision-gate + constitution-governance
Timestamp: 2026-06-29
Approved: 2026-06-29 (owner)
Supersedes: [2026-06-26 standalone repository](2026-06-26-standalone-repository.md), the "Authority Boundary" clause authorizing "CAV2 as external method authority for source posture and promotion discipline"

## Why This Decision Exists

This session reframed the repository so that **method authority** (source posture,
promotion gates, non-collapse rules, authority separation) is owned **locally** by
the repository's own
[research-credibility constitution](../constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
and [authority model](../AUTHORITY-MODEL.md), rather than by CyberAlchemy v2. That
reframe was applied to `README.md`, `GUIDE.md`, and `AGENTS.md` as prose.

The onboarding-docs review (`2026-06-28-onboarding-docs-review`, finding **MI4**)
flagged that the prose rested on no decision: the prior decision record still
authorized "CAV2 as external method authority", and `AGENTS.md` requires that
authority moves follow the promotion/decision route, "not fresh prose." This
decision closes that gap through the decision route, so the framing is backed by a
record rather than by prose alone.

## Decision

Method authority for this standalone repository is transferred from CyberAlchemy v2
to the repository-local research-credibility constitution + authority model:

1. Method authority (source posture, promotion discipline, non-collapse rules,
   authority separation) is owned by the local constitution + authority model.
2. CyberAlchemy v2 and DomainSpec Lean are reclassified from *method/formalization
   authority* to **harvested external precedent (supporting source)**, kept as
   record (the harvest folders, source records, and claims are unchanged).
3. The "Authority Boundary" clause of the 2026-06-26 decision authorizing "CAV2 as
   external method authority" is **superseded** by this decision.

## Rationale

The repository is now standalone, and its own constitution already encodes the
research-process rules (REC-C1…C14). Naming an external framework as the *authority*
for those rules created a provenance dependency the repo no longer needs and a
public/private-boundary risk (the upstream is private). Localizing method authority
makes the framing docs and the authority spine consistent, while preserving
CAV2/DomainSpec as cited precedent.

## Authority Boundary

This decision relocates *method authority* only. It does **not** authorize, and
nothing here promotes: token policy, bounty policy, payout mechanics, governance
weights, ResonantDAO official claims beyond the cited whitepaper, Phase 2 launch
readiness, or implementation work. It transfers no economy-mechanism authority.

## Result

Decision gate result: **PASS** (owner-approved 2026-06-29). The README / GUIDE /
AGENTS "local method authority" framing is now backed by this decision, not by
prose alone. The 2026-06-26 decision's CAV2-method-authority clause is superseded;
that file is left intact as a historical record with a superseded marker. No
economy-mechanism, token, bounty, governance, or launch authority is changed.
