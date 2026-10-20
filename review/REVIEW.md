# Running the review

This file is for the model in the office that runs the review (the orchestrator) and for Krithik, who starts it and reads the result. The orchestrator follows it step by step and does not improvise around it. Where a step says "Krithik", stop and wait for him.

The review's claim: every element on every screen either earns its place or is named, with a reason and a fix, by a reviewer that never read why it was put there.

## What it needs

- Node 22 or later (`node --version`); Chrome installed; Python 3.
- The app running and reachable in a browser on this machine.
- `screens.txt` filled in (step 1) and `glossary.md` corrected (step 1).
- Claude Code with the Agent tool, so each lens can run as a fresh agent. Measured at home with Sonnet: one lens on one screen is about 80,000 to 90,000 tokens and two to three minutes, run six at a time in parallel. For fifteen screens and seven lenses expect about twenty-five agents and a few million tokens.

## Step 1 · Krithik: name the screens and check the glossary

1. Open `screens.txt`. One line per screen state, `name<TAB>url`. Every state a reader can reach is a screen: each tab, each drill-down open, each range or filter, each role's version of a shared screen, and the empty or zero states where the app lets you reach them. A review of the closed state only reviews half the app.
2. If the app needs a login, the capture can run with a visible browser: you log in once, press Enter, and it continues.
3. Different roles see different screens. Make one screens file per role (`screens-keyholder.txt`, `screens-head.txt`, `screens-cro.txt`, `screens-riskai.txt`), name each screen with the role first (`head-overview`), and capture each file in its own `--headed` run into the same `captures` folder with `--start` set to the next free number, so one numbered set holds every role. Lens 7 reads all of them together; that is how it sees the app as each reader does.
4. Open `glossary.md`. Correct the lines marked *(check)* and anything else that is not how the office says it. Reviewers know only what this file tells them.

## Step 2 · Orchestrator: capture

From the review folder:

```
node capture.mjs --screens screens.txt --out captures
node capture.mjs --screens screens.txt --out captures --headed     (when a login is needed)
node capture.mjs --screens screens.txt --out captures --skip ".dev-toolbar"   (to ignore something that is not the product)
```

Open `captures/INDEX.md`. Every screen must be listed with a plausible element count (a screen with 3 elements did not load; one with 400 has a table the inventory could not fold). Open two PNGs and confirm the red numbers sit on the elements. Fix `screens.txt` and rerun until the index is right. Do not go on with a bad capture.

## Step 3 · Orchestrator: calibrate the reviewers

Before the real screens, the lenses review a screen with known faults. This is the step that tells Krithik whether to trust the rest.

```
node capture.mjs --screens calibration/screens.txt --out calibration/captures
```

Then run lenses 1 to 6 on it as six fresh agents with the brief in step 4 (screen `01-team-spend`, output folder `calibration/findings`). When all six have written their files:

```
python merge.py calibration/findings --key calibration/key.json --capture calibration/captures/01-team-spend.json
```

It prints which planted faults were found, by which lens, which were missed, and any false alarms on the decoys, then PASS or FAIL. Pass line: at least 11 of 15 found and at most 1 false alarm.

On FAIL, the score tells you what to do: it names each missed fault and the lens that was expected to find it, and each false alarm with the lens and the claim. Work through them in this order:
1. Rerun only the failing lens as a fresh agent. Most misses are an agent that did not look at the PNG or did not finish its table. If it passes, go on.
2. If the same lens misses the same fault twice, the lens file needs a line. Change it under the rules in "Changing a lens" below, then rerun that lens and score again.
3. If a false alarm stands twice, read the decoy with your own eyes. If the reviewer is right, say so in the report and go on; a decoy that holds a real fault is a fault in the kit, not in the reviewer. Record it in `lenses/CHANGES.md`. If the reviewer is wrong, the lens needs a line that says what earns its place; change it under the same rules.
Do not run the real review on a reviewer that failed its calibration and was not repaired.

Do not open `calibration/ANSWER_KEY.md` or `calibration/key.json` yourself until the six files are written; your own reading of the key must not reach a reviewer.

## Changing a lens

The lens files are the review's judgement, so they change only for a reason that can be shown. In the office the orchestrator may change them, under these rules:

- Only to fix a calibration miss or false alarm that repeated (step 3), or a wrong claim that Krithik points at in a report and that the lens would make again.
- Add or sharpen a line; do not remove one, and do not add a line that names the calibration screen or its faults.
- Never change `lenses/_contract.md`'s "What you must not read", the verdicts, the severities or the output format; never change `calibration/key.json`, `calibration/calibration.html`, `calibration/ANSWER_KEY.md` or the pass line. Those are the measuring stick; a stick that is cut to fit measures nothing.
- Every change gets a line in `lenses/CHANGES.md`: the date, the lens, the line added, and the miss or alarm that caused it. Then that lens is rerun on the calibration screen and scored again before it reviews a real screen.
- If a change would need any of the forbidden edits, stop and write the problem into the report for Krithik.

How Krithik knows a lens needs a line: the calibration score says so (a lens that misses its expected fault twice), or a report keeps making a claim he can show is wrong. He asks the orchestrator to change it; the rules above and `CHANGES.md` are the record.

## Step 4 · Orchestrator: run the lenses

Lenses 1 to 6 review screens; lens 7 reviews the set. Each run is a **fresh agent** (the Agent tool, general-purpose, no prior context) with the brief below and nothing else. Give a lens agent at most four screens at a time so its attention stays on each; for more screens start more agents of the same lens. Lens 7 gets every capture in one agent.

You must not: summarise the app for the agent, tell it what the author intended, pass it the ledger, the principles document, the source, the mockups, or another agent's findings, or edit the lens files. If an agent asks a question, answer only from `glossary.md`.

The brief, verbatim, with the brackets filled:

```
You are an independent reviewer of a web app's screens. You are lens [N] ([name]).

Read, in this order, and nothing else:
1. [review folder]\lenses\_contract.md
2. [review folder]\lenses\[N]-[name].md
3. [review folder]\glossary.md

Then review these screens. For each one, look at the PNG with the Read tool so you actually see it, then read its JSON:
- [review folder]\captures\[NN]-[name].png and .json
- ...

Write one findings file per screen to [review folder]\findings\[N]-[name]-[NN].md, in exactly the format the contract gives: the heading, the first-look line, the seven-column table with one row per element (every element and every G group gets a row, KEEP included), then the three closing lines.

Do not open any other file in this repository or anywhere else: no LEDGER.md, PRINCIPLES.md, HANDOVER.md, no mockups, no source code, no other findings files. Do not search the web. If you cannot see an image, say so in that file and go on to the next.

When done, reply with only: the paths you wrote and, per file, your counts of KEEP / CUT / MERGE / MOVE / FIX / ASK.
```

For lens 7 the brief lists every capture and the output is the single file `findings\7-set.md`.

Run the agents in parallel where the tool allows. When all have reported, check that every expected file exists and holds a table; rerun any agent whose file is missing or malformed, as a fresh agent again.

## Step 5 · Orchestrator: merge

```
python merge.py findings
```

This writes `findings/REPORT-findings.md`: every element any lens did not keep, by screen, worst first, with the number of lenses that agree and each lens's claim and fix. Agreement across lenses is the strongest signal in the review; a single lens at "blocks" is the next.

## Step 6 · Orchestrator: reconcile with what was decided

Only now open `LEDGER.md` and `PRINCIPLES.md` (in the office folder). For each finding at blocks or weakens, look for a recorded decision or principle that speaks to it. Where one does, add the decision's number and its reason beside the finding in the report's "Decided before" table. The finding stands: a decision is a reason, not a verdict, and Krithik chooses with both in view. Never drop or soften a finding because a decision exists.

## Step 7 · Orchestrator: write the report

Fill `REPORT_TEMPLATE.md` as `REPORT.md`. The first page is for Krithik and must stand alone:

- Verdict per screen. **Keep**: nothing above polish. **Fix**: findings that weaken the reading but the screen's shape is right. **Rework**: a blocks finding on the screen's own answer, or a third or more of its elements CUT or MERGE.
- The ten findings that matter most, worst first, each with its screen, element, claim, fix and the lenses that agree.
- The cut list: the elements no reader needs, by screen.
- What earns its place, by screen, so Krithik knows what not to touch.
- Questions for the owner, from every lens's ASK rows and closing lines.
- Decided before, from step 6.
- The calibration score from step 3, in the first paragraph.

Write plainly. Element numbers refer to the PNGs; Krithik reads the report with the PNG open.

## Step 8 · Krithik: read, decide, record

Read `REPORT.md` with the PNGs beside it. For each finding you act on or refuse, a line in the ledger with the reason, as for every other decision. Findings refused without a reason come back next run.

## Running it again

After the screens change, rerun from step 2. Keep each run's `captures/`, `findings/` and `REPORT.md` in a dated folder (`runs/2026-11-03/`) so the next run can say what was fixed and what came back. The calibration (step 3) runs every time; it is cheap and it is the only evidence that the reviewers were looking.
