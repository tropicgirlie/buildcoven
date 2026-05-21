"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CTAButton } from "@/components/cta-button";
import type { TechnicalLevel } from "@/types";

const technicalLevels: { value: TechnicalLevel; label: string }[] = [
  { value: "beginner", label: "Beginner" },
  { value: "curious", label: "Curious — never built before" },
  { value: "designer", label: "Designer" },
  { value: "no_code_user", label: "No-code user" },
  { value: "developer", label: "Developer" },
];

export function ApplyForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [technicalLevel, setTechnicalLevel] = useState<TechnicalLevel>("curious");
  const [scholarship, setScholarship] = useState(false);
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!consent) {
      setError("Please confirm you agree to be contacted about your application.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.get("full_name"),
          email: formData.get("email"),
          location: formData.get("location"),
          project_idea: formData.get("project_idea"),
          why_now: formData.get("why_now"),
          technical_level: technicalLevel,
          scholarship_interest: scholarship,
          commitment_confirmed: formData.get("commitment") === "on",
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {error && (
        <div
          role="alert"
          className="rounded-md border border-primary-dark/30 bg-accent/30 px-4 py-3 text-sm text-foreground"
        >
          {error}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="full_name">Full name *</Label>
          <Input
            id="full_name"
            name="full_name"
            required
            autoComplete="name"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            name="location"
            required
            placeholder="City, country"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project_idea">What do you want to build? *</Label>
        <Textarea
          id="project_idea"
          name="project_idea"
          required
          placeholder="Describe your website or project idea..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="why_now">Why now? *</Label>
        <Textarea
          id="why_now"
          name="why_now"
          required
          placeholder="What's motivating you to join this cohort?"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="technical_level">Current technical level *</Label>
        <Select
          value={technicalLevel}
          onValueChange={(v) => setTechnicalLevel(v as TechnicalLevel)}
        >
          <SelectTrigger id="technical_level" aria-label="Technical level">
            <SelectValue placeholder="Select your level" />
          </SelectTrigger>
          <SelectContent>
            {technicalLevels.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="scholarship"
          checked={scholarship}
          onCheckedChange={(c) => setScholarship(c === true)}
        />
        <Label htmlFor="scholarship" className="font-normal leading-relaxed">
          I&apos;m interested in scholarship or reduced pricing
        </Label>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="commitment" name="commitment" required />
        <Label htmlFor="commitment" className="font-normal leading-relaxed">
          I can commit to 4 weeks of cohort participation (4–6 hrs/week) *
        </Label>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(c) => setConsent(c === true)}
          required
        />
        <Label htmlFor="consent" className="font-normal leading-relaxed">
          I agree to be contacted about my application and understand my data
          will be stored securely. *
        </Label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <CTAButton type="submit" disabled={loading} showPlus={!loading}>
          {loading ? "Submitting…" : "Submit application"}
        </CTAButton>
        <Link
          href="/courses/build-your-first-website-with-ai"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to course
        </Link>
      </div>
    </form>
  );
}
