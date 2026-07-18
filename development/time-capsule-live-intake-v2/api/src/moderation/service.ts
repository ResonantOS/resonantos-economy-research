import { randomUUID } from "node:crypto";
import type { PhrasePayloadPort } from "../envelope/service.js";
import type { HorizonYears, SlotPosition } from "../envelope/validation.js";
import {
  type FinalDisposition,
  type ModerationOccurrence,
  type ModerationReasonCode,
  type ModerationStore
} from "./repository.js";

const STEWARD_REF = /^steward:[a-z0-9][a-z0-9_-]{2,63}$/;
const ACCEPT_REASONS = new Set<ModerationReasonCode>(["within_policy"]);
const REJECT_REASONS = new Set<ModerationReasonCode>([
  "harmful_content",
  "personal_data",
  "spam",
  "other_safety"
]);

export interface StewardPrincipal {
  readonly authenticated: true;
  readonly role: "moderator";
  readonly stewardRef: string;
}

export interface ParticipantPrincipal {
  readonly authenticated: true;
  readonly role: "participant";
  readonly envelopeId: string;
}

export interface PrivateQueueItem {
  readonly scope: "steward_private";
  readonly occurrenceId: string;
  readonly envelopeVersion: number;
  readonly horizonYears: HorizonYears;
  readonly position: SlotPosition;
  readonly phrase: string;
}

export type ModerationErrorCode =
  | "moderator_unauthorized"
  | "participant_unauthorized"
  | "invalid_request"
  | "occurrence_not_found"
  | "occurrence_version_mismatch"
  | "moderation_already_decided"
  | "moderation_disposition_conflict"
  | "cohort_not_open"
  | "close_fence_reached";

type Failure = Readonly<{
  classification: "rejected" | "conflict";
  mutated: false;
  errorCode: ModerationErrorCode;
}>;

export type QueueResult =
  | Readonly<{ classification: "authorized"; items: readonly PrivateQueueItem[] }>
  | Failure;

export interface ModerationCommand {
  readonly principal: StewardPrincipal | null;
  readonly occurrenceId: string;
  readonly expectedEnvelopeVersion: number;
  readonly disposition: FinalDisposition;
  readonly reasonCode: ModerationReasonCode;
  readonly actionInstantUtc: string;
}

export type ModerationCommandResult =
  | Readonly<{
      classification: "commit";
      mutated: true;
      dispositionId: string;
      occurrenceId: string;
      disposition: FinalDisposition;
      reasonCode: ModerationReasonCode;
      createdAtUtc: string;
    }>
  | Failure;

export type ParticipantStatusResult =
  | Readonly<{
      classification: "authorized";
      occurrenceId: string;
      status: "pending" | FinalDisposition;
      reasonCode: ModerationReasonCode | null;
    }>
  | Failure;

export type ClosingEligibility =
  | "missing"
  | "ineligible_pending"
  | "ineligible_rejected"
  | "eligible_accepted";

export interface ModerationServiceOptions {
  readonly payload: PhrasePayloadPort;
  readonly newId?: (prefix: string) => string;
}

function failure(
  classification: "rejected" | "conflict",
  errorCode: ModerationErrorCode
): Failure {
  return Object.freeze({ classification, mutated: false, errorCode });
}

function isSteward(principal: StewardPrincipal | null): principal is StewardPrincipal {
  return principal !== null &&
    principal.authenticated === true &&
    principal.role === "moderator" &&
    STEWARD_REF.test(principal.stewardRef);
}

function isParticipant(principal: ParticipantPrincipal | null): principal is ParticipantPrincipal {
  return principal !== null &&
    principal.authenticated === true &&
    principal.role === "participant" &&
    principal.envelopeId.length > 0;
}

function validReason(disposition: FinalDisposition, reasonCode: ModerationReasonCode): boolean {
  return disposition === "accepted"
    ? ACCEPT_REASONS.has(reasonCode)
    : disposition === "rejected" && REJECT_REASONS.has(reasonCode);
}

function phraseAad(record: ModerationOccurrence) {
  return Object.freeze({
    cohortId: record.cohortId,
    envelopeId: record.envelopeId,
    versionNo: record.versionNo,
    horizonYears: record.horizonYears,
    position: record.position,
    purpose: "entrusted_phrase" as const
  });
}

export class ModerationService {
  private readonly newId: (prefix: string) => string;

  constructor(
    private readonly store: ModerationStore,
    private readonly options: ModerationServiceOptions
  ) {
    this.newId = options.newId ?? ((prefix) => `${prefix}-${randomUUID()}`);
  }

  listPending(
    principal: StewardPrincipal | null,
    nowUtc: string,
    limit = 50
  ): QueueResult {
    if (!isSteward(principal)) return failure("rejected", "moderator_unauthorized");
    const now = Date.parse(nowUtc);
    if (!Number.isFinite(now) || !Number.isInteger(limit) || limit < 1 || limit > 100) {
      return failure("rejected", "invalid_request");
    }

    const items = this.store.listPending(limit)
      .filter((record) => record.closeState === "open" && now < Date.parse(record.closeAtUtc))
      .map((record): PrivateQueueItem => Object.freeze({
        scope: "steward_private",
        occurrenceId: record.occurrenceId,
        envelopeVersion: record.versionNo,
        horizonYears: record.horizonYears,
        position: record.position,
        phrase: this.options.payload.reveal(record, phraseAad(record))
      }));
    return Object.freeze({ classification: "authorized", items: Object.freeze(items) });
  }

  decide(command: ModerationCommand): ModerationCommandResult {
    const principal = command.principal;
    if (!isSteward(principal)) return failure("rejected", "moderator_unauthorized");
    if (
      command.occurrenceId.length === 0 ||
      !Number.isInteger(command.expectedEnvelopeVersion) ||
      command.expectedEnvelopeVersion < 1 ||
      !validReason(command.disposition, command.reasonCode)
    ) {
      return failure("rejected", "invalid_request");
    }
    const actionTime = Date.parse(command.actionInstantUtc);
    if (!Number.isFinite(actionTime)) return failure("rejected", "invalid_request");
    const createdAtUtc = new Date(actionTime).toISOString();

    return this.store.transaction(() => {
      const record = this.store.findOccurrence(command.occurrenceId);
      if (!record) return failure("rejected", "occurrence_not_found");
      if (record.versionNo !== command.expectedEnvelopeVersion) {
        return failure("conflict", "occurrence_version_mismatch");
      }
      if (record.disposition !== null) {
        return record.disposition === command.disposition && record.reasonCode === command.reasonCode
          ? failure("conflict", "moderation_already_decided")
          : failure("conflict", "moderation_disposition_conflict");
      }
      if (record.closeState !== "open") return failure("rejected", "cohort_not_open");
      if (actionTime >= Date.parse(record.closeAtUtc)) {
        return failure("rejected", "close_fence_reached");
      }

      const dispositionId = this.newId("disposition");
      const eventId = this.newId("audit");
      this.store.insertDisposition({
        dispositionId,
        occurrenceId: record.occurrenceId,
        disposition: command.disposition,
        reasonCode: command.reasonCode,
        stewardRef: principal.stewardRef,
        createdAtUtc
      });
      this.store.appendAudit({
        eventId,
        occurrenceId: record.occurrenceId,
        reasonCode: command.reasonCode,
        factsJson: JSON.stringify({
          disposition_id: dispositionId,
          occurrence_id: record.occurrenceId,
          envelope_version: record.versionNo,
          disposition: command.disposition,
          reason_code: command.reasonCode,
          content_present: false
        }),
        createdAtUtc
      });

      return Object.freeze({
        classification: "commit",
        mutated: true,
        dispositionId,
        occurrenceId: record.occurrenceId,
        disposition: command.disposition,
        reasonCode: command.reasonCode,
        createdAtUtc
      });
    });
  }

  participantStatus(
    principal: ParticipantPrincipal | null,
    occurrenceId: string
  ): ParticipantStatusResult {
    if (!isParticipant(principal)) return failure("rejected", "participant_unauthorized");
    const record = this.store.findOccurrence(occurrenceId);
    if (!record || record.envelopeId !== principal.envelopeId) {
      return failure("rejected", "occurrence_not_found");
    }
    return Object.freeze({
      classification: "authorized",
      occurrenceId: record.occurrenceId,
      status: record.disposition ?? "pending",
      reasonCode: record.reasonCode
    });
  }

  closingEligibility(occurrenceId: string): ClosingEligibility {
    const record = this.store.findOccurrence(occurrenceId);
    if (!record) return "missing";
    if (record.disposition === "accepted") return "eligible_accepted";
    if (record.disposition === "rejected") return "ineligible_rejected";
    return "ineligible_pending";
  }
}
