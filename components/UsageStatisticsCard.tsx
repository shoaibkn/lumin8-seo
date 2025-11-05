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
import { BarChart3, DollarSign, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";

const UsageStatisticsCard = () => {
  return (
    <Card
      className="rounded-4xl relative
border border-neutral-300 dark:border-neutral-700
shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
before:absolute before:inset-0 before:rounded-4xl before:pointer-events-none
before:shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),inset_0_-1px_4px_rgba(0,0,0,0.05)]
dark:before:shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),inset_0_-1px_4px_rgba(0,0,0,0.4)]
 bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-950/30 dark:to-pink-950/30
"
    >
      <CardHeader className="">
        <CardTitle
          className="text-xl text-violet-600 dark:text-violet-400 rounded-full
          flex flex-row justify-start gap-4 items-center p-4 bg-violet-100 dark:bg-violet-900/30"
        >
          <BarChart3 strokeWidth={4} />
          Usage This Month
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <span className="text-muted-foreground/70">Reports generated</span>
            <span>12</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-muted-foreground/70">Credits Used</span>
            <span>₹240</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-violet-600 to-pink-600 h-2 rounded-full"
            style={{ width: "48%" }}
          ></div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col h-full pt-4">
        <div className="grid grid-cols-2 gap-3 h-full w-full">
          <div className="text-center flex flex-col gap-2 justify-center p-2 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Avg. per Report
            </p>
            <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
              ₹20
            </p>
          </div>
          <div className="text-center  flex flex-col gap-2 justify-center    p-2 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Remaining
            </p>
            <p className="font-semibold text-sm text-emerald-600 dark:text-emerald-400">
              ₹260
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UsageStatisticsCard;
