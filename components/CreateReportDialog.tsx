import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Bot,
  FileText,
  Plus,
  PlusCircle,
  Sparkle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { CountrySelector } from "./CountrySelector";
import { useRouter } from "next/navigation";
import startScraping from "@/actions/startScraping";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";

export function CreateReportDialog() {
  const [prompt, setPrompt] = useState("");
  const [country, setCountry] = useState("IN");
  const [isLoading, setIsLoading] = useState(false);
  const [isSmartRequest, setIsSmartRequest] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await startScraping(
        prompt,
        undefined,
        country,
        isSmartRequest ? "SMART" : "BASIC",
      );
      if (!response.ok) {
        throw new Error("Failed to generate report");
      }
      console.log(response);
      // const data = await response.json();
      router.push(`/dashboard/report/${response.jobId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="rounded-lg">
          <PlusCircle />
          Generate New SEO Report
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <form onSubmit={handleSubmit} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Create New Report</DialogTitle>
            <DialogDescription>
              Enter a business name, product, or website to generate a
              <span className="font-semibold text-foreground">
                {" "}
                comprehensive SEO analysis
              </span>{" "}
              powered by AI
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 rounded-md bg-blue-100 dark:bg-blue-900/30 z-10">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter a Name / Business / Product / Website etc."
                  className="pl-14 h-14 text-base border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm w-full"
                  disabled={isLoading}
                />
              </div>

              <CountrySelector
                value={country}
                onValueChange={setCountry}
                disabled={isLoading}
              />
            </div>

            <div className="w-full flex items-center gap-2">
              <Switch
                checked={isSmartRequest}
                onCheckedChange={() => setIsSmartRequest(!isSmartRequest)}
              />{" "}
              <span className="text-sm">Use Smart Prompts</span>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-blue-200/50 dark:border-blue-800/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>AI-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Real-time Data</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>Comprehensive Insights</span>
            </div>
          </div>

          <DialogFooter className="flex flex-col gap-2">
            <Button
              type="submit"
              size="lg"
              className={`h-12 px-6 md:px-8  border-0 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group font-semibold w-full
                ${isSmartRequest ? "bg-linear-to-bl from-accent/50  to-primary hover:from-accent/70  hover:to-primary" : "bg-secondary"}`}
              disabled={isLoading || !prompt.trim()}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3" />
                  <span className="hidden lg:inline">Generating Report...</span>
                  <span className="lg:hidden">Generating...</span>
                </>
              ) : (
                <>
                  {isSmartRequest ? (
                    <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform duration-300" />
                  )}

                  <span className="hidden lg:inline">Generate Report</span>
                  <span className="lg:hidden">Generate</span>
                  <Badge className="bg-secondary">
                    <Bot />
                    {isSmartRequest ? "25Rs." : "10Rs."}
                  </Badge>
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
