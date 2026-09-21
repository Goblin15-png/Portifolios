/**
 * LÓGICA DA CALCULADORA DE PRECISÃO BLUEPRINT
 */

class BlueprintCalculator {
  constructor() {
    this.historyEl = document.getElementById('calcHistory');
    this.currentEl = document.getElementById('calcCurrent');
    this.expression = '';
    this.currentVal = '0';
    this.evaluated = false;

    this.init();
  }

  init() {
    document.querySelectorAll('.calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const val = btn.getAttribute('data-val');
        this.handleAction(action, val);
      });
    });

    // Suporte ao teclado
    window.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  handleAction(action, val) {
    switch (action) {
      case 'num':
        this.appendNumber(val);
        break;
      case 'dot':
        this.appendDot();
        break;
      case 'op':
        this.appendOperator(val);
        break;
      case 'clear':
        this.clear();
        break;
      case 'backspace':
        this.backspace();
        break;
      case 'equals':
        this.calculate();
        break;
      case 'sqrt':
        this.calculateSqrt();
        break;
      case 'pow':
        this.calculatePow();
        break;
      case 'percent':
        this.calculatePercent();
        break;
      case 'paren-open':
        this.appendParen('(');
        break;
      case 'paren-close':
        this.appendParen(')');
        break;
    }
    this.updateDisplay();
  }

  appendNumber(num) {
    if (this.evaluated || this.currentVal === '0') {
      this.currentVal = num;
      this.evaluated = false;
    } else {
      this.currentVal += num;
    }
  }

  appendDot() {
    if (this.evaluated) {
      this.currentVal = '0.';
      this.evaluated = false;
      return;
    }
    if (!this.currentVal.includes('.')) {
      this.currentVal += '.';
    }
  }

  appendOperator(op) {
    const symbol = op === '*' ? '×' : op === '/' ? '÷' : op;
    if (this.expression && !this.currentVal && !this.evaluated) {
      this.expression = this.expression.slice(0, -1) + op;
    } else {
      this.expression += ` ${this.currentVal} ${op} `;
      this.currentVal = '';
    }
    this.evaluated = false;
  }

  appendParen(paren) {
    if (paren === '(') {
      if (this.currentVal === '0' || this.evaluated) {
        this.currentVal = '(';
      } else {
        this.currentVal += '(';
      }
    } else {
      this.currentVal += ')';
    }
    this.evaluated = false;
  }

  clear() {
    this.expression = '';
    this.currentVal = '0';
    this.evaluated = false;
  }

  backspace() {
    if (this.evaluated) {
      this.clear();
      return;
    }
    if (this.currentVal.length > 1) {
      this.currentVal = this.currentVal.slice(0, -1);
    } else {
      this.currentVal = '0';
    }
  }

  calculateSqrt() {
    try {
      const num = parseFloat(this.currentVal);
      if (num < 0) {
        this.currentVal = 'ERRO (NUM < 0)';
      } else {
        this.historyEl.textContent = `√(${num})`;
        this.currentVal = Math.sqrt(num).toString();
      }
      this.evaluated = true;
    } catch {
      this.currentVal = 'ERRO';
    }
  }

  calculatePow() {
    try {
      const num = parseFloat(this.currentVal);
      this.historyEl.textContent = `sqr(${num})`;
      this.currentVal = Math.pow(num, 2).toString();
      this.evaluated = true;
    } catch {
      this.currentVal = 'ERRO';
    }
  }

  calculatePercent() {
    try {
      const num = parseFloat(this.currentVal);
      this.currentVal = (num / 100).toString();
      this.evaluated = true;
    } catch {
      this.currentVal = 'ERRO';
    }
  }

  calculate() {
    if (!this.expression && !this.currentVal) return;
    const fullExpr = (this.expression + ' ' + (this.currentVal || '')).trim();
    
    // Sanitiza e formata para JavaScript Math
    let sanitized = fullExpr
      .replace(/×/g, '*')
      .replace(/÷/g, '/');

    try {
      // Avaliação segura com Function para cálculo aritmético estrito
      const result = Function(`'use strict'; return (${sanitized})`)();
      const formatted = Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
      this.historyEl.textContent = fullExpr + ' =';
      this.currentVal = formatted.toString();
      this.expression = '';
      this.evaluated = true;
    } catch (e) {
      this.currentVal = 'SINTAXE INVÁLIDA';
      this.evaluated = true;
    }
  }

  updateDisplay() {
    this.currentEl.textContent = this.currentVal || '0';
    if (!this.evaluated && this.expression) {
      this.historyEl.textContent = this.expression;
    }
  }

  handleKeyboard(e) {
    if (e.key >= '0' && e.key <= '9') this.handleAction('num', e.key);
    if (e.key === '.') this.handleAction('dot');
    if (['+', '-', '*', '/'].includes(e.key)) this.handleAction('op', e.key);
    if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      this.handleAction('equals');
    }
    if (e.key === 'Backspace') this.handleAction('backspace');
    if (e.key === 'Escape') this.handleAction('clear');
  }
}

new BlueprintCalculator();
