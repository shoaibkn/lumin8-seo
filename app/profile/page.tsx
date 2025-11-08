"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut, NotebookTabs, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const route = useRouter();
  return (
    <main className="p-4 sm:w-full md:w-3/4 lg:w-2/3 mx-auto mt-32">
      <h1 className="text-4xl font-medium text-wrap w-full mt-8">Profile</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <Card
          onClick={() => route.push("/profile/account")}
          className="h-24 rounded-xl relative cursor-pointer p-4 text-xl flex justify-center
  border border-neutral-300 dark:border-neutral-700
  shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
  before:absolute before:inset-0 before:rounded-xl before:pointer-events-none
  before:shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),inset_0_-1px_4px_rgba(0,0,0,0.05)]
  dark:before:shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),inset_0_-1px_4px_rgba(0,0,0,0.4)]
  bg-linear-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30
"
        >
          <div className="flex flex-row justify-between">
            <h1>User Account</h1>
            <UserRound />
          </div>
        </Card>
        <Card
          onClick={() => route.push("/profile/transactions")}
          className="h-24 rounded-xl relative  cursor-pointer p-4 text-xl flex justify-center
    border border-neutral-300 dark:border-neutral-700
    shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
    before:absolute before:inset-0 before:rounded-xl before:pointer-events-none
    before:shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),inset_0_-1px_4px_rgba(0,0,0,0.05)]
    dark:before:shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),inset_0_-1px_4px_rgba(0,0,0,0.4)]
     bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-950/30 dark:to-pink-950/30"
        >
          <div className="flex flex-row justify-between">
            <h1>Transactions</h1>
            <NotebookTabs />
          </div>
        </Card>
      </section>
    </main>
  );
};

export default ProfilePage;
