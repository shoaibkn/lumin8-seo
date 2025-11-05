import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { DollarSign, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";

const TopupCard = () => {
  return (
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
          <DollarSign strokeWidth={4} />
          Wallet Balance
        </CardTitle>
        {/*<div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
          <svg
            className="w-12 h-12 text-emerald-600 dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
        </div>*/}
      </CardHeader>

      <CardContent>
        <div className="pb-6">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
            ₹500
          </h1>
        </div>

        <Separator />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
          {["₹50", "₹100", "₹500", "₹1000"].map((amount) => (
            <Button
              key={amount}
              variant="ghost"
              className="rounded-full bg-emerald-100 dark:bg-emerald-900/30"
              size={"sm"}
            >
              +{amount}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <div className="w-full flex flex-row gap-2 mt-4">
          <Input type="number" />
          <Button variant="secondary" className="rounded-lg ">
            Top Up
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TopupCard;
