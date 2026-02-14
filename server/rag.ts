import { resumeChunks } from "../shared/resume-data";

// Simple string similarity calculation using word overlap
function calculateSimilarity(query: string, text: string): number {
  const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const textWords = text.toLowerCase().split(/\s+/).filter(w => w.length > 2);

  const querySet = new Set(queryWords);
  const textSet = new Set(textWords);

  const intersection = [...querySet].filter(word => 
    textSet.has(word) || 
    textWords.some(tWord => tWord.includes(word) || word.includes(tWord))
  ).length;

  const union = new Set([...querySet, ...textSet]).size;

  return intersection / union;
}

// Retrieve most relevant chunks from resume
export function retrieveRelevantChunks(query: string, topK: number = 3): typeof resumeChunks {
  const scored = resumeChunks.map(chunk => ({
    ...chunk,
    score: calculateSimilarity(query, chunk.content)
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ score, ...chunk }) => chunk);
}

// Generate context from chunks for AI prompt
export function generateContextFromChunks(chunks: typeof resumeChunks): string {
  return chunks.map(chunk => `[${chunk.category.toUpperCase()}]\n${chunk.content}`).join("\n\n");
}
