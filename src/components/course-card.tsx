import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { cn, formatDate, formatPrice } from "@/lib/utils";
import type { Course, CourseStatus } from "@/types";

const statusLabels: Record<CourseStatus, string> = {
  open: "Open",
  waitlist: "Waitlist",
  coming_soon: "Coming soon",
};

const statusStyles: Record<CourseStatus, string> = {
  open: "bg-primary/20 text-foreground",
  waitlist: "bg-secondary/20 text-foreground",
  coming_soon: "bg-muted text-muted-foreground",
};

interface CourseCardProps {
  course: Course;
}

function CardContent({ course, isClickable }: { course: Course; isClickable: boolean }) {
  return (
    <>
      <div className="mb-4 flex items-start justify-between gap-2">
        <span className="section-label">{course.category}</span>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide",
            statusStyles[course.status],
          )}
        >
          {statusLabels[course.status]}
        </span>
      </div>

      <h3 className="font-serif text-2xl leading-tight group-hover:text-primary-dark">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {course.subtitle}
      </p>

      <dl className="mt-6 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="size-4 shrink-0 text-primary" aria-hidden />
          <dt className="sr-only">Duration</dt>
          <dd>
            {course.duration} · {course.format}
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="size-4 shrink-0 text-primary" aria-hidden />
          <dt className="sr-only">Start date</dt>
          <dd>Starts {formatDate(course.start_date)}</dd>
        </div>
        {course.instructor && (
          <div className="flex items-center gap-2">
            <User className="size-4 shrink-0 text-primary" aria-hidden />
            <dt className="sr-only">Instructor</dt>
            <dd>{course.instructor.name}</dd>
          </div>
        )}
      </dl>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="font-medium text-foreground">
          {course.price > 0 ? formatPrice(course.price) : "Free"}
        </span>
        {isClickable && (
          <span className="text-sm text-primary group-hover:underline">
            View course →
          </span>
        )}
      </div>
    </>
  );
}

export function CourseCard({ course }: CourseCardProps) {
  const href = `/courses/${course.slug}`;
  const isClickable = course.status !== "coming_soon";
  const className = cn(
    "group flex flex-col rounded-lg border border-border bg-card p-6 editorial-shadow transition-all",
    isClickable && "hover:border-primary/40 hover:shadow-md",
    !isClickable && "opacity-80",
  );

  if (isClickable) {
    return (
      <Link href={href} className={className}>
        <CardContent course={course} isClickable />
      </Link>
    );
  }

  return (
    <div className={className}>
      <CardContent course={course} isClickable={false} />
    </div>
  );
}
