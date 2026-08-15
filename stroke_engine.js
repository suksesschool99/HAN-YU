// Stroke Engine: Tianzige (田字格) Canvas, Stroke Order Animator & Interactive Tracing Game

class StrokeEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.currentChar = null;
    this.currentVocab = null;
    this.isDrawing = false;
    this.userStrokes = [];
    this.currentStrokePath = [];
    this.isAnimating = false;
    this.animationStep = 0;
    this.animationTimer = null;
    this.mode = 'practice'; // 'practice' (menulis bebas/meniru) atau 'animate' (animasi)

    this.setupEvents();
    this.render();
  }

  setupEvents() {
    if (!this.canvas) return;

    // Mouse Events
    this.canvas.addEventListener('mousedown', (e) => this.startDraw(e));
    this.canvas.addEventListener('mousemove', (e) => this.drawMove(e));
    this.canvas.addEventListener('mouseup', () => this.endDraw());
    this.canvas.addEventListener('mouseleave', () => this.endDraw());

    // Touch Events (HP / Tablet)
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startDraw(e.touches[0]);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.drawMove(e.touches[0]);
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.endDraw();
    }, { passive: false });
  }

  getPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  startDraw(e) {
    if (this.isAnimating) return;
    this.isDrawing = true;
    const pos = this.getPos(e);
    this.currentStrokePath = [pos];
    if (window.dinoAudio) window.dinoAudio.playTap();
  }

  drawMove(e) {
    if (!this.isDrawing) return;
    const pos = this.getPos(e);
    this.currentStrokePath.push(pos);
    this.render();
  }

  endDraw() {
    if (!this.isDrawing) return;
    this.isDrawing = false;
    if (this.currentStrokePath.length > 1) {
      this.userStrokes.push([...this.currentStrokePath]);
    }
    this.currentStrokePath = [];
    this.render();
    this.checkCompletion();
  }

  clearUserCanvas() {
    this.userStrokes = [];
    this.currentStrokePath = [];
    this.render();
  }

  setVocab(vocab) {
    this.currentVocab = vocab;
    this.currentChar = vocab.hanzi;
    this.userStrokes = [];
    this.currentStrokePath = [];
    this.stopAnimation();
    this.render();
  }

  drawTianzige() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;

    // Background Tianzige (Kertas Beras Kuno / Amber Prasejarah)
    ctx.fillStyle = '#fffdf7';
    ctx.fillRect(0, 0, w, h);

    // Bingkai Luar Merah Tianzige
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 4;
    ctx.strokeRect(6, 6, w - 12, h - 12);

    // Garis Putus-putus Tengah (Horizontal & Vertikal)
    ctx.save();
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 6]);

    // Garis Silang Tengah
    ctx.beginPath();
    ctx.moveTo(w / 2, 6);
    ctx.lineTo(w / 2, h - 6);
    ctx.moveTo(6, h / 2);
    ctx.lineTo(w - 6, h / 2);

    // Garis Diagonal (Bintang Tianzige)
    ctx.moveTo(6, 6);
    ctx.lineTo(w - 6, h - 6);
    ctx.moveTo(w - 6, 6);
    ctx.lineTo(6, h - 6);
    ctx.stroke();

    ctx.restore();
  }

  drawGhostChar() {
    if (!this.currentChar) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.save();
    ctx.font = `bold ${Math.floor(w * 0.72)}px "KaiTi", "STKaiti", "Microsoft YaHei", "SimSun", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (this.isAnimating) {
      // Warna animasi berurutan
      ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.fillText(this.currentChar, w / 2, h / 2 + 10);
    } else {
      // Ghost template untuk ditiru anak-anak
      ctx.fillStyle = 'rgba(203, 213, 225, 0.65)';
      ctx.fillText(this.currentChar, w / 2, h / 2 + 10);
    }
    ctx.restore();
  }

  drawUserStrokes() {
    const ctx = this.ctx;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const allPaths = [...this.userStrokes];
    if (this.currentStrokePath.length > 0) {
      allPaths.push(this.currentStrokePath);
    }

    allPaths.forEach((path, idx) => {
      if (path.length < 2) return;
      ctx.strokeStyle = '#1e293b'; // Tinta hitam kaligrafi kaliber
      ctx.lineWidth = 18;

      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.stroke();
    });

    ctx.restore();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTianzige();
    this.drawGhostChar();
    this.drawUserStrokes();
  }

  // --- ANIMASI GURATAN LANGKAH DEMI LANGKAH ---

  playAnimation(onComplete = null) {
    if (!this.currentVocab) return;
    this.stopAnimation();
    this.isAnimating = true;
    this.userStrokes = [];
    this.currentStrokePath = [];

    const totalStrokes = this.currentVocab.strokeCount || 4;
    let step = 1;

    if (window.dinoAudio) window.dinoAudio.playTap();

    this.animationTimer = setInterval(() => {
      this.animationStep = step;
      this.render();

      // Suara brush pada setiap goresan
      if (window.dinoAudio) window.dinoAudio.playTap();

      step++;
      if (step > totalStrokes) {
        clearInterval(this.animationTimer);
        this.animationTimer = null;
        setTimeout(() => {
          this.isAnimating = false;
          if (window.dinoAudio) window.dinoAudio.playSparkle();
          if (onComplete) onComplete();
          this.render();
        }, 500);
      }
    }, 700);
  }

  stopAnimation() {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
    this.isAnimating = false;
  }

  checkCompletion() {
    if (this.userStrokes.length >= (this.currentVocab?.strokeCount || 2)) {
      // Trigger perayaan dinosaurus!
      const statusEl = document.getElementById('stroke-feedback-msg');
      if (statusEl) {
        statusEl.innerHTML = `🎉 <strong>Luar Biasa!</strong> Kamu berhasil menulis <em>${this.currentVocab.hanzi}</em> (${this.currentVocab.pinyin})! +15 Tulang Dino 🦴`;
        statusEl.className = 'stroke-msg success animate-bounce';
      }
      if (window.dinoAudio) {
        window.dinoAudio.playCorrect();
        window.dinoAudio.playSparkle();
      }
      if (window.app && typeof window.app.addBones === 'function') {
        window.app.addBones(15);
      }
    }
  }
}

window.StrokeEngine = StrokeEngine;
