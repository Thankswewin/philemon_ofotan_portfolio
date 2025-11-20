import { GoogleGenAI } from "@google/genai";

export const config = {
    runtime: 'edge',
};

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'Server configuration error: API Key missing' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { prompt, model = 'gemini-2.5-flash' } = await request.json();

        if (!prompt) {
            return new Response(JSON.stringify({ error: 'Prompt is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const genAI = new GoogleGenAI({ apiKey });
        const response = await genAI.models.generateContent({
            model: model,
            contents: prompt,
        });

        return new Response(JSON.stringify({ text: response.text }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
