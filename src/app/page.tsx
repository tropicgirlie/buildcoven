import { PilotLanding } from "@/components/pilot-landing";
import { getPilotCourse } from "@/lib/data/courses";

export default function HomePage() {
  const course = getPilotCourse();
  return <PilotLanding course={course} />;
}
