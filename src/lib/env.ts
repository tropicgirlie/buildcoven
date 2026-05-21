export function getEnvVar(key: string): string | undefined {
  return process.env[key];
}

export function getStripePaymentLink(): string | undefined {
  const link = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  if (!link || link.includes("your-link")) return undefined;
  return link;
}
