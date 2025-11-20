import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = 'gemini-2.5-flash';

const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateEmail = async (tone: string, notes: string): Promise<string> => {
  try {
    const ai = getAiClient();
    if (!ai) return "Error: API Key is missing. Please configure GEMINI_API_KEY in Vercel settings.";

    const prompt = `Write a ${tone} email based on these notes:\n\n${notes}\n\nKeep it concise and professional.`;
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return response.text || "Error generating email.";
  } catch (error: any) {
    console.error("Generation error in generateEmail:", error);
    if (error.message) console.error("Error message:", error.message);
    return `Error: Unable to connect to AI service. Details: ${error.message || 'Unknown error'}`;
  }
};

export const generateSocialCaptions = async (businessType: string, platform: string, offer: string): Promise<string> => {
  try {
    const ai = getAiClient();
    if (!ai) return "Error: API Key is missing. Please configure GEMINI_API_KEY in Vercel settings.";

    const prompt = `Write 3 social media captions for a ${businessType} on ${platform}.
    Offer: ${offer}.
    Context: Nigerian market audience. Use local nuance if appropriate.
    Format as a numbered list.`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return response.text || "Error generating captions.";
  } catch (error) {
    console.error("Generation error", error);
    return "Error: Unable to connect to AI service.";
  }
};

export const generateInterviewQuestions = async (role: string, focus: string): Promise<string> => {
  try {
    const ai = getAiClient();
    if (!ai) return "Error: API Key is missing. Please configure GEMINI_API_KEY in Vercel settings.";

    const prompt = `Generate 5 interview questions for a ${role} focusing on ${focus}.
    Include a mix of theoretical and practical scenarios.`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return response.text || "Error generating questions.";
  } catch (error) {
    console.error("Generation error", error);
    return "Error: Unable to connect to AI service.";
  }
};

export const summarizeMeeting = async (notes: string): Promise<string> => {
  try {
    const ai = getAiClient();
    if (!ai) return "Error: API Key is missing. Please configure GEMINI_API_KEY in Vercel settings.";

    const prompt = `Summarize these meeting notes. Organize the output into three clear sections:
    1. Decisions Made
    2. Action Items
    3. Key Highlights

    Notes:
    ${notes}`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return response.text || "Error summarizing notes.";
  } catch (error) {
    console.error("Generation error", error);
    return "Error: Unable to connect to AI service.";
  }
};