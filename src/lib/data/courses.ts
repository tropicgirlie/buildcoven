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
import type { Application, Course, FAQItem, Testimonial } from "@/types";

export async function getCourses(): Promise<Course[]> {
  return ALL_COURSES;
}

export async function getCourse(slug: string): Promise<Course | null> {
  return getCourseBySlug(slug) ?? null;
}

export function getPilotCourse(): Course {
  return PILOT_001_COURSE;
}

export async function getTestimonials(
  courseId: string,
): Promise<Testimonial[]> {
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
  return listApplications();
}
