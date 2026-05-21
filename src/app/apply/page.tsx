import { ApplyForm } from "@/components/apply-form";
import { SectionLabel } from "@/components/section-label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply for Pilot 001 — Build Your First Website With AI.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionLabel>Application</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl">Apply for Pilot 001</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Tell us about you and what you want to build. We review every
        application personally — no automated rejection bots.
      </p>
      <div className="mt-12 rounded-lg border border-border bg-card p-6 sm:p-8 editorial-shadow">
        <ApplyForm />
      </div>
    </div>
  );
}
