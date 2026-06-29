#!/usr/bin/env python3
"""Generate .arcanum/inventory/index.json from the entry files.

The entry files (.arcanum/inventory/entries/*.md) are the single source of truth.
This script DERIVES the `entries` list, the `indexes`, and `generated_at` from them;
it PRESERVES the non-entry config/meta top-level keys (schema_version,
inventory_root, human_index, projections, validation) from the existing index.json
so the validator's contract block survives. It never hand-edits the index, never
invents entries, and reports any entry it cannot parse (no inflation). The index is
a non-authority read model; this tool grants nothing.

Usage:
  build_inventory_index.py            # write index.json
  build_inventory_index.py --check    # build in memory, diff vs committed; exit 1 on mismatch (writes nothing)
  build_inventory_index.py --strict   # additionally exit 1 if any entry failed to parse
"""
from __future__ import annotations
import json, re, subprocess, sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INV = ROOT / ".arcanum" / "inventory"
ENTRIES_DIR = INV / "entries"
INDEX = INV / "index.json"

LABEL = re.compile(r"^(Status|Entry type|Authority posture|Tags):\s*(.*)$")
BACKTICK = re.compile(r"`([^`]+)`")
LINK = re.compile(r"\]\(([^)]+)\)")
FIRST_TOKEN = re.compile(r"[A-Za-z][A-Za-z0-9-]*")


def git_updated(path: Path) -> str:
    try:
        out = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", str(path.relative_to(ROOT))],
            cwd=ROOT, capture_output=True, text=True, timeout=10,
        ).stdout.strip()
        if out:
            return out
    except Exception:
        pass
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")  # untracked entry


def sections(text: str) -> dict[str, str]:
    out, cur, buf = {}, None, []
    for line in text.splitlines():
        m = re.match(r"^##\s+(.*)$", line)
        if m:
            if cur is not None:
                out[cur] = "\n".join(buf).strip()
            cur, buf = m.group(1).strip().lower(), []
        elif cur is not None:
            buf.append(line)
    if cur is not None:
        out[cur] = "\n".join(buf).strip()
    return out


def find_section(secs: dict[str, str], *needles: str) -> str:
    for h, body in secs.items():
        if any(n in h for n in needles):
            return body
    return ""


def first_sentence(body: str) -> str:
    para = next((p.strip() for p in body.split("\n\n") if p.strip()), "")
    para = re.sub(r"\s+", " ", para).strip()
    m = re.search(r"^(.*?[.!?])(\s|$)", para)
    s = (m.group(1) if m else para).strip()
    return s[:300]


def parse_entry(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    title = ""
    for ln in lines:
        m = re.match(r"^#\s+(.*)$", ln)
        if m:
            title = re.sub(r"^Inventory Entry:\s*", "", m.group(1)).strip()
            break
    hdr = {}
    for ln in lines:
        if ln.startswith("## "):
            break
        m = LABEL.match(ln)
        if m:
            hdr[m.group(1)] = m.group(2).strip()
    if not title or "Status" not in hdr or "Tags" not in hdr:
        raise ValueError("missing title / Status / Tags header")

    def first_tok(s: str) -> str:
        s = s.split("(")[0].split("`")[0].split("—")[0]
        m = FIRST_TOKEN.search(s)
        return m.group(0).lower() if m else s.strip().lower()

    secs = sections(text)
    src_body = find_section(secs, "source refs", "source ref", "source")
    sources, seen = [], set()
    for tgt in LINK.findall(src_body) + BACKTICK.findall(src_body):
        t = tgt.split("#")[0].strip()
        if t and not t.startswith("http") and t not in seen:
            seen.add(t); sources.append(t)
    return {
        "id": path.stem,
        "path": f"entries/{path.name}",
        "kind": "entry",
        "type": first_tok(hdr.get("Entry type", "")),
        "title": title,
        "summary": first_sentence(find_section(secs, "summary")) or title,
        "tags": BACKTICK.findall(hdr.get("Tags", "")),
        "sources": sources,
        "updated": git_updated(path),
        "status": first_tok(hdr.get("Status", "")),
        "authority_posture": hdr.get("Authority posture", "").strip() or None,
        "selectors": BACKTICK.findall(find_section(secs, "selector")),
        "evidence_card_ids": [],
        "evidence_set_ids": [],
        "residue": ([first_sentence(find_section(secs, "residue"))]
                    if find_section(secs, "residue") else []),
    }


def build_indexes(entries: list[dict]) -> dict:
    def group(key):
        out: dict[str, list[str]] = {}
        for e in entries:
            vals = e[key] if isinstance(e[key], list) else [e[key]]
            for v in vals:
                out.setdefault(v, []).append(e["id"])
        return {k: sorted(v) for k, v in sorted(out.items())}
    return {
        "by_id": {e["id"]: e["path"] for e in entries},
        "by_type": group("type"),
        "by_tag": group("tags"),
        "by_source": group("sources"),
        "by_status": group("status"),
        "by_evidence_card": {},
        "by_evidence_set": {},
    }


def build() -> tuple[dict, list[str]]:
    existing = json.loads(INDEX.read_text()) if INDEX.exists() else {}
    entries, errors = [], []
    for p in sorted(ENTRIES_DIR.glob("*.md")):
        try:
            entries.append(parse_entry(p))
        except Exception as exc:
            errors.append(f"{p.name}: {exc}")
    entries.sort(key=lambda e: e["id"])
    index = {
        "schema_version": existing.get("schema_version", "inventory.index.v0.1"),
        "inventory_root": existing.get("inventory_root", ".arcanum/inventory"),
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "human_index": existing.get("human_index", "index.md"),
        "entries": entries,
        "indexes": build_indexes(entries),
    }
    for k in ("projections", "validation"):       # preserved config/meta
        if k in existing:
            index[k] = existing[k]
    return index, errors


def _strip_time(d: dict) -> dict:
    d = dict(d); d.pop("generated_at", None); return d


def main(argv: list[str]) -> int:
    check = "--check" in argv
    strict = "--strict" in argv
    index, errors = build()
    if errors:
        print(f"parse errors ({len(errors)}):", file=sys.stderr)
        for e in errors:
            print("  -", e, file=sys.stderr)
    if check:
        cur = json.loads(INDEX.read_text()) if INDEX.exists() else {}
        if _strip_time(cur) != _strip_time(index):
            cn, gn = len(cur.get("entries", [])), len(index["entries"])
            print(f"DRIFT: index.json out of sync with entries/ "
                  f"(committed {cn} entries, generated {gn}).", file=sys.stderr)
            return 1
        print(f"index.json in sync ({len(index['entries'])} entries).")
        return 1 if (strict and errors) else 0
    INDEX.write_text(json.dumps(index, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote {INDEX.relative_to(ROOT)} ({len(index['entries'])} entries).")
    return 1 if (strict and errors) else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
