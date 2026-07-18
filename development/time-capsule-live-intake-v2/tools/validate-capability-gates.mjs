#!/usr/bin/env node

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_CONTRACT = resolve(HERE, "../contracts/capability-gates-v1.json");
const DEFAULT_FIXTURES = resolve(HERE, "../fixtures/capability-gates-v1.json");
const STATES = ["preview", "synthetic", "staged", "live", "closing", "closed", "recovery", "opening"];
const TRANSITION_KEYS = ["preview>synthetic", "synthetic>staged", "staged>live", "live>closing", "closing>closed", "closed>recovery", "recovery>opening"];
const APPLICABLE_CLOSURE_GATES = ["G-01", "G-02", "G-03", "G-05", "G-06", "G-07", "G-08", "G-09", "G-10"];
const NUMBER_NON_EFFECTS = [
  "does_not_mint_tokens", "does_not_set_token_supply", "does_not_allocate_tokens",
  "does_not_create_rewards", "does_not_create_rank", "does_not_create_membership",
  "does_not_create_governance_power", "does_not_claim_economic_appropriateness"
];

function parseArgs(argv) {
  const paths = { contract: DEFAULT_CONTRACT, fixtures: DEFAULT_FIXTURES };
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    if (flag !== "--contract" && flag !== "--fixtures") throw new Error(`Unknown argument: ${flag}`);
    const value = argv[index + 1];
    if (!value) throw new Error(`Missing value for ${flag}`);
    paths[flag.slice(2)] = resolve(process.cwd(), value);
    index += 1;
  }
  return paths;
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function unique(values, label) {
  assert.ok(Array.isArray(values), `${label} must be an array`);
  assert.equal(new Set(values).size, values.length, `${label} contains duplicates`);
  return values;
}

function registries(contract) {
  return {
    gates: new Map(contract.gate_registry.map((gate) => [gate.gate_id, gate])),
    transitions: new Map(contract.transitions.map((transition) => [`${transition.from}>${transition.to}`, transition])),
    actions: new Map(contract.actions.map((action) => [action.action, action]))
  };
}

function validateContract(contract) {
  assert.equal(contract.schema_version, "resonant.time-capsule.capability-gates.schema.v1");
  assert.equal(contract.contract_id, "resonant.time-capsule.capability-gates");
  assert.equal(contract.version, "1.0.0");
  assert.equal(contract.domain, "resonant-time-capsule/capability-evidence-gates/v1");
  assert.equal(contract.status, "frozen");
  assert.equal(contract.default, "deny");
  assert.deepEqual(contract.states, STATES);
  assert.deepEqual(contract.not_applicable_closure_gates, ["G-04"]);

  const gateIds = contract.gate_registry.map((gate) => gate.gate_id);
  const blockerIds = contract.gate_registry.map((gate) => gate.blocker_id);
  unique(gateIds, "gate IDs");
  unique(blockerIds, "gate blocker IDs");
  const knownHandles = new Set();
  for (const gate of contract.gate_registry) {
    assert.match(gate.gate_id, /^(G-[0-9]{2}|GATE-[A-Z0-9-]+)$/);
    assert.equal(typeof gate.blocker_id, "string");
    assert.ok(gate.required_handles.length > 0, `${gate.gate_id}: empty handle list`);
    unique(gate.required_handles, `${gate.gate_id} handles`);
    for (const handle of gate.required_handles) {
      assert.equal(typeof handle, "string");
      assert.ok(!handle.includes("G-04"), "private-return G-04 handle is not applicable");
      knownHandles.add(handle);
    }
  }
  assert.deepEqual(gateIds.filter((id) => /^G-/.test(id)), APPLICABLE_CLOSURE_GATES);

  const { gates, transitions, actions } = registries(contract);
  assert.deepEqual([...transitions.keys()], TRANSITION_KEYS);
  for (const transition of contract.transitions) {
    assert.ok(STATES.includes(transition.from) && STATES.includes(transition.to));
    assert.ok(transition.required_gates.length > 0);
    unique(transition.required_gates, `${transition.from}>${transition.to} gates`);
    for (const id of transition.required_gates) assert.ok(gates.has(id), `unknown transition gate: ${id}`);
  }
  assert.deepEqual([...actions.keys()], ["accept_invented_data", "accept_real_data", "publish_preopening_feed", "derive_ritual_number"]);
  for (const action of contract.actions) {
    unique(action.allowed_states, `${action.action} states`);
    for (const state of action.allowed_states) assert.ok(STATES.includes(state));
    for (const id of action.required_gates) assert.ok(gates.has(id), `unknown action gate: ${id}`);
    assert.equal(typeof action.denied_blocker_id, "string");
  }
  assert.deepEqual(actions.get("accept_invented_data").allowed_states, ["synthetic", "staged"]);
  assert.deepEqual(actions.get("accept_real_data").allowed_states, ["live"]);
  assert.deepEqual(actions.get("publish_preopening_feed").allowed_states, []);
  assert.deepEqual(actions.get("derive_ritual_number").allowed_states, ["recovery"]);

  assert.equal(contract.ritual_number.range_minimum, 1000000000);
  assert.equal(contract.ritual_number.range_maximum, 99999999999);
  assert.deepEqual(contract.ritual_number.non_effects, NUMBER_NON_EFFECTS);
  assert.equal(contract.invariants.fail_closed, true);
  assert.equal(contract.invariants.evidence_handles_are_receipts_not_booleans, true);
  assert.equal(contract.invariants.fixtures_do_not_satisfy_real_gates, true);
  assert.equal(contract.invariants.synthetic_and_staged_use_invented_data_only, true);
  assert.equal(contract.invariants.pre_opening_public_feed, false);
  assert.equal(contract.invariants.private_return, false);
  assert.equal(contract.invariants.production_close_requires_separate_explicit_approval, true);
  return knownHandles;
}

function firstMissingGate(requiredGates, evidence, gates) {
  for (const gateId of requiredGates) {
    const gate = gates.get(gateId);
    if (gate.required_handles.some((handle) => !evidence.has(handle))) return gate.blocker_id;
  }
  return null;
}

function evaluate(request, evidenceHandles, contract) {
  const evidence = new Set(evidenceHandles);
  const { gates, transitions, actions } = registries(contract);
  if (!STATES.includes(request.current_state)) return { allowed: false, blocker_id: "BLOCKER-STATE-UNKNOWN" };
  if (request.kind === "transition") {
    if (!STATES.includes(request.requested_state)) return { allowed: false, blocker_id: "BLOCKER-STATE-UNKNOWN" };
    const transition = transitions.get(`${request.current_state}>${request.requested_state}`);
    if (!transition) return { allowed: false, blocker_id: "BLOCKER-TRANSITION-UNDECLARED" };
    const blocker = firstMissingGate(transition.required_gates, evidence, gates);
    return blocker ? { allowed: false, blocker_id: blocker } : { allowed: true };
  }
  if (request.kind === "action") {
    const action = actions.get(request.action);
    if (!action) return { allowed: false, blocker_id: "BLOCKER-ACTION-UNDECLARED" };
    if (!action.allowed_states.includes(request.current_state)) return { allowed: false, blocker_id: action.denied_blocker_id };
    const blocker = firstMissingGate(action.required_gates, evidence, gates);
    return blocker ? { allowed: false, blocker_id: blocker } : { allowed: true };
  }
  return { allowed: false, blocker_id: "BLOCKER-REQUEST-KIND-UNKNOWN" };
}

function validateFixtures(fixtures, contract, knownHandles) {
  assert.equal(fixtures.fixture_set_id, "resonant.time-capsule.capability-gates.fixtures");
  assert.equal(fixtures.version, "1.0.0");
  assert.equal(fixtures.contract_ref, "resonant.time-capsule.capability-gates@1.0.0");
  assert.equal(fixtures.invented_handles_only, true);
  for (const [name, handles] of Object.entries(fixtures.evidence_sets)) {
    unique(handles, `${name} evidence set`);
    for (const handle of handles) assert.ok(knownHandles.has(handle), `${name}: unknown evidence handle ${handle}`);
  }
  assert.ok(Array.isArray(fixtures.vectors) && fixtures.vectors.length > 0);
  const ids = new Set();
  const negativeBlockers = new Set();
  const counts = { total: 0, allowed: 0, blocked: 0, transitions: 0, actions: 0 };
  for (const vector of fixtures.vectors) {
    assert.equal(typeof vector.id, "string");
    assert.ok(!ids.has(vector.id), `duplicate vector: ${vector.id}`);
    ids.add(vector.id);
    assert.ok(["transition", "action"].includes(vector.kind));
    assert.ok(Object.hasOwn(fixtures.evidence_sets, vector.evidence_set), `${vector.id}: unknown evidence set`);
    unique(vector.remove_handles, `${vector.id} remove_handles`);
    const handles = [...fixtures.evidence_sets[vector.evidence_set]];
    for (const removed of vector.remove_handles) {
      assert.ok(handles.includes(removed), `${vector.id}: cannot remove absent handle ${removed}`);
    }
    const evidence = handles.filter((handle) => !vector.remove_handles.includes(handle));
    const request = vector.kind === "transition"
      ? { kind: vector.kind, current_state: vector.current_state, requested_state: vector.requested_state }
      : { kind: vector.kind, current_state: vector.current_state, action: vector.action };
    const actual = evaluate(request, evidence, contract);
    assert.equal(actual.allowed, vector.expected.allowed, `${vector.id}: allow result drifted`);
    if (actual.allowed) counts.allowed += 1;
    else {
      counts.blocked += 1;
      assert.equal(actual.blocker_id, vector.expected.blocker_id, `${vector.id}: blocker ID drifted`);
      negativeBlockers.add(actual.blocker_id);
    }
    counts[vector.kind === "transition" ? "transitions" : "actions"] += 1;
    counts.total += 1;
  }

  const requiredBlockers = new Set([
    ...contract.gate_registry.map((gate) => gate.blocker_id),
    ...contract.actions.map((action) => action.denied_blocker_id),
    "BLOCKER-TRANSITION-UNDECLARED"
  ]);
  assert.deepEqual([...negativeBlockers].sort(), [...requiredBlockers].sort(), "negative fixtures do not cover every stable blocker ID");
  return { ...counts, blocker_ids_covered: negativeBlockers.size };
}

function exhaustiveGraphCheck(contract) {
  let undeclaredPairs = 0;
  let declaredPairs = 0;
  for (const from of STATES) {
    for (const to of STATES) {
      const result = evaluate({ kind: "transition", current_state: from, requested_state: to }, [], contract);
      if (TRANSITION_KEYS.includes(`${from}>${to}`)) {
        assert.equal(result.allowed, false);
        assert.notEqual(result.blocker_id, "BLOCKER-TRANSITION-UNDECLARED");
        declaredPairs += 1;
      } else {
        assert.deepEqual(result, { allowed: false, blocker_id: "BLOCKER-TRANSITION-UNDECLARED" });
        undeclaredPairs += 1;
      }
    }
  }
  return { declared_pairs: declaredPairs, undeclared_pairs_denied: undeclaredPairs };
}

function requireRejectedDrift(id, callback) {
  try { callback(); } catch { return { id, result: "pass" }; }
  throw new Error(`${id}: validator accepted deliberate drift`);
}

function validateDriftGuards(contract, fixtures) {
  const graphDrift = structuredClone(contract);
  graphDrift.transitions.push({ from: "preview", to: "live", required_gates: ["GATE-L0-MACHINE"] });
  const fixtureDrift = structuredClone(fixtures);
  fixtureDrift.vectors.find((vector) => vector.id === "block-preview-to-live-shortcut").expected.blocker_id = "BLOCKER-L0-MACHINE";
  return [
    requireRejectedDrift("state-graph-drift-rejected", () => validateContract(graphDrift)),
    requireRejectedDrift("blocker-expectation-drift-rejected", () => validateFixtures(fixtureDrift, contract, validateContract(contract)))
  ];
}

async function main() {
  const paths = parseArgs(process.argv.slice(2));
  const [contractBytes, fixtureBytes] = await Promise.all([readFile(paths.contract), readFile(paths.fixtures)]);
  const contract = JSON.parse(contractBytes.toString("utf8"));
  const fixtures = JSON.parse(fixtureBytes.toString("utf8"));
  const knownHandles = validateContract(contract);
  const fixtureSummary = validateFixtures(fixtures, contract, knownHandles);
  const graphSummary = exhaustiveGraphCheck(contract);
  const driftChecks = validateDriftGuards(contract, fixtures);
  console.log(JSON.stringify({
    result: "pass",
    contract: `${contract.contract_id}@${contract.version}`,
    states: contract.states.length,
    gates: contract.gate_registry.length,
    fixtures: fixtureSummary,
    graph: graphSummary,
    applicable_closure_gates: APPLICABLE_CLOSURE_GATES,
    not_applicable_closure_gates: contract.not_applicable_closure_gates,
    ritual_number_non_effects: contract.ritual_number.non_effects.length,
    drift_checks: { total: driftChecks.length, passed: driftChecks.length, checks: driftChecks },
    contract_sha256: sha256(contractBytes),
    fixtures_sha256: sha256(fixtureBytes)
  }, null, 2));
}

main().catch((error) => {
  console.error(`FAIL capability-gates-v1: ${error.message}`);
  process.exitCode = 1;
});
