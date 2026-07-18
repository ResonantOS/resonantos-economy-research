import { createServer, type Server, type ServerResponse } from "node:http";
import type { RuntimeConfig } from "../config/index.js";

const HEALTH_BODY = JSON.stringify({ status: "ok" });
const NOT_FOUND_BODY = JSON.stringify({ error: "not_found" });

function sendJson(response: ServerResponse, statusCode: number, body: string): void {
  response.writeHead(statusCode, {
    "cache-control": "no-store",
    "content-length": Buffer.byteLength(body),
    "content-type": "application/json; charset=utf-8",
    "x-content-type-options": "nosniff"
  });
  response.end(body);
}

export function createHealthServer(_config: Readonly<RuntimeConfig>): Server {
  return createServer((request, response) => {
    const path = new URL(request.url ?? "/", "http://loopback.invalid").pathname;

    if (request.method === "GET" && path === "/health") {
      sendJson(response, 200, HEALTH_BODY);
      return;
    }

    sendJson(response, 404, NOT_FOUND_BODY);
  });
}

export async function startHealthServer(
  server: Server,
  config: Readonly<RuntimeConfig>
): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const onError = (error: Error): void => {
      server.off("listening", onListening);
      reject(error);
    };
    const onListening = (): void => {
      server.off("error", onError);
      resolve();
    };

    server.once("error", onError);
    server.once("listening", onListening);
    server.listen(config.port, config.host);
  });
}
