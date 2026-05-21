import { FAQAccordion } from "@/components/faq-accordion";
import { SectionLabel } from "@/components/section-label";
import { CTAButton } from "@/components/cta-button";
import { FAQ_ITEMS } from "@/data/seed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Build Coven and Pilot 001.",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionLabel>FAQ</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
        Questions & answers
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Everything you need to know before applying. Still unsure?{" "}
        <a href="/apply" className="text-primary-dark underline">
          Apply anyway
        </a>{" "}
        — we&apos;d rather hear from you.
      </p>

      <div className="mt-12">
        <FAQAccordion items={FAQ_ITEMS} />
      </div>

      <div className="mt-16 text-center">
        <CTAButton href="/apply">Apply for Pilot 001</CTAButton>
      </div>
    </div>
  );
}
