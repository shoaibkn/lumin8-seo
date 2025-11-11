-- CreateEnum
CREATE TYPE "RequestType" AS ENUM ('SMART', 'BASIC');

-- AlterTable
ALTER TABLE "scraping_jobs" ADD COLUMN     "requestType" "RequestType" NOT NULL DEFAULT 'BASIC';
