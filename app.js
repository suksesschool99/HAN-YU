/**
 * DINO HAN YU - MAIN APPLICATION CONTROLLER
 * Integrates:
 * 1. Book Level Selector (Han Yu 1 - 12)
 * 2. Unit Navigation
 * 3. Module Tabs: Reading, Stroke Writing, Image Matching Game, Fossil Museum
 * 4. Egg Hatching & Gamification Progress
 */

class DinoHanYuApp {
  constructor() {
    this.currentBookId = 1;
    this.currentUnitNumber = 1;
    this.activeTab = 'reading'; // 'reading' | 'writing' | 'matching' | 'museum'
    this.pinyinVisible = true;
    this.selectedVocabIndex = 0;

    // Load progress from localStorage
    this.userProgress = this.loadProgress();

    this.initElements();
    this.initEventListeners();
    this.render();
  }

  loadProgress() {
    const saved = localStorage.getItem('dino_hanyu_progress');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      completedUnits: {}, // e.g. "1_1": { stars: 3, score: 100 }
      totalStars: 0,
      hatchedEggs: [],
      badges: []
    };
  }

  saveProgress() {
    localStorage.setItem('dino_hanyu_progress', JSON.stringify(this.userProgress));
    this.updateHeaderBadges();
  }

  initElements() {
    this.bookSelect = document.getElementById('bookSelect');
    this.unitTabsContainer = document.getElementById('unitTabsContainer');
    this.contentArea = document.getElementById('mainContentArea');
    this.totalStarsEl = document.getElementById('totalStarsCount');
    this.hatchedCountEl = document.getElementById('hatchedEggsCount');
  }

  initEventListeners() {
    // Navigation Tabs
    const navButtons = document.querySelectorAll('.main-nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTab = btn.dataset.tab;
        window.dinoAudio.playSfx('click');
        this.renderActiveTab();
      });
    });

    // Tone Guide Modal Trigger
    const toneBtn = document.getElementById('toneGuideBtn');
    if (toneBtn) {
      toneBtn.addEventListener('click', () => this.showToneModal());
    }
  }

  selectBook(bookId) {
    this.currentBookId = Number(bookId);
    this.currentUnitNumber = 1;
    this.selectedVocabIndex = 0;
    window.dinoAudio.playSfx('click');
    this.render();
  }

  selectUnit(unitNum) {
    this.currentUnitNumber = Number(unitNum);
    this.selectedVocabIndex = 0;
    window.dinoAudio.playSfx('click');
    this.renderUnitTabs();
    this.renderActiveTab();
  }

  render() {
    this.renderBookSelector();
    this.renderUnitTabs();
    this.renderActiveTab();
    this.updateHeaderBadges();
  }

  updateHeaderBadges() {
    if (this.totalStarsEl) this.totalStarsEl.textContent = this.userProgress.totalStars;
    if (this.hatchedCountEl) this.hatchedCountEl.textContent = this.userProgress.hatchedEggs.length;
  }

  renderBookSelector() {
    const bookBar = document.getElementById('bookListGrid');
    if (!bookBar) return;

    bookBar.innerHTML = HANYU_DATA.books.map(book => {
      const isSelected = book.id === this.currentBookId;
      const isCompleted = this.isBookCompleted(book.id);
      return `
        <button class="book-chip-btn ${isSelected ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                onclick="window.dinoApp.selectBook(${book.id})">
          <span class="chip-num">#${book.id}</span>
          <span class="chip-title">Han Yu ${book.id}</span>
          ${isCompleted ? '⭐' : ''}
        </button>
      `;
    }).join('');
  }

  renderUnitTabs() {
    if (!this.unitTabsContainer) return;
    const book = getBookById(this.currentBookId);

    this.unitTabsContainer.innerHTML = book.units.map(unit => {
      const isSelected = unit.unitNumber === this.currentUnitNumber;
      const key = `${this.currentBookId}_${unit.unitNumber}`;
      const progress = this.userProgress.completedUnits[key];
      const stars = progress ? '⭐'.repeat(progress.stars) : '🥚';

      return `
        <button class="unit-tab-pill ${isSelected ? 'active' : ''}" 
                onclick="window.dinoApp.selectUnit(${unit.unitNumber})">
          <span class="unit-status-icon">${stars}</span>
          <span class="unit-title-text">${unit.title}</span>
        </button>
      `;
    }).join('');
  }

  renderActiveTab() {
    if (!this.contentArea) return;

    switch (this.activeTab) {
      case 'reading':
        this.renderReadingModule();
        break;
      case 'writing':
        this.renderWritingModule();
        break;
      case 'matching':
        this.renderMatchingModule();
        break;
      case 'museum':
        this.renderMuseumModule();
        break;
    }
  }

  /* =========================================================
     1. CARA MEMBACA (READING MODULE)
  ========================================================= */
  renderReadingModule() {
    const book = getBookById(this.currentBookId);
    const unit = getUnit(this.currentBookId, this.currentUnitNumber);

    this.contentArea.innerHTML = `
      <div class="module-view reading-module animate-fade-in">
        <!-- Banner Info Unit -->
        <div class="unit-hero-banner">
          <div class="hero-text">
            <span class="hero-level-badge">📚 ${book.title} - ${book.level}</span>
            <h2 class="hero-unit-title">${unit.title}</h2>
            <p class="hero-theme-desc">Tema Pembelajaran: <strong>${unit.theme}</strong></p>
          </div>
          <div class="hero-audio-controls">
            <div class="speed-toggle-group">
              <span class="ctrl-label">Kecepatan Suara:</span>
              <button class="speed-btn" onclick="window.dinoAudio.setRate(0.7); window.dinoApp.setActiveSpeed(this)">0.7x (Lambat)</button>
              <button class="speed-btn active" onclick="window.dinoAudio.setRate(0.85); window.dinoApp.setActiveSpeed(this)">Normal</button>
              <button class="speed-btn" onclick="window.dinoAudio.setRate(1.1); window.dinoApp.setActiveSpeed(this)">1.1x (Cepat)</button>
            </div>
            <button class="pinyin-toggle-btn" onclick="window.dinoApp.togglePinyin()">
              ${this.pinyinVisible ? '👁️ Sembunyikan Pinyin' : '👁️ Tampilkan Pinyin'}
            </button>
          </div>
        </div>

        <div class="reading-columns-grid">
          <!-- Kosakata Kartu Interaktif -->
          <div class="vocab-showcase-panel">
            <h3 class="section-heading">🗂️ Kosakata Inti Unit (生词表)</h3>
            <p class="section-sub">Klik tombol speaker 🔊 untuk mendengarkan pelafalan asli Mandarin.</p>
            
            <div class="vocab-cards-grid">
              ${unit.vocab.map((v, idx) => `
                <div class="vocab-card ${this.selectedVocabIndex === idx ? 'selected' : ''}" 
                     onclick="window.dinoApp.selectVocabCard(${idx})">
                  <div class="vocab-card-header">
                    <span class="v-hanzi">${v.hanzi}</span>
                    <button class="v-speak-btn" onclick="event.stopPropagation(); window.dinoAudio.speak('${v.hanzi}')">
                      🔊
                    </button>
                  </div>
                  <div class="v-pinyin ${this.pinyinVisible ? '' : 'hide-pinyin'}">${v.pinyin}</div>
                  <div class="v-meaning-id">${v.meaningId}</div>
                  <div class="v-meaning-en">${v.meaningEn}</div>
                  <div class="v-meta-row">
                    <span class="v-tag">Goresan: ${v.strokes}画</span>
                    <span class="v-tag">Radikal: ${v.radical}</span>
                  </div>
                  <div class="v-example-box" onclick="event.stopPropagation(); window.dinoAudio.speak('${v.exampleHanzi}')">
                    <div class="ex-hz">💬 ${v.exampleHanzi}</div>
                    <div class="ex-py ${this.pinyinVisible ? '' : 'hide-pinyin'}">${v.examplePinyin}</div>
                    <div class="ex-id">${v.exampleTranslation}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Teks Bacaan & Dialog Unit -->
          <div class="reading-text-panel">
            <h3 class="section-heading">📖 Teks Bacaan & Percakapan (课文朗读)</h3>
            
            <div class="dialogue-box">
              <div class="dialogue-header">
                <h4>🗣️ Dialog Percakapan</h4>
                <button class="dialog-play-btn" onclick="window.dinoApp.readFullDialogue()">
                  ▶️ Putar Semua Dialog
                </button>
              </div>
              <div class="dialogue-lines">
                ${Object.entries(unit.dialogue).map(([key, text]) => `
                  <div class="dialog-line" onclick="window.dinoAudio.speak('${text.split('(')[0]}')">
                    <span class="speaker-icon">🦖</span>
                    <span class="dialog-content">${text}</span>
                    <button class="line-speaker-btn">🔊</button>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="passage-box">
              <div class="passage-header">
                <h4>📜 Cerita Pendek Unit</h4>
                <button class="dialog-play-btn" onclick="window.dinoAudio.speak('${unit.readingPassage}')">
                  ▶️ Baca Cerita
                </button>
              </div>
              <div class="passage-hanzi-large">${unit.readingPassage}</div>
              <div class="passage-pinyin ${this.pinyinVisible ? '' : 'hide-pinyin'}">${unit.readingPinyin}</div>
              <div class="passage-translation">🇮🇩 ${unit.readingTranslation}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  togglePinyin() {
    this.pinyinVisible = !this.pinyinVisible;
    window.dinoAudio.playSfx('click');
    this.renderActiveTab();
  }

  setActiveSpeed(btn) {
    document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    window.dinoAudio.playSfx('click');
  }

  selectVocabCard(idx) {
    this.selectedVocabIndex = idx;
    const unit = getUnit(this.currentBookId, this.currentUnitNumber);
    const vocab = unit.vocab[idx];
    if (vocab) {
      window.dinoAudio.speak(vocab.hanzi);
    }
    this.renderActiveTab();
  }

  readFullDialogue() {
    const unit = getUnit(this.currentBookId, this.currentUnitNumber);
    const lines = Object.values(unit.dialogue).map(line => line.split('(')[0].replace(/^[AB]:\s*/, ''));
    const fullText = lines.join('。 ');
    window.dinoAudio.speak(fullText);
  }

  /* =========================================================
     2. CARA MENULIS GORESAN (STROKE WRITING MODULE)
  ========================================================= */
  renderWritingModule() {
    const unit = getUnit(this.currentBookId, this.currentUnitNumber);
    const currentVocab = unit.vocab[this.selectedVocabIndex] || unit.vocab[0];

    // Pick first single character of the vocab
    const targetChar = currentVocab.hanzi.charAt(0);

    this.contentArea.innerHTML = `
      <div class="module-view writing-module animate-fade-in">
        <div class="writing-top-bar">
          <div class="char-picker-group">
            <span class="picker-label">Pilih Karakter Unit untuk Ditulis:</span>
            <div class="char-buttons-list">
              ${unit.vocab.map((v, i) => `
                <button class="char-chip-btn ${this.selectedVocabIndex === i ? 'active' : ''}" 
                        onclick="window.dinoApp.changeWritingChar(${i})">
                  <span class="chip-hz">${v.hanzi}</span>
                  <span class="chip-py">${v.pinyin}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="writing-workstation-grid">
          <!-- Kolom Kiri: Animasi Urutan Goresan -->
          <div class="stroke-anim-card">
            <div class="card-top-title">
              <h3>🎬 Animasi Langkah Goresan</h3>
              <span class="char-stat-badge">Total: <strong>${currentVocab.strokes}</strong> Goresan</span>
            </div>
            
            <div class="canvas-center-wrap">
              <canvas id="animCanvas" width="320" height="320" class="tianzige-canvas"></canvas>
            </div>

            <div class="anim-controls-toolbar">
              <button class="tool-btn" onclick="window.strokeEngine.stepBackward()" title="Langkah Sebelumnya">⏮️ Mundur</button>
              <button class="tool-btn primary" id="playAnimBtn" onclick="window.dinoApp.playStrokeAnimation()">▶️ Putar Animasi</button>
              <button class="tool-btn" onclick="window.strokeEngine.stepForward()" title="Langkah Berikutnya">⏭️ Maju</button>
            </div>

            <div class="stroke-names-list-box">
              <h4>📋 Kaidah Urutan Goresan Karakter 「${targetChar}」:</h4>
              <ol class="stroke-steps-ol">
                ${currentVocab.strokeNames.map((name, idx) => `
                  <li>
                    <span class="step-num">${idx + 1}</span>
                    <span class="step-name">${name}</span>
                  </li>
                `).join('')}
              </ol>
            </div>
          </div>

          <!-- Kolom Kanan: Kanvas Latihan Interaktif -->
          <div class="stroke-practice-card">
            <div class="card-top-title">
              <h3>✍️ Kanvas Latihan Menulis Mandiri</h3>
              <span class="char-stat-badge">Kuas Kaligrafi Dinosaurus</span>
            </div>

            <div class="canvas-center-wrap">
              <canvas id="drawCanvas" width="320" height="320" class="tianzige-canvas practice"></canvas>
            </div>

            <div class="brush-tools-toolbar">
              <div class="color-palette">
                <span class="color-dot active" style="background:#15803d" onclick="window.strokeEngine.setBrushColor('#15803d')" title="Hijau Jurassic"></span>
                <span class="color-dot" style="background:#dc2626" onclick="window.strokeEngine.setBrushColor('#dc2626')" title="Merah T-Rex"></span>
                <span class="color-dot" style="background:#1e293b" onclick="window.strokeEngine.setBrushColor('#1e293b')" title="Tinta Hitam"></span>
                <span class="color-dot" style="background:#2563eb" onclick="window.strokeEngine.setBrushColor('#2563eb')" title="Biru Dino"></span>
              </div>
              <div class="action-buttons">
                <button class="tool-btn" onclick="window.strokeEngine.undoStroke()">↩️ Undo</button>
                <button class="tool-btn" onclick="window.strokeEngine.clearDrawing()">🗑️ Hapus</button>
                <button class="tool-btn grade-btn" onclick="window.dinoApp.gradeStrokePractice()">🌟 Nilai Goresan</button>
              </div>
            </div>

            <!-- Feedback Nilai Goresan -->
            <div class="evaluation-result-box" id="evalResultBox" style="display:none;">
              <div class="eval-stars" id="evalStars">⭐⭐⭐</div>
              <p class="eval-msg" id="evalMsg">Luar biasa!</p>
            </div>

            <div class="stroke-tips-note">
              💡 <strong>Tips Menulis Karakter Mandarin:</strong>
              <ul>
                <li>Atas ke Bawah (从上到下)</li>
                <li>Kiri ke Kanan (从左到右)</li>
                <li>Garis Horizontal dulu baru Vertikal (先横后竖)</li>
                <li>Luar ke Dalam, lalu Tutup (先外后内再封口)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    // Initialize Stroke Engine for this character
    setTimeout(() => {
      window.strokeEngine = new DinoStrokeEngine('animCanvas', 'drawCanvas');
      window.strokeEngine.loadCharacter(targetChar);
    }, 50);
  }

  changeWritingChar(index) {
    this.selectedVocabIndex = index;
    window.dinoAudio.playSfx('click');
    this.renderWritingModule();
  }

  playStrokeAnimation() {
    const playBtn = document.getElementById('playAnimBtn');
    if (playBtn) playBtn.textContent = '⏸️ Memutar...';
    window.strokeEngine.playAnimation(null, () => {
      if (playBtn) playBtn.textContent = '▶️ Putar Animasi';
    });
  }

  gradeStrokePractice() {
    const res = window.strokeEngine.evaluateWriting();
    const box = document.getElementById('evalResultBox');
    const starsEl = document.getElementById('evalStars');
    const msgEl = document.getElementById('evalMsg');

    if (box && starsEl && msgEl) {
      box.style.display = 'block';
      starsEl.textContent = res.stars > 0 ? '⭐'.repeat(res.stars) : '🥚';
      msgEl.textContent = res.message;

      // Add stars to user progress
      if (res.stars > 0) {
        this.addStars(res.stars);
      }
    }
  }

  /* =========================================================
     3. MENCOCOKKAN KATA DENGAN GAMBAR (MATCHING GAME)
  ========================================================= */
  renderMatchingModule() {
    this.contentArea.innerHTML = `
      <div class="module-view matching-module animate-fade-in">
        <div id="matchingGameContainer" class="game-full-container"></div>
      </div>
    `;

    setTimeout(() => {
      window.matchingGame = new DinoMatchingGame('matchingGameContainer');
      window.matchingGame.init(this.currentBookId, this.currentUnitNumber, 'drag_match');
    }, 50);
  }

  /* =========================================================
     4. MUSEUM FOSIL & LENCANA (COLLECTION MUSEUM)
  ========================================================= */
  renderMuseumModule() {
    this.contentArea.innerHTML = `
      <div class="module-view museum-module animate-fade-in">
        <div class="museum-hero">
          <img src="assets/dino/rexy.jpg" alt="Rexy Paleontolog" class="rexy-museum-avatar">
          <div class="museum-header-text">
            <h2>🏛️ Museum Fosil Dino & Koleksi Lencana Han Yu</h2>
            <p>Selesaikan latihan membaca, menulis goresan, dan game mencocokkan gambar di setiap buku (Han Yu 1 s/d 12) untuk menetaskan telur dino langka!</p>
          </div>
        </div>

        <div class="books-showcase-grid">
          ${HANYU_DATA.books.map(book => {
            const isCompleted = this.isBookCompleted(book.id);
            const isHatched = this.userProgress.hatchedEggs.includes(book.id);
            return `
              <div class="museum-book-card ${isCompleted ? 'completed' : ''}">
                <div class="book-card-header">
                  <span class="dino-rank-tag">${book.dinoRank}</span>
                  <span class="book-badge-icon">${isCompleted ? '🏆' : '🔒'}</span>
                </div>
                <div class="book-egg-visual">
                  <img src="${isHatched ? 'assets/dino/egg.jpg' : 'assets/dino/rexy.jpg'}" 
                       alt="${book.title}" 
                       class="book-museum-thumb ${isHatched ? 'hatched-glow' : ''}">
                </div>
                <h4 class="book-museum-title">${book.title}</h4>
                <div class="book-museum-badge">${book.badge}</div>
                <p class="book-museum-desc">${book.description}</p>
                <div class="book-units-progress-bar">
                  <div class="prog-fill" style="width: ${this.getBookProgressPercent(book.id)}%"></div>
                </div>
                <button class="jump-book-btn" onclick="window.dinoApp.selectBook(${book.id}); window.dinoApp.setActiveNavTab('reading');">
                  🚀 Buka Pembelajaran
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  setActiveNavTab(tabName) {
    const navButtons = document.querySelectorAll('.main-nav-btn');
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    this.activeTab = tabName;
    this.renderActiveTab();
  }

  isBookCompleted(bookId) {
    const book = getBookById(bookId);
    return book.units.every(u => {
      const key = `${bookId}_${u.unitNumber}`;
      return !!this.userProgress.completedUnits[key];
    });
  }

  getBookProgressPercent(bookId) {
    const book = getBookById(bookId);
    let done = 0;
    book.units.forEach(u => {
      if (this.userProgress.completedUnits[`${bookId}_${u.unitNumber}`]) done++;
    });
    return Math.round((done / book.units.length) * 100);
  }

  addStars(count) {
    this.userProgress.totalStars += count;
    this.saveProgress();
  }

  onUnitGameComplete(bookId, unitNumber, score) {
    const key = `${bookId}_${unitNumber}`;
    const stars = score >= 80 ? 3 : (score >= 50 ? 2 : 1);
    
    if (!this.userProgress.completedUnits[key]) {
      this.userProgress.totalStars += stars;
    }
    this.userProgress.completedUnits[key] = { stars: stars, score: score };

    if (!this.userProgress.hatchedEggs.includes(bookId)) {
      this.userProgress.hatchedEggs.push(bookId);
    }
    this.saveProgress();

    this.showEggHatchCelebrationModal(bookId, unitNumber, stars);
  }

  showEggHatchCelebrationModal(bookId, unitNumber, stars) {
    const modal = document.getElementById('eggModal');
    const book = getBookById(bookId);
    const starStr = '⭐'.repeat(stars);

    if (modal) {
      modal.innerHTML = `
        <div class="modal-backdrop" onclick="window.dinoApp.closeModal()"></div>
        <div class="modal-content egg-modal-card animate-bounce-in">
          <button class="modal-close-btn" onclick="window.dinoApp.closeModal()">✖</button>
          <div class="modal-stars-header">${starStr}</div>
          <h2>🎉 Telur Dino Berhasil Menetas!</h2>
          <div class="hatched-dino-image-wrap">
            <img src="assets/dino/egg.jpg" alt="Baby Dino" class="hatched-dino-img">
          </div>
          <p class="modal-praise">Selamat! Kamu berhasil menuntaskan game unit <strong>Han Yu ${bookId}</strong>!</p>
          <div class="modal-badge-unlocked">
            ✨ Lencana Diperoleh: <strong>${book.badge}</strong>
          </div>
          <div class="modal-action-buttons">
            <button class="modal-btn primary" onclick="window.dinoApp.closeModal(); window.dinoApp.render();">
              🦖 Lanjut Belajar
            </button>
            <button class="modal-btn" onclick="window.dinoApp.closeModal(); window.dinoApp.setActiveNavTab('museum');">
              🏛️ Lihat Koleksi Museum
            </button>
          </div>
        </div>
      `;
      modal.style.display = 'flex';
      window.dinoAudio.playSfx('egg_crack');
    }
  }

  showToneModal() {
    const modal = document.getElementById('eggModal');
    if (!modal) return;

    modal.innerHTML = `
      <div class="modal-backdrop" onclick="window.dinoApp.closeModal()"></div>
      <div class="modal-content tone-modal-card animate-bounce-in">
        <button class="modal-close-btn" onclick="window.dinoApp.closeModal()">✖</button>
        <h2>🎵 Panduan 4 Nada Bahasa Mandarin (声调)</h2>
        <p class="tone-subtitle">Karakter yang sama dengan nada berbeda memiliki arti yang berbeda!</p>
        
        <div class="tones-grid-visual">
          <div class="tone-card tone-1" onclick="window.dinoAudio.speak('mā')">
            <div class="tone-shape">ˉ</div>
            <div class="tone-title">Nada 1: Datar Tinggi (阴平)</div>
            <div class="tone-sample">mā (妈 - Ibu)</div>
            <div class="tone-pitch-desc">Tinggi, datar & stabil (5-5)</div>
            <button class="tone-play-btn">🔊 Dengarkan</button>
          </div>

          <div class="tone-card tone-2" onclick="window.dinoAudio.speak('má')">
            <div class="tone-shape">ˊ</div>
            <div class="tone-title">Nada 2: Naik / Bertanya (阳平)</div>
            <div class="tone-sample">má (麻 - Rami)</div>
            <div class="tone-pitch-desc">Naik dari sedang ke tinggi (3-5)</div>
            <button class="tone-play-btn">🔊 Dengarkan</button>
          </div>

          <div class="tone-card tone-3" onclick="window.dinoAudio.speak('mǎ')">
            <div class="tone-shape">ˇ</div>
            <div class="tone-title">Nada 3: Turun-Naik (上声)</div>
            <div class="tone-sample">mǎ (马 - Kuda)</div>
            <div class="tone-pitch-desc">Turun rendah lalu melengkung naik (2-1-4)</div>
            <button class="tone-play-btn">🔊 Dengarkan</button>
          </div>

          <div class="tone-card tone-4" onclick="window.dinoAudio.speak('mà')">
            <div class="tone-shape">ˋ</div>
            <div class="tone-title">Nada 4: Hentak Turun (去声)</div>
            <div class="tone-sample">mà (骂 - Memarahi)</div>
            <div class="tone-pitch-desc">Cepat dan tegas turun ke bawah (5-1)</div>
            <button class="tone-play-btn">🔊 Dengarkan</button>
          </div>
        </div>

        <div class="tone-tip-box">
          💡 Klik masing-masing kartu di atas untuk mendengarkan perbandingan intonasi suara!
        </div>
      </div>
    `;
    modal.style.display = 'flex';
  }

  closeModal() {
    const modal = document.getElementById('eggModal');
    if (modal) modal.style.display = 'none';
  }
}

// Instantiate App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.dinoApp = new DinoHanYuApp();
});
