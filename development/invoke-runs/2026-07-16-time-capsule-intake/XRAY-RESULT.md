# X-Ray Result — Resonant Time Capsule Architecture

- Status: `pass` for the local explanation artifact; the architecture it explains remains a candidate design
- Mode: `architecture`
- Target boundary: the intake, frozen record, one-time supply-selection, and 2/5/10-year release architecture defined by this Invoke run; minting, credential issuance, production cryptography, moderation policy, and long-term owner authority remain external
- User intent: improve the HTML design while making the system architecture visible through SVG components and traceable layers
- Reader baseline: `working-reader`, with newcomer-friendly on-ramps
- Output: [TIME-CAPSULE-ARCHITECTURE-XRAY.html](TIME-CAPSULE-ARCHITECTURE-XRAY.html)
- Lane handles:
  - surface: `surface.summary`
  - properties: `properties.catalog`
  - components: `components.map`
  - internal_dependencies: `dependencies.internal`
  - external_dependencies: `dependencies.external`
  - flow: `flow.graph`
  - lifecycle: `lifecycle.timeline`
  - risk_questions: `risk.questions`
  - visual_composition: `visual.model`
- Layer interaction: `stacked`, `isolate`, and `trace`; components also expose a local inspector on hover, focus, or click
- Renderer level: `L0` — one local semantic HTML page with CSS, inline SVG, and a small local interaction script
- Visual library: `shape.node`, `shape.boundary`, `shape.layer-panel`, `shape.risk-marker`, `shape.inspector-rail`, `connector.arrow`, `connector.branch`, `connector.feedback-loop`, `chart.timeline-strip`, `chart.risk-matrix`, `pattern.dependency-boundary`, `pattern.lifecycle-stack`, and `pattern.evidence-inference-split`; custom `capsule-core` shape used to show many records converging into one manifest and root
- Evidence boundary: component names, roles, order, invariants, lifecycle, external owners, and open gates come from the four source artifacts; spatial grouping, color, layer isolation, and the capsule-shaped core are explanatory visual inferences only
- Reader on-ramp: the page opens with a plain-language word-to-manifest-to-root-to-number explanation, then gives four quantities, a left-to-right reading instruction, glossary cards, misuse warnings, and evidence-versus-inference labels
- Validation: lane coverage, source references, component metadata, keyboard focusability, layer controls, inline SVG title/description, local-only assets, no network/storage calls, and document closure checked; no compatible local browser was available for an automated screenshot pass

## Architecture Reading

The page uses one continuous causal path:

```text
participant
  -> admission quota
  -> form and private six-slot envelope
  -> accepted public or sealed records
  -> one frozen capsule root
  + later public beacon
  -> one initial supply receipt
  -> 2y / 5y / 10y openings
  -> preservation and independent verification
```

Dashed cyan connections come from owners outside the capsule boundary. Amber
markers identify behavior that still needs evidence. The diagram does not turn
those dependencies or open gates into solved implementation claims.

## Seed Boundary

This result exercises the current `x-ray` seed contract. It is evidence for an
architecture/L0 example, not a promotion claim for the skill or a production
readiness claim for the Time Capsule.
