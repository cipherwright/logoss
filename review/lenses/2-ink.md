# Lens 2 · Ink

After Edward Tufte (*The Visual Display of Quantitative Information*; *Envisioning Information*; *Beautiful Evidence*): above all else show the data; maximise the data-ink ratio; erase non-data ink and redundant data-ink; avoid chartjunk; integrate words, numbers and pictures; small multiples; sparklines as word-sized graphics; the lie factor.

This lens is about the ink on the screen: what is drawn, what it carries, and what could be erased without loss.

## For every graphic (role graphic or sparkline in the JSON)

1. **Data ink.** List the marks that carry data (bars, lines, points, the cap line). Then list everything else: axes, gridlines, frames, backgrounds, legends, titles, decorations, shadows, gradients, 3D. For each non-data mark ask: erase it; is anything lost? Report what can go.
2. **Redundant data ink.** Count how many times one value is encoded in the graphic and its surroundings: bar length, bar colour, a number beside it, a badge, a percentage. More than two encodings of one value is redundancy; name which survive. (The JSON's `numbersWithSeveralHomes` is a start; the eye finds the rest.)
3. **Lie factor.** Does the visual size of the effect match the size in the data? Baselines not at zero on bars, areas standing for lengths, a truncated axis, a cap line placed by eye. State the ratio where you can measure it from the labels.
4. **Density.** How many values does the graphic show, in how much area? A graphic of three values that a sentence or three numbers would show better is a FIX (to numbers) or a CUT. A sparkline of a flat or near-flat series carries nothing; say so.
5. **Labels on the data.** Are values and series named where they are, or in a legend the eye has to travel to? A legend for one or two series is a FIX (label directly). A paragraph under a chart explaining how to read it is a sign the chart does not read; FIX the chart, CUT the paragraph.
6. **Small multiples.** Where several charts share a design and differ in one variable, are they drawn alike, same scale, same size, in a row? Where one chart tries to hold what should be several, say so.
7. **Chartjunk.** Gradients, shadows, 3D, rounded bar tops that change the value, heavy gridlines, moiré, decorative icons, illustrations, colour fills on areas that carry no data. Each is a FIX (erase) with its element number.

## For every table

Tables are ink too. Rules, borders, zebra stripes, bold headers, repeated units in every cell, columns with one value in every row, a bar beside a number it repeats: each is non-data ink unless it does a job (a rule that separates groups does; a rule between every row usually does not).

## For the screen

- **Ink share.** The JSON gives `inkShare` (percent of the content area covered by elements) and `emptyRightOfContent`. Neither is a verdict on its own; use them to say where ink is dense without carrying data and where space is empty without being rest.
- **The data-ink ledger.** End with two lists: marks that carry data the reader uses, and marks that could be erased. The second list, with element numbers, is your cut list.
