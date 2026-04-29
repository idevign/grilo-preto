import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  let email: string;

  try {
    const body = await request.json();
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "grilopreto@gmail.com",
      subject: "New RMP⁺ Guided Waitlist Signup",
      text: `New waitlist signup for RMP⁺ Guided:\n\n${email}`,
      html: `
        <p>New waitlist signup for <strong>RMP⁺ Guided</strong>:</p>
        <p style="font-size:1.125rem;">${email}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Could not send. Please try again." }, { status: 500 });
  }
}
