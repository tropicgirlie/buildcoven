import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { SectionLabel } from "@/components/section-label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <SectionLabel>Received</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl">
        Your application has been received.
      </h1>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        We&apos;ll review your application and be in touch within a few business
        days. Check your inbox (and spam) for a confirmation email.
      </p>

      <div className="mt-10 rounded-lg border border-border bg-muted/50 p-6 text-left">
        <h2 className="font-serif text-xl font-medium">What happens next</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          <li>We review your application and project idea</li>
          <li>You&apos;ll receive an email with next steps or questions</li>
          <li>If accepted, you&apos;ll get enrollment and payment details</li>
          <li>Cohort kicks off — see you in the coven</li>
        </ol>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <CTAButton href="/courses/build-your-first-website-with-ai">
          Back to course
        </CTAButton>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
