"use client";

import { TransactionsTable } from "@/components/TransactionsTable";

import { useUser } from "@stackframe/stack";
import { useEffect } from "react";

const TransactionsPage = () => {
  const user = useUser();

  useEffect(() => {
    console.log("User", user);
  }, [user]);

  return (
    <main className="p-4 sm:w-full md:w-3/4 lg:w-2/3 mx-auto my-32">
      <h1 className="text-4xl font-medium text-wrap w-full mt-8">
        Transactions
      </h1>
      <section className="mt-8">
        <TransactionsTable />
      </section>
    </main>
  );
};

export default TransactionsPage;
