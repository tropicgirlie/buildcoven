"use client";

import Link from "next/link";
import { MoonPhaseIcon } from "@/components/icons/moon-phases";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Courses: [
    { href: "/courses/build-your-first-website-with-ai", label: "Pilot 001" },
    { href: "/courses", label: "All Courses" },
    { href: "/courses?category=Free+Lessons", label: "Free Lessons" },
  ],
  Community: [
    { href: "/apply", label: "Apply" },
    { href: "/faq", label: "FAQ" },
  ],
  Company: [
    { href: "/#why", label: "About" },
    { href: "/faq", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-serif text-2xl font-medium">
              Build Coven
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              We code. We build. We raise the future.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="section-label mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h3 className="section-label mb-4">Stay in the coven</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Occasional notes on building, AI, and women shipping real work.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                aria-label="Email for newsletter"
                className="flex-1"
              />
              <Button type="submit" variant="default">
                Join
              </Button>
            </form>
            {/* TODO: Connect newsletter to Resend / email provider */}
          </div>

          <div
            className="hidden items-end justify-end gap-3 lg:col-span-12 lg:flex"
            aria-hidden
          >
            <MoonPhaseIcon phase="waxing" className="size-8 text-primary/60" />
            <MoonPhaseIcon phase="full" className="size-10 text-primary" />
            <MoonPhaseIcon phase="waning" className="size-8 text-primary/60" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Build Coven. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://instagram.com"
              className="hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              className="hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter
            </a>
            <Link href="/faq" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/faq" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
