import { CelestialIcon } from "@/components/icons/celestial";
import type { LearningOutcome } from "@/types";

interface LearningOutcomeCardProps {
  outcome: LearningOutcome;
}

export function LearningOutcomeCard({ outcome }: LearningOutcomeCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-6 editorial-shadow">
      <CelestialIcon name={outcome.icon} className="mb-4 size-6" />
      <h3 className="font-serif text-lg font-medium">{outcome.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {outcome.description}
      </p>
    </article>
  );
}
