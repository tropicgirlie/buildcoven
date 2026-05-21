import { CelestialIcon } from "@/components/icons/celestial";
import type { LearningOutcome } from "@/types";

interface LearningOutcomeCardProps {
  outcome: LearningOutcome;
}

export function LearningOutcomeCard({ outcome }: LearningOutcomeCardProps) {
  return (
    <article className="border border-border bg-card p-5 editorial-shadow">
      <CelestialIcon name={outcome.icon} className="mb-3 size-5 text-primary" />
      <h3 className="font-serif text-lg leading-snug">{outcome.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {outcome.description}
      </p>
    </article>
  );
}
