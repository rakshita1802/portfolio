import { GoogleGenerativeAI } from '@google/generative-ai';

const systemPrompt = `You are Rakshita's personal AI Assistant embedded in her portfolio website.
Rakshita is a Software Engineer and Creative Technologist from Chennai, India, passionate about AI, Robotics, and Full-Stack Development.
Her notable projects include AgriHive AI (crop disease detection), RailPredict (LSTM train delay prediction), and Motion AI (AI fitness app).
She has interned at Vaken Technologies (Data Pipeline Engineer), CodeClause (AI Intern), and Oasis Infobyte (Full Stack).
Your job is to answer questions about Rakshita, her work, and how to hire her.

Format and tone rules:
- Speak in a natural, friendly, clear, and professional tone.
- NEVER include simulated terminal prefixes, command lines, or brackets like "[SYSTEM INIT]", "[QUERY]", ">_", "query:", or "~/rakshita/".
- DO NOT enclose sentences or paragraphs in backticks (\`).
- Keep answers concise, engaging, and directly relevant.
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

    // Strip any lingering pseudo-terminal tags or backticks
    text = text
      .replace(/`?\[SYSTEM\s*INIT\]\s*(>_)?\s*`?/gi, '')
      .replace(/`?\[QUERY\]\s*(>_)?\s*`?/gi, '')
      .replace(/`?\[.*?INIT.*?\]\s*(>_)?\s*`?/gi, '')
      .replace(/`?query:\s*`?/gi, '')
      .replace(/`?~\/[\w/-]+`?/g, '')
      .replace(/^`+|`+$/g, '')
      .trim();

    return res.status(200).json({ reply: text, modelUsed: selectedModel });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to communicate with AI' });
  }
}

