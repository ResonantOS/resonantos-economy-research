# W2 — L1 Close, Manifest, Fingerprint, Resilience

Decision: after this wave, we know whether one invented cohort closes once and
reproduces the same public commitment after restart, restore, and migration.

- Task: [TASK-LIV2-004](../tasks/TASK-LIV2-004.md)
- Entry: SWUs 010–015 pass.
- Order: 016 → 017 → 018 → 019; 020 then attacks the complete path.
- Exit: at/after-fence writes fail, one snapshot is selected, no forbidden
  fields enter canonical bytes, Node/browser fingerprints match, and restored
  state reproduces the same bytes.
- Promotion: W3 also requires W0 human exit and signed owners; W4 may begin its
  local disposable format work after 018–019.

