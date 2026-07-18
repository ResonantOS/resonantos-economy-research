# X-Ray Lane Model — Resonant Time Capsule Architecture

Status: candidate visual explanation

Mode: `architecture`

Depth: `standard`

Reader baseline: working reader, with newcomer-friendly labels

Target boundary: the Time Capsule intake, frozen record, supply-selection, and
2/5/10-year release architecture defined by this Invoke run. Token minting,
credential issuance, production cryptography, moderation policy, and long-term
owner authority remain outside the boundary.

## Lane Handles

### `surface.summary`

The product appears as a form with six optional word places. Underneath, it is a
four-part system: bounded intake, a frozen capsule record, a one-time supply
selector, and a long-term release archive.

Reader outcome: understand that the form is the entry surface, not the entire architecture.

### `properties.catalog`

- three horizons: 2y, 5y, 10y;
- two optional slots per horizon, six total;
- visibility selected per filled slot;
- credentials remain private quota handles;
- all final accepted records form one root;
- the beacon arrives only after the root freezes;
- the initial supply is computed once;
- later releases cannot change root or supply;
- real sealed intake stays disabled until its owner gate passes.

Reader outcome: know the rules that must remain true across every component.

### `components.map`

Internal components:

1. Rules Registry.
2. Admission Boundary.
3. Form And Draft Store.
4. Submission Envelope.
5. Disposition Boundary.
6. Manifest And Root Builder.
7. Supply Selector.
8. Release Coordinator.
9. Preservation And Verification.

Custom domain shape: `capsule-core`, a central capsule-shaped grouping for the
frozen manifest and root. The starter node alone would hide the important
transition from many records to one immutable fingerprint.

Reader outcome: name each part and explain why it exists.

### `dependencies.internal`

```text
rules -> admission -> form/draft -> envelope -> disposition
  -> canonical records -> manifest/root -> selector -> supply receipt
  -> release coordinator -> preservation/verification
```

Reader outcome: follow which component must finish before the next can act.

### `dependencies.external`

- governance/membership owns credential issuance and admission legitimacy;
- security/privacy owns sealed construction and custody;
- token/protocol owns the real unit and supply band;
- the beacon provider supplies the post-close value under a frozen contract;
- content/legal owns moderation and display policy;
- archive/successor owns ten-year continuity;
- independent verifiers reproduce public outputs.

Reader outcome: distinguish architecture inputs from authorities the capsule does not own.

### `flow.graph`

Primary trace:

```text
participant -> 0–6 filled slots -> final accepted records
  -> canonical manifest -> capsule root
  + post-close beacon -> rejection-sampled supply
  -> 2y / 5y / 10y release views with no supply effect
```

Branch conditions:

- empty slot -> no record;
- public word -> public record;
- sealed word -> approved commitment record or disabled path;
- invalid credential -> stop before envelope;
- failed reproduction -> stop before supply acceptance;
- no release confirmation -> remain sealed.

Reader outcome: trace both the successful path and the important fail-closed branches.

### `lifecycle.timeline`

```text
rules draft -> rules frozen -> intake open -> intake closed
  -> manifest frozen -> beacon observed -> supply reproduced
  -> 2y release -> 5y release -> 10y release -> stewardship handoff
```

Reader outcome: see why the beacon and releases cannot move earlier in the sequence.

### `risk.questions`

High-impact open gates:

- Which real supply unit and inclusive band are valid?
- Which beacon and fallback are sufficiently independent and available?
- How are credentials issued without claiming unique humanity?
- What does sealed content actually guarantee and who preserves keys?
- How are harmful future reveals moderated without rewriting history?
- Who can preserve and restore the archive for ten years?
- Can two independent implementations reproduce the exact output?

Reader outcome: separate settled component structure from unresolved launch prerequisites.

### `visual.model`

- Renderer: L0 semantic HTML, CSS, inline SVG, and small local interaction script.
- Interaction: stacked overview plus layer isolation and component inspection.
- Main pattern: `pattern.dependency-boundary`.
- Supporting patterns: `pattern.lifecycle-stack` and
  `pattern.evidence-inference-split`.
- Components: `shape.node`, `shape.boundary`, `shape.layer-panel`,
  `shape.risk-marker`, `shape.inspector-rail`, `connector.arrow`,
  `connector.branch`, `connector.feedback-loop`, `chart.timeline-strip`, and
  `chart.risk-matrix`.
- Custom shape: `capsule-core` for the manifest/root convergence.
- Evidence styling: solid line = specified by current design; dashed line =
  external owner gate; amber marker = specified structure whose behavior is not validated.

Reader outcome: isolate contribution, number selection, releases, or external
boundaries without losing the whole-system trace.

## Evidence Boundary

Source-backed:

- component names, roles, internal order, invariants, owner boundaries, lifecycle,
  and open gaps come from `SPEC.md`, `ARCHITECTURE.md`, `FORM-SPEC.md`, and
  `DECISIONS-AND-GAPS.md` in this run.

Visual inference:

- the four visual layer groupings;
- spatial position and color;
- the capsule-shaped convergence metaphor;
- the choice to show external owners around the system perimeter.

These visual inferences explain the source architecture; they do not add
behavior, authority, readiness, or validation claims.

