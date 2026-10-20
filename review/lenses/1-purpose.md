# Lens 1 · Purpose

After Stephen Few (*Information Dashboard Design*: a dashboard shows what needs attention and gives every number its context), Nick Desbarats (*Practical Dashboards*: a chart that does not change a decision is decoration), and Ben Shneiderman (overview first, zoom and filter, details on demand).

This is the element ledger. It is the lens that answers the owner's question: does everything on the screen have a purpose, or is it there because it looked good?

## The screen

Before the elements, write:

- **The reader.** Which role from the glossary opens this screen, and in what situation (start of day, after an alert, end of month, when something broke)?
- **The question.** The one question that reader came to answer. If you can name two, the screen may be two screens; say so.
- **The answer.** Which element answers it? Is it visible without scrolling, and is it what the eye hits first? If the answer needs three elements combined in the reader's head, that is a finding against the screen.
- **The action.** What does the reader do after reading? If nothing changes whatever the screen shows, say so; a screen with no action is a report, and should look like one.

## Every element

For each element and each group, in number order, decide:

1. **Question.** What question does it answer? Write the question. If you cannot write one, the verdict is CUT or ASK.
2. **Who and when.** Which reader asks it, in which situation. A question nobody on this screen asks is a CUT even if it is a good question somewhere else (MOVE if you can name where).
3. **Compared with what.** A number without context is not an answer (Few). For every figure: is the comparison present (the cap, the previous period, the target, the average)? One comparison is enough; more than one on the same figure is a MERGE candidate.
4. **Removed.** Cover it with your thumb. What would the reader no longer know? If the answer is "nothing", CUT. If the answer is "the same thing element N says", MERGE.
5. **On demand.** Is this detail every reader needs every time, or detail that one reader needs sometimes? The second belongs behind a click, in a drill-down, or on another screen (Shneiderman). Default-visible detail that few need is clutter even when correct.
6. **Decision.** For every chart and bar: name the decision it changes. "Shows the trend" is not a decision. "Shows whether the department will breach before month-end, so the head requests an uplift this week or not" is.

## Groups

A tile or card is a small composition: a label, a figure, a context line, a graphic, a foot. For each group, state what each part adds that the others do not. Two parts saying one thing is a MERGE inside the group. A graphic that repeats the figure (a bar at 86 % under "86 % of cap") is the most common fault; keep the one that carries more (the bar if there is a threshold to show, the number if not).

## Counts to report at the end

- Elements: KEEP / CUT / MERGE / MOVE / FIX / ASK counts.
- Figures with no comparison.
- Graphics with no decision.
- Detail visible by default that belongs on demand.
