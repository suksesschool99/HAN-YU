/**
 * DINO STROKE ENGINE
 * Interactive Chinese Stroke Order Animator, Tianzige / Mizige Grid,
 * and Freehand Drawing Canvas with Stroke Recognition & Rating.
 */

// Stroke dictionary with basic stroke path vectors for key characters
const STROKE_DATA_MAP = {
  "你": {
    strokes: [
      { name: "撇 (Piě)", path: [[35, 18], [25, 45]] },
      { name: "竖 (Shù)", path: [[30, 42], [30, 85]] },
      { name: "撇 (Piě)", path: [[60, 20], [45, 40]] },
      { name: "横撇 (Héngpiě)", path: [[46, 38], [75, 38], [62, 55]] },
      { name: "捺 (Nà)", path: [[55, 48], [75, 58]] },
      { name: "竖 (Shù)", path: [[58, 48], [58, 88]] },
      { name: "弯钩 (Wāngōu)", path: [[68, 52], [76, 75], [70, 88], [63, 82]] }
    ]
  },
  "好": {
    strokes: [
      { name: "撇点 (Piědiǎn)", path: [[32, 22], [22, 52], [42, 60]] },
      { name: "撇 (Piě)", path: [[42, 32], [18, 78]] },
      { name: "提 (Tí)", path: [[15, 52], [46, 45]] },
      { name: "横撇 (Héngpiě)", path: [[58, 26], [78, 26], [58, 50]] },
      { name: "弯钩 (Wāngōu)", path: [[68, 48], [74, 76], [68, 88], [60, 82]] },
      { name: "横 (Héng)", path: [[50, 52], [85, 52]] }
    ]
  },
  "爱": {
    strokes: [
      { name: "撇 (Piě)", path: [[50, 15], [38, 25]] },
      { name: "点 (Diǎn)", path: [[32, 28], [37, 35]] },
      { name: "点 (Diǎn)", path: [[48, 28], [53, 35]] },
      { name: "撇 (Piě)", path: [[68, 24], [58, 36]] },
      { name: "点 (Diǎn)", path: [[35, 42], [38, 48]] },
      { name: "横撇 (Héngpiě)", path: [[26, 48], [75, 48], [65, 58]] },
      { name: "横折 (Héngzhé)", path: [[38, 58], [62, 58], [62, 66]] },
      { name: "横 (Héng)", path: [[38, 66], [62, 66]] },
      { name: "撇 (Piě)", path: [[44, 68], [24, 88]] },
      { name: "捺 (Nà)", path: [[52, 68], [78, 88]] }
    ]
  },
  "爸": {
    strokes: [
      { name: "撇 (Piě)", path: [[42, 18], [28, 32]] },
      { name: "点 (Diǎn)", path: [[60, 20], [68, 28]] },
      { name: "撇 (Piě)", path: [[38, 32], [20, 50]] },
      { name: "捺 (Nà)", path: [[54, 30], [80, 50]] },
      { name: "横折 (Héngzhé)", path: [[34, 55], [68, 55], [68, 65]] },
      { name: "竖 (Shù)", path: [[40, 65], [40, 75]] },
      { name: "横 (Héng)", path: [[30, 75], [72, 75]] },
      { name: "竖弯钩 (Shùwāngōu)", path: [[50, 65], [50, 88], [75, 88], [75, 80]] }
    ]
  },
  "妈": {
    strokes: [
      { name: "撇点 (Piědiǎn)", path: [[35, 20], [22, 50], [42, 58]] },
      { name: "撇 (Piě)", path: [[42, 30], [18, 80]] },
      { name: "提 (Tí)", path: [[14, 52], [46, 46]] },
      { name: "横折 (Héngzhé)", path: [[55, 28], [78, 28], [78, 48]] },
      { name: "竖折折钩 (Shùzhézhégōu)", path: [[55, 48], [55, 70], [82, 70], [82, 85], [74, 85]] },
      { name: "横 (Héng)", path: [[50, 56], [78, 56]] }
    ]
  },
  "书": {
    strokes: [
      { name: "横折 (Héngzhé)", path: [[30, 28], [70, 28], [70, 44]] },
      { name: "横折钩 (Héngzhégōu)", path: [[30, 44], [68, 44], [68, 62], [60, 60]] },
      { name: "竖 (Shù)", path: [[50, 18], [50, 85]] },
      { name: "点 (Diǎn)", path: [[72, 20], [78, 28]] }
    ]
  },
  "大": {
    strokes: [
      { name: "横 (Héng)", path: [[20, 40], [80, 40]] },
      { name: "撇 (Piě)", path: [[50, 20], [25, 85]] },
      { name: "捺 (Nà)", path: [[50, 40], [75, 85]] }
    ]
  },
  "小": {
    strokes: [
      { name: "竖钩 (Shùgōu)", path: [[50, 20], [50, 85], [42, 78]] },
      { name: "撇 (Piě)", path: [[38, 45], [24, 65]] },
      { name: "点 (Diǎn)", path: [[62, 45], [76, 65]] }
    ]
  },
  "水": {
    strokes: [
      { name: "竖钩 (Shùgōu)", path: [[50, 18], [50, 85], [40, 78]] },
      { name: "横撇 (Héngpiě)", path: [[24, 38], [42, 38], [28, 55]] },
      { name: "撇 (Piě)", path: [[74, 32], [58, 52]] },
      { name: "捺 (Nà)", path: [[58, 52], [82, 82]] }
    ]
  },
  "东": {
    strokes: [
      { name: "横 (Héng)", path: [[25, 30], [75, 30]] },
      { name: "撇折 (Piězhé)", path: [[46, 30], [32, 50], [68, 50]] },
      { name: "竖钩 (Shùgōu)", path: [[50, 18], [50, 86], [42, 80]] },
      { name: "撇 (Piě)", path: [[38, 58], [22, 78]] },
      { name: "点 (Diǎn)", path: [[62, 58], [78, 78]] }
    ]
  },
  "南": {
    strokes: [
      { name: "横 (Héng)", path: [[25, 25], [75, 25]] },
      { name: "竖 (Shù)", path: [[50, 15], [50, 32]] },
      { name: "竖 (Shù)", path: [[28, 38], [28, 85]] },
      { name: "横折钩 (Héngzhégōu)", path: [[28, 38], [72, 38], [72, 85], [65, 80]] },
      { name: "点 (Diǎn)", path: [[42, 45], [46, 52]] },
      { name: "撇 (Piě)", path: [[58, 42], [54, 52]] },
      { name: "横 (Héng)", path: [[36, 58], [64, 58]] },
      { name: "横 (Héng)", path: [[36, 70], [64, 70]] },
      { name: "竖 (Shù)", path: [[50, 58], [50, 80]] }
    ]
  },
  "西": {
    strokes: [
      { name: "横 (Héng)", path: [[25, 26], [75, 26]] },
      { name: "竖 (Shù)", path: [[30, 40], [30, 80]] },
      { name: "横折 (Héngzhé)", path: [[30, 40], [70, 40], [70, 80]] },
      { name: "撇 (Piě)", path: [[44, 40], [38, 65]] },
      { name: "竖弯 (Shùwān)", path: [[56, 40], [56, 65], [66, 65]] },
      { name: "横 (Héng)", path: [[30, 80], [70, 80]] }
    ]
  },
  "北": {
    strokes: [
      { name: "竖 (Shù)", path: [[38, 25], [38, 75]] },
      { name: "横 (Héng)", path: [[22, 45], [38, 45]] },
      { name: "提 (Tí)", path: [[20, 75], [38, 62]] },
      { name: "撇 (Piě)", path: [[72, 28], [55, 45]] },
      { name: "竖弯钩 (Shùwāngōu)", path: [[58, 22], [58, 85], [78, 85], [78, 75]] }
    ]
  }
};

class DinoStrokeEngine {
  constructor(animCanvasId, drawCanvasId) {
    this.animCanvas = document.getElementById(animCanvasId);
    this.drawCanvas = document.getElementById(drawCanvasId);
    
    this.animCtx = this.animCanvas ? this.animCanvas.getContext('2d') : null;
    this.drawCtx = this.drawCanvas ? this.drawCanvas.getContext('2d') : null;

    this.currentChar = "你";
    this.currentStrokes = [];
    this.animStep = 0;
    this.isAnimating = false;
    this.animTimer = null;
    this.showTianGrid = true;
    this.brushColor = "#15803d"; // Jurassic emerald green
    this.brushWidth = 14;

    // Drawing state
    this.isDrawing = false;
    this.userStrokePaths = [];
    this.currentPath = [];

    this.initEvents();
  }

  initEvents() {
    if (!this.drawCanvas) return;

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const pt = this.getCanvasCoords(e);
      this.currentPath = [pt];
    };

    const moveDraw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pt = this.getCanvasCoords(e);
      this.currentPath.push(pt);
      this.renderUserDrawing();
    };

    const endDraw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      this.isDrawing = false;
      if (this.currentPath.length > 0) {
        this.userStrokePaths.push([...this.currentPath]);
        this.currentPath = [];
        window.dinoAudio.playSfx('click');
      }
    };

    this.drawCanvas.addEventListener('mousedown', startDraw);
    this.drawCanvas.addEventListener('mousemove', moveDraw);
    window.addEventListener('mouseup', endDraw);

    this.drawCanvas.addEventListener('touchstart', startDraw, { passive: false });
    this.drawCanvas.addEventListener('touchmove', moveDraw, { passive: false });
    window.addEventListener('touchend', endDraw);
  }

  getCanvasCoords(e) {
    const rect = this.drawCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const scaleX = this.drawCanvas.width / rect.width;
    const scaleY = this.drawCanvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  /**
   * Draw Mi-Zi-Ge (米字格) red dashed guidelines
   */
  drawGrid(ctx, width, height) {
    ctx.save();
    ctx.clearRect(0, 0, width, height);

    // Light beige paper background
    ctx.fillStyle = "#FFFBEB";
    ctx.fillRect(0, 0, width, height);

    // Outer border (red/terracotta)
    ctx.strokeStyle = "#DC2626";
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, width - 8, height - 8);

    // Inner cross & diagonal dashed lines
    ctx.strokeStyle = "#FCA5A5";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 6]);

    // Horizontal line
    ctx.beginPath();
    ctx.moveTo(4, height / 2);
    ctx.lineTo(width - 4, height / 2);
    ctx.stroke();

    // Vertical line
    ctx.beginPath();
    ctx.moveTo(width / 2, 4);
    ctx.lineTo(width / 2, height - 4);
    ctx.stroke();

    // Diagonals for Mi-Zi-Ge
    ctx.beginPath();
    ctx.moveTo(4, 4);
    ctx.lineTo(width - 4, height - 4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width - 4, 4);
    ctx.lineTo(4, height - 4);
    ctx.stroke();

    ctx.restore();
  }

  /**
   * Load character and prepare stroke data
   */
  loadCharacter(char) {
    this.currentChar = char;
    this.stopAnimation();
    this.userStrokePaths = [];
    this.currentPath = [];

    const charEntry = STROKE_DATA_MAP[char];
    if (charEntry) {
      this.currentStrokes = charEntry.strokes;
    } else {
      // Procedural stroke approximation for characters not yet explicitly mapped
      this.currentStrokes = this.generateFallbackStrokes(char);
    }

    this.animStep = this.currentStrokes.length; // Show complete by default
    this.renderAnimation();
    this.renderUserDrawing();
  }

  generateFallbackStrokes(char) {
    // Generate 4-8 visual strokes based on character complexity
    const count = Math.max(3, Math.min(12, char.charCodeAt(0) % 8 + 4));
    const list = [];
    const strokeTypes = [
      { name: "横 (Héng)", type: 'h' },
      { name: "竖 (Shù)", type: 'v' },
      { name: "撇 (Piě)", type: 'p' },
      { name: "捺 (Nà)", type: 'n' },
      { name: "点 (Diǎn)", type: 'd' },
      { name: "折 (Zhé)", type: 'z' }
    ];
    for (let i = 0; i < count; i++) {
      list.push({
        name: strokeTypes[i % strokeTypes.length].name,
        isFallback: true,
        char: char
      });
    }
    return list;
  }

  /**
   * Render Stroke Order Animation Frame
   */
  renderAnimation() {
    if (!this.animCtx || !this.animCanvas) return;
    const w = this.animCanvas.width;
    const h = this.animCanvas.height;

    this.drawGrid(this.animCtx, w, h);

    // Draw background ghost Hanzi character
    this.animCtx.save();
    this.animCtx.font = `bold ${w * 0.72}px "Noto Serif SC", "Kaiti", "SimSun", serif`;
    this.animCtx.textAlign = "center";
    this.animCtx.textBaseline = "middle";
    this.animCtx.fillStyle = "#E2E8F0"; // soft light gray watermark
    this.animCtx.fillText(this.currentChar, w / 2, h / 2 + 10);
    this.animCtx.restore();

    // Draw active strokes up to animStep
    const total = this.currentStrokes.length;
    const isMapped = STROKE_DATA_MAP[this.currentChar];

    if (isMapped) {
      for (let i = 0; i < Math.min(this.animStep, total); i++) {
        const stroke = this.currentStrokes[i];
        const isCurrent = (i === this.animStep - 1);

        this.animCtx.save();
        this.animCtx.lineWidth = isCurrent ? 16 : 14;
        this.animCtx.lineCap = "round";
        this.animCtx.lineJoin = "round";
        this.animCtx.strokeStyle = isCurrent ? "#DC2626" : "#1E293B"; // active is red, past is dark

        this.animCtx.beginPath();
        stroke.path.forEach((pt, idx) => {
          const px = (pt[0] / 100) * w;
          const py = (pt[1] / 100) * h;
          if (idx === 0) this.animCtx.moveTo(px, py);
          else this.animCtx.lineTo(px, py);
        });
        this.animCtx.stroke();

        // Draw start point circle indicator with stroke number
        if (stroke.path.length > 0) {
          const startX = (stroke.path[0][0] / 100) * w;
          const startY = (stroke.path[0][1] / 100) * h;
          this.animCtx.fillStyle = isCurrent ? "#EF4444" : "#3B82F6";
          this.animCtx.beginPath();
          this.animCtx.arc(startX, startY, 9, 0, Math.PI * 2);
          this.animCtx.fill();

          this.animCtx.fillStyle = "#FFFFFF";
          this.animCtx.font = "bold 10px sans-serif";
          this.animCtx.textAlign = "center";
          this.animCtx.textBaseline = "middle";
          this.animCtx.fillText(i + 1, startX, startY);
        }
        this.animCtx.restore();
      }
    } else {
      // Fallback font rendering with progressive stroke mask
      this.animCtx.save();
      this.animCtx.font = `bold ${w * 0.72}px "Noto Serif SC", "Kaiti", "SimSun", serif`;
      this.animCtx.textAlign = "center";
      this.animCtx.textBaseline = "middle";
      this.animCtx.fillStyle = this.animStep >= total ? "#1E293B" : "#10B981";
      this.animCtx.fillText(this.currentChar, w / 2, h / 2 + 10);
      this.animCtx.restore();
    }
  }

  /**
   * Play progressive stroke animation
   */
  playAnimation(onStepChange, onComplete) {
    this.stopAnimation();
    this.isAnimating = true;
    this.animStep = 0;

    const total = this.currentStrokes.length;
    const interval = 800; // ms per stroke

    this.animTimer = setInterval(() => {
      this.animStep++;
      this.renderAnimation();
      window.dinoAudio.playSfx('click');

      if (onStepChange) {
        onStepChange(this.animStep, total, this.currentStrokes[this.animStep - 1]);
      }

      if (this.animStep >= total) {
        this.stopAnimation();
        window.dinoAudio.playSfx('star');
        if (onComplete) onComplete();
      }
    }, interval);
  }

  stopAnimation() {
    if (this.animTimer) {
      clearInterval(this.animTimer);
      this.animTimer = null;
    }
    this.isAnimating = false;
  }

  stepForward() {
    this.stopAnimation();
    if (this.animStep < this.currentStrokes.length) {
      this.animStep++;
      this.renderAnimation();
      window.dinoAudio.playSfx('click');
    }
  }

  stepBackward() {
    this.stopAnimation();
    if (this.animStep > 1) {
      this.animStep--;
      this.renderAnimation();
      window.dinoAudio.playSfx('click');
    }
  }

  /**
   * User Practice Canvas Rendering
   */
  renderUserDrawing() {
    if (!this.drawCtx || !this.drawCanvas) return;
    const w = this.drawCanvas.width;
    const h = this.drawCanvas.height;

    this.drawGrid(this.drawCtx, w, h);

    // Draw ghost character as light guideline for tracing
    this.drawCtx.save();
    this.drawCtx.font = `bold ${w * 0.72}px "Noto Serif SC", "Kaiti", "SimSun", serif`;
    this.drawCtx.textAlign = "center";
    this.drawCtx.textBaseline = "middle";
    this.drawCtx.fillStyle = "rgba(16, 185, 129, 0.15)"; // faint green dino guide
    this.drawCtx.fillText(this.currentChar, w / 2, h / 2 + 10);
    this.drawCtx.restore();

    // Render user completed strokes
    this.drawCtx.save();
    this.drawCtx.lineCap = "round";
    this.drawCtx.lineJoin = "round";
    this.drawCtx.lineWidth = this.brushWidth;
    this.drawCtx.strokeStyle = this.brushColor;

    this.userStrokePaths.forEach(path => {
      if (path.length > 0) {
        this.drawCtx.beginPath();
        path.forEach((pt, i) => {
          if (i === 0) this.drawCtx.moveTo(pt.x, pt.y);
          else this.drawCtx.lineTo(pt.x, pt.y);
        });
        this.drawCtx.stroke();
      }
    });

    // Render current active stroke
    if (this.currentPath.length > 0) {
      this.drawCtx.beginPath();
      this.currentPath.forEach((pt, i) => {
        if (i === 0) this.drawCtx.moveTo(pt.x, pt.y);
        else this.drawCtx.lineTo(pt.x, pt.y);
      });
      this.drawCtx.stroke();
    }
    this.drawCtx.restore();
  }

  undoStroke() {
    if (this.userStrokePaths.length > 0) {
      this.userStrokePaths.pop();
      this.renderUserDrawing();
      window.dinoAudio.playSfx('click');
    }
  }

  clearDrawing() {
    this.userStrokePaths = [];
    this.currentPath = [];
    this.renderUserDrawing();
    window.dinoAudio.playSfx('click');
  }

  setBrushColor(color) {
    this.brushColor = color;
  }

  /**
   * Evaluate user's writing with stars and dino praise
   */
  evaluateWriting() {
    const strokeCount = this.userStrokePaths.length;
    const targetCount = this.currentStrokes.length;

    let score = 3; // 3 stars max
    let message = "Luar biasa! Goresanmu rapi seperti ukiran fosil T-Rex! 🦖⭐";

    if (strokeCount === 0) {
      return { stars: 0, message: "Ayo tulis karakter Hanzi di atas kanvas terlebih dahulu! 🦕" };
    }

    const diff = Math.abs(strokeCount - targetCount);
    if (diff === 0) {
      score = 3;
      message = `Sempurna! ${strokeCount} goresan tepat sesuai kaidah! Telur dino bergoyang gembira! 🥚✨`;
      window.dinoAudio.playSfx('dino_roar');
    } else if (diff <= 2) {
      score = 2;
      message = `Bagus sekali! Kamu membuat ${strokeCount} goresan (target: ${targetCount}). Terus asah kemampuanmu! ⭐⭐`;
      window.dinoAudio.playSfx('star');
    } else {
      score = 1;
      message = `Usaha yang hebat! Kamu membuat ${strokeCount} goresan. Coba perhatikan kembali urutan goresan nomor 1 sampai ${targetCount}. ⭐`;
      window.dinoAudio.playSfx('correct');
    }

    return { stars: score, message: message, count: strokeCount, target: targetCount };
  }
}

window.DinoStrokeEngine = DinoStrokeEngine;
