import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-lg border border-border bg-muted editorial-shadow lg:max-w-none"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-accent/20" />
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
        alt=""
        fill
        className="object-cover object-center opacity-90 mix-blend-multiply grayscale-[30%] sepia-[20%]"
        sizes="(max-width: 768px) 100vw, 400px"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="size-48 rounded-full border border-primary/30 bg-background/20 backdrop-blur-sm sm:size-56"
          style={{
            boxShadow: "inset 0 0 60px rgba(212, 163, 158, 0.15)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="size-12 rounded-full bg-primary/30 blur-sm"
            style={{ transform: `translateY(${i * 4}px)` }}
          />
        ))}
      </div>
    </div>
  );
}
