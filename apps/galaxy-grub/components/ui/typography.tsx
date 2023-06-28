import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  className,
  asChild = false,
  children,
}) => {
  const Comp = asChild ? Slot : variant || "p";
  return (
    <Comp className={cn(typographyVariants({ className, variant }))}>
      {children}
    </Comp>
  );
};

export { Typography };
