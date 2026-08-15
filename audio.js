// Audio Engine: Web Audio API Synthesizer & SpeechSynthesis TTS Mandarin Chinese

class DinoAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ttsVoice = null;
    this.initAudioContext();
    this.initTTS();
  }

  initAudioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      this.ctx = new AudioCtx();
    }
  }

  ensureContext() {
    if (!this.ctx) {
      this.initAudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initTTS() {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Cari suara Mandarin (zh-CN, cmn-Hans, zh)
        this.ttsVoice = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh') || v.lang.includes('Chinese')) || null;
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  // Pelafalan Bahasa Mandarin menggunakan Web Speech API
  speakMandarin(text, rate = 0.9, onStart = null, onEnd = null) {
    if (!('speechSynthesis' in window) || !text) return;
    
    window.speechSynthesis.cancel(); // Hentikan ucapan sebelumnya
    const cleanText = text.replace(/[\(\)（）\/\d]/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-CN';
    if (this.ttsVoice) {
      utterance.voice = this.ttsVoice;
    }
    utterance.rate = rate; // 0.75x pelan, 1.0x normal
    utterance.pitch = 1.05;

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = (e) => {
      console.warn("TTS Error:", e);
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // --- EFEK SUARA SINTESIS DINOSAURUS (Web Audio API) ---

  playTap() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playCorrect() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Kemenangan Ceria)
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = this.ctx.currentTime + (i * 0.08);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.25, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + 0.25);
    });
  }

  playWrong() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(90, this.ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  // Raungan Lucu Dinosaurus (Dino Roar)
  playDinoRoar() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Layer 1: Low Growl
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.linearRampToValueAtTime(180, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(65, now + 0.5);

    // Layer 2: Filter Sweep
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.linearRampToValueAtTime(1200, now + 0.2);
    filter.frequency.exponentialRampToValueAtTime(250, now + 0.5);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  // Efek Retak dan Menetasnya Telur Dino (Egg Hatch)
  playEggCrack() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    // Suara cangkang retak 'krek-krek'
    [0, 0.06, 0.14, 0.22].forEach((offset, idx) => {
      const t = this.ctx.currentTime + offset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800 + (idx * 200), t);
      osc.frequency.exponentialRampToValueAtTime(200, t + 0.04);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.04);
    });

    // Disusul nada kemilau ceria
    setTimeout(() => {
      this.playSparkle();
    }, 280);
  }

  // Kilauan Magis Guratan Selesai (Sparkle)
  playSparkle() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const freqs = [880, 1108.73, 1318.51, 1760]; // A5, C#6, E6, A6
    freqs.forEach((f, idx) => {
      const t = this.ctx.currentTime + (idx * 0.05);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    });
  }

  // Fanfare Kemenangan Jurassic
  playFanfare() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const chord = [
      { f: 523.25, d: 0.15, o: 0 },
      { f: 659.25, d: 0.15, o: 0.12 },
      { f: 783.99, d: 0.15, o: 0.24 },
      { f: 1046.50, d: 0.45, o: 0.36 }
    ];

    chord.forEach(item => {
      const t = this.ctx.currentTime + item.o;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(item.f, t);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + item.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + item.d);
    });
  }
}

window.dinoAudio = new DinoAudioEngine();
