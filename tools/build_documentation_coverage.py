#!/usr/bin/env python3
"""Build a path-level disposition ledger for repository Markdown documentation."""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]

PILOT_PATHS = {
    "README.md": "governed research front porch",
    "GUIDE.md": "active working guide",
    "CONTRIBUTING.md": "active contribution guide",
    "QUERYING.md": "active question examples",
    "prizes/README.md": "active prize and bet entry route",
    "prizes/EXPERIMENT-EXAMPLES.md": "active experiment example gallery",
    "validation/README.md": "active validation entry route",
}


def row(path: str, **overrides: str) -> dict:
    base = {
        "path": path,
        "class_id": "deferred_owner_review",
        "reader_role": "specialist_or_future_agent",
        "authority_posture": "non_authority_documentation",
        "lifecycle": "active",
        "canonical_owner": "path_specific_owner",
        "transport": "markdown",
        "allowed_change": "owner_review_required",
        "disposition": "defer",
        "reason": "not selected for the bounded pilot; preserve until its owner reviews a concrete reader task",
    }
    base.update(overrides)
    return base


def classify(path: str) -> dict:
    if path in PILOT_PATHS:
        return row(
            path,
            reader_role="newcomer_or_active_researcher",
            class_id="active_front_door_pilot",
            authority_posture="local_research_only",
            canonical_owner="active_document_owner",
            allowed_change="bounded_reader_task_pilot_with_baseline",
            disposition="pilot",
            reason="selected active front door in the bounded reader-task pilot",
        )

    if path.startswith(".agents/skills/whisper/presets/github-repository-readme/") or path == ".agents/skills/whisper/presets/local-overlays.md":
        return row(
            path,
            reader_role="whisper_operator",
            class_id="whisper_local_overlay_pilot",
            authority_posture="candidate_local_overlay",
            lifecycle="generated_surface_local_overlay",
            canonical_owner=".arcanum/runtime-overlays/whisper/manifest.json",
            allowed_change="local_overlay_with_hash_preservation",
            disposition="pilot",
            reason="repository-local preset selected by accepted findings",
        )

    if path.startswith("dispatch/whisper-repo-readme-writing-patterns/whisper/"):
        return row(
            path,
            reader_role="maintainer_or_auditor",
            class_id="current_whisper_implementation",
            authority_posture="implementation_evidence_only",
            lifecycle="active_implementation_receipt",
            canonical_owner="whisper_downstream_handoff",
            allowed_change="append_or_correct_before_closeout",
            disposition="pilot",
            reason="current bounded implementation and validation surface",
        )

    if path.startswith(".arcanum/runtime-overlays/whisper/"):
        return row(
            path,
            reader_role="runtime_maintainer",
            class_id="whisper_overlay_ownership_contract",
            authority_posture="repository_local_runtime_ownership",
            lifecycle="active",
            canonical_owner=".arcanum/runtime-overlays/whisper/manifest.json",
            allowed_change="owner_led_overlay_preservation_update",
            disposition="pilot",
            reason="non-generated ownership and preservation evidence for local Whisper overlays",
        )

    if path in {".arcanum/inventory/index.md", "maps/current-state/README.md"}:
        return row(
            path,
            reader_role="repository_navigator",
            class_id="canonical_navigation",
            authority_posture="non_authority_read_model",
            canonical_owner="inventory_or_current_state_owner",
            allowed_change="navigation_only_through_owner",
            disposition="pilot",
            reason="canonical routing surface; content changes only when owner state changes",
        )

    if path.startswith(("authority/", "definitions/", "claims/", "sources/", "glossary/")):
        return row(
            path,
            reader_role="reference_reader",
            class_id=f"canonical_reference_{path.split('/', 1)[0]}",
            authority_posture="canonical_reference_contract",
            canonical_owner=path.split("/", 1)[0],
            allowed_change="owner_led_ambiguity_or_navigation_repair_only",
            disposition="defer",
            reason="precision and authority contract, not a persuasion or general readability surface",
        )

    if path.startswith(".agents/") or path.startswith("formulae/"):
        return row(
            path,
            reader_role="runtime_operator",
            class_id="generated_runtime_or_formula",
            authority_posture="generated_or_formula_owner",
            lifecycle="generated",
            canonical_owner="upstream_generation_owner",
            allowed_change="regenerate_or_use_explicit_local_overlay",
            disposition="exclude",
            reason="exclude from direct documentation rewrite",
        )

    if path.startswith(("telemetry/", ".arcanum/observability/")) or path == ".arcanum/inventory/log.md":
        return row(
            path,
            reader_role="auditor_or_future_agent",
            class_id="append_only_evidence",
            authority_posture="evidence_not_authority",
            lifecycle="append_only",
            canonical_owner="telemetry_or_observability_owner",
            allowed_change="append_new_record_only",
            disposition="exclude",
            reason="append-only evidence; no prose modernization",
        )

    if path.startswith(("dispatch/", "reviews/", "harvest/", "development/")) or "/returns/" in path or "/task-sessions/" in path or "/refinement-runs/" in path:
        return row(
            path,
            reader_role="research_auditor",
            class_id="historical_research_or_execution",
            authority_posture="historical_evidence",
            lifecycle="historical",
            canonical_owner="originating_research_or_execution_run",
            allowed_change="preserve; link from an active summary",
            disposition="exclude",
            reason="historical evidence or execution receipt",
        )

    if path.startswith("prizes/training/"):
        return row(
            path,
            reader_role="role_specific_participant_or_facilitator",
            class_id="role_specific_training",
            authority_posture="candidate_training_material",
            canonical_owner="training_role_owner",
            allowed_change="role_specific_pilot_only",
            disposition="defer",
            reason="separate teaching transport; no README funnel transfer",
        )

    upper = path.upper()
    if "REGISTER" in upper or "SCHEMA" in upper or path.endswith(("DECISIONS.md", "NOTATION.md")):
        return row(
            path,
            reader_role="state_or_contract_reader",
            class_id="structured_state_contract",
            authority_posture="structured_state_or_definition_contract",
            canonical_owner="structured_state_owner",
            allowed_change="owner_led_structural_update_only",
            disposition="exclude",
            reason="structured state is not a narrative rewrite target",
        )

    return row(path)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    markdown = sorted(
        item.relative_to(REPO_ROOT).as_posix()
        for item in REPO_ROOT.rglob("*.md")
        if ".git" not in item.parts
    )
    rows = [classify(path) for path in markdown]
    counts = Counter(item["disposition"] for item in rows)
    classes: dict[str, dict] = {}
    documents: list[dict] = []
    for item in rows:
        class_id = item["class_id"]
        class_fields = {
            key: value
            for key, value in item.items()
            if key not in {"path", "class_id"}
        }
        if class_id in classes and classes[class_id] != class_fields:
            raise ValueError(f"coverage class {class_id} has inconsistent fields")
        classes[class_id] = class_fields
        documents.append({"path": item["path"], "class_id": class_id})
    data = {
        "schema_version": "resonantos.documentation-coverage.v1",
        "policy": "strictest_applicable_owner_or_lifecycle_rule_wins",
        "total_markdown_files": len(rows),
        "disposition_counts": dict(sorted(counts.items())),
        "unclassified": [],
        "classes": dict(sorted(classes.items())),
        "documents": documents,
    }
    output = args.output if args.output.is_absolute() else REPO_ROOT / args.output
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {output.relative_to(REPO_ROOT)} ({len(rows)} Markdown files; 0 unclassified)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
