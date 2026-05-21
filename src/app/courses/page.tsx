"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/course-card";
import { SectionLabel } from "@/components/section-label";
import { ALL_COURSES, COURSE_CATEGORIES } from "@/data/seed";
import { cn } from "@/lib/utils";

export default function CoursesPage() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return ALL_COURSES;
    return ALL_COURSES.filter((c) => c.category === category);
  }, [category]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionLabel>Courses</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Learn with us</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        Cohort-based courses for women builders. Ship real projects with AI —
        not passive video libraries.
      </p>

      <div
        className="mt-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Course categories"
      >
        {COURSE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={category === cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              category === cat
                ? "border-primary bg-primary/20 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No courses in this category yet. Check back soon.
        </p>
      )}
    </div>
  );
}
