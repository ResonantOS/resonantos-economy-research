(() => {
  "use strict";

  const fixtures = {
    fixtureId: "resonant-time-capsule-intake",
    version: "2.0.0",
    capability: "public-at-opening-non-collecting-intake-preview",
    inventedValuesOnly: true,
    promotionBoundary: "Fixture parity does not authorize collection, publication, custody, cryptography, or live operation.",
    phraseProfile: {
      normalization: "NFC after trim and whitespace collapse",
      unit: "Unicode grapheme cluster",
      minimumForReceipt: 1,
      maximumPerPhrase: 160,
      maximumPerHorizon: 2,
      horizons: [2, 5, 10],
      visibility: "public_at_opening",
      forbidden: ["control characters", "bidi controls", "zero-width space"]
    },
    phrases: [
      { id: "quiet-empty", input: "", expected: { valid: true, empty: true, normalized: "", graphemes: 0 } },
      { id: "trim-phrase", input: "  keep becoming  ", expected: { valid: true, empty: false, normalized: "keep becoming" } },
      { id: "collapse-whitespace", input: "remember\nthis\tlight", expected: { valid: true, empty: false, normalized: "remember this light" } },
      { id: "nfc-combining", input: "re\u0301sonance returns", expected: { valid: true, empty: false, normalized: "résonance returns" } },
      { id: "rtl-arabic", input: "تذكّر هذه اللحظة", expected: { valid: true, empty: false, normalized: "تذكّر هذه اللحظة", reviewDirection: "auto" } },
      { id: "emoji-zwj", input: "Meet me here again 👩‍🚀", expected: { valid: true, empty: false, normalized: "Meet me here again 👩‍🚀" } },
      { id: "bidi-control-rejected", input: "hello\u202Eworld", expected: { valid: false, empty: false, errorContains: "directional" } },
      { id: "zero-width-rejected", input: "reso\u200Bnance", expected: { valid: false, empty: false, errorContains: "invisible" } },
      { id: "control-rejected", input: "echo\u0007later", expected: { valid: false, empty: false, errorContains: "control" } },
      { id: "grapheme-limit-valid", input: "a".repeat(160), expected: { valid: true, empty: false, graphemes: 160 } },
      { id: "grapheme-limit-rejected", input: "a".repeat(161), expected: { valid: false, empty: false, errorContains: "160 characters or fewer", graphemes: 161 } }
    ],
    states: [
      { id: "initial", expected: { phrasePlaces: 6, firstPlacesEnabled: 3, secondPlacesLocked: 3, visibilityChoices: 0 } },
      { id: "one-required", expected: { emptyReview: false, quietExitCreatesReceipt: false } },
      { id: "second-unlocks", expected: { afterValidFirstPhrase: "enabled", maximumPerHorizon: 2 } },
      { id: "review", expected: { placesRendered: 6, element: "bdi", direction: "auto", acknowledgements: 2 } },
      { id: "receipt", expected: { adapter: "volatile_preview", durable: false, submitted: false } },
      { id: "closed", expected: { disabledPlaces: 6, failsClosed: true } }
    ],
    events: [
      "input",
      "compositionstart",
      "compositionend",
      "blur",
      "review",
      "acknowledge-two-consequences",
      "confirm-preview",
      "edit",
      "quiet-exit",
      "close",
      "reopen",
      "reset",
      "reload"
    ],
    accessModes: [
      { id: "keyboard", required: ["logical focus order", "visible focus", "first-invalid focus", "no keyboard trap"], evidence: "automated-plus-manual" },
      { id: "screen-reader", required: ["named horizons and fields", "errors announced", "review and receipt understandable"], evidence: "manual-required" },
      { id: "rtl-bidi", required: ["RTL editing", "mixed-direction isolation", "review pronunciation order"], evidence: "automated-plus-manual" },
      { id: "native-ime", required: ["composition not validated early", "candidate selection preserved", "post-composition validation"], evidence: "manual-required" },
      { id: "participant-retell", required: ["quota", "future-public", "preview boundary", "number method", "quiet path"], evidence: "participant-required" }
    ],
    retellProtocol: {
      version: "2.0.0",
      minimumParticipants: 5,
      prompts: [
        { id: "quota", critical: true, ask: "How many phrases can you leave for each opening?", requiredMeaning: "up to two for each of 2, 5, and 10 years" },
        { id: "visibility", critical: true, ask: "When can other people read a saved phrase?", requiredMeaning: "it stays out of public view until its opening, then becomes public" },
        { id: "preview", critical: true, ask: "Where is a phrase entered on this page stored?", requiredMeaning: "nowhere; this candidate form has no server connection" },
        { id: "number", critical: true, ask: "How does a phrase affect the ritual number?", requiredMeaning: "all accepted places make one fingerprint; a later Bitcoin block helps place the shared result in a pre-agreed range" },
        { id: "quiet", critical: true, ask: "What happens if you choose the quiet path?", requiredMeaning: "no phrase, receipt, or record is created" }
      ],
      passRule: "Every participant must correctly retell every critical consequence without coaching.",
      rerunRule: "Repair the contract or interaction, then rerun the full protocol; do not average away a critical misunderstanding."
    }
  };

  function deepFreeze(value) {
    Object.values(value).forEach((entry) => {
      if (entry && typeof entry === "object" && !Object.isFrozen(entry)) deepFreeze(entry);
    });
    return Object.freeze(value);
  }

  window.TimeCapsuleFixturesV2 = deepFreeze(fixtures);
})();
