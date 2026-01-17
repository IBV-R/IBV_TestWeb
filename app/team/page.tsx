import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "IBV is a team of seasoned operators, senior executives, entrepreneurs, and investors with deep roots in defense, aerospace, and dual-use technology.",
};

function TeamGrid({
  members,
}: {
  members: Array<{ name: string; role: string; bio: string }>;
}) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <Card key={member.name} className="flex flex-col">
          <div className="flex-1">
            <CardTitle>{member.name}</CardTitle>
            <div className="mt-1 text-sm font-medium text-foreground/80">
              {member.role}
            </div>
            <CardDescription className="mt-3">{member.bio}</CardDescription>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              Team
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Our multi-dimensional team
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              IBV is a team of seasoned operators, senior executives,
              entrepreneurs, and investors with deep roots in the defense,
              aerospace, and dual-use technology sectors. Our cross-border
              experience spans venture and private equity investment, global
              operations, and scaling multinational ventures.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Partners"
            description="Operators and investors with deep domain expertise and global execution experience."
          />
          <TeamGrid members={team.partners} />
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Governance"
            title="Investment Committee"
            description="Experienced investors and financial leaders supporting disciplined decision-making."
          />
          <TeamGrid members={team.investmentCommittee} />
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Advisory"
            title="Strategic Advisors"
            description="Senior leaders with deep understanding of defense end-users, industry partners, and government stakeholders."
          />
          <TeamGrid members={team.strategicAdvisors} />
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Advisory"
            title="Advisors"
            description="Ecosystem builders and specialists supporting our portfolio and platform."
          />
          <TeamGrid members={team.advisors} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="Platform & Operations"
            description="Investor relations, governance, investment support, marketing, and analytical depth."
          />
          <TeamGrid members={team.operations} />
        </Container>
      </section>
    </div>
  );
}
