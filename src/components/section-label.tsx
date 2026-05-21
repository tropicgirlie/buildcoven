import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn("section-label flex items-center gap-2", className)}>
      <span aria-hidden>✦</span>
      {children}
      <span aria-hidden>✦</span>
    </p>
  );
}
