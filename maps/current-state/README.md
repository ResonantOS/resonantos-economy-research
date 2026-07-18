# Current-State Mental Map

Status: active non-authority read model

This package is a visual orientation surface for the ResonantOS economy
research program as of 2026-07-13. Open [`index.html`](index.html) in a browser
to inspect the current state, trace dependencies, isolate risks, and see the
smallest legitimate next actions.

Files:

- [`index.html`](index.html) — the self-contained interactive mental map;
- [`lanes.json`](lanes.json) — the evidence/inference lane record used to
  compose and audit the page.

The map is a projection of live repository records. It is not a source of
policy, validation, reward, payout, governance, implementation, or authority.
If a status conflicts with a controlling record, the controlling record wins
and this projection must be refreshed.

## How To Read It

1. Start at **What is true now**.
2. Follow the graph from foundations through accepted research to candidate
   handoffs.
3. Use the layer controls to isolate flow, dependencies, or risk.
4. Open any node for its evidence link and misuse warning.
5. Use **What we need to do next** as a dependency queue, not as a maturity
   score or authorization to act.

The visual uses a custom static graph/card pattern because the installed
`x-ray` seed package does not contain its referenced YAML starter library. The
fallback remains L0 static HTML/SVG with no remote runtime dependency.

## Refresh Rule

Refresh the map when any of these change:

- a proposed dispatch is confirmed, revised, registered, or closed;
- a definition or institutional owner is assigned;
- a fixture or experiment becomes runnable or emits evidence;
- a bet or prize changes state;
- a claim is promoted or demoted through the authority route.

