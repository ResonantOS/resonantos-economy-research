#!/usr/bin/env bash
# validate-inventory-truth.sh — filesystem-truth checks for the inventory index.
#
# Complements validate-index-json.sh (internal consistency) with three checks the
# internal validator cannot make, the ones that let the index drift unnoticed:
#   1. index entries == entry files on disk (no missing/extra entries)
#   2. every repo-relative file path in by_source actually exists
#   3. every tag used by an entry is registered in tags.md (controlled vocabulary)
#
# Decision D-5 (2026-06-29): a NEW separate validator, so validate-index-json.sh's
# stated "inventory-read-model-only" contract is left intact. Exit 0 = pass; 1 = fail.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
cd "$ROOT"

python3 - "$ROOT" <<'PY'
import json, re, sys
from pathlib import Path

root = Path(sys.argv[1])
inv = root / ".arcanum" / "inventory"
index = json.loads((inv / "index.json").read_text())
fails = []

# 1) entries == entry files on disk
disk = {p.stem for p in (inv / "entries").glob("*.md")}
idx = {e["id"] for e in index["entries"]}
missing, extra = disk - idx, idx - disk
if missing: fails.append(f"entries on disk but NOT in index: {sorted(missing)}")
if extra:   fails.append(f"entries in index but NOT on disk: {sorted(extra)}")
print(f"[1] entries==disk: {len(disk)} on disk, {len(idx)} in index "
      f"-> {'FAIL' if (missing or extra) else 'ok'}")

# 2) file paths in by_source exist (paths are stored entry-relative, e.g. ../../../X)
EXTS = (".md", ".py", ".yml", ".yaml", ".json", ".sh", ".jsonl", ".txt")
entries_dir = inv / "entries"
by_source = index.get("indexes", {}).get("by_source", {})
checked = bad = 0
for src in by_source:
    s = src.split("#")[0].strip()
    if (src.startswith(("http", "/")) or "`" in src
            or "/" not in s or not s.lower().endswith(EXTS)):
        continue                  # external / URL / absolute / bare-ID / non-file
    checked += 1
    if not (entries_dir / s).resolve().exists():
        bad += 1; fails.append(f"by_source path does not exist: {src}")
print(f"[2] by_source paths exist: checked {checked} repo paths -> "
      f"{'FAIL ('+str(bad)+' missing)' if bad else 'ok'}")

# 3) every used tag is registered in tags.md
registered = set(re.findall(r"^\|\s*`([^`]+)`\s*\|", (inv / "tags.md").read_text(), re.M))
used = set(index.get("indexes", {}).get("by_tag", {}))
unregistered = used - registered
if unregistered: fails.append(f"tags used but NOT registered in tags.md: {sorted(unregistered)}")
print(f"[3] tags registered: {len(used)} used, {len(registered)} registered -> "
      f"{'FAIL' if unregistered else 'ok'}")

if fails:
    print("\nRESULT: fail", file=sys.stderr)
    for f in fails: print("  - " + f, file=sys.stderr)
    sys.exit(1)
print("\nRESULT: pass")
PY
