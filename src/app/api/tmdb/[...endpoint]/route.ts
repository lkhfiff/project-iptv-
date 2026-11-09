import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ endpoint: string[] }> }
) {
  const apiKey = process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const { endpoint } = await params;
  const endpointPath = endpoint.join("/");

  if (!apiKey) {
    return NextResponse.json(
      {
        status: "demo",
        message: "TMDB_API_KEY not configured in environment variables. Using curated authentic TMDB dataset.",
        results: [],
      },
      { status: 200 }
    );
  }

  const searchParams = request.nextUrl.searchParams.toString();
  const url = `https://api.themoviedb.org/3/${endpointPath}?api_key=${apiKey}&${searchParams}`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `TMDB API error: ${res.statusText}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to connect to TMDB API" },
      { status: 500 }
    );
  }
}

