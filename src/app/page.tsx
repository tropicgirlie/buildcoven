import { CelestialIcon } from "@/components/icons/celestial";
import { MoonPhaseDivider } from "@/components/icons/moon-phases";
import { CTAButton } from "@/components/cta-button";
import { CourseInfoCard } from "@/components/course-info-card";
import { HeroVisual } from "@/components/hero-visual";
import { SectionLabel } from "@/components/section-label";
import { TRUST_TAGS, VALUES, PILOT_001_COURSE } from "@/data/seed";

export default function HomePage() {
  const course = PILOT_001_COURSE;

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-24 lg:px-8">
          <div className="lg:col-span-5">
            <SectionLabel>Pilot 001</SectionLabel>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Build your first website with AI.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              A women-led coding school for founders, designers, and curious
              builders who want to ship something real.
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
              <CTAButton href="/apply">Apply for Pilot 001</CTAButton>
              <CTAButton
                href="/courses/build-your-first-website-with-ai#curriculum"
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
            <CourseInfoCard course={course} sticky={false} />
          </div>
        </div>
      </section>

      <MoonPhaseDivider />

      <section id="why" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionLabel>Why Build Coven exists</SectionLabel>
        <blockquote className="mt-6 max-w-3xl font-serif text-2xl leading-relaxed sm:text-3xl">
          Women do not only need access to code. Women need authorship over the
          tools, products, websites, and systems shaping their lives.
        </blockquote>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          No bro culture. No shame. No jargon theatre. AI native learning for
          women building real things.
        </p>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionLabel>What you will build</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Leave with a live website
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Leave with a live website, a repeatable build workflow, and
            confidence reviewing code. Not another certificate — something you
            can show the world.
          </p>
          <CTAButton href="/courses/build-your-first-website-with-ai" className="mt-8">
            Explore Pilot 001
          </CTAButton>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionLabel>Our values</SectionLabel>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="rounded-lg border border-border bg-card p-6 editorial-shadow"
            >
              <h3 className="font-serif text-xl font-medium">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-dark px-8 py-14 text-center text-background sm:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Ready to ship your first site?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-background/70">
            Pilot 001 is open. Small cohort. Women-led. Built for builders who
            are done watching from the sidelines.
          </p>
          <CTAButton href="/apply" className="mt-8">
            Apply for Pilot 001
          </CTAButton>
        </div>
      </section>
    </>
  );
}
