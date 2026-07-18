#!/usr/bin/env node

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_CONTRACT = resolve(HERE, "../contracts/command-state-v1.json");
const DEFAULT_FIXTURES = resolve(HERE, "../fixtures/command-state-v1.json");
const DIGEST = /^sha256:[0-9a-f]{64}$/;
const STATE_FIELDS = ["close_epoch", "close_state", "envelope_version", "idempotency_records", "rules_digest"];
const COMMAND_FIELDS = [
  "authenticated_scope", "command_digest", "expected_close_epoch",
  "expected_envelope_version", "expected_rules_digest", "idempotency_key",
  "operation", "server_commit_instant_utc", "session_scope"
];
const RECORD_FIELDS = ["command_digest", "idempotency_key", "operation", "result", "session_scope"];
const RESULT_FIELDS = ["command_digest", "envelope_version", "idempotency_key", "outcome", "receipt_ref", "server_commit_instant_utc"];

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

function keys(value) {
  return Object.keys(value).sort();
}

function isVersion(value) {
  return value === null || (Number.isSafeInteger(value) && value >= 1);
}

function isCanonicalInstant(value) {
  if (typeof value !== "string") return false;
  const epoch = Date.parse(value);
  return Number.isFinite(epoch) && new Date(epoch).toISOString() === value;
}

function classified(contract, code, error) {
  const spec = contract.outcomes[code];
  assert.ok(spec, `Unknown outcome code: ${code}`);
  return { classification: spec.classification, mutated: spec.mutated, error_code: code, error };
}

function validateContract(contract) {
  assert.equal(contract.schema_version, "resonant.time-capsule.command-state.schema.v1");
  assert.equal(contract.contract_id, "resonant.time-capsule.command-state");
  assert.equal(contract.version, "1.0.0");
  assert.equal(contract.domain, "resonant-time-capsule/confirmed-envelope-command/v1");
  assert.equal(contract.status, "frozen");
  assert.equal(contract.envelope_schema_ref, "resonant.time-capsule.envelope.v1");
  assert.equal(contract.authoritative_close_instant_utc, "2026-07-21T00:00:00.000Z");
  assert.equal(contract.supported_operation, "confirm_envelope");
  assert.deepEqual([...contract.state_fields].sort(), STATE_FIELDS);
  assert.deepEqual([...contract.command_fields].sort(), COMMAND_FIELDS);
  assert.deepEqual(contract.close_states, ["open", "closing", "closed"]);
  assert.deepEqual(contract.idempotency_scope, ["session_scope", "operation", "idempotency_key"]);
  assert.deepEqual(contract.algorithm.map(({ order, id }) => ({ order, id })), [
    { order: 1, id: "authenticate-scope" },
    { order: 2, id: "verify-rules-digest" },
    { order: 3, id: "compare-close-state-epoch-and-fence" },
    { order: 4, id: "resolve-idempotency" },
    { order: 5, id: "compare-expected-envelope-version" },
    { order: 6, id: "commit-next-immutable-version" }
  ]);
  assert.equal(contract.replay_boundary.after_epoch_advance_or_close, "return typed epoch or close rejection, not the earlier mutation result");
  assert.equal(contract.atomicity.failure_or_replay_mutates_state, false);
  assert.equal(contract.atomicity.partial_commit_allowed, false);
  for (const [code, spec] of Object.entries(contract.outcomes)) {
    assert.ok(["commit", "replay", "conflict", "rejected"].includes(spec.classification), `${code}: invalid classification`);
    assert.equal(typeof spec.mutated, "boolean", `${code}: mutated must be boolean`);
  }
  assert.equal(contract.outcomes.commit.mutated, true);
  assert.equal(contract.outcomes.replay.mutated, false);
}

function validateStoredResult(result) {
  assert.ok(result && typeof result === "object" && !Array.isArray(result), "idempotency result must be an object");
  assert.deepEqual(keys(result), RESULT_FIELDS);
  assert.equal(result.outcome, "committed");
  assert.ok(Number.isSafeInteger(result.envelope_version) && result.envelope_version >= 1);
  assert.equal(typeof result.receipt_ref, "string");
  assert.equal(typeof result.idempotency_key, "string");
  assert.match(result.command_digest, DIGEST);
  assert.ok(isCanonicalInstant(result.server_commit_instant_utc));
}

function validateState(state, contract) {
  assert.ok(state && typeof state === "object" && !Array.isArray(state), "state must be an object");
  assert.deepEqual(keys(state), STATE_FIELDS);
  assert.match(state.rules_digest, DIGEST);
  assert.ok(contract.close_states.includes(state.close_state));
  assert.ok(Number.isSafeInteger(state.close_epoch) && state.close_epoch >= 0);
  assert.ok(isVersion(state.envelope_version));
  assert.ok(Array.isArray(state.idempotency_records));
  const identities = new Set();
  for (const record of state.idempotency_records) {
    assert.ok(record && typeof record === "object" && !Array.isArray(record));
    assert.deepEqual(keys(record), RECORD_FIELDS);
    assert.equal(typeof record.session_scope, "string");
    assert.equal(record.operation, contract.supported_operation);
    assert.equal(typeof record.idempotency_key, "string");
    assert.match(record.command_digest, DIGEST);
    validateStoredResult(record.result);
    const identity = `${record.session_scope}\u0000${record.operation}\u0000${record.idempotency_key}`;
    assert.ok(!identities.has(identity), `duplicate idempotency identity: ${identity}`);
    identities.add(identity);
  }
}

function validateCommandShape(command, contract) {
  if (!command || typeof command !== "object" || Array.isArray(command)) return "command must be an object";
  if (JSON.stringify(keys(command)) !== JSON.stringify(COMMAND_FIELDS)) return "command fields do not match the frozen contract";
  if (command.operation !== contract.supported_operation) return "command operation is unsupported";
  if (command.authenticated_scope !== null && typeof command.authenticated_scope !== "string") return "authenticated scope must be a string or null";
  if (typeof command.session_scope !== "string" || command.session_scope.length === 0) return "session scope must be a nonempty string";
  if (!DIGEST.test(command.expected_rules_digest)) return "expected rules digest is invalid";
  if (!DIGEST.test(command.command_digest)) return "command digest is invalid";
  if (!isVersion(command.expected_envelope_version)) return "expected envelope version is invalid";
  if (!Number.isSafeInteger(command.expected_close_epoch) || command.expected_close_epoch < 0) return "expected close epoch is invalid";
  if (typeof command.idempotency_key !== "string" || command.idempotency_key.length < 1 || command.idempotency_key.length > 128) return "idempotency key is invalid";
  if (typeof command.server_commit_instant_utc !== "string") return "server commit instant is invalid";
  return null;
}

function classifyCommand(state, command, contract) {
  validateState(state, contract);
  const shapeError = validateCommandShape(command, contract);
  if (shapeError) return classified(contract, "invalid_command", shapeError);

  if (command.authenticated_scope === null || command.authenticated_scope.length === 0) {
    return classified(contract, "scope_unauthenticated", "An authenticated scope is required.");
  }
  if (command.authenticated_scope !== command.session_scope) {
    return classified(contract, "scope_mismatch", "Authenticated scope does not match the command session scope.");
  }
  if (command.expected_rules_digest !== state.rules_digest) {
    return classified(contract, "rules_digest_mismatch", "Expected rules digest does not match current rules digest.");
  }
  if (state.close_state !== "open") {
    return classified(contract, "close_state_not_open", `Capsule state is ${state.close_state}, not open.`);
  }
  if (command.expected_close_epoch !== state.close_epoch) {
    return classified(contract, "close_epoch_mismatch", "Expected close epoch does not match current close epoch.");
  }
  if (!isCanonicalInstant(command.server_commit_instant_utc)) {
    return classified(contract, "invalid_command", "Server commit instant must be canonical UTC ISO-8601 with milliseconds.");
  }
  if (Date.parse(command.server_commit_instant_utc) >= Date.parse(contract.authoritative_close_instant_utc)) {
    return classified(contract, "close_fence_reached", "Server commit instant reached or passed the authoritative close fence.");
  }

  const record = state.idempotency_records.find((candidate) =>
    candidate.session_scope === command.session_scope
      && candidate.operation === command.operation
      && candidate.idempotency_key === command.idempotency_key
  );
  if (record) {
    if (record.command_digest !== command.command_digest) {
      return classified(contract, "idempotency_key_reused", "Idempotency key was reused with a different command digest.");
    }
    return { classification: "replay", mutated: false, result: structuredClone(record.result) };
  }

  if (command.expected_envelope_version !== state.envelope_version) {
    return classified(contract, "envelope_version_mismatch", "Expected envelope version does not match current envelope version.");
  }

  const nextVersion = state.envelope_version === null ? 1 : state.envelope_version + 1;
  const result = {
    outcome: "committed",
    envelope_version: nextVersion,
    receipt_ref: `receipt:${command.operation}:${command.idempotency_key}`,
    idempotency_key: command.idempotency_key,
    command_digest: command.command_digest,
    server_commit_instant_utc: command.server_commit_instant_utc
  };
  const nextState = structuredClone(state);
  nextState.envelope_version = nextVersion;
  nextState.idempotency_records.push({
    session_scope: command.session_scope,
    operation: command.operation,
    idempotency_key: command.idempotency_key,
    command_digest: command.command_digest,
    result: structuredClone(result)
  });
  return { classification: "commit", mutated: true, result, next_state: nextState };
}

function materialize(baseState, baseCommand, mutations) {
  const state = structuredClone(baseState);
  const command = structuredClone(baseCommand);
  for (const mutation of mutations) {
    if (mutation.op === "set_state") state[mutation.field] = mutation.value;
    else if (mutation.op === "set_command") command[mutation.field] = mutation.value;
    else if (mutation.op === "add_record") state.idempotency_records.push(structuredClone(mutation.record));
    else throw new Error(`Unknown fixture mutation: ${mutation.op}`);
  }
  return { state, command };
}

function validateFixtures(fixtures, contract) {
  assert.equal(fixtures.fixture_set_id, "resonant.time-capsule.command-state.fixtures");
  assert.equal(fixtures.version, "1.0.0");
  assert.equal(fixtures.contract_ref, "resonant.time-capsule.command-state@1.0.0");
  assert.equal(fixtures.invented_values_only, true);
  validateState(fixtures.base_state, contract);
  assert.equal(validateCommandShape(fixtures.base_command, contract), null);
  assert.ok(Array.isArray(fixtures.vectors) && fixtures.vectors.length > 0);

  const ids = new Set();
  const counts = { total: 0, commit: 0, replay: 0, conflict: 0, rejected: 0 };
  for (const vector of fixtures.vectors) {
    assert.equal(typeof vector.id, "string");
    assert.ok(!ids.has(vector.id), `duplicate vector id: ${vector.id}`);
    ids.add(vector.id);
    assert.ok(Array.isArray(vector.mutations), `${vector.id}: mutations must be explicit`);
    assert.ok(vector.expected && typeof vector.expected === "object", `${vector.id}: expected result required`);
    assert.equal(typeof vector.expected.classification, "string", `${vector.id}: classification required`);
    assert.equal(typeof vector.expected.mutated, "boolean", `${vector.id}: mutated required`);
    const { state, command } = materialize(fixtures.base_state, fixtures.base_command, vector.mutations);
    const stateBefore = JSON.stringify(state);
    const commandBefore = JSON.stringify(command);
    const actual = classifyCommand(state, command, contract);
    assert.equal(JSON.stringify(state), stateBefore, `${vector.id}: classifier mutated input state`);
    assert.equal(JSON.stringify(command), commandBefore, `${vector.id}: classifier mutated input command`);
    assert.equal(actual.classification, vector.expected.classification, `${vector.id}: classification drifted`);
    assert.equal(actual.mutated, vector.expected.mutated, `${vector.id}: mutation flag drifted`);

    if (actual.classification === "commit") {
      assert.equal(actual.result.envelope_version, vector.expected.envelope_version, `${vector.id}: committed version drifted`);
      assert.equal(actual.result.receipt_ref, vector.expected.receipt_ref, `${vector.id}: receipt drifted`);
      assert.equal(actual.next_state.envelope_version, vector.expected.envelope_version, `${vector.id}: next version drifted`);
      assert.equal(actual.next_state.idempotency_records.length, state.idempotency_records.length + 1, `${vector.id}: atomic record append drifted`);
      validateState(actual.next_state, contract);
    } else if (actual.classification === "replay") {
      assert.equal(actual.result.envelope_version, vector.expected.envelope_version, `${vector.id}: replayed version drifted`);
      assert.equal(actual.result.receipt_ref, vector.expected.receipt_ref, `${vector.id}: replayed receipt drifted`);
      assert.ok(!Object.hasOwn(actual, "next_state"), `${vector.id}: replay produced next state`);
    } else {
      assert.equal(actual.error_code, vector.expected.error_code, `${vector.id}: error code drifted`);
      assert.ok(actual.error.toLowerCase().includes(vector.expected.error_contains.toLowerCase()), `${vector.id}: error message drifted`);
      assert.ok(!Object.hasOwn(actual, "next_state"), `${vector.id}: failure produced next state`);
    }
    counts.total += 1;
    counts[actual.classification] += 1;
  }
  return counts;
}

function requireRejectedDrift(id, callback) {
  try { callback(); } catch { return { id, result: "pass" }; }
  throw new Error(`${id}: validator accepted deliberate drift`);
}

function validateDriftGuards(contract, fixtures) {
  const contractDrift = structuredClone(contract);
  contractDrift.algorithm[3].order = 3;
  const fixtureDrift = structuredClone(fixtures);
  fixtureDrift.vectors.find((vector) => vector.id === "commit-next-version").expected.envelope_version = 4;
  return [
    requireRejectedDrift("algorithm-precedence-drift-rejected", () => validateContract(contractDrift)),
    requireRejectedDrift("transition-expectation-drift-rejected", () => validateFixtures(fixtureDrift, contract))
  ];
}

async function main() {
  const paths = parseArgs(process.argv.slice(2));
  const [contractBytes, fixtureBytes] = await Promise.all([readFile(paths.contract), readFile(paths.fixtures)]);
  const contract = JSON.parse(contractBytes.toString("utf8"));
  const fixtures = JSON.parse(fixtureBytes.toString("utf8"));
  validateContract(contract);
  const transitions = validateFixtures(fixtures, contract);
  const driftChecks = validateDriftGuards(contract, fixtures);
  console.log(JSON.stringify({
    result: "pass",
    contract: `${contract.contract_id}@${contract.version}`,
    domain: contract.domain,
    authoritative_close_instant_utc: contract.authoritative_close_instant_utc,
    transitions,
    drift_checks: {
      total: driftChecks.length,
      passed: driftChecks.filter((check) => check.result === "pass").length,
      checks: driftChecks
    },
    contract_sha256: sha256(contractBytes),
    fixtures_sha256: sha256(fixtureBytes)
  }, null, 2));
}

main().catch((error) => {
  console.error(`FAIL command-state-v1: ${error.message}`);
  process.exitCode = 1;
});
