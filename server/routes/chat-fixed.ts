import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import fs from "fs";
import path from "path";

// Load GitHub PAT from environment
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.MISTRAL_API_KEY || "";
const GITHUB_ENDPOINT = "https://models.github.ai/inference";
const MODEL_NAME = "mistral-ai/mistral-small-2503";

// Check if token exists
if (!GITHUB_TOKEN) {
  console.error("❌ ERROR: GITHUB_TOKEN or MISTRAL_API_KEY not set in environment variables");
  console.error("   Please add to .env file: GITHUB_TOKEN=your_github_pat_here");
  process.exit(1);
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  stream?: boolean;
}

// Load profile data one-time at startup
const profileData = fs.readFileSync("shared/utkarsh-profile.txt", "utf-8");

export async function handleChat(req: any, res: any) {
  try {
    const { messages, stream = false }: ChatRequest = req.body;

    // Validate messages format
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    const latestMessage = messages[messages.length - 1];
    if (!latestMessage || latestMessage.role !== "user") {
      return res.status(400).json({ error: "No user message found" });
    }

    // Build system prompt with profile context
    const systemPrompt = `You are Utkarsh Tiwari's AI assistant. Represent him professionally using his actual profile data.

Utkarsh's Profile:
${profileData}

Guidelines:
- Only discuss information present in the profile
- Be concise and professional
- If you don't have information, say so honestly
- Don't generate or hallucinate information
- Format responses cleanly without markdown symbols`;

    const enhancedMessages = [
      { role: "system", content: systemPrompt },
      ...messages.slice(-3) // Keep last 3 messages for context
    ];

    // Initialize GitHub Models client
    const client = ModelClient(
      GITHUB_ENDPOINT,
      new AzureKeyCredential(GITHUB_TOKEN)
    );

    // Call GitHub Models API - Streaming
    if (stream) {
      res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      });

      const streamResponse = await client.path("/chat/completions").post({
        body: {
          messages: enhancedMessages,
          temperature: 0.7,
          top_p: 0.1,
          max_tokens: 500,
          model: MODEL_NAME,
          stream: true
        }
      });

      if (isUnexpected(streamResponse)) {
        const error = streamResponse.body?.error?.message || "Stream error";
        res.write(`ERROR: ${error}`);
        res.end();
        return;
      }

      // Handle streaming response
      const reader = streamResponse.body?.getReader();
      if (!reader) {
        res.write("Error: Failed to start response stream");
        res.end();
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              res.end();
              return;
            }

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content || "";
              if (content) {
                res.write(content);
              }
            } catch (e) {
              // Skip invalid JSON chunks
            }
          }
        }
      }

      res.end();
      return;
    }

    // Non-streaming response
    const response = await client.path("/chat/completions").post({
      body: {
        messages: enhancedMessages,
        temperature: 0.7,
        top_p: 0.1,
        max_tokens: 500,
        model: MODEL_NAME
      }
    });

    if (isUnexpected(response)) {
      const errorMsg = response.body?.error?.message || "GitHub Models API error";
      throw new Error(errorMsg);
    }

    const data = response.body;
    const aiMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

    res.json({
      message: {
        role: "assistant",
        content: aiMessage
      }
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    res.status(500).json({
      error: "Chat service error",
      details: error instanceof Error ? error.message : String(error)
    });
  }
}

export const chatRoute = {
  handleChat
};
