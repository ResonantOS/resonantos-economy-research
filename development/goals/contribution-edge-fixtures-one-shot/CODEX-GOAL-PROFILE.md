# Codex Goal Profile: Contribution-Edge Fixtures One Shot

Status: ready
Selected unit: `CEF-ONE-SHOT` = `SWU-CEF-001` through `SWU-CEF-005`
Source work-pack:
[development/contribution-edge-fixture-implementation-plan.md](../../contribution-edge-fixture-implementation-plan.md)
Handoff pack:
[development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md](../../refinement-runs/20260627T041500Z-cav2-fixture-full-refine/RESULT.md)
Structured index:
[development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/evidence-index.json](../../refinement-runs/20260627T041500Z-cav2-fixture-full-refine/evidence-index.json)

## Readiness

Pass.

Dependencies satisfied:

- full Refine route passed dispatch-spec validation;
- handoff evidence index status is `pass`;
- implementation plan names exact files, fields, SWUs, stop conditions, and
  completion criteria;
- write scope is bounded to fixture materialization and local research links;
- blocked claims are explicit.

Strict coverage: pass.

Fallback exploration: named gaps only.

Extra-source reporting: required.

## Native Goal

See [00-goal-command.md](00-goal-command.md).

## Verification Surface

Run after implementation:

```bash
test -f validation/contribution-edge-fixtures/README.md
test -f validation/contribution-edge-fixtures/SCHEMA.md
test -f validation/contribution-edge-fixtures/MATRIX.md
test -f validation/contribution-edge-fixtures/TYPED-NEGATIVES.md
test -f validation/contribution-edge-fixtures/IMPLEMENTATION-CHECKLIST.md
test -f validation/contribution-edge-fixtures/fixture-positive-observed-use.md
test -f validation/contribution-edge-fixtures/fixture-invisible-work-exclusion.md
test -f validation/contribution-edge-fixtures/fixture-authority-handoff-no-effect.md
test -f validation/contribution-edge-fixtures/fixture-attention-capture.md
test -f validation/contribution-edge-fixtures/fixture-reviewer-bottleneck.md
test -f validation/contribution-edge-fixtures/fixture-appeal-recusal.md
```

```bash
node - <<'NODE'
const fs = require('fs');
const path = 'validation/contribution-edge-fixtures';
const fixtures = fs.readdirSync(path).filter((f) => f.startsWith('fixture-'));
const required = [
  'fixture_id:',
  'local_research_status:',
  'source_posture:',
  'source_refs:',
  'input_event:',
  'observed_signal:',
  'review_action:',
  'expected_credit_state:',
  'forbidden_state_mutations:',
  'reward_effect: none',
  'authority_effect: none',
  'policy_effect: none',
  'governance_effect: none',
  'payout_effect: none',
  'implementation_status: fixture_only',
  'typed_negative:',
  'deterministic_check:',
  'review_check:',
  'owner_route:',
  'blocked_escalation:',
  'open_residue:'
];
const bad = [];
for (const file of fixtures) {
  const text = fs.readFileSync(`${path}/${file}`, 'utf8');
  for (const field of required) {
    if (!text.includes(field)) bad.push(`${file} missing ${field}`);
  }
}
if (bad.length) {
  console.error(bad.join('\n'));
  process.exit(1);
}
console.log(`fixture contract ok (${fixtures.length} files)`);
NODE
```

```bash
rg -n "Signal is not credit|Credit is not reward|Credit is not authority|Attention is not authority|Reviewer route is governable|Invisible work is not erased" validation/contribution-edge-fixtures/MATRIX.md
rg -n "observed_signal -> reviewed_credit|reviewed_credit -> reward_effect|reviewed_credit -> authority_effect|attention_route -> governance_effect|fixture_pass -> economy_validated|fixture_package -> implementation_readiness|reviewer_status -> standing_authority" validation/contribution-edge-fixtures/TYPED-NEGATIVES.md
rg -n "contribution-edge-fixtures" validation/README.md
node -e "const fs=require('fs'); JSON.parse(fs.readFileSync('development/refinement-runs/20260627T041500Z-cav2-fixture-full-refine/evidence-index.json','utf8')); console.log('handoff index ok')"
```

Risk scan:

```bash
rg -n "economy validated|economy validation|implementation readiness|token policy|bounty policy|governance rule|payout rule|launch readiness|authority promotion|anti-gaming proof" validation/contribution-edge-fixtures validation/README.md
```

The risk scan may return non-goal or blocked-use text only.

## Boundaries

Allowed write scope:

- `validation/contribution-edge-fixtures/`
- `validation/README.md`
- `development/implementation-boundary-plan.md` only for a link/status note
- `.arcanum/inventory/` only for a post-materialization lookup entry

Blocked write scope:

- token, bounty, governance, payout, launch, product, or promotion surfaces;
- source snapshots and source records unless a separate source route is opened;
- upstream CAv2 or DomainSpec repositories;
- mechanism code, scoring rules, reward allocation, governance weighting, or
  validator-proof claims.

## Stop Condition

Stop and report blocked if:

- the handoff pack is missing or no longer passes;
- the fixture package would require policy, mechanism, payout, governance,
  launch, or authority work;
- a private/public scrub decision is needed before a fixture can be completed;
- verification cannot pass inside the allowed write scope;
- broad research is needed beyond a named gap.
