import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/lib/cn";

const variants = {
  primary: "shiny-cta text-accent-foreground",
  secondary:
    "border border-border bg-background/70 text-foreground shadow-sm hover:border-accent/30 hover:bg-surface focus-visible:outline-accent",
  ghost:
    "bg-transparent text-foreground hover:bg-surface focus-visible:outline-accent",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all",
        variant === "primary" ? "rounded-full" : "rounded-md",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all",
        variant === "primary" ? "rounded-full" : "rounded-md",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
    </Link>
  );
}
