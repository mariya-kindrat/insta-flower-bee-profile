import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  return NextResponse.json(
    { session: null, message: "No authentication configured" },
    { status: 200 }
  );
};