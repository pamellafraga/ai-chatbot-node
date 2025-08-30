
// Carrega variáveis de ambiente do arquivo .env (como a chave da API)
import 'dotenv/config';

// Importa a biblioteca oficial do OpenAI para acessar os modelos de IA
import OpenAI from 'openai';

// Cria uma instância do cliente OpenAI usando a chave da API definida nas variáveis de ambiente
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Define o modelo a ser utilizado (padrão: gpt-4o-mini, mas pode ser alterado via variável de ambiente)
const model = process.env.MODEL || 'gpt-4o-mini';

/**
 * Função responsável por enviar uma mensagem para o modelo de IA e retornar a resposta.
 * @param {string} prompt - Mensagem do usuário a ser enviada para o modelo.
 * @param {string} system - Mensagem de sistema para orientar o comportamento do assistente.
 * @returns {Promise<string>} - Resposta gerada pela IA.
 */
export async function askAI(prompt, system = 'Você é um assistente técnico em JavaScript e AI. Responda curto e direto.') {
  // Envia a requisição para o modelo de chat da OpenAI
  const res = await client.chat.completions.create({
    model, // modelo a ser utilizado
    messages: [
      { role: 'system', content: system }, // instrução de sistema
      { role: 'user', content: prompt }    // mensagem do usuário
    ],
    temperature: 0.3 // controla a criatividade da resposta
  });
  // Retorna apenas o texto da resposta gerada pela IA, removendo espaços extras
  return res.choices[0].message.content.trim();
}
