# Stage 06 Glossary Consistency

Verdict: `pass` for run-local usage; no canonical promotion

| Define term | Design usage | Status | Note |
| --- | --- | --- | --- |
| capability state | four gated availability states | linked | not a readiness score |
| envelope | private workspace with immutable confirmed versions | linked | never a public identity |
| slot | horizon/position inside an envelope version | linked | never token weight |
| confirmation version | immutable participant-confirmed snapshot | linked | distinct from final inclusion |
| disposition | moderation/record/display decision | linked | display change does not rewrite root |
| close guard | monotonic epoch/fence and frozen snapshot | strengthened | design makes the abstract fail-closed boundary concrete |
| public export | separate allowlist projection | strengthened | explicitly rejects generic serialization |
| sealed profile | disabled adapter until approved | linked | may be killed |
| release confirmation | separate current display consent | linked | opening does not equal display |
| data steward | storage lifecycle owner | linked | does not own consent |
| incident owner | stop/contain/restore/resume owner | linked | separate from database operator by default |
| implementation receipt | bounded evidence artifact | linked | does not promote capability state by itself |

New design labels such as `close epoch`, `moderation-pending`, and `public
projection` are component descriptors, not canonical vocabulary proposals.

