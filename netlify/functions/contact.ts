import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    console.log("🔍 API Request received:", {
      method: req.method,
      path: req.url,
      headers: { "content-type": req.headers["content-type"] }
    });

    // Only handle POST requests
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Parse body
    let body = req.body;
    if (typeof body === "string") {
      body = JSON.parse(body);
    }

    console.log("📝 Parsed body:", body);

    const { name, email, projectType, message } = body;

    // Validation
    if (!name || !email || !projectType || !message) {
      console.log("❌ Validation failed:", { name, email, projectType, message });
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (message.length < 10) {
      console.log("❌ Message too short:", message.length);
      return res.status(400).json({ error: "Message must be at least 10 characters" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ Invalid email:", email);
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Check environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = Number(process.env.EMAIL_PORT || 587);
    const emailSecure = process.env.EMAIL_SECURE === "true";
    const contactToEmail = process.env.CONTACT_TO_EMAIL || "ut054370@gmail.com";

    console.log("📧 Email Configuration Check:");
    console.log(`   EMAIL_USER exists: ${!!emailUser}`);
    console.log(`   EMAIL_PASSWORD exists: ${!!emailPassword}`);

    if (!emailUser || !emailPassword) {
      console.error("❌ Missing EMAIL_USER or EMAIL_PASSWORD in environment variables");
      return res.status(500).json({
        error: "Email service not configured",
        details: "Server admin needs to set EMAIL credentials",
      });
    }

    console.log("✅ Creating transporter...");

    const transporter = nodemailer.createTransport(
      emailHost
        ? {
            host: emailHost,
            port: emailPort,
            secure: emailSecure,
            auth: {
              user: emailUser,
              pass: emailPassword,
            },
          }
        : {
            service: "gmail",
            auth: {
              user: emailUser,
              pass: emailPassword,
            },
          }
    );

    try {
      console.log("🔐 Verifying transporter connection...");
      await transporter.verify();
      console.log("✅ Transporter verified successfully");
    } catch (verifyError: any) {
      console.warn("⚠️  Transporter verification warning:", verifyError?.message || verifyError);
    }

    // Email to admin
    const mailOptions = {
      from: emailUser,
      to: contactToEmail,
      replyTo: email,
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Received at: ${new Date().toLocaleString()}</p>
        <p style="color: #666; font-size: 12px;">Reply to: ${email}</p>
      `,
    };

    // Send email to admin
    console.log("📨 Sending email to portfolio admin...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);

    // Send confirmation email to user as a best-effort follow-up
    const confirmationEmail = {
      from: contactToEmail,
      to: email,
      subject: "We received your message! 🎉",
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>I've received your message about your <strong>${projectType}</strong> project and will review it shortly.</p>
        <p>I typically respond within 24 hours.</p>
        <p style="margin-top: 30px; color: #666;">---</p>
        <p style="margin-top: 20px;">Best regards,<br><strong>Utkarsh</strong><br>UI/UX Designer & Developer</p>
      `,
    };

    try {
      console.log("📨 Sending confirmation email to user...");
      await transporter.sendMail(confirmationEmail);
      console.log("✅ Confirmation email sent to:", email);
    } catch (confirmationError: any) {
      console.warn("⚠️  Confirmation email failed, but admin email succeeded:", confirmationError?.message || confirmationError);
    }

    console.log("✅ CONTACT FORM SUBMISSION SUCCESS");
    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (err: any) {
    console.error("❌ API Handler Error:", {
      message: err?.message,
      code: err?.code,
      stack: err?.stack
    });
    
    if (!res.headersSent) {
      return res.status(500).json({ 
        error: err?.message || "Internal server error",
        code: err?.code
      });
    }
  }
};

