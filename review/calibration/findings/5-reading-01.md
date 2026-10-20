# Reading · 01-team-spend

First look: the amber breach banner and the row of five large figures / the bar chart with its dashed red line / the members table. For: a functional head seeing whether Market Risk's August spend will stay inside its $4,800 envelope, and who is driving it.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | The product name sits top-left where a stranger looks for it | "Charon", 20/600, contrast 6.5 | – |
| 01 | 2 | CUT | polish | The firm's name answers no question for someone already inside the firm | "NOMURA", 11px, top right, no interaction | Remove |
| 01 | 3 | FIX | polish | The only statement of whose spend this is looks like body text, and nothing names the screen ("Team spend") | "Market Risk" 14/600, same weight as table text; tab is "Spend", sidebar is "Team" | Make it the page heading: "Market Risk · Team spend" |
| 01 | 4 | FIX | weakens | "Last updated recently" gives no time, and "Priya Nair" is unexplained (viewer? owner?) while she is also a row in the members table | Text "Last updated recently · Priya Nair"; element 52 row 2 is Priya Nair | A real time ("Updated 14:05 UTC") and, if kept, "Signed in as Priya Nair" |
| 01 | 5 | MERGE | polish | "Risk" restates the department already named by element 3 | 5 "Risk", 6 "Market Risk", 3 "Market Risk" | Survivor 3; drop 5 and 6 |
| 01 | 6 | MERGE | polish | Third home for "Market Risk" on the screen | Elements 3 and 6 both read "Market Risk" | Survivor 3 |
| 01 | 7 | FIX | weakens | A sidebar link that looks like text; the stranger cannot tell it is clickable | tag a, interactive false, cursor auto | Pointer cursor and hover state, as for a link |
| 01 | 8 | KEEP | – | Current location is shown by tint and weight, the one clear state signal in the sidebar | bg #dbe6f1, 600 weight | – |
| 01 | 9 | FIX | polish | A section label in pale grey that cannot be read, and its name ("Requests") differs from its item ("Cap Uplifts") and from tab 13 | contrast 2.4, needed 4.5; element 10 "Cap Uplifts", element 13 "Requests" | Contrast 4.5 or more, and one name for the thing |
| 01 | 10 | FIX | weakens | Looks like plain text and does not say whether it is the same thing as the "Requests" tab | tag a, interactive false, cursor auto; element 13 | Pointer cursor; use the firm's one word for the thing (glossary: "Uplift") |
| 01 | 11 | KEEP | – | The open tab is bold with an underline, visible where it was set | 13/600 #111827, underline in render | – |
| 01 | 12 | FIX | weakens | A tab that does not look clickable, and "People" is the same list the table calls "Members" and the sidebar calls "Team" | interactive false, cursor auto; elements 8, 12, 36, 50 | Pointer cursor; pick one word (Members) |
| 01 | 13 | ASK | – | Cannot tell what "Requests" holds or whether it duplicates sidebar "Cap Uplifts" | Elements 10 and 13 | Question for owner: are these the same list? If so, one entry |
| 01 | 14 | KEEP | – | Gives the period, how far through it, and the envelope in one line the tiles depend on | "August 2026 · 28 of 31 days elapsed · Envelope $4,800 for the month" | – |
| 01 | 15 | FIX | blocks | The banner's claim contradicts the screen's own numbers: at $121.88 a day, three days add about $366, so month-end is about $3,779, under $4,800; a breach "by 30 Aug" would need about $462 a day | 28 $121.88; 29 "+$366"; 23 $1,387.40 headroom; 14 "28 of 31 days" | Show the forecast month-end figure, and warn with a breach date only if the forecast crosses the envelope. Drop the repeated spend figure and the ▲ glyph |
| 01 | 16 | CUT | weakens | Restates the banner's spend figure a third time in a line of grey under it | "Spend to date: $3,412.60 of $4,800 envelope"; also 15, 18, 19 | Delete |
| 01 | 17 | KEEP | – | Names the tile's figure; matches the glossary's "period spend, month to date" | "Spend to date" | – |
| 01 | 18 | KEEP | – | The headline figure, large and first in its tile | 26/600, $3,412.60 | – |
| 01 | 19 | FIX | weakens | Wraps onto two lines and repeats the envelope and the percentage that the bar and tile 6 already give | "of $4,800 — 71.1% of envelope", h 35; homes of $4,800: 14, 16, 19, 21, 24, 34 | "of $4,800 envelope" on one line |
| 01 | 20 | KEEP | – | The bar shows how full the envelope is at a glance, without reading a number | 100px bar, 71% filled | – |
| 01 | 21 | CUT | polish | Third statement of the envelope and the percentage under the bar, in text a stranger cannot read | contrast 2.5; "envelope $4,800 · 71.1% used" | Delete |
| 01 | 22 | FIX | polish | "Headroom" is jargon for a first-day reader | Not in the glossary | "Left in envelope" |
| 01 | 23 | KEEP | – | Says how much can still be spent, which no other tile says | $1,387.40 (4,800 minus 3,412.60) | – |
| 01 | 24 | CUT | polish | Restates the envelope and gives the remainder as a percentage the figure already implies | "28.9% of $4,800 remaining" | Delete |
| 01 | 25 | CUT | polish | A flat line with no label, no axis and one mark tells the stranger nothing | role sparkline, marks 1, labels 0, alt "" | Delete, or give it a title and real data |
| 01 | 26 | CUT | polish | A caption that says nothing the label does not, and cannot be read | "envelope this month", contrast 2.5 | Delete |
| 01 | 27 | KEEP | – | Names the pace figure plainly | "Daily average" | – |
| 01 | 28 | KEEP | – | The pace the forecast rests on; 3,412.60 over 28 days | $121.88 | – |
| 01 | 29 | FIX | weakens | "Fcst Δ vs EOM +$366" is three abbreviations and a symbol, and does not say plus what over what | Text "Fcst Δ vs EOM +$366" | "Forecast month-end $3,779" with whether that is over or under the envelope |
| 01 | 30 | CUT | polish | Shows the formula behind the figure in jargon (MTD) at an unreadable contrast | "MTD / days elapsed", contrast 2.5 | Delete |
| 01 | 31 | MERGE | weakens | "Util%" is jargon and the tile repeats G3 | "Util%"; 32 71.1% = 19 and 15 | Survivor 19 and the bar 20; drop the tile |
| 01 | 32 | MERGE | weakens | The percentage in large type is already in the banner, in tile 1 and under the bar | 71.1% homes: 15, 19, 21, 32 | Survivor 19/20 |
| 01 | 33 | MERGE | polish | "of envelope used" repeats 19 | Elements 19 and 33 | Survivor 19 |
| 01 | 34 | CUT | polish | The ratio restates elements 18 and 14 at unreadable contrast | "$3,412.60 / $4,800", contrast 2.5 | Delete |
| 01 | 35 | KEEP | – | Headcount is a different fact and gives context for spend | "Members" | – |
| 01 | 36 | KEEP | – | The count as a figure | 12 | – |
| 01 | 37 | KEEP | – | Says the change and the period compared | "+2 since July" | – |
| 01 | 38 | FIX | polish | The definition is in the smallest, palest line and the term "key holders" belongs in the label | "key holders in Market Risk", contrast 2.5 | Label the tile "Key holders" and drop this line |
| 01 | 39 | FIX | polish | The chart title repeats the total already in 15, 16 and 18 | "total $3,412.60"; homes of $3,412.60: 15, 16, 18, 34, 39 | "Spend by day · 1 to 28 Aug" |
| 01 | 40 | FIX | weakens | The dashed red line has no label in the chart, red is the glossary's "breached" colour, and the axis starts at $60 so short bars look much shorter | 6 labels: "$200 $130 $60 1 Aug 15 Aug 28 Aug"; no line label | Label the line in the chart ("Envelope ÷ days, $155"), neutral colour, axis from $0 |
| 01 | 41 | CUT | weakens | A paragraph that explains the chart because the chart does not explain itself | "How to read this chart: …", 204 chars | Label the chart directly (see 40) and delete |
| 01 | 42 | KEEP | – | Names the donut and table pair | "Spend by model" | – |
| 01 | 43 | MERGE | weakens | The donut has no labels and no colour key, so no slice can be matched to a model, and the table beside it holds the same shares | role graphic, labels 0, alt ""; 7 slices vs element 44 shares | Survivor 44; drop the donut or add colour swatches to the rows |
| 01 | 44 | KEEP | – | Model names as the tools name them, with shares in one column | "claude-sonnet-4-5 · 58.2%" | – |
| 01 | 45 | ASK | – | A heading over four unlabelled icons | "Insights" with elements 46 to 49 | Question for owner: what is this section for? |
| 01 | 46 | ASK | – | A star with no label, no alt text and no click state; the stranger cannot tell what it means | marks 1, alt "", interactive false | Question for owner: what does the star open? |
| 01 | 47 | ASK | – | A rising-line icon with no label | alt "", interactive false | Question for owner: what is it? |
| 01 | 48 | ASK | – | A map-pin icon with no label on a screen with no places | alt "", interactive false | Question for owner: what is it? |
| 01 | 49 | ASK | – | A window icon with no label | alt "", interactive false | Question for owner: what is it? |
| 01 | 50 | KEEP | – | Titles the table and names the month | "Members · August" | – |
| 01 | 51 | FIX | weakens | Red is the app's colour for "breached", but this is a plain action; what it exports is not stated | #dc2626, cursor pointer | Accent or ink colour; "Export CSV (members, August)" |
| 01 | 52 | FIX | weakens | The Currency column is "USD" in every row, and Status says "Breached" without saying breached of what (a person's daily cap, or a share) | Columns: Currency; rows Chris Dane "Breached", Priya Nair "Approaching"; none interactive | Drop Currency; name the threshold in the Status header; pointer on rows if they open a person |
| 01 | 53 | ASK | – | A "Submit" button under a read-only table with nothing to submit | Interactive, cursor pointer, text "Submit" | Question for owner: what does this send and where? |
| 01 | 54 | FIX | weakens | The note that changes how every dollar figure is read is 9px at 1.9:1 and "see methodology" is not a link | 9/400, #b0b4ba on #f3f4f6, contrast 1.9 | 12px, contrast 4.5 or more, link to the methodology |
| 01 | G1 | KEEP | – | The sidebar holds identity and the three places in one column | Members 5 to 10 | – |
| 01 | G2 | KEEP | – | The one amber band carries the screen's single warning | bg #fffbeb | – |
| 01 | G3 | KEEP | – | Label, figure, context and bar each add one thing | Elements 17 to 20 (21 excepted) | – |
| 01 | G4 | KEEP | – | Label, figure and context; the sparkline and caption add nothing | Elements 22 to 24 | – |
| 01 | G5 | KEEP | – | Pace and forecast in one tile | Elements 27 to 29 | – |
| 01 | G6 | MERGE | weakens | The whole tile repeats G3 and the banner | Elements 31 to 34 vs 15, 19, 20 | Survivor G3 |
| 01 | G7 | KEEP | – | Headcount and its change | Elements 35 to 37 | – |
| 01 | page | FIX | weakens | The $4,800 envelope has six homes and $3,412.60 has five, so the stranger meets the same number again and again | numbersWithSeveralHomes: $4,800 in 14, 16, 19, 21, 24, 34; $3,412.60 in 15, 16, 18, 34, 39 | One home each: 14 for the envelope, 18 for spend |
| 01 | page | FIX | weakens | The same thing has several names: Team, People, Members; Requests, Cap Uplifts | Elements 8, 12, 36, 50; 9, 10, 13 | One word each, from the glossary |
| 01 | page | ASK | – | Empty, zero, loading and error states are not shown for the chart, either table, or the tiles | Capture shows good data only | Question for owner: what does each show with no rows, a zero day, and a failed load? |
| 01 | page | KEEP | – | The reader makes about one choice (which tab) to get the answer, and the answer is above the fold | page.h 1343 equals viewport; the banner and tiles sit at y 199 to 431 | – |

Earns its place: 1, 8, 11, 14, 17, 18, 20, 23, 27, 28, 35, 36, 37, 42, 44, 50
Cut first: 16, 21, 41, 34, 30, 26, 25, 24, 2
Questions for the owner:
Is "Requests" (tab 13) the same list as sidebar "Cap Uplifts" (10)?
What is the Insights section (45 to 49) and what do its four icons open?
What does Submit (53) send, and where?
How is "Will breach by 30 Aug" (15) computed, given $121.88 a day gives about $3,779 at month-end?
Is the Status (52) measured against the daily cap, the envelope share, or something else?
What do the chart, tables and tiles show with no data, a zero day, loading and an error?
