import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplateForUser, EmailTemplateForAdmin } from "@/components/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Send email to YOU (admin)
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // can be customized
      to: "sainaveen1901@gmail.com", // ← replace with your email
      subject: `New message from ${name}: ${subject}`,
      react: EmailTemplateForAdmin({ name, email, subject, message }),
    });

    // Optional: Auto-reply to the user
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting me!",
      react: EmailTemplateForUser({ name, email, subject, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
