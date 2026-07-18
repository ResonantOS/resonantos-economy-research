# SWU-LIR-001 Decisions

Authorization token: user explicitly invoked `goal` and `task-session` on
2026-07-17, requested execution until a real blocker, and required a form ready
to demonstrate by 2026-07-18.

## D-01 — Demonstration Safety

Selected: non-collecting simulator. No endpoint, credentials, analytics,
persistence, deployment, or real words.

Rationale: fastest demonstrable surface and the only capability with sufficient
evidence to implement now.

## D-02 — Sealed Words And Cryptography

Selected: `no sealed path for this demo`.

The page shows the intention but disables the control. No commitment scheme,
encryption algorithm, key generation, custody, recovery, survivor access, or
ten-year promise is simulated as real protection.

Rationale: a single word has low entropy and is vulnerable to offline guessing;
client, custody, recovery, migration, consent, and successor boundaries are not
approved. Disabling the path is safer and faster than fake cryptography.

## D-03 — Application Shape

Selected: `/contribute/index.html`, `/contribute/simulator.css`, and
`/contribute/simulator.js` within the existing static site.

Rationale: preserves the deployed site's visual language while isolating the
interactive demo from the existing public explanation and deployment config.

## D-04 — Receipt And Close Behavior

Selected: visibly simulated, DOM-only states. The receipt proves nothing and
disappears on refresh. A demo close control exercises fail-closed behavior
without changing time, URL, or storage.

## Deferred Decisions

Publication/deployment, real public intake, moderation operations, database,
admission, token calculation, and sealed profile remain outside this Task
Session and require later owner gates.

