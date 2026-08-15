// =========================================================================
// APP CONTROLLER: Han Yu 1 - 6 (90 Pelajaran Lengkap Kurikulum Resmi)
// =========================================================================

class HanYuApp {
  constructor() {
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.currentTab = 'story'; // 'story', 'stroke', 'quiz', 'match'
    this.activeVocabIndex = 0;
    this.bones = 0;
    this.hatchedDinos = ['rexy'];
    this.completedUnits = {};
    this.strokeEngine = null;
    this.quizState = {
      mode: 'all',
      questions: [],
      currentIndex: 0,
      score: 0,
      streak: 0
    };
    this.matchingState = {
      pairs: [],
      imageCards: [],
      textCards: [],
      selectedImage: null,
      selectedText: null,
      matchedPairs: [],
      matchedCount: 0
    };
    this.ttsSpeed = 0.9;
    this.showPinyin = true;
    this.showMeaning = true;
    this.isAutoPlayingStory = false;
    this.autoPlayIndex = 0;

    this.loadState();
    this.init();
  }

  loadState() {
    try {
      const savedBones = localStorage.getItem('hanyu_dino_bones');
      if (savedBones) this.bones = parseInt(savedBones, 10) || 0;

      const savedDinos = localStorage.getItem('hanyu_hatched_dinos');
      if (savedDinos) this.hatchedDinos = JSON.parse(savedDinos);

      const savedUnits = localStorage.getItem('hanyu_completed_units');
      if (savedUnits) this.completedUnits = JSON.parse(savedUnits);

      const savedBook = localStorage.getItem('hanyu_current_book');
      if (savedBook) this.currentBookId = parseInt(savedBook, 10) || 1;

      const savedUnit = localStorage.getItem('hanyu_current_unit');
      if (savedUnit) this.currentUnitId = parseInt(savedUnit, 10) || 1;
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('hanyu_dino_bones', this.bones);
      localStorage.setItem('hanyu_hatched_dinos', JSON.stringify(this.hatchedDinos));
      localStorage.setItem('hanyu_completed_units', JSON.stringify(this.completedUnits));
      localStorage.setItem('hanyu_current_book', this.currentBookId);
      localStorage.setItem('hanyu_current_unit', this.currentUnitId);
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  addBones(amount) {
    this.bones += amount;
    this.saveState();
    this.updateBonesDisplay();
    this.checkEggHatchAvailable();
  }

  updateBonesDisplay() {
    const el = document.getElementById('bone-counter');
    if (el) {
      el.textContent = this.bones;
      el.classList.add('pulse-bone');
      setTimeout(() => el.classList.remove('pulse-bone'), 600);
    }
  }

  checkEggHatchAvailable() {
    const allDinos = window.HANYU_DATABASE ? window.HANYU_DATABASE.dinos : [];
    const canHatch = allDinos.some(d => !this.hatchedDinos.includes(d.id) && this.bones >= d.requiredBones);
    const badge = document.getElementById('hatchery-badge');
    if (badge) {
      badge.style.display = canHatch ? 'flex' : 'none';
      if (canHatch) badge.classList.add('animate-ping-slow');
    }
  }

  getCurrentBook() {
    const books = (window.HANYU_DATABASE && window.HANYU_DATABASE.books) || window.HANYU_BOOKS || [];
    return books.find(b => b.id === this.currentBookId) || books[0];
  }

  getCurrentUnit() {
    const book = this.getCurrentBook();
    if (!book || !book.units) return null;
    return book.units.find(u => u.id === this.currentUnitId) || book.units[0];
  }

  init() {
    this.renderBookSelector();
    this.renderUnitSelector();
    this.renderCurrentUnitHeader();
    this.switchTab(this.currentTab);
    this.updateBonesDisplay();
    this.checkEggHatchAvailable();

    // Inisialisasi Stroke Engine
    setTimeout(() => {
      if (window.StrokeEngine) {
        this.strokeEngine = new StrokeEngine('tianzige-canvas');
        this.updateStrokeModule();
      }
    }, 150);

    this.bindGlobalEvents();
  }

  bindGlobalEvents() {
    // Navigasi Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Kecepatan TTS Slider
    const speedSlider = document.getElementById('tts-speed-slider');
    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        this.ttsSpeed = parseFloat(e.target.value);
        const label = document.getElementById('tts-speed-label');
        if (label) label.textContent = `${this.ttsSpeed.toFixed(2)}x`;
      });
    }

    // Toggle Pinyin & Arti
    const togglePinyin = document.getElementById('toggle-pinyin');
    if (togglePinyin) {
      togglePinyin.addEventListener('change', (e) => {
        this.showPinyin = e.target.checked;
        document.querySelectorAll('.ruby-pinyin').forEach(el => {
          el.style.display = this.showPinyin ? 'block' : 'none';
        });
      });
    }

    const toggleMeaning = document.getElementById('toggle-meaning');
    if (toggleMeaning) {
      toggleMeaning.addEventListener('change', (e) => {
        this.showMeaning = e.target.checked;
        document.querySelectorAll('.sentence-meaning').forEach(el => {
          el.style.display = this.showMeaning ? 'block' : 'none';
        });
      });
    }

    // Tombol Putar Seluruh Cerita
    const playAllBtn = document.getElementById('btn-play-all-story');
    if (playAllBtn) {
      playAllBtn.addEventListener('click', () => this.toggleAutoPlayStory());
    }

    // Tombol Sarang Dinosaurus
    const hatcheryBtn = document.getElementById('btn-open-hatchery');
    if (hatcheryBtn) {
      hatcheryBtn.addEventListener('click', () => this.openHatcheryModal());
    }

    // Tombol Tabel 28 Guratan Resmi
    const strokeRefBtn = document.getElementById('btn-open-stroke-ref');
    if (strokeRefBtn) {
      strokeRefBtn.addEventListener('click', () => this.openStrokeRefModal());
    }

    // Close Modals
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) modal.classList.remove('active');
      });
    });
  }

  // --- SELECTOR BUKU & UNIT ---

  renderBookSelector() {
    const container = document.getElementById('book-selector-container');
    if (!container) return;

    const books = (window.HANYU_DATABASE && window.HANYU_DATABASE.books) || window.HANYU_BOOKS || [];
    container.innerHTML = books.map(book => {
      const emoji = (book.mascot && book.mascot.emoji) || (book.dinoGuide && book.dinoGuide.avatar) || '🦖';
      const grade = book.subtitle || book.grade || `Buku ${book.id}`;
      return `
        <button class="book-chip ${book.id === this.currentBookId ? 'active' : ''}" data-book-id="${book.id}">
          <span class="book-dino-avatar">${emoji}</span>
          <div class="book-info">
            <span class="book-title">Han Yu ${book.id}</span>
            <span class="book-grade">${grade}</span>
          </div>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.book-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const bookId = parseInt(e.currentTarget.dataset.bookId, 10);
        this.selectBook(bookId);
      });
    });
  }

  selectBook(bookId) {
    if (window.dinoAudio) window.dinoAudio.playTap();
    this.currentBookId = bookId;
    this.currentUnitId = 1;
    this.activeVocabIndex = 0;
    this.saveState();
    this.renderBookSelector();
    this.renderUnitSelector();
    this.renderCurrentUnitHeader();
    this.reloadCurrentTab();
  }

  renderUnitSelector() {
    const container = document.getElementById('unit-selector-container');
    if (!container) return;

    const book = this.getCurrentBook();
    if (!book || !book.units) return;

    // Kelompokkan 15 Pelajaran ke dalam 3 Unit Resmi (Unit 1: 1-5, Unit 2: 6-10, Unit 3: 11-15)
    let html = '';
    const unitGroups = [
      { name: 'Unit 1 (第一单元: Bab 1 - 5)', start: 1, end: 5 },
      { name: 'Unit 2 (第二单元: Bab 6 - 10)', start: 6, end: 10 },
      { name: 'Unit 3 (第三单元: Bab 11 - 15)', start: 11, end: 15 }
    ];

    unitGroups.forEach(g => {
      const groupUnits = book.units.filter(u => u.id >= g.start && u.id <= g.end);
      if (groupUnits.length > 0) {
        html += `
          <div class="unit-group-section">
            <div class="unit-group-header">🌿 ${g.name}</div>
            <div class="unit-group-chips">
              ${groupUnits.map(unit => {
                const isCompleted = this.completedUnits[`${book.id}_${unit.id}`];
                const cleanTitle = unit.title.split('：')[1] || unit.title;
                return `
                  <button class="unit-chip ${unit.id === this.currentUnitId ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-unit-id="${unit.id}">
                    <span class="unit-num">Pelajaran ${unit.id}</span>
                    <span class="unit-name">${cleanTitle}</span>
                    ${isCompleted ? '<span class="unit-star">⭐</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }
    });

    container.innerHTML = html;

    container.querySelectorAll('.unit-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const unitId = parseInt(e.currentTarget.dataset.unitId, 10);
        this.selectUnit(unitId);
      });
    });
  }

  selectUnit(unitId) {
    if (window.dinoAudio) window.dinoAudio.playTap();
    this.currentUnitId = unitId;
    this.activeVocabIndex = 0;
    this.saveState();
    this.renderUnitSelector();
    this.renderCurrentUnitHeader();
    this.reloadCurrentTab();
  }

  renderCurrentUnitHeader() {
    const unit = this.getCurrentUnit();
    const book = this.getCurrentBook();
    if (!unit || !book) return;

    const titleEl = document.getElementById('unit-header-title');
    if (titleEl) titleEl.textContent = unit.title;

    const pinyinEl = document.getElementById('unit-header-pinyin');
    if (pinyinEl) pinyinEl.textContent = unit.pinyin;

    const meaningEl = document.getElementById('unit-header-meaning');
    if (meaningEl) meaningEl.textContent = unit.meaning || unit.indonesian;

    const introEl = document.getElementById('unit-header-intro');
    if (introEl) introEl.textContent = unit.intro || `Materi Resmi ${book.title} ${unit.title}`;

    const mascot = book.mascot || { emoji: '🦖', name: 'Rexy Dino', desc: 'Sahabat Belajarmu' };
    const guideAvatar = document.getElementById('dino-guide-avatar');
    if (guideAvatar) guideAvatar.textContent = mascot.emoji || (book.dinoGuide && book.dinoGuide.avatar) || '🦖';

    const guideName = document.getElementById('dino-guide-name');
    if (guideName) guideName.textContent = mascot.name || (book.dinoGuide && book.dinoGuide.name) || 'Dino Guru';

    const guideDesc = document.getElementById('dino-guide-desc');
    if (guideDesc) guideDesc.textContent = mascot.desc || (book.dinoGuide && book.dinoGuide.desc) || 'Panduan Belajar';
  }

  switchTab(tab) {
    if (window.dinoAudio) window.dinoAudio.playTap();
    this.currentTab = tab;

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-pane-${tab}`);
    });

    this.reloadCurrentTab();
  }

  reloadCurrentTab() {
    switch (this.currentTab) {
      case 'story':
        this.renderStoryModule();
        break;
      case 'stroke':
        this.updateStrokeModule();
        break;
      case 'quiz':
        this.startQuiz();
        break;
      case 'match':
        this.startMatchingGame();
        break;
    }
  }

  // ==========================================
  // 1. CARA BACA CERITA & KALIMAT (STORY MODULE)
  // ==========================================

  renderStoryModule() {
    const container = document.getElementById('story-sentences-list');
    if (!container) return;

    const unit = this.getCurrentUnit();
    if (!unit) return;

    this.isAutoPlayingStory = false;
    const playAllBtn = document.getElementById('btn-play-all-story');
    if (playAllBtn) playAllBtn.innerHTML = `<span>▶️</span> Putar Seluruh Cerita`;

    // Gabungkan sentences dan story untuk playlist audio otomatis
    this.allStoryItems = [];
    let html = '';

    // 1. Bagian 学句子 (Belajar Kalimat Utama)
    if (unit.sentences && unit.sentences.length > 0) {
      const startIndex = this.allStoryItems.length;
      unit.sentences.forEach(s => this.allStoryItems.push(s));
      html += `
        <div class="story-section-divider">
          <span>📚 Bagian 1: 学句子 (Belajar Kalimat Utama)</span>
        </div>
        ${unit.sentences.map((item, localIdx) => {
          const globalIdx = startIndex + localIdx;
          const rubyHtml = this.generateRubyHtml(item.hanzi, item.pinyin);
          const meaningText = item.meaning || item.indonesian || '';
          return `
            <div class="story-card" id="story-card-${globalIdx}">
              <div class="story-card-left">
                <button class="story-audio-btn" data-index="${globalIdx}" title="Dengarkan pelafalan">
                  🔊
                </button>
                <span class="story-index">${globalIdx + 1}</span>
              </div>
              <div class="story-card-content">
                <div class="sentence-mandarin">${rubyHtml}</div>
                <div class="sentence-meaning" style="display: ${this.showMeaning ? 'block' : 'none'}">${meaningText}</div>
              </div>
            </div>
          `;
        }).join('')}
      `;
    }

    // 2. Bagian 读课文 / 说一说 (Teks Cerita & Dialog)
    if (unit.story && unit.story.length > 0) {
      const startIndex = this.allStoryItems.length;
      unit.story.forEach(s => this.allStoryItems.push(s));
      const sectionName = unit.sentences && unit.sentences.length > 0 ? "📖 Bagian 2: 读课文 / 说一说 (Teks Cerita & Dialog Lengkap)" : "📖 Teks Cerita & Dialog (读课文)";
      html += `
        <div class="story-section-divider">
          <span>${sectionName}</span>
        </div>
        ${unit.story.map((item, localIdx) => {
          const globalIdx = startIndex + localIdx;
          const rubyHtml = this.generateRubyHtml(item.hanzi, item.pinyin);
          const meaningText = item.meaning || item.indonesian || '';
          return `
            <div class="story-card" id="story-card-${globalIdx}">
              <div class="story-card-left">
                <button class="story-audio-btn" data-index="${globalIdx}" title="Dengarkan pelafalan">
                  🔊
                </button>
                <span class="story-index">${globalIdx + 1}</span>
              </div>
              <div class="story-card-content">
                <div class="sentence-mandarin">${rubyHtml}</div>
                <div class="sentence-meaning" style="display: ${this.showMeaning ? 'block' : 'none'}">${meaningText}</div>
              </div>
            </div>
          `;
        }).join('')}
      `;
    }

    container.innerHTML = html;

    container.querySelectorAll('.story-audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        this.playSentence(idx);
      });
    });

    // Render Original Book Image Viewer button
    this.renderOriginalPageGallery();
  }

  generateRubyHtml(hanzi, pinyin) {
    return `
      <div class="ruby-sentence">
        <div class="ruby-pinyin" style="display: ${this.showPinyin ? 'block' : 'none'}">${pinyin || ''}</div>
        <div class="ruby-hanzi">${hanzi}</div>
      </div>
    `;
  }

  playSentence(index, onComplete = null) {
    if (!this.allStoryItems || !this.allStoryItems[index]) return;

    const sentence = this.allStoryItems[index];
    const card = document.getElementById(`story-card-${index}`);

    document.querySelectorAll('.story-card').forEach(c => c.classList.remove('playing'));
    if (card) {
      card.classList.add('playing');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (window.dinoAudio) {
      window.dinoAudio.speakMandarin(
        sentence.hanzi,
        this.ttsSpeed,
        null,
        () => {
          if (card) card.classList.remove('playing');
          if (onComplete) onComplete();
        }
      );
    }
  }

  toggleAutoPlayStory() {
    const btn = document.getElementById('btn-play-all-story');

    if (this.isAutoPlayingStory) {
      this.isAutoPlayingStory = false;
      if (window.dinoAudio) window.dinoAudio.stopSpeech();
      if (btn) btn.innerHTML = `<span>▶️</span> Putar Seluruh Cerita`;
      document.querySelectorAll('.story-card').forEach(c => c.classList.remove('playing'));
    } else {
      this.isAutoPlayingStory = true;
      if (btn) btn.innerHTML = `<span>⏹️</span> Hentikan Audio`;
      this.autoPlayIndex = 0;
      this.autoPlayNextSentence();
    }
  }

  autoPlayNextSentence() {
    if (!this.isAutoPlayingStory || !this.allStoryItems || this.autoPlayIndex >= this.allStoryItems.length) {
      this.isAutoPlayingStory = false;
      const btn = document.getElementById('btn-play-all-story');
      if (btn) btn.innerHTML = `<span>▶️</span> Putar Seluruh Cerita`;
      this.addBones(10);
      return;
    }

    this.playSentence(this.autoPlayIndex, () => {
      this.autoPlayIndex++;
      if (this.isAutoPlayingStory) {
        setTimeout(() => this.autoPlayNextSentence(), 450);
      }
    });
  }

  renderOriginalPageGallery() {
    const container = document.getElementById('story-page-gallery');
    if (!container) return;

    const unit = this.getCurrentUnit();
    const imgs = (unit && unit.images) || [];

    if (imgs.length > 0) {
      container.innerHTML = `
        <div class="gallery-title">📖 Halaman Cetak Asli Buku Pelajaran (Buku ${this.currentBookId} - Pelajaran ${this.currentUnitId})</div>
        <div class="gallery-row pdf-page-row">
          ${imgs.map((imgPath, idx) => `
            <div class="gallery-item pdf-page-card" title="Halaman Asli ${idx + 1}">
              <img src="${imgPath}" alt="Halaman ${idx + 1}" loading="lazy" onclick="window.open('${imgPath}', '_blank')" onerror="this.parentElement.style.display='none'" />
              <span>🔍 Klik Buka Halaman Asli ${idx + 1}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      container.innerHTML = '';
    }
  }

  // ==========================================
  // 2. CARA MENULIS & GAME GURATAN (STROKE MODULE)
  // ==========================================

  updateStrokeModule() {
    const unit = this.getCurrentUnit();
    if (!unit) return;

    const vocabList = unit.vocab || unit.vocabulary || [];
    if (vocabList.length === 0) return;

    if (this.activeVocabIndex >= vocabList.length) {
      this.activeVocabIndex = 0;
    }

    // Render Vocab Chips
    const selectorEl = document.getElementById('stroke-vocab-chips');
    if (selectorEl) {
      selectorEl.innerHTML = vocabList.map((v, idx) => `
        <button class="stroke-chip ${idx === this.activeVocabIndex ? 'active' : ''}" data-idx="${idx}">
          <span class="chip-hanzi">${v.hanzi}</span>
          <span class="chip-pinyin">${v.pinyin}</span>
        </button>
      `).join('');

      selectorEl.querySelectorAll('.stroke-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.activeVocabIndex = parseInt(e.currentTarget.dataset.idx, 10);
          this.updateStrokeModule();
        });
      });
    }

    const vocab = vocabList[this.activeVocabIndex];
    if (!vocab) return;

    // Update Tianzige Canvas Character
    if (this.strokeEngine) {
      this.strokeEngine.setVocab({
        hanzi: vocab.hanzi,
        pinyin: vocab.pinyin,
        indonesian: vocab.meaning || vocab.indonesian,
        strokeCount: vocab.strokeCount,
        strokeNames: vocab.strokeNames,
        guide: vocab.guide
      });
    }

    // Update Detail Info
    const infoHanzi = document.getElementById('stroke-detail-hanzi');
    if (infoHanzi) infoHanzi.textContent = vocab.hanzi;

    const infoPinyin = document.getElementById('stroke-detail-pinyin');
    if (infoPinyin) infoPinyin.textContent = vocab.pinyin;

    const infoMeaning = document.getElementById('stroke-detail-meaning');
    if (infoMeaning) infoMeaning.textContent = vocab.meaning || vocab.indonesian;

    const infoCount = document.getElementById('stroke-detail-count');
    if (infoCount) infoCount.textContent = `${vocab.strokeCount} Guratan`;

    const infoNames = document.getElementById('stroke-detail-names');
    if (infoNames && vocab.strokeNames) {
      infoNames.innerHTML = vocab.strokeNames.map((name, i) => `
        <span class="stroke-step-badge"><small>${i + 1}.</small> ${name}</span>
      `).join('');
    }

    const infoGuide = document.getElementById('stroke-detail-guide');
    if (infoGuide) infoGuide.textContent = vocab.guide || "Tuliskan sesuai urutan dari kiri ke kanan atau atas ke bawah.";

    // Reset feedback
    const statusEl = document.getElementById('stroke-feedback-msg');
    if (statusEl) {
      statusEl.innerHTML = `💡 Ikuti jejak bayangan huruf di dalam grid Tianzige dengan mouse / sentuhan jarimu!`;
      statusEl.className = 'stroke-msg info';
    }

    // Tombol Kontrol Canvas
    const btnAnimate = document.getElementById('btn-animate-stroke');
    if (btnAnimate) {
      btnAnimate.onclick = () => {
        if (this.strokeEngine) this.strokeEngine.playAnimation();
      };
    }

    const btnClear = document.getElementById('btn-clear-stroke');
    if (btnClear) {
      btnClear.onclick = () => {
        if (this.strokeEngine) this.strokeEngine.clearUserCanvas();
      };
    }

    const btnAudio = document.getElementById('btn-stroke-audio');
    if (btnAudio) {
      btnAudio.onclick = () => {
        if (window.dinoAudio) window.dinoAudio.speakMandarin(vocab.hanzi, 0.85);
      };
    }
  }

  // ==========================================
  // 3. GAME MENEBAK ARTI & PINYIN (QUIZ MODULE)
  // ==========================================

  startQuiz() {
    const unit = this.getCurrentUnit();
    if (!unit) return;

    const rawQuizzes = unit.quizzes || [];
    const vocabList = unit.vocab || unit.vocabulary || [];

    let questions = [];

    // Format raw quizzes
    rawQuizzes.forEach(q => {
      questions.push({
        question: q.q,
        options: q.options,
        answer: q.answer,
        explanation: q.hint || "Pilihlah jawaban yang paling tepat."
      });
    });

    // Generate quizzes dari vocabulary jika belum cukup
    if (vocabList.length > 0) {
      vocabList.forEach(v => {
        const meaning = v.meaning || v.indonesian;
        const otherPinyins = vocabList.filter(x => x.hanzi !== v.hanzi).map(x => x.pinyin);
        const optionsPinyin = [v.pinyin, ...otherPinyins.slice(0, 3)];
        while (optionsPinyin.length < 4) optionsPinyin.push("lǎoshī", "hǎo", "dà", "zài");
        this.shuffleArray(optionsPinyin);

        questions.push({
          question: `Apa Pinyin yang tepat untuk karakter '<strong>${v.hanzi}</strong>'?`,
          options: optionsPinyin.slice(0, 4),
          answer: optionsPinyin.indexOf(v.pinyin),
          explanation: `Karakter '${v.hanzi}' dibaca '${v.pinyin}' (${meaning}).`
        });

        const otherMeanings = vocabList.filter(x => x.hanzi !== v.hanzi).map(x => x.meaning || x.indonesian);
        const optionsMeaning = [meaning, ...otherMeanings.slice(0, 3)];
        while (optionsMeaning.length < 4) optionsMeaning.push("Makan", "Minum", "Pergi", "Sekolah");
        this.shuffleArray(optionsMeaning);

        questions.push({
          question: `Apa arti Bahasa Indonesia dari '<strong>${v.hanzi}</strong>' (${v.pinyin})?`,
          options: optionsMeaning.slice(0, 4),
          answer: optionsMeaning.indexOf(meaning),
          explanation: `'${v.hanzi}' (${v.pinyin}) artinya adalah ${meaning}.`
        });
      });
    }

    this.shuffleArray(questions);
    this.quizState = {
      questions: questions.slice(0, 8),
      currentIndex: 0,
      score: 0,
      streak: 0
    };

    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const container = document.getElementById('quiz-arena-container');
    if (!container) return;

    const { questions, currentIndex, score, streak } = this.quizState;

    if (currentIndex >= questions.length) {
      const totalReward = score * 20;
      this.addBones(totalReward);

      this.completedUnits[`${this.currentBookId}_${this.currentUnitId}`] = true;
      this.saveState();
      this.renderUnitSelector();

      if (window.dinoAudio) window.dinoAudio.playFanfare();

      container.innerHTML = `
        <div class="quiz-result-card animate-pop">
          <div class="result-dino-avatar">🦖🎉</div>
          <h3>Luar Biasa, Petualang Dinosaurus!</h3>
          <p>Kamu menyelesaikan kuis Pelajaran ${this.currentUnitId} dengan skor:</p>
          <div class="result-score-badge">${score} / ${questions.length} Benar</div>
          <div class="result-reward-badge">+${totalReward} Tulang Dino 🦴 Diperoleh!</div>
          <div class="result-actions">
            <button class="btn-dino-primary" id="btn-quiz-retry">🔄 Main Lagi</button>
            <button class="btn-dino-secondary" id="btn-quiz-next-unit">➡️ Lanjut ke Pelajaran Berikutnya</button>
          </div>
        </div>
      `;

      document.getElementById('btn-quiz-retry')?.addEventListener('click', () => this.startQuiz());
      document.getElementById('btn-quiz-next-unit')?.addEventListener('click', () => {
        if (this.currentUnitId < 15) {
          this.selectUnit(this.currentUnitId + 1);
        } else if (this.currentBookId < 6) {
          this.currentBookId++;
          this.selectBook(this.currentBookId);
        }
      });
      return;
    }

    const q = questions[currentIndex];
    container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-header-bar">
          <span class="quiz-progress-text">Soal ${currentIndex + 1} dari ${questions.length}</span>
          <span class="quiz-streak-badge">🔥 Streak: ${streak}</span>
          <span class="quiz-score-badge">⭐ Skor: ${score * 20}</span>
        </div>
        <div class="quiz-question-box">
          <div class="quiz-question-text">${q.question}</div>
          <button class="btn-quiz-audio" id="btn-quiz-speak" title="Dengarkan Suara">🔊 Dengarkan</button>
        </div>
        <div class="quiz-options-grid">
          ${q.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-idx="${idx}">
              <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-feedback-box" id="quiz-feedback-box" style="display: none;"></div>
      </div>
    `;

    document.getElementById('btn-quiz-speak')?.addEventListener('click', () => {
      const match = q.question.match(/[\u4e00-\u9fa5]+/);
      if (match && window.dinoAudio) window.dinoAudio.speakMandarin(match[0]);
    });

    container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedIdx = parseInt(e.currentTarget.dataset.idx, 10);
        this.submitQuizAnswer(selectedIdx);
      });
    });
  }

  submitQuizAnswer(selectedIdx) {
    const { questions, currentIndex } = this.quizState;
    const q = questions[currentIndex];
    const isCorrect = selectedIdx === q.answer;

    const optButtons = document.querySelectorAll('.quiz-opt-btn');
    optButtons.forEach(btn => btn.disabled = true);

    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.style.display = 'block';

    if (isCorrect) {
      this.quizState.score++;
      this.quizState.streak++;
      if (optButtons[selectedIdx]) optButtons[selectedIdx].classList.add('correct');
      feedbackBox.className = 'quiz-feedback-box correct animate-bounce';
      feedbackBox.innerHTML = `🦕 <strong>Tepat Sekali!</strong> ${q.explanation} (+20 Tulang 🦴)`;

      if (window.dinoAudio) {
        window.dinoAudio.playCorrect();
        if (this.quizState.streak % 3 === 0) window.dinoAudio.playDinoRoar();
      }
    } else {
      this.quizState.streak = 0;
      if (optButtons[selectedIdx]) optButtons[selectedIdx].classList.add('wrong');
      if (optButtons[q.answer]) optButtons[q.answer].classList.add('correct');
      feedbackBox.className = 'quiz-feedback-box wrong';
      feedbackBox.innerHTML = `🦖 <strong>Ups, Kurang Tepat!</strong> Jawaban yang benar: <em>${q.options[q.answer]}</em>.<br>${q.explanation}`;

      if (window.dinoAudio) window.dinoAudio.playWrong();
    }

    setTimeout(() => {
      this.quizState.currentIndex++;
      this.renderQuizQuestion();
    }, 1800);
  }

  // ==========================================
  // 4. GAME MENCOCOKKAN GAMBAR & KALIMAT (MATCHING MODULE)
  // ==========================================

  startMatchingGame() {
    const unit = this.getCurrentUnit();
    const pairs = (unit && (unit.matchPairs || unit.matchingPairs)) || [
      { img: `assets/pdf_pages_hanyu${this.currentBookId}/page_06.png`, text: "你好 (Halo)" },
      { img: `assets/pdf_pages_hanyu${this.currentBookId}/page_07.png`, text: "老师好 (Halo Guru)" }
    ];

    const imageCards = pairs.map((p, idx) => ({ id: idx, image: p.img || p.image, text: p.text || p.hanzi }));
    const textCards = pairs.map((p, idx) => ({ id: idx, text: p.text || p.hanzi }));

    this.shuffleArray(imageCards);
    this.shuffleArray(textCards);

    this.matchingState = {
      pairs: pairs,
      imageCards: imageCards,
      textCards: textCards,
      selectedImage: null,
      selectedText: null,
      matchedPairs: [],
      matchedCount: 0
    };

    this.renderMatchingBoard();
  }

  renderMatchingBoard() {
    const container = document.getElementById('matching-arena-container');
    if (!container) return;

    const { imageCards, textCards, matchedPairs, pairs } = this.matchingState;

    if (matchedPairs.length >= pairs.length) {
      this.addBones(50);
      if (window.dinoAudio) window.dinoAudio.playFanfare();

      container.innerHTML = `
        <div class="matching-victory-card animate-pop">
          <div class="victory-icon">🦖⭐</div>
          <h3>Hebat! Semua Gambar dan Kalimat Berhasil Dicocokkan!</h3>
          <p>Pelajaran ${this.currentUnitId} berhasil kamu kuasai dengan sempurna.</p>
          <div class="result-reward-badge">+50 Tulang Dino 🦴 Didapatkan!</div>
          <div class="result-actions">
            <button class="btn-dino-primary" id="btn-rematch">🔄 Mainkan Lagi</button>
          </div>
        </div>
      `;
      document.getElementById('btn-rematch')?.addEventListener('click', () => this.startMatchingGame());
      return;
    }

    container.innerHTML = `
      <div class="matching-board">
        <div class="matching-column image-column">
          <h4>🖼️ Kartu Ilustrasi Buku Pelajaran</h4>
          <div class="cards-grid">
            ${imageCards.map(c => {
              const isMatched = matchedPairs.includes(c.id);
              const isSelected = this.matchingState.selectedImage === c.id;
              return `
                <div class="match-card img-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" data-type="image" data-id="${c.id}">
                  <img src="${c.image}" alt="Gambar Pelajaran" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect fill=\\'%2310b981\\' width=\\'100\\' height=\\'100\\'/><text fill=\\'white\\' x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>🦖</text></svg>'" />
                  ${isMatched ? '<span class="match-check">✅ Selesai</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="matching-divider">
          <div class="divider-dino">🦕 ➔ 🦖</div>
        </div>

        <div class="matching-column text-column">
          <h4>📜 Cocokkan Kalimat Mandarin</h4>
          <div class="cards-grid">
            ${textCards.map(c => {
              const isMatched = matchedPairs.includes(c.id);
              const isSelected = this.matchingState.selectedText === c.id;
              return `
                <div class="match-card text-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" data-type="text" data-id="${c.id}">
                  <div class="match-text-content">${c.text}</div>
                  ${isMatched ? '<span class="match-check">✅</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.match-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const type = e.currentTarget.dataset.type;
        const id = parseInt(e.currentTarget.dataset.id, 10);
        this.selectMatchCard(type, id);
      });
    });
  }

  selectMatchCard(type, id) {
    if (this.matchingState.matchedPairs.includes(id)) return;

    if (window.dinoAudio) window.dinoAudio.playTap();

    if (type === 'image') {
      this.matchingState.selectedImage = id;
    } else {
      this.matchingState.selectedText = id;
      const pair = this.matchingState.pairs[id];
      if (pair && window.dinoAudio) {
        const cleanHanzi = (pair.text || pair.hanzi || '').split('(')[0].trim();
        window.dinoAudio.speakMandarin(cleanHanzi);
      }
    }

    this.renderMatchingBoard();

    if (this.matchingState.selectedImage !== null && this.matchingState.selectedText !== null) {
      if (this.matchingState.selectedImage === this.matchingState.selectedText) {
        this.matchingState.matchedPairs.push(this.matchingState.selectedImage);
        this.matchingState.selectedImage = null;
        this.matchingState.selectedText = null;

        if (window.dinoAudio) {
          window.dinoAudio.playCorrect();
          window.dinoAudio.playSparkle();
        }
        setTimeout(() => this.renderMatchingBoard(), 300);
      } else {
        if (window.dinoAudio) window.dinoAudio.playWrong();
        setTimeout(() => {
          this.matchingState.selectedImage = null;
          this.matchingState.selectedText = null;
          this.renderMatchingBoard();
        }, 600);
      }
    }
  }

  // ==========================================
  // 5. SARANG PENETASAN TELUR DINOSAURUS (HATCHERY MODAL)
  // ==========================================

  openHatcheryModal() {
    const modal = document.getElementById('hatchery-modal');
    if (!modal) return;
    modal.classList.add('active');

    const container = document.getElementById('hatchery-grid');
    if (!container) return;

    const allDinos = (window.HANYU_DATABASE && window.HANYU_DATABASE.dinos) || [];

    container.innerHTML = allDinos.map(dino => {
      const isHatched = this.hatchedDinos.includes(dino.id);
      const canHatch = !isHatched && this.bones >= dino.requiredBones;
      const avatar = dino.emoji || dino.icon || '🦖';
      const desc = dino.description || dino.desc || '';

      return `
        <div class="dino-incubator-card ${isHatched ? 'hatched' : 'locked'}">
          <div class="incubator-icon-box">
            ${isHatched ? `<span class="dino-hatched-avatar">${avatar}</span>` : `<span class="dino-egg-avatar">🥚</span>`}
          </div>
          <div class="incubator-info">
            <h4>${dino.name}</h4>
            <span class="dino-species">${dino.species}</span>
            <p class="dino-desc">${desc}</p>
            <div class="incubator-status">
              ${isHatched ? `
                <span class="status-badge hatched">🦖 Telah Menetas!</span>
              ` : canHatch ? `
                <button class="btn-hatch-egg" data-dino-id="${dino.id}">🥚 Tetaskan Sekarang!</button>
              ` : `
                <span class="status-badge locked">🔒 Butuh ${dino.requiredBones} Tulang (Kurang ${dino.requiredBones - this.bones})</span>
              `}
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.btn-hatch-egg').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dinoId = e.currentTarget.dataset.dinoId;
        this.hatchEgg(dinoId);
      });
    });
  }

  hatchEgg(dinoId) {
    const dino = window.HANYU_DATABASE && window.HANYU_DATABASE.dinos.find(d => d.id === dinoId);
    if (!dino) return;

    if (window.dinoAudio) {
      window.dinoAudio.playEggCrack();
      setTimeout(() => window.dinoAudio.playDinoRoar(), 400);
      setTimeout(() => window.dinoAudio.playFanfare(), 800);
    }

    this.hatchedDinos.push(dinoId);
    this.saveState();
    this.checkEggHatchAvailable();
    this.openHatcheryModal();
  }

  openStrokeRefModal() {
    const modal = document.getElementById('stroke-ref-modal');
    if (!modal) return;
    modal.classList.add('active');

    const container = document.getElementById('stroke-ref-content');
    if (!container) return;

    const strokes = (window.HANYU_DATABASE && window.HANYU_DATABASE.strokeReference) || [];
    const rules = (window.HANYU_DATABASE && window.HANYU_DATABASE.strokeRules) || [];

    container.innerHTML = `
      <div class="stroke-ref-section-title">
        <span>✍️</span> 1. Tabel 28 Nama Guratan Hanzi Resmi (汉字笔画名称表)
      </div>
      <div class="stroke-ref-grid">
        ${strokes.map((s, idx) => `
          <div class="stroke-ref-card" title="${s.desc}">
            <div class="stroke-ref-symbol">${s.stroke}</div>
            <div class="stroke-ref-info">
              <div class="stroke-ref-name">${s.name}</div>
              <div class="stroke-ref-example">Contoh: <strong>${s.example}</strong> • ${s.desc}</div>
            </div>
            <button class="stroke-ref-audio-btn" data-audio="${s.example}" title="Dengarkan Contoh Huruf">🔊</button>
          </div>
        `).join('')}
      </div>

      <div class="stroke-ref-section-title">
        <span>📐</span> 2. Tujuh Aturan Dasar Urutan Menulis Hanzi (汉字笔顺基本规则)
      </div>
      <div class="stroke-rules-grid">
        ${rules.map((r, idx) => `
          <div class="stroke-rule-card">
            <div class="stroke-rule-title">${idx + 1}. ${r.rule}</div>
            <div class="stroke-rule-examples">
              ${r.examples.map(ex => `<span>👉 ${ex}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.stroke-ref-audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.currentTarget.dataset.audio;
        if (text && window.dinoAudio) window.dinoAudio.speakMandarin(text);
      });
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

// Inisialisasi Aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  window.app = new HanYuApp();
});
