import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// type CreateScrapingJobRequestBody = {
//   originalPrompt: string;
// };

export async function POST(req: Request) {
  try {
    const { originalPrompt, userId } = await req.json();
    // const user = await auth();
    // return NextResponse.json(user);
    // if (!user) {
    //   return NextResponse.json(
    //     { message: "User not Authorised" },
    //     { status: 403 },
    //   );
    // }
    const job = await prisma.scraping_jobs.create({
      data: {
        userId,
        originalPrompt,
        status: "PENDING",
      },
    });
    return NextResponse.json({ data: job });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const userId = searchParams.get("userId");
    if (!userId) {
      return NextResponse.json(
        { message: "User not Authorised" },
        { status: 403 },
      );
    }

    const jobs = await prisma.scraping_jobs.findMany({
      where: {
        userId: userId,
        id: id || undefined,
      },
    });
    return NextResponse.json({ data: jobs });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      error,
      status: 500,
    });
  }
}

export async function PATCH(req: Request) {
  try {
    const {
      userId,
      id,
      snapshotId,
      status,
      analysisPrompt,
      result,
      seoReport,
      error,
    } = await req.json();
    const jobs = await prisma.scraping_jobs.findMany({
      where: {
        userId: userId,
        id: id || undefined,
      },
    });
    if (!jobs.length) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }
    if (!id || !userId)
      return NextResponse.json({ message: "Id is required" }, { status: 400 });
    const updateData: any = {};
    if (snapshotId) updateData.snapshotId = snapshotId;
    if (status) updateData.status = status;
    if (analysisPrompt) updateData.analysisPrompt = analysisPrompt;
    if (result) updateData.result = result;
    if (seoReport) updateData.seoReport = seoReport;
    if (error) updateData.error = error;
    const patchedData = await prisma.scraping_jobs.update({
      where: {
        id: id,
        userId: userId,
      },
      data: updateData,
    });
    return NextResponse.json({ data: patchedData }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      error,
      status: 500,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id, userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User not Authorised" },
        { status: 403 },
      );
    }

    if (!id) {
      return NextResponse.json({ message: "Id is required" }, { status: 403 });
    }

    const jobs = await prisma.scraping_jobs.findMany({
      where: {
        userId: userId,
        id: id,
      },
    });
    if (!jobs.length) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }
    await prisma.scraping_jobs.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
    return NextResponse.json({
      statusText: "Job deleted successfully",
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      statusText: "Unable to delete job",
      error,
      ok: false,
    });
  }
}
