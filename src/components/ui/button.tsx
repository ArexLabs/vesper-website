import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-lg font-mono text-sm font-semibold transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-60",
    "outline-none border border-transparent",
    "focus-visible:ring-2 focus-visible:ring-brand-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[.98]",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-brand-accent text-white shadow-md",
          "hover:bg-brand-accent/90",
          "active:bg-brand-accent/80",
        ].join(" "),
        outline: [
          "bg-transparent border border-brand-accent text-brand-accent font-mono shadow-xs",
          "hover:bg-brand-accent/5",
          "hover:border-brand-accent/70 hover:text-brand-accent",
          "active:bg-brand-accent/10",
        ].join(" "),
        secondary: [
          "bg-background text-foreground border border-border shadow-xs",
          "hover:bg-muted hover:border-brand-accent/40",
        ].join(" "),
        ghost: [
          "bg-transparent text-brand-accent",
          "hover:bg-brand-accent/10 hover:text-brand-accent/90",
          "active:bg-brand-accent/20",
        ].join(" "),
        destructive: [
          "bg-destructive text-white hover:bg-destructive/90",
          "focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        ].join(" "),
        link: [
          "bg-none p-0 h-auto min-w-0 font-mono text-brand-accent",
          "no-underline transition-colors",
          "hover:underline hover:text-brand-accent/90",
          "focus-visible:underline focus-visible:text-brand-accent/80",
          "active:text-brand-accent/60",
          "font-semibold",
        ].join(" "),
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4 text-base",
        sm: "h-8 px-4 py-1 text-sm has-[>svg]:px-3",
        xs: "h-6 px-2 text-xs rounded-md has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-12 px-8 text-lg has-[>svg]:px-6",
        icon: "size-10 aspect-square rounded-lg",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
