import { runAnalysis } from "@/actions/runAnalysis";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Match your enum path
export const dynamic = "force-dynamic"; // ensures dynamic serverless route

export async function POST(req: NextRequest) {
  let job: { id: string; originalPrompt: string; status: string } | null = null;
  try {
    const data = await req.json();
    console.log("📩 Webhook received data:", data);

    // Extract job ID from query params
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      console.error("❌ No job ID found in webhook data:", data);
      return NextResponse.json({ error: "No job ID found" }, { status: 400 });
    }

    // Step 1: Find the job by ID
    job = await prisma.scraping_jobs.findUnique({
      where: {
        id: jobId as string,
      },
    });

    if (!job) {
      console.error(`❌ No job found for job ID: ${jobId}`);
      return NextResponse.json(
        { error: `No job found for job ID: ${jobId}` },
        { status: 404 },
      );
    }

    // Step 2: Save raw scraping data
    // Convert the received data into an array of raw results for consistent processing
    const rawResults = Array.isArray(data) ? data : [data];
    await prisma.scraping_jobs.update({
      where: {
        id: job.id,
      },
      data: {
        result: rawResults,
        status: "ANALYSING",
        error: undefined,
      },
    });

    console.log("✅ Raw scraping data saved for job:", job.id);

    // Step 3: Schedule AI analysis
    console.log(
      `🧠 Analysis scheduled for job ${job.id}, webhook returning immediately`,
    );

    await runAnalysis(job.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🔥 Webhook error:", error);

    if (job) {
      try {
        await prisma.scraping_jobs.update({
          where: {
            id: job.id,
          },
          data: {
            status: "FAILED",
            error:
              error instanceof Error
                ? error.message
                : "Unknown error during analysis",
          },
        });
        console.log(`🚫 Job ${job.id} marked as failed due to analysis error`);
      } catch (failError) {
        console.error("⚠️ Failed to update job status to failed:", failError);
      }
    }

    if (error instanceof Error && error.message.includes("schema")) {
      console.error("Schema validation failed - AI response incomplete");
      console.error("Error details:", error.message);
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
