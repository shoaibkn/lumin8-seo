"use client";

import React, { useEffect, useEffectEvent } from "react";
import { AlertTriangle, Loader2 } from "lucide-react";
import { SeoReport } from "@/lib/seo-schema";
import {
  SummaryHeader,
  SourceDistributionChart,
  CompetitorStrengthCard,
  AdditionalAnalysisGrid,
  KeyInsightsGrid,
  KeywordsAnalysisGrid,
  RecommendationsCard,
  KeyMetricsGrid,
  OverallScoreCard,
  AIChatUpsellCard,
} from "./ui";
import { useUser } from "@stackframe/stack";
import { scraping_jobs } from "@prisma/client";

// import AIChat from "@/components/AIChat";

interface ReportSummaryProps {
  params: Promise<{ id: string }>;
}

export default function ReportSummary({ params }: ReportSummaryProps) {
  const { id } = React.use(params);
  const user = useUser();

  const [job, setJob] = React.useState<scraping_jobs | undefined>(undefined);
  const [seoReport, setSeoReport] = React.useState<SeoReport | undefined>(
    undefined,
  );

  const fetchJob = useEffectEvent(async () => {
    if (!user) return;
    const response = await fetch(
      `/api/scraping-job?id=${id}&userId=${user.id}`,
    );
    const data = await response.json();
    setJob(data.data[0]);
    console.log(data.data[0].seoReport);
    setSeoReport(JSON.parse(data.data[0].seoReport));
  });

  useEffect(() => {
    if (id && user) {
      fetchJob();
    }
  }, [id, user]);

  useEffect(() => {
    console.log(job);
    console.log(seoReport);
  }, [job, seoReport]);

  // const seoReport = job?.seoReport as SeoReport | undefined;

  if (job === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading SEO report...</p>
        </div>
      </div>
    );
  }

  if (job === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Report Not Found</h2>
          <p className="text-muted-foreground">
            The requested SEO report could not be found.
          </p>
        </div>
      </div>
    );
  }

  if (!seoReport) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Report Not Found</h2>
          <p className="text-muted-foreground">
            The requested SEO report could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
      <SummaryHeader seoReport={seoReport} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 lg:space-y-12">
        <OverallScoreCard seoReport={seoReport} />
        <KeyMetricsGrid seoReport={seoReport} />

        {/*<Protect plan="pro" fallback={<AIChatUpsellCard />}>
          <AIChat seoReportId={id} />
        </Protect>*/}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <SourceDistributionChart seoReport={seoReport} />
          <CompetitorStrengthCard seoReport={seoReport} />
        </div>

        <RecommendationsCard seoReport={seoReport} />
        <KeywordsAnalysisGrid seoReport={seoReport} />
        <KeyInsightsGrid seoReport={seoReport} />
        <AdditionalAnalysisGrid seoReport={seoReport} />
      </div>
    </div>
  );
}
