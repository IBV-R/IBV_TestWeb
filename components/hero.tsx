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
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_-10%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(700px_circle_at_90%_10%,rgba(59,130,246,0.18),transparent_55%)]" />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-tight text-foreground/90">
            Defence • Dual-use • Deep Tech
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
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
      </Container>
    </section>
  );
}
