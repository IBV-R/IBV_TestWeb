import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "For Startups",
  description:
    "Indusbridge Ventures provides innovators with more than just capital — we offer a structured, full-stack approach to scale businesses from early-stage to global players.",
};

const support = [
  {
    title: "Strategic growth capital",
    description:
      "From early-stage to growth, we provide capital and strategic support to scale your business — backed by proven operators, execution teams, industry partners and an international network.",
  },
  {
    title: "Scale beyond borders",
    description:
      "Tailored go-to-market strategies for global expansion, cross-border launchpad programs, partnerships in key geographies, and international business development support.",
  },
  {
    title: "Cost effective manufacturing",
    description:
      "We help you leverage India-centric cost efficiencies at scale while tapping into a large and growing domestic market opportunity.",
  },
] as const;

export default function StartupsPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              For Startups
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              More than capital — a venture-building partner
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Indusbridge Ventures provides innovators with more than just
              capital — we offer a structured, full-stack approach to scale
              businesses from early-stage to global players.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" size="lg">
                Apply / Reach out
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How we help"
            title="Support across the full journey"
            description="We collaborate closely to help catalyze growth on an accelerated timeline."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {support.map((item) => (
              <Card key={item.title} className="p-5">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="I2A Launchpad"
            description="The India to America (I2A) Launchpad by FedTech and Indusbridge Ventures is designed to support Indian startups with dual-use technologies enter and thrive in the U.S. market."
          />
          <div className="mt-8">
            <ButtonLink href="/i2a" variant="secondary">
              Learn about I2A
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
