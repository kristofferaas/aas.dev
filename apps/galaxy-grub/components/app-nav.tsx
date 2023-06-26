import { MenuIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export type AppNavProps = {};

export function AppNav({}: AppNavProps) {
  return (
    <>
      <nav className="h-16 w-full bg-card-background fixed border-b flex content-center items-center px-4">
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
        <span className="flex-grow" />
        <Typography variant="h4">Galaxy Grub</Typography>
        <span className="flex-grow" />
        <ThemeToggle />
      </nav>
      <div className="h-16" />
    </>
  );
}
