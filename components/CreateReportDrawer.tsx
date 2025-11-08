import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { FileText, Plus, PlusCircle } from "lucide-react";
import { useState } from "react";
import { CountrySelector } from "./CountrySelector";
import { useRouter } from "next/navigation";
import startScraping from "@/actions/startScraping";

export function CreateReportDrawer() {
  const [prompt, setPrompt] = useState("");
  const [country, setCountry] = useState("IN");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await startScraping(prompt, undefined, country);
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"default"} className={`border`}>
          <PlusCircle />
          New SEO
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader>
          <DrawerTitle>Create New Report</DrawerTitle>
          <DrawerDescription>
            Enter a business name, product, or website to generate a
            <span className="font-semibold text-foreground">
              {" "}
              comprehensive SEO analysis
            </span>{" "}
            powered by AI
          </DrawerDescription>
        </DrawerHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 rounded-md bg-blue-100 dark:bg-blue-900/30 z-10">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter a Name / Business / Product / Website etc."
                  className="pl-14 h-14 text-sm border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm w-full"
                  disabled={isLoading}
                />
              </div>

              <CountrySelector
                value={country}
                onValueChange={setCountry}
                disabled={isLoading}
              />
            </div>

            <div className="w-full"></div>
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
          <DrawerFooter className="flex flex-col gap-2">
            <Button
              type="submit"
              size="lg"
              className="h-12 px-6 md:px-8 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-0 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group font-semibold w-full "
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
                  <Plus className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="hidden lg:inline">Generate Report</span>
                  <span className="lg:hidden">Generate</span>
                </>
              )}
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
