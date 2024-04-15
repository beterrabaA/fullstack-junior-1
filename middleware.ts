import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_SECRET! !== "naranja-labs") {
    return NextResponse.json({ message: "Access denied!" });
  }
}

export const config = {
  matcher: "/job*",
};
