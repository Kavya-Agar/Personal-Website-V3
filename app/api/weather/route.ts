import { NextResponse } from "next/server";
import https from "node:https";

export const dynamic = "force-dynamic";

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// Houston, TX — the "Weather" rail box on the front page is hardcoded to this city.
const LAT = 29.7604;
const LON = -95.3698;

export type Weather = { tempF: number; condition: string };

/**
 * Open-Meteo — free, keyless, no auth handshake needed (unlike Yahoo in
 * /api/market). Same httpsGet-over-https pattern as that route for consistency.
 */
function httpsGet(url: string): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { "User-Agent": UA }, agent: false }, (res) => {
      const buf: Buffer[] = [];
      res.on("data", (c: Buffer) => buf.push(c));
      res.on("end", () => resolve({ status: res.statusCode ?? 0, body: Buffer.concat(buf).toString() }));
    });
    req.on("error", reject);
    req.setTimeout(8000, () => {
      req.destroy();
      reject(new Error("timeout"));
    });
  });
}

// WMO weather codes (Open-Meteo's `weather_code`) mapped to a short newspaper-style phrase.
const CONDITIONS: Record<number, string> = {
  0: "clear",
  1: "mostly clear",
  2: "partly cloudy",
  3: "overcast",
  45: "foggy",
  48: "foggy",
  51: "drizzling",
  53: "drizzling",
  55: "drizzling",
  56: "freezing drizzle",
  57: "freezing drizzle",
  61: "light rain",
  63: "rain",
  65: "heavy rain",
  66: "freezing rain",
  67: "freezing rain",
  71: "light snow",
  73: "snow",
  75: "heavy snow",
  77: "snow grains",
  80: "rain showers",
  81: "rain showers",
  82: "heavy rain showers",
  85: "snow showers",
  86: "snow showers",
  95: "thunderstorms",
  96: "thunderstorms",
  99: "thunderstorms",
};

let cache: { weather: Weather; at: number } | null = null;
const TTL = 10 * 60_000; // conditions don't need to be fresher than 10 minutes

export async function GET() {
  if (cache && Date.now() - cache.at < TTL) return NextResponse.json(cache.weather);

  try {
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
      `&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America%2FChicago`;
    const { status, body } = await httpsGet(url);
    if (status !== 200) throw new Error(`open-meteo responded ${status}`);

    const json = JSON.parse(body);
    const tempF = json?.current?.temperature_2m;
    const code = json?.current?.weather_code;
    if (typeof tempF !== "number" || typeof code !== "number") throw new Error("unexpected response shape");

    const weather: Weather = { tempF: Math.round(tempF), condition: CONDITIONS[code] ?? "clear" };
    cache = { weather, at: Date.now() };
    return NextResponse.json(weather);
  } catch (err) {
    console.error("[weather] failed:", err instanceof Error ? err.message : err);
    // Don't cache a failure — a transient outage retries on the next request.
    return NextResponse.json(null, { status: 502 });
  }
}
