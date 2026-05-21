import Image from "next/image";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col border border-border bg-card p-6 editorial-shadow">
      <p className="flex-1 font-serif text-xl leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-8 flex items-center gap-3">
        <Image
          src={testimonial.avatar_url}
          alt=""
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        />
        <cite className="not-italic">
          <span className="block text-sm font-medium">{testimonial.name}</span>
          <span className="text-xs text-muted-foreground">
            {testimonial.role}
          </span>
        </cite>
      </footer>
    </blockquote>
  );
}
