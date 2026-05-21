import { notFound } from "next/navigation";
import { CelestialIcon } from "@/components/icons/celestial";
import { MoonPhaseDivider } from "@/components/icons/moon-phases";
import { CTAButton } from "@/components/cta-button";
import { CourseInfoCard } from "@/components/course-info-card";
import { CurriculumWeekCard } from "@/components/curriculum-week-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinalApplyBanner } from "@/components/final-apply-banner";
import { HeroVisual } from "@/components/hero-visual";
import { InstructorCard } from "@/components/instructor-card";
import { LearningOutcomeCard } from "@/components/learning-outcome-card";
import { SectionLabel } from "@/components/section-label";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  getCourse,
  getFAQItems,
  getTestimonials,
  LEARNING_OUTCOMES,
  LEAVE_WITH_ITEMS,
  WHO_FOR,
  WHO_NOT_FOR,
} from "@/lib/data/courses";
import { TRUST_TAGS } from "@/data/seed";
import { MoonPhaseIcon } from "@/components/icons/moon-phases";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  const testimonials = await getTestimonials(course.id);
  const faqItems = await getFAQItems();
  const modules = course.modules ?? [];

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-20 lg:px-8">
          <div className="lg:col-span-5">
            {course.badge && (
              <SectionLabel>{course.badge}</SectionLabel>
            )}
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {course.subtitle}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_TAGS.map((tag) => (
                <li
                  key={tag.label}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"
                >
                  <CelestialIcon name={tag.icon} className="size-4" />
                  {tag.label}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="/apply">
                Apply for {course.badge ?? "Pilot 001"}
              </CTAButton>
              <CTAButton
                href="#curriculum"
                variant="outline"
              >
                View syllabus
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-4">
            <HeroVisual />
          </div>

          <div className="lg:col-span-3">
            <CourseInfoCard course={course} />
          </div>
        </div>
      </section>

      {course.instructor && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <InstructorCard instructor={course.instructor} />
        </section>
      )}

      <MoonPhaseDivider />

      <section
        id="curriculum"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionLabel>Curriculum overview</SectionLabel>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
          Four weeks to a live site
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod) => (
            <CurriculumWeekCard key={mod.id} module={mod} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>What you&apos;ll learn</SectionLabel>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {LEARNING_OUTCOMES.map((outcome) => (
                  <LearningOutcomeCard key={outcome.id} outcome={outcome} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <SectionLabel>What you leave with</SectionLabel>
              <ul className="mt-8 space-y-4">
                {LEAVE_WITH_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <MoonPhaseIcon
                      phase="waxing"
                      className="mt-0.5 size-5 shrink-0 text-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Who this is for</SectionLabel>
            <ul className="mt-6 space-y-3">
              {WHO_FOR.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary" aria-hidden>
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>Who this is not for</SectionLabel>
            <ul className="mt-6 space-y-3">
              {WHO_NOT_FOR.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-muted-foreground leading-relaxed"
                >
                  <span className="text-muted-foreground" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionLabel>What our students say</SectionLabel>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 font-serif text-3xl">Common questions</h2>
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <FinalApplyBanner course={course} />
      </section>
    </>
  );
}
