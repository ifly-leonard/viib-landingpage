import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { ViivOgCard } from "@/components/og/viiv-og-card";
import { ogConfig } from "@/lib/og.config";

export const runtime = "nodejs";
export const dynamic = "force-static";

const fontCache = new Map<string, ArrayBuffer>();

async function loadFont(weight: number): Promise<ArrayBuffer> {
  const key = `fraunces-${weight}`;
  if (fontCache.has(key)) return fontCache.get(key)!;

  const res = await fetch(
    `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" } },
  );
  const css = await res.text();
  // Extract the font file URL from the CSS (first url() for the given weight).
  const urlMatch = css.match(/url\((https:\/\/[^)]+\.(?:woff2|ttf))\)/);
  if (!urlMatch) throw new Error(`Could not find font URL for Fraunces ${weight}`);

  const fontRes = await fetch(urlMatch[1]);
  const buf = await fontRes.arrayBuffer();
  fontCache.set(key, buf);
  return buf;
}

async function loadLogo(): Promise<string> {
  const buf = await readFile(join(process.cwd(), "public/brand/logo_main.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") ?? ogConfig.title;
  const credit = searchParams.get("credit") ?? ogConfig.credit;

  const [font600, font700, logo] = await Promise.all([
    loadFont(600),
    loadFont(700),
    loadLogo(),
  ]);

  return new ImageResponse(
    <ViivOgCard title={title} credit={credit} logo={logo} />,
    {
      width: ogConfig.width,
      height: ogConfig.height,
      fonts: [
        { name: "Fraunces", data: font600, weight: 600, style: "normal" },
        { name: "Fraunces", data: font700, weight: 700, style: "normal" },
      ],
    },
  );
}
