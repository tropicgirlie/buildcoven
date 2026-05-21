import { MoonPhaseIcon, getWeekMoonPhase } from "@/components/icons/moon-phases";
import type { CourseModule } from "@/types";

interface CurriculumWeekCardProps {
  module: CourseModule;
}

export function CurriculumWeekCard({ module }: CurriculumWeekCardProps) {
  const phase = getWeekMoonPhase(module.week_number);

  return (
    <article className="relative flex flex-col rounded-lg border border-border bg-card p-6 editorial-shadow">
      <div className="mb-4 flex items-center justify-between">
        <span className="section-label">Week {module.week_number}</span>
        <MoonPhaseIcon phase={phase} className="text-primary" />
      </div>
      <h3 className="font-serif text-xl font-medium">{module.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {module.description}
      </p>
      <p className="mt-4 border-t border-border pt-4 text-sm">
        <span className="text-muted-foreground">Outcome: </span>
        <span className="font-medium text-foreground">{module.outcome}</span>
      </p>
    </article>
  );
}
