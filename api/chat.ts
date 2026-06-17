import { VercelRequest, VercelResponse } from "@vercel/node";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const GITHUB_PAT = process.env.MISTRAL_API_KEY || process.env.GITHUB_TOKEN;
const GITHUB_ENDPOINT = "https://models.github.ai/inference";
const MODEL_NAME = "mistral-ai/mistral-small-2503";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Invalid request format",
        details: "Expected 'messages' array"
      });
    }

    if (!GITHUB_PAT) {
      console.error("❌ GITHUB_TOKEN or MISTRAL_API_KEY is not set");
      return res.status(500).json({
        error: "Chat service not configured",
        details: "API key not set in environment variables"
      });
    }

    const systemPrompt = `You are Utkarsh Tiwari's professional AI assistant. Help visitors learn about his background, experience, and skills. Be concise, professional, and honest about limitations.

Utkarsh Tiwari is a multidisciplinary Product Designer and Machine Learning Engineer.
Education: B.Tech in Information Technology, Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad (2023 - 2027).

Experience:
- AI Interview Agents Platform (Product Designer, Nov 2024 - Present): Designed end-to-end product experience, supporting 7,000+ registered users and contributing to 7x user growth. Built a scalable Figma component library.
- Web3Task / TraverseVPN (Product Designer, Apr 2025 - May 2026): Led end-to-end design of the landing page, redesigned info architecture.
- Cloud Computing Cell, AKGEC (Senior UI/UX Designer, Feb 2024 - Present): Led UI/UX for platforms serving 1000+ students. Architected scalable design systems.
- Prana AI (Machine Learning Engineer & UX Designer, 2024): Built 5 CV models for Ayurvedic diagnostic inference. Designed PRANA AI wellness platform.

Projects:
- KrishiMitra: Adaptive ML Decision System for Agriculture.
- CarbonSetu: ML-Based Carbon Monitoring System.
- SafeEnv: Python CLI for dependency management.

Skills:
- Design: UI/UX, Design Thinking, Interaction Design, Figma, Design Systems, Usability Testing.
- ML & Tech: Python, JavaScript, TensorFlow, PyTorch, OpenCV, Scikit-learn.

Achievements:
- 1st Place at UX/UI Design Challenge INCLUDE 3.0, AKGEC.
- 2nd Runner-Up at IIT Jodhpur Tech Fest for PRANA AI.
- Machine Learning I Certification from Columbia University.

Guidelines:
- Keep responses to 2-3 sentences.
- Only use the information provided above about Utkarsh.
- If you don't know something, say so honestly.
- Be friendly but professional.
- Don't invent projects or experience.`;

    const requestMessages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      ...messages.slice(-5)
    ];

    const client = ModelClient(
      GITHUB_ENDPOINT,
      new AzureKeyCredential(GITHUB_PAT)
    );

    const response = await client.path("/chat/completions").post({
      body: {
        messages: requestMessages,
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 512,
        model: MODEL_NAME
      }
    });

    if (isUnexpected(response)) {
      const errorMsg = (response.body as any)?.error?.message || "API request failed";
      console.error("GitHub Models API error:", errorMsg);
      return res.status((response.status as any) || 500).json({
        error: "Chat service error",
        details: errorMsg
      });
    }

    const data = response.body as any;
    const aiMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

    return res.status(200).json({
      message: {
        role: "assistant",
        content: aiMessage
      }
    });

  } catch (error) {
    console.error("Chat handler error:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
