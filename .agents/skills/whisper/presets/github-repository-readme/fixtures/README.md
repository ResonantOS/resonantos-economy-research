# Preset Fixtures

These fixtures test declared contract behavior. They do not prove that a README
is clear, useful, safe, persuasive, truthful, or understood.

Run:

```bash
python3 ../tools/validate_readme_preset.py --fixtures
```

The fixture set includes:

- a small library README that passes structural checks;
- a governed-research README whose required boundaries remain inline;
- a dangerous-success README that looks polished but hides a boundary and
  therefore blocks;
- selector cases including mixed evidence and manual abstention;
- a historical-record case that must refuse prose modernization; and
- a human editorial pair for ordinary action before formal terminology.

The beginner-language pair is reviewed by a human. The validator can confirm
the files exist, but it cannot decide whether language is genuinely familiar to
the intended reader.
