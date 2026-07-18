(() => {
  "use strict";

  const PROFILE_VERSION = "2.0.0";
  const MAX_GRAPHEMES = 160;
  const CLOSE_AT = "2026-07-21T00:00:00Z";
  const form = document.querySelector("#capsule-form");

  if (!form) return;

  const reviewPanel = document.querySelector("#review-panel");
  const reviewGrid = document.querySelector("#review-grid");
  const receipt = document.querySelector("#receipt");
  const receiptSummary = document.querySelector("#receipt-summary");
  const receiptId = document.querySelector("#receipt-id");
  const formErrors = document.querySelector("#form-errors");
  const confirmButton = document.querySelector("#confirm-preview");
  const closeButton = document.querySelector("#close-simulator");
  const quietButton = document.querySelector("#quiet-exit");
  const keepEditing = document.querySelector("#keep-editing");
  const editAfterReceipt = document.querySelector("#edit-after-receipt");
  const liveStatus = document.querySelector("#live-status");
  const acknowledgements = [...document.querySelectorAll("[data-ack]")];
  const horizons = [...form.querySelectorAll("[data-horizon]")];
  const fields = [...form.querySelectorAll("[data-slot]")];
  const composing = new WeakSet();
  const segmenter = typeof Intl.Segmenter === "function"
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

  let isClosed = false;
  let reviewedRevision = -1;
  let draftRevision = 0;

  const horizonNames = {
    "2": "Two years",
    "5": "Five years",
    "10": "Ten years"
  };

  function announce(message) {
    liveStatus.textContent = "";
    const publish = () => { liveStatus.textContent = message; };
    if (typeof window.requestAnimationFrame === "function") window.requestAnimationFrame(publish);
    else window.setTimeout(publish, 0);
  }

  function graphemeCount(value) {
    return segmenter ? [...segmenter.segment(value)].length : Array.from(value).length;
  }

  function normalizePhrase(value) {
    return String(value)
      .normalize("NFC")
      .replace(/\s+/gu, " ")
      .trim();
  }

  function validatePhrase(value) {
    const normalized = normalizePhrase(value);
    if (!normalized) {
      return { valid: true, empty: true, normalized: "", graphemes: 0, message: "" };
    }

    if (/[\p{Cc}]/u.test(normalized) || /[\u200B\u200C\u202A-\u202E\u2060\u2066-\u2069\uFEFF]/u.test(normalized)) {
      return {
        valid: false,
        empty: false,
        normalized,
        graphemes: graphemeCount(normalized),
        message: "Remove invisible, directional, or control characters from this phrase."
      };
    }

    const graphemes = graphemeCount(normalized);
    if (graphemes > MAX_GRAPHEMES) {
      return {
        valid: false,
        empty: false,
        normalized,
        graphemes,
        message: `Keep this phrase to ${MAX_GRAPHEMES} characters or fewer.`
      };
    }

    return { valid: true, empty: false, normalized, graphemes, message: "" };
  }

  function partsFor(field) {
    return {
      input: field.querySelector("[data-phrase]"),
      error: field.querySelector("[data-error]"),
      count: field.querySelector(".phrase-count")
    };
  }

  function setError(field, message) {
    const { input, error } = partsFor(field);
    error.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    field.classList.toggle("has-error", Boolean(message));
  }

  function updateCount(field) {
    const { input, count } = partsFor(field);
    const value = input.value.normalize("NFC");
    const length = graphemeCount(value);
    count.textContent = `${length} / ${MAX_GRAPHEMES}`;
    count.classList.toggle("over-limit", length > MAX_GRAPHEMES);
    count.setAttribute("aria-label", `${length} of ${MAX_GRAPHEMES} characters used`);
  }

  function fieldsForHorizon(horizon) {
    return [...horizon.querySelectorAll("[data-slot]")];
  }

  function setSecondAvailability(horizon) {
    const [firstField, secondField] = fieldsForHorizon(horizon);
    const first = partsFor(firstField).input;
    const second = partsFor(secondField).input;
    const firstResult = validatePhrase(first.value);
    const secondHasDraft = !validatePhrase(second.value).empty;
    const unlocked = !isClosed && ((firstResult.valid && !firstResult.empty) || secondHasDraft);

    second.disabled = !unlocked;
    secondField.classList.toggle("locked", !unlocked);
    secondField.setAttribute("aria-disabled", unlocked ? "false" : "true");
    second.placeholder = unlocked ? "Another small message…" : "This place opens after the first";
  }

  function updateField(field, showErrors = false) {
    const { input } = partsFor(field);
    const result = validatePhrase(input.value);
    field.classList.toggle("has-phrase", !result.empty);
    setError(field, showErrors && !result.valid ? result.message : "");
    updateCount(field);
    setSecondAvailability(field.closest("[data-horizon]"));
    return result;
  }

  function clearReviewState(message = "") {
    const hadReview = !reviewPanel.hidden || !receipt.hidden;
    reviewPanel.hidden = true;
    receipt.hidden = true;
    acknowledgements.forEach((ack) => { ack.checked = false; });
    confirmButton.disabled = true;
    reviewedRevision = -1;
    if (hadReview && message) announce(message);
  }

  function markDraftChanged() {
    draftRevision += 1;
    clearReviewState("Your draft changed. Review the complete capsule again when you are ready.");
  }

  function validateForm() {
    const issues = [];
    let firstInvalid = null;
    let phraseCount = 0;

    horizons.forEach((horizon) => {
      const [firstField, secondField] = fieldsForHorizon(horizon);
      const first = partsFor(firstField).input;
      const second = partsFor(secondField).input;
      const firstResult = validatePhrase(first.value);
      const secondResult = validatePhrase(second.value);

      let firstMessage = firstResult.valid ? "" : firstResult.message;
      const secondMessage = secondResult.valid ? "" : secondResult.message;
      if (firstResult.empty && !secondResult.empty) {
        firstMessage = "Add the first phrase for this opening, or move this message into that first place.";
      }

      setError(firstField, firstMessage);
      setError(secondField, secondMessage);

      if (firstMessage) {
        issues.push(firstMessage);
        firstInvalid ||= first;
      }
      if (secondMessage) {
        issues.push(secondMessage);
        firstInvalid ||= second;
      }

      if (firstResult.valid && !firstResult.empty) {
        first.value = firstResult.normalized;
        phraseCount += 1;
      }
      if (secondResult.valid && !secondResult.empty) {
        second.value = secondResult.normalized;
        phraseCount += 1;
      }

      updateCount(firstField);
      updateCount(secondField);
    });

    if (phraseCount === 0 && issues.length === 0) {
      const first = partsFor(fields[0]).input;
      const message = "Leave at least one phrase to create a preview receipt, or choose the quiet path below.";
      issues.push(message);
      firstInvalid = first;
    }

    return { valid: issues.length === 0, issues, firstInvalid, phraseCount };
  }

  function buildEnvelope() {
    const entries = fields.map((field) => {
      const input = partsFor(field).input;
      const [horizon, position] = field.dataset.slot.split("-");
      const result = validatePhrase(input.value);
      return {
        horizon_years: Number(horizon),
        position: Number(position),
        phrase: result.empty ? null : result.normalized,
        visibility: "public_at_opening"
      };
    });

    return {
      schema: "resonant-time-capsule-envelope.v2",
      profile_version: PROFILE_VERSION,
      visibility: "public_at_opening",
      close_at: CLOSE_AT,
      entries
    };
  }

  function appendTextElement(parent, tag, text, className = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    parent.append(element);
    return element;
  }

  function renderReview(envelope) {
    reviewGrid.replaceChildren();

    envelope.entries.forEach((entry) => {
      const item = document.createElement("article");
      item.className = "review-item";
      appendTextElement(item, "span", `${horizonNames[String(entry.horizon_years)]} · phrase ${entry.position}`);

      if (entry.phrase === null) {
        appendTextElement(item, "strong", "Quiet");
        appendTextElement(item, "p", "No message occupies this place.");
      } else {
        const phrase = document.createElement("bdi");
        phrase.dir = "auto";
        phrase.textContent = entry.phrase;
        item.append(phrase);
        appendTextElement(item, "p", `Out of public view until the ${entry.horizon_years}-year opening, then public.`);
      }

      reviewGrid.append(item);
    });
  }

  function createPreviewReceipt(envelope) {
    const phraseCount = envelope.entries.filter((entry) => entry.phrase !== null).length;
    const id = typeof window.crypto?.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

    return {
      id: `PREVIEW-${id}`,
      phrase_count: phraseCount,
      state: "volatile_preview_not_submitted",
      close_at: envelope.close_at
    };
  }

  function resetForm({ announceReset = true } = {}) {
    isClosed = false;
    draftRevision += 1;
    fields.forEach((field) => {
      const { input } = partsFor(field);
      input.value = "";
      input.disabled = input.dataset.position === "2";
      input.setAttribute("aria-invalid", "false");
      field.classList.remove("has-phrase", "has-error");
      field.classList.toggle("locked", input.dataset.position === "2");
      field.setAttribute("aria-disabled", input.dataset.position === "2" ? "true" : "false");
      partsFor(field).error.textContent = "";
      updateCount(field);
    });
    clearReviewState();
    formErrors.hidden = true;
    formErrors.textContent = "";
    closeButton.textContent = "Test the closed state";
    receiptId.textContent = "Not created";
    if (announceReset) announce("The preview was cleared. Nothing was saved.");
  }

  function focusFirstPhrase() {
    const first = form.querySelector("[data-phrase]:not(:disabled)");
    first?.focus();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isClosed) {
      formErrors.textContent = "This capsule is closed. Reopen the test state before reviewing any changes.";
      formErrors.hidden = false;
      formErrors.focus();
      return;
    }

    const validation = validateForm();
    if (!validation.valid) {
      formErrors.textContent = validation.issues.length === 1
        ? validation.issues[0]
        : `${validation.issues.length} phrases need attention before review.`;
      formErrors.hidden = false;
      validation.firstInvalid?.focus();
      announce(formErrors.textContent);
      return;
    }

    formErrors.hidden = true;
    formErrors.textContent = "";
    const envelope = buildEnvelope();
    renderReview(envelope);
    reviewedRevision = draftRevision;
    acknowledgements.forEach((ack) => { ack.checked = false; });
    confirmButton.disabled = true;
    receipt.hidden = true;
    reviewPanel.hidden = false;
    reviewPanel.focus();
    announce(`Review ready with ${validation.phraseCount} phrase${validation.phraseCount === 1 ? "" : "s"}. Nothing has been sent or saved.`);
  });

  form.addEventListener("reset", (event) => {
    event.preventDefault();
    resetForm();
  });

  fields.forEach((field) => {
    const { input } = partsFor(field);
    input.addEventListener("compositionstart", () => composing.add(input));
    input.addEventListener("compositionend", () => {
      composing.delete(input);
      updateField(field, true);
      markDraftChanged();
    });
    input.addEventListener("input", () => {
      updateCount(field);
      if (composing.has(input)) return;
      updateField(field, false);
      markDraftChanged();
    });
    input.addEventListener("blur", () => updateField(field, true));
  });

  acknowledgements.forEach((ack) => ack.addEventListener("change", () => {
    confirmButton.disabled = !acknowledgements.every((item) => item.checked);
  }));

  confirmButton.addEventListener("click", () => {
    if (isClosed || reviewedRevision !== draftRevision) {
      formErrors.textContent = "The capsule changed or closed after review. Please review the current phrases again.";
      formErrors.hidden = false;
      formErrors.focus();
      return;
    }
    if (!acknowledgements.every((item) => item.checked)) return;

    const envelope = buildEnvelope();
    const previewReceipt = createPreviewReceipt(envelope);
    receiptId.textContent = previewReceipt.id;
    receiptSummary.textContent = `${previewReceipt.phrase_count} phrase${previewReceipt.phrase_count === 1 ? "" : "s"} reached a volatile preview receipt. Nothing left this page.`;
    receipt.hidden = false;
    receipt.focus();
    announce("Preview receipt ready. It is not submitted or stored and disappears when this page is refreshed.");
  });

  keepEditing.addEventListener("click", () => {
    clearReviewState();
    focusFirstPhrase();
    announce("Editing resumed. The previous review was not saved.");
  });

  editAfterReceipt.addEventListener("click", () => {
    clearReviewState();
    focusFirstPhrase();
    announce("You returned to the form. The preview receipt was not stored.");
  });

  quietButton.addEventListener("click", () => {
    resetForm({ announceReset: false });
    formErrors.textContent = "Quiet path chosen. No receipt or record was created.";
    formErrors.hidden = false;
    formErrors.focus();
    announce("Quiet path chosen. Nothing was submitted or saved.");
  });

  closeButton.addEventListener("click", () => {
    isClosed = !isClosed;
    clearReviewState();

    if (isClosed) {
      fields.forEach((field) => {
        const { input } = partsFor(field);
        input.disabled = true;
        field.setAttribute("aria-disabled", "true");
      });
      formErrors.textContent = "The capsule is now in its test-closed state. Editing and confirmation fail closed.";
      formErrors.hidden = false;
      closeButton.textContent = "Reopen the test capsule";
      announce("The test capsule closed. All phrase fields are unavailable and nothing was saved.");
    } else {
      horizons.forEach((horizon) => {
        const [firstField] = fieldsForHorizon(horizon);
        partsFor(firstField).input.disabled = false;
        firstField.setAttribute("aria-disabled", "false");
        setSecondAvailability(horizon);
      });
      formErrors.hidden = true;
      formErrors.textContent = "";
      closeButton.textContent = "Test the closed state";
      announce("The test capsule reopened. This changed only the current page.");
    }
  });

  window.TimeCapsuleIntakeV2 = Object.freeze({
    version: PROFILE_VERSION,
    maxGraphemes: MAX_GRAPHEMES,
    closeAt: CLOSE_AT,
    normalizePhrase,
    validatePhrase,
    buildEnvelope
  });

  resetForm({ announceReset: false });
})();
