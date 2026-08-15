/**
 * DINO AUDIO & SOUND ENGINE
 * Handles Mandarin Chinese Text-To-Speech (Web Speech API) & synthesized Jurassic Sound Effects
 */

class DinoAudioManager {
  constructor() {
    this.speechSynthesis = window.speechSynthesis || null;
    this.mandarinVoice = null;
    this.speechRate = 0.85; // Default slow and clear for learners
    this.audioCtx = null;
    
    this.initVoices();
    if (this.speechSynthesis && this.speechSynthesis.onvoiceschanged !== undefined) {
      this.speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  initVoices() {
    if (!this.speechSynthesis) return;
    const voices = this.speechSynthesis.getVoices();
    // Prioritize high-quality Chinese voices (zh-CN, Google 普通话, Microsoft Xiaoxiao/Huihui/Kangkang, Tingting, etc.)
    this.mandarinVoice = voices.find(v => v.lang === 'zh-CN' || v.lang === 'cmn-Hans-CN' || v.lang.startsWith('zh')) || null;
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  setRate(rate) {
    this.speechRate = Number(rate);
  }

  /**
   * Speak Chinese text with visual callback
   */
  speak(text, onStart, onEnd) {
    if (!this.speechSynthesis) {
      console.warn("SpeechSynthesis not supported on this browser.");
      if (onEnd) onEnd();
      return;
    }

    // Cancel ongoing speech
    this.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = this.speechRate;
    utterance.pitch = 1.05;

    if (this.mandarinVoice) {
      utterance.voice = this.mandarinVoice;
    }

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = (e) => {
      console.warn("TTS error:", e);
      if (onEnd) onEnd();
    };

    this.speechSynthesis.speak(utterance);
  }

  /**
   * Jurassic Sound Effects via Web Audio API
   */
  playSfx(type) {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    switch (type) {
      case 'correct':
      case 'star': {
        // Cheerful sparkling chord (C5 -> E5 -> G5 -> C6)
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.08);
          gain.gain.setValueAtTime(0, now + i * 0.08);
          gain.gain.linearRampToValueAtTime(0.2, now + i * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.35);
        });
        break;
      }

      case 'wrong': {
        // Gentle error thud (low boop)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
        break;
      }

      case 'egg_crack': {
        // Crisp crunchy snap sound
        const bufferSize = ctx.sampleRate * 0.15;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1800, now);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start(now);
        break;
      }

      case 'dino_roar': {
        // Friendly playful baby dino roar / victory sound
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(320, now + 0.2);
        osc.frequency.linearRampToValueAtTime(220, now + 0.5);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.25, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.55);
        break;
      }

      case 'click': {
        // Crisp bubble pop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
        break;
      }

      case 'level_complete': {
        // Dino victory fanfare
        const notes = [392, 523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.12);
          gain.gain.setValueAtTime(0.25, now + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.12);
          osc.stop(now + i * 0.12 + 0.45);
        });
        break;
      }
    }
  }
}

// Instantiate global audio instance
window.dinoAudio = new DinoAudioManager();
