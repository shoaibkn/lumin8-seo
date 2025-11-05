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
  if (
    user.id === undefined ||
    user.email === undefined ||
    user.name === undefined
  ) {
    throw new Error("ID, Email and name are required");
  }
  await prisma.user.upsert({
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
};
