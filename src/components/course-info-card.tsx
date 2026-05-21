import Image from "next/image";
import { Calendar, Clock, Layers, Users } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { cn, formatDate, formatPrice } from "@/lib/utils";
import type { Course } from "@/types";

interface CourseInfoCardProps {
  course: Course;
  className?: string;
  sticky?: boolean;
}

export function CourseInfoCard({
  course,
  className,
  sticky = true,
}: CourseInfoCardProps) {
  const details = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Calendar, label: "Starts", value: formatDate(course.start_date) },
    { icon: Layers, label: "Format", value: course.format },
    {
      icon: Users,
      label: "Time commitment",
      value: course.time_commitment ?? "4–6 hrs / week",
    },
  ];

  return (
    <aside
      className={cn(
        "border border-border bg-card editorial-shadow",
        sticky && "lg:sticky lg:top-24",
        className,
      )}
      aria-label="Course details"
    >
      <div className="bg-dark px-5 py-3">
        <p className="section-label text-background/75">
          Cohort-based course
        </p>
      </div>

      <div className="space-y-0 p-5">
        <ul className="divide-y divide-border">
          {details.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex gap-3 py-4 text-sm first:pt-0">
              <Icon
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden
              />
              <div>
                <span className="text-muted-foreground">{label}</span>
                <p className="font-medium text-foreground">{value}</p>
              </div>
            </li>
          ))}
          <li className="flex items-baseline justify-between gap-3 py-4">
            <span className="text-sm text-muted-foreground">Price</span>
            <p className="font-serif text-2xl font-medium">
              {formatPrice(course.price)}
            </p>
          </li>
        </ul>

        {course.instructor && (
          <div className="flex items-center gap-3 border-t border-border pt-4">
            <Image
              src={course.instructor.avatar_url}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{course.instructor.name}</p>
              <p className="text-xs text-muted-foreground">
                {course.instructor.title}
              </p>
            </div>
          </div>
        )}

        <CTAButton href="/apply" className="mt-5 w-full">
          Apply for {course.badge ?? "Pilot 001"}
        </CTAButton>

        <p className="mt-3 text-center text-[11px] text-muted-foreground">
          Payment link sent after acceptance
        </p>
      </div>
    </aside>
  );
}
