import Link from "next/link";

import { navLinks, site } from "@/lib/site";

import { Container } from "./container";
import { ButtonLink } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-sm font-semibold tracking-tight">
            {site.shortName}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground/90 sm:inline">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact" variant="primary" size="sm">
            Get in touch
          </ButtonLink>
        </div>

        <details className="group md:hidden">
          <summary className="list-none rounded-md p-2 text-foreground/80 transition hover:bg-surface hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            <span className="sr-only">Open menu</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </summary>
          <div className="absolute left-0 right-0 top-16 border-b border-border bg-background/95 backdrop-blur">
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-3">
                <ButtonLink href="/contact" variant="primary" size="md" className="w-full">
                  Get in touch
                </ButtonLink>
              </div>
            </Container>
          </div>
        </details>
      </Container>
    </header>
  );
}
