import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { portfolioCompanies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected IBV portfolio companies across defence, aerospace, space, autonomy, and advanced manufacturing.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              Portfolio
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Portfolio built for mission impact and global scale
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Each portfolio company meets the IBV bar: outstanding founders,
              addressing globally relevant problems, field proven, advanced
              technology, dual-use opportunities, potential for strong margins,
              and well positioned for 10× growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Selected Investments"
            title="Aerospace, defence, space, and deep tech"
            description="A snapshot of the kinds of companies we back."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolioCompanies.map((company) => (
              <Card key={company.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle>{company.title}</CardTitle>
                    <CardDescription>{company.description}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
