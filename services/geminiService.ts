const MODEL_NAME = 'gemini-2.5-flash';

const callApi = async (prompt: string, model: string = MODEL_NAME): Promise<string> => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, model }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'API request failed');
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("API Call Error:", error);
    return `Error: ${error.message || 'Unable to connect to AI service.'}`;
  }
};

export const generateEmail = async (tone: string, notes: string): Promise<string> => {
  const prompt = `Write a ${tone} email based on these notes:\n\n${notes}\n\nKeep it concise and professional.`;
  return callApi(prompt);
};

export const generateSocialCaptions = async (businessType: string, platform: string, offer: string): Promise<string> => {
  const prompt = `Write 3 social media captions for a ${businessType} on ${platform}.
    Offer: ${offer}.
    Context: Nigerian market audience. Use local nuance if appropriate.
    Format as a numbered list.`;
  return callApi(prompt);
};

export const generateInterviewQuestions = async (role: string, focus: string): Promise<string> => {
  const prompt = `Generate 5 interview questions for a ${role} focusing on ${focus}.
    Include a mix of theoretical and practical scenarios.`;
  return callApi(prompt);
};

export const summarizeMeeting = async (notes: string): Promise<string> => {
  const prompt = `Summarize these meeting notes. Organize the output into three clear sections:
    1. Decisions Made
    2. Action Items
    3. Key Highlights

    Notes:
    ${notes}`;
  return callApi(prompt);
};