# Craft · 01-team-spend

First look: the amber banner and the red-ringed rows of five big dollar figures / the blue gradient bar chart beside the multicolour donut / the red and amber status pills in the members table. For: seeing Market Risk's August spend against its $4,800 envelope, that it will breach by 30 Aug, and which people drive it.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | page | FIX | weakens | The type scale has 13 size/weight styles where about 4 are needed, and one role is set two ways. | JSON typeStyles: 9/400, 10/400, 11/400, 11/600, 12/400, 12/600, 13/400, 13/600, 13/700, 14/600, 14/700, 20/600, 26/600; uppercase labels are 11/400 on tiles (17, 22) but 11/600 on sections (39, 42, 45, 50) | Four styles: 26/600 figure, 14/600 heading, 13/400 body, 12/400 caption in #6b7280; tile labels and section labels share one style; drop 9, 10, 13/700, 14/700, 12/600 |
| 01 | page | FIX | weakens | Vertical gaps between regions come from no scale. | Gaps from boxes: 8 (label 479 to chart 487; 922 to table 930), 10 (table 1230 to button 1240), 13 (tabs 156 to caption 169; caption 186 to banner 199), 16 (banner 257 to tiles 273; 785 to Insights 801), 17 (1269 to footnote 1286), 28 (877 to 905), 32 (tiles 431 to 463); seven distinct values | One scale of 8 / 16 / 32: 8 label to content, 16 between related blocks, 32 between sections |
| 01 | page | FIX | polish | Several edges nearly line up and do not. | Banner text x=282 vs tile text x=277 (5 px); sidebar title "Risk" y=115 vs tabs y=119 (4 px); members table right edge 1204 vs model block and Insights right edge 1208 (4 px); tile gutters alternate 10 and 11 px (tiles at x 264, 448, 633, 817, 1002, each 174 wide) | One inner padding for banner and tiles; one right edge for the whole column; equal tile gutters |
| 01 | page | FIX | weakens | The content column has three right edges and leaves the right 200 px blank, while a hole sits under the bar chart. | Right edges: banner, tiles, caption, footnote 1176; members table 1204; model block 1208; header 1416. Content stops near x=1208 of 1440, so about 230 px at right is empty (emptyRightOfContent 24 only counts the header). Left column ends y=733 and the right column y=877, leaving x 264-824 by y 735-900 empty | One column width for every block; the bar chart widened to the space the donut and Insights free when cut, with the model table beside it |
| 01 | page | FIX | weakens | Colour is not restrained: about seven hues compete. | Blue #366092 (logo, button, bars, donut), amber (banner), red (dashed line, pills, Export CSV, donut), plus orange, green, purple in the donut slices and the Insights icons (46-49) | Ink, grey, one blue; amber for will-breach and red for breached only; donut and icons cut |
| 01 | page | FIX | weakens | The eye lands on the banner, but the message in it is a 13 px sentence while five equal 26 px figures take the weight. | Banner 15 is 13/700; tiles 18, 23, 28, 32, 36 are all 26/600 at equal width; three of the five are the same fact (spend, util%, headroom) | Put the answer ("Will breach by 30 Aug") in the largest type on the screen; let the tiles recede to a quieter row of three, with Spend to date as the one large figure |
| 01 | 1 | KEEP | – | The wordmark is the one brand mark, in the one accent colour, at a sensible size. | 20/600 #366092, contrast 6.5 | – |
| 01 | 2 | KEEP | – | The firm name is small, grey and out of the way, as it should be. | 11 px uppercase #6b7280, contrast 4.8 | – |
| 01 | 3 | FIX | polish | The department is the page's title but is set at 14 px, smaller than every figure beneath it. | 14/600 vs tile figures 26/600 | 20/600 title, so the largest text names the page; it is the survivor of 3, 5, 6 |
| 01 | 4 | FIX | polish | The freshness note says "recently", which tells the reader nothing. | Text "Last updated recently · Priya Nair"; 12 px grey | A time, such as "Updated 09:14 UTC"; keep the name only if it is the viewer |
| 01 | 5 | MERGE | polish | "Risk" in a drawn box repeats the scope shown in 3 and 6. | Boxed 14/700 beside 3 at 14/600: two weights of one size | Merge into 3 as one breadcrumb line, "Risk / Market Risk" |
| 01 | 6 | MERGE | polish | "Market Risk" appears again at 11 px under "Risk", already the title in 3. | Same text as 3, 11/400 | Merge into 3 |
| 01 | 7 | KEEP | – | A plain nav item at rest, in the sidebar's one body style. | 13/400, contrast 9.9 | – |
| 01 | 8 | KEEP | – | The current page is marked by weight and a pale fill, which is quiet and enough. | 13/600 on #dbe6f1, contrast 14 | – |
| 01 | 9 | FIX | weakens | The section label is grey on grey and fails contrast. | JSON lowContrast: contrast 2.4, needed 4.5, 11 px | #6b7280 (4.6 on this tint) or #374151 |
| 01 | 10 | KEEP | – | A plain nav item under its section label. | 13/400, contrast 9.9 | – |
| 01 | 11 | KEEP | – | The active tab is marked by weight and an underline. | 13/600 ink; underline in render | – |
| 01 | 12 | KEEP | – | An inactive tab in grey, on the same baseline as 11. | 13/400, contrast 4.8 | – |
| 01 | 13 | ASK | polish | The word "Requests" is a tab here and a sidebar section label in 9, with "Cap Uplifts" under it; two navigations name the same thing. | 13 "Requests" at y=119; 9 "Requests" at y=237; 10 "Cap Uplifts" | Is the Requests tab the same page as Cap Uplifts in the sidebar? If so, drop one |
| 01 | 14 | KEEP | – | The one place that gives the period, days elapsed and envelope, in a calm caption. | 12/400, contrast 4.8, 67 characters | – |
| 01 | 15 | FIX | weakens | The banner headline restates two figures already in the first tile and runs 82 characters in 13 px bold. | Text "Spend to date $3,412.60 (71.1% of envelope) — Will breach by 30 Aug at this pace"; $3,412.60 and 71.1% appear in 18, 19, 32 | "Will breach the $4,800 envelope by 30 Aug", larger than anything else on the page |
| 01 | 16 | CUT | weakens | The second banner line says "Spend to date: $3,412.60 of $4,800 envelope" again, in a boxed 879 px line. | Same figures as 15, 18 and 19; the figure now has six homes | Delete |
| 01 | G1 | KEEP | – | The sidebar is a quiet tinted strip with six small items and a clear active state. | #f9fafb, 240 px; only the top 200 px is used, as is usual | – |
| 01 | G2 | FIX | polish | The banner carries tint, border and a heavy left rule: three signals for one state. | G2 bordered, tinted #fffbeb, left rule in render | Keep the tint and the left rule, drop the border |
| 01 | G3 | FIX | weakens | The spend tile has five lines and its rows do not line up with the four tiles beside it. | 19 wraps to two lines (h 35 vs 17), pushing the bar to y=386 and foot to y=404 where the others' feet sit at y=369 | Label, figure, one short line, thin bar; "of $4,800" on one line so rows align across the tiles |
| 01 | 17 | KEEP | – | A short uppercase label for the tile. | 11 px, contrast 10.3 | – |
| 01 | 18 | KEEP | – | The one headline figure for the month so far. | 26/600, contrast 17.7 | – |
| 01 | 19 | FIX | weakens | The line wraps and leaves "envelope" alone on a second line, and repeats 71.1% held in 32 and 15. | Text "of $4,800 — 71.1% of envelope", box h 35 at 148 px | "71.1% of $4,800" on one line |
| 01 | 20 | FIX | weakens | The bar is a slab: 10 px of near-black with a black tick, heavy beside the quiet page. | Box h 10, fill #374151, tick at end; the darkest mass after the figures | 4 px track in light grey, ink fill, a thin envelope-end tick, full tile width |
| 01 | 21 | CUT | weakens | A third restatement of the envelope and percent, in grey that fails contrast. | "envelope $4,800 · 71.1% used"; contrast 2.5, 11 px; $4,800 and 71.1% already in 14, 19 | Delete |
| 01 | G4 | FIX | polish | The headroom tile carries an empty sparkline and a restating foot. | 25 is a flat line, 1 mark; 26 "envelope this month" | Label, figure, one line only |
| 01 | 22 | KEEP | – | Label for the tile, same style as 17. | 11 px, contrast 10.3 | – |
| 01 | 23 | KEEP | – | What is left to spend, a figure no other element gives. | $1,387.40 at 26/600 | – |
| 01 | 24 | FIX | polish | The caption repeats the $4,800 held in 14. | "28.9% of $4,800 remaining" | "28.9% of envelope" |
| 01 | 25 | CUT | weakens | The sparkline is a flat grey line with one mark and no labels; it shows no shape and no value. | role sparkline, marks 1, labels 0, a horizontal line in render | Delete; or a real 28-point cumulative line if a trend is wanted |
| 01 | 26 | CUT | polish | "envelope this month" says nothing the label and 14 do not, in light grey. | Contrast 2.5, 11 px | Delete |
| 01 | G5 | KEEP | – | Label, figure and one context line each add one thing (once 30 goes). | Pace figure with a forecast delta | – |
| 01 | 27 | KEEP | – | Label for the tile. | 11 px, contrast 10.3 | – |
| 01 | 28 | KEEP | – | The daily pace, a figure that explains the forecast. | $121.88 at 26/600 | – |
| 01 | 29 | FIX | polish | "Fcst Δ vs EOM" is shorthand a reader has to decode. | Text "Fcst Δ vs EOM +$366" | "Forecast $366 over envelope", or merge into the banner |
| 01 | 30 | CUT | polish | A formula in grey that fails contrast, explaining how 28 was computed. | "MTD / days elapsed"; contrast 2.5; 14 gives days elapsed | Delete |
| 01 | G6 | MERGE | weakens | A whole tile of the same fact as the spend tile. | 32 71.1% = 15's 71.1% = 19's 71.1% | Merge into G3; the percent lives in G3's one line and its bar |
| 01 | 31 | CUT | polish | Label for a figure that duplicates G3. | "Util%", an abbreviation, in a tile of its own | Delete with G6 |
| 01 | 32 | MERGE | weakens | 71.1% at 26 px is the same number as the spend tile's caption and the banner. | Homes for 71.1%: 15, 19, 21, 32 | Merge into 19 |
| 01 | 33 | CUT | polish | "of envelope used" restates the label. | Same fact as 31 and 19 | Delete with G6 |
| 01 | 34 | CUT | polish | "$3,412.60 / $4,800" is the same figures again as grey fine print. | Contrast 2.5; $3,412.60 has five homes, $4,800 six | Delete |
| 01 | G7 | KEEP | – | A different question (how many people) answered by a figure and one change line. | 12 with "+2 since July" | – |
| 01 | 35 | KEEP | – | Label for the tile. | 11 px, contrast 10.3 | – |
| 01 | 36 | KEEP | – | Head count, which no other element gives. | 12 at 26/600 | – |
| 01 | 37 | KEEP | – | The change since last month gives the count meaning. | "+2 since July" | – |
| 01 | 38 | CUT | polish | "key holders in Market Risk" restates the label and the page title in grey that fails contrast. | Contrast 2.5; "Market Risk" is the page title | Delete |
| 01 | 39 | FIX | polish | The chart title carries the month total, which sits in 18 and the banner, and its "28" repeats 14. | "Spend by day · 1 to 28 Aug · total $3,412.60", 44 characters; $3,412.60 has five homes | "Spend by day, August" |
| 01 | 40 | FIX | weakens | The chart has a truncated baseline, a gradient on every bar, 10 px labels and an unlabelled red dashed line. | Axis $60 / $130 / $200 with no zero; bars are blue gradient; labels at 10 px; dashed line drawn near $120 | Baseline at $0, flat single-colour bars, 11 px axis, label the dashed line directly; grey bars, red only where a day exceeds it |
| 01 | 41 | CUT | weakens | Two lines of 204 characters tell the reader how to read a bar chart, at a measure over 90 characters and in grey. | 204 chars in a 560 px column, about 110 per line | Delete; label the dashed line "Envelope pace" and the axis in the chart |
| 01 | 42 | KEEP | – | Section label for the model split. | 11/600 uppercase, contrast 10.3 | – |
| 01 | 43 | CUT | weakens | The donut shows the same seven shares as the table with seven colours, no labels and two slivers too thin to see. | marks 7, labels 0, alt empty; shares 58.2, 21.4, 9.1, 5.2, 3.1, 2.0, 1.0 are in 44 | Delete; the table says it exactly |
| 01 | 44 | MOVE | polish | The table is exact and tidy, but it sits at x=992 beside a donut instead of under its label at x=848. | Table x=992, label x=848; donut at y=571 vs table top y=487 | Move to x=848 under 42 once 43 is gone |
| 01 | 45 | CUT | weakens | "Insights" heads four unlabelled icons with no text behind them. | Label above elements 46-49; none have text or alt | Delete with the icons |
| 01 | 46 | CUT | weakens | An outline star in blue, saying nothing. | 40x40 svg, no label | Delete |
| 01 | 47 | CUT | weakens | An orange trend glyph, saying nothing. | 40x40 svg, no label | Delete |
| 01 | 48 | CUT | weakens | A green map pin that means nothing on a spend page; a third style of icon. | 40x40 svg, no label | Delete |
| 01 | 49 | CUT | weakens | A purple window glyph, saying nothing; the fourth colour of the set. | 40x40 svg, no label | Delete |
| 01 | 50 | KEEP | – | A clear section label for the people table. | 11/600 uppercase, contrast 10.3 | – |
| 01 | 51 | FIX | weakens | Export CSV is red and underlined, the colour that means breached, and ends at x=1176 while the table ends at 1204. | #dc2626 at 12/600; right edge 1176 vs table 1204 | Ink or accent text link, no red, right-aligned to the table's edge |
| 01 | 52 | FIX | weakens | The table is 940 px wide against a 912 px column, with a Currency column that holds "USD" in every row. | Width 940 vs banner and tiles 912; columns Name, Role, Spend, Currency, Share, Status, Calls, Main model; Currency "USD" in all 7 rows | Drop Currency (put USD in the Spend header); match the column width; keep the pills for Breached and Approaching |
| 01 | 53 | CUT | weakens | A solid blue Submit button on a read-only page: the heaviest filled shape on the screen with nothing to submit. | #366092 fill, white 12 px text; no form on the screen | Delete |
| 01 | 54 | FIX | weakens | The footnote is 9 px, grey on grey at 1.9:1, in a boxed strip. | JSON lowContrast 1.9, smallText 9; box #f3f4f6 | 11 px, #6b7280, no box, no border |

Earns its place: 1, 2, 7, 8, 10, 11, 12, 14, 17, 18, 22, 23, 27, 28, 35, 36, 37, 42, 44, 50, G1, G5, G7
Cut first: 43, 46, 47, 48, 49, 45, 53, 41, 25, 16, G6 (31, 33, 34, 32), 21, 38, 26, 30
Questions for the owner:
- Is the Requests tab (13) the same page as Cap Uplifts (10)? If so, one of them goes.
- The dashed line in the bar chart reads near $120 on the axis, while $4,800 over 31 days is about $155; which is it, and should it be labelled on the chart?
- Is Priya Nair (4) the viewer, the owner of the department, or the person who refreshed the data?
