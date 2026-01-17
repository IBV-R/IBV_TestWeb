import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "I2A Launchpad",
  description:
    "The I2A Launchpad is an INDUS-X affiliated program, endorsed by both Indian and U.S. defense innovation ecosystems, helping Indian dual-use startups access the U.S. market.",
};

const benefits = [
  {
    title: "Market access & strategic exposure",
    description:
      "Curated immersion opportunities in the U.S., introductions to investors, labs and facilities, and direct engagement with DoD, defense primes and commercial stakeholders.",
  },
  {
    title: "Education & readiness",
    description:
      "Workshops covering U.S. defense contracting, FAR/DFARS, ITAR/EAR compliance, and federal acquisition strategy — plus guidance on entity setup and market entry."
  },
  {
    title: "Mentorship & network",
    description:
      "Personalized mentorship sessions and ongoing access to U.S. advisors, primes, potential partners, and strategic investors."
  },
] as const;

export default function I2APage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              Program
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              India to America (I2A) Launchpad
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              FedTech and IndusBridge Ventures return with I2A — a U.S. market
              access program designed for Indian dual‑use technology startups,
              building on the success of the 2024 pilot.
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              The I2A Launchpad is a uniquely positioned INDUS‑X affiliated
              program, endorsed by both Indian and U.S. defense innovation
              ecosystems. With a proven model, strategic partnerships, and
              demonstrated results, I2A helps Indian startups make a mark
              globally.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Express interest
              </ButtonLink>
              <ButtonLink href="/startups" variant="secondary" size="lg">
                For startups
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who should apply"
            title="High-growth Indian dual-use technology startups"
            description="Startups developing dual-use technologies in defense, aerospace, AI/ML, advanced sensing, space, autonomous systems, or cybersecurity — with market traction and teams committed to building a foothold in the U.S. defense and commercial innovation markets."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Program overview"
            title="A structured path to U.S. market entry"
            description="Over an intensive program, participants engage in tailored workshops on U.S. market entry, DoD procurement processes, and regulatory compliance (including ITAR and EAR considerations), and get direct exposure to stakeholders across DoD, Space and Primes ecosystems."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-5">
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
