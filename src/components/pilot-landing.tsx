import { CelestialIcon } from "@/components/icons/celestial";
import { MoonPhaseDivider } from "@/components/icons/moon-phases";
import { MoonPhaseIcon } from "@/components/icons/moon-phases";
import { CTAButton } from "@/components/cta-button";
import { CourseInfoCard } from "@/components/course-info-card";
import { CurriculumTimeline } from "@/components/curriculum-timeline";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinalApplyBanner } from "@/components/final-apply-banner";
import { HeroVisual } from "@/components/hero-visual";
import { InstructorCard } from "@/components/instructor-card";
import { LearningOutcomeCard } from "@/components/learning-outcome-card";
import { MysticalEyeIllustration } from "@/components/mystical-eye-illustration";
import { SectionLabel } from "@/components/section-label";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  getFAQItems,
  getTestimonials,
  LEARNING_OUTCOMES,
  LEAVE_WITH_ITEMS,
} from "@/lib/data/courses";
import { TRUST_TAGS } from "@/data/seed";
import type { Course } from "@/types";

interface PilotLandingProps {
  course: Course;
}

export async function PilotLanding({ course }: PilotLandingProps) {
  const testimonials = await getTestimonials(course.id);
  const faqItems = await getFAQItems();
  const modules = course.modules ?? [];

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:py-16 lg:px-10">
          <div className="lg:col-span-4 xl:col-span-4">
            <SectionLabel>
              <span aria-hidden>✦</span> {course.badge ?? "Pilot 001"}{" "}
              <span aria-hidden>✦</span>
            </SectionLabel>
            <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.05] sm:text-5xl xl:text-[3.25rem]">
              Build Your First Website With AI
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {course.subtitle}
            </p>

            <ul className="mt-8 grid max-w-sm grid-cols-2 gap-x-4 gap-y-4">
              {TRUST_TAGS.map((tag) => (
                <li
                  key={tag.label}
                  className="flex items-start gap-2 text-[10px] font-medium uppercase leading-snug tracking-[0.14em] text-muted-foreground"
                >
                  <CelestialIcon
                    name={tag.icon}
                    className="mt-0.5 size-3.5 shrink-0 text-primary"
                  />
                  {tag.label}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <CTAButton href="/apply">
                Apply for {course.badge ?? "Pilot 001"}
              </CTAButton>
              <CTAButton href="#curriculum" variant="outline">
                View syllabus
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5">
            <HeroVisual />
          </div>

          <div className="lg:col-span-3">
            <CourseInfoCard course={course} />
          </div>
        </div>
      </section>

      {course.instructor && (
        <section
          id="instructor"
          className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10"
        >
          <InstructorCard instructor={course.instructor} />
        </section>
      )}

      <MoonPhaseDivider />

      <section
        id="curriculum"
        className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10"
      >
        <SectionLabel>Curriculum overview</SectionLabel>
        <CurriculumTimeline modules={modules} />
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>What you&apos;ll learn</SectionLabel>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {LEARNING_OUTCOMES.map((outcome) => (
                  <LearningOutcomeCard key={outcome.id} outcome={outcome} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <SectionLabel>What you leave with</SectionLabel>
              <ul className="mt-8 space-y-4">
                {LEAVE_WITH_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <MoonPhaseIcon
                      phase="waxing"
                      className="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <MysticalEyeIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10">
        <SectionLabel>What our students say</SectionLabel>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:px-10"
      >
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <FinalApplyBanner course={course} />
    </>
  );
}
