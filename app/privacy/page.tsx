import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for IndusBridge Ventures.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Privacy"
            title="Privacy policy"
            description="This page is a placeholder for the firm’s privacy policy and data handling disclosures."
          />

          <div className="mt-10 max-w-3xl space-y-4 text-sm leading-7 text-muted">
            <p>
              IndusBridge Ventures is committed to protecting your privacy. We
              collect contact details you submit through our forms to respond to
              inquiries and evaluate potential opportunities.
            </p>
            <p>
              We do not sell personal information. If you would like to request
              access or deletion of your data, contact us at
              info@indusbridgeventures.com.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
