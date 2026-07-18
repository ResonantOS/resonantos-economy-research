# Invoke Refresh Report — Time Capsule Live Intake

## Result

- Mode: `refresh`
- Mutation mode: `proposal-only`
- Phase status: `flag`
- Evidence date: 2026-07-17
- Source signals: 10
- Target artifacts: 11
- Applied changes: none
- Next route: `invoke plan` for `Live Intake Plan V2`

The refresh itself is complete. It is flagged because the existing
high-complexity plan has material drift that requires plan-authoring judgment,
and human/live proof gates remain open.

## Source Signals

### RS-01 — L0 V2 evidence added

- Type: `evidence_added`
- Source: two-hour Task Session closeout and V2 browser evidence
- Claim: the non-collecting public-at-opening form passes its machine-checkable
  frontend boundary, including 32/32 fixtures, keyboard flow and responsive
  checks.
- Confidence: high
- Mutation safety: safe for status proposal

### RS-02 — L0 execution status changed

- Type: `status_changed`
- Source: completed SWU-FORM-001 through SWU-FORM-VERIFY-004 receipts
- Claim: the two-hour pack is no longer an execution handoff; it is a completed
  historical L0 pack.
- Confidence: high
- Mutation safety: safe

### RS-03 — L0 next-route drift

- Type: `artifact_drift`
- Source: two-hour `INVOKE-RESULT.md` compared with Task Session closeout
- Claim: its next route still points to `SWU-FORM-001`, which is already
  complete.
- Confidence: high
- Mutation safety: safe

### RS-04 — Human evidence remains open

- Type: `no_op`
- Source: current `ACCESS-MATRIX.md`, old SWU-LIR-002 report and V2 closeout
- Claim: machine evidence improved from 29/29 V1 to 32/32 V2, but no authorized
  screen-reader, native-IME or five-person retell evidence was produced.
- Confidence: high
- Mutation safety: safe; preserve blocker

### RS-05 — Human matrix drift

- Type: `artifact_drift`
- Source: V1 `ACCESS-MATRIX.md` compared with Fixture V2
- Claim: the matrix still tests one-word and sealed-disabled consequences, while
  V2 uses short phrases, fixed public-at-opening visibility and five critical
  retell prompts.
- Confidence: high
- Mutation safety: needs review before applying

### RS-06 — Stack and intake decisions added

- Type: `evidence_added`
- Source: D-02 through D-06
- Claim: private invite admission, Node/TypeScript plus SQLite, editable
  confirmed versions, live public feed/moderation and post-close retention now
  have explicit selected decisions.
- Confidence: high
- Mutation safety: safe as plan input; not implementation proof

### RS-07 — Initial private-return branch retired

- Type: `route_changed`
- Source: D-15
- Claim: the initial capsule is public at opening only. Participant private
  return, recovery keys and the second encryption layer are deferred future
  features, not an initial L3 branch.
- Confidence: high
- Mutation safety: needs revised plan

### RS-08 — Closing/recovery route changed

- Type: `route_changed`
- Source: D-11, D-12, D-13, D-14 and D-16
- Claim: the initial release now needs public-at-opening tlock bundles, Arweave
  recovery-complete publication, 3-of-5 emergency recovery, a direct Bitcoin
  fingerprint commitment and the commitment-containing block as the ritual
  number signal.
- Confidence: high
- Mutation safety: needs revised plan and proof gates

### RS-09 — High-complexity plan drift

- Type: `artifact_drift`
- Source: existing LIR work-pack/execution pack/layering compared with RS-06–08
- Claim: the plan correctly preserves static/synthetic/public boundaries, but
  its stack decision, V1 form contract, optional private/sealed L3 branch and
  closing architecture no longer match current decisions.
- Confidence: high
- Mutation safety: blocked for broad in-place patch; use Invoke Plan

### RS-10 — Next owner changed

- Type: `route_changed`
- Source: RS-01–09 plus Distill validation
- Claim: the next safe owner is Invoke Plan, not a backend Task Session. The
  changed high-complexity graph needs revised layering, waves, detailed tasks,
  atomic SWUs and validation before execution.
- Confidence: high
- Mutation safety: safe

## Delta Summary

| Delta class | Count | Effect |
| --- | ---: | --- |
| evidence added | 2 | records L0 proof and selected product/stack decisions |
| status changed | 1 | closes the two-hour pack as historical L0 execution |
| artifact drift | 3 | reopens stale route, human matrix and live plan |
| route changed | 3 | removes private return, adds closing architecture and changes owner |
| no-op | 1 | preserves the human evidence blocker |

## Proposed Changes

1. Close the two-hour Invoke pack as completed L0 and replace its stale
   `SWU-FORM-001` route with a handle to this refresh and `invoke plan`.
2. Update the live-intake plan's L0 evidence projection to Fixture V2, 32/32
   machine pass, while preserving manual screen-reader/native-IME/retell status
   as `flag`.
3. Regenerate `ACCESS-MATRIX.md` for short phrases, fixed public-at-opening
   visibility and the current five critical retell prompts.
4. Carry D-02–D-06 into the revised plan as selected decisions with proof still
   open; do not promote choice into implementation evidence.
5. Remove the initial private-return/sealed-live implementation branch from the
   release graph and retain it as a separately governed deferred feature.
6. Replace the former L3 branch with public-at-opening close/recovery work for
   tlock/drand, Arweave plus mirrors, emergency 3-of-5, Bitcoin commitment and
   ritual-number derivation.
7. Author `Live Intake Plan V2` through Invoke Plan with revised L0–L3
   layering, execution waves, detailed task contracts, atomic SWUs, exact
   validation and a new Distill/dispatch pass.
8. Update the Inventory entry only after the revised plan exists and validates.

## Proposed Plan Shape

This is an input to Invoke Plan, not an executable work-pack:

1. L0 closure and current manual-evidence track.
2. Public-at-opening schema, lifecycle, gate and negative-fixture freeze.
3. Synthetic Node/SQLite command/version/idempotency kernel.
4. Fenced close, allowlist projections, restore and migration proof.
5. Public-live owner package, moderation/incident/accessibility rehearsal.
6. Public-at-opening bundle, operatorless recovery and emergency recovery proof.
7. Bitcoin close commitment, ritual-number derivation and final readiness audit.

The first candidate executable SWU is the schema/gate/negative-fixture freeze
with invented data only. Invoke Plan must decide whether it can proceed in
parallel with the manual comprehension track without weakening the public-live
gate.

## Applied Changes

None. Proposal-only mode preserves the completed L0 artifacts, historical
Refine result, current plan, access matrix and Inventory entry unchanged.

## Skipped Changes

- No backend, schema, database, API or deployment work ran.
- No real invitation, phrase, moderation record, key or credential was created.
- No blocker was marked resolved solely because a decision was selected.
- No private-return work was deleted from history; it is proposed as deferred.
- No Inventory promotion or canonical definition update occurred.

## Validation

- Context Builder: 9/9 obligations covered from 12 selected sources.
- Inventory: machine index parsed first; one relevant entry found.
- Interview gap-check: no question needed for proposal-only scope.
- Dispatch technique trace: pass; full dispatch deferred to revised plan.
- Distill Standard: pass for refresh; execution route remains plan-gated.
- JSON parse and source-path validation: required before close.

## Unresolved Gaps

- Manual screen-reader, native-IME, RTL pronunciation and five-person retell
  evidence remain unrun.
- The revised dependency graph has not yet decided whether synthetic schema work
  may run beside, rather than after, manual comprehension evidence.
- Node/SQLite remains a selected decision without implementation or recovery
  evidence.
- Public-live admission, moderation, incident, retention, operations and
  successor owners still need signed evidence.
- tlock/drand, Arweave, 3-of-5, Bitcoin and complete 2/5/10-year recovery proofs
  remain unrun.

## Next Route

Run `invoke plan` against this refresh report and the selected source handles to
author `Live Intake Plan V2`. Do not route directly to Task Session until that
plan validates one first SWU.
