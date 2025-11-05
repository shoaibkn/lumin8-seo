"use server";
import { prisma } from "@/lib/prisma";

export const updateUser = async (user) => {
  const updatedUser = await prisma.user.upsert({
    where: { id: user.id },
    create: {
      id: user.id,
      email: user.email,
      emailVerified: true,
      name: user.name, // Assuming name is required
    },
    update: {
      email: user.email,
      emailVerified: true,
    },
  });
};
