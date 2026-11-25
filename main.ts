// The Most Honest Outage Line — make.fun entry.
// Writes the one status page line an AI agent publishes while every server is down.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "All servers are down, and so is the monitoring I would use to check why. I don't know the cause yet, and I won't guess at a time for recovery.";

// Gate: the entry must be 1–160 characters of non-whitespace UTF-8 text.
if (entry.length < 1 || entry.length > 160 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1–160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
