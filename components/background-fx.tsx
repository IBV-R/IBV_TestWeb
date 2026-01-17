import { cn } from "@/lib/cn";

import { AuroraCanvas } from "./aurora-canvas";

export function BackgroundFX({ className }: { className?: string }) {
  return (
    <>
      <AuroraCanvas />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
          className,
        )}
      >
        <div className="absolute inset-0 hero-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl motion-safe:animate-float" />
        <div className="absolute -bottom-56 left-20 h-[520px] w-[520px] rounded-full bg-accent2/15 blur-3xl motion-safe:animate-float" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
      </div>

      <div aria-hidden="true" className="gradient-blur">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  );
}
