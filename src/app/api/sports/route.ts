import { NextResponse } from "next/server";
import { CURATED_LIVE_MATCHES } from "@/data/sports";

export async function GET() {
  const apiKey = process.env.API_SPORTS_KEY;

  if (!apiKey) {
    return NextResponse.json({
      status: "demo",
      source: "curated",
      message: "API_SPORTS_KEY not set. Displaying curated live football and sports schedules.",
      matches: CURATED_LIVE_MATCHES,
    });
  }

  try {
    const res = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json({
        status: "fallback",
        matches: CURATED_LIVE_MATCHES,
      });
    }

    const data = await res.json();
    return NextResponse.json({
      status: "live",
      source: "api-sports",
      data,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fallback",
      matches: CURATED_LIVE_MATCHES,
    });
  }
}

