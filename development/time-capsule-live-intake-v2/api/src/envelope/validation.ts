export type HorizonYears = 2 | 5 | 10;
export type SlotPosition = 1 | 2;

export interface EnvelopeSlot {
  readonly horizon_years: HorizonYears;
  readonly position: SlotPosition;
  readonly visibility: "public_at_opening";
  readonly phrase: string;
}

export interface ConfirmedEnvelope {
  readonly schema_version: "resonant.time-capsule.envelope.v1";
  readonly domain: "resonant-time-capsule/envelope/public-at-opening/v1";
  readonly phrase_profile: Readonly<{
    profile_id: "resonant.time-capsule.phrase-profile";
    version: "1.0.0";
    domain: "resonant-time-capsule/phrase/public-at-opening/v1";
  }>;
  readonly state: "confirmed";
  readonly slots: readonly EnvelopeSlot[];
}

export class EnvelopeValidationError extends Error {
  constructor(readonly code: string, message: string) {
    super(message);
    this.name = "EnvelopeValidationError";
  }
}

const EXPECTED_ENVELOPE_KEYS = ["domain", "phrase_profile", "schema_version", "slots", "state"];
const EXPECTED_PROFILE_KEYS = ["domain", "profile_id", "version"];
const EXPECTED_SLOT_KEYS = ["horizon_years", "phrase", "position", "visibility"];
const SLOT_IDENTITIES = Object.freeze([
  { horizon_years: 2, position: 1 },
  { horizon_years: 2, position: 2 },
  { horizon_years: 5, position: 1 },
  { horizon_years: 5, position: 2 },
  { horizon_years: 10, position: 1 },
  { horizon_years: 10, position: 2 }
] as const);

function hasExactKeys(value: Record<string, unknown>, expected: readonly string[]): boolean {
  return Object.keys(value).sort().join("\0") === [...expected].sort().join("\0");
}

function hasUnpairedSurrogate(value: string): boolean {
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

export function normalizePhrase(input: unknown): Readonly<{ normalized: string; graphemes: number }> {
  if (typeof input !== "string") {
    throw new EnvelopeValidationError("phrase_input_type", "phrase must be a string");
  }
  if (hasUnpairedSurrogate(input)) {
    throw new EnvelopeValidationError("phrase_invalid_unicode", "phrase has invalid unicode");
  }
  if (/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/u.test(input)) {
    throw new EnvelopeValidationError("phrase_directional_control", "phrase has a directional control");
  }
  if (/[\u180e\u200b\u2060\ufeff]/u.test(input)) {
    throw new EnvelopeValidationError("phrase_invisible_separator", "phrase has an invisible separator");
  }
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(input)) {
    throw new EnvelopeValidationError("phrase_control_character", "phrase has a control character");
  }

  const normalized = input.replace(/\p{White_Space}+/gu, " ").trim().normalize("NFC");
  if (typeof Intl.Segmenter !== "function") {
    throw new EnvelopeValidationError("phrase_segmenter_unavailable", "grapheme segmenter unavailable");
  }
  const graphemes = [...new Intl.Segmenter("und", { granularity: "grapheme" }).segment(normalized)].length;
  if (graphemes > 160) {
    throw new EnvelopeValidationError("phrase_too_long", "phrase exceeds 160 grapheme clusters");
  }
  return Object.freeze({ normalized, graphemes });
}

export function validateEnvelope(input: unknown): ConfirmedEnvelope {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new EnvelopeValidationError("envelope_fields", "envelope fields are invalid");
  }
  const envelope = input as Record<string, unknown>;
  if (!hasExactKeys(envelope, EXPECTED_ENVELOPE_KEYS)) {
    throw new EnvelopeValidationError("envelope_fields", "envelope fields are invalid");
  }
  if (envelope.schema_version !== "resonant.time-capsule.envelope.v1") {
    throw new EnvelopeValidationError("envelope_schema_version", "envelope schema version is invalid");
  }
  if (envelope.domain !== "resonant-time-capsule/envelope/public-at-opening/v1") {
    throw new EnvelopeValidationError("envelope_domain", "envelope domain is invalid");
  }
  if (envelope.state !== "confirmed") {
    throw new EnvelopeValidationError("envelope_state", "envelope must be confirmed");
  }
  if (!envelope.phrase_profile || typeof envelope.phrase_profile !== "object" || Array.isArray(envelope.phrase_profile)) {
    throw new EnvelopeValidationError("envelope_phrase_profile", "envelope phrase profile is invalid");
  }
  const profile = envelope.phrase_profile as Record<string, unknown>;
  if (
    !hasExactKeys(profile, EXPECTED_PROFILE_KEYS) ||
    profile.profile_id !== "resonant.time-capsule.phrase-profile" ||
    profile.version !== "1.0.0" ||
    profile.domain !== "resonant-time-capsule/phrase/public-at-opening/v1"
  ) {
    throw new EnvelopeValidationError("envelope_phrase_profile", "envelope phrase profile is invalid");
  }
  if (!Array.isArray(envelope.slots) || envelope.slots.length !== 6) {
    throw new EnvelopeValidationError("envelope_slot_count", "envelope must have exactly six slots");
  }

  const slots = envelope.slots.map((value, index): EnvelopeSlot => {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      throw new EnvelopeValidationError("envelope_slot_fields", "slot fields are invalid");
    }
    const slot = value as Record<string, unknown>;
    if (!hasExactKeys(slot, EXPECTED_SLOT_KEYS)) {
      throw new EnvelopeValidationError("envelope_slot_fields", "slot fields are invalid");
    }
    const identity = SLOT_IDENTITIES[index]!;
    if (slot.horizon_years !== identity.horizon_years || slot.position !== identity.position) {
      throw new EnvelopeValidationError("envelope_slot_identity", `slot ${index + 1} identity is invalid`);
    }
    if (slot.visibility !== "public_at_opening") {
      throw new EnvelopeValidationError("envelope_visibility", "slot visibility must be public_at_opening");
    }
    if (typeof slot.phrase !== "string") {
      throw new EnvelopeValidationError("envelope_phrase_type", "slot phrase must be a string");
    }
    let normalized: Readonly<{ normalized: string; graphemes: number }>;
    try {
      normalized = normalizePhrase(slot.phrase);
    } catch (error) {
      if (error instanceof EnvelopeValidationError) {
        throw new EnvelopeValidationError("envelope_phrase_invalid", error.message);
      }
      throw error;
    }
    if (normalized.normalized !== slot.phrase) {
      throw new EnvelopeValidationError("envelope_phrase_not_canonical", "slot phrase must be canonical");
    }
    return Object.freeze({
      horizon_years: identity.horizon_years,
      position: identity.position,
      visibility: "public_at_opening",
      phrase: normalized.normalized
    });
  });

  for (const start of [0, 2, 4]) {
    if (slots[start + 1]!.phrase && !slots[start]!.phrase) {
      throw new EnvelopeValidationError(
        "envelope_second_without_first",
        `${slots[start]!.horizon_years}-year second slot requires the first`
      );
    }
  }
  if (!slots.some((slot) => slot.phrase.length > 0)) {
    throw new EnvelopeValidationError("envelope_empty", "envelope requires at least one phrase");
  }

  return Object.freeze({
    schema_version: "resonant.time-capsule.envelope.v1",
    domain: "resonant-time-capsule/envelope/public-at-opening/v1",
    phrase_profile: Object.freeze({
      profile_id: "resonant.time-capsule.phrase-profile",
      version: "1.0.0",
      domain: "resonant-time-capsule/phrase/public-at-opening/v1"
    }),
    state: "confirmed",
    slots: Object.freeze(slots)
  });
}
