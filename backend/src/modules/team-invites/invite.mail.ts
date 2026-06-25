import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendInviteEmail = async ({
  email,
  teamName,
  inviteLink,
}: {
  email: string;
  teamName: string;
  inviteLink: string;
}) => {
  try {
    console.log("📧 Sending email to:", email);

    const result = await resend.emails.send({
      from: "Task AI <onboarding@resend.dev>",
      to: email,
      subject: `You're invited to join ${teamName}`,
      html: `
        <div style="font-family: sans-serif">
          <h2>You’ve been invited to join ${teamName}</h2>
          <a href="${inviteLink}" target="_blank">Accept Invite</a>
        </div>
      `,
    });

    console.log("✅ Resend result:", result);
    return result;

  } catch (err) {
    console.error("❌ EMAIL ERROR:", err);
    throw err;
  }
};