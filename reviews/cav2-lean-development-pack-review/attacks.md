# CAv2/Lean Development Pack Review Attacks

Dispatch: `2026-06-27-cav2-lean-development-pack-review`
Dispatch type: review
Status: raw attack and verification trail
Promotion scope: local-research-only

This file preserves the attacker, robot-talks, synthesizer, and verifier
positions used to produce [findings.md](findings.md). It is evidence for change
requests, not validation proof, policy authority, governance authority, payout
readiness, launch readiness, anti-gaming proof, or implementation readiness.

## Gate

- Check-tension checker: PASS.
- Check-tension reviewer: PASS.
- Human confirmation: confirmed.
- Ledger dispatch row: registered.

## Target Corpus

- [development/cav2-lean-findings-development-pack.md](../../development/cav2-lean-findings-development-pack.md)
- [definitions/DEFINITIONS.md](../../definitions/DEFINITIONS.md)
- [definitions/DEFINITIONS-INDEX.md](../../definitions/DEFINITIONS-INDEX.md)
- [definitions/DEFINITION-DRIFT-AUDIT.md](../../definitions/DEFINITION-DRIFT-AUDIT.md)
- [development/constitution-pack.md](../../development/constitution-pack.md)
- [authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md](../../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md)
- [levels/L2-closure-plan.md](../../levels/L2-closure-plan.md)

## Attacker Initial Returns

### Quine, Willard Van Orman

Angle: definitional/governance attack.

Initial position:

- The core frame is sound: it repeatedly says research scaffold, not policy,
  payout, proof, or launch readiness.
- The source harvest is stricter than the development pack; some safety fields
  become prose rather than auditable contract.
- Main risk: `promotion`, `pass`, `validation`, and `keep below authority`
  language can become hidden authority if reused casually.
- No CRITICAL finding, but several MAJOR fixes are needed before the package can
  be called a strong prerequisite contract.

Findings:

| Finding | Severity | Evidence | Proposed fix |
| --- | --- | --- | --- |
| REC-C11 field gap | MAJOR | [REC-C11](../../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md), [development table](../../development/cav2-lean-findings-development-pack.md) | Add explicit REC-C11 fields per finding, or make each definition carry a closed contract block. |
| Promotion-boundary labels ambiguous | MAJOR | [DEFINITIONS.md](../../definitions/DEFINITIONS.md), [DEFINITIONS-INDEX.md](../../definitions/DEFINITIONS-INDEX.md) | Define a closed enum for promotion-boundary labels and map it to the promotion policy. |
| Scaffold acceptance and validation language blur | MAJOR | [constitution-pack.md](../../development/constitution-pack.md), [development pack](../../development/cav2-lean-findings-development-pack.md), [drift audit](../../definitions/DEFINITION-DRIFT-AUDIT.md) | Separate scaffold accepted from validated; add structural REC-C11 checklist result. |
| Self-enforcing wording | MINOR | [development pack](../../development/cav2-lean-findings-development-pack.md) | Demote "keeps below policy authority" to review-enforced language. |
| L2 source posture wording | MINOR | [L2 closure plan](../../levels/L2-closure-plan.md) | Cite the whitepaper/ledger support or demote the claim. |

Final position:

- Sound as a local research scaffold: yes, with caveats.
- Sound as a prerequisite contract for research validity: not yet; REC-C11 needs
  explicit, checkable fields.
- It does not currently become policy authority, but promotion-boundary and
  pass/validated vocabulary are weak joints.

### Popper, Karl

Angle: falsification/vacuity attack.

Initial position:

- The corpus is correctly demoted: it repeatedly says local-research-only, not
  proof, not policy, not payout, not authority.
- The design is not yet a strong validation scaffold. It is better described as
  a prerequisite contract and fixture backlog.
- The main weakness is vacuity: several validators can pass by confirming good
  prose, without typed negative fixtures or falsifiable pass/flag/block
  behavior.

Findings:

| Finding | Severity | Evidence | Proposed fix |
| --- | --- | --- | --- |
| Review-only validators are too weak | MAJOR | [constitution-pack validators](../../development/constitution-pack.md) | Replace review-only validators with a rule-by-rule falsification matrix. |
| Pass language too broad | MAJOR | [constitution-pack pass/flag/block](../../development/constitution-pack.md) | Make pass mean scaffold readiness only; block if no fixture contract exists. |
| Development status wording too strong | MINOR | [development pack](../../development/cav2-lean-findings-development-pack.md) | Demote to fixture-design readiness or add pass-basis table. |
| Thread A fixture package underspecified | MAJOR | [Thread A](../../development/cav2-lean-findings-development-pack.md) | Define scenario ID, input event, review action, expected credit state, forbidden mutations, typed negative, and harness assertion. |
| Failure families lack typed negatives | MAJOR | [Thread B](../../development/cav2-lean-findings-development-pack.md) | Name one typed negative and expected pass/flag/block per family. |
| Named checks lack falsifiable criteria | MAJOR | [definitions](../../definitions/DEFINITIONS.md) | Link checks to fixture criteria and evidence requirements. |
| L2 verdict matrix lacks schema | MAJOR | [L2 closure plan](../../levels/L2-closure-plan.md) | Define verdicts, falsifiers, source evidence, fixture requirement, and vacuity. |
| L2 whitepaper alignment needs citation | MINOR | [L2 closure plan](../../levels/L2-closure-plan.md) | Cite directly or demote. |
| Drift audit needs method/scope | MINOR | [drift audit](../../definitions/DEFINITION-DRIFT-AUDIT.md) | Add searched files, commands/patterns, and consumer scope. |
| Index needs legend | MINOR | [definitions index](../../definitions/DEFINITIONS-INDEX.md) | Clarify promotion-boundary labels are repo-local, non-policy statuses. |

Final position:

- The package is sound as a demotion and prerequisite contract.
- It is not yet sound as a validation scaffold in the strict falsification
  sense.
- The next hardening step is typed negatives, fixture schemas, and
  rule-specific pass/flag/block assertions.

### Meadows, Donella H.

Angle: systems/feedback-abuse attack.

Initial position:

- The package is broadly sound as a validation scaffold candidate and local
  prerequisite contract.
- It mostly avoids claiming validation proof, policy authority, payout
  readiness, or solved anti-gaming.
- The main weakness is systems-level: attention routing and review sequencing
  can create de facto authority before any formal authority field changes.

Findings:

| Finding | Severity | Evidence | Proposed fix |
| --- | --- | --- | --- |
| Attention-capture check occurs too late | MAJOR | [first lane](../../development/cav2-lean-findings-development-pack.md) | Move attention-capture, reviewer-bottleneck, and host-surface checks before or alongside review/credit creation. |
| Thread A done criteria too weak | MAJOR | [Thread A](../../development/cav2-lean-findings-development-pack.md) | Require no review-queue capture, no incumbency reinforcement, no reciprocal-review loop, and no invisible-work suppression. |
| Thread B capture subset should gate Thread A | MAJOR | [recommended work units](../../development/cav2-lean-findings-development-pack.md) | Make reviewer bottleneck, incumbency, collusion, and attention-loop fixtures prerequisites for closing Thread A. |
| REC-C7 omitted from active pack | MAJOR | [constitution pack](../../development/constitution-pack.md) | Add REC-C7 No Scalar Reputation Collapse. |
| Promotion-candidate labels can drift | MINOR | [definitions](../../definitions/DEFINITIONS.md) | Rename to local-definition or typed local status labels. |
| "Right witness shape" too strong | MINOR | [L2 closure plan](../../levels/L2-closure-plan.md) | Demote to candidate witness shape. |

Final position:

- Keep the package, but mark it FIX before relying on it as the first-lane
  contract.
- The risky inflation is not "we solved the economy"; it is "we can safely
  route attention because authority fields stay unchanged."

### Ostrom, Elinor

Angle: institutional/operability attack.

Initial position:

- The package is sound as a demotion scaffold.
- It is not yet executable as an institutional prerequisite contract.
- The major weakness is hidden governance: reviewer roles, appeal paths, owner
  routes, participation boundaries, and random-audit rules are gestured at but
  not operationally specified.

Findings:

| Finding | Severity | Evidence | Proposed fix |
| --- | --- | --- | --- |
| Review-governance fixture missing | MAJOR | [first lane](../../development/cav2-lean-findings-development-pack.md), [ER-D7](../../definitions/DEFINITIONS.md) | Add reviewer eligibility, selection, recusal, criteria, appeal, revision, expiry, and participation boundaries. |
| Owner-route table missing | MAJOR | [ER-D9](../../definitions/DEFINITIONS.md), [REC-C4](../../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md) | Add owner-route table; unknown or external owner routes block. |
| REC-C11 not auditable in pack | MAJOR | [constitution pack](../../development/constitution-pack.md), [development table](../../development/cav2-lean-findings-development-pack.md) | Add explicit REC-C11 columns or contract block. |
| Drift audit overstates undefined-term closure | MAJOR | [drift audit](../../definitions/DEFINITION-DRIFT-AUDIT.md), [ER-D7](../../definitions/DEFINITIONS.md) | Demote to "0 candidate-control terms undefined"; add institutional execution terms as open drift. |
| Random audit needs REC-C6 or separate package | MAJOR | [L2 closure plan](../../levels/L2-closure-plan.md), [REC-C6](../../authority/constitutions/RESEARCH-CREDIBILITY-CONSTITUTION.md) | Add REC-C6 to active pack or move random audit out until it names job, non-randomized surface, fairness witness, and abuse audit. |
| Pass/use-now wording can confuse scaffold with validation | MINOR | [development pack](../../development/cav2-lean-findings-development-pack.md) | Rename to accepted scaffold and what this scaffold offers now. |

Final position:

- Keep the package, but do not treat it as an executable prerequisite contract
  yet.
- Before fixture work proceeds, add reviewer role, appeal/revision path,
  owner-route taxonomy, participation boundary, and randomness job criteria.

## Robot-Talks Final Positions

### Quine

- The package is a good demotion scaffold, but not yet a strong validation
  scaffold or institutional prerequisite contract.
- Attention routing, reviewer choice, review sequencing, and host-surface
  selection are authority-bearing pressure surfaces unless constrained.
- The missing object is an executable boundary contract: who reviews, criteria,
  recusal, appeal, expiry, typed negatives, and owner route.
- Thread A can remain first, but it must include a minimal capture/collusion and
  reviewer-bottleneck subset before any reviewed-credit result is treated as a
  valid witness.

### Popper

- The package is sound as a demotion scaffold, but not validation proof, policy
  authority, or executable institutional prerequisite.
- The core falsifiability gap is that REC-C11 fields, promotion labels, fixture
  contracts, and institutional review rules are not closed enough to fail bad
  cases.
- Attention routing is a validation hazard, not just a future governance hazard.
- A smaller capture/collusion/reviewer-bottleneck subset should precede or
  accompany Thread A; the full failure corpus can remain staged.

### Meadows

- The package is well-demoted, but should not yet call itself a strong
  validation scaffold.
- Review action is not a neutral step; reviewer selection, recusal, appeal,
  expiry, and participation boundaries are part of the feedback system.
- Loose status words can become proxy authority even when the text says they are
  not authority.
- REC-C11 explicitness is load-bearing because later agents may infer safety
  from the pack's existence.

### Ostrom

- The package is sound as a local research demotion scaffold, but not yet an
  executable validation scaffold or prerequisite contract.
- `pass`, `validated`, `promotion-candidate`, and "keeps below policy
  authority" language can become hidden authority unless scaffold acceptance is
  separated from validation outcome.
- Attention routing and review sequencing are institutional operations, not
  neutral steps.
- A future operator still has to invent reviewer eligibility, owner routes,
  appeal/revision paths, participation boundaries, and conflict handling.

## Synthesizer Return

Senge verdict: FIX.

The package is worth keeping as a local demotion scaffold. It repeatedly blocks
token, payout, bounty, governance, launch, implementation, and anti-gaming-proof
claims. It must not be treated as validation proof, policy authority, or an
executable prerequisite for research validity. The fix is to make the scaffold
mechanically checkable, close its status vocabulary, and add institutional
review controls before later work can rely on it.

## Verifier Returns

### Fritz, Tobias

- Final verifier verdict: FIX.
- Senge's synthesis mostly survives.
- Wording needs demotion: the package does not claim to be validation proof or
  policy authority; it explicitly says it is not.
- Accurate critique: it is only a local demotion/development scaffold and is not
  yet mechanically strong enough to become validation evidence or an executable
  governance/evidence prerequisite.
- Local markdown link/anchor check over the target files found no broken local
  file or markdown-anchor links.

Scope corrections:

- Replace "not yet sound as validation proof" with "must not be treated as
  validation proof."
- Replace "hidden authority" with "ambiguous labels can be read as authority
  unless closed locally."
- Keep the caveat that the base constitution contains REC-C6 and REC-C7; the
  issue is their omission from the active composition.

### Beer, Stafford

- Final verifier verdict: FIX.
- Senge's synthesis mostly survives.
- Keep the package as a local demotion scaffold, but do not treat it as
  validation proof, policy authority, or an executable prerequisite for research
  validity.

Additional control-loop gaps:

- Credit may route attention or eligibility, but there is no damping, cooldown,
  or control for `credit -> attention/eligibility -> more review visibility ->
  more credit`.
- No explicit fixture for agenda-setting authority.
- No owner-route failure mode: absent owner, conflicted owner, overloaded owner,
  or owner capture.
- No rule that a green evidence-harness result cannot mutate claim or promotion
  status without a separate authority gate.
- No reviewer-market control for bottleneck, incumbency, or status-arbiter
  behavior.
