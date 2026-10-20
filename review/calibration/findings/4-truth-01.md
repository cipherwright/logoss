# Truth · 01-team-spend

First look: the amber banner "Will breach by 30 Aug at this pace" / the row of five tiles led by $3,412.60 / the blue daily bar chart with its dashed red line. For: a department head checking month-to-date spend against the $4,800 envelope and whether it will be breached.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | Names the app. | – | – |
| 01 | 2 | KEEP | – | Firm mark, harmless. | – | – |
| 01 | 3 | KEEP | – | Says whose numbers these are (the department). | "Market Risk" | – |
| 01 | 4 | FIX | blocks | "Last updated recently" gives no date, time or time basis, so the reader cannot tell how stale 28 days of spend is, and the name beside it does not say who Priya Nair is (viewer or updater). | JSON 4: "Last updated recently · Priya Nair" | "Data to 28 Aug 23:59 UTC, refreshed 29 Aug 06:10"; drop or label the name ("Viewing as"). |
| 01 | 5 | ASK | – | A second scope label ("Risk") sits above "Market Risk" with no stated relation. | 5 "Risk", 6 "Market Risk", 3 "Market Risk" | Is "Risk" the division the department belongs to, and does any figure on this screen cover it? |
| 01 | 6 | MERGE | polish | Repeats the department already named in 3. | 3 and 6 both "Market Risk" | Survives: 3. |
| 01 | 7 | KEEP | – | Navigation. | – | – |
| 01 | 8 | KEEP | – | Navigation, marks the current page. | – | – |
| 01 | 9 | KEEP | – | Section label for the nav item below it. | – | – |
| 01 | 10 | KEEP | – | Navigation. | – | – |
| 01 | 11 | KEEP | – | Current tab. | – | – |
| 01 | 12 | KEEP | – | Tab. | – | – |
| 01 | 13 | ASK | – | The same destination appears to be named two ways, "Requests" here and "Cap Uplifts" in the sidebar. | 13 "Requests", 10 "Cap Uplifts" | Are they the same list; if so use one name. |
| 01 | 14 | KEEP | – | States the period, days elapsed and the envelope that every "of envelope" figure is measured against. | "August 2026 · 28 of 31 days elapsed · Envelope $4,800 for the month" | – |
| 01 | 15 | FIX | blocks | "Will breach by 30 Aug" is not supported by the screen's own numbers: at $121.88 a day the month ends near $3,778, $1,022 under the envelope. | 28 x 121.88 = 3,412.60 (18, 28); 3,412.60 + 3 x 121.88 = 3,778; the tallest bar in 40 is under the $200 axis top, so even 3 days at $200 gives at most $4,013, below $4,800; reaching 4,800 needs about $462 a day | Show the forecast with its basis ("Forecast $3,778 at $121.88/day, month average; $1,022 under envelope") and say "Will breach" only if the forecast crosses; if the pace is not the month average, name it. |
| 01 | 16 | CUT | weakens | Fourth statement of spend against envelope; adds nothing to 15, 18, 19. | 16 "Spend to date: $3,412.60 of $4,800 envelope"; measures list $3,412.60 with 5 homes | Replace with the forecast basis line (see 15) or remove. |
| 01 | 17 | KEEP | – | Tile label. | – | – |
| 01 | 18 | KEEP | – | The headline figure; it ties to 39 and to the member rows. | 892.40+611.20+540.00+488.90+402.10+478.00 = 3,412.60 | – |
| 01 | 19 | KEEP | – | States the base ($4,800) beside the percentage. | "of $4,800 — 71.1% of envelope"; 3,412.60/4,800 = 71.1% | – |
| 01 | 20 | FIX | polish | The bar has an unlabelled dark tick near its right end; the reader cannot tell if it is a threshold, a forecast or the cap. | 20 fill 100 px of a track of about 142 px (about 70%, within reading error of 71.1%); tick at about 94% of the track | Label the tick ("90% approaching") or remove it. |
| 01 | 21 | CUT | polish | Restates the base and percentage a third time, at 2.5:1 contrast. | 21 "envelope $4,800 · 71.1% used" vs 19 | Survives: 19. |
| 01 | 22 | KEEP | – | Tile label. | – | – |
| 01 | 23 | KEEP | – | Headroom is arithmetically right and answers a distinct question (how much is left). | 4,800 - 3,412.60 = 1,387.40 | – |
| 01 | 24 | KEEP | – | Gives the share and its base; 1,387.40/4,800 = 28.9%, and 71.1 + 28.9 = 100. | "28.9% of $4,800 remaining" | – |
| 01 | 25 | CUT | weakens | A flat line with no scale, no labels and no stated data stands under a headroom figure it does not visibly relate to. | JSON 25: labels 0, marks 1, alt empty | Remove; if a trend is wanted, plot headroom by day with a $ axis. |
| 01 | 26 | CUT | polish | Caption explains nothing about the sparkline or the figure. | 26 "envelope this month", contrast 2.5 | Remove. |
| 01 | 27 | KEEP | – | Tile label. | – | – |
| 01 | 28 | KEEP | – | The average is right and its population (28 elapsed days) is visible in 14. | 3,412.60/28 = 121.88 | – |
| 01 | 29 | FIX | blocks | "Fcst Δ vs EOM +$366" is unreadable jargon and the number is not a delta vs anything: it is 3 days x $121.88, the extra spend still to come, and it contradicts the banner's breach claim. | 3 x 121.88 = 365.6; implied month-end 3,778 vs 4,800 | "Month-end forecast $3,778 (+$366 over the last 3 days at this average)". |
| 01 | 30 | MERGE | polish | The formula is the average's definition and belongs in its label; at 2.5:1 it is nearly unreadable. | 30 "MTD / days elapsed" | Survives: 27, relabelled "Daily average (month to date / days elapsed)". |
| 01 | 31 | CUT | weakens | "Util%" is jargon for the percentage already shown in 19. | 31 vs 19, 15 | Survives: 19. |
| 01 | 32 | MERGE | weakens | A fourth home for 71.1%. | measures: 71.1% homes 15, 19, 21, 32 | Survives: 19. |
| 01 | 33 | CUT | polish | Restates 19. | "of envelope used" | – |
| 01 | 34 | CUT | polish | Restates 18 and the envelope for the fifth time. | "$3,412.60 / $4,800", contrast 2.5 | – |
| 01 | 35 | KEEP | – | Tile label. | – | – |
| 01 | 36 | KEEP | – | Matches the table. | "Total (12)" in 52 = 5 named + 7 others | – |
| 01 | 37 | ASK | – | "+2 since July" does not say since when (1 July or 31 July) and depends on membership history. | 37 "+2 since July" | Does the app hold monthly membership snapshots in production? |
| 01 | 38 | MERGE | polish | Says what 35 already says. | 38 "key holders in Market Risk" | Survives: 35, relabelled "Key holders". |
| 01 | 39 | KEEP | – | States the chart's period and total, and the total ties to 18. | "1 to 28 Aug · total $3,412.60" | – |
| 01 | 40 | FIX | blocks | The bars do not start at zero, the dashed line is not where the caption puts it, and the axis ticks are uneven. | Axis ticks $60/$130/$200 at y 667/587/507; bars start at the $60 tick (y 667), so a $65 day and a $120 day differ about 4x in height; line at y 598 reads about $120, but envelope/31 = $154.84, which would sit at about y 559 | Axis from $0 with even ticks ($0, $100, $200); draw the line at $154.84 and label it. |
| 01 | 41 | FIX | weakens | The caption gives the line's definition but not its value, and its weekend claim does not match the calendar: 1 Aug 2026 is a Saturday, yet the short bars fall on days 6-7, 13-14. | 41 "envelope divided by the days in the month ... Weekends are the short bars" | Label the line "Envelope / 31 = $154.84 a day" on the chart; drop the how-to-read prose. |
| 01 | 42 | FIX | weakens | The share has no period; the reader cannot tell if it is August to date. | 42 "Spend by model" | "Spend by model · 1 to 28 Aug". |
| 01 | 43 | MERGE | weakens | The donut encodes the same seven shares as 44 with no labels and no legend; its colours cannot be matched to table rows. | 43 labels 0, marks 7; 44 has no colour keys | Survives: 44; or key the colours in the table. |
| 01 | 44 | KEEP | – | Shares sum to 100 and the model names are the ones the tools use. | 58.2+21.4+9.1+5.2+3.1+2.0+1.0 = 100.0 | – |
| 01 | 45 | CUT | weakens | A heading for four icons that carry no text, so it promises insights the screen does not state. | 46-49 text empty, alt empty | Remove, or put actual insight sentences under it. |
| 01 | 46 | ASK | – | An unlabelled star icon; the screen does not say what it opens or claims. | JSON 46: text empty | What does it do, and what data stands behind it? |
| 01 | 47 | ASK | – | An unlabelled trend-line icon, same problem. | JSON 47 | As 46. |
| 01 | 48 | ASK | – | An unlabelled pin icon, same problem. | JSON 48 | As 46. |
| 01 | 49 | ASK | – | An unlabelled window icon, same problem. | JSON 49 | As 46. |
| 01 | 50 | FIX | polish | "August" beside a table that is 1 to 28 Aug reads as a full month. | 50 "Members · August" | "Members · 1 to 28 Aug". |
| 01 | 51 | FIX | polish | Red is the app's colour for a breach fact, and a plain export link uses it. | JSON 51 colour #dc2626 | Accent blue or ink. |
| 01 | 52 | FIX | blocks | The "7 others" row shows 14.9% but $478.00 / $3,412.60 is 14.0%, so the shares total 100.9% and the total row repeats the error. | 26.2+17.9+15.8+14.3+11.8+14.9 = 100.9; total row "100.9%"; spends and calls do sum (3,412.60; 55,573) | Compute share from spend: "7 others" 14.0%, total 100.0%. |
| 01 | 52 | ASK | – | "Breached" and "Approaching" sit beside a monthly spend figure, but the glossary's cap is daily and no cap or threshold is shown, so the assertion is unearned on the screen. | $892.40 "Breached", $611.20 "Approaching"; no cap column | Breached against what, and what is the Approaching threshold? Show the cap in the row or a legend. |
| 01 | 53 | ASK | – | A "Submit" button on a read-only report does not say what it submits. | 53 "Submit", interactive | What is submitted, and to whom? |
| 01 | 54 | FIX | weakens | The only statement that figures exclude cached tokens and use list prices (so $ may differ from billing) is in 9 px at 1.9:1 at the page foot, and "indicative" is not attached to any line. | 54 size 9, contrast 1.9; "Envelope share lines are indicative" | Move to the head of the page at 12 px beside 14; say which lines are indicative or remove the sentence. |
| 01 | G1 | KEEP | – | Sidebar holds navigation and scope. | – | – |
| 01 | G2 | FIX | blocks | The banner's amber is the right colour for a forecast, but the forecast it asserts is contradicted by the figures beside it. | See 15, 29 | State the forecast and its basis; show amber only if the forecast crosses $4,800. |
| 01 | G3 | KEEP | – | Label, figure, base and bar each state the headline once; only 21 repeats. | – | – |
| 01 | G4 | FIX | weakens | The headroom figure is sound but the sparkline and caption beneath add nothing true. | See 25, 26 | Remove 25 and 26. |
| 01 | G5 | FIX | blocks | The average is right but its forecast line contradicts the banner. | See 29 | Rewrite 29. |
| 01 | G6 | CUT | weakens | Every line restates $3,412.60, $4,800 or 71.1%. | 31-34 vs 18, 19 | Remove the tile. |
| 01 | G7 | KEEP | – | Gives the head count that the table's total row ties to. | – | – |
| 01 | page | ASK | – | The forecast depends on a pace the screen never defines (month average, last 7 days?) and on data the app may not have by day. | 15, 29 | Where does the forecast come from and which pace does it use? |
| 01 | page | ASK | – | The screen does not say whether day 28 is a complete day or a partial one, or what time zone the days use. | 14 "28 of 31 days elapsed", 40 "1 to 28 Aug" | Is the data to end of day 28 UTC, or to the last refresh? |

Earns its place: 1, 2, 3, 7, 8, 9, 10, 11, 12, 14, 17, 18, 19, 22, 23, 24, 27, 28, 35, 36, 39, 44
Cut first: 16, G6 (31, 33, 34, 32), 25, 26, 21, 45, 43, 30, 38, 6
Questions for the owner:
Where does the month-end forecast come from, which pace does it use, and why does the banner say "Will breach by 30 Aug" when the figures give about $3,778?
What do "Breached" and "Approaching" in the members table compare against (daily cap, monthly, per person) and at what threshold?
What do the four Insights icons (46-49) open?
What does Submit (53) submit?
Is "Requests" (13) the same page as "Cap Uplifts" (10), and what is "Risk" (5) in relation to Market Risk?
Is the data to the end of day 28 UTC?
