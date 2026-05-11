import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

const GITHUB_PAT = process.env.MISTRAL_API_KEY || process.env.GITHUB_TOKEN;
const GITHUB_ENDPOINT = "https://models.github.ai/inference";
const MODEL_NAME = "mistral-ai/mistral-small-2503";

export async function handleChat(req: any, res: any) {
  try {
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const { messages }: ChatRequest = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Invalid request format",
        details: "Expected 'messages' array"
      });
    }

    if (!GITHUB_PAT) {
      return res.status(500).json({
        error: "Chat service not configured",
        details: "GitHub PAT not set in environment variables"
      });
    }

    const userMessage = messages.find(m => m.role === "user");
    if (!userMessage) {
      return res.status(400).json({ error: "No user message provided" });
    }

    const systemPrompt = `You are Utkarsh Tiwari's professional AI assistant. Help visitors learn about his background, experience, and skills. Be concise, professional, and honest about limitations.

Guidelines:
- Keep responses to 2-3 sentences
- Only use information you would reasonably know about Utkarsh
- If you don't know something, say so honestly
- Be friendly but professional
- Don't invent projects or experience`;

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
      const errorMsg = response.body?.error?.message || "API request failed";
      console.error("GitHub Models API error:", errorMsg);
      return res.status(response.status || 500).json({
        error: "Chat service error",
        details: errorMsg
      });
    }

    const data = response.body;
    const aiMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

    return res.json({
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

export const chatRoute = {
  handleChat
};
