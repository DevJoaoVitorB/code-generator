# 🚀 Code Generator - Gerador de Código com IA

Aplicação frontend que integra a **API da [Groq](https://console.groq.com)** para transformar instruções em linguagem natural em código funcional **HTML, CSS e JavaScript**. O código gerado é exibido formatado na interface e renderizado dinamicamente para demonstração imediata do resultado.

<br>

## ✨ Funcionalidades

1. Geração automática de código com IA
2. Visualização do código formatado
3. Renderização ao vivo do resultado

<br>

## 📦 Stack

![Stack](https://skillicons.dev/icons?i=html,css,js,vite)

<br>

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/DevJoaoVitorB/code-generator.git
```

### 2️⃣ Instalar dependências

```bash
cd code-generator
npm install
```

### 3️⃣ Criar arquivo de variáveis de ambiente

Crie um arquivo na raiz do projeto chamado:

```bash
cp .env.example .env
```

⚠️ Observação:

> No Windows, use `copy` ou `Copy-Item`

### 4️⃣ Executar em modo de desenvolvimento

```bash
npm run dev
```

Abra o endereço exibido no terminal.

<br>

## 🔑 Como Criar sua Chave da Groq

### 1️⃣ Criar conta

Acesse o site oficial da [Groq](https://console.groq.com/) e crie uma conta gratuita.

### 2️⃣ Fazer login

Entre na sua conta no painel da plataforma.

### 3️⃣ Gerar chave de API

No painel:

- Acesse a área de API Keys
- Clique em criar nova chave
- Copie a chave gerada

### 4️⃣ Configurar no projeto

No arquivo `.env`:

```text
VITE_API_KEY=SUA_CHAVE_AQUI
VITE_API_URL=https://api.groq.com/openai/v1/chat/completions
VITE_AI_MODEL=openai/gpt-oss-120b
```

<br>

## 📁 Estrutura do Projeto

```text
project/
│
├── index.html
├── src/
│   ├── main.js
│   └── style.css
│
├── .env.example
├── package.json
└── vite.config.js
```

<br>

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com fins educacionais e para demonstração
de integração entre frontend moderno e APIs de inteligência artificial.
