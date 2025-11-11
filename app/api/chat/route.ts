import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack/server";
import { openai } from "@ai-sdk/openai";
import { streamText, UIMessage, convertToModelMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
//   throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
// }

export async function POST(req: Request) {
  const user = await stackServerApp.getUser();
  if (!user) {
    throw new Error("User ID is not set");
  }
  const userId = user.id;
  const {
    messages,
    id,
  }: {
    messages: UIMessage[];
    id: string;
  } = await req.json();
  // Get the SEO report from the database
  let seoReportData = null;
  let systemPrompt = `You are an AI assistant helping users understand their SEO report.

  Provide helpful insights and answer questions about the SEO data and recommendations.`;

  if (id) {
    try {
      const job = await prisma.scraping_jobs.findFirst({
        where: {
          id,
          userId,
        },
      });

      if (job?.seoReport) {
        seoReportData = JSON.parse(job?.seoReport);
        systemPrompt = `You are an AI assistant helping users understand their SEO report.

CURRENT SEO REPORT DATA:
${JSON.stringify(seoReportData, null, 2)}

You have access to comprehensive SEO analysis data for "${seoReportData.meta?.entity_name || "the entity"}" (${seoReportData.meta?.entity_type || "unknown type"}).

Key areas you can help with:
- Overall SEO performance and confidence score
- Source inventory and domain analysis
- Competitor analysis and market positioning
- Keyword analysis and search visibility
- Backlink profile and authority metrics
- Content gaps and optimization opportunities
- Actionable recommendations for improvement

Use the web_search tool to answer questions about the SEO report if it will help you answer the question.

Provide specific, data-driven insights based on the actual report data. When referencing metrics, use the exact numbers from the report. Be conversational but informative.`;
      } else {
        systemPrompt += `\n\nNote: SEO report with ID "${id}" was found but analysis may still be in progress or failed. Please check the report status.`;
      }
    } catch (error) {
      console.error("Error fetching SEO report:", error);
      systemPrompt += `\n\nNote: Unable to fetch SEO report data for ID "${id}". The report may not exist or you may not have access to it.`;
    }
  }

  const result = streamText({
    model: openai("gpt-4o"),
    messages: convertToModelMessages(messages),
    system: systemPrompt,
    tools: {
      web_search: openai.tools.webSearch({
        searchContextSize: "high",
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
