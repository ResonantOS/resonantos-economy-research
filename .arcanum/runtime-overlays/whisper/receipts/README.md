# Overlay Preservation Receipts

## 2026-07-17 GitHub Repository README Overlay

- Snapshot: [2026-07-17-github-repository-readme-overlay.json](2026-07-17-github-repository-readme-overlay.json)
- Owned paths: three
- Owned files: fourteen
- Rehearsal: export from the repository, restore into an empty staged root, and
  verify every path, size, and SHA-256 against the pre-sync snapshot
- Result: pass; no missing overlay paths, missing files, added files, or changed
  files

This receipt proves the guard can preserve the declared local overlays through
the staged replacement boundary. It does not prove that an unguarded future sync
will use it, that upstream runtime changes are compatible, or that the preset
helps readers.
