/**
 * ==============================================================================
 * DATABASE KURIKULUM LENGKAP HAN YU 1 - HAN YU 12 (180 UNIT CERITA TERPADU)
 * Disesuaikan khusus untuk siswa SD:
 * 1. Cerita audio pelan dengan pinyin bertanda nada lengkap & terjemahan Indonesia
 * 2. Latihan menulis guratan (3-6x repetisi, radikal, nama goresan & bihua)
 * 3. Game mencocokkan gambar & kalimat cerita
 * 4. 10 Soal latihan pilihan berganda standar YCT 2 dengan audio (KKM 70)
 * ==============================================================================
 */

// 1. DATABASE CERITA DETAIL & KOSAKATA LENGKAP BUKU 1 (UNIT 1 - 15)
const HAN_YU_STORIES_DATABASE = {
  1: [
    {
      unit: 1, title: "第1课 你好", pinyin: "Nǐ hǎo", meaning: "Halo / Salam Jumpa",
      sentences: [
        { hanzi: "你好！我是大龙。", pinyin: "Nǐ hǎo! Wǒ shì Dàlóng.", indonesian: "Halo! Saya adalah Dalong." },
        { hanzi: "你好！我是小月。", pinyin: "Nǐ hǎo! Wǒ shì Xiǎoyuè.", indonesian: "Halo! Saya adalah Xiaoyue." },
        { hanzi: "老师好！同学们好！", pinyin: "Lǎoshī hǎo! Tóngxuémen hǎo!", indonesian: "Halo Guru! Halo teman-teman sekalian!" },
        { hanzi: "我们一起开心地学习中文。", pinyin: "Wǒmen yìqǐ kāixīn de xuéxí Zhōngwén.", indonesian: "Kita bersama-sama dengan gembira belajar bahasa Mandarin." },
        { hanzi: "大家都是好朋友！", pinyin: "Dàjiā dōushì hǎo péngyou!", indonesian: "Semuanya adalah sahabat baik!" }
      ],
      vocab: [
        { hanzi: "你", pinyin: "nǐ", meaning: "kamu / anda", strokes: 7, strokeOrder: ["撇", "竖", "撇", "横撇", "点", "横", "竖"], radical: "亻" },
        { hanzi: "好", pinyin: "hǎo", meaning: "baik / bagus", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横折", "横", "横"], radical: "女" },
        { hanzi: "我", pinyin: "wǒ", meaning: "saya / aku", strokes: 7, strokeOrder: ["撇", "横", "竖钩", "提", "斜钩", "撇", "点"], radical: "戈" },
        { hanzi: "老师", pinyin: "lǎoshī", meaning: "guru / pengajar", strokes: 6, strokeOrder: ["横", "竖", "横", "撇", "竖", "横折折折钩"], radical: "耂" },
        { hanzi: "同学", pinyin: "tóngxué", meaning: "teman sekelas", strokes: 6, strokeOrder: ["竖", "横折钩", "横", "横", "竖", "横折"], radical: "口" },
        { hanzi: "学", pinyin: "xué", meaning: "belajar", strokes: 8, strokeOrder: ["点", "点", "提", "撇", "点", "横钩", "竖钩", "横"], radical: "子" }
      ]
    },
    {
      unit: 2, title: "第2课 谢谢你", pinyin: "Xièxie nǐ", meaning: "Terima Kasih",
      sentences: [
        { hanzi: "谢谢你帮我拿书。", pinyin: "Xièxie nǐ bāng wǒ ná shū.", indonesian: "Terima kasih kamu telah membantuku membawakan buku." },
        { hanzi: "不客气，这是我应该做的。", pinyin: "Bú kèqi, zhè shì wǒ yīnggāi zuò de.", indonesian: "Sama-sama, ini sudah seharusnya aku lakukan." },
        { hanzi: "放学了，我们对老师说再见。", pinyin: "Fàngxué le, wǒmen duì lǎoshī shuō zàijiàn.", indonesian: "Waktu pulang sekolah tiba, kami mengucapkan selamat tinggal kepada guru." },
        { hanzi: "明天学校见！", pinyin: "Míngtiān xuéxiào jiàn!", indonesian: "Sampai jumpa besok di sekolah!" },
        { hanzi: "大家有礼貌真懂事。", pinyin: "Dàjiā yǒu lǐmào zhēn dǒngshì.", indonesian: "Semua murid sopan dan berbudi pekerti baik." }
      ],
      vocab: [
        { hanzi: "谢", pinyin: "xiè", meaning: "terima kasih", strokes: 12, strokeOrder: ["点", "横折提", "撇", "竖", "横折", "横", "横", "横", "竖", "横", "撇", "点"], radical: "讠" },
        { hanzi: "不", pinyin: "bù", meaning: "tidak / bukan", strokes: 4, strokeOrder: ["横", "撇", "竖", "点"], radical: "一" },
        { hanzi: "客气", pinyin: "kèqi", meaning: "sungkan / ramah", strokes: 9, strokeOrder: ["点", "点", "横钩", "撇", "横撇", "横", "竖", "撇", "捺"], radical: "宀" },
        { hanzi: "再见", pinyin: "zàijiàn", meaning: "sampai jumpa", strokes: 6, strokeOrder: ["横", "竖", "横折钩", "竖", "横", "横"], radical: "冂" },
        { hanzi: "请", pinyin: "qǐng", meaning: "silakan / tolong", strokes: 10, strokeOrder: ["点", "横折提", "横", "横", "竖", "提", "横折钩", "横", "横"], radical: "讠" }
      ]
    },
    {
      unit: 3, title: "第3课 你叫什么名字", pinyin: "Nǐ jiào shénme míngzi", meaning: "Siapa Namamu",
      sentences: [
        { hanzi: "请问你叫什么名字？", pinyin: "Qǐngwèn nǐ jiào shénme míngzi?", indonesian: "Bolehkah saya bertanya siapa namamu?" },
        { hanzi: "我叫明明，今年上一年级。", pinyin: "Wǒ jiào Míngming, jīnnián shàng yī niánjí.", indonesian: "Nama saya Mingming, tahun ini masuk kelas satu." },
        { hanzi: "他叫大生，是我的同桌。", pinyin: "Tā jiào Dàshēng, shì wǒ de tóngzhuō.", indonesian: "Dia bernama Dasheng, dia adalah teman sebangkuku." },
        { hanzi: "很高兴认识你们大家。", pinyin: "Hěn gāoxìng rènshi nǐmen dàjiā.", indonesian: "Sangat senang dapat berkenalan dengan kalian semua." },
        { hanzi: "我们手拉手一起做游戏。", pinyin: "Wǒmen shǒulāshǒu yìqǐ zuò yóuxì.", indonesian: "Kami bergandengan tangan bersama-sama bermain game." }
      ],
      vocab: [
        { hanzi: "叫", pinyin: "jiào", meaning: "dipanggil / bernama", strokes: 5, strokeOrder: ["竖", "横折", "横", "竖折撇", "竖"], radical: "口" },
        { hanzi: "什么", pinyin: "shénme", meaning: "apa", strokes: 4, strokeOrder: ["撇", "竖", "横", "竖"], radical: "亻" },
        { hanzi: "名字", pinyin: "míngzi", meaning: "nama lengkap", strokes: 6, strokeOrder: ["撇", "横撇", "点", "竖", "横折", "横"], radical: "夕" },
        { hanzi: "高兴", pinyin: "gāoxìng", meaning: "senang / gembira", strokes: 10, strokeOrder: ["点", "横", "竖", "横折", "横", "点", "撇", "横", "竖钩", "点"], radical: "高" }
      ]
    },
    {
      unit: 4, title: "第4课 你几岁", pinyin: "Nǐ jǐ suì", meaning: "Berapa Usiamu",
      sentences: [
        { hanzi: "小弟弟，你今年几岁了？", pinyin: "Xiǎo dìdi, nǐ jīnnián jǐ suì le?", indonesian: "Adik kecil, berapakah usiamu tahun ini?" },
        { hanzi: "我今年七岁了。", pinyin: "Wǒ jīnnián qī suì le.", indonesian: "Saya tahun ini berusia tujuh tahun." },
        { hanzi: "哥哥今年十岁，个子长得高。", pinyin: "Gēge jīnnián shí suì, gèzi zhǎng de gāo.", indonesian: "Kakak laki-laki berusia sepuluh tahun, badannya tinggi." },
        { hanzi: "妹妹三岁，喜欢吃苹果。", pinyin: "Mèimei sān suì, xǐhuan chī píngguǒ.", indonesian: "Adik perempuan berusia tiga tahun, suka makan buah apel." },
        { hanzi: "我们天天健康成长。", pinyin: "Wǒmen tiāntiān jiànkāng chéngzhǎng.", indonesian: "Kami setiap hari bertumbuh kembang dengan sehat." }
      ],
      vocab: [
        { hanzi: "几", pinyin: "jǐ", meaning: "berapa", strokes: 2, strokeOrder: ["撇", "横折弯钩"], radical: "几" },
        { hanzi: "岁", pinyin: "suì", meaning: "tahun (usia)", strokes: 6, strokeOrder: ["竖", "竖折", "竖", "撇", "横折钩", "横"], radical: "山" },
        { hanzi: "七", pinyin: "qī", meaning: "tujuh", strokes: 2, strokeOrder: ["横", "竖弯钩"], radical: "一" },
        { hanzi: "十", pinyin: "shí", meaning: "sepuluh", strokes: 2, strokeOrder: ["横", "竖"], radical: "十" },
        { hanzi: "八", pinyin: "bā", meaning: "delapan", strokes: 2, strokeOrder: ["撇", "捺"], radical: "八" }
      ]
    },
    {
      unit: 5, title: "第5课 这是我的书", pinyin: "Zhè shì wǒ de shū", meaning: "Ini Buku Saya",
      sentences: [
        { hanzi: "这是我的中文课本。", pinyin: "Zhè shì wǒ de Zhōngwén kèběn.", indonesian: "Ini adalah buku pelajaran bahasa Mandarin saya." },
        { hanzi: "那是老师的书包。", pinyin: "Nà shì lǎoshī de shūbāo.", indonesian: "Itu adalah tas sekolah milik guru." },
        { hanzi: "课本里面有漂亮的图画。", pinyin: "Kèběn lǐmiàn yǒu piàoliang de túhuà.", indonesian: "Di dalam buku pelajaran terdapat gambar-gambar yang indah." },
        { hanzi: "我每天认真阅读中文书。", pinyin: "Wǒ měitiān rènzhēn yuèdú Zhōngwén shū.", indonesian: "Saya setiap hari membaca buku Mandarin dengan tekun." },
        { hanzi: "读书让我学到了许多知识。", pinyin: "Dúshū ràng wǒ xuédào le xǔduō zhīshi.", indonesian: "Membaca buku membuatku mempelajari banyak ilmu pengetahuan." }
      ],
      vocab: [
        { hanzi: "这", pinyin: "zhè", meaning: "ini", strokes: 7, strokeOrder: ["点", "横", "撇", "点", "点", "横折折撇", "捺"], radical: "辶" },
        { hanzi: "是", pinyin: "shì", meaning: "adalah", strokes: 9, strokeOrder: ["竖", "横折", "横", "横", "横", "竖", "横", "撇", "捺"], radical: "日" },
        { hanzi: "那", pinyin: "nà", meaning: "itu", strokes: 6, strokeOrder: ["横折钩", "横", "横", "撇", "横折折折钩", "竖"], radical: "阝" },
        { hanzi: "书", pinyin: "shū", meaning: "buku", strokes: 4, strokeOrder: ["横折", "横折钩", "竖", "点"], radical: "乙" },
        { hanzi: "包", pinyin: "bāo", meaning: "tas / membungkus", strokes: 5, strokeOrder: ["撇", "横折钩", "横折", "横", "竖弯钩"], radical: "勹" }
      ]
    },
    {
      unit: 6, title: "第6课 这是谁的铅笔", pinyin: "Zhè shì shéi de qiānbǐ", meaning: "Ini Pensil Siapa",
      sentences: [
        { hanzi: "这是谁的铅笔？", pinyin: "Zhè shì shéi de qiānbǐ?", indonesian: "Ini pensil milik siapa?" },
        { hanzi: "这是小华的铅笔。", pinyin: "Zhè shì Xiǎohuá de qiānbǐ.", indonesian: "Ini adalah pensil milik Xiaohua." },
        { hanzi: "桌子上还有一块橡皮和一把尺子。", pinyin: "Zhuōzi shàng hái yǒu yí kuài xiàngpí hé yì bǎ chǐzi.", indonesian: "Di atas meja masih ada sebuah penghapus dan sebuah penggaris." },
        { hanzi: "用完文具要放进笔盒里。", pinyin: "Yòng wán wénjù yào fàng jìn bǐhé lǐ.", indonesian: "Setelah memakai alat tulis harus dimasukkan ke dalam kotak pensil." },
        { hanzi: "好习惯从小养成。", pinyin: "Hǎo xíguàn cóng xiǎo yǎngchéng.", indonesian: "Kebiasaan yang baik dibina sejak usia dini." }
      ],
      vocab: [
        { hanzi: "谁", pinyin: "shéi", meaning: "siapa", strokes: 10, strokeOrder: ["点", "横折提", "撇", "竖", "点", "横", "横", "横", "竖", "横"], radical: "讠" },
        { hanzi: "铅笔", pinyin: "qiānbǐ", meaning: "pensil", strokes: 10, strokeOrder: ["撇", "横", "横", "横", "竖提", "撇", "横撇", "横", "竖", "横"], radical: "钅" },
        { hanzi: "尺子", pinyin: "chǐzi", meaning: "penggaris", strokes: 4, strokeOrder: ["横折", "横", "撇", "点"], radical: "尸" },
        { hanzi: "橡皮", pinyin: "xiàngpí", meaning: "penghapus karet", strokes: 15, strokeOrder: ["横", "竖", "撇", "点", "撇", "竖", "横折", "横", "横", "横", "撇", "竖提", "撇", "捺"], radical: "木" }
      ]
    },
    {
      unit: 7, title: "第7课 我爱我的家", pinyin: "Wǒ ài wǒ de jiā", meaning: "Aku Sayang Keluargaku",
      sentences: [
        { hanzi: "我家有五口人。", pinyin: "Wǒ jiā yǒu wǔ kǒu rén.", indonesian: "Keluargaku memiliki lima orang anggota keluarga." },
        { hanzi: "有爸爸、妈妈、哥哥、妹妹和我。", pinyin: "Yǒu bàba, māma, gēge, mèimei hé wǒ.", indonesian: "Ada ayah, ibu, kakak laki-laki, adik perempuan, dan saya." },
        { hanzi: "爸爸妈妈每天关心疼爱我们。", pinyin: "Bàba māma měitiān guānxīn téng'ài wǒmen.", indonesian: "Ayah dan ibu setiap hari menyayangi dan merawat kami." },
        { hanzi: "我们是一个幸福快乐的家庭。", pinyin: "Wǒmen shì yí gè xìngfú kuàilè de jiātíng.", indonesian: "Kami adalah sebuah keluarga yang bahagia dan harmonis." },
        { hanzi: "我深深地爱着我的家！", pinyin: "Wǒ shēnshēn de ài zhe wǒ de jiā!", indonesian: "Saya sangat menyayangi keluarga rumahku!" }
      ],
      vocab: [
        { hanzi: "家", pinyin: "jiā", meaning: "rumah / keluarga", strokes: 10, strokeOrder: ["点", "点", "横钩", "横", "撇", "竖提", "撇", "撇", "撇", "捺"], radical: "宀" },
        { hanzi: "爱", pinyin: "ài", meaning: "mencintai / sayang", strokes: 10, strokeOrder: ["撇", "点", "点", "撇", "点", "横撇", "横", "撇", "横撇", "捺"], radical: "爫" },
        { hanzi: "爸爸", pinyin: "bàba", meaning: "ayah / papa", strokes: 8, strokeOrder: ["撇", "点", "撇", "捺", "横折", "竖", "横", "竖弯钩"], radical: "父" },
        { hanzi: "妈妈", pinyin: "māma", meaning: "ibu / mama", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横折", "竖折折钩", "横"], radical: "女" }
      ]
    },
    {
      unit: 8, title: "第8课 我有一只小狗", pinyin: "Wǒ yǒu yì zhī xiǎogǒu", meaning: "Aku Punya Seekor Anjing Kecil",
      sentences: [
        { hanzi: "我家里养了一只可爱的小白狗。", pinyin: "Wǒ jiālǐ yǎng le yì zhī kě'ài de xiǎo bái gǒu.", indonesian: "Di rumahku memelihara seekor anjing putih kecil yang lucu." },
        { hanzi: "它的眼睛大大的，耳朵尖尖的。", pinyin: "Tā de yǎnjīng dàdà de, ěrduo jiānjiān de.", indonesian: "Matanya besar dan telinganya tegak runcing." },
        { hanzi: "小狗摇着尾巴向我跑过来。", pinyin: "Xiǎogǒu yáo zhe wěiba xiàng wǒ pǎo guòlái.", indonesian: "Anjing kecil mengibaskan ekornya berlari ke arahku." },
        { hanzi: "放学回家，它总是第一个欢迎我。", pinyin: "Fàngxué huíjiā, tā zǒngshì dì-yī gè huānyíng wǒ.", indonesian: "Saat pulang sekolah, ia selalu yang pertama menyambutku." },
        { hanzi: "它是我们家最忠实的好朋友。", pinyin: "Tā shì wǒmen jiā zuì zhōngshí de hǎo péngyou.", indonesian: "Ia adalah sahabat paling setia di keluarga kami." }
      ],
      vocab: [
        { hanzi: "有", pinyin: "yǒu", meaning: "mempunyai / ada", strokes: 6, strokeOrder: ["横", "撇", "竖", "横折钩", "横", "横"], radical: "月" },
        { hanzi: "只", pinyin: "zhī", meaning: "ekor (kata bantu)", strokes: 5, strokeOrder: ["竖", "横折", "横", "撇", "点"], radical: "口" },
        { hanzi: "狗", pinyin: "gǒu", meaning: "anjing", strokes: 8, strokeOrder: ["撇", "弯钩", "撇", "撇", "横折钩", "竖", "横折", "横"], radical: "犭" },
        { hanzi: "小", pinyin: "xiǎo", meaning: "kecil", strokes: 3, strokeOrder: ["竖钩", "撇", "点"], radical: "小" }
      ]
    },
    {
      unit: 9, title: "第9课 今天星期几", pinyin: "Jīntiān xīngqījǐ", meaning: "Hari Ini Hari Apa",
      sentences: [
        { hanzi: "请问今天星期几？", pinyin: "Qǐngwèn jīntiān xīngqījǐ?", indonesian: "Bolehkah bertanya hari ini hari apa?" },
        { hanzi: "今天是星期一，新的一周开始了。", pinyin: "Jīntiān shì xīngqīyī, xīn de yì zhōu kāishǐ le.", indonesian: "Hari ini adalah hari Senin, minggu yang baru telah dimulai." },
        { hanzi: "明天是星期二，后天是星期三。", pinyin: "Míngtiān shì xīngqī'èr, hòutiān shì xīngqīsān.", indonesian: "Besok adalah hari Selasa, lusa adalah hari Rabu." },
        { hanzi: "星期六和星期天是快乐的周末。", pinyin: "Xīngqīliù hé xīngqītiān shì kuàilè de zhōumò.", indonesian: "Hari Sabtu dan Minggu adalah akhir pekan yang menyenangkan." },
        { hanzi: "一星期有七天，天天要珍惜时间。", pinyin: "Yì xīngqī yǒu qī tiān, tiāntiān yào zhēnxī shíjiān.", indonesian: "Satu minggu ada tujuh hari, setiap hari kita harus menghargai waktu." }
      ],
      vocab: [
        { hanzi: "今天", pinyin: "jīntiān", meaning: "hari ini", strokes: 4, strokeOrder: ["撇", "捺", "点", "横撇"], radical: "人" },
        { hanzi: "星期", pinyin: "xīngqī", meaning: "minggu / pekan", strokes: 9, strokeOrder: ["竖", "横折", "横", "横", "撇", "横", "横", "竖", "横"], radical: "日" },
        { hanzi: "明天", pinyin: "míngtiān", meaning: "besok", strokes: 8, strokeOrder: ["竖", "横折", "横", "横", "撇", "横折钩", "横", "横"], radical: "日" },
        { hanzi: "天", pinyin: "tiān", meaning: "langit / hari", strokes: 4, strokeOrder: ["横", "横", "撇", "捺"], radical: "大" }
      ]
    },
    {
      unit: 10, title: "第10课 现在几点", pinyin: "Xiànzài jǐ diǎn", meaning: "Sekarang Jam Berapa",
      sentences: [
        { hanzi: "请问现在几点钟了？", pinyin: "Qǐngwèn xiànzài jǐ diǎn zhōng le?", indonesian: "Permisi, sekarang jam berapa?" },
        { hanzi: "现在是早上八点整。", pinyin: "Xiànzài shì zǎoshang bā diǎn zhěng.", indonesian: "Sekarang adalah jam delapan pagi tepat." },
        { hanzi: "八点三十分我们要开始上中文课。", pinyin: "Bā diǎn sānshí fēn wǒmen yào kāishǐ shàng Zhōngwén kè.", indonesian: "Pukul delapan lewat tiga puluh kami mulai pelajaran Mandarin." },
        { hanzi: "中午十二点我们去餐厅吃午饭。", pinyin: "Zhōngwǔ shí'èr diǎn wǒmen qù cāntīng chī wǔfàn.", indonesian: "Pukul dua belas siang kami pergi ke kantin makan siang." },
        { hanzi: "遵守时间是一个好习惯。", pinyin: "Zūnshǒu shíjiān shì yí gè hǎo xíguàn.", indonesian: "Tepat waktu adalah kebiasaan yang sangat terpuji." }
      ],
      vocab: [
        { hanzi: "现在", pinyin: "xiànzài", meaning: "sekarang", strokes: 8, strokeOrder: ["横", "横", "竖", "提", "竖", "横折", "撇", "竖弯钩"], radical: "王" },
        { hanzi: "点", pinyin: "diǎn", meaning: "titik / jam (waktu)", strokes: 9, strokeOrder: ["竖", "横折", "横", "竖", "横", "点", "点", "点", "点"], radical: "灬" },
        { hanzi: "分", pinyin: "fēn", meaning: "menit / membagi", strokes: 4, strokeOrder: ["撇", "捺", "横折钩", "撇"], radical: "刀" },
        { hanzi: "早上", pinyin: "zǎoshang", meaning: "pagi hari", strokes: 6, strokeOrder: ["竖", "横折", "横", "横", "横", "竖"], radical: "日" }
      ]
    },
    {
      unit: 11, title: "第11课 我喜欢红色", pinyin: "Wǒ xǐhuan hóngsè", meaning: "Aku Suka Warna Merah",
      sentences: [
        { hanzi: "大自然有许多美丽的颜色。", pinyin: "Dàzìrán yǒu xǔduō měilì de yánsè.", indonesian: "Alam semesta memiliki banyak warna yang indah." },
        { hanzi: "太阳是火红色的，草地是翠绿色的。", pinyin: "Tàiyáng shì huǒhóng sè de, cǎodì shì cuìlǜ sè de.", indonesian: "Matahari berwarna merah membara, padang rumput berwarna hijau asri." },
        { hanzi: "我最喜欢热情奔放的红色。", pinyin: "Wǒ zuì xǐhuan rèqíng bēnfàng de hóngsè.", indonesian: "Saya paling menyukai warna merah yang penuh semangat." },
        { hanzi: "妹妹喜欢像蓝天一样的天蓝色。", pinyin: "Mèimei xǐhuan xiàng lántiān yíyàng de tiānlán sè.", indonesian: "Adik perempuan menyukai warna biru langit cerah." },
        { hanzi: "世界因为五彩斑斓而更美丽！", pinyin: "Shìjiè yīnwèi wǔcǎi bānlán ér gèng měilì!", indonesian: "Dunia menjadi semakin indah karena beraneka warna!" }
      ],
      vocab: [
        { hanzi: "喜欢", pinyin: "xǐhuan", meaning: "menyukai / gemar", strokes: 12, strokeOrder: ["横", "竖", "横", "竖", "横折", "横", "点", "撇", "横", "竖", "横折", "横"], radical: "口" },
        { hanzi: "红", pinyin: "hóng", meaning: "merah", strokes: 6, strokeOrder: ["撇折", "撇折", "提", "横", "竖", "横"], radical: "纟" },
        { hanzi: "绿", pinyin: "lǜ", meaning: "hijau", strokes: 11, strokeOrder: ["撇折", "撇折", "提", "横折", "横", "横", "竖钩", "点", "提", "撇", "捺"], radical: "纟" },
        { hanzi: "蓝", pinyin: "lán", meaning: "biru", strokes: 13, strokeOrder: ["横", "竖", "竖", "竖", "横折", "横", "横", "竖", "横折", "竖", "竖", "横", "横"], radical: "艹" }
      ]
    },
    {
      unit: 12, title: "第12课 我想吃米饭", pinyin: "Wǒ xiǎng chī mǐfàn", meaning: "Aku Ingin Makan Nasi",
      sentences: [
        { hanzi: "中午放学了，我的肚子有点饿。", pinyin: "Zhōngwǔ fàngxué le, wǒ de dùzi yǒudiǎn è.", indonesian: "Siang hari pulang sekolah, perutku terasa lapar." },
        { hanzi: "我想吃香喷喷的白米饭和炒青菜。", pinyin: "Wǒ xiǎng chī xiāngpēnpēn de bái mǐfàn hé chǎo qīngcài.", indonesian: "Saya ingin makan nasi putih harum dan tumis sayur segar." },
        { hanzi: "爸爸喜欢吃热腾腾的牛肉面条。", pinyin: "Bàba xǐhuan chī rèténgténg de niúròu miàntiáo.", indonesian: "Ayah suka makan mi sapi kuah yang hangat." },
        { hanzi: "妈妈做了美味可口的蒸包子。", pinyin: "Māma zuò le měiwèi kěkǒu de zhēng bāozi.", indonesian: "Ibu membuat bakpao kukus yang lezat dan gurih." },
        { hanzi: "大家多吃健康食品，身体壮壮的！", pinyin: "Dàjiā duō chī jiànkāng shípǐn, shēntǐ zhuàngzhuàng de!", indonesian: "Semua banyak makan makanan sehat, badan menjadi kuat!" }
      ],
      vocab: [
        { hanzi: "想", pinyin: "xiǎng", meaning: "ingin / berpikir", strokes: 13, strokeOrder: ["横", "竖", "撇", "点", "竖", "横折", "横", "点", "斜钩", "点", "点"], radical: "心" },
        { hanzi: "吃", pinyin: "chī", meaning: "makan", strokes: 6, strokeOrder: ["竖", "横折", "横", "撇", "横折弯钩", "横"], radical: "口" },
        { hanzi: "米饭", pinyin: "mǐfàn", meaning: "nasi putih", strokes: 6, strokeOrder: ["点", "撇", "横", "竖", "撇", "捺"], radical: "米" },
        { hanzi: "面条", pinyin: "miàntiáo", meaning: "mi / mie", strokes: 9, strokeOrder: ["横", "撇", "竖", "横折", "竖", "竖", "横", "横", "横"], radical: "面" }
      ]
    },
    {
      unit: 13, title: "第13课 这里的风景真美", pinyin: "Zhèlǐ de fēngjǐng zhēn měi", meaning: "Pemandangan di Sini Sangat Indah",
      sentences: [
        { hanzi: "周末我和家人一起去郊外散步。", pinyin: "Zhōumò wǒ hé jiārén yìqǐ qù jiāowài sànbù.", indonesian: "Akhir pekan saya dan keluarga berjalan-jalan ke luar kota." },
        { hanzi: "远处的青山高高耸立，眼前的小河清澈见底。", pinyin: "Yuǎn chù de qīngshān gāogāo sǒnglì, yǎnqián de xiǎohé qīngchè jiàn dǐ.", indonesian: "Gunung hijau di kejauhan berdiri megah, sungai di depan jernih memukau." },
        { hanzi: "草地上开满了各种各样美丽的小野花。", pinyin: "Cǎodì shàng kāi mǎn le gèzhǒng gèyàng měilì de xiǎo yěhuā.", indonesian: "Di padang rumput bermekaran aneka bunga liar kecil yang indah." },
        { hanzi: "小鸟在茂密的树林里欢快地鸣唱。", pinyin: "Xiǎoniǎo zài màomì de shùlín lǐ huānkuài de míngchàng.", indonesian: "Burung-burung bernyanyi riang gembira di hutan yang lebat." },
        { hanzi: "这里的自然风景真是美极了！", pinyin: "Zhèlǐ de zìrán fēngjǐng zhēnshì měi jí le!", indonesian: "Pemandangan alam di sini sungguh sangat indah!" }
      ],
      vocab: [
        { hanzi: "这里", pinyin: "zhèlǐ", meaning: "di sini / tempat ini", strokes: 7, strokeOrder: ["点", "横", "撇", "点", "点", "横折折撇", "捺"], radical: "辶" },
        { hanzi: "风景", pinyin: "fēngjǐng", meaning: "pemandangan alam", strokes: 9, strokeOrder: ["撇", "横折弯钩", "撇", "点", "竖", "横折", "横", "横", "点"], radical: "风" },
        { hanzi: "真", pinyin: "zhēn", meaning: "sungguh / benar-benar", strokes: 10, strokeOrder: ["横", "竖", "横折", "横", "横", "横", "横", "撇", "点"], radical: "目" },
        { hanzi: "美", pinyin: "měi", meaning: "indah / cantik", strokes: 9, strokeOrder: ["点", "撇", "横", "横", "竖", "横", "横", "撇", "捺"], radical: "羊" }
      ]
    },
    {
      unit: 14, title: "第14课 我们去公园", pinyin: "Wǒmen qù gōngyuán", meaning: "Kita Pergi ke Taman",
      sentences: [
        { hanzi: "星期六阳光灿烂，微风习习。", pinyin: "Xīngqīliù yángguāng cànlàn, wēifēng xíxí.", indonesian: "Hari Sabtu sinar mentari cerah, angin bertiup sejuk sepoi-sepoi." },
        { hanzi: "爸爸妈妈带我们一起去大公园玩。", pinyin: "Bàba māma dài wǒmen yìqǐ qù dà gōngyuán wán.", indonesian: "Ayah dan ibu mengajak kami bersama-sama bermain ke taman besar." },
        { hanzi: "公园里有高高的滑梯和有趣的秋千。", pinyin: "Gōngyuán lǐ yǒu gāogāo de huátī hé yǒuqù de qiūqiān.", indonesian: "Di dalam taman terdapat perosotan tinggi dan ayunan yang asyik." },
        { hanzi: "小朋友们在平整的草地上欢快地跑步。", pinyin: "Xiǎopéngyou men zài píngzhěng de cǎodì shàng huānkuài de pǎobù.", indonesian: "Anak-anak berlari riang gembira di padang rumput yang luas." },
        { hanzi: "我们在公园度过了无比快乐的一天。", pinyin: "Wǒmen zài gōngyuán dùguò le wúbǐ kuàilè de yì tiān.", indonesian: "Kami melewati hari yang sangat menyenangkan di taman." }
      ],
      vocab: [
        { hanzi: "去", pinyin: "qù", meaning: "pergi", strokes: 5, strokeOrder: ["横", "竖", "横", "撇折", "点"], radical: "厶" },
        { hanzi: "公园", pinyin: "gōngyuán", meaning: "taman umum", strokes: 4, strokeOrder: ["撇", "捺", "撇折", "点"], radical: "八" },
        { hanzi: "玩", pinyin: "wán", meaning: "bermain", strokes: 8, strokeOrder: ["横", "横", "竖", "提", "横", "横", "撇", "竖弯钩"], radical: "王" },
        { hanzi: "跑", pinyin: "pǎo", meaning: "berlari", strokes: 12, strokeOrder: ["竖", "横折", "横", "竖", "横", "竖", "提", "撇", "横折钩", "竖", "横折", "横"], radical: "足" }
      ]
    },
    {
      unit: 15, title: "第15课 快乐的中文课", pinyin: "Kuàilè de Zhōngwén kè", meaning: "Pelajaran Mandarin yang Menyenangkan",
      sentences: [
        { hanzi: "清脆的铃声响了，中文课开始了。", pinyin: "Qīngcuì de língshēng xiǎng le, Zhōngwén kè kāishǐ le.", indonesian: "Bel berbunyi nyaring, kelas bahasa Mandarin dimulai." },
        { hanzi: "我们大声跟老师朗读课文，声音洪亮。", pinyin: "Wǒmen dàshēng gēn lǎoshī lǎngdú kèwén, shēngyīn hóngliàng.", indonesian: "Kami mengikuti guru membaca teks pelajaran dengan suara lantang." },
        { hanzi: "老师教我们用毛笔和铅笔一笔一画写汉字。", pinyin: "Lǎoshī jiào wǒmen yòng máobǐ hé qiānbǐ yì bǐ yí huà xiě hànzì.", indonesian: "Guru mengajari kami menulis Hanzi guratan demi guratan dengan rapi." },
        { hanzi: "大家在趣味生动的互动中学会了新知识。", pinyin: "Dàjiā zài qùwèi shēngdòng de hùdòng zhōng xuéhuì le xīn zhīshi.", indonesian: "Semua murid menguasai ilmu baru melalui interaksi yang ceria." },
        { hanzi: "我们都深深喜爱生动快乐的中文课！", pinyin: "Wǒmen dōu shēnshēn xǐ'ài shēngdòng kuàilè de Zhōngwén kè!", indonesian: "Kami semua sangat menyukai pelajaran Mandarin yang asyik ini!" }
      ],
      vocab: [
        { hanzi: "快乐", pinyin: "kuàilè", meaning: "bahagia / gembira", strokes: 7, strokeOrder: ["点", "竖", "点", "横折", "横", "横", "竖"], radical: "忄" },
        { hanzi: "中文", pinyin: "Zhōngwén", meaning: "bahasa Mandarin", strokes: 4, strokeOrder: ["竖", "横折", "横", "竖"], radical: "丨" },
        { hanzi: "课", pinyin: "kè", meaning: "pelajaran / kelas", strokes: 10, strokeOrder: ["点", "横折提", "竖", "横折", "横", "横", "横", "竖", "撇", "捺"], radical: "讠" },
        { hanzi: "写", pinyin: "xiě", meaning: "menulis", strokes: 5, strokeOrder: ["点", "横钩", "横撇", "竖折折钩", "横"], radical: "冖" }
      ]
    }
  ]
};

// 2. METADATA TINGKATAN & GUIDE DINOSAURUS PER BUKU (HAN YU 1 - 12)
const BOOK_THEME_INFO = {
  1: { guide: { name: "Rexy (T-Rex Ceria)", avatar: "🦖", desc: "Rexy memandu dasar sapaan, keluarga, angka, dan warna untuk pemula SD!" }, level: "Tingkat 1 - Pemula SD (Kelas 1)" },
  2: { guide: { name: "Trishi (Triceratops Ramah)", avatar: "🦏", desc: "Trishi memandu perbandingan kata, posisi benda, cuaca, dan bagian tubuh!" }, level: "Tingkat 2 - Dasar SD (Kelas 2)" },
  3: { guide: { name: "Ptero (Pterodactyl Cerdas)", avatar: "🦅", desc: "Ptero memandu aktivitas sekolah, olahraga, seni musik, dan persahabatan!" }, level: "Tingkat 3 - Terampil SD (Kelas 3)" },
  4: { guide: { name: "Ankylo (Ankylosaurus Tangguh)", avatar: "🛡️", desc: "Ankylo memandu perbandingan, perjalanan, museum, Tembok Besar, dan musim!" }, level: "Tingkat 4 - Cakap SD (Kelas 4)" },
  5: { guide: { name: "Bronto (Brontosaurus Bijak)", avatar: "🦕", desc: "Bronto memandu dongeng fabel klasik Tiongkok dan peribahasa bijak!" }, level: "Tingkat 5 - Mahir SD (Kelas 5)" },
  6: { guide: { name: "Veloci (Velociraptor Gesit)", avatar: "🦎", desc: "Veloci memandu seni kaligrafi, opera Beijing, teh tradisional, dan wushu!" }, level: "Tingkat 6 - Mandiri SD (Kelas 6)" },
  7: { guide: { name: "Spino (Spinosaurus Gagah)", avatar: "🐊", desc: "Spino memandu teknologi modern, kereta cepat, AI cerdas, dan sains!" }, level: "Tingkat 7 - Terapan (SMP Kelas 7)" },
  8: { guide: { name: "Pachy (Pachycephalosaurus)", avatar: "🦬", desc: "Pachy memandu budi pekerti, gotong royong, integritas, dan disiplin waktu!" }, level: "Tingkat 8 - Lanjutan (SMP Kelas 8)" },
  9: { guide: { name: "Titan Master (Titanosaurus)", avatar: "🐉", desc: "Titan memandu pidato, apresiasi sastra, teks narasi, dan debat kritis!" }, level: "Tingkat 9 - Mahir Terpadu (SMP Kelas 9)" },
  10: { guide: { name: "Chrono Dino (Kronosaurus)", avatar: "⏳", desc: "Chrono memandu ekonomi global, e-commerce, dan negosiasi bisnis!" }, level: "Tingkat 10 - Pra-Lanjutan (SMA Kelas 10)" },
  11: { guide: { name: "Aero Dragon (Quetzalcoatlus)", avatar: "🦅", desc: "Aero memandu ekologi hijau, perubahan iklim, konservasi alam, dan riset ilmiah!" }, level: "Tingkat 11 - Mahir Lingkungan (SMA Kelas 11)" },
  12: { guide: { name: "Apex Emperor (Giganotosaurus)", avatar: "👑", desc: "Apex memandu filsafat, diplomasi dunia, evolusi aksara, dan penguasaan global!" }, level: "Tingkat 12 - Tingkat Tertinggi (SMA Kelas 12)" }
};

// 3. DAFTAR SILABUS UNIT RESMI BUKU 2 - 12 (15 UNIT PER BUKU)
const CURRICULUM_UNITS_REGISTRY = {
  2: [
    ["西瓜大 苹果小", "Xīguā dà, píngguǒ xiǎo", "Semangka Besar, Apel Kecil", "大", "dà", "besar", 3, ["横", "撇", "捺"], "大"],
    ["哥哥高 弟弟矮", "Gēge gāo, dìdi ǎi", "Kakak Tinggi, Adik Pendek", "高", "gāo", "tinggi", 10, ["点", "横", "竖", "横折", "横", "竖", "横折钩", "竖", "横折", "横"], "高"],
    ["我的书包在哪里", "Wǒ de shūbāo zài nǎlǐ", "Di Mana Tas Sekolahku", "在", "zài", "berada di", 6, ["横", "撇", "竖", "横", "竖", "横"], "土"],
    ["教室里有什么", "Jiàoshì lǐ yǒu shénme", "Ada Apa di Dalam Kelas", "教室", "jiàoshì", "ruang kelas", 9, ["点", "横", "点", "撇", "横", "竖", "横折", "横", "竖"], "攵"],
    ["我会说汉语", "Wǒ huì shuō Hànyǔ", "Saya Bisa Berbicara Mandarin", "说", "shuō", "berbicara", 9, ["点", "横折提", "点", "撇", "竖", "横折", "横", "撇", "竖弯钩"], "讠"],
    ["妈妈在厨房做饭", "Māma zài chúfáng zuòfàn", "Ibu Memasak di Dapur", "做饭", "zuòfàn", "memasak", 11, ["撇", "竖", "横", "竖", "竖", "横折", "横", "撇", "捺"], "亻"],
    ["爸爸去上班", "Bàba qù shàngbān", "Ayah Pergi Bekerja", "上班", "shàngbān", "bekerja kantor", 4, ["横", "竖", "点", "撇", "竖", "提"], "王"],
    ["天气怎么样", "Tiānqì zěnmeyàng", "Bagaimana Cuacanya", "天气", "tiānqì", "cuaca", 4, ["横", "横", "撇", "捺"], "大"],
    ["我要喝果汁", "Wǒ yào hē guǒzhī", "Saya Mau Minum Jus Buah", "喝", "hē", "minum", 12, ["竖", "横折", "横", "竖", "横折", "横", "横", "撇折", "撇", "横撇", "捺"], "口"],
    ["鸟儿在树上唱歌", "Niǎor zài shù shàng chànggē", "Burung Bernyanyi di Atas Pohon", "唱", "chàng", "bernyanyi", 11, ["竖", "横折", "横", "竖", "横折", "横", "横", "竖", "横折", "横", "横"], "口"],
    ["我的衣服真好看", "Wǒ de yīfu zhēn hǎokàn", "Bajuku Sangat Bagus", "衣服", "yīfu", "pakaian baju", 6, ["点", "横", "撇", "竖提", "撇", "捺"], "衣"],
    ["我们一起去动物园", "Wǒmen yìqǐ qù dòngwùyuán", "Kita Bersama ke Kebun Binatang", "动物", "dòngwù", "hewan binatang", 9, ["撇", "横", "横", "竖", "横折", "横", "撇", "横折弯钩"], "牛"],
    ["今天是我的生日", "Jīntiān shì wǒ de shēngrì", "Hari Ini Ulang Tahunku", "生日", "shēngrì", "hari ulang tahun", 5, ["撇", "横", "横", "竖", "横"], "生"],
    ["身体各部位", "Shēntǐ gè bùwèi", "Bagian-Bagian Tubuh", "身体", "shēntǐ", "tubuh jasmani", 7, ["撇", "竖", "横", "横", "横", "撇", "捺"], "身"],
    ["快乐的周末", "Kuàilè de zhōumò", "Akhir Pekan yang Bahagia", "周末", "zhōumò", "akhir pekan", 8, ["竖", "横折", "横", "竖", "横折", "横", "横", "横"], "口"]
  ],
  3: [
    ["新学期开始了", "Xīn xuéqī kāishǐ le", "Semester Baru Dimulai", "开学", "kāixué", "mulai sekolah", 4, ["横", "横", "撇", "竖"], "廾"],
    ["我们的校园", "Wǒmen de xiàoyuán", "Kampus/Sekolah Kami", "校园", "xiàoyuán", "halaman sekolah", 10, ["横", "竖", "撇", "点", "点", "横", "撇", "点", "撇", "捺"], "木"],
    ["图书馆借书", "Túshūguǎn jiè shū", "Meminjam Buku di Perpustakaan", "借", "jiè", "meminjam", 10, ["撇", "竖", "横", "竖", "竖", "横", "横", "竖", "横折", "横"], "亻"],
    ["体育课跑步", "Tǐyùkè pǎobù", "Lari di Pelajaran Olahraga", "跑", "pǎo", "berlari cepat", 12, ["竖", "横折", "横", "竖", "横", "竖", "提", "撇", "横折钩", "竖", "横折", "横"], "足"],
    ["音乐课唱歌", "Yīnyuèkè chànggē", "Bernyanyi di Pelajaran Musik", "歌", "gē", "lagu nyanyian", 14, ["横", "竖", "横折", "横", "竖", "横折", "横", "撇", "横撇", "捺"], "欠"],
    ["美术课画画", "Měishùkè huàhuà", "Menggambar di Pelajaran Seni", "画", "huà", "melukis gambar", 8, ["横", "竖", "横折", "横", "竖", "横", "竖折", "竖"], "田"],
    ["我的好朋友", "Wǒ de hǎo péngyou", "Sahabat Baikku", "朋友", "péngyou", "sahabat teman", 4, ["撇", "横折钩", "横", "横"], "月"],
    ["课间休息十分钟", "Kèjiān xiūxi shí fēnzhōng", "Istirahat Sepuluh Menit", "休息", "xiūxi", "beristirahat", 6, ["撇", "竖", "横", "竖", "撇", "捺"], "亻"],
    ["帮助同学", "Bāngzhù tóngxué", "Membantu Teman Sekelas", "帮", "bāng", "menolong bantu", 9, ["横", "横", "竖", "横", "横", "竖", "撇", "横折钩", "竖"], "巾"],
    ["学习新汉字", "Xuéxí xīn hànzì", "Mempelajari Hanzi Baru", "汉字", "hànzì", "aksara Hanzi", 5, ["点", "点", "提", "横撇", "捺"], "氵"],
    ["打扫教室", "Dǎsǎo jiàoshì", "Membersihkan Ruang Kelas", "扫", "sǎo", "menyapu bersih", 6, ["横", "竖钩", "提", "横折", "横", "横"], "扌"],
    ["老师辛苦了", "Lǎoshī xīnkǔ le", "Terima Kasih Guru yang Berjasa", "辛苦", "xīnkǔ", "berjerih payah", 7, ["点", "横", "点", "撇", "横", "横", "竖"], "辛"],
    ["朗读课文", "Lǎngdú kèwén", "Membaca Teks dengan Nyaring", "读", "dú", "membaca bersuara", 10, ["点", "横折提", "横", "竖", "横", "横撇", "点", "点", "横撇", "捺"], "讠"],
    ["讲故事比赛", "Jiǎng gùshi bǐsài", "Lomba Bercerita Mandarin", "故事", "gùshi", "cerita kisah", 6, ["横", "竖", "横折", "横", "撇", "捺"], "攵"],
    ["学期总复习", "Xuéqī zǒng fùxí", "Review Ujian Akhir Semester", "复习", "fùxí", "mengulang materi", 9, ["撇", "点", "横撇", "竖", "横折", "横", "横", "撇", "捺"], "夂"]
  ],
  4: [
    ["我比你高", "Wǒ bǐ nǐ gāo", "Saya Lebih Tinggi dari Kamu", "比", "bǐ", "dibandingkan", 4, ["横", "竖提", "撇", "竖弯钩"], "比"],
    ["坐飞机去旅行", "Zuò fēijī qù lǚxíng", "Naik Pesawat Terbang Liburan", "飞机", "fēijī", "pesawat terbang", 3, ["横折弯钩", "撇", "点"], "飞"],
    ["参观博物馆", "Cānguān bówùguǎn", "Kunjungan Edukasi Museum", "参观", "cānguān", "mengunjungi", 8, ["撇", "点", "横撇", "点", "横折", "竖", "横", "竖"], "厶"],
    ["游览长城", "Yóulǎn Chángchéng", "Wisata Sejarah Tembok Besar", "长城", "Chángchéng", "Tembok Raksasa", 4, ["撇", "横", "竖提", "捺"], "长"],
    ["四季的变化", "Sìjì de biànhuà", "Keindahan Empat Musim", "季节", "jìjié", "musim cuaca", 8, ["撇", "横", "竖", "撇", "捺", "横折", "横", "横"], "禾"],
    ["农场里的小动物", "Nóngchǎng lǐ de xiǎo dòngwù", "Hewan Lucu di Peternakan", "农场", "nóngchǎng", "peternakan asri", 6, ["点", "横撇", "竖提", "撇", "捺"], "冖"],
    ["传统节日春节", "Chuántǒng jiérì Chūnjié", "Perayaan Tahun Baru Imlek", "春节", "Chūnjié", "Festival Musim Semi", 5, ["横", "横", "横", "撇", "捺"], "日"],
    ["中秋节吃月饼", "Zhōngqiūjié chī yuèbǐng", "Festival Musim Gugur & Kue Bulan", "月饼", "yuèbǐng", "kue bulan lezat", 4, ["撇", "横折钩", "横", "横"], "月"],
    ["端午节赛龙舟", "Duānwǔjié sài lóngzhōu", "Festival Perahu Naga", "龙舟", "lóngzhōu", "perahu naga", 5, ["横", "撇", "竖弯钩", "点"], "龙"],
    ["去超市购物", "Qù chāoshì gòuwù", "Berbelanja di Supermarket", "超市", "chāoshì", "pasar swalayan", 12, ["横", "竖", "横", "竖", "横折", "横", "横", "竖钩", "撇", "点"], "走"],
    ["看病与健康", "Kànbìng yǔ jiànkāng", "Konsultasi Dokter & Kesehatan", "健康", "jiànkāng", "kebugaran sehat", 11, ["撇", "竖", "横折", "横", "竖", "横", "竖", "提", "撇", "捺"], "亻"],
    ["骑自行车去郊游", "Qí zìxíngchē qù jiāoyóu", "Bersepeda ke Luar Kota", "骑车", "qí chē", "mengayuh sepeda", 11, ["横折", "竖", "横", "横", "竖提", "点", "点", "点", "点", "横", "竖"], "马"],
    ["保护大自然", "Bǎohù dàzìrán", "Kelestarian Lingkungan Hidup", "保护", "bǎohù", "merawat menjaga", 9, ["撇", "竖", "点", "横", "撇", "竖", "横折", "横", "横"], "亻"],
    ["制作手工模型", "Zhìzuò shǒugōng móxíng", "Kreativitas Prakarya", "制作", "zhìzuò", "membuat merakit", 8, ["撇", "横", "竖", "撇", "横", "竖", "横", "竖"], "刂"],
    ["快乐的假期", "Kuàilè de jiàqī", "Liburan Ceria", "假期", "jiàqī", "masa liburan", 10, ["撇", "竖", "横折", "横", "横", "横", "竖", "横折", "撇", "捺"], "亻"]
  ],
  5: [
    ["古代寓言故事", "Gǔdài yùyán gùshi", "Fabel Klasik Kuno Penuh Hikmah", "寓言", "yùyán", "cerita fabel", 12, ["点", "点", "横钩", "撇", "竖", "横折", "横", "竖", "横折", "横", "竖", "横"], "宀"],
    ["聪明的小猴子", "Cōngming de xiǎo hóuzi", "Monyet Cerdik dan Cerdas", "聪明", "cōngming", "pintar cerdik", 12, ["横", "竖", "竖", "横", "横", "提", "点", "撇", "竖", "横折", "横", "横"], "耳"],
    ["司马光砸缸", "Sīmǎ Guāng zá gāng", "Kecerdasan Sima Guang", "勇敢", "yǒnggǎn", "pemberani tangguh", 9, ["横折", "横", "横", "撇", "点", "横折钩", "撇", "撇", "竖"], "力"],
    ["愚公移山", "Yúgōng yí shān", "Ketekunan Kakek Yu Gong", "坚持", "jiānchí", "pantang menyerah", 9, ["横", "竖", "横", "竖", "横折", "横", "竖", "横", "横"], "扌"],
    ["守株待兔", "Shǒu zhū dài tù", "Menjaga Pohon Menunggu Kelinci", "等待", "děngdài", "menanti usaha", 12, ["撇", "横", "点", "撇", "横", "点", "横", "竖", "横", "竖", "点", "点"], "竹"],
    ["掩耳盗铃", "Yǎn ěr dào líng", "Menutup Telinga Mencuri Lonceng", "欺骗", "qīpiàn", "menipu diri", 12, ["横", "竖钩", "提", "横", "竖", "竖", "横", "横", "提"], "扌"],
    ["画龙点睛", "Huà lóng diǎn jīng", "Sentuhan Terakhir Memukau", "精彩", "jīngcǎi", "sangat memukau", 14, ["点", "撇", "横", "竖", "撇", "捺", "横", "竖", "横", "竖", "横折", "横"], "米"],
    ["刻舟求剑", "Kè zhōu qiú jiàn", "Memahat Perahu Mencari Pedang", "变化", "biànhuà", "berubah dinamis", 4, ["撇", "竖", "撇", "竖弯钩"], "亻"],
    ["盲人摸象", "Mángrén mō xiàng", "Kisah Orang Buta Meraba Gajah", "全面", "quánmiàn", "menyeluruh", 6, ["撇", "捺", "横", "横", "竖", "横"], "人"],
    ["揠苗助长", "Yà miáo zhù zhǎng", "Menarik Bibit Membantu Tumbuh", "规律", "guīlǜ", "hukum alam", 10, ["撇", "竖", "横折", "横", "横", "撇", "横撇", "捺"], "见"],
    ["狐假虎威", "Hú jiǎ hǔ wēi", "Rubah Meminjam Wibawa Harimau", "借用", "jièyòng", "memanfaatkan", 10, ["撇", "竖", "横", "竖", "竖", "横", "横", "竖", "横折", "横"], "亻"],
    ["亡羊补牢", "Wáng yáng bǔ láo", "Memperbaiki Kandang Segera", "改正", "gǎizhèng", "segera membenahi", 7, ["横折", "横", "竖提", "撇", "横", "撇", "捺"], "攵"],
    ["塞翁失马", "Sài wēng shī mǎ", "Hikmah di Balik Musibah", "福祸", "fúhuò", "rezeki dan hikmah", 13, ["点", "横撇", "竖", "点", "横", "竖", "横折", "横", "横", "竖", "横折", "横", "横"], "礻"],
    ["自相矛盾", "Zì xiāng máodùn", "Kontradiksi Tombak dan Perisai", "矛盾", "máodùn", "kontradiksi silang", 5, ["撇", "竖", "横折", "横", "横"], "矛"],
    ["井底之蛙", "Jǐng dǐ zhī wā", "Katak di Dasar Sumur", "眼界", "yǎnjiè", "cakrawala pandang", 11, ["竖", "横折", "横", "横", "横", "竖", "横折", "横", "竖", "撇", "捺"], "目"]
  ],
  6: [
    ["中国的传统艺术", "Zhōngguó de chuántǒng yìshù", "Seni Tradisional Tiongkok", "艺术", "yìshù", "karya seni", 6, ["横", "竖", "撇", "点", "横折钩", "点"], "艹"],
    ["京剧脸谱", "Jīngjù liǎnpǔ", "Topeng Karakter Opera Beijing", "戏曲", "xìqǔ", "seni drama pentas", 6, ["横撇", "点", "撇", "捺", "横", "竖弯钩"], "又"],
    ["中国书法与文房四宝", "Zhōngguó shūfǎ yǔ wénfángsìbǎo", "Kaligrafi dan Empat Pusaka Tinta", "书法", "shūfǎ", "seni kaligrafi", 4, ["横折", "横折钩", "竖", "点"], "乙"],
    ["剪纸艺术", "Jiǎnzhǐ yìshù", "Seni Memotong Kertas Hias", "剪纸", "jiǎnzhǐ", "seni gunting kertas", 11, ["点", "撇", "横", "竖", "横折", "横", "横", "竖", "撇", "捺", "竖"], "刀"],
    ["中国茶文化", "Zhōngguó chá wénhuà", "Upacara Minum Teh Tradisional", "茶道", "chádào", "seni seduh teh", 9, ["横", "竖", "竖", "撇", "捺", "横", "竖钩", "撇", "捺"], "艹"],
    ["陶艺制作", "Táoyì zhìzuò", "Seni Gerabah Keramik Tanah Liat", "陶瓷", "táocí", "keramik porselen", 11, ["撇", "横折钩", "横", "横", "撇", "横折钩", "竖", "横", "竖", "横", "点"], "阝"],
    ["传统民乐演奏", "Chuántǒng mínyuè yǎnzòu", "Alat Musik Tradisional Guzheng & Erhu", "古筝", "gǔzhēng", "kecapi guzheng", 5, ["横", "竖", "横折", "横", "竖"], "口"],
    ["武术与太极拳", "Wǔshù yǔ tàijíquán", "Seni Bela Diri Wushu & Tai Chi", "太极", "tàijí", "senam tai chi", 4, ["横", "撇", "捺", "点"], "大"],
    ["传统建筑与故宫", "Chuántǒng jiànzhù yǔ Gùgōng", "Arsitektur Kota Terlarang", "建筑", "jiànzhù", "arsitektur megah", 9, ["横折", "横", "横", "竖", "横", "点", "横折折撇", "捺"], "廴"],
    ["丝绸之路传奇", "Sīchóu zhī lù chuánqí", "Jalur Sutra Kuno Penghubung Benua", "丝绸", "sīchóu", "kain sutra", 12, ["撇折", "撇折", "提", "撇折", "撇折", "提"], "纟"],
    ["兵马俑的奇迹", "Bīngmǎyǒng de qíjì", "Keajaiban Patung Terakota", "奇迹", "qíjì", "mukjizat karya", 8, ["横", "撇", "捺", "竖", "横折", "横", "竖", "横"], "大"],
    ["传统节气文化", "Chuántǒng jiéqi wénhuà", "24 Musim Kalender Surya Kuno", "节气", "jiéqi", "titik musim surya", 5, ["横", "竖", "竖", "横折钩", "竖"], "艹"],
    ["十二生肖的故事", "Shí'èr shēngxiào de gùshi", "Legenda Urutan 12 Shio", "生肖", "shēngxiào", "zodiak shio", 5, ["撇", "横", "横", "竖", "横"], "生"],
    ["传统美食与饺子", "Chuántǒng měishí yǔ jiǎozi", "Kuliner Tradisional Jiaozi / Pangsit", "美食", "měishí", "hidangan lezat", 9, ["点", "撇", "横", "横", "竖", "横", "横", "撇", "捺"], "羊"],
    ["文化交流的桥梁", "Wénhuà jiāoliú de qiáoliáng", "Jembatan Persahabatan Bangsa", "交流", "jiāoliú", "berinteraksi akrab", 6, ["点", "横", "撇", "点", "撇", "捺"], "亠"]
  ],
  7: [
    ["现代科技与生活", "Xiàndài kējì yǔ shēnghuó", "Sains dan Teknologi Modern", "科技", "kējì", "sains teknologi", 9, ["撇", "横", "竖", "撇", "点", "点", "点", "横撇", "捺"], "禾"],
    ["高铁与中国速度", "Gāotiě yǔ Zhōngguó sùdù", "Kereta Cepat Menembus Kota", "速度", "sùdù", "kecepatan tinggi", 10, ["点", "横", "竖", "横折", "横", "竖", "横折钩", "竖", "横折", "横"], "辶"],
    ["智能手机的应用", "Zhìnéng shǒujī de yìngyòng", "Aplikasi Smartphone Pintar", "智能", "zhìnéng", "pintar cerdas", 12, ["竖", "横折", "横", "横", "撇", "横", "横", "竖", "横"], "日"],
    ["人工智能探索", "Réngōng zhìnéng tànsuǒ", "Kecerdasan Buatan AI Masa Depan", "算法", "suànfǎ", "algoritma nalar", 8, ["撇", "横", "点", "撇", "横", "点", "竖", "横折"], "竹"],
    ["太空探索与航天", "Tàikōng tànsuǒ yǔ hángtiān", "Penjelajahan Antariksa dan Roket", "探索", "tànsuǒ", "menjelajah semesta", 8, ["横", "竖钩", "提", "点", "点", "横钩", "撇", "点"], "扌"],
    ["太阳能与清洁能源", "Tàiyángnéng yǔ qīngjié néngyuán", "Energi Matahari Ramah Lingkungan", "能源", "néngyuán", "sumber energi", 10, ["点", "点", "提", "横", "撇", "竖", "横折", "横", "横", "横"], "氵"],
    ["机器人在生活中的应用", "Jīqìrén zài shēnghuó zhōng de yìngyòng", "Robotik Pembantu Aktivitas", "服务", "fúwù", "melayani sigap", 8, ["撇折", "撇折", "提", "撇", "横撇", "捺"], "纟"],
    ["互联网与现代通信", "Hùliánwǎng yǔ xiàndài tōngxìn", "Jaringan Internet Global", "连接", "liánjiē", "menghubungkan dunia", 10, ["横", "竖", "横折", "横", "竖", "提", "点", "横折折撇", "捺"], "辶"],
    ["3D打印技术", "Sān-D dǎyìn jìshù", "Teknologi Cetak Dimensi Tiga 3D", "创新", "chuàngxīn", "kreasi terobosan", 6, ["点", "横", "点", "撇", "横", "横", "竖"], "刂"],
    ["生物科技与基因", "Shēngwù kējì yǔ jīyīn", "Bioteknologi dan Genetik", "生命", "shēngmìng", "kehidupan bernilai", 5, ["撇", "横", "横", "竖", "横"], "生"],
    ["虚拟现实VR体验", "Xūnǐ xiànshí VR tǐyàn", "Dunia Virtual Reality Memukau", "体验", "tǐyàn", "merasakan langsung", 7, ["撇", "竖", "横", "横", "横", "撇", "捺"], "亻"],
    ["自动驾驶汽车", "Zìdòng jiàshǐ qìchē", "Mobil Otonom Tanpa Sopir", "安全", "ānquán", "keselamatan terjamin", 6, ["点", "点", "横钩", "撇", "横撇", "横"], "宀"],
    ["智能家居系统", "Zhìnéng jiājū xìtǒng", "Sistem Rumah Pintar Terpadu", "舒适", "shūshì", "nyaman tentram", 8, ["撇", "竖", "横", "竖", "横", "竖折", "点"], "舌"],
    ["大数据与云计算", "Dà shùjù yǔ yún jìsuàn", "Big Data & Cloud Computing", "分析", "fēnxī", "menganalisis data", 8, ["撇", "捺", "横折钩", "撇", "横", "竖", "撇", "捺"], "刀"],
    ["走向未来科技", "Zǒuxiàng wèilái kējì", "Menyambut Era Kemajuan", "未来", "wèilái", "masa depan cerah", 4, ["横", "横", "竖", "撇", "捺"], "木"]
  ],
  8: [
    ["礼貌交往与尊重沟通", "Lǐmào jiāowǎng yǔ zūnzhòng gōutōng", "Sopan Santun dalam Pergaulan", "尊重", "zūnzhòng", "menghormati sesama", 12, ["点", "横", "点", "撇", "横", "竖", "横折", "横", "横", "横", "竖", "点"], "寸"],
    ["团队合作创造辉煌", "Tuánduì hézuò chuàngzào huīhuáng", "Kekuatan Gotong Royong", "合作", "hézuò", "kerjasama kompak", 6, ["撇", "横", "竖", "横折", "横"], "口"],
    ["诚实守信立身之本", "Chéngshí shǒuxìn lìshēn zhī běn", "Menjaga Kejujuran dan Integritas", "信用", "xìnyòng", "kepercayaan amanah", 9, ["撇", "竖", "点", "横", "横", "横", "竖", "横"], "亻"],
    ["坚持不懈战胜困难", "Jiānchí búxiè zhànshèng kùnnan", "Ketekunan Melompati Rintangan", "克服", "kèfú", "mengatasi tantangan", 7, ["横", "竖", "横", "竖", "横折", "横", "竖弯钩"], "十"],
    ["热心志愿关爱社会", "Rèxīn zhìyuàn guān'ài shèhuì", "Aksi Relawan Membantu Sesama", "奉献", "fèngxiàn", "berdedikasi tulus", 8, ["横", "横", "横", "撇", "捺", "横", "竖"], "大"],
    ["百善孝为先感恩父母", "Bǎi shàn xiào wéi xiān gǎn'ēn fùmǔ", "Bakti Menyayangi Orang Tua", "孝敬", "xiàojìng", "berbakti tulus", 7, ["横", "竖", "横", "撇", "竖钩", "撇", "点"], "耂"],
    ["勇敢面对生活挑战", "Yǒnggǎn miànduì shēnghuó tiǎozhàn", "Keberanian Menghadapi Ujian", "坚强", "jiānqiáng", "tangguh kuat", 11, ["横", "竖", "横", "竖", "横折", "横", "竖", "横", "横", "横", "竖"], "土"],
    ["学会包容与化解矛盾", "Xuéhuì bāoróng yǔ huàjiě máodùn", "Kelapangan Hati dan Memaafkan", "宽容", "kuānróng", "lapang dada bijak", 10, ["点", "点", "横钩", "横", "竖", "竖", "横", "横折", "横", "撇"], "宀"],
    ["科学管理宝贵时间", "Kēxué guǎnlǐ bǎoguì shíjiān", "Menghargai Waktu dan Disiplin", "效率", "xiàolǜ", "efisiensi tinggi", 7, ["点", "横", "撇", "点", "横撇", "捺"], "亠"],
    ["责任担当做合格公民", "Zérèn dāndāng zuò hégé gōngmín", "Rasa Tanggung Jawab Moral", "担当", "dāndāng", "berani memikul", 8, ["横", "竖钩", "提", "竖", "横折", "横", "横", "横"], "扌"],
    ["培养独立思辨能力", "Péiyǎng dúlì sībiàn nénglì", "Berpikir Kritis dan Mandiri", "思考", "sīkǎo", "menelaah kritis", 6, ["竖", "横折", "横", "竖", "横", "点", "斜钩", "点", "点"], "心"],
    ["保持身心阳光健康", "Bǎochí shēnxīn yángguāng jiànkāng", "Kebugaran Jasmani dan Rohani", "健康", "jiànkāng", "sehat bugar", 11, ["撇", "竖", "横折", "横", "竖", "横", "竖", "提", "撇", "捺"], "亻"],
    ["立下远大人生理想", "Lì xià yuǎndà rénshēng lǐxiǎng", "Menetapkan Visi Hidup Mulia", "追求", "zhuīqiú", "meraih impian", 9, ["横", "竖", "横", "撇", "竖", "横折", "横", "点", "横折折撇", "捺"], "辶"],
    ["包容互鉴多元文化", "Bāoróng hùjiàn duōyuán wénhuà", "Toleransi Antar Suku dan Budaya", "多元", "duōyuán", "keberagaman kaya", 6, ["撇", "横撇", "点", "撇", "横撇", "点"], "夕"],
    ["全面发展做时代栋梁", "Quánmiàn fāzhǎn zuò shídài dòngliáng", "Generasi Penerus Berprestasi", "优秀", "yōuxiù", "berbakat unggul", 6, ["撇", "竖", "横", "竖", "撇", "捺"], "亻"]
  ],
  9: [
    ["古代寓言的深层启示", "Gǔdài yùyán de shēncéng qǐshì", "Pesan Moral Fabel Klasik", "启示", "qǐshì", "petunjuk hikmah", 7, ["点", "横", "撇", "点", "竖", "横折", "横"], "口"],
    ["品读中外文学名著", "Pǐndú zhōngwài wénxué míngzhù", "Apresiasi Karya Sastra Dunia", "经典", "jīngdiǎn", "karya agung", 8, ["撇折", "撇折", "提", "横", "竖", "横", "竖", "横"], "纟"],
    ["唐诗宋词的优美韵律", "Tángshī Sòngcí de yōuměi yùnlǜ", "Keindahan Syair Puisi Klasik", "韵律", "yùnlǜ", "ritme rima indah", 9, ["点", "横", "点", "撇", "竖", "横折", "横", "横", "撇"], "音"],
    ["记叙文的情感表达", "Jìxùwén de qínggǎn biǎodá", "Menulis Karangan Narasi", "叙述", "xùshù", "alur cerita", 9, ["横折", "横", "横", "竖提", "撇", "捺", "点", "横折折撇", "捺"], "又"],
    ["说明文的条理与逻辑", "Shuōmíngwén de tiáolǐ yǔ luóji", "Struktur Teks Eksplanasi Sains", "逻辑", "luóji", "nalar logis", 8, ["点", "点", "提", "横", "竖", "横折", "横", "撇", "捺"], "氵"],
    ["议论文的立论与论证", "Yìlùnwén de lìlùn yǔ lùnzhèng", "Menyusun Argumen Logis", "论点", "lùndiǎn", "pokok gagasan", 6, ["点", "横折提", "撇", "捺", "横", "竖"], "讠"],
    ["公众演讲的语言艺术", "Gōngzhòng yǎnjiǎng de yǔyán yìshù", "Seni Pidato di Depan Publik", "演讲", "yǎnjiǎng", "orasi pidato", 14, ["点", "点", "提", "横折", "横", "横", "竖", "横", "竖", "提"], "氵"],
    ["校园辩论赛的思辨交锋", "Xiàoyuán biànlùnsài de sībiàn jiāofēng", "Teknik Debat dan Tanggapan", "辩驳", "biànbó", "membantah logis", 14, ["点", "横", "点", "撇", "横", "横", "竖", "撇", "点", "横", "竖"], "辛"],
    ["新闻采写的客观真实", "Xīnwén cǎixiě de kèguān zhēnshí", "Jurnalistik Berita Terpercaya", "报道", "bàodào", "liputan fakta", 12, ["横", "竖", "横", "竖", "横折", "横", "竖", "横", "横", "横"], "扌"],
    ["话剧表演与舞台台词", "Huàjù biǎoyǎn yǔ wǔtái táicí", "Seni Peran Drama dan Teater", "舞台", "wǔtái", "panggung teater", 6, ["横", "竖", "提", "撇折", "点", "竖"], "土"],
    ["现代优美抒情散文", "Xiàndài yōuměi shūqíng sǎnwén", "Menikmati Prosa Penuh Makna", "散文", "sǎnwén", "prosa liris", 12, ["横", "竖", "竖", "横", "竖", "横折", "横", "撇", "捺"], "攵"],
    ["读书笔记与提炼总结", "Dúshū bǐjì yǔ tíliàn zǒngjié", "Merangkum Intisari Bacaan", "总结", "zǒngjié", "kesimpulan utuh", 8, ["撇折", "撇折", "提", "横", "竖", "横折", "横", "横"], "纟"],
    ["创意广告文案设计", "Chuàngyì guǎnggào wén'àn shèjì", "Kreativitas Slogan Promosi", "创意", "chuàngyì", "gagasan segar", 9, ["点", "横", "点", "撇", "横", "横", "竖", "撇", "捺"], "刂"],
    ["人物深度访谈技巧", "Rénwù shēndù fǎngtán jìqiǎo", "Wawancara Tokoh Inspiratif", "访谈", "fǎngtán", "bincang mendalam", 6, ["点", "横折提", "点", "横", "撇", "捺"], "讠"],
    ["文学创作的灵感源泉", "Wénxué chuàngzuò de línggǎn yuánquán", "Inspirasi Menulis Cerita", "灵感", "línggǎn", "ilham karya cipta", 11, ["横折", "点", "点", "横", "竖", "横折", "横", "横", "竖钩", "点"], "彐"]
  ],
  10: [
    ["经济全球化与合作共赢", "Jīngjì quánqiúhuà yǔ hézuò gòngyíng", "Globalisasi dan Perdagangan Bebas", "贸易", "màoyì", "perdagangan global", 12, ["点", "横", "点", "撇", "横", "竖", "横折", "横", "竖", "横", "撇", "点"], "贝"],
    ["国际商务沟通与谈判", "Guójì shāngwù gōutōng yǔ tánpàn", "Negosiasi Bisnis Multinasional", "谈判", "tánpàn", "perundingan kontrak", 10, ["点", "横折提", "点", "撇", "横", "横", "竖", "横折", "横", "横"], "讠"],
    ["高新科技与产业升级", "Gāoxīn kējì yǔ chǎnyè shēngjí", "Transformasi Industri Cerdas", "产业", "chǎnyè", "sektor industri", 8, ["点", "横", "点", "撇", "横", "竖", "撇", "捺"], "立"],
    ["青少年财商与储蓄规划", "Qīngshàonián cái shāng yǔ chǔxù guīhuà", "Literasi Keuangan dan Investasi", "储蓄", "chǔxù", "tabungan berencana", 12, ["撇", "竖", "点", "横", "撇", "竖", "横折", "横", "横", "竖", "横折", "横"], "亻"],
    ["知识产权保护与创新", "Zhīshi chǎnquán bǎohù yǔ chuàngxīn", "Hak Paten dan Perlindungan Karya", "专利", "zhuānlì", "hak paten inovasi", 4, ["横", "竖", "撇", "捺"], "寸"],
    ["电子商务与数字支付", "Diànzǐ shāngwù yǔ shùzì zhìfù", "Belanja Online & Transaksi Digital", "支付", "zhìfù", "pembayaran non-tunai", 4, ["横", "撇", "竖提", "捺"], "支"],
    ["青年创业与社会价值", "Qīngnián chuàngyè yǔ shèhuì jiàzhí", "Kewirausahaan dan Kepedulian", "创业", "chuàngyè", "merintis usaha", 9, ["点", "横", "点", "撇", "横", "横", "竖", "撇", "捺"], "刂"],
    ["企业社会责任与担当", "Qǐyè shèhuì zérèn yǔ dāndāng", "Tanggung Jawab Sosial CSR", "责任", "zérèn", "tanggung jawab mulia", 11, ["横", "竖", "横", "竖", "横折", "横", "竖", "横折", "横", "撇", "捺"], "贝"],
    ["全球物流与供应链运作", "Quánqiú wùliú yǔ gōngyìngliàn yùnzuò", "Logistik & Rantai Pasok Modern", "运输", "yùnshū", "pengiriman barang", 9, ["横", "折", "竖", "横", "竖", "横折", "横", "横", "竖钩"], "车"],
    ["跨国团队协同与领导力", "Kuàguó tuánduì xiétóng yǔ lǐngdǎolì", "Kepemimpinan Tim Multikultural", "领导", "lǐngdǎo", "memimpin visioner", 11, ["点", "横", "竖", "横折", "横", "撇", "横折钩", "横", "横", "竖", "横"], "页"],
    ["品牌建设与市场推广", "Pǐnpái jiànshè yǔ shìchǎng tuīguǎng", "Branding & Strategi Pemasaran", "营销", "yíngxiāo", "pemasaran efektif", 12, ["点", "横", "点", "撇", "竖", "横折", "横", "横", "竖", "横折", "横", "横"], "口"],
    ["绿色经济与可持续发展", "Lǜsè jīngjì yǔ kěchíxù fāzhǎn", "Ekonomi Hijau dan Keberlanjutan", "低碳", "dītàn", "ramah lingkungan", 7, ["撇", "竖", "撇", "横折钩", "点", "横", "竖弯钩"], "亻"],
    ["国际会展与贸易洽谈", "Guójì huìzhǎn yǔ màoyì qiàtán", "Pameran Dagang Internasional", "展会", "zhǎnhuì", "pameran ekspo", 10, ["横折", "横", "撇", "横", "竖", "竖", "横", "横", "撇", "捺"], "尸"],
    ["现代金融与风险防范", "Xiàndài jīnróng yǔ fēngxiǎn fángfàn", "Manajemen Risiko Finansial", "投资", "tóuzī", "investasi bijak", 7, ["横", "竖钩", "提", "撇", "横撇", "捺"], "扌"],
    ["把握未来商业新机遇", "Bǎwò wèilái shāngyè xīn jīyù", "Menyambut Peluang Bisnis Baru", "机遇", "jīyù", "kesempatan emas", 10, ["横", "竖", "撇", "捺", "横折钩", "撇", "点", "横折折撇", "捺"], "木"]
  ],
  11: [
    ["全球生态危机与环境保护", "Quánqiú shēngtài wēijī yǔ huánjìng bǎohù", "Krisis Ekologi Global & Konservasi", "生态", "shēngtài", "ekosistem alam", 5, ["撇", "横", "横", "竖", "横"], "生"],
    ["生物多样性与物种保护", "Shēngwù duōyàngxìng yǔ wùzhǒng bǎohù", "Keanekaragaman Hayati", "物种", "wùzhǒng", "spesies flora fauna", 8, ["撇", "横", "横", "竖", "横折", "横", "撇", "横折弯钩"], "牛"],
    ["气候变化与碳中和目标", "Qìhòu biànhuà yǔ tànzhōnghé mùbiāo", "Perubahan Iklim dan Nol Karbon", "减排", "jiǎnpái", "reduksi emisi", 9, ["点", "点", "提", "横", "撇", "横折钩", "竖", "横折", "横"], "氵"],
    ["海洋生态保护与蓝色经济", "Hǎiyáng shēngtài bǎohù yǔ lánsè jīngjì", "Kelestarian Ekosistem Laut", "海洋", "hǎiyáng", "samudra luas", 10, ["点", "点", "提", "撇", "横", "竖", "撇", "点", "竖", "横折"], "氵"],
    ["森林保护与绿色家园", "Sēnlín bǎohù yǔ lǜsè jiāyuán", "Pelestarian Hutan Paru Dunia", "植树", "zhíshù", "penghijauan pohon", 12, ["横", "竖", "撇", "点", "横", "竖", "竖", "横", "横", "竖", "横", "横"], "木"],
    ["极地探险与科学考察", "Jídì tànxiǎn yǔ kēxué kǎochá", "Ekspedisi Ilmiah Kutub Bumi", "冰川", "bīngchuān", "lapisan gletser", 6, ["点", "提", "撇", "竖", "撇", "捺"], "冫"],
    ["荒漠化治理与生态修复", "Huāngmòhuà zhìlǐ yǔ shēngtài xiūfù", "Restorasi Gurun dan Penghijauan", "治理", "zhìlǐ", "penataan kembali", 8, ["点", "点", "提", "点", "横", "竖", "撇", "捺"], "氵"],
    ["城市绿色低碳可持续发展", "Chéngshì lǜsè dītàn kěchíxù fāzhǎn", "Kota Ramah Lingkungan", "宜居", "yíjū", "layak huni nyaman", 8, ["点", "点", "横钩", "横", "竖", "横折", "横", "横"], "宀"],
    ["水资源保护与节约利用", "Shuǐ zīyuán bǎohù yǔ jiéyuē lìyòng", "Konservasi Sumber Daya Air", "节约", "jiéyuē", "hemat bijaksana", 5, ["横", "竖", "竖", "横折钩", "竖"], "艹"],
    ["环保科技创新与应用", "Huánbǎo kējì chuàngxīn yǔ yìngyòng", "Inovasi Teknologi Hijau", "净化", "jìnghuà", "pemurnian udara", 8, ["点", "点", "提", "横撇", "点", "横", "竖", "横"], "氵"],
    ["青少年环保行动与倡议", "Qīngshàonián huánbǎo xíngdòng yǔ chàngyì", "Aksi Nyata Generasi Hijau", "倡议", "chàngyì", "mengajak peduli", 4, ["撇", "竖", "竖", "横折", "横", "竖", "横折", "横"], "亻"],
    ["人与自然和谐共生之道", "Rén yǔ zìrán héxié gòngshēng zhī dào", "Harmoni Manusia & Semesta", "和谐", "héxié", "keselarasan damai", 8, ["撇", "横", "竖", "撇", "点", "竖", "横折", "横"], "禾"],
    ["循环经济与零废弃生活", "Xúnhuán jīngjì yǔ língfèiqì shēnghuó", "Gaya Hidup Bebas Sampah Zero", "回收", "huíshōu", "daur ulang sampah", 6, ["竖", "横折", "竖", "横折", "横", "横"], "囗"],
    ["地球日与全球环保合作", "Dìqiúrì yǔ quánqiú huánbǎo hézuò", "Kerjasama Internasional Hari Bumi", "守护", "shǒuhù", "menjaga setia", 6, ["点", "点", "横钩", "横", "竖钩", "点"], "宀"],
    ["守护我们共同的美丽家园", "Shǒuhù wǒmen gòngtóng de měilì jiāyuán", "Menjaga Bumi Ibu Pertiwi", "家园", "jiāyuán", "tanah air bumi", 10, ["点", "点", "横钩", "横", "撇", "竖提", "撇", "撇", "撇", "捺"], "宀"]
  ],
  12: [
    ["世界文明的交流与互鉴", "Shìjiè wénmíng de jiāoliú yǔ hùjiàn", "Dialog Antar Peradaban Dunia", "文明", "wénmíng", "peradaban luhur", 4, ["点", "横", "撇", "捺"], "文"],
    ["古代丝绸之路的当代启示", "Gǔdài sīchóu zhī lù de dāngdài qǐshì", "Revitalisasi Jalur Sutra Baru", "辉煌", "huīhuáng", "kejayaan agung", 12, ["点", "撇", "横", "竖", "撇", "捺", "横折", "横", "横", "横", "竖", "横"], "光"],
    ["现代汉字演变与构字美学", "Xiàndài hànzì yǎnbiàn yǔ gòuzì měixué", "Evolusi & Estetika Hanzi", "造字", "zàozì", "pembentukan aksara", 7, ["撇", "横", "横", "竖", "点", "横折折撇", "捺"], "辶"],
    ["跨文化沟通与全球胜任力", "Kuà wénhuà gōutōng yǔ quánqiú shèngrènlì", "Kompetensi Komunikasi Global", "包容", "bāoróng", "keterbukaan jiwa", 5, ["撇", "横折钩", "横折", "横", "竖弯钩"], "勹"],
    ["国际中文教育的发展", "Guójì Zhōngwén jiàoyù de fāzhǎn", "Pengajaran Mandarin Global", "传播", "chuánbō", "menyebarkan wawasan", 12, ["撇", "竖", "点", "横", "竖", "横折", "横", "横", "竖", "横折", "横"], "亻"],
    ["文学批评与多维鉴赏", "Wénxué pīpíng yǔ duōwéi jiànshǎng", "Kritik Sastra & Analisis Makna", "洞察", "dòngchá", "pandangan tajam", 9, ["点", "点", "提", "竖", "横折", "横", "横", "横", "竖"], "氵"],
    ["跨学科融合与综合视野", "Kuà xuékē rónghé yǔ zōnghé shìyě", "Integrasi Lintas Disiplin Ilmu", "融合", "rónghé", "peleburan disiplin", 12, ["点", "点", "提", "点", "横", "撇", "横折", "竖", "横折", "横", "竖", "横"], "氵"],
    ["东方哲学与修身养性", "Dōngfāng zhéxué yǔ xiūshēn yǎngxìng", "Harmoni Jiwa & Olah Batin", "宁静", "níngjìng", "kedamaian kalbu", 5, ["点", "点", "横钩", "撇", "竖钩"], "宀"],
    ["全球治理与多边外交", "Quánqiú zhìlǐ yǔ duōbiān wàijiāo", "Diplomasi & Perdamaian Dunia", "治理", "zhìlǐ", "tata kelola dunia", 8, ["点", "点", "提", "点", "横", "竖", "撇", "捺"], "氵"],
    ["数字人文与文物数字化", "Shùzì rénwén yǔ wénwù shùzìhuà", "Digital Humanities Warisan Bangsa", "遗产", "yíchǎn", "warisan luhur", 5, ["点", "横折提", "竖", "横折", "横", "横", "横", "竖", "撇", "捺"], "讠"],
    ["现代诗歌的意象探索", "Xiàndài shīgē de yìxiàng tànsuǒ", "Eksplorasi Metafora Puisi", "意象", "yìxiàng", "simbol puisi", 13, ["点", "横", "点", "撇", "竖", "横折", "横", "横", "点", "斜钩", "点", "点"], "心"],
    ["高级辩论与逻辑闭环", "Gāojí biànlùn yǔ luóji bìhuán", "Retorika Orasi & Logika", "雄辩", "xióngbiàn", "orasi fasih berbobot", 12, ["撇", "竖", "点", "横", "横", "横", "竖", "横", "撇", "竖弯钩"], "隹"],
    ["科学哲学与认知边界", "Kēxué zhéxué yǔ rènzhī biānjiè", "Filsafat Sains & Kebenaran", "真理", "zhēnlǐ", "kebenaran ilmiah", 10, ["横", "竖", "横折", "横", "横", "横", "横", "撇", "点"], "目"],
    ["全球胜任力与青年担当", "Quánqiú shèngrènlì yǔ qīngnián dāndāng", "Kepemimpinan Generasi Muda", "卓越", "zhuóyuè", "prestasi gemilang", 12, ["竖", "横折", "横", "横", "横", "竖", "横", "横", "竖"], "十"],
    ["汉语之光连接世界大道", "Hànyǔ zhī guāng liánjiē shìjiè dàdào", "Mandarin Menghubungkan Dunia", "光明", "guāngmíng", "cahaya masa depan", 6, ["点", "撇", "横", "竖", "撇", "竖弯钩"], "儿"]
  ]
};

// 4. GENERATOR CERITA DETAIL SESUAI SILABUS UNTUK SETIAP BUKU & UNIT (180 UNIT)
function getUnitStoryData(bookId, unitId, unitTitle, unitPinyin, unitMeaning, vocabList) {
  // Jika ada cerita eksplisit di database
  if (HAN_YU_STORIES_DATABASE[bookId] && HAN_YU_STORIES_DATABASE[bookId][unitId - 1]) {
    return HAN_YU_STORIES_DATABASE[bookId][unitId - 1].sentences;
  }

  const v1 = (vocabList && vocabList[0]) ? vocabList[0] : { hanzi: "中文", pinyin: "Zhōngwén", meaning: "Mandarin" };
  const v2 = (vocabList && vocabList[1]) ? vocabList[1] : { hanzi: "学习", pinyin: "xuéxí", meaning: "belajar" };
  const v3 = (vocabList && vocabList[2]) ? vocabList[2] : { hanzi: "朋友", pinyin: "péngyou", meaning: "sahabat" };

  // Generate 5 Kalimat Narasi Alami & Ramah Anak SD per Unit
  return [
    {
      hanzi: `在今天的第${unitId}课《${unitTitle.replace(/第\d+课\s*/, '')}》学习中，老师带领大家探索精彩的中文世界。`,
      pinyin: `Zài jīntiān de dì-${unitId} kè "${unitPinyin}" xuéxí zhōng, lǎoshī dàilǐng dàjiā tànsuǒ jīngcǎi de Zhōngwén shìjiè.`,
      indonesian: `Dalam pembelajaran Unit ${unitId} "${unitMeaning}", guru membimbing murid menjelajahi dunia bahasa Mandarin yang memukau.`
    },
    {
      hanzi: `我们重点学习了核心生字‘${v1.hanzi}’（${v1.pinyin}），意思是‘${v1.meaning}’。`,
      pinyin: `Wǒmen zhòngdiǎn xuéxí le héxīn shēngzì '${v1.hanzi}' (${v1.pinyin}), yìsi shì '${v1.meaning}'.`,
      indonesian: `Kami memusatkan perhatian mempelajari kosakata '${v1.hanzi}' (${v1.pinyin}), yang bermakna '${v1.meaning}'.`
    },
    {
      hanzi: `老师用生动有趣的故事耐心指导大家：‘${v2.hanzi}’（${v2.pinyin}）要读准声调。`,
      pinyin: `Lǎoshī yòng shēngdòng yǒuqù de gùshi nàixīn zhǐdǎo dàjiā: '${v2.hanzi}' (${v2.pinyin}) yào dú zhǔn shēngdiào.`,
      indonesian: `Guru dengan cerita menarik membimbing murid membaca intonasi dan nada kosakata '${v2.hanzi}' (${v2.pinyin}) secara tepat.`
    },
    {
      hanzi: `同学们在田字格里一笔一画认真书写汉字，牢牢掌握了笔顺规则和句子结构。`,
      pinyin: `Tóngxuémen zài tiánzìgé lǐ yì bǐ yí huà rènzhēn shūxiě hànzì, láoláo zhǎngwò le bǐshùn guīzé hé jùzi jiégòu.`,
      indonesian: `Para siswa menuliskan Hanzi di kotak panduan guratan demi guratan, menguasai urutan goresan dan susunan kalimat dengan baik.`
    },
    {
      hanzi: `大家都开心地说：这一课的内容真丰富，我们每天都在快乐进步！`,
      pinyin: `Dàjiā dōu kāixīn de shuō: Zhè yí kè de nèiróng zhēn fēngfù, wǒmen měitiān dōu zài kuàilè jìnbù!`,
      indonesian: `Semua murid dengan ceria berkata: Materi pelajaran ini sangat kaya, kami setiap hari membuat kemajuan yang membanggakan!`
    }
  ];
}

// 5. GENERATOR 10 SOAL LATIHAN PILIHAN BERGANDA TIPE YCT 2 LENGKAP DENGAN AUDIO
function generateUnitQuestions(bookId, unitId, unitTitle, unitPinyin, unitMeaning, vocabList) {
  const v1 = (vocabList && vocabList[0]) ? vocabList[0] : { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "halo", strokes: 7 };
  const v2 = (vocabList && vocabList[1]) ? vocabList[1] : { hanzi: "学习", pinyin: "xuéxí", meaning: "belajar", strokes: 8 };

  return [
    // SOAL 1 (YCT 2 Tīnglì / Mendengarkan Audio)
    {
      id: `q_${bookId}_${unitId}_1`,
      type: "yct_listening",
      question: `[Tīnglì] Dengarkan rekaman audio pelan berikut, lalu pilihlah arti kata yang tepat:`,
      audioText: `${v1.hanzi}。${v1.hanzi}。`,
      options: [
        `${v1.meaning}`,
        "Berlari di lapangan sekolah",
        "Membeli buah di toko",
        "Minum air putih dingin"
      ],
      correctIndex: 0,
      explanation: `Audio menyebutkan kata '${v1.hanzi}' (${v1.pinyin}) yang berarti '${v1.meaning}'.`
    },

    // SOAL 2 (YCT 2 Pinyin & Nada)
    {
      id: `q_${bookId}_${unitId}_2`,
      type: "pinyin",
      question: `Pilihlah bacaan Pinyin dengan nada (shēngdiào) yang tepat untuk karakter '${v1.hanzi}':`,
      audioText: `Qǐng xuǎnzhé zhèngquè de pīnyīn.`,
      options: [
        v1.pinyin,
        "zàijiàn",
        "xièxie",
        "nǐ hǎo"
      ],
      correctIndex: 0,
      explanation: `Karakter '${v1.hanzi}' dilafalkan dengan Pinyin '${v1.pinyin}'.`
    },

    // SOAL 3 (YCT 2 Jumlah & Nama Guratan)
    {
      id: `q_${bookId}_${unitId}_3`,
      type: "strokes",
      question: `Berapakah jumlah goresan (bǐhuà) dari karakter '${v1.hanzi[0]}'?`,
      audioText: `${v1.hanzi[0]} zì yǒu jǐ huà?`,
      options: [
        `${v1.strokes} goresan`,
        `${v1.strokes + 2} goresan`,
        `${Math.max(2, v1.strokes - 2)} goresan`,
        `${v1.strokes + 4} goresan`
      ],
      correctIndex: 0,
      explanation: `Karakter '${v1.hanzi[0]}' tersusun dari ${v1.strokes} goresan yang rapi dan teratur.`
    },

    // SOAL 4 (YCT 2 Menyusun Kalimat - Lián Cí Chéng Jù)
    {
      id: `q_${bookId}_${unitId}_4`,
      type: "sentence_order",
      question: `Susunlah kata-kata acak berikut menjadi kalimat Mandarin yang benar: [${v1.hanzi} / 认真 / 我们]`,
      audioText: `Qǐng lián cí chéng jù.`,
      options: [
        `我们 认真 ${v1.hanzi}。`,
        `认真 我们 ${v1.hanzi}。`,
        `${v1.hanzi} 我们 认真。`,
        `认真 ${v1.hanzi} 我们。`
      ],
      correctIndex: 0,
      explanation: `Pola kalimat baku dalam bahasa Mandarin adalah Subjek (我们) + Keterangan (认真) + Predikat (${v1.hanzi}): '我们认真${v1.hanzi}。'`
    },

    // SOAL 5 (YCT 2 Melengkapi Kalimat Rumpang)
    {
      id: `q_${bookId}_${unitId}_5`,
      type: "fill_blank",
      question: `Pilihlah kosakata yang tepat untuk melengkapi kalimat berikut: "老师教大家 ___ 中文。"`,
      audioText: `Lǎoshī jiào dàjiā shénme Zhōngwén?`,
      options: [
        "学习 (xuéxí)",
        "睡觉 (shuìjiào)",
        "游泳 (yóuyǒng)",
        "跑 (pǎo)"
      ],
      correctIndex: 0,
      explanation: `Kata yang paling tepat untuk melengkapi kalimat kegiatan kelas adalah '学习' (xuéxí - belajar): '老师教大家学习中文。'`
    },

    // SOAL 6 (YCT 2 Mencocokkan Situasi & Gambar)
    {
      id: `q_${bookId}_${unitId}_6`,
      type: "picture_match",
      question: `Manakah ilustrasi gambar yang paling cocok menggambarkan tema materi '${unitTitle}'?`,
      audioText: `Nǎge túpiàn shì duì de?`,
      options: [
        `📖 Gambar siswa sekolah dasar tekun belajar materi ${v1.meaning}`,
        "🌧️ Gambar hujan deras di malam hari",
        "🛒 Keranjang belanja supermarket kosong",
        "🚪 Pintu kayu tertutup rapat"
      ],
      correctIndex: 0,
      explanation: `Ilustrasi buku dan murid belajar menggambarkan esensi tema '${unitTitle}'.`
    },

    // SOAL 7 (YCT 2 Tīnglì Percakapan Pendek)
    {
      id: `q_${bookId}_${unitId}_7`,
      type: "yct_listening",
      question: `[Tīnglì] Dengarkan percakapan singkat berikut: "A: Nǐ hǎo! B: Nǐ hǎo!" Apa yang diucapkan orang B?`,
      audioText: `Nǐ hǎo! Nǐ hǎo!`,
      options: [
        "Menjawab salam sapaan dengan ramah (Halo)",
        "Mengucapkan selamat tinggal",
        "Meminta maaf",
        "Menolak pertolongan"
      ],
      correctIndex: 0,
      explanation: `'Nǐ hǎo!' adalah sapaan ramah dalam bahasa Mandarin yang dibalas dengan 'Nǐ hǎo!'.`
    },

    // SOAL 8 (YCT 2 Radikal / Bu Shou)
    {
      id: `q_${bookId}_${unitId}_8`,
      type: "meaning",
      question: `Apakah bentuk radikal (bùshǒu) utama dari karakter '${v1.hanzi[0]}'?`,
      audioText: `Zhège zì de bùshǒu shì shénme?`,
      options: [
        `${v1.radical || '亻'}`,
        "氵 (titik air)",
        "艹 (rumput)",
        "辶 (berjalan)"
      ],
      correctIndex: 0,
      explanation: `Radikal pembentuk karakter '${v1.hanzi[0]}' adalah '${v1.radical || '亻'}'.`
    },

    // SOAL 9 (YCT 2 Dialog Tanya Jawab Sederhana)
    {
      id: `q_${bookId}_${unitId}_9`,
      type: "meaning",
      question: `Jika seseorang berkata "谢谢你 (Xièxie nǐ)", jawaban sopan yang tepat adalah:`,
      audioText: `Duìfāng shuō xièxie nǐ, nǐ zěnme huídá?`,
      options: [
        "不客气 (Bú kèqi)",
        "对不起 (Duìbuqǐ)",
        "再见 (Zàijiàn)",
        "我不去 (Wǒ bú qù)"
      ],
      correctIndex: 0,
      explanation: `Jawaban sopan untuk ungkapan '谢谢' (terima kasih) adalah '不客气' (sama-sama).`
    },

    // SOAL 10 (YCT 2 Pemahaman Cerita Unit)
    {
      id: `q_${bookId}_${unitId}_10`,
      type: "meaning",
      question: `Berdasarkan teks bacaan unit ini, apa sikap yang baik saat belajar di sekolah?`,
      audioText: `Zài xuéxiào zěnme xuéxí?`,
      options: [
        "Belajar dengan tekun, saling menyapa, dan rukun berteman",
        "Bermain sendiri dan tidak memperhatikan guru",
        "Datang terlambat ke sekolah",
        "Tidak membawa buku dan pensil"
      ],
      correctIndex: 0,
      explanation: `Pesan moral dalam setiap unit pembelajaran adalah belajar dengan tekun, sopan, dan saling tolong-menolong.`
    }
  ];
}

// 6. GENERATOR STRUKTUR DATA LENGKAP 12 BUKU (180 UNIT)
function buildFullCurriculumDatabase() {
  const books = [];

  for (let b = 1; b <= 12; b++) {
    const bookTheme = BOOK_THEME_INFO[b];
    let unitsList = [];

    if (b === 1) {
      unitsList = HAN_YU_STORIES_DATABASE[1].map((u) => {
        const sentences = u.sentences;
        return {
          id: u.unit,
          unitNumber: u.unit,
          title: u.title,
          pinyin: u.pinyin,
          meaning: u.meaning,
          lessons: [u.title],
          story: {
            title: `Cerita Han Yu 1 Unit ${u.unit}: ${u.title}`,
            hanzi: sentences.map(s => s.hanzi).join(' '),
            pinyin: sentences.map(s => s.pinyin).join(' '),
            indonesian: sentences.map(s => s.indonesian).join(' '),
            sentences: sentences
          },
          vocab: u.vocab,
          matchingPairs: u.vocab.map((v, vIdx) => ({
            id: `m_1_${u.unit}_${vIdx}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin,
            meaning: v.meaning,
            icon: ["🌟", "📚", "🎨", "⚽", "🍎", "🏡", "🦖", "🌿", "🎈", "🌈"][vIdx % 10],
            category: "kosakata"
          })),
          quizQuestions: generateUnitQuestions(1, u.unit, u.title, u.pinyin, u.meaning, u.vocab)
        };
      });
    } else {
      const unitArray = CURRICULUM_UNITS_REGISTRY[b];
      unitsList = unitArray.map((uItem, idx) => {
        const uNum = idx + 1;
        const [uTitleRaw, uPinyin, uMeaning, vHanzi, vPinyin, vMeaning, vStrokes, vStrokeOrder, vRadical] = uItem;
        const uTitle = `第${uNum}课 ${uTitleRaw}`;

        const vocabList = [
          { 
            hanzi: vHanzi, 
            pinyin: vPinyin, 
            meaning: vMeaning, 
            strokes: vStrokes, 
            strokeOrder: vStrokeOrder || ["横", "竖", "撇", "捺", "点", "提"], 
            radical: vRadical || "文" 
          },
          { 
            hanzi: "学习", 
            pinyin: "xuéxí", 
            meaning: "belajar dengan tekun", 
            strokes: 8, 
            strokeOrder: ["点", "点", "提", "撇", "点", "横钩", "竖钩", "横"], 
            radical: "子" 
          },
          { 
            hanzi: "朋友", 
            pinyin: "péngyou", 
            meaning: "sahabat teman baik", 
            strokes: 4, 
            strokeOrder: ["撇", "横折钩", "横", "横"], 
            radical: "月" 
          },
          { 
            hanzi: "大家", 
            pinyin: "dàjiā", 
            meaning: "semua orang / sekalian", 
            strokes: 3, 
            strokeOrder: ["横", "撇", "捺"], 
            radical: "大" 
          }
        ];

        const sentences = getUnitStoryData(b, uNum, uTitle, uPinyin, uMeaning, vocabList);

        return {
          id: uNum,
          unitNumber: uNum,
          title: uTitle,
          pinyin: uPinyin,
          meaning: uMeaning,
          lessons: [uTitle],
          story: {
            title: `Cerita Han Yu ${b} Unit ${uNum}: ${uTitleRaw}`,
            hanzi: sentences.map(s => s.hanzi).join(' '),
            pinyin: sentences.map(s => s.pinyin).join(' '),
            indonesian: sentences.map(s => s.indonesian).join(' '),
            sentences: sentences
          },
          vocab: vocabList,
          matchingPairs: vocabList.map((v, vIdx) => ({
            id: `m_${b}_${uNum}_${vIdx}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin,
            meaning: v.meaning,
            icon: ["🌟", "📚", "🎨", "⚽", "🍎", "🏡", "🦖", "🌿", "🎈", "🌈"][vIdx % 10],
            category: "kosakata"
          })),
          quizQuestions: generateUnitQuestions(b, uNum, uTitle, uPinyin, uMeaning, vocabList)
        };
      });
    }

    books.push({
      id: b,
      bookNumber: b,
      title: `Han Yu ${b}`,
      code: `HY-${b}`,
      level: bookTheme.level,
      dinoGuide: bookTheme.guide,
      units: unitsList
    });
  }

  return { books };
}

// Inisialisasi Database Kurikulum Lengkap
const HAN_YU_CURRICULUM = buildFullCurriculumDatabase();
window.HAN_YU_CURRICULUM = HAN_YU_CURRICULUM;

// Helper Functions
function getBookById(bookId) {
  const b = HAN_YU_CURRICULUM.books.find(x => x.id === parseInt(bookId));
  return b || HAN_YU_CURRICULUM.books[0];
}

function getUnitByBookAndUnitId(bookId, unitId) {
  const book = getBookById(bookId);
  const u = book.units.find(x => x.id === parseInt(unitId));
  return u || book.units[0];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HAN_YU_CURRICULUM, getBookById, getUnitByBookAndUnitId };
}
