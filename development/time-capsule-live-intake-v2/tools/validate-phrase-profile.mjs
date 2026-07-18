#!/usr/bin/env node

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_CONTRACT = resolve(HERE, "../contracts/phrase-profile-v1.json");
const DEFAULT_FIXTURES = resolve(HERE, "../fixtures/phrase-profile-v1.json");

function parseArgs(argv) {
  const paths = { contract: DEFAULT_CONTRACT, fixtures: DEFAULT_FIXTURES };
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    if (flag !== "--contract" && flag !== "--fixtures") {
      throw new Error(`Unknown argument: ${flag}`);
    }
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

function hasUnpairedSurrogate(value) {
  for (let index = 0; index < value.length; index += 1) {
    const unit = value.charCodeAt(index);
    if (unit >= 0xd800 && unit <= 0xdbff) {
      const next = value.charCodeAt(index + 1);
      if (!(next >= 0xdc00 && next <= 0xdfff)) return true;
      index += 1;
    } else if (unit >= 0xdc00 && unit <= 0xdfff) {
      return true;
    }
  }
  return false;
}

const BIDI_CONTROL = /[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/u;
const INVISIBLE_SEPARATOR = /[\u180E\u200B\u2060\uFEFF]/u;
const DISALLOWED_CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/u;
const UNICODE_WHITESPACE_RUN = /\p{White_Space}+/gu;

function fail(errorCode, error, detail = {}) {
  return { valid: false, error_code: errorCode, error, ...detail };
}

function normalizePhrase(input, contract) {
  const errors = contract.errors;
  if (typeof input !== "string") {
    return fail(errors.input_type, "Phrase input must be a Unicode string.");
  }
  if (hasUnpairedSurrogate(input)) {
    return fail(errors.invalid_unicode, "Phrase input contains an unpaired surrogate.");
  }
  if (BIDI_CONTROL.test(input)) {
    return fail(errors.directional_control, "Phrase input contains a forbidden directional control.");
  }
  if (INVISIBLE_SEPARATOR.test(input)) {
    return fail(errors.invisible_separator, "Phrase input contains a forbidden invisible separator.");
  }
  if (DISALLOWED_CONTROL.test(input)) {
    return fail(errors.control_character, "Phrase input contains a forbidden control character.");
  }

  const normalized = input
    .replace(UNICODE_WHITESPACE_RUN, " ")
    .trim()
    .normalize("NFC");

  if (typeof Intl?.Segmenter !== "function") {
    return fail(errors.segmenter_unavailable, "Unicode grapheme segmenter is unavailable.");
  }

  const segmenter = new Intl.Segmenter("und", { granularity: "grapheme" });
  const graphemes = [...segmenter.segment(normalized)].length;
  const maximum = contract.algorithm.find((step) => step.id === "enforce-grapheme-limit").maximum;
  if (graphemes > maximum) {
    return fail(
      errors.too_long,
      `Phrase must contain ${maximum} grapheme clusters or fewer.`,
      { normalized, graphemes }
    );
  }

  return { valid: true, empty: normalized.length === 0, normalized, graphemes };
}

function materializeInput(vector) {
  const hasInput = Object.prototype.hasOwnProperty.call(vector, "input");
  const hasRepeat = Object.prototype.hasOwnProperty.call(vector, "input_repeat");
  assert.notEqual(hasInput, hasRepeat, `${vector.id}: declare exactly one input or input_repeat`);
  if (hasInput) return vector.input;
  const spec = vector.input_repeat;
  assert.equal(typeof spec?.value, "string", `${vector.id}: input_repeat.value must be a string`);
  assert.ok(Number.isSafeInteger(spec?.count) && spec.count >= 0, `${vector.id}: input_repeat.count must be a nonnegative integer`);
  return spec.value.repeat(spec.count);
}

function materializeExpectedNormalized(expected) {
  const hasNormalized = Object.prototype.hasOwnProperty.call(expected, "normalized");
  const hasRepeat = Object.prototype.hasOwnProperty.call(expected, "normalized_repeat");
  assert.notEqual(hasNormalized, hasRepeat, "valid/length expectations must declare exactly one normalized value");
  if (hasNormalized) return expected.normalized;
  return expected.normalized_repeat.value.repeat(expected.normalized_repeat.count);
}

function validateContract(contract) {
  assert.equal(contract.schema_version, "resonant.time-capsule.phrase-profile.schema.v1");
  assert.equal(contract.profile_id, "resonant.time-capsule.phrase-profile");
  assert.equal(contract.version, "1.0.0");
  assert.equal(contract.domain, "resonant-time-capsule/phrase/public-at-opening/v1");
  assert.equal(contract.status, "frozen");
  assert.deepEqual(
    contract.algorithm.map(({ order, id }) => ({ order, id })),
    [
      { order: 1, id: "require-unicode-scalar-string" },
      { order: 2, id: "reject-bidi-controls" },
      { order: 3, id: "reject-invisible-separators" },
      { order: 4, id: "reject-disallowed-controls" },
      { order: 5, id: "trim-collapse-unicode-whitespace" },
      { order: 6, id: "normalize-nfc" },
      { order: 7, id: "segment-graphemes" },
      { order: 8, id: "enforce-grapheme-limit" }
    ],
    "ordered algorithm drifted"
  );
  assert.deepEqual(contract.algorithm[1].code_points, ["U+061C", "U+200E", "U+200F", "U+202A-U+202E", "U+2066-U+2069"]);
  assert.deepEqual(contract.algorithm[2].code_points, ["U+180E", "U+200B", "U+2060", "U+FEFF"]);
  assert.deepEqual(contract.algorithm[2].explicitly_allowed_join_controls, ["U+200C", "U+200D"]);
  assert.deepEqual(contract.algorithm[3].collapsible_controls, ["U+0009", "U+000A", "U+000D"]);
  assert.equal(contract.algorithm[6].runtime_api, "Intl.Segmenter");
  assert.equal(contract.algorithm[6].locale, "und");
  assert.equal(contract.algorithm[6].granularity, "grapheme");
  assert.equal(contract.algorithm[7].minimum, 0);
  assert.equal(contract.algorithm[7].maximum, 160);
  assert.ok(contract.non_effects.includes("does_not_mint_or_allocate_tokens"));
}

function validateFixtures(fixtures, contract) {
  assert.equal(fixtures.fixture_set_id, "resonant.time-capsule.phrase-profile.fixtures");
  assert.equal(fixtures.version, "1.0.0");
  assert.equal(fixtures.invented_values_only, true);
  assert.deepEqual(fixtures.profile_ref, {
    profile_id: contract.profile_id,
    version: contract.version,
    domain: contract.domain
  });
  assert.ok(Array.isArray(fixtures.vectors) && fixtures.vectors.length > 0, "vectors must be nonempty");
  const ids = new Set();
  let positive = 0;
  let negative = 0;

  for (const vector of fixtures.vectors) {
    assert.equal(typeof vector.id, "string", "every vector needs an id");
    assert.ok(!ids.has(vector.id), `duplicate vector id: ${vector.id}`);
    ids.add(vector.id);
    assert.equal(typeof vector.expected?.valid, "boolean", `${vector.id}: expected.valid must be explicit`);

    const actual = normalizePhrase(materializeInput(vector), contract);
    assert.equal(actual.valid, vector.expected.valid, `${vector.id}: validity mismatch: ${actual.error ?? "valid"}`);
    if (vector.expected.valid) {
      positive += 1;
      assert.equal(typeof vector.expected.empty, "boolean", `${vector.id}: expected.empty must be explicit`);
      assert.ok(Number.isSafeInteger(vector.expected.graphemes), `${vector.id}: expected.graphemes must be explicit`);
      const expectedNormalized = materializeExpectedNormalized(vector.expected);
      assert.deepEqual(actual, {
        valid: true,
        empty: vector.expected.empty,
        normalized: expectedNormalized,
        graphemes: vector.expected.graphemes
      }, `${vector.id}: normalized result drifted`);
    } else {
      negative += 1;
      assert.equal(typeof vector.expected.error_code, "string", `${vector.id}: expected.error_code must be explicit`);
      assert.equal(typeof vector.expected.error_contains, "string", `${vector.id}: expected.error_contains must be explicit`);
      assert.equal(actual.error_code, vector.expected.error_code, `${vector.id}: error code drifted`);
      assert.ok(actual.error.toLowerCase().includes(vector.expected.error_contains.toLowerCase()), `${vector.id}: error message drifted`);
      if (Object.prototype.hasOwnProperty.call(vector.expected, "graphemes")) {
        assert.equal(actual.graphemes, vector.expected.graphemes, `${vector.id}: rejected grapheme count drifted`);
        assert.equal(actual.normalized, materializeExpectedNormalized(vector.expected), `${vector.id}: rejected normalization drifted`);
      } else {
        assert.ok(!Object.prototype.hasOwnProperty.call(vector.expected, "normalized") && !Object.prototype.hasOwnProperty.call(vector.expected, "normalized_repeat"), `${vector.id}: pre-normalization rejection must not declare normalized output`);
      }
    }
  }
  return { total: fixtures.vectors.length, positive, negative };
}

function requireRejectedDrift(label, callback) {
  try {
    callback();
  } catch {
    return { id: label, result: "pass" };
  }
  throw new Error(`${label}: validator accepted deliberate drift`);
}

function validateDriftGuards(contract, fixtures) {
  const contractDrift = structuredClone(contract);
  contractDrift.algorithm.find((step) => step.id === "enforce-grapheme-limit").maximum = 159;

  const fixtureDrift = structuredClone(fixtures);
  fixtureDrift.vectors.find((vector) => vector.id === "trim-phrase").expected.normalized = "drifted expectation";

  return [
    requireRejectedDrift("contract-limit-drift-rejected", () => validateContract(contractDrift)),
    requireRejectedDrift("fixture-expectation-drift-rejected", () => validateFixtures(fixtureDrift, contract))
  ];
}

async function main() {
  const paths = parseArgs(process.argv.slice(2));
  const [contractBytes, fixtureBytes] = await Promise.all([
    readFile(paths.contract),
    readFile(paths.fixtures)
  ]);
  const contract = JSON.parse(contractBytes.toString("utf8"));
  const fixtures = JSON.parse(fixtureBytes.toString("utf8"));
  validateContract(contract);
  const counts = validateFixtures(fixtures, contract);
  const driftChecks = validateDriftGuards(contract, fixtures);
  console.log(JSON.stringify({
    result: "pass",
    profile: `${contract.profile_id}@${contract.version}`,
    domain: contract.domain,
    fixtures: counts,
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
  console.error(`FAIL phrase-profile-v1: ${error.message}`);
  process.exitCode = 1;
});
