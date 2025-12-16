import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: We access process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Transforms a user's memory into a short lyrical stanza in the style of alternative rock.
 */
export const generateLyricalTribute = async (memory: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a songwriter assistant for a memorial website dedicated to Chester Bennington. 
      Take the following user memory or message and rewrite it into a short, 4-line poetic stanza 
      that captures the emotion, angst, and hope typical of 2000s alternative rock / nu-metal lyrics.
      Do not rhyme excessively; focus on raw emotion and metaphor.
      
      User Memory: "${memory}"
      
      Output ONLY the 4 lines of lyrics. Do not add quotes or headers.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        maxOutputTokens: 100,
      }
    });

    return response.text ? response.text.trim() : "The silence speaks louder than words.";
  } catch (error) {
    console.error("Error generating lyrical tribute:", error);
    // Fallback in case of API error
    return "In the echo of the end, your memory remains.";
  }
};