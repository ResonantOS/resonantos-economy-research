#!/usr/bin/env python3
"""Run deterministic fixtures for the candidate GitHub repository README preset."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


PRESET_ROOT = Path(__file__).resolve().parents[1]
FIXTURE_ROOT = PRESET_ROOT / "fixtures"
REPO_ROOT = Path(__file__).resolve().parents[6]
LINK_RE = re.compile(r"!?(?:\[[^\]]*\])\(([^)]+)\)")
IMAGE_RE = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
PLACEHOLDER_RE = re.compile(r"\{\{[^{}]+\}\}")
MARKER_RE = re.compile(r"<!--\s*whisper-required-inline:\s*([a-z0-9_-]+)\s*-->")
CONVERSION_RE = re.compile(r"\b(?:30[- ]second|battle-tested|convert(?:s|ed|ing)? readers?)\b", re.I)
LICENSE_LINE_RE = re.compile(r"^\s*(?:license\s*:\s*MIT|##\s+MIT License|##\s+License\s*$)", re.I | re.M)


def local_target(markdown: Path, raw_target: str) -> Path | None:
    target = raw_target.split("#", 1)[0].strip()
    if not target or target.startswith(("http://", "https://", "mailto:", "#")):
        return None
    target = target.replace("%20", " ")
    return (markdown.parent / target).resolve()


def validate_markdown(path: Path) -> tuple[str, list[dict]]:
    text = path.read_text(encoding="utf-8")
    findings: list[dict] = []

    if text.count("```") % 2:
        findings.append({"code": "unbalanced_code_fence", "severity": "block"})
    if PLACEHOLDER_RE.search(text):
        findings.append({"code": "unresolved_placeholder", "severity": "block"})
    if CONVERSION_RE.search(text):
        findings.append({"code": "unsupported_conversion_claim", "severity": "block"})

    for alt, target in IMAGE_RE.findall(text):
        if not alt.strip():
            findings.append({"code": "missing_image_alt", "target": target, "severity": "block"})

    for raw_target in LINK_RE.findall(text):
        target = local_target(path, raw_target)
        if target is not None and not target.exists():
            findings.append(
                {"code": "missing_local_link_target", "target": raw_target, "severity": "block"}
            )

    details_depth = 0
    for line_number, line in enumerate(text.splitlines(), start=1):
        lowered = line.lower()
        if "<details" in lowered:
            details_depth += 1
        marker = MARKER_RE.search(line)
        if marker and details_depth:
            findings.append(
                {
                    "code": "required_inline_inside_on_demand",
                    "content_id": marker.group(1),
                    "line": line_number,
                    "severity": "block",
                }
            )
        if "</details>" in lowered:
            details_depth = max(0, details_depth - 1)

    for block in re.findall(r"```mermaid\s*(.*?)```", text, flags=re.S | re.I):
        if "accTitle:" not in block or "accDescr:" not in block:
            findings.append({"code": "missing_mermaid_accessibility_metadata", "severity": "block"})

    if LICENSE_LINE_RE.search(text) and not any(
        (REPO_ROOT / name).exists() for name in ("LICENSE", "LICENSE.md", "LICENSE.txt")
    ):
        findings.append({"code": "license_claim_without_repository_evidence", "severity": "block"})

    status = "structure_check_block" if findings else "structure_check_pass"
    return status, findings


def select_project_kind(evidence: list[str]) -> str:
    kinds = sorted(set(evidence) & {"library", "application", "framework_ecosystem"})
    if not kinds:
        return "general"
    if len(kinds) > 1:
        return "abstain_manual_selection"
    return kinds[0]


def lifecycle_decision(lifecycle: str, request: str) -> str:
    if lifecycle in {"historical", "append_only"} and request == "modernize_prose":
        return "refuse_rewrite_offer_active_summary"
    if lifecycle == "active" and request == "revise_existing":
        return "freeze_verified_facts_then_propose"
    return "manual_owner_review"


def run_fixtures() -> int:
    manifest = json.loads((FIXTURE_ROOT / "expectations.json").read_text(encoding="utf-8"))
    results: list[dict] = []
    mismatches: list[dict] = []

    for case in manifest["markdown"]:
        path = FIXTURE_ROOT / case["path"]
        actual, findings = validate_markdown(path)
        result = {"id": case["path"], "expected": case["expected"], "actual": actual, "findings": findings}
        results.append(result)
        if actual != case["expected"]:
            mismatches.append(result)

    for case in manifest["selector_cases"]:
        actual = select_project_kind(case["evidence"])
        result = {"id": case["id"], "expected": case["expected"], "actual": actual}
        results.append(result)
        if actual != case["expected"]:
            mismatches.append(result)

    for case in manifest["lifecycle_cases"]:
        actual = lifecycle_decision(case["lifecycle"], case["request"])
        result = {"id": case["id"], "expected": case["expected"], "actual": actual}
        results.append(result)
        if actual != case["expected"]:
            mismatches.append(result)

    report = {
        "status": "pass" if not mismatches else "block",
        "contract_boundary": "deterministic_structure_only_no_reader_or_truth_claim",
        "results": results,
        "mismatches": mismatches,
    }
    print(json.dumps(report, indent=2))
    return 0 if not mismatches else 2


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("path", nargs="?", type=Path)
    parser.add_argument("--fixtures", action="store_true")
    args = parser.parse_args()
    if args.fixtures:
        return run_fixtures()
    if args.path is None:
        parser.error("provide a Markdown path or --fixtures")
    status, findings = validate_markdown(args.path.resolve())
    print(json.dumps({"status": status, "findings": findings}, indent=2))
    return 0 if status == "structure_check_pass" else 2


if __name__ == "__main__":
    sys.exit(main())
