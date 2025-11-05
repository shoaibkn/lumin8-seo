"use server";

import { prisma } from "@/lib/prisma";
import { buildPerplexityPrompt } from "@/prompts/perplexity";
import { stackServerApp } from "@/stack/server";
import { retryAnalysisOnly } from "./runAnalysis";
import { scraping_jobs } from "@prisma/client";

if (!process.env.BRIGHTDATA_API_KEY) {
  throw new Error("BRIGHTDATA_API_KEY is not set");
}

const startScraping = async (
  prompt: string,
  existingJobId?: string,
  country: string = "IN",
) => {
  const serverUser = await stackServerApp.getUser();
  if (!serverUser) {
    return {
      ok: false,
      error: "User ID is required",
    };
  }
  const userId = serverUser.id;

  let job : scraping_jobs;
  let jobId: string;
  if (existingJobId) {
    // Check if we can use smart retry (analysis only)
    const retryInfo = await canUseSmartRetry(existingJobId, userId);
    if (retryInfo.canRetryAnalysisOnly) {
      console.log("Using smart retry - analysis only for job:", existingJobId);
      // Import the retry analysis action
      const result = await retryAnalysisOnly(existingJobId);
      if (result.ok) {
        return {
          ok: true,
          data: { snapshot_id: null }, // No new snapshot for analysis retry
          jobId: existingJobId,
          smartRetry: true,
        };
      } else {
        return {
          ok: false,
          error: result.error || "Smart retry failed",
        };
      }
    } else {
      console.log("Full retry required for job:", existingJobId);
      // Retry existing job - reset it to pending status
      // await convex.mutation(api.scrapingJobs.retryJob, {
      //   jobId: existingJobId as Id<"scrapingJobs">,
      // });
      await prisma.scraping_jobs.update({
        where: {
          id: existingJobId,
        },
        data: {
          status: "PENDING",
          error: undefined,
          completedAt: undefined,
          result: undefined,
          seoReport: undefined,
          snapshotId: undefined, // Clear old snapshotId so new one becomes the report ID
        },
      });
      jobId = existingJobId;
    }
  } else {
    // Create a new job record in the database
    job = await prisma.scraping_jobs.create({
      data: {
        userId: serverUser.id,
        originalPrompt: prompt,
        status: "PENDING",
      },
    });
    jobId = job.id;
  }

  // Include the job ID in the webhook URL as a query parameter
  const ENDPOINT = `https://app.vrdexports.in/api/webhook?jobId=${jobId}`;
  const encodedEndpoint = encodeURIComponent(ENDPOINT);

  const url = `https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_m7dhdot1vw9a7gc1n&endpoint=${encodedEndpoint}&format=json&uncompressed_webhook=true&include_errors=true`;

  const perplexityPrompt = buildPerplexityPrompt(prompt);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: [
          {
            url: "https://www.perplexity.ai",
            prompt: perplexityPrompt,
            country: country,
            index: 1,
          },
        ],
        custom_output_fields: [
          "url",
          "prompt",
          "answer_text",
          "sources",
          "citations",
          "timestamp",
          "input",
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      // Mark job as failed
      await prisma.scraping_jobs.update({
        where: {
          id: jobId,
        },
        data: {
          status: "FAILED",
          error: `HTTP ${response.status} ${response.statusText}${text ? `: ${text}` : ""}`,
        },
      });

      return {
        ok: false,
        error: `HTTP ${response.status} ${response.statusText}${text ? `: ${text}` : ""}`,
      };
    }

    const data = await response.json().catch(() => null);

    // Extract snapshot ID from the response and update the job
    if (data && data.snapshot_id) {
      await prisma.scraping_jobs.update({
        where: {
          id: jobId,
        },
        data: {
          snapshotId: data.snapshot_id,
        },
      });
    }
    return { ok: true, data, jobId };
  } catch (error) {
    console.error(error);
    // Mark job as failed
    await prisma.scraping_jobs.update({
      where: {
        id: jobId,
      },
      data: {
        status: "FAILED",
        error: error instanceof Error ? error.message : String(error),
      },
    });
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

export const canUseSmartRetry = async (jobId: string, userId: string) => {
  const job = await prisma.scraping_jobs.findFirst({
    where: {
      id: jobId,
    },
  });
  if (!job || job.userId !== userId) {
    return {
      canRetryAnalysisOnly: false,
      hasScrapingData: false,
      hasAnalysisPrompt: false,
    };
  }

  const hasScrapingData = !!job.result;
  const hasAnalysisPrompt = !!job.analysisPrompt;
  const canRetryAnalysisOnly = hasScrapingData && hasAnalysisPrompt;

  return {
    canRetryAnalysisOnly,
    hasScrapingData,
    hasAnalysisPrompt,
  };
};

export default startScraping;
