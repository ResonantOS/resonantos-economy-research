# attacks.md — onboarding-docs review (verbatim attacker + verifier returns)

Dispatch: `2026-06-28-onboarding-docs-review` (`dispatch_type: review`).
Targets: `README.md`, `GUIDE.md`, `CONTRIBUTING.md`.
Attacker group ran `robot_talks: true` — each attacker's **initial** findings and
**final** (post-confrontation) position are preserved below (P14 collapse
detection). Verifier (Quine) return appended after the zig-zag.

---

## Agent 1 — Ostrom, Elinor — OPERABILITY lens

### Initial findings

- **F1 (MAJOR)** — "What to do next" pointer misdirects. README §"Continue Research From Here" step 2 and inventory Start Here step 3 send the newcomer to `dispatch/economy-synthesis/findings.md` for the "ranked fixture & constitution backlog … Tracks A/B/C, cheapest-unblocker first", but those strings do **not** appear in that 461-line file; the track list lives in `.arcanum/inventory/entries/economy-resilience-program.md`. Fix: point first at the inventory entry; treat findings.md as backing detail.
- **F2 (MAJOR)** — No concrete first *action*. CONTRIBUTING "Validation Work" / GUIDE "Current Continuation Surface" name *which surfaces to read* but never *what to do with them*; "take the next fixture from the backlog" has no run command / worked execution loop. Only the query path (QUERYING.md) has worked examples. Fix: add a 3–5 line "first fixture, end to end" worked walkthrough.
- **F3 (MAJOR)** — Entry over-determined. All three docs say "start in the inventory"; the inventory says all three point back. README Reading Order (19 items) and inventory Start Here (7) disagree on sequence; no single authoritative onboarding order with a stop rule. Fix: declare the inventory Start Here the one authoritative sequence; reframe README Reading Order as a reference index.
- **F4 (MINOR–MAJOR)** — Confirm/deny is the headline "primary way to use the repo" but no doc says *how to start an agent session* against the repo. Fix: one sentence ("open an agent session in the repo root, then ask").
- **F5 (MINOR)** — `REC-C14` / `ER-D23` cited as bare codes in README/GUIDE, unglossed and unlinked. (Verified `python3 tools/check_load_bearing_terms.py` runs cleanly, exit 0.) Fix: link/gloss on first use.
- **F6 (MINOR)** — AGENTS' four checks name actions ("route it to an authority gate") without the destination path. Fix: append the destination to each check.
- Survived: every file on the critical path exists; the documented checker command runs; the dispatch-gate sequence is concrete; the confirm/deny loop content is executable once a session exists.

### Final position (post-confrontation)

- AGREE & load-bearing for operability: Fritz **C1** (purged-snapshot link = hard navigation dead-end for clones — *strengthens* F1: the "what next" path is broken at two points); Fritz **M2** (README:25 omits the mandatory AGENTS.md); Fritz **M3/M4** (= my F3 from the reference side).
- **NEW N1 (MAJOR, operability):** Taleb #3 status drift (subtowers say `Status: scaffolded` while README says "first-pass returns present") is, for a newcomer, a *navigation trap* — an undecidable "what do I do next." Fix: reconcile the status line or link README directly to `returns/`.
- MERGE: my **F3 merges with Fritz M2+M3+M4** (one root: no canonical onboarding order; surfaces drift; one drops AGENTS). My **F1 stays distinct** from Fritz C1 (content misdirect vs purged-file dead-end — two independent breaks).
- Priority: C1 ≈ F1 > consolidated-F3/M2/M3/M4 > F2 > N1 > F4 > F5/F6.

---

## Agent 2 — Taleb, Nassim Nicholas — FIDELITY / GOVERNANCE lens

### Initial findings

- **#1 (CRITICAL)** — README:204 "closed `resolved`, **auditor ACCEPT**". The telemetry close row for `2026-06-27-econ-program-synthesis` records only `exit_reason: "resolved"`; no auditor verdict field, and "ACCEPT" appears nowhere. Manufactures an authority signal the cited artifacts don't carry (REC-C2; AGENTS "never silently assert an audit verdict"). Fix: replace with the actual recorded state ("closed `resolved`").
- **#2 (MAJOR)** — README:205 "survived a Popper/Quine/Meadows robot-talks round" understates that the §0.3 affirmative existence-claim was KILLED, MERGE-1/-3 killed, and the synthesis closes with three residual dissents. Fix: qualify ("passed one round that killed the affirmative existence-claim and left three residual dissents").
- **#3 (MAJOR)** — README "first-pass returns present" vs all four `subtowers/*/README.md` carrying `Status: scaffolded`. State drift. Fix: reconcile the status label.
- **#4 (MAJOR)** — README:97 "first **safe** validation scaffold" imports a safety verdict onto a review-only surface whose own README says it "does not validate the economy". Fix: drop "safe".
- **#5 (MINOR)** — The de-CAV2 "method authority is our own constitution" reframe rests on prose; `authority/decisions/2026-06-26-standalone-repository.md` still authorizes "CAV2 as external method authority". Per AGENTS ("promotion/demotion follow promotion-policy, not fresh prose") the authority source is dangling. Fix: add a superseding decision recording the method-authority transfer.
- **#6 (MINOR)** — README OQ-1/OQ-2 "first economy invariant / first workflow witness" headlines lack the inline collapse-test AGENTS:106 requires for "the one/first X" claims. Fix: add a one-line collapse-test, or mark illustrative.
- Survived: the private/internal posture is consistent and no leaky private text is reproduced; the claim≤evidence / signal≠authority framing blocks faithfully mirror the constitution; "validation-ready, not validated" is self-policing.

### Final position (post-confrontation)

- **Fritz C1 — AGREE but RE-SCOPE to my lens:** README:235 presents the gitignored snapshots as "the operative sources for this standalone repository" — the public README depends on private/un-cloned evidence to substantiate its source claims. A public/private posture leak (inverse direction). **Upgrades my own "clean" survived-note to MAJOR.**
- **Fritz M2 — AGREE:** demoting the non-negotiable AGENTS gate to an unlisted also-ran is boundary-salience drift.
- **Ostrom F1 — AGREE (his lens):** confirms the Current-State block is where citations were rounded up *and* mis-targeted.
- **NEW cross-lens:** Ostrom F1 × my #1 — the same README passage **over-claims the file's verdict ("auditor ACCEPT") and over-claims its contents ("Tracks A/B/C")**; merge-route to one edit.
- All of #1–#6 stand; none collapse. #1 and Ostrom F1 share a target passage but are distinct defects (false verdict vs wrong pointer) — keep both, edit together.

---

## Agent 3 — Fritz, Tobias — OWNERSHIP / REFERENCE-INTEGRITY lens

### Initial findings

- **C1 (CRITICAL)** — README:235 links `sources/local-snapshots/README.md`, which `.gitignore:15` ignores and commit `af6c7f5` purged from history (`git ls-files --error-unmatch` → not known to git). Any fresh clone follows it into nothing; README:89 even calls the snapshots "local-only / gitignored" — self-contradiction. Fix: de-link; describe as a local-only path absent from clones.
- **M1 (MAJOR)** — "Framing" double-owned by README (163–177) and GUIDE (22–43); the 6th member differs (README "Claim ≤ evidence"; GUIDE "Load-bearing terms are tracked") — already drifted. Fix: single owner (GUIDE); README references it.
- **M2 (MAJOR)** — README:25 "Two documents tell you how to work here" (GUIDE + CONTRIBUTING) omits AGENTS.md, which the repo calls non-negotiable. Fix: include AGENTS / don't bound the set at two.
- **M3 (MAJOR)** — Reading-order disagreement across all five surfaces; README "Reading Order" is the only one not inventory-first, against AGENTS "inventory-first". Fix: make README Reading Order start with the inventory path, or label it a deep-dive corpus order.
- **M4 (MINOR)** — Inventory `index.md:13` quotes README heading "What This Repository Is", which doesn't exist (actual "What This Is, In Plain Language"). Fix: correct the quoted heading.
- Survived: 62 link targets across the three docs resolve on disk (only C1 fails for clones); the confirm/deny loop is single-owned (README→GUIDE→QUERYING clean chain); QUERYING's `PRZ-*`/`BET-*` IDs resolve.

### Final position (post-confrontation)

- **Ostrom F1 — AGREE, upgrade to MAJOR (squarely my lens):** `grep "Track [ABC]"` on `dispatch/economy-synthesis/findings.md` returns zero hits; the strings live only in `.arcanum/inventory/entries/economy-resilience-program.md`. Two docs assert a target file contains content it doesn't. Co-own with Ostrom.
- **Taleb #1 — AGREE (CRITICAL):** README:204 attributes "auditor ACCEPT" to a ledger that records only `exit_reason: "resolved"`; pointer-to-ledger is broken.
- **Taleb #3 — AGREE (MAJOR):** README "first-pass returns present" vs four `subtowers/*/README.md` "Status: scaffolded" — flat README-vs-repo contradiction.
- **NEW pattern:** README lines 184–230 ("Current State" + "Continue Research From Here") concentrate **three independent broken/inflated pointers** (gitignored snapshot link, phantom Tracks A/B/C, invented auditor ACCEPT) — recommend a wholesale reconciliation pass against the ledger + inventory, not three spot fixes.
- MERGE: my **M3 merges with Ostrom F3** (same root). C1/M1/M2/M4 stand independent. Taleb #5 is a real double-ownership shape (method authority defined in two drifted places) but lives in `authority/decisions/`, outside the three targets.
