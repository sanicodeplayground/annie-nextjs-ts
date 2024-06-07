import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: "url(https://anniebookerillustration.com/og-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
