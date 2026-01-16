import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:outline-accent",
  secondary:
    "bg-surface text-foreground hover:bg-surface/70 focus-visible:outline-foreground",
  ghost:
    "bg-transparent text-foreground hover:bg-surface focus-visible:outline-foreground",
} as const;

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
