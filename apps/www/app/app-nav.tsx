"use client";

import { Button } from "@/components/ui/button";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppNav() {
  return (
    <nav className="fixed w-screen top-0 h-16 border-b bg-white/50 backdrop-blur flex justify-start items-center px-8 space-x-8">
      <AppNavHeader href="/" title="aas.dev" />
      <AppNavLink href="/portfolio" title="Portfolio" />
      {/* <AppLink href="/" title="About" /> */}
      <span className="flex-grow" />
      <Button>Login</Button>
    </nav>
  );
}

type AppNavHeaderProps<RouteType extends string> = {
  href: Route<RouteType>;
  title: React.ReactNode;
};

const AppNavHeader = <RouteType extends string>({
  href,
  title,
}: AppNavHeaderProps<RouteType>) => {
  return (
    <Link href={href} className="font-bold flex">
      <span className="aspect-square bg-black rounded-full w-6 mr-4" />
      {title}
    </Link>
  );
};

type AppNavLinkProps<RouteType extends string> = {
  href: Route<RouteType>;
  title: React.ReactNode;
};

const AppNavLink = <RouteType extends string>({
  href,
  title,
}: AppNavLinkProps<RouteType>) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href} className={isActive ? "text-blue-500" : "text-black"}>
      {title}
    </Link>
  );
};
