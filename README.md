# 📐 Portfólio Técnico Estilo Blueprint

Um portfólio profissional moderno com estética de **desenho técnico e cianótipo de engenharia/arquitetura (Blueprint)**, construído 100% com padrões nativos da web (**HTML5, CSS3 e JavaScript Moderno**).

---

## 🌟 Características Principais

1. **Estética Blueprint Autêntica**:
   - Malha quadriculada de engenharia (fundo milimétrico com linhas primárias e secundárias).
   - Moldura de prancheta com cantoneiras, miras de coordenadas interativas (`X:0000 Y:0000`) e linhas de cota.
   - Carimbo oficial técnico de prancheta (*Title Block*) no rodapé com relógio em tempo real.
   - Tipografia monoespaçada técnica de alta legibilidade (`JetBrains Mono`).

2. **Dois Modos Visuais (Dark & Light)**:
   - **Modo Cianótipo (Dark)**: Fundo azul escuro profundo (`#071527`), linhas em ciano elétrico (`#00f0ff`) e texto em giz técnico.
   - **Modo Whiteprint (Light)**: Fundo claro papel vegetal/milimetrado (`#f0f4f9`) com linhas e marcadores em azul cobalto técnico (`#0284c7`).
   - Persistência automática no `localStorage` e respeito às preferências do sistema operacional (`prefers-color-scheme`).

3. **Aba "Quem Sou Eu" (Ficha Técnica Modular)**:
   - Espaço para foto com mira de cota de dimensão (`180 mm`).
   - Tabela de especificações cadastrais (Nome, Função, Especialidades, Status).
   - Apresentação e biografia modular pronta para você me enviar seus dados e ir preenchendo aos poucos.
   - Matriz de competências técnicas com barras de medição animadas.
   - Linha do tempo de carreira em formato esquemático.

4. **Aba "Projetos" em Grade**:
   - Cartões com visual de prancheta técnica numerados (`PRJ-001`, `PRJ-002`, `PRJ-003`).
   - Pré-visualização ao vivo integrada em cada cartão.
   - Filtros dinâmicos por categoria (Ferramentas, Segurança, Interativo).
   - Botão **"Executar Projeto"** que leva para a página técnica do projeto.

5. **Página de Execução de Projeto (`project-viewer.html`)**:
   - Roda o projeto interativamente ao vivo em um viewport de prancheta.
   - Permite alternar para a aba **"Código Fonte"** para inspecionar os arquivos `index.html`, `style.css` e `script.js` com botão de cópia rápida.
   - Ficha técnica detalhada com resumo, versão e destaques de engenharia de cada projeto.

---

## 🚀 3 Projetos Iniciais Inclusos e Funcionais

- **`PRJ-001` - Calculadora Científica Blueprint** (`projects/demo-calculadora/`): Operações aritméticas e científicas completas, histórico e atalhos de teclado.
- **`PRJ-002` - Gerador de Chaves Criptográficas** (`projects/demo-gerador-senhas/`): Gerador de senhas seguras com medição de entropia em bits e cópia em 1 clique.
- **`PRJ-003` - Cronômetro & Relógio de Precisão** (`projects/demo-relogio-analogico/`): Mostrador analógico desenhado em CSS a 60 FPS, visor digital e cronômetro com registro de voltas (*laps*).

---

## 🛠️ Como Adicionar Novos Projetos

Basta 2 passos simples:

1. **Crie a pasta do projeto dentro de `projects/`**:
   Exemplo: `projects/meu-novo-app/` com seu `index.html`, `style.css` e `script.js`.

2. **Registre o projeto em `js/projects-data.js`**:
   Abra o arquivo `js/projects-data.js` e adicione um novo objeto na lista `PROJECTS_DATA`:
   ```javascript
   {
     id: "meu-novo-app",
     code: "PRJ-004",
     title: "Nome do Meu Novo App",
     category: "frontend",
     status: "OPERACIONAL",
     version: "v1.0.0",
     date: "2026",
     summary: "Breve resumo do que o projeto faz.",
     tags: ["HTML5", "CSS3", "JavaScript"],
     path: "projects/meu-novo-app/index.html",
     folder: "meu-novo-app",
     highlights: [
       "Recurso incrível 1",
       "Recurso incrível 2"
     ]
   }
   ```
   *O portfólio criará automaticamente o card no grid, a página de execução e a visualização de código!*

---

## 🌐 Como Executar Localmente

Como o projeto é construído 100% com tecnologia nativa da web, você pode:

1. **Opção 1**: Dar um duplo-clique no arquivo `index.html` para abrir diretamente em qualquer navegador (Chrome, Edge, Firefox, etc.).
2. **Opção 2 (Recomendada para carregar os códigos-fonte pelo fetch)**:
   Abra o terminal nesta pasta e inicie um servidor HTTP local:
   - **Com Python**:
     ```bash
     python -m http.server 3000
     ```
     Depois acesse: `http://localhost:3000`
   - **Com Node.js (npx serve)**:
     ```bash
     npx serve
     ```
   - **Com extensão Live Server do VS Code**: Clique com o botão direito em `index.html` e selecione *Open with Live Server*.
