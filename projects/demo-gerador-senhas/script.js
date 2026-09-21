/**
 * LÓGICA DO GERADOR DE CHAVES CRIPTOGRÁFICAS BLUEPRINT
 */

class CryptoKeyGenerator {
  constructor() {
    this.output = document.getElementById('passwordOutput');
    this.copyBtn = document.getElementById('copyBtn');
    this.copyToast = document.getElementById('copyToast');
    this.lengthSlider = document.getElementById('lengthSlider');
    this.lengthVal = document.getElementById('lengthVal');
    this.entropyScore = document.getElementById('entropyScore');
    this.meterBarFill = document.getElementById('meterBarFill');
    this.generateBtn = document.getElementById('generateBtn');

    this.chkUpper = document.getElementById('includeUpper');
    this.chkLower = document.getElementById('includeLower');
    this.chkNumbers = document.getElementById('includeNumbers');
    this.chkSymbols = document.getElementById('includeSymbols');

    this.charSets = {
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lower: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    this.init();
  }

  init() {
    this.lengthSlider.addEventListener('input', () => {
      this.lengthVal.textContent = `${this.lengthSlider.value} CARACTERES`;
      this.generate();
    });

    [this.chkUpper, this.chkLower, this.chkNumbers, this.chkSymbols].forEach(chk => {
      chk.addEventListener('change', () => this.generate());
    });

    this.generateBtn.addEventListener('click', () => this.generate());
    this.copyBtn.addEventListener('click', () => this.copyToClipboard());

    // Geração inicial
    this.generate();
  }

  generate() {
    let pool = '';
    if (this.chkUpper.checked) pool += this.charSets.upper;
    if (this.chkLower.checked) pool += this.charSets.lower;
    if (this.chkNumbers.checked) pool += this.charSets.numbers;
    if (this.chkSymbols.checked) pool += this.charSets.symbols;

    if (!pool) {
      this.output.value = 'SELECIONE AO MENOS 1 TIPO';
      this.updateEntropy(0, 0);
      return;
    }

    const length = parseInt(this.lengthSlider.value, 10);
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    let password = '';
    for (let i = 0; i < length; i++) {
      password += pool[array[i] % pool.length];
    }

    this.output.value = password;
    this.calculateEntropy(password, pool.length);
  }

  calculateEntropy(password, poolSize) {
    // Entropia em bits = L * log2(R)
    const length = password.length;
    const entropy = Math.round(length * Math.log2(poolSize));
    this.updateEntropy(entropy, length);
  }

  updateEntropy(bits, length) {
    let strength = 'MUITO FRACA';
    let color = '#ef4444';
    let percent = Math.min(100, Math.round((bits / 128) * 100));

    if (bits >= 90) {
      strength = 'GRAU MILITAR / EXCELENTE';
      color = '#22c55e';
    } else if (bits >= 65) {
      strength = 'FORTE';
      color = '#3b82f6';
    } else if (bits >= 45) {
      strength = 'MODERADA';
      color = '#eab308';
    }

    this.entropyScore.textContent = `${bits} BITS // ${strength}`;
    this.entropyScore.style.color = color;
    this.meterBarFill.style.width = `${percent}%`;
    this.meterBarFill.style.backgroundColor = color;
  }

  copyToClipboard() {
    if (!this.output.value || this.output.value.startsWith('SELECIONE')) return;

    navigator.clipboard.writeText(this.output.value).then(() => {
      this.copyToast.classList.add('visible');
      setTimeout(() => {
        this.copyToast.classList.remove('visible');
      }, 2000);
    });
  }
}

new CryptoKeyGenerator();
