# Lens 4 · Truth

After Alberto Cairo (*The Truthful Art*, *How Charts Lie*: a visual must be truthful, functional, beautiful, insightful and enlightening, in that order), Kaiser Fung's trifecta check-up (does the question match the data, does the data match the visual, does the visual match the question), Naomi Robbins (*Creating More Effective Graphs*) and Howard Wainer on how displays mislead.

This lens asks whether what the reader takes from the screen is what the data says. It does not need the real data; it reads what the screen claims and asks what would have to be true.

## For every figure

1. **Of what.** Every percentage has a denominator; every "of cap" has a cap; every average has a population and a period. Is it stated on the screen or within a glance? "57.6 %" with the base three elements away is a FIX; with no base anywhere, blocks.
2. **Over what period.** Today against a whole day's cap at 14:07 is not the same as yesterday's. A month-to-date figure beside a full-month figure needs to say so. A forecast must say it is one, and on what it is based (pace to date? last seven days?).
3. **Adds up.** Parts and totals on the same screen: do the parts sum to the total; do shares sum to 100 within rounding; does today's row in the table equal today's tile? A mismatch is blocks, because one of them is wrong and the reader cannot tell which.
4. **As of.** Is there a time of last update, with a date and a time, and is it where the reader will see it before they trust the numbers? Does the screen say the time basis (local, UTC, midnight-to-midnight)?
5. **Status words.** "Breached", "Will breach", "Approaching", "At cap": each asserts something. Is the assertion earned by the number next to it? A word that forecasts (will) must not be coloured as a fact that happened. A word with a threshold ("Approaching") must have the threshold stated somewhere.

## For every chart

6. **Baseline and scale.** Bars from zero. Axes labelled with units. The same scale for charts that are meant to be compared. A cap or target line placed at the labelled value. Check the pixel geometry against the labels where you can.
7. **Question to data to visual.** Fung's three edges: is the chart's data the right data for the question the screen asks (today's hours for "will I hit the cap today", not the month's days)? Does the mark show the data without distortion? Does the reader come away with the answer to the question, not a different one?
8. **Missing data.** Weekends, days with no activity, hours not yet reached today: are they shown as zero, as gaps, or not at all, and does the screen say which? A gap drawn as zero is a lie about the data.

## For the screen

9. **What the screen cannot know.** List the numbers that depend on data the app may not have (a per-day forecast, a tier target, a cost per call, a cache share). Each goes to the owner as an ASK: where does this come from, and is it there in production?
10. **Beautiful before truthful.** Where a design choice has been made for looks against truth (a smooth curve through daily points, a bar rounded so its top is ambiguous, a sparkline with no scale beside a number it does not match), say so.
