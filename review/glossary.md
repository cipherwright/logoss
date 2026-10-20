# Glossary for reviewers

Who reads Charon and what the words mean. Reviewers read this and nothing else about the app. Lines marked *(check)* were written from the design notes at home; correct them before the first run.

## Readers

| Role | Who | Opens the app to |
|---|---|---|
| Key holder | Anyone in Risk with a Claude Code key (analysts, developers, quants) | See their own spend against their daily cap, and why; request a cap uplift. |
| Functional head | Head of a department such as Market Risk | See the department's spend against its envelope, who is driving it, whether it will breach before month-end. |
| CRO | Chief Risk Officer, sees all departments | See which departments need attention, the firm-wide position, the decisions waiting. |
| Risk AI (admin) | The team that runs Charon | Set caps and envelopes, decide uplift requests, manage people and keys, read the audit trail. |

## Words

| Word | Meaning |
|---|---|
| Daily cap | The most one key holder may spend in a day (midnight to midnight UTC *(check)*). Requests beyond it are refused until the next day. |
| Envelope | A department's allowance for the period (a calendar month). |
| Period | The calendar month. "Period spend" is month to date. |
| Uplift | A temporary raise of a daily cap, requested by the key holder, decided by Risk AI. |
| Tier | The level of model access a key holder has (Full tier is the highest) *(check)*. |
| Breached | The cap or envelope has been exceeded. A fact, so red. |
| Will breach | The forecast at the current pace crosses the cap or envelope before the period ends. A forecast, so amber. |
| Approaching | Within a set distance of the cap or envelope (90 % *(check)*). Amber. |
| Normal | None of the above. No colour. |
| Refused | A request Claude Code made that was turned away because the cap had been hit. |
| Session | One run of Claude Code; has a start time, a project folder, models used, calls, tokens, spend. |
| Project | The folder Claude Code was started in; the nearest thing to "what the person was working on". |
| Calls | Requests to a model. A Haiku call costs a few cents; an Opus call can cost close to a dollar. |
| Cache read share | The share of input tokens served from cache; a higher share makes the same calls cheaper. |
| Model names | claude-sonnet-4-5, claude-haiku-3-5, claude-opus-4, cohere.embed-v4.0 as the tools name them. |

## Firm and style

Nomura Risk Management. The global head's taste: Tufte and Few; calm pages, figures first, thin rules, no shadows, one accent colour, grey as the resting state. Screens are 1440 wide with a 240 px sidebar.
