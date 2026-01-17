import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who IndusBridge Ventures is and how we build globally competitive, dual-use and deep tech companies from India.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              About IBV
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building globally competitive companies for the future
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {site.description} We work at the intersection of India’s
              engineering talent, cost-innovation, and manufacturing advantages —
              partnering with founders who are creating mission-critical
              technology for national security and global markets.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Mission"
            title="Commercialise breakthrough dual-use technology"
            description="We believe that combining the top 1% of technology and innovation with India’s engineering talent and manufacturing advantages opens the doors to global markets — and results in the creation of extremely valuable companies."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <CardTitle>National importance</CardTitle>
              <CardDescription>
                We focus on high-priority sectors where mission capability,
                resilience, and sovereignty matter.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Dual-use by design</CardTitle>
              <CardDescription>
                Our investments target technologies that can win in both defense
                and commercial markets.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Cross-border scale</CardTitle>
              <CardDescription>
                We help companies expand globally through partnerships,
                programs, and execution support.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="A structured, full-stack approach"
            description="Indusbridge Ventures provides innovators with more than just capital. We bring operating experience, market access, and a venture-building mindset to help companies scale from early-stage to global players."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardTitle>Hands-on operating support</CardTitle>
              <CardDescription>
                Go-to-market strategy, commercialization, hiring support, and
                operational optimization across the scale-up journey.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Strategic ecosystem access</CardTitle>
              <CardDescription>
                Deep networks across defense end-users, industry partners, and
                government stakeholders — in India and internationally.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
