import { createHash, randomUUID } from "node:crypto";
import { EnvelopeRepository, type OccurrenceRecord } from "./repository.js";
import {
  EnvelopeValidationError,
  validateEnvelope,
  type ConfirmedEnvelope,
  type HorizonYears,
  type SlotPosition
} from "./validation.js";

const OPERATION = "confirm_envelope";

export interface PhraseAad {
  readonly cohortId: string;
  readonly envelopeId: string;
  readonly versionNo: number;
  readonly horizonYears: HorizonYears;
  readonly position: SlotPosition;
  readonly purpose: "entrusted_phrase";
}

export interface ProtectedPhrase {
  readonly phraseCiphertext: Buffer;
  readonly phraseAeadNonce: Buffer;
  readonly commitmentNonce: Buffer;
}

export interface PhrasePayloadPort {
  protect(phrase: string, aad: PhraseAad): ProtectedPhrase;
  reveal(record: OccurrenceRecord, aad: PhraseAad): string;
}

export interface EnvelopeCommand {
  readonly authenticatedScope: string | null;
  readonly sessionScope: string;
  readonly envelopeId: string;
  readonly expectedRulesDigest: string;
  readonly expectedEnvelopeVersion: number | null;
  readonly expectedCloseEpoch: number;
  readonly idempotencyKey: string;
  readonly serverCommitInstantUtc: string;
  readonly envelope: unknown;
}

export interface ReceiptSlot {
  readonly horizonYears: HorizonYears;
  readonly position: SlotPosition;
  readonly occurrenceId: string | null;
}

export interface EnvelopeReceipt {
  readonly outcome: "committed";
  readonly envelopeVersion: number;
  readonly receiptRef: string;
  readonly idempotencyKey: string;
  readonly commandDigest: string;
  readonly serverCommitInstantUtc: string;
  readonly slots: readonly ReceiptSlot[];
}

export type EnvelopeCommandResult =
  | Readonly<{ classification: "commit" | "replay"; mutated: boolean; receipt: EnvelopeReceipt }>
  | Readonly<{
      classification: "rejected" | "conflict";
      mutated: false;
      errorCode:
        | "scope_unauthenticated"
        | "scope_mismatch"
        | "invalid_command"
        | "rules_digest_mismatch"
        | "close_state_not_open"
        | "close_epoch_mismatch"
        | "close_fence_reached"
        | "idempotency_key_reused"
        | "envelope_version_mismatch";
    }>;

export interface EnvelopeCommandOptions {
  readonly payload: PhrasePayloadPort;
  readonly newId?: (prefix: string) => string;
}

function failure(
  classification: "rejected" | "conflict",
  errorCode: Extract<EnvelopeCommandResult, { mutated: false }>["errorCode"]
): EnvelopeCommandResult {
  return Object.freeze({ classification, mutated: false, errorCode });
}

function canonicalDigest(command: EnvelopeCommand, envelope: ConfirmedEnvelope): string {
  const canonical = JSON.stringify({
    operation: OPERATION,
    session_scope: command.sessionScope,
    envelope_id: command.envelopeId,
    expected_rules_digest: command.expectedRulesDigest,
    expected_envelope_version: command.expectedEnvelopeVersion,
    expected_close_epoch: command.expectedCloseEpoch,
    envelope
  });
  return `sha256:${createHash("sha256").update(canonical).digest("hex")}`;
}

function parseReceipt(value: string): EnvelopeReceipt {
  const parsed = JSON.parse(value) as EnvelopeReceipt;
  if (
    parsed.outcome !== "committed" ||
    !Number.isInteger(parsed.envelopeVersion) ||
    !Array.isArray(parsed.slots) ||
    parsed.slots.length !== 6
  ) {
    throw new TypeError("stored envelope receipt is invalid");
  }
  return Object.freeze({ ...parsed, slots: Object.freeze(parsed.slots.map((slot) => Object.freeze(slot))) });
}

function aadFor(record: OccurrenceRecord): PhraseAad {
  return Object.freeze({
    cohortId: "",
    envelopeId: record.envelopeId,
    versionNo: record.versionNo,
    horizonYears: record.horizonYears,
    position: record.position,
    purpose: "entrusted_phrase"
  });
}

export class EnvelopeCommandService {
  private readonly newId: (prefix: string) => string;

  constructor(
    private readonly repository: EnvelopeRepository,
    private readonly options: EnvelopeCommandOptions
  ) {
    this.newId = options.newId ?? ((prefix) => `${prefix}-${randomUUID()}`);
  }

  execute(command: EnvelopeCommand): EnvelopeCommandResult {
    if (command.authenticatedScope === null || command.authenticatedScope.length === 0) {
      return failure("rejected", "scope_unauthenticated");
    }
    if (command.authenticatedScope !== command.sessionScope) {
      return failure("rejected", "scope_mismatch");
    }

    let envelope: ConfirmedEnvelope;
    try {
      envelope = validateEnvelope(command.envelope);
    } catch (error) {
      if (error instanceof EnvelopeValidationError) return failure("rejected", "invalid_command");
      throw error;
    }
    const commandDigest = canonicalDigest(command, envelope);

    return this.repository.transaction(() => {
      const state = this.repository.getState(command.envelopeId);
      if (!state) return failure("rejected", "invalid_command");
      if (command.expectedRulesDigest !== state.rulesDigest) {
        return failure("conflict", "rules_digest_mismatch");
      }
      if (state.closeState !== "open") {
        return failure("rejected", "close_state_not_open");
      }
      if (command.expectedCloseEpoch !== state.closeEpoch) {
        return failure("conflict", "close_epoch_mismatch");
      }
      const commitTime = Date.parse(command.serverCommitInstantUtc);
      if (!Number.isFinite(commitTime)) return failure("rejected", "invalid_command");
      if (commitTime >= Date.parse(state.closeAtUtc)) {
        return failure("rejected", "close_fence_reached");
      }

      const priorIdempotency = this.repository.findIdempotency(
        command.sessionScope,
        OPERATION,
        command.idempotencyKey
      );
      if (priorIdempotency) {
        if (priorIdempotency.commandDigest !== commandDigest) {
          return failure("conflict", "idempotency_key_reused");
        }
        return Object.freeze({
          classification: "replay",
          mutated: false,
          receipt: parseReceipt(priorIdempotency.resultJson)
        });
      }
      if (command.expectedEnvelopeVersion !== state.currentVersion) {
        return failure("conflict", "envelope_version_mismatch");
      }

      const nextVersion = (state.currentVersion ?? 0) + 1;
      const priorReceipt = state.currentVersion === null
        ? undefined
        : this.repository.findVersionReceipt(command.envelopeId, state.currentVersion);
      const priorSlots = priorReceipt ? parseReceipt(priorReceipt).slots : [];
      const newOccurrences: Array<{
        occurrenceId: string;
        horizonYears: HorizonYears;
        position: SlotPosition;
        payload: ProtectedPhrase;
      }> = [];
      let reused = 0;
      let withdrawn = 0;

      const receiptSlots = envelope.slots.map((slot, index): ReceiptSlot => {
        const priorId = priorSlots[index]?.occurrenceId ?? null;
        if (slot.phrase.length === 0) {
          if (priorId) withdrawn += 1;
          return Object.freeze({
            horizonYears: slot.horizon_years,
            position: slot.position,
            occurrenceId: null
          });
        }

        if (priorId) {
          const prior = this.repository.findOccurrence(priorId);
          if (!prior) throw new TypeError("prior receipt references a missing occurrence");
          const priorAad = { ...aadFor(prior), cohortId: state.cohortId };
          if (this.options.payload.reveal(prior, priorAad).normalize("NFC") === slot.phrase) {
            reused += 1;
            return Object.freeze({
              horizonYears: slot.horizon_years,
              position: slot.position,
              occurrenceId: priorId
            });
          }
        }

        const occurrenceId = this.newId("occurrence");
        const aad: PhraseAad = Object.freeze({
          cohortId: state.cohortId,
          envelopeId: state.envelopeId,
          versionNo: nextVersion,
          horizonYears: slot.horizon_years,
          position: slot.position,
          purpose: "entrusted_phrase"
        });
        newOccurrences.push({
          occurrenceId,
          horizonYears: slot.horizon_years,
          position: slot.position,
          payload: this.options.payload.protect(slot.phrase, aad)
        });
        return Object.freeze({
          horizonYears: slot.horizon_years,
          position: slot.position,
          occurrenceId
        });
      });

      const createdAtUtc = new Date(commitTime).toISOString();
      const receipt: EnvelopeReceipt = Object.freeze({
        outcome: "committed",
        envelopeVersion: nextVersion,
        receiptRef: `receipt:${OPERATION}:${command.idempotencyKey}`,
        idempotencyKey: command.idempotencyKey,
        commandDigest,
        serverCommitInstantUtc: createdAtUtc,
        slots: Object.freeze(receiptSlots)
      });

      this.repository.insertVersion({
        envelopeId: state.envelopeId,
        cohortId: state.cohortId,
        versionNo: nextVersion,
        rulesDigest: state.rulesDigest,
        closeEpoch: state.closeEpoch,
        commandDigest,
        createdAtUtc
      });
      for (const occurrence of newOccurrences) {
        this.repository.insertOccurrence({
          occurrenceId: occurrence.occurrenceId,
          envelopeId: state.envelopeId,
          versionNo: nextVersion,
          horizonYears: occurrence.horizonYears,
          position: occurrence.position,
          ...occurrence.payload,
          createdAtUtc
        });
      }
      this.repository.insertIdempotency({
        sessionScope: command.sessionScope,
        operation: OPERATION,
        idempotencyKey: command.idempotencyKey,
        commandDigest,
        resultJson: JSON.stringify(receipt),
        envelopeId: state.envelopeId,
        committedVersionNo: nextVersion,
        createdAtUtc
      });
      this.repository.appendAudit({
        eventId: this.newId("audit"),
        envelopeId: state.envelopeId,
        eventType: "envelope_version_confirmed",
        factsJson: JSON.stringify({
          version_no: nextVersion,
          new_occurrences: newOccurrences.length,
          reused_occurrences: reused,
          withdrawn_slots: withdrawn,
          content_present: false
        }),
        createdAtUtc
      });

      return Object.freeze({ classification: "commit", mutated: true, receipt });
    });
  }
}
