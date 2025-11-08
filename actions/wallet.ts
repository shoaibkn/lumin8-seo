"use server";
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack/server";

export type WalletData = {
  balance: {
    _sum: {
      amount: number | null;
    };
    type: string;
  }[];
  creditsUsed: number;
  reportsGenerated: number;
};

export const fetchUserTransactions = async () => {
  const user = await stackServerApp.getUser();
  if (!user) {
    console.log("User not found");
    return {
      balance: 0,
      transactions: [],
    };
  }
  const credits = await prisma.walletTransactions.findMany({
    where: {
      userId: user.id,
      type: "CREDIT",
      status: {
        not: "FAILED",
      },
    },
  });
  const totalCredits = credits.reduce((acc, credit) => acc + credit.amount, 0);
  const debits = await prisma.walletTransactions.findMany({
    where: {
      userId: user.id,
      type: "DEBIT",
      status: {
        not: "FAILED",
      },
    },
  });
  const totalDebits = debits.reduce((acc, debit) => acc + debit.amount, 0);
  const balance = totalCredits - totalDebits;
  console.log("Credits:", credits);
  return {
    balance,
    transactions: [...credits, ...debits],
  };
};

export const walletData = async () => {
  const user = await stackServerApp.getUser();
  if (!user) {
    console.log("User not found");
    return {
      balance: [
        { _sum: { amount: 0 }, type: "CREDIT" },
        { _sum: { amount: 0 }, type: "DEBIT" },
      ],
      reportsGenerated: 0,
      creditsUsed: 0,
    };
  }

  const reportsGenerated = await prisma.walletTransactions.count({
    where: {
      userId: user.id,
      status: {
        not: "FAILED",
      },
    },
  });

  const creditsUsed = await prisma.walletTransactions.count({
    where: {
      userId: user.id,
      type: "CREDIT",
      status: {
        not: "FAILED",
      },
    },
  });

  const walletBalance = await prisma.walletTransactions.groupBy({
    by: ["type"],
    _sum: {
      amount: true,
    },
    where: {
      userId: user.id,
    },
  });

  return {
    balance: walletBalance
      ? walletBalance
      : [
          { _sum: { amount: 0 }, type: "CREDIT" },
          { _sum: { amount: 0 }, type: "DEBIT" },
        ],
    reportsGenerated,
    creditsUsed,
  };
};
