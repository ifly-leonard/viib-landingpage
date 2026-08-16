#!/usr/bin/env node
/**
 * Generate versioned Open Graph images into `public/og/`.
 *
 * How it works:
 *  1. If a Next.js dev server is already running (detected via the
 *     `.next/dev/lock` file, or an explicit NEXT_OG_DEV_PORT), reuse it.
 *  2. Otherwise boot a fresh dev server on a free port.
 *  3. Request the `/og` route for every variant and save the PNGs to
 *     `public/og/<basename>-<stamp>.png` (versioned), or
 *     `public/og/<basename>.png` when versioning is off.
 *  4. Print the produced paths so a pre-push hook can `git add` them.
 *
 * Env:
 *  - OG_BUILD_STAMP   Override the datetime stamp (or "off" to disable).
 *  - NEXT_OG_DEV_PORT Port of an already-running dev server (optional).
 */

import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:net";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

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
      title: "Build Your Startup While You Earn a UGC-Recognised Degree",
      subtitle: "3-Year UG Certification Program in Startup Mastery & AI Venture Building",
      highlight: "Up to 50% Scholarship Available for Eligible Students",
      credit: "VIIV — Varman Institute of Innovation and Venture Building",
      ghost: "VIIV",
    },
  },
];

/** Find a free TCP port by asking the OS for one. */
function findFreePort() {
  return new Promise((resolvePort, rejectPort) => {
    const srv = createServer();
    srv.unref();
    srv.on("error", rejectPort);
    srv.listen(0, "127.0.0.1", () => {
      const address = srv.address();
      const port = typeof address === "object" && address ? address.port : 0;
      srv.close(() => resolvePort(port));
    });
  });
}

/**
 * Read the Next.js dev-server lock file to find an already-running dev server.
 * Returns the port, or null if no lock exists / it can't be parsed.
 */
async function findRunningDevServerPort() {
  try {
    const lock = JSON.parse(
      await readFile(resolve(root, ".next/dev/lock"), "utf8"),
    );
    if (typeof lock?.port === "number" && lock.port > 0) return lock.port;
  } catch {
    // No lock file — no running dev server.
  }
  return null;
}

async function fetchPng(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OG fetch failed (${res.status}): ${url}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function startDevServer(port) {
  const nextBin = resolve(root, "node_modules/.bin/next");
  const child = spawn(nextBin, ["dev", "-p", String(port), "-H", "127.0.0.1"], {
    cwd: root,
    env: { ...process.env, NODE_ENV: "development" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const wrapper = { child, logs: "" };
  child.stdout?.on("data", (d) => (wrapper.logs += d.toString()));
  child.stderr?.on("data", (d) => (wrapper.logs += d.toString()));
  child.on("error", (err) => {
    wrapper.logs += `\n[spawn error] ${err.message}`;
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

  // 1. Prefer an explicit port, then a running dev server, then boot our own.
  let server = null;
  let baseUrl = "";

  const explicitPort = Number(process.env.NEXT_OG_DEV_PORT);
  const runningPort =
    Number.isInteger(explicitPort) && explicitPort > 0
      ? explicitPort
      : await findRunningDevServerPort();

  if (runningPort) {
    baseUrl = `http://127.0.0.1:${runningPort}`;
    console.log(`Reusing running dev server at ${baseUrl}`);
  } else {
    const port = await findFreePort();
    server = startDevServer(port);
    await waitForReady(server);
    baseUrl = `http://127.0.0.1:${port}`;
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
      await new Promise((r) => setTimeout(r, 300));
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
