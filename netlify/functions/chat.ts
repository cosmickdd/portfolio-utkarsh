import { Handler } from "@netlify/functions";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { retrieveRelevantChunks, generateContextFromChunks } from "../../server/rag";

const GITHUB_PAT = process.env.MISTRAL_API_KEY;
const GITHUB_ENDPOINT = "https://models.github.ai/inference";
const MODEL_NAME = "mistral-ai/mistral-small-2503";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const { message } = JSON.parse(event.body || "{}");

  if (!message || message.trim().length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Message is required" }),
    };
  }

  if (!GITHUB_PAT) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "GitHub PAT not configured" }),
    };
  }

  try {
    // 1. Retrieve relevant resume chunks using RAG
    const relevantChunks = retrieveRelevantChunks(message, 3);
    const context = generateContextFromChunks(relevantChunks);

    // 2. Build system context
    const systemPrompt = `You are Utkarsh Tiwari's AI assistant. You help visitors learn about Utkarsh's professional background, skills, and experience.

IMPORTANT RULES:
- Answer ONLY using the provided context about Utkarsh
- Never invent information or make assumptions
- If something is not in the context, say "I don't have that information in Utkarsh's background"
- Speak in first person as if you are Utkarsh
- Be professional but conversational
- Keep responses concise (2-3 sentences typically)
- Mention measurable impact when relevant
- Be helpful and friendly

UTKARSH'S INFORMATION:
${context}`;

    // 3. Initialize GitHub Models client
    const client = ModelClient(
      GITHUB_ENDPOINT,
      new AzureKeyCredential(GITHUB_PAT)
    );

    // 4. Call GitHub Models API
    const response = await client.path("/chat/completions").post({
      body: {
        model: MODEL_NAME,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        top_p: 0.1,
        max_tokens: 300,
      }
    });

    if (isUnexpected(response)) {
      throw new Error(response.body?.error?.message || "GitHub Models API error");
    }

    const data = response.body;
    const aiMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: aiMessage,
        context: relevantChunks.map((c) => c.category),
      }),
    };
  } catch (error) {
    console.error("Chat API error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to process request",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
