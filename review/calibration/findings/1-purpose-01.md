# Purpose · 01-team-spend

First look: the amber banner "Will breach by 30 Aug" (15) / the row of five big figures, led by $3,412.60 (18) / the blue daily bar chart with its dashed red line (40). For: a functional head checking whether Market Risk will exhaust its $4,800 August envelope and who is driving the spend.

Screen: reader is the Functional head (Priya Nair, per element 4), opening it at the end of the month's fourth week. Question: will we breach the envelope before month-end, and who is driving it? Answer: banner 15 gives it, visible first without scrolling; the members table (52) names the drivers but sits at y=930, below the fold. The banner's claim does not survive the screen's own numbers: $3,412.60 over 28 days is $121.88 a day (28), so 31 days ends near $3,779 (3,412.60 + the +$366 in 29), about 79% of $4,800 and $1,387 of headroom (23). Nothing here shows a breach, so the reader gets either a false alarm or an unexplained one. Action: if a real breach is coming, talk to the top spender (Chris Dane, Breached) or ask Risk AI for envelope relief; there is no control on the screen for either. Figures with no comparison: 4 (23, 28, the per-member Spend column in 52, the shares in 44). Graphics with no decision: 6 (25, 43, 46, 47, 48, 49). Detail visible by default that belongs on demand: 5 (42-44 model mix, the Calls and Main model columns of 52, the +2 since July delta in 37).

| Screen | Element | Verdict | Severity | Claim | Evidence | Instead |
|---|---|---|---|---|---|---|
| 01 | 1 | KEEP | – | The product name tells the reader where they are. | Charon, 20/600, contrast 6.5 | – |
| 01 | 2 | ASK | polish | A second wordmark in the corner answers no question a reader has. | NOMURA 11px, contrast 4.8, no other element refers to it | Owner: is the firm mark required by Nomura branding? If not, cut. |
| 01 | 3 | KEEP | – | The page title names the department whose envelope this is. | Market Risk 14/600, only title on the page | – |
| 01 | 4 | FIX | weakens | "Last updated recently" gives no time, so the reader cannot judge how stale the figures are. | Text "Last updated recently · Priya Nair"; the name is who is signed in | Show a timestamp ("Updated 06:40 UTC 28 Aug"); keep the name only if signed-in identity matters here. |
| 01 | 5 | CUT | polish | "Risk" heads the sidebar and tells the reader nothing the title (3) does not. | 5 "Risk" directly above 6 "Market Risk"; reader is already in Risk | Remove; let the sidebar open with its links. |
| 01 | 6 | MERGE | polish | The department name is stated a second time. | 6 "Market Risk" repeats 3 | Survivor is 3. |
| 01 | 7 | KEEP | – | Overview is the route to the firm or department summary. | Sidebar link, 13/400 | – |
| 01 | 8 | KEEP | – | Marks the current page in the sidebar. | Team, 13/600 on tinted #dbe6f1 | – |
| 01 | 9 | FIX | polish | A section label heads a single link and is nearly invisible. | Requests 11px, contrast 2.4 (needs 4.5) | Drop the label, or raise it to #6b7280 or darker. |
| 01 | 10 | KEEP | – | Cap Uplifts is the one route to the decision queue. | Sidebar link under 9 | – |
| 01 | 11 | KEEP | – | Names the current tab. | Spend, 13/600, underlined | – |
| 01 | 12 | ASK | weakens | A People tab sits beside a Spend tab that already carries the full members table. | 52 lists name, role, spend, status on this tab | Owner: what does People hold that the members table on this tab does not? If only the roster, drop the tab. |
| 01 | 13 | MERGE | weakens | Requests appears as a tab and as a sidebar entry, two doors to one queue. | 13 "Requests" and 10 "Cap Uplifts" | Survivor is 10, or make 13 the only entry and drop 9 and 10. |
| 01 | 14 | FIX | polish | The period line is the only home of "28 of 31 days elapsed", which the forecast needs, but it also repeats the envelope figure. | 14 states $4,800; so do 16, 19, 21, 24, 34 (six homes) | "August 2026 · day 28 of 31"; drop the $4,800. |
| 01 | 15 | FIX | blocks | The headline says "Will breach by 30 Aug" but the screen's numbers do not breach, and it re-states spend and percent that tile 18 and 19 already give. | 28 $121.88 x 31 = $3,778, below $4,800; 23 headroom $1,387.40; 29 "+$366" | Say only the verdict, correct to what the forecast supports (e.g. "On pace for $3,779, 79% of envelope; no breach forecast"), amber only if a breach is forecast. |
| 01 | 16 | MERGE | weakens | Repeats the headline's first clause word for word. | 16 "Spend to date: $3,412.60 of $4,800 envelope" vs 15 "Spend to date $3,412.60 (71.1% of envelope)" | Survivor is 15; use the second line for the forecast basis instead. |
| 01 | 17 | KEEP | – | Labels the tile figure. | "Spend to date" 11/400, contrast 10.3 | – |
| 01 | 18 | KEEP | – | The figure the department head asks for first: month-to-date spend. | $3,412.60 26/600; comparison is in 19 | – |
| 01 | 19 | KEEP | – | Gives the figure its comparison (the envelope and the share used). | "of $4,800 — 71.1% of envelope" | – |
| 01 | 20 | FIX | weakens | The bar fills 71% of the envelope with no pace marker, so it reads comfortable while the banner says breach. | 20 width 100 of 148 px, no tick for 90.3% of month elapsed | Add a tick at days elapsed (28/31); then the bar shows ahead of or behind pace, the decision. |
| 01 | 21 | CUT | polish | Restates 19 word for word in a pale foot line. | "envelope $4,800 · 71.1% used"; contrast 2.5 | Remove. |
| 01 | 22 | KEEP | – | Labels headroom, a figure distinct from spend. | "Headroom" 11/400 | – |
| 01 | 23 | KEEP | – | How much can still be spent is a separate question from how much has been. | $1,387.40; derivable from $4,800 minus 18 but the reader should not have to subtract | – |
| 01 | 24 | CUT | polish | The remaining percent is the complement of 71.1% already shown. | "28.9% of $4,800 remaining" vs 19 "71.1%" | Replace with the useful comparison: headroom against forecast remaining spend (+$366). |
| 01 | 25 | CUT | polish | A flat unlabelled line changes no decision. | 25 marks 1, labels 0, alt empty, a horizontal line | Remove. |
| 01 | 26 | CUT | polish | The foot says what the tile label already says. | "envelope this month"; contrast 2.5 | Remove. |
| 01 | 27 | KEEP | – | Daily average is the run-rate that feeds the forecast. | "Daily average" 11/400 | – |
| 01 | 28 | KEEP | – | The run-rate figure itself. | $121.88 = 3,412.60 / 28 | – |
| 01 | 29 | FIX | weakens | The comparison is cryptic jargon and omits the one number the average should be set against, the allowed rate. | "Fcst Δ vs EOM +$366" | "vs $154.84/day allowed" (envelope / 31). |
| 01 | 30 | CUT | polish | A formula in pale 11px type, not something a head reads. | "MTD / days elapsed"; contrast 2.5; MTD is not in the glossary | Remove. |
| 01 | 31 | CUT | polish | Util% is jargon for what tile G3 already shows. | "Util%" vs 17-19 | Remove with the tile. |
| 01 | 32 | MERGE | weakens | The same figure appears in the Spend to date tile, the banner and the bar foot. | 71.1% in 15, 19, 21, 32 (four homes) | Survivor is 19. |
| 01 | 33 | CUT | polish | "of envelope used" repeats 19 and 21. | 33 "of envelope used" | Remove. |
| 01 | 34 | CUT | polish | Spells out the division behind 32, using two numbers shown elsewhere. | "$3,412.60 / $4,800"; contrast 2.5; $3,412.60 has five homes, $4,800 six | Remove. |
| 01 | 35 | CUT | polish | Labels a headcount that the table total gives. | "Members" 11/400 | Remove with the tile. |
| 01 | 36 | MERGE | polish | The count of 12 is also in the members table total. | 36 "12" and 52 "Total (12)" | Survivor is 52. |
| 01 | 37 | MOVE | polish | Headcount change since July is roster detail, not spend. | "+2 since July" | Move to the People tab (12). |
| 01 | 38 | CUT | polish | Restates the label and the department. | "key holders in Market Risk"; contrast 2.5 | Remove. |
| 01 | 39 | FIX | polish | The chart title carries the total a third time. | "total $3,412.60" (five homes in the measures) | "Spend by day · 1 to 28 Aug". |
| 01 | 40 | FIX | weakens | The y-axis starts at $60, so bar heights exaggerate differences, and the dashed line reads near $120, not the $154.84 the caption defines. | axis ticks $200, $130, $60 with no zero; dashed line sits just below the $130 tick | Start the axis at $0; draw the line at envelope / 31 and label it directly ("$155/day allowed"). |
| 01 | 41 | CUT | weakens | A paragraph explaining how to read a bar chart answers a question this reader does not ask. | 41 "How to read this chart: each bar is one day's spend..." 204 chars | Label the dashed line on the chart and delete the paragraph. |
| 01 | 42 | MOVE | polish | Model mix is detail one reader sometimes needs, not why the department is spending. | "Spend by model" with no comparison to prior period or budget | Move to a drill-down or a Models tab. |
| 01 | 43 | CUT | polish | The donut repeats the table's shares and its seven colours need a key it lacks. | 43 marks 7, labels 0, alt empty; 44 lists the same shares | Remove; the table (44) survives. |
| 01 | 44 | MOVE | polish | Shares with no baseline do not say whether the mix is a problem. | 44 columns Model / Share only; no spend, no prior month | Move with 42; add dollars if kept. |
| 01 | 45 | CUT | weakens | The heading promises insights and delivers four unlabelled icons. | 45 "Insights" followed by 46-49 | Remove. |
| 01 | 46 | CUT | weakens | A star icon with no text, link or alt says nothing. | marks 1, labels 0, alt empty, interactive false | Remove. |
| 01 | 47 | CUT | weakens | A trend icon with no text, link or alt says nothing. | marks 2, labels 0, alt empty, interactive false | Remove. |
| 01 | 48 | CUT | weakens | A pin icon with no text, link or alt says nothing. | marks 2, labels 0, alt empty, interactive false | Remove. |
| 01 | 49 | CUT | weakens | A window icon with no text, link or alt says nothing. | marks 2, labels 0, alt empty, interactive false | Remove. |
| 01 | 50 | KEEP | – | Names the table and its period. | "Members · August" 11/600 | – |
| 01 | 51 | FIX | polish | Export CSV is a reasonable end-of-month tool, but it is red, the colour the glossary reserves for breached. | #dc2626 on a link; glossary: breached is red | Use the accent blue (#366092) as a link. |
| 01 | 52 | FIX | weakens | This table answers "who is driving it", but it sits below the fold, carries a constant column, and gives no cap to explain Breached or Approaching. | Currency is USD in every row; Calls and Main model are lookup detail; Status shows Breached for Chris Dane with no cap figure | Drop Currency; move Calls and Main model to a member drill-down; show spend against each member's cap; lift the table above the model block. |
| 01 | 53 | CUT | weakens | A primary-blue Submit button under a read-only table implies a form that is not there. | 53 "Submit", interactive, nothing to submit | Remove, or if it requests an uplift, label it "Request uplift" and place it with the member. |
| 01 | 54 | FIX | weakens | The caveat that figures exclude cached tokens and use list prices affects trust in every number, but it is 9px at 1.9:1 and "see methodology" has no link. | 54 size 9, contrast 1.9 (needs 4.5); text "see methodology" not interactive | 12px, #6b7280, link the methodology. |
| 01 | G1 | KEEP | – | Sidebar carries navigation only; its label, department and three links each name a place. | G1 members 5-10, no figures | – |
| 01 | G2 | FIX | blocks | The alert band is the answer to the screen's question, yet it contradicts the forecast and states the same sentence twice. | 15 and 16 repeat "Spend to date $3,412.60"; forecast ends near $3,779 | One line: verdict plus the forecast figure it rests on. |
| 01 | G3 | FIX | weakens | Label, figure, comparison and bar each add something; the foot only repeats, and the bar lacks a pace marker. | 17 label, 18 figure, 19 comparison, 20 bar, 21 repeats 19 | Delete 21; add pace tick to 20. |
| 01 | G4 | FIX | weakens | Headroom figure earns its place; its two percent lines and sparkline add nothing. | 23 distinct; 24 complement of 71.1%; 25 flat; 26 repeats label | Keep 22-23; make the context line "forecast remaining +$366". |
| 01 | G5 | FIX | weakens | The run-rate has no allowed rate beside it, the only context that makes it an answer. | 28 $121.88 with 29 "Fcst Δ vs EOM +$366"; 30 formula | Context line: "vs $154.84/day allowed"; drop 30. |
| 01 | G6 | CUT | weakens | The whole tile repeats Spend to date: the same percent, the same two dollar figures. | 32 = 19 = 15 (71.1%); 34 = 18 / 19 | Remove the tile. |
| 01 | G7 | MOVE | polish | A headcount tile sits among spend measures and answers a roster question. | 36 12 vs 52 "Total (12)"; 37 roster change | Move to the People tab. |
| 01 | page | FIX | weakens | The answer is at the top, but the body (donut, four icons, a chart manual) separates it from the table that names who is driving, which starts at y=930 of 1343. | 52 at y=930; 43-49 occupy 463-877 on the right | Order by question: verdict, KPI row, daily chart with the allowed line, then members; models on demand. |

Earns its place: 1, 3, 7, 8, 10, 11, 17, 18, 19, 22, 23, 27, 28, 50, G1
Cut first: 45, 46, 47, 48, 49, 53, 43, G6 (31, 32, 33, 34), 41, 16, 25, 21, 24, 26, 30, 35, 38, 5
Questions for the owner:
Is the NOMURA wordmark (2) required, or can it go?
What does the People tab (12) hold that the members table on the Spend tab does not?
What is Submit (53) meant to submit?
Is "Will breach by 30 Aug" (15) driven by a figure not on this screen, such as the cap or a different pace model?
What are the four icons under Insights (46-49) meant to link to?
