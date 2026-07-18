#!/usr/bin/env python3
"""Check local Markdown link targets for selected repository documentation."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from urllib.parse import unquote


REPO_ROOT = Path(__file__).resolve().parents[1]
LINK_RE = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")


def markdown_files(inputs: list[Path]) -> list[Path]:
    if inputs:
        files: list[Path] = []
        for raw in inputs:
            path = raw if raw.is_absolute() else REPO_ROOT / raw
            if path.is_dir():
                files.extend(sorted(path.rglob("*.md")))
            else:
                files.append(path)
        return sorted(set(item.resolve() for item in files))
    return sorted(
        item.resolve()
        for item in REPO_ROOT.rglob("*.md")
        if ".git" not in item.parts
    )


def target_path(source: Path, raw: str) -> Path | None:
    target = raw.strip().strip("<>")
    if not target or target.startswith(("#", "http://", "https://", "mailto:", "data:")):
        return None
    path_part = unquote(target.split("#", 1)[0])
    if not path_part or "{{" in path_part:
        return None
    if path_part.startswith("/"):
        return (REPO_ROOT / path_part.lstrip("/")).resolve()
    return (source.parent / path_part).resolve()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="*", type=Path)
    args = parser.parse_args()
    checked_links = 0
    failures: list[dict] = []
    files = markdown_files(args.paths)

    for source in files:
        if not source.is_file():
            failures.append({"source": str(source), "target": None, "reason": "source_missing"})
            continue
        text = source.read_text(encoding="utf-8")
        for raw_target in LINK_RE.findall(text):
            target = target_path(source, raw_target)
            if target is None:
                continue
            checked_links += 1
            if not target.exists():
                failures.append(
                    {
                        "source": source.relative_to(REPO_ROOT).as_posix(),
                        "target": raw_target,
                        "resolved": target.as_posix(),
                        "reason": "target_missing",
                    }
                )

    report = {
        "status": "pass" if not failures else "block",
        "files_checked": len(files),
        "local_links_checked": checked_links,
        "failures": failures,
        "boundary": "local_target_existence_only_external_urls_and_anchor_semantics_not_checked",
    }
    print(json.dumps(report, indent=2))
    return 0 if not failures else 2


if __name__ == "__main__":
    sys.exit(main())
