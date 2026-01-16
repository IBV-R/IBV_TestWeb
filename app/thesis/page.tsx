import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { focusAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investment Thesis",
  description:
    "What IBV invests in: defence, dual-use and deep technology, and how we help companies scale from India to global markets.",
};

export default function ThesisPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              Investment Thesis
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Dual-use technology in sectors of national importance
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {site.description} We believe that by combining the top 1% of
              technology and innovation with India’s engineering talent,
              cost-innovation and manufacturing advantages, companies can unlock
              global markets and build enduring value.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we look for"
            title="Field-proven technology at the inflection point of growth"
            description="We invest in mission-critical technologies with dual-use applications, for national security and strategic self-reliance — addressing globally relevant problems with opportunities to scale through an India-centric co-development and manufacturing model."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <CardTitle>Outstanding founders</CardTitle>
              <CardDescription>
                Teams with deep technical insight, high urgency, and the ability
                to execute in regulated, complex markets.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Clear path to adoption</CardTitle>
              <CardDescription>
                Products aligned to real end-user needs — with credible routes
                to procurement, partnerships, and scale.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>10× scale potential</CardTitle>
              <CardDescription>
                Strong margin potential, defensible IP, and positioning for
                global category leadership.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Focus Areas"
            title="Where we invest"
            description="Our focus areas reflect the next decade of strategic technology — spanning defence, aerospace, space, cyber, compute, communications, and energy."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Card key={area.title} className="p-5">
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
