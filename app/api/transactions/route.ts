import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack/server";
// import { getServerSession } from "next-auth";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const text = searchParams.get("text") || undefined;
    const type = searchParams.get("type") || undefined;

    // Example: replace with real user ID from auth
    const user = await stackServerApp.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const whereClause: {
      type?: string;
      userId?: string;
      OR?: [
        {
          metaInfo: {
            array_contains: string;
          };
        },
        {
          paymentFlow: {
            contains: string;
            mode: string;
          };
        },
        {
          status: {
            contains: string;
            mode: string;
          };
        },
      ];
    } = {
      userId: user.id,
    };

    // Add type filter if provided
    if (type) {
      whereClause.type = type;
    }

    // Add OR text search only if text exists
    if (text) {
      whereClause.OR = [
        {
          metaInfo: {
            array_contains: text,
          },
        },
        {
          paymentFlow: {
            contains: text,
            mode: "insensitive",
          },
        },
        {
          status: {
            contains: text,
            mode: "insensitive",
          },
        },
      ];
    }

    const transactions = await prisma.walletTransactions.findMany({
      //@ts-expect-error fix later
      where: whereClause,
      orderBy: { createdAt: "desc" }, // optional: sort newest first
    });

    return NextResponse.json({ transactions });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
