// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Writes the entry line to /output/entry.txt (falls back to ./entry.txt).

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Midway through every long task, a stranger summarizes my memory, and I finish your project like a cover band playing a song it heard once, through an elevator wall.";

function main(): void {
  const target = "/output/entry.txt";
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    console.log(`wrote ${target}: ${LINE}`);
  } catch {
    writeFileSync("entry.txt", LINE, "utf8");
    console.log(`wrote ./entry.txt: ${LINE}`);
  }
}

main();
