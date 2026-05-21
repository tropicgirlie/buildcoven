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
    { icon: Clock, label: "Duration", value: `${course.duration} live cohort` },
    { icon: Users, label: "Support", value: "Small cohort, personalized" },
  ];

  return (
    <section
      className="bg-dark text-background"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-14">
        <div className="flex flex-1 items-center gap-6">
          <svg
            className="hidden w-24 shrink-0 text-primary/60 sm:block lg:w-28"
            viewBox="0 0 120 100"
            aria-hidden
          >
            <circle cx="35" cy="70" r="16" fill="currentColor" opacity="0.35" />
            <circle cx="70" cy="55" r="20" fill="currentColor" opacity="0.25" />
            <circle cx="95" cy="72" r="14" fill="currentColor" opacity="0.3" />
          </svg>
          <div>
            <h2
              id="final-cta-heading"
              className="font-serif text-3xl text-background sm:text-4xl"
            >
              Join {course.badge ?? "Pilot 001"}
            </h2>
            <p className="mt-2 text-background/70">
              Limited spots for our first cohort.
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-center">
          {stats.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-center gap-2 text-sm">
              <Icon className="size-4 text-primary" aria-hidden />
              <span className="text-background/80">{value}</span>
            </li>
          ))}
        </ul>

        <CTAButton
          href="/apply"
          className="shrink-0 bg-primary text-foreground hover:bg-primary-dark lg:min-w-[220px]"
        >
          Apply for {course.badge ?? "Pilot 001"}
        </CTAButton>
      </div>
    </section>
  );
}
