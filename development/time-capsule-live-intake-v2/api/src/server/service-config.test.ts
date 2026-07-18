import assert from "node:assert/strict";
import type { Server } from "node:http";
import test from "node:test";
import { CONFIG_KEYS, ConfigError, loadConfig } from "../config/index.js";
import { createHealthServer, startHealthServer } from "./index.js";

const VALID_ENV = Object.freeze({
  TIME_CAPSULE_RUNTIME: "synthetic",
  TIME_CAPSULE_HOST: "127.0.0.1",
  TIME_CAPSULE_PORT: "0",
  TIME_CAPSULE_LOG_LEVEL: "silent"
});

function closeServer(server: Server): Promise<void> {
  return new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
}

test("service-config: accepts one complete synthetic loopback configuration", () => {
  const config = loadConfig(VALID_ENV);

  assert.deepEqual(config, {
    runtime: "synthetic",
    host: "127.0.0.1",
    port: 0,
    logLevel: "silent"
  });
  assert.equal(Object.isFrozen(config), true);
  assert.deepEqual(Object.keys(config).sort(), ["host", "logLevel", "port", "runtime"]);
  assert.equal(Object.keys(config).some((key) => /secret|key|token|credential/i.test(key)), false);
});

test("service-config: every declared field is required and has no default", async (context) => {
  for (const field of CONFIG_KEYS) {
    await context.test(field, () => {
      const source: Record<string, string | undefined> = { ...VALID_ENV };
      delete source[field];

      assert.throws(
        () => loadConfig(source),
        (error: unknown) =>
          error instanceof ConfigError &&
          error.code === "CONFIG_INVALID" &&
          error.field === field &&
          error.message === `${field} is required`
      );
    });
  }
});

test("service-config: rejects capability, network, port, and log-level expansion", async (context) => {
  const cases = [
    ["production runtime", "TIME_CAPSULE_RUNTIME", "production"],
    ["live runtime", "TIME_CAPSULE_RUNTIME", "live"],
    ["public bind", "TIME_CAPSULE_HOST", "0.0.0.0"],
    ["host name", "TIME_CAPSULE_HOST", "localhost"],
    ["non-numeric port", "TIME_CAPSULE_PORT", "eight-thousand"],
    ["privileged port", "TIME_CAPSULE_PORT", "80"],
    ["oversized port", "TIME_CAPSULE_PORT", "65536"],
    ["debug log level", "TIME_CAPSULE_LOG_LEVEL", "debug"]
  ] as const;

  for (const [name, field, value] of cases) {
    await context.test(name, () => {
      assert.throws(
        () => loadConfig({ ...VALID_ENV, [field]: value }),
        (error: unknown) => error instanceof ConfigError && error.field === field
      );
    });
  }
});

test("service-config: validation errors identify fields without reflecting values", () => {
  const secretNeedle = "not-a-secret-but-must-not-reflect";

  assert.throws(
    () => loadConfig({ ...VALID_ENV, TIME_CAPSULE_HOST: secretNeedle }),
    (error: unknown) =>
      error instanceof ConfigError &&
      error.field === "TIME_CAPSULE_HOST" &&
      !error.message.includes(secretNeedle)
  );
});

test("service-config: health is exact, non-cacheable, and contains no internals", async (context) => {
  const config = loadConfig(VALID_ENV);
  const server = createHealthServer(config);
  context.after(() => closeServer(server));
  await startHealthServer(server, config);

  const address = server.address();
  assert(address && typeof address === "object");
  const origin = `http://127.0.0.1:${address.port}`;
  const response = await fetch(`${origin}/health`);
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "application/json; charset=utf-8");
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(body, '{"status":"ok"}');
  assert.deepEqual(Object.keys(JSON.parse(body)), ["status"]);
  assert.equal(body.includes(config.runtime), false);
  assert.equal(body.includes(config.host), false);
  assert.equal(body.includes(config.logLevel), false);

  const missing = await fetch(`${origin}/internal/config`);
  assert.equal(missing.status, 404);
  assert.equal(await missing.text(), '{"error":"not_found"}');

  const wrongMethod = await fetch(`${origin}/health`, { method: "POST" });
  assert.equal(wrongMethod.status, 404);
  assert.equal(await wrongMethod.text(), '{"error":"not_found"}');
});
