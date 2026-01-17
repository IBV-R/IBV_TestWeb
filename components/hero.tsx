import { Container } from "./container";
import { ButtonLink } from "./ui/button";

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(60%_55%_at_50%_0%,black,transparent)] motion-safe:animate-grid-pan" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl motion-safe:animate-float" />
      <div className="pointer-events-none absolute -bottom-40 left-10 hidden h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl md:block motion-safe:animate-float" />

      <Container className="relative py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium tracking-tight text-foreground/90 backdrop-blur">
              Defence • Dual-use • Deep Tech
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={primaryCta.href} size="lg">
                {primaryCta.label}
              </ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />
            <div className="relative rounded-2xl bg-gradient-to-b from-accent/30 via-border to-transparent p-px shadow-lg shadow-accent/10">
              <div className="absolute inset-0 rounded-2xl bg-dots opacity-50 [mask-image:radial-gradient(70%_70%_at_50%_15%,black,transparent)]" />
              <div className="relative rounded-2xl border border-border bg-background/70 p-6 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <div className="ml-2 text-xs font-medium text-foreground/70">
                    investment-console
                  </div>
                </div>

                <div className="mt-6 font-mono text-xs leading-6 text-foreground/80">
                  <div>
                    <span className="text-foreground/60">ibv</span>
                    <span className="text-foreground/30">:</span>
                    <span className="text-foreground/60">~</span>
                    <span className="text-foreground/30">$</span> invest --focus
                    <span className="ml-1 inline-block h-4 w-2 bg-foreground/50 align-[-2px] motion-safe:animate-pulse" />
                  </div>
                  <div className="mt-4 space-y-2 text-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">●</span>
                      <span>defense-systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">●</span>
                      <span>space-infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">●</span>
                      <span>ai-command</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">●</span>
                      <span>autonomy-unmanned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">●</span>
                      <span>advanced-manufacturing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
