# Whisper Runtime Overlays

Status: active repository-local ownership contract
Owner: ResonantOS economy research repository
Generated package: `.agents/skills/whisper/`

The installed Whisper package is generated from a canonical source that is not
present in this repository. This folder owns the small set of repository-local
files that must survive a later regeneration or sync.

It does not make the generated core locally canonical. Core `SKILL.md`, runtime
`README.md`, schemas, validators, and review tools still belong to the upstream
owner.

## Owned Overlays

The machine-readable list is [manifest.json](manifest.json). It currently owns:

- the existing `product-research-blueprint` preset;
- the candidate `github-repository-readme` preset; and
- the local overlay index beside the preset folders.

## Guarded Sync

Run these steps around any future Whisper runtime replacement:

```bash
python3 tools/whisper_overlay_guard.py snapshot \
  --output /tmp/whisper-overlay-before.json
python3 tools/whisper_overlay_guard.py export \
  --destination /tmp/whisper-overlay-backup

# Run the owner-approved generated-runtime sync here.

python3 tools/whisper_overlay_guard.py restore \
  --source /tmp/whisper-overlay-backup
python3 tools/whisper_overlay_guard.py verify \
  --snapshot /tmp/whisper-overlay-before.json
```

`verify` blocks on a missing, added, or changed owned file. It proves overlay
preservation only. It does not validate the upstream runtime, writing quality,
reader understanding, or repository claims.

The first rehearsal receipt lives in [receipts/](receipts/).
