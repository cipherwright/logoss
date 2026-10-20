# Lens 6 · Craft

After Robert Bringhurst (*The Elements of Typographic Style*: a type scale, measure, rhythm, and restraint), Cole Nussbaumer Knaflic (*Storytelling with Data*: declutter, focus attention, one message), the Gestalt principles of proximity and alignment, Lisa Charlotte Muth on colour, and the owner's own test: the screen should look neither cluttered nor empty.

This lens is about whether the screen is well made: whether it holds together, where the eye rests, and whether anything looks wrong even if it is right.

## Type

1. **The scale.** From the JSON `typeStyles`, count the size/weight combinations. A screen needs about four: a figure, a heading, body, a caption. More than six is a FIX (name which to merge). Do the sizes map to importance, so that the largest thing is the most important?
2. **Measure and small text.** Lines of text longer than about 90 characters are hard to read; text under 11 px (JSON `smallText`) is hard to see; text below 4.5:1 contrast, or 3:1 when large (JSON `lowContrast`), fails. Each one is a FIX with the element number. Grey on grey for footnotes is the usual fault.
3. **Case and weight.** Uppercase for short labels only; bold for one level only; italics rarely. Mixed conventions for the same kind of label across the screen is a FIX.

## Space

4. **Rhythm.** Measure the vertical gaps between groups from the boxes. They should come from a small set of values (one spacing scale). Gaps that are all different read as careless even when nothing is wrong. Report the distinct gap values you found.
5. **Alignment.** Edges that nearly line up are worse than edges that clearly differ. From the boxes, list pairs of elements within 6 px of sharing a left or top edge that do not share it.
6. **Cluttered or empty.** The owner's rule. For each region of the screen (sidebar, header, tile row, each table, the rest): is it dense with things competing, or empty with nothing to rest on? Use the JSON `inkShare`, `emptyRightOfContent` and the boxes, then your eye. A table narrower than its neighbour with a hole beside it, a tile row with uneven widths, a right third with nothing: each is a FIX with the layout that would fill or calm it.
7. **Proximity.** The gap inside a group must be smaller than the gap between groups (also in lens 3; here judge it for looks: does the label sit with its figure?).

## Focus

8. **One message.** Knaflic: where does the eye go, and is that the message? Cover the screen and recall what you saw: the first three things. If the first thing recalled is not the answer to the screen's question, the emphasis is misplaced. Name what should recede (colour to grey, weight to regular, size down) and what should come forward.
9. **Declutter list.** List everything that could go without the message weakening: borders, backgrounds, icons, repeated labels, decorative marks, a second colour. This is a cut list in order of confidence.
10. **Colour.** Count the hues. Two accents plus grey and the ink is a working set; more is a FIX. Every accent must mean one thing (lens 3 checks meaning; here check count and restraint).

## Ugly

11. Say plainly where something looks wrong: a bar that is a slab, a figure in a colour that fights the page, a badge the wrong size for its text, a line that wraps to one word, a table that stretches to the page with lonely columns, a chart with too many labels, an icon that does not match the others. Element number, what is wrong, what it should be. The owner has said he cannot always tell; this is the lens that tells him.
