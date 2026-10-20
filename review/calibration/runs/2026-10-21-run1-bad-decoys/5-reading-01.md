# Reading · 01-team-spend

First look: the amber banner "Will breach by 30 Aug at this pace" / the five big figures ($3,412.60, $1,387.40, $121.88, 71.1%, 12) / the bar chart with its red dashed line. For: a Market Risk head checking whether the department will exceed its August envelope, and who is driving the spend.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | Names the app. | "Charon", 20/600 | – |
| 01 | 2 | CUT | polish | The firm name answers no question a reader of this screen has. | "NOMURA" 11px grey, top right, not interactive | Drop it, or fold into the Charon wordmark. |
| 01 | 3 | KEEP | – | Names the department whose numbers these are, the first thing a head needs to confirm. | "Market Risk" 14/600 | – |
| 01 | 4 | FIX | weakens | "recently" tells the reader nothing and "Priya Nair" is unexplained (viewer, or who refreshed it?); she also appears in the members table. | "Last updated recently · Priya Nair" | "Data to 28 Aug 23:59 UTC" and, if it is the viewer, "Signed in as Priya Nair" as a separate item. |
| 01 | 5 | MERGE | polish | "Risk" is an unexplained label (division? firm?) one line above the same department name already shown in 3. | 5 "Risk" bold, 6 "Market Risk", 3 "Market Risk" | Merge into 3. |
| 01 | 6 | MERGE | polish | Third statement of the department name on one screen. | 3 and 6 both "Market Risk" | Merge into 3. |
| 01 | 7 | FIX | polish | A nav link that does not signal it is one: no pointer. | JSON tag a, interactive false, cursor auto | Pointer cursor and a hover tint. |
| 01 | 8 | KEEP | – | Shows the current section by tint plus bold, at the point it was chosen. | 8 bg #dbe6f1, weight 600 | – |
| 01 | 9 | FIX | polish | Section label is nearly unreadable, so the nav grouping is missed. | contrast 2.4, needed 4.5, 11px | Darken to #6b7280. |
| 01 | 10 | FIX | polish | Link to the uplift queue that looks and behaves as plain text; the reader cannot tell it is an action. | tag a, interactive false, cursor auto | Pointer cursor; a count badge if requests are waiting. |
| 01 | 11 | KEEP | – | Shows which tab is open, with underline. | "Team spend" 13/600 with underline | – |
| 01 | 12 | FIX | weakens | Looks like a tab but the JSON says it does nothing, so the reader cannot tell if People is a view or a label. | tag span, interactive false, cursor auto | Make it a real tab with pointer and hover, or remove the tab pair (People is also the members table at 51). |
| 01 | 13 | KEEP | – | Settles "now or the month": month, days elapsed and envelope in one line. | "August 2026 · 28 of 31 days elapsed · Envelope $4,800 for the month" | – |
| 01 | 14 | FIX | blocks | The headline claims a breach by 30 Aug, which contradicts the pace shown on the same screen, and it repeats two figures. At the stated pace the month ends near $3,778 (121.88 x 31), under $4,800; the remaining $1,387.40 over 3 days would need about $462 a day. | 14 "Will breach by 30 Aug at this pace" vs 27 "$121.88" and 28 "+$366" | Check the forecast; then say "Forecast to exceed the $4,800 envelope on 30 Aug" (or "On pace for $3,778, within the envelope") with no spend figure in the sentence. |
| 01 | 15 | CUT | weakens | Restates the first half of 14 and the content of 18. | "Spend to date: $3,412.60 of $4,800 envelope" vs 14 and 17 | Remove. |
| 01 | 16 | KEEP | – | Label of the first figure; plain words. | "Spend to date" | – |
| 01 | 17 | KEEP | – | The figure the screen is about, largest type on the page. | "$3,412.60" 26/600 | – |
| 01 | 18 | FIX | polish | Wraps to two lines and carries the percentage that the bar and the Util tile also carry. | "of $4,800 — 71.1% of envelope", h 35 | "71.1% of $4,800 envelope" on one line. |
| 01 | 19 | KEEP | – | Shows the share used at a glance; the tick marks the full envelope. | bar fill about 71% of track | – |
| 01 | 20 | CUT | weakens | Third statement of $4,800 and 71.1% in one tile, at 2.5:1. | "envelope $4,800 · 71.1% used", contrast 2.5; homes of 71.1%: 14, 18, 20, 31 | Remove. |
| 01 | 21 | KEEP | – | Label; "Headroom" is understood by this reader. | "Headroom" | – |
| 01 | 22 | KEEP | – | The only place that states money left, which a head needs. | "$1,387.40" | – |
| 01 | 23 | CUT | polish | The complement of the 71.1% shown elsewhere. | "28.9% remaining" | Remove; 22 already says what is left. |
| 01 | 24 | CUT | weakens | An unlabelled flat line: the reader cannot tell what it plots or why it is flat. | sparkline, labels 0, marks 1, alt "" | Remove. |
| 01 | 25 | CUT | polish | Foot line that says nothing, at 2.5:1. | "envelope this month", contrast 2.5 | Remove. |
| 01 | 26 | KEEP | – | Label; plain. | "Daily average" | – |
| 01 | 27 | KEEP | – | Pace figure no other element states; it equals 3,412.60 / 28. | "$121.88" | – |
| 01 | 28 | FIX | weakens | Three jargon items (Fcst, Δ, EOM) and the real answer, the projected month-end, is not stated. | "Fcst Δ vs EOM +$366" | "On this pace: $3,778 by 31 Aug". |
| 01 | 29 | CUT | polish | A method note in abbreviations (MTD), at 2.5:1; 13 already gives days elapsed. | "MTD / days elapsed", contrast 2.5 | Remove. |
| 01 | 30 | MERGE | polish | "Util%" is jargon and the tile repeats G3. | "Util%" | Merge into 18. |
| 01 | 31 | MERGE | weakens | Fourth home for 71.1%. | homes 14, 18, 20, 31 | Merge into 18. |
| 01 | 32 | CUT | polish | "of envelope used" repeats 18. | "of envelope used" | Remove. |
| 01 | 33 | CUT | weakens | Repeats 17 and 13 at 2.5:1. | "$3,412.60 / $4,800"; homes of $4,800: 13, 15, 18, 20, 33 | Remove. |
| 01 | 34 | FIX | polish | The glossary and the tile foot say key holders; the label says Members. | 34 "Members", 37 "key holders in Market Risk" | Use "Key holders" or "Members" everywhere and drop 37. |
| 01 | 35 | KEEP | – | Headcount behind the spend; also the table's total check. | "12", table "Total (12)" | – |
| 01 | 36 | KEEP | – | Says what changed in headcount, which nothing else says. | "+2 since July" | – |
| 01 | 37 | CUT | polish | Explains a word the reader knows, at 2.5:1. | "key holders in Market Risk", contrast 2.5 | Remove. |
| 01 | 38 | FIX | polish | Re-states the total already in 17 and the 28 already in 13. | "Spend by day · 1 to 28 Aug · total $3,412.60"; homes of $3,412.60: 14, 15, 17, 33, 38 | "Spend by day, 1 to 28 Aug". |
| 01 | 39 | FIX | weakens | The axis starts at $60, so bar heights exaggerate differences; the dashed line has no value on it and sits near $122, not at the $154.80 a day the caption describes; no hover or alt. | y ticks $200 / $130 / $60; line near the daily average; alt "" | Start at $0, label the line "Envelope pace $154.80 a day", add hover values. |
| 01 | 40 | FIX | weakens | A 204-character instruction paragraph standing in for a label. | "How to read this chart: each bar is one day's spend..." | Direct-label the line and delete the paragraph. |
| 01 | 41 | KEEP | – | Names the chart. | "Spend by model" | – |
| 01 | 42 | MERGE | weakens | The donut has no labels and seven unkeyed colours; the table beside it says the same thing readably. | donut labels 0, 7 marks; table has no swatches | Merge into 43 (add a swatch column, or drop the donut). |
| 01 | 43 | KEEP | – | Model names as the tools show them, with share; readable. | "claude-sonnet-4-5 58.2%" | – |
| 01 | 44 | CUT | weakens | A heading over four unlabelled icons. | "Insights" with 45 to 48 | Remove. |
| 01 | 45 | CUT | weakens | A star with no label or action; the reader cannot tell what it means. | svg, alt "", interactive false | Remove. |
| 01 | 46 | CUT | weakens | A trend icon with no label or action. | svg, alt "" | Remove. |
| 01 | 47 | CUT | weakens | A map pin on a spend screen; means nothing here. | svg, alt "" | Remove. |
| 01 | 48 | CUT | weakens | A window icon with no label or action. | svg, alt "" | Remove. |
| 01 | 49 | KEEP | – | Names the table and its month. | "Members · August" | – |
| 01 | 50 | FIX | weakens | Breach-red text signals an alarm for a routine export, and nothing says what is exported. | color #dc2626, interactive true | Neutral link colour; "Export members (CSV)". |
| 01 | 51 | FIX | weakens | Currency is USD in every row; "Breached" and "Approaching" do not say of what (daily cap or envelope share) or when; rows give no sign they open to a person. | Currency column all "USD"; Status "Breached" on a monthly table | Drop Currency; make Status say the measure; say if rows open. |
| 01 | 52 | CUT | weakens | A primary button with nothing to submit and no form; the reader cannot guess what it does. | "Submit", interactive true, no form fields | Remove. |
| 01 | 53 | MOVE | weakens | The caveat that figures exclude cached tokens at list price is 9px and 1.9:1 at the page foot, where nobody reads it; "see methodology" is not a link. | 9px, contrast 1.9, y 1286 | Move to one 12px line under 13; link the methodology. |
| 01 | G1 | KEEP | – | Sidebar holds navigation and nothing else once 5 and 6 are folded into 3. | members 5 to 10 | – |
| 01 | G2 | FIX | blocks | The one status statement is right to lead, but its claim contradicts the pace figures and it holds two lines saying the same thing. | 14 and 15; see 14 | One line, verified forecast, no spend figure. |
| 01 | G3 | KEEP | – | Label, figure, context and bar each add something; 20 is the only extra. | 16 to 19 | – |
| 01 | G4 | FIX | weakens | Money left is useful but the tile is padded with a blank sparkline and a meaningless foot. | 24 and 25 | Keep label, 22 and one line of context. |
| 01 | G5 | FIX | weakens | Pace is useful but the context line is jargon and the foot a method note. | 28 and 29 | Label, $121.88, "On this pace: $3,778 by 31 Aug". |
| 01 | G6 | CUT | weakens | Every item in the tile repeats G3 or 14. | homes of 71.1%: 14, 18, 20, 31 | Remove; keep the percentage once in G3. |
| 01 | G7 | KEEP | – | Headcount and change are not stated elsewhere. | 34 to 36 | – |
| 01 | page | FIX | weakens | "Team spend" is named twice as navigation (nav 8, tab 11) and the second tab does nothing, so the reader meets choices that lead nowhere; the answer itself needs no choice (the banner gives it). | 8, 11, 12; decisions to reach the answer: 0, to see who: 1 scroll | One home for the section name; make the tab pair real or remove it. |
| 01 | page | ASK | weakens | Empty state not demonstrated: what do the members and model tables show with no rows? | only populated data in the capture | Owner to supply the no-rows state. |
| 01 | page | ASK | weakens | Zero-day, loading and failed-data states not demonstrated: what does the daily chart show for a zero day, and the banner if the forecast cannot be computed? | only good data in the capture | Owner to supply the three states. |
| 01 | page | ASK | polish | The capture is the whole page (h 1343); the members table starts at y 930, below a typical laptop fold. Is that intended when "who is driving it" is half the reader's question? | page.h 1343, table y 930 | Owner to confirm the table's priority. |

Earns its place: 1, 3, 8, 11, 13, 16, 17, 19, 21, 22, 26, 27, 35, 36, 41, 43, 49, G1, G3, G7
Cut first: 52, 44, 45, 46, 47, 48, 24, G6, 20, 15, 42, 37, 29, 25, 23, 2
Questions for the owner:
Is the "will breach by 30 Aug" forecast correct, given 28 days at $121.88 a day projects about $3,778 against a $4,800 envelope?
Is Priya Nair the viewer or the person who last updated the data?
What do "Breached" and "Approaching" in the members table measure (daily cap or envelope share), and over what window?
What are the star, trend, pin and window icons under Insights meant to do?
What is the Submit button for?
