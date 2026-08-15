// App Controller: Main Logic, Router, Game Engines & Dinosaur Hatchery

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
      selectedImage: null,
      selectedText: null,
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
    const allDinos = window.HANYU_DATABASE.dinos;
    const canHatch = allDinos.some(d => !this.hatchedDinos.includes(d.id) && this.bones >= d.requiredBones);
    const badge = document.getElementById('hatchery-badge');
    if (badge) {
      badge.style.display = canHatch ? 'flex' : 'none';
      if (canHatch) badge.classList.add('animate-ping-slow');
    }
  }

  getCurrentBook() {
    return window.HANYU_DATABASE.books.find(b => b.id === this.currentBookId) || window.HANYU_DATABASE.books[0];
  }

  getCurrentUnit() {
    const book = this.getCurrentBook();
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
      this.strokeEngine = new StrokeEngine('tianzige-canvas');
      this.updateStrokeModule();
    }, 100);

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

    container.innerHTML = window.HANYU_DATABASE.books.map(book => `
      <button class="book-chip ${book.id === this.currentBookId ? 'active' : ''}" data-book-id="${book.id}">
        <span class="book-dino-avatar">${book.dinoGuide.avatar}</span>
        <div class="book-info">
          <span class="book-title">Han Yu ${book.id}</span>
          <span class="book-grade">${book.grade}</span>
        </div>
      </button>
    `).join('');

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
    container.innerHTML = book.units.map(unit => {
      const isCompleted = this.completedUnits[`${book.id}_${unit.id}`];
      return `
        <button class="unit-chip ${unit.id === this.currentUnitId ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-unit-id="${unit.id}">
          <span class="unit-num">Unit ${unit.id}</span>
          <span class="unit-name">${unit.title.split('：')[1] || unit.title}</span>
          ${isCompleted ? '<span class="unit-star">⭐</span>' : ''}
        </button>
      `;
    }).join('');

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

    const titleEl = document.getElementById('unit-header-title');
    if (titleEl) titleEl.textContent = unit.title;

    const pinyinEl = document.getElementById('unit-header-pinyin');
    if (pinyinEl) pinyinEl.textContent = unit.pinyin;

    const meaningEl = document.getElementById('unit-header-meaning');
    if (meaningEl) meaningEl.textContent = unit.meaning;

    const introEl = document.getElementById('unit-header-intro');
    if (introEl) introEl.textContent = unit.intro;

    const guideAvatar = document.getElementById('dino-guide-avatar');
    if (guideAvatar) guideAvatar.textContent = book.dinoGuide.avatar;

    const guideName = document.getElementById('dino-guide-name');
    if (guideName) guideName.textContent = book.dinoGuide.name;

    const guideDesc = document.getElementById('dino-guide-desc');
    if (guideDesc) guideDesc.textContent = book.dinoGuide.desc;
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
    this.isAutoPlayingStory = false;
    const playAllBtn = document.getElementById('btn-play-all-story');
    if (playAllBtn) playAllBtn.innerHTML = `<span>▶️</span> Putar Seluruh Cerita`;

    container.innerHTML = unit.story.map((item, idx) => {
      // Split characters for ruby pinyin annotation
      const rubyHtml = this.generateRubyHtml(item.hanzi, item.pinyin);
      return `
        <div class="story-card" id="story-card-${idx}">
          <div class="story-card-left">
            <button class="story-audio-btn" data-index="${idx}" title="Dengarkan pelafalan">
              🔊
            </button>
            <span class="story-index">${idx + 1}</span>
          </div>
          <div class="story-card-content">
            <div class="sentence-mandarin">${rubyHtml}</div>
            <div class="sentence-meaning" style="display: ${this.showMeaning ? 'block' : 'none'}">${item.indonesian}</div>
          </div>
        </div>
      `;
    }).join('');

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
    // Sederhana ruby: render pinyin di atas kalimat jika pinyin tersedia
    return `
      <div class="ruby-sentence">
        <div class="ruby-pinyin" style="display: ${this.showPinyin ? 'block' : 'none'}">${pinyin}</div>
        <div class="ruby-hanzi">${hanzi}</div>
      </div>
    `;
  }

  playSentence(index, onComplete = null) {
    const unit = this.getCurrentUnit();
    if (!unit.story[index]) return;

    const sentence = unit.story[index];
    const card = document.getElementById(`story-card-${index}`);

    // Highlight visual
    document.querySelectorAll('.story-card').forEach(c => c.classList.remove('playing'));
    if (card) {
      card.classList.add('playing');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

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

  toggleAutoPlayStory() {
    const unit = this.getCurrentUnit();
    const btn = document.getElementById('btn-play-all-story');

    if (this.isAutoPlayingStory) {
      this.isAutoPlayingStory = false;
      window.dinoAudio.stopSpeech();
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
    const unit = this.getCurrentUnit();
    if (!this.isAutoPlayingStory || this.autoPlayIndex >= unit.story.length) {
      this.isAutoPlayingStory = false;
      const btn = document.getElementById('btn-play-all-story');
      if (btn) btn.innerHTML = `<span>▶️</span> Putar Seluruh Cerita`;
      this.addBones(10); // Reward mendengarkan seluruh cerita!
      return;
    }

    this.playSentence(this.autoPlayIndex, () => {
      this.autoPlayIndex++;
      if (this.isAutoPlayingStory) {
        setTimeout(() => this.autoPlayNextSentence(), 400);
      }
    });
  }

  renderOriginalPageGallery() {
    const container = document.getElementById('story-page-gallery');
    if (!container) return;

    const unit = this.getCurrentUnit();
    if (unit.matchingPairs && unit.matchingPairs.length > 0) {
      container.innerHTML = `
        <div class="gallery-title">🦕 Ilustrasi Asli Buku Pelajaran Han Yu</div>
        <div class="gallery-row">
          ${unit.matchingPairs.map(p => `
            <div class="gallery-item" title="${p.hanzi} - ${p.meaning}">
              <img src="${p.image}" alt="${p.hanzi}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect fill=\\'%2310b981\\' width=\\'100\\' height=\\'100\\'/><text fill=\\'white\\' x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>🦕</text></svg>'" />
              <span>${p.hanzi}</span>
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
    const vocabList = unit.vocabulary || [];
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
      this.strokeEngine.setVocab(vocab);
    }

    // Update Detail Info
    const infoHanzi = document.getElementById('stroke-detail-hanzi');
    if (infoHanzi) infoHanzi.textContent = vocab.hanzi;

    const infoPinyin = document.getElementById('stroke-detail-pinyin');
    if (infoPinyin) infoPinyin.textContent = vocab.pinyin;

    const infoMeaning = document.getElementById('stroke-detail-meaning');
    if (infoMeaning) infoMeaning.textContent = vocab.indonesian;

    const infoCount = document.getElementById('stroke-detail-count');
    if (infoCount) infoCount.textContent = `${vocab.strokeCount} Guratan`;

    const infoNames = document.getElementById('stroke-detail-names');
    if (infoNames) {
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
        window.dinoAudio.speakMandarin(vocab.hanzi, 0.85);
      };
    }
  }

  // ==========================================
  // 3. GAME MENEBAK ARTI & PINYIN (QUIZ MODULE)
  // ==========================================

  startQuiz() {
    const unit = this.getCurrentUnit();
    const rawQuizzes = unit.quizzes || [];

    // Jika kuis bawaan kurang, otomatis generate kuis dari vocabulary unit
    let questions = [...rawQuizzes];
    if (unit.vocabulary && unit.vocabulary.length > 0) {
      unit.vocabulary.forEach(v => {
        // Quiz Pinyin
        const otherPinyins = unit.vocabulary.filter(x => x.hanzi !== v.hanzi).map(x => x.pinyin);
        const optionsPinyin = [v.pinyin, ...otherPinyins.slice(0, 3)];
        while (optionsPinyin.length < 4) optionsPinyin.push("lǎoshī", "hǎo", "dà", "zài");
        this.shuffleArray(optionsPinyin);

        questions.push({
          question: `Apa Pinyin yang tepat untuk karakter '<strong>${v.hanzi}</strong>'?`,
          options: optionsPinyin.slice(0, 4),
          answer: optionsPinyin.indexOf(v.pinyin),
          explanation: `Karakter '${v.hanzi}' dibaca '${v.pinyin}' (${v.indonesian}).`
        });

        // Quiz Arti
        const otherMeanings = unit.vocabulary.filter(x => x.hanzi !== v.hanzi).map(x => x.indonesian);
        const optionsMeaning = [v.indonesian, ...otherMeanings.slice(0, 3)];
        while (optionsMeaning.length < 4) optionsMeaning.push("Makan", "Minum", "Pergi", "Sekolah");
        this.shuffleArray(optionsMeaning);

        questions.push({
          question: `Apa arti Bahasa Indonesia dari '<strong>${v.hanzi}</strong>' (${v.pinyin})?`,
          options: optionsMeaning.slice(0, 4),
          answer: optionsMeaning.indexOf(v.indonesian),
          explanation: `'${v.hanzi}' (${v.pinyin}) artinya adalah ${v.indonesian}.`
        });
      });
    }

    this.shuffleArray(questions);
    this.quizState = {
      questions: questions.slice(0, 8), // 8 soal per sesi
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
      // Sesi Kuis Selesai
      const totalReward = score * 20;
      this.addBones(totalReward);

      // Tandai unit selesai
      this.completedUnits[`${this.currentBookId}_${this.currentUnitId}`] = true;
      this.saveState();
      this.renderUnitSelector();

      if (window.dinoAudio) window.dinoAudio.playFanfare();

      container.innerHTML = `
        <div class="quiz-result-card animate-pop">
          <div class="result-dino-avatar">🦖🎉</div>
          <h3>Luar Biasa, Petualang Dinosaurus!</h3>
          <p>Kamu menyelesaikan kuis Unit ${this.currentUnitId} dengan skor:</p>
          <div class="result-score-badge">${score} / ${questions.length} Benar</div>
          <div class="result-reward-badge">+${totalReward} Tulang Dino 🦴 Diperoleh!</div>
          <div class="result-actions">
            <button class="btn-dino-primary" id="btn-quiz-retry">🔄 Main Lagi</button>
            <button class="btn-dino-secondary" id="btn-quiz-next-unit">➡️ Lanjut ke Unit Berikutnya</button>
          </div>
        </div>
      `;

      document.getElementById('btn-quiz-retry')?.addEventListener('click', () => this.startQuiz());
      document.getElementById('btn-quiz-next-unit')?.addEventListener('click', () => {
        if (this.currentUnitId < 12) {
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
      // Ekstrak teks hanzi dari pertanyaan
      const match = q.question.match(/[\u4e00-\u9fa5]+/);
      if (match) window.dinoAudio.speakMandarin(match[0]);
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
    const pairs = unit.matchingPairs && unit.matchingPairs.length >= 3 ? unit.matchingPairs : [
      { image: "assets/hanyu1_clean/img_002.jpg", hanzi: "一 (Yī)", meaning: "Satu" },
      { image: "assets/hanyu1_clean/img_003.jpg", hanzi: "二 (Èr)", meaning: "Dua" },
      { image: "assets/hanyu1_clean/img_004.jpg", hanzi: "三 (Sān)", meaning: "Tiga" }
    ];

    const imageCards = pairs.map((p, idx) => ({ id: idx, image: p.image, hanzi: p.hanzi }));
    const textCards = pairs.map((p, idx) => ({ id: idx, hanzi: p.hanzi, meaning: p.meaning, pinyin: p.pinyin }));

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
      // Selesai Game Mencocokkan
      this.addBones(50);
      if (window.dinoAudio) window.dinoAudio.playFanfare();

      container.innerHTML = `
        <div class="matching-victory-card animate-pop">
          <div class="victory-icon">🦖⭐</div>
          <h3>Hebat! Semua Gambar dan Kalimat Berhasil Dicocokkan!</h3>
          <p>Unit ${this.currentUnitId} berhasil kamu kuasai dengan sempurna.</p>
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
          <h4>🖼️ Pilih Kartu Gambar</h4>
          <div class="cards-grid">
            ${imageCards.map(c => {
              const isMatched = matchedPairs.includes(c.id);
              const isSelected = this.matchingState.selectedImage === c.id;
              return `
                <div class="match-card img-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" data-type="image" data-id="${c.id}">
                  <img src="${c.image}" alt="${c.hanzi}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect fill=\\'%2310b981\\' width=\\'100\\' height=\\'100\\'/><text fill=\\'white\\' x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>🦖</text></svg>'" />
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
          <h4>📜 Cocokkan Kalimat / Karakter</h4>
          <div class="cards-grid">
            ${textCards.map(c => {
              const isMatched = matchedPairs.includes(c.id);
              const isSelected = this.matchingState.selectedText === c.id;
              return `
                <div class="match-card text-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" data-type="text" data-id="${c.id}">
                  <div class="match-text-hanzi">${c.hanzi}</div>
                  <div class="match-text-pinyin">${c.pinyin || ''}</div>
                  <div class="match-text-meaning">${c.meaning || ''}</div>
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
      // Ucapkan suara kalimat Mandarin yang diklik
      const pair = this.matchingState.pairs[id];
      if (pair && window.dinoAudio) {
        window.dinoAudio.speakMandarin(pair.hanzi);
      }
    }

    this.renderMatchingBoard();

    // Jika keduanya sudah dipilih, periksa kecocokan
    if (this.matchingState.selectedImage !== null && this.matchingState.selectedText !== null) {
      if (this.matchingState.selectedImage === this.matchingState.selectedText) {
        // Cocok!
        this.matchingState.matchedPairs.push(this.matchingState.selectedImage);
        this.matchingState.selectedImage = null;
        this.matchingState.selectedText = null;

        if (window.dinoAudio) {
          window.dinoAudio.playCorrect();
          window.dinoAudio.playSparkle();
        }
        setTimeout(() => this.renderMatchingBoard(), 300);
      } else {
        // Salah
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

    const allDinos = window.HANYU_DATABASE.dinos;

    container.innerHTML = allDinos.map(dino => {
      const isHatched = this.hatchedDinos.includes(dino.id);
      const canHatch = !isHatched && this.bones >= dino.requiredBones;

      return `
        <div class="dino-incubator-card ${isHatched ? 'hatched' : 'locked'}">
          <div class="incubator-icon-box">
            ${isHatched ? `<span class="dino-hatched-avatar">${dino.icon}</span>` : `<span class="dino-egg-avatar">🥚</span>`}
          </div>
          <div class="incubator-info">
            <h4>${dino.name}</h4>
            <span class="dino-species">${dino.species}</span>
            <p class="dino-desc">${dino.desc}</p>
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
    const dino = window.HANYU_DATABASE.dinos.find(d => d.id === dinoId);
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
