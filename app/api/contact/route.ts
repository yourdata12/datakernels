import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Compose message
    const fullMessage = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
`.trim();

    // 2. Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password from Gmail
      },
    });

    // 3. Send to admin
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "arshbedi2517@gmail.com", // Admin email (hardcoded)
      subject: `New Contact Form: ${subject}`,
      text: fullMessage,
    });

    // 4. Send confirmation to user
    await transporter.sendMail({
      from: `"Your Data Guys" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting us!",
      text: `Hi ${name},\n\nThanks for reaching out. We've received your message:\n\n"${message}"\n\nWe'll get back to you shortly.\n\n- Your Data Guys`,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully.",
    });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
