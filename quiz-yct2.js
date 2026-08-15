// =========================================================================
// DINOSAUR YCT 2 EXAM & PRACTICE QUIZ ENGINE (KKM 70)
// Standar Ujian Internasional Siswa SD: Youth Chinese Test Level 2 (YCT 2)
// 1. Bagian Tīnglì (听力 / Mendengarkan) dengan Tombol Audio Pelan
// 2. Bagian Yuèdú (阅读 / Membaca & Menyusun Kalimat)
// 3. Sistem Penilaian Standar KKM 70 & Sertifikat Kelulusan Dinosaurus
// =========================================================================

class DinoQuizEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.questions = [];
    this.userAnswers = {};
    this.currentIndex = 0;
    this.isSubmitted = false;
    this.unitTitle = "";
    this.bookTitle = "";
    this.kkmScore = 70; // Standar KKM 70
    this.score = 0;
    this.studentName = "Murid Berprestasi";
  }

  loadUnit(unitData, bookTitle = "") {
    if (!unitData || !unitData.quizQuestions) return;
    this.questions = [...unitData.quizQuestions];
    this.unitTitle = unitData.title || `Unit ${unitData.id}`;
    this.bookTitle = bookTitle || "Han Yu";
    this.userAnswers = {};
    this.currentIndex = 0;
    this.isSubmitted = false;
    this.score = 0;
    this.renderQuiz();
  }

  renderQuiz() {
    if (!this.container) return;

    if (this.questions.length === 0) {
      this.container.innerHTML = `<div class="empty-quiz">Belum ada bank soal YCT 2 untuk unit ini.</div>`;
      return;
    }

    if (this.isSubmitted) {
      this.renderScoreSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    const typeBadges = {
      yct_listening: "🎧 YCT 2: Tīnglì (Mendengarkan Audio)",
      meaning: "📖 YCT 2: Makna Kosakata",
      pinyin: "🔤 YCT 2: Bacaan Pinyin & Nada",
      strokes: "✍️ YCT 2: Jumlah & Urutan Guratan",
      sentence_order: "🧩 YCT 2: Menyusun Kalimat (连词成句)",
      fill_blank: "✏️ YCT 2: Melengkapi Kalimat Rumpang",
      picture_match: "🖼️ YCT 2: Mencocokkan Situasi & Gambar"
    };

    const selectedOption = this.userAnswers[this.currentIndex];

    this.container.innerHTML = `
      <div class="yct2-quiz-card">
        <!-- HEADER UJIAN YCT 2 -->
        <div class="yct2-top-bar">
          <div class="yct2-badge-group">
            <span class="dino-pill yct-pill">${typeBadges[q.type] || "📝 Soal Latihan YCT 2"}</span>
            <span class="dino-pill kkm-pill">🎯 Standar KKM: ${this.kkmScore}</span>
          </div>
          <div class="quiz-question-counter">
            Soal <strong>${this.currentIndex + 1}</strong> dari <strong>${this.questions.length}</strong>
          </div>
        </div>

        <!-- PERTANYAAN & BANTUAN AUDIO YCT 2 -->
        <div class="yct2-question-body">
          <div class="question-title-text">${q.question}</div>

          <!-- Tombol Audio Pembacaan Soal Pelan Ramah Anak SD -->
          <div class="audio-prompt-banner">
            <button class="dino-audio-play-btn" onclick="dinoQuiz.playQuestionAudio(${this.currentIndex})">
              <span class="audio-icon-pulse">🔊</span>
              <span>Dengarkan Pembacaan Audio Soal (Pelan & Jelas)</span>
            </button>
            <span class="audio-hint-text">💡 Klik untuk memutar audio soal Mandarin berkecepatan pelan</span>
          </div>
        </div>

        <!-- PILIHAN JAWABAN BERGANDA (A, B, C, D) -->
        <div class="yct2-options-grid">
          ${q.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            return `
              <div class="yct2-option-item ${isSelected ? 'selected' : ''}" onclick="dinoQuiz.selectOption(${idx})">
                <div class="option-letter-bubble">${String.fromCharCode(65 + idx)}</div>
                <div class="option-content-text">${opt}</div>
                <button class="opt-audio-mini-btn" onclick="event.stopPropagation(); dinoAudio.speakMandarin('${opt.replace(/[^\u4e00-\u9fa5]/g, '') || opt}');" title="Dengarkan pengucapan opsi ini">
                  🔉
                </button>
              </div>
            `;
          }).join('')}
        </div>

        <!-- FOOTER NAVIGASI SOAL -->
        <div class="yct2-footer-navigation">
          <button class="dino-btn secondary small" onclick="dinoQuiz.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ⬅️ Soal Sebelumnya
          </button>

          <div class="quiz-dot-indicators">
            ${this.questions.map((_, idx) => `
              <button class="dot-btn ${idx === this.currentIndex ? 'active' : ''} ${this.userAnswers[idx] !== undefined ? 'answered' : ''}" onclick="dinoQuiz.goToQuestion(${idx})">
                ${idx + 1}
              </button>
            `).join('')}
          </div>

          ${this.currentIndex < this.questions.length - 1 ? `
            <button class="dino-btn primary small" onclick="dinoQuiz.nextQuestion()">
              Soal Selanjutnya ➡️
            </button>
          ` : `
            <button class="dino-btn primary small submit-btn" onclick="dinoQuiz.submitQuiz()">
              Kumpulkan Jawaban 🎯
            </button>
          `}
        </div>
      </div>
    `;
  }

  playQuestionAudio(index) {
    const q = this.questions[index];
    if (!q) return;

    if (window.dinoAudio) {
      dinoAudio.getAudioContext();
      const audioToSpeak = q.audioText || q.question.replace(/\[.*?\]/g, '');
      dinoAudio.speakMandarin(audioToSpeak, { rate: dinoAudio.speechRate });
    }
  }

  selectOption(optionIndex) {
    if (this.isSubmitted) return;
    this.userAnswers[this.currentIndex] = optionIndex;
    if (window.dinoAudio) {
      dinoAudio.getAudioContext();
      dinoAudio.playEggCrackSound();
    }
    this.renderQuiz();
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      if (window.dinoAudio) dinoAudio.playEggCrackSound();
      this.renderQuiz();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      if (window.dinoAudio) dinoAudio.playEggCrackSound();
      this.renderQuiz();
    }
  }

  goToQuestion(idx) {
    this.currentIndex = idx;
    if (window.dinoAudio) dinoAudio.playEggCrackSound();
    this.renderQuiz();
  }

  submitQuiz() {
    // Hitung Jawaban Terisi
    const answeredCount = Object.keys(this.userAnswers).length;
    if (answeredCount < this.questions.length) {
      const confirmSubmit = confirm(`Kamu baru menjawab ${answeredCount} dari ${this.questions.length} soal. Apakah kamu yakin ingin mengumpulkan sekarang? 🦖`);
      if (!confirmSubmit) return;
    }

    // Hitung Nilai
    let correctCount = 0;
    this.questions.forEach((q, idx) => {
      if (this.userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    this.score = Math.round((correctCount / this.questions.length) * 100);
    this.isSubmitted = true;

    // Putar Suara Sesuai Hasil KKM
    if (window.dinoAudio) {
      dinoAudio.getAudioContext();
      if (this.score >= this.kkmScore) {
        dinoAudio.playApplauseSound();
        dinoAudio.playFanfareSound();
      } else {
        dinoAudio.playDinoRoarSound();
      }
    }

    this.renderScoreSummary();
  }

  // Render Rekap Skor, Evaluasi KKM 70, & Pembahasan Lengkap
  renderScoreSummary() {
    if (!this.container) return;

    const isPassed = this.score >= this.kkmScore;
    let correctCount = 0;
    this.questions.forEach((q, idx) => {
      if (this.userAnswers[idx] === q.correctIndex) correctCount++;
    });

    this.container.innerHTML = `
      <div class="yct2-result-card ${isPassed ? 'passed' : 'failed'}">
        <div class="result-hero-box">
          <div class="trophy-big-icon">${isPassed ? '🏆🦖🎉' : '🦖💪📚'}</div>
          <h2>${isPassed ? 'HEBAT SEKALI! KAMU LULUS STANDAR YCT 2!' : 'TETAP SEMANGAT! AYO COBA LAGI!'}</h2>
          <p class="result-subtitle">
            ${isPassed 
              ? `Selamat! Nilaimu telah melampaui KKM ${this.kkmScore} pada materi <strong>${this.unitTitle}</strong>!` 
              : `Nilaimu belum mencapai KKM ${this.kkmScore}. Jangan putus asa, mari pelajari pembahasan di bawah dan coba lagi!`}
          </p>

          <div class="score-display-badges">
            <div class="score-stat-circle">
              <span class="score-number">${this.score}</span>
              <span class="score-label">NILAI AKHIR</span>
            </div>
            <div class="score-details-list">
              <div class="detail-row"><span>✅ Jawaban Benar:</span> <strong>${correctCount} Soal</strong></div>
              <div class="detail-row"><span>❌ Jawaban Salah:</span> <strong>${this.questions.length - correctCount} Soal</strong></div>
              <div class="detail-row"><span>🎯 Standar KKM:</span> <strong>${this.kkmScore} / 100</strong></div>
              <div class="detail-row"><span>📜 Status:</span> <strong class="${isPassed ? 'status-pass' : 'status-fail'}">${isPassed ? 'LULUS (合格)' : 'BELUM TUNTAS'}</strong></div>
            </div>
          </div>

          <div class="result-action-buttons">
            ${isPassed ? `
              <button class="dino-btn primary pulse" onclick="dinoQuiz.openCertificateModal()">
                🎓 Buka & Cetak Sertifikat YCT 2 📜
              </button>
            ` : ''}
            <button class="dino-btn secondary" onclick="dinoQuiz.retakeQuiz()">
              Ulangi Latihan Ujian ↺
            </button>
          </div>
        </div>

        <!-- PEMBAHASAN LENGKAP SETIAP BUTIR SOAL -->
        <div class="quiz-review-section">
          <h3 class="review-title">📖 Pembahasan Kunci Jawaban Lengkap (YCT 2):</h3>
          <div class="review-questions-list">
            ${this.questions.map((q, idx) => {
              const userAns = this.userAnswers[idx];
              const isCorrect = userAns === q.correctIndex;
              return `
                <div class="review-item-card ${isCorrect ? 'correct-item' : 'wrong-item'}">
                  <div class="review-top-row">
                    <span class="review-q-num">Nomor ${idx + 1}</span>
                    <span class="review-status-badge ${isCorrect ? 'badge-correct' : 'badge-wrong'}">
                      ${isCorrect ? '✅ Benar (+10)' : '❌ Kurang Tepat'}
                    </span>
                  </div>
                  <div class="review-q-text">${q.question}</div>
                  <div class="review-answers-compare">
                    <div class="ans-box user-ans">
                      <span>Jawabanmu:</span>
                      <strong>${userAns !== undefined ? `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}` : '(Tidak Dijawab)'}</strong>
                    </div>
                    <div class="ans-box correct-ans">
                      <span>Kunci Jawaban Benar:</span>
                      <strong>${String.fromCharCode(65 + q.correctIndex)}. ${q.options[q.correctIndex]}</strong>
                    </div>
                  </div>
                  <div class="review-explanation-text">
                    💡 <strong>Penjelasan:</strong> ${q.explanation}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- MODAL SERTIFIKAT KELULUSAN YCT 2 -->
        <div id="yct2-certificate-modal" class="win-modal hidden">
          <div class="win-modal-box certificate-modal-box">
            <div class="certificate-frame" id="printable-certificate">
              <div class="cert-border-inner">
                <div class="cert-header">
                  <span class="cert-logo-dino">🦖🏆🌟</span>
                  <h1>SERTIFIKAT KELULUSAN YCT 2</h1>
                  <p class="cert-sub">Youth Chinese Test Level 2 - Petualangan Mandarin Dinosaurus</p>
                </div>

                <div class="cert-body">
                  <p class="cert-intro">Sertifikat ini dengan bangga dianugerahkan kepada:</p>
                  <div class="cert-student-name" id="cert-display-name">
                    <input type="text" id="cert-name-input" value="${this.studentName}" onchange="dinoQuiz.updateStudentName(this.value)" placeholder="Tuliskan Namamu di Sini">
                  </div>
                  <p class="cert-desc">
                    Telah berhasil menyelesaikan dan LULUS Ujian Latihan Standar <strong>YCT Level 2</strong><br>
                    pada materi <strong>${this.bookTitle} - ${this.unitTitle}</strong> dengan capaian nilai:
                  </p>

                  <div class="cert-score-badge">
                    <span class="cert-score-val">${this.score} / 100</span>
                    <span class="cert-grade-label">${this.score === 100 ? '⭐⭐⭐ ISTIMEWA (SANGAT MEMUASKAN)' : '⭐⭐ BAIK & MEMUASKAN'}</span>
                  </div>

                  <div class="cert-footer-dates">
                    <div>Tanggal: <strong>${new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></div>
                    <div>Pembimbing: <strong>Guru Mandarin Dinosaurus Rexy 🦖</strong></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cert-action-bar">
              <button class="dino-btn primary" onclick="window.print()">
                Cetak / Simpan Sertifikat 🖨️
              </button>
              <button class="dino-btn secondary" onclick="document.getElementById('yct2-certificate-modal').className='win-modal hidden'">
                Tutup
              </button>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  updateStudentName(name) {
    this.studentName = name || "Murid Berprestasi";
  }

  openCertificateModal() {
    const modal = document.getElementById('yct2-certificate-modal');
    if (modal) modal.className = 'win-modal show';
  }

  retakeQuiz() {
    this.userAnswers = {};
    this.currentIndex = 0;
    this.isSubmitted = false;
    this.score = 0;
    if (window.dinoAudio) dinoAudio.playEggCrackSound();
    this.renderQuiz();
  }
}

// Global binding
window.DinoQuizEngine = DinoQuizEngine;
