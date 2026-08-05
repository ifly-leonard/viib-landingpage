import { ImageResponse } from "next/og";

import { ShadcnRegistry3 } from "@/components/og/shadcn-registry-3";
import { ogConfig } from "@/lib/og.config";

export const runtime = "nodejs";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") ?? ogConfig.title;
  const credit = searchParams.get("credit") ?? ogConfig.credit;
  const ghost = searchParams.get("ghost") ?? ogConfig.ghost;

  return new ImageResponse(
    <ShadcnRegistry3 title={title} credit={credit} ghost={ghost} />,
    {
      width: ogConfig.width,
      height: ogConfig.height,
    },
  );
}
