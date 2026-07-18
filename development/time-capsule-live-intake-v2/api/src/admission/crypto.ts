import { createHash, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";

const BEARER_PATTERN = /^[A-Za-z0-9_-]{43,128}$/;
const DUMMY_DIGEST = Buffer.alloc(32, 0);

function digest(domain: string, values: readonly string[]): string {
  const hash = createHash("sha256");
  hash.update(domain, "utf8");
  for (const value of values) {
    hash.update("\0", "utf8");
    hash.update(value, "utf8");
  }
  return hash.digest("hex");
}

export function isBearerValue(value: unknown): value is string {
  return typeof value === "string" && BEARER_PATTERN.test(value);
}

export function digestInviteSecret(secret: string): string {
  return digest("resonant.time-capsule.invite.v1", [secret]);
}

export function digestSessionCapability(capability: string, csrfToken: string): string {
  return digest("resonant.time-capsule.session.v1", [capability, csrfToken]);
}

export function digestMatches(storedHex: string | undefined, candidateHex: string): boolean {
  const candidate = Buffer.from(candidateHex, "hex");
  const stored = storedHex && /^[a-f0-9]{64}$/.test(storedHex)
    ? Buffer.from(storedHex, "hex")
    : DUMMY_DIGEST;
  const equal = candidate.length === stored.length && timingSafeEqual(candidate, stored);
  return storedHex !== undefined && equal;
}

export interface RandomSource {
  token(): string;
  id(prefix: string): string;
}

export const nodeRandomSource: RandomSource = Object.freeze({
  token: () => randomBytes(32).toString("base64url"),
  id: (prefix: string) => `${prefix}-${randomUUID()}`
});
