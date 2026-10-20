# Lens 7 · The set

After Stephen Few on fragmentation (a dashboard split across screens that should be one, or one screen that is three), Richard Saul Wurman (*Information Anxiety*: there are only five ways to organise information, and a product should pick one), and a lesson from this project's own history: faults that were properties of the set, not of any one element, passed every single-screen review.

This lens runs once, over every capture. Read all the PNGs first, in order, as a reader walking through the app, before any JSON.

## The walk

1. **The map.** Draw the app as the captures show it: which screens exist, how one reaches each (from the navigation, from a click, from a drill-down), and which reader each is for. A screen no path reaches, or two paths to the same thing under two names, is a finding.
2. **One reader, one walk.** For each role in the glossary, write the walk they would take on a normal morning and after an alert. Which screens do they touch, in what order, and does each screen give them what the previous one made them want? A screen that does not fit any walk is a CUT or MERGE candidate.
3. **The same thing twice.** List every headline number (a figure in a tile, a total in a table) and every screen and element where it appears. The JSON `numbersWithSeveralHomes` gives homes within a screen; you add homes across screens. More than two homes in the app for one figure is a MERGE; say which stays authoritative.
4. **Same concept, different word.** List the words the app uses for the same thing on different screens (cap / limit / ceiling; envelope / budget / allowance; breached / exceeded / over). Pick one and FIX the rest.
5. **Same look, different behaviour.** Components that are drawn the same on two screens but act differently (a tile that opens on one screen and not on another; a table whose rows unfold here and link there; a badge with a threshold here and none there). Each is a FIX, towards the better of the two.
6. **Same place, same thing.** Header, last-updated line, user name, navigation, footnotes: do they sit in the same place with the same text pattern on every screen? List departures by screen and element.

## The shape of the set

7. **Fragmentation.** Is there a question whose answer is spread across two screens that a reader would want on one? Is there a screen that holds two readers' questions that would each want their own?
8. **Organisation.** Wurman's five: location, alphabet, time, category, hierarchy. How are the screens organised, and is it the organisation the reader expects (by role? by time? by object?)? Is each list and table sorted by the thing the reader wants first?
9. **Depth.** How many clicks from the first screen to the most-needed detail for each role? Where a drill-down exists, does the thing it opens answer the question the click asked?
10. **Density across screens.** Put the screens side by side at the same scale: do they feel like one product (same rhythm of headings, same table widths, same tile sizes), or like pages by different hands?

## Output

Write `findings/7-set.md` in the contract's table format, with the screen column holding one number or a list ("02, 05") where the finding spans screens. Then the map from step 1 as a short list, and the walks from step 2.
