import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const headers = request.headers;
  const forwarded = headers.get("x-forwarded-for") || "";
  const ip = forwarded.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
  return NextResponse.json({
    ip,
    country: headers.get("x-vercel-ip-country") || headers.get("cf-ipcountry") || "unknown",
    region: headers.get("x-vercel-ip-country-region") || "unknown",
    city: headers.get("x-vercel-ip-city") || "unknown",
  });
}
