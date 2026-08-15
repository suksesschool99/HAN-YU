// Database Lengkap Han Yu 1 - 6 (72 Unit Pembelajaran Mandarin)
// Setiap Unit dilengkapi: Cerita/Bacaan + Pinyin + Arti ID, Karakter Guratan & Langkah, Kuis Pinyin & Arti, serta Pasangan Gambar-Kalimat

window.HANYU_DATABASE = {
  books: [
    {
      id: 1,
      title: "Han Yu 1 (汉语 1)",
      grade: "Kelas 1 SD / Pemula",
      dinoGuide: { name: "Rexy si Bayi T-Rex", avatar: "🦖", desc: "Mulai petualangan belajarmu dari angka, sapaan, dan keluarga bersama Rexy!" },
      color: "#10b981",
      units: [
        {
          id: 1,
          title: "第一课：一二三四五",
          pinyin: "Dì yī kè: Yī èr sān sì wǔ",
          meaning: "Pelajaran 1: Satu Dua Tiga Empat Lima",
          intro: "Ayo belajar mengenal dan menghitung angka 1 sampai 5 dalam bahasa Mandarin!",
          story: [
            { hanzi: "一、二、三、四、五。", pinyin: "Yī, èr, sān, sì, wǔ.", indonesian: "Satu, dua, tiga, empat, lima." },
            { hanzi: "一二三四五，上山打老虎。", pinyin: "Yī èr sān sì wǔ, shàng shān dǎ lǎohǔ.", indonesian: "Satu dua tiga empat lima, naik gunung berburu harimau." },
            { hanzi: "老虎没打到，打到小松鼠。", pinyin: "Lǎohǔ méi dǎ dào, dǎ dào xiǎo sōngshǔ.", indonesian: "Harimau tidak dapat, dapatnya tupai kecil." },
            { hanzi: "松鼠有几只？让我数一数。", pinyin: "Sōngshǔ yǒu jǐ zhī? Ràng wǒ shǔ yī shǔ.", indonesian: "Tupai ada berapa ekor? Biarkan aku hitung." },
            { hanzi: "数来又数去，一二三四五。", pinyin: "Shǔ lái yòu shǔ qù, yī èr sān sì wǔ.", indonesian: "Dihitung bolak-balik, satu dua tiga empat lima." }
          ],
          vocabulary: [
            { hanzi: "一", pinyin: "yī", indonesian: "Satu", strokeCount: 1, strokeNames: ["横 (Héng)"], guide: "Goresan satu garis mendatar dari kiri ke kanan." },
            { hanzi: "二", pinyin: "èr", indonesian: "Dua", strokeCount: 2, strokeNames: ["横 (Héng)", "横 (Héng)"], guide: "Garis atas lebih pendek, garis bawah lebih panjang." },
            { hanzi: "三", pinyin: "sān", indonesian: "Tiga", strokeCount: 3, strokeNames: ["横 (Héng)", "横 (Héng)", "横 (Héng)"], guide: "Tiga garis mendatar, garis tengah paling pendek, garis bawah paling panjang." },
            { hanzi: "四", pinyin: "sì", indonesian: "Empat", strokeCount: 5, strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "撇 (Piě)", "竖弯 (Shùwān)", "横 (Héng)"], guide: "Tulis kotak luar dulu, isi di dalamnya, lalu tutup dengan garis bawah." },
            { hanzi: "五", pinyin: "wǔ", indonesian: "Lima", strokeCount: 4, strokeNames: ["横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"], guide: "Garis atas, garis tegak condong, garis patah, garis penutup bawah." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_002.jpg", hanzi: "一 (Yī)", pinyin: "yī", meaning: "Satu (1 ekor dinosaurus)" },
            { image: "assets/hanyu1_clean/img_003.jpg", hanzi: "二 (Èr)", pinyin: "èr", meaning: "Dua (2 butir telur)" },
            { image: "assets/hanyu1_clean/img_004.jpg", hanzi: "三 (Sān)", pinyin: "sān", meaning: "Tiga (3 pohon purba)" },
            { image: "assets/hanyu1_clean/img_005.jpg", hanzi: "四 (Sì)", pinyin: "sì", meaning: "Empat (4 jejak kaki dinosaurus)" }
          ],
          quizzes: [
            { question: "Apa Pinyin dari karakter '三'?", options: ["sān", "yī", "sì", "wǔ"], answer: 0, explanation: "'三' dibaca 'sān' yang berarti tiga." },
            { question: "Apa arti dari '五' (wǔ)?", options: ["Satu", "Tiga", "Lima", "Sepuluh"], answer: 2, explanation: "'五' (wǔ) artinya adalah angka Lima." },
            { question: "Berapa jumlah guratan pada huruf '二'?", options: ["1 Guratan", "2 Guratan", "3 Guratan", "4 Guratan"], answer: 1, explanation: "'二' terdiri dari 2 goresan mendatar (横 Héng)." },
            { question: "Nama guratan pertama pada huruf '一' adalah...", options: ["横 (Héng)", "竖 (Shù)", "撇 (Piě)", "点 (Diǎn)"], answer: 0, explanation: "Goresan garis mendatar disebut 横 (Héng)." }
          ]
        },
        {
          id: 2,
          title: "第二课：六七八九十",
          pinyin: "Dì èr kè: Liù qī bā jiǔ shí",
          meaning: "Pelajaran 2: Enam Tujuh Delapan Sembilan Sepuluh",
          intro: "Lanjutkan petualangan berhitung bersama dinosaurus dari angka 6 sampai 10!",
          story: [
            { hanzi: "六、七、八、九、十。", pinyin: "Liù, qī, bā, jiǔ, shí.", indonesian: "Enam, tujuh, delapan, sembilan, sepuluh." },
            { hanzi: "伸出两只手，十个大手指。", pinyin: "Shēn chū liǎng zhī shǒu, shí gè dà shǒuzhǐ.", indonesian: "Rentangkan dua tangan, sepuluh jari tangan besar." },
            { hanzi: "六七八九十，大家齐拍手。", pinyin: "Liù qī bā jiǔ shí, dàjiā qí pāishǒu.", indonesian: "Enam tujuh delapan sembilan sepuluh, semua bertepuk tangan bersama." },
            { hanzi: "学汉语，真快乐！", pinyin: "Xué hànyǔ, zhēn kuàilè!", indonesian: "Belajar bahasa Mandarin sungguh menyenangkan!" }
          ],
          vocabulary: [
            { hanzi: "六", pinyin: "liù", indonesian: "Enam", strokeCount: 4, strokeNames: ["点 (Diǎn)", "横 (Héng)", "撇 (Piě)", "点 (Diǎn)"], guide: "Titik atas, garis mendatar, miring ke kiri, titik kanan." },
            { hanzi: "七", pinyin: "qī", indonesian: "Tujuh", strokeCount: 2, strokeNames: ["横 (Héng)", "竖弯钩 (Shùwāngōu)"], guide: "Garis mendatar miring ke atas sedikit, lalu garis tegak melengkung berkait." },
            { hanzi: "八", pinyin: "bā", indonesian: "Delapan", strokeCount: 2, strokeNames: ["撇 (Piě)", "捺 (Nà)"], guide: "Goresan kiri tidak menyentuh goresan kanan. Terbuka di atas." },
            { hanzi: "九", pinyin: "jiǔ", indonesian: "Sembilan", strokeCount: 2, strokeNames: ["撇 (Piě)", "横折弯钩 (Héngzhéwāngōu)"], guide: "Goresan miring kiri dulu, lalu garis mendatar-patah-kait." },
            { hanzi: "十", pinyin: "shí", indonesian: "Sepuluh", strokeCount: 2, strokeNames: ["横 (Héng)", "竖 (Shù)"], guide: "Mendatar dulu baru tegak lurus ke bawah (先横后竖)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_006.jpg", hanzi: "六 (Liù)", pinyin: "liù", meaning: "Enam (6 ekor dinosaurus kecil)" },
            { image: "assets/hanyu1_clean/img_007.jpg", hanzi: "八 (Bā)", pinyin: "bā", meaning: "Delapan (8 buah beri purba)" },
            { image: "assets/hanyu1_clean/img_008.jpg", hanzi: "十 (Shí)", pinyin: "shí", meaning: "Sepuluh (10 jari tangan)" },
            { image: "assets/hanyu1_clean/img_009.jpg", hanzi: "七 (Qī)", pinyin: "qī", meaning: "Tujuh (7 daun pakis)" }
          ],
          quizzes: [
            { question: "Huruf '十' artinya adalah...", options: ["Enam", "Tujuh", "Sembilan", "Sepuluh"], answer: 3, explanation: "'十' (shí) artinya adalah angka Sepuluh." },
            { question: "Pinyin dari huruf '八' adalah...", options: ["bā", "dā", "pā", "mā"], answer: 0, explanation: "'八' dibaca 'bā' (angka delapan)." },
            { question: "Urutan aturan penulisan huruf '十' adalah...", options: ["Tegak dulu baru mendatar", "Mendatar dulu baru tegak (先横后竖)", "Miring dulu", "Titik dulu"], answer: 1, explanation: "Aturan guratan '十' adalah mendatar dulu baru tegak lurus." }
          ]
        },
        {
          id: 3,
          title: "第三课：你好",
          pinyin: "Dì sān kè: Nǐ hǎo",
          meaning: "Pelajaran 3: Halo / Apa Kabar",
          intro: "Belajar menyapa teman-teman dinosaurus dengan ramah!",
          story: [
            { hanzi: "你好！", pinyin: "Nǐ hǎo!", indonesian: "Halo / Apa kabar!" },
            { hanzi: "老师好！", pinyin: "Lǎoshī hǎo!", indonesian: "Halo guru / Selamat pagi guru!" },
            { hanzi: "同学们好！", pinyin: "Tóngxuémen hǎo!", indonesian: "Halo teman-teman!" },
            { hanzi: "再见！", pinyin: "Zàijiàn!", indonesian: "Sampai jumpa!" }
          ],
          vocabulary: [
            { hanzi: "你", pinyin: "nǐ", indonesian: "Kamu / Anda", strokeCount: 7, strokeNames: ["撇", "竖", "撇", "横撇", "竖钩", "撇", "点"], guide: "Radikal orang di kiri (亻), lalu komponen kanan." },
            { hanzi: "好", pinyin: "hǎo", indonesian: "Baik / Bagus", strokeCount: 6, strokeNames: ["撇点", "撇", "提", "横撇", "竖钩", "横"], guide: "Radikal perempuan (女) di kiri dan anak (子) di kanan." },
            { hanzi: "见", pinyin: "jiàn", indonesian: "Melihat / Bertemu", strokeCount: 4, strokeNames: ["竖", "横折", "撇", "竖弯钩"], guide: "Garis kotak atas lalu kaki di bawah." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_010.jpg", hanzi: "你好！", pinyin: "Nǐ hǎo!", meaning: "Menyapa teman: Halo!" },
            { image: "assets/hanyu1_clean/img_011.jpg", hanzi: "老师好！", pinyin: "Lǎoshī hǎo!", meaning: "Menyapa guru: Halo Guru!" },
            { image: "assets/hanyu1_clean/img_012.jpg", hanzi: "再见！", pinyin: "Zàijiàn!", meaning: "Berpamitan: Sampai jumpa!" }
          ],
          quizzes: [
            { question: "Bagaimana cara menyapa 'Halo' dalam bahasa Mandarin?", options: ["Zàijiàn", "Nǐ hǎo", "Xièxiè", "Duìbuqǐ"], answer: 1, explanation: "'Nǐ hǎo' (你好) adalah sapaan Halo / Apa kabar." },
            { question: "Apa arti dari '再见' (Zàijiàn)?", options: ["Terima kasih", "Maaf", "Sampai jumpa", "Selamat pagi"], answer: 2, explanation: "'Zàijiàn' (再见) artinya Sampai Jumpa." }
          ]
        },
        {
          id: 4,
          title: "第四课：你早",
          pinyin: "Dì sì kè: Nǐ zǎo",
          meaning: "Pelajaran 4: Selamat Pagi",
          intro: "Menyapa matahari terbit dan kawan dinosaurus di pagi yang cerah!",
          story: [
            { hanzi: "早！你早！", pinyin: "Zǎo! Nǐ zǎo!", indonesian: "Pagi! Selamat pagi!" },
            { hanzi: "老师早！", pinyin: "Lǎoshī zǎo!", indonesian: "Selamat pagi Guru!" },
            { hanzi: "太阳出来了，大家早上好。", pinyin: "Tàiyáng chūlái le, dàjiā zǎoshang hǎo.", indonesian: "Matahari sudah terbit, selamat pagi semuanya." }
          ],
          vocabulary: [
            { hanzi: "早", pinyin: "zǎo", indonesian: "Pagi / Awal", strokeCount: 6, strokeNames: ["竖", "横折", "横", "横", "横", "竖"], guide: "Matahari (日) di atas dan salib (十) di bawah." },
            { hanzi: "大", pinyin: "dà", indonesian: "Besar", strokeCount: 3, strokeNames: ["横", "撇", "捺"], guide: "Mendatar, miring kiri, lalu miring kanan seperti orang merentangkan tangan." },
            { hanzi: "小", pinyin: "xiǎo", indonesian: "Kecil", strokeCount: 3, strokeNames: ["竖钩", "撇", "点"], guide: "Garis tengah dulu baru kiri dan kanan (先中间后两边)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_014.jpg", hanzi: "你早！", pinyin: "Nǐ zǎo!", meaning: "Selamat pagi!" },
            { image: "assets/hanyu1_clean/img_015.jpg", hanzi: "大", pinyin: "dà", meaning: "Dinosaurus Besar" },
            { image: "assets/hanyu1_clean/img_016.jpg", hanzi: "小", pinyin: "xiǎo", meaning: "Dinosaurus Kecil" }
          ],
          quizzes: [
            { question: "Lawan kata dari '大' (dà - besar) adalah...", options: ["小 (xiǎo)", "多 (duō)", "少 (shǎo)", "早 (zǎo)"], answer: 0, explanation: "Lawan kata '大' (besar) adalah '小' (kecil)." },
            { question: "Arti dari kata '早' (zǎo) adalah...", options: ["Malam", "Siang", "Pagi", "Sore"], answer: 2, explanation: "'早' (zǎo) artinya adalah Pagi." }
          ]
        },
        {
          id: 5,
          title: "第五课：爸爸、妈妈",
          pinyin: "Dì wǔ kè: Bàba, Māmā",
          meaning: "Pelajaran 5: Ayah, Ibu",
          intro: "Mengenal sebutan anggota keluarga tercinta di sarang dinosaurus!",
          story: [
            { hanzi: "这是爸爸，那是妈妈。", pinyin: "Zhè shì bàba, nà shì māmā.", indonesian: "Ini ayah, itu ibu." },
            { hanzi: "我爱爸爸，我爱妈妈。", pinyin: "Wǒ ài bàba, wǒ ài māmā.", indonesian: "Saya sayang ayah, saya sayang ibu." },
            { hanzi: "爸爸妈妈爱我，我们是快乐的一家。", pinyin: "Bàba māmā ài wǒ, wǒmen shì kuàilè de yī jiā.", indonesian: "Ayah dan ibu menyayangi saya, kami adalah keluarga bahagia." }
          ],
          vocabulary: [
            { hanzi: "爸", pinyin: "bà", indonesian: "Ayah", strokeCount: 8, strokeNames: ["撇", "捺", "点", "撇", "横折", "竖", "横", "竖弯钩"], guide: "Radikal ayah (父) di atas dan (巴) di bawah." },
            { hanzi: "妈", pinyin: "mā", indonesian: "Ibu", strokeCount: 6, strokeNames: ["撇点", "撇", "提", "横折", "竖折折钩", "横"], guide: "Radikal wanita (女) di kiri dan kuda (马) di kanan." },
            { hanzi: "我", pinyin: "wǒ", indonesian: "Saya / Aku", strokeCount: 7, strokeNames: ["撇", "横", "竖钩", "提", "斜钩", "撇", "点"], guide: "Tujuh guratan dimulai dari garis miring kiri atas." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_018.jpg", hanzi: "爸爸", pinyin: "bàba", meaning: "Ayah (Papa Dino)" },
            { image: "assets/hanyu1_clean/img_019.jpg", hanzi: "妈妈", pinyin: "māmā", meaning: "Ibu (Mama Dino)" },
            { image: "assets/hanyu1_clean/img_020.jpg", hanzi: "我爱爸爸妈妈", pinyin: "Wǒ ài bàba māmā", meaning: "Saya sayang ayah dan ibu" }
          ],
          quizzes: [
            { question: "Bagaimana sebutan 'Ayah' dalam bahasa Mandarin?", options: ["Māmā", "Bàba", "Gēge", "Mèimei"], answer: 1, explanation: "'Bàba' (爸爸) adalah sebutan untuk Ayah." },
            { question: "Apa arti dari kalimat '我爱妈妈' (Wǒ ài māmā)?", options: ["Ibu sayang saya", "Saya sayang ibu", "Ini ibu saya", "Ibu pergi kerja"], answer: 1, explanation: "'我爱妈妈' artinya 'Saya sayang/cinta ibu'." }
          ]
        },
        {
          id: 6,
          title: "第六课：这是我的书",
          pinyin: "Dì liù kè: Zhè shì wǒ de shū",
          meaning: "Pelajaran 6: Ini Adalah Bukuku",
          intro: "Mengenal benda-benda belajar dan alat tulis di kelas prasejarah!",
          story: [
            { hanzi: "这是我的书。", pinyin: "Zhè shì wǒ de shū.", indonesian: "Ini adalah bukuku." },
            { hanzi: "那是他的笔。", pinyin: "Nà shì tā de bǐ.", indonesian: "Itu adalah pensilnya." },
            { hanzi: "这是书包，那是尺子。", pinyin: "Zhè shì shūbāo, nà shì chǐzi.", indonesian: "Ini tas sekolah, itu penggaris." }
          ],
          vocabulary: [
            { hanzi: "这", pinyin: "zhè", indonesian: "Ini", strokeCount: 7, strokeNames: ["点", "横", "撇", "点", "点", "横折折撇", "捺"], guide: "Komponen dalam (文) ditulis terlebih dahulu baru radikal jalan (辶)." },
            { hanzi: "书", pinyin: "shū", indonesian: "Buku", strokeCount: 4, strokeNames: ["横折", "横折钩", "竖", "点"], guide: "Empat goresan diakhiri dengan titik di atas." },
            { hanzi: "的", pinyin: "de", indonesian: "Kepunyaan / Milik", strokeCount: 8, strokeNames: ["撇", "竖", "横折", "横", "横", "撇", "横折钩", "点"], guide: "Putih (白) di kiri dan sendok (勺) di kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_022.jpg", hanzi: "书 (Shū)", pinyin: "shū", meaning: "Buku Pelajaran" },
            { image: "assets/hanyu1_clean/img_023.jpg", hanzi: "笔 (Bǐ)", pinyin: "bǐ", meaning: "Pensil / Kuas Tulis" },
            { image: "assets/hanyu1_clean/img_024.jpg", hanzi: "书包 (Shūbāo)", pinyin: "shūbāo", meaning: "Tas Sekolah" }
          ],
          quizzes: [
            { question: "Apa arti dari kata '书' (shū)?", options: ["Pensil", "Tas", "Buku", "Meja"], answer: 2, explanation: "'书' (shū) artinya adalah Buku." },
            { question: "'这是我的书' diterjemahkan menjadi...", options: ["Itu buku kamu", "Ini buku saya", "Dia membaca buku", "Buku sangat bagus"], answer: 1, explanation: "'这是我的书' artinya 'Ini adalah bukuku'." }
          ]
        },
        {
          id: 7,
          title: "第七课：他是谁",
          pinyin: "Dì qī kè: Tā shì shéi",
          meaning: "Pelajaran 7: Siapakah Dia?",
          intro: "Mengenal kata ganti orang dan teman-teman sekelas baru!",
          story: [
            { hanzi: "他是谁？", pinyin: "Tā shì shéi?", indonesian: "Siapakah dia (laki-laki)?" },
            { hanzi: "他是我的同学，他叫小明。", pinyin: "Tā shì wǒ de tóngxué, tā jiào Xiǎomíng.", indonesian: "Dia teman sekelasku, namanya Xiaoming." },
            { hanzi: "她是谁？她是我的朋友，她叫小红。", pinyin: "Tā shì shéi? Tā shì wǒ de péngyou, tā jiào Xiǎohóng.", indonesian: "Siapakah dia (perempuan)? Dia temanku, namanya Xiaohong." }
          ],
          vocabulary: [
            { hanzi: "他", pinyin: "tā", indonesian: "Dia (Laki-laki)", strokeCount: 5, strokeNames: ["撇", "竖", "横折钩", "竖", "竖弯钩"], guide: "Radikal orang (亻) di kiri." },
            { hanzi: "她", pinyin: "tā", indonesian: "Dia (Perempuan)", strokeCount: 6, strokeNames: ["撇点", "撇", "提", "横折钩", "竖", "竖弯钩"], guide: "Radikal perempuan (女) di kiri." },
            { hanzi: "谁", pinyin: "shéi / shuí", indonesian: "Siapa", strokeCount: 10, strokeNames: ["点", "横折提", "撇", "竖", "点", "横", "横", "横", "竖", "横"], guide: "Radikal bicara (讠) di sebelah kiri." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_026.jpg", hanzi: "他 (Tā - Laki-laki)", pinyin: "tā", meaning: "Dia (anak laki-laki)" },
            { image: "assets/hanyu1_clean/img_027.jpg", hanzi: "她 (Tā - Perempuan)", pinyin: "tā", meaning: "Dia (anak perempuan)" },
            { image: "assets/hanyu1_clean/img_028.jpg", hanzi: "朋友 (Péngyou)", pinyin: "péngyou", meaning: "Dua Sahabat Bergandengan" }
          ],
          quizzes: [
            { question: "Perbedaan karakter '他' dan '她' adalah...", options: ["'他' untuk laki-laki, '她' untuk perempuan", "'他' untuk hewan, '她' untuk tumbuhan", "Sama saja tidak ada bedanya", "'他' jamak, '她' tunggal"], answer: 0, explanation: "'他' memiliki radikal orang (亻) untuk laki-laki, sedangkan '她' memiliki radikal wanita (女) untuk perempuan." }
          ]
        },
        {
          id: 8,
          title: "第八课：我去学校",
          pinyin: "Dì bā kè: Wǒ qù xuéxiào",
          meaning: "Pelajaran 8: Saya Pergi ke Sekolah",
          intro: "Semangat berangkat ke sekolah rimba dinosaurus bersama sahabat!",
          story: [
            { hanzi: "太阳照，花儿笑。", pinyin: "Tàiyáng zhào, huār xiào.", indonesian: "Matahari bersinar, bunga-bunga tersenyum." },
            { hanzi: "背上小书包，我去上学校。", pinyin: "Bēi shàng xiǎo shūbāo, wǒ qù shàng xuéxiào.", indonesian: "Gendong tas ransel kecil, aku pergi ke sekolah." },
            { hanzi: "见了老师问声好，见了同学招招手。", pinyin: "Jiàn le lǎoshī wèn shēng hǎo, jiàn le tóngxué zhāo zhāoshǒu.", indonesian: "Bertemu guru ucapkan salam, bertemu kawan melambaikan tangan." }
          ],
          vocabulary: [
            { hanzi: "去", pinyin: "qù", indonesian: "Pergi", strokeCount: 5, strokeNames: ["横", "竖", "横", "撇折", "点"], guide: "Tanah (土) di atas dan (厶) di bawah." },
            { hanzi: "学", pinyin: "xué", indonesian: "Belajar", strokeCount: 8, strokeNames: ["点", "点", "撇", "点", "横撇", "横撇", "竖钩", "横"], guide: "Atap di atas dan anak (子) di bawah." },
            { hanzi: "校", pinyin: "xiào", indonesian: "Sekolah", strokeCount: 10, strokeNames: ["横", "竖", "撇", "点", "点", "横", "撇", "点", "撇", "捺"], guide: "Pohon (木) di kiri dan persimpangan (交) di kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_030.jpg", hanzi: "去学校", pinyin: "qù xuéxiào", meaning: "Berangkat ke Sekolah" },
            { image: "assets/hanyu1_clean/img_031.jpg", hanzi: "太阳照", pinyin: "tàiyáng zhào", meaning: "Matahari Bersinar Terang" },
            { image: "assets/hanyu1_clean/img_032.jpg", hanzi: "背书包", pinyin: "bēi shūbāo", meaning: "Menggendong Tas Sekolah" }
          ],
          quizzes: [
            { question: "Apa arti dari '学校' (xuéxiào)?", options: ["Rumah sakit", "Sekolah", "Taman", "Pasar"], answer: 1, explanation: "'学校' (xuéxiào) artinya adalah Sekolah." }
          ]
        },
        {
          id: 9,
          title: "第九课：几个苹果",
          pinyin: "Dì jiǔ kè: Jǐ gè píngguǒ",
          meaning: "Pelajaran 9: Berapa Banyak Apel?",
          intro: "Belajar menanyakan jumlah buah apel segar di hutan purba!",
          story: [
            { hanzi: "桌上有几个苹果？", pinyin: "Zhuō shàng yǒu jǐ gè píngguǒ?", indonesian: "Ada berapa buah apel di atas meja?" },
            { hanzi: "桌上有五个苹果。", pinyin: "Zhuō shàng yǒu wǔ gè píngguǒ.", indonesian: "Di atas meja ada lima buah apel." },
            { hanzi: "红红的苹果真好吃！", pinyin: "Hóng hóng de píngguǒ zhēn hǎochī!", indonesian: "Apel merah sungguh lezat dimakan!" }
          ],
          vocabulary: [
            { hanzi: "几", pinyin: "jǐ", indonesian: "Berapa (jumlah < 10)", strokeCount: 2, strokeNames: ["撇", "横折弯钩"], guide: "Hanya dua goresan mudah." },
            { hanzi: "个", pinyin: "gè", indonesian: "Satuan (buah, ekor, orang)", strokeCount: 3, strokeNames: ["撇", "捺", "竖"], guide: "Payung atas (人) dan garis lurus tegak (丨)." },
            { hanzi: "果", pinyin: "guǒ", indonesian: "Buah", strokeCount: 8, strokeNames: ["竖", "横折", "横", "横", "横", "竖", "撇", "捺"], guide: "Ladang (田) di atas dan pohon (木) di bawah." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_035.jpg", hanzi: "苹果 (Píngguǒ)", pinyin: "píngguǒ", meaning: "Buah Apel Merah" },
            { image: "assets/hanyu1_clean/img_036.jpg", hanzi: "五个苹果", pinyin: "wǔ gè píngguǒ", meaning: "5 Buah Apel di Keranjang" },
            { image: "assets/hanyu1_clean/img_037.jpg", hanzi: "桌子 (Zhuōzi)", pinyin: "zhuōzi", meaning: "Meja Kayu" }
          ],
          quizzes: [
            { question: "Kata tanya untuk menanyakan jumlah benda adalah...", options: ["什么 (shénme)", "几 (jǐ)", "哪 (nǎ)", "谁 (shéi)"], answer: 1, explanation: "'几' (jǐ) digunakan untuk menanyakan berapa buah/ekor." }
          ]
        },
        {
          id: 10,
          title: "第十课：我们的教室",
          pinyin: "Dì shí kè: Wǒmen de jiàoshì",
          meaning: "Pelajaran 10: Ruang Kelas Kami",
          intro: "Mengamati ruang kelas yang bersih, terang, dan nyaman!",
          story: [
            { hanzi: "这是我们的教室。", pinyin: "Zhè shì wǒmen de jiàoshì.", indonesian: "Ini adalah ruang kelas kami." },
            { hanzi: "教室里有黑板、桌子和椅子。", pinyin: "Jiàoshì lǐ yǒu hēibǎn, zhuōzi hé yǐzi.", indonesian: "Di dalam kelas ada papan tulis hitam, meja, dan kursi." },
            { hanzi: "我们的教室又大又干净。", pinyin: "Wǒmen de jiàoshì yòu dà yòu gānjìng.", indonesian: "Ruang kelas kami besar dan juga bersih." }
          ],
          vocabulary: [
            { hanzi: "门", pinyin: "mén", indonesian: "Pintu", strokeCount: 3, strokeNames: ["点", "竖", "横折钩"], guide: "Bentuk menyerupai kusen pintu gerbang." },
            { hanzi: "白", pinyin: "bái", indonesian: "Putih", strokeCount: 5, strokeNames: ["撇", "竖", "横折", "横", "横"], guide: "Matahari (日) dengan titik miring di atas." },
            { hanzi: "黑", pinyin: "hēi", indonesian: "Hitam", strokeCount: 12, strokeNames: ["竖", "横折", "点", "撇", "横", "竖", "横", "提", "点", "点", "点", "点"], guide: "Empat titik api di bawah (灬)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_040.jpg", hanzi: "教室 (Jiàoshì)", pinyin: "jiàoshì", meaning: "Ruang Kelas Sekolah" },
            { image: "assets/hanyu1_clean/img_041.jpg", hanzi: "黑板 (Hēibǎn)", pinyin: "hēibǎn", meaning: "Papan Tulis" },
            { image: "assets/hanyu1_clean/img_042.jpg", hanzi: "桌子和椅子", pinyin: "zhuōzi hé yǐzi", meaning: "Meja dan Kursi Belajar" }
          ],
          quizzes: [
            { question: "Apa arti dari '黑板' (hēibǎn)?", options: ["Pintu", "Jendela", "Papan tulis", "Buku tulis"], answer: 2, explanation: "'黑板' (hēibǎn) secara harfiah adalah papan hitam (papan tulis)." }
          ]
        },
        {
          id: 11,
          title: "第十一课：大小多少",
          pinyin: "Dì shíyī kè: Dà xiǎo duō shǎo",
          meaning: "Pelajaran 11: Besar, Kecil, Banyak, Sedikit",
          intro: "Membandingkan ukuran dan kuantitas bersama binatang purba!",
          story: [
            { hanzi: "一个大，一个小，一只黄牛一只猫。", pinyin: "Yī gè dà, yī gè xiǎo, yī zhī huángniú yī zhī māo.", indonesian: "Satu besar satu kecil, seekor sapi kuning seekor kucing." },
            { hanzi: "一边多，一边少，一群鸭子一只鸟。", pinyin: "Yī biān duō, yī biān shǎo, yī qún yāzi yī zhī niǎo.", indonesian: "Sebelah banyak sebelah sedikit, sekawanan bebek seekor burung." },
            { hanzi: "一个大，一个小，一个西瓜一颗枣。", pinyin: "Yī gè dà, yī gè xiǎo, yī gè xīguā yī kē zǎo.", indonesian: "Satu besar satu kecil, satu semangka satu kurma." }
          ],
          vocabulary: [
            { hanzi: "多", pinyin: "duō", indonesian: "Banyak", strokeCount: 6, strokeNames: ["撇", "横撇", "点", "撇", "横撇", "点"], guide: "Dua bulan sabit (夕) bertumpuk atas bawah." },
            { hanzi: "少", pinyin: "shǎo", indonesian: "Sedikit", strokeCount: 4, strokeNames: ["竖", "撇", "点", "撇"], guide: "Kecil (小) dengan goresan miring panjang di bawah." },
            { hanzi: "鸟", pinyin: "niǎo", indonesian: "Burung", strokeCount: 5, strokeNames: ["撇", "横折钩", "点", "竖折折钩", "横"], guide: "Bentuk piktograf burung dengan mata dan ekor." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_045.jpg", hanzi: "黄牛 (Huángniú)", pinyin: "huángniú", meaning: "Sapi Kuning Besar" },
            { image: "assets/hanyu1_clean/img_046.jpg", hanzi: "小鸟 (Xiǎoniǎo)", pinyin: "xiǎoniǎo", meaning: "Burung Kecil Terbang" },
            { image: "assets/hanyu1_clean/img_047.jpg", hanzi: "西瓜 (Xīguā)", pinyin: "xīguā", meaning: "Semangka Besar Segar" }
          ],
          quizzes: [
            { question: "Lawan kata dari '多' (duō - banyak) adalah...", options: ["少 (shǎo)", "大 (dà)", "小 (xiǎo)", "高 (gāo)"], answer: 0, explanation: "Lawan dari '多' (banyak) adalah '少' (sedikit)." }
          ]
        },
        {
          id: 12,
          title: "第十二课：太阳和月亮",
          pinyin: "Dì shí'èr kè: Tàiyáng hé yuèliang",
          meaning: "Pelajaran 12: Matahari dan Bulan",
          intro: "Melihat indahnya langit siang dan malam di alam semesta!",
          story: [
            { hanzi: "太阳大，月亮小。", pinyin: "Tàiyáng dà, yuèliang xiǎo.", indonesian: "Matahari besar, bulan kecil." },
            { hanzi: "白天太阳出来了，天空明亮。", pinyin: "Báitiān tàiyáng chūlái le, tiānkōng míngliàng.", indonesian: "Siang hari matahari terbit, langit terang benderang." },
            { hanzi: "晚上月亮出来了，星星眨眼睛。", pinyin: "Wǎnshang yuèliang chūlái le, xīngxing zhǎ yǎnjing.", indonesian: "Malam hari bulan muncul, bintang-bintang berkedip." }
          ],
          vocabulary: [
            { hanzi: "日", pinyin: "rì", indonesian: "Matahari / Hari", strokeCount: 4, strokeNames: ["竖", "横折", "横", "横"], guide: "Kotak dengan garis matahari di tengah." },
            { hanzi: "月", pinyin: "yuè", indonesian: "Bulan", strokeCount: 4, strokeNames: ["撇", "横折钩", "横", "横"], guide: "Bentuk melengkung menyerupai bulan sabit." },
            { hanzi: "天", pinyin: "tiān", indonesian: "Langit / Hari", strokeCount: 4, strokeNames: ["横", "横", "撇", "捺"], guide: "Garis mendatar di atas orang besar (大)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu1_clean/img_050.jpg", hanzi: "太阳 (Tàiyáng)", pinyin: "tàiyáng", meaning: "Matahari Bersinar di Siang Hari" },
            { image: "assets/hanyu1_clean/img_051.jpg", hanzi: "月亮 (Yuèliang)", pinyin: "yuèliang", meaning: "Bulan Sabit di Malam Hari" },
            { image: "assets/hanyu1_clean/img_052.jpg", hanzi: "星星 (Xīngxing)", pinyin: "xīngxing", meaning: "Bintang Berkelap-kelip" }
          ],
          quizzes: [
            { question: "Apa arti dari '月亮' (yuèliang)?", options: ["Matahari", "Bulan", "Bintang", "Awan"], answer: 1, explanation: "'月亮' (yuèliang) artinya adalah Bulan." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Han Yu 2 (汉语 2)",
      grade: "Kelas 2 SD / Lanjutan Dasar",
      dinoGuide: { name: "Trixie si Triceratops", avatar: "🦏", desc: "Ayo belajar percakapan sehari-hari, jam, waktu, dan hewan bersama Trixie!" },
      color: "#0284c7",
      units: [
        {
          id: 1,
          title: "第一课：开学了",
          pinyin: "Dì yī kè: Kāixué le",
          meaning: "Pelajaran 1: Mulai Masuk Sekolah",
          intro: "Hari baru di tahun ajaran baru, bertemu teman-teman dengan gembira!",
          story: [
            { hanzi: "九月一日开学了。", pinyin: "Jiǔ yuè yī rì kāixué le.", indonesian: "Tanggal 1 September sekolah telah dimulai." },
            { hanzi: "我们背着书包上学去。", pinyin: "Wǒmen bēizhe shūbāo shàngxué qù.", indonesian: "Kami menggendong tas sekolah pergi ke sekolah." },
            { hanzi: "看见老师说声好，看见同学笑眯眯。", pinyin: "Kànjiàn lǎoshī shuō shēng hǎo, kànjiàn tóngxué xiàomīmī.", indonesian: "Melihat guru mengucapkan salam, melihat teman tersenyum manis." }
          ],
          vocabulary: [
            { hanzi: "开", pinyin: "kāi", indonesian: "Buka / Mulai", strokeCount: 4, strokeNames: ["横", "横", "撇", "竖"], guide: "Dua garis mendatar lalu dua garis tegak ke bawah." },
            { hanzi: "同", pinyin: "tóng", indonesian: "Sama / Bersama", strokeCount: 6, strokeNames: ["竖", "横折钩", "横", "竖", "横折", "横"], guide: "Kotak luar dengan (一口) di dalamnya." },
            { hanzi: "看", pinyin: "kàn", indonesian: "Melihat / Membaca", strokeCount: 9, strokeNames: ["撇", "横", "横", "撇", "竖", "横折", "横", "横", "横"], guide: "Tangan (手) memayungi mata (目) untuk melihat jauh." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_002.jpg", hanzi: "开学了", pinyin: "kāixué le", meaning: "Murid-murid Berangkat Sekolah" },
            { image: "assets/hanyu2_clean/img_003.jpg", hanzi: "看见老师", pinyin: "kànjiàn lǎoshī", meaning: "Menyapa Guru di Depan Kelas" },
            { image: "assets/hanyu2_clean/img_004.jpg", hanzi: "笑眯眯", pinyin: "xiàomīmī", meaning: "Tersenyum Riang Gembira" }
          ],
          quizzes: [
            { question: "Apa arti dari frasa '开学' (kāixué)?", options: ["Libur sekolah", "Mulai masuk sekolah", "Ujian sekolah", "Tutup sekolah"], answer: 1, explanation: "'开学' berarti masuk/mulai sekolah semester baru." }
          ]
        },
        {
          id: 2,
          title: "第二课：早上好",
          pinyin: "Dì èr kè: Zǎoshang hǎo",
          meaning: "Pelajaran 2: Selamat Pagi",
          intro: "Kicauan burung pagi menyambut petualangan belajar baru!",
          story: [
            { hanzi: "清早起来，空气真好。", pinyin: "Qīngzǎo qǐlái, kōngqì zhēn hǎo.", indonesian: "Bangun di pagi buta, udaranya sungguh segar." },
            { hanzi: "小鸟在树上叫：'早上好！'", pinyin: "Xiǎoniǎo zài shù shàng jiào: 'Zǎoshang hǎo!'", indonesian: "Burung kecil berkicau di atas pohon: 'Selamat pagi!'" },
            { hanzi: "小朋友们做早操，身体健康学习好。", pinyin: "Xiǎopéngyoumen zuò zǎocāo, shēntǐ jiànkāng xuéxí hǎo.", indonesian: "Anak-anak senam pagi, badan sehat belajar pun pintar." }
          ],
          vocabulary: [
            { hanzi: "起", pinyin: "qǐ", indonesian: "Bangun / Berdiri", strokeCount: 10, strokeNames: ["横", "竖", "横", "竖", "横", "撇", "捺", "横折", "横", "竖弯钩"], guide: "Lari (走) di sebelah kiri." },
            { hanzi: "树", pinyin: "shù", indonesian: "Pohon", strokeCount: 9, strokeNames: ["横", "竖", "撇", "点", "横", "竖", "提", "横折", "点"], guide: "Pohon kayu (木) di kiri, drum (壴) di tengah, jengkal (寸) di kanan." },
            { hanzi: "身", pinyin: "shēn", indonesian: "Tubuh / Badan", strokeCount: 7, strokeNames: ["撇", "竖", "横折钩", "横", "横", "撇", "提"], guide: "Bentuk tubuh manusia." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_006.jpg", hanzi: "做早操", pinyin: "zuò zǎocāo", meaning: "Anak-anak Senam Pagi" },
            { image: "assets/hanyu2_clean/img_007.jpg", hanzi: "大树", pinyin: "dàshù", meaning: "Pohon Rindang Hijau" },
            { image: "assets/hanyu2_clean/img_008.jpg", hanzi: "身体好", pinyin: "shēntǐ hǎo", meaning: "Tubuh Bugar dan Kuat" }
          ],
          quizzes: [
            { question: "Apa arti dari '早上好' (zǎoshang hǎo)?", options: ["Selamat siang", "Selamat pagi", "Selamat malam", "Selamat makan"], answer: 1, explanation: "'早上好' adalah ucapan Selamat Pagi." }
          ]
        },
        {
          id: 3,
          title: "第三课：你的书包在哪里",
          pinyin: "Dì sān kè: Nǐ de shūbāo zài nǎlǐ",
          meaning: "Pelajaran 3: Di Mana Tas Sekolahmu?",
          intro: "Belajar arah dan posisi benda (atas, bawah, dalam, luar)!",
          story: [
            { hanzi: "你的书包在哪里？", pinyin: "Nǐ de shūbāo zài nǎlǐ?", indonesian: "Di manakah tas sekolahmu?" },
            { hanzi: "我的书包在桌子上。", pinyin: "Wǒ de shūbāo zài zhuōzi shàng.", indonesian: "Tas sekolah saya ada di atas meja." },
            { hanzi: "书本在书包里，铅笔在盒子里。", pinyin: "Shūběn zài shūbāo lǐ, qiānbǐ zài hézi lǐ.", indonesian: "Buku ada di dalam tas, pensil ada di dalam kotak." }
          ],
          vocabulary: [
            { hanzi: "在", pinyin: "zài", indonesian: "Di / Berada di", strokeCount: 6, strokeNames: ["横", "撇", "竖", "横", "竖", "横"], guide: "Menyatakan keberadaan lokasi." },
            { hanzi: "上", pinyin: "shàng", indonesian: "Atas", strokeCount: 3, strokeNames: ["竖", "横", "横"], guide: "Garis tegak di atas garis dasar mendatar." },
            { hanzi: "下", pinyin: "xià", indonesian: "Bawah", strokeCount: 3, strokeNames: ["横", "竖", "点"], guide: "Garis dasar mendatar dengan titik di bawah." },
            { hanzi: "里", pinyin: "lǐ", indonesian: "Dalam", strokeCount: 7, strokeNames: ["竖", "横折", "横", "横", "竖", "横", "横"], guide: "Sawah (田) dan tanah (土) bergabung." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_010.jpg", hanzi: "桌子上 (Zhuōzi shàng)", pinyin: "zhuōzi shàng", meaning: "Di Atas Meja" },
            { image: "assets/hanyu2_clean/img_011.jpg", hanzi: "椅子下 (Yǐzi xià)", pinyin: "yǐzi xià", meaning: "Di Bawah Kursi" },
            { image: "assets/hanyu2_clean/img_012.jpg", hanzi: "书包里 (Shūbāo lǐ)", pinyin: "shūbāo lǐ", meaning: "Di Dalam Tas" }
          ],
          quizzes: [
            { question: "Apa arti dari '在桌子上' (zài zhuōzi shàng)?", options: ["Di dalam meja", "Di atas meja", "Di bawah meja", "Di samping meja"], answer: 1, explanation: "'上' (shàng) artinya atas, sehingga '在桌子上' = di atas meja." }
          ]
        },
        {
          id: 4,
          title: "第四课：今天星期几",
          pinyin: "Dì sì kè: Jīntiān xīngqī jǐ",
          meaning: "Pelajaran 4: Hari Ini Hari Apa?",
          intro: "Menghafal nama-nama hari Senin sampai Minggu dalam bahasa Mandarin!",
          story: [
            { hanzi: "今天星期几？", pinyin: "Jīntiān xīngqī jǐ?", indonesian: "Hari ini hari apa?" },
            { hanzi: "今天星期一，明天星期二。", pinyin: "Jīntiān xīngqīyī, míngtiān xīngqī'èr.", indonesian: "Hari ini hari Senin, besok hari Selasa." },
            { hanzi: "星期日，我们不去学校，我们去公园。", pinyin: "Xīngqīrì, wǒmen bù qù xuéxiào, wǒmen qù gōngyuán.", indonesian: "Hari Minggu kami tidak pergi ke sekolah, kami pergi ke taman." }
          ],
          vocabulary: [
            { hanzi: "今", pinyin: "jīn", indonesian: "Sekarang / Ini", strokeCount: 4, strokeNames: ["撇", "捺", "点", "横折撇"], guide: "Orang (人) di atas." },
            { hanzi: "星", pinyin: "xīng", indonesian: "Bintang / Pekan", strokeCount: 9, strokeNames: ["竖", "横折", "横", "横", "撇", "横", "横", "竖", "横"], guide: "Matahari (日) di atas lahir (生)." },
            { hanzi: "期", pinyin: "qī", indonesian: "Periode / Waktu", strokeCount: 12, strokeNames: ["横", "竖", "竖", "横", "横", "横", "撇", "点", "撇", "横折钩", "横", "横"], guide: "Keranjang (其) di kiri dan bulan (月) di kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_014.jpg", hanzi: "星期一 (Xīngqīyī)", pinyin: "xīngqīyī", meaning: "Hari Senin (Upacara Bendera)" },
            { image: "assets/hanyu2_clean/img_015.jpg", hanzi: "星期日 (Xīngqīrì)", pinyin: "xīngqīrì", meaning: "Hari Minggu (Liburan Santai)" },
            { image: "assets/hanyu2_clean/img_016.jpg", hanzi: "公园 (Gōngyuán)", pinyin: "gōngyuán", meaning: "Taman Rekreasi Hijau" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Hari Rabu' adalah...", options: ["星期一 (xīngqīyī)", "星期二 (xīngqī'èr)", "星期三 (xīngqīsān)", "星期四 (xīngqīsì)"], answer: 2, explanation: "Senin=星期一, Selasa=星期二, Rabu=星期三." }
          ]
        },
        {
          id: 5,
          title: "第五课：现在几点",
          pinyin: "Dì wǔ kè: Xiànzài jǐ diǎn",
          meaning: "Pelajaran 5: Jam Berapa Sekarang?",
          intro: "Membaca jam dinding purba dan mengatur jadwal harian!",
          story: [
            { hanzi: "现在几点？现在八点整。", pinyin: "Xiànzài jǐ diǎn? Xiànzài bā diǎn zhěng.", indonesian: "Jam berapa sekarang? Sekarang jam 8 tepat." },
            { hanzi: "十二点，我们吃午饭。", pinyin: "Shí'èr diǎn, wǒmen chī wǔfàn.", indonesian: "Jam 12, kami makan siang." },
            { hanzi: "下午四点半，我们放学回家。", pinyin: "Xiàwǔ sì diǎn bàn, wǒmen fàngxué huí jiā.", indonesian: "Pukul 4 setengah sore, kami pulang sekolah ke rumah." }
          ],
          vocabulary: [
            { hanzi: "现", pinyin: "xiàn", indonesian: "Kini / Sekarang", strokeCount: 8, strokeNames: ["横", "横", "竖", "提", "竖", "横折", "撇", "竖弯钩"], guide: "Batu giok (王) di kiri dan melihat (见) di kanan." },
            { hanzi: "点", pinyin: "diǎn", indonesian: "Titik / Jam", strokeCount: 9, strokeNames: ["竖", "横折", "横", "竖", "横", "点", "点", "点", "点"], guide: "Hitam atas dengan 4 titik api di bawah." },
            { hanzi: "半", pinyin: "bàn", indonesian: "Setengah / Separuh", strokeCount: 5, strokeNames: ["点", "撇", "横", "横", "竖"], guide: "Garis tegak membagi dua bagian sama rata." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_018.jpg", hanzi: "八点整 (Bā diǎn zhěng)", pinyin: "bā diǎn zhěng", meaning: "Jam 8 Tepat di Jam Dinding" },
            { image: "assets/hanyu2_clean/img_019.jpg", hanzi: "吃午饭 (Chī wǔfàn)", pinyin: "chī wǔfàn", meaning: "Makan Siang di Kantin" },
            { image: "assets/hanyu2_clean/img_020.jpg", hanzi: "回家 (Huí jiā)", pinyin: "huí jiā", meaning: "Pulang ke Rumah" }
          ],
          quizzes: [
            { question: "Arti dari '八点半' (bā diǎn bàn) adalah...", options: ["Jam 8 tepat", "Jam 8 lewat 30 menit (setengah sembilan)", "Jam 7.30", "Jam 9 tepat"], answer: 1, explanation: "'点' = jam, '半' = setengah (30 menit). '八点半' = jam 8.30." }
          ]
        },
        {
          id: 6,
          title: "第六课：我的家",
          pinyin: "Dì liù kè: Wǒ de jiā",
          meaning: "Pelajaran 6: Rumahku / Keluargaku",
          intro: "Berkunjung ke sarang dino yang hangat dan penuh kasih sayang!",
          story: [
            { hanzi: "我家有四口人：爸爸、妈妈、哥哥和我。", pinyin: "Wǒ jiā yǒu sì kǒu rén: bàba, māmā, gēge hé wǒ.", indonesian: "Keluargaku ada 4 orang: ayah, ibu, kakak laki-laki, dan saya." },
            { hanzi: "我爱我的家，家里充满欢笑。", pinyin: "Wǒ ài wǒ de jiā, jiālǐ chōngmǎn huānxiào.", indonesian: "Saya mencintai keluargaku, di rumah penuh dengan tawa ria." }
          ],
          vocabulary: [
            { hanzi: "家", pinyin: "jiā", indonesian: "Rumah / Keluarga", strokeCount: 10, strokeNames: ["点", "点", "横撇", "横", "撇", "弯钩", "撇", "撇", "撇", "捺"], guide: "Atap rumah (宀) di atas dan babi (豕) di bawah." },
            { hanzi: "哥", pinyin: "gē", indonesian: "Kakak laki-laki", strokeCount: 10, strokeNames: ["横", "竖", "横折", "横", "竖钩", "横", "竖", "横折", "横", "竖钩"], guide: "Dua komponen (可) bertumpuk atas bawah." },
            { hanzi: "弟", pinyin: "dì", indonesian: "Adik laki-laki", strokeCount: 7, strokeNames: ["点", "撇", "横折", "横", "竖折折钩", "竖", "撇"], guide: "Bentuk busur terikat." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_023.jpg", hanzi: "全家福", pinyin: "quánjiāfú", meaning: "Foto Seluruh Anggota Keluarga" },
            { image: "assets/hanyu2_clean/img_024.jpg", hanzi: "哥哥 (Gēge)", pinyin: "gēge", meaning: "Kakak Laki-laki Bermain Bola" },
            { image: "assets/hanyu2_clean/img_025.jpg", hanzi: "房子 (Fángzi)", pinyin: "fángzi", meaning: "Rumah Tempat Tinggal" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Kakak Laki-laki' adalah...", options: ["Dìdi", "Gēge", "Mèimei", "Jiějie"], answer: 1, explanation: "'Gēge' (哥哥) adalah kakak laki-laki." }
          ]
        },
        {
          id: 7,
          title: "第七课：我喜欢吃水果",
          pinyin: "Dì qī kè: Wǒ xǐhuan chī shuǐguǒ",
          meaning: "Pelajaran 7: Saya Suka Makan Buah",
          intro: "Mencicipi aneka buah-buahan tropis manis dan menyehatkan!",
          story: [
            { hanzi: "水果真多呀！有香蕉、苹果、西瓜和橘子。", pinyin: "Shuǐguǒ zhēn duō ya! Yǒu xiāngjiāo, píngguǒ, xīguā hé júzi.", indonesian: "Buah-buahan sungguh banyak ya! Ada pisang, apel, semangka, dan jeruk." },
            { hanzi: "我喜欢吃香蕉，妹妹喜欢吃苹果。", pinyin: "Wǒ xǐhuan chī xiāngjiāo, mèimei xǐhuan chī píngguǒ.", indonesian: "Saya suka makan pisang, adik perempuan suka makan apel." },
            { hanzi: "多吃水果身体好！", pinyin: "Duō chī shuǐguǒ shēntǐ hǎo!", indonesian: "Banyak makan buah membuat badan sehat!" }
          ],
          vocabulary: [
            { hanzi: "喜", pinyin: "xǐ", indonesian: "Suka / Gembira", strokeCount: 12, strokeNames: ["横", "竖", "横", "竖", "横折", "横", "点", "撇", "横", "竖", "横折", "横"], guide: "Drum di atas, mulut di tengah, mulut di bawah." },
            { hanzi: "欢", pinyin: "huān", indonesian: "Senang / Gembira", strokeCount: 6, strokeNames: ["横撇", "点", "撇", "横撇", "撇", "捺"], guide: "Radikal (又) di kiri dan (欠) di kanan." },
            { hanzi: "吃", pinyin: "chī", indonesian: "Makan", strokeCount: 6, strokeNames: ["竖", "横折", "横", "撇", "横", "竖弯钩"], guide: "Radikal mulut (口) di kiri dan (乞) di kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_028.jpg", hanzi: "香蕉 (Xiāngjiāo)", pinyin: "xiāngjiāo", meaning: "Pisang Kuning Manis" },
            { image: "assets/hanyu2_clean/img_029.jpg", hanzi: "西瓜 (Xīguā)", pinyin: "xīguā", meaning: "Semangka Merah Segar" },
            { image: "assets/hanyu2_clean/img_030.jpg", hanzi: "橘子 (Júzi)", pinyin: "júzi", meaning: "Jeruk Oranye Berair" }
          ],
          quizzes: [
            { question: "Apa arti dari '喜欢' (xǐhuan)?", options: ["Tidak suka", "Suka / Gemar", "Membeli", "Melihat"], answer: 1, explanation: "'喜欢' (xǐhuan) artinya Suka / Gemar." }
          ]
        },
        {
          id: 8,
          title: "第八课：喝水",
          pinyin: "Dì bā kè: Hē shuǐ",
          meaning: "Pelajaran 8: Minum Air",
          intro: "Pentingnya minum air bersih untuk kesehatan tubuh dino!",
          story: [
            { hanzi: "口渴了，要喝水。", pinyin: "Kǒu kě le, yào hē shuǐ.", indonesian: "Haus rasanya, mau minum air." },
            { hanzi: "请给我一杯水，谢谢！", pinyin: "Qǐng gěi wǒ yī bēi shuǐ, xièxiè!", indonesian: "Tolong beri saya segelas air, terima kasih!" },
            { hanzi: "不客气！", pinyin: "Bù kèqi!", indonesian: "Sama-sama!" }
          ],
          vocabulary: [
            { hanzi: "喝", pinyin: "hē", indonesian: "Minum", strokeCount: 12, strokeNames: ["竖", "横折", "横", "竖", "横折", "横", "横", "撇", "横折钩", "撇", "点", "竖折"], guide: "Radikal mulut (口) di kiri." },
            { hanzi: "水", pinyin: "shuǐ", indonesian: "Air", strokeCount: 4, strokeNames: ["竖钩", "横撇", "撇", "捺"], guide: "Tengah dulu baru kiri dan kanan (先中间后两边)." },
            { hanzi: "谢", pinyin: "xiè", indonesian: "Terima kasih", strokeCount: 12, strokeNames: ["点", "横折提", "撇", "竖", "横折钩", "横", "横", "撇", "提", "横", "竖钩", "点"], guide: "Bicara (讠) di kiri, badan (身) tengah, jengkal (寸) kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_033.jpg", hanzi: "喝水 (Hē shuǐ)", pinyin: "hē shuǐ", meaning: "Minum Air dari Gelas" },
            { image: "assets/hanyu2_clean/img_034.jpg", hanzi: "谢谢 (Xièxiè)", pinyin: "xièxiè", meaning: "Mengucapkan Terima Kasih" },
            { image: "assets/hanyu2_clean/img_035.jpg", hanzi: "一杯水", pinyin: "yī bēi shuǐ", meaning: "Segelas Air Bening" }
          ],
          quizzes: [
            { question: "Bagaimana membalas ucapan '谢谢' (xièxiè)?", options: ["Nǐ hǎo", "Zàijiàn", "Bù kèqi", "Duìbuqǐ"], answer: 2, explanation: "'不客气' (bù kèqi) berarti Sama-sama / Jangan sungkan." }
          ]
        },
        {
          id: 9,
          title: "第九课：在动物园",
          pinyin: "Dì jiǔ kè: Zài dòngwùyuán",
          meaning: "Pelajaran 9: Di Kebun Binatang",
          intro: "Melihat aneka binatang lucu: panda, monyet, harimau, dan burung!",
          story: [
            { hanzi: "动物园里真热闹！", pinyin: "Dòngwùyuán lǐ zhēn rènao!", indonesian: "Di kebun binatang sungguh ramai!" },
            { hanzi: "大熊猫在吃竹子，小猴子在爬树。", pinyin: "Dà xióngmāo zài chī zhúzi, xiǎo hóuzi zài pá shù.", indonesian: "Panda besar sedang makan bambu, monyet kecil sedang memanjat pohon." },
            { hanzi: "大象的鼻子长长，小鸟在天空中飞。", pinyin: "Dàxiàng de bízi chángcháng, xiǎoniǎo zài tiānkōng zhōng fēi.", indonesian: "Belalai gajah sangat panjang, burung-burung kecil terbang di angkasa." }
          ],
          vocabulary: [
            { hanzi: "动", pinyin: "dòng", indonesian: "Bergerak", strokeCount: 6, strokeNames: ["横", "横", "竖", "提", "横折钩", "撇"], guide: "Awan (云) di kiri dan tenaga (力) di kanan." },
            { hanzi: "物", pinyin: "wù", indonesian: "Benda / Makhluk", strokeCount: 8, strokeNames: ["撇", "横", "竖", "提", "撇", "横折钩", "撇", "撇"], guide: "Sapi (牜) di kiri dan (勿) di kanan." },
            { hanzi: "飞", pinyin: "fēi", indonesian: "Terbang", strokeCount: 3, strokeNames: ["横折弯钩", "撇", "点"], guide: "Menyerupai sayap burung yang mengepak." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_038.jpg", hanzi: "大熊猫 (Dà xióngmāo)", pinyin: "dà xióngmāo", meaning: "Panda Raksasa Lucu Makan Bambu" },
            { image: "assets/hanyu2_clean/img_039.jpg", hanzi: "猴子 (Hóuzi)", pinyin: "hóuzi", meaning: "Monyet Memanjat Pohon" },
            { image: "assets/hanyu2_clean/img_040.jpg", hanzi: "大象 (Dàxiàng)", pinyin: "dàxiàng", meaning: "Gajah Berbelalai Panjang" }
          ],
          quizzes: [
            { question: "Apa arti dari '大熊猫' (dà xióngmāo)?", options: ["Gajah", "Panda Raksasa", "Monyet", "Harimau"], answer: 1, explanation: "'大熊猫' adalah Panda Raksasa." }
          ]
        },
        {
          id: 10,
          title: "第十课：我会游泳",
          pinyin: "Dì shí kè: Wǒ huì yóuyǒng",
          meaning: "Pelajaran 10: Saya Bisa Berenang",
          intro: "Menunjukkan kemampuan dan bakat olahraga yang hebat!",
          story: [
            { hanzi: "你会游泳吗？我会游泳。", pinyin: "Nǐ huì yóuyǒng ma? Wǒ huì yóuyǒng.", indonesian: "Apakah kamu bisa berenang? Saya bisa berenang." },
            { hanzi: "哥哥会踢足球，姐姐会跳舞。", pinyin: "Gēge huì tī zúqiú, jiějie huì tiàowǔ.", indonesian: "Kakak laki-laki bisa main sepak bola, kakak perempuan bisa menari." },
            { hanzi: "我们都爱运动！", pinyin: "Wǒmen dōu ài yùndòng!", indonesian: "Kami semua gemar berolahraga!" }
          ],
          vocabulary: [
            { hanzi: "会", pinyin: "huì", indonesian: "Bisa / Mampu", strokeCount: 6, strokeNames: ["撇", "捺", "横", "横", "撇折", "点"], guide: "Orang (人) di atas dan (云) di bawah." },
            { hanzi: "游", pinyin: "yóu", indonesian: "Berenang / Berkelana", strokeCount: 12, strokeNames: ["点", "点", "提", "点", "横", "横折钩", "撇", "撇", "竖", "横", "横折钩", "横"], guide: "Tiga titik air (氵) di kiri." },
            { hanzi: "踢", pinyin: "tī", indonesian: "Menendang", strokeCount: 15, strokeNames: ["竖", "横折", "横", "竖", "横", "竖", "提", "竖", "横折", "横", "横", "撇", "横折钩", "撇", "撇"], guide: "Radikal kaki (足) di kiri." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_043.jpg", hanzi: "游泳 (Yóuyǒng)", pinyin: "yóuyǒng", meaning: "Berenang di Air Segar" },
            { image: "assets/hanyu2_clean/img_044.jpg", hanzi: "踢足球 (Tī zúqiú)", pinyin: "tī zúqiú", meaning: "Menendang Bola Sepak" },
            { image: "assets/hanyu2_clean/img_045.jpg", hanzi: "跳舞 (Tiàowǔ)", pinyin: "tiàowǔ", meaning: "Menari dengan Lincah" }
          ],
          quizzes: [
            { question: "Kalimat '我会游泳' artinya adalah...", options: ["Saya mau makan", "Saya bisa berenang", "Saya suka berlari", "Saya pergi mandi"], answer: 1, explanation: "'会' = bisa, '游泳' = berenang." }
          ]
        },
        {
          id: 11,
          title: "第十一课：买东西",
          pinyin: "Dì shíyī kè: Mǎi dōngxi",
          meaning: "Pelajaran 11: Berbelanja",
          intro: "Belajar percakapan berbelanja dan menanyakan harga barang!",
          story: [
            { hanzi: "你想买什么？我想买一支铅笔和一本练习本。", pinyin: "Nǐ xiǎng mǎi shénme? Wǒ xiǎng mǎi yī zhī qiānbǐ hé yī běn liànxíběn.", indonesian: "Kamu mau beli apa? Saya ingin membeli sebuah pensil dan sebuah buku latihan." },
            { hanzi: "一共多少钱？一共五块钱。", pinyin: "Yīgòng duōshao qián? Yīgòng wǔ kuài qián.", indonesian: "Berapa harganya total? Semuanya lima yuan." }
          ],
          vocabulary: [
            { hanzi: "买", pinyin: "mǎi", indonesian: "Membeli", strokeCount: 6, strokeNames: ["横钩", "点", "撇", "横", "撇", "捺"], guide: "Beda dengan jual (卖) yang punya salib di atas." },
            { hanzi: "东", pinyin: "dōng", indonesian: "Timur / Barang", strokeCount: 5, strokeNames: ["横", "撇折", "竖钩", "撇", "点"], guide: "Garis mendatar lalu bentuk bungkus." },
            { hanzi: "西", pinyin: "xī", indonesian: "Barat / Barang", strokeCount: 6, strokeNames: ["横", "竖", "横折", "撇", "竖弯", "横"], guide: "Bentuk sarang burung saat matahari terbenam." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_048.jpg", hanzi: "买东西 (Mǎi dōngxi)", pinyin: "mǎi dōngxi", meaning: "Berbelanja di Toko Alat Tulis" },
            { image: "assets/hanyu2_clean/img_049.jpg", hanzi: "多少钱 (Duōshao qián)", pinyin: "duōshao qián", meaning: "Menanyakan Harga Barang" },
            { image: "assets/hanyu2_clean/img_050.jpg", hanzi: "铅笔 (Qiānbǐ)", pinyin: "qiānbǐ", meaning: "Pensil Kayu Runcing" }
          ],
          quizzes: [
            { question: "Apa arti dari '买东西' (mǎi dōngxi)?", options: ["Menjual rumah", "Berbelanja / Membeli barang", "Pergi jalan-jalan", "Makan bersama"], answer: 1, explanation: "'东西' secara harfiah timur-barat, bermakna 'barang'. '买东西' = berbelanja." }
          ]
        },
        {
          id: 12,
          title: "第十二课：新年好",
          pinyin: "Dì shí'èr kè: Xīnnián hǎo",
          meaning: "Pelajaran 12: Selamat Tahun Baru",
          intro: "Merayakan tahun baru dengan petasan, pakaian baru, dan sukacita!",
          story: [
            { hanzi: "新年好呀，新年好呀！祝贺大家新年好！", pinyin: "Xīnnián hǎo ya, xīnnián hǎo ya! Zhùhè dàjiā xīnnián hǎo!", indonesian: "Selamat tahun baru ya! Mengucapkan selamat tahun baru untuk semua!" },
            { hanzi: "我们唱歌，我们跳舞，祝贺大家新年好！", pinyin: "Wǒmen chànggē, wǒmen tiàowǔ, zhùhè dàjiā xīnnián hǎo!", indonesian: "Kita bernyanyi, kita menari, mengucapkan selamat tahun baru untuk semua!" },
            { hanzi: "穿新衣，戴新帽，大家高高兴兴过新年。", pinyin: "Chuān xīn yī, dài xīn mào, dàjiā gāogāoxìngxìng guò xīnnián.", indonesian: "Pakai baju baru, pakai topi baru, semua dengan gembira merayakan tahun baru." }
          ],
          vocabulary: [
            { hanzi: "新", pinyin: "xīn", indonesian: "Baru", strokeCount: 13, strokeNames: ["点", "横", "点", "撇", "横", "横", "竖", "撇", "捺", "撇", "撇", "横", "竖"], guide: "Cabang (立+木) dan kapak (斤)." },
            { hanzi: "年", pinyin: "nián", indonesian: "Tahun", strokeCount: 6, strokeNames: ["撇", "横", "横", "竖", "横", "竖"], guide: "Garis miring lalu dua mendatar dan tiang lurus tembus." },
            { hanzi: "乐", pinyin: "lè / yuè", indonesian: "Gembira / Musik", strokeCount: 5, strokeNames: ["撇", "竖折", "竖钩", "撇", "点"], guide: "Lima guratan ceria." }
          ],
          matchingPairs: [
            { image: "assets/hanyu2_clean/img_053.jpg", hanzi: "新年快乐", pinyin: "Xīnnián kuàilè", meaning: "Perayaan Tahun Baru Meriah" },
            { image: "assets/hanyu2_clean/img_054.jpg", hanzi: "穿新衣", pinyin: "chuān xīn yī", meaning: "Memakai Pakaian Baru Warna Merah" },
            { image: "assets/hanyu2_clean/img_055.jpg", hanzi: "唱歌跳舞", pinyin: "chànggē tiàowǔ", meaning: "Bernyanyi dan Menari Gembira" }
          ],
          quizzes: [
            { question: "Ucapan 'Selamat Tahun Baru' dalam bahasa Mandarin adalah...", options: ["Shēngrì kuàilè", "Xīnnián kuàilè / Xīnnián hǎo", "Zàijiàn", "Wǎn'ān"], answer: 1, explanation: "'新年快乐' (Xīnnián kuàilè) / '新年好' adalah ucapan Selamat Tahun Baru." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Han Yu 3 (汉语 3)",
      grade: "Kelas 3 SD / Tingkat Menengah Bawah",
      dinoGuide: { name: "Terry si Pterodactyl", avatar: "🦅", desc: "Terbang tinggi menjelajahi musim, cuaca, lingkungan, dan ulang tahun bersama Terry!" },
      color: "#8b5cf6",
      units: [
        {
          id: 1,
          title: "第一课：我的好朋友",
          pinyin: "Dì yī kè: Wǒ de hǎo péngyou",
          meaning: "Pelajaran 1: Teman Baikku",
          intro: "Mendeskripsikan ciri fisik dan sifat sahabat tercinta.",
          story: [
            { hanzi: "李强是我的好朋友。", pinyin: "Lǐ Qiáng shì wǒ de hǎo péngyou.", indonesian: "Li Qiang adalah teman baikku." },
            { hanzi: "他长得高高的，眼睛大大的，头发黑黑的。", pinyin: "Tā zhǎng de gāogāo de, yǎnjing dàdà de, tóufa hēihēi de.", indonesian: "Dia bertubuh tinggi, matanya besar, rambutnya hitam legam." },
            { hanzi: "我们每天一起上学，一起做作业，一起玩游戏。", pinyin: "Wǒmen měitiān yīqǐ shàngxué, yīqǐ zuò zuòyè, yīqǐ wán yóuxì.", indonesian: "Kami setiap hari berangkat sekolah bersama, mengerjakan PR bersama, dan bermain game bersama." }
          ],
          vocabulary: [
            { hanzi: "朋", pinyin: "péng", indonesian: "Teman", strokeCount: 8, strokeNames: ["撇", "横折钩", "横", "横", "撇", "横折钩", "横", "横"], guide: "Dua bulan (月) berdampingan erat." },
            { hanzi: "友", pinyin: "yǒu", indonesian: "Sahabat", strokeCount: 4, strokeNames: ["横", "撇", "横撇", "捺"], guide: "Dua tangan bersalaman hangat." },
            { hanzi: "高", pinyin: "gāo", indonesian: "Tinggi", strokeCount: 10, strokeNames: ["点", "横", "竖", "横折", "横", "竖", "横折钩", "竖", "横折", "横"], guide: "Bentuk menara tinggi bertingkat." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_002.jpg", hanzi: "好朋友 (Hǎo péngyou)", pinyin: "hǎo péngyou", meaning: "Dua Sahabat Saling Merangkul" },
            { image: "assets/hanyu3_clean/img_003.jpg", hanzi: "做作业 (Zuò zuòyè)", pinyin: "zuò zuòyè", meaning: "Mengerjakan PR di Meja Belajar" },
            { image: "assets/hanyu3_clean/img_004.jpg", hanzi: "玩游戏 (Wán yóuxì)", pinyin: "wán yóuxì", meaning: "Bermain Bersama di Lapangan" }
          ],
          quizzes: [
            { question: "Apa arti dari '好朋友' (hǎo péngyou)?", options: ["Guru baru", "Teman baik / Sahabat", "Orang tua", "Tetangga"], answer: 1, explanation: "'好朋友' (hǎo péngyou) artinya Sahabat / Teman Baik." }
          ]
        },
        {
          id: 2,
          title: "第二课：我们的校园",
          pinyin: "Dì èr kè: Wǒmen de xiàoyuán",
          meaning: "Pelajaran 2: Lingkungan Sekolah Kami",
          intro: "Menjelajahi keindahan gedung, taman bunga, dan lapangan sekolah.",
          story: [
            { hanzi: "我们的校园非常美丽。", pinyin: "Wǒmen de xiàoyuán fēicháng měilì.", indonesian: "Lingkungan sekolah kami sangatlah indah." },
            { hanzi: "教学楼前有绿绿的草坪和红红的花朵。", pinyin: "Jiàoxuélóu qián yǒu lǜlǜ de cǎopíng hé hónghóng de huāduǒ.", indonesian: "Di depan gedung belajar ada rumput hijau dan bunga-bunga merah merekah." },
            { hanzi: "操场上有许多同学在跑步、打球。", pinyin: "Cāochǎng shàng yǒu xǔduō tóngxué zài pǎobù, dǎqiú.", indonesian: "Di lapangan olahraga ada banyak murid sedang berlari dan bermain bola." }
          ],
          vocabulary: [
            { hanzi: "美", pinyin: "měi", indonesian: "Indah / Cantik", strokeCount: 9, strokeNames: ["点", "撇", "横", "横", "竖", "横", "横", "撇", "捺"], guide: "Domba besar (羊+大) melambangkan keindahan." },
            { hanzi: "丽", pinyin: "lì", indonesian: "Elok / Cantik", strokeCount: 7, strokeNames: ["横", "竖", "横折钩", "点", "横", "竖", "折"], guide: "Sepasang tanduk rusa yang indah." },
            { hanzi: "场", pinyin: "chǎng", indonesian: "Lapangan", strokeCount: 6, strokeNames: ["横", "竖", "提", "横折折折钩", "撇", "撇"], guide: "Tanah (土) di kiri dan (𠃓) di kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_006.jpg", hanzi: "美丽校园", pinyin: "měilì xiàoyuán", meaning: "Gedung Sekolah Bersih Indah" },
            { image: "assets/hanyu3_clean/img_007.jpg", hanzi: "大操场", pinyin: "dà cāochǎng", meaning: "Lapangan Olahraga yang Luas" },
            { image: "assets/hanyu3_clean/img_008.jpg", hanzi: "绿草坪", pinyin: "lǜ cǎopíng", meaning: "Hamparan Rumput Hijau Segar" }
          ],
          quizzes: [
            { question: "Arti dari '美丽' (měilì) adalah...", options: ["Kotor", "Indah / Cantik", "Kecil", "Jauh"], answer: 1, explanation: "'美丽' (měilì) artinya Indah atau Cantik." }
          ]
        },
        {
          id: 3,
          title: "第三课：今天的天气",
          pinyin: "Dì sān kè: Jīntiān de tiānqì",
          meaning: "Pelajaran 3: Cuaca Hari Ini",
          intro: "Mengenal berbagai kondisi cuaca: cerah, mendung, hujan, dan berangin!",
          story: [
            { hanzi: "今天天气晴朗，阳光明媚。", pinyin: "Jīntiān tiānqì qínglǎng, yángguāng míngmèi.", indonesian: "Hari ini cuaca cerah, sinar matahari bersinar terang." },
            { hanzi: "昨天下了雨，今天刮大风。", pinyin: "Zuótiān xià le yǔ, jīntiān guā dà fēng.", indonesian: "Kemarin turun hujan, hari ini angin bertiup kencang." },
            { hanzi: "晴天我们去爬山，雨天我们在家看书。", pinyin: "Qíngtiān wǒmen qù páshān, yǔtiān wǒmen zài jiā kàn shū.", indonesian: "Saat hari cerah kita mendaki gunung, saat hujan kita membaca buku di rumah." }
          ],
          vocabulary: [
            { hanzi: "晴", pinyin: "qíng", indonesian: "Cerah", strokeCount: 12, strokeNames: ["竖", "横折", "横", "横", "横", "横", "竖", "横", "竖", "横折钩", "横", "横"], guide: "Matahari (日) di kiri dan biru (青) di kanan." },
            { hanzi: "雨", pinyin: "yǔ", indonesian: "Hujan", strokeCount: 8, strokeNames: ["横", "竖", "横折钩", "竖", "点", "点", "点", "点"], guide: "Awan di atas dan 4 tetes air hujan jatuh." },
            { hanzi: "风", pinyin: "fēng", indonesian: "Angin", strokeCount: 4, strokeNames: ["撇", "横折弯钩", "撇", "点"], guide: "Bentuk tirai tertiup angin kencang." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_010.jpg", hanzi: "晴天 (Qíngtiān)", pinyin: "qíngtiān", meaning: "Hari Cerah Berawan" },
            { image: "assets/hanyu3_clean/img_011.jpg", hanzi: "下雨 (Xiàyǔ)", pinyin: "xiàyǔ", meaning: "Hujan Rintik-rintik Turun" },
            { image: "assets/hanyu3_clean/img_012.jpg", hanzi: "刮风 (Guāfēng)", pinyin: "guāfēng", meaning: "Angin Menerpa Dedaunan" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Turun Hujan' adalah...", options: ["晴天 (qíngtiān)", "下雨 (xiàyǔ)", "刮风 (guāfēng)", "下雪 (xiàxuě)"], answer: 1, explanation: "'下雨' (xiàyǔ) berarti turun hujan." }
          ]
        },
        {
          id: 4,
          title: "第四课：一年四季",
          pinyin: "Dì sì kè: Yī nián sìjì",
          meaning: "Pelajaran 4: Empat Musim Dalam Setahun",
          intro: "Menikmati pesona Musim Semi, Panas, Gugur, dan Dingin!",
          story: [
            { hanzi: "一年有四个季节：春季、夏季、秋季和冬季。", pinyin: "Yī nián yǒu sì gè jìjié: chūnjì, xiàjì, qiūjì hé dōngjì.", indonesian: "Satu tahun ada empat musim: musim semi, musim panas, musim gugur, dan musim dingin." },
            { hanzi: "春天花儿开，夏天树叶绿。", pinyin: "Chūntiān huār kāi, xiàtiān shùyè lǜ.", indonesian: "Musim semi bunga bermekaran, musim panas dedaunan hijau lebat." },
            { hanzi: "秋天果实熟，冬天雪花飘。", pinyin: "Qiūtiān guǒshí shú, dōngtiān xuěhuā piāo.", indonesian: "Musim gugur buah-buahan matang, musim dingin salju turun melayang." }
          ],
          vocabulary: [
            { hanzi: "春", pinyin: "chūn", indonesian: "Musim Semi", strokeCount: 9, strokeNames: ["横", "横", "横", "撇", "捺", "竖", "横折", "横", "横"], guide: "Tiga mendatar, orang besar, dan matahari (日)." },
            { hanzi: "夏", pinyin: "xià", indonesian: "Musim Panas", strokeCount: 10, strokeNames: ["横", "撇", "竖", "横折", "横", "横", "横", "撇", "横撇", "捺"], guide: "Orang memakai topi lebar di musim panas." },
            { hanzi: "秋", pinyin: "qiū", indonesian: "Musim Gugur", strokeCount: 9, strokeNames: ["撇", "横", "竖", "撇", "点", "点", "撇", "撇", "捺"], guide: "Padi (禾) menguning seperti api (火)." },
            { hanzi: "冬", pinyin: "dōng", indonesian: "Musim Dingin", strokeCount: 5, strokeNames: ["撇", "横撇", "捺", "点", "点"], guide: "Dua tetes kristal es di bagian bawah." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_014.jpg", hanzi: "春天 (Chūntiān)", pinyin: "chūntiān", meaning: "Bunga Mekar di Musim Semi" },
            { image: "assets/hanyu3_clean/img_015.jpg", hanzi: "夏天 (Xiàtiān)", pinyin: "xiàtiān", meaning: "Matahari Terik di Musim Panas" },
            { image: "assets/hanyu3_clean/img_016.jpg", hanzi: "冬天 (Dōngtiān)", pinyin: "dōngtiān", meaning: "Manusia Salju di Musim Dingin" }
          ],
          quizzes: [
            { question: "Urutan empat musim yang benar adalah...", options: ["Musim semi, panas, gugur, dingin (春夏秋冬)", "Musim dingin, gugur, panas, semi", "Panas, dingin, hujan, angin", "Gugur, semi, dingin, panas"], answer: 0, explanation: "Urutan musim: 春 (Semi), 夏 (Panas), 秋 (Gugur), 冬 (Dingin)." }
          ]
        },
        {
          id: 5,
          title: "第五课：祝你生日快乐",
          pinyin: "Dì wǔ kè: Zhù nǐ shēngrì kuàilè",
          meaning: "Pelajaran 5: Selamat Ulang Tahun",
          intro: "Pesta ulang tahun seru dengan kue tart, lilin, dan kado istimewa!",
          story: [
            { hanzi: "今天是小华的生日。", pinyin: "Jīntiān shì Xiǎohuá de shēngrì.", indonesian: "Hari ini adalah hari ulang tahun Xiaohua." },
            { hanzi: "朋友们送给他精美的礼物，大家一起吃蛋糕。", pinyin: "Péngyoumen sòng gěi tā jīngměi de lǐwù, dàjiā yīqǐ chī dàngāo.", indonesian: "Teman-teman memberikannya hadiah indah, semua bersama makan kue tart." },
            { hanzi: "我们一起唱生日歌：'祝你生日快乐！'", pinyin: "Wǒmen yīqǐ chàng shēngrì gē: 'Zhù nǐ shēngrì kuàilè!'", indonesian: "Kami bersama menyanyikan lagu ulang tahun: 'Selamat ulang tahun untukmu!'" }
          ],
          vocabulary: [
            { hanzi: "生", pinyin: "shēng", indonesian: "Lahir / Hidup", strokeCount: 5, strokeNames: ["撇", "横", "横", "竖", "横"], guide: "Tunas yang tumbuh dari tanah." },
            { hanzi: "快", pinyin: "kuài", indonesian: "Cepat / Gembira", strokeCount: 7, strokeNames: ["点", "点", "竖", "横折", "横", "撇", "捺"], guide: "Hati tegak (忄) di kiri dan (夬) di kanan." },
            { hanzi: "送", pinyin: "sòng", indonesian: "Memberi / Mengantar", strokeCount: 9, strokeNames: ["点", "撇", "横", "横", "撇", "点", "点", "横折折撇", "捺"], guide: "Memberikan hadiah dengan tulus hati." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_018.jpg", hanzi: "生日蛋糕 (Dàngāo)", pinyin: "shēngrì dàngāo", meaning: "Kue Tart Ulang Tahun dan Lilin" },
            { image: "assets/hanyu3_clean/img_019.jpg", hanzi: "送礼物 (Sòng lǐwù)", pinyin: "sòng lǐwù", meaning: "Memberikan Kado Kotak Pita" },
            { image: "assets/hanyu3_clean/img_020.jpg", hanzi: "唱生日歌", pinyin: "chàng shēngrì gē", meaning: "Menyanyi Bersama Sahabat" }
          ],
          quizzes: [
            { question: "Ucapan 'Selamat Ulang Tahun' dalam bahasa Mandarin adalah...", options: ["Xīnnián kuàilè", "Shēngrì kuàilè", "Zàijiàn", "Wǎn'ān"], answer: 1, explanation: "'祝你生日快乐' (Zhù nǐ shēngrì kuàilè) artinya Selamat Ulang Tahun." }
          ]
        },
        {
          id: 6,
          title: "第六课：去公园玩",
          pinyin: "Dì liù kè: Qù gōngyuán wán",
          meaning: "Pelajaran 6: Bermain ke Taman",
          intro: "Bermain ayunan, perosotan, dan layang-layang di taman bunga!",
          story: [
            { hanzi: "星期天，爸爸妈妈带我去公园玩。", pinyin: "Xīngqītiān, bàba māmā dài wǒ qù gōngyuán wán.", indonesian: "Hari Minggu, ayah dan ibu mengajak saya pergi ke taman bermain." },
            { hanzi: "公园里有大湖，湖里有红色的小金鱼。", pinyin: "Gōngyuán lǐ yǒu dà hú, hú lǐ yǒu hóngsè de xiǎo jīnyú.", indonesian: "Di dalam taman ada danau besar, di danau ada ikan mas koki merah." },
            { hanzi: "我们在草地上放风筝，风筝飞得高极了！", pinyin: "Wǒmen zài cǎodì shàng fàng fēngzheng, fēngzheng fēi de gāo jí le!", indonesian: "Kami menerbangkan layang-layang di rumput, layang-layang terbang sangat tinggi!" }
          ],
          vocabulary: [
            { hanzi: "玩", pinyin: "wán", indonesian: "Bermain", strokeCount: 8, strokeNames: ["横", "横", "竖", "提", "横", "横", "撇", "竖弯钩"], guide: "Batu giok (王) di kiri dan (元) di kanan." },
            { hanzi: "湖", pinyin: "hú", indonesian: "Danau", strokeCount: 12, strokeNames: ["点", "点", "提", "横", "竖", "竖", "横折", "横", "撇", "横折钩", "横", "横"], guide: "Tiga titik air (氵) dengan (胡)." },
            { hanzi: "鱼", pinyin: "yú", indonesian: "Ikan", strokeCount: 8, strokeNames: ["撇", "横撇", "竖", "横折", "横", "竖", "横", "横"], guide: "Bentuk kepala ikan, badan bersisik, dan ekor." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_023.jpg", hanzi: "放风筝", pinyin: "fàng fēngzheng", meaning: "Menerbangkan Layang-layang" },
            { image: "assets/hanyu3_clean/img_024.jpg", hanzi: "划船 (Huáchuán)", pinyin: "huáchuán", meaning: "Mendayung Perahu di Danau" },
            { image: "assets/hanyu3_clean/img_025.jpg", hanzi: "小金鱼 (Jīnyú)", pinyin: "xiǎo jīnyú", meaning: "Ikan Mas Koki Berenang" }
          ],
          quizzes: [
            { question: "Apa arti dari '放风筝' (fàng fēngzheng)?", options: ["Memancing ikan", "Menerbangkan layang-layang", "Naik sepeda", "Berenang di danau"], answer: 1, explanation: "'放风筝' artinya Menerbangkan Layang-layang." }
          ]
        },
        {
          id: 7,
          title: "第七课：在超级市场",
          pinyin: "Dì qī kè: Zài chāojí shìchǎng",
          meaning: "Pelajaran 7: Di Supermarket",
          intro: "Berbelanja kebutuhan sehari-hari di supermarket modern!",
          story: [
            { hanzi: "超级市场里的东西真多啊！", pinyin: "Chāojí shìchǎng lǐ de dōngxi zhēn duō a!", indonesian: "Barang-barang di supermarket sungguh banyak sekali!" },
            { hanzi: "有新鲜的蔬菜、水果，还有各种饮料和面包。", pinyin: "Yǒu xīnxiān de shūcài, shuǐguǒ, hái yǒu gè zhǒng yǐnliào hé miànbāo.", indonesian: "Ada sayuran segar, buah-buahan, serta aneka minuman dan roti." },
            { hanzi: "我们推着购物车，选了满满一车东西。", pinyin: "Wǒmen tuīzhe gòuwùchē, xuǎn le mǎnmǎn yī chē dōngxi.", indonesian: "Kami mendorong troli belanja, memilih satu troli penuh barang." }
          ],
          vocabulary: [
            { hanzi: "市", pinyin: "shì", indonesian: "Pasar / Kota", strokeCount: 5, strokeNames: ["点", "横", "竖", "横折钩", "竖"], guide: "Titik atas, mendatar, dan kain (巾) di bawah." },
            { hanzi: "包", pinyin: "bāo", indonesian: "Bungkus / Roti", strokeCount: 5, strokeNames: ["撇", "横折钩", "横折", "横", "竖弯钩"], guide: "Membungkus sesuatu di dalam." },
            { hanzi: "车", pinyin: "chē", indonesian: "Mobil / Gerobak", strokeCount: 4, strokeNames: ["横", "撇折", "横", "竖"], guide: "Piktograf roda dan poros kereta." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_028.jpg", hanzi: "超市 (Chāoshì)", pinyin: "chāoshì", meaning: "Gedung Supermarket Terang" },
            { image: "assets/hanyu3_clean/img_029.jpg", hanzi: "购物车 (Gòuwùchē)", pinyin: "gòuwùchē", meaning: "Troli Belanja Supermarket" },
            { image: "assets/hanyu3_clean/img_030.jpg", hanzi: "新鲜蔬菜", pinyin: "xīnxiān shūcài", meaning: "Sayur-mayur Segar Sehat" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Supermarket' adalah...", options: ["学校 (xuéxiào)", "超级市场 / 超市 (chāoshì)", "医院 (yīyuàn)", "公园 (gōngyuán)"], answer: 1, explanation: "'超级市场' (chāojí shìchǎng) disingkat '超市' (chāoshì) = Supermarket." }
          ]
        },
        {
          id: 8,
          title: "第八课：看医生",
          pinyin: "Dì bā kè: Kàn yīshēng",
          meaning: "Pelajaran 8: Memeriksa ke Dokter",
          intro: "Belajar kosakata kesehatan, sakit flu, dan resep dokter yang baik!",
          story: [
            { hanzi: "小明生病了，妈妈带他去医院看医生。", pinyin: "Xiǎomíng shēngbìng le, māmā dài tā qù yīyuàn kàn yīshēng.", indonesian: "Xiaoming jatuh sakit, ibu membawanya ke rumah sakit menemui dokter." },
            { hanzi: "医生量了体温，说：'你感冒了，要多喝水，多休息。'", pinyin: "Yīshēng liáng le tǐwēn, shuō: 'Nǐ gǎnmào le, yào duō hē shuǐ, duō xiūxi.'", indonesian: "Dokter mengukur suhu tubuh dan berkata: 'Kamu kena flu, harus banyak minum air dan banyak istirahat.'" },
            { hanzi: "吃了药，小明的病很快就好了。", pinyin: "Chī le yào, Xiǎomíng de bìng hěn kuài jiù hǎo le.", indonesian: "Setelah minum obat, sakit Xiaoming segera sembuh." }
          ],
          vocabulary: [
            { hanzi: "医", pinyin: "yī", indonesian: "Dokter / Medis", strokeCount: 7, strokeNames: ["横", "撇", "点", "横", "横", "撇", "竖折"], guide: "Kotak terbuka (匚) berisi anak panah (矢)." },
            { hanzi: "院", pinyin: "yuàn", indonesian: "Institusi / Gedung", strokeCount: 9, strokeNames: ["横折折撇", "竖", "点", "点", "横撇", "横", "横", "撇", "竖弯钩"], guide: "Bukit (阝) di sebelah kiri." },
            { hanzi: "病", pinyin: "bìng", indonesian: "Penyakit / Sakit", strokeCount: 10, strokeNames: ["点", "横", "撇", "点", "提", "横", "横", "竖", "横", "竖"], guide: "Radikal penyakit (疒) di luar." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_033.jpg", hanzi: "医生 (Yīshēng)", pinyin: "yīshēng", meaning: "Dokter Memakai Stetoskop" },
            { image: "assets/hanyu3_clean/img_034.jpg", hanzi: "医院 (Yīyuàn)", pinyin: "yīyuàn", meaning: "Gedung Rumah Sakit Palang Merah" },
            { image: "assets/hanyu3_clean/img_035.jpg", hanzi: "吃药 (Chī yào)", pinyin: "chī yào", meaning: "Minum Obat untuk Sembuh" }
          ],
          quizzes: [
            { question: "Apa arti dari '医院' (yīyuàn)?", options: ["Sekolah", "Rumah sakit", "Kantor polisi", "Bank"], answer: 1, explanation: "'医院' (yīyuàn) artinya adalah Rumah Sakit." }
          ]
        },
        {
          id: 9,
          title: "第九课：问路",
          pinyin: "Dì jiǔ kè: Wèn lù",
          meaning: "Pelajaran 9: Bertanya Arah Jalan",
          intro: "Belajar petunjuk arah: belok kiri, belok kanan, lurus ke depan!",
          story: [
            { hanzi: "请问，去图书馆怎么走？", pinyin: "Qǐngwèn, qù túshūguǎn zěnme zǒu?", indonesian: "Permisi, bagaimana jalan menuju ke perpustakaan?" },
            { hanzi: "一直往前走，到了十字路口向左拐。", pinyin: "Yīzhí wǎng qián zǒu, dào le shízì lùkǒu xiàng zuǒ guǎi.", indonesian: "Jalan lurus terus ke depan, sampai di perempatan belok ke kiri." },
            { hanzi: "图书馆就在右边，谢谢您！", pinyin: "Túshūguǎn jiù zài yòubiān, xièxiè nín!", indonesian: "Perpustakaan ada tepat di sebelah kanan, terima kasih Pak/Bu!" }
          ],
          vocabulary: [
            { hanzi: "问", pinyin: "wèn", indonesian: "Bertanya", strokeCount: 6, strokeNames: ["点", "竖", "横折钩", "竖", "横折", "横"], guide: "Mulut (口) di dalam pintu gerbang (门)." },
            { hanzi: "路", pinyin: "lù", indonesian: "Jalan", strokeCount: 13, strokeNames: ["竖", "横折", "横", "竖", "横", "竖", "提", "撇", "横撇", "捺", "竖", "横折", "横"], guide: "Kaki (足) di kiri dan (各) di kanan." },
            { hanzi: "左", pinyin: "zuǒ", indonesian: "Kiri", strokeCount: 5, strokeNames: ["横", "撇", "横", "竖", "横"], guide: "Tangan kiri memegang alat kerja (工)." },
            { hanzi: "右", pinyin: "yòu", indonesian: "Kanan", strokeCount: 5, strokeNames: ["横", "撇", "竖", "横折", "横"], guide: "Tangan kanan menyuap ke mulut (口)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_038.jpg", hanzi: "向左拐 (Xiàng zuǒ guǎi)", pinyin: "xiàng zuǒ guǎi", meaning: "Belok ke Arah Kiri" },
            { image: "assets/hanyu3_clean/img_039.jpg", hanzi: "向右拐 (Xiàng yòu guǎi)", pinyin: "xiàng yòu guǎi", meaning: "Belok ke Arah Kanan" },
            { image: "assets/hanyu3_clean/img_040.jpg", hanzi: "向前走 (Qián zǒu)", pinyin: "qián zǒu", meaning: "Jalan Lurus ke Depan" }
          ],
          quizzes: [
            { question: "Lawan kata dari '左' (zuǒ - kiri) adalah...", options: ["右 (yòu)", "前 (qián)", "后 (hòu)", "上 (shàng)"], answer: 0, explanation: "'左' (kiri) lawannya adalah '右' (kanan)." }
          ]
        },
        {
          id: 10,
          title: "第十课：在图书馆看书",
          pinyin: "Dì shí kè: Zài túshūguǎn kàn shū",
          meaning: "Pelajaran 10: Membaca Buku di Perpustakaan",
          intro: "Menjaga ketenangan dan menikmati membaca ribuan buku ilmu pengetahuan!",
          story: [
            { hanzi: "图书馆里非常安静。", pinyin: "Túshūguǎn lǐ fēicháng ānjìng.", indonesian: "Di dalam perpustakaan sangatlah tenang dan hening." },
            { hanzi: "架子上整整齐齐地摆满了各种图书。", pinyin: "Jiàzi shàng zhěngzhěngqíqí de bǎi mǎn le gè zhǒng túshū.", indonesian: "Di rak tersusun rapi penuh dengan berbagai macam buku bacaan." },
            { hanzi: "同学们都在认真地看书，不说话。", pinyin: "Tóngxuémen dōu zài rènzhēn de kàn shū, bù shuōhuà.", indonesian: "Murid-murid semuanya sedang membaca buku dengan sungguh-sungguh tanpa bersuara." }
          ],
          vocabulary: [
            { hanzi: "图", pinyin: "tú", indonesian: "Gambar / Peta", strokeCount: 8, strokeNames: ["竖", "横折", "撇", "点", "横", "撇", "点", "横"], guide: "Kotak besar membungkus (冬)." },
            { hanzi: "馆", pinyin: "guǎn", indonesian: "Gedung / Aula", strokeCount: 11, strokeNames: ["撇", "横折提", "点", "点", "横撇", "竖", "横折", "横", "横折", "横", "竖折"], guide: "Makanan (饣) di kiri dan pejabat (官) di kanan." },
            { hanzi: "静", pinyin: "jìng", indonesian: "Hening / Tenang", strokeCount: 14, strokeNames: ["横", "横", "竖", "横", "竖", "横折钩", "横", "横", "撇", "撇", "横折钩", "横", "横", "竖"], guide: "Biru (青) dan bersaing (争)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_043.jpg", hanzi: "图书馆 (Túshūguǎn)", pinyin: "túshūguǎn", meaning: "Ruang Baca Perpustakaan yang Tenang" },
            { image: "assets/hanyu3_clean/img_044.jpg", hanzi: "认真看书", pinyin: "rènzhēn kàn shū", meaning: "Membaca Buku dengan Konsentrasi" },
            { image: "assets/hanyu3_clean/img_045.jpg", hanzi: "保持安静", pinyin: "bǎochí ānjìng", meaning: "Tanda Jari di Bibir: Harap Tenang" }
          ],
          quizzes: [
            { question: "Apa arti dari '图书馆' (túshūguǎn)?", options: ["Bioskop", "Perpustakaan", "Stasiun", "Bandara"], answer: 1, explanation: "'图书馆' (túshūguǎn) adalah Perpustakaan." }
          ]
        },
        {
          id: 11,
          title: "第十一课：爱护小动物",
          pinyin: "Dì shíyī kè: Àihù xiǎo dòngwù",
          meaning: "Pelajaran 11: Menyayangi Hewan Kecil",
          intro: "Menjaga kelestarian satwa dan menyayangi hewan peliharaan!",
          story: [
            { hanzi: "小猫喵喵叫，小狗摇尾巴。", pinyin: "Xiǎomāo miāomiāo jiào, xiǎogǒu yáo wěiba.", indonesian: "Kucing kecil mengeong, anjing kecil menggoyangkan ekor." },
            { hanzi: "小动物是我们的好朋友，我们要爱护它们。", pinyin: "Xiǎo dòngwù shì wǒmen de hǎo péngyou, wǒmen yào àihù tāmen.", indonesian: "Hewan-hewan kecil adalah sahabat baik kita, kita harus merawat dan menyayangi mereka." },
            { hanzi: "不伤害小鸟，给流浪猫喂食物。", pinyin: "Bù shānghài xiǎoniǎo, gěi liúlàngmāo wèi shíwù.", indonesian: "Tidak menyakiti burung kecil, memberi makan kucing liar." }
          ],
          vocabulary: [
            { hanzi: "爱", pinyin: "ài", indonesian: "Cinta / Sayang", strokeCount: 10, strokeNames: ["撇", "点", "点", "撇", "点", "横撇", "横", "撇", "横撇", "捺"], guide: "Cakar atas, atap, dan hati yang menyayangi." },
            { hanzi: "猫", pinyin: "māo", indonesian: "Kucing", strokeCount: 11, strokeNames: ["撇", "弯钩", "撇", "横", "竖", "竖", "竖", "横折", "横", "竖", "横"], guide: "Radikal binatang berkaki empat (犭) di kiri." },
            { hanzi: "狗", pinyin: "gǒu", indonesian: "Anjing", strokeCount: 8, strokeNames: ["撇", "弯钩", "撇", "撇", "横撇", "竖", "横折", "横"], guide: "Radikal anjing (犭) dan (句)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_048.jpg", hanzi: "小猫 (Xiǎomāo)", pinyin: "xiǎomāo", meaning: "Kucing Lucu Mengeong" },
            { image: "assets/hanyu3_clean/img_049.jpg", hanzi: "小狗 (Xiǎogǒu)", pinyin: "xiǎogǒu", meaning: "Anjing Setia Menggoyangkan Ekor" },
            { image: "assets/hanyu3_clean/img_050.jpg", hanzi: "爱护动物", pinyin: "àihù dòngwù", meaning: "Memberi Makan Hewan Peliharaan" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Kucing' adalah...", options: ["狗 (gǒu)", "猫 (māo)", "鸟 (niǎo)", "鱼 (yú)"], answer: 1, explanation: "'猫' (māo) adalah Kucing." }
          ]
        },
        {
          id: 12,
          title: "第十二课：快乐的假期",
          pinyin: "Dì shí'èr kè: Kuàilè de jiàqī",
          meaning: "Pelajaran 12: Liburan yang Menyenangkan",
          intro: "Menikmati masa liburan sekolah bersama keluarga ke pantai dan pegunungan!",
          story: [
            { hanzi: "放假了！我们全家去海边度假。", pinyin: "Fàngjià le! Wǒmen quánjiā qù hǎibiān dùjià.", indonesian: "Libur telah tiba! Seluruh keluarga kami berlibur ke tepi pantai." },
            { hanzi: "金黄色的沙滩，碧蓝的大海，海风轻轻吹。", pinyin: "Jīnhuángsè de shātān, bìlán de dàhǎi, hǎifēng qīngqīng chuī.", indonesian: "Pasir pantai keemasan, laut biru jernih, angin sepoi-sepoi berhembus." },
            { hanzi: "我们捡贝壳，堆城堡，过得真快乐！", pinyin: "Wǒmen jiǎn bèiké, duī chéngbǎo, guò de zhēn kuàilè!", indonesian: "Kami memungut kerang, membuat istana pasir, sungguh liburan yang bahagia!" }
          ],
          vocabulary: [
            { hanzi: "假", pinyin: "jià / jiǎ", indonesian: "Liburan / Palsu", strokeCount: 11, strokeNames: ["撇", "竖", "横折", "横", "横", "竖", "横", "横折", "横", "撇", "捺"], guide: "Radikal orang (亻) dengan (叚)." },
            { hanzi: "海", pinyin: "hǎi", indonesian: "Laut", strokeCount: 10, strokeNames: ["点", "点", "提", "撇", "横", "竖", "横折钩", "点", "横", "点"], guide: "Tiga titik air (氵) dan setiap (每)." },
            { hanzi: "沙", pinyin: "shā", indonesian: "Pasir", strokeCount: 7, strokeNames: ["点", "点", "提", "竖", "撇", "点", "撇"], guide: "Tiga titik air (氵) dan sedikit (少)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu3_clean/img_053.jpg", hanzi: "美丽海滩", pinyin: "měilì hǎitān", meaning: "Pemandangan Laut Pantai Biru" },
            { image: "assets/hanyu3_clean/img_054.jpg", hanzi: "堆城堡", pinyin: "duī chéngbǎo", meaning: "Membuat Istana Pasir di Pantai" },
            { image: "assets/hanyu3_clean/img_055.jpg", hanzi: "捡贝壳", pinyin: "jiǎn bèiké", meaning: "Memungut Kerang Laut Cantik" }
          ],
          quizzes: [
            { question: "Arti dari kata '大海' (dàhǎi) adalah...", options: ["Gunung", "Laut / Samudra", "Hutan", "Sungai"], answer: 1, explanation: "'大海' (dàhǎi) artinya Lautan luas." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Han Yu 4 (汉语 4)",
      grade: "Kelas 4 SD / Tingkat Menengah",
      dinoGuide: { name: "Brachy si Brachiosaurus", avatar: "🦕", desc: "Menjelajahi sains, musik, teknologi, dan kebudayaan bersama Brachy berleher panjang!" },
      color: "#ea580c",
      units: [
        {
          id: 1,
          title: "第一课：开学的第一天",
          pinyin: "Dì yī kè: Kāixué de dì yī tiān",
          meaning: "Pelajaran 1: Hari Pertama Masuk Sekolah",
          intro: "Suasana gembira menyambut kelas baru dan buku pelajaran baru.",
          story: [
            { hanzi: "今天是开学的第一天，校园里处处充满欢声笑语。", pinyin: "Jīntiān shì kāixué de dì yī tiān, xiàoyuán lǐ chùchù chōngmǎn huānshēng xiàoyǔ.", indonesian: "Hari ini adalah hari pertama masuk sekolah, lingkungan sekolah dipenuhi canda dan tawa." },
            { hanzi: "我们升入了四年级，换了新教室，发了新课本。", pinyin: "Wǒmen shēng rù le sì niánjí, huàn le xīn jiàoshì, fā le xīn kèběn.", indonesian: "Kami naik ke kelas empat, berganti ruang kelas baru, dan dibagikan buku pelajaran baru." },
            { hanzi: "大家下定决心，新学期要更加努力学习！", pinyin: "Dàjiā xiàdìng juéxīn, xīn xuéqī yào gèngjiā nǔlì xuéxí!", indonesian: "Semua membulatkan tekad, di semester baru harus belajar lebih giat lagi!" }
          ],
          vocabulary: [
            { hanzi: "第", pinyin: "dì", indonesian: "Ke- (awalan urutan)", strokeCount: 11, strokeNames: ["撇", "横", "点", "撇", "横", "点", "横折", "横", "竖折折钩", "竖", "撇"], guide: "Radikal bambu (⺮) di atas." },
            { hanzi: "级", pinyin: "jí", indonesian: "Tingkat / Kelas", strokeCount: 6, strokeNames: ["撇折", "撇折", "提", "撇", "横折折撇", "捺"], guide: "Benang sutra (纟) dan (及)." },
            { hanzi: "努", pinyin: "nǔ", indonesian: "Berusaha keras", strokeCount: 7, strokeNames: ["女", "又", "力"], guide: "Budak (奴) di atas dan tenaga (力) di bawah." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_002.jpg", hanzi: "新学期", pinyin: "xīn xuéqī", meaning: "Upacara Menyambut Semester Baru" },
            { image: "assets/hanyu4_clean/img_003.jpg", hanzi: "新课本", pinyin: "xīn kèběn", meaning: "Buku Pelajaran Mandarin Baru" },
            { image: "assets/hanyu4_clean/img_004.jpg", hanzi: "努力学习", pinyin: "nǔlì xuéxí", meaning: "Belajar Tekun Penuh Semangat" }
          ],
          quizzes: [
            { question: "Apa arti dari '努力' (nǔlì)?", options: ["Malas-malasan", "Rajin / Berusaha keras", "Bermain santai", "Tidur nyenyak"], answer: 1, explanation: "'努力' (nǔlì) berarti Rajin atau Berusaha keras." }
          ]
        },
        {
          id: 2,
          title: "第二课：课外活动",
          pinyin: "Dì èr kè: Kèwài huódòng",
          meaning: "Pelajaran 2: Kegiatan Ekstrakurikuler",
          intro: "Mengembangkan bakat dan minat melalui klub tari, robotik, dan paduan suara!",
          story: [
            { hanzi: "我们学校有丰富多彩的课外活动。", pinyin: "Wǒmen xuéxiào yǒu fēngfù duōcǎi de kèwài huódòng.", indonesian: "Sekolah kami memiliki kegiatan ekstrakurikuler yang sangat beragam dan kaya." },
            { hanzi: "有的同学参加了美术小组，画出了美丽的图画。", pinyin: "Yǒu de tóngxué cānjiā le měishù xiǎozǔ, huà chū le měilì de túhuà.", indonesian: "Ada murid yang ikut klub melukis, menggambar lukisan yang sangat indah." },
            { hanzi: "有的同学加入了武术队，动作非常帅气！", pinyin: "Yǒu de tóngxué jiārù le wǔshù duì, dòngzuò fēicháng shuàiqì!", indonesian: "Ada juga murid yang bergabung dalam tim wushu, gerakannya sangat gagah dan lincah!" }
          ],
          vocabulary: [
            { hanzi: "活", pinyin: "huó", indonesian: "Hidup / Aktif", strokeCount: 9, strokeNames: ["点", "点", "提", "撇", "横", "竖", "竖", "横折", "横"], guide: "Tiga titik air (氵) dan lidah (舌)." },
            { hanzi: "参", pinyin: "cān", indonesian: "Ikut serta / Hadir", strokeCount: 8, strokeNames: ["撇折", "撇折", "提", "撇", "捺", "撇", "撇", "撇"], guide: "Bintang orion purba." },
            { hanzi: "画", pinyin: "huà", indonesian: "Gambar / Melukis", strokeCount: 8, strokeNames: ["横", "竖", "横折", "横", "竖", "横", "竖折", "竖"], guide: "Bentuk kuas dan bingkai lukisan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_006.jpg", hanzi: "美术绘画", pinyin: "měishù huìhuà", meaning: "Melukis dengan Palet dan Kuas Warna" },
            { image: "assets/hanyu4_clean/img_007.jpg", hanzi: "中华武术", pinyin: "zhōnghuá wǔshù", meaning: "Latihan Jurus Seni Bela Diri Wushu" },
            { image: "assets/hanyu4_clean/img_008.jpg", hanzi: "合唱团", pinyin: "héchàngtuán", meaning: "Paduan Suara Musik Harmonis" }
          ],
          quizzes: [
            { question: "Apa arti dari '课外活动' (kèwài huódòng)?", options: ["Ujian harian", "Kegiatan ekstrakurikuler di luar kelas", "Istirahat makan", "Membersihkan kelas"], answer: 1, explanation: "'课外活动' artinya Kegiatan Ekstrakurikuler." }
          ]
        },
        {
          id: 3,
          title: "第三课：参观科技馆",
          pinyin: "Dì sān kè: Cānguān kējìguǎn",
          meaning: "Pelajaran 3: Mengunjungi Museum Sains & Teknologi",
          intro: "Melihat robot cerdas, roket antariksa, dan keajaiban sains masa depan!",
          story: [
            { hanzi: "上周六，老师带我们参观了市科技馆。", pinyin: "Shàng zhōuliù, lǎoshī dài wǒmen cānguān le shì kējìguǎn.", indonesian: "Hari Sabtu lalu, guru mengajak kami mengunjungi Museum Sains dan Teknologi kota." },
            { hanzi: "馆里有能跳舞的智能机器人，还有模拟太空舱。", pinyin: "Guǎn lǐ yǒu néng tiàowǔ de zhìnéng jīqìrén, hái yǒu mónǐ tàikōngcāng.", indonesian: "Di museum ada robot cerdas yang bisa menari, serta kapsul simulasi luar angkasa." },
            { hanzi: "科技的力量真神奇，让我们大开眼界！", pinyin: "Kējì de lìliang zhēn shénqí, ràng wǒmen dà kāi yǎnjiè!", indonesian: "Kekuatan ilmu teknologi sungguh ajaib, benar-benar membuka wawasan kami!" }
          ],
          vocabulary: [
            { hanzi: "科", pinyin: "kē", indonesian: "Cabang ilmu / Sains", strokeCount: 9, strokeNames: ["撇", "横", "竖", "撇", "点", "点", "点", "横", "竖"], guide: "Padi (禾) dan takaran (斗)." },
            { hanzi: "技", pinyin: "jì", indonesian: "Keterampilan / Teknik", strokeCount: 7, strokeNames: ["横", "竖钩", "提", "横", "竖", "横折", "竖"], guide: "Tangan (扌) dan cabang (支)." },
            { hanzi: "能", pinyin: "néng", indonesian: "Bisa / Mampu / Energi", strokeCount: 10, strokeNames: ["撇折", "点", "横", "横", "竖", "横折钩", "撇", "竖弯钩", "撇", "竖弯钩"], guide: "Kekuatan beruang purba." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_010.jpg", hanzi: "智能机器人", pinyin: "zhìnéng jīqìrén", meaning: "Robot Cerdas Melambaikan Tangan" },
            { image: "assets/hanyu4_clean/img_011.jpg", hanzi: "太空火箭", pinyin: "tàikōng huǒjiàn", meaning: "Roket Meluncur ke Angkasa Luar" },
            { image: "assets/hanyu4_clean/img_012.jpg", hanzi: "科技展览", pinyin: "kējì zhǎnlǎn", meaning: "Pameran Eksperimen Fisika Canggih" }
          ],
          quizzes: [
            { question: "Apa arti dari '机器人' (jīqìrén)?", options: ["Mobil balap", "Robot", "Komputer", "Televisi"], answer: 1, explanation: "'机器人' secara harfiah manusia mesin = Robot." }
          ]
        },
        {
          id: 4,
          title: "第四课：游乐园里真好玩",
          pinyin: "Dì sì kè: Yóulèyuán lǐ zhēn hǎowán",
          meaning: "Pelajaran 4: Taman Hiburan Sangat Asyik",
          intro: "Keseruan menaiki bianglala, roller coaster, dan komidi putar!",
          story: [
            { hanzi: "游乐园是孩子们的快乐天地。", pinyin: "Yóulèyuán shì háizimen de kuàilè tiāndì.", indonesian: "Taman hiburan adalah dunia kebahagiaan anak-anak." },
            { hanzi: "我们坐上了旋转木马，随着优美的音乐转动。", pinyin: "Wǒmen zuò shàng le xuánzhuǎn mùmǎ, suízhe yōuměi de yīnyuè zhuàndòng.", indonesian: "Kami menaiki komidi putar kuda kayu, berputar mengikuti alunan musik yang indah." },
            { hanzi: "过山车呼啸而过，惊险又刺激！", pinyin: "Guòshānchē hūxiào ér guò, jīngxiǎn yòu cìjī!", indonesian: "Roller coaster melaju kencang berdesing, sangat mendebarkan dan seru!" }
          ],
          vocabulary: [
            { hanzi: "转", pinyin: "zhuàn / zhuǎn", indonesian: "Berputar / Belok", strokeCount: 8, strokeNames: ["横", "撇折", "横", "竖", "横", "横", "竖折", "点"], guide: "Gerobak (车) berputar khusus (专)." },
            { hanzi: "音", pinyin: "yīn", indonesian: "Suara / Bunyi", strokeCount: 9, strokeNames: ["点", "横", "点", "撇", "横", "竖", "横折", "横", "横"], guide: "Berdiri (立) di atas matahari (日)." },
            { hanzi: "险", pinyin: "xiǎn", indonesian: "Bahaya / Terjal", strokeCount: 9, strokeNames: ["横折折撇", "竖", "撇", "捺", "横", "横", "竖", "横折", "横"], guide: "Bukit terjal (阝) di sebelah kiri." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_014.jpg", hanzi: "旋转木马", pinyin: "xuánzhuǎn mùmǎ", meaning: "Komidi Putar Kuda Warna-warni" },
            { image: "assets/hanyu4_clean/img_015.jpg", hanzi: "过山车", pinyin: "guòshānchē", meaning: "Roller Coaster di Rel Tinggi" },
            { image: "assets/hanyu4_clean/img_016.jpg", hanzi: "摩天轮 (Mótiānlún)", pinyin: "mótiānlún", meaning: "Kincir Bianglala Raksasa" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Roller Coaster' adalah...", options: ["过山车 (guòshānchē)", "自行车 (zìxíngchē)", "出租车 (chūzūchē)", "火车 (huǒchē)"], answer: 0, explanation: "'过山车' (guòshānchē) = Roller Coaster (kereta melewati gunung)." }
          ]
        },
        {
          id: 5,
          title: "第五课：节约用水",
          pinyin: "Dì wǔ kè: Jiéyuē yòngshuǐ",
          meaning: "Pelajaran 5: Hemat Penggunaan Air",
          intro: "Menjaga setiap tetes air bersih untuk kelangsungan bumi tercinta!",
          story: [
            { hanzi: "水是生命之源，我们要珍惜每一滴水。", pinyin: "Shuǐ shì shēngmìng zhī yuán, wǒmen yào zhēnxī měi yī dī shuǐ.", indonesian: "Air adalah sumber kehidupan, kita harus menghargai setiap tetes air." },
            { hanzi: "洗完手后要及时关紧水龙头。", pinyin: "Xǐ wán shǒu hòu yào jíshí guān jǐn shuǐlóngtóu.", indonesian: "Setelah mencuci tangan, segeralah menutup kran air dengan rapat." },
            { hanzi: "可以用洗米的水浇花，节约用水从我做起。", pinyin: "Kěyǐ yòng xǐ mǐ de shuǐ jiāo huā, jiéyuē yòngshuǐ cóng wǒ zuò qǐ.", indonesian: "Bisa memanfaatkan air bekas cucian beras untuk menyiram bunga, hemat air mulai dari diri kita." }
          ],
          vocabulary: [
            { hanzi: "节", pinyin: "jié", indonesian: "Hemat / Hari Raya", strokeCount: 5, strokeNames: ["横", "竖", "竖", "横折钩", "竖"], guide: "Rumput (艹) di atas dan (卩) di bawah." },
            { hanzi: "用", pinyin: "yòng", indonesian: "Memakai / Menggunakan", strokeCount: 5, strokeNames: ["撇", "横折钩", "横", "横", "竖"], guide: "Bentuk ember wadah penampung air." },
            { hanzi: "洗", pinyin: "xǐ", indonesian: "Mencuci", strokeCount: 9, strokeNames: ["点", "点", "提", "撇", "横", "竖", "横", "撇", "竖弯钩"], guide: "Tiga titik air (氵) dan pertama (先)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_018.jpg", hanzi: "关紧龙头", pinyin: "guān jǐn lóngtóu", meaning: "Menutup Kran Air Rapat" },
            { image: "assets/hanyu4_clean/img_019.jpg", hanzi: "节约用水", pinyin: "jiéyuē yòngshuǐ", meaning: "Ikon Hemat Tetesan Air Bumi" },
            { image: "assets/hanyu4_clean/img_020.jpg", hanzi: "浇灌花草", pinyin: "jiāoguàn huācǎo", meaning: "Menyiram Tanaman Hijau" }
          ],
          quizzes: [
            { question: "Apa arti dari '节约' (jiéyuē)?", options: ["Boros / Membuang", "Berhemat", "Membeli banyak", "Menjual murah"], answer: 1, explanation: "'节约' (jiéyuē) artinya Berhemat / Menjaga penggunaan." }
          ]
        },
        {
          id: 6,
          title: "第六课：美妙的音乐",
          pinyin: "Dì liù kè: Měimiào de yīnyuè",
          meaning: "Pelajaran 6: Alunan Musik yang Indah",
          intro: "Mengenal alat musik piano, biola, gitar, dan keajaiban nada!",
          story: [
            { hanzi: "音乐能带给我们无限的快乐与放松。", pinyin: "Yīnyuè néng dài gěi wǒmen wúxiàn de kuàilè yǔ fàngsōng.", indonesian: "Musik dapat memberikan kebahagiaan dan ketenangan yang tak terbatas bagi kita." },
            { hanzi: "姐姐会弹钢琴，指尖流淌出动人的旋律。", pinyin: "Jiějie huì tán gāngqín, zhǐjiān liútǎng chū dòngrén de xuánlǜ.", indonesian: "Kakak perempuan pandai bermain piano, ujung jarinya mengalirkan melodi yang memikat hati." },
            { hanzi: "我们跟着节拍一起歌唱，心情格外舒畅。", pinyin: "Wǒmen gēnzhe jiépāi yīqǐ gēchàng, xīnqíng géwài shūchàng.", indonesian: "Kami bernyanyi bersama mengikuti ketukan irama, hati terasa sangat nyaman dan riang." }
          ],
          vocabulary: [
            { hanzi: "弹", pinyin: "tán / dàn", indonesian: "Memetik / Memainkan", strokeCount: 11, strokeNames: ["横折", "横", "竖折折钩", "点", "撇", "横", "横", "竖", "横", "竖", "横"], guide: "Busur (弓) di kiri dan (单) di kanan." },
            { hanzi: "琴", pinyin: "qín", indonesian: "Alat musik petik/piano", strokeCount: 12, strokeNames: ["横", "横", "竖", "提", "横", "横", "竖", "提", "撇", "捺", "点", "横折"], guide: "Dua batu giok (王王) di atas dan sekarang (今) di bawah." },
            { hanzi: "歌", pinyin: "gē", indonesian: "Lagu / Bernyanyi", strokeCount: 14, strokeNames: ["横", "竖", "横折", "横", "竖钩", "横", "竖", "横折", "横", "撇", "横撇", "撇", "捺"], guide: "Dua (哥) di kiri dan menguap (欠) di kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_023.jpg", hanzi: "弹钢琴 (Tán gāngqín)", pinyin: "tán gāngqín", meaning: "Bermain Piano Tuts Hitam Putih" },
            { image: "assets/hanyu4_clean/img_024.jpg", hanzi: "拉小提琴", pinyin: "lā xiǎotíqín", meaning: "Menggesek Biola dengan Gesekan Halus" },
            { image: "assets/hanyu4_clean/img_025.jpg", hanzi: "快乐歌唱", pinyin: "kuàilè gēchàng", meaning: "Anak Bernyanyi dengan Mikrofon" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Bermain Piano' adalah...", options: ["弹钢琴 (tán gāngqín)", "踢足球 (tī zúqiú)", "打篮球 (dǎ lánqiú)", "画画 (huàhuà)"], answer: 0, explanation: "'弹钢琴' (tán gāngqín) = Bermain Piano." }
          ]
        },
        {
          id: 7,
          title: "第七课：讲故事比赛",
          pinyin: "Dì qī kè: Jiǎng gùshì bǐsài",
          meaning: "Pelajaran 7: Lomba Bercerita",
          intro: "Tampil percaya diri membawakan kisah fabel di atas panggung!",
          story: [
            { hanzi: "今天学校举办了一场精彩的讲故事比赛。", pinyin: "Jīntiān xuéxiào jǔbàn le yī chǎng jīngcǎi de jiǎng gùshì bǐsài.", indonesian: "Hari ini sekolah mengadakan lomba bercerita yang sangat spektakuler." },
            { hanzi: "选手们声音洪亮，表情生动，引来阵阵掌声。", pinyin: "Xuǎnshǒumen shēngyīn hóngliàng, biǎoqíng shēngdòng, yǐn lái zhènzhèn zhǎngshēng.", indonesian: "Para peserta bersuara lantang dan berekspresi hidup, mengundang riuh tepuk tangan." },
            { hanzi: "小华讲了《龟兔赛跑》的故事，荣获了一等奖！", pinyin: "Xiǎohuá jiǎng le 'Guī Tù Sàipǎo' de gùshì, rónghuò le yī děng jiǎng!", indonesian: "Xiaohua menceritakan kisah 'Kura-kura dan Kelinci Balap Lari', dan berhasil meraih juara pertama!" }
          ],
          vocabulary: [
            { hanzi: "讲", pinyin: "jiǎng", indonesian: "Bicara / Menjelaskan", strokeCount: 6, strokeNames: ["点", "横折提", "横", "横", "竖", "竖"], guide: "Radikal bicara (讠) di kiri dan (井) di kanan." },
            { hanzi: "赛", pinyin: "sài", indonesian: "Pertandingan / Lomba", strokeCount: 14, strokeNames: ["点", "点", "横撇", "横", "横", "竖", "竖", "横", "撇", "捺", "竖", "横折", "撇", "点"], guide: "Atap (宀) di atas dan kerang berharga (贝) di bawah." },
            { hanzi: "比", pinyin: "bǐ", indonesian: "Membandingkan / Tanding", strokeCount: 4, strokeNames: ["横", "竖提", "撇", "竖弯钩"], guide: "Dua orang berdiri berdampingan saling membandingkan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_028.jpg", hanzi: "讲故事 (Jiǎng gùshì)", pinyin: "jiǎng gùshì", meaning: "Bercerita di Depan Panggung" },
            { image: "assets/hanyu4_clean/img_029.jpg", hanzi: "热烈掌声", pinyin: "rèliè zhǎngshēng", meaning: "Penonton Bertepuk Tangan Meriah" },
            { image: "assets/hanyu4_clean/img_030.jpg", hanzi: "荣获奖杯", pinyin: "rónghuò jiǎngbēi", meaning: "Menerima Piala Juara Emas" }
          ],
          quizzes: [
            { question: "Apa arti dari '比赛' (bǐsài)?", options: ["Latihan rutin", "Perlombaan / Pertandingan", "Belanja bersama", "Tidur siang"], answer: 1, explanation: "'比赛' (bǐsài) berarti Lomba atau Pertandingan." }
          ]
        },
        {
          id: 8,
          title: "第八课：我的业余爱好",
          pinyin: "Dì bā kè: Wǒ de yèyú àihào",
          meaning: "Pelajaran 8: Hobi Waktu Luangku",
          intro: "Mengisi waktu luang dengan fotografi, berkebun, dan membaca.",
          story: [
            { hanzi: "每个人都有自己独特的兴趣与爱好。", pinyin: "Měi gè rén dōu yǒu zìjǐ dútè de xìngqù yǔ àihào.", indonesian: "Setiap orang memiliki minat dan hobi unik masing-masing." },
            { hanzi: "我的爱好是摄影，我喜欢用镜头记录生活中的美好瞬间。", pinyin: "Wǒ de àihào shì shèyǐng, wǒ xǐhuan yòng jìngtóu jìlù shēnghuó zhōng de měihǎo shùnjiān.", indonesian: "Hobi saya adalah fotografi, saya suka menggunakan kamera untuk merekam momen indah dalam hidup." },
            { hanzi: "爱好让我们的课余生活变得多姿多彩。", pinyin: "Àihào ràng wǒmen de kèyú shēnghuó biàn de duōzī duōcǎi.", indonesian: "Hobi membuat kehidupan di luar jam pelajaran menjadi penuh warna." }
          ],
          vocabulary: [
            { hanzi: "业", pinyin: "yè", indonesian: "Pekerjaan / Bidang", strokeCount: 5, strokeNames: ["竖", "竖", "点", "撇", "横"], guide: "Pondasi kayu penyangga gong." },
            { hanzi: "余", pinyin: "yú", indonesian: "Sisa / Luang", strokeCount: 7, strokeNames: ["撇", "捺", "横", "横", "竖钩", "撇", "点"], guide: "Orang (人) di atas dan (朩) di bawah." },
            { hanzi: "趣", pinyin: "qù", indonesian: "Menarik / Minat", strokeCount: 15, strokeNames: ["横", "竖", "横", "竖", "横", "撇", "捺", "横", "竖", "竖", "横", "横", "提", "撇", "捺"], guide: "Berjalan (走) mengejar sesuatu yang menarik (取)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_033.jpg", hanzi: "摄影拍照", pinyin: "shèyǐng pāizhào", meaning: "Memotret dengan Kamera DSLR" },
            { image: "assets/hanyu4_clean/img_034.jpg", hanzi: "下国际象棋", pinyin: "xià xiàngqí", meaning: "Bermain Catur Strategi" },
            { image: "assets/hanyu4_clean/img_035.jpg", hanzi: "种植花草", pinyin: "zhòngzhí huācǎo", meaning: "Berkebun Merawat Tanaman" }
          ],
          quizzes: [
            { question: "Kata '爱好' (àihào) berarti...", options: ["Makanan", "Hobi / Kegemaran", "Pakaian", "Alamat"], answer: 1, explanation: "'爱好' (àihào) adalah Hobi atau Kegemaran." }
          ]
        },
        {
          id: 9,
          title: "第九课：中国传统节日",
          pinyin: "Dì jiǔ kè: Zhōngguó chuántǒng jiérì",
          meaning: "Pelajaran 9: Hari Raya Tradisional Tionghoa",
          intro: "Mengenal Imlek, Cap Go Meh, Bakcang (Duanwu), dan Festival Kue Bulan (Zhongqiu)!",
          story: [
            { hanzi: "中国有许多丰富有趣的传统节日。", pinyin: "Zhōngguó yǒu xǔduō fēngfù yǒuqù de chuántǒng jiérì.", indonesian: "Tiongkok memiliki banyak hari raya tradisional yang kaya dan menarik." },
            { hanzi: "春节吃饺子、贴春联；端午节赛龙舟、吃粽子。", pinyin: "Chūnjié chī jiǎozi, tiē chūnlián; Duānwǔjié sài lóngzhōu, chī zòngzi.", indonesian: "Tahun Baru Imlek makan pangsit dan menempel bait puisi musim semi; Festival Duanwu mendayung perahu naga dan makan bakcang." },
            { hanzi: "中秋节全家团圆赏月，品尝香甜的月饼。", pinyin: "Zhōngqiūjié quánjiā tuányuán shǎng yuè, pǐncháng xiāngtián de yuèbǐng.", indonesian: "Festival Musim Gugur sekeluarga berkumpul memandang rembulan dan menikmati kue bulan manis." }
          ],
          vocabulary: [
            { hanzi: "传", pinyin: "chuán / zhuàn", indonesian: "Menurunkan / Meneruskan", strokeCount: 6, strokeNames: ["撇", "竖", "横", "横折", "竖", "点"], guide: "Orang (亻) di kiri dan (专) di kanan." },
            { hanzi: "统", pinyin: "tǒng", indonesian: "Sistem / Menyatukan", strokeCount: 9, strokeNames: ["撇折", "撇折", "提", "点", "横", "竖折", "横", "撇", "竖弯钩"], guide: "Benang sutra (纟) menyambungkan silsilah (充)." },
            { hanzi: "饼", pinyin: "bǐng", indonesian: "Kue / Roti panggang", strokeCount: 9, strokeNames: ["撇", "横折提", "点", "撇", "横", "横", "撇", "竖", "点"], guide: "Radikal makanan (饣) di kiri dan (并) di kanan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_038.jpg", hanzi: "赛龙舟 (Sài lóngzhōu)", pinyin: "sài lóngzhōu", meaning: "Lomba Perahu Naga Tradisional" },
            { image: "assets/hanyu4_clean/img_039.jpg", hanzi: "中秋月饼", pinyin: "zhōngqiū yuèbǐng", meaning: "Kue Bulan Aneka Rasa Lezat" },
            { image: "assets/hanyu4_clean/img_040.jpg", hanzi: "贴春联 (Tiē chūnlián)", pinyin: "tiē chūnlián", meaning: "Menempel Kaligrafi Merah di Pintu" }
          ],
          quizzes: [
            { question: "Makanan khas pada saat Festival Musim Gugur (中秋节) adalah...", options: ["Bakcang (粽子)", "Kue Bulan (月饼)", "Pangsit (饺子)", "Mie panjang umur"], answer: 1, explanation: "Saat Mid-Autumn Festival (中秋节), tradisinya memakan Kue Bulan (月饼)." }
          ]
        },
        {
          id: 10,
          title: "第十课：保护地球家园",
          pinyin: "Dì shí kè: Bǎohù dìqiú jiāyuán",
          meaning: "Pelajaran 10: Menjaga Rumah Bumi Kita",
          intro: "Gerakan penghijauan, memilah sampah, dan menjaga udara bersih!",
          story: [
            { hanzi: "地球是我们共同的家园，拥有蓝天、绿水和青山。", pinyin: "Dìqiú shì wǒmen gòngtóng de jiāyuán, yōngyǒu lántiān, lǜshuǐ hé qīngshān.", indonesian: "Bumi adalah rumah kita bersama, memiliki langit biru, air jernih, dan perbukitan hijau." },
            { hanzi: "我们要做好垃圾分类，少用塑料袋，多植树造林。", pinyin: "Wǒmen yào zuò hǎo lājī fēnlèi, shǎo yòng sùliàodài, duō zhíshù zàolín.", indonesian: "Kita harus memilah sampah dengan benar, kurangi kantong plastik, dan rajin menanam pohon." },
            { hanzi: "保护环境，让地球永远充满生机与美丽！", pinyin: "Bǎohù huánjìng, ràng dìqiú yǒngyuǎn chōngmǎn shēngjī yǔ měilì!", indonesian: "Melindungi lingkungan, agar bumi selamanya penuh kehidupan dan keindahan!" }
          ],
          vocabulary: [
            { hanzi: "保", pinyin: "bǎo", indonesian: "Melindungi / Menjaga", strokeCount: 9, strokeNames: ["撇", "竖", "竖", "横折", "横", "横", "竖", "撇", "捺"], guide: "Orang (亻) menggendong dan melindungi bayi (呆)." },
            { hanzi: "护", pinyin: "hù", indonesian: "Merawat / Mengawal", strokeCount: 7, strokeNames: ["横", "竖钩", "提", "点", "横折", "横", "竖"], guide: "Tangan (扌) di kiri dan pintu (户) di kanan." },
            { hanzi: "球", pinyin: "qiú", indonesian: "Bola / Bumi", strokeCount: 11, strokeNames: ["横", "横", "竖", "提", "横", "竖钩", "点", "提", "撇", "捺", "点"], guide: "Batu giok (王) bulat berkilau (求)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_043.jpg", hanzi: "垃圾分类", pinyin: "lājī fēnlèi", meaning: "Tempat Sampah Daur Ulang Warna-warni" },
            { image: "assets/hanyu4_clean/img_044.jpg", hanzi: "植树造林", pinyin: "zhíshù zàolín", meaning: "Menanam Bibit Pohon di Taman" },
            { image: "assets/hanyu4_clean/img_045.jpg", hanzi: "绿色地球", pinyin: "lǜsè dìqiú", meaning: "Bumi Hijau Bersih Terawat" }
          ],
          quizzes: [
            { question: "Apa arti dari '保护' (bǎohù)?", options: ["Merusak", "Melindungi / Menjaga", "Membakar", "Membuang"], answer: 1, explanation: "'保护' (bǎohù) artinya Melindungi / Menjaga." }
          ]
        },
        {
          id: 11,
          title: "第十一课：难忘的旅行",
          pinyin: "Dì shíyī kè: Nánwàng de lǚxíng",
          meaning: "Pelajaran 11: Perjalanan yang Tak Terlupakan",
          intro: "Petualangan menaiki kereta cepat melintasi pegunungan megah!",
          story: [
            { hanzi: "去年暑假，我和家人去北京旅游，那是一次难忘的经历。", pinyin: "Qùnián shǔjià, wǒ hé jiārén qù Běijīng lǚyóu, nà shì yī cì nánwàng de jīnglì.", indonesian: "Liburan musim panas tahun lalu, saya dan keluarga berwisata ke Beijing, itu adalah pengalaman tak terlupakan." },
            { hanzi: "我们登上了雄伟的万里长城，参观了庄严的故宫。", pinyin: "Wǒmen dēng shàng le xióngwěi de Wàn Lǐ Chángchéng, cānguān le zhuāngyán de Gùgōng.", indonesian: "Kami mendaki Tembok Besar Tiongkok yang megah, dan mengunjungi Kota Terlarang yang agung." },
            { hanzi: "俗话说：'不到长城非好汉'，站在长城上我自豪极了！", pinyin: "Súhuà shuō: 'Bù dào chángchéng fēi hǎohàn', zhàn zài chángchéng shàng wǒ zìháo jí le!", indonesian: "Pepatah mengatakan: 'Belum ke Tembok Besar belumlah pahlawan sejati', berdiri di atas Tembok Besar aku sungguh bangga!" }
          ],
          vocabulary: [
            { hanzi: "旅", pinyin: "lǚ", indonesian: "Perjalanan / Wisata", strokeCount: 10, strokeNames: ["点", "横", "折", "撇", "撇", "竖", "撇", "横折钩", "撇", "捺"], guide: "Bendera rombongan pelancong." },
            { hanzi: "游", pinyin: "yóu", indonesian: "Pelesir / Berkelana", strokeCount: 12, strokeNames: ["点", "点", "提", "点", "横", "横折钩", "撇", "撇", "竖", "横", "横折钩", "横"], guide: "Tiga titik air (氵) dan berenang bebas." },
            { hanzi: "忘", pinyin: "wàng", indonesian: "Lupa", strokeCount: 7, strokeNames: ["点", "横", "竖折", "点", "卧钩", "点", "点"], guide: "Hilang (亡) di atas hati (心)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_048.jpg", hanzi: "万里长城", pinyin: "Wàn Lǐ Chángchéng", meaning: "Tembok Besar Tiongkok di Puncak Gunung" },
            { image: "assets/hanyu4_clean/img_049.jpg", hanzi: "故宫紫禁城", pinyin: "Gùgōng", meaning: "Istana Megah Kota Terlarang" },
            { image: "assets/hanyu4_clean/img_050.jpg", hanzi: "高铁旅行", pinyin: "gāotiě lǚxíng", meaning: "Kereta Cepat Menembus Lembah" }
          ],
          quizzes: [
            { question: "Bangunan bersejarah dunia di Tiongkok yang sangat terkenal adalah...", options: ["Tembok Besar (万里长城)", "Menara Eiffel", "Piramida Mesir", "Colosseum"], answer: 0, explanation: "'万里长城' (Wàn Lǐ Chángchéng) adalah Tembok Raksasa Tiongkok." }
          ]
        },
        {
          id: 12,
          title: "第十二课：科技改变生活",
          pinyin: "Dì shí'èr kè: Kējì gǎibiàn shēnghuó",
          meaning: "Pelajaran 12: Teknologi Mengubah Kehidupan",
          intro: "Kemudahan pembayaran digital, belanja online, dan kecerdasan buatan.",
          story: [
            { hanzi: "现代科学技术的发展让我们的生活变得更加便捷。", pinyin: "Xiàndài kēxué jìshù de fāzhǎn ràng wǒmen de shēnghuó biàn de gèngjiā biànjié.", indonesian: "Perkembangan sains dan teknologi modern membuat kehidupan kita menjadi semakin praktis dan mudah." },
            { hanzi: "人们用智能手机扫码支付，足不出户就能网购各种商品。", pinyin: "Rénmen yòng zhìnéng shǒujī sǎomǎ zhīfù, zú bù chū hù jiù néng wǎnggòu gè zhǒng shāngpǐn.", indonesian: "Orang-orang menggunakan ponsel pintar untuk memindai kode bayar, tanpa keluar rumah sudah bisa belanja online aneka barang." },
            { hanzi: "我们要学好科学文化知识，为未来的科技创新做贡献！", pinyin: "Wǒmen yào xué hǎo kēxué wénhuà zhīshi, wèi wèilái de kējì chuàngxīn zuò gòngxiàn!", indonesian: "Kita harus tekun menuntut ilmu sains dan budaya, berkontribusi demi inovasi teknologi masa depan!" }
          ],
          vocabulary: [
            { hanzi: "改", pinyin: "gǎi", indonesian: "Mengubah / Memperbaiki", strokeCount: 7, strokeNames: ["横折", "横", "竖弯钩", "撇", "横", "撇", "捺"], guide: "Sendiri (己) dan memukul memperbaiki (攵)." },
            { hanzi: "变", pinyin: "biàn", indonesian: "Berubah / Transformasi", strokeCount: 8, strokeNames: ["点", "横", "竖", "竖", "撇", "点", "横撇", "捺"], guide: "Kecil-kecil (亦) di atas dan (又) di bawah." },
            { hanzi: "发", pinyin: "fā", indonesian: "Memancarkan / Berkembang", strokeCount: 5, strokeNames: ["撇折", "撇", "横撇", "捺", "点"], guide: "Membidikkan anak panah ke depan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu4_clean/img_053.jpg", hanzi: "扫码支付", pinyin: "sǎomǎ zhīfù", meaning: "Pembayaran Digital QR Code Ponsel" },
            { image: "assets/hanyu4_clean/img_054.jpg", hanzi: "网上购物", pinyin: "wǎngshàng gòuwù", meaning: "Belanja Online Paket Diantar ke Rumah" },
            { image: "assets/hanyu4_clean/img_055.jpg", hanzi: "未来城市", pinyin: "wèilái chéngshì", meaning: "Kota Futuristik Ramah Lingkungan" }
          ],
          quizzes: [
            { question: "Apa arti dari '科技' (kējì)?", options: ["Sains dan Teknologi", "Pakaian adat", "Pohon hutan", "Permainan kartu"], answer: 0, explanation: "'科技' singkatan dari 科学技术 (Sains dan Teknologi)." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Han Yu 5 (汉语 5)",
      grade: "Kelas 5 SD / Tingkat Menengah Atas",
      dinoGuide: { name: "Steggy si Stegosaurus", avatar: "🦎", desc: "Mendalami cerita fabel kuno, luar angkasa, nilai budi pekerti, dan peribahasa bersama Steggy!" },
      color: "#d97706",
      units: [
        {
          id: 1,
          title: "第一课：新学期的打算",
          pinyin: "Dì yī kè: Xīn xuéqī de dǎsuàn",
          meaning: "Pelajaran 1: Rencana Semester Baru",
          intro: "Menyusun target belajar, manajemen waktu, dan kebiasaan membaca buku harian.",
          story: [
            { hanzi: "新的学期开始了，我制定了一份详细的学习计划。", pinyin: "Xīn de xuéqī kāishǐ le, wǒ zhìdìng le yī fèn xiángxì de xuéxí jìhuà.", indonesian: "Semester baru telah dimulai, saya menyusun sebuah rencana belajar yang terperinci." },
            { hanzi: "除了认真听讲、按时完成作业，我还要每天坚持阅读半小时课外书。", pinyin: "Chúle rènzhēn tīngjiǎng, ànshí wánchéng zuòyè, wǒ hái yào měitiān jiānchí yuèdú bàn xiǎoshí kèwài shū.", indonesian: "Selain mendengarkan pelajaran dengan fokus dan menyelesaikan PR tepat waktu, saya juga akan konsisten membaca buku non-pelajaran 30 menit setiap hari." },
            { hanzi: "有志者事竟成，相信通过努力我一定能取得更大进步！", pinyin: "Yǒu zhì zhě shì jìng chéng, xiāngxìn tōngguò nǔlì wǒ yīdìng néng qǔdé gèng dà jìnbù!", indonesian: "Di mana ada kemauan di situ ada jalan, saya yakin lewat usaha gigih saya pasti bisa meraih kemajuan lebih besar!" }
          ],
          vocabulary: [
            { hanzi: "打", pinyin: "dǎ", indonesian: "Memukul / Rencana (打算)", strokeCount: 5, strokeNames: ["横", "竖钩", "提", "横", "竖钩"], guide: "Tangan (扌) di kiri dan (丁) di kanan." },
            { hanzi: "算", pinyin: "suàn", indonesian: "Menghitung / Berpikir", strokeCount: 14, strokeNames: ["撇", "横", "点", "撇", "横", "点", "竖", "横折", "横", "横", "横", "撇", "竖", "横"], guide: "Sempoa bambu (⺮) di atas dan (目+廾) di bawah." },
            { hanzi: "计", pinyin: "jì", indonesian: "Merencanakan / Rencana", strokeCount: 4, strokeNames: ["点", "横折提", "横", "竖"], guide: "Bicara (讠) dan angka sepuluh (十)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_002.jpg", hanzi: "学习计划", pinyin: "xuéxí jìhuà", meaning: "Menulis Jadwal dan Rencana Belajar" },
            { image: "assets/hanyu5_clean/img_003.jpg", hanzi: "坚持阅读", pinyin: "jiānchí yuèdú", meaning: "Membaca Buku dengan Tekun Setiap Hari" },
            { image: "assets/hanyu5_clean/img_004.jpg", hanzi: "取得进步", pinyin: "qǔdé jìnbù", meaning: "Mendapat Nilai Ujian Bagus Meningkat" }
          ],
          quizzes: [
            { question: "Apa arti dari '打算' (dǎsuàn)?", options: ["Rencana / Berniat", "Memukul orang", "Membayar uang", "Berhenti sekolah"], answer: 0, explanation: "'打算' (dǎsuàn) berarti Rencana atau Berniat melakukan sesuatu." }
          ]
        },
        {
          id: 2,
          title: "第二课：我们身边的科学",
          pinyin: "Dì èr kè: Wǒmen shēnbiān de kēxué",
          meaning: "Pelajaran 2: Sains di Sekitar Kita",
          intro: "Menguak rahasia pelangi, petir, daya gravitasi, dan perubahan wujud zat!",
          story: [
            { hanzi: "科学并不遥远，它就存在于我们日常生活的点点滴滴中。", pinyin: "Kēxué bìng bù yáoyuǎn, tā jiù cúnzài yú wǒmen rìcháng shēnghuó de diǎndiǎndīdī zhōng.", indonesian: "Sains tidaklah jauh, ia ada di dalam setiap jengkal kehidupan kita sehari-hari." },
            { hanzi: "雨后为什么会出现七彩的彩虹？水烧开后为什么会冒出白汽？", pinyin: "Yǔ hòu wèishénme huì chūxiàn qīcǎi de cǎihóng? Shuǐ shāokāi hòu wèishénme huì mào chū báiqì?", indonesian: "Mengapa setelah hujan muncul pelangi tujuh warna? Mengapa air yang mendidih mengeluarkan uap putih?" },
            { hanzi: "只要我们善于观察、勇于探索，就能发现大自然无穷的奥秘。", pinyin: "Zhǐyào wǒmen shànyú guānchá, yǒngyú tànsuǒ, jiù néng fāxiàn dàzìrán wúqióng de àomì.", indonesian: "Asalkan kita pandai mengamati dan berani bereksplorasi, kita dapat menemukan rahasia alam yang tak terhingga." }
          ],
          vocabulary: [
            { hanzi: "彩", pinyin: "cǎi", indonesian: "Warna / Ragam", strokeCount: 11, strokeNames: ["撇", "点", "点", "撇", "横", "竖", "撇", "点", "撇", "撇", "撇"], guide: "Cakar (爫) di atas pohon (木) dengan tiga bulu halus (彡)." },
            { hanzi: "虹", pinyin: "hóng", indonesian: "Pelangi", strokeCount: 9, strokeNames: ["竖", "横折", "横", "竖", "横", "点", "横", "竖", "横"], guide: "Radikal serangga cacing purba (虫) dan (工)." },
            { hanzi: "察", pinyin: "chá", indonesian: "Meneliti / Mengamati", strokeCount: 14, strokeNames: ["点", "点", "横撇", "横", "撇", "竖折", "横", "横", "竖", "撇", "点", "横", "撇", "捺"], guide: "Atap (宀) di atas meja persembahan (祭)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_006.jpg", hanzi: "七色彩虹", pinyin: "qīsǎi cǎihóng", meaning: "Pelangi Indah Menghiasi Langit Biru" },
            { image: "assets/hanyu5_clean/img_007.jpg", hanzi: "观察实验", pinyin: "guānchá shíyàn", meaning: "Eksperimen Sains dengan Kaca Pembesar" },
            { image: "assets/hanyu5_clean/img_008.jpg", hanzi: "探索奥秘", pinyin: "tànsuǒ àomì", meaning: "Mencari Tahu Rahasia Alam Semesta" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk 'Pelangi' adalah...", options: ["彩虹 (cǎihóng)", "太阳 (tàiyáng)", "星星 (xīngxing)", "白云 (báiyún)"], answer: 0, explanation: "'彩虹' (cǎihóng) adalah Pelangi." }
          ]
        },
        {
          id: 3,
          title: "第三课：中华传统美德",
          pinyin: "Dì sān kè: Zhōnghuá chuántǒng měidé",
          meaning: "Pelajaran 3: Nilai Budi Pekerti Luhur",
          intro: "Kisah Kong Rong mengalah memilih buah pir kecil (孔融让梨) & menghormati orang tua.",
          story: [
            { hanzi: "中华民族自古以来就讲究尊老爱幼、诚实守信。", pinyin: "Zhōnghuá mínzú zìgǔ yǐlái jiù jiǎngjiu zūnlǎo àiyòu, chéngshí shǒuxìn.", indonesian: "Bangsa Tionghoa sejak zaman purba selalu menjunjung tinggi menghormati yang tua dan menyayangi yang muda, serta jujur menepati janji." },
            { hanzi: "《孔融让梨》的故事告诉我们要懂得谦让，不贪图享受。", pinyin: "'Kǒng Róng ràng lí' de gùshì gàosu wǒmen yào dǒngde qiānràng, bù tāntú xiǎngshòu.", indonesian: "Kisah 'Kong Rong Mengalah Memilih Buah Pir' mengajarkan kita untuk rendah hati dan mau mengalah, tidak serakah." },
            { hanzi: "良好的品德是一生中最宝贵的财富。", pinyin: "Liánghǎo de pǐndé shì yīshēng zhōng zuì bǎoguì de cáifù.", indonesian: "Karakter dan budi pekerti yang baik adalah kekayaan paling berharga seumur hidup." }
          ],
          vocabulary: [
            { hanzi: "德", pinyin: "dé", indonesian: "Moral / Kebajikan", strokeCount: 15, strokeNames: ["撇", "撇", "竖", "横", "竖", "竖", "横折", "横", "横", "竖", "横", "点", "卧钩", "点", "点"], guide: "Langkah kaki (彳), sepuluh mata melihat lurus (十目), dan hati jujur (心)." },
            { hanzi: "诚", pinyin: "chéng", indonesian: "Jujur / Tulus", strokeCount: 8, strokeNames: ["点", "横折提", "横", "撇", "横折钩", "斜钩", "撇", "点"], guide: "Bicara (讠) dan menjadi nyata (成)." },
            { hanzi: "信", pinyin: "xìn", indonesian: "Dapat dipercaya / Surat", strokeCount: 9, strokeNames: ["撇", "竖", "点", "横", "横", "横", "竖", "横折", "横"], guide: "Orang (亻) yang perkataannya (言) dapat dipercaya." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_010.jpg", hanzi: "孔融让梨", pinyin: "Kǒng Róng ràng lí", meaning: "Kong Rong Memilih Buah Pir Paling Kecil" },
            { image: "assets/hanyu5_clean/img_011.jpg", hanzi: "尊老爱幼", pinyin: "zūnlǎo àiyòu", meaning: "Membantu Nenek Menyeberang Jalan" },
            { image: "assets/hanyu5_clean/img_012.jpg", hanzi: "诚实守信", pinyin: "chéngshí shǒuxìn", meaning: "Menepati Janji dengan Tulus Hati" }
          ],
          quizzes: [
            { question: "Pesan moral utama dari kisah '孔融让梨' (Kong Rong mengalah buah pir) adalah...", options: ["Harus serakah mengambil yang terbesar", "Sikap mengalah dan mendahulukan orang lain (谦让)", "Makan buah pir sendirian", "Menjual buah di pasar"], answer: 1, explanation: "Kisah Kong Rong mengajarkan kebajikan saling mengalah dan menghormati saudara (谦让)." }
          ]
        },
        {
          id: 4,
          title: "第四课：古代寓言故事",
          pinyin: "Dì sì kè: Gǔdài yùyán gùshì",
          meaning: "Pelajaran 4: Cerita Fabel Kuno Tiongkok",
          intro: "Kisah 'Menunggu Kelinci di Tunggul Pohon' (守株待兔) & 'Menarik Tunas Demi Cepat Tumbuh' (拔苗助长).",
          story: [
            { hanzi: "古时候，有个农夫在田里干活，一只野兔撞在树桩上死去了。", pinyin: "Gǔ shíhou, yǒu gè nóngfū zài tián lǐ gànhuó, yī zhī yětù zhuàng zài shùzhuāng shàng sǐqù le.", indonesian: "Pada zaman dahulu, seorang petani bekerja di ladang, tiba-tiba seekor kelinci liar menabrak tunggul pohon dan mati." },
            { hanzi: "农夫从此不愿再种田，天天守在树桩旁等待捡兔子。", pinyin: "Nóngfū cóngcǐ bù yuàn zài zhòngtián, tiāntiān shǒu zài shùzhuāng páng děngdài jiǎn tùzi.", indonesian: "Sejak saat itu petani tidak mau lagi mencangkul sawah, setiap hari hanya menunggu di dekat tunggul pohon berharap kelinci lain datang." },
            { hanzi: "这个故事告诉我们：不能妄想不劳而获，只有辛勤付出才能收获成功。", pinyin: "Zhè gè gùshì gàosu wǒmen: bù néng wàngxiǎng bù láo ér huò, zhǐyǒu xīnqín fùchū cáinéng shōuhuò chénggōng.", indonesian: "Kisah ini mengajarkan kita: jangan berharap mendapat hasil tanpa kerja keras, hanya dengan keringat dan usaha kita bisa memetik keberhasilan." }
          ],
          vocabulary: [
            { hanzi: "寓", pinyin: "yù", indonesian: "Kiasan / Bertempat tinggal", strokeCount: 12, strokeNames: ["点", "点", "横撇", "横", "竖", "横折", "横", "横", "竖", "提", "点", "竖折"], guide: "Atap (宀) dan monyet di dalam." },
            { hanzi: "守", pinyin: "shǒu", indonesian: "Menjaga / Menunggu", strokeCount: 6, strokeNames: ["点", "点", "横撇", "横", "竖钩", "点"], guide: "Atap (宀) dijaga jengkal tangan (寸)." },
            { hanzi: "待", pinyin: "dài / dāi", indonesian: "Menunggu / Memperlakukan", strokeCount: 9, strokeNames: ["撇", "撇", "竖", "横", "竖", "横", "横", "竖钩", "点"], guide: "Langkah kaki (彳) dan kuil (寺)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_014.jpg", hanzi: "守株待兔", pinyin: "shǒu zhū dài tù", meaning: "Petani Menunggu Kelinci di Tunggul Pohon" },
            { image: "assets/hanyu5_clean/img_015.jpg", hanzi: "辛勤耕种", pinyin: "xīnqín gēngzhòng", meaning: "Mencangkul dan Menanam Padi di Sawah" },
            { image: "assets/hanyu5_clean/img_016.jpg", hanzi: "拔苗助长", pinyin: "bá miáo zhù zhǎng", meaning: "Menarik Tunas Padi yang Justru Menjadi Layu" }
          ],
          quizzes: [
            { question: "Peribahasa '守株待兔' (Shǒu zhū dài tù) menyindir orang yang...", options: ["Bekerja keras siang malam", "Hanya menunggu keberuntungan tanpa mau berusaha", "Pandai berburu kelinci", "Suka menanam pohon"], answer: 1, explanation: "'守株待兔' menyindir orang yang pasif dan hanya mengharapkan keberuntungan jatuh dari langit tanpa usaha." }
          ]
        },
        {
          id: 5,
          title: "第五课：大自然的启示",
          pinyin: "Dì wǔ kè: Dàzìrán de qǐshì",
          meaning: "Pelajaran 5: Inspirasi dari Alam",
          intro: "Bagaimana manusia meniru burung untuk membuat pesawat, dan meniru kelelawar untuk radar!",
          story: [
            { hanzi: "大自然是人类最伟大的启蒙老师。", pinyin: "Dàzìrán shì rénlèi zuì wěidà de qǐméng lǎoshī.", indonesian: "Alam semesta adalah guru pencerahan terhebat bagi umat manusia." },
            { hanzi: "人类观察鸟类的飞翔发明了飞机；研究蝙蝠的超声波发明了雷达。", pinyin: "Rénlèi guānchá niǎolèi de fēixiáng fāmíng le fēijī; yánjiū biānfú de chāoshēngbō fāmíng le léidá.", indonesian: "Manusia mengamati burung terbang lalu menciptakan pesawat terbang; meneliti gelombang ultrasonik kelelawar lalu menciptakan radar." },
            { hanzi: "仿生学让现代科技与自然智慧完美结合。", pinyin: "Fǎngshēngxué ràng xiàndài kējì yǔ zìrán zhìhuì wánměi jiéhé.", indonesian: "Ilmu bionik menggabungkan teknologi modern dan kearifan alam secara sempurna." }
          ],
          vocabulary: [
            { hanzi: "启", pinyin: "qǐ", indonesian: "Membuka / Menginspirasi", strokeCount: 7, strokeNames: ["点", "横折", "横", "竖", "竖", "横折", "横"], guide: "Pintu (户) dibuka dengan mulut bicara (口)." },
            { hanzi: "示", pinyin: "shì", indonesian: "Menunjukkan / Isyarat", strokeCount: 5, strokeNames: ["横", "横", "竖钩", "撇", "点"], guide: "Bentuk altar firman langit." },
            { hanzi: "造", pinyin: "zào", indonesian: "Membuat / Mencipta", strokeCount: 10, strokeNames: ["撇", "横", "竖", "横折", "横", "竖", "点", "点", "横折折撇", "捺"], guide: "Memberitahu (告) dan radikal berjalan (辶)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_018.jpg", hanzi: "飞鸟与飞机", pinyin: "fēiniǎo yǔ fēijī", meaning: "Sayap Burung Menginspirasi Sayap Pesawat" },
            { image: "assets/hanyu5_clean/img_019.jpg", hanzi: "蝙蝠与雷达", pinyin: "biānfú yǔ léidá", meaning: "Kelelawar Menginspirasi Antena Radar" },
            { image: "assets/hanyu5_clean/img_020.jpg", hanzi: "仿生科技", pinyin: "fǎngshēng kējì", meaning: "Robot Terinspirasi Gerakan Hewan" }
          ],
          quizzes: [
            { question: "Manusia meneliti burung terbang sehingga berhasil menciptakan...", options: ["Kapal selam", "Pesawat terbang (飞机)", "Mobil listrik", "Kereta api"], answer: 1, explanation: "Pengamatan terhadap sayap burung terbang menginspirasi penciptaan pesawat terbang." }
          ]
        },
        {
          id: 6,
          title: "第六课：走进大森林",
          pinyin: "Dì liù kè: Zǒujìn dà sēnlín",
          meaning: "Pelajaran 6: Memasuki Hutan Belantara",
          intro: "Keanekaragaman hayati paru-paru dunia dan pohon-pohon raksasa!",
          story: [
            { hanzi: "森林被誉为'地球之肺'，孕育着成千上万种动植物。", pinyin: "Sēnlín bèi yù wéi 'dìqiú zhī fèi', yùnyùzhe chéngqiānshàngwàn zhǒng dòngzhíwù.", indonesian: "Hutan dijuluki sebagai 'paru-paru bumi', melahirkan puluhan ribu spesies satwa dan tumbuhan." },
            { hanzi: "参天古树遮天蔽日，清澈的溪水在石缝间欢快流淌。", pinyin: "Cāntiān gǔshù zhē tiān bì rì, qīngchè de xīshuǐ zài shí fèng jiān huānkuài liútǎng.", indonesian: "Pohon-pohon purba menjulang tinggi menaungi cahaya matahari, aliran sungai jernih mengalir riang di sela bebatuan." },
            { hanzi: "让我们携起手来，杜绝滥砍滥伐，守卫这一片绿色家园。", pinyin: "Ràng wǒmen xiéqǐshǒu lái, dùjué làn kǎn làn fá, shǒuwèi zhè yī piàn lǜsè jiāyuán.", indonesian: "Mari kita bergandengan tangan, hentikan penebangan liar, menjaga rumah rimba hijau ini." }
          ],
          vocabulary: [
            { hanzi: "森", pinyin: "sēn", indonesian: "Hutan lebat", strokeCount: 12, strokeNames: ["横", "竖", "撇", "点", "横", "竖", "撇", "点", "横", "竖", "撇", "捺"], guide: "Tiga pohon kayu (木木木) membentuk hutan lebat." },
            { hanzi: "林", pinyin: "lín", indonesian: "Hutan / Pepohonan", strokeCount: 8, strokeNames: ["横", "竖", "撇", "点", "横", "竖", "撇", "捺"], guide: "Dua pohon kayu (木木) berdampingan." },
            { hanzi: "泉", pinyin: "quán", indonesian: "Mata air", strokeCount: 9, strokeNames: ["撇", "竖", "横折", "横", "横", "竖钩", "横撇", "撇", "捺"], guide: "Putih jernih (白) di atas air (水)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_023.jpg", hanzi: "原始森林", pinyin: "yuánshǐ sēnlín", meaning: "Hutan Rimba Tropis yang Rindang" },
            { image: "assets/hanyu5_clean/img_024.jpg", hanzi: "清澈溪流", pinyin: "qīngchè xīliú", meaning: "Sungai Alami Mengalir Jernih" },
            { image: "assets/hanyu5_clean/img_025.jpg", hanzi: "野生动物", pinyin: "yěshēng dòngwù", meaning: "Rusa dan Burung Hutan Liar" }
          ],
          quizzes: [
            { question: "Karakter '森' (sēn) tersusun dari 3 buah radikal...", options: ["Pohon (木)", "Air (水)", "Api (火)", "Tanah (土)"], answer: 0, explanation: "'森' terdiri dari 3 buah karakter '木' (kayu/pohon) yang berarti rimba lebat." }
          ]
        },
        {
          id: 7,
          title: "第七课：环保小卫士",
          pinyin: "Dì qī kè: Huánbǎo xiǎowèishì",
          meaning: "Pelajaran 7: Penjaga Lingkungan Cilik",
          intro: "Aksi nyata anak-anak mengurangi jejak karbon dan energi terbarukan!",
          story: [
            { hanzi: "争做一名合格的环保小卫士，从小事做起。", pinyin: "Zhēng zuò yī míng hégé de huánbǎo xiǎowèishì, cóng xiǎoshì zuò qǐ.", indonesian: "Bertekad menjadi penjaga lingkungan cilik yang andal, mulai dari hal-hal kecil." },
            { hanzi: "外出自带环保水杯，乘坐公共交通工具低碳出行。", pinyin: "Wàichū zì dài huánbǎo shuǐbēi, chéngzuò gōnggòng jiāotōng gōngjù dītàn chūxíng.", indonesian: "Bepergian membawa botol minum sendiri, memanfaatkan transportasi umum untuk perjalanan rendah emisi karbon." },
            { hanzi: "节约每一度电、爱惜每一张纸，让蓝天白云常在。", pinyin: "Jiéyuē měi yī dù diàn, àixī měi yī zhāng zhǐ, ràng lántiān báiyún cháng zài.", indonesian: "Hemat setiap kilowatt listrik, sayangi setiap lembar kertas, agar langit biru dan awan putih abadi." }
          ],
          vocabulary: [
            { hanzi: "卫", pinyin: "wèi", indonesian: "Menjaga / Mengawal", strokeCount: 3, strokeNames: ["横折钩", "竖", "横"], guide: "Tiga goresan teguh mengawal benteng." },
            { hanzi: "士", pinyin: "shì", indonesian: "Ksatria / Cendekiawan", strokeCount: 3, strokeNames: ["横", "竖", "横"], guide: "Garis atas lebih panjang dari garis bawah (berbeda dengan 土)." },
            { hanzi: "碳", pinyin: "tàn", indonesian: "Karbon", strokeCount: 14, strokeNames: ["点", "撇", "撇", "点", "横", "撇", "竖", "横折", "横", "横", "横", "撇", "横撇", "捺"], guide: "Batu arang (石) dan api (炭)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_028.jpg", hanzi: "低碳出行", pinyin: "dītàn chūxíng", meaning: "Naik Sepeda dan Kereta Listrik Bersih" },
            { image: "assets/hanyu5_clean/img_029.jpg", hanzi: "节能随手关灯", pinyin: "suíshǒu guāndēng", meaning: "Mematikan Sakelar Lampu Saat Siang" },
            { image: "assets/hanyu5_clean/img_030.jpg", hanzi: "太阳能板", pinyin: "tàiyángnéng bǎn", meaning: "Panel Surya Ramah Lingkungan" }
          ],
          quizzes: [
            { question: "Contoh perilaku ramah lingkungan (低碳) adalah...", options: ["Membiarkan lampu menyala terus", "Menaiki sepeda dan hemat listrik", "Membuang sampah ke selokan", "Membakar daun plastik"], answer: 1, explanation: "Bersepeda dan menghemat listrik adalah contoh aksi nyata menjaga lingkungan." }
          ]
        },
        {
          id: 8,
          title: "第八课：奇妙的太空探索",
          pinyin: "Dì bā kè: Qímiào de tàikōng tànsuǒ",
          meaning: "Pelajaran 8: Eksplorasi Antariksa yang Menakjubkan",
          intro: "Kisah stasiun luar angkasa Tiangong, penjelajahan bulan, dan planet Mars!",
          story: [
            { hanzi: "浩瀚的宇宙充满了神秘与未知，吸引着人类不断探索。", pinyin: "Hàohàn de yǔzhòu chōngmǎn le shénmì yǔ wèizhī, xīyǐnzhe rénlèi bùduàn tànsuǒ.", indonesian: "Alam semesta yang luas membentang penuh misteri dan ketidaktahuan, menarik rasa ingin tahu manusia untuk terus menjelajah." },
            { hanzi: "航天员在空间站里漫步太空，开展了多项尖端科学实验。", pinyin: "Hángtiānyuán zài kōngjiānzhàn lǐ mànbù tàikōng, kāizhǎn le duō xiàng jiānduān kēxué shíyàn.", indonesian: "Para antariksawan berjalan di luar angkasa di stasiun antariksa, melaksanakan berbagai eksperimen sains mutakhir." },
            { hanzi: "探索星辰大海是人类勇敢追梦的伟大征程！", pinyin: "Tànsuǒ xīngchén dàhǎi shì rénlèi yǒnggǎn zhuī mèng de wěidà zhēngchéng!", indonesian: "Menjelajahi bintang-bintang di samudra langit adalah perjalanan agung manusia yang berani menggapai mimpi!" }
          ],
          vocabulary: [
            { hanzi: "宇", pinyin: "yǔ", indonesian: "Ruang semesta", strokeCount: 6, strokeNames: ["点", "点", "横撇", "横", "横", "竖钩"], guide: "Atap kubah (宀) dan (于)." },
            { hanzi: "宙", pinyin: "zhòu", indonesian: "Waktu abadi", strokeCount: 8, strokeNames: ["点", "点", "横撇", "竖", "横折", "横", "竖", "横"], guide: "Atap kubah (宀) dan (由)." },
            { hanzi: "航", pinyin: "háng", indonesian: "Navigasi / Terbang", strokeCount: 10, strokeNames: ["撇", "横折钩", "点", "提", "点", "横", "点", "横", "撇", "横折弯钩"], guide: "Perahu (舟) mengarungi samudra (亢)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_033.jpg", hanzi: "太空行走", pinyin: "tàikōng xíngzǒu", meaning: "Astronot Melayang di Luar Angkasa" },
            { image: "assets/hanyu5_clean/img_034.jpg", hanzi: "空间站", pinyin: "kōngjiānzhàn", meaning: "Stasiun Luar Angkasa dengan Panel Surya" },
            { image: "assets/hanyu5_clean/img_035.jpg", hanzi: "月球车", pinyin: "yuèqiúchē", meaning: "Robot Penjelajah di Permukaan Bulan" }
          ],
          quizzes: [
            { question: "Apa arti dari gabungan kata '宇宙' (yǔzhòu)?", options: ["Alam semesta / Jagat raya", "Gedung tinggi", "Lautan dalam", "Gurun pasir"], answer: 0, explanation: "'宇宙' (yǔzhòu) artinya adalah Alam Semesta / Kosmos." }
          ]
        },
        {
          id: 9,
          title: "第九课：丝绸之路",
          pinyin: "Dì jiǔ kè: Sīchóu zhī lù",
          meaning: "Pelajaran 9: Jalur Sutra Kuno",
          intro: "Perjalanan kafilah unta melintasi gurun pasir menghubungkan peradaban Timur dan Barat!",
          story: [
            { hanzi: "两千多年前，张骞出使西域，开辟了著名的丝绸之路。", pinyin: "Liǎng qiān duō nián qián, Zhāng Qiān chūshǐ xīyù, kāipì le zhùmíng de Sīchóu zhī Lù.", indonesian: "Lebih dari dua ribu tahun yang lalu, Zhang Qian diutus ke Wilayah Barat, membuka Jalur Sutra yang tersohor di dunia." },
            { hanzi: "驼铃声声回荡在茫茫戈壁上，中国的丝绸、瓷器与茶叶源源不断运往世界各地。", pinyin: "Tuólíng shēngshēng huídàng zài mángmáng gēbì shàng, Zhōngguó de sīchóu, cíqì yǔ cháyè yuányuán bùduàn yùn wǎng shìjiè gèdì.", indonesian: "Dentingan genta unta menggema di padang pasir luas, sutra, keramik porselen, dan teh Tiongkok terus-menerus dikirim ke berbagai penjuru dunia." },
            { hanzi: "丝绸之路不仅促进了贸易往来，更架起了东西方文明交流的桥梁。", pinyin: "Sīchóu zhī Lù bùjǐn cùjìn le màoyì wǎnglái, gèng jià qǐ le dōng-xīfāng wénmíng jiāoliú de qiáoliáng.", indonesian: "Jalur Sutra tidak hanya memajukan perdagangan, namun juga mendirikan jembatan pertukaran kebudayaan Timur dan Barat." }
          ],
          vocabulary: [
            { hanzi: "丝", pinyin: "sī", indonesian: "Sutra / Benang", strokeCount: 5, strokeNames: ["横折", "横折", "点", "撇折", "横"], guide: "Dua gulungan serat sutra halus." },
            { hanzi: "绸", pinyin: "chóu", indonesian: "Kain sutra tebal", strokeCount: 11, strokeNames: ["撇折", "撇折", "提", "撇", "横折钩", "横", "横", "竖", "横折", "横", "横"], guide: "Benang sutra (纟) dan (周)." },
            { hanzi: "驼", pinyin: "tuó", indonesian: "Unta", strokeCount: 13, strokeNames: ["横", "竖", "横折", "横", "竖折折钩", "提", "点", "点", "横撇", "撇", "撇", "竖弯钩", "横"], guide: "Kuda (马) dengan punuk (它)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_038.jpg", hanzi: "沙漠驼队", pinyin: "shāmò tuóduì", meaning: "Kafilah Unta Berjalan di Gurun Pasir Emas" },
            { image: "assets/hanyu5_clean/img_039.jpg", hanzi: "精美丝绸", pinyin: "jīngměi sīchóu", meaning: "Kain Sutra Halus Berkilau" },
            { image: "assets/hanyu5_clean/img_040.jpg", hanzi: "青花瓷器", pinyin: "qīnghuā cíqì", meaning: "Vas Porselen Keramik Biru Putih" }
          ],
          quizzes: [
            { question: "Tokoh sejarah yang membuka Jalur Sutra (丝绸之路) adalah...", options: ["Zhang Qian (张骞)", "Sun Wukong", "Kong Rong", "Li Bai"], answer: 0, explanation: "Zhang Qian (张骞) adalah utusan dinasti Han yang membuka Jalur Sutra." }
          ]
        },
        {
          id: 10,
          title: "第十课：中国的历史名胜",
          pinyin: "Dì shí kè: Zhōngguó de lìshǐ míngshèng",
          meaning: "Pelajaran 10: Situs Bersejarah Tiongkok",
          intro: "Kekaguman atas Pasukan Terakota Xi'an, Tembok Besar, dan Danau Barat Hangzhou!",
          story: [
            { hanzi: "中国拥有悠久的历史和灿烂的文化古迹。", pinyin: "Zhōngguó yōngyǒu yōujiǔ de lìshǐ hé cànlàn de wénhuà gǔjì.", indonesian: "Tiongkok memiliki sejarah yang panjang dan peninggalan budaya purbakala yang gemilang." },
            { hanzi: "秦始皇兵马俑气势磅礴，被誉为世界第八大奇迹。", pinyin: "Qínshǐhuáng bīngmǎyǒng qìshì pángbó, bèi yù wéi shìjiè dì bā dà qíjì.", indonesian: "Patung Prajurit Terakota Kaisar Qin bernuansa megah berwibawa, dijuluki sebagai keajaiban dunia kedelapan." },
            { hanzi: "杭州西湖风景如画，古今中外无数文人墨客为之赞叹。", pinyin: "Hángzhōu Xīhú fēngjǐng rú huà, gǔjīn zhōngwài wúshù wénrén mòkè wéi zhī zàntàn.", indonesian: "Danau Barat Hangzhou pemandangannya seindah lukisan, dikagumi tak henti oleh sastrawan sejak zaman kuno hingga kini." }
          ],
          vocabulary: [
            { hanzi: "胜", pinyin: "shèng", indonesian: "Pemandangan indah / Menang", strokeCount: 9, strokeNames: ["撇", "横折钩", "横", "横", "撇", "横", "横", "竖", "提"], guide: "Bulan (月) dan tenaga berlipat (券)." },
            { hanzi: "俑", pinyin: "yǒng", indonesian: "Patung pengiring kubur", strokeCount: 9, strokeNames: ["撇", "竖", "横折钩", "横", "横", "竖", "横", "撇", "捺"], guide: "Orang (亻) dan (勇)." },
            { hanzi: "悠", pinyin: "yōu", indonesian: "Lama / Santai", strokeCount: 11, strokeNames: ["撇", "竖", "竖", "横折", "横", "横", "撇", "点", "卧钩", "点", "点"], guide: "Jalan panjang (攸) di atas hati (心)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_043.jpg", hanzi: "兵马俑 (Bīngmǎyǒng)", pinyin: "bīngmǎyǒng", meaning: "Prajurit Terakota Kaisar Qin di Xi'an" },
            { image: "assets/hanyu5_clean/img_044.jpg", hanzi: "杭州西湖", pinyin: "Hángzhōu Xīhú", meaning: "Danau Barat dengan Pagoda Indah" },
            { image: "assets/hanyu5_clean/img_045.jpg", hanzi: "古典园林", pinyin: "gǔdiǎn yuánlín", meaning: "Taman Klasik Tradisional Arsitektur Tiongkok" }
          ],
          quizzes: [
            { question: "Prajurit patung tanah liat yang dijuluki keajaiban dunia ke-8 adalah...", options: ["兵马俑 (Bīngmǎyǒng / Terracotta)", "Patung Spinx", "Candi Borobudur", "Menara Pisa"], answer: 0, explanation: "'兵马俑' (Terracotta Army di Xi'an) adalah ribuan prajurit tanah liat kuno peninggalan Kaisar Qin." }
          ]
        },
        {
          id: 11,
          title: "第十一课：友谊的力量",
          pinyin: "Dì shíyī kè: Yǒuyì de lìliang",
          meaning: "Pelajaran 11: Kekuatan Persahabatan Sejati",
          intro: "Kisah saling tolong-menolong mengatasi kesulitan dalam kompetisi maraton.",
          story: [
            { hanzi: "真挚的友谊如同黑夜中的明灯，在困难时给予我们力量。", pinyin: "Zhēnzhì de yǒuyì rútóng hēiyè zhōng de míngdēng, zài kùnnan shí jǐyǔ wǒmen lìliang.", indonesian: "Persahabatan yang tulus bagaikan lentera di malam gelap, memberi kita kekuatan saat menghadapi rintangan." },
            { hanzi: "运动会上，一名队员不慎跌倒，同伴们毫不犹豫停下脚步搀扶他一起冲过终点。", pinyin: "Yùndònghuì shàng, yī míng duìyuán bùshèn diēdǎo, tóngbànmen háobù yóuyù tíng xià jiǎobù chānfú tā yīqǐ chōng guò zhōngdiǎn.", indonesian: "Saat lomba lari, seorang anggota tim tak sengaja terjatuh, kawan-kawannya tanpa ragu berhenti dan memapahnya bersama-sama melewati garis finish." },
            { hanzi: "团结互助的精神赢得了全场最热烈的掌声与敬意！", pinyin: "Tuánjié hùzhù de jīngshén yíngdé le quán chǎng zuì rèliè de zhǎngshēng yǔ jìngyì!", indonesian: "Semangat kebersamaan dan saling tolong menolong memenangkan tepuk tangan dan rasa hormat paling gemuruh di seluruh arena!" }
          ],
          vocabulary: [
            { hanzi: "谊", pinyin: "yì", indonesian: "Persahabatan / Ikatan", strokeCount: 13, strokeNames: ["点", "横折提", "点", "点", "横撇", "横", "横", "竖", "横", "竖", "横折", "横", "横"], guide: "Bicara (讠) dan kebenaran (宜)." },
            { hanzi: "跌", pinyin: "diē", indonesian: "Jatuh / Tergelincir", strokeCount: 12, strokeNames: ["竖", "横折", "横", "竖", "横", "竖", "提", "撇", "横", "横", "撇", "捺"], guide: "Kaki (足) dan kehilangan keseimbangan (失)." },
            { hanzi: "赢", pinyin: "yíng", indonesian: "Menang / Meraih", strokeCount: 17, strokeNames: ["点", "横", "竖", "横折", "横", "撇", "横折钩", "横", "横", "点", "横折提", "竖", "横折", "撇", "点", "撇", "点"], guide: "Kematangan, ketenangan, waktu, uang, dan kerang (亡口月贝凡)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_048.jpg", hanzi: "搀扶同伴", pinyin: "chānfú tóngbàn", meaning: "Membantu Sahabat yang Terjatuh Bangkit" },
            { image: "assets/hanyu5_clean/img_049.jpg", hanzi: "冲过终点", pinyin: "chōng guò zhōngdiǎn", meaning: "Berlari Bersama Menembus Garis Pita Finish" },
            { image: "assets/hanyu5_clean/img_050.jpg", hanzi: "团结合作", pinyin: "tuánjié hézuò", meaning: "Saling Bergandengan Tangan Erat" }
          ],
          quizzes: [
            { question: "Apa arti dari '友谊' (yǒuyì)?", options: ["Permusuhan", "Persahabatan / Tali pertemanan", "Uang saku", "Perjalanan jauh"], answer: 1, explanation: "'友谊' (yǒuyì) artinya Persahabatan." }
          ]
        },
        {
          id: 12,
          title: "第十二课：梦想与未来",
          pinyin: "Dì shí'èr kè: Mèngxiǎng yǔ wèilái",
          meaning: "Pelajaran 12: Impian dan Masa Depan",
          intro: "Setiap anak menggambar cita-cita menjadi dokter, ilmuwan, astronot, dan seniman!",
          story: [
            { hanzi: "梦想是翱翔天际的翅膀，指引我们前行的方向。", pinyin: "Mèngxiǎng shì áoxiáng tiānjì de chìbǎng, zhǐyǐn wǒmen qiánxíng de fāngxiàng.", indonesian: "Impian adalah sayap yang terbang melayang di angkasa, menuntun arah langkah kita ke depan." },
            { hanzi: "有的同学梦想成为救死扶伤的医生，有的想成为探索宇宙的科学家。", pinyin: "Yǒu de tóngxué mèngxiǎng chéngwéi jiù sǐ fú shāng de yīshēng, yǒu de xiǎng chéngwéi tànsuǒ yǔzhòu de kēxuéjiā.", indonesian: "Ada murid yang bercita-cita menjadi dokter penyelamat sesama, ada yang ingin menjadi ilmuwan penjelajah antariksa." },
            { hanzi: "放飞梦想，脚踏实地，明天一定会更加灿烂辉煌！", pinyin: "Fàngfēi mèngxiǎng, jiǎotàshídì, míngtiān yīdìng huì gèngjiā cànlàn huīhuáng!", indonesian: "Terbangkan impian, berpijak teguh pada bumi, hari esok pasti akan jauh lebih cemerlang dan gilang-gemilang!" }
          ],
          vocabulary: [
            { hanzi: "梦", pinyin: "mèng", indonesian: "Mimpi / Impian", strokeCount: 11, strokeNames: ["横", "竖", "撇", "点", "横", "竖", "撇", "点", "撇", "横撇", "点"], guide: "Hutan (林) di atas malam gelap (夕)." },
            { hanzi: "想", pinyin: "xiǎng", indonesian: "Berpikir / Ingin / Rindu", strokeCount: 13, strokeNames: ["横", "竖", "撇", "点", "竖", "横折", "横", "横", "横", "点", "卧钩", "点", "点"], guide: "Pohon dan mata (相) di atas hati (心)." },
            { hanzi: "煌", pinyin: "huáng", indonesian: "Gilang-gemilang / Terang", strokeCount: 13, strokeNames: ["点", "撇", "撇", "点", "撇", "竖", "横折", "横", "横", "横", "横", "竖", "横"], guide: "Api (火) menyinari kaisar agung (皇)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu5_clean/img_053.jpg", hanzi: "放飞梦想", pinyin: "fàngfēi mèngxiǎng", meaning: "Menerbangkan Pesawat Kertas Impian" },
            { image: "assets/hanyu5_clean/img_054.jpg", hanzi: "未来科学家", pinyin: "kēxuéjiā", meaning: "Ilmuwan Masa Depan Meneliti" },
            { image: "assets/hanyu5_clean/img_055.jpg", hanzi: "灿烂明天", pinyin: "cànlàn míngtiān", meaning: "Matahari Terbit Menyinari Cakrawala" }
          ],
          quizzes: [
            { question: "Apa arti dari '梦想' (mèngxiǎng)?", options: ["Mimpi buruk", "Impian / Cita-cita masa depan", "Membeli baju", "Tidur malam"], answer: 1, explanation: "'梦想' (mèngxiǎng) bermakna Impian atau Cita-cita." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Han Yu 6 (汉语 6)",
      grade: "Kelas 6 SD / Tingkat Mahir",
      dinoGuide: { name: "Raphy si Velociraptor Cilik", avatar: "🦖", desc: "Taklukkan peribahasa tingkat tinggi, biografi tokoh, AI, dan wisuda kelulusan bersama Raphy!" },
      color: "#e11d48",
      units: [
        {
          id: 1,
          title: "第一课：少年立志",
          pinyin: "Dì yī kè: Shàonián lìzhì",
          meaning: "Pelajaran 1: Cita-cita dan Tekad Pemuda",
          intro: "Kisah keteguhan tekad pemuda menuntut ilmu demi kemajuan nusa dan bangsa.",
          story: [
            { hanzi: "少年智则国智，少年强则国强。", pinyin: "Shàonián zhì zé guó zhì, shàonián qiáng zé guó qiáng.", indonesian: "Jika pemudanya cerdas maka negaranya cerdas, jika pemudanya kuat maka negaranya kuat." },
            { hanzi: "我们正处于风华正茂的少年时期，应当珍惜光阴，立下远大志向。", pinyin: "Wǒmen zhèng chǔyú fēnghuá zhèngmào de shàonián shíqī, yīngdāng zhēnxī guāngyīn, lì xià yuǎndà zhìxiàng.", indonesian: "Kita sedang berada di usia muda yang penuh semangat, selayaknya menghargai waktu dan menetapkan cita-cita luhur yang tinggi." },
            { hanzi: "通过刻苦钻研与不懈奋斗，把理想变为辉煌的现实！", pinyin: "Tōngguò kèkǔ zuānyán yǔ bùxiè fèndòu, bǎ lǐxiǎng biàn wéi huīhuáng de xiànshí!", indonesian: "Melalui ketekunan belajar dan perjuangan tanpa henti, mengubah impian menjadi kenyataan yang gilang-gemilang!" }
          ],
          vocabulary: [
            { hanzi: "志", pinyin: "zhì", indonesian: "Tekad / Cita-cita", strokeCount: 7, strokeNames: ["横", "竖", "横", "点", "卧钩", "点", "点"], guide: "Ksatria (士) dengan keteguhan hati (心)." },
            { hanzi: "强", pinyin: "qiáng", indonesian: "Kuat / Tangguh", strokeCount: 12, strokeNames: ["横折", "横", "竖折折钩", "撇", "竖", "横折", "横", "竖", "横", "点", "竖折", "点"], guide: "Busur (弓) dan serangga kuat (虽)." },
            { hanzi: "奋", pinyin: "fèn", indonesian: "Berjuang / Bangkit", strokeCount: 8, strokeNames: ["横", "撇", "捺", "竖", "横折", "横", "竖", "横"], guide: "Orang besar (大) terbang mengelilingi ladang (田)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_002.jpg", hanzi: "少年立志", pinyin: "shàonián lìzhì", meaning: "Pelajar Membaca Buku dengan Semangat Membara" },
            { image: "assets/hanyu6_clean/img_003.jpg", hanzi: "珍惜光阴", pinyin: "zhēnxī guāngyīn", meaning: "Jam Pasir Menghargai Setiap Detik Waktu" },
            { image: "assets/hanyu6_clean/img_004.jpg", hanzi: "勇攀高峰", pinyin: "yǒng pān gāofēng", meaning: "Mendaki Puncak Gunung Tertinggi" }
          ],
          quizzes: [
            { question: "Pepatah '少年强则国强' berarti...", options: ["Jika pemuda malas negara rugi", "Jika generasi mudanya kuat, maka bangsanya akan kuat", "Semua anak harus bermain", "Negara yang kecil"], answer: 1, explanation: "Ungkapan ini menekankan pentingnya generasi muda yang kuat dan cerdas sebagai pondasi bangsa." }
          ]
        },
        {
          id: 2,
          title: "第二课：读书与思考",
          pinyin: "Dì èr kè: Dúshū yǔ sīkǎo",
          meaning: "Pelajaran 2: Membaca dan Berpikir Kritis",
          intro: "Pentingnya memadukan membaca buku dan perenungan nalar kritis (学而不思则罔，思而不学则殆).",
          story: [
            { hanzi: "孔子曰：'学而不思则罔，思而不学则殆。'", pinyin: "Kǒngzǐ yuē: 'Xué ér bù sī zé wǎng, sī ér bù xué zé dài.'", indonesian: "Konfusius bersabda: 'Belajar tanpa berpikir akan tersesat, berpikir tanpa belajar akan berbahaya.'" },
            { hanzi: "读书不仅是获取知识的过程，更需要开动脑筋、深入思考。", pinyin: "Dúshū bùjǐn shì huòqǔ zhīshi de guòchéng, gèng xūyào kāidòng nǎojīn, shēnrù sīkǎo.", indonesian: "Membaca bukan hanya proses memperoleh ilmu, namun juga memerlukan kerja otak dan pemikiran mendalam." },
            { hanzi: "只有将书本知识与实践结合，才能真正转化为自己的智慧。", pinyin: "Zhǐyǒu jiāng shūběn zhīshi yǔ shíjiàn jiéhé, cáinéng zhēnzhèng zhuǎnhuà wéi zìjǐ de zhìhuì.", indonesian: "Hanya dengan menggabungkan ilmu buku dan praktik nyata, barulah dapat berubah menjadi kebijaksanaan diri sejati." }
          ],
          vocabulary: [
            { hanzi: "思", pinyin: "sī", indonesian: "Berpikir / Merenung", strokeCount: 9, strokeNames: ["竖", "横折", "横", "横", "竖", "点", "卧钩", "点", "点"], guide: "Ladang otak (田) di atas hati (心)." },
            { hanzi: "考", pinyin: "kǎo", indonesian: "Meneliti / Menguji", strokeCount: 6, strokeNames: ["横", "竖", "横", "撇", "横", "竖折折钩"], guide: "Orang tua bijak bertongkat menguji wawasan." },
            { hanzi: "智", pinyin: "zhì", indonesian: "Bijaksana / Cerdas", strokeCount: 12, strokeNames: ["撇", "横", "横", "撇", "点", "竖", "横折", "横", "竖", "横折", "横", "横"], guide: "Tahu banyak hal (知) di bawah matahari (日)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_006.jpg", hanzi: "深思熟虑", pinyin: "shēnsī shúlǜ", meaning: "Merenung dan Menimbang Masalah dengan Matang" },
            { image: "assets/hanyu6_clean/img_007.jpg", hanzi: "博览群书", pinyin: "bólǎn qúnshū", meaning: "Membaca Beraneka Ragam Buku Pengetahuan" },
            { image: "assets/hanyu6_clean/img_008.jpg", hanzi: "智慧光芒", pinyin: "zhìhuì guāngmáng", meaning: "Cahaya Lampu Ide Penemuan Cerdas" }
          ],
          quizzes: [
            { question: "Maksud dari '学而不思则罔' adalah...", options: ["Belajar tanpa berpikir akan membuat bingung / tersesat", "Membaca buku membuat ngantuk", "Buku harus dihafal semuanya", "Jangan pernah membaca buku"], answer: 0, explanation: "Ungkapan filsafat klasik Konfusius ini mengajarkan agar kita tidak sekadar membaca hafalan, tetapi berpikir kritis." }
          ]
        },
        {
          id: 3,
          title: "第三课：成语故事精选",
          pinyin: "Dì sān kè: Chéngyǔ gùshì jīngxuǎn",
          meaning: "Pelajaran 3: Kumpulan Kisah Peribahasa Kuno",
          intro: "Kisah Peribahasa 'Menutup Telinga Saat Mencuri Lonceng' (掩耳盗铃) & 'Rubah Meminjam Wibawa Harimau' (狐假虎威).",
          story: [
            { hanzi: "《狐假虎威》讲述了一只狡猾的狐狸借着老虎的威风吓跑百兽的故事。", pinyin: "'Hújiǎhǔwēi' jiǎngshù le yī zhī jiǎohuá de húli jièzhe lǎohǔ de wēifēng xià pǎo bǎi shòu de gùshì.", indonesian: "Kisah 'Rubah Meminjam Wibawa Harimau' menceritakan seekor rubah licik yang meminjam keperkasaan harimau untuk menakut-nakuti hewan-hewan lain." },
            { hanzi: "《掩耳盗铃》则讽刺了那些企图自欺欺人、掩盖错误的可笑行为。", pinyin: "'Yǎn'ěrdàolíng' zé fěngcì le nàxiē qǐtú zìqīqīrén, yǎngài cuòwù de kěxiào xíngwéi.", indonesian: "Kisah 'Menutup Telinga Mencuri Lonceng' menyindir perilaku konyol orang yang menipu diri sendiri demi menutupi kesalahan." },
            { hanzi: "成语是汉语瑰宝，蕴含着深刻的人生哲理。", pinyin: "Chéngyǔ shì hànyǔ guībǎo, yùnhánzhe shēnkè de rénshēng zhélǐ.", indonesian: "Peribahasa Chengyu adalah permata bahasa Mandarin, mengandung filosofi kehidupan yang sangat mendalam." }
          ],
          vocabulary: [
            { hanzi: "成", pinyin: "chéng", indonesian: "Menjadi / Berhasil", strokeCount: 6, strokeNames: ["横", "撇", "横折钩", "斜钩", "撇", "点"], guide: "Senjata kapak perang menghasilkan keberhasilan." },
            { hanzi: "语", pinyin: "yǔ", indonesian: "Bahasa / Kata-kata", strokeCount: 9, strokeNames: ["点", "横折提", "横", "竖", "横折", "横", "竖", "横折", "横"], guide: "Bicara (讠), lima (五), dan mulut (口)." },
            { hanzi: "威", pinyin: "wēi", indonesian: "Wibawa / Kehebatan", strokeCount: 9, strokeNames: ["横", "撇", "横折提", "斜钩", "撇", "点", "撇点", "撇", "横"], guide: "Senjata kapak (戊) di atas wanita berwibawa (女)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_010.jpg", hanzi: "狐假虎威", pinyin: "hú jiǎ hǔ wēi", meaning: "Rubah Berjalan Gagah di Depan Harimau" },
            { image: "assets/hanyu6_clean/img_011.jpg", hanzi: "掩耳盗铃", pinyin: "yǎn ěr dào líng", meaning: "Pencuri Menutup Kuping Sendiri Mencuri Lonceng" },
            { image: "assets/hanyu6_clean/img_012.jpg", hanzi: "智慧成语", pinyin: "zhìhuì chéngyǔ", meaning: "Gulungan Kaligrafi Kuno Bersejarah" }
          ],
          quizzes: [
            { question: "Arti dari peribahasa '狐假虎威' (Hú jiǎ hǔ wēi) adalah...", options: ["Harimau dan rubah berteman baik", "Memanfaatkan wibawa atau kekuasaan orang lain untuk menakut-nakuti orang", "Rubah memburu harimau", "Harimau melompati pohon"], answer: 1, explanation: "'狐假虎威' bermakna meminjam wibawa/kekuatan pihak lain untuk menyombongkan diri atau menakuti pihak lain." }
          ]
        },
        {
          id: 4,
          title: "第四课：名人传记与启示",
          pinyin: "Dì sì kè: Míngrén zhuànjì yǔ qǐshì",
          meaning: "Pelajaran 4: Biografi Tokoh dan Hikmahnya",
          intro: "Kisah inspiratif Thomas Edison menemukan lampu pijar & Tu Youyou menemukan obat malaria.",
          story: [
            { hanzi: "古今中外的杰出人物用他们的毅力改变了人类历史。", pinyin: "Gǔjīn zhōngwài de jiéchū rénwù yòng tāmen de yìlì gǎibiàn le rénlèi lìshǐ.", indonesian: "Tokoh-tokoh terkemuka di dunia sepanjang zaman menggunakan kegigihan mereka untuk mengubah jalannya sejarah manusia." },
            { hanzi: "爱迪生经历了上千次失败依然不放弃，最终发明了电灯。", pinyin: "Àidíshēng jīnglì le shàng qiān cì shībài yīrán bù fàngqì, zuìzhōng fāmíng le diàndēng.", indonesian: "Edison mengalami ribuan kali kegagalan namun tetap tidak menyerah, hingga akhirnya berhasil menemukan lampu pijar." },
            { hanzi: "中国科学家屠呦呦经过无数次实验成功提取青蒿素，拯救了数百万疟疾患者的生命。", pinyin: "Zhōngguó kēxuéjiā Tú Yōuyōu jīngguò wúshù cì shíyàn chénggōng tíqǔ qīnghāosù, zhěngjiù le shù bǎi wàn nüèji huànzhě de shēngmìng.", indonesian: "Ilmuwan Tiongkok Tu Youyou setelah ribuan eksperimen berhasil mengekstrak artemisinin, menyelamatkan jutaan nyawa penderita malaria." }
          ],
          vocabulary: [
            { hanzi: "杰", pinyin: "jié", indonesian: "Terhebat / Menonjol", strokeCount: 8, strokeNames: ["横", "竖", "撇", "点", "点", "点", "点", "点"], guide: "Pohon kayu (木) di atas empat titik api berkobar (灬)." },
            { hanzi: "毅", pinyin: "yì", indonesian: "Kegigihan / Pantang menyerah", strokeCount: 15, strokeNames: ["点", "撇", "横", "竖", "撇", "点", "横", "撇", "竖弯钩", "横", "撇", "竖弯钩", "撇", "横", "捺"], guide: "Babi hutan pemberani (豕) dan tombak tempur (殳)." },
            { hanzi: "拔", pinyin: "bá", indonesian: "Mencabut / Terpilih", strokeCount: 8, strokeNames: ["横", "竖钩", "提", "横", "撇", "捺", "点", "撇"], guide: "Tangan (扌) mencabut dengan kuat (友+丶)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_014.jpg", hanzi: "爱迪生发明电灯", pinyin: "diàndēng", meaning: "Lampu Pijar Terang Menyala Pertama di Dunia" },
            { image: "assets/hanyu6_clean/img_015.jpg", hanzi: "青蒿素研制", pinyin: "qīnghāosù", meaning: "Eksperimen Tanaman Herbal Medis" },
            { image: "assets/hanyu6_clean/img_016.jpg", hanzi: "科学诺贝尔奖", pinyin: "Nuòbèi'ěr jiǎng", meaning: "Medali Emas Penghargaan Nobel" }
          ],
          quizzes: [
            { question: "Pelajaran terpenting dari keberhasilan para tokoh penemu dunia adalah...", options: ["Menyerah saat gagal pertama kali", "Ketekunan, pantang menyerah, dan kerja keras (坚持不懈)", "Menunggu orang lain mengerjakan", "Hanya mengandalkan keberuntungan"], answer: 1, explanation: "Ketekunan dan pantang menyerah adalah kunci utama di balik seluruh penemuan besar peradaban manusia." }
          ]
        },
        {
          id: 5,
          title: "第五课：人与自然和谐相处",
          pinyin: "Dì wǔ kè: Rén yǔ zìrán héxié xiāngchǔ",
          meaning: "Pelajaran 5: Harmoni Manusia dan Alam Semesta",
          intro: "Menjaga keseimbangan ekosistem bumi dan keanekaragaman hayati purba.",
          story: [
            { hanzi: "绿水青山就是金山银山。", pinyin: "Lǜ shuǐ qīng shān jiù shì jīn shān yín shān.", indonesian: "Air yang jernih dan gunung yang hijau adalah tambang emas dan perak yang tak ternilai." },
            { hanzi: "大自然赋予我们清新的空气、甘甜的泉水和肥沃的土壤，我们应当怀揣敬畏与感恩之心。", pinyin: "Dàzìrán fùyǔ wǒmen qīngxīn de kōngqì, gāntián de quánshuǐ hé féiwò de tǔrǎng, wǒmen yīngdāng huáichuāi jìngwèi yǔ gǎn'ēn zhī xīn.", indonesian: "Alam menganugerahkan kita udara segar, air pegunungan yang manis, dan tanah yang subur, kita selayaknya membalas dengan rasa hormat dan syukur." },
            { hanzi: "只有人与自然和谐共生，人类社会才能实现持久的发展与繁荣。", pinyin: "Zhǐyǒu rén yǔ zìrán héxié gòngshēng, rénlèi shèhuì cáinéng shíxiàn chíjiǔ de fāzhǎn yǔ fánróng.", indonesian: "Hanya jika manusia dan alam hidup berdampingan secara harmonis, barulah masyarakat manusia dapat mewujudkan kemakmuran abadi." }
          ],
          vocabulary: [
            { hanzi: "和", pinyin: "hé", indonesian: "Harmonis / Damai", strokeCount: 8, strokeNames: ["撇", "横", "竖", "撇", "点", "竖", "横折", "横"], guide: "Padi (禾) mencukupi kebutuhan mulut (口)." },
            { hanzi: "谐", pinyin: "xié", indonesian: "Selaras / Rukun", strokeCount: 11, strokeNames: ["点", "横折提", "横", "竖", "竖", "横", "撇", "竖弯钩", "横", "横折", "横"], guide: "Bicara (讠) dan semua rukun (皆)." },
            { hanzi: "繁", pinyin: "fán", indonesian: "Makmur / Semarak", strokeCount: 17, strokeNames: ["撇", "点", "撇", "横折", "竖", "横", "横折", "横", "横", "撇", "横撇", "点", "撇折", "撇折", "提", "点", "点"], guide: "Banyak benang sutra indah menyatu." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_018.jpg", hanzi: "人与自然", pinyin: "rén yǔ zìrán", meaning: "Manusia Berdampingan dengan Hewan Hutan" },
            { image: "assets/hanyu6_clean/img_019.jpg", hanzi: "绿水青山", pinyin: "lǜshuǐ qīngshān", meaning: "Pemandangan Lembah Gunung Hijau Asri" },
            { image: "assets/hanyu6_clean/img_020.jpg", hanzi: "生态平衡", pinyin: "shēngtài pínghéng", meaning: "Keseimbangan Ekosistem Satwa Liar" }
          ],
          quizzes: [
            { question: "Maksud dari filosofi '人与自然和谐共生' adalah...", options: ["Menebang seluruh pohon", "Manusia dan alam hidup berdampingan secara harmonis dan saling menjaga", "Mengeringkan danau untuk perumahan", "Memburu satwa langka"], answer: 1, explanation: "Prinsip harmoni mengajarkan kelestarian ekosistem dan perlindungan alam semesta." }
          ]
        },
        {
          id: 6,
          title: "第六课：科技前沿与人工智能",
          pinyin: "Dì liù kè: Kējì qiányán yǔ réngōng zhìnéng",
          meaning: "Pelajaran 6: Kecerdasan Buatan & Masa Depan",
          intro: "Peran Artificial Intelligence (AI), mobil otonom, dan big data dalam kehidupan!",
          story: [
            { hanzi: "人工智能技术正在深刻地改变着世界的发展格局。", pinyin: "Réngōng zhìnéng jìshù zhèngzài shēnkè de gǎibiànzhe shìjiè de fāzhǎn géjú.", indonesian: "Teknologi Kecerdasan Buatan (AI) sedang mengubah tatanan perkembangan dunia secara mendalam." },
            { hanzi: "自动驾驶汽车、智能医疗诊断、语言实时互译已成为现实。", pinyin: "Zìdòng jiàshǐ qìchē, zhìnéng yīliáo zhěnduàn, yǔyán shíshí hùyì yǐ chéngwéi xiànshí.", indonesian: "Mobil tanpa pengemudi (otonom), diagnosis medis cerdas, dan penerjemahan bahasa seketika telah menjadi kenyataan nyata." },
            { hanzi: "掌握科学前沿知识，我们将成为未来数字时代的领航者！", pinyin: "Zhǎngwò kēxué qiányán zhīshi, wǒmen jiāng chéngwéi wèilái shùzì shídài de lǐnghángzhě!", indonesian: "Menguasai ilmu sains terdepan, kita akan menjadi pemimpin penunjuk arah di era digital masa depan!" }
          ],
          vocabulary: [
            { hanzi: "智", pinyin: "zhì", indonesian: "Cerdas / Pintar", strokeCount: 12, strokeNames: ["撇", "横", "横", "撇", "点", "竖", "横折", "横", "竖", "横折", "横", "横"], guide: "Pengetahuan (知) bersinar di bawah matahari (日)." },
            { hanzi: "能", pinyin: "néng", indonesian: "Kemampuan / Kapabilitas", strokeCount: 10, strokeNames: ["撇折", "点", "横", "横", "竖", "横折钩", "撇", "竖弯钩", "撇", "竖弯钩"], guide: "Dua cakar beruang melambangkan kapabilitas serbabisa." },
            { hanzi: "驶", pinyin: "shǐ", indonesian: "Mengemudi / Melaju", strokeCount: 8, strokeNames: ["横", "竖", "横折", "横", "竖折折钩", "提", "点", "横", "撇", "捺"], guide: "Kuda (马) dipacu oleh sejarah (史)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_023.jpg", hanzi: "人工智能 (AI)", pinyin: "réngōng zhìnéng", meaning: "Sirkuit Chip Otak Kecerdasan Buatan" },
            { image: "assets/hanyu6_clean/img_024.jpg", hanzi: "自动驾驶", pinyin: "zìdòng jiàshǐ", meaning: "Mobil Sensor Pintar Berkendara Otomatis" },
            { image: "assets/hanyu6_clean/img_025.jpg", hanzi: "数字网络", pinyin: "shùzì wǎngluò", meaning: "Jaringan Data Komputasi Awan Global" }
          ],
          quizzes: [
            { question: "Istilah bahasa Mandarin untuk 'Artificial Intelligence (AI)' adalah...", options: ["人工智能 (réngōng zhìnéng)", "电脑游戏 (diànnǎo yóuxì)", "飞机模型 (fēijī móxíng)", "网络购物 (wǎngluò gòuwù)"], answer: 0, explanation: "'人工智能' (réngōng zhìnéng) secara harfiah adalah Kecerdasan Buatan Manusia (AI)." }
          ]
        },
        {
          id: 7,
          title: "第七课：世界文化遗产",
          pinyin: "Dì qī kè: Shìjiè wénhuà yíchǎn",
          meaning: "Pelajaran 7: Warisan Budaya Dunia",
          intro: "Keagungan Candi Borobudur, Piramida, Taj Mahal, dan Gua Mogao Dunhuang!",
          story: [
            { hanzi: "世界文化遗产是人类文明历程中留下的璀璨明珠。", pinyin: "Shìjiè wénhuà yíchǎn shì rénlèi wénmíng lìchéng zhōng liú xià de cuǐcàn míngzhū.", indonesian: "Warisan budaya dunia adalah mutiara berkilau yang ditinggalkan dalam perjalanan peradaban manusia." },
            { hanzi: "敦煌莫高窟的飞天壁画精美绝伦，印尼的婆罗浮屠佛塔庄严宏伟。", pinyin: "Dūnhuáng Mògāokū de fēitiān bìhuà jīngměi juélún, Yìnní de Póluófútú fótǎ zhuāngyán hóngwěi.", indonesian: "Lukisan dinding bidadari terbang di Gua Mogao Dunhuang sangat elok tiada tara, Candi Borobudur di Indonesia agung dan megah menawan." },
            { hanzi: "共同保护全人类的文化遗产，传承文明的火种。", pinyin: "Gòngtóng bǎohù quán rénlèi de wénhuà yíchǎn, chuánchéng wénmíng de huǒzhǒng.", indonesian: "Bersama-sama menjaga warisan budaya seluruh umat manusia, meneruskan api peradaban yang abadi." }
          ],
          vocabulary: [
            { hanzi: "遗", pinyin: "yí", indonesian: "Peninggalan / Warisan", strokeCount: 12, strokeNames: ["点", "横", "竖", "横折", "横", "横折钩", "撇", "点", "点", "点", "横折折撇", "捺"], guide: "Keluarga bangsawan (贵) dan perjalanan sejarah (辶)." },
            { hanzi: "产", pinyin: "chǎn", indonesian: "Harta / Menghasilkan", strokeCount: 6, strokeNames: ["点", "横", "点", "撇", "横", "竖弯钩"], guide: "Tunas yang tumbuh dari tanah." },
            { hanzi: "煌", pinyin: "huáng", indonesian: "Megah gemerlap", strokeCount: 13, strokeNames: ["点", "撇", "撇", "点", "撇", "竖", "横折", "横", "横", "横", "横", "竖", "横"], guide: "Api kemegahan (火皇)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_028.jpg", hanzi: "婆罗浮屠 (Borobudur)", pinyin: "Póluófútú", meaning: "Candi Borobudur Megah di Indonesia" },
            { image: "assets/hanyu6_clean/img_029.jpg", hanzi: "敦煌壁画", pinyin: "Dūnhuáng bìhuà", meaning: "Lukisan Dinding Bidadari Terbang Gua Dunhuang" },
            { image: "assets/hanyu6_clean/img_030.jpg", hanzi: "世界遗产标志", pinyin: "yíchǎn biāozhì", meaning: "Lambang Perlindungan Warisan Budaya UNESCO" }
          ],
          quizzes: [
            { question: "Bahasa Mandarin untuk Candi Borobudur (warisan dunia di Indonesia) adalah...", options: ["婆罗浮屠 (Póluófútú)", "长城 (Chángchéng)", "金字塔 (Jīnzìtǎ)", "泰姬陵 (Tàijīlíng)"], answer: 0, explanation: "'婆罗浮屠' (Póluófútú) adalah nama Candi Borobudur dalam bahasa Mandarin." }
          ]
        },
        {
          id: 8,
          title: "第八课：语言的魅力与艺术",
          pinyin: "Dì bā kè: Yǔyán de mèilì yǔ yìshù",
          meaning: "Pelajaran 8: Seni dan Pesona Bahasa Mandarin",
          intro: "Keindahan bait puisi klasik dinasti Tang & Song, kaligrafi, dan nada musikal!",
          story: [
            { hanzi: "汉字源远流长，每一个方块字都蕴含着独特的形体美与意境美。", pinyin: "Hànzì yuányuǎnliúcháng, měi yī gè fāngkuàizì dōu yùnhánzhe dútè de xíngtǐ měi yǔ yìjìng měi.", indonesian: "Aksara Hanzi memiliki sejarah panjang yang mengakar, setiap aksara kotak mengandung keindahan bentuk dan makna puitis yang khas." },
            { hanzi: "唐诗宋词朗朗上口，抑扬顿挫如同优美的乐曲。", pinyin: "Táng shī Sòng cí lǎnglǎng shàng kǒu, yìyáng dùncuò rútóng yōuměi de yuèqǔ.", indonesian: "Puisi dinasti Tang dan lirik Song sangat merdu saat dilantunkan, irama naik turunnya bagaikan komposisi musik yang indah." },
            { hanzi: "学好中文，能让我们领略跨越千年的文化魅力与思想精粹。", pinyin: "Xué hǎo zhōngwén, néng ràng wǒmen lǐnglüè kuàyuè qiānnián de wénhuà mèilì yǔ sīxiǎng jīngcuì.", indonesian: "Menguasai bahasa Mandarin memungkinkan kita menikmati pesona kebudayaan dan sari pati pemikiran yang melintasi ribuan tahun." }
          ],
          vocabulary: [
            { hanzi: "魅", pinyin: "mèi", indonesian: "Pesona / Daya pikat", strokeCount: 14, strokeNames: ["撇", "竖", "横折", "横", "横折", "撇", "竖折", "横", "撇", "捺", "横", "横", "竖", "撇"], guide: "Roh (鬼) yang belum matang (未)." },
            { hanzi: "力", pinyin: "lì", indonesian: "Kekuatan / Daya", strokeCount: 2, strokeNames: ["横折钩", "撇"], guide: "Otot lengan membajak tanah." },
            { hanzi: "术", pinyin: "shù", indonesian: "Seni / Keterampilan", strokeCount: 5, strokeNames: ["横", "竖", "撇", "捺", "点"], guide: "Pohon (木) dengan titik keterampilan khusus di dahan." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_033.jpg", hanzi: "毛笔书法", pinyin: "máobǐ shūfǎ", meaning: "Seni Kaligrafi Tinta Hitam Tradisional" },
            { image: "assets/hanyu6_clean/img_034.jpg", hanzi: "朗诵唐诗", pinyin: "lǎngsòng Tángshī", meaning: "Membaca Puisi Klasik dengan Khidmat" },
            { image: "assets/hanyu6_clean/img_035.jpg", hanzi: "古琴伴奏", pinyin: "gǔqín bànzòu", meaning: "Alat Musik Petik Purba Guqin" }
          ],
          quizzes: [
            { question: "Apa arti dari '书法' (shūfǎ)?", options: ["Seni beladiri", "Seni Kaligrafi Tulis Aksara", "Membuat keramik", "Memasak makanan"], answer: 1, explanation: "'书法' (shūfǎ) adalah seni menulis indah kaligrafi Mandarin." }
          ]
        },
        {
          id: 9,
          title: "第九课：传统节日与现代社会",
          pinyin: "Dì jiǔ kè: Chuántǒng jiérì yǔ xiàndài shèhuì",
          meaning: "Pelajaran 9: Perayaan Tradisi di Era Modern",
          intro: "Kombinasi angpao digital, reuni virtual, dan pelestarian adat istiadat leluhur!",
          story: [
            { hanzi: "随着科技的发展，传统节日的庆祝方式也焕发出新的生机。", pinyin: "Suízhe kējì de fāzhǎn, chuántǒng jiérì de qìngzhù fāngshì yě huànfā chū xīn de shēngjī.", indonesian: "Seiring kemajuan teknologi, cara merayakan hari raya tradisional pun memancarkan vitalitas kehidupan baru." },
            { hanzi: "电子红包、云端拜年拉近了身处世界各地亲朋好友的距离。", pinyin: "Diànzǐ hóngbāo, yúnduān bàinián lājìn le shēn chǔ shìjiè gèdì qīnpéng hǎoyǒu de jùlí.", indonesian: "Angpao elektronik dan silaturahmi video call di awan mendekatkan jarak sanak saudara di seluruh penjuru bumi." },
            { hanzi: "无论时代如何变迁，团圆与感恩的情感内核永远不变。", pinyin: "Wúlùn shídài rúhé biànqiān, tuányuán yǔ gǎn'ēn de qínggǎn nèihé yǒngyuǎn bù biàn.", indonesian: "Bagaimanapun zaman berubah, inti sari emosi kebersamaan dan rasa syukur akan senantiasa abadi." }
          ],
          vocabulary: [
            { hanzi: "庆", pinyin: "qìng", indonesian: "Merayakan / Pesta", strokeCount: 6, strokeNames: ["点", "横", "撇", "横折", "横", "撇"], guide: "Gedung perayaan megah." },
            { hanzi: "祝", pinyin: "zhù", indonesian: "Mendoakan / Selamat", strokeCount: 9, strokeNames: ["点", "横撇", "竖", "点", "竖", "横折", "横", "撇", "竖弯钩"], guide: "Radikal doa (礻) dan anak (兄)." },
            { hanzi: "距", pinyin: "jù", indonesian: "Jarak", strokeCount: 11, strokeNames: ["竖", "横折", "横", "竖", "横", "竖", "提", "横", "竖", "横折", "横"], guide: "Kaki (足) mengukur jarak persegi (巨)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_038.jpg", hanzi: "电子红包", pinyin: "diànzǐ hóngbāo", meaning: "Mengirim Amplop Angpao Merah via Ponsel" },
            { image: "assets/hanyu6_clean/img_039.jpg", hanzi: "视频拜年", pinyin: "shìpín bàinián", meaning: "Video Call Menyapa Kakek Nenek Reuni" },
            { image: "assets/hanyu6_clean/img_040.jpg", hanzi: "全家团聚", pinyin: "quánjiā tuánjù", meaning: "Makan Malam Reuni Bersama di Meja Bundar" }
          ],
          quizzes: [
            { question: "Tradisi memberi amplop merah berisi berkah keberuntungan disebut...", options: ["红包 (hóngbāo / Angpao)", "月饼 (yuèbǐng)", "灯笼 (dēnglong)", "鞭炮 (biānpào)"], answer: 0, explanation: "'红包' (hóngbāo) adalah amplop merah (angpao) tanda berkah dan kasih sayang." }
          ]
        },
        {
          id: 10,
          title: "第十课：合作与共赢",
          pinyin: "Dì shí kè: Hézuò yǔ gòngyíng",
          meaning: "Pelajaran 10: Kerja Sama Saling Menguntungkan",
          intro: "Kisah seikat sumpit yang tak dapat dipatahkan (折筷之喻) & kerja tim olahraga!",
          story: [
            { hanzi: "单丝不成线，独木不成林。", pinyin: "Dān sī bù chéng xiàn, dú mù bù chéng lín.", indonesian: "Sehelai benang tak menjadi tali, sebatang pohon tak menjadi hutan rimba." },
            { hanzi: "一只筷子轻轻一折就断，一把筷子紧紧抱团却坚不可摧。", pinyin: "Yī zhī kuàizi qīngqīng yī zhé jiù duàn, yī bǎ kuàizi jǐnjǐn bào tuán què jiān bù kě cuī.", indonesian: "Sebatang sumpit dengan mudah dipatahkan, namun seikat sumpit yang bersatu padu kokoh tak terpatahkan." },
            { hanzi: "在当今全球化时代，唯有精诚合作，才能携手创造共同的繁荣与共赢！", pinyin: "Zài dāngjīn quánqiúhuà shídài, wéiyǒu jīngchéng hézuò, cáinéng xiéshǒu chuàngzào gòngtóng de fánróng yǔ gòngyíng!", indonesian: "Di era globalisasi kini, hanya dengan kerja sama tuluslah kita dapat bergandengan tangan menciptakan kemakmuran dan kesuksesan bersama!" }
          ],
          vocabulary: [
            { hanzi: "合", pinyin: "hé", indonesian: "Bersatu / Cocok", strokeCount: 6, strokeNames: ["撇", "捺", "横", "竖", "横折", "横"], guide: "Orang (人) dan mulut (口) bersepakat menyatu." },
            { hanzi: "作", pinyin: "zuò", indonesian: "Bekerja / Berkarya", strokeCount: 7, strokeNames: ["撇", "竖", "撇", "横", "竖", "横", "横"], guide: "Orang (亻) mulai bertindak (乍)." },
            { hanzi: "赢", pinyin: "yíng", indonesian: "Menang / Sukses bersama", strokeCount: 17, strokeNames: ["点", "横", "竖", "横折", "横", "撇", "横折钩", "横", "横", "点", "横折提", "竖", "横折", "撇", "点", "撇", "点"], guide: "Meraih keberhasilan bersama." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_043.jpg", hanzi: "折筷故事", pinyin: "zhé kuài gùshì", meaning: "Seikat Sumpit yang Kokoh Tak Terpatahkan" },
            { image: "assets/hanyu6_clean/img_044.jpg", hanzi: "团队拼搏", pinyin: "tuánduì pīnbó", meaning: "Kerja Sama Tim Meraih Kemenangan" },
            { image: "assets/hanyu6_clean/img_045.jpg", hanzi: "共赢未来", pinyin: "gòngyíng wèilái", meaning: "Dua Tangan Berjabat Erat Menandatangani Kerjasama" }
          ],
          quizzes: [
            { question: "Filosofi seikat sumpit (一把筷子) mengajarkan nilai...", options: ["Kekuatan persatuan dan kerja sama tim (团结力量大)", "Cara makan mie cepat", "Membeli sumpit baru", "Bermain tebak kayu"], answer: 0, explanation: "Kisah seikat sumpit mengajarkan bahwa persatuan dan kerja sama tim menghasilkan kekuatan yang luar biasa." }
          ]
        },
        {
          id: 11,
          title: "第十一课：探索浩瀚宇宙",
          pinyin: "Dì shíyī kè: Tànsuǒ hàohàn yǔzhòu",
          meaning: "Pelajaran 11: Menjelajahi Alam Semesta yang Luas",
          intro: "Pendaratan wahana di sisi jauh bulan (Chang'e) & teleskop raksasa FAST (Mata Langit)!",
          story: [
            { hanzi: "五百米口径球面射电望远镜'中国天眼'静静凝望着深邃的夜空。", pinyin: "Wǔbǎi mǐ kǒujìng qiúmiàn shèdiàn wàngyuǎnjìng 'Zhōngguó Tiānyǎn' jìngjìng níngwàngzhe shēnsuì de yèkōng.", indonesian: "Teleskop Radio Bulat 500 Meter 'Mata Langit Tiongkok' hening menatap ke kedalaman langit malam yang pekat." },
            { hanzi: "它敏锐地捕捉着来自百亿光年之外的脉冲星信号，探寻宇宙起源的奥秘。", pinyin: "Tā mǐnruì de bǔzhuōzhe láizì bǎiyì guāngnián zhī wài de màichōngxīng xìnhào, tànxún yǔzhòu qǐyuán de àomì.", indonesian: "Ia dengan sangat peka menangkap sinyal bintang pulsar dari puluhan miliar tahun cahaya jauhnya, meneliti rahasia asal-usul alam semesta." },
            { hanzi: "科学家的执着探索，不断拓展着人类认知世界的边界！", pinyin: "Kēxuéjiā de zhízhuó tànsuǒ, bùduàn tuòzhǎnzhe rénlèi rènzhī shìjiè de biānjiè!", indonesian: "Eksplorasi tekun para ilmuwan terus memperluas batas pengenalan umat manusia terhadap semesta alam!" }
          ],
          vocabulary: [
            { hanzi: "探", pinyin: "tàn", indonesian: "Mencari / Menjelajah", strokeCount: 11, strokeNames: ["横", "竖钩", "提", "点", "点", "横撇", "横折", "横", "横", "撇", "捺"], guide: "Tangan (扌) menjelajah di dalam gua (穴)." },
            { hanzi: "索", pinyin: "suǒ", indonesian: "Meneliti / Tali", strokeCount: 10, strokeNames: ["横", "竖", "横", "撇", "竖折", "撇折", "撇折", "点", "竖钩", "点"], guide: "Tali penyelidikan menuju kebenaran." },
            { hanzi: "眼", pinyin: "yǎn", indonesian: "Mata", strokeCount: 11, strokeNames: ["竖", "横折", "横", "横", "横", "横折", "横", "横", "竖提", "撇", "捺"], guide: "Mata (目) dan (艮)." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_048.jpg", hanzi: "中国天眼 (FAST)", pinyin: "Zhōngguó Tiānyǎn", meaning: "Teleskop Radio Raksasa di Antara Lembah" },
            { image: "assets/hanyu6_clean/img_049.jpg", hanzi: "脉冲星信号", pinyin: "màichōngxīng", meaning: "Pancaran Gelombang Bintang Pulsar Kosmis" },
            { image: "assets/hanyu6_clean/img_050.jpg", hanzi: "深空星系", pinyin: "shēnkōng xīngxì", meaning: "Galaksi Bima Sakti Berputar Megah" }
          ],
          quizzes: [
            { question: "Teleskop radio terbesar di dunia 'Mata Langit Tiongkok' disebut...", options: ["天眼 (FAST / Tiānyǎn)", "嫦娥 (Cháng'é)", "神舟 (Shénzhōu)", "天宫 (Tiāngōng)"], answer: 0, explanation: "'中国天眼' (FAST) adalah teleskop radio bulat terbesar dunia berdiameter 500 meter." }
          ]
        },
        {
          id: 12,
          title: "第十二课：毕业了与迈向新征程",
          pinyin: "Dì shí'èr kè: Bìyè le yǔ mài xiàng xīn zhēngchéng",
          meaning: "Pelajaran 12: Wisuda Kelulusan & Melangkah ke Masa Depan",
          intro: "Kenangan indah enam tahun di sekolah dasar, ungkapan terima kasih pada guru, dan menyongsong SMP!",
          story: [
            { hanzi: "时光飞逝，六年的小学生活转眼画上了圆满的句号。", pinyin: "Shíguāng fēishì, liù nián de xiǎoxué shēnghuó zhuǎnyǎn huà shàng le yuánmǎn de jùhào.", indonesian: "Waktu terbang melesat begitu cepat, enam tahun kehidupan di sekolah dasar dalam sekejap mata telah mengukir titik akhir yang paripurna." },
            { hanzi: "感谢老师的悉心栽培，感谢同窗好友的风雨相伴。", pinyin: "Gǎnxiè lǎoshī de xīxīn zāipéi, gǎnxiè tóngchuāng hǎoyǒu de fēngyǔ xiāngbàn.", indonesian: "Terima kasih atas bimbingan tulus para guru, terima kasih atas persahabatan manis kawan sekelas dalam suka maupun duka." },
            { hanzi: "今天我们昂首毕业，明天我们将满怀豪情踏上新的征程，扬帆远航！", pinyin: "Jīntiān wǒmen ángshǒu bìyè, míngtiān wǒmen jiāng mǎnhuái háoqíng tà shàng xīn de zhēngchéng, yángfān yuǎnháng!", indonesian: "Hari ini kita melangkah lulus dengan kepala tegak bangga, esok hari kita akan mengarungi samudra masa depan dengan mengembangkan layar keberanian!" }
          ],
          vocabulary: [
            { hanzi: "毕", pinyin: "bì", indonesian: "Tuntas / Selesai (毕业)", strokeCount: 6, strokeNames: ["横", "竖", "竖", "横", "横", "竖"], guide: "Menyelesaikan seluruh jaring tangkapan ilmu." },
            { hanzi: "业", pinyin: "yè", indonesian: "Studi / Karya", strokeCount: 5, strokeNames: ["竖", "竖", "点", "撇", "横"], guide: "Pondasi prestasi yang kokoh." },
            { hanzi: "航", pinyin: "háng", indonesian: "Berlayar / Meluncur", strokeCount: 10, strokeNames: ["撇", "横折钩", "点", "提", "点", "横", "点", "横", "撇", "横折弯钩"], guide: "Perahu (舟) mengembangkan layar mengarungi cita-cita." }
          ],
          matchingPairs: [
            { image: "assets/hanyu6_clean/img_053.jpg", hanzi: "小学毕业典礼", pinyin: "bìyè diǎnlǐ", meaning: "Upacara Wisuda Memakai Toga Kelulusan" },
            { image: "assets/hanyu6_clean/img_054.jpg", hanzi: "感恩师长", pinyin: "gǎn'ēn shīzhǎng", meaning: "Memberikan Bunga Terima Kasih untuk Guru" },
            { image: "assets/hanyu6_clean/img_055.jpg", hanzi: "扬帆远航", pinyin: "yángfān yuǎnháng", meaning: "Kapal Mengarungi Samudra Masa Depan Gemilang" }
          ],
          quizzes: [
            { question: "Apa arti dari kata '毕业' (bìyè)?", options: ["Lulus sekolah / Wisuda", "Masuk kelas satu", "Membeli buku", "Pindah rumah"], answer: 0, explanation: "'毕业' (bìyè) berarti Lulus Sekolah atau Wisuda." }
          ]
        }
      ]
    }
  ],

  // Koleksi Dinosaurus yang dapat ditetaskan di Inkubator Sarang Dinosaurus
  dinos: [
    { id: "rexy", name: "Rexy si T-Rex", species: "Tyrannosaurus Rex", icon: "🦖", desc: "Raja dinosaurus pemberani dengan raungan menggelegar! Suka belajar angka dan kalimat baru.", requiredBones: 50, color: "#10b981" },
    { id: "trixie", name: "Trixie si Triceratops", species: "Triceratops", icon: "🦏", desc: "Dinosaurus bertanduk tiga yang ramah dan suka menolong teman saat belajar jam dan hari.", requiredBones: 120, color: "#0284c7" },
    { id: "terry", name: "Terry si Pterodactyl", species: "Pterodactyl", icon: "🦅", desc: "Penerbang angkasa purba yang menguasai nama-nama musim, cuaca, dan arah jalan.", requiredBones: 200, color: "#8b5cf6" },
    { id: "brachy", name: "Brachy si Brachiosaurus", species: "Brachiosaurus", icon: "🦕", desc: "Raksasa berleher panjang yang bijak, menyukai sains, teknologi, dan musik merdu.", requiredBones: 300, color: "#ea580c" },
    { id: "steggy", name: "Steggy si Stegosaurus", species: "Stegosaurus", icon: "🦎", desc: "Dinosaurus berperisai lempeng punggung yang hafal kisah fabel kuno dan pelestarian alam.", requiredBones: 420, color: "#d97706" },
    { id: "raphy", name: "Raphy si Velociraptor", species: "Velociraptor", icon: "🐊", desc: "Dinosaurus pelari kilat paling cerdas, master peribahasa Chengyu dan teknologi AI masa depan.", requiredBones: 550, color: "#e11d48" }
  ],

  // Aturan & Nama Guratan Hanzi Dasar
  strokeRules: [
    { name: "先横后竖 (Xiān héng hòu shù)", desc: "Tulis garis mendatar terlebih dahulu, baru garis tegak lurus.", example: "十 (1.一 ➔ 2.十), 土, 干" },
    { name: "先撇后捺 (Xiān piě hòu nà)", desc: "Tulis garis miring kiri terlebih dahulu, baru garis miring kanan.", example: "八 (1.丿 ➔ 2.八), 人, 大, 天" },
    { name: "从上到下 (Cóng shàng dào xià)", desc: "Tulis bagian atas terlebih dahulu, lalu turun ke bawah.", example: "二, 三, 言, 旦" },
    { name: "从左到右 (Cóng zuǒ dào yòu)", desc: "Tulis bagian kiri terlebih dahulu, lalu ke sebelah kanan.", example: "你, 他, 好, 地, 朋" },
    { name: "从外到内 (Cóng wài dào nèi)", desc: "Tulis bingkai luar terlebih dahulu, baru isi di bagian dalam.", example: "月, 同, 问, 风" },
    { name: "先里头后封口 (Xiān lǐtou hòu fēngkǒu)", desc: "Masuk ke dalam kotak terlebih dahulu, isi kandang, baru tutup pintu bawah.", example: "日, 四, 田, 国, 回" },
    { name: "先中间后两边 (Xiān zhōngjiān hòu liǎngbiān)", desc: "Tulis garis tengah utama terlebih dahulu, baru sisi kiri dan kanan.", example: "小 (1.亅 ➔ 2.丿 ➔ 3.丶), 水, 木, 山" }
  ]
};
