"use client";
import { ANIMATIONS, NAVIGATION } from "@/lib/constants";
import { motion } from "motion/react";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useStackApp, useUser } from "@stackframe/stack";

const Header = () => {
  const session: [] = []; //Change to proper session fetching
  const pathName = usePathname();
  const isMobile = useIsMobile();
  const app = useStackApp();
  const user = useUser();

  return (
    <header className={`w-full ${pathName === "/login" && "hidden"}`}>
      <motion.nav
        {...ANIMATIONS.nav}
        className={`fixed w-full z-50 ${isMobile ? "top-0" : "top-4"}`}
      >
        <div
          className={`container md:w-7xl px-4 py-4 flex items-center justify-between mx-auto  gap-2
       bg-card/25 backdrop-blur supports-backdrop-filter:bg-card/45 ${!isMobile ? "rounded-full border h-16" : "h-20"}`}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-1 items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-sm inline-flex size-6 items-center justify-center rounded-full bg-foreground text-background">
                L8
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Lumin8<span className="text-xs font-normal italic">SEO</span>
              </span>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-2">
            {!user &&
              NAVIGATION.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  <Button variant={"ghost"} className="rounded-full">
                    {link.name}
                  </Button>
                </Link>
              ))}
            {user &&
              NAVIGATION.appLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  <Button variant={"ghost"} className="rounded-full">
                    <link.icon />
                    {link.name}
                  </Button>
                </Link>
              ))}
            <ThemeToggle />
            {!user && (
              <Link href="/login">
                <Button variant="outline" className="rounded-full">
                  {NAVIGATION.cta.signIn}
                </Button>
              </Link>
            )}
            {user && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => user.signOut()}
              >
                <LogOut />
              </Button>
            )}
            {!user && (
              <Button className="rounded-full">
                {NAVIGATION.cta.getStarted}
              </Button>
            )}
          </div>
          <span className="md:hidden">
            <ThemeToggle />
          </span>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
