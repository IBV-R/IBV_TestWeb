import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Our investors access an exclusive portfolio of highly innovative companies founded on market-ready technology, proven traction, and at the inflection point of growth.",
};

const outcomes = [
  {
    title: "Focus on high-potential sectors",
    description:
      "We target sectors with significant growth potential, including Aerospace & Defense, Space, Communications and Deep Tech with dual-use applications.",
  },
  {
    title: "Access to exclusive deals",
    description:
      "We secure access to strong opportunities through a global network, often co-investing alongside sector-focused investors.",
  },
  {
    title: "Innovative and proven technology",
    description:
      "We invest in companies with novel technologies protected by strong IP moats, with solutions applicable across global markets.",
  },
  {
    title: "Active co‑promoter role",
    description:
      "From Day 0, we participate as co-promoters with significant minority stakes in ventures that can scale into $100M companies.",
  },
  {
    title: "Global risk diversification",
    description:
      "We mitigate risk by diversifying across geographies, balancing currency exposure, and focusing on resilient dual-use segments.",
  },
  {
    title: "Experienced team",
    description:
      "Seasoned leaders, domain experts, entrepreneurs, and operators with a track record of investing in, building, and scaling multinational companies.",
  },
] as const;

export default function InvestorsPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              For Investors
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Generating outsized returns and maximizing shareholder value
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              IndusBridge Ventures invests in, commercialises and operates
              scalable businesses that commercialize innovative technologies for
              the global market.
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Our investors access an exclusive portfolio of highly innovative
              companies with a high probability of success founded on
              market-ready technology, proven market traction and at the
              inflection point of growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Delivering strong outcomes"
            title="A disciplined, operator-led model"
            description="We combine domain depth, strategic capital, and global networks to scale path-breaking technology using India as a launch pad."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
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
            eyebrow="Dual-use technology"
            title="Resilience through strategic demand"
            description="Our strategy focuses on sectors characterized by long-term government contracts and consistent demand. By targeting proven dual-use technologies on the brink of significant expansion, we create a balanced portfolio that maximizes potential returns while mitigating downside risk."
          />
        </Container>
      </section>
    </div>
  );
}
