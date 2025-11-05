"use client";

// import startScraping from "@/actions/startScraping";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { BarChart3, Loader2 } from "lucide-react";
// import ReportsTable from "@/components/ReportsTable";
import { CreateReportDialog } from "@/components/CreateReportDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import TopupCard from "@/components/TopupCard";
import UsageStatisticsCard from "@/components/UsageStatisticsCard";
import { useUser } from "@stackframe/stack";
import ReportsTable from "@/components/ReportsTable";
import { useEffect, useEffectEvent } from "react";
import { updateUser } from "@/actions/user";

function Dashboard() {
  const isMobile = useIsMobile();
  const user = useUser();
  const redirect = useRouter().push;

  useUser({ or: "redirect" });
  const userScript = useEffectEvent(() => {
    if (!user) {
      return;
    }
    const data = {
      id: user.id,
      email: user.primaryEmail,
      emailVerified: true,
      name: user.displayName, // Assuming name is required
    };
    updateUser(data);
  });

  useEffect(() => {
    if (user) {
      userScript();
    }
  }, [user]);

  if (!user) {
    redirect("/");
  }

  return (
    <main className="p-4 sm:w-full md:w-3/4 lg:w-2/3 mx-auto mt-32">
      <h1 className="text-4xl font-medium text-wrap w-full mt-8">
        <span className="text-4xl">Hi {user?.displayName}</span>,<br /> How can
        I help you today
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 -z-10">
        <TopupCard />
        <UsageStatisticsCard />
      </section>
      <section className="mt-12">
        <div className="flex flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-start gap-2">
            <span className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h1 className="text-2xl">Recent Reports</h1>
            </span>
            <p>Track the progress of your SEO analysis reports</p>
          </div>
          {!isMobile ? <CreateReportDialog /> : null}
        </div>
        <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm p-2">
          <CardContent className="p-2">
            <ReportsTable />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default Dashboard;
