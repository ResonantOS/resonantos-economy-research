import { createSecretKey, type KeyObject } from "node:crypto";

export const DATA_KEY_ENV_NAME = "TIME_CAPSULE_DATA_KEY_B64URL";

export type SecretLoadErrorCode = "DATA_KEY_MISSING" | "DATA_KEY_INVALID";

export class SecretLoadError extends Error {
  constructor(readonly code: SecretLoadErrorCode) {
    super(code === "DATA_KEY_MISSING" ? "data key configuration is missing" : "data key configuration is invalid");
    this.name = "SecretLoadError";
  }
}

export function loadDataKey(
  environment: Readonly<Record<string, string | undefined>> = process.env
): KeyObject {
  const encoded = environment[DATA_KEY_ENV_NAME];
  if (encoded === undefined || encoded.length === 0) {
    throw new SecretLoadError("DATA_KEY_MISSING");
  }
  if (!/^[A-Za-z0-9_-]+$/.test(encoded)) {
    throw new SecretLoadError("DATA_KEY_INVALID");
  }

  const decoded = Buffer.from(encoded, "base64url");
  if (decoded.length !== 32 || decoded.toString("base64url") !== encoded) {
    throw new SecretLoadError("DATA_KEY_INVALID");
  }
  return createSecretKey(decoded);
}
