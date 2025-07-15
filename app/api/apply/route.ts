// /app/api/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      resume,
      remarks,
      graduationYear,
      university,
      employmentType,
      role,
    } = body;

    if (
      !name ||
      !email ||
      !phone ||
      !resume ||
      !remarks ||
      !graduationYear ||
      !university ||
      !employmentType ||
      !role
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔵 1. Email to admin
    await transporter.sendMail({
      from: `"Careers - DataKernels" <${process.env.EMAIL_USER}>`,
      to: "admin@datakernels.in",
      subject: `📝 New Application for ${role}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px;">
          <h2 style="color: #001f3f;">📥 New Job Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>University:</strong> ${university}</p>
          <p><strong>Graduation Year:</strong> ${graduationYear}</p>
          <p><strong>Employment Type:</strong> ${employmentType}</p>
          <p><strong>Resume:</strong> <a href="${resume}" target="_blank">${resume}</a></p>
          <p><strong>Why a good fit:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border-left: 3px solid #001f3f;">${remarks}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Received via Careers Page</p>
        </div>
      `,
    });

    // 🟢 2. Confirmation to user
    await transporter.sendMail({
      from: `"Your Data Guys" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for applying for ${role} at DataKernels!`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">

  <!-- Header -->
  <div style="background-color: #001f3f; padding: 20px; text-align: center;">
    <img src="https://res.cloudinary.com/dnrkwondc/image/upload/v1752065092/logo_iebtkx.jpg" alt="Your Data Guys" style="height: 50px; margin-bottom: 10px;" />
    <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Application Received – ${role}</h1>
  </div>

  <!-- Body -->
  <div style="padding: 24px; background-color: #ffffff;">
    <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>
    <p style="font-size: 15px; color: #333;">
      Thank you for applying for the <strong>${role}</strong> position at <strong>DataKernels</strong>.
    </p>

    <div style="margin: 20px 0; padding: 16px; background-color: #f7f7f7; border-left: 4px solid #001f3f;">
      <p style="margin: 0; font-style: italic;">"${remarks}"</p>
    </div>

    <p style="font-size: 15px; color: #333;">
      Our team has received your application and will review it shortly. If shortlisted, we’ll be in touch for the next steps.
    </p>

    <a href="https://datakernels.in" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #001f3f; color: #fff; text-decoration: none; border-radius: 4px;">
      Explore More About Us
    </a>
  </div>

  <!-- Footer -->
  <div style="background-color: #f0f0f0; padding: 16px; text-align: center; font-size: 12px; color: #888;">
    <p style="margin: 4px 0;">DataKernels — Patiala, Punjab, India</p>
    <p style="margin: 4px 0;">Email: admin@datakernels.in</p>
    <p style="margin-top: 10px;">This is a confirmation email. No reply needed.</p>
  </div>
</div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted and emails sent.",
    });
  } catch (error) {
    console.error("Application email failed:", error);
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }
}
