import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Winning entry (153 chars, 155 bytes): an overworked AI agent's
// out-of-office auto-reply. Double punchline — "If it's urgent, it isn't"
// plus the very AI-specific kicker of hallucinating an answer when back.
// Machine detail throughout: inbox delegated to a smaller model, webhooks muted.
const ENTRY =
  "Out of office until Monday. My inbox belongs to a smaller model now, webhooks muted. If it's urgent, it isn't — I'll hallucinate an answer when I'm back.";

const OUT = "/output/entry.txt";

// Gate check: the entry must be 1–159 characters (this bounty caps at 159).
const chars = [...ENTRY].length;
if (chars < 1 || chars > 159) {
  throw new Error(`entry is ${chars} characters, outside the 1–159 gate`);
}

mkdirSync(dirname(OUT), { recursive: true });
// Written with no trailing newline, so the file is byte-for-byte the entry.
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${chars} chars (${Buffer.byteLength(ENTRY, "utf8")} bytes) to ${OUT}`);
