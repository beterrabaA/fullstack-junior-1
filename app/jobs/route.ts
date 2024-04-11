import { NextResponse } from "next/server";
import { jobs } from "@/jobs";

export async function GET() {
  return NextResponse.json(jobs);
}
