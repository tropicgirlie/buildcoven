import { NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/auth/admin";
import {
  addApplication,
  listApplications,
} from "@/lib/applications-store";
import {
  insertApplicationD1,
  listApplicationsFromD1,
} from "@/lib/db/applications";
import { sendApplicationConfirmationEmail } from "@/lib/email/send-application-confirmation";
import type { TechnicalLevel } from "@/types";

export async function GET(request: Request) {
  if (!(await verifyAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const fromD1 = await listApplicationsFromD1();
  if (fromD1) return NextResponse.json(fromD1);
  return NextResponse.json(listApplications());
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const full_name = String(body.full_name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const location = String(body.location ?? "").trim();
    const project_idea = String(body.project_idea ?? "").trim();
    const why_now = String(body.why_now ?? "").trim();
    const technical_level = body.technical_level as TechnicalLevel;
    const scholarship_interest = Boolean(body.scholarship_interest);
    const commitment_confirmed = Boolean(body.commitment_confirmed);

    if (!full_name || !email || !location || !project_idea || !why_now) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!commitment_confirmed) {
      return NextResponse.json(
        { error: "Please confirm your 4-week commitment." },
        { status: 400 },
      );
    }

    const validLevels: TechnicalLevel[] = [
      "beginner",
      "curious",
      "designer",
      "no_code_user",
      "developer",
    ];
    if (!validLevels.includes(technical_level)) {
      return NextResponse.json(
        { error: "Invalid technical level." },
        { status: 400 },
      );
    }

    const payload = {
      full_name,
      email,
      location,
      project_idea,
      why_now,
      technical_level,
      scholarship_interest,
      commitment_confirmed,
    };

    const application = await insertApplicationD1(payload);
    if (application) {
      void sendApplicationConfirmationEmail({
        to: application.email,
        fullName: application.full_name,
        applicationId: application.id,
      }).catch(() => undefined);
      return NextResponse.json({ success: true, application });
    }

    const mem = addApplication(payload);
    void sendApplicationConfirmationEmail({
      to: mem.email,
      fullName: mem.full_name,
      applicationId: mem.id,
    }).catch(() => undefined);
    return NextResponse.json({ success: true, application: mem });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 },
    );
  }
}
