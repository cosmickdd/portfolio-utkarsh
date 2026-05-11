export function formatAIResponse(text: string): string {
  if (!text) return text;

  // Remove markdown headings (#) but keep other markdown for now
  let formatted = text.replace(/^#+\s+/gm, '');

  // Clean up excessive whitespace
  formatted = formatted.replace(/\s+/g, ' ').trim();

  // Remove markdown link artifacts
  formatted = formatted.replace(/\[([\w\s]+)\]\([^)]+\)/g, '$1'); // Convert [text](url) to text

  // Ensure proper sentence spacing
  formatted = formatted.replace(/([.?!)])\s*/g, '$1 ');

  // Clean up bullet points and list formatting
  formatted = formatted.replace(/\s*[-•]\s+/g, '\n• ');

  // Ensure each sentence ends with proper punctuation
  let sentences = formatted.split(/(?<=[.!?])\s+/);
  sentences = sentences.map(sentence => {
    sentence = sentence.trim();
    if (sentence.length > 0 && !sentence.match(/[.!?]$/)) {
      return sentence + '.';
    }
    return sentence;
  });

  let result = sentences.join(' ');

  // Remove excessive punctuation
  result = result.replace(/[.!?]{2,}/g, '.');

  // Ensure proper capitalization at the start
  if (result.length > 0) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result.trim();
}
