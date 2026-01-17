import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm",
        "transition-all hover:border-accent/30 hover:bg-surface/70 hover:shadow-md",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(650px_circle_at_20%_0%,rgba(17,109,255,0.18),transparent_60%)] before:opacity-0 before:transition-opacity hover:before:opacity-100",
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-base font-semibold tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-2 text-sm leading-6 text-muted", className)} {...props}>
      {children}
    </p>
  );
}
