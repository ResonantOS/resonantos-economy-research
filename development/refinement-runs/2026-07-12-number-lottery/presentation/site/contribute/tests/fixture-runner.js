(() => {
  "use strict";

  const fixtures = window.TimeCapsuleFixturesV2;
  const frame = document.querySelector("#simulator");
  const rows = document.querySelector("#results");
  const resultLabel = document.querySelector("#result");
  const countLabel = document.querySelector("#count");
  const rawResult = document.querySelector("#raw-result");
  const versionLabel = document.querySelector("#fixture-version");
  const results = [];

  versionLabel.textContent = `${fixtures.fixtureId}@${fixtures.version}`;

  function record(name, pass, detail) {
    results.push({ name, pass, detail });
    const row = document.createElement("tr");
    const checkCell = document.createElement("th");
    checkCell.scope = "row";
    checkCell.textContent = name;
    const status = document.createElement("td");
    status.className = pass ? "pass" : "fail";
    status.textContent = pass ? "PASS" : "FAIL";
    const evidence = document.createElement("td");
    evidence.textContent = detail;
    row.append(checkCell, status, evidence);
    rows.append(row);
  }

  function check(name, condition, detail) {
    record(name, Boolean(condition), detail);
  }

  function waitForFrame() {
    return new Promise((resolve, reject) => {
      const started = window.performance.now();
      const inspect = () => {
        const ready = frame.contentDocument?.readyState === "complete"
          && frame.contentDocument.querySelector("#phrase-2-1")
          && frame.contentWindow?.TimeCapsuleIntakeV2;
        if (ready) resolve();
        else if (window.performance.now() - started > 5000) reject(new Error("The intake iframe was not ready within five seconds."));
        else window.setTimeout(inspect, 20);
      };
      inspect();
    });
  }

  function tick() {
    return new Promise((resolve) => window.setTimeout(resolve, 0));
  }

  function setValue(win, input, value, composing = false) {
    input.focus();
    if (composing) input.dispatchEvent(new win.Event("compositionstart", { bubbles: true }));
    input.value = value;
    input.dispatchEvent(new win.Event("input", { bubbles: true }));
    if (composing) input.dispatchEvent(new win.Event("compositionend", { bubbles: true }));
  }

  function reset(doc) {
    doc.querySelector('button[type="reset"]').click();
  }

  function review(doc) {
    doc.querySelector('button[type="submit"]').click();
  }

  function acknowledgeAll(win, doc) {
    doc.querySelectorAll("[data-ack]").forEach((ack) => {
      ack.checked = true;
      ack.dispatchEvent(new win.Event("change", { bubbles: true }));
    });
  }

  async function run() {
    await waitForFrame();
    const win = frame.contentWindow;
    const doc = frame.contentDocument;
    const api = win.TimeCapsuleIntakeV2;
    const firstInput = doc.querySelector("#phrase-2-1");
    const firstField = firstInput.closest("[data-slot]");
    const initialResources = win.performance.getEntriesByType("resource").length;

    check("fixture identity", fixtures.fixtureId === "resonant-time-capsule-intake" && fixtures.version === "2.0.0", "Explicit immutable V2 fixture identity and version.");
    check("preview boundary", fixtures.inventedValuesOnly === true && doc.documentElement.dataset.intakeMode === "preview", fixtures.promotionBoundary);
    check("runtime profile", api.version === fixtures.version && api.maxGraphemes === fixtures.phraseProfile.maximumPerPhrase, `Runtime profile ${api.version}; ${api.maxGraphemes}-grapheme maximum.`);

    const phraseInputs = [...doc.querySelectorAll("[data-phrase]")];
    const firstInputs = phraseInputs.filter((input) => input.dataset.position === "1");
    const secondInputs = phraseInputs.filter((input) => input.dataset.position === "2");
    check("initial six-place state", phraseInputs.length === 6 && firstInputs.every((input) => !input.disabled) && secondInputs.every((input) => input.disabled), "Three first places are available; three optional second places begin locked.");
    check("one fixed visibility", doc.querySelectorAll('input[type="radio"], [data-mode]').length === 0 && fixtures.phraseProfile.visibility === "public_at_opening", "No visibility chooser; all accepted phrases are public at their opening.");

    for (const fixture of fixtures.phrases) {
      const result = api.validatePhrase(fixture.input);
      const expected = fixture.expected;
      const normalizedMatches = expected.normalized === undefined || result.normalized === expected.normalized;
      const countMatches = expected.graphemes === undefined || result.graphemes === expected.graphemes;
      const errorMatches = expected.errorContains === undefined || result.message.includes(expected.errorContains);
      check(
        `phrase:${fixture.id}`,
        result.valid === expected.valid && result.empty === expected.empty && normalizedMatches && countMatches && errorMatches,
        result.message || `Normalized as “${result.normalized}” (${result.graphemes} graphemes).`
      );
    }

    reset(doc);
    const secondInput = doc.querySelector("#phrase-2-2");
    setValue(win, firstInput, "Keep becoming.");
    await tick();
    check("flow:second-place-unlocks", !secondInput.disabled, "A valid first phrase opens the second and final place for that horizon.");

    reset(doc);
    firstInput.dispatchEvent(new win.Event("compositionstart", { bubbles: true }));
    firstInput.value = "hello\u202Eworld";
    firstInput.dispatchEvent(new win.Event("input", { bubbles: true }));
    const quietDuringComposition = firstInput.getAttribute("aria-invalid") !== "true";
    firstInput.dispatchEvent(new win.Event("compositionend", { bubbles: true }));
    await tick();
    check("flow:ime-suppression", quietDuringComposition && firstInput.getAttribute("aria-invalid") === "true", "No premature error during composition; validation runs at composition end.");

    reset(doc);
    review(doc);
    await tick();
    check("flow:one-phrase-required", doc.activeElement === firstInput && !doc.querySelector("#form-errors").hidden && doc.querySelector("#review-panel").hidden, doc.querySelector("#form-errors").textContent);

    reset(doc);
    setValue(win, firstInput, "تذكّر هذه اللحظة", true);
    review(doc);
    await tick();
    const bidiPhrase = doc.querySelector("#review-grid bdi");
    check("flow:bidi-review", bidiPhrase?.textContent === "تذكّر هذه اللحظة" && bidiPhrase.dir === "auto", "RTL phrase is isolated in bdi with automatic direction.");
    check("flow:six-place-review", doc.querySelectorAll("#review-grid .review-item").length === 6, "Review renders all six places, including quiet ones.");
    check("flow:two-acknowledgements", doc.querySelectorAll("[data-ack]").length === 2 && doc.querySelector("#confirm-preview").disabled, "Two consequence acknowledgements gate confirmation.");

    acknowledgeAll(win, doc);
    doc.querySelector("#confirm-preview").click();
    await tick();
    const receiptText = doc.querySelector("#receipt-summary").textContent;
    check("flow:volatile-receipt", !doc.querySelector("#receipt").hidden && receiptText.includes("Nothing left this page") && doc.querySelector("#receipt-id").textContent.startsWith("PREVIEW-"), receiptText);

    setValue(win, firstInput, "A changed phrase");
    await tick();
    check("flow:edit-invalidates-review", doc.querySelector("#review-panel").hidden && doc.querySelector("#receipt").hidden && doc.querySelector("#confirm-preview").disabled, "Editing invalidates review, acknowledgements, and receipt.");

    reset(doc);
    doc.querySelector("#quiet-exit").click();
    await tick();
    check("flow:quiet-no-receipt", doc.querySelector("#receipt").hidden && doc.querySelector("#form-errors").textContent.includes("No receipt or record"), doc.querySelector("#form-errors").textContent);

    reset(doc);
    setValue(win, firstInput, "Keep becoming.");
    const envelope = api.buildEnvelope();
    check("payload:fixed-contract", envelope.entries.length === 6 && envelope.entries.every((entry) => entry.visibility === "public_at_opening") && envelope.close_at === "2026-07-21T00:00:00Z", "Six ordered entries, one visibility, and an explicit UTC close instant.");

    doc.querySelector("#close-simulator").click();
    await tick();
    const allClosed = [...doc.querySelectorAll("[data-phrase]")].every((input) => input.disabled);
    review(doc);
    await tick();
    check("flow:close-fails-closed", allClosed && !doc.querySelector("#form-errors").hidden && doc.querySelector("#review-panel").hidden, "Closed state disables every phrase and blocks review.");

    reset(doc);
    setValue(win, firstInput, "Keep becoming.");
    doc.querySelector('button[type="reset"]').click();
    await tick();
    check("flow:reset-volatile", [...doc.querySelectorAll("[data-phrase]")].every((input) => !input.value), "Reset clears all six volatile places.");

    check("no interaction requests", win.performance.getEntriesByType("resource").length === initialResources, `Resource count stayed ${initialResources} after all interactions.`);
    check("no browser persistence", win.localStorage.length === 0 && win.sessionStorage.length === 0 && doc.cookie === "", "Browser storage and cookies remain empty.");
    check("access contract declared", fixtures.accessModes.length === 5 && fixtures.accessModes.some((mode) => mode.id === "screen-reader" && mode.evidence === "manual-required"), "Keyboard, screen reader, RTL/bidi, native IME, and participant retell evidence modes are explicit.");
    check("critical retell gate declared", fixtures.retellProtocol.prompts.every((prompt) => prompt.critical) && fixtures.retellProtocol.passRule.includes("Every participant"), fixtures.retellProtocol.passRule);

    const failed = results.filter((result) => !result.pass);
    resultLabel.textContent = failed.length ? "Machine fixture result: FAIL" : "Machine fixture result: PASS";
    resultLabel.className = failed.length ? "fail" : "pass";
    countLabel.textContent = `${results.length - failed.length}/${results.length} checks passed`;
    rawResult.textContent = JSON.stringify({
      fixtureId: fixtures.fixtureId,
      version: fixtures.version,
      status: failed.length ? "fail" : "pass",
      checks: results
    }, null, 2);
    document.documentElement.dataset.fixtureResult = failed.length ? "fail" : "pass";
  }

  run().catch((error) => {
    record("runner", false, error instanceof Error ? error.stack || error.message : String(error));
    resultLabel.textContent = "Machine fixture result: FAIL";
    resultLabel.className = "fail";
    countLabel.textContent = "Runner stopped unexpectedly";
    rawResult.textContent = JSON.stringify(results, null, 2);
    document.documentElement.dataset.fixtureResult = "fail";
  });
})();
