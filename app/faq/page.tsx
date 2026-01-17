import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about IndusBridge Ventures.",
};

const faqs = [
  {
    q: "What does IBV invest in?",
    a: "IBV invests in defence, dual-use and deep tech companies addressing mission-critical problems with a path to global markets.",
  },
  {
    q: "What stage do you invest at?",
    a: "We partner from early-stage to growth, focusing on field-proven technology at the inflection point of scale.",
  },
  {
    q: "Do you support cross-border expansion?",
    a: "Yes. We bring operating support, partnerships, and programs designed to help companies expand beyond India into global commercial and government markets.",
  },
  {
    q: "How do founders get in touch?",
    a: "Use the contact form on the Contact page or email info@indusbridgeventures.com with a short deck and a clear summary of what you're building.",
  },
] as const;

export default function FAQPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for founders and partners"
            description="A few common questions about what we do and how we work."
          />

          <div className="mt-10 grid gap-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold tracking-tight">
                  <span>{item.q}</span>
                  <span className="text-muted transition-transform group-open:rotate-180">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
