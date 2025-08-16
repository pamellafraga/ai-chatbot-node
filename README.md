<h1 align="center">🤖 AI Chatbot — Node.js + OpenAI</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/OpenAI-API-blue?style=for-the-badge&logo=openai" />
  <img src="https://img.shields.io/badge/Status-Working-success?style=for-the-badge" />
</p>

<p align="center">
  Chatbot construído com <b>Node.js</b> integrado à <b>API da OpenAI</b>.  
  Possui três formas de uso:
  <br/>
  🖥️ <b>CLI (linha de comando)</b>  
  🌐 <b>REST API</b>  
  💻 <b>Interface Web simples</b>
</p>

---

## ✨ Funcionalidades
- Conversa direta via terminal (CLI).  
- API REST com endpoint `/chat`.  
- Página web para testar no navegador.  
- Fácil de rodar no **GitHub Codespaces** (não precisa instalar nada).  

---

## 🚀 Como rodar no GitHub Codespaces
1. Clique em **Code → Create Codespace on Main**.  
2. Aguarde instalar dependências (feito automaticamente).  
3. Configure a chave da OpenAI em **Settings → Secrets → Codespaces**:  
   - `OPENAI_API_KEY=SUACHAVEAQUI`  
4. No terminal, rode:  
   ```bash
   npm run dev:api
