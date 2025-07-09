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
      to: "admin@datakernels.in", // Admin email (hardcoded)
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
    //     await transporter.sendMail({
    //       from: `"Your Data Guys" <${process.env.EMAIL_USER}>`,
    //       to: email,
    //       subject: "Thanks for contacting us!",
    //       // text: `Hi ${name},\n\nThanks for reaching out. We've received your message:\n\n"${message}"\n\nWe'll get back to you shortly.\n\n- Your Data Guys`,
    //       html: `
    //   <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
    //     <h2 style="color: #2e6da4;">Thanks for contacting us, ${name}!</h2>
    //     <p>We've received your message:</p>
    //     <blockquote style="background: #f2f2f2; padding: 10px; border-left: 3px solid #2e6da4; font-style: italic;">
    //       ${message}
    //     </blockquote>
    //     <p>Our team will review it and get back to you shortly.</p>
    //     <p style="margin-top: 20px;">Cheers,<br><strong>Your Data Guys</strong></p>
    //     <hr />
    //     <p style="font-size: 12px; color: #999;">This is a confirmation that your message was successfully received.</p>
    //   </div>
    // `,
    //     });

    await transporter.sendMail({
      from: `"Your Data Guys" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting us!",
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
    
    <!-- Header -->
    <div style="background-color: #001f3f; padding: 20px; text-align: center;">
      <img src="https://res.cloudinary.com/dnrkwondc/image/upload/v1752065092/logo_iebtkx.jpg" alt="Your Data Guys" style="height: 50px; margin-bottom: 10px;" />
      <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Thanks for Reaching Out, ${name}!</h1>
    </div>

    <!-- Body -->
    <div style="padding: 24px; background-color: #ffffff;">
      <p style="font-size: 16px; color: #333;">Hello <strong>${name}</strong>,</p>
      <p style="font-size: 15px; color: #333;">
        Thank you for contacting <strong>Your Data Guys</strong>. We've received your message and will get back to you shortly.
      </p>

      <div style="margin: 20px 0; padding: 16px; background-color: #f7f7f7; border-left: 4px solid #001f3f;">
        <p style="font-style: italic; margin: 0;">"${message}"</p>
      </div>

      <p style="font-size: 15px; color: #333;">
        In the meantime, feel free to explore our latest AI solutions and insights on our website.
      </p>

      <a href="https://datakernels.in" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #001f3f; color: #fff; text-decoration: none; border-radius: 4px;">
        Visit Our Website
      </a>
    </div>

    <!-- Footer -->
    <div style="background-color: #f0f0f0; padding: 16px; text-align: center; font-size: 12px; color: #888;">
      <p style="margin: 4px 0;">Your Data Guys — Patiala, Punjab, India</p>
      <p style="margin: 4px 0;">Email: admin@datakernels.in</p>
      <p style="margin-top: 10px;">This is an automated confirmation. No reply needed.</p>
    </div>
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
