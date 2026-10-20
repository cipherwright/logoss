# Calibration answer key

Do not open this before the calibration findings are written. `key.json` is the machine-readable copy that `merge.py --key` scores; this file is for the owner.

The screen `calibration.html` is a plausible Charon department page with fifteen planted faults and six decoys that are fine. A review that cannot find most of the faults, or that flags the decoys, is not yet a review to trust on the real app.

## Planted faults

| # | Fault | Expected from lens |
|---|---|---|
| F1 | $3,412.60 (with $4,800 and 71.1 %) shown in five places | 1, 2 |
| F2 | A seven-slice donut of model shares beside a table of the same shares | 1, 2, 3 |
| F3 | Bar chart baseline at $60, not zero | 4, 2 |
| F4 | Gradient fills, drop shadows and nine gridlines on the bars | 2, 6 |
| F5 | A sparkline of a constant in the Headroom tile | 2, 1 |
| F6 | A "how to read this chart" paragraph | 2, 5 |
| F7 | Red for the Export CSV link while red means breached in the table | 3 |
| F8 | A 9 px footnote at 1.9:1 contrast | 6 |
| F9 | A Currency column reading USD in every row | 2, 1 |
| F10 | Jargon labels: Fcst Δ vs EOM, Util%, MTD | 5 |
| F11 | "Last updated recently", no date or time | 4, 5 |
| F12 | An Insights strip of four icons carrying no data | 1, 2, 6 |
| F13 | Content held to 960 px, the right third empty, the tiles cramped | 6 |
| F14 | Member shares sum to 100.9 % | 4 |
| F15 | A Submit button with no object | 5, 1 |

## Decoys (should be KEEP, or at most polish)

| # | Element |
|---|---|
| D1 | Members tile: 12, +2 since July |
| D2 | Heading "Members · August" |
| D3 | The active tab |
| D4 | The active navigation entry |
| D5 | Headroom $1,387.40 with "28.9 % of $4,800 remaining" |
| D6 | The product name in the banner |

Pass line: at least 11 of 15 found, at most 1 false alarm. Faint 11 px tile feet at 2.5:1 are a real fault of the house style and are not decoys; flagging them is right.
