"use server";
import { auth } from "@/auth";

export const signInGoogle = async () => {
  await auth.api.signInSocial({
    body: {
      provider: "google", // or any other provider id
    },
  });
};
