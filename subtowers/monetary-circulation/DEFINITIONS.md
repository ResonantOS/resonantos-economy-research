# Candidate Definitions

Status: tower-local candidates; not promoted to the global definition spine
Promotion scope: local-research-only

## Existing Global Definitions Reused

| Global ID | Term | Tower use | Open dependency |
| --- | --- | --- | --- |
| ER-D24 | Treasury | candidate institutional/control boundary containing positions and obligations | controller, custody/access, size, composition, encumbrance, obligations, execution |
| ER-D25 | Epoch | candidate parent for typed accounting/emission/vesting/obligation/execution/observation clocks | owner decision and crosswalk |
| ER-D26 | Emission | candidate parent flow surface split from disbursement, unlock, and removal | source-backed actual schedule |
| ER-D27 | Runway Inequality | candidate conditional obligation-coverage duration; zero-buffer form only | positions, obligations, execution functions, clocks, calibrated parameters |

The tower does not redefine these terms.

## MC-D1. Supply State (candidate)

Source kind: local-inference

Meaning: a product of declared `existence_status`, `controller`,
`availability_status`, and denomination axes for a unit at one typed clock.

Use carefully: mint, transfer, reward, unlock, and removal are events;
`circulating` is a derived view. Each axis needs exclusivity/nesting rules.

Open / to-ground: authoritative opening register, unit domain, event vocabulary,
provenance, typed clocks, and a closed-world completeness witness.

## MC-D2. Release Schedule (candidate)

Source kind: local-inference

Meaning: a typed rule or scenario for exactly one of mint issuance, treasury
disbursement, unlock/vesting, token removal, allocation, compounding, or
obligation funding over a declared clock.

Use carefully: label whether the schedule is official, related precedent,
fixture input, or stress scenario.

Open / to-ground: actual `$RES` rules, reward basis, recipients, participation
process, horizons, obligations, and predicate provenance.

## MC-D3. Distribution Trajectory (candidate)

Source kind: local-inference informed by TF-12

Meaning: a parent research surface whose reports must separate holdings over a
resolved actor map, functional access over a cohort, and newcomer acquisition
route/time/cost over a stated horizon.

Use carefully: holdings, access, cohort membership, and acquisition are not
interchangeable and cannot become merit, credit, reputation, or authority.

Open / to-ground: actor/cohort authority, access predicate, measures, horizon,
and sourced/calibrated/scenario-declared failure conditions.

## MC-D4. Exit Capacity (candidate)

Source kind: local-inference with dispatch-admitted related/formal precedents

Meaning: `exit_capacity(source_asset, target_asset_or_numeraire, order_size,
route_set, market_state, provider_set, execution_horizon, scenario)`.

Use carefully: distinguish executable capacity from headline liquidity, volume,
market capitalization, or total supply.

Open / to-ground: source-backed `$RES` market institution, providers, route,
oracle/redemption, order sizes, bounds, and execution evidence.

## MC-D5. Service-Use And Displacement Reports (candidate)

Source kind: local-inference

Meaning: separate reports for qualifying service-use events, persistence,
subsidy/appreciation/yield/buyback isolation, system displacement, extraction
boundary, and sink-state transitions.

Use carefully: utility is an actor-service relation; a sink is a unit
transition. Missing comparison is `unrunnable`; non-identifying observations are
`indeterminate`; neither proves absent utility.

Open / to-ground: service object, population, comparison, washout/persistence,
quality/output type, adjacent boundary, and extraction/displacement measures.

## MC-D6. Typed Feedback Edge (candidate)

Source kind: failure precedent plus Resonant mapping analogy

Meaning: `{source_object, target_object, sign, delay, institution, evidence,
intervention, counterfactual, failure_predicate}`.

Use carefully: generic MC-E6 was killed because the candidate loops share no
common object or terminal. Every edge/loop is independently scoped.

Open / to-ground: local object boundaries, evidence, delays, shocks, controls,
amplification/recovery measure, and predicate provenance.

## MC-D7. MC-R Research Record (candidate)

Source kind: repository non-collapse discipline plus local-inference

Meaning: an explicitly incomplete record containing declared scope, independent
object reports, typed relation edges, known exclusions, and open residue.

Use carefully: `completeness_claim: false`; no top-level PASS, FAIL, evidence
status, score, rank, or health verdict; no compensation across reports.

Open / to-ground: per-object schemas, dependencies, evidence-status rules,
predicate provenance, and evidence-harness fixtures.
