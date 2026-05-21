import { NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/auth/admin";
import { updateApplicationStatus } from "@/lib/applications-store";
import type { ApplicationStatus } from "@/types";

const validStatuses: ApplicationStatus[] = [
  "new",
  "reviewed",
  "accepted",
  "waitlisted",
  "rejected",
];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await verifyAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = (await request.json()) as { status?: string };
  const status = body.status as ApplicationStatus;

  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const updated = updateApplicationStatus(id, status);
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}
