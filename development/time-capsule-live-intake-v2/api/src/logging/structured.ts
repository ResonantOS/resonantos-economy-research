const EVENTS = new Set([
  "service_started",
  "request_completed",
  "request_rejected",
  "crypto_operation_failed"
]);
const ROUTES = new Set([
  "health",
  "invite_exchange",
  "envelope_command",
  "moderation",
  "unknown"
]);
const METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);
const ERROR_CODES = new Set([
  "PAYLOAD_PROTECTION_FAILED",
  "DATA_KEY_MISSING",
  "DATA_KEY_INVALID",
  "REQUEST_REJECTED",
  "INTERNAL_ERROR"
]);
const REQUEST_ID = /^req_[0-9a-f]{32}$/;

export type LogSink = (jsonLine: string) => void;

function objectValue(value: unknown): Readonly<Record<string, unknown>> {
  return typeof value === "object" && value !== null
    ? value as Readonly<Record<string, unknown>>
    : Object.freeze({});
}

export function sanitizeOperationalLog(
  event: unknown,
  input: unknown,
  now: () => Date = () => new Date()
): Readonly<Record<string, string | number>> {
  const source = objectValue(input);
  const record: Record<string, string | number> = {
    timestamp: now().toISOString(),
    event: typeof event === "string" && EVENTS.has(event) ? event : "unknown"
  };

  if (typeof source.requestId === "string" && REQUEST_ID.test(source.requestId)) {
    record.requestId = source.requestId;
  }
  record.routeId = typeof source.routeId === "string" && ROUTES.has(source.routeId)
    ? source.routeId
    : "unknown";
  if (typeof source.method === "string" && METHODS.has(source.method)) {
    record.method = source.method;
  }
  if (typeof source.status === "number" && Number.isInteger(source.status) && source.status >= 100 && source.status <= 599) {
    record.status = source.status;
  }
  if (typeof source.durationMs === "number" && Number.isFinite(source.durationMs) && source.durationMs >= 0 && source.durationMs <= 86_400_000) {
    record.durationMs = source.durationMs;
  }
  if (typeof source.errorCode === "string" && ERROR_CODES.has(source.errorCode)) {
    record.errorCode = source.errorCode;
  }

  return Object.freeze(record);
}

export class StructuredLogger {
  constructor(
    private readonly sink: LogSink,
    private readonly now: () => Date = () => new Date()
  ) {}

  log(event: unknown, input: unknown): void {
    this.sink(JSON.stringify(sanitizeOperationalLog(event, input, this.now)));
  }
}
