import { teardownsByDate } from "@/lib/teardowns";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(teardownsByDate);
}
