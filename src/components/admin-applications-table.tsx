"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Application, ApplicationStatus } from "@/types";

const statuses: ApplicationStatus[] = [
  "new",
  "reviewed",
  "accepted",
  "waitlisted",
  "rejected",
];

interface AdminApplicationsTableProps {
  applications: Application[];
  stripePaymentLink?: string;
}

export function AdminApplicationsTable({
  applications: initial,
  stripePaymentLink,
}: AdminApplicationsTableProps) {
  const [applications, setApplications] = useState(initial);
  const [updating, setUpdating] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function updateStatus(id: string, status: ApplicationStatus) {
    setUpdating(id);
    setError(null);
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
        credentials: "include",
      });
      if (res.ok) {
        setApplications((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status } : a)),
        );
      } else if (res.status === 401) {
        setError("Session expired. Please sign in again.");
      }
    } finally {
      setUpdating(null);
    }
  }

  if (applications.length === 0) {
    return (
      <p className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
        No applications yet. Submit one via the apply form.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
      <div className="overflow-x-auto rounded-lg border border-border bg-card editorial-shadow">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Level</th>
              <th className="px-4 py-3 font-medium">Idea</th>
              <th className="px-4 py-3 font-medium">Scholarship</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Enroll</th>
              <th className="px-4 py-3 font-medium">Created</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium">{app.full_name}</td>
                <td className="px-4 py-3">
                  <a
                    href={`mailto:${app.email}`}
                    className="text-primary-dark hover:underline"
                  >
                    {app.email}
                  </a>
                </td>
                <td className="px-4 py-3 capitalize text-muted-foreground">
                  {app.technical_level.replace(/_/g, " ")}
                </td>
                <td className="max-w-[200px] truncate px-4 py-3 text-muted-foreground">
                  {app.project_idea}
                </td>
                <td className="px-4 py-3">
                  {app.scholarship_interest ? "Yes" : "No"}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={app.status}
                    onChange={(e) =>
                      updateStatus(app.id, e.target.value as ApplicationStatus)
                    }
                    disabled={updating === app.id}
                    className="rounded border border-border bg-background px-2 py-1 text-sm capitalize"
                    aria-label={`Status for ${app.full_name}`}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  {app.status === "accepted" && stripePaymentLink ? (
                    <a
                      href={stripePaymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-dark hover:underline"
                    >
                      Payment link
                      <ExternalLink className="size-3" aria-hidden />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                  {formatDate(app.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
