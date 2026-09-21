/**
 * BASE DE DADOS DOS PROJETOS - BERNARDO DINIZ BALDUINO
 * Contem os metadados e os codigos-fonte completos embutidos
 * Garantindo carregamento instantaneo tanto via servidor quanto direto em arquivo local (file:///)
 */

const PROJETOS_DADOS = [
  {
    id: "calculadora-blueprint",
    codigo: "PRJ-001",
    titulo: "Calculadora de Precisao Blueprint",
    categoria: "ferramentas",
    status: "Operacional",
    versao: "1.4.0",
    data: "2026",
    resumo: "Calculadora desenvolvida com operacoes matematicas completas, funcoes de raiz e potencia, historico em tempo real e suporte a teclado.",
    etiquetas: ["HTML5", "CSS3 Grid", "JavaScript", "Logica Matematica"],
    caminho: "projects/demo-calculadora/index.html",
    pasta: "demo-calculadora",
    destaques: [
      "Operacoes de soma, subtracao, multiplicacao e divisao",
      "Calculo de raiz quadrada, potencia e porcentagem",
      "Historico dinamico de operacoes",
      "Digitacao direta pelo teclado numerico"
    ],
    codigoFonte: {
      html: `<!DOCTYPE html>
<html lang="pt-BR" data-tema="escuro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora Cientifica Blueprint</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="calculator-body">
  <div class="calculator-unit">
    <div class="calc-header">
      <div class="calc-title">
        <span class="calc-code">MOD-CALC // 01</span>
        <h2>CALCULADORA DE PRECISAO</h2>
      </div>
      <div class="calc-status">STATUS: ONLINE</div>
    </div>

    <!-- Visor da Calculadora -->
    <div class="calc-display-box">
      <div class="calc-history" id="calcHistory">&nbsp;</div>
      <div class="calc-current" id="calcCurrent">0</div>
    </div>

    <!-- Teclado da Calculadora -->
    <div class="calc-keypad">
      <button class="calc-btn btn-fn" data-action="clear">AC</button>
      <button class="calc-btn btn-fn" data-action="backspace">DEL</button>
      <button class="calc-btn btn-fn" data-action="percent">%</button>
      <button class="calc-btn btn-op" data-action="op" data-val="/">/</button>

      <button class="calc-btn btn-fn" data-action="sqrt">raiz</button>
      <button class="calc-btn btn-fn" data-action="pow">x^2</button>
      <button class="calc-btn btn-fn" data-action="paren-open">(</button>
      <button class="calc-btn btn-op" data-action="op" data-val="*">*</button>

      <button class="calc-btn btn-num" data-action="num" data-val="7">7</button>
      <button class="calc-btn btn-num" data-action="num" data-val="8">8</button>
      <button class="calc-btn btn-num" data-action="num" data-val="9">9</button>
      <button class="calc-btn btn-op" data-action="op" data-val="-">-</button>

      <button class="calc-btn btn-num" data-action="num" data-val="4">4</button>
      <button class="calc-btn btn-num" data-action="num" data-val="5">5</button>
      <button class="calc-btn btn-num" data-action="num" data-val="6">6</button>
      <button class="calc-btn btn-op" data-action="op" data-val="+">+</button>

      <button class="calc-btn btn-num" data-action="num" data-val="1">1</button>
      <button class="calc-btn btn-num" data-action="num" data-val="2">2</button>
      <button class="calc-btn btn-num" data-action="num" data-val="3">3</button>
      <button class="calc-btn btn-equals" data-action="equals">=</button>

      <button class="calc-btn btn-num btn-zero" data-action="num" data-val="0">0</button>
      <button class="calc-btn btn-num" data-action="dot">.</button>
      <button class="calc-btn btn-fn" data-action="paren-close">)</button>
    </div>

    <div class="calc-footer-note">
      ESPECIFICACAO BLUEPRINT - TECLADO SUPORTADO
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', 'Consolas', monospace;
}

:root {
  --bg-color: #081a33;
  --calc-bg: #0f3563;
  --calc-border: #ffffff;
  --display-bg: #051326;
  --text-main: #ffffff;
  --text-muted: #9bbcdb;
  --btn-num-bg: rgba(255, 255, 255, 0.08);
  --btn-num-border: rgba(255, 255, 255, 0.2);
  --btn-op-bg: rgba(255, 255, 255, 0.15);
  --btn-fn-bg: rgba(255, 255, 255, 0.1);
  --btn-equals-bg: #ffffff;
  --btn-equals-text: #103766;
  --grid-line: rgba(255, 255, 255, 0.07);
}

[data-tema="claro"],
[data-theme="light"] {
  --bg-color: #e5edf7;
  --calc-bg: #ffffff;
  --calc-border: #103766;
  --display-bg: #e8eef5;
  --text-main: #0c2647;
  --text-muted: #506f94;
  --btn-num-bg: #ffffff;
  --btn-num-border: rgba(16, 55, 102, 0.2);
  --btn-op-bg: rgba(16, 55, 102, 0.12);
  --btn-fn-bg: rgba(16, 55, 102, 0.07);
  --btn-equals-bg: #103766;
  --btn-equals-text: #ffffff;
  --grid-line: rgba(16, 55, 102, 0.08);
}

body {
  background-color: var(--bg-color);
  background-image: 
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 20px 20px;
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.calculator-unit {
  width: 100%;
  max-width: 380px;
  background: var(--calc-bg);
  border: 2px solid var(--calc-border);
  border-radius: 4px;
  padding: 20px;
  position: relative;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.5);
}

.calc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--btn-num-border);
  padding-bottom: 10px;
  margin-bottom: 16px;
}

.calc-display-box {
  background: var(--display-bg);
  border: 1px solid var(--calc-border);
  border-radius: 3px;
  padding: 14px 16px;
  margin-bottom: 18px;
  text-align: right;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.calc-current {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
}

.calc-keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.calc-btn {
  background: var(--btn-num-bg);
  border: 1px solid var(--btn-num-border);
  border-radius: 3px;
  color: var(--text-main);
  font-size: 15px;
  font-weight: 600;
  padding: 14px 0;
  cursor: pointer;
  transition: all 0.15s ease;
}

.calc-btn:hover {
  border-color: var(--text-main);
  background: rgba(255, 255, 255, 0.2);
}

.btn-equals {
  background: var(--btn-equals-bg);
  color: var(--btn-equals-text);
  font-weight: 800;
  font-size: 18px;
}`,
      js: `class CalculadoraBlueprint {
  constructor() {
    this.historicoEl = document.getElementById('calcHistory');
    this.atualEl = document.getElementById('calcCurrent');
    this.expressao = '';
    this.valorAtual = '0';
    this.calculado = false;

    this.iniciar();
  }

  iniciar() {
    document.querySelectorAll('.calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const acao = btn.getAttribute('data-action');
        const val = btn.getAttribute('data-val');
        this.processarAcao(acao, val);
      });
    });

    window.addEventListener('keydown', (e) => this.tratarTeclado(e));
  }

  processarAcao(acao, val) {
    switch (acao) {
      case 'num':
        if (this.calculado || this.valorAtual === '0') {
          this.valorAtual = val;
          this.calculado = false;
        } else {
          this.valorAtual += val;
        }
        break;
      case 'dot':
        if (!this.valorAtual.includes('.')) this.valorAtual += '.';
        break;
      case 'op':
        this.expressao += ' ' + this.valorAtual + ' ' + val + ' ';
        this.valorAtual = '';
        this.calculado = false;
        break;
      case 'clear':
        this.expressao = '';
        this.valorAtual = '0';
        this.calculado = false;
        break;
      case 'backspace':
        this.valorAtual = this.valorAtual.length > 1 ? this.valorAtual.slice(0, -1) : '0';
        break;
      case 'equals':
        this.calcular();
        break;
      case 'sqrt':
        const n = parseFloat(this.valorAtual);
        this.valorAtual = n >= 0 ? Math.sqrt(n).toString() : 'Erro';
        this.calculado = true;
        break;
      case 'pow':
        const base = parseFloat(this.valorAtual);
        this.valorAtual = Math.pow(base, 2).toString();
        this.calculado = true;
        break;
    }
    this.atualizarDisplay();
  }

  calcular() {
    try {
      const conta = (this.expressao + ' ' + (this.valorAtual || '')).trim();
      const resultado = Function("'use strict'; return (" + conta + ")")();
      this.historicoEl.textContent = conta + ' =';
      this.valorAtual = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(4);
      this.expressao = '';
      this.calculado = true;
    } catch {
      this.valorAtual = 'Erro';
      this.calculado = true;
    }
  }

  atualizarDisplay() {
    this.atualEl.textContent = this.valorAtual || '0';
    if (!this.calculado && this.expressao) {
      this.historicoEl.textContent = this.expressao;
    }
  }

  tratarTeclado(e) {
    if (e.key >= '0' && e.key <= '9') this.processarAcao('num', e.key);
    if (e.key === '.') this.processarAcao('dot');
    if (['+', '-', '*', '/'].includes(e.key)) this.processarAcao('op', e.key);
    if (e.key === 'Enter' || e.key === '=') this.processarAcao('equals');
    if (e.key === 'Backspace') this.processarAcao('backspace');
    if (e.key === 'Escape') this.processarAcao('clear');
  }
}

new CalculadoraBlueprint();`
    }
  },
  {
    id: "gerador-senhas-blueprint",
    codigo: "PRJ-002",
    titulo: "Gerador de Chaves e Senhas",
    categoria: "seguranca",
    status: "Operacional",
    versao: "2.0.0",
    data: "2026",
    resumo: "Aplicacao utilitaria para criacao de senhas seguras com medidor de entropia em bits, seletor de tipos de caracteres e copia em um clique.",
    etiquetas: ["JavaScript", "Criptografia", "CSS Flexbox", "Seguranca"],
    caminho: "projects/demo-gerador-senhas/index.html",
    pasta: "demo-gerador-senhas",
    destaques: [
      "Calculo matematico de entropia e medidor de forca",
      "Comprimento configuravel de 8 a 64 caracteres",
      "Opcoes para maiusculas, minusculas, numeros e simbolos",
      "Copia instantanea para a area de transferencia"
    ],
    codigoFonte: {
      html: `<!DOCTYPE html>
<html lang="pt-BR" data-tema="escuro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gerador de Chaves e Senhas Blueprint</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="crypto-unit">
    <div class="unit-header">
      <div>
        <span class="unit-code">MOD-SEC // 02</span>
        <h2>GERADOR DE CHAVES & ENTROPIA</h2>
      </div>
      <span class="crypto-status">CRYPT-GEN 2.0</span>
    </div>

    <!-- Visor da Senha Gerada -->
    <div class="result-box">
      <input type="text" id="passwordOutput" readonly value="" aria-label="Senha Gerada">
      <button id="copyBtn" class="action-btn" title="Copiar Chave">Copiar</button>
    </div>
    <div id="copyToast" class="copy-toast">Chave copiada com sucesso</div>

    <!-- Medidor de Forca e Entropia -->
    <div class="entropy-meter-box">
      <div class="entropy-header">
        <span class="entropy-label">ENTROPIA / SEGURANCA</span>
        <span id="entropyScore" class="entropy-value">0 BITS</span>
      </div>
      <div class="meter-bar-track">
        <div id="meterBarFill" class="meter-bar-fill"></div>
      </div>
    </div>

    <!-- Controles -->
    <div class="controls-panel">
      <div class="control-row">
        <div class="control-label">
          <span>COMPRIMENTO</span>
          <span id="lengthVal" class="spec-highlight">16 CARACTERES</span>
        </div>
        <input type="range" id="lengthSlider" min="8" max="64" value="16" class="tech-slider">
      </div>

      <div class="checkbox-grid">
        <label class="tech-checkbox">
          <input type="checkbox" id="includeUpper" checked>
          <span class="box-indicator"></span>
          <span>MAIUSCULAS [A-Z]</span>
        </label>
        <label class="tech-checkbox">
          <input type="checkbox" id="includeLower" checked>
          <span class="box-indicator"></span>
          <span>MINUSCULAS [a-z]</span>
        </label>
        <label class="tech-checkbox">
          <input type="checkbox" id="includeNumbers" checked>
          <span class="box-indicator"></span>
          <span>NUMEROS [0-9]</span>
        </label>
        <label class="tech-checkbox">
          <input type="checkbox" id="includeSymbols" checked>
          <span class="box-indicator"></span>
          <span>SIMBOLOS [!@#$%]</span>
        </label>
      </div>

      <button id="generateBtn" class="generate-btn">
        GERAR NOVA CHAVE CRIPTOGRAFICA
      </button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', 'Consolas', monospace;
}

:root {
  --bg-color: #081a33;
  --panel-bg: #0f3563;
  --border-color: #ffffff;
  --display-bg: #051326;
  --text-main: #ffffff;
  --text-muted: #9bbcdb;
  --grid-line: rgba(255, 255, 255, 0.07);
}

[data-tema="claro"],
[data-theme="light"] {
  --bg-color: #e5edf7;
  --panel-bg: #ffffff;
  --border-color: #103766;
  --display-bg: #e8eef5;
  --text-main: #0c2647;
  --text-muted: #506f94;
  --grid-line: rgba(16, 55, 102, 0.08);
}

body {
  background-color: var(--bg-color);
  background-image: 
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 20px 20px;
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.crypto-unit {
  width: 100%;
  max-width: 480px;
  background: var(--panel-bg);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.5);
}

.result-box {
  display: flex;
  background: var(--display-bg);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  margin-bottom: 8px;
}

.result-box input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-main);
  font-size: 16px;
  padding: 12px 14px;
  outline: none;
  font-family: inherit;
}

.action-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-left: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0 16px;
  cursor: pointer;
  font-weight: 600;
}

.action-btn:hover {
  background: var(--text-main);
  color: var(--bg-color);
}

.meter-bar-track {
  height: 6px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.meter-bar-fill {
  height: 100%;
  width: 0%;
  background: #f87171;
  transition: width 0.3s ease;
}

.generate-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

.generate-btn:hover {
  background: var(--text-main);
  color: var(--bg-color);
}`,
      js: `class GeradorSenhasBlueprint {
  constructor() {
    this.saida = document.getElementById('passwordOutput');
    this.botaoCopiar = document.getElementById('copyBtn');
    this.avisoCopia = document.getElementById('copyToast');
    this.sliderComprimento = document.getElementById('lengthSlider');
    this.textoComprimento = document.getElementById('lengthVal');
    this.pontuacaoEntropia = document.getElementById('entropyScore');
    this.barraEntropia = document.getElementById('meterBarFill');
    this.botaoGerar = document.getElementById('generateBtn');

    this.chkMaiusculas = document.getElementById('includeUpper');
    this.chkMinusculas = document.getElementById('includeLower');
    this.chkNumeros = document.getElementById('includeNumbers');
    this.chkSimbolos = document.getElementById('includeSymbols');

    this.caracteres = {
      maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      minusculas: 'abcdefghijklmnopqrstuvwxyz',
      numeros: '0123456789',
      simbolos: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    this.iniciar();
  }

  iniciar() {
    this.sliderComprimento.addEventListener('input', () => {
      this.textoComprimento.textContent = this.sliderComprimento.value + ' CARACTERES';
      this.gerar();
    });

    [this.chkMaiusculas, this.chkMinusculas, this.chkNumeros, this.chkSimbolos].forEach(chk => {
      chk.addEventListener('change', () => this.gerar());
    });

    this.botaoGerar.addEventListener('click', () => this.gerar());
    this.botaoCopiar.addEventListener('click', () => this.copiarParaClipboard());

    this.gerar();
  }

  gerar() {
    let pool = '';
    if (this.chkMaiusculas.checked) pool += this.caracteres.maiusculas;
    if (this.chkMinusculas.checked) pool += this.caracteres.minusculas;
    if (this.chkNumeros.checked) pool += this.caracteres.numeros;
    if (this.chkSimbolos.checked) pool += this.caracteres.simbolos;

    if (!pool) {
      this.saida.value = 'Selecione ao menos 1 opcao';
      return;
    }

    const comp = parseInt(this.sliderComprimento.value, 10);
    const array = new Uint32Array(comp);
    window.crypto.getRandomValues(array);

    let senha = '';
    for (let i = 0; i < comp; i++) {
      senha += pool[array[i] % pool.length];
    }

    this.saida.value = senha;
    this.calcularEntropia(senha, pool.length);
  }

  calcularEntropia(senha, tamanhoPool) {
    const bits = Math.round(senha.length * Math.log2(tamanhoPool));
    let status = bits >= 80 ? 'Excelente' : bits >= 60 ? 'Forte' : bits >= 40 ? 'Moderada' : 'Fraca';
    this.pontuacaoEntropia.textContent = bits + ' BITS // ' + status;
    this.barraEntropia.style.width = Math.min(100, (bits / 120) * 100) + '%';
  }

  copiarParaClipboard() {
    if (!this.saida.value) return;
    navigator.clipboard.writeText(this.saida.value).then(() => {
      this.avisoCopia.style.opacity = '1';
      setTimeout(() => { this.avisoCopia.style.opacity = '0'; }, 2000);
    });
  }
}

new GeradorSenhasBlueprint();`
    }
  },
  {
    id: "relogio-analogico-blueprint",
    codigo: "PRJ-003",
    titulo: "Cronometro e Relogio de Precisao",
    categoria: "interativo",
    status: "Operacional",
    versao: "1.1.0",
    data: "2026",
    resumo: "Instrumento analagico e digital com mostrador desenhado em CSS, sincronizacao em tempo real e cronometro de precisao com registro de voltas.",
    etiquetas: ["CSS Animations", "JavaScript Timers", "DOM API", "Design Blueprint"],
    caminho: "projects/demo-relogio-analogico/index.html",
    pasta: "demo-relogio-analogico",
    destaques: [
      "Mostrador analogico desenhado com linhas de desenho tecnico",
      "Display digital com horas, minutos, segundos e centesimos",
      "Modo cronometro com funcoes de iniciar, pausar e zerar",
      "Historico de voltas gravadas"
    ],
    codigoFonte: {
      html: `<!DOCTYPE html>
<html lang="pt-BR" data-tema="escuro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cronometro e Relogio de Precisao Blueprint</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="clock-unit">
    <div class="unit-header">
      <div>
        <span class="unit-code">MOD-TIME // 03</span>
        <h2>CRONOMETRO E RELOGIO</h2>
      </div>
      <span class="clock-status">60 FPS // PRECISAO</span>
    </div>

    <!-- Mostrador Analogico -->
    <div class="dial-container">
      <div class="clock-dial" id="clockDial">
        <div class="dial-crosshair"></div>
        <div class="dial-center-cap"></div>
        <div class="hand hand-hour" id="hourHand"></div>
        <div class="hand hand-minute" id="minHand"></div>
        <div class="hand hand-second" id="secHand"></div>
      </div>
    </div>

    <!-- Display Digital -->
    <div class="digital-display">
      <div class="display-mode-label" id="displayModeLabel">HORARIO LOCAL</div>
      <div class="time-readout" id="timeReadout">00:00:00.00</div>
    </div>

    <!-- Controles -->
    <div class="stopwatch-controls">
      <button id="toggleModeBtn" class="mode-btn">Alternar Modo</button>
      <div class="stopwatch-actions" id="stopwatchActions" style="display: none;">
        <button id="startStopBtn" class="action-btn-ctrl">Iniciar</button>
        <button id="lapBtn" class="action-btn-ctrl">Volta</button>
        <button id="resetBtn" class="action-btn-ctrl">Zerar</button>
      </div>
    </div>

    <div class="laps-list-box" id="lapsBox" style="display: none;">
      <div class="laps-header">VOLTAS GRAVADAS</div>
      <div class="laps-container" id="lapsContainer"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', 'Consolas', monospace;
}

:root {
  --bg-color: #081a33;
  --panel-bg: #0f3563;
  --border-color: #ffffff;
  --dial-bg: #051326;
  --text-main: #ffffff;
  --text-muted: #9bbcdb;
  --grid-line: rgba(255, 255, 255, 0.07);
  --hand-hour: #ffffff;
  --hand-min: #e0ecf8;
  --hand-sec: #f87171;
}

[data-tema="claro"],
[data-theme="light"] {
  --bg-color: #e5edf7;
  --panel-bg: #ffffff;
  --border-color: #103766;
  --dial-bg: #e8eef5;
  --text-main: #0c2647;
  --text-muted: #506f94;
  --grid-line: rgba(16, 55, 102, 0.08);
  --hand-hour: #0c2647;
  --hand-min: #1e3d63;
  --hand-sec: #dc2626;
}

body {
  background-color: var(--bg-color);
  background-image: 
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 20px 20px;
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.clock-unit {
  width: 100%;
  max-width: 440px;
  background: var(--panel-bg);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.5);
}

.dial-container {
  display: flex;
  justify-content: center;
  margin: 16px 0 20px;
}

.clock-dial {
  width: 240px;
  height: 240px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  background: var(--dial-bg);
  position: relative;
}

.dial-center-cap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: var(--text-main);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
}

.hand-hour { width: 4px; height: 60px; background: var(--hand-hour); z-index: 4; }
.hand-minute { width: 3px; height: 85px; background: var(--hand-min); z-index: 5; }
.hand-second { width: 1.5px; height: 98px; background: var(--hand-sec); z-index: 6; }

.digital-display {
  background: var(--dial-bg);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  padding: 12px;
  text-align: center;
  margin-bottom: 16px;
}

.time-readout {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
}`,
      js: `class RelogioBlueprint {
  constructor() {
    this.ponteiroHora = document.getElementById('hourHand');
    this.ponteiroMinuto = document.getElementById('minHand');
    this.ponteiroSegundo = document.getElementById('secHand');
    this.visorHora = document.getElementById('timeReadout');

    this.iniciarLoop();
  }

  iniciarLoop() {
    const atualizar = () => {
      const agora = new Date();
      const ms = agora.getMilliseconds();
      const s = agora.getSeconds() + ms / 1000;
      const m = agora.getMinutes() + s / 60;
      const h = (agora.getHours() % 12) + m / 60;

      this.ponteiroHora.style.transform = "translateX(-50%) rotate(" + (h * 30) + "deg)";
      this.ponteiroMinuto.style.transform = "translateX(-50%) rotate(" + (m * 6) + "deg)";
      this.ponteiroSegundo.style.transform = "translateX(-50%) rotate(" + (s * 6) + "deg)";

      const hh = agora.getHours().toString().padStart(2, '0');
      const mm = agora.getMinutes().toString().padStart(2, '0');
      const ss = agora.getSeconds().toString().padStart(2, '0');
      this.visorHora.textContent = hh + ':' + mm + ':' + ss;

      requestAnimationFrame(atualizar);
    };

    requestAnimationFrame(atualizar);
  }
}

new RelogioBlueprint();`
    }
  }
];

// Compatibilidade
const PROJECTS_DATA = PROJETOS_DADOS;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROJETOS_DADOS;
}
