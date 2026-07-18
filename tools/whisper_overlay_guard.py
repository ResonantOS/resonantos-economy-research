#!/usr/bin/env python3
"""Snapshot, export, restore, and verify repository-local Whisper overlays."""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_MANIFEST = REPO_ROOT / ".arcanum/runtime-overlays/whisper/manifest.json"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def load_manifest(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("schema_version") != "resonantos.whisper-local-overlays.v1":
        raise ValueError(f"unsupported overlay manifest schema: {data.get('schema_version')}")
    if not isinstance(data.get("overlays"), list) or not data["overlays"]:
        raise ValueError("overlay manifest must list at least one owned path")
    return data


def safe_path(root: Path, relative: str) -> Path:
    if Path(relative).is_absolute():
        raise ValueError(f"overlay path must be relative: {relative}")
    root = root.resolve()
    candidate = (root / relative).resolve()
    if candidate != root and root not in candidate.parents:
        raise ValueError(f"overlay path escapes root: {relative}")
    return candidate


def files_for_overlay(root: Path, entry: dict) -> list[Path]:
    path = safe_path(root, entry["path"])
    kind = entry["kind"]
    if kind == "file":
        return [path] if path.is_file() else []
    if kind == "directory":
        return sorted(item for item in path.rglob("*") if item.is_file()) if path.is_dir() else []
    raise ValueError(f"unsupported overlay kind: {kind}")


def build_snapshot(root: Path, manifest_path: Path, manifest: dict) -> dict:
    records: list[dict] = []
    missing: list[str] = []
    for entry in manifest["overlays"]:
        owned = safe_path(root, entry["path"])
        expected_kind = entry["kind"]
        exists = owned.is_file() if expected_kind == "file" else owned.is_dir()
        if not exists:
            missing.append(entry["path"])
            continue
        for file_path in files_for_overlay(root, entry):
            records.append(
                {
                    "path": file_path.relative_to(root.resolve()).as_posix(),
                    "size": file_path.stat().st_size,
                    "sha256": sha256(file_path),
                }
            )
    try:
        manifest_label = manifest_path.resolve().relative_to(root.resolve()).as_posix()
    except ValueError:
        manifest_label = manifest_path.resolve().as_posix()
    return {
        "schema_version": "resonantos.whisper-overlay-snapshot.v1",
        "manifest": manifest_label,
        "manifest_sha256": sha256(manifest_path),
        "files": sorted(records, key=lambda row: row["path"]),
        "missing": sorted(missing),
    }


def write_json(path: Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")


def copy_owned(root: Path, other_root: Path, manifest: dict, direction: str) -> None:
    for entry in manifest["overlays"]:
        relative = entry["path"]
        if direction == "export":
            source = safe_path(root, relative)
            destination = safe_path(other_root, relative)
        else:
            source = safe_path(other_root, relative)
            destination = safe_path(root, relative)
        if entry["kind"] == "directory":
            if not source.is_dir():
                raise FileNotFoundError(f"missing owned directory: {source}")
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copytree(source, destination, dirs_exist_ok=True)
        else:
            if not source.is_file():
                raise FileNotFoundError(f"missing owned file: {source}")
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, destination)


def verify_snapshot(current: dict, expected: dict) -> tuple[bool, dict]:
    current_map = {item["path"]: item for item in current["files"]}
    expected_map = {item["path"]: item for item in expected["files"]}
    missing_files = sorted(set(expected_map) - set(current_map))
    added_files = sorted(set(current_map) - set(expected_map))
    changed_files = sorted(
        path
        for path in set(current_map) & set(expected_map)
        if current_map[path]["sha256"] != expected_map[path]["sha256"]
        or current_map[path]["size"] != expected_map[path]["size"]
    )
    report = {
        "missing_overlay_paths": current["missing"],
        "missing_files": missing_files,
        "added_files": added_files,
        "changed_files": changed_files,
    }
    return not any(report.values()), report


def parser() -> argparse.ArgumentParser:
    result = argparse.ArgumentParser(description=__doc__)
    result.add_argument("--root", type=Path, default=REPO_ROOT, help="repository root to inspect")
    result.add_argument("--manifest", type=Path, default=DEFAULT_MANIFEST)
    sub = result.add_subparsers(dest="command", required=True)
    snapshot = sub.add_parser("snapshot")
    snapshot.add_argument("--output", type=Path, required=True)
    verify = sub.add_parser("verify")
    verify.add_argument("--snapshot", type=Path, required=True)
    export = sub.add_parser("export")
    export.add_argument("--destination", type=Path, required=True)
    restore = sub.add_parser("restore")
    restore.add_argument("--source", type=Path, required=True)
    return result


def main() -> int:
    args = parser().parse_args()
    root = args.root.resolve()
    manifest_path = args.manifest.resolve()
    manifest = load_manifest(manifest_path)

    if args.command == "snapshot":
        snapshot = build_snapshot(root, manifest_path, manifest)
        write_json(args.output, snapshot)
        if snapshot["missing"]:
            print(json.dumps(snapshot, indent=2))
            return 2
        print(f"snapshot: {len(snapshot['files'])} files -> {args.output}")
        return 0

    if args.command == "verify":
        expected = json.loads(args.snapshot.read_text(encoding="utf-8"))
        current = build_snapshot(root, manifest_path, manifest)
        ok, report = verify_snapshot(current, expected)
        print(json.dumps({"status": "pass" if ok else "block", **report}, indent=2))
        return 0 if ok else 2

    if args.command == "export":
        copy_owned(root, args.destination.resolve(), manifest, "export")
        print(f"exported {len(manifest['overlays'])} owned paths -> {args.destination}")
        return 0

    if args.command == "restore":
        copy_owned(root, args.source.resolve(), manifest, "restore")
        print(f"restored {len(manifest['overlays'])} owned paths <- {args.source}")
        return 0

    return 2


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (FileNotFoundError, ValueError, json.JSONDecodeError) as exc:
        print(f"overlay guard: block: {exc}", file=sys.stderr)
        sys.exit(2)
