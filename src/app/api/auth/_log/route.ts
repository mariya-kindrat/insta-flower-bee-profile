import { NextResponse } from "next/server";

export const POST = async (): Promise<NextResponse> => {
  return NextResponse.json(
    { success: false, message: "Logging not configured" },
    { status: 200 }
  );
};

export const GET = async (): Promise<NextResponse> => {
  return NextResponse.json(
    { success: false, message: "Logging not configured" },
    { status: 200 }
  );
};