# Architecture — Public-at-Opening Intake Form

Status: approved frontend design; preview adapter only

## 1. Context View

~~~text
participant
  -> understands future-public consequence
  -> writes 1–2 short phrases for any 2/5/10-year horizon
  -> reviews one six-place envelope
  -> confirms through an intake adapter
       preview adapter now
       versioned API adapter later
~~~

The form is the current delivery boundary. Persistence, admission exchange,
moderation operations and closing infrastructure remain separate owners.

## 2. High-Level Structure

1. Compact ritual header: what the phrase becomes and when it becomes public.
2. One form containing three horizon groups in chronological order.
3. Two optional phrase fields per group, with the second enabled after the first.
4. Inline review state in the same page region.
5. Confirmation receipt in the same page region.
6. Submission adapter boundary: `preview` is the only enabled adapter.

## 3. Low-Level Components

- `PhraseProfileV2`: trim, NFC normalization, 1–160 graphemes, line breaks
  collapsed to spaces, control/format characters rejected.
- `EnvelopeDraftV2`: six stable slots; visibility is always
  `public_at_opening`.
- `ReviewProjectionV2`: normalized phrases plus quiet places and horizon dates.
- `PreviewIntakeAdapterV1`: returns an in-memory receipt and makes no request.
- `LiveIntakeAdapterV1`: interface only; disabled until API and admission gates pass.

## 4. Workflow Process View

1. Read the public-at-opening promise.
2. Write at least one phrase; the quiet path leaves without creating a receipt.
3. Fill up to two phrases per horizon.
4. Review all six places inline.
5. Acknowledge future public release and the shared-fingerprint meaning.
6. Confirm through the active adapter.
7. Receive a plainly labeled preview receipt; edit resets review/receipt.

## 5. Decision Flow View

~~~text
no phrases -> quiet exit / no receipt
invalid phrase -> associated error -> remain editing
valid draft -> inline review
consent missing -> confirmation disabled
preview adapter -> volatile preview receipt
live adapter unavailable -> fail closed; never imitate a saved record
close state -> editing and confirmation disabled
~~~

## 6. Dependency And Interface View

The form depends only on same-origin HTML, CSS and JavaScript. It writes no
storage, cookie, history, analytics or network state in preview mode.

Future live adapter request contract:

~~~json
{
  "schema_version": "resonant-time-capsule.envelope-confirm.v1",
  "idempotency_key": "uuid",
  "expected_version": 0,
  "messages": [
    {
      "horizon_years": 2,
      "slot": 1,
      "text_nfc": "normalized phrase",
      "visibility": "public_at_opening"
    }
  ]
}
~~~

The private invitation is exchanged into a secure session outside the form
payload. No credential, invite or participant identifier enters public records.

## Risks

- “Saved” may be heard as private: repeat that the phrase becomes public.
- Six fields may feel obligatory: keep second places conditional and quiet exit visible.
- A simulated receipt may be mistaken for storage: label preview state at header,
  confirmation and receipt.
- Phrase normalization may surprise: show normalized text before confirmation.

