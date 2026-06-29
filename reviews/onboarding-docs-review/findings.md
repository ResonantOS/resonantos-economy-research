# findings.md — onboarding-docs review (verified change requests)

Dispatch: `2026-06-28-onboarding-docs-review` · `dispatch_type: review` · targets
`README.md`, `GUIDE.md`, `CONTRIBUTING.md`.

**One-line answer to the goal:** the three docs are well-written and posture-faithful,
but the recent edit session left a concentrated **drift cluster in README's
"Current State / Continue Research From Here" block** (three independent broken or
inflated pointers), a **double-owned & already-drifted "Framing" list**, and **no
single authoritative onboarding order** — all FIX. **Verdict: README FIX,
GUIDE FIX, CONTRIBUTING FIX.**

**Verification discipline:** all 13 factual findings were independently confirmed
by the verifier (Quine) against the literal files (greps, `git ls-files`,
`git check-ignore`, line reads); **0 dropped**. The 3 gap findings (MA8, MI1, MI2)
are design-judgment omissions, not falsifiable single facts — labelled as such.
The attacker group ran `robot_talks`; initial→final shifts are preserved in
[attacks.md](attacks.md) (Taleb re-scoped CR2 to a governance MAJOR; Ostrom and
Fritz merged F3↔M3 into MA7; the Current-State cluster emerged only on
confrontation).

---

## README.md — verdict: **FIX**

| # | finding | evidence (verified) | severity | proposed fix |
|---|---|---|---|---|
| CR1 | "auditor ACCEPT" is an invented verdict | `README.md:204` "closed `resolved`, auditor ACCEPT"; ledger close row records only `exit_reason: "resolved"`; no "ACCEPT" verdict in `findings.md` | **CRITICAL** | Replace "auditor ACCEPT" with the actual recorded state ("closed `resolved`"). |
| CR2 | Links + leans on a gitignored/purged path | `README.md:235` links `sources/local-snapshots/README.md` (in `.gitignore`, purged in `af6c7f5`, untracked); README:89 itself calls it "local-only / gitignored"; README:235 calls the snapshots "the operative sources" — a public doc depending on un-cloned private material | **CRITICAL** | De-link line 235; describe the snapshots as a local-only path absent from clones; soften "operative sources" to local-lineage record. |
| MA1 | Start-path pointer targets the wrong file | `README.md:217-221` + `.arcanum/inventory/index.md:24` send the reader to `dispatch/economy-synthesis/findings.md` for "Tracks A/B/C"; `grep "Track [ABC]"` there = 0 hits — the tracks live in `.arcanum/inventory/entries/economy-resilience-program.md` | **MAJOR** | Point first at the inventory entry (which holds Tracks A/B/C); treat findings.md as backing detail. |
| MA2 | "survived a robot-talks round" understates kills | `dispatch/economy-synthesis/findings.md` Lane-0 + matrix: §0.3 affirmative claim **KILLED**; §4 "three residual dissents remain unreconciled" | **MAJOR** | Qualify: "passed one round that killed the affirmative existence-claim and left three residual dissents." |
| MA3 | Subtower status drift (also a navigation trap) | `README.md:76-79` "first-pass returns present" vs all four `subtowers/*/README.md` `Status: scaffolded` | **MAJOR** | Reconcile the status word, or link README straight to `returns/` so the action target is unambiguous. |
| MA4 | "first **safe** validation scaffold" leaks a safety claim | `README.md:97` "safe" vs `validation/README.md:8,47` "review-only … does not validate the economy" | **MAJOR** | Drop "safe"; "the first validation *scaffold* (review-only; does not validate the economy)." |
| MA5 | "Framing" double-owned and already drifted | `README.md:163-177` 6th habit = "Claim ≤ evidence"; `GUIDE.md:22-43` 6th habit = "Load-bearing terms are tracked" — two canonical lists, divergent | **MAJOR** | Make GUIDE the owner; README's Framing references "the six habits in GUIDE.md" rather than re-listing. |
| MA6 | "Two documents tell you how to work here" omits AGENTS | `README.md:25` lists only GUIDE + CONTRIBUTING; AGENTS.md is the non-negotiable pre-write gate | **MAJOR** | Include AGENTS (and the inventory Start Here); don't bound the set at two. |
| MA7 | No single authoritative onboarding order | `README.md:279` Reading Order item 1 = GUIDE (not inventory), contradicting AGENTS "inventory-first" + inventory "canonical entry path"; five surfaces disagree | **MAJOR** | Declare the inventory Start Here the one onboarding order; relabel README "Reading Order" a deep-dive corpus index. |
| MI5 | OQ-1/OQ-2 "first X" headlines lack inline collapse-test | `README.md:313,317` vs `AGENTS.md:106` (the-one/first-X claims must state collapse-test inline) | MINOR | Add a one-line collapse-test to each OQ, or mark them illustrative not keystone. |
| MI2 | `REC-C14`/`ER-D23` cited as bare codes | README Posture / GUIDE Framing cite the codes unglossed and unlinked | MINOR | Link/gloss on first use (→ the constitution / DEFINITIONS). |

## GUIDE.md — verdict: **FIX**

| # | finding | evidence (verified) | severity | proposed fix |
|---|---|---|---|---|
| MA5 | (shared) "Framing" double-owned/drifted | see README MA5 | **MAJOR** | GUIDE owns the six-habit list; reconcile the 6th item across both. |
| MA8 | No worked first-*action* for the execution path | GUIDE "Current Continuation Surface" + CONTRIBUTING "Validation Work" name surfaces to read but no run/record loop; only the *query* path (QUERYING.md) has worked examples | **MAJOR** *(judgment)* | Add a 3–5 line "first fixture, end to end" walkthrough mirroring QUERYING.md. |
| MA7 | (shared) onboarding-order disagreement | see README MA7 | **MAJOR** | Point to the one inventory Start Here order. |
| MI1 | No doc says *how to start an agent session* | confirm/deny is the headline "primary way to use the repo" but the entry move (open a session in repo root) is never stated | MINOR *(judgment)* | One sentence at the top of the query section. |
| MI2 | (shared) bare `REC-C14`/`ER-D23` codes | GUIDE Framing habit 6 | MINOR | gloss/link. |

## CONTRIBUTING.md — verdict: **FIX** (least-affected; only shared cross-doc findings)

| # | finding | evidence (verified) | severity | proposed fix |
|---|---|---|---|---|
| MA7 | (shared) onboarding-order disagreement | CONTRIBUTING "Start Here" is a 4th competing order | **MAJOR** | Point to the one inventory Start Here order. |
| MA8 | (shared) no worked first-action | CONTRIBUTING "Validation Work" "take the next fixture" with no execution loop | **MAJOR** *(judgment)* | Add / link the worked fixture walkthrough. |

---

## Spillover change requests (surfaced by the review, outside the 3 targets)

These are not in the named targets but are load-bearing to the same fixes:

| # | file | finding | severity | proposed fix |
|---|---|---|---|---|
| MA1b | `.arcanum/inventory/index.md:24` | also points to findings.md for the (absent) Tracks A/B/C | MAJOR | Repoint Start Here step 3 to `entries/economy-resilience-program.md`. |
| MA3b | `subtowers/*/README.md` | `Status: scaffolded` contradicts README "first-pass returns present" | MAJOR | Update the four subtower headers to their true status (or fix README). |
| MI3 | `AGENTS.md:35-46` | four checks name actions without destination paths | MINOR | Append the destination to each check (e.g. check 2 → `authority/promotion-policy.md`). |
| MI4 | `authority/decisions/2026-06-26-standalone-repository.md:36` | still authorizes "CAV2 as external method authority", un-superseded; the de-CAV2 README/GUIDE/AGENTS reframe rests on prose, not a decision | MINOR | Add a superseding decision recording the method-authority transfer to the local research-credibility constitution. |
| MI6 | `.arcanum/inventory/index.md:13` | quotes README heading "What This Repository Is" (doesn't exist; actual "What This Is, In Plain Language") | MINOR | Correct the quoted heading. |

---

## Change-request punch list (ordered by severity)

**CRITICAL (2)** — README "Current State" block, do first as one reconciliation pass:
1. CR1 — remove invented "auditor ACCEPT" → "closed `resolved`".
2. CR2 — de-link the gitignored snapshots path; soften "operative sources".

**MAJOR (8):** 3. MA1 start-path → inventory entry (+MA1b). 4. MA7 one authoritative onboarding order (relabel README Reading Order; reconcile across surfaces). 5. MA5 single-own the Framing list (GUIDE). 6. MA6 README "two documents" → include AGENTS + inventory. 7. MA3 reconcile subtower status (+MA3b). 8. MA2 qualify "survived" → killed-affirmative + 3 dissents. 9. MA4 drop "safe" from validation scaffold. 10. MA8 add a worked "first fixture, end to end" walkthrough.

**MINOR (6):** 11. MI4 superseding method-authority decision. 12. MI1 one-line "start a session" sentence. 13. MI2 gloss/link `REC-C14`/`ER-D23`. 14. MI3 AGENTS checks → name destinations. 15. MI5 OQ collapse-tests. 16. MI6 fix inventory heading quote.

---

## Robot_talks collapse note (P14)

- Taleb's initial "public/private — Clean" survived-note **collapsed** to a MAJOR on Fritz's evidence (CR2): the README leans on gitignored snapshots as operative sources.
- Ostrom F3 + Fritz M3/M4 **merged** into one root (MA7: no canonical onboarding order).
- The "Current-State drift cluster" (CR1+CR2+MA1) emerged **only on confrontation** — no single attacker saw all three; the pattern is the review's headline.

## Promotion boundary

This is a non-authority review read-model. It produces verified change requests
only; applying them is a separate governed act. No token, bounty, governance,
mechanism, or validation claim is promoted. MI4 is *surfaced*, not executed:
editing a constitution/decision remains an owner act (constitution-governance).

---

## Closeout

- **exit_reason:** `resolved` (final_approver Brandenburg: ACCEPT; FIX verdicts are deliverables).
- **agents_spawned:** total 5 — explorer 3 (Ostrom, Taleb, Fritz; robot_talks, each continued once for confrontation), skeptic 1 (Quine, verifier), auditor 1 (Brandenburg, final_approver); loops_used 1. Synthesis (`attacks.md` + `findings.md`) strategist-authored per the review skill ("the strategist may write the files itself"); writer role not separately spawned. The 2 check-tension gate agents are pre-registration gate infrastructure, not counted.
- **verification:** verifier confirmed 13/13 factual findings against the literal files, 0 dropped; 3 findings labelled design-judgment.
- **next act (outside the dispatch):** apply the change-request punch list. CRITICAL CR1/CR2 first.
