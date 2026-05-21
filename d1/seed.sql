-- Pilot 001 seed data

INSERT OR IGNORE INTO instructors (id, name, title, bio, avatar_url, credentials)
VALUES (
  'instructor-lena',
  'Lena M.',
  'Product Designer & AI Builder',
  'Lena has spent a decade helping founders and teams ship digital products. She teaches women to move from idea to live site using AI tools, strong UX principles, and a repeatable build workflow — without gatekeeping or jargon theatre.',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  '["Pilot 000 Graduate","Maven Creator","Ex-Product Designer","Automation Specialist"]'
);

INSERT OR IGNORE INTO courses (
  id, slug, title, subtitle, description, category, duration, format,
  start_date, price, status, instructor_id, badge, time_commitment
) VALUES (
  'course-pilot-001',
  'build-your-first-website-with-ai',
  'Build Your First Website With AI',
  'A women-led coding school for founders, designers, and curious builders who want to ship something real.',
  'Ship a live website in four weeks using AI-native tools, strong UX principles, and a supportive women-led cohort.',
  'AI Coding',
  '4 weeks',
  'Live cohort + office hours',
  '2025-06-02',
  59700,
  'open',
  'instructor-lena',
  'Pilot 001',
  '4–6 hrs / week'
);

INSERT OR IGNORE INTO modules (id, course_id, week_number, title, description, outcome) VALUES
  ('mod-1', 'course-pilot-001', 1, 'Idea to Blueprint', 'Clarify your idea, audience, goals, site structure, and content map.', 'Site plan & content map'),
  ('mod-2', 'course-pilot-001', 2, 'Design with AI', 'Generate layouts, write copy, and design your pages using AI tools and strong UX principles.', 'Designed pages & copy draft'),
  ('mod-3', 'course-pilot-001', 3, 'Build & Refine', 'Build your site, improve responsiveness, fix issues, and polish content and visual hierarchy.', 'Responsive live build'),
  ('mod-4', 'course-pilot-001', 4, 'Launch & Beyond', 'Publish your site, connect your domain, set up analytics, and prepare your launch post.', 'Published site & launch plan');

INSERT OR IGNORE INTO testimonials (id, name, role, quote, avatar_url, course_id) VALUES
  ('t-1', 'Sarah K.', 'Founder, Studio Lark', 'I went from Figma mockups to a live site in three weeks. The cohort kept me accountable without the pressure.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', 'course-pilot-001'),
  ('t-2', 'Maya R.', 'Product Designer', 'Finally a coding space that does not talk down to you. AI-native learning that actually respects your brain.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face', 'course-pilot-001'),
  ('t-3', 'Jordan T.', 'No-Code Builder', 'I shipped my portfolio and got my first client inquiry the week after launch. Worth every hour.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', 'course-pilot-001');
