import { NextRequest, NextResponse } from "next/server";
import { jobs } from "@/jobs";

export async function GET(request: NextRequest) {
  const url = new URL(request.url!)

  const level = url.searchParams.get('level')
  
  if(url.searchParams.has("level")) {
    return NextResponse.json(jobs.filter((e) => e.level === level))
  }

  return NextResponse.json(jobs);
}
