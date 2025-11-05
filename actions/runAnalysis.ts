"use node";

import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { buildAnalysisPrompt, systemPrompt } from "@/prompts/gpt";
import { seoReportSchema } from "../lib/seo-schema";
import { prisma } from "@/lib/prisma";

/**
 * Run AI analysis on existing scraping data for a job.
 * This runs as a background action and can take as long as needed.
 */
export const runAnalysis = async (jobId: string) => {
  console.log("Starting AI analysis for job:", jobId);

  try {
    // Get the job and its raw data
    // const job = await ctx.runQuery(api.scrapingJobs.getJobById, {
    //   jobId: args.jobId,
    // });
    const job = await prisma.scraping_jobs.findFirst({
      where: {
        id: jobId,
      },
    });

    if (!job) {
      console.error(`No job found for job ID: ${jobId}`);
      return null;
    }

    if (!job.result) {
      console.error(`No scraping results found for job: ${jobId}`);
      await prisma.scraping_jobs.update({
        where: {
          id: jobId,
        },
        data: {
          status: "FAILED",
          error: "No scraping results available for analysis",
        },
      });
      return null;
    }

    await prisma.scraping_jobs.update({
      where: {
        id: jobId,
      },
      data: {
        status: "ANALYSING",
      },
    });

    // Step 1: Generate comprehensive SEO report using structured output
    const scrapingData = Array.isArray(job.result) ? job.result : [job.result];
    const analysisPrompt = buildAnalysisPrompt(scrapingData);

    console.log("Generating SEO report for job:", jobId);

    // Save prompt into the database for debugging
    await prisma.scraping_jobs.update({
      where: {
        id: jobId,
      },
      data: {
        analysisPrompt: analysisPrompt,
      },
    });

    console.log("Prompt saved for job:", jobId);

    const { object: seoReport } = await generateObject({
      model: openai("gpt-4o"),
      system: systemPrompt(),
      prompt: analysisPrompt,
      schema: seoReportSchema,
    });

    // Step 2: Save the SEO report to the database
    await prisma.scraping_jobs.update({
      where: { id: jobId },
      data: {
        seoReport: JSON.stringify(seoReport),
      },
    });

    console.log("SEO report saved for job:", jobId);

    // Step 3: Complete the job (mark as completed)
    await prisma.scraping_jobs.update({
      where: { id: jobId },
      data: {
        status: "COMPLETED",
      },
    });

    console.log(`Job ${jobId} analysis completed successfully`);

    return null;
  } catch (error) {
    console.error("Analysis error for job:", jobId, error);

    // Set job status to failed when analysis fails
    try {
      await prisma.scraping_jobs.update({
        where: {
          id: jobId,
        },
        data: {
          status: "FAILED",
          error:
            error instanceof Error
              ? error.message
              : "Unknown error occurred during analysis",
        },
      });
      console.log(`Job ${jobId} marked as failed due to analysis error`);
    } catch (failError) {
      console.error("Failed to update job status to failed:", failError);
    }

    // If it's a schema validation error, provide more specific feedback
    if (error instanceof Error && error.message.includes("schema")) {
      console.error("Schema validation failed - AI response incomplete");
      console.error("Error details:", error.message);
    }

    return null;
  }
};

/**
 * Retry analysis for a job that already has scraping data.
 * This is used for smart retries when analysis fails but scraping succeeded.
 */
export const retryAnalysisOnly = async (jobId: string) => {
  try {
    console.log("Retrying analysis only for job:", jobId);

    // Reset job status and clear previous analysis results

    await prisma.scraping_jobs.update({
      where: {
        id: jobId,
      },
      data: {
        status: "ANALYSING",
        error: null,
        completedAt: null,
        seoReport: null,
      },
    });

    return {
      ok: true,
      message: "Analysis retry started successfully",
    };
  } catch (error) {
    console.error("Failed to retry analysis:", error);

    // Mark job as failed
    await prisma.scraping_jobs.update({
      where: {
        id: jobId,
      },
      data: {
        status: "FAILED",
        error:
          error instanceof Error ? error.message : "Failed to retry analysis",
      },
    });
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "Failed to retry analysis",
    };
  }
};
