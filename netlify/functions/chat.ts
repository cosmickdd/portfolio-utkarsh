import { Handler } from "@netlify/functions";
import { retrieveRelevantChunks, generateContextFromChunks } from "../../server/rag";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

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

  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Gemini API key not configured" }),
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

    // 3. Build combined prompt (Gemini doesn't have separate system message)
    const fullPrompt = `${systemPrompt}\n\nUser: ${message}`;

    // 4. Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: fullPrompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 300,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Gemini API error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to generate response",
          details: error?.error?.message || error?.message || response.statusText,
        }),
      };
    }

    const data = await response.json();
    console.log("Gemini response:", data);
    const aiMessage =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a response.";

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: aiMessage,
        context: relevantChunks.map((c) => c.category), // For debugging
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
