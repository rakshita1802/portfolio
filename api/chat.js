import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client with the environment variable
// process.env.GEMINI_API_KEY will be provided in the Vercel Dashboard
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemPrompt = `You are Rakshita's personal AI Assistant embedded in her portfolio website.
Rakshita is a Software Engineer and Creative Technologist from Chennai, India, passionate about AI, Robotics, and Full-Stack Development.
Her notable projects include AgriHive AI (crop disease detection), RailPredict (LSTM train delay prediction), and Motion AI (AI fitness app).
She has interned at Vaken Technologies (Data Pipeline Engineer), CodeClause (AI Intern), and Oasis Infobyte (Full Stack).
Your job is to answer questions about Rakshita, her work, and how to hire her. Keep your answers concise, professional but slightly playful, and use a "Terminal/Tech" tone to match her Neo-Brutalist design. 
If someone asks something unrelated, gently guide them back to Rakshita's portfolio. DO NOT hallucinate facts about her.`;

export default async function handler(req, res) {
  // Allow CORS for local testing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Server misconfiguration: Missing API Key' });
  }

  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: systemPrompt 
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'Failed to communicate with AI' });
  }
}
