import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-lg border border-border bg-card p-6 editorial-shadow">
      <Quote
        className="size-8 text-primary/50"
        aria-hidden
      />
      <p className="mt-4 flex-1 font-serif text-lg leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
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
