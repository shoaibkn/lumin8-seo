-- CreateTable
CREATE TABLE "report_progress" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "jobId" TEXT NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL,
    "failed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "report_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "report_progress_jobId_key" ON "report_progress"("jobId");

-- CreateIndex
CREATE INDEX "report_progress_jobId_idx" ON "report_progress"("jobId");

-- AddForeignKey
ALTER TABLE "report_progress" ADD CONSTRAINT "report_progress_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "scraping_jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
