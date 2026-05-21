import { cn } from "@/lib/utils";

type MoonPhase = "new" | "waxing" | "full" | "waning";

interface MoonPhaseIconProps {
  phase: MoonPhase;
  className?: string;
}

export function MoonPhaseIcon({ phase, className }: MoonPhaseIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("size-6", className)}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      {phase === "waxing" && (
        <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" fillOpacity="0.25" />
      )}
      {phase === "full" && (
        <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.25" />
      )}
      {phase === "waning" && (
        <path
          d="M12 21a9 9 0 0 1 0-18"
          fill="currentColor"
          fillOpacity="0.25"
        />
      )}
    </svg>
  );
}

export function MoonPhaseDivider() {
  const phases: MoonPhase[] = ["new", "waxing", "full", "waning"];
  return (
    <div
      className="flex items-center justify-center gap-6 py-8"
      aria-hidden
    >
      {phases.map((phase) => (
        <MoonPhaseIcon
          key={phase}
          phase={phase}
          className="size-5 text-primary opacity-70"
        />
      ))}
    </div>
  );
}

export function getWeekMoonPhase(week: number): MoonPhase {
  const phases: MoonPhase[] = ["waxing", "waxing", "full", "waning"];
  return phases[week - 1] ?? "new";
}
