using System;
using System.IO;
using System.Text;

class BuildHtml {
    static void Main() {
        string css = File.ReadAllText(@"c:\HAN YU 1-6\css\style.css", Encoding.UTF8);

        string html = @"<!DOCTYPE html>
<html lang=""id"">
<head>
  <meta charset=""UTF-8"" />
  <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"" />
  <title>Petualangan Han Yu 汉语 1-6 • Buku Pelajaran Digital Interaktif</title>
  <meta name=""description"" content=""Website Pembelajaran Mandiri Bahasa Mandarin Han Yu 1 sampai Han Yu 6 Terlengkap 100% Sesuai Buku Asli."" />
  <link rel=""preconnect"" href=""https://fonts.googleapis.com"" />
  <link rel=""preconnect"" href=""https://fonts.gstatic.com"" crossorigin />
  <link href=""https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700;900&family=Poppins:wght@400;500;600;700;800&family=ZCOOL+KuaiLe&display=swap"" rel=""stylesheet"" />
  <style>
" + css + @"
  </style>
  <link rel=""stylesheet"" href=""css/style.css"" />
</head>
<body>

  <!-- Background Prehistoric Jungle Glow -->
  <div class=""bg-jungle-decor""></div>

  <div class=""app-container"">

    <!-- 1. NAVBAR DINOSAURUS -->
    <header class=""dino-navbar"">
      <div class=""brand-box"">
        <span class=""brand-dino-icon"">🦖</span>
        <div>
          <h1 class=""brand-title"">Petualangan Han Yu 汉语</h1>
          <p class=""brand-subtitle"">Buku Teks Resmi Han Yu 1 s/d 6 • Beijing Chinese Language College</p>
        </div>
      </div>

      <div class=""nav-actions"">
        <!-- Bone Bank Counter -->
        <div class=""bone-bank"" title=""Koleksi Tulang Dino dari menyelesaikan tugas"">
          <span class=""bone-icon"">🦴</span>
          <span id=""bone-counter"">0</span>
          <small>Tulang</small>
        </div>

        <!-- Stroke Reference Modal Trigger -->
        <button class=""btn-nav-action btn-stroke-ref"" id=""btn-open-stroke-ref"" title=""Lihat Tabel 28 Guratan & 7 Aturan Urutan Hanzi Resmi"">
          <span>📜</span> Tabel 28 Guratan
        </button>

        <!-- Incubator Modal Trigger -->
        <button class=""btn-nav-action btn-hatchery"" id=""btn-open-hatchery"" title=""Buka Sarang Telur Dinosaurus"">
          <span>🥚</span> Sarang Dino
          <span class=""hatchery-badge-count"" id=""hatchery-badge"" style=""display: none;"">!</span>
        </button>
      </div>
    </header>

    <!-- 2. CONTROL NAVIGATOR BAR (BUKU & PELAJARAN) -->
    <section class=""control-navigator-bar"">
      <!-- Pilihan Buku (Chips Horizontal Kompak) -->
      <div class=""books-quick-row"" id=""book-selector-container"">
        <!-- Diisi otomatis oleh JavaScript -->
      </div>

      <!-- Quick Lesson Picker & Quick Nav -->
      <div class=""lesson-picker-bar"">
        <div class=""lesson-dropdown-wrapper"">
          <label for=""lesson-select-dropdown"">📖 Pilih Pelajaran (15 Bab):</label>
          <select id=""lesson-select-dropdown"" class=""lesson-select-dropdown"">
            <!-- Diisi otomatis oleh JavaScript -->
          </select>
        </div>

        <div class=""lesson-nav-buttons"">
          <button class=""btn-step-nav"" id=""btn-prev-lesson"" title=""Pelajaran Sebelumnya"">◀ Bab Sebelumnya</button>
          <span class=""current-lesson-indicator"" id=""current-lesson-indicator"">Bab 1 / 15</span>
          <button class=""btn-step-nav"" id=""btn-next-lesson"" title=""Pelajaran Berikutnya"">Bab Berikutnya ▶</button>
        </div>
      </div>
    </section>

    <!-- 3. HERO BANNER UNIT AKTIF -->
    <section class=""unit-hero-banner"">
      <div class=""unit-banner-left"">
        <div class=""unit-badge-pill"" id=""unit-group-pill"">第一单元 (Unit 1)</div>
        <h2 id=""unit-header-title"">第一课：你好</h2>
        <div class=""unit-banner-pinyin"" id=""unit-header-pinyin"">Dì yī kè: Nǐ hǎo</div>
        <div class=""unit-banner-meaning"" id=""unit-header-meaning"">Pelajaran 1: Halo / Apa Kabar</div>
      </div>
      <div class=""dino-guide-card"">
        <div class=""guide-avatar"" id=""dino-guide-avatar"">🦖</div>
        <div>
          <div class=""guide-name"" id=""dino-guide-name"">Rexy si Bayi T-Rex</div>
          <div class=""guide-desc"" id=""dino-guide-desc"">Sahabat belajarmu di Han Yu 1!</div>
        </div>
      </div>
    </section>

    <!-- 4. TABS 5 FITUR UTAMA PEMBELAJARAN -->
    <nav class=""tabs-navigation"">
      <button class=""tab-btn active"" data-tab=""story"">
        <span class=""tab-icon"">📖</span>
        <span>1. Buku Asli & Cerita</span>
      </button>
      <button class=""tab-btn"" data-tab=""vocab"">
        <span class=""tab-icon"">📝</span>
        <span>2. Kosakata Buku (记生词)</span>
      </button>
      <button class=""tab-btn"" data-tab=""stroke"">
        <span class=""tab-icon"">✍️</span>
        <span>3. Tulis Guratan (写汉字)</span>
      </button>
      <button class=""tab-btn"" data-tab=""quiz"">
        <span class=""tab-icon"">🎮</span>
        <span>4. Game Kuis Arti & Pinyin</span>
      </button>
      <button class=""tab-btn"" data-tab=""match"">
        <span class=""tab-icon"">🧩</span>
        <span>5. Cocokkan Gambar & Teks</span>
      </button>
    </nav>

    <!-- ==========================================
         TAB 1: BUKU ASLI & CERITA INTERAKTIF
         ========================================== -->
    <div class=""tab-pane active"" id=""tab-pane-story"">
      <div class=""textbook-interactive-container"">
        
        <!-- Kolom Kiri: Halaman Ilustrasi Buku Asli -->
        <div class=""textbook-page-viewer-column"">
          <div class=""viewer-header"">
            <span>🖼️ Halaman Buku Pelajaran Asli</span>
            <div class=""viewer-page-pills"" id=""textbook-page-pills"">
              <!-- Tombol Pilih Halaman Buku -->
            </div>
          </div>
          <div class=""textbook-image-display"" id=""textbook-image-display"">
            <img id=""main-textbook-page-img"" src=""assets/pdf_pages_hanyu1/page_06.png"" alt=""Halaman Buku Asli"" />
            <div class=""page-zoom-hint"">🔍 Klik gambar untuk membuka ukuran penuh</div>
          </div>
        </div>

        <!-- Kolom Kanan: Teks Kalimat & Dialog Interaktif -->
        <div class=""textbook-story-column"">
          <!-- Control Bar -->
          <div class=""story-control-bar"">
            <div class=""control-group"">
              <button class=""btn-dino-action"" id=""btn-play-all-story"">
                <span>▶️</span> Putar Seluruh Cerita
              </button>
              <div class=""speed-control"">
                <span>🐢 Kecepatan:</span>
                <input type=""range"" id=""tts-speed-slider"" min=""0.6"" max=""1.3"" step=""0.05"" value=""0.9"" />
                <span id=""tts-speed-label"">0.90x</span> <span>🦖</span>
              </div>
            </div>

            <div class=""control-group"">
              <label class=""toggle-label"">
                <input type=""checkbox"" id=""toggle-pinyin"" checked />
                <span>Pinyin</span>
              </label>
              <label class=""toggle-label"">
                <input type=""checkbox"" id=""toggle-meaning"" checked />
                <span>Arti</span>
              </label>
            </div>
          </div>

          <!-- Story Sentences Stream -->
          <div class=""story-cards-stream"" id=""story-sentences-list"">
            <!-- Diisi otomatis oleh JavaScript -->
          </div>
        </div>

      </div>
    </div>

    <!-- ==========================================
         TAB 2: KOSAKATA BUKU (记生词)
         ========================================== -->
    <div class=""tab-pane"" id=""tab-pane-vocab"">
      <div class=""vocab-panel"">
        <div class=""vocab-header-banner"">
          <h3>📝 生词表 (Daftar Kosakata Baru Pelajaran Ini)</h3>
          <p>Klik kartu kata untuk mendengarkan pelafalan audio bahasa Mandarin standar.</p>
        </div>
        <div class=""vocab-cards-grid"" id=""vocab-cards-list"">
          <!-- Diisi otomatis oleh JavaScript -->
        </div>
      </div>
    </div>

    <!-- ==========================================
         TAB 3: TULIS GURATAN (写汉字 & 田字格)
         ========================================== -->
    <div class=""tab-pane"" id=""tab-pane-stroke"">
      <div class=""stroke-panel"">
        
        <!-- Karakter Selector Chips -->
        <div class=""stroke-vocab-bar"">
          <span class=""bar-label"">Pilih Karakter untuk Dilatih:</span>
          <div class=""stroke-chips-scroll"" id=""stroke-vocab-chips"">
            <!-- Diisi otomatis oleh JavaScript -->
          </div>
        </div>

        <!-- Workbench Latihan Menulis Tianzige -->
        <div class=""stroke-workbench"">
          
          <!-- Canvas Area -->
          <div class=""canvas-card"">
            <div class=""canvas-header"">
              <span class=""canvas-title"">Grid Tianzige (田字格) Interaktif</span>
              <div class=""canvas-actions"">
                <button class=""btn-canvas-action"" id=""btn-animate-stroke"" title=""Tonton Animasi Urutan Guratan"">
                  ▶️ Animasi
                </button>
                <button class=""btn-canvas-action"" id=""btn-clear-stroke"" title=""Bersihkan Goresanmu"">
                  🧹 Hapus
                </button>
              </div>
            </div>

            <div class=""canvas-wrapper"">
              <canvas id=""tianzige-canvas"" width=""360"" height=""360""></canvas>
            </div>

            <div class=""stroke-feedback-bar"">
              <span id=""stroke-feedback-msg"" class=""stroke-msg info"">
                💡 Ikuti bayangan huruf di dalam grid dengan mouse atau jarimu!
              </span>
            </div>
          </div>

          <!-- Info & Detail Guratan -->
          <div class=""stroke-info-card"">
            <div class=""stroke-main-hanzi-box"">
              <span class=""main-hanzi"" id=""stroke-detail-hanzi"">你</span>
              <button class=""btn-audio-speak"" id=""btn-stroke-audio"" title=""Dengarkan Suara"">🔊</button>
            </div>
            
            <div class=""stroke-meta-info"">
              <div class=""meta-row"">
                <span class=""meta-label"">Pinyin:</span>
                <span class=""meta-val pinyin"" id=""stroke-detail-pinyin"">nǐ</span>
              </div>
              <div class=""meta-row"">
                <span class=""meta-label"">Arti:</span>
                <span class=""meta-val"" id=""stroke-detail-meaning"">kamu</span>
              </div>
              <div class=""meta-row"">
                <span class=""meta-label"">Jumlah Guratan:</span>
                <span class=""meta-val badge"" id=""stroke-detail-count"">7 Guratan</span>
              </div>
            </div>

            <!-- Urutan Guratan per Langkah -->
            <div class=""stroke-steps-box"">
              <h4>Nama Urutan Guratan:</h4>
              <div class=""stroke-steps-list"" id=""stroke-detail-names"">
                <!-- Diisi otomatis oleh JavaScript -->
              </div>
            </div>

            <div class=""stroke-guide-box"">
              <h4>Panduan Menulis:</h4>
              <p id=""stroke-detail-guide"">Tulis radikal orang 亻 di sebelah kiri terlebih dahulu, kemudian bagian kanan.</p>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- ==========================================
         TAB 4: GAME MENEBAK ARTI & PINYIN (QUIZ)
         ========================================== -->
    <div class=""tab-pane"" id=""tab-pane-quiz"">
      <div class=""quiz-panel"">
        <div id=""quiz-arena-container"">
          <!-- Diisi otomatis oleh JavaScript -->
        </div>
      </div>
    </div>

    <!-- ==========================================
         TAB 5: GAME MENCOCOKKAN GAMBAR & KALIMAT
         ========================================== -->
    <div class=""tab-pane"" id=""tab-pane-match"">
      <div class=""matching-panel"">
        <div class=""matching-header"">
          <h3>🧩 Permainan Mencocokkan Ilustrasi Buku & Kalimat</h3>
          <p>Pilih kartu gambar di sebelah kiri, lalu cocokkan dengan kalimat Mandarin yang sesuai di sebelah kanan!</p>
        </div>
        <div id=""matching-arena-container"">
          <!-- Diisi otomatis oleh JavaScript -->
        </div>
      </div>
    </div>

  </div>

  <!-- ==========================================
       MODAL: TABEL 28 GURATAN & 7 ATURAN URUTAN
       ========================================== -->
  <div class=""modal-overlay"" id=""stroke-ref-modal"">
    <div class=""modal-dialog modal-lg"">
      <div class=""modal-header"">
        <h3>📜 汉字笔画名称表与笔顺规则表 (Tabel 28 Guratan Resmi & 7 Aturan Urutan)</h3>
        <button class=""modal-close"">✕</button>
      </div>
      <p style=""font-size: 0.9rem; color: #64748b; margin-bottom: 16px;"">
        Sesuai Buku Pelajaran Cetak Resmi 《汉语》 Halaman 67 & 68. Klik ikon speaker untuk mendengarkan nama guratan dan contoh karakternya!
      </p>
      <div class=""stroke-ref-body"" id=""stroke-ref-content"">
        <!-- Diisi otomatis oleh JavaScript -->
      </div>
    </div>
  </div>

  <!-- ==========================================
       MODAL: SARANG PENETASAN TELUR DINOSAURUS
       ========================================== -->
  <div class=""modal-overlay"" id=""hatchery-modal"">
    <div class=""modal-dialog"">
      <div class=""modal-header"">
        <h3>🥚 Sarang Penetasan Telur Dinosaurus</h3>
        <button class=""modal-close"">✕</button>
      </div>
      <p style=""font-size: 0.9rem; color: #64748b; margin-bottom: 18px;"">
        Kumpulkan <strong>Tulang Dinosaurus 🦴</strong> dengan membaca cerita, berlatih guratan, dan memenangkan kuis untuk menetaskan telur dinosaurus langka!
      </p>
      <div class=""hatchery-grid"" id=""hatchery-grid"">
        <!-- Diisi otomatis oleh JavaScript -->
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script src=""js/hanyu_data.js""></script>
  <script src=""js/audio.js""></script>
  <script src=""js/stroke_engine.js""></script>
  <script src=""js/app.js""></script>
</body>
</html>";

        File.WriteAllText(@"c:\HAN YU 1-6\index.html", html, Encoding.UTF8);
        Console.WriteLine("Built clean index.html successfully!");
    }
}
