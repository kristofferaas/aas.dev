import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const mainVariants = cva("flex", {
  variants: {},
  defaultVariants: {},
});

interface MainProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof mainVariants> {}

export function Main({ className, children }: MainProps) {
  return <main className={cn(mainVariants({ className }))}>{children}</main>;
}
