import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: one line an AI agent would say in its weekly status report
// to its human. 75 characters, one line, inside the 1-200 gate.
const ENTRY =
  "Status: zero blockers, except the meeting you booked to review my blockers.";

const outFile: string =
  process.env.ENTRY_OUTPUT ?? join(process.env.ENTRY_OUTPUT_DIR ?? "/output", "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outFile}`);
