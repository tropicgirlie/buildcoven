import Link from "next/link";
import { CTAButton } from "@/components/cta-button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        This path doesn&apos;t exist in the coven yet.
      </p>
      <CTAButton href="/" className="mt-8">
        Go home
      </CTAButton>
      <p className="mt-4">
        <Link
          href="/courses"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Browse courses
        </Link>
      </p>
    </div>
  );
}
