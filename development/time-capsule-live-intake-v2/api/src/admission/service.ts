import {
  digestInviteSecret,
  digestMatches,
  digestSessionCapability,
  isBearerValue,
  nodeRandomSource,
  type RandomSource
} from "./crypto.js";
import { AdmissionRepository, type InviteRecord } from "./repository.js";

export const SESSION_COOKIE_NAME = "__Secure-resonant_capsule_session";

export interface InviteSessionOptions {
  readonly allowedOrigin: string;
  readonly sessionTtlSeconds: number;
  readonly random?: RandomSource;
}

export interface ExchangeRequest {
  readonly origin: string | undefined;
  readonly body: unknown;
}

export type ExchangeResult =
  | Readonly<{
      ok: true;
      status: 200;
      setCookie: string;
      body: Readonly<{
        status: "session_ready";
        envelopeId: string;
        csrfToken: string;
        expiresAtUtc: string;
      }>;
    }>
  | Readonly<{
      ok: false;
      status: 401 | 403;
      setCookie: null;
      body: Readonly<{ error: "invite_unavailable" | "request_not_allowed" }>;
    }>;

export interface SessionAuthorization {
  readonly origin: string | undefined;
  readonly cookieHeader: string | undefined;
  readonly csrfToken: string | undefined;
  readonly now: Date;
}

export type AuthorizationResult =
  | Readonly<{ ok: true; cohortId: string; envelopeId: string }>
  | Readonly<{ ok: false; error: "session_unavailable" }>;

export type StewardResult =
  | Readonly<{ ok: true; inviteId: string; envelopeId: string }>
  | Readonly<{ ok: false; error: "invite_unavailable" | "recovery_unavailable" }>;

function parseExchangeSecret(body: unknown): string | undefined {
  if (!body || typeof body !== "object") return undefined;
  const value = (body as Record<string, unknown>).inviteSecret;
  return isBearerValue(value) ? value : undefined;
}

function parseCookie(header: string | undefined, name: string): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return rest.join("=");
  }
  return undefined;
}

function isOpen(record: Pick<InviteRecord, "cohortState" | "closeAtUtc">, now: Date): boolean {
  return record.cohortState === "open" && now.getTime() < Date.parse(record.closeAtUtc);
}

function unavailableInvite(): ExchangeResult {
  return Object.freeze({
    ok: false,
    status: 401,
    setCookie: null,
    body: Object.freeze({ error: "invite_unavailable" })
  });
}

export class InviteSessionService {
  private readonly random: RandomSource;

  constructor(
    private readonly repository: AdmissionRepository,
    private readonly options: InviteSessionOptions
  ) {
    if (!Number.isInteger(options.sessionTtlSeconds) || options.sessionTtlSeconds < 60) {
      throw new TypeError("sessionTtlSeconds must be an integer of at least 60");
    }
    this.random = options.random ?? nodeRandomSource;
  }

  exchange(request: ExchangeRequest, now: Date): ExchangeResult {
    if (request.origin !== this.options.allowedOrigin) {
      return Object.freeze({
        ok: false,
        status: 403,
        setCookie: null,
        body: Object.freeze({ error: "request_not_allowed" })
      });
    }

    const inviteSecret = parseExchangeSecret(request.body);
    const candidateDigest = digestInviteSecret(inviteSecret ?? "invalid-invite-format");

    return this.repository.transaction(() => {
      const invite = inviteSecret
        ? this.repository.findActiveInviteByDigest(candidateDigest)
        : undefined;
      const verified = digestMatches(invite?.credentialDigest, candidateDigest);
      if (!invite || !verified || !isOpen(invite, now)) return unavailableInvite();

      const capability = this.random.token();
      const csrfToken = this.random.token();
      if (!isBearerValue(capability) || !isBearerValue(csrfToken)) {
        throw new TypeError("random source returned an invalid bearer token");
      }

      const createdAtUtc = now.toISOString();
      const expiresAtUtc = new Date(
        now.getTime() + this.options.sessionTtlSeconds * 1000
      ).toISOString();
      const sessionDigest = digestSessionCapability(capability, csrfToken);

      this.repository.revokeActiveSessions(invite.envelopeId);
      this.repository.insertSession({
        sessionDigest,
        inviteId: invite.inviteId,
        envelopeId: invite.envelopeId,
        expiresAtUtc,
        createdAtUtc
      });
      this.repository.appendAudit({
        eventId: this.random.id("audit"),
        entityType: "invite",
        pseudoref: invite.inviteId,
        eventType: "invite_exchanged",
        facts: Object.freeze({ session_rotated: true, content_present: false }),
        createdAtUtc
      });

      const setCookie = [
        `${SESSION_COOKIE_NAME}=${capability}`,
        "Path=/api",
        `Max-Age=${this.options.sessionTtlSeconds}`,
        "Secure",
        "HttpOnly",
        "SameSite=Strict"
      ].join("; ");

      return Object.freeze({
        ok: true,
        status: 200,
        setCookie,
        body: Object.freeze({
          status: "session_ready",
          envelopeId: invite.envelopeId,
          csrfToken,
          expiresAtUtc
        })
      });
    });
  }

  authorize(request: SessionAuthorization): AuthorizationResult {
    if (request.origin !== this.options.allowedOrigin) {
      return Object.freeze({ ok: false, error: "session_unavailable" });
    }

    const capability = parseCookie(request.cookieHeader, SESSION_COOKIE_NAME);
    if (!isBearerValue(capability) || !isBearerValue(request.csrfToken)) {
      const dummy = digestSessionCapability("A".repeat(43), "B".repeat(43));
      digestMatches(undefined, dummy);
      return Object.freeze({ ok: false, error: "session_unavailable" });
    }

    const candidateDigest = digestSessionCapability(capability, request.csrfToken);
    const session = this.repository.findActiveSessionByDigest(candidateDigest);
    const verified = digestMatches(session?.sessionDigest, candidateDigest);
    const usable =
      session &&
      verified &&
      session.cohortState === "open" &&
      request.now.getTime() < Date.parse(session.closeAtUtc) &&
      request.now.getTime() < Date.parse(session.expiresAtUtc);

    if (!usable) return Object.freeze({ ok: false, error: "session_unavailable" });
    return Object.freeze({
      ok: true,
      cohortId: session.cohortId,
      envelopeId: session.envelopeId
    });
  }

  revoke(input: {
    inviteId: string;
    authenticatedStewardRef: string;
    now: Date;
  }): StewardResult {
    return this.repository.transaction(() => {
      const invite = this.repository.findActiveInviteById(input.inviteId);
      if (!invite || input.authenticatedStewardRef.length === 0) {
        return Object.freeze({ ok: false, error: "invite_unavailable" });
      }

      const at = input.now.toISOString();
      this.repository.revokeInvite(invite.inviteId, at);
      this.repository.revokeActiveSessions(invite.envelopeId);
      this.repository.appendAudit({
        eventId: this.random.id("audit"),
        entityType: "invite",
        pseudoref: invite.inviteId,
        eventType: "invite_revoked",
        reasonCode: "steward_revocation",
        facts: Object.freeze({ sessions_revoked: true, content_present: false }),
        createdAtUtc: at
      });
      return Object.freeze({ ok: true, inviteId: invite.inviteId, envelopeId: invite.envelopeId });
    });
  }

  recover(input: {
    inviteId: string;
    newInviteSecret: string;
    authenticatedStewardRef: string;
    now: Date;
  }): StewardResult {
    if (!isBearerValue(input.newInviteSecret) || input.authenticatedStewardRef.length === 0) {
      return Object.freeze({ ok: false, error: "recovery_unavailable" });
    }

    try {
      return this.repository.transaction(() => {
        const prior = this.repository.findActiveInviteById(input.inviteId);
        if (!prior || !isOpen(prior, input.now)) {
          return Object.freeze({ ok: false, error: "recovery_unavailable" });
        }

        const at = input.now.toISOString();
        const nextInviteId = this.random.id("invite");
        this.repository.revokeInvite(prior.inviteId, at);
        this.repository.revokeActiveSessions(prior.envelopeId);
        this.repository.insertRecoveredInvite({
          inviteId: nextInviteId,
          cohortId: prior.cohortId,
          envelopeId: prior.envelopeId,
          credentialDigest: digestInviteSecret(input.newInviteSecret),
          issuedAtUtc: at
        });
        this.repository.appendAudit({
          eventId: this.random.id("audit"),
          entityType: "invite",
          pseudoref: prior.envelopeId,
          eventType: "invite_recovered",
          reasonCode: "steward_recovery",
          facts: Object.freeze({ prior_revoked: true, sessions_revoked: true, content_present: false }),
          createdAtUtc: at
        });
        return Object.freeze({ ok: true, inviteId: nextInviteId, envelopeId: prior.envelopeId });
      });
    } catch {
      return Object.freeze({ ok: false, error: "recovery_unavailable" });
    }
  }
}
