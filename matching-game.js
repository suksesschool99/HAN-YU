/**
 * DINO MATCHING GAME ENGINE
 * Handles:
 * 1. Drag-and-Drop / Tap-to-Match Game
 * 2. 3D Memory Card Flip Game
 * 3. Dino Sound Quest (Audio-to-Image Quiz)
 */

class DinoMatchingGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentMode = 'drag_match'; // 'drag_match' | 'memory' | 'audio_quest'
    this.currentBookId = 1;
    this.currentUnitNumber = 1;
    this.score = 0;
    this.streak = 0;
    this.maxScore = 100;
    this.gameItems = [];
    this.selectedCard = null; // For tap matching
    this.matchedPairs = 0;
  }

  init(bookId, unitNumber, mode = 'drag_match') {
    this.currentBookId = bookId;
    this.currentUnitNumber = unitNumber;
    this.currentMode = mode;
    this.score = 0;
    this.streak = 0;
    this.matchedPairs = 0;
    this.selectedCard = null;

    const unit = getUnit(bookId, unitNumber);
    this.gameItems = [...unit.vocab];

    this.render();
  }

  setMode(mode) {
    this.currentMode = mode;
    this.init(this.currentBookId, this.currentUnitNumber, mode);
  }

  render() {
    if (!this.container) return;

    let gameHtml = '';
    switch (this.currentMode) {
      case 'drag_match':
        gameHtml = this.buildDragMatchHtml();
        break;
      case 'memory':
        gameHtml = this.buildMemoryGameHtml();
        break;
      case 'audio_quest':
        gameHtml = this.buildAudioQuestHtml();
        break;
    }

    this.container.innerHTML = `
      <div class="game-header-bar">
        <div class="game-mode-pills">
          <button class="game-pill-btn ${this.currentMode === 'drag_match' ? 'active' : ''}" onclick="window.matchingGame.setMode('drag_match')">
            🎯 Tarik & Pasangkan
          </button>
          <button class="game-pill-btn ${this.currentMode === 'memory' ? 'active' : ''}" onclick="window.matchingGame.setMode('memory')">
            🃏 Tebak Kartu Balik
          </button>
          <button class="game-pill-btn ${this.currentMode === 'audio_quest' ? 'active' : ''}" onclick="window.matchingGame.setMode('audio_quest')">
            🔊 Dengar & Pilih Gambar
          </button>
        </div>
        <div class="game-score-display">
          <span class="score-badge">⭐ Skor: <strong id="gameScore">${this.score}</strong></span>
          <span class="streak-badge">🔥 Streak: <strong id="gameStreak">${this.streak}</strong></span>
        </div>
      </div>
      <div class="game-play-area">
        ${gameHtml}
      </div>
    `;

    this.attachGameEvents();
  }

  /* =========================================================
     MODE 1: DRAG & DROP / TAP TO MATCH
  ========================================================= */
  buildDragMatchHtml() {
    // Shuffle words and images separately
    const words = [...this.gameItems].sort(() => Math.random() - 0.5);
    const images = [...this.gameItems].sort(() => Math.random() - 0.5);

    return `
      <div class="match-instructions">
        💡 <strong>Petunjuk:</strong> Klik atau tarik kartu kata Mandarin (kiri), lalu pasangkan dengan gambar atau arti yang sesuai (kanan)!
      </div>
      <div class="match-arena-grid">
        <!-- Kolom Kata Hanzi -->
        <div class="match-column" id="wordsColumn">
          <h4 class="col-title">🔤 Karakter & Pinyin</h4>
          ${words.map((item, idx) => `
            <div class="match-card word-card" 
                 data-hanzi="${item.hanzi}" 
                 id="wordCard_${idx}" 
                 draggable="true">
              <span class="card-hanzi">${item.hanzi}</span>
              <span class="card-pinyin">${item.pinyin}</span>
              <button class="mini-audio-btn" onclick="event.stopPropagation(); window.dinoAudio.speak('${item.hanzi}')">🔊</button>
            </div>
          `).join('')}
        </div>

        <!-- Kolom Gambar & Makna -->
        <div class="match-column" id="imagesColumn">
          <h4 class="col-title">🖼️ Gambar & Arti</h4>
          ${images.map((item, idx) => `
            <div class="match-card target-image-card" 
                 data-target-hanzi="${item.hanzi}" 
                 id="targetCard_${idx}">
              <div class="card-img-wrap">
                <img src="${item.image}" alt="${item.meaningId}" onerror="this.src='assets/dino/egg.jpg'" class="match-thumb">
                <span class="card-emoji-overlay">${item.iconEmoji || '🦕'}</span>
              </div>
              <div class="card-meaning-id">${item.meaningId}</div>
              <div class="card-meaning-en">${item.meaningEn}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* =========================================================
     MODE 2: 3D MEMORY FLIP GAME
  ========================================================= */
  buildMemoryGameHtml() {
    // Duplicate items into Hanzi card and Image card
    let deck = [];
    this.gameItems.forEach((item, idx) => {
      deck.push({
        id: `h_${idx}`,
        type: 'hanzi',
        pairId: item.hanzi,
        content: `
          <div class="memory-hanzi-content">
            <div class="mem-hz">${item.hanzi}</div>
            <div class="mem-py">${item.pinyin}</div>
          </div>
        `
      });
      deck.push({
        id: `img_${idx}`,
        type: 'image',
        pairId: item.hanzi,
        content: `
          <div class="memory-img-content">
            <img src="${item.image}" alt="${item.meaningId}" onerror="this.src='assets/dino/egg.jpg'" class="mem-thumb">
            <div class="mem-desc">${item.meaningId}</div>
          </div>
        `
      });
    });

    deck = deck.sort(() => Math.random() - 0.5);

    return `
      <div class="match-instructions">
        🃏 <strong>Memory Flip:</strong> Temukan pasangan karakter Hanzi dengan gambar/artinya!
      </div>
      <div class="memory-grid">
        ${deck.map((card, idx) => `
          <div class="memory-card" data-pair="${card.pairId}" data-id="${card.id}" id="memCard_${idx}">
            <div class="memory-card-inner">
              <div class="memory-card-front">
                <img src="assets/dino/egg.jpg" alt="Dino Egg" class="mem-egg-icon">
                <span>?</span>
              </div>
              <div class="memory-card-back">
                ${card.content}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  /* =========================================================
     MODE 3: AUDIO QUEST (DENGAR & PILIH)
  ========================================================= */
  buildAudioQuestHtml() {
    // Pick current question item
    const target = this.gameItems[Math.floor(Math.random() * this.gameItems.length)];
    this.currentQuestTarget = target;

    // Pick 4 options including target
    const shuffled = [...this.gameItems].sort(() => Math.random() - 0.5);
    const options = shuffled.slice(0, 4);
    if (!options.some(o => o.hanzi === target.hanzi)) {
      options[0] = target;
      options.sort(() => Math.random() - 0.5);
    }

    return `
      <div class="audio-quest-wrap">
        <div class="audio-quest-header">
          <button class="big-audio-play-btn" onclick="window.dinoAudio.speak('${target.hanzi}')">
            <span class="btn-icon">🔊</span>
            <span class="btn-text">Dengarkan Suara Karakter</span>
          </button>
          <p class="quest-hint">Dengarkan pelafalan bahasa Mandarin, lalu pilih gambar yang tepat!</p>
        </div>

        <div class="quest-options-grid">
          ${options.map((opt, idx) => `
            <div class="quest-option-card" data-hanzi="${opt.hanzi}" onclick="window.matchingGame.checkQuestAnswer('${opt.hanzi}')">
              <div class="quest-img-box">
                <img src="${opt.image}" alt="${opt.meaningId}" onerror="this.src='assets/dino/egg.jpg'">
                <span class="quest-emoji">${opt.iconEmoji || '🦕'}</span>
              </div>
              <div class="quest-meta">
                <span class="quest-py">${opt.pinyin}</span>
                <span class="quest-id">${opt.meaningId}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* =========================================================
     EVENT ATTACHMENTS & GAMEPLAY LOGIC
  ========================================================= */
  attachGameEvents() {
    if (this.currentMode === 'drag_match') {
      this.attachDragMatchEvents();
    } else if (this.currentMode === 'memory') {
      this.attachMemoryEvents();
    } else if (this.currentMode === 'audio_quest') {
      // Automatically speak the target word on start
      if (this.currentQuestTarget) {
        setTimeout(() => window.dinoAudio.speak(this.currentQuestTarget.hanzi), 400);
      }
    }
  }

  attachDragMatchEvents() {
    const wordCards = this.container.querySelectorAll('.word-card');
    const targetCards = this.container.querySelectorAll('.target-image-card');

    // Tap to match selection
    wordCards.forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('matched')) return;
        wordCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedCard = card;
        window.dinoAudio.playSfx('click');
        window.dinoAudio.speak(card.dataset.hanzi);
      });

      // Drag events
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.dataset.hanzi);
        this.selectedCard = card;
      });
    });

    targetCards.forEach(target => {
      target.addEventListener('click', () => {
        if (target.classList.contains('matched')) return;
        if (this.selectedCard) {
          this.evaluateMatch(this.selectedCard, target);
        }
      });

      target.addEventListener('dragover', (e) => e.preventDefault());
      target.addEventListener('drop', (e) => {
        e.preventDefault();
        const hanzi = e.dataTransfer.getData('text/plain');
        if (this.selectedCard && this.selectedCard.dataset.hanzi === hanzi) {
          this.evaluateMatch(this.selectedCard, target);
        }
      });
    });
  }

  evaluateMatch(wordCard, targetCard) {
    const wordHanzi = wordCard.dataset.hanzi;
    const targetHanzi = targetCard.dataset.targetHanzi;

    if (wordHanzi === targetHanzi) {
      // MATCH SUCCESS
      wordCard.classList.remove('selected');
      wordCard.classList.add('matched');
      targetCard.classList.add('matched');

      this.score += 20;
      this.streak += 1;
      this.matchedPairs++;

      window.dinoAudio.playSfx('correct');
      this.updateScoreUi();

      this.selectedCard = null;

      // Check if all pairs matched
      if (this.matchedPairs >= this.gameItems.length) {
        setTimeout(() => this.triggerVictory(), 600);
      }
    } else {
      // WRONG MATCH
      wordCard.classList.add('shake-wrong');
      targetCard.classList.add('shake-wrong');
      this.streak = 0;
      window.dinoAudio.playSfx('wrong');
      this.updateScoreUi();

      setTimeout(() => {
        wordCard.classList.remove('shake-wrong', 'selected');
        targetCard.classList.remove('shake-wrong');
        this.selectedCard = null;
      }, 600);
    }
  }

  attachMemoryEvents() {
    let flippedCards = [];
    let isBusy = false;
    const cards = this.container.querySelectorAll('.memory-card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (isBusy || card.classList.contains('flipped') || card.classList.contains('matched')) return;

        card.classList.add('flipped');
        flippedCards.push(card);
        window.dinoAudio.playSfx('click');

        if (flippedCards.length === 2) {
          isBusy = true;
          const [card1, card2] = flippedCards;
          const pair1 = card1.dataset.pair;
          const pair2 = card2.dataset.pair;

          if (pair1 === pair2) {
            // MATCH FOUND!
            setTimeout(() => {
              card1.classList.add('matched');
              card2.classList.add('matched');
              this.score += 25;
              this.streak += 1;
              this.matchedPairs++;
              window.dinoAudio.playSfx('correct');
              window.dinoAudio.speak(pair1);
              this.updateScoreUi();

              flippedCards = [];
              isBusy = false;

              if (this.matchedPairs >= this.gameItems.length) {
                setTimeout(() => this.triggerVictory(), 600);
              }
            }, 500);
          } else {
            // MISMATCH
            setTimeout(() => {
              card1.classList.remove('flipped');
              card2.classList.remove('flipped');
              this.streak = 0;
              window.dinoAudio.playSfx('wrong');
              this.updateScoreUi();

              flippedCards = [];
              isBusy = false;
            }, 1000);
          }
        }
      });
    });
  }

  checkQuestAnswer(selectedHanzi) {
    if (!this.currentQuestTarget) return;

    const cards = this.container.querySelectorAll('.quest-option-card');
    cards.forEach(c => {
      if (c.dataset.hanzi === this.currentQuestTarget.hanzi) {
        c.classList.add('correct-answer');
      }
    });

    if (selectedHanzi === this.currentQuestTarget.hanzi) {
      this.score += 30;
      this.streak += 1;
      window.dinoAudio.playSfx('dino_roar');
      this.updateScoreUi();

      setTimeout(() => {
        // Next question or victory
        if (this.score >= 90) {
          this.triggerVictory();
        } else {
          this.render();
        }
      }, 1200);
    } else {
      this.streak = 0;
      window.dinoAudio.playSfx('wrong');
      this.updateScoreUi();
      setTimeout(() => this.render(), 1400);
    }
  }

  updateScoreUi() {
    const sEl = document.getElementById('gameScore');
    const stEl = document.getElementById('gameStreak');
    if (sEl) sEl.textContent = this.score;
    if (stEl) stEl.textContent = this.streak;
  }

  triggerVictory() {
    window.dinoAudio.playSfx('level_complete');
    if (window.dinoApp) {
      window.dinoApp.onUnitGameComplete(this.currentBookId, this.currentUnitNumber, this.score);
    }
  }
}

window.DinoMatchingGame = DinoMatchingGame;
