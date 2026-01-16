import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { focusAreas, portfolioCompanies, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

export default function HomePage() {
  return (
    <div>
      <Hero
        title="We find, fund, and scale dual‑use technology"
        description={
          "Indusbridge Ventures invests in & commercialises groundbreaking dual-use tech in sectors of national importance — partnering with exceptional founders from early-stage to cross-border growth."
        }
        primaryCta={{ href: "/contact", label: "Speak with us" }}
        secondaryCta={{ href: "/thesis", label: "Explore our thesis" }}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Approach"
            title="Partners for the long haul"
            description="We look beyond investing: experienced operators with a hands-on approach, global execution experience, and a clear focus on building the next generation of emerging technology companies."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <CardTitle>Find, fund, and scale</CardTitle>
              <CardDescription>
                Dedicated partners supporting companies from early-stage to
                cross-border growth and successful exits.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Operators who roll up their sleeves</CardTitle>
              <CardDescription>
                Venture builders and growth catalysts with deep domain
                relationships across defense and aerospace ecosystems.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Access to the top 1% of tech</CardTitle>
              <CardDescription>
                Highly selective investments in field-proven, mission-critical
                technologies at the inflection point of growth.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Focus Areas"
            title="Mission-critical technology, built for scale"
            description="We invest in technologies with dual-use applications for national security and strategic self-reliance — with a path to global markets through India-centric co-development and manufacturing."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.slice(0, 6).map((area) => (
              <Card key={area.title} className="p-5">
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <ButtonLink href="/thesis" variant="secondary">
              View all focus areas
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Backing globally relevant problems"
            description="Each portfolio company meets the IBV bar: outstanding founders, globally relevant problems, advanced tech, dual-use opportunities, strong-margin potential, and a clear path to 10× growth."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {portfolioCompanies.slice(0, 3).map((company) => (
              <Card key={company.title}>
                <CardTitle>{company.title}</CardTitle>
                <CardDescription>{company.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <ButtonLink href="/portfolio" variant="secondary">
              Explore the portfolio
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(17,109,255,0.22),transparent_60%)]" />
          <div className="pointer-events-none absolute -bottom-24 right-10 hidden h-72 w-72 rounded-full bg-accent/10 blur-3xl md:block motion-safe:animate-float" />

          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Building in defence, dual-use, or deep tech?
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">
                If you’re creating something transformative and seeking the
                right partners to accelerate growth, we’d like to hear from you.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <ButtonLink href="/contact" size="lg">
                Share your startup
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
