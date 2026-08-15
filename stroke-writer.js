// =========================================================================
// INTERACTIVE HANZI STROKE WRITER & PRACTICE ENGINE (TEMA DINOSAURUS)
// 1. Player Animasi Contoh Guratan Step-by-Step dengan Nama Goresan
// 2. Game Latihan Menulis Kanvas Interaktif (Repetisi 3x - 6x)
// 3. Mini-Game Tebak Urutan Guratan
// Standar Grid: Mi Zi Ge (米字格) & Tian Zi Ge (田字格)
// =========================================================================

class DinoStrokeWriter {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.container = document.getElementById(containerId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    
    this.currentVocab = null;
    this.targetRepeats = 3; // Pilihan 3x - 6x sesuai instruksi
    this.currentRepeat = 0;
    this.isDrawing = false;
    this.drawnStrokes = []; // Array of stroke paths [{ points: [...] }]
    this.currentPath = [];
    
    // Outline & Guidance
    this.showOutline = true;
    this.gridType = 'mizige'; // 'mizige' atau 'tianzige'
    this.brushSize = 14;
    this.brushColor = '#1f2937';
    
    // Step-by-Step Animation State
    this.currentDemoStep = 0;
    this.totalDemoSteps = 0;
    this.isAnimating = false;
    this.animationTimer = null;
    this.animProgress = 0;
    
    if (this.canvas) {
      this.initEvents();
      this.resizeCanvas();
    }
  }

  setCanvas(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.initEvents();
      this.resizeCanvas();
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    const parentWidth = parent ? parent.clientWidth : 320;
    const size = Math.min(parentWidth - 32, 340);
    
    this.canvas.width = size * window.devicePixelRatio;
    this.canvas.height = size * window.devicePixelRatio;
    this.canvas.style.width = `${size}px`;
    this.canvas.style.height = `${size}px`;
    
    this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.displayWidth = size;
    this.displayHeight = size;
    
    this.redraw();
  }

  initEvents() {
    if (!this.canvas) return;

    // Mouse Events
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.draw(e));
    window.addEventListener('mouseup', () => this.stopDrawing());

    // Touch Events (Tablet & Smartphone)
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startDrawing(e.touches[0]);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.draw(e.touches[0]);
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.stopDrawing();
    });
  }

  getCanvasPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  startDrawing(e) {
    this.isDrawing = true;
    this.currentPath = [];
    const pos = this.getCanvasPos(e);
    this.currentPath.push(pos);
    if (window.dinoAudio) {
      dinoAudio.getAudioContext();
      dinoAudio.playBrushSwoosh();
    }
  }

  draw(e) {
    if (!this.isDrawing) return;
    const pos = this.getCanvasPos(e);
    this.currentPath.push(pos);

    // Live Render
    this.redraw();
  }

  stopDrawing() {
    if (this.isDrawing && this.currentPath.length > 1) {
      this.drawnStrokes.push([...this.currentPath]);
      this.currentPath = [];
    }
    this.isDrawing = false;
    this.redraw();
  }

  // Load Kosakata Baru ke Workspace Guratan
  loadVocab(vocabData) {
    if (!vocabData) return;
    this.currentVocab = vocabData;
    this.currentRepeat = 0;
    this.drawnStrokes = [];
    this.currentPath = [];
    this.currentDemoStep = 0;
    this.isAnimating = false;
    if (this.animationTimer) clearInterval(this.animationTimer);

    this.renderVocabMeta();
    this.renderRepetitionBadges();
    this.resizeCanvas();
  }

  // Render Metadata Karakter, Radikal, Jumlah Guratan, & Daftar Nama Goresan
  renderVocabMeta() {
    const metaContainer = document.getElementById('stroke-meta-display');
    if (!metaContainer || !this.currentVocab) return;

    const v = this.currentVocab;
    const strokeList = v.strokeOrder || ["横", "竖", "撇", "捺", "点", "提"];

    metaContainer.innerHTML = `
      <div class="vocab-hero-card">
        <div class="vocab-top-info">
          <div class="vocab-hanzi-large">${v.hanzi}</div>
          <div class="vocab-details">
            <div class="vocab-pinyin-display">${v.pinyin}</div>
            <div class="vocab-meaning-display">${v.meaning}</div>
            <div class="vocab-badges">
              <span class="dino-pill stroke-pill">✍️ ${v.strokes || strokeList.length} Goresan (笔画)</span>
              <span class="dino-pill radical-pill">🔍 Radikal: <strong>${v.radical || '—'}</strong></span>
            </div>
          </div>
          <button class="dino-btn primary small audio-read-btn" onclick="dinoAudio.speakMandarin('${v.hanzi}')" title="Dengar lafal karakter ini">
            🔊 Baca Kata
          </button>
        </div>

        <!-- 1. CONTOH URUTAN GURATAN STEP-BY-STEP -->
        <div class="stroke-sequence-section">
          <div class="section-sublabel">
            <span>🎬 Urutan Penulisan Guratan (笔顺规则):</span>
          </div>
          
          <div class="stroke-order-pills-list">
            ${strokeList.map((stName, idx) => `
              <div class="stroke-order-item ${idx === this.currentDemoStep ? 'active-step' : ''}" onclick="dinoWriter.goToDemoStep(${idx})">
                <span class="step-num">${idx + 1}</span>
                <span class="step-name">${stName}</span>
              </div>
            `).join('')}
          </div>

          <div class="stroke-player-controls">
            <button class="player-btn" onclick="dinoWriter.prevDemoStep()" title="Goresan Sebelumnya">⏮️ Goresan Lalu</button>
            <button class="player-btn play-action" id="stroke-play-toggle-btn" onclick="dinoWriter.toggleDemoPlay()">
              ${this.isAnimating ? '⏸️ Jeda' : '▶️ Putar Animasi'}
            </button>
            <button class="player-btn" onclick="dinoWriter.nextDemoStep()" title="Goresan Berikutnya">⏭️ Goresan Berikut</button>
            <button class="player-btn reset-action" onclick="dinoWriter.resetDemo()" title="Ulang dari awal">↺ Awal</button>
          </div>
        </div>

        <!-- 2. TARGET LATIHAN REPETISI 3X - 6X -->
        <div class="repeat-target-control-box">
          <div class="repeat-header">
            <span>🎯 Target Latihan Menulis:</span>
            <select id="repeat-target-selector" onchange="dinoWriter.setTargetRepeats(this.value)">
              <option value="3" ${this.targetRepeats === 3 ? 'selected' : ''}>3 Kali (Standar SD)</option>
              <option value="4" ${this.targetRepeats === 4 ? 'selected' : ''}>4 Kali (Bagus)</option>
              <option value="5" ${this.targetRepeats === 5 ? 'selected' : ''}>5 Kali (Hebat)</option>
              <option value="6" ${this.targetRepeats === 6 ? 'selected' : ''}>6 Kali (Super Mahir)</option>
            </select>
          </div>
          <div class="repetition-badges-row" id="repetition-badges-container"></div>
        </div>
      </div>
    `;
    this.renderRepetitionBadges();
  }

  setTargetRepeats(val) {
    this.targetRepeats = parseInt(val) || 3;
    this.currentRepeat = 0;
    this.renderRepetitionBadges();
  }

  renderRepetitionBadges() {
    const container = document.getElementById('repetition-badges-container');
    if (!container) return;

    let html = '';
    for (let i = 1; i <= this.targetRepeats; i++) {
      const isCompleted = i <= this.currentRepeat;
      html += `
        <div class="repeat-badge-box ${isCompleted ? 'completed' : ''}">
          <span class="repeat-icon">${isCompleted ? '⭐' : '🐾'}</span>
          <span class="repeat-text">Latihan ${i}</span>
        </div>
      `;
    }
    container.innerHTML = html;
  }

  // Gambarkan Grid Mi Zi Ge / Tian Zi Ge & Karakter
  redraw() {
    if (!this.ctx || !this.displayWidth) return;
    const w = this.displayWidth;
    const h = this.displayHeight;

    this.ctx.clearRect(0, 0, w, h);

    // 1. Gambar Background Grid Mi Zi Ge (米字格)
    this.drawMiZiGe(w, h);

    // 2. Gambar Panduan Bayangan (Ghost Outline) jika aktif
    if (this.showOutline && this.currentVocab) {
      this.drawGhostCharacter(w, h);
    }

    // 3. Gambar Step Animasi Contoh Guratan
    if (this.currentDemoStep > 0 && this.currentVocab) {
      this.drawAnimatedDemoStep(w, h);
    }

    // 4. Gambar Goresan Tangan Pengguna
    this.drawUserStrokes();
  }

  drawMiZiGe(w, h) {
    const ctx = this.ctx;
    ctx.save();
    
    // Background Lembut
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);

    // Border Luar Kotak Tian Zi Ge / Mi Zi Ge
    ctx.strokeStyle = '#e76f51';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(6, 6, w - 12, h - 12);

    // Garis Garis Panduan Merah Putus-Putus
    ctx.strokeStyle = '#f4a261';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    // Garis Silang Diagonal (米字)
    if (this.gridType === 'mizige') {
      ctx.beginPath();
      ctx.moveTo(6, 6);
      ctx.lineTo(w - 6, h - 6);
      ctx.moveTo(w - 6, 6);
      ctx.lineTo(6, h - 6);
      ctx.stroke();
    }

    // Garis Tengah Horizontal & Vertikal (田字)
    ctx.beginPath();
    ctx.moveTo(w / 2, 6);
    ctx.lineTo(w / 2, h - 6);
    ctx.moveTo(6, h / 2);
    ctx.lineTo(w - 6, h / 2);
    ctx.stroke();

    ctx.restore();
  }

  drawGhostCharacter(w, h) {
    if (!this.currentVocab) return;
    const ctx = this.ctx;
    ctx.save();
    
    const char = this.currentVocab.hanzi[0] || '你';
    const fontSize = Math.floor(w * 0.72);
    
    ctx.font = `bold ${fontSize}px "Noto Serif SC", "KaiTi", "STKaiti", "SimSun", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Warna garis bayangan yang jelas tapi tidak silau
    ctx.fillStyle = 'rgba(45, 106, 79, 0.12)';
    ctx.strokeStyle = 'rgba(45, 106, 79, 0.28)';
    ctx.lineWidth = 1.5;
    
    ctx.fillText(char, w / 2, h / 2 + 6);
    ctx.strokeText(char, w / 2, h / 2 + 6);
    
    ctx.restore();
  }

  drawAnimatedDemoStep(w, h) {
    if (!this.currentVocab) return;
    const ctx = this.ctx;
    ctx.save();
    
    const char = this.currentVocab.hanzi[0] || '你';
    const fontSize = Math.floor(w * 0.72);
    
    ctx.font = `bold ${fontSize}px "Noto Serif SC", "KaiTi", "STKaiti", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Highlight warna oranye emas untuk demonstrasi
    ctx.fillStyle = 'rgba(231, 111, 81, 0.55)';
    ctx.fillText(char, w / 2, h / 2 + 6);
    
    ctx.restore();
  }

  drawUserStrokes() {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = this.brushColor;
    ctx.lineWidth = this.brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Gambar semua goresan yang sudah selesai
    for (const path of this.drawnStrokes) {
      if (path.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.stroke();
    }

    // Gambar goresan aktif yang sedang ditarik
    if (this.currentPath.length > 1) {
      ctx.beginPath();
      ctx.moveTo(this.currentPath[0].x, this.currentPath[0].y);
      for (let i = 1; i < this.currentPath.length; i++) {
        ctx.lineTo(this.currentPath[i].x, this.currentPath[i].y);
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  // -----------------------------------------------------------------------
  // KONTROL DEMO STEP-BY-STEP ANIMASI GURATAN
  // -----------------------------------------------------------------------
  goToDemoStep(stepIdx) {
    if (!this.currentVocab) return;
    const strokeList = this.currentVocab.strokeOrder || ["横", "竖", "撇", "捺"];
    this.currentDemoStep = Math.max(0, Math.min(strokeList.length - 1, stepIdx));
    
    // Mainkan nama guratan
    const stName = strokeList[this.currentDemoStep];
    if (window.dinoAudio && stName) {
      dinoAudio.speakMandarin(stName, { rate: 0.8 });
    }

    this.updateActiveDemoPill();
    this.redraw();
  }

  nextDemoStep() {
    if (!this.currentVocab) return;
    const strokeList = this.currentVocab.strokeOrder || ["横", "竖", "撇", "捺"];
    if (this.currentDemoStep < strokeList.length - 1) {
      this.goToDemoStep(this.currentDemoStep + 1);
    } else {
      this.goToDemoStep(0);
    }
  }

  prevDemoStep() {
    if (this.currentDemoStep > 0) {
      this.goToDemoStep(this.currentDemoStep - 1);
    }
  }

  resetDemo() {
    this.currentDemoStep = 0;
    this.isAnimating = false;
    if (this.animationTimer) clearInterval(this.animationTimer);
    const btn = document.getElementById('stroke-play-toggle-btn');
    if (btn) btn.textContent = '▶️ Putar Animasi';
    this.updateActiveDemoPill();
    this.redraw();
  }

  toggleDemoPlay() {
    if (this.isAnimating) {
      this.pauseDemo();
    } else {
      this.playDemo();
    }
  }

  playDemo() {
    if (!this.currentVocab) return;
    const strokeList = this.currentVocab.strokeOrder || ["横", "竖", "撇", "捺"];
    this.isAnimating = true;
    const btn = document.getElementById('stroke-play-toggle-btn');
    if (btn) btn.textContent = '⏸️ Jeda';

    if (this.animationTimer) clearInterval(this.animationTimer);
    
    this.animationTimer = setInterval(() => {
      if (this.currentDemoStep < strokeList.length - 1) {
        this.nextDemoStep();
      } else {
        this.pauseDemo();
      }
    }, 1400);
  }

  pauseDemo() {
    this.isAnimating = false;
    if (this.animationTimer) clearInterval(this.animationTimer);
    const btn = document.getElementById('stroke-play-toggle-btn');
    if (btn) btn.textContent = '▶️ Putar Animasi';
  }

  updateActiveDemoPill() {
    document.querySelectorAll('.stroke-order-item').forEach((el, idx) => {
      el.classList.toggle('active-step', idx === this.currentDemoStep);
    });
  }

  // -----------------------------------------------------------------------
  // AKSI KANVAS LATIHAN MENULIS
  // -----------------------------------------------------------------------
  clearCanvas() {
    this.drawnStrokes = [];
    this.currentPath = [];
    if (window.dinoAudio) dinoAudio.playEggCrackSound();
    this.redraw();
  }

  undoStroke() {
    if (this.drawnStrokes.length > 0) {
      this.drawnStrokes.pop();
      if (window.dinoAudio) dinoAudio.playEggCrackSound();
      this.redraw();
    }
  }

  toggleOutline() {
    this.showOutline = !this.showOutline;
    if (window.dinoAudio) dinoAudio.playEggCrackSound();
    this.redraw();
  }

  // Validasi Latihan Menulis Karakter
  checkPractice(isAuto = false) {
    if (!this.currentVocab) return;

    if (this.drawnStrokes.length < 1) {
      alert("Ayo tuliskan karakter Hanzi terlebih dahulu di atas kotak Mi Zi Ge! 🦖");
      return;
    }

    // Tambahkan 1 hitungan repetisi sukses
    this.currentRepeat++;
    this.renderRepetitionBadges();

    if (this.currentRepeat >= this.targetRepeats) {
      // BERHASIL MENCAPAI TARGET REPETISI (3x - 6x)
      if (window.dinoAudio) {
        dinoAudio.playApplauseSound();
        dinoAudio.playStarSound();
      }
      this.showCelebrationModal();
    } else {
      // Repetisi Parsial
      if (window.dinoAudio) {
        dinoAudio.playCorrectSound();
      }
      alert(`Bagus sekali! Kamu sudah menyelesaikan latihan ke-${this.currentRepeat} dari ${this.targetRepeats}. Ayo lanjutkan untuk memantapkan ingatan guratan! 🌟`);
      this.drawnStrokes = [];
      this.redraw();
    }
  }

  showCelebrationModal() {
    const modal = document.getElementById('stroke-celebration-modal');
    if (!modal) return;

    const v = this.currentVocab;
    modal.className = 'win-modal show';
    modal.innerHTML = `
      <div class="win-modal-box">
        <div class="trophy-emoji">🏆🦖🎉</div>
        <h2>Luar Biasa! Guratan Sempurna!</h2>
        <p>Kamu telah berhasil menyelesaikan latihan menulis karakter <strong>'${v.hanzi}' (${v.pinyin})</strong> sebanyak <strong>${this.targetRepeats} kali</strong> dengan sangat rapi!</p>
        
        <div class="celebration-vocab-card">
          <div class="c-hanzi">${v.hanzi}</div>
          <div class="c-meaning">${v.meaning}</div>
        </div>

        <div class="modal-buttons-group">
          <button class="dino-btn primary" onclick="dinoWriter.closeCelebration(true)">
            Lanjut Kosakata Berikutnya ➡️
          </button>
          <button class="dino-btn secondary" onclick="dinoWriter.closeCelebration(false)">
            Tulis Lagi ↺
          </button>
        </div>
      </div>
    `;
  }

  closeCelebration(nextVocab = false) {
    const modal = document.getElementById('stroke-celebration-modal');
    if (modal) modal.className = 'win-modal hidden';
    
    this.currentRepeat = 0;
    this.drawnStrokes = [];
    this.renderRepetitionBadges();
    this.redraw();

    if (nextVocab && typeof selectNextVocabInApp === 'function') {
      selectNextVocabInApp();
    }
  }
}

// Global binding
window.DinoStrokeWriter = DinoStrokeWriter;
