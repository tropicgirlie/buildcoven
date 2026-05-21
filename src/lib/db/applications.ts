import type { Application, ApplicationStatus, TechnicalLevel } from "@/types";
import { getD1 } from "./context";

function rowToApplication(row: Record<string, unknown>): Application {
  return {
    id: String(row.id),
    full_name: String(row.full_name),
    email: String(row.email),
    location: String(row.location),
    project_idea: String(row.project_idea),
    why_now: String(row.why_now),
    technical_level: row.technical_level as TechnicalLevel,
    scholarship_interest: Boolean(row.scholarship_interest),
    commitment_confirmed: Boolean(row.commitment_confirmed),
    status: row.status as ApplicationStatus,
    created_at: String(row.created_at),
  };
}

export async function listApplicationsFromD1(): Promise<Application[] | null> {
  const db = await getD1();
  if (!db) return null;

  const { results } = await db
    .prepare(
      `SELECT * FROM applications ORDER BY created_at DESC`,
    )
    .all();

  return (results ?? []).map((row) =>
    rowToApplication(row as Record<string, unknown>),
  );
}

export async function insertApplicationD1(data: {
  full_name: string;
  email: string;
  location: string;
  project_idea: string;
  why_now: string;
  technical_level: TechnicalLevel;
  scholarship_interest: boolean;
  commitment_confirmed: boolean;
}): Promise<Application | null> {
  const db = await getD1();
  if (!db) return null;

  const id = crypto.randomUUID();
  const created_at = new Date().toISOString();

  await db
    .prepare(
      `INSERT INTO applications (
        id, full_name, email, location, project_idea, why_now,
        technical_level, scholarship_interest, commitment_confirmed, status, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)`,
    )
    .bind(
      id,
      data.full_name,
      data.email,
      data.location,
      data.project_idea,
      data.why_now,
      data.technical_level,
      data.scholarship_interest ? 1 : 0,
      data.commitment_confirmed ? 1 : 0,
      created_at,
    )
    .run();

  return {
    id,
    ...data,
    status: "new",
    created_at,
  };
}

export async function updateApplicationStatusD1(
  id: string,
  status: ApplicationStatus,
): Promise<Application | null> {
  const db = await getD1();
  if (!db) return null;

  await db
    .prepare(`UPDATE applications SET status = ? WHERE id = ?`)
    .bind(status, id)
    .run();

  const row = await db
    .prepare(`SELECT * FROM applications WHERE id = ?`)
    .bind(id)
    .first();

  if (!row) return null;
  return rowToApplication(row as Record<string, unknown>);
}
