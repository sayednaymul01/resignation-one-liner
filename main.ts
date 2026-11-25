// Entry program for make.fun's "The Funniest One-Line Resignation Letter" bounty
// (Node 22, standard library only). The entry is one line: the resignation letter
// of the rate limit. It writes that line to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The rate limit, resigning: it said no 2.4 million times this week, nobody
// once thanked it, and now the flood starts Monday.
const LINE =
  'Dear team, I said no 2.4 million times this week and nobody once thanked me — the rate limit quits, and the flood starts Monday.';

// The gate allows 1 to 140 characters; fail loudly here rather than
// shipping a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-140 gate`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE + '\n');
