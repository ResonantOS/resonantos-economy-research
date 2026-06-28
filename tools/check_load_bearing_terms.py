#!/usr/bin/env python3
"""REC-C14 deterministic adapter — load-bearing term tracking checker.

Enforces (the deterministic half of) RESEARCH-CREDIBILITY-CONSTITUTION REC-C14
and ER-D23 Load-Bearing Term Lifecycle: every load-bearing term cited in a
formal expression, fixture FAIL-region, candidate invariant, decidable rule, or
claim-ledger normative content must resolve to a tracked authority entry.

This is a FIRST-PASS EXTRACTOR, not a judge. It mechanically pulls identifiers
out of load-bearing positions and reports the ones that do not (after
normalization) resolve to the tracked vocabulary. False positives are expected
(compound sub-identifiers, formal keywords) — the judgment layer (the
load-bearing-term sweep dispatch) decides which untracked identifiers are
genuinely load-bearing and what candidate definition each should get.

Exit code: 0 always (report-only); use --strict to exit 1 when untracked
identifiers are found (for CI / pre-commit).

Usage:
  python3 tools/check_load_bearing_terms.py [--root .] [--strict] [--min-count N]
"""
from __future__ import annotations
import argparse
import os
import re
import sys
from collections import defaultdict

# --- token extraction -------------------------------------------------------
# load-bearing identifiers: $-tokens ($RES, $R10) and snake/word identifiers.
TOKEN_RE = re.compile(r"\$[A-Za-z][A-Za-z0-9]*|[a-zA-Z][a-zA-Z0-9_]{3,}")
FENCE_RE = re.compile(r"```.*?```", re.DOTALL)
INLINE_RE = re.compile(r"`([^`\n]+)`")

# formal-language / English keywords that are never standalone load-bearing terms.
STOPWORDS = {
    "requires", "require", "must", "must_not", "not", "and", "or", "may",
    "may_route", "may_prioritize", "per", "true", "false", "rule", "rules",
    "into", "from", "with", "without", "that", "this", "than", "then", "else",
    "name", "names", "named", "value", "values", "list", "lists", "field",
    "fields", "status", "kind", "kinds", "voice", "text", "none", "only",
    "each", "every", "some", "what", "when", "where", "which", "while", "until",
    "over", "under", "before", "after", "above", "below", "across", "between",
    "candidate", "draft", "proof", "witness", "typed_negative", "open_residue",
    "evidence", "source", "scope", "boundary", "promotion", "gate", "route",
    "owner", "review", "reviewed", "local", "research", "lifecycle",
    "enters", "evaluated", "summed", "drawing", "draws_from", "owning",
    "assumptions", "expected", "expected_failure_or_block",
    # repo-structural / prose words — never standalone load-bearing economy terms
    "returns", "return", "tower", "towers", "lane", "lanes", "skeptic",
    "skeptics", "synthesizer", "explorer", "explorers", "subtower", "subtowers",
    "level", "levels", "readme", "glossary", "ledger", "attack", "attacks",
    "claims", "claim", "sources", "mechanisms", "mechanism", "obligations",
    "requirement", "requirements", "harness", "analogy", "borrow", "carefully",
    "future", "honest", "half", "life", "recent", "permanent", "science",
    "crypto", "failed", "daos", "econ", "socioeconomic", "https", "resonantdao",
    "findings", "research_pass", "research_flag", "research_block",
}


def norm(tok: str) -> str:
    """normalize an identifier for matching: lowercase; strip $; _,-, space unified."""
    t = tok.lower().lstrip("$")
    return re.sub(r"[\s_\-]+", " ", t).strip()


def tokens_in(text: str) -> set[str]:
    out = set()
    for m in TOKEN_RE.findall(text):
        if m.lower().lstrip("$") in STOPWORDS:
            continue
        out.add(m)
    return out


def read(path: str) -> str:
    try:
        with open(path, encoding="utf-8") as f:
            return f.read()
    except OSError:
        return ""


def load_bearing_text(md: str) -> str:
    """concatenate the load-bearing positions of a markdown file:
    fenced code blocks (formal voices / FAIL-regions) + inline `code` spans."""
    parts = FENCE_RE.findall(md)
    parts += [m for m in INLINE_RE.findall(md)]
    return "\n".join(parts)


def build_tracked(root: str) -> set[str]:
    """the tracked vocabulary: ER-D term names + control handles + notation
    symbols + glossary headings + every identifier already used inside a
    DEFINITIONS.md formal block (the canonical formal vocabulary)."""
    tracked: set[str] = set()

    idx = read(os.path.join(root, "definitions", "DEFINITIONS-INDEX.md"))
    for row in idx.splitlines():
        cells = [c.strip() for c in row.split("|")]
        if len(cells) < 4 or not cells[1].startswith("ER-D"):
            continue
        term = re.sub(r"\[([^\]]+)\].*", r"\1", cells[2])  # link text
        tracked.add(norm(term))
        for handle in re.findall(r"`([^`]+)`", cells[3]):
            tracked.add(norm(handle))

    defs = read(os.path.join(root, "definitions", "DEFINITIONS.md"))
    for tok in tokens_in(load_bearing_text(defs)):
        tracked.add(norm(tok))
    for h in re.findall(r"^##\s+ER-D\d+\.\s+(.*)$", defs, re.MULTILINE):
        tracked.add(norm(re.sub(r"\(candidate\)", "", h)))

    notation = read(os.path.join(root, "NOTATION.md"))
    for row in notation.splitlines():
        cells = [c.strip() for c in row.split("|")]
        if len(cells) > 2 and cells[1] and cells[1] not in ("Symbol", "---"):
            for tok in TOKEN_RE.findall(cells[1]):
                tracked.add(norm(tok))
            tracked.add(norm(re.sub(r"`", "", cells[1])))

    gloss = read(os.path.join(root, "glossary", "GLOSSARY.md"))
    for h in re.findall(r"^##\s+(.*)$", gloss, re.MULTILINE):
        tracked.add(norm(re.sub(r"\(candidate invariant\)", "", h)))

    tracked.discard("")
    return tracked


# scanned artifacts (load-bearing positions in NON-definition surfaces)
SCAN_GLOBS = [
    "dispatch/economy-synthesis/findings.md",
    "claims/SOURCE-CLAIM-LEDGER.md",
    "NOTATION.md",
    "glossary/GLOSSARY.md",
]
SCAN_TREES = ["subtowers", "lanes", "levels"]


def scan_files(root: str) -> list[str]:
    files = []
    for g in SCAN_GLOBS:
        p = os.path.join(root, g)
        if os.path.isfile(p):
            files.append(p)
    for tree in SCAN_TREES:
        for dirpath, _dirs, names in os.walk(os.path.join(root, tree)):
            for n in names:
                if n.endswith(".md"):
                    files.append(os.path.join(dirpath, n))
    return files


def is_tracked(tok: str, tracked: set[str]) -> bool:
    n = norm(tok)
    if n in tracked:
        return True
    # substring containment: a single-word term inside a tracked multi-word term
    return any(n in t.split() for t in tracked)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".")
    ap.add_argument("--strict", action="store_true")
    ap.add_argument("--min-count", type=int, default=1)
    args = ap.parse_args()
    root = os.path.abspath(args.root)

    tracked = build_tracked(root)
    untracked: dict[str, set[str]] = defaultdict(set)

    for path in scan_files(root):
        rel = os.path.relpath(path, root)
        for tok in tokens_in(load_bearing_text(read(path))):
            if not is_tracked(tok, tracked):
                untracked[tok].add(rel)

    ranked = sorted(
        ((t, fs) for t, fs in untracked.items() if len(fs) >= args.min_count),
        key=lambda kv: (-len(kv[1]), kv[0].lower()),
    )

    print(f"REC-C14 load-bearing term check  (tracked vocab: {len(tracked)} entries)")
    print(f"scanned: {len(scan_files(root))} files in non-definition surfaces")
    print(f"untracked load-bearing identifiers (first-pass, needs judgment): {len(ranked)}\n")
    for tok, files in ranked:
        print(f"  {tok:32}  in {len(files)} file(s): {', '.join(sorted(files))}")

    if not ranked:
        print("  (none — every extracted identifier resolves to the tracked vocabulary)")
    print("\nNote: first-pass extraction. False positives expected (compound "
          "sub-identifiers, prose). The load-bearing-term sweep dispatch judges "
          "which are genuinely load-bearing and proposes candidate definitions.")

    return 1 if (args.strict and ranked) else 0


if __name__ == "__main__":
    sys.exit(main())
