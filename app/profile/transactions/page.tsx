"use client";

import { TransactionsTable } from "@/components/TransactionsTable";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useUser } from "@stackframe/stack";
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownCircle,
  ArrowUpCircle,
  BanknoteArrowDown,
  CrossIcon,
  XCircle,
} from "lucide-react";
import { useEffect } from "react";

const TransactionsPage = () => {
  const user = useUser();

  useEffect(() => {
    console.log("User", user);
  }, [user]);

  return (
    <main className="p-4 sm:w-full md:w-3/4 lg:w-2/3 mx-auto mt-32">
      <h1 className="text-4xl font-medium text-wrap w-full mt-8">
        Transactions
      </h1>
      <section className="mt-8">
        <Input />
        <ToggleGroup
          className="mt-4"
          defaultValue={["all", "income", "expense", "failed"]}
          type="multiple"
          variant={"outline"}
          spacing={2}
          size={"sm"}
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="income">
            <ArrowDownCircle />
            Income
          </ToggleGroupItem>
          <ToggleGroupItem value="expense">
            <ArrowUpCircle />
            Expense
          </ToggleGroupItem>
          <ToggleGroupItem value="failed">
            <XCircle />
            Failed
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="h-18 border-b flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-muted p-4 rounded-2xl w-fit">
              <BanknoteArrowDown size={28} strokeWidth={1} />
            </div>
            <div>
              <h1 className="text-lg">Recharged | UPI</h1>
              <p className="text-sm text-muted">12:00 PM</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-green-300">+100</h1>
          </div>
        </div>
        <div className="h-18 border-b flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-muted p-4 rounded-2xl w-fit">
              <BanknoteArrowDown size={28} strokeWidth={1} />
            </div>
            <div>
              <h1 className="text-lg">Recharged | UPI</h1>
              <p className="text-sm text-muted">12:00 PM</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-green-300">+100</h1>
          </div>
        </div>
        <div className="h-18 border-b flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-muted p-4 rounded-2xl w-fit">
              <BanknoteArrowDown size={28} strokeWidth={1} />
            </div>
            <div>
              <h1 className="text-lg">Recharged | UPI</h1>
              <p className="text-sm text-muted">12:00 PM</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-green-300">+100</h1>
          </div>
        </div>
        <div className="h-18 border-b flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-muted p-4 rounded-2xl w-fit">
              <BanknoteArrowDown size={28} strokeWidth={1} />
            </div>
            <div>
              <h1 className="text-lg">Recharged | UPI</h1>
              <p className="text-sm text-muted">12:00 PM</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-green-300">+100</h1>
          </div>
        </div>
        <TransactionsTable />
      </section>
    </main>
  );
};

export default TransactionsPage;
