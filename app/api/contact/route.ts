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
      // text: fullMessage,
      html: `
  <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
    <h2 style="color: #2e6da4;">📩 New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p style="background: #f9f9f9; padding: 10px; border-left: 3px solid #2e6da4;">${message}</p>
    <hr />
    <p style="font-size: 12px; color: #999;">Sent from your website contact form.</p>
  </div>
`,
    });

    // 4. Send confirmation to user
    await transporter.sendMail({
      from: `"Your Data Guys" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting us!",
      // text: `Hi ${name},\n\nThanks for reaching out. We've received your message:\n\n"${message}"\n\nWe'll get back to you shortly.\n\n- Your Data Guys`,
      html: `
  <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
    <h2 style="color: #2e6da4;">Thanks for contacting us, ${name}!</h2>
    <p>We've received your message:</p>
    <blockquote style="background: #f2f2f2; padding: 10px; border-left: 3px solid #2e6da4; font-style: italic;">
      ${message}
    </blockquote>
    <p>Our team will review it and get back to you shortly.</p>
    <p style="margin-top: 20px;">Cheers,<br><strong>Your Data Guys</strong></p>
    <hr />
    <p style="font-size: 12px; color: #999;">This is a confirmation that your message was successfully received.</p>
  </div>
`,
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
