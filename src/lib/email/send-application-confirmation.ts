import { getEnv } from "@/lib/env";

interface ConfirmationParams {
  to: string;
  fullName: string;
  applicationId: string;
}

export async function sendApplicationConfirmationEmail(
  params: ConfirmationParams,
): Promise<{ ok: boolean; error?: string }> {
  const env = await getEnv();
  const apiKey = env.RESEND_API_KEY;
  const from =
    env.RESEND_FROM_EMAIL ?? "Build Coven <onboarding@resend.dev>";

  if (!apiKey) {
    return { ok: false, error: "RESEND_API_KEY not configured" };
  }

  const firstName = params.fullName.split(" ")[0] ?? params.fullName;

  const html = `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <p style="font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Build Coven</p>
      <h1 style="font-size: 28px; font-weight: 500; margin: 16px 0;">Application received</h1>
      <p style="font-size: 16px; line-height: 1.6; color: #3d3a36;">
        Hi ${escapeHtml(firstName)},
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #3d3a36;">
        Thank you for applying to <strong>Pilot 001: Build Your First Website With AI</strong>.
        We&apos;ve received your application and will review it within a few business days.
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #3d3a36;">
        <strong>What happens next</strong>
      </p>
      <ol style="font-size: 15px; line-height: 1.7; color: #3d3a36; padding-left: 20px;">
        <li>We review your application and project idea</li>
        <li>You&apos;ll receive an email with next steps or questions</li>
        <li>If accepted, you&apos;ll get enrollment and payment details</li>
        <li>Cohort kicks off — see you in the coven</li>
      </ol>
      <p style="font-size: 14px; color: #6b6560; margin-top: 32px;">
        — The Build Coven team
      </p>
    </div>
  `.trim();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `application-confirmation/${params.applicationId}`,
    },
    body: JSON.stringify({
      from,
      to: [params.to],
      subject: "Application received — Build Coven Pilot 001",
      html,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    return { ok: false, error };
  }

  return { ok: true };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
