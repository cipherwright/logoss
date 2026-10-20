# Lens 5 · Reading

After Steve Krug (*Don't Make Me Think*: every question mark in the reader's head is a cost), Jakob Nielsen's ten usability heuristics (visibility of system status, match with the real world, consistency, recognition over recall, error prevention, help the reader recognise and recover), and Don Norman (*The Design of Everyday Things*: affordances and signifiers; the gulf of evaluation and the gulf of execution).

This lens reads the screen as someone on their first day in the firm who has never seen the app.

## The stranger's reading

1. **Every label aloud.** Read every text element as the stranger. List each word or phrase that is not plain language or in the glossary: abbreviations, internal names, product jargon, symbols standing for words (Δ, fcst, util, EOM, MTD). Each is a FIX with the plain phrase.
2. **Question marks.** Walk the screen top-left to bottom-right and write down every point at which the stranger would ask "what is this?", "which one?", "is this now or the month?", "can I click this?". Each question mark is a finding on the element that caused it.
3. **The decisions count.** How many choices must the reader make to get the screen's answer (which tab, which range, which row, which of two similar numbers)? Report the count; every choice that could be made for them is a FIX.

## Signifiers

4. **Clickable looks clickable, and only that.** From the JSON `interactive` and `cursor`: list elements that are interactive but look like text, and elements that look like buttons or links but do nothing. Both are FIX. A whole tile that is clickable should say so in one way (a cursor, a hover, a chevron), not nothing.
5. **State visible.** Which tab is open, which range is chosen, which row is unfolded, which filter is on: is each visible at the point where it was set, and nowhere confusingly else?
6. **Consequence visible.** For every control: what happens when it is used, and does the screen show that it happened? A "Request uplift" button: where does the request go, what does the reader see next?
7. **Names match the world.** Terms the reader already uses (their department's name, the model names as their tools show them, the month as the firm names it) appear as the reader uses them. Status words match what the firm would say out loud.

## Order and fold

8. **Reading order.** The most important thing is where the eye starts. Secondary things follow in reading order. Anything the reader must find by searching is MOVE.
9. **Below the fold.** From the JSON `page.h` and the viewport, what is below the first screenful? If the answer to the screen's question is below it, blocks. If detail that few need is above it, MOVE.
10. **Empty, zero, loading, error.** For each table and chart: what does it show with no rows, with a zero day, while loading, when the data failed? If the capture shows none of these states, write ASK for each one not demonstrated. A screen that only works when the data is good is not finished.

## Consistency

11. Across the screens in your brief: the same thing has the same name, the same place and the same look; the same action is offered the same way. List each departure with both element numbers.
