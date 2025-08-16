import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const model = process.env.MODEL || 'gpt-4o-mini';

export async function askAI(prompt, system = 'Você é um assistente técnico em JavaScript e AI. Responda curto e direto.') {
  const res = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: prompt }
    ],
    temperature: 0.3
  });
  return res.choices[0].message.content.trim();
}
