import nodemailer from "nodemailer";

export async function handleContact(req: any, res: any) {
  // Express already routes POST to this handler, no need to check method
  const { name, email, projectType, message } = req.body;

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

  try {
    // Debug: Check if env vars are loaded
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    console.log("📧 Email Configuration Check:");
    console.log(`   EMAIL_USER exists: ${!!emailUser}`);
    console.log(`   EMAIL_PASSWORD exists: ${!!emailPassword}`);
    console.log(`   Using account: ${emailUser || 'NOT SET'}`);

    if (!emailUser || !emailPassword) {
      console.error("❌ Missing EMAIL_USER or EMAIL_PASSWORD in environment variables");
      return res.status(500).json({
        error: "Email service not configured",
        details: "Server admin needs to set EMAIL credentials",
      });
    }

    console.log("✅ Creating transporter...");

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Verify transporter connection
    console.log("🔐 Verifying transporter connection...");
    await transporter.verify();
    console.log("✅ Transporter verified successfully");

    // Email to your address
    const mailOptions = {
      from: emailUser,
      to: "ut054370@gmail.com",
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

    // Send email
    console.log("📨 Sending email to portfolio admin...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);

    // Send confirmation email to user
    const confirmationEmail = {
      from: emailUser,
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

    console.log("📨 Sending confirmation email to user...");
    await transporter.sendMail(confirmationEmail);
    console.log("✅ Confirmation email sent to:", email);

    // Log success metrics
    console.log("✅ CONTACT FORM SUBMISSION SUCCESS");
    console.log(`   From: ${name} (${email})`);
    console.log(`   Type: ${projectType}`);
    console.log(`   Message length: ${message.length} characters`);
    console.log("---");

    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (error: any) {
    console.error("❌ EMAIL SENDING FAILED");
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Error details:", error);
    
    // Provide more helpful error messages
    let userMessage = "Failed to send email. Please try again later.";
    
    if (error.message.includes("EAUTH")) {
      userMessage = "Email authentication failed. Please contact support.";
      console.error("⚠️  Authentication Error - Check EMAIL credentials in .env");
    } else if (error.message.includes("ETIMEDOUT")) {
      userMessage = "Email service timeout. Please try again.";
    } else if (error.code === "ENOTFOUND") {
      userMessage = "Could not connect to email service.";
    }

    return res.status(500).json({
      error: userMessage,
      details: error.message,
      code: error.code,
    });
  }
}
