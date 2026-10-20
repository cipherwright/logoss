# Perception · 01-team-spend

First look: the amber banner (G2) / the row of five equal 26 px figures, then the blue bar chart and the multicoloured donut / the four coloured icons and the red "Export CSV" link. For: seeing whether Market Risk will stay inside its $4,800 August envelope (the banner says no, it will breach by 30 Aug) and who is driving it.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | Product mark, 20/600 in the one accent blue, sits alone top left | JSON 20/600 #366092, contrast 6.5 | – |
| 01 | 2 | KEEP | – | Firm name is small and grey, so it identifies without competing | JSON 11/400 #6b7280, contrast 4.8 | – |
| 01 | 3 | KEEP | – | Names the department being viewed; it is the one place the scope is stated | JSON 14/600 "Market Risk" | – |
| 01 | 4 | FIX | polish | "recently" gives no time to judge freshness against, and a person's name beside it reads as a second fact | JSON text "Last updated recently · Priya Nair" | Show a timestamp ("Updated 21 Oct 09:40 UTC") and drop or label the name |
| 01 | 5 | MERGE | polish | A bold box saying "Risk" repeats the scope that 3 already states | JSON 5 "Risk" 14/700; 6 "Market Risk"; 3 "Market Risk" | Keep 3; drop 5 |
| 01 | 6 | MERGE | polish | Third statement of "Market Risk" in the header and sidebar | JSON 3, 6 and 37 all contain "Market Risk" | Keep 3 |
| 01 | 7 | KEEP | – | Nav item in resting grey, one line, aligned with siblings | JSON 13/400 #374151, left edge 0, h 35 | – |
| 01 | 8 | KEEP | – | Current page marked by tint plus weight, a clear selected state | JSON bg #dbe6f1, 13/600 | – |
| 01 | 9 | FIX | polish | The section label cannot be read; it is lighter than the page needs to dismiss | JSON contrast 2.4, needed 4.5, size 11 | Use #6b7280 (4.6+) |
| 01 | 10 | KEEP | – | Second nav item, same form as 7 | JSON 13/400 #374151 | – |
| 01 | 11 | MERGE | polish | The first tab repeats the sidebar's selected item, so two selected states say the same thing | Render: "Team spend" at x264 y119 and highlighted "Team spend" at sidebar y202 | Keep 8; drop the tab 11 |
| 01 | 12 | MOVE | polish | A lone "People" tab with no sibling is navigation, which lives in the sidebar | Render: tab 12 beside 11; sidebar has Overview, Team spend, Cap Uplifts | Move to the sidebar under Team spend |
| 01 | 13 | KEEP | – | The period and days elapsed are the only statement of where in the month we are; grey and small, as context should be | JSON 12/400 #6b7280; "28 of 31 days elapsed" appears only here (and in the chart title as "28 Aug") | – |
| 01 | 14 | FIX | weakens | The headline uses tint, border, left stripe, bold 700, amber and a triangle for one message, and restates figures that tile G3 already shows | JSON 13/700 #92400e on #fffbeb, G2 bordered + tinted; text repeats "$3,412.60 (71.1% of envelope)" (measures homes: 14, 17, 31) | Keep the amber as the single loud thing, drop the bold and the figures: "Will breach the envelope by 30 Aug at this pace" |
| 01 | 15 | CUT | weakens | A second line that repeats the spend and envelope of the line above it | JSON "Spend to date: $3,412.60 of $4,800 envelope" vs 14; $4,800 has five homes | Delete |
| 01 | 16 | KEEP | – | Tile label, same form in all five tiles | JSON 11/400 #374151, same box width 148 | – |
| 01 | 17 | KEEP | – | The spend figure: largest type on the tile, left-aligned with its label | JSON 26/600, x277 shared with 16 | – |
| 01 | 18 | FIX | weakens | The sub-line says "of $4,800" and then "71.1% of envelope", wraps to two lines and pushes the bar down | Render: wraps; box h 35 vs 17 in the sibling tiles; 71.1% has four homes | Keep "of $4,800" only, one line |
| 01 | 19 | FIX | weakens | Length is the right channel for share of envelope, but the forecast (the banner's whole point) and the 90 % approaching line have no mark on the scale, and the dark tick at the end is unexplained | Render: fill ends ~71 %, tick at far right, no other mark; JSON shape, no labels | Add a hatched or outlined extension to the forecast end-of-month position and label the 100 % tick |
| 01 | 20 | CUT | weakens | Restates 18's figures a third time and is the lowest contrast text on the tile | JSON "envelope $4,800 · 71.1% used", contrast 2.5, size 11 | Delete |
| 01 | 21 | KEEP | – | Tile label, same form | JSON 11/400 #374151 | – |
| 01 | 22 | KEEP | – | Remaining headroom is a different question from spend to date, and it is the one figure the reader must act on | JSON "$1,387.40"; not derivable on screen without subtraction | – |
| 01 | 23 | CUT | polish | The complement of 71.1 %, stated in a form the reader must flip back | JSON "28.9% remaining" vs 31 "71.1%" and 18 | Delete |
| 01 | 24 | CUT | weakens | A sparkline with one mark, no labels and no scale draws a flat line that encodes nothing | JSON role sparkline, marks 1, labels 0; render shows a flat horizontal line | Delete, or draw the real daily-remaining series with an end label |
| 01 | 25 | CUT | polish | A foot line that restates the tile label, at unreadable contrast | JSON "envelope this month", contrast 2.5; 13 states the envelope | Delete |
| 01 | 26 | KEEP | – | Daily average gives the pace the forecast is built on | JSON "Daily average" | – |
| 01 | 27 | KEEP | – | Figure in the same form and position as 17 and 22 | JSON 26/600, x646 | – |
| 01 | 28 | FIX | weakens | The abbreviations "Fcst Δ vs EOM" are decoder work for a reader who wants "projected to exceed by $366" | JSON text "Fcst Δ vs EOM +$366" | Write "Projected $366 over envelope" in grey, and let 14 carry the date |
| 01 | 29 | CUT | polish | Spells out the formula in 2.5-contrast type; the reader asked what, not how | JSON "MTD / days elapsed", contrast 2.5 | Delete |
| 01 | 30 | MERGE | polish | The same measure as tile G3, labelled differently ("Util%" with a symbol, versus "Spend to date" with a bar) | JSON "Util%" vs G3 71.1% | Fold into G3 (its bar is the better channel) |
| 01 | 31 | MERGE | weakens | 71.1 % set at 26/600, as prominent as the dollars, when the bar in G3 already shows it | JSON 26/600 "71.1%"; homes 14, 18, 20, 31 | Delete; G3's bar and the banner carry it |
| 01 | 32 | MERGE | polish | "of envelope used" restates the label | JSON "of envelope used" vs 30 | Delete with G6 |
| 01 | 33 | CUT | polish | Fifth home of $4,800 and fifth of $3,412.60, in 2.5-contrast type | JSON "$3,412.60 / $4,800", contrast 2.5 | Delete |
| 01 | 34 | KEEP | – | Tile label in the same form | JSON 11/400 #374151 | – |
| 01 | 35 | KEEP | – | Headcount is a different measure from the money tiles | JSON "12" | – |
| 01 | 36 | KEEP | – | The change since last month is the only context that says whether 12 is a lot | JSON "+2 since July" | – |
| 01 | 37 | CUT | polish | Restates what 34 and 3 already say, in 2.5-contrast type | JSON "key holders in Market Risk", contrast 2.5 | Delete |
| 01 | 38 | FIX | polish | The chart title carries a total ($3,412.60) that the first tile already shows, and "28" appears in three places | JSON text "Spend by day · 1 to 28 Aug · total $3,412.60"; homes of 28: 13, 38, 39 | "Spend by day, August", total dropped |
| 01 | 39 | FIX | blocks | The value axis starts at $60, so bar length (the channel the reader judges) does not scale with spend, and the dashed line is unlabelled and sits near $120 by the axis ticks, about the daily average, not the $155 the note below claims | Render: baseline labelled $60, ticks $60/$130/$200; dashed line at y598, $130 at y587; 40 says "envelope divided by the days in the month" (4,800/31 = 154.8); bars also use a lightness gradient that encodes nothing | Zero baseline, flat fill in the accent blue, label the dashed line directly and check what it plots |
| 01 | 40 | CUT | weakens | A 204-character legend in prose below a chart that has two marks to explain; direct labels do this faster | JSON 204 chars, 12/400 grey, h 35 | Delete; label the dashed line and drop the "weekends are the short bars" claim or mark weekends |
| 01 | 41 | KEEP | – | Title for the model split, same form as 38 | JSON 11/600 #374151 | – |
| 01 | 42 | CUT | weakens | Share of a whole as angle across seven slices, unlabelled, in seven hues that do not appear in the table rows beside it; the small slices (3.1, 2.0, 1.0 %) cannot be told apart and the figures are in 43 | JSON marks 7, paints 7, labels 0, alt ""; 43 lists all seven shares | Delete; give 43 a length bar per row |
| 01 | 43 | FIX | weakens | The table is the right home for the numbers (right-aligned, one decimal) but a share is judged better by length than by reading | JSON columns Model left / Share right, bars 0; all shares at one decimal | Add an in-cell bar to Share, single grey-blue fill, on one scale |
| 01 | 44 | ASK | weakens | "Insights" heads four icons with no text, and its place under the model table ties it to model spend, which the icons may not be about | JSON text "Insights", elements 45 to 48 have no labels or alt | What is an Insight and what does each icon open? |
| 01 | 45 | CUT | weakens | An unlabelled star with no stated meaning | JSON labels 0, alt "", render blue outline star | Delete, or replace by a sentence of text if it is a real finding |
| 01 | 46 | CUT | weakens | An unlabelled trend icon in amber, a hue the glossary reserves for forecast and approaching | JSON labels 0, alt ""; render amber line icon | Delete |
| 01 | 47 | CUT | weakens | An unlabelled pin icon in green, a hue that means nothing elsewhere on this screen | JSON labels 0, alt ""; render green pin | Delete |
| 01 | 48 | CUT | weakens | An unlabelled window icon in purple, a hue that means nothing elsewhere on this screen | JSON labels 0, alt ""; render purple icon | Delete |
| 01 | 49 | KEEP | – | Table title, same form as 38 and 41 | JSON 11/600 #374151 | – |
| 01 | 50 | FIX | weakens | A link is drawn in red and underlined, the same hue that means Breached in the status pill and the chart's dashed line | JSON color #dc2626 12/600 interactive; render red "Breached" pill and red dashed line | Use ink or the accent blue (#366092), keep red for breached |
| 01 | 51 | FIX | weakens | The Currency column is "USD" in every row, which is a unit that belongs once in the header | JSON column Currency, sampleRow "USD"; render every row USD | Drop the column and write "Spend (USD)" in the header; keep the Breached/Approaching/Normal status form, which encodes the right thing in hue and word |
| 01 | 52 | ASK | weakens | A solid blue "Submit" button on a read-only report is the only filled control on the page, so it pops while naming no action | JSON "Submit", interactive, bg #366092, white; no form or input on screen | What does Submit submit? |
| 01 | 53 | FIX | weakens | The one caveat about how the figures are built is set at 9 px and 1.9:1 on a grey box, so it cannot be read | JSON size 9, contrast 1.9, needed 4.5; lowContrast and smallText both list 53 | 12 px #6b7280, no box, directly under the table it qualifies |
| 01 | G1 | KEEP | – | Sidebar enclosed by tint alone, one of two groups that use tint, with left edge shared | JSON G1 tinted #f9fafb, bordered false | – |
| 01 | G2 | KEEP | – | The one tinted-and-bordered band on the page is the one message that matters; amber means will breach, as the glossary defines | JSON G2 tinted #fffbeb, bordered; text "Will breach by 30 Aug" | – |
| 01 | G3 | KEEP | – | The tile that answers "how much have we spent" has label, figure, context and bar, each in its own form | JSON members 16 to 20 | – |
| 01 | G4 | FIX | weakens | Of five members, three are redundant or empty, so the tile's two useful items sit above a flat line and a faint caption | JSON members 21 to 25, 24 flat sparkline, 25 contrast 2.5, 23 restates | Keep 21 and 22; fold 23 into the label as "Headroom (28.9%)" or delete |
| 01 | G5 | KEEP | – | Pace tile has label, figure and one qualifier | JSON members 26 to 29 | – |
| 01 | G6 | MERGE | weakens | A bordered card for a measure already shown by G3 and the banner | JSON G6 members 30 to 33, all restate 71.1 % and $3,412.60 / $4,800 | Fold into G3 |
| 01 | G7 | KEEP | – | Headcount tile is a separate measure | JSON members 34 to 37 | – |
| 01 | page | FIX | weakens | Nothing pops reliably: the banner, five identical 26/600 figures, a multicoloured donut, four coloured icons, a red link and a solid blue button all compete, and the screen uses 13 type styles | JSON typeStyles lists 13 combinations; five 26/600 figures; hues in use: blue #366092, amber, red, plus icon green and purple and donut's seven | Make the banner the one loud element; one size for figures, calm everything else; accent blue for links and selected, red for breached only, amber for forecast only |
| 01 | page | FIX | polish | The right edges and left edges nearly match without matching, so the grid reads as untidy | JSON distinctLeftEdges 18; tiles end at x1176, tables at x1202 and 1204, titles at 1208; tile text starts at x277 while banner text starts at x282 and the donut at x848, model table at x992; tile gap 10 against inner padding 13 so tile separation is no larger than the space inside them | One content column, one inner padding, tiles gap larger than padding |

Earns its place: 1, 2, 3, 7, 8, 10, 13, 16, 17, 21, 22, 26, 27, 34, 35, 36, 41, 49
Cut first: 42, 24, 45, 46, 47, 48, 15, 31, 40, 20, 33, 23, 25, 29, 37
Questions for the owner: What does Submit (52) submit, and to where?
Questions for the owner: What is an Insight (44) and what does each of the four icons (45 to 48) open?
Questions for the owner: What does the dashed line on the day chart (39) plot: the daily average or envelope divided by days in the month?
