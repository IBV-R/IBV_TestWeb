import Link from "next/link";

import { footerLinks, site } from "@/lib/site";

import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-sm font-semibold">
              {site.shortName}
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">{site.name}</div>
              <div className="mt-1 text-sm leading-6 text-muted">
                {site.description}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Pages</div>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href={`mailto:${site.contact.emails.info}`}
                >
                  {site.contact.emails.info}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href={`mailto:${site.contact.emails.careers}`}
                >
                  {site.contact.emails.careers}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Locations</div>
            <div className="mt-4 space-y-4 text-sm text-muted">
              <div>
                <div className="font-medium text-foreground/90">
                  {site.contact.locations.usa.label}
                </div>
                <div className="mt-1">
                  {site.contact.locations.usa.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground/90">
                  {site.contact.locations.india.label}
                </div>
                <div className="mt-1">
                  {site.contact.locations.india.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:col-span-12">
          <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} {site.name}</div>
            <div className="text-muted">Built for defence, dual-use, and deep tech investing.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
