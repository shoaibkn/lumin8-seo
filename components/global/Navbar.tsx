"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { CirclePlus, CircleUserRound, Layers2 } from "lucide-react";
import { usePathname } from "next/navigation";
import path from "path";
import Link from "next/link";
import { CreateReportDrawer } from "../CreateReportDrawer";

type Props = {};

function Navbar({}: Props) {
  const pathName = usePathname();
  const [selectedNav, setSelectedNav] = React.useState<string>("");

  useEffect(() => {
    switch (pathName) {
      case "/dashboard":
        setSelectedNav("dashboard");
        break;
      case "/profile":
        setSelectedNav("profile");
        break;
      default:
        setSelectedNav("");
    }
  }, [pathName]);

  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <nav className="flex flex-row sticky bottom-0 p-4 justify-between z-50">
          <span className="p-2 flex flex-row gap-4 rounded-full bg-card/25 backdrop-blur supports-backdrop-filter:bg-card/45 border">
            <Link href={"/dashboard"}>
              <Button
                size="icon"
                className={`w-14 h-14 rounded-full  border ${selectedNav === "dashboard" ? "bg-primary " : "bg-primary-foreground"}`}
              >
                <Layers2
                  className={`size-6 ${selectedNav === "dashboard" ? "text-primary-foreground" : "text-primary"}`}
                  strokeWidth={1.5}
                />
              </Button>
            </Link>
            <Link href={"/profile"}>
              <Button
                size="icon"
                className={`w-14 h-14 rounded-full  border ${selectedNav === "profile" ? "bg-primary" : "bg-primary-foreground"}`}
              >
                <CircleUserRound
                  className={`size-6 ${selectedNav === "profile" ? "text-primary-foreground" : "text-primary"}`}
                  strokeWidth={1.5}
                />
              </Button>
            </Link>
          </span>
          <CreateReportDrawer />
        </nav>
      ) : null}
    </>
  );
}

export default Navbar;
