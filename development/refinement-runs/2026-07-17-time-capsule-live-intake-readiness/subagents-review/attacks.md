# Attack Return Collection

Dispatch: `2026-07-17-time-capsule-live-intake-review`

Status: complete; three of three registered attacker returns joined

This file is the lossless collection manifest. The verbatim returns remain in
their separately owned receipt files so parent synthesis does not create a
second drifting copy:

| Role | Attack vector | Verbatim return | Verdict | Findings |
| --- | --- | --- | --- | --- |
| form/accessibility | scope | [form-accessibility-review.md](form-accessibility-review.md) | FIX | FAR-01 through FAR-11 |
| database/reliability | counter-example | [database-reliability-review.md](database-reliability-review.md) | BLOCK live intake | DBR-01 through DBR-10 |
| privacy/safety | definitional and tail-risk | [privacy-safety-review.md](privacy-safety-review.md) | BLOCK live intake | PS-01 through PS-13 |

Parent verification inspected all three files after completion. None edited an
artifact under attack. No zero-findings flag fired.

## Initial And Final Positions

- Form/accessibility began by testing whether a comprehensible participant
  journey could stand independently of backend readiness. It ended `FIX`: L0 is
  repairable, while ambiguous public display and incomplete release consent
  block live modes.
- Database/reliability began by testing state-machine claims with failure and
  concurrency counter-examples. It ended `BLOCK` for live modes: schemas and
  synthetic planning are viable, but the live database/API contract is absent.
- Privacy/safety began by challenging the meaning of public, sealed, safe,
  consent, recovery, and stewardship. It ended `BLOCK`: killing sealed removes
  some risks but leaves public-live gates unresolved.

The distinct positions did not collapse into one generic security review.

