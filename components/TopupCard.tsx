"use client";
import { useEffect, useEffectEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { DollarSign } from "lucide-react";
import { Input } from "./ui/input";
import { initiatePhonePePayment } from "@/actions/phonepe";
import { BarChart3 } from "lucide-react";
import {
  fetchUserTransactions,
  WalletData,
  walletData,
} from "@/actions/wallet";
import { WalletTransactions } from "@prisma/client";
import { NumberTicker } from "./ui/number-ticker";
import Link from "next/link";
const TopupCard = () => {
  const [amount, setAmount] = useState<number | undefined>(0);
  const [balance, setBalance] = useState<number | undefined>(0);
  const [reportsGenerated, setReportsGenerated] = useState<number | undefined>(
    0,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [creditsUsed, setCreditsUsed] = useState<number | undefined>(0);
  const [data, setData] = useState<{
    balance: number;
    transactions: WalletTransactions[];
  }>({ balance: 0, transactions: [] });
  const handlePayment = async () => {
    console.log("Generating payment link...");
    if (!amount) return;
    await initiatePhonePePayment(amount, "test+user");
  };

  const transactions = useEffectEvent(async () => {
    // Fetch user transactions from API
    try {
      setLoading(true);
      const data = await fetchUserTransactions();
      console.log(data);
      setData(data);
      const wallet: WalletData = await walletData();
      console.log("Wallet:", wallet);
      console.log("Balance:", wallet.balance[0]);
      // setBalance(balance);
      const credits = wallet.balance
        .filter((item) => item.type === "CREDIT")
        .reduce((acc, curr) => acc + (curr._sum.amount || 0), 0);
      const debits = wallet.balance
        .filter((item) => item.type === "DEBIT")
        .reduce((acc, curr) => acc + (curr._sum.amount || 0), 0);
      setReportsGenerated(wallet.reportsGenerated);
      setBalance(credits - debits);
      setCreditsUsed(debits);
      console.log("Credits:", credits);
      console.log("Debits:", debits);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  });

  useEffect(() => {
    transactions();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 -z-10">
      <Card
        className="rounded-4xl relative
border border-neutral-300 dark:border-neutral-700
shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
before:absolute before:inset-0 before:rounded-4xl before:pointer-events-none
before:shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),inset_0_-1px_4px_rgba(0,0,0,0.05)]
dark:before:shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),inset_0_-1px_4px_rgba(0,0,0,0.4)]
bg-linear-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30
"
      >
        {/*<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full -translate-y-12 translate-x-12" />*/}
        <CardHeader className="">
          <CardTitle
            className="text-xl text-emerald-600 dark:text-emerald-400
          flex flex-row justify-start gap-4 items-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full"
          >
            <DollarSign strokeWidth={3} />
            Wallet Balance
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="pb-6 flex flex-row">
            <h1 className="text-2xl text-emerald-600 dark:text-emerald-400 font-bold">
              ₹
            </h1>
            {loading || !balance ? (
              <h1 className="text-emerald-600 dark:text-emerald-400 text-4xl">
                Loading..
              </h1>
            ) : (
              <NumberTicker
                value={balance}
                decimalPlaces={2}
                className="text-emerald-600 dark:text-emerald-400 text-7xl"
              />
            )}
          </div>

          <Separator />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
            {[50, 100, 500, 1000].map((addAmount) => (
              <Button
                key={addAmount}
                onClick={() =>
                  amount ? setAmount(amount + addAmount) : setAmount(addAmount)
                }
                variant="ghost"
                className="rounded-full bg-emerald-100 dark:bg-emerald-900/30"
                size={"sm"}
              >
                +₹{addAmount}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <div className="w-full flex flex-row gap-2 mt-4">
            <Input
              type="number"
              value={amount}
              onChange={(ev) =>
                ev.target.value !== "" && setAmount(parseFloat(ev.target.value))
              }
            />
            <Button
              variant="secondary"
              className="rounded-lg "
              onClick={() => handlePayment()}
            >
              Top Up
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card
        className="rounded-4xl relative
border border-neutral-300 dark:border-neutral-700
shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
before:absolute before:inset-0 before:rounded-4xl before:pointer-events-none
before:shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),inset_0_-1px_4px_rgba(0,0,0,0.05)]
dark:before:shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),inset_0_-1px_4px_rgba(0,0,0,0.4)]
 bg-linear-to-br from-violet-50 to-pink-50 dark:from-violet-950/30 dark:to-pink-950/30
"
      >
        <CardHeader className="">
          <CardTitle
            className="text-xl text-violet-600 dark:text-violet-400 rounded-full
          flex flex-row justify-start gap-4 items-center p-4 bg-violet-100 dark:bg-violet-900/30"
          >
            <BarChart3 strokeWidth={3} />
            Your Usage
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <span className="text-muted-foreground/70">
                Reports generated
              </span>
              <span>{reportsGenerated}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-muted-foreground/70">Credits Used</span>
              <span>₹{creditsUsed}</span>
            </div>
          </div>
          {/*<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-linear-to-r from-violet-600 to-pink-600 h-2 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>*/}
        </CardContent>
        <CardFooter className="flex flex-col h-full pt-4 gap-4">
          <div className="grid grid-cols-2 gap-3 h-full w-full">
            <div className="text-center flex flex-col gap-2 justify-center p-2 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Avg. per Report
              </p>
              <p className="font-semibold text-xl text-gray-900 dark:text-gray-100">
                ₹
                {creditsUsed &&
                  reportsGenerated &&
                  creditsUsed > 0 &&
                  reportsGenerated / creditsUsed}
              </p>
            </div>
            <div className="text-center  flex flex-col gap-2 justify-center    p-2 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Remaining
              </p>
              <p className="font-semibold text-xl text-emerald-600 dark:text-emerald-400">
                ₹{balance}
              </p>
            </div>
          </div>
          <Link className="w-full" href="/profile/transactions">
            <Button className="w-full">View Transactions</Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default TopupCard;
