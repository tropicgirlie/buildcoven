import type {
  Course,
  CourseModule,
  FAQItem,
  Instructor,
  LearningOutcome,
  Testimonial,
} from "@/types";

export const INSTRUCTOR_LENA: Instructor = {
  id: "instructor-lena",
  name: "Lena M.",
  title: "Product Designer & AI Builder",
  bio: "Lena has spent a decade helping founders and teams ship digital products. She teaches women to move from idea to live site using AI tools, strong UX principles, and a repeatable build workflow — without gatekeeping or jargon theatre.",
  avatar_url:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  credentials: [
    "Pilot 000 Graduate",
    "Maven Creator",
    "Ex-Product Designer",
    "Automation Specialist",
  ],
};

export const PILOT_001_MODULES: CourseModule[] = [
  {
    id: "mod-1",
    course_id: "course-pilot-001",
    week_number: 1,
    title: "Idea to Blueprint",
    description:
      "Clarify your idea, audience, goals, site structure, and content map.",
    outcome: "Site plan & content map",
  },
  {
    id: "mod-2",
    course_id: "course-pilot-001",
    week_number: 2,
    title: "Design with AI",
    description:
      "Generate layouts, write copy, and design your pages using AI tools and strong UX principles.",
    outcome: "Designed pages & copy draft",
  },
  {
    id: "mod-3",
    course_id: "course-pilot-001",
    week_number: 3,
    title: "Build & Refine",
    description:
      "Build your site, improve responsiveness, fix issues, and polish content and visual hierarchy.",
    outcome: "Responsive live build",
  },
  {
    id: "mod-4",
    course_id: "course-pilot-001",
    week_number: 4,
    title: "Launch & Beyond",
    description:
      "Publish your site, connect your domain, set up analytics, and prepare your launch post.",
    outcome: "Published site & launch plan",
  },
];

export const PILOT_001_COURSE: Course = {
  id: "course-pilot-001",
  slug: "build-your-first-website-with-ai",
  title: "Build Your First Website With AI",
  subtitle:
    "A women-led coding school for founders, designers, and curious builders who want to ship something real.",
  description:
    "Ship a live website in four weeks using AI-native tools, strong UX principles, and a supportive women-led cohort.",
  category: "AI Coding",
  duration: "4 weeks",
  format: "Live cohort + office hours",
  start_date: "2025-06-02",
  price: 59700,
  status: "open",
  instructor_id: INSTRUCTOR_LENA.id,
  badge: "Pilot 001",
  time_commitment: "4–6 hrs / week",
  instructor: INSTRUCTOR_LENA,
  modules: PILOT_001_MODULES,
};

export const ALL_COURSES: Course[] = [
  PILOT_001_COURSE,
  {
    id: "course-workshops",
    slug: "ai-design-workshops",
    title: "AI Design Workshops",
    subtitle: "Short-form sessions on layout, copy, and visual systems.",
    description: "Coming soon.",
    category: "Product Design",
    duration: "2 weeks",
    format: "Workshop series",
    start_date: "2025-09-01",
    price: 0,
    status: "coming_soon",
    instructor_id: INSTRUCTOR_LENA.id,
    instructor: INSTRUCTOR_LENA,
  },
  {
    id: "course-portfolio",
    slug: "portfolio-in-a-weekend",
    title: "Portfolio in a Weekend",
    subtitle: "Build a case-study-ready portfolio site fast.",
    description: "Coming soon.",
    category: "Portfolio",
    duration: "1 weekend",
    format: "Self-paced + live Q&A",
    start_date: "2025-10-01",
    price: 0,
    status: "coming_soon",
    instructor_id: INSTRUCTOR_LENA.id,
    instructor: INSTRUCTOR_LENA,
  },
  {
    id: "course-automation",
    slug: "no-code-automation",
    title: "No-Code Automation for Founders",
    subtitle: "Connect tools, automate workflows, ship faster.",
    description: "Waitlist open.",
    category: "Automation",
    duration: "3 weeks",
    format: "Live cohort",
    start_date: "2025-08-15",
    price: 49700,
    status: "waitlist",
    instructor_id: INSTRUCTOR_LENA.id,
    instructor: INSTRUCTOR_LENA,
  },
  {
    id: "course-free",
    slug: "free-ai-prompting",
    title: "Free: AI Prompting for Builders",
    subtitle: "Learn the prompts that actually ship products.",
    description: "Free lesson series.",
    category: "Free Lessons",
    duration: "Self-paced",
    format: "Free lessons",
    start_date: "2025-05-01",
    price: 0,
    status: "open",
    instructor_id: INSTRUCTOR_LENA.id,
    instructor: INSTRUCTOR_LENA,
  },
];

export const COURSE_CATEGORIES = [
  "All",
  "AI Coding",
  "Websites",
  "Product Design",
  "Portfolio",
  "Automation",
  "Free Lessons",
] as const;

export const LEARNING_OUTCOMES: LearningOutcome[] = [
  {
    id: "lo-1",
    icon: "compass",
    title: "Design & Build",
    description:
      "Create a real website from idea to live deployment using AI-assisted workflows.",
  },
  {
    id: "lo-2",
    icon: "star",
    title: "Prompt with Purpose",
    description:
      "Write prompts that generate useful layouts, copy, and code — not generic slop.",
  },
  {
    id: "lo-3",
    icon: "moon",
    title: "UX Fundamentals",
    description:
      "Apply hierarchy, spacing, and accessibility so your site feels intentional.",
  },
  {
    id: "lo-4",
    icon: "eye",
    title: "Debug & Refine",
    description:
      "Fix layout issues, improve responsiveness, and polish content confidently.",
  },
  {
    id: "lo-5",
    icon: "flower",
    title: "Content Strategy",
    description:
      "Map your audience, messaging, and site structure before you build.",
  },
  {
    id: "lo-6",
    icon: "target",
    title: "Launch Ready",
    description:
      "Publish, connect a domain, set up analytics, and plan your launch.",
  },
];

export const LEAVE_WITH_ITEMS = [
  "A live, published website you own",
  "A repeatable AI-assisted build workflow",
  "Confidence reviewing and refining code",
  "A launch plan and analytics setup",
  "A cohort network of women builders",
  "Portfolio-ready case study material",
];

export const WHO_FOR = [
  "Founders who need a real site, not a template prison",
  "Designers ready to ship their own work",
  "Curious builders tired of tutorial loops",
  "No-code users ready to level up with AI",
];

export const WHO_NOT_FOR = [
  "People looking for a passive video course with no accountability",
  "Anyone expecting us to build your site for you",
  "Builders who want bro-culture hustle theatre",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sarah K.",
    role: "Founder, Studio Lark",
    quote:
      "I went from Figma mockups to a live site in three weeks. The cohort kept me accountable without the pressure.",
    avatar_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    course_id: "course-pilot-001",
  },
  {
    id: "t-2",
    name: "Maya R.",
    role: "Product Designer",
    quote:
      "Finally a coding space that doesn't talk down to you. AI-native learning that actually respects your brain.",
    avatar_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    course_id: "course-pilot-001",
  },
  {
    id: "t-3",
    name: "Jordan T.",
    role: "No-Code Builder",
    quote:
      "I shipped my portfolio and got my first client inquiry the week after launch. Worth every hour.",
    avatar_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    course_id: "course-pilot-001",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need to know how to code?",
    answer:
      "No prior coding experience required. We start from your idea and guide you through AI-assisted building. Curiosity and commitment matter more than credentials.",
  },
  {
    id: "faq-2",
    question: "What tools will we use?",
    answer:
      "You'll work with modern AI coding assistants, a visual editor, and deployment tools. Exact stack is shared in the syllabus — all chosen for accessibility, not gatekeeping.",
  },
  {
    id: "faq-3",
    question: "Is this only for women?",
    answer:
      "Build Coven is women-led and designed for women builders. We welcome allies who respect our space and mission. The culture is intentional: no bro energy, no shame.",
  },
  {
    id: "faq-4",
    question: "Will I own what I build?",
    answer:
      "Yes. Everything you create is yours. We teach you to build on your own accounts with your own domain. No platform lock-in.",
  },
  {
    id: "faq-5",
    question: "How much time do I need?",
    answer:
      "Plan for 4–6 hours per week: live sessions, async work, and office hours. The cohort format keeps you on track without burnout pace.",
  },
  {
    id: "faq-6",
    question: "Will there be recordings?",
    answer:
      "Live sessions are recorded for cohort members who miss a session. Recordings are not a substitute for showing up — the community is part of the value.",
  },
  {
    id: "faq-7",
    question: "Is there a payment plan?",
    answer:
      "Yes. Payment plans are available at checkout. Scholarship and reduced pricing options are reviewed case-by-case — indicate interest on your application.",
  },
  {
    id: "faq-8",
    question: "Who is this course for?",
    answer:
      "Founders, designers, and curious builders who want to ship a real website — not collect certificates. If you're ready to build in public with support, you're in the right place.",
  },
  {
    id: "faq-9",
    question: "Do I need coding experience?",
    answer:
      "No. We meet you where you are. Technical level is just context for how we support you in the cohort.",
  },
];

export const TRUST_TAGS = [
  { icon: "compass", label: "From idea to live site" },
  { icon: "star", label: "AI-native learning" },
  { icon: "moon", label: "No bro culture" },
  { icon: "target", label: "Built by women" },
];

export const VALUES = [
  {
    title: "Women led",
    description:
      "Authorship over the tools, products, and systems shaping our lives.",
  },
  {
    title: "No bro culture",
    description: "No shame. No jargon theatre. No performative hustle.",
  },
  {
    title: "Real projects",
    description: "Ship something live — not another tutorial todo app.",
  },
  {
    title: "AI native learning",
    description:
      "Learn to build with the tools that are actually changing how we work.",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return ALL_COURSES.find((c) => c.slug === slug);
}
