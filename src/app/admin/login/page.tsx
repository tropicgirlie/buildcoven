import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin-login-form";
import { SectionLabel } from "@/components/section-label";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
      <SectionLabel>Admin</SectionLabel>
      <h1 className="mt-4 font-serif text-3xl">Sign in</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Enter your admin secret to view applications.
      </p>
      <Suspense fallback={<p className="mt-8 text-sm text-muted-foreground">Loading…</p>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
