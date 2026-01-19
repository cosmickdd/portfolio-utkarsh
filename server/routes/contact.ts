import nodemailer from "nodemailer";

export async function handleContact(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, projectType, message } = req.body;

  // Validation
  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (message.length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters" });
  }

  try {
    // Debug: Check if env vars are loaded
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing EMAIL_USER or EMAIL_PASSWORD in environment variables");
      return res.status(500).json({
        error: "Failed to send email",
        details: "Email credentials not configured",
      });
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to your address
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ut054370@gmail.com",
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Reply to: ${email}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message!",
      html: `
        <h2>Thanks for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Utkarsh</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email error:", error);
    return res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
}
