#!/usr/bin/env node

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_CONTRACT = resolve(HERE, "../contracts/field-lifecycle-v1.json");
const DESCRIPTOR_FIELDS = [
  "access_owner", "allowed_processors", "allowed_states", "allowed_stores",
  "analytics_policy", "backup_behavior", "class", "deletion_behavior",
  "derived_from", "field", "log_policy", "public_export", "purpose",
  "retention_end", "retention_start"
];
const CLASSES = [
  "public-rule", "public-content", "public-verification", "private-admission",
  "private-intake", "private-operations", "sealed-artifact", "forbidden-telemetry"
];
const STATES = ["preview", "synthetic", "staged", "live", "closing", "closed", "recovery", "opening"];
const CATEGORIES = ["plaintext", "nonce", "ciphertext", "invite", "session", "envelope", "version", "moderation", "audit", "backup", "horizon_bundle", "manifest", "receipt"];
const PRIVATE_CLASSES = new Set(["private-admission", "private-intake", "private-operations", "forbidden-telemetry"]);
const EXPORTABLE_CLASSES = new Set(["public-rule", "public-content", "public-verification", "sealed-artifact"]);

function parseArgs(argv) {
  if (argv.length === 0) return DEFAULT_CONTRACT;
  if (argv.length !== 2 || argv[0] !== "--contract") throw new Error("Usage: validate-field-lifecycle.mjs [--contract path]");
  return resolve(process.cwd(), argv[1]);
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function sortedUnique(values, label) {
  assert.ok(Array.isArray(values), `${label} must be an array`);
  assert.equal(new Set(values).size, values.length, `${label} contains duplicates`);
  return [...values].sort();
}

function fieldMap(contract) {
  return new Map(contract.fields.map((descriptor) => [descriptor.field, descriptor]));
}

function validateContract(contract) {
  assert.equal(contract.schema_version, "resonant.time-capsule.field-lifecycle.schema.v1");
  assert.equal(contract.contract_id, "resonant.time-capsule.field-lifecycle");
  assert.equal(contract.version, "1.0.0");
  assert.equal(contract.domain, "resonant-time-capsule/field-lifecycle/public-at-opening/v1");
  assert.equal(contract.status, "frozen");
  assert.equal(contract.default_for_unspecified_field, "forbidden");
  assert.deepEqual([...contract.descriptor_fields].sort(), DESCRIPTOR_FIELDS);
  assert.deepEqual(contract.classes, CLASSES);
  assert.deepEqual(contract.states, STATES);
  assert.deepEqual(Object.keys(contract.required_categories), CATEGORIES);
  assert.ok(Array.isArray(contract.fields) && contract.fields.length > 0);

  const ids = contract.fields.map((descriptor) => descriptor.field);
  assert.equal(new Set(ids).size, ids.length, "field descriptors must have unique IDs");
  assert.deepEqual(sortedUnique(contract.required_field_ids, "required_field_ids"), [...ids].sort(), "required field coverage is not exactly 100%");
  const byId = fieldMap(contract);

  for (const [category, categoryFields] of Object.entries(contract.required_categories)) {
    assert.ok(categoryFields.length > 0, `${category}: category must not be empty`);
    for (const id of sortedUnique(categoryFields, `${category} category`)) {
      assert.ok(byId.has(id), `${category}: missing field ${id}`);
    }
  }

  for (const descriptor of contract.fields) {
    assert.deepEqual(Object.keys(descriptor).sort(), DESCRIPTOR_FIELDS, `${descriptor.field}: descriptor fields drifted`);
    assert.match(descriptor.field, /^[a-z][a-z0-9_]*$/);
    assert.ok(CLASSES.includes(descriptor.class), `${descriptor.field}: invalid class`);
    assert.equal(typeof descriptor.purpose, "string");
    assert.ok(descriptor.purpose.length > 0);
    assert.ok(descriptor.derived_from === null || byId.has(descriptor.derived_from), `${descriptor.field}: unknown derived_from`);
    for (const state of sortedUnique(descriptor.allowed_states, `${descriptor.field}.allowed_states`)) {
      assert.ok(STATES.includes(state), `${descriptor.field}: invalid state ${state}`);
    }
    for (const store of sortedUnique(descriptor.allowed_stores, `${descriptor.field}.allowed_stores`)) assert.equal(typeof store, "string");
    for (const processor of sortedUnique(descriptor.allowed_processors, `${descriptor.field}.allowed_processors`)) assert.equal(typeof processor, "string");
    assert.ok(["forbidden", "metadata-only"].includes(descriptor.log_policy));
    assert.equal(descriptor.analytics_policy, "forbidden");
    assert.equal(typeof descriptor.access_owner, "string");
    assert.equal(typeof descriptor.retention_start, "string");
    assert.equal(typeof descriptor.retention_end, "string");
    assert.ok(["erase", "tombstone", "impossible-after-publication"].includes(descriptor.deletion_behavior));
    assert.ok(["excluded", "included-with-expiry"].includes(descriptor.backup_behavior));
    assert.ok(["forbidden", "allowlisted"].includes(descriptor.public_export));

    if (PRIVATE_CLASSES.has(descriptor.class)) {
      assert.equal(descriptor.public_export, "forbidden", `${descriptor.field}: private field cannot be public`);
    }
    if (descriptor.public_export === "allowlisted") {
      assert.ok(EXPORTABLE_CLASSES.has(descriptor.class), `${descriptor.field}: class cannot be allowlisted`);
    }
    if (descriptor.class === "public-content") {
      assert.deepEqual(descriptor.allowed_states, ["opening"], `${descriptor.field}: public content is opening-only`);
    }
    if (descriptor.class === "forbidden-telemetry") {
      assert.deepEqual(descriptor.allowed_states, []);
      assert.deepEqual(descriptor.allowed_stores, []);
      assert.deepEqual(descriptor.allowed_processors, []);
      assert.equal(descriptor.log_policy, "forbidden");
      assert.equal(descriptor.backup_behavior, "excluded");
      assert.equal(descriptor.public_export, "forbidden");
    }
  }

  const plaintext = byId.get("phrase_plaintext");
  assert.deepEqual(plaintext.allowed_stores, ["bounded_process_memory"]);
  assert.equal(plaintext.log_policy, "forbidden");
  assert.equal(plaintext.analytics_policy, "forbidden");
  assert.equal(plaintext.backup_behavior, "excluded");
  assert.equal(plaintext.public_export, "forbidden");
  assert.deepEqual(byId.get("public_opening_phrase").allowed_states, ["opening"]);

  for (const id of ["invite_secret", "invite_digest", "session_capability", "session_digest", "envelope_id", "audit_pseudoref", "private_receipt_id"]) {
    const descriptor = byId.get(id);
    assert.equal(descriptor.log_policy === "forbidden" || descriptor.log_policy === "metadata-only", true);
    assert.equal(descriptor.analytics_policy, "forbidden");
    assert.equal(descriptor.public_export, "forbidden");
  }
  for (const id of ids) {
    assert.ok(!/(participant_(private|public)_key|recovery_phrase|token_(mint|allocation|reward|rank|membership|governance))/.test(id), `${id}: prohibited field family`);
  }

  assert.equal(contract.invariants.public_export_is_allowlist_only, true);
  assert.equal(contract.invariants.unknown_fields_are_forbidden, true);
  assert.deepEqual(contract.invariants.public_content_states, ["opening"]);
  assert.equal(contract.invariants.pre_opening_live_feed, false);
  assert.equal(contract.invariants.private_return_fields, false);
  assert.equal(contract.invariants.participant_key_fields, false);
  assert.equal(contract.invariants.phrase_plaintext_in_logs_analytics_backups_or_public_export, false);
  assert.equal(contract.invariants.token_mint_allocation_reward_rank_membership_or_governance_fields, false);
}

function validateProjection(fields, byId) {
  if (!Array.isArray(fields) || fields.length === 0) {
    return { valid: false, error_code: "public_export_empty", error: "Public export field list must be nonempty." };
  }
  if (new Set(fields).size !== fields.length) {
    return { valid: false, error_code: "public_export_duplicate_field", error: "Public export contains a duplicate field." };
  }
  for (const id of fields) {
    const descriptor = byId.get(id);
    if (!descriptor) return { valid: false, error_code: "public_export_unknown_field", error: `Public export field is unknown: ${id}.` };
    if (descriptor.public_export !== "allowlisted") {
      return { valid: false, error_code: "public_export_forbidden", error: `Public export field is forbidden: ${id}.` };
    }
  }
  return { valid: true, field_count: fields.length };
}

function validateFixtures(contract) {
  assert.ok(Array.isArray(contract.public_projection_fixtures) && contract.public_projection_fixtures.length > 0);
  const byId = fieldMap(contract);
  const ids = new Set();
  const counts = { total: 0, valid: 0, invalid: 0 };
  for (const fixture of contract.public_projection_fixtures) {
    assert.equal(typeof fixture.id, "string");
    assert.ok(!ids.has(fixture.id), `duplicate fixture: ${fixture.id}`);
    ids.add(fixture.id);
    assert.equal(typeof fixture.expected?.valid, "boolean");
    const actual = validateProjection(fixture.fields, byId);
    assert.equal(actual.valid, fixture.expected.valid, `${fixture.id}: validity drifted`);
    if (actual.valid) counts.valid += 1;
    else {
      counts.invalid += 1;
      assert.equal(actual.error_code, fixture.expected.error_code, `${fixture.id}: error code drifted`);
    }
    counts.total += 1;
  }
  return counts;
}

function requireRejectedDrift(id, callback) {
  try { callback(); } catch { return { id, result: "pass" }; }
  throw new Error(`${id}: validator accepted deliberate drift`);
}

function validateDriftGuards(contract) {
  const privateExport = structuredClone(contract);
  privateExport.fields.find((field) => field.field === "phrase_plaintext").public_export = "allowlisted";
  const incompleteCoverage = structuredClone(contract);
  incompleteCoverage.required_field_ids.pop();
  return [
    requireRejectedDrift("private-export-drift-rejected", () => validateContract(privateExport)),
    requireRejectedDrift("field-coverage-drift-rejected", () => validateContract(incompleteCoverage))
  ];
}

function summarize(contract) {
  const classes = Object.fromEntries(CLASSES.map((name) => [name, 0]));
  let allowlisted = 0;
  let forbidden = 0;
  for (const field of contract.fields) {
    classes[field.class] += 1;
    if (field.public_export === "allowlisted") allowlisted += 1;
    else forbidden += 1;
  }
  return { total_fields: contract.fields.length, coverage_percent: 100, classes, public_export: { allowlisted, forbidden } };
}

async function main() {
  const path = parseArgs(process.argv.slice(2));
  const bytes = await readFile(path);
  const contract = JSON.parse(bytes.toString("utf8"));
  validateContract(contract);
  const projectionFixtures = validateFixtures(contract);
  const driftChecks = validateDriftGuards(contract);
  console.log(JSON.stringify({
    result: "pass",
    contract: `${contract.contract_id}@${contract.version}`,
    domain: contract.domain,
    coverage: summarize(contract),
    projection_fixtures: projectionFixtures,
    drift_checks: { total: driftChecks.length, passed: driftChecks.length, checks: driftChecks },
    contract_sha256: sha256(bytes)
  }, null, 2));
}

main().catch((error) => {
  console.error(`FAIL field-lifecycle-v1: ${error.message}`);
  process.exitCode = 1;
});
