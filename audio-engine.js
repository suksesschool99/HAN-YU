// =========================================================================
// DINOSAUR MANDARIN AUDIO & SPEECH SYNTHESIS ENGINE
// Web Audio API Procedural FX + Web Speech Synthesis (Slow Chinese Mandarin)
// Khusus Anak Sekolah Dasar (SD) Han Yu 1 - Han Yu 12
// =========================================================================

class DinoAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.speechRate = 0.65; // Kecepatan pelan ramah anak SD (default 0.65x)
    this.chineseVoice = null;
    this.currentUtterance = null;
    this.isSpeaking = false;
    
    // Inisialisasi suara TTS
    this.initVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  // Memastikan AudioContext aktif (diaktifkan saat interaksi pengguna)
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    
    // Prioritaskan suara Mandarin Tiongkok (zh-CN, cmn-Hans-CN, zh)
    this.chineseVoice = voices.find(v => 
      v.lang === 'zh-CN' || 
      v.lang === 'zh_CN' || 
      v.lang === 'cmn-Hans-CN' || 
      v.lang.toLowerCase().includes('chinese') ||
      v.lang.startsWith('zh')
    ) || null;
  }

  // -----------------------------------------------------------------------
  // 1. CHINESE TEXT-TO-SPEECH (AUDIO PELAN & JELAS UNTUK ANAK SD)
  // -----------------------------------------------------------------------
  speakMandarin(text, options = {}) {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) {
      console.warn("Web Speech Synthesis tidak didukung pada peramban ini.");
      return;
    }

    this.stopSpeaking();

    // Bersihkan karakter selain teks bacaan Mandarin
    const cleanText = text.replace(/[\[\]\(\)\{\}]/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-CN';
    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
    }
    
    // Kecepatan membaca khusus anak SD (0.5x - 1.2x)
    utterance.rate = options.rate !== undefined ? options.rate : this.speechRate;
    utterance.pitch = options.pitch !== undefined ? options.pitch : 1.05; // Nada ramah & ceria

    this.isSpeaking = true;

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      if (options.onError) options.onError(e);
    };

    if (options.onBoundary) {
      utterance.onboundary = options.onBoundary;
    }

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  // Pembacaan Terjemahan Bahasa Indonesia
  speakIndonesian(text, options = {}) {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) return;

    this.stopSpeaking();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = options.rate !== undefined ? options.rate : 0.85;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      if (options.onStart) options.onStart();
    };
    utterance.onend = () => {
      if (options.onEnd) options.onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }

  setSpeechRate(rate) {
    this.speechRate = Math.max(0.4, Math.min(1.4, parseFloat(rate)));
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSpeaking();
    }
    return this.isMuted;
  }

  // -----------------------------------------------------------------------
  // 2. PROCEDURAL SOUND FX (WEB AUDIO API - TANPA KETERGANTUNGAN AUDIO LUAR)
  // -----------------------------------------------------------------------

  // A. Suara Tepuk Tangan Meriah (Applause & Cheering)
  playApplauseSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 2.0;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Filtered pink/white noise simulation untuk clap burst
    for (let i = 0; i < bufferSize; i++) {
      const t = i / ctx.sampleRate;
      const burst = Math.sin(t * 30 * Math.PI) * Math.sin(t * 12 * Math.PI);
      const rand = (Math.random() * 2 - 1);
      const envelope = Math.max(0, 1 - t / 2.0) * (0.5 + 0.5 * Math.abs(burst));
      data[i] = rand * envelope * 0.45;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 1.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.0);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();

    // Harmoni nada kemenangan gembira
    this.playMelodicChime([523.25, 659.25, 783.99, 1046.5], 0.12, 0.4);
  }

  // B. Suara Raungan Ramah Dinosaurus (Friendly Dino Cheer)
  playDinoRoarSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    const now = ctx.currentTime;
    
    // Pitch sweep ramah ala kartun dinosaurus
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.25);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.7);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.75);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.75);
  }

  // C. Suara Telur Menetas / Tombol Dinosaurus (Egg Crack / Bubble Pop)
  playEggCrackSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const now = ctx.currentTime;

    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  // D. Suara Bintang / Koin Emas (Star Chime)
  playStarSound() {
    if (this.isMuted) return;
    this.playMelodicChime([784, 988, 1175, 1568], 0.09, 0.3);
  }

  // E. Suara Jawaban Benar (Correct Ping)
  playCorrectSound() {
    if (this.isMuted) return;
    this.playMelodicChime([587.33, 880], 0.1, 0.35);
  }

  // F. Suara Jawaban Salah / Coba Lagi (Gentle Try Again)
  playIncorrectSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;

    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.35);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  // G. Suara Kuas Goresan (Brush Swoosh)
  playBrushSwoosh() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;

    osc.frequency.setValueAtTime(300 + Math.random() * 200, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.06);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // H. Suara Fanfare Kelulusan Ujian YCT 2 (Victory Fanfare)
  playFanfareSound() {
    if (this.isMuted) return;
    const notes = [523.25, 523.25, 523.25, 659.25, 783.99, 1046.5];
    const delays = [0, 0.12, 0.24, 0.36, 0.52, 0.72];
    const durations = [0.1, 0.1, 0.1, 0.15, 0.2, 0.6];

    const ctx = this.getAudioContext();
    if (!ctx) return;

    notes.forEach((freq, idx) => {
      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        const now = ctx.currentTime;

        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + durations[idx]);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + durations[idx]);
      }, delays[idx] * 1000);
    });
  }

  // Helper Nada Melodi
  playMelodicChime(frequencies, stepDelay = 0.08, volume = 0.3) {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    frequencies.forEach((freq, idx) => {
      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        const now = ctx.currentTime;

        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.3);
      }, idx * stepDelay * 1000);
    });
  }
}

// Instance global
const dinoAudio = new DinoAudioEngine();
window.dinoAudio = dinoAudio;
