import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { askAI } from './ai.js';

const app = express();
app.use(cors());            // <— habilita CORS
app.use(express.json());

app.get('/health', (_, res) => res.json({ ok: true }));

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ error: 'message é obrigatório' });
    const answer = await askAI(message);
    res.json({ answer });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API em http://localhost:${port}`));
