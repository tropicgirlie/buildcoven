export type CourseStatus = "open" | "waitlist" | "coming_soon";

export type ApplicationStatus =
  | "new"
  | "reviewed"
  | "accepted"
  | "waitlisted"
  | "rejected";

export type TechnicalLevel =
  | "beginner"
  | "curious"
  | "designer"
  | "no_code_user"
  | "developer";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar_url: string;
  credentials: string[];
  created_at?: string;
}

export interface CourseModule {
  id: string;
  course_id: string;
  week_number: number;
  title: string;
  description: string;
  outcome: string;
  created_at?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  duration: string;
  format: string;
  start_date: string;
  price: number;
  status: CourseStatus;
  instructor_id: string;
  badge?: string;
  time_commitment?: string;
  created_at?: string;
  instructor?: Instructor;
  modules?: CourseModule[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar_url: string;
  course_id: string;
}

export interface Application {
  id: string;
  full_name: string;
  email: string;
  location: string;
  project_idea: string;
  why_now: string;
  technical_level: TechnicalLevel;
  scholarship_interest: boolean;
  commitment_confirmed: boolean;
  status: ApplicationStatus;
  created_at: string;
}

export interface LearningOutcome {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
