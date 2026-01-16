import type { Metadata } from "next";

import { redirect } from "next/navigation";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with IBV — investors, founders, partners, and operators building breakthrough defence and dual-use technologies.",
};

async function submitContact(formData: FormData) {
  "use server";

  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  void payload;

  redirect("/contact?sent=1");
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string };
}) {
  const sent = searchParams?.sent === "1";

  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-muted">
              Contact
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s talk
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              We’re always keen to connect with visionary entrepreneurs building
              scalable, breakthrough technologies in Aerospace & Defence,
              Dual‑use & Deep Tech.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Inquiries"
                title="Share your startup or reach out"
                description="Send a note and we’ll route it to the right partner."
              />

              {sent ? (
                <div className="mt-8 rounded-xl border border-border bg-surface p-5 text-sm text-foreground">
                  Thanks — your message has been submitted.
                </div>
              ) : null}

              <form action={submitContact} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="text-sm font-medium text-foreground"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    placeholder="Company / fund / institution"
                  />
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="text-sm font-medium text-foreground"
                  >
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    defaultValue="Startup"
                  >
                    <option>Startup</option>
                    <option>Investor</option>
                    <option>Partner / Program</option>
                    <option>Careers</option>
                    <option>Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    placeholder="Tell us what you're building and where you need support."
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-muted">
                    For direct email, reach us at {" "}
                    <a
                      href={`mailto:${site.contact.emails.info}`}
                      className="underline decoration-border underline-offset-4 hover:text-foreground"
                    >
                      {site.contact.emails.info}
                    </a>
                    .
                  </div>
                  <Button type="submit" size="lg">
                    Submit
                  </Button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <div className="text-sm font-semibold">General</div>
                  <div className="mt-2 text-sm text-muted">
                    <a
                      href={`mailto:${site.contact.emails.info}`}
                      className="hover:text-foreground"
                    >
                      {site.contact.emails.info}
                    </a>
                  </div>
                  <div className="mt-4 text-sm font-semibold">Careers</div>
                  <div className="mt-2 text-sm text-muted">
                    <a
                      href={`mailto:${site.contact.emails.careers}`}
                      className="hover:text-foreground"
                    >
                      {site.contact.emails.careers}
                    </a>
                  </div>
                </Card>

                <Card>
                  <div className="text-sm font-semibold">USA</div>
                  <div className="mt-2 text-sm text-muted">
                    {site.contact.locations.usa.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <div className="text-sm font-semibold">India</div>
                  <div className="mt-2 text-sm text-muted">
                    {site.contact.locations.india.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
