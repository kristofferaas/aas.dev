import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const asideVariants = cva("py-4 px-5 h-full space-y-2", {
  variants: {
    anchor: {
      left: "left-0 border-r",
      // TODO: Support right anchor
      // right: "right-0 border-l",
    },
  },
  defaultVariants: {
    anchor: "left",
  },
});

interface AsideProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof asideVariants> {}

export function Aside({ anchor, className, children }: AsideProps) {
  return (
    <>
      <aside className={cn("fixed", asideVariants({ anchor, className }))}>
        {children}
      </aside>
      <div className={cn(asideVariants({ anchor, className }))} />
    </>
  );
}
