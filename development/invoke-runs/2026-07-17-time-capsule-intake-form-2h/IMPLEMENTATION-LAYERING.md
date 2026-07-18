# Implementation Layering — Intake Form

## Target

Brownfield public-at-opening form, two-hour L0 delivery.

| Layer | Decision Question | Minimum Working Unit | Included | Deferred | Exit Evidence |
| --- | --- | --- | --- | --- | --- |
| L0 | After this layer, do participants understand and complete the public-at-opening form? | one continuous preview form with review and receipt | semantic HTML, phrase state, responsive style, fixtures/browser proof | real API, credentials, persistence | machine fixtures and browser validation |
| L1 | After this layer, can the same form confirm invented records through the selected API contract? | isolated Node/SQLite synthetic adapter | API schema, idempotency, versions, close fence | real invitations/data | integration/concurrency tests |
| L2 | After this layer, can approved public intake fail safely? | staged invited cohort | moderation, incident, restore and live owner gates | broad rollout | rehearsal receipts |
| L3 | After this layer, can the capsule close and preserve the public bundles? | close ceremony and recovery package | tlock, Arweave, Bitcoin commitment, 3-of-5 fallback | future cohorts | end-to-end recovery rehearsal |

## Non-Regression

- Public-at-opening consequence remains explicit.
- No phrase creates token allocation or authority.
- Preview mode makes no persistence claim.
- Later adapters preserve the same normalized review projection.

## Recommended Layer

L0 only. L1 begins only from the validated form contract and a separate Task Session.

