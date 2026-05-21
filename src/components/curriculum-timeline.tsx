import { MoonPhaseIcon, getWeekMoonPhase } from "@/components/icons/moon-phases";
import type { CourseModule } from "@/types";

interface CurriculumTimelineProps {
  modules: CourseModule[];
}

export function CurriculumTimeline({ modules }: CurriculumTimelineProps) {
  return (
    <div className="mt-10">
      <div className="relative hidden sm:block">
        <div
          className="absolute left-[12.5%] right-[12.5%] top-5 border-t border-dashed border-border"
          aria-hidden
        />
      </div>

      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {modules.map((mod) => {
          const phase = getWeekMoonPhase(mod.week_number);
          return (
            <li key={mod.id} className="relative flex flex-col">
              <div className="mb-5 flex justify-center lg:justify-start">
                <MoonPhaseIcon
                  phase={phase}
                  className="relative z-10 size-7 text-primary"
                />
              </div>
              <p className="section-label">Week {mod.week_number}</p>
              <h3 className="mt-2 font-serif text-xl leading-snug">
                {mod.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {mod.description}
              </p>
              <p className="mt-4 text-sm">
                <span className="text-muted-foreground">Outcome: </span>
                <span className="font-medium">{mod.outcome}</span>
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
