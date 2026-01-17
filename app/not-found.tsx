import Link from "next/link";

import { Container } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] text-muted">
            404
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Go home</ButtonLink>
            <Link
              href="/contact"
              className="rounded-md px-4 py-2 text-sm text-foreground/80 hover:bg-surface hover:text-foreground"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
