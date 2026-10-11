/**
 * LÓGICA DO CRONÔMETRO & RELÓGIO DE PRECISÃO BLUEPRINT
 */

class PrecisionTimeInstrument {
  constructor() {
    this.clockDial = document.getElementById('clockDial');
    this.hourHand = document.getElementById('hourHand');
    this.minHand = document.getElementById('minHand');
    this.secHand = document.getElementById('secHand');
    this.timeReadout = document.getElementById('timeReadout');
    this.displayModeLabel = document.getElementById('displayModeLabel');

    this.toggleModeBtn = document.getElementById('toggleModeBtn');
    this.stopwatchActions = document.getElementById('stopwatchActions');
    this.startStopBtn = document.getElementById('startStopBtn');
    this.lapBtn = document.getElementById('lapBtn');
    this.resetBtn = document.getElementById('resetBtn');
    this.lapsBox = document.getElementById('lapsBox');
    this.lapsContainer = document.getElementById('lapsContainer');

    this.mode = 'clock'; // 'clock' | 'stopwatch'
    this.swRunning = false;
    this.swStartTime = 0;
    this.swElapsedTime = 0;
    this.swInterval = null;
    this.laps = [];

    this.init();
  }

  init() {
    this.createDialMarks();
    this.bindEvents();
    this.startLoop();
  }

  createDialMarks() {
    // Cria 60 marcações para os segundos e 12 marcações maiores para as horas
    for (let i = 0; i < 60; i++) {
      const mark = document.createElement('div');
      mark.className = `dial-mark ${i % 5 === 0 ? 'major' : ''}`;
      // Posiciona cada traço pelo centro do mostrador e o desloca radialmente.
      // O primeiro fica às 12h; os demais avançam 6° até completar 60 divisões.
      mark.style.transform = `translate(-50%, -50%) rotate(${i * 6}deg) translateY(-106px)`;
      this.clockDial.appendChild(mark);
    }
  }

  bindEvents() {
    this.toggleModeBtn.addEventListener('click', () => {
      this.mode = this.mode === 'clock' ? 'stopwatch' : 'clock';
      this.updateModeUI();
    });

    this.startStopBtn.addEventListener('click', () => {
      if (this.swRunning) {
        this.stopStopwatch();
      } else {
        this.startStopwatch();
      }
    });

    this.lapBtn.addEventListener('click', () => this.recordLap());
    this.resetBtn.addEventListener('click', () => this.resetStopwatch());
  }

  updateModeUI() {
    if (this.mode === 'stopwatch') {
      this.toggleModeBtn.textContent = 'MODO: RELÓGIO LOCAL';
      this.displayModeLabel.textContent = 'CRONÔMETRO DE PRECISÃO';
      this.stopwatchActions.style.display = 'grid';
      this.lapsBox.style.display = 'block';
    } else {
      this.toggleModeBtn.textContent = 'MODO: CRONÔMETRO';
      this.displayModeLabel.textContent = 'HORÁRIO LOCAL ATUAL';
      this.stopwatchActions.style.display = 'none';
      this.lapsBox.style.display = 'none';
    }
  }

  startStopwatch() {
    this.swRunning = true;
    this.startStopBtn.textContent = 'PAUSAR';
    this.swStartTime = performance.now() - this.swElapsedTime;
  }

  stopStopwatch() {
    this.swRunning = false;
    this.startStopBtn.textContent = 'CONTINUAR';
    this.swElapsedTime = performance.now() - this.swStartTime;
  }

  resetStopwatch() {
    this.swRunning = false;
    this.swStartTime = 0;
    this.swElapsedTime = 0;
    this.startStopBtn.textContent = 'INICIAR';
    this.laps = [];
    this.lapsContainer.innerHTML = '';
  }

  recordLap() {
    if (!this.swElapsedTime && !this.swRunning) return;
    const timeMs = this.swRunning ? performance.now() - this.swStartTime : this.swElapsedTime;
    const formatted = this.formatTime(timeMs);
    this.laps.unshift(formatted);
    
    this.lapsContainer.innerHTML = this.laps.map((lap, index) => `
      <div class="lap-entry">
        <span>VOLTA #${this.laps.length - index}</span>
        <span style="color: var(--border-color); font-weight: bold;">${lap}</span>
      </div>
    `).join('');
  }

  formatTime(ms) {
    const totalSecs = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSecs / 60).toString().padStart(2, '0');
    const seconds = (totalSecs % 60).toString().padStart(2, '0');
    const hundredths = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}.${hundredths}`;
  }

  startLoop() {
    const tick = () => {
      if (this.mode === 'clock') {
        const now = new Date();
        const ms = now.getMilliseconds();
        const secs = now.getSeconds() + ms / 1000;
        const mins = now.getMinutes() + secs / 60;
        const hours = (now.getHours() % 12) + mins / 60;

        this.hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
        this.minHand.style.transform = `translateX(-50%) rotate(${mins * 6}deg)`;
        this.secHand.style.transform = `translateX(-50%) rotate(${secs * 6}deg)`;

        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const s = now.getSeconds().toString().padStart(2, '0');
        const cs = Math.floor(ms / 10).toString().padStart(2, '0');
        this.timeReadout.textContent = `${h}:${m}:${s}.${cs}`;
      } else {
        const elapsed = this.swRunning ? performance.now() - this.swStartTime : this.swElapsedTime;
        const totalSecs = elapsed / 1000;
        const mins = totalSecs / 60;
        const hours = mins / 60;

        this.hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
        this.minHand.style.transform = `translateX(-50%) rotate(${mins * 6}deg)`;
        this.secHand.style.transform = `translateX(-50%) rotate(${(totalSecs % 60) * 6}deg)`;

        this.timeReadout.textContent = this.formatTime(elapsed);
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}

new PrecisionTimeInstrument();
