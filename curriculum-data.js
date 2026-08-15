/**
 * DINO HAN YU - Curriculum Database (Han Yu 1 to 12)
 * Comprehensive vocabulary, pinyin, Indonesian translations, stroke breakdowns,
 * example sentences, reading texts, and image matching items for all 12 levels.
 */

const HANYU_DATA = {
  books: [
    {
      id: 1,
      title: "Han Yu 1 (汉语 第一册)",
      level: "Tingkat Dasar 1",
      dinoRank: "Bayi Dino (Hatchling)",
      badge: "🦖 Fosil T-Rex Cilik",
      themeColor: "#10B981",
      description: "Fondasi dasar: Salam, angka, keluarga, benda sekitar, warna, dan buah.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 你好 (Halo)",
          theme: "Salam & Perkenalan",
          dialogue: {
            speakerA: "A: 你好！(Nǐ hǎo! - Halo!)",
            speakerB: "B: 你好！(Nǐ hǎo! - Halo!)",
            speakerA2: "A: 老师好！(Lǎoshī hǎo! - Halo Guru!)",
            speakerB2: "B: 同学们好！(Tóngxuémen hǎo! - Halo anak-anak murid!)"
          },
          readingPassage: "你好！我叫小明。早上好，老师！早上好，同学们！再见！",
          readingPinyin: "Nǐ hǎo! Wǒ jiào Xiǎomíng. Zǎoshang hǎo, lǎoshī! Zǎoshang hǎo, tóngxuémen! Zàijiàn!",
          readingTranslation: "Halo! Nama saya Xiao Ming. Selamat pagi, guru! Selamat pagi, teman-teman! Sampai jumpa!",
          vocab: [
            {
              hanzi: "你",
              pinyin: "nǐ",
              tone: 3,
              meaningId: "Kamu / Anda",
              meaningEn: "You",
              strokes: 7,
              strokeNames: ["撇 (Piě)", "竖 (Shù)", "撇 (Piě)", "横撇 (Héngpiě)", "捺 (Nà)", "竖 (Shù)", "弯钩 (Wāngōu)"],
              radical: "亻(人 / Ren)",
              exampleHanzi: "你好吗？",
              examplePinyin: "Nǐ hǎo ma?",
              exampleTranslation: "Apa kabarmu?",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "👋"
            },
            {
              hanzi: "好",
              pinyin: "hǎo",
              tone: 3,
              meaningId: "Baik / Bagus",
              meaningEn: "Good / Fine",
              strokes: 6,
              strokeNames: ["撇点 (Piědiǎn)", "撇 (Piě)", "提 (Tí)", "横撇 (Héngpiě)", "弯钩 (Wāngōu)", "横 (Héng)"],
              radical: "女 (Nǚ)",
              exampleHanzi: "今天天气很好。",
              examplePinyin: "Jīntiān tiānqì hěn hǎo.",
              exampleTranslation: "Hari ini cuaca sangat bagus.",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "👍"
            },
            {
              hanzi: "老师",
              pinyin: "lǎoshī",
              tone: 31,
              meaningId: "Guru",
              meaningEn: "Teacher",
              strokes: 12,
              strokeNames: ["老: 横, 竖, 横, 撇, 撇, 竖弯钩", "师: 竖, 撇, 竖, 横折钩, 竖"],
              radical: "老 / 巾",
              exampleHanzi: "李老师好！",
              examplePinyin: "Lǐ lǎoshī hǎo!",
              exampleTranslation: "Halo Guru Li!",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "👩‍🏫"
            },
            {
              hanzi: "再见",
              pinyin: "zàijiàn",
              tone: 44,
              meaningId: "Sampai jumpa / Selamat tinggal",
              meaningEn: "Goodbye",
              strokes: 10,
              strokeNames: ["再: 横, 竖, 横折钩, 竖, 横, 横", "见: 竖, 横折, 撇, 竖弯钩"],
              radical: "冂 / 见",
              exampleHanzi: "明天再见！",
              examplePinyin: "Míngtiān zàijiàn!",
              exampleTranslation: "Sampai jumpa besok!",
              image: "assets/textbook/book_1/img_3.jpg",
              iconEmoji: "🙋‍♂️"
            },
            {
              hanzi: "早",
              pinyin: "zǎo",
              tone: 3,
              meaningId: "Pagi / Selamat pagi",
              meaningEn: "Early / Morning",
              strokes: 6,
              strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "横 (Héng)", "竖 (Shù)"],
              radical: "日 (Rì)",
              exampleHanzi: "早上好！",
              examplePinyin: "Zǎoshang hǎo!",
              exampleTranslation: "Selamat pagi!",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "🌅"
            }
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: 我爱爸爸妈妈 (Aku Sayang Ayah Ibu)",
          theme: "Keluarga Inti",
          dialogue: {
            speakerA: "A: 这是你爸爸吗？(Zhè shì nǐ bàba ma? - Apakah ini ayahmu?)",
            speakerB: "B: 是，这是我爸爸。(Shì, zhè shì wǒ bàba. - Ya, ini ayahku.)",
            speakerA2: "A: 你爱他们吗？(Nǐ ài tāmen ma? - Apakah kamu sayang mereka?)",
            speakerB2: "B: 我爱爸爸和妈妈。(Wǒ ài bàba hé māma. - Aku sayang ayah dan ibu.)"
          },
          readingPassage: "我家有五口人：爸爸、妈妈、哥哥、妹妹和我。我爱我的家！",
          readingPinyin: "Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, gēge, mèimei hé wǒ. Wǒ ài wǒ de jiā!",
          readingTranslation: "Keluargaku ada 5 orang: ayah, ibu, kakak laki-laki, adik perempuan, dan saya. Saya sayang keluarga saya!",
          vocab: [
            {
              hanzi: "爱",
              pinyin: "ài",
              tone: 4,
              meaningId: "Cinta / Sayang",
              meaningEn: "Love",
              strokes: 10,
              strokeNames: ["撇 (Piě)", "点 (Diǎn)", "点 (Diǎn)", "撇 (Piě)", "点 (Diǎn)", "横撇 (Héngpiě)", "横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "捺 (Nà)"],
              radical: "爫 (爪)",
              exampleHanzi: "我爱妈妈。",
              examplePinyin: "Wǒ ài māma.",
              exampleTranslation: "Aku sayang ibu.",
              image: "assets/textbook/book_1/img_4.jpg",
              iconEmoji: "❤️"
            },
            {
              hanzi: "爸爸",
              pinyin: "bàba",
              tone: 40,
              meaningId: "Ayah / Papa",
              meaningEn: "Father",
              strokes: 8,
              strokeNames: ["撇 (Piě)", "点 (Diǎn)", "撇 (Piě)", "捺 (Nà)", "横折 (Héngzhé)", "竖 (Shù)", "横 (Héng)", "竖弯钩 (Shùwāngōu)"],
              radical: "父 (Fù)",
              exampleHanzi: "爸爸喜欢看书。",
              examplePinyin: "Bàba xǐhuan kànshū.",
              exampleTranslation: "Ayah suka membaca buku.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "👨"
            },
            {
              hanzi: "妈妈",
              pinyin: "māma",
              tone: 10,
              meaningId: "Ibu / Mama",
              meaningEn: "Mother",
              strokes: 6,
              strokeNames: ["撇点 (Piědiǎn)", "撇 (Piě)", "横 (Héng)", "横折 (Héngzhé)", "竖折折钩 (Shùzhézhégōu)", "横 (Héng)"],
              radical: "女 (Nǚ)",
              exampleHanzi: "妈妈做饭很好吃。",
              examplePinyin: "Māma zuòfàn hěn hǎochī.",
              exampleTranslation: "Ibu memasak sangat enak.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "👩"
            },
            {
              hanzi: "家",
              pinyin: "jiā",
              tone: 1,
              meaningId: "Rumah / Keluarga",
              meaningEn: "Home / Family",
              strokes: 10,
              strokeNames: ["点", "点", "横撇", "横", "撇", "弯钩", "撇", "撇", "撇", "捺"],
              radical: "宀 (Mián)",
              exampleHanzi: "这是我的家。",
              examplePinyin: "Zhè shì wǒ de jiā.",
              exampleTranslation: "Ini adalah rumahku.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "🏡"
            },
            {
              hanzi: "我",
              pinyin: "wǒ",
              tone: 3,
              meaningId: "Saya / Aku",
              meaningEn: "I / Me",
              strokes: 7,
              strokeNames: ["撇 (Piě)", "横 (Héng)", "竖钩 (Shùgōu)", "提 (Tí)", "斜钩 (Xiégōu)", "撇 (Piě)", "点 (Diǎn)"],
              radical: "戈 (Gē)",
              exampleHanzi: "我是小学生。",
              examplePinyin: "Wǒ shì xiǎoxuéshēng.",
              exampleTranslation: "Saya adalah murid SD.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🧒"
            }
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: 这是什么 (Ini Apa?)",
          theme: "Benda & Peralatan Sekolah",
          dialogue: {
            speakerA: "A: 这是什么？(Zhè shì shénme? - Ini apa?)",
            speakerB: "B: 这是书包。(Zhè shì shūbāo. - Ini tas sekolah.)",
            speakerA2: "A: 那是什么？(Nà shì shénme? - Itu apa?)",
            speakerB2: "B: 那是中文书。(Nà shì zhōngwén shū. - Itu buku bahasa Mandarin.)"
          },
          readingPassage: "书包里有中文书、本子、铅笔和尺子。我每天带书包去学校。",
          readingPinyin: "Shūbāo lǐ yǒu zhōngwén shū, běnzi, qiānbǐ hé chǐzi. Wǒ měitiān dài shūbāo qù xuéxiào.",
          readingTranslation: "Di dalam tas ada buku Mandarin, buku tulis, pensil dan penggaris. Saya setiap hari membawa tas ke sekolah.",
          vocab: [
            {
              hanzi: "书",
              pinyin: "shū",
              tone: 1,
              meaningId: "Buku",
              meaningEn: "Book",
              strokes: 4,
              strokeNames: ["横折 (Héngzhé)", "横折钩 (Héngzhégōu)", "竖 (Shù)", "点 (Diǎn)"],
              radical: "乙 (Yǐ)",
              exampleHanzi: "我看中文书。",
              examplePinyin: "Wǒ kàn zhōngwén shū.",
              exampleTranslation: "Saya membaca buku Mandarin.",
              image: "assets/textbook/book_1/img_6.jpg",
              iconEmoji: "📖"
            },
            {
              hanzi: "书包",
              pinyin: "shūbāo",
              tone: 11,
              meaningId: "Tas Sekolah",
              meaningEn: "Schoolbag",
              strokes: 9,
              strokeNames: ["书 (4画)", "包: 撇, 横折钩, 横折, 横, 竖弯钩"],
              radical: "勹 (Bāo)",
              exampleHanzi: "这是我的新书包。",
              examplePinyin: "Zhè shì wǒ de xīn shūbāo.",
              exampleTranslation: "Ini adalah tas sekolah baru saya.",
              image: "assets/textbook/book_1/img_7.jpg",
              iconEmoji: "🎒"
            },
            {
              hanzi: "笔",
              pinyin: "bǐ",
              tone: 3,
              meaningId: "Pena / Pensil",
              meaningEn: "Pen / Pencil",
              strokes: 10,
              strokeNames: ["撇", "横", "点", "撇", "横", "点", "撇", "横", "横", "竖弯钩"],
              radical: "竹 (Zhú)",
              exampleHanzi: "我有一支笔。",
              examplePinyin: "Wǒ yǒu yī zhī bǐ.",
              exampleTranslation: "Saya punya sebatang pena.",
              image: "assets/textbook/book_1/img_8.jpg",
              iconEmoji: "✏️"
            },
            {
              hanzi: "大",
              pinyin: "dà",
              tone: 4,
              meaningId: "Besar",
              meaningEn: "Big",
              strokes: 3,
              strokeNames: ["横 (Héng)", "撇 (Piě)", "捺 (Nà)"],
              radical: "大 (Dà)",
              exampleHanzi: "大象很大。",
              examplePinyin: "Dàxiàng hěn dà.",
              exampleTranslation: "Gajah sangat besar.",
              image: "assets/textbook/book_1/img_9.jpg",
              iconEmoji: "🐘"
            },
            {
              hanzi: "小",
              pinyin: "xiǎo",
              tone: 3,
              meaningId: "Kecil",
              meaningEn: "Small",
              strokes: 3,
              strokeNames: ["竖钩 (Shùgōu)", "撇 (Piě)", "点 (Diǎn)"],
              radical: "小 (Xiǎo)",
              exampleHanzi: "小鸟很小。",
              examplePinyin: "Xiǎoniǎo hěn xiǎo.",
              exampleTranslation: "Burung kecil sangat mungil.",
              image: "assets/textbook/book_1/img_10.jpg",
              iconEmoji: "🐥"
            }
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: 苹果很好吃 (Apel Sangat Enak)",
          theme: "Buah & Makanan",
          dialogue: {
            speakerA: "A: 你喜欢吃什么？(Nǐ xǐhuan chī shénme? - Kamu suka makan apa?)",
            speakerB: "B: 我喜欢吃苹果。(Wǒ xǐhuan chī píngguǒ. - Saya suka makan apel.)",
            speakerA2: "A: 西瓜甜不甜？(Xīguā tián bu tián? - Semangka manis tidak?)",
            speakerB2: "B: 西瓜很甜！(Xīguā hěn tián! - Semangka sangat manis!)"
          },
          readingPassage: "桌子上有红苹果、黄香蕉和大西瓜。水果新鲜又好吃！",
          readingPinyin: "Zhuōzi shang yǒu hóng píngguǒ, huáng xiāngjiāo hé dà xīguā. Shuǐguǒ xīnxian yòu hǎochī!",
          readingTranslation: "Di atas meja ada apel merah, pisang kuning, dan semangka besar. Buah-buahan segar dan enak!",
          vocab: [
            {
              hanzi: "苹果",
              pinyin: "píngguǒ",
              tone: 23,
              meaningId: "Apel",
              meaningEn: "Apple",
              strokes: 16,
              strokeNames: ["苹: 艹, 8画", "果: 日, 木, 8画"],
              radical: "艹 (Cǎo)",
              exampleHanzi: "红苹果很好吃。",
              examplePinyin: "Hóng píngguǒ hěn hǎochī.",
              exampleTranslation: "Apel merah sangat enak.",
              image: "assets/textbook/book_1/img_11.jpg",
              iconEmoji: "🍎"
            },
            {
              hanzi: "西瓜",
              pinyin: "xīguā",
              tone: 11,
              meaningId: "Semangka",
              meaningEn: "Watermelon",
              strokes: 11,
              strokeNames: ["西: 横, 竖, 横折, 撇, 竖弯, 横", "瓜: 撇, 撇, 竖提, 点, 捺"],
              radical: "西 / 瓜",
              exampleHanzi: "夏天吃西瓜。",
              examplePinyin: "Xiàtiān chī xīguā.",
              exampleTranslation: "Musim panas makan semangka.",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "🍉"
            },
            {
              hanzi: "吃",
              pinyin: "chī",
              tone: 1,
              meaningId: "Makan",
              meaningEn: "Eat",
              strokes: 6,
              strokeNames: ["竖", "横折", "横", "撇", "横", "竖弯钩"],
              radical: "口 (Kǒu)",
              exampleHanzi: "我们一起吃饭。",
              examplePinyin: "Wǒmen yìqǐ chīfàn.",
              exampleTranslation: "Kita makan bersama-sama.",
              image: "assets/textbook/book_1/img_12.jpg",
              iconEmoji: "🍽️"
            },
            {
              hanzi: "水",
              pinyin: "shuǐ",
              tone: 3,
              meaningId: "Air",
              meaningEn: "Water",
              strokes: 4,
              strokeNames: ["竖钩 (Shùgōu)", "横撇 (Héngpiě)", "撇 (Piě)", "捺 (Nà)"],
              radical: "水 (Shuǐ)",
              exampleHanzi: "请喝水。",
              examplePinyin: "Qǐng hē shuǐ.",
              exampleTranslation: "Silakan minum air.",
              image: "assets/textbook/book_1/img_13.jpg",
              iconEmoji: "💧"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Han Yu 2 (汉语 第二册)",
      level: "Tingkat Dasar 2",
      dinoRank: "Triceratops Penjelajah",
      badge: "🌿 Fosil Daun Purba",
      themeColor: "#059669",
      description: "Arah mata angin, ruangan rumah, berbelanja di pasar, cuaca, dan transportasi.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 认方向 (Mengenal Arah)",
          theme: "Arah & Navigasi",
          dialogue: {
            speakerA: "A: 早晨起来，面向太阳。(Zǎochén qǐlái, miànxiàng tàiyáng. - Pagi hari bangun, menghadap matahari.)",
            speakerB: "B: 前面是东，后面是西。(Qiánmiàn shì dōng, hòumiàn shì xī. - Depan adalah Timur, belakang adalah Barat.)",
            speakerA2: "A: 左面是什么？(Zuǒmiàn shì shénme? - Sebelah kiri apa?)",
            speakerB2: "B: 左面是北，右面是南。(Zuǒmiàn shì běi, yòumiàn shì nán. - Kiri adalah Utara, kanan adalah Selatan.)"
          },
          readingPassage: "早晨太阳升起，前面是东方。傍晚太阳落下，前面是西方。东南西北四个方向真清楚！",
          readingPinyin: "Zǎochén tàiyáng shēngqǐ, qiánmiàn shì dōngfāng. Bàngwǎn tàiyáng luòxià, qiánmiàn shì xīfāng. Dōng nán xī běi sì gè fāngxiàng zhēn qīngchu!",
          readingTranslation: "Pagi hari matahari terbit, depan adalah arah Timur. Senja hari matahari terbenam, depan adalah arah Barat. Timur, Selatan, Barat, Utara, empat arah sangat jelas!",
          vocab: [
            {
              hanzi: "东",
              pinyin: "dōng",
              tone: 1,
              meaningId: "Timur",
              meaningEn: "East",
              strokes: 5,
              strokeNames: ["横", "撇折", "竖钩", "撇", "点"],
              radical: "一 (Yī)",
              exampleHanzi: "太阳从东边升起。",
              examplePinyin: "Tàiyáng cóng dōngbian shēngqǐ.",
              exampleTranslation: "Matahari terbit dari arah timur.",
              image: "assets/textbook/book_2/img_1.jpg",
              iconEmoji: "🧭"
            },
            {
              hanzi: "南",
              pinyin: "nán",
              tone: 2,
              meaningId: "Selatan",
              meaningEn: "South",
              strokes: 9,
              strokeNames: ["横", "竖", "竖", "横折钩", "点", "撇", "横", "横", "竖"],
              radical: "十 (Shí)",
              exampleHanzi: "大雁飞向南方。",
              examplePinyin: "Dàyàn fēi xiàng nánfāng.",
              exampleTranslation: "Angsa liar terbang ke arah selatan.",
              image: "assets/textbook/book_2/img_2.jpg",
              iconEmoji: "🗺️"
            },
            {
              hanzi: "西",
              pinyin: "xī",
              tone: 1,
              meaningId: "Barat",
              meaningEn: "West",
              strokes: 6,
              strokeNames: ["横", "竖", "横折", "撇", "竖弯", "横"],
              radical: "覀 (Xī)",
              exampleHanzi: "太阳从西边落下。",
              examplePinyin: "Tàiyáng cóng xībian luòxià.",
              exampleTranslation: "Matahari terbenam di arah barat.",
              image: "assets/textbook/book_2/img_3.jpg",
              iconEmoji: "🌅"
            },
            {
              hanzi: "北",
              pinyin: "běi",
              tone: 3,
              meaningId: "Utara",
              meaningEn: "North",
              strokes: 5,
              strokeNames: ["竖", "横", "提", "撇", "竖弯钩"],
              radical: "匕 (Bǐ)",
              exampleHanzi: "北京在北方。",
              examplePinyin: "Běijīng zài běifāng.",
              exampleTranslation: "Beijing berada di utara.",
              image: "assets/textbook/book_2/img_4.jpg",
              iconEmoji: "❄️"
            }
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: 我的房间 (Kamarku)",
          theme: "Perabotan Rumah",
          dialogue: {
            speakerA: "A: 你的房间真干净！(Nǐ de fángjiān zhēn gānjìng! - Kamarmu sangat bersih!)",
            speakerB: "B: 谢谢！我的桌子在窗户前。(Xièxie! Wǒ de zhuōzi zài chuānghu qián. - Terima kasih! Mejaku di depan jendela.)",
            speakerA2: "A: 床上有什么？(Chuáng shang yǒu shénme? - Ada apa di atas ranjang?)",
            speakerB2: "B: 床上有可爱的恐龙玩偶。(Chuáng shang yǒu kě'ài de kǒnglóng wán'ǒu. - Di ranjang ada boneka dinosaurus lucu.)"
          },
          readingPassage: "这是我的小房间。房间里有一张床、一张桌子和一把椅子。书架上有很多好书。",
          readingPinyin: "Zhè shì wǒ de xiǎo fángjiān. Fángjiān lǐ yǒu yī zhāng chuáng, yī zhāng zhuōzi hé yī bǎ yǐzi. Shūjià shang yǒu hěn duō hǎo shū.",
          readingTranslation: "Ini kamar kecilku. Di dalam kamar ada sebuah tempat tidur, sebuah meja, dan sebuah kursi. Di rak buku ada banyak buku bagus.",
          vocab: [
            {
              hanzi: "房间",
              pinyin: "fángjiān",
              tone: 21,
              meaningId: "Kamar / Ruangan",
              meaningEn: "Room",
              strokes: 15,
              strokeNames: ["房 (8画)", "间 (7画)"],
              radical: "户 / 门",
              exampleHanzi: "我的房间很暖和。",
              examplePinyin: "Wǒ de fángjiān hěn nuǎnhuo.",
              exampleTranslation: "Kamarku sangat hangat.",
              image: "assets/textbook/book_2/img_5.jpg",
              iconEmoji: "🛏️"
            },
            {
              hanzi: "桌子",
              pinyin: "zhuōzi",
              tone: 10,
              meaningId: "Meja",
              meaningEn: "Table / Desk",
              strokes: 13,
              strokeNames: ["桌: 10画", "子: 3画"],
              radical: "木 (Mù)",
              exampleHanzi: "桌子上放着电脑。",
              examplePinyin: "Zhuōzi shang fàngzhe diànnǎo.",
              exampleTranslation: "Di atas meja terletak komputer.",
              image: "assets/textbook/book_2/img_6.jpg",
              iconEmoji: "🪑"
            },
            {
              hanzi: "门",
              pinyin: "mén",
              tone: 2,
              meaningId: "Pintu",
              meaningEn: "Door",
              strokes: 3,
              strokeNames: ["点 (Diǎn)", "竖 (Shù)", "横折钩 (Héngzhégōu)"],
              radical: "门 (Mén)",
              exampleHanzi: "请开门。",
              examplePinyin: "Qǐng kāimén.",
              exampleTranslation: "Tolong buka pintu.",
              image: "assets/textbook/book_2/img_7.jpg",
              iconEmoji: "🚪"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Han Yu 3 (汉语 第三册)",
      level: "Tingkat Dasar 3",
      dinoRank: "Stegosaurus Tangguh",
      badge: "🦕 Pelat Fosil Stego",
      themeColor: "#0D9488",
      description: "Empat musim, hobi dan kegemaran, berbelanja di supermarket, dan dunia hewan.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 四季歌 (Lagu Empat Musim)",
          theme: "Musim & Cuaca",
          dialogue: {
            speakerA: "A: 一年有几个季节？(Yī nián yǒu jǐ gè jìjié? - Setahun ada berapa musim?)",
            speakerB: "B: 一年有春、夏、秋、冬四个季节。(Yī nián yǒu chūn, xià, qiū, dōng sì gè jìjié. - Setahun ada 4 musim: semi, panas, gugur, dingin.)",
            speakerA2: "A: 你最喜欢哪个季节？(Nǐ zuì xǐhuan nǎge jìjié? - Kamu paling suka musim apa?)",
            speakerB2: "B: 我最喜欢春天，花儿都开了。(Wǒ zuì xǐhuan chūntiān, huār dōu kāi le. - Aku paling suka musim semi, bunga-bunga bermekaran.)"
          },
          readingPassage: "春暖花开，夏日炎炎，秋高气爽，冬雪纷飞。四季变换，大自然真美丽！",
          readingPinyin: "Chūn nuǎn huā kāi, xià rì yányán, qiū gāo qì shuǎng, dōng xuě fēnfēi. Sìjì biànhuàn, dàzìrán zhēn měilì!",
          readingTranslation: "Musim semi hangat bunga mekar, musim panas cerah terik, musim gugur sejuk nyaman, musim dingin salju turun. Empat musim berganti, alam sangat indah!",
          vocab: [
            {
              hanzi: "春天",
              pinyin: "chūntiān",
              tone: 11,
              meaningId: "Musim Semi",
              meaningEn: "Spring",
              strokes: 13,
              strokeNames: ["春: 9画", "天: 4画"],
              radical: "日 (Rì)",
              exampleHanzi: "春天来了，草绿了。",
              examplePinyin: "Chūntiān lái le, cǎo lǜ le.",
              exampleTranslation: "Musim semi telah tiba, rumput menghijau.",
              image: "assets/textbook/book_3/img_1.jpg",
              iconEmoji: "🌸"
            },
            {
              hanzi: "夏天",
              pinyin: "xiàtiān",
              tone: 41,
              meaningId: "Musim Panas",
              meaningEn: "Summer",
              strokes: 14,
              strokeNames: ["夏: 10画", "天: 4画"],
              radical: "夂 (Zhǐ)",
              exampleHanzi: "夏天可以去海边游泳。",
              examplePinyin: "Xiàtiān kěyǐ qù hǎibiān yóuyǒng.",
              exampleTranslation: "Musim panas bisa pergi berenang ke pantai.",
              image: "assets/textbook/book_3/img_2.jpg",
              iconEmoji: "☀️"
            },
            {
              hanzi: "秋天",
              pinyin: "qiūtiān",
              tone: 11,
              meaningId: "Musim Gugur",
              meaningEn: "Autumn / Fall",
              strokes: 13,
              strokeNames: ["秋: 禾, 火, 9画", "天: 4画"],
              radical: "禾 (Hé)",
              exampleHanzi: "秋天树叶变黄了。",
              examplePinyin: "Qiūtiān shùyè biàn huáng le.",
              exampleTranslation: "Di musim gugur daun pohon menguning.",
              image: "assets/textbook/book_3/img_3.jpg",
              iconEmoji: "🍁"
            },
            {
              hanzi: "冬天",
              pinyin: "dōngtiān",
              tone: 11,
              meaningId: "Musim Dingin",
              meaningEn: "Winter",
              strokes: 9,
              strokeNames: ["冬: 5画", "天: 4画"],
              radical: "夂 (Zhǐ)",
              exampleHanzi: "冬天会下雪。",
              examplePinyin: "Dōngtiān huì xiàxuě.",
              exampleTranslation: "Musim dingin akan turun salju.",
              image: "assets/textbook/book_3/img_4.jpg",
              iconEmoji: "❄️"
            }
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: 我的爱好 (Hobi Saya)",
          theme: "Aktivitas & Kegemaran",
          dialogue: {
            speakerA: "A: 你的爱好是什么？(Nǐ de àihào shì shénme? - Apa hobimu?)",
            speakerB: "B: 我喜欢踢足球和画画。(Wǒ xǐhuan tī zúqiú hé huàhuà. - Aku suka main sepak bola dan menggambar.)",
            speakerA2: "A: 你妹妹呢？(Nǐ mèimei ne? - Bagaimana dengan adikmu?)",
            speakerB2: "B: 她喜欢唱歌和弹钢琴。(Tā xǐhuan chànggē hé tán gāngqín. - Dia suka menyanyi dan main piano.)"
          },
          readingPassage: "每个同学都有自己的爱好。有人爱运动，有人爱音乐。健康的爱好让我们快乐成长！",
          readingPinyin: "Měi gè tóngxué dōu yǒu zìjǐ de àihào. Yǒu rén ài yùndòng, yǒu rén ài yīnyuè. Jiànkāng de àihào ràng wǒmen kuàilè chéngzhǎng!",
          readingTranslation: "Setiap murid punya hobi masing-masing. Ada yang suka olahraga, ada yang suka musik. Hobi yang sehat membuat kita tumbuh gembira!",
          vocab: [
            {
              hanzi: "唱歌",
              pinyin: "chànggē",
              tone: 41,
              meaningId: "Menyanyi",
              meaningEn: "Sing",
              strokes: 25,
              strokeNames: ["唱 (11画)", "歌 (14画)"],
              radical: "口 / 欠",
              exampleHanzi: "我们一起唱中文歌。",
              examplePinyin: "Wǒmen yìqǐ chàng zhōngwén gē.",
              exampleTranslation: "Kita bersama menyanyikan lagu Mandarin.",
              image: "assets/textbook/book_3/img_5.jpg",
              iconEmoji: "🎤"
            },
            {
              hanzi: "画画",
              pinyin: "huàhuà",
              tone: 44,
              meaningId: "Menggambar / Melukis",
              meaningEn: "Draw / Paint",
              strokes: 16,
              strokeNames: ["画: 8画 (一, 竖, 横折, 横, 竖, 横折, 横, 竖)"],
              radical: "田 (Tián)",
              exampleHanzi: "他画了一只恐龙。",
              examplePinyin: "Tā huà le yī zhī kǒnglóng.",
              exampleTranslation: "Dia menggambar seekor dinosaurus.",
              image: "assets/textbook/book_3/img_6.jpg",
              iconEmoji: "🎨"
            },
            {
              hanzi: "踢足球",
              pinyin: "tī zúqiú",
              tone: 122,
              meaningId: "Bermain Sepak Bola",
              meaningEn: "Play Soccer",
              strokes: 33,
              strokeNames: ["踢 (15画)", "足 (7画)", "球 (11画)"],
              radical: "足 / 王",
              exampleHanzi: "下午我们在操场踢足球。",
              examplePinyin: "Xiàwǔ wǒmen zài cāochǎng tī zúqiú.",
              exampleTranslation: "Sore hari kami bermain sepak bola di lapangan.",
              image: "assets/textbook/book_3/img_7.jpg",
              iconEmoji: "⚽"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Han Yu 4 (汉语 第四册)",
      level: "Tingkat Menengah 1",
      dinoRank: "Brachiosaurus Cerdas",
      badge: "🌿 Fosil Jejak Raksasa",
      themeColor: "#2563EB",
      description: "Aktivitas perpustakaan, transportasi modern, hemat energi, dan cerita peribahasa.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 去图书馆 (Pergi ke Perpustakaan)",
          theme: "Perpustakaan & Membaca",
          dialogue: {
            speakerA: "A: 图书馆里有很多书吗？(Túshūguǎn lǐ yǒu hěn duō shū ma? - Di perpustakaan ada banyak buku?)",
            speakerB: "B: 有童话书、科学书和恐龙百科。(Yǒu tónghuà shū, kēxué shū hé kǒnglóng bǎikē. - Ada buku dongeng, buku sains, dan ensiklopedia dinosaurus.)",
            speakerA2: "A: 在图书馆要保持安静。(Zài túshūguǎn yào bǎochí ānjìng. - Di perpustakaan harus menjaga ketenangan.)",
            speakerB2: "B: 对，不能大声说话。(Duì, bù néng dàshēng shuōhuà. - Benar, tidak boleh bicara keras-keras.)"
          },
          readingPassage: "学校的图书馆又大又安静。我们在里面认真阅读，学到了很多新知识。",
          readingPinyin: "Xuéxiào de túshūguǎn yòu dà yòu ānjìng. Wǒmen zài lǐmiàn rènzhēn yuèdú, xué dào le hěn duō xīn zhīshi.",
          readingTranslation: "Perpustakaan sekolah besar dan tenang. Kami di dalamnya membaca dengan tekun, mempelajari banyak ilmu pengetahuan baru.",
          vocab: [
            {
              hanzi: "图书馆",
              pinyin: "túshūguǎn",
              tone: 213,
              meaningId: "Perpustakaan",
              meaningEn: "Library",
              strokes: 26,
              strokeNames: ["图 (8画)", "书 (4画)", "馆 (14画)"],
              radical: "囗 / 饣",
              exampleHanzi: "我们去图书馆借书。",
              examplePinyin: "Wǒmen qù túshūguǎn jièshū.",
              exampleTranslation: "Kami pergi ke perpustakaan meminjam buku.",
              image: "assets/textbook/book_4/img_1.jpg",
              iconEmoji: "🏛️"
            },
            {
              hanzi: "安静",
              pinyin: "ānjìng",
              tone: 14,
              meaningId: "Tenang / Sunyi / Hening",
              meaningEn: "Quiet",
              strokes: 20,
              strokeNames: ["安 (6画)", "静 (14画)"],
              radical: "宀 / 青",
              exampleHanzi: "请大家保持安静。",
              examplePinyin: "Qǐng dàjiā bǎochí ānjìng.",
              exampleTranslation: "Harap semua menjaga ketenangan.",
              image: "assets/textbook/book_4/img_2.jpg",
              iconEmoji: "🤫"
            },
            {
              hanzi: "借书",
              pinyin: "jièshū",
              tone: 41,
              meaningId: "Meminjam Buku",
              meaningEn: "Borrow Books",
              strokes: 14,
              strokeNames: ["借 (10画)", "书 (4画)"],
              radical: "亻(Rén)",
              exampleHanzi: "我想借一本故事书。",
              examplePinyin: "Wǒ xiǎng jiè yī běn gùshishū.",
              exampleTranslation: "Saya ingin meminjam sebuah buku cerita.",
              image: "assets/textbook/book_4/img_3.jpg",
              iconEmoji: "📚"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Han Yu 5 (汉语 第五册)",
      level: "Tingkat Menengah 2",
      dinoRank: "Pterodactyl Penjelajah",
      badge: "🦅 Sayap Fosil Ptero",
      themeColor: "#7C3AED",
      description: "Pemandangan alam Guilin, Jalur Sutra, cerita kearifan Sima Guang, dan empat penemuan besar.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 桂林山水 (Pemandangan Alam Guilin)",
          theme: "Geografi & Alam",
          dialogue: {
            speakerA: "A: 桂林山水甲天下。(Guìlín shānshuǐ jiǎ tiānxià. - Pemandangan alam Guilin terindah di dunia.)",
            speakerB: "B: 漓江的水真清啊！(Líjiāng de shuǐ zhēn qīng a! - Air Sungai Li sangat jernih!)"
          },
          readingPassage: "桂林的山奇峰罗列，漓江的水清澈见底。乘竹筏顺流而下，宛如走进一幅美丽的画卷。",
          readingPinyin: "Guìlín de shān qífēng luóliè, Líjiāng de shuǐ qīngchè jiàn dǐ. Chéng zhúfá shùnliú ér xià, wǎnrú zǒujìn yī fú měilì de huàjuàn.",
          readingTranslation: "Gunung-gunung di Guilin berjejer megah, air Sungai Li jernih hingga ke dasar. Naik rakit bambu menyusuri sungai, seperti melangkah ke dalam lukisan indah.",
          vocab: [
            {
              hanzi: "山水",
              pinyin: "shānshuǐ",
              tone: 13,
              meaningId: "Pemandangan Alam / Gunung dan Air",
              meaningEn: "Landscape / Scenery",
              strokes: 7,
              strokeNames: ["山 (3画)", "水 (4画)"],
              radical: "山 / 水",
              exampleHanzi: "桂林山水非常美丽。",
              examplePinyin: "Guìlín shānshuǐ fēicháng měilì.",
              exampleTranslation: "Pemandangan Guilin sangat indah.",
              image: "assets/textbook/book_5/img_1.jpg",
              iconEmoji: "🏞️"
            },
            {
              hanzi: "清澈",
              pinyin: "qīngchè",
              tone: 14,
              meaningId: "Jernih / Bening",
              meaningEn: "Clear / Limpid",
              strokes: 26,
              strokeNames: ["清 (11画)", "澈 (15画)"],
              radical: "氵(Shuǐ)",
              exampleHanzi: "湖水清澈见底。",
              examplePinyin: "Húshuǐ qīngchè jiàn dǐ.",
              exampleTranslation: "Air danau jernih hingga tampak dasarnya.",
              image: "assets/textbook/book_5/img_2.jpg",
              iconEmoji: "💎"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Han Yu 6 (汉语 第六册)",
      level: "Tingkat Menengah 3",
      dinoRank: "Ankylosaurus Baja",
      badge: "🛡️ Perisai Fosil Purba",
      themeColor: "#DB2777",
      description: "Tembok Raksasa Cina, fabel klasik Hanzi, penjelajahan luar angkasa, dan era internet.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 万里长城 (Tembok Raksasa Wan Li Chang Cheng)",
          theme: "Sejarah & Keajaiban Dunia",
          dialogue: {
            speakerA: "A: 你去过长城吗？(Nǐ qùguo Chángchéng ma? - Pernahkah kamu ke Tembok Raksasa?)",
            speakerB: "B: 去过，长城像一条巨龙蜿蜒在山脊上。(Qùguo, Chángchéng xiàng yī tiáo jùlóng wānyán zài shānjǐ shang. - Pernah, Tembok Raksasa menyerupai naga raksasa meliuk di punggung pegunungan.)"
          },
          readingPassage: "万里长城是中华民族智慧与汗水的结晶，也是世界建筑史上的奇迹。",
          readingPinyin: "Wànlǐ Chángchéng shì Zhōnghuá mínzú zhìhuì yǔ hànshuǐ de jiéjīng, yě shì shìjiè jiànzhù shǐ shang de qíjì.",
          readingTranslation: "Tembok Besar Sepuluh Ribu Li adalah kristalisasi kebijaksanaan dan kerja keras bangsa, serta keajaiban dalam sejarah arsitektur dunia.",
          vocab: [
            {
              hanzi: "长城",
              pinyin: "chángchéng",
              tone: 22,
              meaningId: "Tembok Raksasa",
              meaningEn: "Great Wall",
              strokes: 13,
              strokeNames: ["长 (4画)", "城 (9画)"],
              radical: "长 / 土",
              exampleHanzi: "不到长城非好汉。",
              examplePinyin: "Bù dào Chángchéng fēi hǎohàn.",
              exampleTranslation: "Belum mencapai Tembok Besar bukanlah pahlawan sejati.",
              image: "assets/textbook/book_6/img_1.jpg",
              iconEmoji: "🧱"
            },
            {
              hanzi: "奇迹",
              pinyin: "qíjì",
              tone: 24,
              meaningId: "Keajaiban",
              meaningEn: "Miracle / Wonder",
              strokes: 19,
              strokeNames: ["奇 (8画)", "迹 (11画)"],
              radical: "大 / 辶",
              exampleHanzi: "这是人类创造的奇迹。",
              examplePinyin: "Zhè shì rénlèi chuàngzào de qíjì.",
              exampleTranslation: "Ini adalah keajaiban ciptaan umat manusia.",
              image: "assets/textbook/book_6/img_2.jpg",
              iconEmoji: "✨"
            }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Han Yu 7 (汉语 第七册)",
      level: "Tingkat Lanjutan 1",
      dinoRank: "Allosaurus Pemburu",
      badge: "🔍 Kaca Pembesar Paleontolog",
      themeColor: "#EA580C",
      description: "Sungai Yangtze & Kuning, pelayaran Laksamana Cheng Ho, puisi klasik Tang, dan sains modern.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 郑和下西洋 (Pelayaran Cheng Ho ke Samudra Barat)",
          theme: "Sejarah Maritim & Hubungan AntBangsa",
          dialogue: {
            speakerA: "A: 郑和是谁？(Zhèng Hé shì shéi? - Siapakah Cheng Ho?)",
            speakerB: "B: 郑和是伟大的航海家。(Zhèng Hé shì wěidà de hánghǎijiā. - Cheng Ho adalah seorang penjelajah samudra yang agung.)"
          },
          readingPassage: "六百多年前，郑和率领庞大的船队七次远航，开创了海上丝绸之路的和平交流篇章。",
          readingPinyin: "Liùbǎi duō nián qián, Zhèng Hé shuàilǐng pángdà de chuánduì qī cì yuǎnháng, kāichuàng le hǎishang sīchóu zhī lù de hépíng jiāoliú piānzhāng.",
          readingTranslation: "Enam ratus tahun yang lalu, Cheng Ho memimpin armada kapal besar berlayar tujuh kali ke samudra luas, membuka lembaran pertukaran damai Jalur Sutra Maritim.",
          vocab: [
            {
              hanzi: "航海",
              pinyin: "hánghǎi",
              tone: 23,
              meaningId: "Pelayaran Samudra",
              meaningEn: "Navigation / Sailing",
              strokes: 20,
              strokeNames: ["航 (10画)", "海 (10画)"],
              radical: "舟 / 氵",
              exampleHanzi: "勇敢的航海家探索大海。",
              examplePinyin: "Yǒnggǎn de hánghǎijiā tànsuǒ dàhǎi.",
              exampleTranslation: "Pelaut pemberani menjelajahi lautan luas.",
              image: "assets/textbook/book_7/img_1.jpg",
              iconEmoji: "⛵"
            },
            {
              hanzi: "友谊",
              pinyin: "yǒuyì",
              tone: 34,
              meaningId: "Persahabatan",
              meaningEn: "Friendship",
              strokes: 16,
              strokeNames: ["友 (4画)", "谊 (12画)"],
              radical: "又 / 讠",
              exampleHanzi: "珍惜彼此的友谊。",
              examplePinyin: "Zhēnxī bǐcǐ de yǒuyì.",
              exampleTranslation: "Hargailah persahabatan satu sama lain.",
              image: "assets/textbook/book_7/img_2.jpg",
              iconEmoji: "🤝"
            }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Han Yu 8 (汉语 第八册)",
      level: "Tingkat Lanjutan 2",
      dinoRank: "Carnotaurus Cepat",
      badge: "👑 Mahkota Fosil Raja",
      themeColor: "#CA8A04",
      description: "Kota Terlarang (故宫), fabel kegigihan Yu Gong (愚公移山), harmoni manusia dan alam.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 故宫博物院 (Museum Kota Terlarang)",
          theme: "Arsitektur & Budaya Istana",
          dialogue: {
            speakerA: "A: 故宫坐落在哪里？(Gùgōng zuòluò zài nǎlǐ? - Di mana lokasi Kota Terlarang?)",
            speakerB: "B: 故宫位于北京中轴线上。(Gùgōng wèiyú Běijīng zhōngzhóuxiàn shang. - Kota Terlarang terletak di garis poros tengah Beijing.)"
          },
          readingPassage: "紫禁城红墙金瓦，气势恢宏。它保存着数以百万计的珍贵文物，展示了古代艺术的极致辉煌。",
          readingPinyin: "Zǐjìnchéng hóngqiáng jīnwǎ, qìshì huīhóng. Tā bǎocúnzhe shù yǐ bǎiwàn jì de zhēnguì wénwù, zhǎnshì le gǔdài yìshù de jízhì huīhuáng.",
          readingTranslation: "Kota Terlarang dengan dinding merah dan genteng emas berdiri megah. Menyimpan jutaan benda pusaka berharga, menampilkan puncak kejayaan seni kuno.",
          vocab: [
            {
              hanzi: "故宫",
              pinyin: "gùgōng",
              tone: 41,
              meaningId: "Kota Terlarang (Museum Istana)",
              meaningEn: "Forbidden City",
              strokes: 18,
              strokeNames: ["故 (9画)", "宫 (9画)"],
              radical: "攵 / 宀",
              exampleHanzi: "故宫是中国古代皇宫。",
              examplePinyin: "Gùgōng shì Zhōngguó gǔdài huánggōng.",
              exampleTranslation: "Kota Terlarang adalah istana kekaisaran kuno Tiongkok.",
              image: "assets/textbook/book_8/img_1.jpg",
              iconEmoji: "🏯"
            },
            {
              hanzi: "建筑",
              pinyin: "jiànzhù",
              tone: 44,
              meaningId: "Arsitektur / Bangunan",
              meaningEn: "Architecture / Building",
              strokes: 21,
              strokeNames: ["建 (9画)", "筑 (12画)"],
              radical: "廴 / 竹",
              exampleHanzi: "这座建筑很有特色。",
              examplePinyin: "Zhè zuò jiànzhù hěn yǒu tèsè.",
              exampleTranslation: "Bangunan ini memiliki ciri khas yang sangat unik.",
              image: "assets/textbook/book_8/img_2.jpg",
              iconEmoji: "🏛️"
            }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Han Yu 9 (汉语 第九册)",
      level: "Tingkat Mahir 1",
      dinoRank: "Spinosaurus Samudra",
      badge: "🌊 Taring Spinosaurus",
      themeColor: "#0284C7",
      description: "Warisan dunia Gua Mogao Dunhuang, Festival Perahu Naga, dan jembatan modern.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 敦煌莫高窟 (Gua Mogao Dunhuang)",
          theme: "Seni Lukis Dinding & Warisan Dunia",
          dialogue: {
            speakerA: "A: 莫高窟以什么闻名？(Mògāokū yǐ shénme wénmíng? - Dengan apa Gua Mogao terkenal?)",
            speakerB: "B: 莫高窟以精美的壁画和彩塑闻名于世。(Mògāokū yǐ jīngměi de bìhuà hé cǎisù wénmíng yú shì. - Gua Mogao terkenal di dunia dengan lukisan dinding dan patung warnanya yang indah.)"
          },
          readingPassage: "敦煌莫高窟被誉为东方艺术明珠。历经千年风雨，飞天壁画依然姿态生动，色彩斑斓。",
          readingPinyin: "Dūnhuáng Mògāokū bèi yù wéi dōngfāng yìshù míngzhū. Lìjīng qiānnián fēngyǔ, fēitiān bìhuà yīrán zītài shēngdòng, sècǎi bānlán.",
          readingTranslation: "Gua Mogao Dunhuang dijuluki sebagai mutiara seni Timur. Melalui seribu tahun perubahan zaman, lukisan bidadari terbang tetap anggun dan semarak.",
          vocab: [
            {
              hanzi: "壁画",
              pinyin: "bìhuà",
              tone: 44,
              meaningId: "Lukisan Dinding / Mural",
              meaningEn: "Mural / Fresco",
              strokes: 24,
              strokeNames: ["壁 (16画)", "画 (8画)"],
              radical: "土 / 田",
              exampleHanzi: "洞窟里的壁画保存完好。",
              examplePinyin: "Dòngkū lǐ de bìhuà bǎocún wánhǎo.",
              exampleTranslation: "Lukisan dinding di dalam gua terawat dengan baik.",
              image: "assets/textbook/book_9/img_1.jpg",
              iconEmoji: "🎨"
            },
            {
              hanzi: "遗产",
              pinyin: "yíchǎn",
              tone: 23,
              meaningId: "Warisan Budaya / Heritage",
              meaningEn: "Heritage / Legacy",
              strokes: 23,
              strokeNames: ["遗 (12画)", "产 (11画)"],
              radical: "辶 / 立",
              exampleHanzi: "保护全人类的文化遗产。",
              examplePinyin: "Bǎohù quán rénlèi de wénhuà yíchǎn.",
              exampleTranslation: "Melindungi warisan budaya seluruh umat manusia.",
              image: "assets/textbook/book_9/img_2.jpg",
              iconEmoji: "📜"
            }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Han Yu 10 (汉语 第十册)",
      level: "Tingkat Mahir 2",
      dinoRank: "Giganotosaurus Master",
      badge: "🌋 Permata Lahar Purba",
      themeColor: "#9333EA",
      description: "Zaman dinosaurus & geologi bumi, Sun Wukong (Kera Sakti), dan eksplorasi palung laut dalam.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 恐龙时代与地球奥秘 (Zaman Dinosaurus & Misteri Bumi)",
          theme: "Paleontologi & Geologi",
          dialogue: {
            speakerA: "A: 恐龙生活在什么时代？(Kǒnglóng shēnghuó zài shénme shídài? - Kapan dinosaurus hidup?)",
            speakerB: "B: 恐龙统治了中生代地球一亿六千多万年！(Kǒnglóng tǒngzhì le Zhōngshēngdài dìqiú yī yì liùqiān duō wàn nián! - Dinosaurus menguasai bumi era Mesozoikum lebih dari 160 juta tahun!)"
          },
          readingPassage: "科学家通过发掘恐龙化石，还原了史前庞大生物的生活习性与生态演化，揭开了地球生命的壮丽诗篇。",
          readingPinyin: "Kēxuéjiā tōngguò fājué kǒnglóng huàshí, huányuán le shǐqián pángdà shēngwù de shēnghuó xíxìng yǔ shēngtài yǎnhuà, jiēkāi le dìqiú shēngmìng de zhuànglì shīpiān.",
          readingTranslation: "Melalui ekskavasi fosil dinosaurus, para ilmuwan merekonstruksi kebiasaan hidup dan evolusi makhluk purba raksasa, menyingkap babak megah kehidupan di bumi.",
          vocab: [
            {
              hanzi: "恐龙",
              pinyin: "kǒnglóng",
              tone: 32,
              meaningId: "Dinosaurus",
              meaningEn: "Dinosaur",
              strokes: 15,
              strokeNames: ["恐 (10画: 工, 凡, 心)", "龙 (5画: 横, 撇, 竖弯钩, 撇, 点)"],
              radical: "心 / 龙",
              exampleHanzi: "恐龙化石非常珍贵。",
              examplePinyin: "Kǒnglóng huàshí fēicháng zhēnguì.",
              exampleTranslation: "Fosil dinosaurus sangat berharga.",
              image: "assets/dino/rexy.jpg",
              iconEmoji: "🦖"
            },
            {
              hanzi: "化石",
              pinyin: "huàshí",
              tone: 42,
              meaningId: "Fosil",
              meaningEn: "Fossil",
              strokes: 9,
              strokeNames: ["化 (4画: 撇, 竖, 撇, 竖弯钩)", "石 (5画: 横, 撇, 竖, 横折, 横)"],
              radical: "亻 / 石",
              exampleHanzi: "我们在地层中发现了恐龙化石。",
              examplePinyin: "Wǒmen zài dìcéng zhōng fāxiàn le kǒnglóng huàshí.",
              exampleTranslation: "Kami menemukan fosil dinosaurus di lapisan tanah.",
              image: "assets/dino/egg.jpg",
              iconEmoji: "🦴"
            }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "Han Yu 11 (汉语 第十一册)",
      level: "Tingkat Ahli 1",
      dinoRank: "Tyrannosaurus Rex Raja Purba",
      badge: "🌟 Bintang Galaksi Purba",
      themeColor: "#4F46E5",
      description: "Eksplorasi Mars & Bulan, filosofi klasik (Sai Weng Shi Ma), dan seni kaligrafi Tiongkok.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 书法与国画 (Kaligrafi & Seni Lukis Tradisional)",
          theme: "Seni Kaligrafi & Karakter",
          dialogue: {
            speakerA: "A: 什么是文房四宝？(Shénme shì wénfáng sìbǎo? - Apa itu Empat Pusaka Ruang Belajar?)",
            speakerB: "B: 笔、墨、纸、砚被称为文房四宝。(Bǐ, mò, zhǐ, yàn bèi chēng wéi wénfáng sìbǎo. - Kuas, tinta, kertas, dan batu tinta disebut Empat Pusaka Ruang Belajar.)"
          },
          readingPassage: "中国书法融汇了线条之美与心性修养。一点一画，笔走龙蛇，展现了汉字独一无二的艺术魅力。",
          readingPinyin: "Zhōngguó shūfǎ rónghuì le xiàntiáo zhī měi yǔ xīnxìng xiūyǎng. Yī diǎn yī huà, bǐ zǒu lóng shé, zhǎnxiàn le Hànzì dúyīwú'èr de yìshù mèilì.",
          readingTranslation: "Kaligrafi Tiongkok memadukan keindahan garis dan pembinaan budi pekerti. Setiap titik dan goresan bagai naga dan ular meliuk, memancarkan pesona seni karakter Hanzi yang tiada duanya.",
          vocab: [
            {
              hanzi: "书法",
              pinyin: "shūfǎ",
              tone: 13,
              meaningId: "Kaligrafi Seni Menulis Hanzi",
              meaningEn: "Calligraphy",
              strokes: 12,
              strokeNames: ["书 (4画)", "法 (8画)"],
              radical: "乙 / 氵",
              exampleHanzi: "练习书法可以陶冶情操。",
              examplePinyin: "Liànxí shūfǎ kěyǐ táoyě qíngcāo.",
              exampleTranslation: "Berlatih kaligrafi dapat menenangkan dan memuliakan jiwa.",
              image: "assets/textbook/book_11/img_1.jpg",
              iconEmoji: "🖌️"
            },
            {
              hanzi: "墨水",
              pinyin: "mòshuǐ",
              tone: 43,
              meaningId: "Tinta Hitam",
              meaningEn: "Ink",
              strokes: 19,
              strokeNames: ["墨: 黑, 土, 15画", "水: 4画"],
              radical: "土 / 水",
              exampleHanzi: "用毛笔蘸上墨水写字。",
              examplePinyin: "Yòng máobǐ zhàn shang mòshuǐ xiězì.",
              exampleTranslation: "Mencelupkan kuas ke dalam tinta untuk menulis.",
              image: "assets/textbook/book_11/img_2.jpg",
              iconEmoji: "🖋️"
            }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "Han Yu 12 (汉语 第十二册)",
      level: "Tingkat Ahli 2 (Tingkat Tertinggi)",
      dinoRank: "Grand Master Paleontologi Jurassic",
      badge: "🏆 Trofi Emas Sang Juara",
      themeColor: "#BE123C",
      description: "Karya sastra klasik, kelestarian iklim bumi, pertukaran budaya global, dan pesan kelulusan.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 扬帆起航·展望未来 (Membentang Layar Menatap Masa Depan)",
          theme: "Kelulusan & Masa Depan",
          dialogue: {
            speakerA: "A: 祝贺你完成了十二册汉语学习！(Zhùhè nǐ wánchéng le shí'èr cè Hànyǔ xuéxí! - Selamat kamu telah menuntaskan pembelajaran 12 buku Han Yu!)",
            speakerB: "B: 掌握汉语让我看懂了更广阔的世界！(Zhǎngwò Hànyǔ ràng wǒ kàndǒng le gèng guǎngkuò de shìjiè! - Menguasai bahasa Mandarin membuatku memahami dunia yang jauh lebih luas!)"
          },
          readingPassage: "学无止境，勇往直前。十二册汉语学习不仅让我们掌握了一门语言，更搭建起沟通世界与探索知识的桥梁！",
          readingPinyin: "Xué wú zhǐjìng, yǒngwǎng zhíqián. Shí'èr cè Hànyǔ xuéxí bùjǐn ràng wǒmen zhǎngwò le yī mén yǔyán, gèng dājiàn qǐ gōutōng shìjiè yǔ tànsuǒ zhīshi de qiáoliáng!",
          readingTranslation: "Belajar tiada batas, melangkahlah maju dengan berani. Belajar 12 buku Han Yu tak hanya membekali kita dengan kemampuan bahasa, tetapi juga membangun jembatan untuk berkomunikasi dengan dunia dan menjelajahi ilmu!",
          vocab: [
            {
              hanzi: "理想",
              pinyin: "lǐxiǎng",
              tone: 33,
              meaningId: "Cita-cita / Impian Mulia",
              meaningEn: "Ideal / Dream",
              strokes: 24,
              strokeNames: ["理 (11画)", "想 (13画)"],
              radical: "王 / 心",
              exampleHanzi: "为了理想而努力奋斗。",
              examplePinyin: "Wèile lǐxiǎng ér nǔlì fèndòu.",
              exampleTranslation: "Berjuang giat demi meraih cita-cita.",
              image: "assets/textbook/book_12/img_1.jpg",
              iconEmoji: "🎯"
            },
            {
              hanzi: "未来",
              pinyin: "wèilái",
              tone: 42,
              meaningId: "Masa Depan",
              meaningEn: "Future",
              strokes: 12,
              strokeNames: ["未 (5画: 一, 横, 竖, 撇, 捺)", "来 (7画: 横, 点, 撇, 横, 竖, 撇, 捺)"],
              radical: "木 / 木",
              exampleHanzi: "创造美好的未来。",
              examplePinyin: "Chuàngzào měihǎo de wèilái.",
              exampleTranslation: "Menciptakan masa depan yang gilang-gemilang.",
              image: "assets/textbook/book_12/img_2.jpg",
              iconEmoji: "🚀"
            }
          ]
        }
      ]
    }
  ]
};

// Global helper to get book by id
function getBookById(id) {
  return HANYU_DATA.books.find(b => b.id === Number(id)) || HANYU_DATA.books[0];
}

// Global helper to get unit
function getUnit(bookId, unitNumber) {
  const book = getBookById(bookId);
  return book.units.find(u => u.unitNumber === Number(unitNumber)) || book.units[0];
}

if (typeof globalThis !== 'undefined') {
  globalThis.HANYU_DATA = HANYU_DATA;
  globalThis.getBookById = getBookById;
  globalThis.getUnit = getUnit;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HANYU_DATA, getBookById, getUnit };
}
