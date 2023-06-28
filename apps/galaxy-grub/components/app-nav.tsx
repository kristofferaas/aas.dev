import { MenuIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export type AppNavProps = {};

export function AppNav({}: AppNavProps) {
  return (
    <>
      <nav className="h-16 w-full bg-accent fixed border-b flex content-center items-center px-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle asChild>
                <Link href="/">Galaxy Grub</Link>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col space-y-4">
              <Link href="/venues">Venues</Link>
              {/* <Link href="/stars">Stars</Link> */}
            </div>
          </SheetContent>
        </Sheet>
        <span className="flex-grow" />
        <Typography variant="h4" asChild>
          <Link href="/">Galaxy Grub</Link>
        </Typography>
        <span className="flex-grow" />
        <ThemeToggle variant="ghost" />
      </nav>
      <div className="h-16" />
    </>
  );
}
