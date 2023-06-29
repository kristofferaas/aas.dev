import { cn } from "@/lib/utils";

export type GridProps = {
  className?: string;
  children: React.ReactNode;
};

export const Grid: React.FC<GridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
};
