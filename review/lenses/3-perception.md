# Lens 3 · Perception

After William Cleveland and Robert McGill (graphical perception: position on a common scale is judged most accurately, then length, then slope and angle, then area, then colour saturation, then hue), Jacques Bertin (*Semiology of Graphics*: the visual variables and which kinds of data each can carry), Colin Ware (*Information Visualization: Perception for Design*: preattentive features, and that only one of them pops at a time), the Gestalt school (proximity, similarity, alignment, enclosure, continuity), and Lisa Charlotte Muth's colour practice at Datawrapper.

This lens asks whether the eye can read what the screen encodes, and whether it reads the right thing first.

## Encoding

For every graphic, bar and badge:

1. **The judgement.** What must the reader judge: compare two values, see a trend, see a part of a whole, see a value against a threshold, find the largest? Write it.
2. **The channel.** What carries it: position, length, angle, area, colour lightness, hue, shape, text? Is it the most accurate channel available for that judgement (Cleveland and McGill)? A share in a pie (angle) where a bar (length) was possible is a FIX. A value in colour lightness where length was possible is a FIX. A threshold with no mark on the scale is a FIX.
3. **Data type and variable.** Quantities need an ordered channel (length, position, lightness); categories need a distinguishing one (hue, shape); order needs an ordered one. Hue standing for a quantity, or lightness standing for categories, is a FIX (Bertin).

## Attention

4. **What pops.** List every element that stands out preattentively: a saturated colour, the largest type, bold, an outlined box, motion. Ware: if more than one or two pop, nothing does. Say which one should, and which should be calmed.
5. **Colour meaning.** From the JSON `textColours` and the graphics' `paints`, list every hue on the screen with the meaning it carries. A hue with two meanings (red for breached and red for a link) is a FIX. Two hues with one meaning is a FIX. Grey is the resting state; anything else must mean something. Red and green together must also differ in lightness.
6. **Weight.** Bold, size and colour are all emphasis. Count how many emphasis devices are used on the screen. The important thing should be emphasised in one way, not three.

## Grouping

7. **Proximity.** Measure from the boxes: the gap inside a group should be smaller than the gap between groups. Where a label sits nearer the wrong figure, or two unrelated things touch, FIX with the spacing.
8. **Alignment.** Things that belong together share an edge. The JSON `distinctLeftEdges` counts left edges on the screen; read the render for edges that nearly match (a few pixels off reads as sloppy, not different).
9. **Similarity.** Things that look alike must be alike: two boxes drawn the same way must behave the same way; two links drawn differently must differ in kind. Bars in two tables drawn to different scales is a FIX.
10. **Enclosure.** Borders and tints make groups. A border around one thing makes it a group of one; a border inside a border is nesting the reader must untangle.

## Numbers as marks

11. Right-aligned in columns, consistent decimals, thousands separators, units once in the header not in every cell, the same precision for the same kind of number across the screen. Each departure is a FIX.
