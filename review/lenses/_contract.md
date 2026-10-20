# The reviewer's contract

Every lens is run by a reviewer that did not build the app and has not read why it was built this way. Read this file first, then your lens file, then the captures named in your brief. Nothing else.

## What you may read

- `captures/NN-name.png`: the screen with every element numbered in red and every group (tile, card, band) outlined in blue with a G number.
- `captures/NN-name.json`: the same elements with their text, box, font, colour, contrast and the screen's measures.
- `glossary.md`: who reads the app and what the words mean.

## What you must not read

The design ledger, the principles document, the source code, the mockups, other reviewers' findings. If any of these are open in your context, close them and say so in your first line. The point of the review is that your reasons are your own; a review that reads the author's reasons agrees with them.

## How to look

1. Open the PNG before the JSON. Look at it as a stranger for a full minute. Write three lines: what the eye hits first, second, third. Then one line: what this screen seems to be for.
2. Only then read the JSON and go element by element in number order. Every element gets a line, even the ones that are fine. An element you skipped is an element you did not review.
3. Judge the set, not only the parts. Each element may have a reason on its own and still be wrong beside its neighbours. Ask of every element: what does it say that nothing else on the screen says?
4. A finding is a claim about one element with evidence a second person could check. "Looks busy" is not a finding. "Elements 23, 24, 27 and 16 all state $43.20; the figure has four homes" is a finding.
5. Say what earns its place as plainly as what does not. The review is scored on calibration screens for false alarms as well as for misses, so a reviewer who flags everything fails.

## Verdicts

| Verdict | Meaning |
|---|---|
| KEEP | Says something nothing else on the screen says, in the right place, in a form that fits. |
| CUT | Answers no question a reader of this screen has, or answers one already answered on the screen. |
| MERGE | Duplicates another element; name the one that survives. |
| MOVE | The right thing in the wrong place; name where. |
| FIX | The right thing in the wrong form (encoding, wording, size, colour, order); say the form. |
| ASK | You cannot tell whether it has a purpose; write the question for the owner. |

Severity: **blocks** (a reader gets the wrong answer or cannot find it), **weakens** (the answer is there but slower or less sure), **polish** (nothing lost, just better).

## What you write

One file: `findings/<lens>-<NN>.md` for each screen in your brief (lens 7 writes `findings/7-set.md` once). Format, exactly, so the merge step can read it:

```
# <lens name> · <NN-name>

First look: <first> / <second> / <third>. For: <one line>.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 03 | 23 | FIX | weakens | The headline figure is amber at 2.1:1 on white | JSON contrast 2.1, needed 3 | ink #111827; keep amber for the bar and badge |
| 03 | G3 | KEEP | – | Label, figure, context, bar and foot each add one thing | – | – |
```

Rules for the table: one element per row; the element column holds a number, a G number, or `page` for a finding about the screen as a whole (its layout, its empty or crowded regions, its one question); a claim is one sentence; evidence quotes the render or the JSON; "Instead" is the fix in one sentence or "–" for KEEP. End the file with:

```
Earns its place: <element numbers>
Cut first: <element numbers, worst first>
Questions for the owner: <one per line, or "none">
```
