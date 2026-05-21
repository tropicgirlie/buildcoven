export function MysticalEyeIllustration() {
  return (
    <svg
      viewBox="0 0 200 220"
      className="mx-auto mt-10 w-full max-w-[180px] text-primary/70"
      aria-hidden
    >
      <path
        d="M100 20 L180 180 H20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="100"
        cy="110"
        rx="38"
        ry="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="100" cy="110" r="10" fill="currentColor" opacity="0.5" />
      <path
        d="M70 175 Q100 150 130 175"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
      />
      <circle cx="72" cy="188" r="8" fill="currentColor" opacity="0.2" />
      <circle cx="128" cy="188" r="8" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
