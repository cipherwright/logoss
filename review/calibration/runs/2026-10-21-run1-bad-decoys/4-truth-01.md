# Truth · 01-team-spend

First look: the amber banner saying the team will breach / the row of five large tile figures led by $3,412.60 / the bar chart with its dashed red line. For: telling a department head whether Market Risk stays inside its $4,800 August envelope and who is driving the spend.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | Product name, says what the app is | "Charon" | – |
| 01 | 2 | KEEP | – | Firm mark, makes no data claim | "NOMURA" | – |
| 01 | 3 | KEEP | – | States whose figures these are (Market Risk), which every percentage depends on | "Market Risk" at top left | – |
| 01 | 4 | FIX | blocks | "Last updated recently" gives no date, time or time basis, so the reader cannot judge how stale 28 days of spend is | Text "Last updated recently · Priya Nair"; 13 says "28 of 31 days elapsed" with no cut-off time | Show "Data to 28 Aug 2026 14:07 UTC" (date, time, basis) and say whether Priya Nair is the viewer or the last editor |
| 01 | 5 | ASK | – | "Risk" in the sidebar is unexplained: it is either the viewer's wider division or a wrong scope label | Text "Risk" above "Market Risk"; every figure is Market Risk only | – |
| 01 | 6 | MERGE | polish | Repeats the department name already shown at 3 | "Market Risk" at 3 and 6 | Keep 3 |
| 01 | 7 | KEEP | – | Navigation to the overview | "Overview" | – |
| 01 | 8 | KEEP | – | Marks the current page | "Team spend", selected tint | – |
| 01 | 9 | KEEP | – | Section label for the requests pages | "Requests" | – |
| 01 | 10 | KEEP | – | Navigation to cap uplifts | "Cap Uplifts" | – |
| 01 | 11 | KEEP | – | Current tab | "Team spend" | – |
| 01 | 12 | KEEP | – | Other tab, names where the member view lives | "People" | – |
| 01 | 13 | KEEP | – | Gives period, days elapsed and the envelope: the base for every percentage below | "August 2026 · 28 of 31 days elapsed · Envelope $4,800 for the month" | – |
| 01 | 14 | FIX | blocks | The headline "Will breach by 30 Aug at this pace" is contradicted by the screen's own numbers: at the stated pace the month ends near $3,778 (78.7% of $4,800), nowhere near breach | $3,412.60 / 28 = $121.88 per day (27); 3 days left gives $3,778; headroom $1,387.40 (22) would need about $462 a day, while no bar on the chart passes about $160 | Compute the forecast from the stated pace and show it with its basis ("at $121.88/day, month-end $3,778, 78.7% of envelope"); show an amber breach word only if the forecast crosses $4,800, otherwise no colour |
| 01 | 15 | CUT | polish | Restates the spend and envelope that 14, 17 and 18 already give | "Spend to date: $3,412.60 of $4,800 envelope" under 14, which opens with "Spend to date $3,412.60"; measure lists 5 homes for $4,800 | Delete; let the banner carry only the forecast sentence |
| 01 | 16 | KEEP | – | Names what the tile figure is | "Spend to date" | – |
| 01 | 17 | KEEP | – | The one home of month-to-date spend; arithmetic checks (table total $3,412.60) | "$3,412.60"; table rows sum to $3,412.60 | – |
| 01 | 18 | FIX | polish | The envelope base is useful but the percentage repeats 14, 20 and 31 | "of $4,800 — 71.1% of envelope"; 71.1% has 4 homes | Keep "of $4,800" only |
| 01 | 19 | KEEP | – | Bar fills about 71% of its track (100 px of about 141), matching 71.1%, so it shows the share without a number | Fill ends near x=378, track ends at the tick near x=418 | – |
| 01 | 20 | CUT | polish | Third statement of envelope and percentage in one tile, at 2.5:1 contrast | "envelope $4,800 · 71.1% used" | Delete |
| 01 | 21 | KEEP | – | Names the remaining-money figure | "Headroom" | – |
| 01 | 22 | KEEP | – | Adds the remaining dollars; correct: $4,800 − $3,412.60 = $1,387.40 | "$1,387.40" | – |
| 01 | 23 | FIX | weakens | "28.9% remaining" has its base only in a 2.5:1 foot line two rows below | "28.9% remaining"; base appears at 25 "envelope this month" | Write "28.9% of $4,800 remaining" |
| 01 | 24 | CUT | weakens | A flat unlabelled line with one mark beside a number it does not explain; a sparkline with no scale reads as a trend that is not there | Sparkline, "labels": 0, "marks": 1, 120x22 px, alt empty | Delete, or draw cumulative spend with a scale if a trend is wanted |
| 01 | 25 | CUT | polish | Caption restates the envelope, already at 13 and made redundant once 23 names its base | "envelope this month", contrast 2.5 | Delete after 23 is fixed |
| 01 | 26 | KEEP | – | Names the average | "Daily average" | – |
| 01 | 27 | KEEP | – | Correct average: $3,412.60 / 28 = $121.88 | "$121.88" | – |
| 01 | 28 | FIX | blocks | "Fcst Δ vs EOM +$366" reads as a forecast overshoot but equals only the 3 remaining days at $121.88 ($365.64); against the envelope the forecast is −$1,022, not +$366 | $121.88 x 3 = $365.64; $3,412.60 + $366 = $3,778, below $4,800; "+" and "Δ vs EOM" name no reference | "Forecast month-end $3,778 (78.7% of envelope)", spelled out, with "at current daily average" |
| 01 | 29 | FIX | weakens | The only statement of the average's period and population ("MTD / days elapsed") is a 2.5:1 11 px footnote | contrast 2.5; whether day 28 is a full day is not stated | "Month to date ÷ 28 days" at readable contrast, noting if 28 Aug is partial |
| 01 | 30 | MERGE | polish | "Util%" is the third tile built on spend ÷ envelope | 71.1% at 14, 18, 20, 31; "Util%" is also jargon | Fold into G3 (17/18/19) |
| 01 | 31 | MERGE | polish | Repeats 71.1% | 71.1% has four homes | Survives in 18 as the bar's label, or in 19 |
| 01 | 32 | MERGE | polish | "of envelope used" repeats the base given at 18 | "of envelope used" | Keep 18 |
| 01 | 33 | CUT | polish | Restates both numbers the tile already contains, at 2.5:1 | "$3,412.60 / $4,800"; $3,412.60 has 5 homes, $4,800 has 5 | Delete |
| 01 | 34 | KEEP | – | Names the count | "Members" | – |
| 01 | 35 | KEEP | – | Count agrees with the table: 5 named + 7 others = 12 and "Total (12)" | "12" | – |
| 01 | 36 | KEEP | – | Gives the change in headcount, a driver of spend; reference "July" is slightly loose but readable | "+2 since July" | – |
| 01 | 37 | KEEP | – | Defines who counts as a member | "key holders in Market Risk" | – |
| 01 | 38 | KEEP | – | Title states what, period and total; total matches 17 | "Spend by day · 1 to 28 Aug · total $3,412.60" | – |
| 01 | 39 | FIX | blocks | The bars do not start at zero and the dashed line is not where the caption says it is, so bar heights exaggerate differences and the reader cannot tell if days are over or under the envelope pace | Axis labels $200 / $130 / $60 with bars standing on the $60 line (no $0); envelope ÷ 31 = $154.84 would sit about 24 px above the $130 gridline, but the dashed line is drawn near $120 (about 12 px below it), close to the $121.88 average; gradient-filled bars add no data | Start at $0 with even ticks ($0 / $100 / $200), draw the line at $154.84 or relabel it as the daily average, and label the line on the chart |
| 01 | 40 | FIX | blocks | The caption defines the dashed line as envelope ÷ days in month and claims weekends are the short bars; neither matches the render | Line is near $120 not $154.84; short bars sit at days 6-7, 13-14, 20-21, 27-28 by x position, while 1 Aug 2026 is a Saturday so weekends are 1-2, 8-9, 15-16, 22-23 and bars 1-2 are tall (read from the render, check against data) | Correct the line, delete the weekend sentence or mark weekend bars, and say whether 28 Aug is a full day |
| 01 | 41 | KEEP | – | Names the second chart | "Spend by model" | – |
| 01 | 42 | MERGE | weakens | Donut has seven unlabelled coloured slices and no legend, so no slice can be matched to a model; angle is a poor encoding for 7 parts and the table already holds every figure | "labels": 0, "marks": 7; table 43 has no colour keys | Fold into 43 with colour swatches or drop the donut |
| 01 | 43 | FIX | weakens | "Share" does not say share of what (spend, calls, tokens), and cached tokens are excluded per 53 | Shares 58.2 + 21.4 + 9.1 + 5.2 + 3.1 + 2.0 + 1.0 = 100.0, so the sum is right, but the header is bare "Share" | Header "Share of spend", add the dollar column |
| 01 | 44 | ASK | – | Section with no content that can be read | "Insights" followed by four unlabelled icons | What does each icon open, and does each exist in production? |
| 01 | 45 | CUT | weakens | Unlabelled star icon, no alt text, says nothing | svg, "labels": 0, "alt": "" | Delete, or give it a text label and destination |
| 01 | 46 | CUT | weakens | Unlabelled line-chart icon, no alt text, says nothing | svg, "labels": 0, "alt": "" | Delete, or label |
| 01 | 47 | CUT | weakens | Unlabelled pin icon, no alt text, says nothing | svg, "labels": 0, "alt": "" | Delete, or label |
| 01 | 48 | CUT | weakens | Unlabelled window icon, no alt text, says nothing | svg, "labels": 0, "alt": "" | Delete, or label |
| 01 | 49 | FIX | polish | "August" is whole-month wording over data that ends 28 Aug | "Members · August" vs "1 to 28 Aug" at 38 | "Members · 1 to 28 Aug" |
| 01 | 50 | FIX | weakens | Red is the glossary's colour for a fact that has happened (breach); using it on a download link asserts a breach | "Export CSV" #dc2626 | Neutral link colour; keep red for Breached |
| 01 | 51 | FIX | blocks | Shares do not sum to 100 and the "7 others" share is wrong: it is $478.00 / $3,412.60 = 14.0%, not 14.9% | 26.2 + 17.9 + 15.8 + 14.3 + 11.8 + 14.9 = 100.9, and the Total row prints "100.9%" | Correct to 14.0% and total 100.0% |
| 01 | 51 | FIX | blocks | "Breached" and "Approaching" name no limit: member spend is month to date, but a breach is of a daily cap or an envelope and neither is shown per member | Chris Dane $892.40 "Breached", Priya Nair $611.20 "Approaching"; no cap, threshold (glossary says 90%, marked "check") or period appears anywhere on the screen | Add a "Cap" column or a line stating what each status is measured against and its threshold |
| 01 | 51 | FIX | weakens | A status on the "7 others" row cannot be earned: an aggregate has no cap, and it can hide a breach inside it | "7 others · – · $478.00 · Normal · mixed" | Show "–" for status, or list them individually |
| 01 | 51 | CUT | polish | Currency column carries one value in every row | Every row "USD" | State USD in the Spend header |
| 01 | 52 | CUT | weakens | A Submit button on a read-only report: nothing on the screen is a form, so it promises an action that does not exist | "Submit", interactive: true | Delete |
| 01 | 53 | FIX | weakens | The one statement that figures exclude cached tokens and use list prices is 9 px at 1.9:1, so reader treats $3,412.60 as billed spend; it also mentions "envelope share lines", of which none exist, and a "methodology" with no link | contrast 1.9, size 9; text "Envelope share lines are indicative" | Raise to 12 px at readable contrast, put the basis near the headline, drop the sentence about share lines, link the methodology |
| 01 | G1 | KEEP | – | Sidebar navigation grouped as one block | Members 5-10 | – |
| 01 | G2 | FIX | blocks | The amber banner asserts a forecast breach that the numbers contradict; amber suits a forecast but only if it is true and states its basis | Members 14 and 15; see 14 | Banner appears only when the computed forecast crosses the envelope, with its basis |
| 01 | G3 | KEEP | – | Label, figure, base, bar: spend to date with its envelope; trim the repeated foot | Members 16-20 | – |
| 01 | G4 | KEEP | – | Headroom is the one figure not already stated elsewhere | Members 21-25 | – |
| 01 | G5 | FIX | blocks | The daily average is right but its forecast line is mislabelled and misleading | Members 26-29; see 28 | Replace 28 with a spelled-out month-end forecast |
| 01 | G6 | MERGE | polish | Third tile for the same ratio | 71.1% in 31, 18, 14, 20 | Fold into G3 |
| 01 | G7 | KEEP | – | Headcount with its change and definition | Members 34-37 | – |
| 01 | page | ASK | – | The screen depends on a forecast, a per-member status rule and a "since July" headcount that the app may not have | 14 "Will breach by 30 Aug", 28 "+$366", 51 statuses, 36 "+2 since July" | Where does each come from (pace to date, last 7 days?), and does production hold daily caps per member and last month's headcount? |
| 01 | page | ASK | – | Is 28 Aug a complete day? Average, "28 of 31 days elapsed", the chart's last bar and the forecast all change if it is partial | 13, 27, 38, 39 all use 28 | Is the data cut-off midnight or intraday, and in what time zone? |
| 01 | page | ASK | – | What does the screen say about daily caps? Key holders breach a daily cap but nothing on this screen shows one, so the status words have no scale | 51 statuses; no cap figure anywhere | Which limit does "Breached" test for a member, and where is it shown? |

Earns its place: 3, 13, 16, 17, 19, 21, 22, 26, 27, 34, 35, 37, 38, 41, 43, 51
Cut first: 14, 28, 39, 40, 51 (share column), 53, 52, 24, 45, 46, 47, 48, 42, 20, 33, 15, 25
Questions for the owner:
Where does the forecast in 14 and 28 come from, what pace does it use, and why does it say breach when the pace gives about $3,778 against $4,800?
Where is the dashed line on the chart meant to sit: envelope ÷ 31 ($154.84) or the daily average ($121.88)?
What limit do "Breached" and "Approaching" test for a member, at what threshold, over what period?
Is Priya Nair the viewer or the last editor, and is 28 Aug a complete day in UTC?
What do the four unlabelled Insights icons open, and what is the Submit button for?
