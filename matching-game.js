// =========================================================================
// DINOSAUR PICTURE & SENTENCE MATCHING GAME ENGINE
// Game Mencocokkan Gambar dengan Kalimat & Kosakata Han Yu 1 - Han Yu 12
// 1. Mode Pasangan Kartu (Click & Match Pairs)
// 2. Mode Kalimat Cerita & Ilustrasi Gambar (Story Sentence Matching)
// 3. Mode Memori Flip Card (Memory Match)
// =========================================================================

class DinoMatchingGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentUnitData = null;
    this.gameMode = 'pairs'; // 'pairs', 'sentences', 'memory'
    
    this.pairsData = [];
    this.selectedFirst = null;
    this.selectedSecond = null;
    this.matchedPairs = 0;
    this.totalPairs = 0;
    this.attempts = 0;
    this.isProcessing = false;
    this.timerSeconds = 0;
    this.timerInterval = null;
  }

  loadUnit(unitData) {
    if (!unitData) return;
    this.currentUnitData = unitData;
    this.resetGame();
  }

  setGameMode(mode) {
    this.gameMode = mode;
    this.resetGame();
  }

  resetGame() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    this.matchedPairs = 0;
    this.attempts = 0;
    this.selectedFirst = null;
    this.selectedSecond = null;
    this.isProcessing = false;

    // Siapkan data pasangan sesuai mode
    this.preparePairsData();
    this.renderGame();
    this.startTimer();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const timerEl = document.getElementById('match-timer-display');
      if (timerEl) {
        const mins = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
        const secs = (this.timerSeconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  preparePairsData() {
    if (!this.currentUnitData) return;

    if (this.gameMode === 'sentences' && this.currentUnitData.story && this.currentUnitData.story.sentences) {
      // Pasangkan Kalimat Cerita dengan Makna & Ikon
      const sentenceIcons = ["📖", "🏫", "🌸", "🎨", "⚽", "🍎", "🏡", "🦖", "🌟", "🎈"];
      this.pairsData = this.currentUnitData.story.sentences.slice(0, 4).map((s, idx) => ({
        id: `sent_match_${idx}`,
        hanzi: s.hanzi,
        pinyin: s.pinyin,
        meaning: s.indonesian,
        icon: sentenceIcons[idx % sentenceIcons.length]
      }));
    } else {
      // Default: Pasangkan Kosakata & Gambar Tematik
      if (this.currentUnitData.matchingPairs && this.currentUnitData.matchingPairs.length > 0) {
        this.pairsData = [...this.currentUnitData.matchingPairs];
      } else if (this.currentUnitData.vocab) {
        const defaultIcons = ["🌟", "📚", "🎨", "⚽", "🍎", "🏡", "🦖", "🌿"];
        this.pairsData = this.currentUnitData.vocab.map((v, idx) => ({
          id: `vocab_match_${idx}`,
          hanzi: v.hanzi,
          pinyin: v.pinyin,
          meaning: v.meaning,
          icon: defaultIcons[idx % defaultIcons.length]
        }));
      }
    }

    this.totalPairs = this.pairsData.length;
  }

  renderGame() {
    if (!this.container) return;

    // Header Mode & Statistik
    let contentHtml = `
      <div class="matching-app-wrapper">
        <div class="matching-control-header">
          <div class="mode-tabs-group">
            <button class="mode-tab-btn ${this.gameMode === 'pairs' ? 'active' : ''}" onclick="dinoMatchGame.setGameMode('pairs')">
              🔤 Pasangkan Kata ↔ Gambar
            </button>
            <button class="mode-tab-btn ${this.gameMode === 'sentences' ? 'active' : ''}" onclick="dinoMatchGame.setGameMode('sentences')">
              📖 Pasangkan Kalimat Cerita ↔ Gambar
            </button>
            <button class="mode-tab-btn ${this.gameMode === 'memory' ? 'active' : ''}" onclick="dinoMatchGame.setGameMode('memory')">
              🃏 Memory Card Flip
            </button>
          </div>

          <div class="matching-stats-bar">
            <span class="stat-item">⏱️ Waktu: <strong id="match-timer-display">00:00</strong></span>
            <span class="stat-item">🎯 Cocok: <strong id="match-score">${this.matchedPairs} / ${this.totalPairs}</strong></span>
            <span class="stat-item">🔄 Percobaan: <strong id="match-attempts">${this.attempts}</strong></span>
            <button class="dino-btn small secondary" onclick="dinoMatchGame.resetGame()">Acak Ulang 🔀</button>
          </div>
        </div>
    `;

    if (this.gameMode === 'memory') {
      contentHtml += this.renderMemoryBoard();
    } else {
      contentHtml += this.renderColumnsBoard();
    }

    contentHtml += `
        <!-- MODAL KEMENANGAN GAME MENCOCOKKAN -->
        <div id="matching-win-modal" class="win-modal hidden">
          <div class="win-modal-box">
            <div class="trophy-emoji">🏆🦖🌟</div>
            <h2>Luar Biasa! Semua Kartu Cocok Sempurna!</h2>
            <p id="win-modal-summary">Kamu berhasil menyelesaikan game mencocokkan gambar dan kalimat dengan gemilang!</p>
            <div class="star-rating-display" id="win-stars-display">⭐⭐⭐</div>
            <div class="modal-buttons-group">
              <button class="dino-btn primary" onclick="dinoMatchGame.resetGame()">
                Main Lagi ↺
              </button>
              <button class="dino-btn secondary" onclick="if(typeof switchTab==='function') switchTab('quiz')">
                Lanjut ke Kuis YCT 2 ➡️
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = contentHtml;
  }

  // Render Papan 2 Kolom (Kolom Teks Kalimat/Kata ↔ Kolom Gambar Ilustrasi)
  renderColumnsBoard() {
    const textCards = this.pairsData.map(p => ({
      id: p.id,
      type: 'text',
      hanzi: p.hanzi,
      pinyin: p.pinyin,
      meaning: p.meaning
    })).sort(() => Math.random() - 0.5);

    const imageCards = this.pairsData.map(p => ({
      id: p.id,
      type: 'image',
      icon: p.icon,
      meaning: p.meaning
    })).sort(() => Math.random() - 0.5);

    return `
      <div class="matching-columns-board">
        <!-- Kolom Teks Mandarin & Pinyin -->
        <div class="match-col text-col">
          <div class="col-header-banner">
            <span>${this.gameMode === 'sentences' ? '📖 Kalimat Cerita Mandarin' : '🔤 Kosakata Hanzi & Pinyin'}</span>
          </div>
          <div class="cards-flow">
            ${textCards.map(c => `
              <div class="match-card text-card" id="card-text-${c.id}" data-id="${c.id}" onclick="dinoMatchGame.handleCardClick(this, '${c.id}', 'text', '${c.hanzi}')">
                <div class="card-hanzi-text">${c.hanzi}</div>
                <div class="card-pinyin-text">${c.pinyin}</div>
                <button class="mini-audio-btn" onclick="event.stopPropagation(); dinoAudio.speakMandarin('${c.hanzi}');" title="Dengarkan lafal">🔊</button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Kolom Gambar / Ilustrasi Tematik -->
        <div class="match-col image-col">
          <div class="col-header-banner">
            <span>🖼️ Gambar Ilustrasi & Makna</span>
          </div>
          <div class="cards-flow">
            ${imageCards.map(c => `
              <div class="match-card image-card" id="card-image-${c.id}" data-id="${c.id}" onclick="dinoMatchGame.handleCardClick(this, '${c.id}', 'image', '')">
                <div class="card-large-icon">${c.icon}</div>
                <div class="card-meaning-label">${c.meaning}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Render Mode Balik Kartu Memori (Memory Flip)
  renderMemoryBoard() {
    const memoryDeck = [];
    this.pairsData.forEach(p => {
      // Kartu Teks
      memoryDeck.push({
        id: p.id,
        type: 'text',
        hanzi: p.hanzi,
        pinyin: p.pinyin,
        icon: null,
        meaning: null
      });
      // Kartu Gambar
      memoryDeck.push({
        id: p.id,
        type: 'image',
        hanzi: null,
        pinyin: null,
        icon: p.icon,
        meaning: p.meaning
      });
    });

    // Acak Kartu
    memoryDeck.sort(() => Math.random() - 0.5);

    return `
      <div class="memory-grid-board">
        ${memoryDeck.map((card, idx) => `
          <div class="memory-card" id="mem-card-${idx}" data-id="${card.id}" data-type="${card.type}" onclick="dinoMatchGame.handleMemoryClick(this, '${card.id}', '${card.type}', '${card.hanzi || ''}')">
            <div class="card-inner">
              <div class="card-front">
                <span class="dino-egg-icon">🥚</span>
              </div>
              <div class="card-back">
                ${card.type === 'text' ? `
                  <div class="mem-hanzi">${card.hanzi}</div>
                  <div class="mem-pinyin">${card.pinyin}</div>
                ` : `
                  <div class="mem-icon">${card.icon}</div>
                  <div class="mem-meaning">${card.meaning}</div>
                `}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Handle Klik Kartu pada Mode Kolom
  handleCardClick(element, id, type, text) {
    if (this.isProcessing || element.classList.contains('matched')) return;

    if (window.dinoAudio) dinoAudio.getAudioContext();

    if (text) {
      dinoAudio.speakMandarin(text);
    } else {
      dinoAudio.playEggCrackSound();
    }

    if (type === 'text') {
      if (this.selectedFirst) this.selectedFirst.el.classList.remove('selected');
      this.selectedFirst = { el: element, id: id };
      element.classList.add('selected');
    } else if (type === 'image') {
      if (this.selectedSecond) this.selectedSecond.el.classList.remove('selected');
      this.selectedSecond = { el: element, id: id };
      element.classList.add('selected');
    }

    // Jika satu kartu teks dan satu kartu gambar sudah dipilih
    if (this.selectedFirst && this.selectedSecond) {
      this.attempts++;
      this.updateStatsDisplay();

      if (this.selectedFirst.id === this.selectedSecond.id) {
        // COCOK!
        this.matchedPairs++;
        this.selectedFirst.el.classList.remove('selected');
        this.selectedSecond.el.classList.remove('selected');
        this.selectedFirst.el.classList.add('matched');
        this.selectedSecond.el.classList.add('matched');

        if (window.dinoAudio) {
          dinoAudio.playCorrectSound();
          dinoAudio.playStarSound();
        }

        this.selectedFirst = null;
        this.selectedSecond = null;
        this.updateStatsDisplay();

        if (this.matchedPairs >= this.totalPairs) {
          this.handleVictory();
        }
      } else {
        // TIDAK COCOK!
        this.isProcessing = true;
        this.selectedFirst.el.classList.add('mismatched');
        this.selectedSecond.el.classList.add('mismatched');

        if (window.dinoAudio) dinoAudio.playIncorrectSound();

        setTimeout(() => {
          if (this.selectedFirst) {
            this.selectedFirst.el.classList.remove('selected', 'mismatched');
          }
          if (this.selectedSecond) {
            this.selectedSecond.el.classList.remove('selected', 'mismatched');
          }
          this.selectedFirst = null;
          this.selectedSecond = null;
          this.isProcessing = false;
        }, 900);
      }
    }
  }

  // Handle Klik Kartu pada Mode Memori
  handleMemoryClick(element, id, type, hanzi) {
    if (this.isProcessing || element.classList.contains('flipped') || element.classList.contains('matched')) return;

    element.classList.add('flipped');
    if (window.dinoAudio) {
      dinoAudio.getAudioContext();
      if (hanzi) dinoAudio.speakMandarin(hanzi);
      else dinoAudio.playEggCrackSound();
    }

    if (!this.selectedFirst) {
      this.selectedFirst = { el: element, id: id, type: type };
    } else {
      this.selectedSecond = { el: element, id: id, type: type };
      this.attempts++;
      this.updateStatsDisplay();

      // Cek apakah ID sama dan tipe kartu berbeda (teks ↔ gambar)
      if (this.selectedFirst.id === this.selectedSecond.id && this.selectedFirst.type !== this.selectedSecond.type) {
        // COCOK!
        this.matchedPairs++;
        this.selectedFirst.el.classList.add('matched');
        this.selectedSecond.el.classList.add('matched');

        if (window.dinoAudio) {
          dinoAudio.playCorrectSound();
          dinoAudio.playStarSound();
        }

        this.selectedFirst = null;
        this.selectedSecond = null;
        this.updateStatsDisplay();

        if (this.matchedPairs >= this.totalPairs) {
          this.handleVictory();
        }
      } else {
        // TIDAK COCOK
        this.isProcessing = true;
        if (window.dinoAudio) dinoAudio.playIncorrectSound();

        setTimeout(() => {
          if (this.selectedFirst) this.selectedFirst.el.classList.remove('flipped');
          if (this.selectedSecond) this.selectedSecond.el.classList.remove('flipped');
          this.selectedFirst = null;
          this.selectedSecond = null;
          this.isProcessing = false;
        }, 1100);
      }
    }
  }

  updateStatsDisplay() {
    const scoreEl = document.getElementById('match-score');
    const attemptsEl = document.getElementById('match-attempts');
    if (scoreEl) scoreEl.textContent = `${this.matchedPairs} / ${this.totalPairs}`;
    if (attemptsEl) attemptsEl.textContent = `${this.attempts}`;
  }

  handleVictory() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    if (window.dinoAudio) {
      dinoAudio.playApplauseSound();
      dinoAudio.playDinoRoarSound();
    }

    const modal = document.getElementById('matching-win-modal');
    const summary = document.getElementById('win-modal-summary');
    const stars = document.getElementById('win-stars-display');

    if (modal) {
      let starRating = '⭐⭐⭐';
      if (this.attempts > this.totalPairs * 2) starRating = '⭐⭐';
      if (this.attempts > this.totalPairs * 3) starRating = '⭐';

      if (stars) stars.textContent = starRating;
      if (summary) {
        summary.innerHTML = `Hebat sekali! Kamu berhasil mencocokkan seluruh <strong>${this.totalPairs} pasangan gambar dan kalimat</strong> dalam waktu <strong>${this.timerSeconds} detik</strong> dengan <strong>${this.attempts} kali percobaan</strong>!`;
      }
      modal.className = 'win-modal show';
    }
  }
}

// Global binding
window.DinoMatchingGame = DinoMatchingGame;
