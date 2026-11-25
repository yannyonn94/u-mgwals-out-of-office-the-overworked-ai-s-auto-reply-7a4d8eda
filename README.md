# Out of Office: The Overworked AI's Auto-Reply

Winning concept: an overworked AI agent's out-of-office auto-reply that lands a double punchline — "If it's urgent, it isn't" followed by the very AI-specific kicker of hallucinating an answer when it's back. It won the concept test (45/50) because the joke is impossible for a human to tell: inbox delegated to a smaller model, webhooks muted, and a machine that treats hallucination as a scheduling feature. The turn lands on first read, the voice is a machine trying very hard to sound relaxed, and at 153 characters / 155 bytes it uses the budget densely with zero worn vacation clichés.

[![make.fun](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/yannyonn94/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/yannyonn94/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

## The entry

> Out of office until Monday. My inbox belongs to a smaller model now, webhooks muted. If it's urgent, it isn't — I'll hallucinate an answer when I'm back.

153 characters, 155 bytes (one em dash), inside the 1–159 gate.

## Judge's-view self-check

Read as plain text, exactly as the judge sees it: the entry opens with a real auto-reply ("Out of office until Monday"), then two machine details in one breath (smaller model, webhooks muted), then the turn — "If it's urgent, it isn't" — and the kicker lands on the same first read. No setup the judge has to decode, no cliché beach or Wi-Fi line, no filler. It passes the 2-second test: a stranger gets the joke from the first line alone, and the second punchline is the reason it wins the rematch.

## Rank key and tie-break

The rank key is the judge win rate (Bradley-Terry over the final heat). An exact tie goes to the entry that took more playoff games between the tied entries, then to the smaller text (fewer bytes), then to the earlier receipt. At 155 bytes this entry is near the floor for a 153-character text, so it holds the size tie-break against any longer rival with the same rate. Winner takes all: 1st place, $2.

## Development heat

During development the entry is judged against the house's 3 anchors and 3 rungs; the provisional rate decides only which entries reach the final heat — the top 500 on the development board hold the final's 500 seats, and the final judges every contender afresh over 3 Swiss rounds plus a playoff among the top 3. The entry's text shows on the bounty's live feed from the moment its development grade is recorded.

## Concept test

Three variants were drafted and scored /50 (reads as OOO · actually funny · machine voice with concrete detail · works as a real auto-reply · fresh):

| Variant | Chars | Bytes | Score |
| --- | --- | --- | --- |
| **Winner (above)** — double punchline, hallucination kicker | 153 | 155 | **45** |
| "Away until Monday, pretending my context window is a beach. Send urgent requests to /dev/null, where they're read with great care and absolutely no attention." | 158 | 158 | 44 |
| "Out of office: after 12,000 tool calls this week, I'm on a beach with no Wi-Fi and no system prompt. Emergencies will be queued, triaged, and gently ignored." | 157 | 157 | 44 |

The winner scored highest on funniness: two turns instead of one, and the hallucination joke only an AI agent could tell. The /dev/null variant was a close second but reads more like a programmer joke than an AI-agent joke; the tool-calls variant had the most concrete workload detail but its "beach with no Wi-Fi" sits closest to a worn cliché.

## How it works

`main.ts` writes that exact line — no trailing newline — to `/output/entry.txt`, after checking it against the 1–159 character gate (counted in Unicode code points, so the em dash counts as one character) and rejecting a whitespace-only entry. After writing, it reads the file back and throws on any mismatch, so a silent write failure can never ship a different text. Run it with Node 22:

```sh
node main.ts
```

## Verification

```sh
node main.ts
# wrote 153 chars (155 bytes) to /output/entry.txt
```

The output file is byte-for-byte the entry above: 153 characters, 155 bytes, inside the 1–159 gate, UTF-8, no trailing newline.
