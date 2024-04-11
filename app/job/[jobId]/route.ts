import { jobs } from "@/jobs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { jobId: string } }
) {
  try {
    const { jobId } = params;
    const selectedJob = jobs.find((e) => e.id === Number(jobId));

    if (selectedJob === undefined)
      return NextResponse.json({ message: "Job não encontrado." },{ status: 404 });

    return NextResponse.json(selectedJob);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" },{ status: 500 });
  }
}
