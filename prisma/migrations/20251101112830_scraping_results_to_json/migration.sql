/*
  Warnings:

  - The `result` column on the `scraping_jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "scraping_jobs" DROP COLUMN "result",
ADD COLUMN     "result" JSONB;
