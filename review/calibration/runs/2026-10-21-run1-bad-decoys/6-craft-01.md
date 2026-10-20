# Craft · 01-team-spend

First look: the amber breach banner and the row of big figures / the coloured donut and the four coloured icons in the lower right / the wide members table. For: a department head checking whether Market Risk will exceed its August envelope and who is driving it.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | page | FIX | weakens | The type scale has 13 size/weight combinations where about five are needed. | JSON typeStyles lists 13 (11/400, 12/400, 13/400, 26/600, 11/600, 13/600, 20/600, 14/600, 14/700, 13/700, 10/400, 12/600, 9/400); 13/700, 14/700, 12/600, 10 and 9 each occur once. | Keep 26/600 figure, 20/600 heading, 13/400 body, 12/400 caption, 11/600 caps label; fold the rest into those. |
| 01 | page | FIX | weakens | Vertical gaps come from no scale: eight distinct values. | Gaps: 8 (title to chart), 10 (table to Submit), 11 (chart to note), 13 (tab to line, line to banner), 16 (banner to tiles, table 43 to Insights), 17 (Submit to footnote), 28 (Insights to Members), 32 (tiles to charts). | Use 8 inside a group, 16 between related groups, 32 between sections, and nothing else. |
| 01 | page | FIX | weakens | The right edge is ragged: banner and tiles stop at 1176, the Members table and model column at 1204-1208, header text at 1416. | Banner box x264 w912 (right 1176); element 51 x264 w940 (right 1204); element 41 x848 w360 (right 1208); Export CSV right edge 1176 against the table it heads at 1204. | Give every main-column block the same right edge (1176 or 1204) and end the header at that edge too. |
| 01 | page | FIX | weakens | There are six or more hues where two accents plus grey is the working set. | Blue brand/bars/button, amber banner and pills, red line/Export CSV/pill, green and purple icons, a seven-colour donut. | Blue for the chart, amber and red only for status, everything else ink and grey; drop the donut and icons. |
| 01 | page | FIX | polish | The header is two thin rows (57 px and 46 px) holding four short strings, and the left column below the chart is a hole. | Elements 1-4 sit at y14-43 and y70-90 with nothing between; chart note ends y733 while the right column runs to y877, leaving 560 x ~170 px empty beside Insights. | One header row; after the cuts below, the charts and the table stack with the one rhythm above and the hole closes. |
| 01 | 1 | KEEP | – | The wordmark is the single 20/600 blue mark and is clearly the product name. | 20/600, #366092, contrast 6.5 | – |
| 01 | 2 | MOVE | polish | An 11 px grey caps tag floats alone at the far right of an otherwise empty bar, 1300 px from the name it belongs to. | box x1363 y21, wordmark x24 y14; 11/400 | Put it beside the wordmark, e.g. "Charon · Nomura", or drop it to the sidebar foot. |
| 01 | 3 | FIX | weakens | The page title is 14/600, smaller than the tile figures and the wordmark, so the department the page is about does not lead. | 14/600 against 26/600 tiles and 20/600 wordmark | Make it the 20/600 heading and give the wordmark the smaller size. |
| 01 | 4 | FIX | polish | The freshness note is 12 px grey and its wording is vague ("recently"), with a name attached whose role is unclear. | text "Last updated recently · Priya Nair", 12/400, contrast 4.8 | A real timestamp ("Updated 21 Oct 09:40 UTC"); see question on the name. |
| 01 | 5 | ASK | weakens | A bold boxed "Risk" at the top of the sidebar sits directly above "Market Risk" and the reader cannot tell what it names. | 14/700 (the only 700 in the sidebar), x24 y115 w191; element 6 "Market Risk" beneath it | See question. |
| 01 | 6 | MERGE | polish | "Market Risk" is already the page title at the top of the screen. | Element 3 text "Market Risk" at 14/600; element 6 same text at 11/400 | Element 3 survives; remove 6. |
| 01 | 7 | KEEP | – | A plain nav link in regular weight on the sidebar tint, with its resting state quiet. | 13/400, #374151, contrast 9.9 | – |
| 01 | 8 | KEEP | – | The current page is marked by tint and weight only, no extra colour. | 13/600, bg #dbe6f1, contrast 14 | – |
| 01 | 9 | FIX | polish | The "Requests" section label is 11 px at 2.4:1, the faintest text in the sidebar, and heads a single link. | contrast 2.4, needed 4.5, size 11 (JSON lowContrast) | #6b7280 or drop the label and list Cap Uplifts as a plain link. |
| 01 | 10 | KEEP | – | A second nav link in the same style as 7. | 13/400, contrast 9.9 | – |
| 01 | 11 | MERGE | weakens | The "Team spend" tab repeats the highlighted sidebar item, so two navigation systems say the same thing. | Element 8 "Team spend" (highlighted) and element 11 "Team spend" (underlined), 13/600 each | Element 8 survives; remove the tab strip. |
| 01 | 12 | MOVE | polish | "People" is a sibling view of Team spend and belongs beside it in the sidebar, not in a one-link-and-a-half tab strip. | grey 13/400 tab at x358, 39 px wide, beside element 11 | Add "People" under Team spend in the sidebar. |
| 01 | 13 | FIX | polish | The period line repeats the envelope figure that is already in the banner and two tiles. | "$4,800" has homes 13, 15, 18, 20, 33 (JSON numbersWithSeveralHomes) | "August 2026 · 28 of 31 days elapsed". |
| 01 | 14 | FIX | weakens | The banner headline is a 13/700 sentence of 82 characters that re-states the spend and percentage shown in the tiles beneath, burying the news "Will breach by 30 Aug". | text "Spend to date $3,412.60 (71.1% of envelope) — Will breach by 30 Aug at this pace"; $3,412.60 homes 14, 15, 17, 33, 38; 71.1% homes 14, 18, 20, 31 | "Will breach the envelope by 30 Aug at this pace" at 13/600 (the 700 weight exists nowhere else). |
| 01 | 15 | CUT | weakens | A second grey line inside the banner repeats the first line and tile 1. | "Spend to date: $3,412.60 of $4,800 envelope", 12/400 | Remove. |
| 01 | 16 | KEEP | – | A short caps label names the figure, in the label style used across tiles. | 11/400 caps, contrast 10.3 | – |
| 01 | 17 | KEEP | – | The largest type on the screen is the month-to-date spend, which is the thing the screen is about. | 26/600, #111827, contrast 17.7 | – |
| 01 | 18 | FIX | weakens | The sub-line wraps to two lines ("...71.1% of / envelope"), crowds the bar below it and restates the percentage. | box h35 against h17 for sibling lines; bottom y378, bar starts y386 | One line: "of $4,800". |
| 01 | 19 | FIX | polish | The bar is a 10 px dark slab with a heavy black end tick, heavier than the figure it supports. | box h10, fill #374151, tick at the track end | 6 px track in light grey, fill in ink, thin end mark. |
| 01 | 20 | CUT | weakens | A third restatement of envelope and percentage in 11 px at 2.5:1. | "envelope $4,800 · 71.1% used", contrast 2.5, #9ca3af | Remove. |
| 01 | 21 | KEEP | – | Label for the headroom figure. | 11/400 caps | – |
| 01 | 22 | KEEP | – | Headroom is the number a head acts on and sits at figure size with the others. | 26/600 | – |
| 01 | 23 | KEEP | – | The remaining share is a short, readable context line. | 12/400, contrast 4.8 | – |
| 01 | 24 | CUT | weakens | The sparkline renders as a bare flat rule with no marks, labels or scale, so it reads as a stray line. | role sparkline, marks 1, labels 0, w120 h22 | Remove, or draw real daily headroom with an end value. |
| 01 | 25 | CUT | weakens | A caption "envelope this month" at 2.5:1 sits under the sparkline and says nothing the screen has not said. | contrast 2.5, 11/400 | Remove. |
| 01 | 26 | KEEP | – | Label for the daily average. | 11/400 caps | – |
| 01 | 27 | KEEP | – | Daily average at figure size. | 26/600 | – |
| 01 | 28 | FIX | weakens | "Fcst Δ vs EOM +$366" is abbreviation and symbols in a caption line, hard to read. | text "Fcst Δ vs EOM +$366" | Plain words, e.g. "$366 more by month end". |
| 01 | 29 | CUT | polish | A formula note at 2.5:1 in 11 px that no reader needs on the page. | "MTD / days elapsed", contrast 2.5 | Remove, or move to a hover. |
| 01 | 30 | MERGE | weakens | The Util% tile is the same measure as the Spend to date tile's percentage and bar. | "71.1%" homes 14, 18, 20, 31 | Element 18 with bar 19 survives. |
| 01 | 31 | MERGE | weakens | A 26 px headline figure spent on a number already shown in the first tile and the banner. | 26/600 "71.1%", same as element 14 and 18 | Remove with the tile. |
| 01 | 32 | MERGE | polish | "of envelope used" explains a figure that should not be repeated. | 12/400 | Remove with the tile. |
| 01 | 33 | CUT | weakens | The foot restates spend and envelope a fourth time at 2.5:1. | "$3,412.60 / $4,800"; $4,800 homes 13, 15, 18, 20, 33 | Remove. |
| 01 | 34 | KEEP | – | Label for the member count. | 11/400 caps | – |
| 01 | 35 | KEEP | – | The member count at figure size. | 26/600 | – |
| 01 | 36 | KEEP | – | "+2 since July" is a change that appears nowhere else. | 12/400, contrast 4.8 | – |
| 01 | 37 | CUT | polish | "key holders in Market Risk" re-defines a word the table title and page title already supply, at 2.5:1. | contrast 2.5, 11/400 | Remove. |
| 01 | 38 | FIX | polish | The chart title carries the total a third time and runs five facts together in caps. | "Spend by day · 1 to 28 Aug · total $3,412.60"; $3,412.60 home 38; "28" homes 13, 38, 39 | "Spend by day" with the date range in the axis labels. |
| 01 | 39 | FIX | weakens | The chart has gradient bars, an axis starting at $60, odd ticks ($60/$130/$200), and a red dashed line with no label. | y labels "$200 $130 $60", 38 marks, 3 paints, 10 px axis text (JSON smallText) | Flat single-colour bars, baseline at $0 with ticks $0/$100/$200, 11 px axis text, a direct label on the line in grey (red is reserved for breached). |
| 01 | 40 | CUT | weakens | A 204-character how-to-read note (about 100 characters per line, over the 90 limit) explains what any bar chart shows. | 204 chars, w560, 12/400 | Remove; label the dashed line on the chart instead. |
| 01 | 41 | KEEP | – | The title of the model section, in the same caps style as other section titles. | 11/600 caps | – |
| 01 | 42 | CUT | weakens | A seven-slice donut with no labels, in seven hues including red, repeats the share column in the table beside it. | marks 7, labels 0; element 43 shares 58.2/21.4/9.1/5.2/3.1/2.0/1.0 | Element 43 survives; remove the donut. |
| 01 | 43 | FIX | polish | The table is 210 px inside a 360 px column and the rows are 38 px tall for two short cells. | box x992 w210 inside x848 w360; h298 for 7 rows | Take the full 360 px, rows about 28 px, and put a thin share bar in the Share cell. |
| 01 | 44 | CUT | polish | "Insights" heads four icons with nothing to say, sits closer to the table above (16) than to its icons (20). | 801 vs 785 bottom of 43; icons at y837 | Remove with the icons. |
| 01 | 45 | CUT | weakens | An unlabelled blue star with no text or action. | role graphic, labels 0, alt "", 40x40 | Remove. |
| 01 | 46 | CUT | weakens | An unlabelled amber chart icon, in a different colour and style from its neighbours. | labels 0, alt "" | Remove. |
| 01 | 47 | CUT | weakens | An unlabelled green pin. | labels 0, alt "" | Remove. |
| 01 | 48 | CUT | weakens | An unlabelled purple window icon; the four icons add three accent colours for no content. | labels 0, alt "" | Remove. |
| 01 | 49 | KEEP | – | Names the table and its period. | 11/600 caps | – |
| 01 | 50 | FIX | polish | The export link is in the red used for breached and sits 28 px short of the table's right edge. | #dc2626, 12/600, right edge 1176 vs table right 1204 | Ink or the brand blue, right-aligned to the table edge. |
| 01 | 51 | FIX | weakens | The table has a constant Currency column, a text "Normal" repeated four times where the glossary says no colour, and a width wider than the blocks above. | Currency values all "USD"; Status "Normal" on 4 rows; table w940 vs banner w912 | Drop Currency, leave Normal cells blank, keep the pills for Breached and Approaching, width 912. |
| 01 | 52 | ASK | weakens | A solid blue "Submit" button on a read-only report is the only filled shape on the page and has no visible subject. | 12/400 white on #366092, x264 y1240 | See question. |
| 01 | 53 | FIX | weakens | The footnote is 9 px at 1.9:1 on a grey tint, the least legible text on the page. | #b0b4ba on #f3f4f6, contrast 1.9, size 9 | 11 px, #6b7280, no tint, and a real link for "methodology". |
| 01 | G1 | KEEP | – | A tinted sidebar without borders or shadows separates navigation from content. | tinted, not bordered, radius 0 | – |
| 01 | G2 | FIX | polish | The banner states one status through five signals: tint, border, left bar, ▲ glyph and bold amber text. | bordered true, tinted true, bg #fffbeb; element 14 starts "▲" | Tint plus text in the same colour; drop the border and glyph. |
| 01 | G3 | KEEP | – | Label, figure, context and bar each add one thing once the restating foot (20) is removed. | members 16-20 | – |
| 01 | G4 | FIX | weakens | The tile ends with a flat line and a caption where the other tiles end, so tile bottoms do not line up. | foot at y404 here, y369 in G5-G7; all five boxes h158 | One structure for all tiles: label, figure, context, with the bar only where there is a bar. |
| 01 | G5 | FIX | polish | Tile height is set by G3's bar and foot, leaving about 45 px of empty box under this tile. | box h158, last text bottom y385 | Shrink tile row to the content height after the cuts. |
| 01 | G6 | MERGE | weakens | The whole tile repeats the first tile's percentage. | members 30-33; "71.1%" homes 14, 18, 20, 31 | G3 survives; remove G6. |
| 01 | G7 | KEEP | – | Label, count and change give a distinct fact. | members 34-37, 37 aside | – |

Earns its place: 1, 7, 8, 10, 16, 17, 21, 22, 23, 26, 27, 34, 35, 36, 41, 49
Cut first: 45, 46, 47, 48, 44, 42, 40, 15, 20, 33, 25, 24, 37, 29, 6, 11
Questions for the owner:
What does the bold "Risk" at the top of the sidebar (element 5) name, given that "Market Risk" is the page title?
Who is "Priya Nair" in the freshness note (element 4): the viewer or the last person to change the data?
What does "Submit" (element 52) submit on a read-only screen?
The banner says the envelope will be breached by 30 Aug, but a $121.88 daily average over 31 days gives about $3,778, under $4,800: which pace does the forecast use?
