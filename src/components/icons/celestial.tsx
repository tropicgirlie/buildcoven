import {
  Compass,
  Eye,
  Flower2,
  Moon,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  star: Star,
  moon: Moon,
  target: Target,
  eye: Eye,
  flower: Flower2,
};

interface CelestialIconProps {
  name: string;
  className?: string;
}

export function CelestialIcon({ name, className }: CelestialIconProps) {
  const Icon = iconMap[name] ?? Star;
  return (
    <Icon
      className={cn("size-5 stroke-[1.5] text-primary", className)}
      aria-hidden
    />
  );
}
