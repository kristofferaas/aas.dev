import { cn } from "@/lib/utils";

export type MainProps = {
  className?: string;
  children: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ className, children }) => {
  return (
    <main className={cn("container max-w-5xl py-8", className)}>
      {children}
    </main>
  );
};
