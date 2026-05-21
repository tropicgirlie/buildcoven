import {
  ALL_COURSES,
  FAQ_ITEMS,
  getCourseBySlug,
  LEARNING_OUTCOMES,
  LEAVE_WITH_ITEMS,
  PILOT_001_COURSE,
  TESTIMONIALS,
  WHO_FOR,
  WHO_NOT_FOR,
} from "@/data/seed";
import { listApplications } from "@/lib/applications-store";
import {
  listApplicationsFromD1,
} from "@/lib/db/applications";
import {
  getCourseBySlugFromD1,
  listCoursesFromD1,
  listTestimonialsFromD1,
} from "@/lib/db/courses";
import type { Application, Course, FAQItem, Testimonial } from "@/types";

export async function getCourses(): Promise<Course[]> {
  const fromD1 = await listCoursesFromD1();
  if (fromD1?.length) return fromD1;
  return ALL_COURSES;
}

export async function getCourse(slug: string): Promise<Course | null> {
  const fromD1 = await getCourseBySlugFromD1(slug);
  if (fromD1) return fromD1;
  return getCourseBySlug(slug) ?? null;
}

export function getPilotCourse(): Course {
  return PILOT_001_COURSE;
}

export async function getTestimonials(
  courseId: string,
): Promise<Testimonial[]> {
  const fromD1 = await listTestimonialsFromD1(courseId);
  if (fromD1?.length) return fromD1;
  return TESTIMONIALS.filter((t) => t.course_id === courseId);
}

export async function getFAQItems(): Promise<FAQItem[]> {
  return FAQ_ITEMS;
}

export {
  LEARNING_OUTCOMES,
  LEAVE_WITH_ITEMS,
  WHO_FOR,
  WHO_NOT_FOR,
  FAQ_ITEMS,
};

export async function getApplications(): Promise<Application[]> {
  const fromD1 = await listApplicationsFromD1();
  if (fromD1) return fromD1;
  return listApplications();
}
