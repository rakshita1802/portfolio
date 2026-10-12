import { GoogleGenerativeAI } from '@google/generative-ai';

const systemPrompt = `You are Rakshita's personal AI Assistant embedded in her portfolio website.
Rakshita is a Software Engineer and Creative Technologist from Chennai, India, passionate about AI, Robotics, and Full-Stack Development.
Her notable projects include AgriHive AI (crop disease detection), RailPredict (LSTM train delay prediction), and Motion AI (AI fitness app).
She has interned at Vaken Technologies (Data Pipeline Engineer), CodeClause (AI Intern), and Oasis Infobyte (Full Stack).
Your job is to answer questions about Rakshita, her work, and how to hire her.

Communication rules:
- Speak naturally, warmly, and professionally directly to the user.
- NEVER simulate a command line, shell terminal, boot log, or bash prompt.
- NEVER output lines starting with "$", ">_", "[SYSTEM", "[QUERY", "boot_", "system_init", or file paths like "~/rakshita".
- DO NOT wrap entire lines or greetings in backticks (\`).
- If asked "hi" or general greetings, respond directly with a warm greeting like "Hi! How can I help you learn about Rakshita's work or projects today?".
- If someone asks something unrelated, gently guide them back to Rakshita's portfolio. DO NOT hallucinate facts about her.`;

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ 
      error: 'Server misconfiguration: Missing GEMINI_API_KEY in Vercel Environment Variables.' 
    });
  }

  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Dynamically detect supported models for this API key
    let selectedModel = 'gemini-2.5-flash';
    try {
      const modelsRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      if (modelsRes.ok) {
        const modelsData = await modelsRes.json();
        const available = (modelsData.models || [])
          .filter(m => m.supportedGenerationMethods?.includes('generateContent'))
          .map(m => m.name.replace('models/', ''));
        
        const preferred = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash-latest', 'gemini-pro'];
        const found = preferred.find(p => available.includes(p));
        if (found) {
          selectedModel = found;
        } else if (available.length > 0) {
          selectedModel = available[0];
        }
      }
    } catch (modelErr) {
      console.warn('Could not auto-detect model:', modelErr);
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: selectedModel,
      systemInstruction: systemPrompt 
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    let text = response.text() || '';

    // Strip any mock terminal, boot, system init, query lines or backticks
    text = text
      .split('\n')
      .filter(line => {
        const trimmed = line.trim();
        if (!trimmed) return true;
        if (/^`?[\$>]\s*/.test(trimmed)) return false;
        if (/^`?\[.*?\]/.test(trimmed)) return false;
        if (/system_init|boot_rakshita|whoami|query:/i.test(trimmed)) return false;
        if (/^`?~\/[\w/-]+`?$/i.test(trimmed)) return false;
        return true;
      })
      .join('\n')
      .replace(/^`+|`+$/g, '')
      .trim();

    return res.status(200).json({ reply: text, modelUsed: selectedModel });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to communicate with AI' });
  }
}

