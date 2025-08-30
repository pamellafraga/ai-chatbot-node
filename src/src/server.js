
// Carrega variáveis de ambiente do arquivo .env (ex: PORT, chaves de API)
import 'dotenv/config';

// Importa o framework Express para criar o servidor HTTP
import express from 'express';

// Importa o middleware CORS para permitir requisições de outros domínios
import cors from 'cors';

// Importa a função responsável por interagir com a IA
import { askAI } from './ai.js';

// Cria uma instância da aplicação Express
const app = express();

// Habilita o uso de CORS para permitir acesso de outros domínios (ex: frontend)
app.use(cors());

// Permite que o servidor entenda requisições com corpo em JSON
app.use(express.json());

// Rota de teste para verificar se o servidor está online
app.get('/health', (_, res) => res.json({ ok: true }));

// Rota principal do chatbot: recebe uma mensagem e retorna a resposta da IA
app.post('/chat', async (req, res) => {
  try {
    // Extrai a mensagem do corpo da requisição
    const { message } = req.body || {};
    // Valida se a mensagem foi enviada
    if (!message) return res.status(400).json({ error: 'message é obrigatório' });
    // Chama a função que consulta a IA
    const answer = await askAI(message);
    // Retorna a resposta para o frontend
    res.json({ answer });
  } catch (e) {
    // Em caso de erro, retorna status 500 e a mensagem de erro
    res.status(500).json({ error: e.message });
  }
});

// Define a porta do servidor (padrão: 3000, pode ser alterada via variável de ambiente)
const port = process.env.PORT || 3000;

// Inicia o servidor e exibe mensagem no console
app.listen(port, () => console.log(`API em http://localhost:${port}`));
