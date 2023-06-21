"use client";

import { Button } from "ui";
import { Route } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export default function AppNav() {
  return (
    <nav className="fixed w-screen top-0 h-16 border-b bg-white/50 backdrop-blur flex justify-start items-center px-8 space-x-0">
      <Button asChild variant="ghost">
        <Link href="/">
          <Code2 className="mr-2 h-4 w-4" />
          <h1 className="font-bold">aas.dev</h1>
        </Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/articles">
          Articles
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <span className="flex-grow" />
      <Button asChild>
        <Link href={"/studio" as Route}>
          Studio
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </nav>
  );
}
