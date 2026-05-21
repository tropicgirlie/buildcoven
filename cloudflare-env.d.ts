interface CloudflareEnv {
  DB: D1Database;
  ASSETS: Fetcher;
  ADMIN_SECRET?: string;
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
}
