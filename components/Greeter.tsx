// import { useIsMobile } from "@/hooks/use-mobile";

import { useGreeter } from "@/hooks/use-greeter";
import { Gift, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Greeter = () => {
  // const isMobile = useIsMobile();
  const { setShowDialog, showDialog } = useGreeter();
  const changelog = [
    {
      version: "v2.5.0",
      date: "Nov 11, 2025",
      items: ["New dashboard redesign", "Performance improvements"],
    },
    {
      version: "v2.4.5",
      date: "Nov 4, 2025",
      items: ["Bug fixes", "Security updates"],
    },
    {
      version: "v2.4.0",
      date: "Oct 28, 2025",
      items: ["API v2 release", "Mobile app launch"],
    },
  ];

  const newUserMessage = {
    title: "Welcome aboard! 👋",
    description:
      "We're thrilled to have you join our community. Get started with your account and explore all the amazing features we have to offer.",
  };

  if (!showDialog) return null;

  return (
    <Card className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <CardContent className="flex items-center justify-center p-0 z-50 rounded-xl max-w-3xl">
        <div className="bg-background rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 lg:flex-row">
            {/* Left side - Changelog with colored background */}
            <div className="col-span-1 bg-linear-to-br from-purple-600 to-purple-700 p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-2xl font-bold">What&apos;s New</h2>
              </div>

              <div className="space-y-6">
                {changelog.map((release) => (
                  <div
                    key={release.version}
                    className="bg-white/10 backdrop-blur rounded-lg p-4"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded">
                        {release.version}
                      </span>
                      <span className="text-xs text-white/70">
                        {release.date}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {release.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-white/90 flex items-start gap-2"
                        >
                          <span className="text-purple-200 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Welcome & Bonus */}
            <div className="col-span-1 p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {newUserMessage.title}
                </h1>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {newUserMessage.description}
                </p>
              </div>

              {/* Bonus card */}
              <div className="bg-linear-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="font-semibold text-foreground text-lg">
                    New User Bonus
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                  We&apos;ve added a welcome bonus to your account!
                </p>
                <div className="bg-white dark:bg-foreground/10 rounded-lg p-4 mb-3">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    Rs.100
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    Ready to use to generate your first SEO reports
                  </p>
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={() => setShowDialog(false)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Greeter;
