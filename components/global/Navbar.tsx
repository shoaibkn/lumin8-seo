"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
  CircleUserRound,
  Layers2,
  LogIn,
  PlusCircle,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CreateReportDrawer } from "../CreateReportDrawer";
import { useUser } from "@stackframe/stack";

function Navbar() {
  const pathName = usePathname();
  const [selectedNav, setSelectedNav] = React.useState<string>("");
  const user = useUser();
  useEffect(() => {
    console.log("Path", pathName.startsWith("/dashboard"));
    if (pathName.startsWith("/dashboard")) {
      setSelectedNav("dashboard");
    } else if (pathName.startsWith("/profile")) {
      setSelectedNav("profile");
    }
  }, [pathName]);

  const isMobile = useIsMobile();
  if (pathName.startsWith("/login")) {
    return null;
  }
  return (
    <>
      {isMobile ? (
        <nav className="flex flex-row fixed bottom-0 p-4 justify-between z-20 w-full">
          {pathName !== "/" ? (
            <>
              <span className="p-2 flex flex-row gap-2 rounded-xl bg-card/25 backdrop-blur supports-backdrop-filter:bg-card/45 border">
                <Link href={"/dashboard"}>
                  <Button
                    className={`text-foreground border ${selectedNav === "dashboard" ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-primary"}`}
                  >
                    <Layers2 className={`size-6`} strokeWidth={1.5} />
                    Dashboard
                  </Button>
                </Link>
                <Link href={"/profile"}>
                  <Button
                    className={`text-foreground border ${selectedNav === "profile" ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-primary"}`}
                  >
                    <CircleUserRound className={`size-6`} strokeWidth={1.5} />
                    Profile
                  </Button>
                </Link>
              </span>
              {!pathName.endsWith("/summary") && (
                <span className="p-2 flex flex-row gap-2 rounded-xl bg-card/25 backdrop-blur supports-backdrop-filter:bg-card/45 border">
                  <CreateReportDrawer />
                </span>
              )}
            </>
          ) : (
            <>
              <span className="p-2 flex flex-row justify-between w-fit rounded-xl bg-card/25 backdrop-blur supports-backdrop-filter:bg-card/45 border">
                <div className="flex flex-row gap-2">
                  <Link href={"#features"}>
                    <Button
                      className={`text-foreground border ${selectedNav === "dashboard" ? "bg-primary " : "bg-primary-foreground"}`}
                    >
                      Features
                    </Button>
                  </Link>
                  <Link href={"#pricing"}>
                    <Button
                      className={`text-foreground border ${selectedNav === "profile" ? "bg-primary" : "bg-primary-foreground"}`}
                    >
                      Pricing
                    </Button>
                  </Link>
                  <Link href={"#faq"}>
                    <Button
                      className={`text-foreground border ${selectedNav === "profile" ? "bg-primary" : "bg-primary-foreground"}`}
                    >
                      FAQ
                    </Button>
                  </Link>
                </div>
              </span>
              <span className="p-2 flex flex-row justify-between w-fit rounded-xl bg-card/25 backdrop-blur supports-backdrop-filter:bg-card/45 border">
                {!user ? (
                  <Link href={"/login"}>
                    <Button variant={"default"} className={`border`}>
                      <LogIn />
                    </Button>
                  </Link>
                ) : (
                  <Link href={"/dashboard"}>
                    <Button variant={"default"} className={`border`}>
                      <Layers2 />
                      App
                    </Button>
                  </Link>
                )}
              </span>
            </>
          )}

          {/*<CreateReportDrawer />*/}
        </nav>
      ) : null}
    </>
  );
}

export default Navbar;
