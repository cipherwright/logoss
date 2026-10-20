# Charon front-end review · <date>

Run by <model> in the office on <date>. Captures: <N> screens at 1440 wide. Reviewers: seven lenses, each a fresh agent that read only the captures and the glossary. Calibration: <found> of 15 planted faults found, <alarms> false alarms (pass line 11 and 1).

## The page the owner reads

**Verdict by screen.** Keep = nothing above polish. Fix = findings that weaken the reading but the screen's shape is right. Rework = a reader gets the wrong answer or cannot find it, or a third of the elements have no purpose.

| # | Screen | Verdict | Elements | Keep | Cut / Merge | Fix / Move | Ask | The one thing to do |
|---|---|---|---|---|---|---|---|---|
| 01 | | | | | | | | |

**The ten findings that matter most.** Worst first; a finding agreed by several lenses outranks one lens.

1. Screen NN, element N: <claim>. <instead>. (lenses 1, 2, 6)
2.

**Cut list.** Elements no reader needs, by screen. Removing these is the cheapest improvement in the report.

- Screen NN: elements …

**What earns its place.** So the owner knows what not to touch: by screen, the elements every lens kept, and one line on why the screen works where it does.

**Questions for the owner.** Things no reviewer could decide from the screen.

- 

**Decided before.** Findings that go against a recorded design decision. Each is still a finding; the owner chooses with both in view.

| Finding | Decision | Its reason |
|---|---|---|

## The record

- `captures/INDEX.md` and the PNG and JSON per screen.
- `findings/REPORT-findings.md`: every finding by screen and element with the lenses that agree.
- `findings/<lens>-<NN>.md`: each reviewer's full ledger, including the elements it kept and its first-look lines.
- `calibration/findings/`: the calibration run and its score.
