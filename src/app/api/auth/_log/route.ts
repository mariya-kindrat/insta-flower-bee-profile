import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { success: false, message: "Logging not configured" },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Logging not configured" },
    { status: 200 }
  );
}