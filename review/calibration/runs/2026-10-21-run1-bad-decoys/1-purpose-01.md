# Purpose · 01-team-spend

First look: the amber banner "Will breach by 30 Aug at this pace" / the row of five big-number tiles ($3,412.60, $1,387.40, $121.88, 71.1%, 12) / the blue spend-by-day bars with the red dashed line. For: a functional head (Market Risk) at the start of the day asking whether the department will breach its August envelope and who is driving the spend.

Screen: the reader is the Functional head (Market Risk); the question is "will we breach the envelope before month-end, and who is driving it". The answer is meant to be the banner (14), seen first, but the screen's own figures contradict it: 22 headroom $1,387.40, 27 daily average $121.88 and 28 "+$366" (= 3 remaining days x $121.88) put month-end near $3,779, about 79% of the $4,800 envelope, and $1,387 of headroom would last about 11 days, not 2. Either the banner or the tiles is wrong and the reader cannot tell which. Action: if the breach is real, request an uplift or ask the top spenders (51) to slow down; if not, nothing. The screen holds two jobs (envelope forecast; who and what drives spend) that fit on one page only if the forecast is stated once and plainly. Figures with no comparison: 27 (no daily allowance of $154.84 beside it), 35 (headcount against nothing that matters), 43 (shares with no dollar or prior-period context). Graphics with no decision: 24, 42, 45, 46, 47, 48. Detail visible by default that belongs on demand: 15, 20, 25, 29, 33, 40, and the Calls and Main model columns of 51.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | Names the app; nothing else on the screen does | "Charon", 20/600 | – |
| 01 | 2 | KEEP | – | Says whose tool this is; small, grey, out of the way | "NOMURA", 11px grey | – |
| 01 | 3 | KEEP | – | Names the department the whole screen is about | "Market Risk", 14/600 | – |
| 01 | 4 | FIX | weakens | "Last updated recently" gives no time, so the reader cannot judge freshness, and the name beside it is unexplained | text "Last updated recently · Priya Nair" | A real timestamp ("Updated 06:10 UTC"); show a user name only if it is the viewer, in the header |
| 01 | 5 | MERGE | polish | "Risk" in the sidebar says what the department name at 3 already says | G1 member 5 "Risk" above 6 "Market Risk"; 3 reads "Market Risk" | Survivor 3; drop the sidebar block or make it a plain department switcher for the CRO |
| 01 | 6 | MERGE | polish | Third place the department name appears (3, 6 and 37) | text "Market Risk" at 6 | Survivor 3 |
| 01 | 7 | KEEP | – | Route to the firm-wide view | "Overview" | – |
| 01 | 8 | KEEP | – | Shows which screen the reader is on | "Team spend", highlighted | – |
| 01 | 9 | CUT | polish | A section label over a single link; also 2.4:1 contrast | "Requests" over "Cap Uplifts"; JSON contrast 2.4 | Show "Cap Uplifts" as a plain nav item |
| 01 | 10 | KEEP | – | Route to the one action the head can take when the envelope is short | "Cap Uplifts" | – |
| 01 | 11 | MERGE | polish | Tab repeats the sidebar item that is already highlighted | 8 and 11 both read "Team spend" | Survivor 8; keep tabs only if they switch between different views |
| 01 | 12 | ASK | weakens | Unclear what "People" shows that the members table (51) does not | tab text "People" beside "Team spend"; 51 already lists every member | Question for owner below |
| 01 | 13 | KEEP | – | The only place that says how far through the month we are and the envelope size, the two facts any forecast needs | "28 of 31 days elapsed · Envelope $4,800 for the month" | – |
| 01 | 14 | FIX | blocks | The headline is the right answer but contradicts the tiles, and repeats the spend and percentage the tiles already carry | Banner "Will breach by 30 Aug"; 22 headroom $1,387.40, 27 $121.88/day, 28 "+$366" = 3 x $121.88, so month-end is about $3,779 | Reconcile the forecast, then state it once: "Forecast $X by 31 Aug vs $4,800 envelope", with a breach date only if real |
| 01 | 15 | CUT | weakens | Restates spend to date and envelope, already in 17 and 13, under a banner that should carry the forecast | "Spend to date: $3,412.60 of $4,800 envelope" | Use the line for what the reader needs: who is driving the overrun, or the projected month-end figure |
| 01 | 16 | KEEP | – | Label for the figure | "Spend to date" | – |
| 01 | 17 | KEEP | – | The month-to-date spend, the one figure everything else is measured from | "$3,412.60", 26/600 | – |
| 01 | 18 | MERGE | polish | States the envelope and percentage a third time, in words, above the bar that shows it | "of $4,800 — 71.1% of envelope"; same in 14, 20, 31, 33 | Survivor 19, with "of $4,800" as its end label |
| 01 | 19 | FIX | weakens | The bar shows only how much is spent; the decision (will it breach) needs an elapsed-time marker beside it | Fill about 71% of track, tick at the end, no marker for 28/31 = 90% | Add a tick at 90% of the track labelled "day 28"; the gap between fill and tick is the answer |
| 01 | 20 | CUT | polish | Fourth statement of envelope and percentage; 2.5:1 contrast | "envelope $4,800 · 71.1% used"; JSON contrast 2.5 | Delete |
| 01 | 21 | KEEP | – | Label for headroom | "Headroom" | – |
| 01 | 22 | KEEP | – | How much can still be spent; a different number from spend to date | "$1,387.40" | – |
| 01 | 23 | CUT | polish | The complement of 71.1%, printed elsewhere | "28.9% remaining" vs 71.1% at 14, 18, 31 | Delete, or replace with days of headroom at the current pace |
| 01 | 24 | CUT | weakens | A sparkline with one mark, no labels, no axis and no stated meaning; it changes no decision | JSON sparkline marks 1, labels 0; renders as a flat grey line | Delete |
| 01 | 25 | CUT | polish | Caption says nothing the label does not, and is 2.5:1 | "envelope this month"; JSON contrast 2.5 | Delete |
| 01 | 26 | KEEP | – | Label for the daily rate | "Daily average" | – |
| 01 | 27 | KEEP | – | The pace the forecast rests on | "$121.88" | – |
| 01 | 28 | FIX | blocks | Cryptic abbreviation, compared with nothing the reader can use (the daily allowance, $154.84) | "Fcst Δ vs EOM +$366" | Plain words: "$155/day allowed" beside the figure; move the forecast to the banner |
| 01 | 29 | CUT | polish | Formula caption, on demand at most; 2.5:1 | "MTD / days elapsed"; JSON contrast 2.5 | Delete; put the formula in a tooltip |
| 01 | 30 | CUT | weakens | Label of a tile that repeats another | "Util%" is 17 divided by 13's envelope | Delete with the tile |
| 01 | 31 | MERGE | weakens | Same figure as the bar at 19 and the text at 14, 18 and 20 | "71.1%" in four places | Survivor 19 |
| 01 | 32 | CUT | polish | Restates the label | "of envelope used" | Delete with the tile |
| 01 | 33 | CUT | polish | Spend and envelope again, 2.5:1 | "$3,412.60 / $4,800"; contrast 2.5 | Delete with the tile |
| 01 | 34 | CUT | polish | Label of a headcount tile | "Members" | Delete with the tile |
| 01 | 35 | MERGE | polish | The count of 12 is already the table total | "12" vs "Total (12)" in 51 | Survivor 51 |
| 01 | 36 | CUT | polish | A headcount change does not change a decision about the envelope | "+2 since July" | Move to People if it matters |
| 01 | 37 | CUT | polish | Restates the label and the department already named at 3; 2.5:1 | "key holders in Market Risk"; contrast 2.5 | Delete |
| 01 | 38 | FIX | polish | Title repeats the total (the fifth home of $3,412.60) and the date range | "total $3,412.60"; number homes 14, 15, 17, 33, 38 | "Spend by day · 1 to 28 Aug" |
| 01 | 39 | FIX | weakens | The chart earns its place (spike days against the allowance) but the dashed line is unlabelled and appears to sit near $120, the daily average, not the $154.84 the caption describes | Axis $130 at y587, $60 at y667, line at y about 598; 4,800/31 = 154.84 | Label the line "$155 daily allowance"; check its value |
| 01 | 40 | CUT | polish | A tutorial for a bar chart; labelling the line (39) makes it unnecessary | 204 chars "How to read this chart..." | Delete |
| 01 | 41 | KEEP | – | Title of the model breakdown | "Spend by model" | – |
| 01 | 42 | CUT | weakens | A seven-slice donut repeats the table beside it and its small slices are unreadable | JSON marks 7, labels 0; same shares as 43 | Delete; keep the table |
| 01 | 43 | KEEP | – | Which models drive cost; the only place model mix appears | "claude-sonnet-4-5 58.2%", "claude-opus-4 9.1%" | – |
| 01 | 44 | ASK | weakens | A heading over four unlabelled icons; no stated content | "Insights" | Question for owner below |
| 01 | 45 | CUT | weakens | Icon with no label, text or visible action | star; JSON alt "" labels 0 | Delete until it says something |
| 01 | 46 | CUT | weakens | Same: unlabelled trend icon | JSON alt "" labels 0 | Delete |
| 01 | 47 | CUT | weakens | Same: unlabelled pin icon | JSON alt "" labels 0 | Delete |
| 01 | 48 | CUT | weakens | Same: unlabelled window icon | JSON alt "" labels 0 | Delete |
| 01 | 49 | KEEP | – | Titles the table that answers "who is driving it" | "Members · August" | – |
| 01 | 50 | FIX | polish | Red is the app's colour for breach; a download link should not wear it | colour #dc2626 on "Export CSV" | Accent blue or ink with underline |
| 01 | 51 | FIX | weakens | The table answers "who", but the Currency column is a constant and Status gives no basis (breached what?) | Currency "USD" in all rows; Chris Dane "Breached" at $892.40 with no cap shown | Drop Currency (put "USD" in 49); say which limit in Status or show it |
| 01 | 52 | CUT | weakens | A Submit button on a read-only screen; nothing here is submitted | "Submit" at the bottom, JSON interactive | Delete |
| 01 | 53 | FIX | weakens | The caveat that figures exclude cached tokens matters for trust, but is 9px at 1.9:1, and "envelope share lines" refers to nothing on this screen | JSON size 9, contrast 1.9 | 12px readable grey, drop the second sentence, link "methodology" |
| 01 | G1 | KEEP | – | Navigation: where I am and where else I can go (5 and 6 merge away) | members 5-10 | – |
| 01 | G2 | FIX | blocks | The banner is the one answer, but 14 and 15 both restate the spend and the forecast contradicts the tiles | see 14, 15 | One line stating forecast month-end vs envelope; fix the figures first |
| 01 | G3 | FIX | weakens | Label, figure, words, bar and foot say the same 71% four times; only the figure and the bar differ | 17, 18, 19, 20 | Label, figure, bar with an elapsed marker |
| 01 | G4 | FIX | polish | The headroom figure is useful; its percentage, sparkline and caption add nothing | 22 vs 23, 24, 25 | Label and figure only |
| 01 | G5 | FIX | weakens | The daily average is useful if compared with the allowance; the Fcst Δ and formula lines are jargon | 28, 29 | Figure plus "$155/day allowed" |
| 01 | G6 | CUT | weakens | The whole tile restates spend, envelope and percentage | 31, 32, 33 vs 14, 17, 19 | Delete the tile |
| 01 | G7 | CUT | polish | A headcount tile that changes no decision and repeats the table total | 35 vs Total (12) in 51 | Delete the tile |
| 01 | page | FIX | blocks | The page answers its question, then four tiles and a banner contradict or repeat it; $3,412.60 and $4,800 have five homes each | numbersWithSeveralHomes: $4,800 at 13, 15, 18, 20, 33; $3,412.60 at 14, 15, 17, 33, 38 | Banner, one row of three tiles (spend, headroom, daily pace vs allowance), the daily chart, the members table, the model table |

Earns its place: 1, 2, 3, 7, 8, 10, 13, 16, 17, 21, 22, 26, 27, 41, 43, 49
Cut first: 24, 42, 15, 45, 46, 47, 48, 52, 40, 20, 33, 23, 25, 29, 30, 32, 34, 36, 37, 9
Questions for the owner:
Is the banner's "Will breach by 30 Aug" computed from the same numbers as 27 and 28? At $121.88/day the month-end is about $3,779, not a breach.
What does the People tab (12) show that the members table (51) does not?
What is Insights (44) meant to hold, and what do the four icons (45-48) open?
Is the dashed line in chart 39 the envelope divided by 31 days ($154.84) or the daily average ($121.88)?
Who is Priya Nair at 4: the viewer, or the person who last updated the data?
