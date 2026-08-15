// =========================================================================
// MAIN CONTROLLER & APPLICATION BOOTSTRAP (HAN YU 1 - HAN YU 12)
// Koordinasi Pembelajaran Terpadu:
// 1. Cerita & Audio Pelan Khusus SD
// 2. Animasi & Game Latihan Guratan (3-6x)
// 3. Game Mencocokkan Gambar & Kalimat
// 4. Soal Latihan Pilihan Berganda Tipe YCT 2 (KKM 70)
// =========================================================================

let currentBookId = 1;
let currentUnitId = 1;
let currentVocabIndex = 0;
let currentActiveTab = 'story';

let showPinyin = true;
let showMeaning = true;
let currentFontSize = 'medium'; // 'small', 'medium', 'large', 'xlarge'

let dinoWriter = null;
let dinoMatchGame = null;
let dinoQuiz = null;

// Inisialisasi Saat Dokumen Siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  // 1. Inisialisasi Sub-Engines
  dinoWriter = new DinoStrokeWriter('stroke-canvas', 'stroke-container');
  dinoMatchGame = new DinoMatchingGame('matching-container');
  dinoQuiz = new DinoQuizEngine('quiz-container');

  window.dinoWriter = dinoWriter;
  window.dinoMatchGame = dinoMatchGame;
  window.dinoQuiz = dinoQuiz;

  // 2. Parse URL Params jika ada (?book=X&unit=Y&tab=Z)
  const urlParams = new URLSearchParams(window.location.search);
  const paramBook = parseInt(urlParams.get('book'));
  const paramUnit = parseInt(urlParams.get('unit'));
  const paramTab = urlParams.get('tab');

  if (paramBook && paramBook >= 1 && paramBook <= 12) currentBookId = paramBook;
  if (paramUnit && paramUnit >= 1 && paramUnit <= 15) currentUnitId = paramUnit;
  if (paramTab && ['story', 'strokes', 'matching', 'quiz'].includes(paramTab)) currentActiveTab = paramTab;

  // 3. Render Komponen Utama
  renderBookSelector();
  loadBookAndUnit(currentBookId, currentUnitId);

  // 4. Inisialisasi Event Handlers & Tab Navigation
  initTabNavigation();
  initAudioControls();
  switchTab(currentActiveTab);

  // 5. Handle Window Resize untuk Kanvas
  window.addEventListener('resize', () => {
    if (dinoWriter) dinoWriter.resizeCanvas();
  });
}

// Render Daftar Buku Han Yu 1 - 12
function renderBookSelector() {
  const container = document.getElementById('book-selector-grid');
  if (!container) return;

  container.innerHTML = HAN_YU_CURRICULUM.books.map(b => `
    <button class="book-card-btn ${b.id === currentBookId ? 'active' : ''}" onclick="selectBook(${b.id})">
      <span class="book-dino-avatar">${b.dinoGuide.avatar}</span>
      <div class="book-info">
        <span class="book-title">${b.title}</span>
        <span class="book-level">${b.dinoGuide.name}</span>
      </div>
    </button>
  `).join('');
}

// Pilih Buku Han Yu
function selectBook(bookId) {
  currentBookId = bookId;
  currentUnitId = 1;
  currentVocabIndex = 0;
  
  if (window.dinoAudio) dinoAudio.playEggCrackSound();
  renderBookSelector();
  loadBookAndUnit(currentBookId, currentUnitId);
}

// Render Unit Carousel / Grid (15 Unit per Buku)
function renderUnitList(book) {
  const container = document.getElementById('unit-selector-list');
  if (!container) return;

  container.innerHTML = book.units.map(u => `
    <button class="unit-pill-btn ${u.id === currentUnitId ? 'active' : ''}" onclick="selectUnit(${u.id})">
      <span class="u-num">Unit ${u.id}</span>
      <span class="u-title">${u.title.replace(/第\d+课\s*/, '')}</span>
    </button>
  `).join('');
}

// Pilih Unit Tertentu
function selectUnit(unitId) {
  currentUnitId = unitId;
  currentVocabIndex = 0;
  if (window.dinoAudio) dinoAudio.playEggCrackSound();
  loadBookAndUnit(currentBookId, currentUnitId);
}

// Load Data Buku dan Unit ke Semua Tab
function loadBookAndUnit(bookId, unitId) {
  const book = getBookById(bookId);
  const unit = getUnitByBookAndUnitId(bookId, unitId);

  // Update Header Banner Maskot Dinosaurus
  const mascotAvatar = document.getElementById('guide-avatar');
  const mascotDesc = document.getElementById('guide-desc');
  const unitHeaderTitle = document.getElementById('current-unit-title');
  const unitHeaderPinyin = document.getElementById('current-unit-pinyin');
  const unitHeaderMeaning = document.getElementById('current-unit-meaning');

  if (mascotAvatar) mascotAvatar.textContent = book.dinoGuide.avatar;
  if (mascotDesc) mascotDesc.textContent = book.dinoGuide.desc;
  if (unitHeaderTitle) unitHeaderTitle.textContent = `${book.title} - ${unit.title}`;
  if (unitHeaderPinyin) unitHeaderPinyin.textContent = unit.pinyin;
  if (unitHeaderMeaning) unitHeaderMeaning.textContent = `Arti: ${unit.meaning}`;

  // Render Carousel Unit
  renderUnitList(book);

  // 1. Render Tab Cerita Audio
  renderStoryTab(unit);

  // 2. Render Tab Guratan
  renderStrokeTab(unit);

  // 3. Render Tab Matching Game
  if (dinoMatchGame) {
    dinoMatchGame.loadUnit(unit);
  }

  // 4. Render Tab Kuis YCT 2
  if (dinoQuiz) {
    dinoQuiz.loadUnit(unit, book.title);
  }
}

// -------------------------------------------------------------------------
// TAB 1: CERITA & AUDIO MEMBACA LENGKAP KHUSUS ANAK SD
// -------------------------------------------------------------------------
function renderStoryTab(unit) {
  const container = document.getElementById('story-content-container');
  if (!container || !unit.story) return;

  const sentences = unit.story.sentences || [];

  container.innerHTML = `
    <div class="story-container-card">
      <div class="story-header-bar">
        <div class="story-header-left">
          <h3>📖 Teks Cerita & Percakapan: ${unit.title}</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Dengarkan narasi audio dengan kecepatan lambat ramah anak SD.</p>
        </div>

        <div class="story-audio-actions">
          <button class="dino-btn primary small" onclick="playFullStorySlow()">
            ▶️ Putar Seluruh Cerita (Audio Pelan)
          </button>
          <button class="dino-btn secondary small" onclick="dinoAudio.stopSpeaking()">
            ⏹️ Berhenti
          </button>
          <button class="dino-btn secondary small" onclick="togglePinyinDisplay()">
            🔤 ${showPinyin ? 'Sembunyikan Pinyin' : 'Tampilkan Pinyin'}
          </button>
          <button class="dino-btn secondary small" onclick="toggleMeaningDisplay()">
            🇮🇩 ${showMeaning ? 'Sembunyikan Arti' : 'Tampilkan Arti'}
          </button>
        </div>
      </div>

      <div class="story-sentences-list">
        ${sentences.map((s, idx) => `
          <div class="sentence-row-card" id="sentence-card-${idx}">
            <div class="sentence-num-badge">${idx + 1}</div>
            <div class="sentence-text-group">
              <div class="sentence-hanzi ${currentFontSize}">${s.hanzi}</div>
              <div class="sentence-pinyin ${showPinyin ? '' : 'hidden-text'}">${s.pinyin}</div>
              <div class="sentence-indonesian ${showMeaning ? '' : 'hidden-text'}">${s.indonesian}</div>
            </div>
            <button class="sentence-audio-btn" onclick="playSentenceByIndex(${idx})" title="Dengarkan kalimat ini">
              🔊
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function playFullStorySlow() {
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  if (!unit || !unit.story || !unit.story.sentences) return;

  if (window.dinoAudio) {
    dinoAudio.getAudioContext();
    const fullHanziText = unit.story.sentences.map(s => s.hanzi).join('，');
    dinoAudio.speakMandarin(fullHanziText, {
      rate: dinoAudio.speechRate,
      onStart: () => {
        document.querySelectorAll('.sentence-row-card').forEach(el => el.classList.remove('speaking-highlight'));
      }
    });
  }
}

function playSentenceByIndex(index) {
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  if (!unit || !unit.story || !unit.story.sentences[index]) return;
  const s = unit.story.sentences[index];

  document.querySelectorAll('.sentence-row-card').forEach(el => el.classList.remove('speaking-highlight'));
  const row = document.getElementById(`sentence-card-${index}`);
  if (row) row.classList.add('speaking-highlight');

  if (window.dinoAudio) {
    dinoAudio.getAudioContext();
    dinoAudio.speakMandarin(s.hanzi, {
      rate: dinoAudio.speechRate,
      onEnd: () => {
        if (row) row.classList.remove('speaking-highlight');
      }
    });
  }
}

function togglePinyinDisplay() {
  showPinyin = !showPinyin;
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  renderStoryTab(unit);
}

function toggleMeaningDisplay() {
  showMeaning = !showMeaning;
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  renderStoryTab(unit);
}

// -------------------------------------------------------------------------
// TAB 2: GURATAN & KANVAS LATIHAN 3-6X REPETISI
// -------------------------------------------------------------------------
function renderStrokeTab(unit) {
  const vocabSelector = document.getElementById('vocab-stroke-selector');
  if (!vocabSelector || !unit.vocab || unit.vocab.length === 0) return;

  vocabSelector.innerHTML = unit.vocab.map((v, idx) => `
    <button class="vocab-tab-btn ${idx === currentVocabIndex ? 'active' : ''}" onclick="selectStrokeVocab(${idx})">
      <span class="v-hanzi">${v.hanzi}</span>
      <span class="v-pinyin">${v.pinyin}</span>
    </button>
  `).join('');

  if (dinoWriter && unit.vocab[currentVocabIndex]) {
    dinoWriter.loadVocab(unit.vocab[currentVocabIndex]);
  }
}

function selectStrokeVocab(idx) {
  currentVocabIndex = idx;
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  renderStrokeTab(unit);
}

function selectNextVocabInApp() {
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  if (unit && unit.vocab && currentVocabIndex < unit.vocab.length - 1) {
    currentVocabIndex++;
  } else {
    currentVocabIndex = 0;
  }
  renderStrokeTab(unit);
}

// -------------------------------------------------------------------------
// TAB NAVIGATION & SPEED CONTROLS
// -------------------------------------------------------------------------
function switchTab(tabId) {
  currentActiveTab = tabId;

  // Update tab buttons
  document.querySelectorAll('.dino-tab-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Update panels
  document.querySelectorAll('.activity-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-panel-${tabId}`);
  });

  if (tabId === 'strokes' && dinoWriter) {
    setTimeout(() => dinoWriter.resizeCanvas(), 50);
  }
}

function initTabNavigation() {
  document.querySelectorAll('.dino-tab-item').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.dinoAudio) dinoAudio.playEggCrackSound();
      switchTab(btn.getAttribute('data-tab'));
    });
  });
}

function initAudioControls() {
  const speedSelect = document.getElementById('tts-speed-selector');
  if (speedSelect && window.dinoAudio) {
    speedSelect.value = dinoAudio.speechRate.toString();
    speedSelect.addEventListener('change', (e) => {
      dinoAudio.speechRate = parseFloat(e.target.value);
    });
  }
}

// Modal Berbagi Halaman Murid
function openShareModalForCurrent() {
  const shareUrl = `student.html?book=${currentBookId}&unit=${currentUnitId}&tab=${currentActiveTab}`;
  const fullUrl = window.location.origin + window.location.pathname.replace('index.html', '') + shareUrl;

  const modal = document.createElement('div');
  modal.id = 'share-modal-dynamic';
  modal.className = 'win-modal show';
  modal.innerHTML = `
    <div class="win-modal-box share-modal-box">
      <div style="font-size: 3rem; margin-bottom: 8px;">🔗🦖</div>
      <h2>Bagikan Materi ke Murid</h2>
      <p style="color: #4b5563; font-size: 0.95rem;">Tautan langsung membuka materi Han Yu ${currentBookId} Unit ${currentUnitId}.</p>
      
      <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 12px; margin-bottom: 20px;">
        <input type="text" value="${fullUrl}" style="width: 100%; border: none; background: transparent; font-weight: 700; color: #1e293b;" readonly>
      </div>

      <div class="modal-buttons-group">
        <a href="${shareUrl}" target="_blank" class="dino-btn primary">
          Buka Tampilan Murid Sekarang 🚀
        </a>
        <button class="dino-btn secondary" onclick="document.getElementById('share-modal-dynamic').remove()">
          Tutup
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}
