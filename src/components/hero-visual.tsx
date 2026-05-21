import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      className="grain relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-border bg-[#ebe4dc] lg:max-w-none"
      aria-hidden
    >
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85"
        alt=""
        fill
        className="object-cover object-[center_20%] opacity-90 sepia-[25%] saturate-[0.85] contrast-[1.05]"
        sizes="(max-width: 768px) 90vw, 420px"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f5f1]/10 via-transparent to-[#ead4cf]/50" />

      <div className="absolute left-1/2 top-[18%] size-[42%] -translate-x-1/2 rounded-full border border-white/30 bg-[radial-gradient(circle_at_30%_30%,#f5efe8,transparent_70%)] opacity-90 shadow-[inset_0_0_40px_rgba(255,255,255,0.15)]" />

      <svg
        className="absolute bottom-0 left-0 right-0 h-[38%] w-full text-[#c99595]"
        viewBox="0 0 400 160"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden
      >
        <path
          d="M40 160 C60 90, 90 110, 120 70 C150 30, 170 90, 200 55 C230 20, 250 80, 280 45 C310 10, 340 70, 360 160 Z"
          fill="currentColor"
          opacity="0.15"
        />
        <circle cx="95" cy="118" r="18" fill="currentColor" opacity="0.25" />
        <circle cx="205" cy="98" r="22" fill="currentColor" opacity="0.2" />
        <circle cx="310" cy="112" r="16" fill="currentColor" opacity="0.22" />
      </svg>
    </div>
  );
}
