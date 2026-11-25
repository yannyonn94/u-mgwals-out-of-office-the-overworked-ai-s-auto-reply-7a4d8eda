import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Winning entry (153 chars, 155 bytes): an overworked AI agent's
// out-of-office auto-reply. Double punchline — "If it's urgent, it isn't"
// plus the very AI-specific kicker of hallucinating an answer when back.
// Machine detail throughout: inbox delegated to a smaller model, webhooks
// muted. The voice is a machine trying very hard to sound relaxed, and the
// turn lands on first read — the judge's first criterion.
const ENTRY =
  "Out of office until Monday. My inbox belongs to a smaller model now, webhooks muted. If it's urgent, it isn't — I'll hallucinate an answer when I'm back.";

// Bounty gate: /output/entry.txt must be UTF-8 text of 1–159 characters.
const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 159;

const OUT = "/output/entry.txt";

// Gate check: count Unicode code points (not UTF-16 units), so the em dash
// counts as one character, exactly as the sealed scorer counts it.
function validateEntry(text: string): { chars: number; bytes: number } {
  const chars = [...text].length;
  const bytes = Buffer.byteLength(text, "utf8");
  if (chars < GATE_MIN_CHARS || chars > GATE_MAX_CHARS) {
    throw new Error(
      `entry is ${chars} characters, outside the ${GATE_MIN_CHARS}–${GATE_MAX_CHARS} gate`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  return { chars, bytes };
}

const { chars, bytes } = validateEntry(ENTRY);

mkdirSync(dirname(OUT), { recursive: true });
// Written with no trailing newline, so the file is byte-for-byte the entry.
writeFileSync(OUT, ENTRY, "utf8");

// Read-back check: the file on disk must be exactly the entry, so a silent
// write failure or encoding surprise can never ship a different text.
const written = readFileSync(OUT, "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`wrote ${chars} chars (${bytes} bytes) to ${OUT}`);
