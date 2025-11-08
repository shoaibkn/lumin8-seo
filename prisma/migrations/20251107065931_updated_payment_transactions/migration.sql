/*
  Warnings:

  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wallet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalletTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Wallet" DROP CONSTRAINT "Wallet_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."WalletTransaction" DROP CONSTRAINT "WalletTransaction_paymentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."WalletTransaction" DROP CONSTRAINT "WalletTransaction_walletId_fkey";

-- DropTable
DROP TABLE "public"."Payment";

-- DropTable
DROP TABLE "public"."Wallet";

-- DropTable
DROP TABLE "public"."WalletTransaction";

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "authToken" TEXT,
    "merchantOrderId" TEXT,
    "metaInfo" JSONB NOT NULL,
    "paymentFlow" TEXT NOT NULL,
    "phonepeOrderId" TEXT,
    "transactionId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT,
    "type" "TransactionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Transactions_userId_idx" ON "Transactions"("userId");

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
