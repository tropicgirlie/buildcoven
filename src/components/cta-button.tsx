import Link from "next/link";
import { Plus } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  href?: string;
  showPlus?: boolean;
  children: React.ReactNode;
}

export function CTAButton({
  href,
  showPlus = true,
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: CTAButtonProps) {
  const content = (
    <>
      <span className="uppercase tracking-wider">{children}</span>
      {showPlus && <Plus className="size-4" aria-hidden />}
    </>
  );

  if (href) {
    return (
      <Button
        asChild
        variant={variant}
        size={size}
        className={cn("uppercase tracking-wide", className)}
      >
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("uppercase tracking-wide", className)}
      {...props}
    >
      {content}
    </Button>
  );
}
