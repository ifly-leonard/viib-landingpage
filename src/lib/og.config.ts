import { readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Open Graph image configuration.
 *
 * The generator (`npm run og:build`) writes versioned PNGs into
 * `public/og/og-<buildstamp>.png`. Each run uses a fresh datetime stamp, so
 * new images get a brand-new filename — no caching issues on social platforms.
 *
 * `latestImage()` resolves the newest generated file from disk, so the site
 * metadata always points at the image that actually exists. Override the
 * stamp used by the generator via `OG_BUILD_STAMP` (or `off` to disable
 * versioning).
 */

function defaultBuildStamp(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
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

export const ogConfig = {
  /** Output directory for generated PNGs (relative to project root). */
  outputDir: "public/og",
  /** Basename prefix for generated files. */
  basename: "og",
  /** Whether the generator versioned filenames with a build stamp. */
  versioned: process.env.OG_BUILD_STAMP !== "off",
  /** Stamp used by the generator when run with no override. */
  defaultBuildStamp,
  /** Image dimensions — matches next/og defaults (1200×630). */
  width: 1200,
  height: 630,
  /** Shared copy used across the generated image variants. */
  title: "Earn the degree. Build the venture. Graduate with proof.",
  credit: "VIIV — Varman Institute of Venture Building",
  ghost: "VIIV",
  siteName: "VIIV",
} as const;

/**
 * Resolve the newest generated OG image path (e.g. `/og/og-20260806-043549.png`).
 * Returns the unversioned fallback (`/og/og.png`) if no versioned file exists
 * yet. Uses `process.cwd()` so it works both in the app and in scripts.
 */
export function latestOgImagePath(): string {
  // The og/ directory is scanned at build time to pick the newest image.
  // The turbopackIgnore comment scopes tracing to public/og only.
  const dir = join(/* turbopackIgnore: true */ process.cwd(), ogConfig.outputDir);
  let newestName: string | null = null;

  try {
    for (const name of readdirSync(dir)) {
      if (!name.startsWith(`${ogConfig.basename}-`) || !name.endsWith(".png")) continue;
      // Stamps are datetime-ordered, so lexical comparison finds the newest.
      if (!newestName || name > newestName) newestName = name;
    }
  } catch {
    // Directory may not exist yet — fall through.
  }

  const filename = newestName ?? `${ogConfig.basename}.png`;
  return `/${ogConfig.outputDir.replace(/^public/, "")}/${filename}`;
}
