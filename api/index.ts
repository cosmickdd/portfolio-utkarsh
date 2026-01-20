import { VercelRequest, VercelResponse } from "@vercel/node";
import { handleContact } from "../server/routes/contact";

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

    // Handle the contact form
    console.log("📧 Processing contact form submission...");
    return await handleContact(req, res);
  } catch (err: any) {
    console.error("❌ API Handler Error:", {
      message: err?.message,
      stack: err?.stack,
      error: err
    });
    
    if (!res.headersSent) {
      return res.status(500).json({ 
        error: "Internal server error",
        details: err?.message || "Unknown error"
      });
    }
  }
};
