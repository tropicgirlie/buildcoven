"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/courses", label: "Courses", hasDropdown: true },
  { href: "/courses", label: "Workshops" },
  { href: "/courses?category=Free+Lessons", label: "Free Lessons" },
  { href: "/#instructor", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.25rem] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground"
        >
          Build Coven
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-[13px] text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="size-3.5 opacity-60" aria-hidden />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="/apply" size="sm">
            Apply
          </CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-background lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton href="/apply" className="mt-2 w-full" size="sm">
            Apply
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
