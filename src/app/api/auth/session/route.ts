import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { session: null, message: "No authentication configured" },
    { status: 200 }
  );
}