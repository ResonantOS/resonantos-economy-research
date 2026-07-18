import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  type KeyObject
} from "node:crypto";
import type { OccurrenceRecord } from "../envelope/repository.js";
import type {
  PhraseAad,
  PhrasePayloadPort,
  ProtectedPhrase
} from "../envelope/service.js";

const ALGORITHM = "aes-256-gcm";
const FORMAT_VERSION = 1;
const NONCE_BYTES = 12;
const TAG_BYTES = 16;
const COMMITMENT_NONCE_BYTES = 32;

export const PHRASE_PAYLOAD_PROFILE = Object.freeze({
  implementation: "node:crypto",
  algorithm: ALGORITHM,
  keyBits: 256,
  nonceBytes: NONCE_BYTES,
  tagBytes: TAG_BYTES,
  formatVersion: FORMAT_VERSION,
  aadEncoding: "fixed-order-json-utf8"
});

export class PayloadProtectionError extends Error {
  readonly code = "PAYLOAD_PROTECTION_FAILED";

  constructor() {
    super("phrase payload protection failed");
    this.name = "PayloadProtectionError";
  }
}

export type RandomByteSource = (size: number) => Buffer;

function encodeAad(aad: PhraseAad): Buffer {
  return Buffer.from(JSON.stringify({
    domain: "resonant.time-capsule.entrusted-phrase.v1",
    cohort_id: aad.cohortId,
    envelope_id: aad.envelopeId,
    version_no: aad.versionNo,
    horizon_years: aad.horizonYears,
    position: aad.position,
    purpose: aad.purpose
  }), "utf8");
}

function requireRandomBytes(source: RandomByteSource, size: number): Buffer {
  const value = source(size);
  if (!Buffer.isBuffer(value) || value.length !== size) {
    throw new PayloadProtectionError();
  }
  return Buffer.from(value);
}

function validateKey(key: KeyObject): void {
  if (key.type !== "secret" || key.symmetricKeySize !== 32) {
    throw new PayloadProtectionError();
  }
}

export class AeadPhrasePayload implements PhrasePayloadPort {
  constructor(
    private readonly key: KeyObject,
    private readonly random: RandomByteSource = randomBytes
  ) {
    validateKey(key);
  }

  protect(phrase: string, aad: PhraseAad): ProtectedPhrase {
    try {
      const nonce = requireRandomBytes(this.random, NONCE_BYTES);
      const commitmentNonce = requireRandomBytes(this.random, COMMITMENT_NONCE_BYTES);
      const cipher = createCipheriv(ALGORITHM, this.key, nonce, { authTagLength: TAG_BYTES });
      cipher.setAAD(encodeAad(aad));
      const encrypted = Buffer.concat([cipher.update(phrase, "utf8"), cipher.final()]);
      const tag = cipher.getAuthTag();

      return Object.freeze({
        phraseCiphertext: Buffer.concat([Buffer.from([FORMAT_VERSION]), encrypted, tag]),
        phraseAeadNonce: nonce,
        commitmentNonce
      });
    } catch (error) {
      if (error instanceof PayloadProtectionError) throw error;
      throw new PayloadProtectionError();
    }
  }

  reveal(record: OccurrenceRecord, aad: PhraseAad): string {
    try {
      const stored = record.phraseCiphertext;
      if (
        record.phraseAeadNonce.length !== NONCE_BYTES ||
        stored.length < 1 + TAG_BYTES ||
        stored[0] !== FORMAT_VERSION
      ) {
        throw new PayloadProtectionError();
      }

      const encrypted = stored.subarray(1, stored.length - TAG_BYTES);
      const tag = stored.subarray(stored.length - TAG_BYTES);
      const decipher = createDecipheriv(ALGORITHM, this.key, record.phraseAeadNonce, {
        authTagLength: TAG_BYTES
      });
      decipher.setAAD(encodeAad(aad));
      decipher.setAuthTag(tag);
      return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString("utf8");
    } catch (error) {
      if (error instanceof PayloadProtectionError) throw error;
      throw new PayloadProtectionError();
    }
  }
}
