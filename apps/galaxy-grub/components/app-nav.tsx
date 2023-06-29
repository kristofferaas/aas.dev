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
    <AppNavSheet>
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
    </AppNavSheet>
  );
}

const AppNavSheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed z-50 w-full bg-gradient-to-b from-background  to-transparent pt-8 px-8">
        <nav className="container flex h-16 max-w-5xl items-center justify-between rounded-full bg-primary px-4 text-primary-foreground">
          {children}
        </nav>
      </div>
      <div className="h-24" />
    </>
  );
};
