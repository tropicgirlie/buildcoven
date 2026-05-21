export async function getEnv(): Promise<CloudflareEnv> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    return env as CloudflareEnv;
  } catch {
    return process.env as unknown as CloudflareEnv;
  }
}

export function getStripePaymentLink(): string | undefined {
  const link = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  if (!link || link.includes("your-link")) return undefined;
  return link;
}
