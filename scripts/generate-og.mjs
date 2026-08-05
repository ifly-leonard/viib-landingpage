#!/usr/bin/env node
/**
 * Generate versioned Open Graph images into `public/og/`.
 *
 * How it works:
 *  1. Boots the Next.js dev server on an ephemeral port (unless one is already
 *     running on NEXT_OG_DEV_PORT).
 *  2. Requests the `/og` route for every variant in `variants`.
 *  3. Writes the PNG to `public/og/<basename>-<stamp>.png` (versioned), or
 *     `public/og/<basename>.png` when versioning is off.
 *  4. Prints the produced paths so a pre-push hook can `git add` them.
 *
 * Env:
 *  - OG_BUILD_STAMP   Override the datetime stamp (or "off" to disable).
 *  - NEXT_OG_DEV_PORT Port of an already-running dev server (optional).
 */

import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Pick an ephemeral port unless one is supplied via env.
const port = Number(process.env.NEXT_OG_DEV_PORT) || 3100 + Math.floor(Math.random() * 900);

function defaultBuildStamp() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
    "-",
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds()),
  ].join("");
}

// Mirrors src/lib/og.config.ts so the CLI script and the app agree on paths.
const config = {
  buildStamp:
    process.env.OG_BUILD_STAMP === undefined || process.env.OG_BUILD_STAMP === ""
      ? defaultBuildStamp()
      : process.env.OG_BUILD_STAMP,
  outputDir: "public/og",
  basename: "og",
  versioned: process.env.OG_BUILD_STAMP !== "off",
};

const variants = [
  {
    name: "default",
    params: {
      title:
        "Earn the degree. Build the venture. Graduate with proof.",
      credit: "VIIV — Varman Institute of Venture Building",
      ghost: "VIIV",
    },
  },
];

async function fetchPng(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OG fetch failed (${res.status}): ${url}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function startDevServer() {
  const nextBin = resolve(root, "node_modules/.bin/next");
  const child = spawn(nextBin, ["dev", "-p", String(port)], {
    cwd: root,
    env: { ...process.env, NODE_ENV: "development" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const wrapper = { child, logs: "" };
  child.stdout?.on("data", (d) => (wrapper.logs += d.toString()));
  child.stderr?.on("data", (d) => (wrapper.logs += d.toString()));
  child.on("error", (err) => {
    wrapper.logs += `\n[spawn error] ${err.message}`;
    console.error(`[spawn error] ${err.message}`);
  });
  child.on("exit", (code, signal) => {
    wrapper.logs += `\n[child exited code=${code} signal=${signal}]`;
  });
  return wrapper;
}

function waitForReady(wrapper) {
  const child = wrapper.child;
  return new Promise((resolveReady, rejectReady) => {
    const deadline = Date.now() + 60_000;
    const timer = setInterval(() => {
      const logSnapshot = wrapper.logs;
      const exited = child.exitCode !== null || child.signalCode !== null;
      if (exited) {
        clearInterval(timer);
        rejectReady(
          new Error(
            `dev server exited early (code=${child.exitCode} signal=${child.signalCode} pid=${child.pid}).\n--- logs ---\n${logSnapshot}`,
          ),
        );
        return;
      }
      if (logSnapshot.includes("Ready")) {
        clearInterval(timer);
        resolveReady();
      } else if (Date.now() > deadline) {
        clearInterval(timer);
        rejectReady(new Error(`dev server not ready in 60s.\n--- logs ---\n${logSnapshot}`));
      }
    }, 300);
  });
}

async function main() {
  const outDir = resolve(root, config.outputDir);
  await mkdir(outDir, { recursive: true });

  const stamp = config.buildStamp;
  const versioned = config.versioned;

  // Reuse an existing dev server if the port env points at one.
  let server = null;
  let baseUrl = "";
  if (process.env.NEXT_OG_DEV_PORT) {
    baseUrl = `http://localhost:${process.env.NEXT_OG_DEV_PORT}`;
  } else {
    server = startDevServer();
    await waitForReady(server);
    baseUrl = `http://localhost:${port}`;
  }

  const produced = [];
  try {
    for (const variant of variants) {
      const query = new URLSearchParams(variant.params).toString();
      const url = `${baseUrl}/og?${query}`;
      const png = await fetchPng(url);
      const filename = versioned
        ? `${config.basename}-${stamp}.png`
        : `${config.basename}.png`;
      const filePath = resolve(outDir, filename);
      await writeFile(filePath, png);
      produced.push(filePath);
      console.log(`✓ ${filePath} (${png.length} bytes)`);
    }
  } finally {
    if (server) {
      server.child.kill("SIGTERM");
      // Give the child a moment to flush, then surface any logs on failure.
      await new Promise((r) => setTimeout(r, 500));
      if (server.logs) console.error(`[dev server output]\n${server.logs}`);
    }
  }

  console.log(`\nProduced ${produced.length} OG image(s):`);
  produced.forEach((p) => console.log(`  ${p}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
