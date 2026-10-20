# Charon front-end review kit

An independent review of a built front end, run in the office by Claude Code, that answers one question for every element on every screen: does it earn its place, or is it there because it looked good?

It works on the rendered app, not the source: a capture tool numbers every element on every screen and measures it; seven reviewers, each a fresh agent that has not read why the app was built this way, judge the screens through one lens each (purpose, ink, perception, truth, reading, craft, the set); a merge step ranks what they agree on; a calibration screen with fifteen planted faults says whether the reviewers were looking before their verdicts on the real app are trusted.

The lenses are drawn from Tufte and Few, whom the global head reads, and from the people who complete them: Nick Desbarats (dashboards that change decisions), Alberto Cairo and Kaiser Fung (truth), Cleveland and McGill, Bertin and Colin Ware (what the eye can read), Krug, Nielsen and Norman (what a stranger can use), Bringhurst and Knaflic (craft and focus), and Wurman (the set).

## Files

| File | What it is |
|---|---|
| `REVIEW.md` | The runbook. The orchestrating model follows it; Krithik does steps 1 and 8. |
| `screens.txt` | Krithik's list of screen states to capture: `name<TAB>url`. |
| `glossary.md` | Who reads Charon and what the words mean. The only context a reviewer gets. Correct the *(check)* lines. |
| `capture.mjs` | Renders each screen with Chrome (Node 22+, nothing to install), writes `captures/NN-name.png` with every element numbered and `NN-name.json` with text, boxes, fonts, colours, contrast and the screen's measures. `--headed` for a login; `--skip <selector>` to ignore a dev toolbar. |
| `inventory.js` | The in-page script `capture.mjs` injects. Can also be pasted into DevTools on any screen when automation is not possible. |
| `lenses/_contract.md` | What every reviewer may read, how it looks, the verdicts and the output format. |
| `lenses/1-purpose.md` … `7-set.md` | The seven lenses. |
| `lenses/CHANGES.md` | The record of every change to a lens, with the miss that caused it. The office may change a lens under the rules in `REVIEW.md`. |
| `merge.py` | Merges the findings into `findings/REPORT-findings.md`, ranked; with `--key`, scores a calibration run. |
| `calibration/` | `calibration.html` (fifteen planted faults, six decoys), its `screens.txt`, `key.json` for the scorer, `ANSWER_KEY.md` for Krithik. |
| `REPORT_TEMPLATE.md` | The shape of the final `REPORT.md`. |

## The short version

```
node capture.mjs --screens screens.txt --out captures
node capture.mjs --screens calibration/screens.txt --out calibration/captures
   (six lens agents on the calibration screen)
python merge.py calibration/findings --key calibration/key.json --capture calibration/captures/01-team-spend.json
   (on PASS: lens agents 1-6 per screen batch, lens 7 once, on the real captures)
python merge.py findings
   (reconcile with the ledger; write REPORT.md from the template)
```

## What a reviewer's verdict means

KEEP: says something nothing else on the screen says, in the right place, in a form that fits. CUT: answers no question a reader has, or one already answered. MERGE: duplicates another element. MOVE: right thing, wrong place. FIX: right thing, wrong form. ASK: purpose unclear; a question for Krithik. Severity: blocks (wrong or unfindable answer), weakens, polish.

## Tested at home

The capture tool was run on the My Spend mockups (page, tile band open, day row open) and on the calibration screen; the six single-screen lenses were run on the calibration screen with Sonnet agents and scored. The result is recorded in the design ledger (D89).
