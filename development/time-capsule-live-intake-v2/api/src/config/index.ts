export const CONFIG_KEYS = Object.freeze([
  "TIME_CAPSULE_RUNTIME",
  "TIME_CAPSULE_HOST",
  "TIME_CAPSULE_PORT",
  "TIME_CAPSULE_LOG_LEVEL"
] as const);

type ConfigKey = (typeof CONFIG_KEYS)[number];

export interface RuntimeConfig {
  readonly runtime: "synthetic";
  readonly host: "127.0.0.1" | "::1";
  readonly port: number;
  readonly logLevel: "silent" | "info";
}

export class ConfigError extends Error {
  readonly code = "CONFIG_INVALID";

  constructor(readonly field: ConfigKey, reason: string) {
    super(`${field} ${reason}`);
    this.name = "ConfigError";
  }
}

function requireValue(
  source: Readonly<Record<string, string | undefined>>,
  field: ConfigKey
): string {
  const value = source[field];
  if (value === undefined || value.length === 0) {
    throw new ConfigError(field, "is required");
  }
  return value;
}

function parseRuntime(value: string): RuntimeConfig["runtime"] {
  if (value !== "synthetic") {
    throw new ConfigError("TIME_CAPSULE_RUNTIME", "must be synthetic");
  }
  return value;
}

function parseHost(value: string): RuntimeConfig["host"] {
  if (value !== "127.0.0.1" && value !== "::1") {
    throw new ConfigError("TIME_CAPSULE_HOST", "must be a loopback address");
  }
  return value;
}

function parsePort(value: string): number {
  if (!/^(0|[1-9]\d*)$/.test(value)) {
    throw new ConfigError("TIME_CAPSULE_PORT", "must be an integer");
  }

  const port = Number(value);
  if (!Number.isSafeInteger(port) || (port !== 0 && (port < 1024 || port > 65535))) {
    throw new ConfigError(
      "TIME_CAPSULE_PORT",
      "must be 0 for an isolated test or between 1024 and 65535"
    );
  }
  return port;
}

function parseLogLevel(value: string): RuntimeConfig["logLevel"] {
  if (value !== "silent" && value !== "info") {
    throw new ConfigError("TIME_CAPSULE_LOG_LEVEL", "must be silent or info");
  }
  return value;
}

export function loadConfig(
  source: Readonly<Record<string, string | undefined>>
): Readonly<RuntimeConfig> {
  const config: RuntimeConfig = {
    runtime: parseRuntime(requireValue(source, "TIME_CAPSULE_RUNTIME")),
    host: parseHost(requireValue(source, "TIME_CAPSULE_HOST")),
    port: parsePort(requireValue(source, "TIME_CAPSULE_PORT")),
    logLevel: parseLogLevel(requireValue(source, "TIME_CAPSULE_LOG_LEVEL"))
  };

  return Object.freeze(config);
}
