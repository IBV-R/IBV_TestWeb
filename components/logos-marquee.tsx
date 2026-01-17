import { cn } from "@/lib/cn";

import { Container } from "./container";

const items = [
  "Aerospace & Defence",
  "Space Infrastructure",
  "Autonomous Systems",
  "Cybersecurity",
  "AI / Command",
  "Advanced Manufacturing",
  "Semiconductors",
  "Strategic Energy",
  "Quantum & Security",
  "Advanced Communications",
] as const;

export function LogosMarquee({ className }: { className?: string }) {
  const loop = [...items, ...items] as const;

  return (
    <section className={cn("border-b border-border", className)}>
      <Container className="relative py-10">
        <div className="absolute inset-0 bg-grid opacity-25 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]" />

        <div className="relative">
          <div className="text-xs font-semibold tracking-[0.2em] text-muted">
            Focus areas
          </div>
          <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul className="flex w-max gap-4 pr-4 motion-safe:animate-marquee">
              {loop.map((label, idx) => (
                <li key={`${label}-${idx}`} className="flex-none">
                  <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground/85 backdrop-blur">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
