import Image from "next/image";
import { Plus } from "lucide-react";
import type { Instructor } from "@/types";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <section
      className="rounded-lg border border-border bg-card p-6 sm:p-8 editorial-shadow"
      aria-labelledby="instructor-heading"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <Image
          src={instructor.avatar_url}
          alt=""
          width={120}
          height={120}
          className="size-28 shrink-0 rounded-full object-cover ring-2 ring-border"
        />
        <div className="flex-1">
          <h2
            id="instructor-heading"
            className="font-serif text-3xl font-medium"
          >
            {instructor.name}
          </h2>
          <p className="mt-1 text-sm text-primary">{instructor.title}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            {instructor.bio}
          </p>
        </div>
        <ul className="space-y-3 lg:min-w-[200px]">
          {instructor.credentials.map((cred) => (
            <li
              key={cred}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <Plus
                className="size-3 shrink-0 text-primary"
                aria-hidden
              />
              {cred}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
