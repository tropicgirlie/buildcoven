import { Calendar, Clock, Users } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { formatDate } from "@/lib/utils";
import type { Course } from "@/types";

interface FinalApplyBannerProps {
  course: Course;
}

export function FinalApplyBanner({ course }: FinalApplyBannerProps) {
  const stats = [
    { icon: Calendar, label: "Starts", value: formatDate(course.start_date) },
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Users, label: "Cohort", value: "Small & personal" },
  ];

  return (
    <section
      className="rounded-lg bg-dark px-6 py-12 text-background sm:px-10 sm:py-14"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <p className="section-label text-background/60" aria-hidden>
            ✦
          </p>
          <h2
            id="final-cta-heading"
            className="mt-2 font-serif text-3xl font-medium text-background sm:text-4xl"
          >
            Join {course.badge ?? "Pilot 001"}
          </h2>
          <p className="mt-2 text-background/70">
            Limited spots for our first cohort.
          </p>
        </div>

        <ul className="flex flex-wrap gap-6 lg:gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-center gap-2 text-sm">
              <Icon className="size-4 text-primary" aria-hidden />
              <span>
                <span className="text-background/60">{label}: </span>
                <span className="font-medium">{value}</span>
              </span>
            </li>
          ))}
        </ul>

        <CTAButton
          href="/apply"
          className="shrink-0 bg-primary text-foreground hover:bg-primary-dark"
        >
          Apply for {course.badge ?? "Pilot 001"}
        </CTAButton>
      </div>
    </section>
  );
}
