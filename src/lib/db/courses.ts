import type { D1Database } from "@cloudflare/workers-types";
import type { Course, CourseModule, Instructor, Testimonial } from "@/types";
import { getD1 } from "./context";

function parseCredentials(raw: string): string[] {
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export async function listCoursesFromD1(): Promise<Course[] | null> {
  const db = await getD1();
  if (!db) return null;

  const { results: courses } = await db
    .prepare(`SELECT * FROM courses ORDER BY created_at ASC`)
    .all();

  if (!courses?.length) return null;

  const enriched: Course[] = [];
  for (const row of courses) {
    const course = await enrichCourse(db, row as Record<string, unknown>);
    if (course) enriched.push(course);
  }
  return enriched;
}

export async function getCourseBySlugFromD1(
  slug: string,
): Promise<Course | null> {
  const db = await getD1();
  if (!db) return null;

  const row = await db
    .prepare(`SELECT * FROM courses WHERE slug = ?`)
    .bind(slug)
    .first();

  if (!row) return null;
  return enrichCourse(db, row as Record<string, unknown>);
}

async function enrichCourse(
  db: D1Database,
  row: Record<string, unknown>,
): Promise<Course | null> {
  const instructorRow = row.instructor_id
    ? await db
        .prepare(`SELECT * FROM instructors WHERE id = ?`)
        .bind(row.instructor_id)
        .first()
    : null;

  const { results: modules } = await db
    .prepare(
      `SELECT * FROM modules WHERE course_id = ? ORDER BY week_number ASC`,
    )
    .bind(row.id)
    .all();

  let instructor: Instructor | undefined;
  if (instructorRow) {
    const ir = instructorRow as Record<string, unknown>;
    instructor = {
      id: String(ir.id),
      name: String(ir.name),
      title: String(ir.title),
      bio: String(ir.bio),
      avatar_url: String(ir.avatar_url),
      credentials: parseCredentials(String(ir.credentials)),
      created_at: String(ir.created_at),
    };
  }

  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    subtitle: String(row.subtitle),
    description: String(row.description),
    category: String(row.category),
    duration: String(row.duration),
    format: String(row.format),
    start_date: String(row.start_date),
    price: Number(row.price),
    status: row.status as Course["status"],
    instructor_id: String(row.instructor_id ?? ""),
    badge: row.badge ? String(row.badge) : undefined,
    time_commitment: row.time_commitment
      ? String(row.time_commitment)
      : undefined,
    created_at: String(row.created_at),
    instructor,
    modules: (modules ?? []).map((m) => {
      const mod = m as Record<string, unknown>;
      return {
        id: String(mod.id),
        course_id: String(mod.course_id),
        week_number: Number(mod.week_number),
        title: String(mod.title),
        description: String(mod.description),
        outcome: String(mod.outcome),
        created_at: String(mod.created_at),
      } satisfies CourseModule;
    }),
  };
}

export async function listTestimonialsFromD1(
  courseId: string,
): Promise<Testimonial[] | null> {
  const db = await getD1();
  if (!db) return null;

  const { results } = await db
    .prepare(`SELECT * FROM testimonials WHERE course_id = ?`)
    .bind(courseId)
    .all();

  return (results ?? []).map((row) => {
    const r = row as Record<string, unknown>;
    return {
      id: String(r.id),
      name: String(r.name),
      role: String(r.role),
      quote: String(r.quote),
      avatar_url: String(r.avatar_url),
      course_id: String(r.course_id),
    };
  });
}
