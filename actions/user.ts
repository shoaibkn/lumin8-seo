"use server";
import { prisma } from "@/lib/prisma";
import { JsonObject } from "@prisma/client/runtime/library";

export const updateUser = async (user: {
  raw_json?: JsonObject | undefined;
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
  deleted_at?: Date | undefined;
}) => {
  try {
    if (
      user.id === undefined ||
      user.email === undefined ||
      user.name === undefined
    ) {
      throw new Error("ID, Email and name are required");
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    let newUser: boolean = false;
    if (!userExists) {
      newUser = true;
    }

    const createdUser = await prisma.user.upsert({
      where: { id: user.id },
      create: {
        id: user.id,
        email: user.email,
        emailVerified: true,
        name: user.name,
      },
      update: {
        email: user.email,
        emailVerified: true,
        name: user.name,
      },
    });

    if (newUser && createdUser) {
      try {
        await prisma.walletTransactions.create({
          data: {
            metaInfo: { type: "PROMO RECHARGE - 100" },
            paymentFlow: "PROMO",
            type: "CREDIT",
            userId: user.id,
            amount: 100,
            status: "COMPLETED",
            description: "PROMO for New User",
          },
        });
      } catch (error) {
        console.log("Unable to Add Promo Transaction for New User", error);
      }
    }
  } catch (error) {
    console.log("Unable to Update User", error);
  }
};
