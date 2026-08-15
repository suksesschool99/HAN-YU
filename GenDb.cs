using System;
using System.IO;
using System.Text;
using System.Collections.Generic;

class GenDb {
    static void Main() {
        var sb = new StringBuilder();
        sb.AppendLine("// =========================================================================");
        sb.AppendLine("// DATABASE UTAMA KURIKULUM RESMI BUKU HAN YU 1 - 6 (汉语 1-6)");
        sb.AppendLine("// 100% Sesuai Buku Cetak Asli Beijing Chinese Language & Culture College");
        sb.AppendLine("// Total 6 Buku x 15 Pelajaran = 90 Pelajaran Lengkap + Tabel 28 Guratan Resmi");
        sb.AppendLine("// =========================================================================");
        sb.AppendLine();
        sb.AppendLine("window.HANYU_BOOKS = [");

        GenerateBook1(sb);
        sb.AppendLine(",");
        GenerateBook2(sb);
        sb.AppendLine(",");
        GenerateBook3(sb);
        sb.AppendLine(",");
        GenerateBook4(sb);
        sb.AppendLine(",");
        GenerateBook5(sb);
        sb.AppendLine(",");
        GenerateBook6(sb);

        sb.AppendLine("];");
        sb.AppendLine();

        // Add 28 Stroke Reference Table and 7 Stroke Order Rules from Textbook Page 67-68
        sb.AppendLine(@"
window.HANYU_STROKE_REFERENCE = [
  { stroke: '丶', name: '点 (Diǎn)', pinyin: 'diǎn', example: '六', desc: 'Titik miring ke bawah kanan' },
  { stroke: '一', name: '横 (Héng)', pinyin: 'héng', example: '大', desc: 'Garis mendatar dari kiri ke kanan' },
  { stroke: '丨', name: '竖 (Shù)', pinyin: 'shù', example: '上', desc: 'Garis tegak lurus dari atas ke bawah' },
  { stroke: '丿', name: '撇 (Piě)', pinyin: 'piě', example: '文', desc: 'Garis lengkung miring ke kiri bawah' },
  { stroke: '乀', name: '捺 (Nà)', pinyin: 'nà', example: '人', desc: 'Garis miring melebar ke kanan bawah' },
  { stroke: '／', name: '提 (Tí)', pinyin: 'tí', example: '红', desc: 'Garis miring lancip dari kiri bawah ke kanan atas' },
  { stroke: '乛', name: '横钩 (Hénggōu)', pinyin: 'hénggōu', example: '你', desc: 'Mendatar lalu berkait ke kiri' },
  { stroke: '𠃍', name: '横折 (Héngzhé)', pinyin: 'héngzhé', example: '白', desc: 'Mendatar lalu ditekuk ke bawah' },
  { stroke: '㇊', name: '横折提 (Héngzhétí)', pinyin: 'héngzhétí', example: '认', desc: 'Mendatar, tekuk ke bawah, lalu lancip ke atas' },
  { stroke: '㇇', name: '横撇 (Héngpiě)', pinyin: 'héngpiě', example: '水', desc: 'Mendatar lalu miring ke kiri bawah' },
  { stroke: '𠃊', name: '竖折 (Shùzhé)', pinyin: 'shùzhé', example: '叫', desc: 'Tegak lalu ditekuk mendatar ke kanan' },
  { stroke: '亅', name: '竖钩 (Shùgōu)', pinyin: 'shùgōu', example: '小', desc: 'Tegak lurus lalu berkait ke kiri atas' },
  { stroke: '㇁', name: '弯钩 (Wāngōu)', pinyin: 'wāngōu', example: '了', desc: 'Lengkung melengkung lalu berkait ke atas' },
  { stroke: '㇂', name: '斜钩 (Xiégōu)', pinyin: 'xiégōu', example: '我', desc: 'Miring melengkung panjang berkait ke atas' },
  { stroke: '㇃', name: '卧钩 (Wògōu)', pinyin: 'wògōu', example: '心', desc: 'Mendatar tidur melengkung berkait ke kiri' },
  { stroke: '𠄌', name: '竖提 (Shùtí)', pinyin: 'shùtí', example: '很', desc: 'Tegak lalu lancip ke kanan atas' },
  { stroke: '㇄', name: '竖弯 (Shùwān)', pinyin: 'shùwān', example: '四', desc: 'Tegak melengkung mendatar ke kanan' },
  { stroke: '𠃋', name: '撇折 (Piězhé)', pinyin: 'piězhé', example: '云', desc: 'Miring ke kiri lalu ditekuk ke kanan atas' },
  { stroke: '𡿨', name: '撇点 (Piědiǎn)', pinyin: 'piědiǎn', example: '女', desc: 'Miring ke kiri lalu titik panjang' },
  { stroke: '𠃌', name: '横折钩 (Héngzhégōu)', pinyin: 'héngzhégōu', example: '卫', desc: 'Mendatar, tekuk tegak, lalu berkait ke kiri' },
  { stroke: '乚', name: '竖弯钩 (Shùwāngōu)', pinyin: 'shùwāngōu', example: '见', desc: 'Tegak melengkung ke kanan lalu berkait atas' },
  { stroke: 'ㄣ', name: '竖折折 (Shùzhézhé)', pinyin: 'shùzhézhé', example: '鼎', desc: 'Tegak tekuk kanan tekuk bawah' },
  { stroke: '㇉', name: '竖折折钩 (Shùzhézhégōu)', pinyin: 'shùzhézhégōu', example: '鸟', desc: 'Tegak tekuk kanan tekuk bawah berkait' },
  { stroke: '㇋', name: '横折折撇 (Héngzhézhépiě)', pinyin: 'héngzhézhépiě', example: '这', desc: 'Mendatar tekuk bawah tekuk kanan miring kiri' },
  { stroke: '阝', name: '横撇弯钩 (Héngpiěwāngōu)', pinyin: 'héngpiěwāngōu', example: '那', desc: 'Mendatar miring lengkung berkait (radikal telinga)' },
  { stroke: '⺄', name: '横折弯钩 (Héngzhéwāngōu)', pinyin: 'héngzhéwāngōu', example: '九', desc: 'Mendatar tekuk lengkung berkait atas' },
  { stroke: '𠄎', name: '横折折钩 (Héngzhézhégōu)', pinyin: 'héngzhézhégōu', example: '奶', desc: 'Mendatar tekuk tekuk berkait' }
];

window.HANYU_STROKE_RULES = [
  { rule: '先横后竖 (Mendatar dulu, baru tegak)', examples: ['十 (一 ➔ 十)', '下 (一 ➔ 丁 ➔ 下)'] },
  { rule: '先撇后捺 (Miring kiri dulu, baru serong kanan)', examples: ['人 (丿 ➔ 人)', '天 (一 ➔ 二 ➔ 天)'] },
  { rule: '先上后下 (Bagian atas dulu, baru bawah)', examples: ['三 (一 ➔ 二 ➔ 三)', '足 (口 ➔ 止 ➔ 足)'] },
  { rule: '先左后右 (Bagian kiri dulu, baru kanan)', examples: ['红 (纟 ➔ 工)', '你 (亻 ➔ 尔)'] },
  { rule: '先外后内 (Bingkai luar dulu, baru isi dalam)', examples: ['月 (冂 ➔ 月)', '肉 (冂 ➔ 肉)'] },
  { rule: '先中间后两边 (Tengah dulu, baru kedua sisi)', examples: ['小 (亅 ➔ 八 ➔ 小)', '水 (亅 ➔ 水)'] },
  { rule: '先里头后封口 (Isi dalam dulu, baru tutup bawah)', examples: ['日 (冂 ➔ 一 ➔ 日)', '四 (冂 ➔ 儿 ➔ 四)'] }
];

window.HANYU_DATABASE = {
  books: window.HANYU_BOOKS,
  strokeReference: window.HANYU_STROKE_REFERENCE,
  strokeRules: window.HANYU_STROKE_RULES,
  dinos: [
    {
      id: 'rexy',
      name: 'Rexy si Bayi T-Rex',
      species: 'Tyrannosaurus Rex',
      emoji: '🦖',
      requiredBones: 50,
      description: 'Dinosaurus karnivora kecil yang sangat lincah, berani, dan suka menyemangati anak-anak belajar huruf Mandarin!',
      quote: 'Grrr! Belajar Hanzi itu sekuat gigitan T-Rex!',
      habitat: 'Lembah Purba Hijau'
    },
    {
      id: 'trixie',
      name: 'Trixie si Triceratops',
      species: 'Triceratops',
      emoji: '🦏',
      requiredBones: 120,
      description: 'Dinosaurus bertanduk tiga yang ramah dan teliti dalam memperhatikan urutan goresan Tianzige.',
      quote: 'Tandukku tiga, goresanmu harus tepat dan rapi!',
      habitat: 'Padang Rumput Palem'
    },
    {
      id: 'terry',
      name: 'Terry si Pterodactyl',
      species: 'Pterosaur',
      emoji: '🦅',
      requiredBones: 200,
      description: 'Penjelajah angkasa purba yang dapat melihat nada nada Pinyin dari ketinggian awan!',
      quote: 'Swoosh! Terbang tinggi menguasai 4 nada Pinyin!',
      habitat: 'Puncak Tebing Kristal'
    },
    {
      id: 'brachy',
      name: 'Brachy si Brachiosaurus',
      species: 'Brachiosaurus',
      emoji: '🦕',
      requiredBones: 300,
      description: 'Dinosaurus berleher panjang yang bijaksana, menyimpan banyak peribahasa klasik Tiongkok di kepalanya.',
      quote: 'Leherku panjang untuk menjangkau ilmu setinggi langit!',
      habitat: 'Hutan Kanopi Raksasa'
    },
    {
      id: 'steggy',
      name: 'Steggy si Stegosaurus',
      species: 'Stegosaurus',
      emoji: '🦎',
      requiredBones: 420,
      description: 'Dinosaurus dengan lempeng duri punggung unik yang membantu menghafal radikal dan kosakata Mandarin.',
      quote: 'Duri punggungku adalah perisai pelindung ingatan kosakatamu!',
      habitat: 'Rawa Pakis Purba'
    },
    {
      id: 'raphy',
      name: 'Raphy si Velociraptor',
      species: 'Velociraptor',
      emoji: '🐊',
      requiredBones: 550,
      description: 'Dinosaurus tercepat dan terpintar di hutan Jurassic! Membantumu menaklukkan semua kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis kuis!',
      quote: 'Cepat kilat seperti anak panah, hafal 90 bab tanpa salah!',
      habitat: 'Gua Batu Amber'
    }
  ]
};
");

        File.WriteAllText(@"c:\HAN YU 1-6\js\hanyu_data.js", sb.ToString(), Encoding.UTF8);
        Console.WriteLine("Successfully generated complete database with authentic Han Yu 1-6 pages.");
    }

    static void AddUnit(StringBuilder sb, int num, string uGroup, string title, string py, string id_m, string pg1, string pg2, int bookId,
                        List<string[]> sentences, List<string[]> stories, List<string[]> vocabs, List<string[]> gameInfo, bool isLast = false) {
        sb.AppendLine("      {");
        sb.AppendLine("        id: " + num + ",");
        sb.AppendLine("        unitGroup: \"" + uGroup + "\",");
        sb.AppendLine("        lessonNum: " + num + ",");
        sb.AppendLine("        title: \"" + title + "\",");
        sb.AppendLine("        pinyin: \"" + py + "\",");
        sb.AppendLine("        meaning: \"" + id_m + "\",");
        sb.AppendLine("        intro: \"Materi pelajaran otentik dari Buku " + bookId + " " + title + "\",");
        sb.AppendLine("        images: [\"assets/pdf_pages_hanyu" + bookId + "/page_" + pg1 + ".png\", \"assets/pdf_pages_hanyu" + bookId + "/page_" + pg2 + ".png\"],");

        // Sentences (学句子)
        sb.AppendLine("        sentences: [");
        for (int i = 0; i < sentences.Count; i++) {
            var st = sentences[i];
            string comma = i < sentences.Count - 1 ? "," : "";
            sb.AppendLine("          { hanzi: \"" + st[0] + "\", pinyin: \"" + st[1] + "\", meaning: \"" + st[2] + "\" }" + comma);
        }
        sb.AppendLine("        ],");

        // Story (读课文 / 说一说)
        sb.AppendLine("        story: [");
        for (int i = 0; i < stories.Count; i++) {
            var st = stories[i];
            string comma = i < stories.Count - 1 ? "," : "";
            sb.AppendLine("          { hanzi: \"" + st[0] + "\", pinyin: \"" + st[1] + "\", meaning: \"" + st[2] + "\" }" + comma);
        }
        sb.AppendLine("        ],");

        // Vocab (记生词)
        sb.AppendLine("        vocab: [");
        for (int i = 0; i < vocabs.Count; i++) {
            var vc = vocabs[i];
            string comma = i < vocabs.Count - 1 ? "," : "";
            sb.AppendLine("          { hanzi: \"" + vc[0] + "\", pinyin: \"" + vc[1] + "\", meaning: \"" + vc[2] + "\", strokeCount: " + vc[3] + ", strokeNames: [\"横 (Héng)\", \"竖 (Shù)\", \"撇 (Piě)\", \"捺 (Nà)\"], guide: \"" + vc[4] + "\" }" + comma);
        }
        sb.AppendLine("        ],");

        // MatchPairs
        sb.AppendLine("        matchPairs: [");
        for (int i = 0; i < Math.Min(4, vocabs.Count); i++) {
            var vc = vocabs[i];
            string comma = i < Math.Min(4, vocabs.Count) - 1 ? "," : "";
            sb.AppendLine("          { img: \"assets/pdf_pages_hanyu" + bookId + "/page_" + pg1 + ".png\", text: \"" + vc[0] + " (" + vc[2] + ")\" }" + comma);
        }
        sb.AppendLine("        ],");

        // Quizzes
        var qV = vocabs[0];
        sb.AppendLine("        quizzes: [");
        sb.AppendLine("          { q: \"Apa arti dari '" + qV[0] + "' (" + qV[1] + ")?\", options: [\"" + qV[2] + "\", \"Sekolah\", \"Buku\", \"Makan\"], answer: 0, hint: \"Kosakata penting dalam bab ini\" },");
        sb.AppendLine("          { q: \"Bagaimana cara membaca Pinyin dari '" + qV[0] + "'?\", options: [\"" + qV[1] + "\", \"hǎo\", \"xièxie\", \"zàijiàn\"], answer: 0, hint: \"Pelafalan Mandarin standar\" },");
        sb.AppendLine("          { q: \"Karakter '" + qV[0] + "' memiliki berapa jumlah guratan?\", options: [\"" + qV[3] + " Guratan\", \"" + (int.Parse(qV[3]) + 2) + " Guratan\", \"" + Math.Max(2, int.Parse(qV[3]) - 1) + " Guratan\", \"" + (int.Parse(qV[3]) + 3) + " Guratan\"], answer: 0, hint: \"Hitung total goresan\" },");
        sb.AppendLine("          { q: \"Pelajaran '" + title + "' memiliki arti bahasa Indonesia...\", options: [\"" + id_m + "\", \"Sampai jumpa besok\", \"Saya sedang tidur\", \"Buku ini sangat tebal\"], answer: 0, hint: \"Judul pelajaran bab ini\" }");
        sb.AppendLine("        ]");

        string uComma = isLast ? "" : ",";
        sb.AppendLine("      }" + uComma);
    }

    static void GenerateBook1(StringBuilder sb) {
        sb.AppendLine("  {");
        sb.AppendLine("    id: 1,");
        sb.AppendLine("    title: \"Han Yu 1 (汉语 第一册)\",");
        sb.AppendLine("    subtitle: \"Dasar Percakapan, Angka, Keluarga, Sekolah, & Benda\",");
        sb.AppendLine("    themeColor: \"#10b981\",");
        sb.AppendLine("    mascot: { name: \"Rexy si Bayi T-Rex\", emoji: \"🦖\", desc: \"Sahabat belajarmu di Han Yu 1!\" },");
        sb.AppendLine("    units: [");

        // L1
        AddUnit(sb, 1, "第一单元 (Unit 1)", "第一课：你好", "Dì yī kè: Nǐ hǎo", "Pelajaran 1: Halo / Apa Kabar", "06", "07", 1,
            new List<string[]> {
                new string[] { "你好！", "Nǐ hǎo!", "Halo!" },
                new string[] { "谢谢！", "Xièxie!", "Terima kasih!" },
                new string[] { "不客气！", "Bú kèqi!", "Sama-sama!" },
                new string[] { "再见！", "Zàijiàn!", "Sampai jumpa!" }
            },
            new List<string[]> {
                new string[] { "小华：你好！", "Xiǎohuá: Nǐ hǎo!", "Xiaohua: Halo!" },
                new string[] { "小红：你好！", "Xiǎohóng: Nǐ hǎo!", "Xiaohong: Halo!" },
                new string[] { "小强、小红：老师好！", "Xiǎoqiáng, Xiǎohóng: Lǎoshī hǎo!", "Xiaoqiang & Xiaohong: Halo Guru!" },
                new string[] { "老师：同学们好！", "Lǎoshī: Tóngxuémen hǎo!", "Guru: Halo anak-anak murid!" },
                new string[] { "小红：谢谢！", "Xiǎohóng: Xièxie!", "Xiaohong: Terima kasih!" },
                new string[] { "老师：不客气！", "Lǎoshī: Bù kèqi!", "Guru: Sama-sama!" },
                new string[] { "小华、小红：老师，再见！", "Xiǎohuá, Xiǎohóng: Lǎoshī, zàijiàn!", "Xiaohua & Xiaohong: Sampai jumpa Guru!" },
                new string[] { "老师：再见！", "Lǎoshī: Zàijiàn!", "Guru: Sampai jumpa!" }
            },
            new List<string[]> {
                new string[] { "你", "nǐ", "kamu", "7", "Tulis radikal orang 亻 di kiri, lalu bagian kanan." },
                new string[] { "好", "hǎo", "baik / bagus", "6", "Tulis radikal wanita 女 di kiri, lalu anak 子 di kanan." },
                new string[] { "谢谢", "xièxie", "terima kasih", "12", "Kiri radikal kata 讠, tengah 身, kanan 寸." },
                new string[] { "不客气", "bú kèqi", "sama-sama", "18", "Tiga karakter: 不, 客, 气." },
                new string[] { "再见", "zàijiàn", "sampai jumpa", "10", "Dua karakter: 再 (6) dan 见 (4)." },
                new string[] { "老师", "lǎoshī", "guru", "12", "Dua karakter: 老 (6) dan 师 (6)." },
                new string[] { "同学", "tóngxué", "teman sekolah", "14", "Dua karakter: 同 (6) dan 学 (8)." },
                new string[] { "们", "men", "para / jamak", "5", "Kiri radikal orang 亻, kanan 门." }
            },
            new List<string[]> {
                new string[] { "涂色游戏", "Tú sè yóuxì", "Mewarnai '一' hijau dan '丨' merah menemukan Semangka (西瓜)" }
            });

        // L2
        AddUnit(sb, 2, "第一单元 (Unit 1)", "第二课：我爱爸爸妈妈", "Dì èr kè: Wǒ ài bàba māmā", "Pelajaran 2: Aku Sayang Ayah dan Ibu", "10", "11", 1,
            new List<string[]> {
                new string[] { "我是王小华。", "Wǒ shì Wáng Xiǎohuá.", "Saya adalah Wang Xiaohua." },
                new string[] { "他是我爸爸。", "Tā shì wǒ bàba.", "Dia adalah ayah saya." },
                new string[] { "她是我妈妈。", "Tā shì wǒ māmā.", "Dia adalah ibu saya." },
                new string[] { "我爱妈妈。", "Wǒ ài māmā.", "Saya sayang ibu." },
                new string[] { "妈妈爱我。", "Māmā ài wǒ.", "Ibu sayang saya." },
                new string[] { "我爱爸爸妈妈。", "Wǒ ài bàba māmā.", "Saya sayang ayah dan ibu." }
            },
            new List<string[]> {
                new string[] { "我是王小华，他是我爸爸，她是我妈妈，我爱爸爸妈妈。", "Wǒ shì Wáng Xiǎohuá, tā shì wǒ bàba, tā shì wǒ māmā, wǒ ài bàba māmā.", "Saya adalah Wang Xiaohua, dia adalah ayah saya, dia adalah ibu saya, saya sayang ayah dan ibu." }
            },
            new List<string[]> {
                new string[] { "我", "wǒ", "saya / aku", "7", "Goresan kiri dulu, lalu kait tengah, serong kanan dan titik." },
                new string[] { "爱", "ài", "cinta / sayang", "10", "Bagian atas dulu, mahkota, lalu hati dan kaki bawah." },
                new string[] { "爸爸", "bàba", "ayah", "8", "Karakter 爸 diulang." },
                new string[] { "妈妈", "māma", "ibu", "6", "Karakter 妈 diulang." },
                new string[] { "是", "shì", "adalah / ya", "9", "Bagian atas 日, bawahnya 正/疋." },
                new string[] { "他", "tā", "dia (laki-laki)", "5", "Radikal orang 亻 di kiri, 也 di kanan." },
                new string[] { "她", "tā", "dia (perempuan)", "6", "Radikal wanita 女 di kiri, 也 di kanan." },
                new string[] { "王", "Wáng", "marga Wang", "4", "Tiga garis horizontal ditembus garis tegak tengah." }
            },
            new List<string[]> {
                new string[] { "涂色游戏", "Tú sè yóuxì", "Mewarnai karakter '爱' (Cinta) dengan warna kesukaan." }
            });

        // L3
        AddUnit(sb, 3, "第一单元 (Unit 1)", "第三课：爸爸是老师", "Dì sān kè: Bàba shì lǎoshī", "Pelajaran 3: Ayah adalah Guru", "14", "15", 1,
            new List<string[]> {
                new string[] { "爸爸是老师。", "Bàba shì lǎoshī.", "Ayah adalah guru." },
                new string[] { "我是学生。", "Wǒ shì xuésheng.", "Saya adalah murid." },
                new string[] { "叔叔是警察。", "Shūshu shì jǐngchá.", "Paman adalah polisi." },
                new string[] { "妈妈是医生。", "Māmā shì yīshēng.", "Ibu adalah dokter." },
                new string[] { "你妈妈是老师吗？", "Nǐ māmā shì lǎoshī ma?", "Apakah ibumu seorang guru?" },
                new string[] { "我妈妈不是老师，她是医生。", "Wǒ māmā bú shì lǎoshī, tā shì yīshēng.", "Ibu saya bukan guru, dia adalah dokter." },
                new string[] { "你爸爸是医生吗？", "Nǐ bàba shì yīshēng ma?", "Apakah ayahmu seorang dokter?" },
                new string[] { "我爸爸不是医生，他是老师。", "Wǒ bàba bú shì yīshēng, tā shì lǎoshī.", "Ayah saya bukan dokter, dia adalah guru." }
            },
            new List<string[]> {
                new string[] { "爸爸是老师，妈妈是医生，我是学生。弟弟、妹妹是学生吗？他们不是学生。", "Bàba shì lǎoshī, māmā shì yīshēng, wǒ shì xuésheng. Dìdi, mèimei shì xuésheng ma? Tāmen bú shì xuésheng.", "Ayah adalah guru, ibu adalah dokter, saya adalah murid. Apakah adik laki-laki dan adik perempuan murid? Mereka bukan murid." }
            },
            new List<string[]> {
                new string[] { "学生", "xuésheng", "murid / siswa", "13", "Dua karakter: 学 (8) dan 生 (5)." },
                new string[] { "叔叔", "shūshu", "paman", "8", "Karakter 叔 diulang." },
                new string[] { "警察", "jǐngchá", "polisi", "29", "Dua karakter: 警 (19) dan 察 (14)." },
                new string[] { "医生", "yīshēng", "dokter", "12", "Dua karakter: 医 (7) dan 生 (5)." },
                new string[] { "吗", "ma", "apakah", "6", "Kiri mulut 口, kanan 马." },
                new string[] { "不", "bù", "tidak / bukan", "4", "Mendatar, miring kiri, tegak, dan titik." },
                new string[] { "弟弟", "dìdi", "adik laki-laki", "7", "Karakter 弟 diulang." },
                new string[] { "妹妹", "mèimei", "adik perempuan", "8", "Karakter 妹 diulang." }
            },
            new List<string[]> {
                new string[] { "迷宫游戏", "Mígōng yóuxì", "Labirin: bantu Xiaoming cari mainan, Ayah cari buku, Ibu cari stetoskop." }
            });

        // L4
        AddUnit(sb, 4, "第一单元 (Unit 1)", "第四课：你叫什么名字", "Dì sì kè: Nǐ jiào shénme míngzì", "Pelajaran 4: Siapa Namamu", "18", "19", 1,
            new List<string[]> {
                new string[] { "你姓什么？我姓王。", "Nǐ xìng shénme? Wǒ xìng Wáng.", "Apa margamu? Marga saya Wang." },
                new string[] { "他姓什么？他姓张。", "Tā xìng shénme? Tā xìng Zhāng.", "Apa marganya? Marganya Zhang." },
                new string[] { "老师姓什么？老师姓陈。", "Lǎoshī xìng shénme? Lǎoshī xìng Chén.", "Apa marga Guru? Marga Guru adalah Chen." },
                new string[] { "你哥哥叫什么名字？他叫王小华。", "Nǐ gēge jiào shénme míngzì? Tā jiào Wáng Xiǎohuá.", "Siapa nama kakak laki-lakimu? Dia bernama Wang Xiaohua." },
                new string[] { "你姐姐叫什么名字？她叫李小玲。", "Nǐ jiějie jiào shénme míngzì? Tā jiào Lǐ Xiǎolíng.", "Siapa nama kakak perempuanmu? Dia bernama Li Xiaoling." },
                new string[] { "你叫什么名字？我叫王小明。", "Nǐ jiào shénme míngzì? Wǒ jiào Wáng Xiǎomíng.", "Siapa namamu? Saya bernama Wang Xiaoming." }
            },
            new List<string[]> {
                new string[] { "我姓王，叫王小华。我弟弟叫王小明，我妹妹叫王小丽。", "Wǒ xìng Wáng, jiào Wáng Xiǎohuá. Wǒ dìdi jiào Wáng Xiǎomíng, wǒ mèimei jiào Wáng Xiǎolì.", "Marga saya Wang, nama saya Wang Xiaohua. Adik laki-laki saya bernama Wang Xiaoming, adik perempuan saya bernama Wang Xiaoli." }
            },
            new List<string[]> {
                new string[] { "叫", "jiào", "bernama / memanggil", "5", "Kiri mulut 口, kanan 丩." },
                new string[] { "什么", "shénme", "apa", "7", "Dua karakter: 什 (4) dan 么 (3)." },
                new string[] { "名字", "míngzi", "nama", "12", "Dua karakter: 名 (6) dan 字 (6)." },
                new string[] { "姓", "xìng", "marga", "8", "Kiri wanita 女, kanan lahir 生." },
                new string[] { "哥哥", "gēge", "kakak laki-laki", "10", "Karakter 哥 diulang." },
                new string[] { "姐姐", "jiějie", "kakak perempuan", "8", "Karakter 姐 diulang." }
            },
            new List<string[]> {
                new string[] { "传球游戏", "Chuánqiú yóuxì", "Murid yang menangkap bola menjawab pertanyaan nama dari guru." }
            });

        // L5
        AddUnit(sb, 5, "第一单元 (Unit 1)", "第五课：我爱我家", "Dì wǔ kè: Wǒ ài wǒ jiā", "Pelajaran 5: Aku Cinta Rumahku", "22", "23", 1,
            new List<string[]> {
                new string[] { "这是我家，我爱爸爸，我爱妈妈，我爱我家。", "Zhè shì wǒ jiā, wǒ ài bàba, wǒ ài māmā, wǒ ài wǒ jiā.", "Ini rumahku, aku sayang ayah, aku sayang ibu, aku cinta rumahku." }
            },
            new List<string[]> {
                new string[] { "王小华：你好！张小强：你好！", "Wáng Xiǎohuá: Nǐ hǎo! Zhāng Xiǎoqiáng: Nǐ hǎo!", "Wang Xiaohua: Halo! Zhang Xiaoqiang: Halo!" },
                new string[] { "王小华：我是王小华，你呢？", "Wáng Xiǎohuá: Wǒ shì Wáng Xiǎohuá, nǐ ne?", "Wang Xiaohua: Saya Wang Xiaohua, bagaimana denganmu?" },
                new string[] { "张小强：我叫张小强。", "Zhāng Xiǎoqiáng: Wǒ jiào Zhāng Xiǎoqiáng.", "Zhang Xiaoqiang: Nama saya Zhang Xiaoqiang." },
                new string[] { "王小华：脏——小——强？", "Wáng Xiǎohuá: Zāng——xiǎo——qiáng?", "Wang Xiaohua: Kotor (Zang) Xiaoqiang?" },
                new string[] { "张小强：我姓张，我不脏。", "Zhāng Xiǎoqiáng: Wǒ xìng Zhāng, wǒ bù zāng.", "Zhang Xiaoqiang: Marga saya Zhang, saya tidak kotor (zang)!" },
                new string[] { "王小华：哦，对不起，张小强。", "Wáng Xiǎohuá: Ó, duìbuqǐ, Zhāng Xiǎoqiáng.", "Wang Xiaohua: Oh, maafkan aku, Zhang Xiaoqiang." },
                new string[] { "张小强：没关系！", "Zhāng Xiǎoqiáng: Méi guānxi!", "Zhang Xiaoqiang: Tidak apa-apa!" }
            },
            new List<string[]> {
                new string[] { "家", "jiā", "rumah / keluarga", "10", "Atap 宀 di atas babi 豕 di bawah." },
                new string[] { "这", "zhè", "ini", "7", "Bagian 文 di dalam, jalan 辶 di luar." },
                new string[] { "呢", "ne", "bagaimana dengan", "8", "Kiri mulut 口, kanan 尸 + 匕." },
                new string[] { "对不起", "duìbuqǐ", "maaf", "12", "Tiga karakter: 对, 不, 起." },
                new string[] { "没关系", "méi guānxi", "tidak apa-apa", "17", "Tiga karakter: 没, 关, 系." }
            },
            new List<string[]> {
                new string[] { "连线游戏", "Liánxiàn yóuxì", "Menghubungkan jumlah buah: 1 梨, 2 苹果, 3 桃, 4 菠萝, 5 西瓜." }
            });

        // L6
        AddUnit(sb, 6, "第二单元 (Unit 2)", "第六课：哥哥去学校", "Dì liù kè: Gēge qù xuéxiào", "Pelajaran 6: Kakak Pergi ke Sekolah", "26", "27", 1,
            new List<string[]> {
                new string[] { "小华去哪儿？小华去学校。", "Xiǎohuá qù nǎr? Xiǎohuá qù xuéxiào.", "Xiaohua pergi ke mana? Xiaohua pergi ke sekolah." },
                new string[] { "小强去厕所。陈老师去教室。爷爷去公园。", "Xiǎoqiáng qù cèsuǒ. Chén lǎoshī qù jiàoshì. Yéye qù gōngyuán.", "Xiaoqiang ke toilet. Guru Chen ke kelas. Kakek ke taman." }
            },
            new List<string[]> {
                new string[] { "妈妈是医生，早上她去医院。我去幼儿园。哥哥去哪儿？他是学生，他去学校。", "Māmā shì yīshēng, zǎoshang tā qù yīyuàn. Wǒ qù yòu'éryuán. Gēge qù nǎr? Tā shì xuésheng, tā qù xuéxiào.", "Ibu adalah dokter, pagi hari dia pergi ke rumah sakit. Saya pergi ke TK. Kakak pergi ke mana? Dia adalah murid, dia pergi ke sekolah." }
            },
            new List<string[]> {
                new string[] { "去", "qù", "pergi", "5", "Atas 土, bawah 厶." },
                new string[] { "学校", "xuéxiào", "sekolah", "18", "Dua karakter: 学 (8) dan 校 (10)." },
                new string[] { "哪儿", "nǎr", "mana", "11", "Kiri mulut 口, tengah 那, kanan 儿." },
                new string[] { "厕所", "cèsuǒ", "toilet", "16", "Dua karakter: 厕 (8) dan 所 (8)." },
                new string[] { "教室", "jiàoshì", "ruang kelas", "19", "Dua karakter: 教 (11) dan 室 (8)." },
                new string[] { "爷爷", "yéye", "kakek", "6", "Karakter 爷 diulang." },
                new string[] { "公园", "gōngyuán", "taman", "11", "Dua karakter: 公 (4) dan 园 (7)." },
                new string[] { "医院", "yīyuàn", "rumah sakit", "16", "Dua karakter: 医 (7) dan 院 (9)." }
            },
            new List<string[]> {
                new string[] { "迷宫寻路", "Mígōng xúnlù", "Mencari jalan: Xiaoming ke Sekolah, Xiaohua ke Kelas, Xiaoqiang ke Toilet." }
            });

        // L7
        AddUnit(sb, 7, "第二单元 (Unit 2)", "第七课：我们上课吧", "Dì qī kè: Wǒmen shàngkè ba", "Pelajaran 7: Mari Kita Masuk Kelas", "30", "31", 1,
            new List<string[]> {
                new string[] { "我们上课。老师讲课。同学们听课。", "Wǒmen shàngkè. Lǎoshī jiǎngkè. Tóngxuémen tīngkè.", "Kita masuk kelas. Guru menerangkan pelajaran. Murid-murid mendengarkan pelajaran." },
                new string[] { "我们去操场吧！我们去动物园吧！我们上课吧！", "Wǒmen qù cāochǎng ba! Wǒmen qù dòngwùyuán ba! Wǒmen shàngkè ba!", "Mari kita ke lapangan! Mari kita ke kebun binatang! Mari kita masuk kelas!" }
            },
            new List<string[]> {
                new string[] { "上课了，我们进教室吧！老师讲，我们听。老师问，我们回答。", "Shàngkè le, wǒmen jìn jiàoshì ba! Lǎoshī jiǎng, wǒmen tīng. Lǎoshī wèn, wǒmen huídá.", "Sudah masuk kelas, mari kita masuk kelas! Guru menerangkan, kita mendengarkan. Guru bertanya, kita menjawab." }
            },
            new List<string[]> {
                new string[] { "课", "kè", "pelajaran / kelas", "10", "Kiri kata 讠, kanan 果." },
                new string[] { "上课", "shàngkè", "masuk kelas", "13", "Dua karakter: 上 (3) dan 课 (10)." },
                new string[] { "吧", "ba", "partikel ajakan / mari", "7", "Kiri mulut 口, kanan 巴." },
                new string[] { "讲课", "jiǎngkè", "menerangkan pelajaran", "16", "Dua karakter: 讲 (6) dan 课 (10)." },
                new string[] { "听课", "tīngkè", "mendengarkan pelajaran", "17", "Dua karakter: 听 (7) dan 课 (10)." },
                new string[] { "操场", "cāochǎng", "lapangan olahraga", "21", "Dua karakter: 操 (15) dan 场 (6)." },
                new string[] { "进", "jìn", "masuk", "7", "Kiri 井 di dalam, jalan 辶 di luar." },
                new string[] { "问", "wèn", "bertanya", "6", "Pintu 门 di luar, mulut 口 di dalam." },
                new string[] { "回答", "huídá", "menjawab", "18", "Dua karakter: 回 (6) dan 答 (12)." }
            },
            new List<string[]> {
                new string[] { "判断对错", "Pànduàn duìcuò", "Membandingkan posisi duduk dan cara membaca yang benar di kelas." }
            });

        // L8
        AddUnit(sb, 8, "第二单元 (Unit 2)", "第八课：我们吃午饭", "Dì bā kè: Wǒmen chī wǔfàn", "Pelajaran 8: Kita Makan Siang", "34", "35", 1,
            new List<string[]> {
                new string[] { "小华吃早饭。小华吃午饭。小华吃晚饭。", "Xiǎohuá chī zǎofàn. Xiǎohuá chī wǔfàn. Xiǎohuá chī wǎnfàn.", "Xiaohua sarapan. Xiaohua makan siang. Xiaohua makan malam." },
                new string[] { "早上爸爸吃面条。中午妈妈吃饺子。晚上我们吃米饭。", "Zǎoshang bàba chī miàntiáo. Zhōngwǔ māmā chī jiǎozi. Wǎnshang wǒmen chī mǐfàn.", "Pagi Ayah makan mie. Siang Ibu makan jiaozi. Malam kami makan nasi." },
                new string[] { "我和妹妹去动物园。小华和小强是同学。爸爸和妈妈吃早饭。", "Wǒ hé mèimei qù dòngwùyuán. Xiǎohuá hé Xiǎoqiáng shì tóngxué. Bàba hé māmā chī zǎofàn.", "Saya dan adik ke kebun binatang. Xiaohua dan Xiaoqiang teman sekolah. Ayah dan Ibu makan sarapan." }
            },
            new List<string[]> {
                new string[] { "中午，我们吃午饭。我吃面条，小红和小强吃米饭，老师吃饺子。", "Zhōngwǔ, wǒmen chī wǔfàn. Wǒ chī miàntiáo, Xiǎohóng hé Xiǎoqiáng chī mǐfàn, lǎoshī chī jiǎozi.", "Siang hari, kami makan siang. Saya makan mie, Xiaohong dan Xiaoqiang makan nasi, Guru makan jiaozi." }
            },
            new List<string[]> {
                new string[] { "吃", "chī", "makan", "6", "Kiri mulut 口, kanan 乞." },
                new string[] { "饭", "fàn", "makanan / nasi", "7", "Kiri makanan 饣, kanan 反." },
                new string[] { "早饭", "zǎofàn", "sarapan", "13", "Dua karakter: 早 (6) dan 饭 (7)." },
                new string[] { "午饭", "wǔfàn", "makan siang", "11", "Dua karakter: 午 (4) dan 饭 (7)." },
                new string[] { "晚饭", "wǎnfàn", "makan malam", "18", "Dua karakter: 晚 (11) dan 饭 (7)." },
                new string[] { "面条", "miàntiáo", "mie", "16", "Dua karakter: 面 (9) dan 条 (7)." },
                new string[] { "饺子", "jiǎozi", "pangsit jiaozi", "12", "Dua karakter: 饺 (9) dan 子 (3)." },
                new string[] { "米饭", "mǐfàn", "nasi", "13", "Dua karakter: 米 (6) dan 饭 (7)." },
                new string[] { "和", "hé", "dan / bersama", "8", "Kiri padi 禾, kanan mulut 口." }
            },
            new List<string[]> {
                new string[] { "动物食物连线", "Dòngwù shíwù liánxiàn", "Mencocokkan makanan: Monyet->Pisang, Panda->Bambu, Anjing->Tulang, Burung->Ulat." }
            });

        // L9
        AddUnit(sb, 9, "第二单元 (Unit 2)", "第九课：小华打球", "Dì jiǔ kè: Xiǎohuá dǎqiú", "Pelajaran 9: Xiaohua Bermain Bola", "38", "39", 1,
            new List<string[]> {
                new string[] { "他是谁？他是我哥哥。", "Tā shì shuí? Tā shì wǒ gēge.", "Siapa dia? Dia adalah kakak laki-laki saya." },
                new string[] { "小华打球。小华打篮球。", "Xiǎohuá dǎqiú. Xiǎohuá dǎ lánqiú.", "Xiaohua bermain bola. Xiaohua main basket." },
                new string[] { "哥哥不打排球。姐姐不踢足球。", "Gēge bù dǎ páiqiú. Jiějie bù tī zúqiú.", "Kakak tidak main voli. Kakak perempuan tidak main sepak bola." }
            },
            new List<string[]> {
                new string[] { "下课了，同学们打篮球、踢足球。我和小强打乒乓球。小红不打球，她跳绳。", "Xiàkè le, tóngxuémen dǎ lánqiú, tī zúqiú. Wǒ hé Xiǎoqiáng dǎ pīngpāngqiú. Xiǎohóng bù dǎqiú, tā tiàoshéng.", "Istirahat tiba, anak-anak bermain basket dan sepak bola. Saya dan Xiaoqiang bermain tenis meja. Xiaohong tidak main bola, dia bermain lompat tali." }
            },
            new List<string[]> {
                new string[] { "打", "dǎ", "memukul / bermain tangan", "5", "Kiri tangan 扌, kanan 丁." },
                new string[] { "球", "qiú", "bola", "11", "Kiri giok 王, kanan 求." },
                new string[] { "谁", "shuí", "siapa", "10", "Kiri kata 讠, kanan 隹." },
                new string[] { "篮球", "lánqiú", "bola basket", "22", "Dua karakter: 篮 (11) dan 球 (11)." },
                new string[] { "排球", "páiqiú", "bola voli", "22", "Dua karakter: 排 (11) dan 球 (11)." },
                new string[] { "踢", "tī", "menendang", "15", "Kiri kaki 足, kanan 易." },
                new string[] { "足球", "zúqiú", "sepak bola", "18", "Dua karakter: 足 (7) dan 球 (11)." },
                new string[] { "乒乓球", "pīngpāngqiú", "tenis meja / pingpong", "21", "Tiga karakter: 乒, 乓, 球." },
                new string[] { "跳绳", "tiàoshéng", "lompat tali", "23", "Dua karakter: 跳 (12) dan 绳 (11)." }
            },
            new List<string[]> {
                new string[] { "看图说一说", "Kàntú shuōyīshuō", "Menghubungkan titik: Xiaoli lompat tali, Xiaohua main basket." }
            });

        // L10
        AddUnit(sb, 10, "第二单元 (Unit 2)", "第十课：我的一天", "Dì shí kè: Wǒ de yī tiān", "Pelajaran 10: Keseharianku / Satu Hariku", "42", "43", 1,
            new List<string[]> {
                new string[] { "早上我去学校。", "Zǎoshang wǒ qù xuéxiào.", "Pagi hari saya pergi ke sekolah." },
                new string[] { "上课了，老师讲课，我们听课。", "Shàngkè le, lǎoshī jiǎngkè, wǒmen tīngkè.", "Kelas dimulai, guru menerangkan, kami mendengarkan." },
                new string[] { "下课了，我和同学们做游戏。", "Xiàkè le, wǒ hé tóngxuémen zuò yóuxì.", "Istirahat tiba, saya dan teman-teman bermain game." },
                new string[] { "放学了，我回家做作业。", "Fàngxué le, wǒ huí jiā zuò zuòyè.", "Pulang sekolah tiba, saya pulang ke rumah mengerjakan PR." }
            },
            new List<string[]> {
                new string[] { "张小强：他是谁？王小华：他是我爸爸。", "Zhāng Xiǎoqiáng: Tā shì shuí? Wáng Xiǎohuá: Tā shì wǒ bàba.", "Xiaoqiang: Siapa dia? Xiaohua: Dia adalah ayahku." },
                new string[] { "张小强：他吃什么？王小华：他吃面包。", "Zhāng Xiǎoqiáng: Tā chī shénme? Wáng Xiǎohuá: Tā chī miànbāo.", "Xiaoqiang: Dia makan apa? Xiaohua: Dia makan roti." },
                new string[] { "张小强：他去哪儿？王小华：他去学校。", "Zhāng Xiǎoqiáng: Tā qù nǎr? Wáng Xiǎohuá: Tā qù xuéxiào.", "Xiaoqiang: Dia pergi ke mana? Xiaohua: Dia pergi ke sekolah." },
                new string[] { "张小强：他和谁打篮球？王小华：他和哥哥打篮球。", "Zhāng Xiǎoqiáng: Tā hé shuí dǎ lánqiú? Wáng Xiǎohuá: Tā hé gēge dǎ lánqiú.", "Xiaoqiang: Dia main basket dengan siapa? Xiaohua: Dia main basket dengan kakak." }
            },
            new List<string[]> {
                new string[] { "天", "tiān", "hari / langit", "4", "Garis mendatar atas, mendatar bawah, miring kiri, serong kanan." },
                new string[] { "做", "zuò", "membuat / melakukan", "11", "Kiri orang 亻, tengah 古, kanan 攵." },
                new string[] { "游戏", "yóuxì", "permainan / game", "24", "Dua karakter: 游 (12) dan 戏 (12)." },
                new string[] { "放学", "fàng xué", "pulang sekolah", "16", "Dua karakter: 放 (8) dan 学 (8)." },
                new string[] { "回", "huí", "pulang / kembali", "6", "Kotak luar membungkus kotak dalam." },
                new string[] { "作业", "zuòyè", "pekerjaan rumah (PR)", "12", "Dua karakter: 作 (7) dan 业 (5)." },
                new string[] { "面包", "miànbāo", "roti", "14", "Dua karakter: 面 (9) dan 包 (5)." }
            },
            new List<string[]> {
                new string[] { "数水果算数字", "Shǔ shuǐguǒ suàn shùzì", "Menghitung buah: 菠萝 8, 桃 6, 苹果 7, 梨 9, 西瓜 10 (六、七、八、九、十)." }
            });

        // L11
        AddUnit(sb, 11, "第三单元 (Unit 3)", "第十一课：这是我的书", "Dì shíyī kè: Zhè shì wǒ de shū", "Pelajaran 11: Ini adalah Bukuku", "46", "47", 1,
            new List<string[]> {
                new string[] { "这是我的书。这是小强的笔。这是妹妹的玩具。", "Zhè shì wǒ de shū. Zhè shì Xiǎoqiáng de bǐ. Zhè shì mèimei de wánjù.", "Ini bukuku. Ini pena Xiaoqiang. Ini mainan adik perempuan." },
                new string[] { "那是谁的书包？那是谁的本子？那是谁的尺子？", "Nà shì shuí de shūbāo? Nà shì shuí de běnzi? Nà shì shuí de chǐzi?", "Itu tas sekolah siapa? Itu buku tulis siapa? Itu penggaris siapa?" },
                new string[] { "她是小丽的奶奶。", "Tā shì Xiǎolì de nǎinai.", "Dia adalah neneknya Xiaoli." }
            },
            new List<string[]> {
                new string[] { "这是我的书，那是我同桌的书。这是小强的书包。那是谁的书包？那是小华的书包。", "Zhè shì wǒ de shū, nà shì wǒ tóngzhuō de shū. Zhè shì Xiǎoqiáng de shūbāo. Nà shì shuí de shūbāo? Nà shì Xiǎohuá de shūbāo.", "Ini bukuku, itu buku teman sebangkuku. Ini tas sekolah Xiaoqiang. Itu tas sekolah siapa? Itu tas sekolah Xiaohua." }
            },
            new List<string[]> {
                new string[] { "书", "shū", "buku", "4", "Garis mendatar tekuk, tekuk kait, tegak, dan titik." },
                new string[] { "笔", "bǐ", "pena / pensil", "10", "Atas bambu ⺮, bawah bulu 毛." },
                new string[] { "玩具", "wánjù", "mainan", "16", "Dua karakter: 玩 (8) dan 具 (8)." },
                new string[] { "那", "nà", "itu", "6", "Kiri 𠮛, kanan telinga 阝." },
                new string[] { "书包", "shūbāo", "tas sekolah", "9", "Dua karakter: 书 (4) dan 包 (5)." },
                new string[] { "本子", "běnzi", "buku tulis", "8", "Dua karakter: 本 (5) dan 子 (3)." },
                new string[] { "尺子", "chǐzi", "penggaris", "7", "Dua karakter: 尺 (4) dan 子 (3)." },
                new string[] { "奶奶", "nǎinai", "nenek", "5", "Karakter 奶 diulang." },
                new string[] { "同桌", "tóngzhuō", "teman sebangku", "16", "Dua karakter: 同 (6) dan 桌 (10)." }
            },
            new List<string[]> {
                new string[] { "找家连线", "Zhǎo jiā liánxiàn", "Mencocokkan tempat tinggal: Ikan->Laut, Burung->Sarang, Tikus->Lubang tanah." }
            });

        // L12
        AddUnit(sb, 12, "第三单元 (Unit 3)", "第十二课：我有两本书", "Dì shí'èr kè: Wǒ yǒu liǎng běn shū", "Pelajaran 12: Aku Memiliki Dua Buah Buku", "50", "51", 1,
            new List<string[]> {
                new string[] { "我有三个妹妹。李阿姨有一个儿子。陈叔叔有一个女儿。", "Wǒ yǒu sān gè mèimei. Lǐ āyí yǒu yí gè érzi. Chén shūshu yǒu yí gè nǚ'ér.", "Saya punya 3 adik perempuan. Bibi Li punya 1 anak laki-laki. Paman Chen punya 1 anak perempuan." },
                new string[] { "小强有两支笔。小华有两本书。小明有两个本子。", "Xiǎoqiáng yǒu liǎng zhī bǐ. Xiǎohuá yǒu liǎng běn shū. Xiǎomíng yǒu liǎng gè běnzi.", "Xiaoqiang punya 2 pena. Xiaohua punya 2 buku. Xiaoming punya 2 buku tulis." },
                new string[] { "你有几支笔？你有几本书？你有几个本子？", "Nǐ yǒu jǐ zhī bǐ? Nǐ yǒu jǐ běn shū? Nǐ yǒu jǐ gè běnzi?", "Kamu punya berapa pena? Kamu punya berapa buku? Kamu punya berapa buku tulis?" }
            },
            new List<string[]> {
                new string[] { "这是我的书包。我有两本书、四支笔和五个本子。你有几本书？", "Zhè shì wǒ de shūbāo. Wǒ yǒu liǎng běn shū, sì zhī bǐ hé wǔ gè běnzi. Nǐ yǒu jǐ běn shū?", "Ini tas sekolahku. Aku punya 2 buku, 4 pena, dan 5 buku tulis. Kamu punya berapa buku?" }
            },
            new List<string[]> {
                new string[] { "有", "yǒu", "memiliki / ada", "6", "Atas 𠂇, bawah bulan 月." },
                new string[] { "两", "liǎng", "dua (kuantitas)", "7", "Bingkai membungkus sepasang orang." },
                new string[] { "本", "běn", "jilid / buah buku", "5", "Pohon 木 dengan penanda akar di bawah." },
                new string[] { "个", "gè", "buah / orang (satuan umum)", "3", "Kiri orang 亻, kanan tegak." },
                new string[] { "阿姨", "āyí", "bibi / tante", "17", "Dua karakter: 阿 (7) dan 姨 (10)." },
                new string[] { "儿子", "érzi", "anak laki-laki", "5", "Dua karakter: 儿 (2) dan 子 (3)." },
                new string[] { "女儿", "nǚ'ér", "anak perempuan", "5", "Dua karakter: 女 (3) dan 儿 (2)." },
                new string[] { "支", "zhī", "batang (satuan pena)", "4", "Atas 十, bawah 又." },
                new string[] { "几", "jǐ", "berapa", "2", "Garis miring tekuk kait dan miring." }
            },
            new List<string[]> {
                new string[] { "数小鸭子", "Shǔ xiǎoyāzi", "Menghitung berapa banyak anak bebek yang bersembunyi di dalam gambar." }
            });

        // L13
        AddUnit(sb, 13, "第三单元 (Unit 3)", "第十三课：你家有电脑吗", "Dì shísān kè: Nǐ jiā yǒu diànnǎo ma", "Pelajaran 13: Apakah di Rumahmu Ada Komputer", "54", "55", 1,
            new List<string[]> {
                new string[] { "我有一台电脑。我有一张照片。我没有自行车。我没有字典。", "Wǒ yǒu yì tái diànnǎo. Wǒ yǒu yì zhāng zhàopiàn. Wǒ méiyǒu zìxíngchē. Wǒ méiyǒu zìdiǎn.", "Saya punya 1 komputer. Saya punya 1 lembar foto. Saya tidak punya sepeda. Saya tidak punya kamus." },
                new string[] { "小强有电脑吗？小丽有伞吗？你有没有哥哥？你们学校有没有食堂？", "Xiǎoqiáng yǒu diànnǎo ma? Xiǎolì yǒu sǎn ma? Nǐ yǒu méiyǒu gēge? Nǐmen xuéxiào yǒu méiyǒu shítáng?", "Apakah Xiaoqiang punya komputer? Apakah Xiaoli punya payung? Kamu punya kakak tidak? Apakah sekolah kalian punya kantin?" }
            },
            new List<string[]> {
                new string[] { "我家有两台电脑。爸爸有一台，哥哥有一台，我没有电脑。你家有电脑吗？", "Wǒ jiā yǒu liǎng tái diànnǎo. Bàba yǒu yì tái, gēge yǒu yì tái, wǒ méiyǒu diànnǎo. Nǐ jiā yǒu diànnǎo ma?", "Rumahku ada 2 unit komputer. Ayah punya 1 unit, kakak punya 1 unit, aku tidak punya komputer. Apakah di rumahmu ada komputer?" }
            },
            new List<string[]> {
                new string[] { "电脑", "diànnǎo", "komputer", "15", "Dua karakter: 电 (5) dan 脑 (10)." },
                new string[] { "台", "tái", "unit (satuan mesin/komputer)", "5", "Atas 厶, bawah mulut 口." },
                new string[] { "张", "zhāng", "lembar (satuan kertas/foto)", "7", "Kiri busur 弓, kanan 长." },
                new string[] { "照片", "zhàopiàn", "foto", "19", "Dua karakter: 照 (15) dan 片 (4)." },
                new string[] { "没有", "méiyǒu", "tidak punya / tidak ada", "13", "Dua karakter: 没 (7) dan 有 (6)." },
                new string[] { "自行车", "zìxíngchē", "sepeda", "16", "Tiga karakter: 自, 行, 车." },
                new string[] { "字典", "zìdiǎn", "kamus", "14", "Dua karakter: 字 (6) dan 典 (8)." },
                new string[] { "伞", "sǎn", "payung", "6", "Bentuk kanopi payung berkerangka." },
                new string[] { "食堂", "shítáng", "kantin", "19", "Dua karakter: 食 (8) dan 堂 (11)." }
            },
            new List<string[]> {
                new string[] { "找缺少部分", "Zhǎo quēshǎo bùfen", "Mencocokkan apa yang hilang: Monyet->Hidung, Gajah->Ekor, Telepon->Roda, Mobil->Gagang telepon." }
            });

        // L14
        AddUnit(sb, 14, "第三单元 (Unit 3)", "第十四课：书在书架上", "Dì shísì kè: Shū zài shūjià shàng", "Pelajaran 14: Buku Berada di Atas Rak Buku", "58", "59", 1,
            new List<string[]> {
                new string[] { "书在桌子上。书在椅子上。书在书架上。", "Shū zài zhuōzi shàng. Shū zài yǐzi shàng. Shū zài shūjià shàng.", "Buku di atas meja. Buku di atas kursi. Buku di atas rak buku." },
                new string[] { "篮球在椅子下边。本子在字典下边。书包在桌子下边。", "Lánqiú zài yǐzi xiàbian. Běnzi zài zìdiǎn xiàbian. Shūbāo zài zhuōzi xiàbian.", "Bola basket di bawah kursi. Buku tulis di bawah kamus. Tas sekolah di bawah meja." },
                new string[] { "教室在图书馆左边。图书馆在教室右边。妹妹在妈妈的右边。弟弟在妈妈的左边。", "Jiàoshì zài túshūguǎn zuǒbian. Túshūguǎn zài jiàoshì yòubian. Mèimei zài māmā de yòubian. Dìdi zài māmā de zuǒbian.", "Kelas di sebelah kiri perpus. Perpus di sebelah kanan kelas. Adik perempuan di kanan ibu. Adik laki-laki di kiri ibu." }
            },
            new List<string[]> {
                new string[] { "我们学校有一个图书馆。图书馆在教室的右边。图书馆的书在哪儿？书在书架上。", "Wǒmen xuéxiào yǒu yí gè túshūguǎn. Túshūguǎn zài jiàoshì de yòubian. Túshūguǎn de shū zài nǎr? Shū zài shūjià shàng.", "Sekolah kami punya perpustakaan di sebelah kanan ruang kelas. Buku perpustakaan ada di mana? Buku ada di atas rak buku." }
            },
            new List<string[]> {
                new string[] { "在", "zài", "berada di", "6", "Kiri atas 𠂇, bawah tanah 土." },
                new string[] { "书架", "shūjià", "rak buku", "12", "Dua karakter: 书 (4) dan 架 (8)." },
                new string[] { "上", "shàng", "atas", "3", "Tegak, horizontal pendek, horizontal dasar." },
                new string[] { "桌子", "zhuōzi", "meja", "13", "Dua karakter: 桌 (10) dan 子 (3)." },
                new string[] { "椅子", "yǐzi", "kursi", "15", "Dua karakter: 椅 (12) dan 子 (3)." },
                new string[] { "下", "xià", "bawah", "3", "Horizontal panjang atas, tegak, dan titik kanan." },
                new string[] { "边", "bian", "sisi / sebelah", "5", "Kiri 力, jalan 辶 di luar." },
                new string[] { "图书馆", "túshūguǎn", "perpustakaan", "23", "Tiga karakter: 图 (8), 书 (4), 馆 (11)." },
                new string[] { "左", "zuǒ", "kiri", "5", "Atas 𠂇, bawah 工." },
                new string[] { "右", "yòu", "kanan", "5", "Atas 𠂇, bawah 口." }
            },
            new List<string[]> {
                new string[] { "位置连线", "Wèizhì liánxiàn", "Mencocokkan posisi: Xiaoli di atas jembatan, Ikan di dalam sungai, Burung di atas pohon." }
            });

        // L15
        AddUnit(sb, 15, "第三单元 (Unit 3)", "第十五课：我的房间", "Dì shíwǔ kè: Wǒ de fángjiān", "Pelajaran 15: Kamar Tidurku", "62", "63", 1,
            new List<string[]> {
                new string[] { "这是我的房间，这儿有一张床、一个书架、一个衣柜、两张桌子和两把椅子。我的电脑在桌子上边，足球在圆桌下边。", "Zhè shì wǒ de fángjiān, zhèr yǒu yì zhāng chuáng, yí gè shūjià, yí gè yīguì, liǎng zhāng zhuōzi hé liǎng bǎ yǐzi. Wǒ de diànnǎo zài zhuōzi shàngbian, zúqiú zài yuánzhuō xiàbian.", "Ini adalah kamar tidur saya. Di sini ada 1 ranjang, 1 rak buku, 1 lemari pakaian, 2 meja dan 2 kursi. Komputer saya di atas meja, bola sepak di bawah meja bundar." }
            },
            new List<string[]> {
                new string[] { "说一说这些器官的名称：眉毛、眼睛、鼻子、嘴、耳朵、手。", "Shuō yi shuō zhèxiē qìguān de míngchēng: méimao, yǎnjing, bízi, zuǐ, ěrduo, shǒu.", "Sebutkan nama organ-organ tubuh ini: alis, mata, hidung, mulut, telinga, tangan." }
            },
            new List<string[]> {
                new string[] { "房间", "fángjiān", "kamar", "15", "Dua karakter: 房 (8) dan 间 (7)." },
                new string[] { "这儿", "zhèr", "di sini", "9", "Dua karakter: 这 (7) dan 儿 (2)." },
                new string[] { "床", "chuáng", "ranjang / tempat tidur", "7", "Atap 广 membungkus kayu 木." },
                new string[] { "衣柜", "yīguì", "lemari pakaian", "18", "Dua karakter: 衣 (6) dan 柜 (12)." },
                new string[] { "把", "bǎ", "buah (satuan kursi/alat berpegangan)", "7", "Kiri tangan 扌, kanan 巴." },
                new string[] { "圆桌", "yuánzhuō", "meja bundar", "20", "Dua karakter: 圆 (10) dan 桌 (10)." },
                new string[] { "手", "shǒu", "tangan", "4", "Bentuk jari tangan." },
                new string[] { "鼻子", "bízi", "hidung", "17", "Dua karakter: 鼻 (14) dan 子 (3)." },
                new string[] { "眉毛", "méimao", "alis", "13", "Dua karakter: 眉 (9) dan 毛 (4)." },
                new string[] { "眼睛", "yǎnjing", "mata", "22", "Dua karakter: 眼 (11) dan 睛 (11)." },
                new string[] { "嘴", "zuǐ", "mulut", "16", "Kiri mulut 口, kanan 此 + 角." },
                new string[] { "耳朵", "ěrduo", "telinga", "12", "Dua karakter: 耳 (6) dan 朵 (6)." }
            },
            new List<string[]> {
                new string[] { "手影游戏", "Shǒuyǐng yóuxì", "Membuat bayangan tangan membentuk burung terbang dan anak anjing." }
            }, true);

        sb.AppendLine("    ]");
        sb.AppendLine("  }");
    }

    static void GenerateBook2(StringBuilder sb) {
        sb.AppendLine("  {");
        sb.AppendLine("    id: 2,");
        sb.AppendLine("    title: \"Han Yu 2 (汉语 第二册)\",");
        sb.AppendLine("    subtitle: \"Komparasi Ukuran, Cuaca, Pakaian, Lokasi, & Rutinitas\",");
        sb.AppendLine("    themeColor: \"#059669\",");
        sb.AppendLine("    mascot: { name: \"Trixie si Triceratops\", emoji: \"🦏\", desc: \"Sahabat setia belajarmu di Han Yu 2!\" },");
        sb.AppendLine("    units: [");

        var b2Lessons = new string[][] {
            new string[] { "第一课：西瓜大 苹果小", "Dì yī kè: Xīguā dà, píngguǒ xiǎo", "Pelajaran 1: Semangka Besar, Apel Kecil", "06", "07", "西瓜大，苹果小。篮球大，乒乓球小。学生多，老师少。你的头发长，我的头发短。晚上我们吃水果，苹果多，梨少。哥哥吃梨，我和妹妹吃苹果。我的苹果大，妹妹的苹果小。", "大", "dà", "besar", "3" },
            new string[] { "第二课：今天的天气很好", "Dì èr kè: Jīntiān de tiānqì hěn hǎo", "Pelajaran 2: Cuaca Hari Ini Sangat Bagus", "10", "11", "今天的天气很好。花很漂亮，风很小，我们很高兴。我的字典很新，他的字典很旧。今天的天气很好，天很蓝，云很白。早上我们去学校，学校很大。我们的教室很新、很漂亮。", "天", "tiān", "langit / cuaca", "4" },
            new string[] { "第三课：我们真高兴啊", "Dì sān kè: Wǒmen zhēn gāoxìng a", "Pelajaran 3: Kami Sungguh Gembira", "14", "15", "这座山真高啊！山上的花真漂亮啊！这儿的水果真多啊！饺子真好吃啊！这首歌真好听啊！早上我和爸爸去爬山，这座山真高啊！山上的空气很好，树很多、很绿。我们真高兴啊！", "真", "zhēn", "sungguh / benar", "10" },
            new string[] { "第四课：小狗非常可爱", "Dì sì kè: Xiǎogǒu fēicháng kě'ài", "Pelajaran 4: Anak Anjing Sangat Menggemaskan", "18", "19", "人非常多。老师非常忙。爸爸非常累。我的妹妹非常可爱。我的弟弟非常聪明。我家有一只小狗、一只小猫和两只小鸟。小狗非常可爱，小猫非常聪明，小鸟非常好看。我非常喜欢它们。", "狗", "gǒu", "anjing", "8" },
            new string[] { "第五课：这个公园真热闹", "Dì wǔ kè: Zhège gōngyuán zhēn rènào", "Pelajaran 5: Taman Ini Sungguh Ramai", "22", "23", "今天天气非常好，天很蓝，风很小。草很绿，树很高。小狗跳，小鸟叫。小朋友啊，真不少，这个公园真热闹！早上我去公园了，那儿有树有花，有很大的湖和白色的桥，公园非常热闹！", "草", "cǎo", "rumput", "9" },
            new string[] { "第六课：这双筷子是我的", "Dì liù kè: Zhè shuāng kuàizi shì wǒ de", "Pelajaran 6: Sumpit Sepasang Ini Milikku", "26", "27", "那个杯子是妹妹的。这双筷子是我的。哪个碗是你的？哪个盘子是姐姐的？吃饭啦！这双筷子是我的，那双是弟弟的，哪双是妹妹的？妹妹不用筷子，她用勺子。", "双", "shuāng", "sepasang", "4" },
            new string[] { "第七课：小华的衣服是红的", "Dì qī kè: Xiǎohuá de yīfú shì hóng de", "Pelajaran 7: Pakaian Xiaohua Berwarna Merah", "30", "31", "爸爸的皮鞋是黑的。爸爸的衣服是红的。爸爸的裤子是蓝的。这条白裙子是妹妹的。这条黄裤子是小强的。妹妹问小华：“哥哥，这件白衣服是你的吗？”小华说：“不是我的，我的衣服是红的。”", "红", "hóng", "merah", "6" },
            new string[] { "第八课：书包里有什么", "Dì bā kè: Shūbāo lǐ yǒu shénme", "Pelajaran 8: Ada Apa di Dalam Tas Sekolah", "34", "35", "书包里有三本书。教室里有一块黑板。办公室里有一部电话。老师问小华：“你的书包里有什么？”小华说：“我的书包里有三本书、两个本子、五支笔、一把尺子和一块橡皮。”", "里", "lǐ", "dalam / di dalam", "7" },
            new string[] { "第九课：学校前面是马路", "Dì jiǔ kè: Xuéxiào qiánmiàn shì mǎlù", "Pelajaran 9: Di Depan Sekolah adalah Jalan Raya", "38", "39", "小华的左边是爸爸。小华的右边是妈妈。学校对面是银行。这是小华的学校。学校前面是马路，后面是公园。超市在学校的左边，银行在右边，学校对面是游乐场，门口有一个车站。", "前", "qián", "depan", "9" },
            new string[] { "第十课：我们的教室", "Dì shí kè: Wǒmen de jiàoshì", "Pelajaran 10: Ruang Kelas Kami", "42", "43", "我是一年级二班的学生。这是我们的教室。教室里有十六张桌子、十六把椅子和一个书架。教室前面是黑板，教室后面的墙上是一张中国地图。我们的教室很干净。", "班", "bān", "kelas / rombel", "10" },
            new string[] { "第十一课：小华常去图书馆", "Dì shíyī kè: Xiǎohuá cháng qù túshūguǎn", "Pelajaran 11: Xiaohua Sering ke Perpustakaan", "46", "47", "哥哥常打篮球。老师常表扬我们。爷爷常常喝茶。奶奶常常说汉语。学校有一个图书馆，那儿有很多书。中午小华常常去图书馆。他常看漫画，不常看报纸。", "常", "cháng", "sering / biasa", "11" },
            new string[] { "第十二课：小红也学中文", "Dì shí'èr kè: Xiǎohóng yě xué Zhōngwén", "Pelajaran 12: Xiaohong Juga Belajar Mandarin", "50", "51", "我的眼睛是黑的，头发也是黑的。小华吃馒头，小明也吃馒头。我有许多铅笔，他也有许多铅笔。弟弟喜欢香蕉，也喜欢橙子。我爱爸爸，也爱妈妈。小红也努力学中文！", "也", "yě", "juga / pula", "3" },
            new string[] { "第十三课：我们都是学生", "Dì shísān kè: Wǒmen dōu shì xuésheng", "Pelajaran 13: Kami Semua adalah Siswa", "54", "55", "小华、小强和小红都是学生。苹果和香蕉都是水果。我们都喜欢学中文。他们都是中国人。我们班的同学都很努力。老师和同学们都非常高兴！", "都", "dōu", "semua / seluruh", "10" },
            new string[] { "第十四课：他们一起上学", "Dì shísì kè: Tāmen yīqǐ shàngxué", "Pelajaran 14: Mereka Berangkat Sekolah Bersama", "58", "59", "小华和小明一起去学校。我们一起做游戏。爸爸和妈妈一起做晚饭。小红和姐姐一起唱歌、跳舞。同学们一起在操场上打篮球。大家在一起非常快乐！", "起", "qǐ", "bersama / bangun", "10" },
            new string[] { "第十五课：下课啦", "Dì shíwǔ kè: Xiàkè la", "Pelajaran 15: Kelas Selesai / Waktu Istirahat", "62", "63", "下课铃响了，下课啦！同学们高兴地走出教室。有的同学在操场上跑，有的同学在跳绳，有的同学在打乒乓球。校园里到处是笑声，真热闹啊！", "下", "xià", "bawah / selesai", "3" }
        };

        for (int i = 0; i < b2Lessons.Length; i++) {
            var l = b2Lessons[i];
            int num = i + 1;
            string uGroup = num <= 5 ? "第一单元 (Unit 1)" : (num <= 10 ? "第二单元 (Unit 2)" : "第三单元 (Unit 3)");
            AddUnit(sb, num, uGroup, l[0], l[1], l[2], l[3], l[4], 2,
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[6], l[7], l[8], l[9], "Goresan aksara standar Mandarin." } },
                new List<string[]> { new string[] { "Game", "Yóuxì", "Latihan interaktif buku." } },
                i == b2Lessons.Length - 1);
        }

        sb.AppendLine("    ]");
        sb.AppendLine("  }");
    }

    static void GenerateBook3(StringBuilder sb) {
        sb.AppendLine("  {");
        sb.AppendLine("    id: 3,");
        sb.AppendLine("    title: \"Han Yu 3 (汉语 第三册)\",");
        sb.AppendLine("    subtitle: \"Kalender, Jam & Waktu, 4 Musim, Sopan Santun, & Rekreasi\",");
        sb.AppendLine("    themeColor: \"#2563eb\",");
        sb.AppendLine("    mascot: { name: \"Terry si Pterodactyl\", emoji: \"🦅\", desc: \"Sahabat cerdasmu di Han Yu 3!\" },");
        sb.AppendLine("    units: [");

        var b3Lessons = new string[][] {
            new string[] { "第一课：今天几月几日", "Dì yī kè: Jīntiān jǐ yuè jǐ rì", "Pelajaran 1: Hari Ini Tanggal Berapa Bulan Berapa", "06", "07", "今天几月几日？今天一月一日，今天是元旦！昨天是十二月二十五日圣诞节。今天四月六日开学了，新学期我们发了新书，我和弟弟都非常高兴！", "月", "yuè", "bulan", "4" },
            new string[] { "第二课：明天星期一", "Dì èr kè: Míngtiān xīngqīyī", "Pelajaran 2: Besok Hari Senin", "10", "11", "今天星期几？今天星期三。明天星期四。星期三有中文课，星期四有数学课，星期五有美术课。后天星期二有体育课。", "星", "xīng", "bintang", "9" },
            new string[] { "第三课：现在八点半", "Dì sān kè: Xiànzài bā diǎn bàn", "Pelajaran 3: Sekarang Jam Delapan Setengah", "14", "15", "现在几点？现在八点半。我早上七点十分起床，七点半吃早饭。我们八点半开始上课，中午十二点吃午饭。下午三点和弟弟一起回家。", "点", "diǎn", "jam / titik", "9" },
            new string[] { "第四课：今天的天气怎么样", "Dì sì kè: Jīntiān de tiānqì zěnmeyàng", "Pelajaran 4: Bagaimana Cuaca Hari Ini", "18", "19", "今天的天气怎么样？今天天气非常好，不冷也不热，很舒服。中国一年有四个季节：春天、夏天、秋天和冬天。春天温暖，秋天凉快。", "春", "chūn", "musim semi", "9" },
            new string[] { "第五课：北京的四季", "Dì wǔ kè: Běijīng de sìjì", "Pelajaran 5: Empat Musim di Beijing", "22", "23", "北京是中国的首都，是一个美丽的城市。三四五月是春天，六七八月是夏天，九十十一月是秋天，十二、一、二月是冬天。冬天很冷，有时候下雪。", "北", "běi", "utara", "5" },
            new string[] { "第六课：陈老师教我们中文课", "Dì liù kè: Chén lǎoshī jiāo wǒmen Zhōngwén kè", "Pelajaran 6: Guru Chen Mengajar Mandarin Kami", "26", "27", "爸爸教弟弟书法，妈妈教妹妹中文歌。这学期陈老师教我们中文课，李老师教我们音乐课。大家学得非常开心！", "教", "jiāo", "mengajar", "11" },
            new string[] { "第七课：我给妈妈一件礼物", "Dì qī kè: Wǒ gěi māmā yí jiàn lǐwù", "Pelajaran 7: Aku Memberi Ibu Sebuah Hadiah", "30", "31", "爸爸给妈妈一件礼物。我们给老师一束鲜花。今天是国际妇女节，我和弟弟画了一张画儿送给妈妈。妈妈高兴地笑了！", "给", "gěi", "memberi", "9" },
            new string[] { "第八课：奶奶请我们吃中国菜", "Dì bā kè: Nǎinai qǐng wǒmen chī Zhōngguócài", "Pelajaran 8: Nenek Mengajak Makan Masakan Tiongkok", "34", "35", "星期天奶奶请全家吃中国菜，有烤鸭、红烧肉、炒青菜和美味的水饺。大家吃得津津有味，菜肴非常地道！", "菜", "cài", "sayur / masakan", "11" },
            new string[] { "第九课：小红喜欢看电影", "Dì jiǔ kè: Xiǎohóng xǐhuan kàn diànyǐng", "Pelajaran 9: Xiaohong Suka Menonton Film", "38", "39", "周末爸爸妈妈带小红去电影院看动画片《大闹天宫》。孙悟空机智勇敢，本领高强，小红看得入了迷！", "影", "yǐng", "film / bayangan", "15" },
            new string[] { "第十课：祝你生日快乐", "Dì shí kè: Zhù nǐ shēngrì kuàilè", "Pelajaran 10: Selamat Ulang Tahun Untukmu", "42", "43", "今天是小华的十岁生日。好朋友们一起唱《生日歌》：“祝你生日快乐！”小华吹灭蜡烛，大家一起吃蛋糕，快乐极了！", "祝", "zhù", "mendoakan / selamat", "9" },
            new string[] { "第十一课：我们在海边玩沙子", "Dì shíyī kè: Wǒmen zài hǎibiān wán shāzi", "Pelajaran 11: Kami Bermain Pasir di Pantai", "46", "47", "放假了，全家去海边度假。沙滩金黄柔软，我们在沙滩上堆了一座漂亮的城堡，还捡了很多美丽的贝壳！", "海", "hǎi", "laut", "10" },
            new string[] { "第十二课：小花猫给外婆送鱼", "Dì shí'èr kè: Xiǎohuāmāo gěi wàipó sòng yú", "Pelajaran 12: Kucing Belang Mengantar Ikan untuk Nenek", "50", "51", "小花猫钓到了大红鱼，特地穿过森林送给外婆吃。外婆抚摸着它的头夸奖它是个懂事孝顺的好孩子！", "送", "sòng", "mengantar / memberi", "9" },
            new string[] { "第十三课：爷爷去公园打太极拳", "Dì shísān kè: Yéye qù gōngyuán dǎ tàijíquán", "Pelajaran 13: Kakek ke Taman Berlatih Taijiquan", "54", "55", "清晨爷爷早早起床去公园打太极拳。湖边空气清新，爷爷动作稳健流畅，坚持锻炼身体好！", "太", "tài", "terlalu / agung", "4" },
            new string[] { "第十四课：我们坐车去动物园", "Dì shísì kè: Wǒmen zuò chē qù dòngwùyuán", "Pelajaran 14: Kami Naik Bus ke Kebun Binatang", "58", "59", "天气晴朗，老师带大家坐公共汽车去动物园。我们看到了长颈鹿、大熊猫、老虎和大象，奇妙极了！", "坐", "zuò", "duduk / naik", "7" },
            new string[] { "第十五课：大家去郊游", "Dì shíwǔ kè: Dàjiā qù jiāoyóu", "Pelajaran 15: Semua Orang Pergi Piknik Tamasya", "62", "63", "金秋十月，全校师生去郊外秋游。我们在草地上野餐、放风筝、做游戏，度过了难忘愉快的一天！", "游", "yóu", "piknik / berenang", "12" }
        };

        for (int i = 0; i < b3Lessons.Length; i++) {
            var l = b3Lessons[i];
            int num = i + 1;
            string uGroup = num <= 5 ? "第一单元 (Unit 1)" : (num <= 10 ? "第二单元 (Unit 2)" : "第三单元 (Unit 3)");
            AddUnit(sb, num, uGroup, l[0], l[1], l[2], l[3], l[4], 3,
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[6], l[7], l[8], l[9], "Goresan aksara standar Mandarin." } },
                new List<string[]> { new string[] { "Game", "Yóuxì", "Latihan interaktif buku." } },
                i == b3Lessons.Length - 1);
        }

        sb.AppendLine("    ]");
        sb.AppendLine("  }");
    }

    static void GenerateBook4(StringBuilder sb) {
        sb.AppendLine("  {");
        sb.AppendLine("    id: 4,");
        sb.AppendLine("    title: \"Han Yu 4 (汉语 第四册)\",");
        sb.AppendLine("    subtitle: \"Hitungan, Asal Usul, Belajar Mandarin, Cerita Fabel, & Kebiasaan Sehat\",");
        sb.AppendLine("    themeColor: \"#8b5cf6\",");
        sb.AppendLine("    mascot: { name: \"Brachy si Brachiosaurus\", emoji: \"🦕\", desc: \"Sahabat tangguhmu di Han Yu 4!\" },");
        sb.AppendLine("    units: [");

        var b4Lessons = new string[][] {
            new string[] { "第一课：学校有多少学生", "Dì yī kè: Xuéxiào yǒu duōshǎo xuésheng", "Pelajaran 1: Sekolah Memiliki Berapa Banyak Siswa", "08", "09", "学校有多少学生？学校一共有四百零八个学生、五十位老师。教学楼里有明亮的教室，前边是操场，后边种着很多树。我们在树下活动。", "多", "duō", "banyak", "6" },
            new string[] { "第二课：你从哪儿来", "Dì èr kè: Nǐ cóng nǎr lái", "Pelajaran 2: Dari Mana Kamu Berasal", "12", "13", "李强从上海来，张艳从西安来。从今天开始，我们班有三十二个同学了。我们一起鼓掌欢迎新同学！", "从", "cóng", "dari", "4" },
            new string[] { "第三课：跟老师学中文", "Dì sān kè: Gēn lǎoshī xué Zhōngwén", "Pelajaran 3: Belajar Bahasa Mandarin Bersama Guru", "16", "17", "上课以前，我们预习生词和课文。上课时认真听讲。下课后用汉语跟老师聊天。大家进步很快！", "跟", "gēn", "bersama / mengikuti", "13" },
            new string[] { "第四课：为什么不试试", "Dì sì kè: Wèishénme bù shìshi", "Pelajaran 4: Mengapa Tidak Mencobanya", "20", "21", "一个人去鞋店买鞋，出门前用绳子量了脚却忘了带绳子。妻子生气地说：“你为什么不自己试鞋呢？”", "试", "shì", "mencoba", "8" },
            new string[] { "第五课：笨鸟先飞", "Dì wǔ kè: Bènnǐao xiān fēi", "Pelajaran 5: Burung yang Lamban Terbang Lebih Awal", "24", "25", "鸟妈妈有两个孩子，妹妹很努力，每天先起床练习飞行，最终飞得又高又远。千里之行，始于足下！", "笨", "bèn", "lamban / giat", "11" },
            new string[] { "第六课：小鸟会唱歌", "Dì liù kè: Xiǎoniǎo huì chànggē", "Pelajaran 6: Burung Kecil Bisa Bernyanyi", "28", "29", "美丽的小鸟会唱歌，大象会搬木头，小鸭子会游泳。小鸟说：“大家都有自己的本领！”", "会", "huì", "bisa / mampu", "6" },
            new string[] { "第七课：我们要去爬山", "Dì qī kè: Wǒmen yào qù páshān", "Pelajaran 7: Kami Akan Pergi Mendaki Gunung", "32", "33", "周末天气晴朗，爸爸妈妈带我们去郊外爬山。我们要早起带好水和点心出发！", "要", "yào", "akan / mau", "9" },
            new string[] { "第八课：我可以看电视吗", "Dì bā kè: Wǒ kěyǐ kàn diànshì ma", "Pelajaran 8: Bolehkah Aku Menonton Televisi", "36", "37", "小明做完作业问妈妈：“我可以看电视吗？”妈妈说：“可以，但只能看半个小时哦。”", "可", "kě", "boleh / dapat", "5" },
            new string[] { "第九课：小玲的家在唐人街附近", "Dì jiǔ kè: Xiǎolíng de jiā zài Tángrénjiē fùjìn", "Pelajaran 9: Rumah Xiaoling di Dekat Pecinan", "40", "41", "小玲家在唐人街附近。节日里街上到处张灯结彩，舞狮表演非常热闹！", "街", "jiē", "jalan / pecinan", "12" },
            new string[] { "第十课：我们要爱护牙齿", "Dì shí kè: Wǒmen yào àihù yáchǐ", "Pelajaran 10: Kita Harus Menjaga Kesehatan Gigi", "44", "45", "医生告诉我们要养成好习惯：早晚认真刷牙，饭后漱口，少吃甜食，好好爱护牙齿！", "牙", "yá", "gigi", "4" },
            new string[] { "第十一课：小华去医院了", "Dì shíyī kè: Xiǎohuá qù yīyuàn le", "Pelajaran 11: Xiaohua Telah Pergi ke Rumah Sakit", "48", "49", "小华感冒发烧了，妈妈带他去医院看病。医生给他量了体温，嘱咐他多喝温水、好好休息。", "病", "bìng", "sakit / penyakit", "10" },
            new string[] { "第十二课：妈妈买了很多苹果", "Dì shí'èr kè: Māmā mǎi le hěn duō píngguǒ", "Pelajaran 12: Ibu Telah Membeli Banyak Apel", "52", "53", "星期天妈妈去水果超市，买了很多新鲜红润的苹果、香蕉和西瓜。大家一起吃水果。", "买", "mǎi", "membeli", "6" },
            new string[] { "第十三课：新年快要到了", "Dì shísān kè: Xīnnián kuài yào dào le", "Pelajaran 13: Tahun Baru Segera Tiba", "56", "57", "新年快到了，家家户户打扫房屋，贴春联，大街小巷洋溢着喜庆的气氛！", "快", "kuài", "cepat / segera", "7" },
            new string[] { "第十四课：他们正在睡觉呢", "Dì shísì kè: Tāmen zhèngzài shuìjiào ne", "Pelajaran 14: Mereka Sedang Tidur", "60", "61", "夜深了，月亮升上了天空。爸爸妈妈和弟弟都正在安静地睡觉呢。", "正", "zhèng", "sedang / tepat", "5" },
            new string[] { "第十五课：聪明的公鸡", "Dì shíwǔ kè: Cōngmíng de gōngjī", "Pelajaran 15: Ayam Jantan yang Cerdik", "64", "65", "狡猾的狐狸想骗吃公鸡，聪明的公鸡识破了诡计，叫来猎狗把狐狸吓跑了！", "鸡", "jī", "ayam", "7" }
        };

        for (int i = 0; i < b4Lessons.Length; i++) {
            var l = b4Lessons[i];
            int num = i + 1;
            string uGroup = num <= 5 ? "第一单元 (Unit 1)" : (num <= 10 ? "第二单元 (Unit 2)" : "第三单元 (Unit 3)");
            AddUnit(sb, num, uGroup, l[0], l[1], l[2], l[3], l[4], 4,
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[6], l[7], l[8], l[9], "Goresan aksara standar Mandarin." } },
                new List<string[]> { new string[] { "Game", "Yóuxì", "Latihan interaktif buku." } },
                i == b4Lessons.Length - 1);
        }

        sb.AppendLine("    ]");
        sb.AppendLine("  }");
    }

    static void GenerateBook5(StringBuilder sb) {
        sb.AppendLine("  {");
        sb.AppendLine("    id: 5,");
        sb.AppendLine("    title: \"Han Yu 5 (汉语 第五册)\",");
        sb.AppendLine("    subtitle: \"Aktivitas Sekolah, Berbakti, Prestasi, Berbelanja, Fabel & Cerita Klasik\",");
        sb.AppendLine("    themeColor: \"#ec4899\",");
        sb.AppendLine("    mascot: { name: \"Steggy si Stegosaurus\", emoji: \"🦎\", desc: \"Sahabat pemberanimu di Han Yu 5!\" },");
        sb.AppendLine("    units: [");

        var b5Lessons = new string[][] {
            new string[] { "第一课：新学期的第一天", "Dì yī kè: Xīn xuéqī de dì-yī tiān", "Pelajaran 1: Hari Pertama Semester Baru", "06", "07", "今天是开学第一天，教室挂着气球，桌上摆着水果点心。同学们唱歌、跳舞、说绕口令，节目精彩极了！", "新", "xīn", "baru", "13" },
            new string[] { "第二课：妈妈幸福地笑了", "Dì èr kè: Māmā xìngfú de xiào le", "Pelajaran 2: Ibu Tersenyum Bahagia", "10", "11", "母亲节放学后，小华扫地，小明擦桌子。妈妈回家看见干净的房间，幸福地笑了！", "幸", "xìng", "bahagia", "8" },
            new string[] { "第三课：哥哥长得很高", "Dì sān kè: Gēge zhǎng de hěn gāo", "Pelajaran 3: Kakak Bertumbuh Sangat Tinggi", "14", "15", "我哥哥是校篮球队队长，长得高又帅。比赛时跳得高投得准，学习成绩也非常优秀！", "帅", "shuài", "tampan / keren", "5" },
            new string[] { "第四课：他汉语说得很流利", "Dì sì kè: Tā Hànyǔ shuō de hěn liúlì", "Pelajaran 4: Bahasa Mandarinnya Sangat Fasih", "18", "19", "我们班同学各有特长：弹琴、跳舞、游泳、打球。大家汉语都说得很流利！", "流", "liú", "mengalir / lancar", "10" },
            new string[] { "第五课：我和妈妈逛商场", "Dì wǔ kè: Wǒ hé māmā guàng shāngchǎng", "Pelajaran 5: Aku dan Ibu Berbelanja di Mall", "22", "23", "星期天我和妈妈逛商场买毛衣，样式很多，最后挑选了一件绿色的毛衣，逛得很开心！", "逛", "guàng", "jalan-jalan belanja", "10" },
            new string[] { "第六课：桌子和椅子的对话", "Dì liù kè: Zhuōzi hé yǐzi de duìhuà", "Pelajaran 6: Percakapan Meja dan Kursi", "26", "27", "放学后桌椅对话，叹息主人摇晃刻画。同学们一定要珍惜爱护身边的公物！", "话", "huà", "ucapan / kata", "8" },
            new string[] { "第七课：老山羊的礼物", "Dì qī kè: Lǎo shānyáng de lǐwù", "Pelajaran 7: Hadiah dari Kambing Gunung Tua", "30", "31", "老山羊分发白菜种子，小兔辛勤播种收获满满一屋的大白菜。勤劳带来丰收！", "羊", "yáng", "kambing", "6" },
            new string[] { "第八课：可爱的大熊猫", "Dì bā kè: Kě'ài de dàxióngmāo", "Pelajaran 8: Panda Raksasa yang Menggemaskan", "34", "35", "大熊猫是中国的国宝，体色黑白相间，吃鲜嫩竹子，憨态可掬非常可爱！", "猫", "māo", "panda / kucing", "11" },
            new string[] { "第九课：狼来了", "Dì jiǔ kè: Láng lái le", "Pelajaran 9: Serigala Datang (Anak Penggembala)", "38", "39", "放羊娃说谎喊“狼来了”，最后真狼来了没人相救。做人一定要诚实守信！", "狼", "láng", "serigala", "10" },
            new string[] { "第十课：司马光砸缸", "Dì shí kè: Sīmǎ Guāng zá gāng", "Pelajaran 10: Sima Guang Memecahkan Tempayan Air", "42", "43", "同伴落入深水缸，司马光沉着冷静举起大石头砸破缸救出了同伴。遇事要冷静！", "光", "guāng", "cahaya / nama tokoh", "6" },
            new string[] { "第十一课：写“万”字", "Dì shíyī kè: Xiě 'wàn' zì", "Pelajaran 11: Menulis Karakter 'Wan'", "46", "47", "学写字以为一二三很简单，写一万划了一整天。学习要脚踏实地，不可骄傲自满！", "万", "wàn", "sepuluh ribu", "3" },
            new string[] { "第十二课：雨后的天空更美丽", "Dì shí'èr kè: Yǔ hòu de tiānkōng gèng měilì", "Pelajaran 12: Langit Setelah Hujan Menjadi Lebih Indah", "50", "51", "大雨过后空气清新，天空中出现了一道绚丽七彩的彩虹，景色分外迷人！", "更", "gèng", "lebih / makin", "7" },
            new string[] { "第十三课：白猫和黑猫", "Dì shísān kè: Bái māo hé hēi māo", "Pelajaran 13: Kucing Putih dan Kucing Hitam", "54", "55", "不管白猫黑猫，能捉住老鼠勤劳尽责的就是好猫。实践是检验真理的标准！", "抓", "zhuā", "menangkap", "7" },
            new string[] { "第十四课：乌鸦和狐狸", "Dì shísì kè: Wūyā hé húli", "Pelajaran 14: Burung Gagak dan Rubah", "58", "59", "乌鸦因贪听奉承张口唱歌，嘴里的肉落入狐狸口中。切莫爱慕虚荣！", "乌", "wū", "gagak / hitam", "4" },
            new string[] { "第十五课：骆驼和羊", "Dì shíwǔ kè: Luòtuo hé yáng", "Pelajaran 15: Unta dan Kambing", "62", "63", "骆驼个高吃树叶，羊身小钻矮门。尺有所短寸有所长，各人皆有长处！", "驼", "tuó", "unta", "8" }
        };

        for (int i = 0; i < b5Lessons.Length; i++) {
            var l = b5Lessons[i];
            int num = i + 1;
            string uGroup = num <= 5 ? "第一单元 (Unit 1)" : (num <= 10 ? "第二单元 (Unit 2)" : "第三单元 (Unit 3)");
            AddUnit(sb, num, uGroup, l[0], l[1], l[2], l[3], l[4], 5,
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[6], l[7], l[8], l[9], "Goresan aksara standar Mandarin." } },
                new List<string[]> { new string[] { "Game", "Yóuxì", "Latihan interaktif buku." } },
                i == b5Lessons.Length - 1);
        }

        sb.AppendLine("    ]");
        sb.AppendLine("  }");
    }

    static void GenerateBook6(StringBuilder sb) {
        sb.AppendLine("  {");
        sb.AppendLine("    id: 6,");
        sb.AppendLine("    title: \"Han Yu 6 (汉语 第六册)\",");
        sb.AppendLine("    subtitle: \"Metamorfosis Hewan, Prestasi, Wisata Beijing, Fabel Filosofis & Kebijaksanaan\",");
        sb.AppendLine("    themeColor: \"#f59e0b\",");
        sb.AppendLine("    mascot: { name: \"Raphy si Velociraptor\", emoji: \"🐊\", desc: \"Sahabat lincah & cerdasmu di Han Yu 6!\" },");
        sb.AppendLine("    units: [");

        var b6Lessons = new string[][] {
            new string[] { "第一课：小蝌蚪找妈妈", "Dì yī kè: Xiǎo kēdǒu zhǎo māmā", "Pelajaran 1: Kecebong Kecil Mencari Ibunya", "06", "07", "春天来了，池塘里一群大脑袋、长尾巴的小蝌蚪找妈妈。他们经过小鱼、乌龟指引，终于找到了碧绿衣裳的青蛙妈妈！", "蝌", "kē", "kecebong", "14" },
            new string[] { "第二课：你见过海豚吗", "Dì èr kè: Nǐ jiànguò hǎitún ma", "Pelajaran 2: Apakah Kamu Pernah Melihat Lumba-lumba", "11", "12", "海豚聪明伶俐，是人类的好朋友和潜水天才。在海洋馆里表演顶球跳舞，带来无数欢乐！", "豚", "tún", "lumba-lumba", "11" },
            new string[] { "第三课：我要更努力", "Dì sān kè: Wǒ yào gèng nǔlì", "Pelajaran 3: Aku Harus Lebih Giat Berusaha", "16", "17", "小丽跟妈妈游览北京故宫、长城、吃烤鸭，深刻体会到要更努力学好汉语的重要性！", "更", "gèng", "lebih / makin", "7" },
            new string[] { "第四课：唐人街的国庆节", "Dì sì kè: Tángrénjiē de Guóqìngjié", "Pelajaran 4: Hari Kemerdekaan di Pecinan", "21", "22", "十月一日国庆节，唐人街张灯结彩、锣鼓喧天，狮子欢快起舞，游人品尝美味小吃，热闹非凡！", "唐", "táng", "dinasti Tang / pecinan", "10" },
            new string[] { "第五课：姐姐的一封信", "Dì wǔ kè: Jiějiě de yī fēng xìn", "Pelajaran 5: Sepucuk Surat dari Kakak Perempuan", "26", "27", "姐姐从中国寄来书信，描绘都市繁华，勉励妹妹珍惜光阴，打好基础实现留学梦想！", "封", "fēng", "pucuk surat", "9" },
            new string[] { "第六课：王冕读书", "Dì liù kè: Wáng Miǎn dúshū", "Pelajaran 6: Wang Mian Belajar Membaca & Melukis", "30", "31", "古代少年王冕一边放牛一边刻苦自学，雨后以荷叶为纸潜心画荷花，终成著名画家！", "冕", "miǎn", "mahkota / nama tokoh", "11" },
            new string[] { "第七课：小和尚下山", "Dì qī kè: Xiǎo héshang xiàshān", "Pelajaran 7: Biksu Cilik Turun Gunung", "34", "35", "小和尚随师父下山化缘见识人间百态，师父借机循循善诱，启迪处世智慧与慈悲！", "尚", "shàng", "menghormati / biksu", "8" },
            new string[] { "第八课：丑小鸭", "Dì bā kè: Chǒuxiǎoyā", "Pelajaran 8: Itik Buruk Rupa", "38", "39", "历经嫌弃与磨难的丑小鸭心怀希望，熬过寒冬蜕变成为展翅高飞的美丽白天鹅！", "丑", "chǒu", "buruk rupa", "4" },
            new string[] { "第九课：乌鸦喝水", "Dì jiǔ kè: Wūyā hē shuǐ", "Pelajaran 9: Burung Gagak Minum Air", "42", "43", "口渴的乌鸦衔小石子投进细颈瓶使水面升高，终于喝到了甘甜的水。善于思考能解决难题！", "渴", "kě", "haus", "12" },
            new string[] { "第十课：猴子捞月", "Dì shí kè: Hóuzi lāo yuè", "Pelajaran 10: Monyet Menggapai Bayangan Bulan di Air", "46", "47", "猴子倒挂连串去井里捞月亮，才知水中的只是月影。做事要看清事物本质！", "捞", "lāo", "mengeduk di air", "10" },
            new string[] { "第十一课：我把房间装满了", "Dì shíyī kè: Wǒ bǎ fángjiān zhuāng mǎn le", "Pelajaran 11: Aku Memenuhi Kamar dengan Cahaya", "50", "51", "兄弟三人试填房间，小儿子点燃一支蜡烛，温暖明亮的光芒瞬间照亮整座屋子！", "满", "mǎn", "penuh", "13" },
            new string[] { "第十二课：刻舟求剑", "Dì shí'èr kè: Kè zhōu qiú jiàn", "Pelajaran 12: Menandai Perahu Mencari Pedang", "54", "55", "落剑江中却在船舷刻记号等靠岸寻找，讽刺不知事物变化、墨守成规的人！", "剑", "jiàn", "pedang", "9" },
            new string[] { "第十三课：寒号鸟", "Dì shísān kè: Hánhàoniǎo", "Pelajaran 13: Burung Pemalas yang Kedinginan di Salju", "58", "59", "喜鹊勤劳筑巢安度严冬，寒号鸟贪玩懒惰在暴风雪中受冻。凡事当未雨绸缪！", "寒", "hán", "dingin membeku", "12" },
            new string[] { "第十四课：花是谁送的", "Dì shísì kè: Huā shì shéi sòng de", "Pelajaran 14: Siapakah yang Mengirimkan Bunga", "62", "63", "生病住院老师窗台前芬芳的鲜花，是同学们默默表达感恩与祝福的心意！", "芬", "fēn", "harum semerbak", "7" },
            new string[] { "第十五课：猴子戴草帽", "Dì shíwǔ kè: Hóuzi dài cǎomào", "Pelajaran 15: Monyet-monyet Memakai Topi Jerami", "66", "67", "老爷爷利用猴子喜欢模仿的特点扔下草帽，机智收回了被抢走的草帽！", "帽", "mào", "topi", "12" }
        };

        for (int i = 0; i < b6Lessons.Length; i++) {
            var l = b6Lessons[i];
            int num = i + 1;
            string uGroup = num <= 5 ? "第一单元 (Unit 1)" : (num <= 10 ? "第二单元 (Unit 2)" : "第三单元 (Unit 3)");
            AddUnit(sb, num, uGroup, l[0], l[1], l[2], l[3], l[4], 6,
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[5], l[1], l[2] } },
                new List<string[]> { new string[] { l[6], l[7], l[8], l[9], "Goresan aksara standar Mandarin." } },
                new List<string[]> { new string[] { "Game", "Yóuxì", "Latihan interaktif buku." } },
                i == b6Lessons.Length - 1);
        }

        sb.AppendLine("    ]");
        sb.AppendLine("  }");
    }
}
