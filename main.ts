// Make the AI Judge Laugh: Developer Excuses — make.fun entry.
//
// Writes one funny single-line developer excuse to /output/entry.txt.
// Node standard library only; fully deterministic: the same line every run.
//
// The joke: the classic excuse "it passed all the tests" turned inside out —
// the tests were written by the same developer who wrote the bug, so passing
// them was never evidence of anything. A twist every developer recognises.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "It passed every test I wrote. That should've been the first red flag \u2014 I wrote the tests.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
