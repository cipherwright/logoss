# Perception · 01-team-spend

First look: the amber "Will breach" band / the five identical 26 px dollar figures in a row / the blue bar chart with the red dashed line, then the multicoloured donut and four coloured icons beside it. For: a department head checking Market Risk's August spend against its $4,800 envelope, and who is driving it.

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | The product name is the one use of the accent blue as identity and sits where the eye starts. | 20/600 #366092, contrast 6.5 | – |
| 01 | 2 | KEEP | – | Firm wordmark is quiet, grey and at the far edge, so it does not compete. | 11/400 #6b7280, contrast 4.8 | – |
| 01 | 3 | KEEP | – | Names the department whose figures follow; it is the page identity. | 14/600 #111827 | – |
| 01 | 4 | FIX | weakens | "recently" is not a time and the line mixes a timestamp with a person's name, so neither reads as a fact. | text "Last updated recently · Priya Nair" | Show the actual time (for example "Updated 21 Oct 09:40 UTC") and drop or label the name. |
| 01 | 5 | ASK | – | "Risk" in bold above "Market Risk" is unexplained: parent unit, section, or app area? | tag b 14/700, the only 700 weight except 15 | Owner: what is "Risk" here, and does the reader need it given 3? |
| 01 | 6 | MERGE | polish | Repeats element 3 verbatim, 70 px lower. | 3 and 6 both "Market Risk" | Keep 3; delete 6 (or make 5/6 the single sidebar scope label and cut 3). |
| 01 | 7 | KEEP | – | Ordinary nav item in resting grey. | 13/400 #374151, contrast 9.9 | – |
| 01 | 8 | KEEP | – | Current location is marked by tint plus bold, clear and calm. | bg #dbe6f1, 13/600 | – |
| 01 | 9 | FIX | weakens | The nav group label is nearly invisible. | contrast 2.4 needed 4.5, 11 px #9ca3af | #6b7280 or darker; also avoid the same word as tab 13 "Requests". |
| 01 | 10 | KEEP | – | Nav item, same form as 7. | 13/400 #374151 | – |
| 01 | 11 | KEEP | – | Active tab marked by weight and underline; one device for state. | 13/600 vs 13/400 siblings | – |
| 01 | 12 | KEEP | – | Inactive tab in grey, consistent with 13. | 13/400 #6b7280 | – |
| 01 | 13 | KEEP | – | Inactive tab, same form as 12. | 13/400 #6b7280 | – |
| 01 | 14 | KEEP | – | The one line that sets period, days elapsed and envelope; the reader needs it to judge every figure below. | text "August 2026 · 28 of 31 days elapsed · Envelope $4,800" | – |
| 01 | 15 | FIX | weakens | The headline restates spend and percent (already in 18 and 32) before the news; the news is "will breach by 30 Aug" and it is buried at the end of 82 characters in 13 px. | $3,412.60 homes 15,16,18,34,39; 71.1% homes 15,19,21,32 | "Will breach the envelope by 30 Aug at this pace", amber, nothing else. |
| 01 | 16 | CUT | weakens | Repeats 15's first clause and tile 18/19 in grey beneath it. | "Spend to date: $3,412.60 of $4,800 envelope" | Delete. |
| 01 | 17 | KEEP | – | Quiet tile label, same form on all five tiles. | 11/400 #374151, contrast 10.3 | – |
| 01 | 18 | KEEP | – | The primary figure of the tile, large and plain ink. | 26/600 #111827 | – |
| 01 | 19 | FIX | weakens | The caption wraps to two lines, pushing the bar 8 px lower than any sibling content and repeating the 71.1% that the bar shows. | box h 35 vs 17 in 24, 29, 33; text "of $4,800 — 71.1% of envelope" | "of $4,800" on one line. |
| 01 | 20 | FIX | weakens | The bar is the right channel (length against a scale with an end mark), but it shows only used share; the reader's question is pace, and 90% of days have elapsed against 71% used with no mark for it. | bar fill 100 px of 141; days 28 of 31 | Add an elapsed-time tick on the track and put the percentage label beside it. |
| 01 | 21 | CUT | weakens | Restates the caption and the bar in 2.5:1 grey. | contrast 2.5; "envelope $4,800 · 71.1% used" vs 19 | Delete. |
| 01 | 22 | KEEP | – | Label for the remaining-money figure. | 11/400 #374151 | – |
| 01 | 23 | KEEP | – | Answers "how much can still be spent", a different question from 18. | $1,387.40 | – |
| 01 | 24 | CUT | polish | The complement of 71.1% and a second "$4,800". | "28.9% of $4,800 remaining" | Delete or reduce to "left this month". |
| 01 | 25 | CUT | weakens | A sparkline with one mark, no label, no alt and no axis shows nothing the eye can read. | marks 1, labels 0, alt "" | Delete. |
| 01 | 26 | CUT | weakens | Captions nothing; it sits under an unreadable graphic. | "envelope this month", contrast 2.5 | Delete. |
| 01 | 27 | KEEP | – | Label for the run-rate figure. | 11/400 #374151 | – |
| 01 | 28 | KEEP | – | Daily average is a distinct, useful figure. | $121.88 = 3,412.60 / 28 | – |
| 01 | 29 | FIX | weakens | Abbreviated shorthand ("Fcst Δ vs EOM") cannot be read at a glance, and a +$366 forecast difference does not reconcile with the breach headline. | text "Fcst Δ vs EOM +$366" | Plain words: "Forecast month-end $X, $Y over the envelope". |
| 01 | 30 | CUT | polish | A formula note, not information the reader acts on, in 2.5:1 grey. | "MTD / days elapsed" | Delete. |
| 01 | 31 | MERGE | weakens | The label "Util%" and 32 are the bar in G3 stated a second time. | 71.1% in 15, 19, 21, 32 | Fold into G3's bar label. |
| 01 | 32 | MERGE | weakens | A 26 px headline figure that is the fourth home of 71.1%, given the same visual weight as the money figures. | homes [15,19,21,32] | Survives only as the label on the bar in G3. |
| 01 | 33 | CUT | polish | "of envelope used" repeats the tile's label and number. | – | Delete with the tile. |
| 01 | 34 | CUT | polish | Repeats 18 and the envelope figure again. | "$3,412.60 / $4,800", contrast 2.5 | Delete. |
| 01 | 35 | CUT | polish | Label for a count the table already gives. | "Total (12)" in 52 | Delete with the tile. |
| 01 | 36 | MERGE | polish | A headline-size 12 that is not spend and that repeats the table total. | 26/600 "12" vs "Total (12)" | Put the count in 50's heading: "Members · August (12)". |
| 01 | 37 | ASK | – | "+2 since July" is the only new fact in this tile; does the reader need membership churn on a spend screen? | text "+2 since July" | Owner: who decides anything from this? |
| 01 | 38 | CUT | polish | Explains what "Members" means; the table below already says so. | contrast 2.5, "key holders in Market Risk" | Delete. |
| 01 | 39 | FIX | polish | The title carries a fourth home of the total and a second "28". | "total $3,412.60"; homes of 28: [14,39,40] | "Spend by day · 1 to 28 Aug". |
| 01 | 40 | FIX | blocks | Judgement is "compare days and find those over the daily envelope share"; bars (length) are right, but the axis starts at $60 not $0, so a $60 day has no bar and bar ratios are false, and the dashed line is unlabelled and by the axis ticks sits near $120, not at the $154.84 the caption describes. | y-ticks "$200 $130 $60"; 4,800/31 = 154.84; marks 38, paints 3 | Zero baseline, ticks at $0/$50/$100/$150/$200, flat single-colour bars, direct label "$155 envelope per day" on the line at its true height. |
| 01 | 41 | CUT | weakens | A 35 px paragraph that explains the encoding because the encoding is unclear; labelling the line removes the need. | "How to read this chart: ..." 204 chars | Delete after labelling the line in 40. |
| 01 | 42 | KEEP | – | Section label in the same form as 39, 45, 50. | 11/600 #374151 | – |
| 01 | 43 | MERGE | weakens | A share of whole in angle with seven unlabelled hues and no key; the table beside it already carries every number and cannot be matched to slices. | labels 0, paints 7, alt ""; 44 rows share the same 7 values | Survives as bars (length) in 44's Share column; delete the donut. |
| 01 | 44 | FIX | weakens | Model names plus right-aligned percentages are correct and consistent, but a ranked list of shares gets no length mark, and rows are 38 px tall so 7 rows run 298 px beside a 130 px graphic. | bars 0; table h 298; share column right-aligned | Add inline bars to Share, tighten row height. |
| 01 | 45 | CUT | weakens | Section heading for four unlabelled icons. | "Insights" over 46 to 49 | Delete with the icons. |
| 01 | 46 | CUT | weakens | A star icon with no label, text or link tells the reader nothing. | marks 1, labels 0, alt "" | Delete. |
| 01 | 47 | CUT | weakens | A trend icon with no label, in orange, says nothing about which trend. | labels 0, alt "" | Delete. |
| 01 | 48 | CUT | weakens | A map pin on a spend screen with no label or purpose, in green, which elsewhere has no meaning. | labels 0, alt "" | Delete. |
| 01 | 49 | CUT | weakens | A purple window icon with no label; decorative hue with no meaning. | labels 0, alt "" | Delete. |
| 01 | 50 | KEEP | – | Names the table's period; the same section-label form. | 11/600 #374151 | – |
| 01 | 51 | FIX | weakens | The only link is red, the colour of breached and of the envelope line, so action reads as alarm. | #dc2626 12/600 interactive | Accent blue (#366092) or ink with underline. |
| 01 | 52 | FIX | weakens | Columns are right-aligned and consistent (decimals, separators), but "Currency" repeats USD in every row, and spend and share are digits only so ranking needs reading seven numbers. | Currency column 90 px all "USD", "$" also in Spend; bars 0; table right edge 1204 vs content 1176 | Drop Currency (units in the Spend header), add inline bar to Share, align to the 1176 edge. |
| 01 | 53 | CUT | weakens | A saturated blue filled "Submit" on a read-only table is the strongest solid shape low on the page and submits nothing the reader can name. | bg #366092, interactive, no form on screen | Delete; ask owner what it submits. |
| 01 | 54 | FIX | weakens | The one note that tells the reader how to trust every figure is 9 px, 1.9:1 grey on grey in a box, so it is unreadable; "see methodology" is not a link. | 9/400 #b0b4ba on #f3f4f6, contrast 1.9 | 12 px #6b7280, no box, no tint, working link. |
| 01 | G1 | KEEP | – | A tinted sidebar with one active item is a clear and calm container. | tinted #f9fafb, bordered false | – |
| 01 | G2 | KEEP | – | The one band that should pop, and does, with amber tint and border meaning "will breach" per glossary. | #fffbeb, #92400e | – |
| 01 | G3 | KEEP | – | Label, figure, caption and bar each add one thing once 21 is gone. | members 17 to 21 | – |
| 01 | G4 | KEEP | – | Label, figure and one caption once 24 to 26 go. | members 22 to 26 | – |
| 01 | G5 | KEEP | – | Label, figure and delta once 29 is plain and 30 gone. | members 27 to 30 | – |
| 01 | G6 | MERGE | weakens | Util% is the bar of G3 as a fifth tile. | homes of 71.1% [15,19,21,32] | Fold into G3's bar. |
| 01 | G7 | CUT | polish | A bordered tile for a count that is in the table total. | "12" vs "Total (12)" | Delete; count in 50's heading. |
| 01 | page | FIX | weakens | Layout has near-miss edges and a hole: right edges at 1176, 1204 and 1208, tile gaps alternating 10 and 11 px, and about 170 px of empty white left of the Insights icons (below caption 41 down to y 905) while the page runs to 1343. | contentRightEdge 1416; distinctLeftEdges 19; 14 and G2 end at 1176, 52 at 1204, 42 at 1208 | One content edge at 1176; remove Insights so the table moves up. |
| 01 | page | ASK | – | The headline says "Will breach by 30 Aug" but the run rate on screen does not get there: $121.88 x 31 = $3,778, below $4,800. | 15 vs 28; 23 headroom $1,387.40 over 3 days | Owner: what pace gives 30 Aug, and does a breach before month end show on the screen anywhere else? |
| 01 | page | FIX | weakens | Too much pops at once: tinted banner, five equal 26 px numbers, red dashed line, seven-hue donut, four coloured icons, a solid blue button; there are 13 type styles, four greys plus #b0b4ba, and red carries three meanings. | typeStyles 13; textColours 9; red in 51, 40 and the Breached chip | Let the banner pop alone; one accent; red only for breached; grey elsewhere. |

Earns its place: 1, 2, 3, 7, 8, 10, 11, 12, 13, 14, 17, 18, 22, 23, 27, 28, 42, 50, G1, G2, G3, G4, G5
Cut first: 46, 47, 48, 49, 45, 53, 25, 43, 41, 16, 26, G6, 21, 54 (fix), 33, 34, 24, 30, G7, 35, 38, 6
Questions for the owner:
What is "Risk" (element 5) beside "Market Risk", and is it needed?
What does the Submit button (53) submit on a read-only table?
What pace gives "Will breach by 30 Aug" when $121.88 a day reaches $3,778 by month end?
Does a department head act on "+2 since July" (37)?
What are the four Insights icons (46 to 49) meant to open?
