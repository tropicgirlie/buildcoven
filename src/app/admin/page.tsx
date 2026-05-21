import { AdminApplicationsTable } from "@/components/admin-applications-table";
import { AdminLogoutButton } from "@/components/admin-logout-button";
import { SectionLabel } from "@/components/section-label";
import { getApplications } from "@/lib/data/courses";
import { getAdminSecret } from "@/lib/auth/admin";
import { getStripePaymentLink } from "@/lib/env";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const applications = await getApplications();
  const isProtected = Boolean(getAdminSecret());
  const stripePaymentLink = getStripePaymentLink();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <SectionLabel>Admin</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl">Applications</h1>
        </div>
        {isProtected && <AdminLogoutButton />}
      </div>

      {!isProtected && (
        <p
          role="status"
          className="mt-4 rounded-md border border-primary/30 bg-accent/20 px-4 py-3 text-sm text-muted-foreground"
        >
          MVP admin is open. Set{" "}
          <code className="text-foreground">ADMIN_SECRET</code> in Vercel env
          vars before production.
        </p>
      )}

      <p className="mt-2 text-sm text-muted-foreground">
        {applications.length} application
        {applications.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-8">
        <AdminApplicationsTable
          applications={applications}
          stripePaymentLink={stripePaymentLink}
        />
      </div>
    </div>
  );
}
