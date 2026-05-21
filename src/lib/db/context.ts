import type { D1Database } from "@cloudflare/workers-types";

export async function getD1(): Promise<D1Database | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    return (env as CloudflareEnv).DB ?? null;
  } catch {
    return null;
  }
}
