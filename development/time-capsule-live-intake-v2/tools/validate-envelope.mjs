#!/usr/bin/env node

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_SCHEMA = resolve(HERE, "../contracts/envelope-v1.schema.json");
const DEFAULT_FIXTURES = resolve(HERE, "../fixtures/envelope-v1.json");
const DEFAULT_PHRASE_PROFILE = resolve(HERE, "../contracts/phrase-profile-v1.json");

const ENVELOPE_FIELDS = ["domain", "phrase_profile", "schema_version", "slots", "state"];
const PROFILE_FIELDS = ["domain", "profile_id", "version"];
const SLOT_FIELDS = ["horizon_years", "phrase", "position", "visibility"];
const SLOT_ORDER = [
  { horizon_years: 2, position: 1 },
  { horizon_years: 2, position: 2 },
  { horizon_years: 5, position: 1 },
  { horizon_years: 5, position: 2 },
  { horizon_years: 10, position: 1 },
  { horizon_years: 10, position: 2 }
];

const BIDI_CONTROL = /[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/u;
const INVISIBLE_SEPARATOR = /[\u180E\u200B\u2060\uFEFF]/u;
const DISALLOWED_CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/u;
const UNICODE_WHITESPACE_RUN = /\p{White_Space}+/gu;

function parseArgs(argv) {
  const paths = {
    schema: DEFAULT_SCHEMA,
    fixtures: DEFAULT_FIXTURES,
    "phrase-profile": DEFAULT_PHRASE_PROFILE
  };
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    if (!["--schema", "--fixtures", "--phrase-profile"].includes(flag)) {
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

function sortedKeys(value) {
  return Object.keys(value).sort();
}

function resultError(errorCode, error, detail = {}) {
  return { valid: false, error_code: errorCode, error, ...detail };
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

function normalizePhrase(input, phraseProfile) {
  if (typeof input !== "string") {
    return resultError("phrase_input_type", "Phrase input must be a Unicode string.");
  }
  if (hasUnpairedSurrogate(input)) {
    return resultError("phrase_invalid_unicode", "Phrase input contains an unpaired surrogate.");
  }
  if (BIDI_CONTROL.test(input)) {
    return resultError("phrase_directional_control", "Phrase input contains a forbidden directional control.");
  }
  if (INVISIBLE_SEPARATOR.test(input)) {
    return resultError("phrase_invisible_separator", "Phrase input contains a forbidden invisible separator.");
  }
  if (DISALLOWED_CONTROL.test(input)) {
    return resultError("phrase_control_character", "Phrase input contains a forbidden control character.");
  }
  const normalized = input.replace(UNICODE_WHITESPACE_RUN, " ").trim().normalize("NFC");
  if (typeof Intl?.Segmenter !== "function") {
    return resultError("phrase_segmenter_unavailable", "Unicode grapheme segmenter is unavailable.");
  }
  const segmenter = new Intl.Segmenter("und", { granularity: "grapheme" });
  const graphemes = [...segmenter.segment(normalized)].length;
  const maximum = phraseProfile.algorithm.find((step) => step.id === "enforce-grapheme-limit").maximum;
  if (graphemes > maximum) {
    return resultError("phrase_too_long", `Phrase must contain ${maximum} grapheme clusters or fewer.`, { normalized, graphemes });
  }
  return { valid: true, normalized, graphemes };
}

function validatePhraseProfile(profile) {
  assert.equal(profile.schema_version, "resonant.time-capsule.phrase-profile.schema.v1");
  assert.equal(profile.profile_id, "resonant.time-capsule.phrase-profile");
  assert.equal(profile.version, "1.0.0");
  assert.equal(profile.domain, "resonant-time-capsule/phrase/public-at-opening/v1");
  assert.equal(profile.algorithm.find((step) => step.id === "enforce-grapheme-limit")?.maximum, 160);
}

function schemaSlotOrder(schema) {
  return schema.properties.slots.prefixItems.map((item) => {
    const identity = item.allOf[1].properties;
    return {
      horizon_years: identity.horizon_years.const,
      position: identity.position.const
    };
  });
}

function validateSchema(schema) {
  assert.equal(schema.$schema, "https://json-schema.org/draft/2020-12/schema");
  assert.equal(schema.$id, "https://resonantdao.example/contracts/time-capsule/envelope-v1.schema.json");
  assert.equal(schema.type, "object");
  assert.equal(schema.additionalProperties, false);
  assert.deepEqual([...schema.required].sort(), ENVELOPE_FIELDS);
  assert.equal(schema.properties.schema_version.const, "resonant.time-capsule.envelope.v1");
  assert.equal(schema.properties.domain.const, "resonant-time-capsule/envelope/public-at-opening/v1");
  assert.equal(schema.properties.state.const, "confirmed");
  assert.equal(schema.properties.phrase_profile.additionalProperties, false);
  assert.deepEqual([...schema.properties.phrase_profile.required].sort(), PROFILE_FIELDS);
  assert.equal(schema.properties.phrase_profile.properties.profile_id.const, "resonant.time-capsule.phrase-profile");
  assert.equal(schema.properties.phrase_profile.properties.version.const, "1.0.0");
  assert.equal(schema.properties.phrase_profile.properties.domain.const, "resonant-time-capsule/phrase/public-at-opening/v1");
  assert.equal(schema.properties.slots.minItems, 6);
  assert.equal(schema.properties.slots.maxItems, 6);
  assert.equal(schema.properties.slots.items, false);
  assert.deepEqual(schemaSlotOrder(schema), SLOT_ORDER);
  assert.equal(schema.$defs.slot.additionalProperties, false);
  assert.deepEqual([...schema.$defs.slot.required].sort(), SLOT_FIELDS);
  assert.equal(schema.$defs.slot.properties.visibility.const, "public_at_opening");
  assert.equal(schema.properties.slots.minContains, 1);
  assert.equal(schema["x-resonant-invariants"].confirmed_minimum_nonempty_phrases, 1);
  assert.equal(schema["x-resonant-invariants"].second_position_requires_nonempty_first, true);
  assert.equal(schema["x-resonant-invariants"].duplicate_phrase_values_allowed, true);
  assert.equal(schema["x-resonant-invariants"].duplicate_slot_identities_allowed, false);
  assert.deepEqual(schema["x-resonant-invariants"].slot_order, SLOT_ORDER);
  assert.equal(schema["x-resonant-invariants"].visibility, "public_at_opening");
}

function validateEnvelope(envelope, schema, phraseProfile) {
  if (!envelope || typeof envelope !== "object" || Array.isArray(envelope)) {
    return resultError("envelope_type", "Envelope must be an object.");
  }
  if (JSON.stringify(sortedKeys(envelope)) !== JSON.stringify(ENVELOPE_FIELDS)) {
    return resultError("envelope_fields", "Envelope fields must be exactly the declared schema fields.");
  }
  if (envelope.schema_version !== schema.properties.schema_version.const) {
    return resultError("envelope_schema_version", "Envelope schema version does not match v1.");
  }
  if (envelope.domain !== schema.properties.domain.const) {
    return resultError("envelope_domain", "Envelope domain does not match v1.");
  }
  if (!envelope.phrase_profile || typeof envelope.phrase_profile !== "object" || Array.isArray(envelope.phrase_profile)) {
    return resultError("envelope_phrase_profile", "Envelope phrase profile must match the frozen profile.");
  }
  if (JSON.stringify(sortedKeys(envelope.phrase_profile)) !== JSON.stringify(PROFILE_FIELDS)
      || envelope.phrase_profile.profile_id !== phraseProfile.profile_id
      || envelope.phrase_profile.version !== phraseProfile.version
      || envelope.phrase_profile.domain !== phraseProfile.domain) {
    return resultError("envelope_phrase_profile", "Envelope phrase profile must match the frozen phrase profile.");
  }
  if (envelope.state !== "confirmed") {
    return resultError("envelope_state", "Envelope state must be confirmed.");
  }
  if (!Array.isArray(envelope.slots) || envelope.slots.length !== 6) {
    return resultError("envelope_slot_count", "Envelope must contain exactly six ordered slots.");
  }

  for (let index = 0; index < envelope.slots.length; index += 1) {
    const slot = envelope.slots[index];
    if (!slot || typeof slot !== "object" || Array.isArray(slot)
        || JSON.stringify(sortedKeys(slot)) !== JSON.stringify(SLOT_FIELDS)) {
      return resultError("envelope_slot_fields", `Envelope slot fields are invalid at slot ${index + 1}.`);
    }
    const expected = SLOT_ORDER[index];
    if (slot.horizon_years !== expected.horizon_years || slot.position !== expected.position) {
      return resultError("envelope_slot_identity", `Envelope slot ${index + 1} must be ${expected.horizon_years}-year position ${expected.position}.`);
    }
    if (slot.visibility !== "public_at_opening") {
      return resultError("envelope_visibility", `Envelope slot ${index + 1} visibility must be public_at_opening.`);
    }
    if (typeof slot.phrase !== "string") {
      return resultError("envelope_phrase_type", `Envelope slot ${index + 1} phrase must be a string.`);
    }
    const normalized = normalizePhrase(slot.phrase, phraseProfile);
    if (!normalized.valid) {
      return resultError("envelope_phrase_invalid", `Envelope slot ${index + 1}: ${normalized.error}`, { cause: normalized.error_code });
    }
    if (normalized.normalized !== slot.phrase) {
      return resultError("envelope_phrase_not_canonical", `Envelope slot ${index + 1} phrase must already be canonical phrase-profile output.`);
    }
  }

  for (let index = 0; index < envelope.slots.length; index += 2) {
    const first = envelope.slots[index];
    const second = envelope.slots[index + 1];
    if (second.phrase !== "" && first.phrase === "") {
      return resultError("envelope_second_without_first", `The ${first.horizon_years}-year second position requires a nonempty first position.`);
    }
  }
  const nonemptyPhrases = envelope.slots.filter((slot) => slot.phrase !== "").length;
  if (nonemptyPhrases < 1) {
    return resultError("envelope_empty", "A confirmed envelope must contain at least one nonempty phrase; quiet creates no envelope.");
  }
  return { valid: true, slot_count: 6, nonempty_phrases: nonemptyPhrases };
}

function findSlot(envelope, mutation) {
  const slot = envelope.slots.find((candidate) =>
    candidate.horizon_years === mutation.horizon_years && candidate.position === mutation.position
  );
  assert.ok(slot, `Mutation cannot find ${mutation.horizon_years}-year position ${mutation.position}`);
  return slot;
}

function materializeEnvelope(baseEnvelope, mutations) {
  const envelope = structuredClone(baseEnvelope);
  for (const mutation of mutations) {
    switch (mutation.op) {
      case "set_phrase":
        findSlot(envelope, mutation).phrase = mutation.value;
        break;
      case "set_phrase_repeat":
        assert.equal(typeof mutation.value, "string");
        assert.ok(Number.isSafeInteger(mutation.count) && mutation.count >= 0);
        findSlot(envelope, mutation).phrase = mutation.value.repeat(mutation.count);
        break;
      case "set_envelope_field":
        envelope[mutation.field] = mutation.value;
        break;
      case "set_profile_field":
        envelope.phrase_profile[mutation.field] = mutation.value;
        break;
      case "set_slot_field":
        envelope.slots[mutation.index][mutation.field] = mutation.value;
        break;
      case "delete_slot_field":
        delete envelope.slots[mutation.index][mutation.field];
        break;
      case "remove_slot":
        envelope.slots.splice(mutation.index, 1);
        break;
      case "append_slot":
        envelope.slots.push(structuredClone(mutation.slot));
        break;
      case "swap_slots": {
        const saved = envelope.slots[mutation.first];
        envelope.slots[mutation.first] = envelope.slots[mutation.second];
        envelope.slots[mutation.second] = saved;
        break;
      }
      default:
        throw new Error(`Unknown fixture mutation: ${mutation.op}`);
    }
  }
  return envelope;
}

function validateFixtures(fixtures, schema, phraseProfile) {
  assert.equal(fixtures.fixture_set_id, "resonant.time-capsule.envelope.fixtures");
  assert.equal(fixtures.version, "1.0.0");
  assert.equal(fixtures.schema_ref, "resonant.time-capsule.envelope.v1");
  assert.equal(fixtures.invented_values_only, true);
  assert.ok(Array.isArray(fixtures.vectors) && fixtures.vectors.length > 0);
  assert.equal(validateEnvelope(fixtures.base_envelope, schema, phraseProfile).valid, true, "base envelope must be valid");

  const ids = new Set();
  let positive = 0;
  let negative = 0;
  for (const vector of fixtures.vectors) {
    assert.equal(typeof vector.id, "string", "every vector needs an id");
    assert.ok(!ids.has(vector.id), `duplicate vector id: ${vector.id}`);
    ids.add(vector.id);
    assert.ok(Array.isArray(vector.mutations), `${vector.id}: mutations must be explicit`);
    assert.equal(typeof vector.expected?.valid, "boolean", `${vector.id}: expected.valid must be explicit`);
    const envelope = materializeEnvelope(fixtures.base_envelope, vector.mutations);
    const actual = validateEnvelope(envelope, schema, phraseProfile);
    assert.equal(actual.valid, vector.expected.valid, `${vector.id}: validity mismatch: ${actual.error ?? "valid"}`);
    if (vector.expected.valid) {
      positive += 1;
      assert.ok(Number.isSafeInteger(vector.expected.nonempty_phrases), `${vector.id}: nonempty count must be explicit`);
      assert.deepEqual(actual, {
        valid: true,
        slot_count: 6,
        nonempty_phrases: vector.expected.nonempty_phrases
      }, `${vector.id}: valid result drifted`);
    } else {
      negative += 1;
      assert.equal(typeof vector.expected.error_code, "string", `${vector.id}: expected.error_code must be explicit`);
      assert.equal(typeof vector.expected.error_contains, "string", `${vector.id}: expected.error_contains must be explicit`);
      assert.equal(actual.error_code, vector.expected.error_code, `${vector.id}: error code drifted`);
      assert.ok(actual.error.toLowerCase().includes(vector.expected.error_contains.toLowerCase()), `${vector.id}: error message drifted`);
    }
  }
  return { total: fixtures.vectors.length, positive, negative };
}

function requireRejectedDrift(id, callback) {
  try {
    callback();
  } catch {
    return { id, result: "pass" };
  }
  throw new Error(`${id}: validator accepted deliberate drift`);
}

function validateDriftGuards(schema, fixtures, phraseProfile) {
  const schemaDrift = structuredClone(schema);
  schemaDrift.properties.slots.maxItems = 5;
  const fixtureDrift = structuredClone(fixtures);
  fixtureDrift.vectors.find((vector) => vector.id === "valid-one-phrase").expected.nonempty_phrases = 2;
  return [
    requireRejectedDrift("schema-slot-limit-drift-rejected", () => validateSchema(schemaDrift)),
    requireRejectedDrift("fixture-expectation-drift-rejected", () => validateFixtures(fixtureDrift, schema, phraseProfile))
  ];
}

async function main() {
  const paths = parseArgs(process.argv.slice(2));
  const [schemaBytes, fixtureBytes, phraseProfileBytes] = await Promise.all([
    readFile(paths.schema),
    readFile(paths.fixtures),
    readFile(paths["phrase-profile"])
  ]);
  const schema = JSON.parse(schemaBytes.toString("utf8"));
  const fixtures = JSON.parse(fixtureBytes.toString("utf8"));
  const phraseProfile = JSON.parse(phraseProfileBytes.toString("utf8"));
  validatePhraseProfile(phraseProfile);
  validateSchema(schema);
  const counts = validateFixtures(fixtures, schema, phraseProfile);
  const driftChecks = validateDriftGuards(schema, fixtures, phraseProfile);
  console.log(JSON.stringify({
    result: "pass",
    schema: schema.properties.schema_version.const,
    domain: schema.properties.domain.const,
    phrase_profile: `${phraseProfile.profile_id}@${phraseProfile.version}`,
    fixtures: counts,
    drift_checks: {
      total: driftChecks.length,
      passed: driftChecks.filter((check) => check.result === "pass").length,
      checks: driftChecks
    },
    schema_sha256: sha256(schemaBytes),
    fixtures_sha256: sha256(fixtureBytes),
    phrase_profile_sha256: sha256(phraseProfileBytes)
  }, null, 2));
}

main().catch((error) => {
  console.error(`FAIL envelope-v1: ${error.message}`);
  process.exitCode = 1;
});
